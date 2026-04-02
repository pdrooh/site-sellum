'use client'

import { useRef, type ReactNode } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'

type Props = { children: ReactNode }

export function LandingDeepAtmosphere({ children }: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end end'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '8%'])

  return (
    <div ref={ref} className="landing-deep-atmosphere relative">
      <div className="landing-deep-atmosphere__bg" aria-hidden />
      {!reduce && (
        <m.div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(85vh,920px)] overflow-hidden"
          style={{ y: parallaxY }}
          aria-hidden
        >
          <div
            className="absolute left-1/2 top-[8%] h-[90%] w-[min(125vw,1600px)] -translate-x-1/2 opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 52% 42% at 50% 42%, rgba(22, 27, 169, 0.08) 0%, rgba(0, 0, 0, 0.35) 52%, transparent 78%)',
            }}
          />
        </m.div>
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
