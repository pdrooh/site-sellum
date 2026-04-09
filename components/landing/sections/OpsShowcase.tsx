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
          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src="/images/hero/ops-dashboard.jpg"
              alt="Interface de gestão: cupons e operações comerciais"
              width={1024}
              height={335}
              className="h-auto w-full select-none"
              loading="lazy"
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
