import { metrics } from "@/lib/data"

export function Metrics() {
  return (
    <div className="flex w-full max-w-[1240px] flex-wrap gap-3.5 sm:gap-5">
      {metrics.map((metric) => {
        const tinted = metric.accent === "tinted"
        return (
          <a
            key={metric.label}
            href={metric.href}
            className={`group flex flex-[1_1_210px] animate-reveal flex-col gap-2 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)] sm:p-7 ${
              tinted
                ? "border-black/[0.14] bg-tint hover:border-ink"
                : "border-black/[0.09] bg-card hover:border-black/[0.28]"
            }`}
          >
            {tinted ? (
              <div
                className="whitespace-pre-line font-mono font-bold leading-[1.08] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
              >
                {metric.value}
              </div>
            ) : (
              <div
                className={`font-mono font-bold leading-none tracking-[-0.04em] [font-variant-numeric:tabular-nums] ${
                  metric.accent === "amber" ? "text-amber" : "text-green"
                }`}
                style={{ fontSize: "clamp(38px, 4.4vw, 58px)" }}
              >
                {metric.value}
              </div>
            )}
            <div className="text-[13.5px] leading-[1.5] text-muted">{metric.label}</div>
            <div className="mt-auto pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-dark">
              View →
            </div>
          </a>
        )
      })}
    </div>
  )
}
