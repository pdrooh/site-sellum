'use client'

import Image from 'next/image'
import { FadeIn } from '../motion/FadeIn'

const erps = [
  { name: 'Totvs', logoSrc: '/images/integrations/totvs.svg', note: 'Integração nativa' },
  { name: 'Omie', logoSrc: '/images/integrations/omie.svg', note: 'Integração nativa' },
  { name: 'Bling', logoSrc: '/images/integrations/bling.svg', note: 'Integração nativa' },
  { name: 'Senior', logoSrc: '/images/integrations/senior.svg', note: 'Integração nativa' },
  { name: 'Sankhya', logoSrc: '/images/integrations/sankhya.svg', note: 'Integração nativa' },
  { name: 'Conta Azul', logoSrc: '/images/integrations/conta-azul.svg', note: 'Integração nativa' },
  { name: 'Olist', logoSrc: '/images/integrations/olist.svg', note: 'Integração nativa' },
] as const

export function NativeErps() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/28">
              ERPs nativos
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Integrações pensadas para operação
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/50 sm:text-lg">
              Conecte dados essenciais sem perder governança. Estruture o fluxo e deixe a integração sustentar a escala.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-75" aria-hidden>
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#161BA9]/10 blur-[140px]" />
            </div>

            <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {erps.map((e, i) => (
                <FadeIn key={e.name} delay={0.04 + i * 0.02}>
                  <div className="group flex min-h-[72px] items-center justify-between gap-4 border border-white/[0.08] bg-white/[0.02] px-5 transition duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/[0.08] bg-black/30">
                        <Image
                          src={e.logoSrc}
                          alt={e.name}
                          width={120}
                          height={36}
                          className="h-5 w-auto opacity-80 transition group-hover:opacity-100"
                          loading="lazy"
                        />
                      </span>
                      <span className="truncate text-sm font-semibold text-white/75 transition group-hover:text-white">
                        {e.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-white/35">{e.note}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.14}>
              <div className="mt-8 flex justify-center">
                <a href="/api" className="btn-secondary">
                  Ver API e integrações
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
