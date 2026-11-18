import { Cross } from 'lucide-react'
import { SERVER } from '@/lib/server'
import { SectionHeading } from './section-heading'
import { TornEdge } from './torn-edge'

const ranks = [
  {
    name: 'Ghoul',
    price: '$4.99',
    perks: ['Pink chat prefix', '2 extra land claims', '/hat & /craft', 'Queue skip'],
  },
  {
    name: 'Wraith',
    price: '$12.99',
    featured: true,
    perks: ['Everything in Ghoul', 'Animated nametag', '1 revive token / month', 'Private vault', 'Blood moon early access'],
  },
  {
    name: 'Revenant',
    price: '$24.99',
    perks: ['Everything in Wraith', 'Custom grave skin', '3 revive tokens / month', 'Event host perms'],
  },
]

export function Ranks() {
  return (
    <section id="ranks" aria-labelledby="ranks-title" className="grime-bg grain relative scroll-mt-8 overflow-hidden">
      <TornEdge seed={11} />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading id="ranks-title" eyebrow="Offerings // support the server" title="Ranks" ghost="SOULS" />

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {ranks.map((rank, i) => (
            <li
              key={rank.name}
              className={`relative ${rank.featured ? 'md:-translate-y-6' : ''} ${i === 0 ? '-rotate-1' : i === 2 ? 'rotate-1' : ''}`}
            >
              {rank.featured && (
                <span className="absolute -top-3 right-4 z-10 bg-primary px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground">
                  Most chosen
                </span>
              )}
              <article
                className={`torn-edges flex h-full flex-col gap-6 p-6 ${
                  rank.featured
                    ? 'bg-card shadow-[0_0_0_3px_var(--primary),0_0_50px_color-mix(in_oklab,var(--primary)_35%,transparent)]'
                    : 'bg-card/95'
                }`}
              >
                <header className="flex items-end justify-between border-b border-dashed border-border pb-4">
                  <h3 className="font-serif text-4xl leading-none text-foreground">{rank.name}</h3>
                  <p className="font-mono text-2xl text-primary">
                    {rank.price}
                    <span className="sr-only"> one-time</span>
                  </p>
                </header>
                <ul className="flex flex-1 flex-col gap-3">
                  {rank.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                      <Cross className="mt-1 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={SERVER.storeUrl}
                  className="torn-edges bg-secondary py-3 text-center font-mono text-sm uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Claim {rank.name}
                  <span className="sr-only"> rank</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Cosmetic & convenience only. No pay-to-win. Ever.
        </p>
      </div>
      <TornEdge seed={19} />
    </section>
  )
}
