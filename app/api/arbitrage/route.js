import { NextResponse } from 'next/server'
import { fetchArbitrageOpportunities } from '@/lib/oddpool'
import { sendTelegramAlert } from '@/lib/telegram'

// Simple in-memory dedup so we don't re-alert the same opportunity
const alerted = new Set()

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const minPct  = parseFloat(searchParams.get('minPct') ?? '3')
  const doAlert = searchParams.get('alert') !== 'false'

  try {
    const opportunities = await fetchArbitrageOpportunities(minPct)

    // Fire-and-forget Telegram alerts for new opportunities
    if (doAlert) {
      for (const opp of opportunities) {
        if (!alerted.has(opp.id)) {
          alerted.add(opp.id)
          sendTelegramAlert(opp).catch(() => {}) // non-blocking
        }
      }
      // Prune old IDs to avoid unbounded growth
      if (alerted.size > 5000) {
        const arr = [...alerted]
        arr.slice(0, arr.length - 2500).forEach((id) => alerted.delete(id))
      }
    }

    return NextResponse.json({
      ok:   true,
      ts:   new Date().toISOString(),
      data: opportunities,
    })
  } catch (err) {
    console.error('[arbitrage]', err)
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: err.message.includes('not configured') ? 503 : 502 }
    )
  }
}
