'use client'

import { useState } from 'react'

const SPORT_EMOJI = {
  basketball:  '🏀',
  soccer:      '⚽',
  football:    '🏈',
  baseball:    '⚾',
  hockey:      '🏒',
  tennis:      '🎾',
  prediction:  '📊',
  politics:    '🗳️',
  crypto:      '₿',
  esports:     '🎮',
  default:     '🎯',
}

function sportEmoji(sport) {
  const s = (sport ?? '').toLowerCase()
  for (const [k, v] of Object.entries(SPORT_EMOJI)) {
    if (s.includes(k)) return v
  }
  return SPORT_EMOJI.default
}

function profitColor(pct) {
  if (pct >= 8)  return 'text-emerald-300 bg-emerald-900/40 border-emerald-700'
  if (pct >= 5)  return 'text-green-400 bg-green-900/40 border-green-700'
  return 'text-lime-400 bg-lime-900/30 border-lime-700'
}

export default function ArbitrageCard({ opp, isNew }) {
  const [expanded, setExpanded] = useState(false)
  const color = profitColor(opp.profitPct)

  return (
    <div
      className={`card border transition-all duration-300 cursor-pointer hover:border-indigo-500/50 ${
        isNew ? 'animate-fade-in ring-1 ring-indigo-500/30' : ''
      }`}
      onClick={() => setExpanded((e) => !e)}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">{sportEmoji(opp.sport)}</span>
            <span className="text-xs text-gray-400 uppercase tracking-wide truncate">
              {opp.sport}{opp.league ? ` · ${opp.league}` : ''}
            </span>
          </div>
          <p className="font-semibold text-sm sm:text-base leading-snug line-clamp-2">{opp.event}</p>
          {opp.date && (
            <p className="text-xs text-gray-500 mt-1">
              {new Date(opp.date).toLocaleString(undefined, {
                month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
              })}
            </p>
          )}
        </div>

        {/* Profit badge */}
        <div className={`badge border text-base sm:text-lg font-bold px-3 py-1 shrink-0 ${color}`}>
          +{opp.profitPct.toFixed(2)}%
        </div>
      </div>

      {/* Leg summary (always visible) */}
      <div className="mt-3 flex flex-wrap gap-2">
        {opp.legs.map((leg, i) => (
          <span key={i} className="badge bg-brand-700 text-gray-300 border border-brand-600 text-xs">
            {leg.bookmaker} · {leg.side} · {formatOdds(leg.odds)}
          </span>
        ))}
        {opp.totalStake != null && (
          <span className="badge bg-brand-700 text-gray-400 border border-brand-600 text-xs">
            Stake ${Number(opp.totalStake).toFixed(2)}
          </span>
        )}
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="mt-4 border-t border-brand-600 pt-4 space-y-3 animate-fade-in">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Bet breakdown</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="text-gray-500 border-b border-brand-600">
                  <th className="pb-2 pr-4">Venue</th>
                  <th className="pb-2 pr-4">Side</th>
                  <th className="pb-2 pr-4">Odds</th>
                  <th className="pb-2">Stake</th>
                </tr>
              </thead>
              <tbody>
                {opp.legs.map((leg, i) => (
                  <tr key={i} className="border-b border-brand-700 last:border-0">
                    <td className="py-2 pr-4 font-medium text-gray-200">{leg.bookmaker}</td>
                    <td className="py-2 pr-4 text-indigo-300">{leg.side}</td>
                    <td className="py-2 pr-4 text-green-300">{formatOdds(leg.odds)}</td>
                    <td className="py-2 text-gray-300">
                      {leg.stake != null ? `$${Number(leg.stake).toFixed(2)}` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Last updated: {new Date(opp.updatedAt).toLocaleTimeString()}
          </p>
        </div>
      )}

      {/* Chevron hint */}
      <div className="mt-2 text-right">
        <span className="text-gray-600 text-xs">{expanded ? '▲ collapse' : '▼ details'}</span>
      </div>
    </div>
  )
}

function formatOdds(odds) {
  if (odds == null) return '—'
  const n = Number(odds)
  if (n > 1 && n < 2) return `${(n * 100).toFixed(0)}¢`
  return n.toFixed(3)
}
