'use client'

import Image from 'next/image'
import { m, useReducedMotion } from 'framer-motion'

function ProductVisual() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 opacity-60"
        aria-hidden
      >
        <div className="absolute -top-12 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-[#161BA9]/20 blur-[120px]" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-[#2a3dd6]/12 blur-[120px]" />
      </div>

      <div className="relative overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
        <Image
          src="/images/mocks/sellum-dashboard.svg"
          alt="Dashboard Sellum (mock)"
          width={1440}
          height={900}
          className="h-auto w-full select-none"
          priority
        />
      </div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.22, delayChildren: 0.28 },
    },
  } as const

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 1.05, ease },
    },
  } as const

  return (
    <section className="relative overflow-hidden pt-[calc(8.25rem+env(safe-area-inset-top,0px))] pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-52 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#161BA9]/16 blur-[130px]" />
        <div className="absolute -right-52 top-0 h-[30rem] w-[30rem] rounded-full bg-[#2a3dd6]/10 blur-[130px]" />
      </div>

      <div className="relative z-[1] mx-auto max-w-7xl px-4 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[44rem] text-left"
        >
          <m.h1
            variants={item}
            className="text-balance text-[clamp(2.1rem,4.6vw+0.5rem,3.6rem)] font-semibold leading-[1.03] tracking-tight text-white"
          >
            A plataforma comercial para operar B2B
            <br className="hidden sm:block" />
            com previsibilidade
          </m.h1>

          <m.p
            variants={item}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg"
          >
              Pipeline, governança e integrações em um fluxo único — pensado para decisão rápida e execução consistente.
          </m.p>
        </m.div>

        <m.div
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-10 sm:mt-12"
          transition={reduce ? { duration: 0 } : { delay: 0.48 }}
        >
          <m.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 1.25, ease }}
          >
            <ProductVisual />
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

