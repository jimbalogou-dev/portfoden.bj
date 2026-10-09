import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code2,
  Briefcase,
  GraduationCap,
} from 'lucide-react'

const NAVY = '#12325F'
const BLUE = '#1F4A8F'
const LIGHT_BLUE = '#4C9BE8'

type IconProps = { size?: number; className?: string }

function GithubIcon({ size = 14, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  )
}

function LinkedinIcon({ size = 14, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

const COORDONNEES: { icon: ComponentType<IconProps>; text: string }[] = [
  { icon: Mail, text: 'jimbalogou@gmail.com' },
  { icon: Phone, text: '+229 01 99 31 54 06' },
  { icon: MapPin, text: 'Abomey-Calavi / Bénin' },
  { icon: GithubIcon, text: 'jimbalogou-dev' },
  { icon: Globe, text: 'denportfo.vercel.app' },
  { icon: LinkedinIcon, text: 'linkedin.com/in/denis-balogou' },
]

const FORMATIONS = [
  { year: '2026', text: "Étudiant en fin de formation professionnelle en développement web à l'EIG BÉNIN" },
  {
    year: '2026',
    text: 'Attestation de suivi de cours en ligne sur les analyses, les enjeux et les actions du développement durable',
  },
  {
    year: '2021',
    text: "Licence en Linguistique anglaise — Faculté des Lettres, Langues, Arts et Communication, Université d'Abomey-Calavi",
  },
  { year: '2018', text: 'Baccalauréat série A1 — CEG1 Glazoué' },
  { year: '2014', text: "Brevet d'Étude du Premier Cycle (BEPC) — CEG Yagbo" },
  { year: '2014', text: "Certificat d'Études Primaires (CEP) — EPP Simon-Doho" },
]

const LANGUAGES = ['Français - Langue nationale', 'Anglais - Bilingue / Linguist']

const INTERESTS = ['Développement, innovation technologique', 'Apprentissage continu', "Concept d'interfaces"]

const SKILLS = [
  { title: 'FRONT-END', items: ['HTML', 'CSS', 'TAILWIND CSS', 'JAVASCRIPT (ES6+)', 'REACT.JS, NEXT.JS', 'WORDPRESS'] },
  { title: 'BACK-END', items: ['NODE.JS', 'EXPRESS.JS', 'PHP', 'LARAVEL'] },
  { title: 'BASES DE DONNÉES', items: ['SQL, POSTGRESQL, MONGODB'] },
  {
    title: 'CONCEPTS & OUTILS',
    items: ["CONCEPTION D'INTERFACES", 'XAMPP', 'GIT', 'GITHUB', 'VS CODE', 'RENDER', 'VERCEL'],
  },
]

const EXPERIENCES = [
  {
    year: '2026',
    title: 'DÉVELOPPEUR WEB — PROJET « PROMPTÉTÈE IA »',
    bullets: [
      "Développement de l'interface utilisateur dynamique en React et Vite.",
      'Déploiement et intégration continue du front-end sur Vercel.',
      'Développement du serveur et des fonctionnalités back-end avec Node.js.',
      'Optimisation du design responsive et de la navigation.',
      'Conception et gestion de la base de données avec MongoDB.',
      'Déploiement et intégration continue du back-end sur Hostinger.',
    ],
  },
  {
    year: '2026',
    title: 'DÉVELOPPEUR WEB — PROJET « BOUTIQUE PRÊT-À-PORTER »',
    bullets: [
      "Conception d'architectures de bases de données et modélisation (diagrammes UML).",
      "Développement d'applications web dynamiques avec Laravel.",
      'Intégration de base de données en SQL.',
      'Optimisation du design responsive et de la navigation.',
      'Déploiement du projet sur Render.',
    ],
  },
  {
    year: '2026',
    title: 'DÉVELOPPEUR FULL-STACK — PROJET ACADÉMIQUE « AUTOCOST »',
    bullets: [
      "Conception et développement d'un site web d'estimation de coûts des véhicules.",
      "Développement de l'interface utilisateur dynamique avec React.js et Vite.",
      'Développement du serveur et des fonctionnalités back-end avec Node.js.',
      'Conception et gestion de la base de données avec MongoDB.',
      "Intégration des échanges entre l'interface, le serveur et la base de données.",
      'Déploiement et intégration continue du front-end sur Vercel.',
      'Optimisation du design responsive et de la navigation.',
    ],
  },
  {
    year: '2026',
    title: 'DÉVELOPPEUR WEB — PROJET « SEGURO »',
    bullets: [
      "Application web pour hôtel permettant de consulter les informations et d'effectuer des réservations sur la plateforme.",
      'Développement avec PHP, avec la structure du HTML, du CSS et les fonctionnalités du JavaScript et du Bootstrap.',
      'Intégration de base de données en SQL.',
    ],
  },
]

function SideTitle({ icon: Icon, children }: { icon?: ComponentType<IconProps>; children: ReactNode }) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
      {Icon && <Icon size={14} className="text-white shrink-0" />}
      <h2 className="font-display font-bold text-[9px] sm:text-sm tracking-wide text-white leading-tight">
        {children}
      </h2>
    </div>
  )
}

function MainTitle({ icon: Icon, children }: { icon: ComponentType<IconProps>; children: ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <span
        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0"
        style={{ background: NAVY }}
      >
        <Icon size={12} className="text-white" />
      </span>
      <h2
        className="font-display font-bold text-[10px] sm:text-base tracking-wide leading-tight"
        style={{ color: BLUE }}
      >
        {children}
      </h2>
    </div>
  )
}

export default function CvPage() {
  return (
    <div className="cv-page min-h-screen overflow-x-hidden" style={{ background: 'var(--bg)' }}>
      <header className="max-w-4xl mx-auto px-3 sm:px-6 pt-5 sm:pt-8 pb-3 sm:pb-4 flex flex-row flex-nowrap items-center justify-between gap-2">
  <Link
    to="/"
    className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted hover:text-cyan transition-colors whitespace-nowrap"
  >
    <ArrowLeft size={16} />
    Retour à l'accueil
  </Link>
  <a
    href="/cv-denis-balogou.pdf"
    download
    className="btn-cyan flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm whitespace-nowrap"
  >
    Télécharger en PDF <Download size={14} />
  </a>
</header>

      <main className="max-w-4xl mx-auto px-2 sm:px-4 pb-10 sm:pb-16">
        {/* Deux colonnes côte à côte, même sur téléphone (comme le PDF) */}
        <div className="grid grid-cols-[34%_66%] md:grid-cols-[36%_64%] bg-white shadow-2xl rounded-md sm:rounded-lg overflow-hidden">
          {/* COLONNE GAUCHE */}
          <aside className="min-w-0 text-white px-2 sm:px-7 py-4 sm:py-8" style={{ background: NAVY }}>
            <div className="w-14 h-14 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-[#EDEDED] mx-auto mb-5 sm:mb-10" />

            <section className="mb-5 sm:mb-8">
              <SideTitle>COORDONNÉES</SideTitle>
              <div className="space-y-2 sm:space-y-3">
                {COORDONNEES.map((c) => {
                  const Icon = c.icon
                  return (
                    <div key={c.text} className="flex items-start sm:items-center gap-1.5 sm:gap-3">
                      <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-sm bg-white flex items-center justify-center shrink-0">
                        <Icon size={10} className="text-[#12325F] sm:hidden" />
                        <Icon size={13} className="text-[#12325F] hidden sm:block" />
                      </span>
                      <span className="text-[7.5px] sm:text-xs break-all leading-tight">{c.text}</span>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="mb-5 sm:mb-8">
              <SideTitle icon={GraduationCap}>FORMATIONS & CERTIFICATIONS</SideTitle>
              <div className="space-y-2.5 sm:space-y-4">
                {FORMATIONS.map((f) => (
                  <div key={f.year + f.text} className="flex gap-1.5 sm:gap-3">
                    <span className="w-6 sm:w-9 shrink-0 text-[8px] sm:text-xs font-bold">{f.year}</span>
                    <span className="text-[7px] sm:text-[11px] leading-snug text-white/80 break-words min-w-0">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-5 sm:mb-8">
              <SideTitle>LANGUES</SideTitle>
              {LANGUAGES.map((l) => (
                <p key={l} className="text-[7.5px] sm:text-xs text-white/85 mb-0.5 leading-tight">
                  {l}
                </p>
              ))}
            </section>

            <section>
              <SideTitle>CENTRES D'INTÉRÊT</SideTitle>
              {INTERESTS.map((i) => (
                <p key={i} className="text-[7.5px] sm:text-xs text-white/85 mb-0.5 leading-tight">
                  {i}
                </p>
              ))}
            </section>
          </aside>

          {/* COLONNE DROITE */}
          <div className="min-w-0 px-2.5 sm:px-8 py-4 sm:py-8 text-[#1A1A1A]">
            <h1
              className="text-center text-lg sm:text-4xl md:text-5xl tracking-wide mb-4 sm:mb-8"
              style={{ fontFamily: "'Bangers', sans-serif", color: BLUE }}
            >
              A. DENIS BALOGOU
            </h1>

            <section className="mb-5 sm:mb-8">
              <h2 className="font-display font-bold text-[11px] sm:text-lg mb-1 sm:mb-2" style={{ color: BLUE }}>
                Profil
              </h2>
              <p className="text-[8px] sm:text-[12.5px] leading-relaxed text-gray-700">
                Développeur d'application web en JavaScript et PHP, avec une pratique du React.js et Next.js
                côté front-end, ainsi que Node.js, Express.js et Laravel côté back-end. Je conçois des
                solutions web modernes, performantes et intelligentes adaptées aux besoins réels, avec une
                attention particulière portée à l'expérience utilisateur, à la qualité du code et à la
                sécurité.
              </p>
            </section>

            <section className="mb-5 sm:mb-8">
              <div className="mb-3 sm:mb-5">
                <MainTitle icon={Code2}>COMPÉTENCES</MainTitle>
              </div>
              <div className="space-y-2.5 sm:space-y-4">
                {SKILLS.map((s) => (
                  <div key={s.title}>
                    <h3
                      className="font-display font-bold text-[9px] sm:text-sm mb-0.5 sm:mb-1"
                      style={{ color: BLUE }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[7.5px] sm:text-[11.5px] tracking-wide text-gray-700 break-words">
                      {s.items.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <MainTitle icon={Briefcase}>EXPÉRIENCES PROFESSIONNELLES & PROJETS</MainTitle>
              <div className="border-b mt-2 sm:mt-3 mb-4 sm:mb-6" style={{ borderColor: LIGHT_BLUE }} />

              <div>
                {EXPERIENCES.map((exp) => (
                  <div key={exp.title} className="flex gap-1.5 sm:gap-3">
                    <p className="w-7 sm:w-12 shrink-0 text-[8px] sm:text-sm font-bold pt-0.5">{exp.year}</p>
                    <div
                      className="relative flex-1 min-w-0 border-l-2 pl-2.5 sm:pl-6 pb-5 sm:pb-7 last:pb-0"
                      style={{ borderColor: LIGHT_BLUE }}
                    >
                      <span
                        className="absolute -left-[5px] sm:-left-[7px] top-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                        style={{ background: LIGHT_BLUE }}
                      />
                      <h3 className="text-[8px] sm:text-[13px] font-extrabold mb-1 sm:mb-2 tracking-wide break-words leading-tight">
                        {exp.title}
                      </h3>
                      <ul className="space-y-0.5">
                        {exp.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-[7.5px] sm:text-[11.5px] leading-snug text-gray-700 break-words"
                          >
                            • {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <p className="text-center text-[8px] sm:text-[11px] font-bold mt-6 sm:mt-10" style={{ color: BLUE }}>
              A. Denis BALOGOU, Développeur d'application web
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}