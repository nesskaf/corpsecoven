import { SERVER } from '@/lib/server'
import { BarbedWire } from './barbed-wire'
import { Countdown } from './countdown'
import { SectionHeading } from './section-heading'
import { ScrollReveal } from '@/components/effects/scroll-reveal'

const events = [
  {
    month: 'Dec',
    day: '31',
    year: '2026',
    title: 'The Blood Moon',
    copy: 'Mobs spawn doubled, hearts drop on any death, and the final survivor at sunrise takes the crown.',
    next: true,
  },
  {
    month: 'Jan',
    day: '17',
    year: '2027',
    title: 'Hunter in the Deep',
    copy: 'Server-wide manhunt in the deepslate maze. One hunter. Everyone else runs.',
  },
  {
    month: 'Feb',
    day: 'TBA',
    year: '2027',
    title: 'Season II: Rot',
    copy: 'New world, new curses. Whitelist opens to Discord members first.',
  },
]

export function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="grid-bg grain relative scroll-mt-8 overflow-hidden pb-24 pt-12 md:pb-32"
    >
      <BarbedWire pink className="rotate-1" />
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading id="events-title" eyebrow="Catch us in the dark" title="Events" ghost="NIGHT" />
          <div className="torn-edges relative z-10 rotate-2 bg-primary px-5 py-4 text-primary-foreground shadow-[0_0_40px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em]">{SERVER.nextEvent.name} rises in</p>
            <p className="mt-1 font-mono text-2xl md:text-3xl">
              <Countdown target={SERVER.nextEvent.date} />
            </p>
          </div>
        </div>

        <ol className="mt-16 flex flex-col gap-6">
          {events.map((e, i) => (
            <ScrollReveal key={e.title} className="relative">
              <li className="relative">
                {e.next && (
                  <span className="absolute -top-3 right-6 z-10 bg-primary px-3 py-0.5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground">
                    Next up
                  </span>
                )}
                <article
                  className={`${i % 2 ? 'torn-edges' : 'torn-edges'} flex flex-col gap-5 border-l-4 p-5 sm:flex-row sm:items-center ${
                    e.next ? 'border-primary bg-accent/60' : 'border-secondary bg-card'
                  }`}
                >
                  <time
                    dateTime={e.day === 'TBA' ? e.year : `${e.year}-${e.month}-${e.day}`}
                    className="flex w-28 shrink-0 flex-col items-center border-2 border-foreground/70 py-2 font-mono uppercase"
                  >
                    <span className="text-xs tracking-[0.3em] text-muted-foreground">{e.month}</span>
                    <span className="text-3xl text-foreground">{e.day}</span>
                    <span className="text-xs tracking-[0.3em] text-muted-foreground">{e.year}</span>
                  </time>
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl leading-none text-foreground">{e.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{e.copy}</p>
                  </div>
                  <a
                    href={SERVER.discordUrl}
                    className="torn-edges self-start bg-secondary px-5 py-2 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:self-center"
                  >
                    RSVP<span className="sr-only"> for {e.title}</span>
                  </a>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
