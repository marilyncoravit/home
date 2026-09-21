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
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          A few things you might want to know.
        </h2>
        <p className="mt-4 text-sm text-muted">
          Here are a few quick answers to help you out. If you still can&rsquo;t find what you need,
          just send me a message.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
        {faqs.map((item) => (
          <div key={item.question} className="border-t border-ink/15 pt-6">
            <h3 className="text-lg font-bold">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
