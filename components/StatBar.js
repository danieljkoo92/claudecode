'use client'

export default function StatBar({ count, topProfit, lastUpdated, refreshIn, live }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <Stat label="Opportunities" value={count} />
      <Stat label="Best Profit" value={topProfit != null ? `${topProfit.toFixed(2)}%` : '—'} highlight />
      <Stat label="Refresh In" value={`${refreshIn}s`} />
      <div className="card flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${live ? 'bg-green-400 animate-pulse-fast' : 'bg-gray-500'}`} />
        <span className="text-xs text-gray-400">
          {live ? 'Live' : 'Paused'}&nbsp;·&nbsp;
          {lastUpdated ? new Date(lastUpdated).toLocaleTimeString() : '—'}
        </span>
      </div>
    </div>
  )
}

function Stat({ label, value, highlight }) {
  return (
    <div className="card">
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-xl font-bold ${highlight ? 'text-green-400' : 'text-white'}`}>{value}</p>
    </div>
  )
}
