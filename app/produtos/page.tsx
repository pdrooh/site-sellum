import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'Visão dos produtos e módulos da Sellum para operação comercial B2B: pipeline, governança, integrações e previsibilidade.',
}

export default function ProdutosPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-20">
        <section className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Produtos
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            Módulos desenhados para operação B2B — com UX de produto premium e base técnica para evoluir sem travar.
          </p>

          <div className="mt-10 overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
            <Image
              src="/images/mocks/sellum-dashboard.svg"
              alt="Dashboard Sellum (mock)"
              width={1440}
              height={900}
              className="h-auto w-full select-none"
              priority={false}
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Pipeline', 'Etapas, critérios, SLAs e leitura de gargalos.'],
              ['Contas', 'Histórico por conta e contexto para ciclos longos.'],
              ['Governança', 'Permissões, auditoria e consistência operacional.'],
              ['Integrações', 'Conectores e eventos para ERP/CRM e automação.'],
            ].map(([t, d]) => (
              <div key={t} className="border border-white/[0.08] bg-white/[0.02] p-6">
                <h2 className="text-lg font-semibold tracking-tight text-white">{t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="/demonstracao" className="btn-primary justify-center">
              Ver demonstração
            </a>
            <a href="/planos" className="btn-secondary justify-center">
              Ver planos
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

