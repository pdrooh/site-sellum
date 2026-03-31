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
    <section aria-label="Clientes" className="border-t border-white/[0.06] py-10 sm:py-12">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
          <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#161BA9]/10 blur-[110px]" />
          <div className="absolute -right-28 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#2a3dd6]/08 blur-[110px]" />
        </div>

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

