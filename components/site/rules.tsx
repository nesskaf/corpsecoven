import { SectionHeading } from './section-heading'
import { TornEdge } from './torn-edge'

const rules = [
  {
    title: 'No Griefing',
    description: 'Respect other players\' builds and claims. Stolen or destroyed property will be restored and consequences applied.',
  },
  {
    title: 'No Hacking or Exploits',
    description: 'Playing vanilla survival. No mods that give unfair advantages, x-ray, flight, or exploits. Vanilla enhancements only.',
  },
  {
    title: 'Be Respectful',
    description: 'No hate speech, discrimination, or harassment. Keep chat friendly for all players of all backgrounds.',
  },
  {
    title: 'No Spam',
    description: 'No spam, advertising other servers, or excessive caps. Use our custom chat features respectfully.',
  },
  {
    title: 'Follow Server Guidelines',
    description: 'Server resets and world rules may apply. Listen to moderators and admins. Disagreements? Use Discord.',
  },
  {
    title: 'Have Fun',
    description: 'Build, explore, make friends, and enjoy the mystical world. The Coven thrives on community and creativity.',
  },
]

export function Rules() {
  return (
    <section id="rules" aria-labelledby="rules-title" className="grime-bg grain relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading id="rules-title">Server Rules</SectionHeading>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {rules.map((rule, i) => (
            <div
              key={rule.title}
              className="rough border-l-4 border-primary bg-secondary/60 p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="font-serif text-lg font-bold text-foreground">{rule.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rule.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rough bg-primary/10 p-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Questions about the rules? Ask in <span className="font-mono font-bold text-foreground">#tickets</span> on our Discord.
            Moderation is here to help the community thrive.
          </p>
        </div>
      </div>

      <TornEdge seed={2} className="relative z-10" />
    </section>
  )
}
