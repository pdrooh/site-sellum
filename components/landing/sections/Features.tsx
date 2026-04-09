'use client'

import { FadeIn } from '../motion/FadeIn'

const features = [
  {
    title: 'Pipeline com governança',
    body: 'Etapas claras, responsáveis e histórico por conta para eliminar ruído operacional.',
  },
  {
    title: 'Integrações orientadas a eventos',
    body: 'Conecte CRM/ERP e automações com contratos estáveis, sem travar a evolução do stack.',
  },
  {
    title: 'Visibilidade em tempo real',
    body: 'Enxergue gargalos do funil e priorize o que move conversão — com leitura executiva.',
  },
  {
    title: 'Produtividade do vendedor',
    body: 'UX feita para fechar negócio: menos cliques, mais contexto, mais foco no cliente.',
  },
  {
    title: 'Permissões e rastreabilidade',
    body: 'Controle por time e auditoria para compliance comercial e consistência de processo.',
  },
  {
    title: 'Previsão que sustenta decisão',
    body: 'Forecast alinhado ao processo real — com cenários e métricas acionáveis.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">
              Recursos
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Estrutura de produto com sensação de operação real
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Um conjunto enxuto de peças — desenhado para ser rápido, previsível e evolutivo.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.03}>
              <div className="h-full border border-white/[0.08] bg-white/[0.02] p-6 transition hover:bg-white/[0.03]">
                <div className="h-9 w-9 border border-white/[0.10] bg-black/30 shadow-[0_0_0_1px_rgba(42,61,214,0.18)]" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

