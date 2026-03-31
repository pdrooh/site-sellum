'use client'

import { FadeIn } from '../motion/FadeIn'

type Plan = {
  id: string
  name: string
  price: string
  note: string
  features: string[]
  highlight?: boolean
}

const plans: Plan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 'R$ 990',
    note: 'Para começar com base sólida.',
    features: ['Pipeline e contas', 'Atividades e histórico', 'Visão operacional', 'Exportação'],
  },
  {
    id: 'crescimento',
    name: 'Crescimento',
    price: 'R$ 2.490',
    note: 'Para times em tração.',
    highlight: true,
    features: ['Governança do processo', 'Automação por eventos', 'Integrações essenciais', 'Relatórios'],
  },
  {
    id: 'escala',
    name: 'Escala',
    price: 'R$ 5.990',
    note: 'Para operação em escala.',
    features: ['Permissões avançadas', 'Auditoria', 'Conectores ERP/CRM', 'SLA e alertas'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Sob consulta',
    note: 'Para ambientes críticos.',
    features: ['SSO', 'Ambientes/tenancy', 'Segurança e compliance', 'Suporte dedicado'],
  },
]

export function Pricing() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Planos para acompanhar sua operação.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Quatro níveis de maturidade — do início à escala com integrações e governança.
            </p>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, idx) => (
            <FadeIn key={p.id} delay={0.08 + idx * 0.05}>
              <div
                className={[
                  'group relative h-full overflow-hidden border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]',
                  p.highlight ? 'shadow-[0_0_0_1px_rgba(42,61,214,0.18),0_30px_90px_-70px_rgba(22,27,169,0.85)]' : '',
                ].join(' ')}
              >
                {p.highlight && (
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                    <div className="absolute -top-20 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-[#161BA9]/12 blur-[110px]" />
                  </div>
                )}

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold tracking-tight text-white/90">{p.name}</p>
                    {p.highlight && (
                      <span className="inline-flex items-center rounded-[999px] border border-white/[0.10] bg-black/35 px-3 py-1 text-[11px] font-medium text-white/55">
                        Mais popular
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{p.price}</p>
                  <p className="mt-2 text-sm text-white/45">{p.note}</p>

                  <ul className="mt-6 space-y-2 text-sm text-white/60">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <a href="/demonstracao" className="btn-secondary w-full justify-center">
                      Falar com a Sellum
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

