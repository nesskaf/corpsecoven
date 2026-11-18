'use client'

import { SERVER } from '@/lib/server'
import { CopyIp } from './copy-ip'
import { SectionHeading } from './section-heading'
import { LiveStats } from './live-stats'
import { useState } from 'react'

const javaSteps = [
  { title: 'Download & Install', copy: `Get the Corpses Coven modpack from CurseForge for Java ${SERVER.version.split(' ')[1]}.` },
  { title: 'Launch Minecraft', copy: 'Open the launcher and start playing.' },
]

const bedrockSteps = [
  { title: 'Server Address', copy: `mc.corpsecoven.com` },
  { title: 'Port', copy: `19132` },
]

const consoleSteps = [
  { title: 'Download app', copy: 'Get BedrockConnect on iPhone (App Store) or BedrockHub Connector on Android (Google Play).' },
  { title: 'Enter server details', copy: 'Open the app and manually enter the server address and port below.' },
  { title: 'Connect to console', copy: 'Make sure your phone and console are on the same Wi-Fi network. The app will show your console automatically—tap to connect.' },
  { title: 'Join in Minecraft', copy: 'Open Minecraft on your console and the Corpses Coven server will appear in your world list. Join and play!' },
]

export function Join() {
  const [openSection, setOpenSection] = useState<'java' | 'bedrock' | 'console'>('java')
  return (
    <section id="join" aria-labelledby="join-title" className="grain relative scroll-mt-8 overflow-hidden pb-24 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-10">
          <SectionHeading id="join-title" eyebrow="Welcome, traveler" title="Join" ghost="COVEN" />
          
          {/* Java Edition Section */}
          <div>
            <button
              onClick={() => setOpenSection(openSection === 'java' ? undefined : 'java')}
              className="w-full text-left font-serif text-lg uppercase tracking-widest text-primary mb-4 hover:opacity-70 transition-opacity flex items-center justify-between"
            >
              <span>Java Edition</span>
              <span className="text-sm font-mono">{openSection === 'java' ? '▼' : '▶'}</span>
            </button>
            {openSection === 'java' && (
              <ol className="flex flex-col gap-6">
                {javaSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-5">
                    <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="font-serif text-2xl leading-none text-foreground">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Bedrock Edition Section */}
          <div>
            <button
              onClick={() => setOpenSection(openSection === 'bedrock' ? undefined : 'bedrock')}
              className="w-full text-left font-serif text-lg uppercase tracking-widest text-primary mb-4 hover:opacity-70 transition-opacity flex items-center justify-between"
            >
              <span>Bedrock Edition (PC & Mobile)</span>
              <span className="text-sm font-mono">{openSection === 'bedrock' ? '▼' : '▶'}</span>
            </button>
            {openSection === 'bedrock' && (
              <>
                <div className="text-sm text-muted-foreground mb-4">Use these details when adding a custom server:</div>
                <ol className="flex flex-col gap-6">
                  {bedrockSteps.map((s, i) => (
                    <li key={s.title} className="flex gap-5">
                      <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="font-serif text-lg leading-none text-foreground">{s.title}</h4>
                        <p className="mt-2 text-sm font-mono text-primary bg-muted/50 p-2 rounded">{s.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>

          {/* Console Edition Section */}
          <div>
            <button
              onClick={() => setOpenSection(openSection === 'console' ? undefined : 'console')}
              className="w-full text-left font-serif text-lg uppercase tracking-widest text-primary mb-4 hover:opacity-70 transition-opacity flex items-center justify-between"
            >
              <span>Console Edition (PlayStation, Xbox, Switch)</span>
              <span className="text-sm font-mono">{openSection === 'console' ? '▼' : '▶'}</span>
            </button>
            {openSection === 'console' && (
              <>
                <div className="text-sm text-muted-foreground mb-4">You'll need these details to enter in the app:</div>
                <div className="mb-6 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1">Server Address</p>
                    <p className="text-sm font-mono text-primary bg-muted/50 p-2 rounded">mc.corpsecoven.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1">Port</p>
                    <p className="text-sm font-mono text-primary bg-muted/50 p-2 rounded">19132</p>
                  </div>
                </div>
                <ol className="flex flex-col gap-6">
                  {consoleSteps.map((s, i) => (
                    <li key={s.title} className="flex gap-5">
                      <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="font-serif text-2xl leading-none text-foreground">{s.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </div>

        <div className="relative lg:mt-24 space-y-6">
          <div>
            <span
              aria-hidden="true"
              className="absolute -top-4 left-10 z-10 h-7 w-28 -rotate-6 bg-muted-foreground/60"
            />
            <div className="torn-edges rotate-1 bg-card p-8">
              <div className="flex items-center justify-between border-b border-dashed border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>Server address</span>
                <span className="border border-primary px-2 py-0.5 text-primary">Open 24/7</span>
              </div>
              <p className="mt-8 break-all font-mono text-3xl text-foreground md:text-4xl">{SERVER.ip}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="torn-edges flex-1 bg-primary py-4 shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_50%,transparent)] flex items-center justify-center min-w-0">
                  <CopyIp
                    label="Copy"
                    compact
                    className="text-xs md:text-sm text-primary-foreground [&_span.neon-pink]:text-primary-foreground [&_span.neon-pink]:[text-shadow:none] [&_svg]:text-primary-foreground whitespace-nowrap px-2"
                  />
                </div>
                <a
                  href={SERVER.kofiUrl}
                  className="torn-edges flex-1 bg-secondary py-4 text-center font-mono text-sm uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Support Us
                </a>
                <a
                  href={SERVER.discordUrl}
                  className="torn-edges flex-1 bg-secondary py-4 text-center font-mono text-sm uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>

          <div>
            <LiveStats />
          </div>
        </div>
      </div>
    </section>
  )
}
