import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Demonstração',
  description:
    'Solicite uma demonstração da Sellum e veja o fluxo completo do funil B2B com governança e integrações.',
}

export default function DemonstracaoPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-20">
        <section className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Demonstração
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
                Conte seu contexto e a gente prepara uma demo objetiva, no seu cenário B2B — com governança e integrações.
              </p>

              <div className="mt-10 border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-white/75" htmlFor="nome">
                      Nome
                    </label>
                    <input id="nome" name="nome" className="h-11 rounded-[8px] px-4" placeholder="Seu nome" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-white/75" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="h-11 rounded-[8px] px-4"
                      placeholder="voce@empresa.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-white/75" htmlFor="mensagem">
                      Contexto
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      className="min-h-[120px] rounded-[8px] px-4 py-3"
                      placeholder="Descreva sua operação, stack (ERP/CRM) e objetivo."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Solicitar demonstração
                  </button>
                  <p className="text-xs text-white/45">
                    Placeholder visual. Podemos integrar com seu backend/CRM.
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:pt-2">
              <div className="overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
                <Image
                  src="/images/mocks/sellum-ops-feed.svg"
                  alt="Operações e automações (mock)"
                  width={1440}
                  height={900}
                  className="h-auto w-full select-none"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ['Tempo real', 'Visibilidade do funil e ações rastreáveis.'],
                  ['Integrações', 'ERP/CRM por eventos e contratos estáveis.'],
                  ['Governança', 'Permissões e auditoria quando necessário.'],
                  ['Operação', 'Menos ruído, mais execução consistente.'],
                ].map(([t, d]) => (
                  <div key={t} className="border border-white/[0.08] bg-white/[0.02] p-5">
                    <p className="text-sm font-semibold text-white/85">{t}</p>
                    <p className="mt-2 text-sm text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

