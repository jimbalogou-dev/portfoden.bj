import type { LucideIcon } from 'lucide-react'
import { useState, type FormEvent, type JSX } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbglwaew'

function WhatsAppIcon({ size = 18 }: { size?: number }): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.6 5.6.6 12c0 2.1.55 4.1 1.6 5.9L.5 23.5l5.75-1.5A11.4 11.4 0 0 0 12 23.5c6.3 0 11.4-5.1 11.4-11.5S18.3.5 12 .5Zm0 20.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.4.9.9-3.3-.2-.4A9.4 9.4 0 0 1 2.6 12c0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4-4.2 9.3-9.4 9.3Zm5.1-6.9c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.6.9-.8 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.2-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9.2 9.6 8 9.4 7.5c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function GithubIcon({ size = 18 }: { size?: number }): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  )
}

type ContactItem = {
  icon: LucideIcon | ((props: { size?: number }) => JSX.Element)
  label: string
  href: string
}

const CONTACT_INFO: ContactItem[] = [
  { icon: Mail, label: 'jimbalogou@gmail.com', href: 'mailto:jimbalogou@gmail.com' },
  { icon: WhatsAppIcon, label: '+229 01 99 31 54 06', href: 'https://wa.me/2290199315406' },
  { icon: LinkedinIcon, label: 'linkedin.com/in/denis-balogou-bj', href: 'https://linkedin.com/in/denis-balogou-bj' },
  { icon: GithubIcon, label: 'github.com/jimbalogou-dev', href: 'https://github.com/jimbalogou-dev' },
]

const SUBJECTS = ['Un projet à discuter', 'Une collaboration', 'Une question', 'Autre']

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('company')) {
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-wide text-cyan mb-4 block">06 - CONTACT</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-4">
            Parlons de votre projet.
          </h2>
          <p className="text-base text-muted mb-10 max-w-md">
            Décrivez-moi votre besoin et discutons de la meilleure manière de le transformer en
            solution web.
          </p>

          <div className="space-y-4">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              const isExternal = item.href.indexOf('http') === 0
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-cyan transition-colors"
                >
                  <span className="w-9 h-9 rounded-full glass flex items-center justify-center text-cyan">
                    <Icon size={16} />
                  </span>
                  {item.label}
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-5"
        >
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          <div>
            <label className="text-xs text-muted mb-1 block">Nom</label>
            <input
              required
              name="nom"
              placeholder="Votre nom"
              className="w-full bg-transparent border-b border-border py-2 outline-none focus:border-cyan transition-colors"
            />
          </div>

          <div>
            <label className="text-xs text-muted mb-1 block">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="votre@email.com"
              className="w-full bg-transparent border-b border-border py-2 outline-none focus:border-cyan transition-colors"
            />
          </div>

          <div>
            <label className="text-xs text-muted mb-1 block">Sujet</label>
            <select
              required
              name="sujet"
              defaultValue=""
              className="w-full bg-transparent border-b border-border py-2 outline-none focus:border-cyan transition-colors"
            >
              <option value="" disabled style={{ color: '#6B7280', background: '#FFFFFF' }}>
                Choisir un sujet
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s} style={{ color: '#0B1220', background: '#FFFFFF' }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-muted mb-1 block">Votre message</label>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Votre message..."
              className="w-full bg-transparent border-b border-border py-2 outline-none focus:border-cyan transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-cyan w-full flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message '}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-cyan text-center">Message envoyé, merci ! Je vous réponds dans bref délais.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-center" style={{ color: '#F87171' }}>
              Une erreur est survenue. Réessaie, ou écris-moi directement à l'adresse ci-contre.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}