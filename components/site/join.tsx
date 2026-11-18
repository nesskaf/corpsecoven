import { SERVER } from '@/lib/server'
import { CopyIp } from './copy-ip'
import { SectionHeading } from './section-heading'

const steps = [
  { title: 'Download Modpack', copy: `Get the Corpses Coven modpack from CurseForge. Java ${SERVER.version.split(' ')[1]}.` },
  { title: 'Add the server', copy: 'Multiplayer → Add Server → paste the address below.' },
  { title: 'Read the rules', copy: 'Respect the coven. No griefing, hacking, or exploits. Have fun!' },
  { title: 'Adventure awaits', copy: 'Join your fellow witches and warlocks in a world of magic and mystery.' },
]

export function Join() {
  return (
    <section id="join" aria-labelledby="join-title" className="grain relative scroll-mt-8 overflow-hidden pb-24 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-10">
          <SectionHeading id="join-title" eyebrow="Welcome, traveler" title="Join" ghost="COVEN" />
          <ol className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-2xl leading-none text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative lg:mt-24">
          <span
            aria-hidden="true"
            className="absolute -top-4 left-10 z-10 h-7 w-28 -rotate-6 bg-muted-foreground/60"
          />
          <div className="rough rotate-1 bg-card p-8">
            <div className="flex items-center justify-between border-b border-dashed border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span>Server address</span>
              <span className="border border-primary px-2 py-0.5 text-primary">Open 24/7</span>
            </div>
            <p className="mt-8 break-all font-mono text-3xl text-foreground md:text-4xl">{SERVER.ip}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="rough-alt flex-1 bg-primary py-4 shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
                <CopyIp
                  label="Copy address"
                  compact
                  className="w-full text-sm text-primary-foreground [&_span.neon-pink]:text-primary-foreground [&_span.neon-pink]:[text-shadow:none] [&_svg]:text-primary-foreground"
                />
              </div>
              <a
                href={SERVER.donateUrl}
                className="rough flex-1 bg-secondary py-4 text-center font-mono text-sm uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Support Us
              </a>
              <a
                href={SERVER.discordUrl}
                className="rough flex-1 bg-secondary py-4 text-center font-mono text-sm uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
