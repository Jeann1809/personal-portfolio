import Image from "next/image"
import { hero, stats } from "@/lib/data"

export function Hero() {
  return (
    <div
      className="flex w-full max-w-[1240px] flex-wrap gap-3.5 sm:gap-5"
      style={{ minHeight: "min(calc(100dvh - 148px), 900px)" }}
    >
      {/* Main card: photo, name, bio, CTAs */}
      <div className="flex flex-[3_1_460px] min-w-[min(300px,100%)] animate-reveal flex-col gap-5 rounded-2xl border border-black/[0.09] bg-card p-6 sm:p-10 md:p-12">
        <div className="flex flex-wrap items-start gap-3 sm:gap-8">
          <div className="flex min-w-[140px] flex-[1_1_140px] flex-col gap-3.5 sm:min-w-[190px] sm:flex-[1_1_190px] sm:gap-5">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-green">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-green" />
              {hero.status}
            </div>
            <h1
              className="m-0 font-semibold leading-[0.94] tracking-[-0.035em] text-ink [overflow-wrap:anywhere]"
              style={{ fontSize: "clamp(34px, 9vw, 92px)" }}
            >
              {hero.name}
            </h1>
            <p
              className="m-0 max-w-[26ch] leading-[1.35] text-muted"
              style={{ fontSize: "clamp(15.5px, 2vw, 24px)", textWrap: "pretty" }}
            >
              {hero.tagline}
            </p>
          </div>
          <Image
            src={hero.photo}
            alt={hero.name}
            width={165}
            height={206}
            className="block min-w-[86px] flex-[1_1_86px] rounded-2xl border border-black/[0.09] bg-tint-2 object-cover"
            style={{
              width: "165px",
              maxWidth: "min(165px, 38%)",
              aspectRatio: "4 / 5",
              objectPosition: "center 22%",
            }}
            priority
          />
        </div>
        <p className="m-0 text-sm leading-[1.7] text-muted sm:text-base" style={{ textWrap: "pretty" }}>
          {hero.bio}
        </p>
        <div className="mt-2 flex flex-wrap gap-2.5">
          <a
            href="#work"
            className="inline-flex min-h-[46px] items-center rounded-[9px] bg-green px-5 font-mono text-xs font-bold tracking-[0.08em] text-white hover:bg-ink"
          >
            VIEW WORK
          </a>
          <a
            href={hero.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center rounded-[9px] border border-black/[0.16] px-5 font-mono text-xs tracking-[0.08em] text-ink hover:border-ink"
          >
            GITHUB
          </a>
          <a
            href={hero.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center rounded-[9px] border border-black/[0.16] px-5 font-mono text-xs tracking-[0.08em] text-ink hover:border-ink"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Right column: stat tiles + resume */}
      <div className="flex min-w-[min(260px,100%)] flex-[2_1_300px] flex-col gap-3.5 sm:gap-5">
        <div className="flex flex-1 animate-reveal flex-col justify-center gap-1.5 rounded-2xl border border-black/[0.09] bg-card p-6 sm:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dark">GPA</div>
          <div
            className="font-mono font-bold leading-none tracking-[-0.04em] text-ink [font-variant-numeric:tabular-nums]"
            style={{ fontSize: "clamp(40px, 5.6vw, 66px)" }}
          >
            {stats.gpa.value}
            <span className="text-[0.42em] tracking-normal text-muted-dark"> {stats.gpa.scale}</span>
          </div>
          <div className="mt-1 text-[13px] text-muted">{stats.gpa.detail}</div>
        </div>

        <div className="flex flex-1 animate-reveal flex-col justify-center gap-1.5 rounded-2xl border border-black/[0.09] bg-card p-6 sm:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dark">Expected graduation</div>
          <div
            className="font-mono font-bold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
          >
            {stats.graduation}
          </div>
        </div>

        <div className="flex flex-1 animate-reveal flex-col justify-center gap-3.5 rounded-2xl border border-black/[0.09] bg-card p-6 sm:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dark">President&rsquo;s List</div>
          <div className="flex flex-wrap gap-2">
            {stats.presidentsList.map((term) => (
              <span key={term} className="rounded-md bg-chip px-3 py-1.5 font-mono text-xs text-chip-text">
                {term}
              </span>
            ))}
          </div>
        </div>

        <a
          href={hero.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-none animate-reveal items-center justify-between gap-3.5 rounded-2xl border border-green bg-green px-6 py-5 text-white transition-colors hover:border-ink hover:bg-ink sm:px-8 sm:py-7"
        >
          <span className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">PDF · 1 page</span>
            <span className="text-lg font-semibold tracking-[-0.015em] text-white sm:text-xl">
              Download my resume
            </span>
          </span>
          <span className="text-xl leading-none text-white">↓</span>
        </a>
      </div>
    </div>
  )
}
