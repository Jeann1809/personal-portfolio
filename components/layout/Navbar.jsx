const navLinks = [
  { name: "work", href: "#work" },
  { name: "experience", href: "#experience" },
  { name: "skills", href: "#skills" },
]

export function Navbar() {
  return (
    <div className="flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 px-1.5 py-1 pb-2">
      <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
        jeanalmario.dev
      </div>
      <div className="flex flex-wrap gap-5 font-mono text-xs tracking-[0.08em] text-muted">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="inline-flex min-h-[44px] items-center px-2 text-muted hover:text-ink"
          >
            {link.name}
          </a>
        ))}
        <a
          href="mailto:jalmario@ttu.edu"
          className="inline-flex min-h-[44px] items-center px-2 text-green hover:text-ink"
        >
          jalmario@ttu.edu
        </a>
      </div>
    </div>
  )
}
