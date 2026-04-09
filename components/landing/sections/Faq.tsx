'use client'

import { useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { FadeIn } from '../motion/FadeIn'

const items = [
  {
    q: 'A Sellum substitui meu CRM atual?',
    a: 'Depende do seu cenário. Em muitos casos a Sellum centraliza o funil B2B e convive com o CRM/ERP via integrações. Na demo avaliamos o melhor caminho.',
  },
  {
    q: 'Quanto tempo leva para o time adotar?',
    a: 'O foco é reduzir curva de aprendizado com fluxos claros e UX de operação. Em geral o time sente ganho rápido por padronização e visibilidade.',
  },
  {
    q: 'Funciona para equipes pequenas e médias?',
    a: 'Sim. O valor está em processo e previsibilidade — independente do tamanho. A configuração pode começar simples e evoluir conforme a operação cresce.',
  },
  {
    q: 'Como solicitar uma demonstração?',
    a: 'Clique em “Começar agora” ou “Solicitar demonstração”. A gente entra em contato para alinhar contexto e agenda.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">FAQ</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Respostas diretas, sem ruído
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              O essencial para acelerar a decisão.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-2 sm:mt-12 sm:space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <FadeIn key={it.q} delay={i * 0.03}>
                <button
                  type="button"
                  className="w-full border border-white/[0.08] bg-white/[0.02] text-left transition hover:bg-white/[0.03]"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:py-5">
                    <span className="text-sm font-medium text-white sm:text-base">{it.q}</span>
                    <span className="flex h-8 w-8 items-center justify-center border border-white/10 bg-black/30 text-sm text-white/60">
                      {isOpen ? '−' : '+'}
                    </span>
                  </span>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                        }
                        className="overflow-hidden"
                      >
                        <p className="border-t border-white/[0.06] px-5 pb-4 pt-0 text-sm leading-relaxed text-white/65 sm:pb-5">
                          {it.a}
                        </p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </button>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

