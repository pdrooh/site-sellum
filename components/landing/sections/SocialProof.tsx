'use client'

import { FadeIn } from '../motion/FadeIn'

const brands = ['Indústria', 'Distribuição', 'SaaS B2B', 'Manufatura', 'Logística', 'Varejo', 'Tech', 'Serviços']

export function SocialProof() {
  const doubled = [...brands, ...brands]
  return (
    <section id="clientes" aria-label="Clientes" className="border-t border-white/[0.06] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-white/45">
            Operações que exigem previsibilidade comercial
          </p>
        </FadeIn>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-20 bg-gradient-to-l from-black to-transparent" />
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 px-6 [will-change:transform]">
          {doubled.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="shrink-0 rounded-[8px] border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white/70"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { 
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_40s_linear_infinite\\] { animation: none !important; transform: translateX(0) !important; }
        }
      `}</style>
    </section>
  )
}

