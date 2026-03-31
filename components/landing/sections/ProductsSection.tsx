'use client'

import Image from 'next/image'
import { FadeIn } from '../motion/FadeIn'

const bullets = [
  'Pipeline orientado a processo (não a “cards soltos”)',
  'Governança e rastreabilidade por conta e etapa',
  'Integrações e automações com contratos estáveis',
  'Leitura executiva em tempo real para decisão',
]

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">
                Produtos
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Uma visão de produto que dá contexto — e velocidade
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                Tela limpa, hierarquia forte e microinterações que guiam o usuário. É o tipo de experiência que o time sente no primeiro dia.
              </p>

              <ul className="mt-8 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[#4d82ff]" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/demonstracao" className="btn-primary justify-center">
                  Ver demonstração
                </a>
                <a href="/produtos" className="btn-secondary justify-center">
                  Explorar produtos
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_35%_15%,rgba(22,27,169,0.22),transparent_55%)]" />
              <div className="relative overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
                <Image
                  src="/images/mocks/sellum-integrations.svg"
                  alt="Integrações e visão de produto (mock)"
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

