'use client'

import Image from 'next/image'
import { FadeIn } from '../motion/FadeIn'

const erps = [
  { name: 'Totvs', logoSrc: '/images/integrations/totvs.svg' },
  { name: 'Omie', logoSrc: '/images/integrations/omie.svg' },
  { name: 'Bling', logoSrc: '/images/integrations/bling.svg' },
  { name: 'Senior', logoSrc: '/images/integrations/senior.svg' },
  { name: 'Sankhya', logoSrc: '/images/integrations/sankhya.svg' },
  { name: 'Conta Azul', logoSrc: '/images/integrations/conta-azul.svg' },
  { name: 'Olist', logoSrc: '/images/integrations/olist.svg' },
] as const

export function NativeErps() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div>
          <div className="radius-12 overflow-hidden border border-white/[0.08]">
            {/* Mobile: grid simples */}
            <div className="grid grid-cols-2 sm:hidden">
              {erps.map((e, i) => (
                <FadeIn key={e.name} delay={0.04 + i * 0.02} className="border-b border-r border-white/[0.08]">
                  <div className="group flex h-full w-full items-center justify-center px-6 py-8">
                    <Image
                      src={e.logoSrc}
                      alt={e.name}
                      width={560}
                      height={160}
                      className="h-[76px] w-auto opacity-80 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:transform] group-hover:scale-[1.06] group-hover:opacity-100 motion-reduce:transition-none"
                      loading="lazy"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Desktop/tablet: 4 em cima, 3 embaixo (com bordas/divisões) */}
            <div className="hidden sm:block">
              <div className="divide-y divide-white/[0.08]">
                <div className="grid grid-cols-4 divide-x divide-white/[0.08]">
                  {erps.slice(0, 4).map((e, i) => (
                    <FadeIn key={e.name} delay={0.04 + i * 0.02}>
                      <div className="group flex h-full w-full items-center justify-center px-8 py-10">
                        <Image
                          src={e.logoSrc}
                          alt={e.name}
                          width={560}
                          height={160}
                          className="h-[88px] w-auto opacity-80 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:transform] group-hover:scale-[1.06] group-hover:opacity-100 motion-reduce:transition-none lg:h-[104px]"
                          loading="lazy"
                        />
                      </div>
                    </FadeIn>
                  ))}
                </div>

                <div className="grid grid-cols-4 divide-x divide-white/[0.08]">
                  <div aria-hidden />
                  {erps.slice(4).map((e, i) => (
                    <FadeIn key={e.name} delay={0.04 + (i + 4) * 0.02}>
                      <div className="group flex h-full w-full items-center justify-center px-8 py-10">
                        <Image
                          src={e.logoSrc}
                          alt={e.name}
                          width={560}
                          height={160}
                          className="h-[88px] w-auto opacity-80 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:transform] group-hover:scale-[1.06] group-hover:opacity-100 motion-reduce:transition-none lg:h-[104px]"
                          loading="lazy"
                        />
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
