export const SERVER = {
  name: 'Corpses Coven',
  ip: 'mc.corpsecoven.com',
  mcDomain: 'mc.corpsecoven.com',
  version: 'Java 1.21+',
  discordUrl: 'https://discord.gg/YacDU78ufy',
  kofiUrl: 'https://ko-fi.com/corpsecoven',
  nextEvent: {
    name: 'Lunar Gathering',
    date: '2026-12-31T23:00:00Z',
  },
} as const

export type ServerStatus = {
  online: boolean
  players: { online: number; max: number }
  version: string | null
}
