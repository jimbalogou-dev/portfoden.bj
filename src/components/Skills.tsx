import { motion } from 'framer-motion'
import { Code2, Server, Database, Wrench } from 'lucide-react'

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Frontend',
    tagline: 'Interfaces modernes et réactives',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap5', 'WordPress'],
  },
  {
    icon: Server,
    title: 'Backend',
    tagline: 'Logique métier et API fiables',
    items: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'API REST'],
  },
  {
    icon: Database,
    title: 'Database',
    tagline: 'Stockage et gestion des données',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    icon: Wrench,
    title: 'Outils',
    tagline: 'Workflow et environnement de dev',
    items: ['Git', 'GitHub', 'VS Code', 'Xamp', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs tracking-wide text-cyan mb-4 block">02 - COMPÉTENCES</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight max-w-xl mb-2">
            Ma stack technologique pour construire des solutions complètes.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group h-56 [perspective:1200px]"
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Face avant */}
                  <div className="absolute inset-0 [backface-visibility:hidden] glass rounded-2xl p-6 flex flex-col">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-cyan/10">
                      <Icon size={18} className="text-cyan" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">{cat.title}</h3>
                    <p className="text-sm text-muted mb-auto">{cat.tagline}</p>
                    <span className="text-xs text-muted">{cat.items.length} technologies ➡</span>
                  </div>

                  {/* Face arrière */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] glass rounded-2xl p-6 flex flex-col justify-center">
                    <h3 className="font-display font-semibold text-sm mb-4 text-cyan">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((it) => (
                        <span
                          key={it}
                          className="text-xs px-2.5 py-1 rounded-full bg-cyan/10 text-cyan"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}