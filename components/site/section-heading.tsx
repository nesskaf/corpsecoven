import { Cross } from 'lucide-react'

export function SectionHeading({
  eyebrow,
  title,
  ghost,
  id,
}: {
  eyebrow: string
  title: string
  ghost: string
  id: string
}) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -top-6 right-0 hidden select-none font-serif text-[10rem] leading-none md:block lg:text-[14rem]"
      >
        {ghost}
      </span>
      <p className="relative flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-primary">
        <Cross className="size-4 fill-accent text-foreground" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="neon relative mt-4 text-balance font-serif text-6xl leading-none md:text-8xl"
      >
        {title}
      </h2>
    </div>
  )
}
