'use client'

import { FadeIn } from '../motion/FadeIn'

const items = [
  {
    title: 'Menos ruído, mais conversão',
    body: 'Um processo consistente reduz perda de contexto e melhora follow‑up.',
  },
  {
    title: 'Previsibilidade que escala',
    body: 'Indicadores e cenários alinhados ao processo real, sem “métrica de vaidade”.',
  },
  {
    title: 'Time mais rápido',
    body: 'Fluxos curtos e visuais claros — o vendedor passa mais tempo vendendo.',
  },
  {
    title: 'Integrações sem travar a operação',
    body: 'Webhooks e contratos versionados para evoluir com ERP/CRM e automações.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">
              Benefícios
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Clareza operacional vira vantagem competitiva
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              A Sellum foi desenhada para operar B2B com ciclos longos, múltiplos decisores e um stack que muda.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.04}>
              <div className="h-full border border-white/[0.08] bg-white/[0.02] p-6 transition hover:bg-white/[0.03]">
                <h3 className="text-lg font-semibold tracking-tight text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{it.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

