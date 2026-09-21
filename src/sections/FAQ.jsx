import Accordion from '../components/Accordion'
import Icon from '../components/ui/Icon'
import { faqs } from '../data/site'

export default function FAQ() {
  return (
    <section className="relative px-6 py-24">
      <Icon
        name="star"
        className="pointer-events-none absolute left-8 top-20 hidden h-6 w-6 text-ink/40 sm:block"
      />
      <Icon
        name="hash"
        className="pointer-events-none absolute right-8 top-10 h-6 w-6 text-ink/40"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Have questions?</h2>
        <p className="mt-4 text-sm text-muted">
          Here are a few quick answers to help you out. If you still can&rsquo;t find what you need,
          just send me a message.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion items={faqs} />
      </div>
    </section>
  )
}
