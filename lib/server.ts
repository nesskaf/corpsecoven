export const SERVER = {
  name: 'GRAVEBLOCK',
  ip: 'play.graveblock.net',
  version: 'Java & Bedrock 1.21+',
  discordUrl: 'https://discord.gg/',
  storeUrl: '#ranks',
  nextEvent: {
    name: 'The Blood Moon',
    date: '2026-12-31T23:00:00Z',
  },
} as const

export type ServerStatus = {
  online: boolean
  players: { online: number; max: number }
  version: string | null
}
