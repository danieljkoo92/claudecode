'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import StatBar        from '@/components/StatBar'
import ArbitrageCard  from '@/components/ArbitrageCard'
import Settings       from '@/components/Settings'

const REFRESH_INTERVAL = 10 // seconds

export default function Dashboard() {
  const [opportunities, setOpportunities] = useState([])
  const [newIds,        setNewIds]         = useState(new Set())
  const [loading,       setLoading]        = useState(true)
  const [error,         setError]          = useState(null)
  const [lastUpdated,   setLastUpdated]    = useState(null)
  const [refreshIn,     setRefreshIn]      = useState(REFRESH_INTERVAL)
  const [live,          setLive]           = useState(true)
  const [minPct,        setMinPct]         = useState(3)
  const [sortBy,        setSortBy]         = useState('profit') // profit | time

  const prevIds   = useRef(new Set())
  const timerRef  = useRef(null)
  const countRef  = useRef(REFRESH_INTERVAL)

  const fetchData = useCallback(async () => {
    try {
      const res  = await fetch(`/api/arbitrage?minPct=${minPct}`)
      const json = await res.json()

      if (!json.ok) throw new Error(json.error ?? 'API error')

      const incoming     = json.data
      const incomingIds  = new Set(incoming.map((o) => o.id))
      const fresh        = new Set([...incomingIds].filter((id) => !prevIds.current.has(id)))

      prevIds.current = incomingIds
      setNewIds(fresh)
      setOpportunities(incoming)
      setLastUpdated(json.ts)
      setError(null)

      // Clear "new" highlight after 5 s
      if (fresh.size > 0) {
        setTimeout(() => setNewIds(new Set()), 5000)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [minPct])

  // Countdown ticker
  useEffect(() => {
    if (!live) return
    countRef.current = REFRESH_INTERVAL
    setRefreshIn(REFRESH_INTERVAL)

    const tick = setInterval(() => {
      countRef.current -= 1
      setRefreshIn(countRef.current)
      if (countRef.current <= 0) {
        countRef.current = REFRESH_INTERVAL
        setRefreshIn(REFRESH_INTERVAL)
        fetchData()
      }
    }, 1000)

    timerRef.current = tick
    return () => clearInterval(tick)
  }, [live, fetchData])

  // Initial load & re-fetch when minPct changes
  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [fetchData])

  const sorted = [...opportunities].sort((a, b) =>
    sortBy === 'profit'
      ? b.profitPct - a.profitPct
      : new Date(b.updatedAt) - new Date(a.updatedAt)
  )

  const topProfit = opportunities.length > 0 ? Math.max(...opportunities.map((o) => o.profitPct)) : null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-brand-900/90 backdrop-blur border-b border-brand-700 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              ⚡ Arb&nbsp;<span className="text-indigo-400">Dashboard</span>
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">ODDPool · Prediction Markets</p>
          </div>

          {/* Sort control */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 hidden sm:inline">Sort:</span>
            {['profit', 'time'].map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  sortBy === s
                    ? 'bg-indigo-600 text-white'
                    : 'bg-brand-700 text-gray-400 hover:text-white'
                }`}
              >
                {s === 'profit' ? '% Profit' : 'Newest'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-6">
        <StatBar
          count={opportunities.length}
          topProfit={topProfit}
          lastUpdated={lastUpdated}
          refreshIn={live ? refreshIn : '—'}
          live={live}
        />

        <Settings
          minPct={minPct}
          onMinPctChange={(v) => { setMinPct(v); setLoading(true) }}
          live={live}
          onLiveToggle={() => setLive((l) => !l)}
        />

        {/* Error banner */}
        {error && (
          <div className="mb-4 p-4 rounded-xl bg-red-900/40 border border-red-700 text-sm text-red-300">
            <strong>Error:</strong> {error}
            {error.includes('not configured') && (
              <p className="mt-1 text-xs text-red-400">
                Add <code className="bg-red-800/50 px-1 rounded">ODDPOOL_API_KEY</code> to{' '}
                <code className="bg-red-800/50 px-1 rounded">.env.local</code> and restart the dev server.
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {loading && opportunities.length === 0 ? (
          <LoadingSkeleton />
        ) : sorted.length === 0 ? (
          <EmptyState minPct={minPct} />
        ) : (
          <div className="space-y-3">
            {sorted.map((opp) => (
              <ArbitrageCard key={opp.id} opp={opp} isNew={newIds.has(opp.id)} />
            ))}
          </div>
        )}
      </main>

      <footer className="text-center text-xs text-gray-600 py-4">
        Data from ODDPool API · Prediction markets only · Not financial advice
      </footer>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card animate-pulse h-28 bg-brand-700/60" />
      ))}
    </div>
  )
}

function EmptyState({ minPct }) {
  return (
    <div className="text-center py-20 text-gray-500">
      <p className="text-5xl mb-4">🔍</p>
      <p className="text-lg font-medium text-gray-400">No opportunities above {minPct.toFixed(1)}%</p>
      <p className="text-sm mt-1">Lower the minimum profit or wait for the next refresh.</p>
    </div>
  )
}
