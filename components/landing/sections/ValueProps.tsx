'use client'

import { FadeIn } from '../motion/FadeIn'

function WireIcon({ variant }: { variant: 'cube' | 'blocks' | 'speed' }) {
  if (variant === 'cube') {
    return (
      <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden>
        <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4">
          <path d="M72 64L120 36l48 28-48 28-48-28Z" />
          <path d="M72 64v56l48 28v-56" />
          <path d="M168 64v56l-48 28" />
          <path d="M92 78h56" opacity="0.6" />
          <path d="M92 92h56" opacity="0.45" />
          <path d="M92 106h56" opacity="0.35" />
          <path d="M120 36v56" opacity="0.35" />
        </g>
        <g opacity="0.85">
          <circle cx="120" cy="36" r="2.6" fill="#4D82FF" />
          <circle cx="72" cy="64" r="2.6" fill="#2A3DD6" />
          <circle cx="168" cy="64" r="2.6" fill="#161BA9" />
        </g>
      </svg>
    )
  }
  if (variant === 'blocks') {
    return (
      <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden>
        <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4">
          <path d="M72 96l34-20 34 20-34 20-34-20Z" />
          <path d="M72 96v40l34 20v-40" />
          <path d="M140 96v40l-34 20" />

          <path d="M126 64l26-15 26 15-26 15-26-15Z" opacity="0.85" />
          <path d="M126 64v30l26 15V79" opacity="0.85" />
          <path d="M178 64v30l-26 15" opacity="0.85" />

          <path d="M148 118l20-12 20 12-20 12-20-12Z" opacity="0.65" />
          <path d="M148 118v24l20 12v-24" opacity="0.65" />
          <path d="M188 118v24l-20 12" opacity="0.65" />
        </g>
        <g opacity="0.85">
          <circle cx="106" cy="76" r="2.6" fill="#4D82FF" />
          <circle cx="152" cy="49" r="2.6" fill="#2A3DD6" />
          <circle cx="168" cy="106" r="2.6" fill="#161BA9" />
        </g>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden>
      <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4">
        <path d="M60 132h120" />
        <path d="M60 132l24-18 24 12 24-28 24 18 24-42" />
        <path d="M60 132v-8" opacity="0.5" />
        <path d="M84 132v-16" opacity="0.45" />
        <path d="M108 132v-26" opacity="0.4" />
        <path d="M132 132v-22" opacity="0.45" />
        <path d="M156 132v-38" opacity="0.4" />
        <path d="M180 132v-56" opacity="0.35" />
        <path d="M60 54h120" opacity="0.18" />
      </g>
      <g opacity="0.9">
        <circle cx="84" cy="114" r="2.6" fill="#4D82FF" />
        <circle cx="108" cy="126" r="2.6" fill="#4D82FF" />
        <circle cx="132" cy="98" r="2.6" fill="#2A3DD6" />
        <circle cx="156" cy="116" r="2.6" fill="#2A3DD6" />
        <circle cx="180" cy="74" r="2.6" fill="#161BA9" />
      </g>
    </svg>
  )
}

const items = [
  {
    icon: 'cube' as const,
    title: 'Operação com propósito',
    body: 'Processo claro, rastreável e consistente — feito para ciclos longos e múltiplos decisores.',
  },
  {
    icon: 'blocks' as const,
    title: 'Fluxos conectados',
    body: 'Integrações e automações que sustentam o funil sem travar evolução do stack (ERP/CRM/eventos).',
  },
  {
    icon: 'speed' as const,
    title: 'Decisão com velocidade',
    body: 'Visibilidade em tempo real e leitura executiva para remover gargalos e aumentar conversão.',
  },
]

export function ValueProps() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
            Uma nova forma de operar o funil comercial. Feita para times modernos e stacks em evolução.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:mt-14 lg:grid-cols-3 lg:gap-0">
          {items.map((it, idx) => (
            <FadeIn key={it.title} delay={0.08 + idx * 0.06}>
              <div
                className={[
                  'group relative flex min-h-[420px] flex-col px-2 py-2 sm:min-h-[460px] sm:px-6 sm:py-6',
                  idx > 0 ? 'lg:border-l lg:border-white/[0.06]' : '',
                ].join(' ')}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute left-1/2 top-6 h-48 w-[26rem] -translate-x-1/2 rounded-full bg-[#161BA9]/10 blur-[100px]" />
                </div>

                <div className="relative px-4 pt-6 sm:px-8 sm:pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                    FIG 0.{idx + 2}
                  </p>
                </div>

                <div className="relative flex flex-1 items-center justify-center px-4 py-8 sm:px-10">
                  <div className="h-[210px] w-[280px] opacity-70 transition duration-300 group-hover:opacity-95 sm:h-[240px] sm:w-[320px]">
                    <div className="h-full w-full transition duration-300 group-hover:-translate-y-0.5">
                      <WireIcon variant={it.icon} />
                    </div>
                  </div>
                </div>

                <div className="relative px-4 pb-6 sm:px-8 sm:pb-8">
                  <h3 className="text-sm font-semibold tracking-tight text-white/90">
                    {it.title}
                  </h3>
                  <p className="mt-2 max-w-[22rem] text-sm leading-relaxed text-white/45">
                    {it.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

