'use client'

import Image from 'next/image'
import { FadeIn } from '../motion/FadeIn'

const steps = [
  {
    k: '1',
    title: 'Conecte suas fontes',
    body: 'Integre CRM/ERP e canais. Comece simples e evolua sem rework.',
  },
  {
    k: '2',
    title: 'Modele o funil real',
    body: 'Etapas, responsáveis, SLAs e critérios claros para consistência.',
  },
  {
    k: '3',
    title: 'Ative governança',
    body: 'Permissões, auditoria e padrões para o time operar em escala.',
  },
  {
    k: '4',
    title: 'Monitore e ajuste',
    body: 'Visibilidade em tempo real para remover gargalos e subir conversão.',
  },
]

export function Setup() {
  return (
    <section id="setup" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">Setup</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Configure em passos curtos, com base sólida
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                Um caminho direto para sair do “cada um faz de um jeito” e operar com previsibilidade.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {steps.map((s, i) => (
                  <FadeIn key={s.k} delay={i * 0.03}>
                    <div className="h-full border border-white/[0.08] bg-white/[0.02] p-6 transition hover:bg-white/[0.03]">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-white/55">Passo</span>
                        <span className="inline-flex h-8 w-8 items-center justify-center border border-white/10 bg-black/35 text-sm font-semibold text-white/80">
                          {s.k}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 opacity-70" aria-hidden>
                <div className="absolute -top-14 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-[#161BA9]/18 blur-[120px]" />
              </div>
              <div className="relative overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
                <Image
                  src="/images/mocks/sellum-setup.svg"
                  alt="Fluxo de configuração (mock)"
                  width={1440}
                  height={900}
                  className="h-auto w-full select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

