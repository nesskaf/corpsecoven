import { Wand2, Users, Map, Zap, Shield, Volume2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { TornEdge } from './torn-edge'

const features = [
  {
    icon: Volume2,
    title: 'Proximity Voice Chat',
    description: 'Talk to nearby players with proximity-based voice. Perfect for cooperation and immersion.',
  },
  {
    icon: Wand2,
    title: 'Magical Mods',
    description: 'Curated selection of magic, structure, and atmosphere mods. Experience a mystical Minecraft.',
  },
  {
    icon: Map,
    title: 'Enhanced World Gen',
    description: 'Terralith, Overhauled Overworld, and custom structures create a visually stunning world.',
  },
  {
    icon: Users,
    title: 'Community Features',
    description: 'Custom chat, nicknames, afk status, and more through CMI. Feel connected to the coven.',
  },
  {
    icon: Shield,
    title: 'Cross-Platform',
    description: 'Java and Bedrock players can play together. Use Bedrock Connect on mobile to join.',
  },
  {
    icon: Zap,
    title: 'Plugins & Tools',
    description: '36+ plugins for enhanced gameplay: grief protection, visual enhancements, and utilities.',
  },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="grime-bg grain relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading id="features-title">Features</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="torn-edges bg-secondary/60 p-6 transition-all hover:bg-secondary"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 inline-block rounded-lg bg-primary p-3">
                  <Icon className="size-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <TornEdge seed={1} className="relative z-10" />
    </section>
  )
}
