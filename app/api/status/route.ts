import { SERVER, type ServerStatus } from '@/lib/server'

const OFFLINE: ServerStatus = { online: false, players: { online: 0, max: 0 }, version: null }

export async function GET() {
  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER.ip}`, {
      headers: { 'User-Agent': 'graveblock-site/1.0' },
      next: { revalidate: 60 },
    })
    if (!res.ok) return Response.json(OFFLINE)

    const data = await res.json()
    const status: ServerStatus = {
      online: Boolean(data.online),
      players: {
        online: Number(data.players?.online ?? 0),
        max: Number(data.players?.max ?? 0),
      },
      version: typeof data.version === 'string' ? data.version : null,
    }
    return Response.json(status)
  } catch {
    return Response.json(OFFLINE)
  }
}
