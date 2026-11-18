import { NextResponse } from 'next/server'

const PLAN_URL = process.env.PLAN_API_URL || 'http://mc.corpsecoven.com:8804'
const SERVER_UUID = process.env.PLAN_SERVER_UUID || '10c22739-b075-41ee-b29a-b0da96396f0d'

// Simple rate limiting: store request count per IP
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + 60000 }) // 60 second window
    return true
  }

  if (record.count >= 10) {
    // Max 10 requests per minute per IP
    return false
  }

  record.count++
  return true
}

export async function GET(request: Request) {
  // Simple rate limiting
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

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

    // Sanitize and only return safe data
    const players = Math.max(0, Math.min(1000, Number(data.players_online ?? 0)))
    const maxPlayers = Math.max(0, Math.min(1000, Number(data.players_max ?? 20)))
    const online = players > 0 || data.online === true

    let tps: number | null = null
    if (typeof data.tps === 'number' && data.tps >= 0 && data.tps <= 20) {
      tps = Number(data.tps.toFixed(2))
    } else if (Array.isArray(data.tps) && typeof data.tps[0] === 'number') {
      tps = Number(data.tps[0].toFixed(2))
    }

    let uptime: string | null = null
    if (typeof data.server_uptime_ms === 'number' && data.server_uptime_ms > 0) {
      uptime = formatUptime(data.server_uptime_ms)
    }

    return NextResponse.json({
      online,
      playerCount: players,
      maxPlayers,
      tps,
      uptime,
    })
  } catch (error) {
    console.error('Plan stats fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch server stats' },
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

