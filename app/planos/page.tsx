import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import { Pricing } from '@/components/landing/sections/Pricing'

export const metadata: Metadata = {
  title: 'Planos',
  description:
    'Planos da Sellum para operação comercial B2B — do início à escala com integrações e governança.',
}

export default function PlanosPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <section className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Planos</h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            Quatro níveis para acompanhar seu funil — do dia a dia à escala com integrações e governança.
          </p>
        </section>
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

