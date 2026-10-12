import { useState } from 'react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { contactCards, site } from '../data/site'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const onChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')
    try {
      // No server on this static site: FormSubmit relays the message
      // straight to my inbox without needing a backend.
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => null)
      // FormSubmit can return HTTP 200 even when it didn't actually
      // deliver the message (e.g. the destination address still needs
      // its one-time confirmation click), so check the payload too.
      const succeeded = data?.success === true || data?.success === 'true'
      if (!res.ok || !succeeded) throw new Error('Request failed')
      setStatus('sent')
      setForm(initialForm)
    } catch {
      // Fall back to opening the visitor's own email client so the
      // message isn't lost if the request couldn't go through.
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom ${form.name} (${form.email})`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-lilac px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Badge>Contact</Badge>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Let&rsquo;s build something meaningful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
            Interested in working together or discussing a design leadership opportunity?
            <br />
            I&rsquo;d love to connect.
          </p>
        </div>
        <div className="mt-10 rounded-3xl hand-border bg-paper p-8 sm:p-12">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium text-muted">Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange('name')}
                  placeholder="Your name *"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink outline-none placeholder:text-muted focus:border-ink"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-muted">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange('email')}
                  placeholder="Email address *"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink outline-none placeholder:text-muted focus:border-ink"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium text-muted">Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={onChange('message')}
                placeholder="Tell me about your project *"
                className="mt-2 w-full resize-none border-b border-ink/30 bg-transparent py-2 text-ink outline-none placeholder:text-muted focus:border-ink"
              />
            </label>

            <div className="pt-2 text-center">
              <Button type="submit" variant="secondary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </Button>
              {status === 'sent' && (
                <p className="mt-4 text-sm text-muted">
                  Thanks for reaching out! Your message is on its way, and I&rsquo;ll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm text-muted">
                  Something went wrong, so I&rsquo;ve opened your email app instead. Send it over
                  and I&rsquo;ll reply soon.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-10 flex justify-center">
          {contactCards.map((card) => {
            const Tag = card.href ? 'a' : 'div'
            return (
              <Tag
                key={card.label}
                href={card.href}
                className={`flex w-full max-w-xs flex-col items-center gap-2 rounded-2xl hand-border bg-paper p-6 text-center ${
                  card.href ? 'transition-transform hover:-translate-y-0.5' : ''
                }`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full hand-border bg-mint-soft">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <p className="font-bold">{card.label}</p>
                <p className="text-sm text-muted">{card.value}</p>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
