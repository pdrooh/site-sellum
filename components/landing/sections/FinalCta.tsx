'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '../motion/FadeIn'

function phoneHref(): string {
  const raw = process.env.NEXT_PUBLIC_SELLUM_PHONE
  const digits = raw?.replace(/\D/g, '')
  return digits ? `tel:+${digits}` : '/contato'
}

function whatsappHref(): string {
  const raw = process.env.NEXT_PUBLIC_SELLUM_WHATSAPP
  const digits = raw?.replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}` : '/contato'
}

function IconPhone(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={props.className} aria-hidden>
      <path
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.125 1.125 0 001.125-1.125v-1.372a1.125 1.125 0 00-.684-1.034l-3.29-1.318a1.125 1.125 0 00-1.412.625l-.621 1.24a.75.75 0 01-.85.386 12.035 12.035 0 01-5.802-5.802.75.75 0 01.386-.85l1.24-.621a1.125 1.125 0 00.625-1.412L9.91 3.684A1.125 1.125 0 008.876 3H7.5A1.125 1.125 0 006.375 4.125v2.25z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWhatsApp(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const avatars = [
  { from: '#94a3b8', to: '#475569' },
  { from: '#a78bfa', to: '#5b21b6' },
  { from: '#67e8f9', to: '#0e7490' },
] as const

const ctaEdgeMask = {
  maskImage:
    'linear-gradient(to bottom, transparent 0%, black 11%, black 89%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
  WebkitMaskImage:
    'linear-gradient(to bottom, transparent 0%, black 11%, black 89%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
  maskComposite: 'intersect' as const,
  WebkitMaskComposite: 'source-in' as const,
}

export function FinalCta() {
  const tel = phoneHref()
  const wa = whatsappHref()

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div
            className="relative isolate min-h-[300px] overflow-hidden sm:min-h-[320px]"
            style={ctaEdgeMask}
          >
            <Image
              src="/images/hero/stripe-art.jpg"
              alt=""
              fill
              className="object-cover object-[68%_42%] scale-105 sm:scale-100"
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
            <div className="absolute inset-0 bg-[#050508]/72" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#161BA9]/25 via-transparent to-black/50"
              aria-hidden
            />

            <div className="relative z-[1] flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
              <div className="flex justify-center pl-3" aria-hidden>
                {avatars.map((g, i) => (
                  <div
                    key={i}
                    className="relative -ml-3 h-11 w-11 shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,0.35)] sm:h-12 sm:w-12"
                    style={{
                      borderRadius: '50%',
                      background: `linear-gradient(145deg, ${g.from}, ${g.to})`,
                      zIndex: i + 1,
                    }}
                  />
                ))}
              </div>

              <h2 className="mt-8 max-w-lg text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl">
                <span className="block">Fale com um especialista</span>
                <span className="mt-1 block text-white/90 sm:mt-1.5">e automatize sua operação</span>
              </h2>

              <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4">
                {tel.startsWith('tel:') ? (
                  <a
                    href={tel}
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-[#1a1d2e] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:bg-white/95 sm:h-12 sm:flex-initial sm:min-w-[10.5rem]"
                  >
                    <IconPhone className="h-[1.15rem] w-[1.15rem] shrink-0 text-[#161BA9]" />
                    Me ligue
                  </a>
                ) : (
                  <Link
                    href={tel}
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-[#1a1d2e] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:bg-white/95 sm:h-12 sm:flex-initial sm:min-w-[10.5rem]"
                  >
                    <IconPhone className="h-[1.15rem] w-[1.15rem] shrink-0 text-[#161BA9]" />
                    Me ligue
                  </Link>
                )}

                {wa.startsWith('http') ? (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[8px] bg-white/[0.08] px-5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/[0.14] sm:h-12 sm:flex-initial sm:min-w-[12.5rem]"
                  >
                    <IconWhatsApp className="h-[1.2rem] w-[1.2rem] shrink-0 text-[#25D366]" />
                    Me chame no Whats
                  </a>
                ) : (
                  <Link
                    href={wa}
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[8px] bg-white/[0.08] px-5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/[0.14] sm:h-12 sm:flex-initial sm:min-w-[12.5rem]"
                  >
                    <IconWhatsApp className="h-[1.2rem] w-[1.2rem] shrink-0 text-[#25D366]" />
                    Me chame no Whats
                  </Link>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
