'use client'

const clients = [
  'Vercel',
  'Cursor',
  'Oscar',
  'OpenAI',
  'Coinbase',
  'Cash App',
  'Boom',
  'Ramp',
  'Stripe',
  'Notion',
  'Figma',
  'Slack',
] as const

export function ClientMarquee() {
  return (
    <section aria-label="Clientes" className="bg-black py-10 sm:py-12">
      <div className="relative overflow-hidden">
        <div
          className="relative"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div
            className="group flex w-max [will-change:transform] motion-safe:animate-[sellum-marquee_58s_linear_infinite] hover:[animation-play-state:paused]"
            style={{ ['--marquee-gap' as never]: '3.25rem' }}
          >
            <div className="flex items-center gap-[var(--marquee-gap)] px-6 sm:px-10">
              {clients.map((name) => (
                <span
                  key={name}
                  className="select-none whitespace-nowrap text-base font-semibold tracking-tight text-white/55 transition group-hover:text-white/65 sm:text-lg"
                >
                  {name}
                </span>
              ))}
            </div>
            <div
              className="flex items-center gap-[var(--marquee-gap)] px-6 sm:px-10"
              aria-hidden
            >
              {clients.map((name) => (
                <span
                  key={`${name}-dup`}
                  className="select-none whitespace-nowrap text-base font-semibold tracking-tight text-white/55 transition group-hover:text-white/65 sm:text-lg"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sellum-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[sellum-marquee_58s_linear_infinite\\] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}

