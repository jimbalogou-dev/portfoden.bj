import { motion } from 'framer-motion'
import profileImg from '../assets/images/Profilportfo-removebg-preview.png'

const STATS = [
  { value: '02+', label: 'Projet phare' },
  { value: '10+', label: 'Technologies' },
  { value: '∞', label: 'Idées à construire' },
]

export default function About() {
  return (
    <section id="apropos" className="py-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-wide text-cyan mb-4 block">01 - À PROPOS</span>

          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">
            Développer. Concevoir. <span className="text-cyan">Résoudre.</span>
          </h2>

          <p className="text-base md:text-lg mb-4 max-w-lg text-muted">
            Je suis A. Denis BALOGOU, développeur d'applications web. Je conçois des solutions
            modernes qui combinent des interfaces utilisateurs soignées,logique métier fiable et services
            numériques performants.
          </p>
          <p className="text-base md:text-lg mb-10 max-w-lg text-muted">
            Mon approche consiste à partir du besoin réel pour construire une solution adaptée sur mesure, en utilisant les technologies les plus appropriées pour garantir une application
            fonctionnelle et évolutive.
          </p>

          <div className="flex gap-10">
            {STATS.map((s, i) => (
              <div key={s.label} className={i > 0 ? 'pl-10 border-l border-border' : ''}>
                <p className="font-display font-bold text-2xl md:text-3xl text-cyan mb-1">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-64 md:w-full max-w-sm"
        >
                   <div className="aspect-[4/5] rounded-3xl border border-border overflow-hidden surface-panel">
            <img
              src={profileImg}
              alt="Denis A. BALOGOU"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="chip glass absolute -bottom-4 -right-4 text-base px-4 py-3">&lt;/&gt;</span>
        </motion.div>
      </div>
    </section>
  )
}