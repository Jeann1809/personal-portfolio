import { experience } from "@/lib/data"

export function Experience() {
  return (
    <>
      <div id="experience" className="w-full max-w-[1240px] px-1.5 pb-1 pt-7 sm:pt-14">
        <h2
          className="m-0 font-semibold leading-[1.02] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(26px, 5.5vw, 56px)" }}
        >
          Experience &amp; fellowships
        </h2>
      </div>

      <div className="grid w-full max-w-[1240px] auto-rows-fr grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5">
        {experience.map((item) => (
          <div
            key={item.id}
            className={`flex animate-reveal flex-col gap-3.5 rounded-2xl border p-6 sm:p-9 ${
              item.tinted ? "border-black/[0.12] bg-tint" : "border-black/[0.09] bg-card"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2.5">
              <h3
                className="m-0 font-semibold leading-[1.2] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(19px, 2vw, 24px)" }}
              >
                {item.company}{" "}
                {item.companySuffix && <span className="font-normal text-muted-dark">{item.companySuffix}</span>}
              </h3>
              <span className="flex-none whitespace-nowrap font-mono text-[11px] tracking-[0.1em] text-muted-dark">
                {item.period}
              </span>
            </div>
            <div
              className={`font-mono text-[12.5px] tracking-[0.04em] ${
                item.roleAccent === "amber" ? "text-amber" : "text-green"
              }`}
            >
              {item.role}
            </div>
            <ul className="m-0 flex flex-col gap-2.5 pl-[18px] text-[14.5px] leading-[1.65] text-muted">
              {item.achievements.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
