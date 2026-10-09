import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TechMarquee from './TechMarquee'
import LaptopShowcase from './LaptopShowcase'

const ROTATING_WORDS = ['applis', 'sites', 'produits']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 400px at 85% 10%, rgba(34,211,238,0.14), transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16 items-center relative">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-live relative inline-flex max-w-full items-center gap-2 pill glass px-3 sm:px-4 py-2 text-[10px] sm:text-xs leading-snug mb-6">
            <span className="dot-live" />
            DISPONIBLE POUR DES PROJETS & COLLABORATIONS
          </span>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] leading-[1.1] mb-6">
            Concevoir des solutions web modernes et <span className="text-cyan">intelligentes.</span>
          </h1>

          <p className="text-base md:text-lg mb-8 max-w-lg text-muted">
            Je développe des{' '}
            <span className="inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="inline-block text-cyan font-semibold"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            pensés pour répondre aux besoins réels, avec une attention particulière portée à
            l'expérience utilisateur, aux performances et à l'évolutivité.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projets" className="btn-cyan">Voir mes projets </a>
            <a href="#contact" className="btn-outline">Parlons de votre projet</a>
          </div>

          <p className="text-xs tracking-wide mb-4 text-muted">TECHNOLOGIES</p>
          <TechMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="min-w-0 lg:-mx-6" // ✅ visible sur tous les écrans (avant : hidden lg:block)
        >
          <LaptopShowcase />
        </motion.div>
      </div>
    </section>
  )
}