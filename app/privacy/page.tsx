import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Política de privacidade da Sellum.',
}

export default function PrivacyPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-20">
        <section className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Privacy</h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            Esta página descreve, em alto nível, como a Sellum trata dados. O texto final deve ser revisado pelo seu jurídico
            antes de publicação.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-white">Coleta</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Coletamos informações necessárias para operar a plataforma (ex.: dados de conta, funil e integrações), além de
                dados técnicos para segurança e performance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-white">Uso</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Usamos dados para fornecer funcionalidades, suporte, segurança, auditoria e melhoria contínua do produto.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-white">Retenção e exclusão</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Políticas de retenção variam por contrato. Quando aplicável, oferecemos mecanismos de exportação e exclusão.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

