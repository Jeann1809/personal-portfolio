import { contact } from "@/lib/data"

export function Contact() {
  return (
    <div
      id="contact"
      className="mt-7 flex w-full max-w-[1240px] flex-wrap justify-between gap-6 rounded-[18px] border border-black/[0.12] bg-tint p-6 sm:mt-14 sm:gap-12 sm:p-16"
    >
      <div className="flex flex-[1_1_340px] flex-col gap-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">{contact.eyebrow}</div>
        <h2
          className="m-0 font-semibold leading-[1.04] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(26px, 5.5vw, 60px)", textWrap: "pretty" }}
        >
          {contact.headline}
        </h2>
      </div>
      <div className="flex flex-[0_1_320px] flex-col">
        {contact.links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex min-h-[52px] flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-4 font-mono text-[13.5px] text-ink hover:text-green ${
              i < contact.links.length - 1 ? "border-b border-black/10" : ""
            }`}
          >
            <span className="text-muted-dark">{link.label}</span>
            <span>{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
