'use client'

import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { SERVER } from '@/lib/server'

export default function MCPage() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = () => {
    navigator.clipboard.writeText(SERVER.mcDomain)
    setCopied(true)
  }

  return (
    <div className="grime-bg grain flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="neon font-serif text-5xl leading-none md:text-6xl">CC</h1>
        <p className="mt-6 text-lg text-muted-foreground">Corpses Coven Minecraft Server</p>

        <div className="rough mt-12 bg-secondary/80 p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Server Address</p>
          <p className="mt-4 break-all font-mono text-2xl font-bold text-foreground">{SERVER.mcDomain}</p>

          <button
            onClick={handleCopy}
            className="rough mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary py-3 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
          >
            {copied ? (
              <>
                <Check className="size-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-5" />
                Copy Address
              </>
            )}
          </button>
        </div>

        <div className="mt-12 space-y-4">
          <a
            href={SERVER.discordUrl}
            className="rough block bg-secondary px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Join Discord
          </a>
          <a
            href="https://www.curseforge.com/minecraft/modpacks/corpses-coven"
            target="_blank"
            rel="noopener noreferrer"
            className="rough block bg-secondary px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Download Modpack
          </a>
          <a
            href="https://corpsecoven.com"
            className="rough block bg-secondary px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Back to Main Site
          </a>
        </div>
      </div>
    </div>
  )
}
