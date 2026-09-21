import Badge from '../components/ui/Badge'
import Icon from '../components/ui/Icon'
import { process, tools } from '../data/site'

const colorMap = {
  mint: 'bg-mint-soft',
  blush: 'bg-blush/60',
  peach: 'bg-peach/60',
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
          <Badge>Process</Badge>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            I work efficiently with a focus on making a meaningful impact.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {process.map((step) => (
            <div
              key={step.title}
              className={`flex flex-col rounded-2xl hand-border p-6 ${colorMap[step.color]}`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full hand-border bg-paper">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-muted">{step.number}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted">The tools behind my process:</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-ink/15 pt-6 text-lg font-semibold">
            {tools.map((tool, i) => (
              <span key={tool} className="flex items-center gap-3">
                {tool}
                {i < tools.length - 1 && <span className="text-ink/30">&#8727;</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
