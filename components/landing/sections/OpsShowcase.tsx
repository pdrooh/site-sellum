'use client'

import Image from 'next/image'
import { FadeIn } from '../motion/FadeIn'

export function OpsShowcase() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Operações comerciais mais auto‑guiadas.
            </h2>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Transforme conversas, sinais e dados de ERP/CRM em ações rastreáveis — roteadas para o time certo, com clareza de prioridade e contexto.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
            <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
              <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#161BA9]/12 blur-[110px]" />
              <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#2a3dd6]/08 blur-[110px]" />
            </div>
            <Image
              src="/images/mocks/sellum-ops-feed.svg"
              alt="Operações e automações (mock)"
              width={1440}
              height={900}
              className="relative h-auto w-full select-none"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

