"use client"

import { useEffect, useRef, useState } from "react"

export function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const duration = 1100
    const t0 = Date.now()

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      clearInterval(interval)
      clearTimeout(hardTimeout)
      setFading(true)
      setTimeout(() => {
        setVisible(false)
        onDone?.()
      }, 430)
    }

    const interval = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 2.2)
      setCount(Math.round(eased * 100))
      if (p >= 1) finish()
    }, 16)

    // never leave the site hidden, even if this tab is throttled
    const hardTimeout = setTimeout(finish, 1800)

    return () => {
      clearInterval(interval)
      clearTimeout(hardTimeout)
    }
  }, [onDone])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-between bg-paper p-5 transition-opacity duration-[420ms] ease-out pointer-events-none sm:p-10"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="pb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dark">
        Jean Almario
      </div>
      <div
        className="font-mono font-bold leading-[0.82] text-ink [font-variant-numeric:tabular-nums]"
        style={{ fontSize: "clamp(64px, 17vw, 220px)", letterSpacing: "-0.04em" }}
      >
        {String(count).padStart(2, "0")}
      </div>
    </div>
  )
}
