import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import { HelpCenter } from '@/components/help/HelpCenter'

export const metadata: Metadata = {
  title: 'Central de Ajuda',
  description:
    'Busque artigos, abra um chamado ou fale com a Sellum por email e WhatsApp — suporte para sua operação B2B.',
}

export default function AjudaPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <HelpCenter />
      </main>
      <Footer />
    </div>
  )
}
