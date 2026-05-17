import { NextResponse } from 'next/server'

// Test endpoint — sends a test message to the configured Telegram chat
export async function POST() {
  const token  = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, error: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set in .env.local' },
      { status: 503 }
    )
  }

  const res  = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id:    chatId,
      text:       '✅ *Arbitrage Dashboard* — Telegram alerts are working!',
      parse_mode: 'Markdown',
    }),
  })
  const json = await res.json()
  return NextResponse.json({ ok: json.ok, raw: json })
}
