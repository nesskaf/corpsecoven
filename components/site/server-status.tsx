'use client'

import useSWR from 'swr'
import type { ServerStatus as Status } from '@/lib/server'
import { cn } from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then((r) => r.json() as Promise<Status>)

export function useServerStatus() {
  return useSWR<Status>('/api/status', fetcher, { refreshInterval: 60_000 })
}

export function ServerStatus({ className }: { className?: string }) {
  const { data, isLoading } = useServerStatus()

  const label = isLoading
    ? 'Pinging the grave...'
    : data?.online
      ? `${data.players.online} / ${data.players.max} souls online`
      : 'Server sleeping — check Discord'

  return (
    <p className={cn('flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'inline-block size-2.5',
          data?.online ? 'animate-flicker bg-primary shadow-[0_0_10px_var(--primary)]' : 'bg-muted-foreground',
        )}
      />
      <span>{label}</span>
    </p>
  )
}
