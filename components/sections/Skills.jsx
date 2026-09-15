import { skillGroups } from "@/lib/data"

const accentByIndex = ["text-green", "text-green", "text-amber", "text-amber"]

export function Skills() {
  return (
    <>
      <div id="skills" className="w-full max-w-[1240px] px-1.5 pb-1 pt-7 sm:pt-14">
        <h2
          className="m-0 font-semibold leading-[1.02] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(26px, 5.5vw, 56px)" }}
        >
          Toolkit
        </h2>
      </div>

      <div className="flex w-full max-w-[1240px] flex-wrap gap-3.5 sm:gap-5">
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className="flex flex-[1_1_260px] animate-reveal flex-col gap-4 rounded-2xl border border-black/[0.09] bg-card p-5 sm:p-7"
          >
            <div className={`font-mono text-[11px] uppercase tracking-[0.16em] ${accentByIndex[i % accentByIndex.length]}`}>
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-[7px] bg-chip px-3 py-2 font-mono text-xs text-chip-text [overflow-wrap:anywhere]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
