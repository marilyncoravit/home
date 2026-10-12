import Badge from '../components/ui/Badge'
import Icon from '../components/ui/Icon'
import { process } from '../data/site'

const colorMap = {
  mint: 'bg-mint-soft',
  lilac: 'bg-lilac-soft',
  blush: 'bg-blush/60',
  butter: 'bg-butter/60',
}

export default function Process() {
  return (
    <section id="process" className="relative bg-lilac px-6 py-24">
      <Icon
        name="sparkle"
        className="pointer-events-none absolute right-10 top-10 h-7 w-7 text-ink/60"
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Badge>Design Philosophy</Badge>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Great design starts with clarity, collaboration, and people.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {process.map((step) => (
            <div key={step.title} className={`rounded-2xl hand-border p-8 ${colorMap[step.color]}`}>
              <span className="text-sm font-semibold text-muted">{step.number}</span>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
