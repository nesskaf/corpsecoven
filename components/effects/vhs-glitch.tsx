'use client'

export function VhsGlitch() {
  return (
    <>
      <style jsx>{`
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(-3px, 0);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(3px, 0);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(-3px, 0);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(0, 0);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(3px, 0);
          }
        }

        @keyframes scan-lines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }

        .vhs-scanlines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(255, 0, 110, 0.4),
              rgba(255, 0, 110, 0.4) 1px,
              transparent 1px,
              transparent 2px
            );
          pointer-events: none;
          z-index: 9998;
          animation: scan-lines 8s linear infinite;
        }

        .glitch-text {
          position: relative;
          display: inline-block;
        }

        .glitch-text::before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          top: 0;
          width: 100%;
          height: 100%;
          color: #ff006e;
          animation: glitch 2.5s infinite;
          z-index: -1;
        }

        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          top: 0;
          width: 100%;
          height: 100%;
          color: #00f5ff;
          animation: glitch 2.5s infinite reverse;
          z-index: -2;
        }
      `}</style>
      <div className="vhs-scanlines" />
    </>
  )
}

export function GlitchText({ children, dataText }: { children: React.ReactNode; dataText?: string }) {
  const text = dataText || String(children)
  return (
    <span className="glitch-text" data-text={text}>
      {children}
    </span>
  )
}
