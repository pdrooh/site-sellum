'use client'

import { useEffect, useState } from 'react'

export function BlogReadingProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const el = document.documentElement
    let raf = 0
    const compute = () => {
      const scrollTop = el.scrollTop
      const scrollable = el.scrollHeight - el.clientHeight
      const raw = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0
      const next = Math.min(100, Math.max(0, raw))
      setPct(next)
    }
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scale = pct / 100

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-20 z-[55]"
      aria-hidden
      role="presentation"
    >
      {/* Track */}
      <div className="relative h-[3px] w-full bg-[#0a0a10]/90 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]">
        {/* Soft fill underlay (full width, very subtle) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161ba9]/12 via-[#2a3dd6]/8 to-transparent opacity-60" />
        {/* Progress — scaleX evita reflow e fica mais fluido que width */}
        <div
          className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-[#1e26c4] via-[#3550e8] to-[#7aa6ff] shadow-[0_0_18px_rgba(100,140,255,0.5),0_0_36px_rgba(22,27,169,0.2)] transition-[transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none will-change-transform"
          style={{ transform: `scaleX(${scale})` }}
        >
          <span className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/30 to-transparent opacity-80 blur-[10px]" />
        </div>
      </div>
      <span className="sr-only">Progresso de leitura: {Math.round(pct)} por cento</span>
    </div>
  )
}
