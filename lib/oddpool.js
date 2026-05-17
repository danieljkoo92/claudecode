const BASE_URL = 'https://api.oddpool.com'

export async function fetchArbitrageOpportunities(minProfitPct = 3.0) {
  const apiKey = process.env.ODDPOOL_API_KEY
  if (!apiKey) throw new Error('ODDPOOL_API_KEY is not configured')

  // Convert profit % to cents (ODDPool uses min_net_cents as a filter)
  // We fetch all and filter server-side so we can also expose the raw margin
  const res = await fetch(`${BASE_URL}/arbitrage/current?min_net_cents=0`, {
    headers: { 'X-API-Key': apiKey },
    next: { revalidate: 0 },
  })

  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText)
    throw new Error(`ODDPool API error ${res.status}: ${text}`)
  }

  const data = await res.json()

  // Normalise to a consistent shape regardless of minor API version diffs
  const opportunities = (Array.isArray(data) ? data : data.opportunities ?? data.data ?? [])
    .map(normalise)
    .filter((o) => o.profitPct >= minProfitPct)
    .sort((a, b) => b.profitPct - a.profitPct)

  return opportunities
}

function normalise(raw) {
  // Handles slight variations in field naming the API may return
  const profitPct =
    raw.profit_margin_pct ??
    raw.profitMarginPct ??
    raw.profitPct ??
    (raw.profit_margin != null ? raw.profit_margin * 100 : null) ??
    0

  return {
    id:          raw.id ?? raw.eventId ?? String(Math.random()),
    event:       raw.event ?? raw.title ?? 'Unknown event',
    sport:       raw.sport ?? raw.category ?? 'prediction',
    league:      raw.league ?? raw.market ?? '',
    date:        raw.date ?? raw.closeTime ?? raw.updatedAt ?? null,
    profitPct:   parseFloat(profitPct.toFixed(3)),
    totalStake:  raw.totalStake ?? raw.total_stake ?? null,
    legs:        (raw.legs ?? raw.bets ?? []).map((l) => ({
      bookmaker: l.bookmaker ?? l.venue ?? l.exchange,
      side:      l.side ?? l.outcome,
      odds:      l.odds ?? l.price,
      stake:     l.stake ?? l.optimalStake ?? null,
    })),
    updatedAt:   raw.updatedAt ?? raw.updated_at ?? new Date().toISOString(),
  }
}
