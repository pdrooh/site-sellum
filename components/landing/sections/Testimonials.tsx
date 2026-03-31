'use client'

import { FadeIn } from '../motion/FadeIn'

const testimonials = [
  {
    quote:
      'A previsibilidade mudou o nosso ritmo. O time parou de “caçar informação” e passou a operar o funil com clareza.',
    name: 'Líder Comercial',
    role: 'Operação B2B',
  },
  {
    quote:
      'A integração por eventos foi o diferencial: conseguimos evoluir com ERP/CRM sem quebrar o fluxo do vendedor.',
    name: 'Head de Produto',
    role: 'Stack B2B',
  },
  {
    quote:
      'A experiência é rápida e objetiva. Dá para sentir que foi feita para operação real, não para demo.',
    name: 'Gestor de Vendas',
    role: 'Time Comercial',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">
              Depoimentos
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Confiança que se constrói na operação
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Feedbacks curtos, objetivos — com foco em resultado.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.quote} delay={i * 0.04}>
              <figure className="h-full border border-white/[0.08] bg-white/[0.02] p-6">
                <blockquote className="text-sm leading-relaxed text-white/75">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-white/[0.08] pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs font-medium text-white/50">{t.role}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

