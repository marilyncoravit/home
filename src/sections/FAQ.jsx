import { faqs } from '../data/site'

export default function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          A few things you might want to know.
        </h2>
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
