export function VhsGlitch() {
  return (
    <>
      <style jsx>{`
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(0, -20px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(-2px, 20px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, 5px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, -5px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(0, -10px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, 10px);
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

        @keyframes chromatic-shift {
          0%, 100% {
            text-shadow: -2px 0 #ff00de, 2px 0 #00ffff;
          }
          50% {
            text-shadow: 2px 0 #ff00de, -2px 0 #00ffff;
          }
        }

        .vhs-container {
          position: relative;
          overflow: hidden;
        }

        .vhs-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(255, 0, 222, 0.03),
              rgba(255, 0, 222, 0.03) 1px,
              transparent 1px,
              transparent 2px
            );
          pointer-events: none;
          z-index: 9999;
          animation: scan-lines 8s linear infinite;
        }

        .glitch-text {
          position: relative;
          display: inline-block;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch 2.5s infinite;
          color: #ff00de;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch 2.5s infinite reverse;
          color: #00ffff;
          z-index: -2;
        }

        .glitch-blur {
          animation: chromatic-shift 3s infinite;
        }
      `}</style>
    </>
  )
}

export function GlitchText({ children, dataText }: { children: React.ReactNode; dataText?: string }) {
  return (
    <span className="glitch-text glitch-blur" data-text={dataText || String(children)}>
      {children}
    </span>
  )
}
