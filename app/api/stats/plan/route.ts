import { NextResponse } from 'next/server'
import { SERVER, type ServerStatus } from '@/lib/server'

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
    // Fetch data from MC server via public API - using port 25665
    const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER.ip}:25665`, {
      headers: { 'User-Agent': 'corpsescoven-site/1.0' },
      next: { revalidate: 30 }, // Cache for 30 seconds
    })

    if (!res.ok) {
      return NextResponse.json({
        online: false,
        playerCount: 0,
        maxPlayers: 20,
        tps: null,
        uptime: null,
      })
    }

    const data = await res.json()

    // Sanitize and only return safe data
    const players = Math.max(0, Math.min(1000, Number(data.players?.online ?? 0)))
    const maxPlayers = Math.max(0, Math.min(1000, Number(data.players?.max ?? 20)))
    const online = Boolean(data.online)

    return NextResponse.json({
      online,
      playerCount: players,
      maxPlayers,
      tps: null,
      uptime: null,
    })
  } catch (error) {
    console.error('Stats fetch error:', error)
    return NextResponse.json(
      {
        online: false,
        playerCount: 0,
        maxPlayers: 20,
        tps: null,
        uptime: null,
      },
      { status: 500 }
    )
  }
}
