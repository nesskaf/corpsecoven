import { cn } from '@/lib/utils'

function seeded(seed: number) {
  let t = seed
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), t | 1)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function jaggedStrip(seed: number, teeth = 90) {
  const rand = seeded(seed)
  const top: string[] = []
  const bottom: string[] = []
  for (let i = 0; i <= teeth; i++) {
    const x = ((i / teeth) * 100).toFixed(2)
    top.push(`${x}% ${(rand() * 38).toFixed(1)}%`)
  }
  for (let i = teeth; i >= 0; i--) {
    const x = ((i / teeth) * 100).toFixed(2)
    bottom.push(`${x}% ${(62 + rand() * 38).toFixed(1)}%`)
  }
  return `polygon(${[...top, ...bottom].join(',')})`
}

export function TornEdge({ seed = 1, className }: { seed?: number; className?: string }) {
  return (
    <div aria-hidden="true" className={cn('relative h-8 w-full', className)}>
      <div
        className="absolute inset-x-0 -top-1 h-8 bg-foreground/90"
        style={{ clipPath: jaggedStrip(seed + 7, 140) }}
      />
      <div
        className="absolute inset-x-0 top-1 h-7 bg-primary shadow-[0_0_30px_var(--primary)]"
        style={{ clipPath: jaggedStrip(seed, 110) }}
      />
    </div>
  )
}
