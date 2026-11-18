import { NextResponse } from 'next/server'

const BLUEMAP_URL = 'http://mc.corpsecoven.com:8100'

export async function GET() {
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

    return NextResponse.json({
      online: true,
      playerCount: server.players?.online ?? 0,
      maxPlayers: server.players?.max ?? 20,
      tps: null,
      uptime: null,
      onlinePlayers: server.players?.list ?? null,
    })
  } catch (error) {
    console.error('BlueMap stats fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch BlueMap stats' },
      { status: 500 }
    )
  }
}
