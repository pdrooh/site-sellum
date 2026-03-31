import { FadeIn } from '../motion/FadeIn'

export function Cases() {
  return (
    <section className="border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Testemunhais e cases que parecem operação real.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Histórias curtas, foco em impacto. Menos ruído no dia a dia, mais previsibilidade para escalar.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.08}>
          <div className="mt-10 sm:mt-12" />
        </FadeIn>
      </div>
    </section>
  )
}
