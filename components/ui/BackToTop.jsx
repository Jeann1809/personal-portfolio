"use client"

import { useEffect, useState } from "react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 z-[60] flex min-h-[46px] items-center gap-2.5 rounded-full border border-black/[0.12] bg-card px-5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-colors hover:bg-ink hover:text-white sm:bottom-9 sm:right-9 ${
        visible ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <span className="text-[13px] leading-none">↑</span>
      <span>Top</span>
    </button>
  )
}
