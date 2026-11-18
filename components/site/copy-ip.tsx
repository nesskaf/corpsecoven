'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { SERVER } from '@/lib/server'
import { cn } from '@/lib/utils'

export function CopyIp({
  className,
  label = 'Copy IP',
  compact = false,
}: {
  className?: string
  label?: string
  compact?: boolean
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(SERVER.ip)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'group flex items-center justify-center gap-3 font-mono uppercase tracking-[0.3em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
        className,
      )}
    >
      <span className="neon-pink">{copied ? (compact ? 'Copied' : 'Copied — see you inside') : compact ? label : `${label}: ${SERVER.ip}`}</span>
      {copied ? (
        <Check className="size-4 text-primary" aria-hidden="true" />
      ) : (
        <Copy className="size-4 text-primary transition-transform group-hover:scale-110" aria-hidden="true" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Server IP copied to clipboard' : ''}
      </span>
    </button>
  )
}
