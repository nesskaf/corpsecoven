import { ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { TornEdge } from './torn-edge'

export function Modpack() {
  return (
    <section id="modpack" aria-labelledby="modpack-title" className="grime-bg grain relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading id="modpack-title">Modpack</SectionHeading>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-rise flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-foreground">Corpses Coven Modpack</h3>
              <p className="leading-relaxed text-muted-foreground">
                A carefully curated collection of mods that blends atmospheric magic with vanilla Minecraft.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">World Generation</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Terralith, Overhauled Overworld, Navigable Rivers, Sunken Spires, Tectonic, and more
                </p>
              </div>

              <div>
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">Structures</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dungeons and Taverns, Katter's Structures, Grand Capitals for unique adventure locations
                </p>
              </div>

              <div>
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">Atmosphere</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Trek, William Wythers' Overhauled Overworld, and custom datapacks for immersive gameplay
                </p>
              </div>
            </div>

            <a
              href="https://www.curseforge.com/minecraft/modpacks/corpses-coven"
              target="_blank"
              rel="noopener noreferrer"
              className="torn-edges inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              <span>Download on CurseForge</span>
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="animate-rise flex flex-col justify-center space-y-4" style={{ animationDelay: '150ms' }}>
            <div className="torn-edges bg-secondary/60 p-6">
              <h4 className="mb-4 font-serif text-xl font-bold text-foreground">Key Mods</h4>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>Terralith - Terrain overhaul</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>William Wythers' Overworld</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>Dungeons and Taverns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>Navigable Rivers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>Sunken Spires</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>Trek - Trail structures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>Tectonic - Geology mod</span>
                </li>
              </ul>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Every mod has been tested for compatibility and performance. The modpack transforms your Minecraft world into a magical realm
              worth exploring.
            </p>
          </div>
        </div>
      </div>

      <TornEdge seed={5} className="relative z-10" />
    </section>
  )
}
