
type JSXEl = { size?: number }

function GithubIcon({ size = 18 }: JSXEl) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  )
}
function LinkedinIcon({ size = 18 }: JSXEl) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}
function WhatsAppIcon({ size = 18 }: JSXEl) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.6 5.6.6 12c0 2.1.55 4.1 1.6 5.9L.5 23.5l5.75-1.5A11.4 11.4 0 0 0 12 23.5c6.3 0 11.4-5.1 11.4-11.5S18.3.5 12 .5Zm0 20.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.4.9.9-3.3-.2-.4A9.4 9.4 0 0 1 2.6 12c0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4-4.2 9.3-9.4 9.3Zm5.1-6.9c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.6.9-.8 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.2-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9.2 9.6 8 9.4 7.5c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}
function XIcon({ size = 18 }: JSXEl) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.3 2H21.5L14.6 10.2L22.7 21H16.3L11.3 14.4L5.6 21H2.4L9.7 12.3L2 2H8.6L13.1 8L18.3 2ZM17.2 19H19L7.6 3.9H5.7L17.2 19Z" />
    </svg>
  )
}

const NAV_COLS = [
  [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Projets', href: '#projets' },
  ],
  [
    { label: 'À propos', href: '#apropos' },
    { label: 'Services', href: '#services' },
  ],
  [
    { label: 'Compétences', href: '#competences' },
    { label: 'Contact', href: '#contact' },
  ],
]

const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.me/22901234506', label: 'WhatsApp' },
  { icon: XIcon, href: 'https://x.com', label: 'X' },
]

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(600px 200px at 50% 100%, rgba(34,211,238,0.12), transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#accueil" className="font-display font-bold text-lg block mb-3">
             A. DENIS<span className="text-cyan"> BALOGOU</span>
            </a>
            <p className="text-sm text-muted max-w-[220px]">
              Développeur d'applications web.
            </p>
          </div>

          {NAV_COLS.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              {col.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted hover:text-cyan transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}

          <div>
            <p className="text-xs text-muted mb-3">SUIVEZ-MOI</p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted hover:text-cyan transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <p>© 2026 A. Denis BALOGOU. Tous droits réservés.</p>
          <p>Transformez vos idées en solutions digitales qui font la différence.</p>
        </div>
      </div>
    </footer>
  )
}