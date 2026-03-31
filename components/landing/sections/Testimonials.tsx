'use client'

import { FadeIn } from '../motion/FadeIn'

const testimonials = [
  {
    quote:
      'A previsibilidade mudou o nosso ritmo. O time parou de “caçar informação” e passou a operar o funil com clareza.',
    name: 'Líder Comercial',
    role: 'Operação B2B',
    tone: 'lilac',
  },
  {
    quote:
      'A integração por eventos foi o diferencial: conseguimos evoluir com ERP/CRM sem quebrar o fluxo do vendedor.',
    name: 'Head de Produto',
    role: 'Stack B2B',
    tone: 'lime',
  },
  {
    quote:
      'A experiência é rápida e objetiva. Dá para sentir que foi feita para operação real, não para demo.',
    name: 'Gestor de Vendas',
    role: 'Time Comercial',
    tone: 'slate',
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

        <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:gap-5 lg:flex-row lg:items-stretch">
          {testimonials.map((t, i) => (
            <FadeIn
              key={t.quote}
              delay={i * 0.04}
              className={`lg:basis-0 ${i === 0 ? 'lg:flex-[1.8]' : 'lg:flex-1'}`}
            >
              <figure
                className={[
                  'group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.10] p-7',
                  'transition-[flex,transform] duration-300 motion-reduce:transition-none',
                  'lg:hover:flex-[2.2] lg:focus-within:flex-[2.2] lg:hover:-translate-y-[1px] lg:focus-within:-translate-y-[1px]',
                  t.tone === 'lilac' ? 'bg-gradient-to-br from-[#d9e7ff] via-[#e9e7ff] to-[#f3e9ff] text-black' : '',
                  t.tone === 'lime' ? 'bg-[#d7ff3f] text-black' : '',
                  t.tone === 'slate' ? 'bg-[#e9eef7] text-black' : '',
                ].join(' ')}
                tabIndex={0}
              >
                <blockquote className="text-pretty text-xl font-medium leading-[1.15] tracking-tight text-black/80 sm:text-2xl">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-8 flex items-center justify-between gap-6 border-t border-black/10 pt-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-black/90">{t.name}</p>
                    <p className="truncate text-xs font-medium text-black/55">{t.role}</p>
                  </div>
                  <span className="text-xs font-medium text-black/40">Depoimento</span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

