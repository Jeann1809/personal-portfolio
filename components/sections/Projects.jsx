import { projects } from "@/lib/data"
import { GalleryImage } from "@/components/ui/GalleryImage"

const chip =
  "rounded-[7px] bg-chip px-3 py-1.5 font-mono text-[11.5px] text-chip-text [overflow-wrap:anywhere]"
const linkPrimary =
  "inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 font-mono text-[11.5px] uppercase tracking-[0.1em] text-white hover:bg-green"
const linkGhost =
  "inline-flex min-h-11 items-center rounded-lg border border-black/[0.16] px-4 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink hover:border-ink"

function FeatureCard({ project }) {
  return (
    <div
      id={project.slug}
      className="flex flex-[1_1_100%] animate-reveal flex-wrap gap-6 rounded-[18px] border border-black/[0.12] bg-tint p-6 transition-colors hover:border-black/30 sm:gap-12 sm:p-12"
    >
      <div className="flex min-w-[min(280px,100%)] flex-[2_1_420px] flex-col gap-[18px]">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-md bg-amber px-[11px] py-1.5 font-mono text-[11px] font-bold tracking-[0.14em] text-white">
            {project.badge}
          </span>
          <span className="font-mono text-[11px] tracking-[0.12em] text-muted-dark">{project.meta}</span>
        </div>
        <h3
          className="m-0 font-semibold leading-[1.06] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(23px, 4.4vw, 46px)", textWrap: "pretty" }}
        >
          {project.title}
        </h3>
        <p className="m-0 max-w-[60ch] text-[15px] leading-[1.7] text-muted" style={{ textWrap: "pretty" }}>
          {project.description}
        </p>
        <div className="mt-0.5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className={chip}>
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-1 flex flex-wrap gap-2">
          <a href={project.videoDemo} target="_blank" rel="noopener noreferrer" className={linkPrimary}>
            <span className="text-[9px]">▶</span> Video demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkGhost}>
            GitHub
          </a>
        </div>
      </div>
      <div className="flex min-w-[min(280px,100%)] flex-[1_1_340px] flex-col gap-2.5">
        <GalleryImage
          images={project.images}
          index={0}
          className="w-full rounded-xl"
          style={{ aspectRatio: "16 / 10" }}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(72px,1fr))] gap-2">
          {project.images.slice(1).map((_, i) => (
            <GalleryImage
              key={project.images[i + 1].src}
              images={project.images}
              index={i + 1}
              className="w-full rounded-lg"
              style={{ aspectRatio: "4 / 3" }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MetricsCard({ project }) {
  return (
    <div
      id={project.slug}
      className="flex min-w-[min(290px,100%)] flex-[2_1_430px] animate-reveal flex-wrap gap-5 rounded-2xl border border-black/[0.09] bg-card p-6 transition-colors hover:border-black/[0.24] sm:gap-[30px] sm:p-9"
    >
      <div className="flex min-w-[min(250px,100%)] flex-[1_1_260px] flex-col gap-3.5">
        <div className="font-mono text-[11px] tracking-[0.12em] text-muted-dark">{project.meta}</div>
        <h3
          className="m-0 font-semibold leading-[1.12] tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
        >
          {project.title}
        </h3>
        <p className="m-0 text-[14.5px] leading-[1.7] text-muted" style={{ textWrap: "pretty" }}>
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className={chip}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex min-w-[min(210px,100%)] flex-[1_1_220px] flex-col gap-2.5 self-start">
        {project.metricsPanel.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col gap-2.5 rounded-xl border border-black/[0.09] bg-tint-2 px-5 py-[18px]"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-dark">{metric.label}</div>
            <div className="flex items-baseline gap-2.5">
              <span
                className="font-mono font-bold leading-none tracking-[-0.04em] text-ink [font-variant-numeric:tabular-nums]"
                style={{ fontSize: "clamp(38px, 4vw, 50px)" }}
              >
                {metric.value}
              </span>
              <span className="font-mono text-xs tracking-[0.04em] text-muted-dark">{metric.from}</span>
            </div>
            <div className="relative h-1 overflow-hidden rounded-full bg-black/[0.09]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-green"
                style={{ width: `${metric.barPct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GalleryStripCard({ project }) {
  return (
    <div
      id={project.slug}
      className="flex min-w-[min(290px,100%)] flex-[2_1_430px] animate-reveal flex-wrap gap-5 rounded-2xl border border-black/[0.09] bg-card p-6 transition-colors hover:border-black/[0.24] sm:gap-[30px] sm:p-9"
    >
      <div className="flex min-w-[min(250px,100%)] flex-[1_1_260px] flex-col gap-3.5">
        <div className="font-mono text-[11px] tracking-[0.12em] text-muted-dark">{project.meta}</div>
        <h3
          className="m-0 font-semibold leading-[1.12] tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
        >
          {project.title}
        </h3>
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-[32px] font-bold leading-none tracking-[-0.03em] text-green">
            {project.stat.value}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dark">
            {project.stat.label}
          </span>
        </div>
        <p className="m-0 text-[14.5px] leading-[1.7] text-muted" style={{ textWrap: "pretty" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={link.primary ? linkPrimary : linkGhost}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className={chip}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex max-w-full min-w-[min(210px,100%)] flex-[1_1_220px] flex-col gap-2 self-start">
        <div className="flex flex-wrap gap-2">
          {project.images.map((_, i) => (
            <GalleryImage
              key={project.images[i].src}
              images={project.images}
              index={i}
              className="h-[62px] min-w-[70px] max-w-[120px] flex-[1_1_78px] rounded-[7px]"
            />
          ))}
        </div>
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-dark">
          {project.images.length} screenshots · tap to expand
        </div>
      </div>
    </div>
  )
}

function InProgressCard({ project }) {
  return (
    <div
      id={project.slug}
      className="flex min-w-[min(270px,100%)] flex-[1_1_290px] animate-reveal flex-col gap-4 rounded-2xl border border-black/[0.09] bg-card p-6 transition-colors hover:border-black/[0.24] sm:p-9"
    >
      <div className="flex items-center gap-2.5">
        <span className="rounded-md border border-amber px-2.5 py-1 font-mono text-[10.5px] tracking-[0.14em] text-amber">
          {project.badge}
        </span>
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-dark">{project.meta}</span>
      </div>
      <h3
        className="m-0 font-semibold leading-[1.12] tracking-[-0.025em] text-ink"
        style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
      >
        {project.title}
      </h3>
      <p className="m-0 text-[14.5px] leading-[1.7] text-muted" style={{ textWrap: "pretty" }}>
        {project.description}
      </p>
      <div className="flex flex-col gap-1.5 rounded-[10px] border border-black/[0.09] bg-tint-2 px-4 py-3.5">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-dark">
          {project.validation.label}
        </div>
        <div className="font-mono text-[15px] text-chip-text">{project.validation.value}</div>
      </div>
      <div className="flex flex-wrap gap-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkGhost}>
          GitHub
        </a>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.techStack.map((tech) => (
          <span key={tech} className={chip}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function StatPairCard({ project }) {
  return (
    <div
      id={project.slug}
      className="flex min-w-[min(290px,100%)] flex-[2_1_430px] animate-reveal flex-wrap items-center gap-5 rounded-2xl border border-black/[0.09] bg-card p-6 transition-colors hover:border-black/[0.24] sm:p-9"
    >
      <div className="flex flex-[1_1_260px] flex-col gap-3.5">
        <div className="font-mono text-[11px] tracking-[0.12em] text-muted-dark">{project.meta}</div>
        <h3
          className="m-0 font-semibold leading-[1.12] tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
        >
          {project.title}
        </h3>
        <p className="m-0 text-[14.5px] leading-[1.7] text-muted" style={{ textWrap: "pretty" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className={chip}>
              {tech}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2">
          {project.images.map((_, i) => (
            <GalleryImage
              key={project.images[i].src}
              images={project.images}
              index={i}
              className="w-full rounded-lg"
              style={{ aspectRatio: "4 / 3" }}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={linkGhost}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-[0_1_150px] flex-col gap-3.5">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-mono text-[38px] font-bold leading-none tracking-[-0.04em] text-ink">
              {stat.value}
            </div>
            <div className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-dark">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const layouts = {
  feature: FeatureCard,
  metrics: MetricsCard,
  "gallery-strip": GalleryStripCard,
  "in-progress": InProgressCard,
  "stat-pair": StatPairCard,
}

export function Projects() {
  return (
    <>
      <div
        id="work"
        className="flex w-full max-w-[1240px] flex-wrap items-baseline justify-between gap-3.5 px-1.5 pb-1 pt-7 sm:pt-14"
      >
        <h2
          className="m-0 font-semibold leading-[1.02] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(26px, 5.5vw, 56px)" }}
        >
          Selected work
        </h2>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dark">
          0{projects.length} projects
        </div>
      </div>

      <div className="flex w-full max-w-[1240px] flex-wrap gap-3.5 sm:gap-5">
        {projects.map((project) => {
          const Card = layouts[project.layout]
          return <Card key={project.id} project={project} />
        })}
      </div>
    </>
  )
}
