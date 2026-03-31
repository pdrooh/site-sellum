'use client'

import { FadeIn } from '../motion/FadeIn'

export function VisualDemo() {
  return (
    <section id="demo" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">
                Demonstração visual
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Um dashboard que parece produto — não slide
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                Layout organizado, leitura rápida e microdetalhes que guiam a atenção. Sem excesso — só o que melhora decisão.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#solicitar-demo" className="btn-primary justify-center">
                  Solicitar demonstração
                </a>
                <a href="#features" className="btn-secondary justify-center">
                  Ver recursos
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_30%_20%,rgba(22,27,169,0.22),transparent_55%)]" />
              <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    Visão executiva
                  </p>
                  <span className="rounded-[8px] border border-white/10 bg-black/35 px-2 py-1 text-[10px] font-medium text-white/70">
                    Atualizado agora
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    ['Conversão', '+18%'],
                    ['Ciclo', '−9 dias'],
                    ['Forecast', '0.92'],
                  ].map(([k, v]) => (
                    <div key={k} className="border border-white/[0.08] bg-black/35 p-4">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">{k}</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border border-white/[0.06] bg-black/35 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">Pipeline</p>
                    <p className="text-[11px] font-medium text-[#4d82ff]">latência 12ms</p>
                  </div>
                  <div className="mt-3 grid grid-cols-12 gap-1">
                    {[9, 7, 10, 6, 8, 11, 7, 9, 6, 10, 8, 9].map((h, i) => (
                      <div
                        key={i}
                        className="col-span-1 rounded-[8px] bg-gradient-to-t from-[#161BA9] via-[#2a3dd6] to-[#4d82ff]/85"
                        style={{ height: `${h * 6}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

