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

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    // No backend on this static site yet: open the visitor's email client
    // pre-filled with their message so the form is fully functional today.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="bg-lilac px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl hand-border bg-paper p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Let&rsquo;s connect.</h2>
            <p className="mt-2 text-sm text-muted">
              Have a question or want to learn more about my work? Fill out the form below, and
              I&rsquo;ll get back to you soon.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium text-muted">Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange('name')}
                  placeholder="Your name *"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink outline-none placeholder:text-muted/70 focus:border-ink"
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
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-ink outline-none placeholder:text-muted/70 focus:border-ink"
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
                className="mt-2 w-full resize-none border-b border-ink/30 bg-transparent py-2 text-ink outline-none placeholder:text-muted/70 focus:border-ink"
              />
            </label>

            <div className="pt-2 text-center">
              <Button type="submit" variant="secondary">
                Submit
              </Button>
              {status === 'sent' && (
                <p className="mt-4 text-sm text-muted">
                  Thanks! Your email app should be opening now — send it over and I&rsquo;ll reply soon.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-16 text-center">
          <Badge>Contact</Badge>
          <h3 className="mx-auto mt-4 max-w-lg text-3xl font-extrabold leading-tight">
            Got a project in mind? Let&rsquo;s get in touch.
          </h3>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center gap-2 rounded-2xl hand-border bg-paper p-6 text-center"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full hand-border bg-mint-soft">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <p className="font-bold">{card.label}</p>
              <p className="text-sm text-muted">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
