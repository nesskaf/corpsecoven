import { Cross } from 'lucide-react'

const words = ['Graveblock', 'One life', 'Lifesteal', 'Blood moon', 'Hardcore SMP', 'Lights off', 'Come closer']

function Tape({ reverse = false, inverted = false }: { reverse?: boolean; inverted?: boolean }) {
  const items = [...words, ...words]
  return (
    <div
      className={`flex w-[110%] -translate-x-[5%] overflow-hidden py-2 ${
        inverted ? 'bg-foreground text-background' : 'bg-primary text-primary-foreground'
      }`}
    >
      <div className={`flex shrink-0 items-center gap-6 pr-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((w, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 font-serif text-2xl uppercase md:text-3xl">
            {w}
            <Cross className="size-5 bg-accent p-0.5 text-foreground" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function CautionTape() {
  return (
    <div aria-hidden="true" className="relative flex flex-col overflow-hidden py-16">
      <div className="-rotate-2">
        <Tape />
      </div>
      <div className="-mt-4 rotate-2">
        <Tape reverse inverted />
      </div>
    </div>
  )
}
