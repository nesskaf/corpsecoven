import { NextResponse } from 'next/server'

const PLAN_URL = 'http://mc.corpsecoven.com:8804'
const SERVER_UUID = '10c22739-b075-41ee-b29a-b0da96396f0d'

export async function GET() {
  try {
    // Fetch data from Plan API
    const response = await fetch(`${PLAN_URL}/v1/server/${SERVER_UUID}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 30 }, // Cache for 30 seconds
    })

    if (!response.ok) {
      throw new Error(`Plan API error: ${response.status}`)
    }

    const data = await response.json()

    // Extract the data we need from Plan API response
    const players = data.players_online ?? 0
    const maxPlayers = data.players_max ?? 20
    const online = players > 0 || data.online === true

    // Try to get online player names and other stats
    let onlinePlayers: string[] | null = null
    let tps: number | null = null
    let uptime: string | null = null

    // Format uptime if available
    if (data.server_uptime_ms) {
      uptime = formatUptime(data.server_uptime_ms)
    }

    // Get TPS if available
    if (data.tps) {
      tps = Array.isArray(data.tps) ? data.tps[0] : data.tps
    }

    return NextResponse.json({
      online,
      playerCount: players,
      maxPlayers,
      tps,
      uptime,
      onlinePlayers,
    })
  } catch (error) {
    console.error('Plan stats fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Plan stats' },
      { status: 500 }
    )
  }
}

function formatUptime(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ${hours % 24}h`
  if (hours > 0) return `${hours}h ${minutes % 60}m`
  if (minutes > 0) return `${minutes}m`
  return `${seconds}s`
}
