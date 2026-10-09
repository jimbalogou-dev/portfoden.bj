import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('accueil')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = LINKS.map((l) => document.querySelector(l.href))
      let current = 'accueil'
      sections.forEach((s) => {
        if (s instanceof HTMLElement && window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
  }

    return (
    <nav
      className={`fixed w-full z-50 transition-colors ${scrolled ? 'nav-scrolled' : ''}`}
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <a href="#accueil" className="font-display font-bold text-lg">
          A. DENIS<span className="text-cyan"> BALOGOU</span>
        </a>

        <div className="hidden md:flex items-center glass pill p-1 gap-1">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={`navlink ${active === l.href.slice(1) ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
                    <Link
            to="/cv"
            className="hidden lg:flex items-center gap-2 pill glass px-4 py-2 text-xs hover:border-cyan hover:text-cyan transition-colors"
          >
            <FileText size={14} />
            Voir mon CV
          </Link>
          <button onClick={toggleTheme} aria-label="Changer de thème" className="pill glass w-[38px] h-[38px] flex items-center justify-center">
            {theme === 'dark' ? '☾' : '☀'}
          </button>
          <button className="md:hidden text-xl" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">☰</button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass mx-4 mb-3 rounded-xl p-3 flex flex-col gap-1 text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="navlink" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}