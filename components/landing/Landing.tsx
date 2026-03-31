'use client'

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { ClientMarquee } from './sections/ClientMarquee'
import { ValueProps } from './sections/ValueProps'
import { OpsShowcase } from './sections/OpsShowcase'
import { Results } from './sections/Results'
import { NativeErps } from './sections/NativeErps'
import { Cases } from './sections/Cases'
import { Pricing } from './sections/Pricing'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

const transition = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 34,
  mass: 0.72,
}

export function Landing() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={transition}>
        <div className="page-atmosphere min-h-full">
          <a
            href="#conteudo-principal"
            className="sr-only z-[100] rounded-lg px-4 py-2 text-sm font-medium text-white focus:fixed focus:left-4 focus:top-4 focus:not-sr-only focus:outline-none"
          >
            Ir para o conteúdo principal
          </a>
          <Header />
          <main id="conteudo-principal" className="relative z-[1]" tabIndex={-1}>
            <Hero />
            <ClientMarquee />
            <ValueProps />
            <OpsShowcase />
            <Results />
            <NativeErps />
            <Cases />
            <Pricing />
            <FinalCta />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

