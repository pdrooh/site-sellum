'use client'

import { FadeIn } from '../motion/FadeIn'

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.02] px-6 py-14 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
              <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#161BA9]/14 blur-[130px]" />
              <div className="absolute -right-36 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#2a3dd6]/10 blur-[130px]" />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                Construída para o futuro. Pronta hoje.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
                Se você quer previsibilidade comercial sem perder velocidade, a Sellum foi desenhada para sua operação B2B.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
