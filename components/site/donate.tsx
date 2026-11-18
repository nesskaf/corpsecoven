import { Heart } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { TornEdge } from './torn-edge'

export function Donate() {
  return (
    <section id="donate" aria-labelledby="donate-title" className="grime-bg grain relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading id="donate-title">Support the Coven</SectionHeading>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-rise flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-foreground">Keep the Magic Alive</h3>
              <p className="leading-relaxed text-muted-foreground">
                Running a Minecraft server takes dedication and resources. Your contribution helps us maintain the coven,
                keep the servers running smoothly, and fund new features for everyone to enjoy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="torn-edges border-l-4 border-primary bg-secondary/60 p-4">
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">Every Contribution Helps</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Whether it's $1 or $100, your support keeps the servers online and helps us create an amazing community.
                </p>
              </div>

              <div className="torn-edges border-l-4 border-primary bg-secondary/60 p-4">
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">100% Transparent</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Donations go directly to server hosting, maintenance, and community improvements. No hidden fees.
                </p>
              </div>

              <div className="torn-edges border-l-4 border-primary bg-secondary/60 p-4">
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">No Pressure</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Corpses Coven is free to play. Donations are purely optional and purely appreciated.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-rise flex flex-col justify-center" style={{ animationDelay: '150ms' }}>
            <div className="torn-edges bg-gradient-to-b from-primary/20 to-secondary/60 p-8">
              <div className="mb-6 flex items-center justify-center">
                <Heart className="size-12 text-primary" fill="currentColor" aria-hidden="true" />
              </div>

              <h3 className="text-center font-serif text-2xl font-bold text-foreground">Sustain the Coven</h3>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Show your support and help keep the mystical world alive.
              </p>

              <a
                href="https://ko-fi.com/corpsecoven"
                target="_blank"
                rel="noopener noreferrer"
                className="torn-edges mt-8 block w-full bg-primary py-4 text-center font-mono font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_30%,transparent)]"
              >
                Support on Ko-Fi ✨
              </a>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Safe, secure, and simple. Payments processed through Ko-Fi.
              </p>

              <div className="mt-8 border-t border-dashed border-primary/30 pt-6">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-primary/70">Thank you, coven member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TornEdge seed={4} className="relative z-10" />
    </section>
  )
}
