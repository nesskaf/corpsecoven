'use client'

import { useEffect, useState } from 'react'
import { Users, Zap, TrendingUp } from 'lucide-react'

interface ServerStats {
  online: boolean
  playerCount: number
  maxPlayers: number
  tps: number | null
  uptime: string | null
}

export function LiveStats() {
  const [stats, setStats] = useState<ServerStats>({
    online: false,
    playerCount: 0,
    maxPlayers: 20,
    tps: null,
    uptime: null,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch from stats API
        const planResponse = await fetch('/api/stats/plan')
        const planData = await planResponse.json()

        console.log('Stats API response:', planData)

        if (!planResponse.ok) {
          console.warn('Stats API returned non-200 status:', planResponse.status)
        }

        setStats({
          online: planData?.online ?? false,
          playerCount: planData?.playerCount ?? 0,
          maxPlayers: planData?.maxPlayers ?? 20,
          tps: planData?.tps ?? null,
          uptime: planData?.uptime ?? null,
        })
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error'
        setError(`Failed to fetch server stats: ${errorMsg}`)
        console.error('Stats fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="rounded border border-primary/30 bg-secondary/50 p-6">
        <p className="text-center text-sm text-muted-foreground">Loading server stats...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Status Indicator */}
      <div className="flex items-center gap-3">
        <div
          className={`size-3 rounded-full ${stats.online ? 'bg-green-500 shadow-[0_0_10px_rgb(34,197,94)]' : 'bg-red-500 shadow-[0_0_10px_rgb(239,68,68)]'}`}
          aria-hidden="true"
        />
        <span className="font-mono text-sm uppercase tracking-widest text-foreground">
          {stats.online ? 'Server Online' : 'Server Offline'}
        </span>
      </div>

      {/* Player Count */}
      <div className="rough bg-secondary/60 p-4">
        <div className="flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Players Online</p>
            <p className="mt-1 text-2xl font-bold text-foreground">
              {stats.playerCount}
              <span className="text-lg text-muted-foreground">/{stats.maxPlayers}</span>
            </p>
          </div>
        </div>
      </div>

      {/* TPS and Uptime Stats */}
      {(stats.tps !== null || stats.uptime) && (
        <div className="grid grid-cols-2 gap-3">
          {stats.tps !== null && (
            <div className="rough bg-secondary/60 p-3">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-yellow-500" />
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">TPS</p>
                  <p className="mt-0.5 text-lg font-bold text-foreground">
                    {stats.tps.toFixed(1)}
                    <span className="text-xs text-muted-foreground">/20</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {stats.uptime && (
            <div className="rough bg-secondary/60 p-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-green-500" />
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Uptime</p>
                  <p className="mt-0.5 text-lg font-bold text-foreground">{stats.uptime}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-center text-xs text-red-500">{error}</p>}
    </div>
  )
}

