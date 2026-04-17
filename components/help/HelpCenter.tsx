import Link from 'next/link'
import type { SVGProps } from 'react'

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? ''
const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() ||
  'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20Sellum'

const ticketHref =
  dashboardUrl && dashboardUrl !== '#'
    ? `${dashboardUrl.replace(/\/$/, '')}/suporte`
    : '/contato?assunto=chamado'

const contactOptions = [
  {
    key: 'email',
    title: 'Email',
    description: 'Envie sua dúvida ou anexe prints. Respondemos em até 1 dia útil.',
    href: 'mailto:contato@sellum.app?subject=Central%20de%20Ajuda%20%E2%80%94%20Sellum',
    cta: 'Enviar email',
    icon: IconMail,
  },
  {
    key: 'ticket',
    title: 'Chamado',
    description: 'Abra um ticket para o time de suporte acompanhar seu caso com prioridade.',
    href: ticketHref,
    cta: 'Abrir chamado',
    icon: IconTicket,
  },
  {
    key: 'whatsapp',
    title: 'WhatsApp',
    description: 'Atendimento rápido em horário comercial para dúvidas objetivas.',
    href: whatsappUrl,
    cta: 'Conversar no WhatsApp',
    external: true,
    icon: IconWhatsApp,
  },
] as const

const categories = [
  {
    slug: 'conta',
    name: 'Conta',
    count: 12,
    description: 'Acesso, perfil e permissões',
    icon: IconUser,
  },
  {
    slug: 'pagamentos',
    name: 'Pagamentos',
    count: 9,
    description: 'Faturas, métodos e notas',
    icon: IconCard,
  },
  {
    slug: 'integracoes',
    name: 'Integrações',
    count: 18,
    description: 'ERP, CRM e webhooks',
    icon: IconPlug,
  },
  {
    slug: 'tecnicos',
    name: 'Problemas técnicos',
    count: 14,
    description: 'Erros, performance e ambiente',
    icon: IconWrench,
  },
  {
    slug: 'seguranca',
    name: 'Segurança',
    count: 7,
    description: 'Dados, LGPD e boas práticas',
    icon: IconShield,
  },
] as const

export function HelpCenter() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgba(22,27,169,0.35),transparent_58%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_100%_20%,rgba(42,61,214,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_0%_80%,rgba(77,130,255,0.06),transparent_45%)]" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-8 text-center sm:pb-20 sm:pt-12 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/55">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
            </span>
            Suporte em horário comercial · resposta em até 1 dia útil (email)
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#4d82ff]/90">Central Sellum</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Central de Ajuda
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
            Encontre respostas, abra um chamado ou fale com a gente. Estamos aqui para destravar sua operação B2B.
          </p>

          <form role="search" className="mx-auto mt-12 max-w-2xl text-left" action="/ajuda" method="get">
            <label htmlFor="help-search" className="sr-only">
              Buscar na central de ajuda
            </label>
            <div className="radius-14 border border-white/[0.08] bg-black/35 p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_100px_-48px_rgba(22,27,169,0.65)] backdrop-blur-xl sm:p-2">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35 sm:left-5" aria-hidden>
                  <IconSearch className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" />
                </span>
                <input
                  id="help-search"
                  name="q"
                  type="search"
                  enterKeyHint="search"
                  autoComplete="off"
                  placeholder="Busque por tópico, integração ou erro…"
                  className="h-14 w-full border-0 bg-transparent py-3.5 pl-12 pr-24 text-base text-white placeholder:text-white/35 focus-visible:ring-0 sm:h-16 sm:pl-14 sm:text-lg"
                />
                <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-[6px] border border-white/[0.1] bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-white/40 sm:inline-block">
                  ⌘K em breve
                </kbd>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-white/40">
              Em breve: busca em artigos e perguntas frequentes.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Canais</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Fale com o time</h2>
          <p className="mt-2 text-sm text-white/50 sm:text-base">
            Escolha o canal que fizer mais sentido para o seu momento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {contactOptions.map((item) => {
            const Icon = item.icon
            const isExternal = 'external' in item && item.external
            const className =
              'group radius-14 flex h-full flex-col border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-0.5 hover:border-[#2a3dd6]/40 hover:bg-white/[0.04] hover:shadow-[0_24px_64px_-40px_rgba(22,27,169,0.35)] sm:p-7'

            const inner = (
              <>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center radius-10 border border-white/[0.08] bg-[linear-gradient(180deg,rgba(22,27,169,0.35),rgba(0,0,0,0))] text-[#4d82ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="btn-primary w-full justify-center text-sm sm:inline-flex">{item.cta}</span>
                </div>
              </>
            )

            if (isExternal) {
              return (
                <a key={item.key} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {inner}
                </a>
              )
            }

            return (
              <Link key={item.key} href={item.href} className={className}>
                {inner}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-[linear-gradient(180deg,rgba(0,0,0,0.35),transparent_40%)] pb-24 pt-14 sm:pb-28 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Base de conhecimento</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Categorias de ajuda</h2>
              <p className="mt-2 max-w-xl text-sm text-white/50 sm:text-base">
                Navegue por tema. Os artigos serão publicados em breve — por enquanto, use a busca ou os canais acima.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-3 py-2 sm:self-auto">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">Roadmap</span>
              <span className="text-sm font-semibold tabular-nums text-white/80">
                {categories.reduce((acc, c) => acc + c.count, 0)} artigos
              </span>
            </div>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <li key={cat.slug}>
                  <Link
                    href={`/ajuda?categoria=${cat.slug}`}
                    className="group radius-14 flex h-full items-start gap-4 border border-white/[0.08] bg-white/[0.02] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-[#2a3dd6]/38 hover:bg-white/[0.04] hover:shadow-[0_20px_56px_-36px_rgba(0,0,0,0.75)] sm:p-6"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center radius-10 border border-white/[0.08] bg-black/50 text-[#4d82ff]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="font-semibold text-white">{cat.name}</span>
                        <span className="rounded-[6px] border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium tabular-nums text-white/45">
                          {cat.count} artigos
                        </span>
                      </span>
                      <span className="mt-1 block text-sm text-white/50">{cat.description}</span>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#4d82ff] transition group-hover:gap-2">
                        Ver categoria
                        <span aria-hidden>›</span>
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

function IconTicket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6v13.5c0 1.243-1.007 2.25-2.25 2.25h-4.5A2.25 2.25 0 0 1 7.5 19.5V6m9 0V4.875c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125V6m9 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M7.5 6c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125"
      />
    </svg>
  )
}

function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  )
}

function IconCard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
    </svg>
  )
}

function IconPlug(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 1 2.25-2.25h3.75a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 0 2.25 2.25H18M9.75 6H9a2.25 2.25 0 0 0-2.25 2.25v.75m6.75 0V9a2.25 2.25 0 0 0-2.25-2.25H9.75M6 10.5H4.875c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a2.25 2.25 0 0 0-2.25-2.25h-3.75Z"
      />
    </svg>
  )
}

function IconWrench(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-2.647c.318-.344.675-.626 1.049-.866a6.08 6.08 0 0 0 1.232-.71 6.07 6.07 0 0 0 2.984-4.82 6.073 6.073 0 0 0-1.75-4.334 6.072 6.072 0 0 0-4.334-1.75 6.073 6.073 0 0 0-4.82 2.984 6.07 6.07 0 0 0-.71 1.232 6.08 6.08 0 0 0-.866 1.049l-2.647 2.496m5.88-5.88a3 3 0 1 0 4.243 4.242 3 3 0 0 0-4.243-4.242Z"
      />
    </svg>
  )
}

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.313-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  )
}
