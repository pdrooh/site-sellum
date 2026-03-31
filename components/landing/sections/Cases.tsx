'use client'

import { FadeIn } from '../motion/FadeIn'

const items = [
  {
    quote:
      'A operação ganhou ritmo. O time parou de “procurar informação” e passou a agir com contexto e prioridade clara.',
    name: 'Liderança Comercial',
    role: 'Operação B2B',
    tag: 'Adoção',
  },
  {
    quote:
      'Integrações por eventos nos deram segurança para evoluir ERP/CRM sem quebrar o funil. A governança ficou sólida.',
    name: 'Head de Produto',
    role: 'Stack comercial',
    tag: 'Integrações',
  },
  {
    quote:
      'A leitura executiva ficou simples: gargalo aparece, ação acontece. O processo ficou consistente sem virar burocracia.',
    name: 'Gestão de Vendas',
    role: 'Time comercial',
    tag: 'Forecast',
  },
] as const

export function Cases() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Testemunhais e cases que parecem operação real.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Histórias curtas, foco em impacto. Menos ruído no dia a dia, mais previsibilidade para escalar.
            </p>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {items.map((t, idx) => (
            <FadeIn key={t.quote} delay={0.08 + idx * 0.06}>
              <figure className="group relative h-full overflow-hidden border border-white/[0.08] bg-white/[0.02] p-8 transition duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute -top-24 left-1/2 h-56 w-[30rem] -translate-x-1/2 rounded-full bg-[#161BA9]/10 blur-[110px]" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                      Case
                    </span>
                    <span className="inline-flex items-center rounded-[999px] border border-white/[0.10] bg-black/35 px-3 py-1 text-[11px] font-medium text-white/55">
                      {t.tag}
                    </span>
                  </div>

                  <blockquote className="mt-6 text-pretty text-sm leading-relaxed text-white/70 sm:text-[15px]">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-8 border-t border-white/[0.08] pt-5">
                    <p className="text-sm font-semibold text-white/85">{t.name}</p>
                    <p className="mt-1 text-xs font-medium text-white/45">{t.role}</p>
                  </figcaption>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
