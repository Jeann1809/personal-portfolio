import { footer } from "@/lib/data"

export function Footer() {
  return (
    <div className="flex w-full max-w-[1240px] flex-wrap justify-between gap-3 px-1.5 pb-3 pt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dark">
      <span>{footer.copyright}</span>
      <span>{footer.location}</span>
    </div>
  )
}
