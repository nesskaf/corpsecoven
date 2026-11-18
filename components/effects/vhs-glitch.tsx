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

        @keyframes vhs-flicker {
          0%, 100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.08;
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
              rgba(255, 0, 110, 0.03),
              rgba(255, 0, 110, 0.03) 1px,
              transparent 1px,
              transparent 2px
            );
          pointer-events: none;
          z-index: 9998;
          animation: scan-lines 8s linear infinite;
        }

        .vhs-glitch-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            linear-gradient(
              0deg,
              transparent 24%,
              rgba(255, 0, 110, 0.05) 25%,
              rgba(255, 0, 110, 0.05) 26%,
              transparent 27%,
              transparent 74%,
              rgba(255, 0, 110, 0.05) 75%,
              rgba(255, 0, 110, 0.05) 76%,
              transparent 77%,
              transparent
            );
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 9999;
          animation: vhs-flicker 0.15s infinite;
          mix-blend-mode: screen;
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
      <div className="vhs-glitch-overlay" />
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
