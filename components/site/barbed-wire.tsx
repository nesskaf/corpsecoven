import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BarbedWire({ className, pink = false }: { className?: string; pink?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex h-6 w-full items-center justify-between overflow-hidden',
        pink ? 'text-primary' : 'text-muted-foreground/70',
        className,
      )}
    >
      <span className="absolute inset-x-0 top-1/2 h-px bg-current opacity-70" />
      {Array.from({ length: 24 }).map((_, i) => (
        <X key={i} className="relative size-5 shrink-0" strokeWidth={1.5} />
      ))}
    </div>
  )
}
