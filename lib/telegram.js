const TG_API = 'https://api.telegram.org'

export async function sendTelegramAlert(opportunity) {
  const token  = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('Telegram not configured — skipping alert')
    return { sent: false, reason: 'not_configured' }
  }

  const legs = opportunity.legs
    .map((l) => `  • ${l.bookmaker} — ${l.side} @ ${l.odds}`)
    .join('\n')

  const text =
    `🔔 *Arbitrage Alert — ${opportunity.profitPct.toFixed(2)}% profit*\n\n` +
    `📌 *${escapeMarkdown(opportunity.event)}*\n` +
    `🏷 ${escapeMarkdown(opportunity.sport)}${opportunity.league ? ` / ${escapeMarkdown(opportunity.league)}` : ''}\n\n` +
    `*Legs:*\n${escapeMarkdown(legs)}\n\n` +
    `💰 Total stake: ${opportunity.totalStake != null ? `$${opportunity.totalStake}` : 'N/A'}\n` +
    `🕐 _Updated: ${new Date(opportunity.updatedAt).toUTCString()}_`

  const res = await fetch(`${TG_API}/bot${token}/sendMessage`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id:    chatId,
      text,
      parse_mode: 'Markdown',
    }),
  })

  const json = await res.json()
  return { sent: json.ok, raw: json }
}

function escapeMarkdown(str) {
  return String(str ?? '').replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&')
}
