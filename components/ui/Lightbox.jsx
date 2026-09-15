"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [group, setGroup] = useState(null)
  const [index, setIndex] = useState(0)

  const open = useCallback((images, startIndex) => {
    setGroup(images)
    setIndex(startIndex)
  }, [])

  const close = useCallback(() => setGroup(null), [])

  const step = useCallback(
    (delta) => {
      setGroup((current) => current)
      setIndex((i) => {
        if (!group || group.length === 0) return i
        return (i + delta + group.length) % group.length
      })
    },
    [group]
  )

  const value = useMemo(() => ({ open }), [open])
  const shot = group?.[index]

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {shot && (
        <div
          onClick={close}
          className="fixed inset-0 z-[200] flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-[rgba(12,12,13,0.92)] p-4 sm:p-12"
        >
          <img
            src={shot.src}
            alt={shot.alt}
            className="max-w-full rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            style={{ maxHeight: "74vh", objectFit: "contain" }}
          />
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              aria-label="Previous image"
              className="min-h-[46px] min-w-[46px] rounded-full border border-white/[0.28] text-base text-white hover:bg-white/[0.14]"
            >
              ←
            </button>
            <span className="font-mono text-xs tracking-[0.14em] text-white">
              {index + 1} / {group.length}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              aria-label="Next image"
              className="min-h-[46px] min-w-[46px] rounded-full border border-white/[0.28] text-base text-white hover:bg-white/[0.14]"
            >
              →
            </button>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">Tap anywhere to close</div>
        </div>
      )}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error("useLightbox must be used within a LightboxProvider")
  return ctx
}
