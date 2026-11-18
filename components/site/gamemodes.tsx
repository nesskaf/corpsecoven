import Image from 'next/image'
import { SectionHeading } from './section-heading'

const modes = [
  {
    title: 'Survival SMP',
    genre: 'Classic',
    tag: 'Land claims',
    image: '/images/mode-survival.png',
    alt: 'A torch-lit voxel village in a dark forest under a pink blood moon',
    copy: 'Vanilla-plus survival with claims, player shops and a world that resets never. Build somewhere safe. Nowhere is.',
  },
  {
    title: 'Lifesteal',
    genre: 'Hardcore',
    tag: 'PvP',
    image: '/images/mode-lifesteal.png',
    alt: 'A glowing pixel heart floating above a sword in dark stone',
    copy: 'Kill a player, take a heart. Lose all ten and you are banished until someone carves a revive beacon for you.',
  },
  {
    title: 'Manhunt',
    genre: 'Horror',
    tag: 'Events',
    image: '/images/mode-manhunt.png',
    alt: 'A tall shadowy figure with pink eyes at the end of a dark mineshaft',
    copy: 'Four runners. One hunter with a custom AI stalker kit. The lights go out at random. Stay close to the group.',
  },
  {
    title: 'Void Skyblock',
    genre: 'Survival',
    tag: 'Co-op',
    image: '/images/mode-skyblock.png',
    alt: 'A tiny floating dirt island with a dead tree hanging in a black void',
    copy: 'A single cursed island in an endless void. Grow it, defend it, and pray nothing climbs up from below.',
  },
]

export function Gamemodes() {
  return (
    <section
      id="gamemodes"
      aria-labelledby="gamemodes-title"
      className="grid-bg grain relative scroll-mt-8 overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading id="gamemodes-title" eyebrow="Evidence locker // realms" title="Gamemodes" ghost="PLAY" />
          <div className="torn-edges relative max-w-xs -rotate-2 bg-secondary p-5 lg:mb-4">
            <p className="font-serif text-sm text-primary">Read me first —</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              One account, every realm. Your hearts carry over. Your sins do too.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {modes.map((mode, i) => (
            <li key={mode.title} className="torn-edges bg-card p-5">
              <article className="flex h-full flex-col gap-5">
                <div className="flex items-center justify-between border-b border-dashed border-border pb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span>
                    Case <span className="text-primary">#{String(i + 1).padStart(3, '0')}</span>
                  </span>
                  <span>{mode.genre}</span>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="relative aspect-square w-full shrink-0 -rotate-2 border-4 border-foreground sm:w-40">
                    <Image src={mode.image} alt={mode.alt} fill sizes="(min-width: 640px) 160px, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-3xl leading-none text-foreground">{mode.title}</h3>
                    <div className="flex flex-wrap gap-2 font-mono text-[0.7rem] uppercase tracking-widest">
                      <span className="bg-foreground px-2 py-0.5 text-background">Live</span>
                      <span className="bg-primary px-2 py-0.5 text-primary-foreground">{mode.tag}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{mode.copy}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
