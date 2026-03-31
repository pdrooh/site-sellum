import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Academy',
  description:
    'Academy da Sellum: guias e boas práticas para operação comercial B2B com previsibilidade.',
}

export default function AcademyPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-20">
        <section className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Academy
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            Conteúdo prático para estruturar processo, governança e previsibilidade comercial.
          </p>

          <div className="mt-10 overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
            <Image
              src="/images/mocks/sellum-setup.svg"
              alt="Playbooks e setup (mock)"
              width={1440}
              height={900}
              className="h-auto w-full select-none"
              loading="lazy"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="space-y-3">
              {[
                ['Playbooks', 'Etapas, critérios e SLAs para consistência operacional.'],
                ['Governança', 'Permissões, auditoria e padrões para escalar sem burocracia.'],
                ['Integrações', 'Como conectar ERP/CRM por eventos e contratos versionados.'],
                ['Métricas', 'Indicadores acionáveis para decisão executiva.'],
              ].map(([t, d], idx) => (
                <div key={t} className={idx === 0 ? 'pt-0' : 'border-t border-white/[0.06] pt-5'}>
                  <h2 className="text-lg font-semibold tracking-tight text-white/90">{t}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{d}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/[0.08] bg-white/[0.02] p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">Recomendado</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-white">Guia de implementação</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Um caminho curto para modelar o funil real, ativar governança e integrar o básico sem rework.
              </p>
              <div className="mt-6">
                <a href="/demonstracao" className="btn-secondary w-full justify-center">
                  Ver na demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

