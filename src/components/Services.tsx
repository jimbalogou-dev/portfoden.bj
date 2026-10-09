import { motion, type Variants } from 'framer-motion'
import { Globe, LayoutTemplate, Boxes, Server, Sparkles, Wrench, ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'Applications web',
    description: 'Applications modernes, responsives et évolutives, adaptées à vos besoins.',
  },
  {
    icon: LayoutTemplate,
    title: 'Sites web professionnels',
    description: 'Sites vitrines modernes pour entreprises et entrepreneurs.',
  },
  {
    icon: Boxes,
    title: 'Solutions digitales',
    description: 'Conception de solutions adaptées à des besoins spécifiques.',
  },
  {
    icon: Server,
    title: 'API & Backend',
    description: 'Création de systèmes backend, API REST et gestion des données.',
  },
  {
    icon: Sparkles,
    title: 'Intégration IA',
    description: "Ajout de fonctionnalités intelligentes dans vos outils existants.",
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: "Correction, amélioration et évolution des solutions existantes.",
  },
]

const gridVariants: Variants = { // ✅ type ajouté
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

function cardVariant(i: number): Variants { // ✅ type de retour ajouté
  const fromLeft = i % 2 === 0
  return {
    hidden: { opacity: 0, x: fromLeft ? -24 : 24, y: 12 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }
}

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs tracking-wide text-cyan mb-4 block">05 - SERVICES</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight max-w-xl">
            Ce que je peux faire pour vous.
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={cardVariant(i)}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 relative overflow-hidden border border-transparent hover:border-cyan transition-colors"
              >
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-cyan/10"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={18} className="text-cyan" />
                </motion.div>

                <h3 className="font-display font-semibold mb-2 flex items-center justify-between">
                  {s.title}
                  <ArrowUpRight
                    size={16}
                    className="text-cyan opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </h3>
                <p className="text-sm text-muted">{s.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}