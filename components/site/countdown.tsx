'use client'

import { useEffect, useState } from 'react'

function format(ms: number) {
  if (ms <= 0) return 'Rising now'
  const s = Math.floor(ms / 1000)
  const d = Math.floor(s / 86400)
  const h = Math.floor((s % 86400) / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return `${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(sec).padStart(2, '0')}s`
}

export function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {now === null ? '--d --h --m --s' : format(new Date(target).getTime() - now)}
    </span>
  )
}
