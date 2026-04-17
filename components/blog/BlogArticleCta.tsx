import Link from 'next/link'

export function BlogArticleCta() {
  return (
    <aside className="relative mt-20 overflow-hidden radius-14 border border-white/[0.07] bg-[linear-gradient(165deg,rgba(22,27,169,0.12),rgba(5,5,8,0.88))] p-7 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-8">
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#2a3dd6]/12 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-[min(100%,22rem)] text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8fa8ff]/90">Demonstração</p>
        <h2 className="mt-3 text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Veja a Sellum no seu cenário B2B
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-white/50 sm:text-[0.95rem]">
          Conte seu contexto e receba uma demo objetiva — funil, governança e integrações alinhados à sua operação.
        </p>

        <form className="mx-auto mt-8 grid gap-4 text-left">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/70" htmlFor="blog-demo-nome">
              Nome
            </label>
            <input
              id="blog-demo-nome"
              name="nome"
              className="h-11 px-4"
              placeholder="Seu nome"
              autoComplete="name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/70" htmlFor="blog-demo-email">
              Email corporativo
            </label>
            <input
              id="blog-demo-email"
              name="email"
              type="email"
              className="h-11 px-4"
              placeholder="voce@empresa.com"
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/70" htmlFor="blog-demo-contexto">
              Contexto
            </label>
            <textarea
              id="blog-demo-contexto"
              name="contexto"
              className="min-h-[96px] px-4 py-3"
              placeholder="ERP/CRM, tamanho do time e objetivo da demo."
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Solicitar demonstração
          </button>
          <p className="text-center text-[11px] text-white/38">
            Formulário visual — integre ao seu CRM/backend quando quiser.
          </p>
        </form>

        <p className="mt-6 text-sm text-white/42">
          Prefere outro canal?{' '}
          <Link href="/contato" className="font-medium text-[#8fa8ff] underline decoration-white/12 underline-offset-4 hover:text-white">
            Fale com a gente
          </Link>
        </p>
      </div>
    </aside>
  )
}
