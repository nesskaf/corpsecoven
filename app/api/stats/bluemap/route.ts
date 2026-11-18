import { NextResponse } from 'next/server'

const BLUEMAP_URL = process.env.BLUEMAP_API_URL || 'http://mc.corpsecoven.com:8100'

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
    // Fetch BlueMap server info
    const response = await fetch(`${BLUEMAP_URL}/api/servers`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 30 }, // Cache for 30 seconds
    })

    if (!response.ok) {
      throw new Error(`BlueMap API error: ${response.status}`)
    }

    const data = await response.json()

    // BlueMap returns an array of servers, get the first one or main server
    const server = Array.isArray(data) ? data[0] : data

    if (!server) {
      throw new Error('No server data found in BlueMap')
    }

    // Sanitize and only return safe data
    const players = Math.max(0, Math.min(1000, Number(server.players?.online ?? 0)))
    const maxPlayers = Math.max(0, Math.min(1000, Number(server.players?.max ?? 20)))

    return NextResponse.json({
      online: true,
      playerCount: players,
      maxPlayers,
      tps: null,
      uptime: null,
    })
  } catch (error) {
    console.error('BlueMap stats fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch server stats' },
      { status: 500 }
    )
  }
}
