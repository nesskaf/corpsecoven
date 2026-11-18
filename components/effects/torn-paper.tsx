'use client'

import { useEffect, useState } from 'react'

export function TornPaperEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .torn-edge-shape {
          position: relative;
          clip-path: polygon(
            0% 2%, 2% 1%, 4% 3%, 6% 1%, 8% 2%, 10% 0%, 12% 2%, 14% 1%, 16% 3%, 18% 1%,
            20% 2%, 22% 0%, 24% 2%, 26% 1%, 28% 3%, 30% 1%, 32% 2%, 34% 0%, 36% 2%, 38% 1%,
            40% 3%, 42% 1%, 44% 2%, 46% 0%, 48% 2%, 50% 1%, 52% 3%, 54% 1%, 56% 2%, 58% 0%,
            60% 2%, 62% 1%, 64% 3%, 66% 1%, 68% 2%, 70% 0%, 72% 2%, 74% 1%, 76% 3%, 78% 1%,
            80% 2%, 82% 0%, 84% 2%, 86% 1%, 88% 3%, 90% 1%, 92% 2%, 94% 0%, 96% 2%, 98% 1%, 100% 3%,
            100% 10%, 99% 20%, 100% 30%, 99% 40%, 100% 50%, 99% 60%, 100% 70%, 99% 80%, 100% 90%, 100% 100%,
            98% 98%, 96% 99%, 94% 98%, 92% 100%, 90% 98%, 88% 99%, 86% 98%, 84% 100%, 82% 98%, 80% 99%,
            78% 98%, 76% 100%, 74% 98%, 72% 99%, 70% 98%, 68% 100%, 66% 98%, 64% 99%, 62% 98%, 60% 100%,
            58% 98%, 56% 99%, 54% 98%, 52% 100%, 50% 98%, 48% 99%, 46% 98%, 44% 100%, 42% 98%, 40% 99%,
            38% 98%, 36% 100%, 34% 98%, 32% 99%, 30% 98%, 28% 100%, 26% 98%, 24% 99%, 22% 98%, 20% 100%,
            18% 98%, 16% 99%, 14% 98%, 12% 100%, 10% 98%, 8% 99%, 6% 98%, 4% 100%, 2% 98%, 0% 100%,
            0% 90%, 1% 80%, 0% 70%, 1% 60%, 0% 50%, 1% 40%, 0% 30%, 1% 20%, 0% 10%
          );
          animation: float 3s ease-in-out infinite;
        }

        .mouse-reactive {
          transition: transform 0.3s ease-out;
        }

        .mouse-reactive-fast {
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </>
  )
}

export function TornShape({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`torn-edge-shape ${className}`}>
      {children}
    </div>
  )
}
