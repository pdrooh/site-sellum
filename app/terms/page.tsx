import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Termos de uso da Sellum.',
}

export default function TermsPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-20">
        <section className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Terms</h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            Página placeholder. Aqui vão os termos de uso oficiais da Sellum.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

