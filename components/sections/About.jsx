import { about } from "@/lib/data"

const str = "text-green"
const kw = "text-amber"
const type = "text-[oklch(0.55_0.13_250)]"
const self = "text-muted-dark"

export function About() {
  return (
    <div className="flex w-full max-w-[1240px] flex-wrap gap-3.5 sm:gap-5">
      <div className="flex min-w-[min(240px,100%)] flex-[1_1_240px] animate-reveal flex-col justify-center gap-[18px] rounded-2xl border border-black/[0.09] bg-card p-6 sm:p-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dark">{about.eyebrow}</div>
        <h2
          className="m-0 font-semibold leading-[1.08] tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(26px, 3.2vw, 42px)", textWrap: "pretty" }}
        >
          {about.headline}
        </h2>
        <p className="m-0 text-[14.5px] leading-[1.7] text-muted" style={{ textWrap: "pretty" }}>
          {about.body}
        </p>
      </div>

      <div className="flex min-w-[min(300px,100%)] flex-[2_1_480px] animate-reveal flex-col overflow-hidden rounded-2xl border border-black/[0.11] bg-tint-2">
        <div className="flex items-center gap-2.5 border-b border-black/[0.09] bg-card px-[18px] py-3.5">
          <span className="inline-block h-[9px] w-[9px] cursor-default rounded-full bg-[#d8d4cd] transition-colors hover:bg-[#ed6a5e]" />
          <span className="inline-block h-[9px] w-[9px] cursor-default rounded-full bg-[#d8d4cd] transition-colors hover:bg-[#f4bf4f]" />
          <span className="inline-block h-[9px] w-[9px] cursor-default rounded-full bg-[#d8d4cd] transition-colors hover:bg-[#61c554]" />
          <span className="ml-2 font-mono text-[11.5px] text-muted-dark">jean_almario.py</span>
        </div>
        <pre
          className="m-0 overflow-x-auto p-5 font-mono leading-[1.8] text-chip-text sm:p-7"
          style={{ fontSize: "clamp(12px, 1.05vw, 13.5px)", tabSize: 2 }}
        >
          <span className={kw}>class</span> <span className={type}>JeanAlmario</span>:{"\n"}
          {"    "}
          <span className={kw}>def</span> <span className="text-green">__init__</span>(<span className={self}>self</span>):{"\n"}
          {"        "}
          <span className={self}>self</span>.role = <span className={str}>&quot;Full-Stack Developer &amp; ML/AI Engineer&quot;</span>{"\n"}
          {"        "}
          <span className={self}>self</span>.university = <span className={str}>&quot;Texas Tech University&quot;</span>{"\n"}
          {"        "}
          <span className={self}>self</span>.gpa = <span className={type}>3.9</span>{"\n"}
          {"        "}
          <span className={self}>self</span>.grad_year = <span className={type}>2027</span>{"\n\n"}
          {"    "}
          <span className={kw}>def</span> <span className="text-green">experience</span>(<span className={self}>self</span>):{"\n"}
          {"        "}
          <span className={kw}>return</span> [{"\n"}
          {"            "}
          <span className={str}>&quot;Web Student Assistant @ TTU Rawls College (2026-present)&quot;</span>,{"\n"}
          {"            "}
          <span className={str}>&quot;Software Engineer Intern, ML @ Health Safety &amp; Environment (2025)&quot;</span>,{"\n"}
          {"        "}]{"\n\n"}
          {"    "}
          <span className={kw}>def</span> <span className="text-green">fellowships</span>(<span className={self}>self</span>):{"\n"}
          {"        "}
          <span className={kw}>return</span> [{"\n"}
          {"            "}
          <span className={str}>&quot;AI/ML Fellow, Break Through Tech AI (Cornell Tech) (2026-present)&quot;</span>,{"\n"}
          {"            "}
          <span className={str}>&quot;Capstone Researcher, Oregon State University (2026-present)&quot;</span>,{"\n"}
          {"        "}]{"\n\n"}
          {"    "}
          <span className={kw}>def</span> <span className="text-green">skills</span>(<span className={self}>self</span>):{"\n"}
          {"        "}
          <span className={kw}>return</span> [<span className={str}>&quot;Python&quot;</span>, <span className={str}>&quot;TypeScript&quot;</span>, <span className={str}>&quot;React&quot;</span>, <span className={str}>&quot;Next.js&quot;</span>, <span className={str}>&quot;PyTorch&quot;</span>,{"\n"}
          {"                "}
          <span className={str}>&quot;scikit-learn&quot;</span>, <span className={str}>&quot;Node.js&quot;</span>, <span className={str}>&quot;AWS&quot;</span>, <span className={str}>&quot;Docker&quot;</span>, <span className={str}>&quot;Azure&quot;</span>]
        </pre>
      </div>
    </div>
  )
}
