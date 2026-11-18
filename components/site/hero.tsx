import Image from 'next/image'
import { Cross } from 'lucide-react'
import { SERVER } from '@/lib/server'
import { BarbedWire } from './barbed-wire'
import { CopyIp } from './copy-ip'
import { ServerStatus } from './server-status'
import { TornEdge } from './torn-edge'

const utilityLinks = [
  { label: 'Store', href: '#ranks' },
  { label: 'Home', href: '#top', active: true },
  { label: 'Vote', href: '#join' },
]

const navLinks = [
  { label: 'Join', href: '#join' },
  { label: 'Gamemodes', href: '#gamemodes' },
  { label: 'Ranks', href: '#ranks' },
  { label: 'Events', href: '#events' },
  { label: 'Rules', href: '#join' },
  { label: 'Discord', href: SERVER.discordUrl },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="grime-bg grain relative overflow-hidden">
      <header className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pt-8">
        <div className="flex w-full items-center justify-between">
          <nav aria-label="Utility" className="hidden items-center gap-6 md:flex">
            {utilityLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
                aria-current={l.active ? 'page' : undefined}
              >
                <Cross className="size-3.5 fill-accent text-foreground" aria-hidden="true" />
                <span className={l.active ? 'border-b border-foreground pb-0.5' : undefined}>{l.label}</span>
              </a>
            ))}
          </nav>
          <a href="#top" className="neon font-serif text-3xl leading-none md:text-4xl">
            GB
            <span className="sr-only">GRAVEBLOCK home</span>
          </a>
          <a
            href={SERVER.discordUrl}
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Cross className="size-3.5 fill-accent text-foreground" aria-hidden="true" />
            Discord (live)
          </a>
        </div>

        <nav aria-label="Main" className="flex flex-wrap items-center justify-center gap-2">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`${i % 2 ? 'rough-alt' : 'rough'} bg-secondary/90 px-4 py-2 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary hover:text-primary-foreground`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="rough w-full max-w-3xl bg-secondary/80 py-3">
          <CopyIp className="w-full text-xs md:text-sm" />
        </div>
      </header>

      <BarbedWire className="relative z-10 -rotate-1 mt-4" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-10 pt-6">
        <h1
          id="hero-title"
          className="neon animate-rise text-center font-serif text-[clamp(3rem,13vw,12rem)] leading-[0.85]"
        >
          <span className="animate-flicker inline-block">GRAVEBLOCK</span>
        </h1>

        <p
          className="animate-rise mt-6 flex items-center gap-4 bg-primary px-6 py-2 font-mono text-sm uppercase tracking-[0.45em] text-primary-foreground shadow-[0_0_40px_var(--primary)] md:text-lg"
          style={{ animationDelay: '150ms' }}
        >
          Hardcore
          <Cross className="size-5 bg-accent p-0.5 text-foreground" aria-hidden="true" />
          Horror SMP
        </p>

        <div className="mt-16 grid w-full items-end gap-12 md:grid-cols-2">
          <div className="animate-rise flex flex-col gap-6" style={{ animationDelay: '300ms' }}>
            <div className="border-l-2 border-primary pl-5">
              <p className="max-w-sm text-pretty leading-relaxed text-foreground">
                A Minecraft server where the night{' '}
                <mark className="bg-primary px-1 text-primary-foreground">bites back</mark>. One life. Lifesteal hearts.
                Blood moons every month. Turn your brightness down and don&apos;t log off near the caves.
              </p>
            </div>
            <ServerStatus className="text-muted-foreground" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{SERVER.version}</p>
          </div>

          <figure
            className="animate-rise relative mx-auto w-64 rotate-3 md:ml-auto md:mr-10 md:w-72"
            style={{ animationDelay: '450ms' }}
          >
            <span
              aria-hidden="true"
              className="absolute -top-4 left-1/2 z-10 h-7 w-28 -translate-x-1/2 -rotate-6 bg-muted-foreground/60"
            />
            <div className="rough bg-primary p-2 shadow-[0_0_50px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-background">
                <Image
                  src="/images/hero-player.png"
                  alt="A hooded blocky undead player with glowing pink eyes standing in a dark cave"
                  fill
                  priority
                  sizes="(min-width: 768px) 288px, 256px"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="absolute -bottom-6 -left-10 -rotate-12 border-2 border-primary bg-background px-3 py-2 font-mono text-xs uppercase leading-tight tracking-widest text-primary">
              Log in at
              <br />
              your own risk
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 flex w-full items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">
          <span aria-hidden="true" className="hidden tracking-[-0.1em] md:inline">
            {'||||| |||| || ||||||| ||| |||'}
          </span>
          <a href="#gamemodes" className="transition-colors hover:text-foreground">
            {'[ Scroll to descend ]'}
          </a>
          <span>SIG. GRV-666</span>
        </div>
      </div>

      <TornEdge seed={3} className="relative z-10" />
    </section>
  )
}
