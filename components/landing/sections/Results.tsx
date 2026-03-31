'use client'

import { FadeIn } from '../motion/FadeIn'

function Sparkline({ points }: { points: number[] }) {
  const w = 240
  const h = 64
  const pad = 6
  const min = Math.min(...points)
  const max = Math.max(...points)
  const span = Math.max(1e-6, max - min)
  const d = points
    .map((p, i) => {
      const x = pad + (i * (w - pad * 2)) / (points.length - 1)
      const y = pad + (1 - (p - min) / span) * (h - pad * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full" aria-hidden>
      <path d={d} fill="none" stroke="rgba(77,130,255,0.65)" strokeWidth="2.2" />
      <path
        d={`${d} L${w - pad} ${h - pad} L${pad} ${h - pad} Z`}
        fill="rgba(22,27,169,0.10)"
      />
    </svg>
  )
}

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

        <div className="mt-10 sm:mt-12">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
            <FadeIn delay={0.1}>
              <div className="group relative px-2 py-2 sm:px-6 sm:py-6 lg:pr-10">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute left-1/2 top-8 h-44 w-[22rem] -translate-x-1/2 rounded-full bg-[#161BA9]/08 blur-[110px]" />
                </div>
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">Conversão</p>
                  <div className="mt-4 flex items-baseline justify-between gap-6">
                    <p className="text-5xl font-semibold tracking-tight text-white">+18%</p>
                    <div className="w-40 opacity-85">
                      <Sparkline points={[28, 30, 33, 34, 36, 38, 41, 45]} />
                    </div>
                  </div>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">
                    Mais consistência de etapa e follow‑up.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="group relative px-2 py-2 sm:px-6 sm:py-6 lg:border-l lg:border-white/[0.06] lg:px-10">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute left-1/2 top-8 h-44 w-[22rem] -translate-x-1/2 rounded-full bg-[#2a3dd6]/07 blur-[110px]" />
                </div>
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">Ciclo</p>
                  <p className="mt-4 text-5xl font-semibold tracking-tight text-white">−9d</p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">
                    Menos atrito e mais clareza de prioridade.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      ['Qualificação', 62],
                      ['Proposta', 44],
                      ['Negociação', 31],
                    ].map(([k, v]) => (
                      <div key={k} className="grid gap-2">
                        <div className="flex items-center justify-between text-xs text-white/40">
                          <span>{k}</span>
                          <span>{v}%</span>
                        </div>
                        <div className="h-[6px] w-full overflow-hidden rounded-[999px] bg-white/10">
                          <div
                            className="h-full rounded-[999px] bg-gradient-to-r from-[#161BA9] via-[#2a3dd6] to-[#4d82ff]"
                            style={{ width: `${v}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="group relative px-2 py-2 sm:px-6 sm:py-6 lg:border-l lg:border-white/[0.06] lg:pl-10">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute left-1/2 top-8 h-44 w-[22rem] -translate-x-1/2 rounded-full bg-[#161BA9]/08 blur-[110px]" />
                </div>
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">Forecast</p>
                  <div className="mt-4 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-5xl font-semibold tracking-tight text-white">0.92</p>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">
                        Acurácia melhora quando o processo é real.
                      </p>
                    </div>
                    <div className="grid w-44 grid-cols-12 items-end gap-1 opacity-85">
                      {[28, 40, 34, 52, 48, 62, 58, 66, 64, 72, 70, 78].map((h, i) => (
                        <div
                          key={i}
                          className="col-span-1 rounded-[6px] bg-gradient-to-t from-[#161BA9] via-[#2a3dd6] to-[#4d82ff]/90"
                          style={{ height: `${h * 0.55}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

