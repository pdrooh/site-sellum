import { FadeIn } from '../motion/FadeIn'

const stats = [
  { k: 'Governança', v: 'menos ruído', d: 'Fluxo único com prioridade e contexto para execução.' },
  { k: 'Pipeline', v: 'mais clareza', d: 'Visibilidade do primeiro contato ao fechamento.' },
  { k: 'Tempo', v: 'mais foco', d: 'Sinais viram ação sem re-trabalho no dia a dia.' },
] as const

export function Results() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Resultados que aparecem no funil.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Métricas de referência (variam por operação). A ideia é simples: clareza + governança = execução melhor.
            </p>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {stats.map((s, i) => (
            <FadeIn key={s.k} delay={0.08 + i * 0.06}>
              <div
                className="relative overflow-hidden bg-white/[0.035] p-6 backdrop-blur-xl sm:p-7"
                style={{ borderRadius: '14px' }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
                  <div className="absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#161BA9]/10 blur-[120px]" />
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">{s.k}</p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">{s.v}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{s.d}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

