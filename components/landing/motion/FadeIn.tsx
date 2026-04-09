'use client'

import { m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <m.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px', amount: 0.22 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.42, ease: [0.22, 1, 0.36, 1], delay }
      }
      className={className}
    >
      {children}
    </m.div>
  )
}

