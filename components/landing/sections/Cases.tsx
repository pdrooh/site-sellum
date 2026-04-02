import { FadeIn } from '../motion/FadeIn'

const cases = [
  {
    tag: 'Adoção',
    quote:
      'A operação ganhou ritmo. O time parou de “procurar informação” e passou a agir com contexto e prioridade clara.',
    role: 'Liderança Comercial',
    context: 'Operação B2B',
    accent: 'from-sky-400/80 to-blue-700/90',
  },
  {
    tag: 'Integrações',
    quote:
      'Integrações por eventos nos deram segurança para evoluir ERP/CRM sem quebrar o funil. A governança ficou sólida.',
    role: 'Head de Produto',
    context: 'Stack comercial',
    accent: 'from-violet-400/80 to-indigo-800/90',
  },
  {
    tag: 'Forecast',
    quote:
      'A leitura executiva ficou simples: gargalo aparece, ação acontece. O processo ficou consistente sem virar burocracia.',
    role: 'Gestão de Vendas',
    context: 'Time comercial',
    accent: 'from-emerald-400/75 to-teal-800/90',
  },
] as const

export function Cases() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20 lg:py-24">
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

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {cases.map((item, i) => (
            <FadeIn key={item.tag} delay={0.08 + i * 0.07} className="h-full">
              <article
                className="group relative flex h-full flex-col overflow-hidden border-0 bg-white/[0.035] p-6 shadow-none backdrop-blur-xl transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.055] hover:shadow-[0_28px_70px_-36px_rgba(22,27,169,0.38)] sm:p-7"
                style={{ borderRadius: '14px' }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    borderRadius: '14px',
                    background:
                      'radial-gradient(120% 80% at 50% 0%, rgba(22, 27, 169, 0.12) 0%, transparent 55%)',
                  }}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">Case</p>
                  <span className="shrink-0 rounded-[8px] bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/78 backdrop-blur-sm sm:text-xs">
                    {item.tag}
                  </span>
                </div>

                <blockquote className="relative mt-6 flex-1">
                  <p className="text-pretty text-[1.05rem] leading-[1.55] text-white/[0.92] sm:text-lg sm:leading-relaxed">
                    <span className="font-serif text-[1.15em] text-white/25" aria-hidden>
                      &ldquo;
                    </span>
                    {item.quote}
                    <span className="font-serif text-[1.15em] text-white/25" aria-hidden>
                      &rdquo;
                    </span>
                  </p>
                </blockquote>

                <div
                  className="relative mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
                  aria-hidden
                />

                <div className="relative mt-6 flex items-center gap-3.5">
                  <div
                    className={`h-11 w-11 shrink-0 bg-gradient-to-br ${item.accent} shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]`}
                    style={{ borderRadius: '50%' }}
                    aria-hidden
                  />
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold tracking-tight text-white sm:text-[0.95rem]">{item.role}</p>
                    <p className="mt-0.5 text-xs text-white/48 sm:text-[0.8125rem]">{item.context}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
