'use client'

import { useState } from 'react'

export default function Settings({ minPct, onMinPctChange, live, onLiveToggle }) {
  const [testingTg, setTestingTg] = useState(false)
  const [tgResult,  setTgResult]  = useState(null)

  async function testTelegram() {
    setTestingTg(true)
    setTgResult(null)
    try {
      const res  = await fetch('/api/telegram', { method: 'POST' })
      const json = await res.json()
      setTgResult(json.ok ? '✅ Sent!' : `❌ ${json.error ?? 'Failed'}`)
    } catch (e) {
      setTgResult('❌ Network error')
    } finally {
      setTestingTg(false)
    }
  }

  return (
    <div className="card mb-6 space-y-4">
      <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Settings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Min profit filter */}
        <div>
          <label className="block text-xs text-gray-400 mb-1.5">Min profit (%)</label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="1" max="20" step="0.5"
              value={minPct}
              onChange={(e) => onMinPctChange(parseFloat(e.target.value))}
              className="flex-1 accent-indigo-500"
            />
            <span className="text-sm font-mono text-indigo-300 w-12 text-right">
              {minPct.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Live toggle */}
        <div className="flex flex-col justify-end">
          <label className="block text-xs text-gray-400 mb-1.5">Auto-refresh (10s)</label>
          <button
            onClick={onLiveToggle}
            className={`btn w-full justify-center ${live ? 'bg-green-700 hover:bg-green-600' : 'btn-ghost'}`}
          >
            {live ? '⏸ Pause' : '▶ Resume'}
          </button>
        </div>

        {/* Telegram test */}
        <div className="flex flex-col justify-end">
          <label className="block text-xs text-gray-400 mb-1.5">Telegram alerts</label>
          <button
            onClick={testTelegram}
            disabled={testingTg}
            className="btn-ghost w-full justify-center"
          >
            {testingTg ? '…' : '📨 Test alert'}
          </button>
          {tgResult && (
            <p className="text-xs mt-1.5 text-center text-gray-400">{tgResult}</p>
          )}
        </div>
      </div>
    </div>
  )
}
