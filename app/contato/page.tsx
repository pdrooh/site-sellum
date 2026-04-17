import type { Metadata } from 'next'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Sellum: demonstração, dúvidas e parcerias para operação comercial B2B.',
}

export default function ContatoPage() {
  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pt-[calc(7.5rem+env(safe-area-inset-top,0px))] pb-20">
        <section className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Contato
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            Quer uma demonstração, parceria ou falar sobre seu cenário B2B? Manda uma mensagem.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="mt-1 text-sm text-white/60">contato@sellum.app</p>
                </div>
                <a href="mailto:contato@sellum.app" className="btn-secondary justify-center">
                  Enviar email
                </a>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-6">
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
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      className="min-h-[120px] rounded-[8px] px-4 py-3"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Enviar
                  </button>
                  <p className="text-xs text-white/45">Placeholder visual. Podemos integrar com seu backend/CRM.</p>
                </form>
              </div>
            </div>

            <div className="lg:pt-2">
              <div className="overflow-hidden border border-white/[0.10] bg-white/[0.02] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-60px_rgba(22,27,169,0.75)] sm:p-4">
                <Image
                  src="/images/mocks/sellum-dashboard.svg"
                  alt="Visão geral do produto (mock)"
                  width={1440}
                  height={900}
                  className="h-auto w-full select-none"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ['Produto', 'Conheça o fluxo e a estrutura da operação.'],
                  ['Integrações', 'ERP/CRM por eventos e contratos estáveis.'],
                  ['Planos', 'Veja o nível ideal para seu estágio.'],
                  ['Demo', 'Marque uma demonstração objetiva.'],
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
