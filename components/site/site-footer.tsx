import { SERVER } from '@/lib/server'
import { TornEdge } from './torn-edge'

export function SiteFooter() {
  return (
    <footer className="grime-bg grain relative overflow-hidden">
      <TornEdge seed={27} />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
        <p className="neon font-serif text-6xl leading-none md:text-8xl">GRAVEBLOCK</p>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">{SERVER.ip}</p>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
        </p>
      </div>
    </footer>
  )
}
