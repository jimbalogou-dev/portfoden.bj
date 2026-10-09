import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import hotelseguro from '../assets/images/Photo-seguro.jpeg'
import prompteque from '../assets/images/Photo-promptèques.jpeg'
import jimstyle from '../assets/images/Photo-jim-style.jpeg'
import autocost from '../assets/images/Photo-autocos.jpeg'

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/>
    </svg>
  )
}

const CATEGORIES = ['Tous', 'Web App', 'Site vitrine', 'E-commerce', 'Autres']

const PROJECTS = [
  {
    id: 1,
    title: 'Promptheque',
    image: prompteque,
    category: 'Web App',
    year: '2026',
    description:
      "Bibliothèque intelligente de prompts permettant de rechercher, organiser, sauvegarder et partager des prompts IA.",
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    featured: true,
    demo: 'https://promptheque-ia.vercel.app/',
    code: '#',
  },
  {
    id: 2,
    title: 'Jim Style',
    image: jimstyle,
    category: 'E-commerce',
    year: '2025',
    description: 'Boutique en ligne de prêt-à-porter moderne, catalogue et panier.',
    tech: ['Laravel', 'Tailwind CSS'],
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'Autocost',
    image: autocost,
    category: 'Site vitrine',
    year: '2026',
    description: 'Site vitrine pour la comparaison de prix de véhicules.',
    tech: ['React', 'CSS3'],
    demo: 'https://auto-cost-0.vercel.app/',
    code: '#',
  },
  {
    id: 4,
    title: 'Hôtel Seguro',
    image: hotelseguro,
    category: 'Web App',
    year: '2026',
    description: "Réservation d'hôtel en ligne avec gestion des disponibilités.",
    tech: ['PHP', 'MySQL', 'Bootstrap5'],
    demo: '#',
    code: '#',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('Tous')

  const filtered =
    filter === 'Tous' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
  const featured = filtered.find((p) => p.featured) ?? filtered[0]
  const rest = filtered.filter((p) => p.id !== featured?.id)

  return (
    <section id="projets" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs tracking-wide text-cyan mb-4 block">03 - PROJETS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight max-w-xl mb-8">
            Des projets conçus pour résoudre aux besoins réels.
          </h2>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`pill px-4 py-2 text-sm transition-colors ${
                  filter === c ? 'btn-cyan' : 'glass text-muted hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {featured && (
              <div className="glass rounded-2xl overflow-hidden grid md:grid-cols-2 mb-6">
                <div
               className="relative min-h-56 overflow-hidden surface-panel"
          > {featured.image && <img src={featured.image} alt={featured.title} className=" absolute inset-0 w-full h-full object-cover object-top" />}
                Visuel du projet
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-xl">{featured.title}</h3>
                    <span className="text-xs text-muted">{featured.year}</span>
                  </div>
                  <p className="text-sm text-muted mb-4">{featured.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-cyan/10 text-cyan">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={featured.demo} className="btn-cyan flex items-center gap-1.5 text-sm">
                      Voir le projet <ExternalLink size={14} />
                    </a>
                    <a href={featured.code} className="btn-outline flex items-center gap-1.5 text-sm">
                      Voir le code <GithubIcon size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                   <div
                    className="h-40 overflow-hidden surface-panel"
                > {p.image && <img src={p.image} alt={p.title} className="w-full h-full object-cover" />}
                   Visuel du projet
                  </div>
                   <div className="p-5">
                 <div className="flex items-center justify-between mb-2">
                 <h3 className="font-display font-semibold">{p.title}</h3>
                <span className="text-xs text-muted">{p.year}</span>
               </div>
               <p className="text-sm text-muted mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
               {p.tech.map((t) => (
               <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-cyan/10 text-cyan">
               {t}
              </span>
              ))}
          </div>
          <div className="flex gap-3">
         <a href={p.demo} className="btn-cyan flex items-center gap-1.5 text-xs !px-4 !py-2">
          Voir le projet <ExternalLink size={12} />
          </a>
         <a href={p.code} className="btn-outline flex items-center gap-1.5 text-xs !px-4 !py-2">
       Voir le code <GithubIcon size={12} />
    </a>
  </div>
</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}