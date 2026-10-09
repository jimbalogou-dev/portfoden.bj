import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import hotelseguro from '../assets/images/Photo-seguro.jpeg'
import prompteque from '../assets/images/Photo-promptèques.jpeg'
import jimstyle from '../assets/images/Photo-jim-style.jpeg'
import autocost from '../assets/images/Photo-autocos.jpeg'

type Slide = {
  title: string
  category: string
  year: string
  description: string
  color: string
  image?: string
  fit?: 'cover' | 'contain'
  tech?: string[]
}

const SLIDES: Slide[] = [
  {
    title: 'Promptheque',
    category: 'Web App',
    year: '2026',
    description: 'Bibliothèque intelligente pour rechercher, organiser et partager des prompts IA.',
    image: prompteque,
    fit: 'contain',
    color: '#5B3CC4',
  },
  {
    title: 'Jim Style',
    category: 'E-commerce',
    year: '2025',
    description: 'Boutique en ligne de prêt-à-porter moderne, avec catalogue et panier.',
    image: jimstyle,
    fit: 'contain',
    color: '#C2255C',
  },
  {
    title: 'Autocost',
    category: 'Site vitrine',
    year: '2026',
    description: 'Comparaison et estimation des prix de véhicules.',
    image: autocost,
    color: '#0E8FBF',
  },
  {
    title: 'Hôtel Seguro',
    category: 'Web App',
    year: '2026',
    description: "Réservation d'hôtel en ligne avec gestion des disponibilités.",
    image: hotelseguro,
    color: '#C77A0A',
  },
]

const INTERVAL = 4000

const CHIPS = [
  { label: '⚛ React', color: 'var(--brand-react)', pos: { top: '-4%', left: '-4%' }, duration: 4 },
  { label: '▲ Laravel', color: 'var(--brand-laravel)', pos: { top: '-4%', right: '-3%' }, duration: 5 },
  { label: '# Tailwind', color: 'rgb(var(--accent-rgb))', pos: { bottom: '-4%', left: '-3%' }, duration: 4.5 },
  { label: '</>', color: 'var(--text)', pos: { bottom: '-4%', right: '2%' }, duration: 5.5 },
]

function ScreenSlide({ slide, position, total }: { slide: Slide; position: number; total: number }) {
  return (
    <div
      className="w-full h-full flex flex-col px-3 sm:px-4 pt-3 pb-3 text-white" // ✅ px-3 sm:px-4
      style={{ background: 'linear-gradient(135deg, #090E1F 0%, #0D1633 45%, ' + slide.color + ' 170%)' }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] tracking-[0.2em] text-white/50">
          PROJET {String(position + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="text-[10px] tracking-widest text-white/50">{slide.year}</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 mb-2"> {/* ✅ gap-2 sm:gap-3 */}
        <h3 className="font-display font-bold text-base sm:text-xl leading-tight">{slide.title}</h3> {/* ✅ text-base sm:text-xl */}
        <span
          className="text-[9px] sm:text-[10px] tracking-widest px-2 sm:px-2.5 py-1 rounded-full" // ✅ tailles réduites sur téléphone
          style={{ background: slide.color + '66', color: '#FFFFFF' }}
        >
          {slide.category.toUpperCase()}
        </span>
      </div>

      <div
        className="rounded-lg overflow-hidden border border-white/15 shadow-xl flex-1 min-h-0 flex flex-col"
        style={{ background: '#0A1024' }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
        {slide.image && (
          <img
            src={slide.image}
            alt={slide.title}
            className={
              'flex-1 min-h-0 w-full ' +
              (slide.fit === 'contain' ? 'object-contain' : 'object-cover object-top')
            }
          />
        )}
      </div>
    </div>
  )
}

export default function LaptopShowcase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL)
    return () => clearTimeout(t)
  }, [index])

  return (
    <div className="relative mx-auto w-full max-w-[680px] px-3 py-6 sm:px-10 sm:py-10"> {/* ✅ marges réduites sur téléphone */}
      <div
        className="relative rounded-2xl overflow-hidden border border-border shadow-2xl"
        style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)' }}
      >
        <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-3 bg-black/40"> {/* ✅ barre du haut plus fine */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-black">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <ScreenSlide slide={SLIDES[index]} position={index} total={SLIDES.length} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-black/40"> {/* ✅ barre de progression plus fine */}
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              aria-label={'Voir ' + s.title}
              className="relative h-[3px] flex-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              {i < index && <span className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.6)' }} />}
              {i === index && (
                <motion.span
                  key={'progress-' + index}
                  className="absolute inset-y-0 left-0"
                  style={{ background: 'rgb(var(--accent-rgb))' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Badges flottants */}
      {CHIPS.map((c) => (
        <motion.span
          key={c.label}
          className="chip glass z-10"
          style={{ ...c.pos, color: c.color }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          {c.label}
        </motion.span>
      ))}
    </div>
  )
}