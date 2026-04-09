'use client'

import { useState } from 'react'
import { m, useReducedMotion } from 'framer-motion'

/** Sellum primary */
const ACCENT = '#161BA9'
const ACCENT_RGB = '22, 27, 169'

const modules = [
  {
    id: 'loja',
    label: 'Loja virtual',
    Icon: IconCart,
  },
  {
    id: 'ia',
    label: 'Agentes de IA',
    Icon: IconSparkles,
  },
  {
    id: 'crm',
    label: 'CRM',
    Icon: IconFunnel,
  },
  {
    id: 'bi',
    label: 'BI',
    Icon: IconChart,
  },
  {
    id: 'help',
    label: 'Help desk',
    Icon: IconHeadphones,
  },
  {
    id: 'op',
    label: 'Ordens de produção',
    Icon: IconDocument,
  },
] as const

function IconCart(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={props.className} aria-hidden>
      <path d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  )
}

function IconSparkles(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M12 2l1.2 4.2L17.4 7.4l-4.2 1.2L12 12.8l-1.2-4.2L6.6 7.4l4.2-1.2L12 2zM5 14l.8 2.8L8.6 18l-2.8.8L5 21.6l-.8-2.8L1.4 18l2.8-.8L5 14zm14 2l.6 2.2 2.2.6-2.2.6L19 21.4l-.6-2.2-2.2-.6 2.2-.6L19 16z" />
    </svg>
  )
}

function IconFunnel(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={props.className} aria-hidden>
      <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" strokeLinejoin="round" />
    </svg>
  )
}

function IconChart(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={props.className} aria-hidden>
      <path d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconHeadphones(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={props.className} aria-hidden>
      <path d="M4 14v3a2 2 0 002 2h1M20 14v3a2 2 0 01-2 2h-1M6 14h2v5H6a2 2 0 01-2-2v-1a6 6 0 0112 0v1a2 2 0 01-2 2h-2v-5h2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14a8 8 0 0116 0" strokeLinecap="round" />
    </svg>
  )
}

function IconDocument(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={props.className} aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Fundo de toda a seção Hero (mesma linguagem visual do painel anterior) */
function HeroBackdrop() {
  /* Só suaviza o topo (área do header); base fica opaca até o fim da seção — evita “costura” com a próxima */
  const edgeFade = {
    maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 100%)',
  }

  return (
    <div className="absolute inset-0 min-h-full w-full overflow-hidden" style={edgeFade}>
      <div className="relative h-full min-h-[100%] w-full">
        <div className="absolute inset-0 bg-black" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 120% 90% at 62% 42%, rgba(${ACCENT_RGB}, 0.34) 0%, rgba(${ACCENT_RGB}, 0.09) 45%, transparent 68%)`,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-75"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 88% 22%, rgba(129, 140, 248, 0.14) 0%, transparent 50%)',
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.04] from-[0%] via-transparent via-50% to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(100deg, rgba(0,0,0,0.35) 0%, transparent 38%, transparent 62%, rgba(${ACCENT_RGB}, 0.12) 100%)`,
          }}
          aria-hidden
        />
      </div>
    </div>
  )
}

const cardSpring = { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.85 }
const overlayEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Hero() {
  const reduce = useReducedMotion()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const defaultActive = 'crm'
  const activeId = hoveredId ?? defaultActive

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  } as const

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration: 1.05, ease },
    },
  } as const

  return (
    <section className="relative isolate flex min-h-0 flex-1 flex-col overflow-hidden pt-[calc(8.25rem+env(safe-area-inset-top,0px))] pb-4 sm:pt-32 sm:pb-5 lg:pt-32 lg:pb-6">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <HeroBackdrop />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/94 via-black/55 to-transparent sm:via-black/42"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col px-4 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl flex-1 text-left lg:py-1"
        >
          <m.h1
            variants={item}
            className="max-w-4xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl"
          >
            <span className="block">Plataforma de vendas com IA</span>
            <span className="mt-1 block sm:mt-1.5">preditiva para escala B2B no digital</span>
          </m.h1>

          <m.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Pipeline, governança e integrações em um fluxo único — decisão rápida e execução consistente.
          </m.p>
        </m.div>

        <m.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={reduce ? { duration: 0 } : { delay: 0.35 }}
          className="mt-auto grid shrink-0 grid-cols-2 gap-3 pt-6 sm:grid-cols-3 sm:gap-3.5 sm:pt-8 lg:grid-cols-6 lg:gap-4 lg:pt-10"
        >
          {modules.map(({ id, label, Icon }) => {
            const active = activeId === id
            return (
              <m.button
                key={id}
                type="button"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(id)}
                onBlur={() => setHoveredId(null)}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        transition: cardSpring,
                      }
                }
                whileTap={reduce ? undefined : { scale: 0.98, transition: { duration: 0.12 } }}
                className={`relative flex min-h-[104px] flex-col items-center justify-center gap-3 overflow-hidden px-3 py-5 text-center transition-shadow duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/22 sm:min-h-[118px] sm:gap-3.5 sm:px-4 sm:py-6 lg:min-h-[128px] lg:py-7 ${
                  active
                    ? 'text-white shadow-[0_16px_48px_-16px_rgba(22,27,169,0.55)]'
                    : 'text-white/84 shadow-[0_10px_36px_-20px_rgba(0,0,0,0.5)] hover:text-white/92'
                }`}
                style={{ borderRadius: '14px' }}
              >
                <span
                  className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent backdrop-blur-xl backdrop-saturate-125"
                  style={{
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.04)',
                  }}
                  aria-hidden
                />
                <m.span
                  className="pointer-events-none absolute inset-0 z-[1]"
                  style={{ backgroundColor: ACCENT }}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: 0.42, ease: overlayEase }
                  }
                  aria-hidden
                />
                <m.span
                  className="relative z-[2] flex flex-col items-center gap-3"
                  animate={{
                    scale: active ? 1.04 : 1,
                  }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: 0.38, ease: overlayEase }
                  }
                >
                  <Icon
                    className={`h-6 w-6 shrink-0 transition-colors duration-300 sm:h-7 sm:w-7 ${
                      active ? 'text-white' : 'text-white/80'
                    }`}
                  />
                  <span className="max-w-[11rem] text-[0.7rem] font-medium uppercase leading-snug tracking-[0.12em] text-current sm:max-w-none sm:text-[0.78rem] sm:tracking-[0.14em]">
                    {label}
                  </span>
                </m.span>
              </m.button>
            )
          })}
        </m.div>
      </div>
    </section>
  )
}
