import Badge from '../components/ui/Badge'
import Icon from '../components/ui/Icon'
import ProcessCarousel from '../components/ProcessCarousel'
import { process, tools } from '../data/site'

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

        <ProcessCarousel steps={process} />

        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted">The tools behind my process:</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg font-semibold">
            {tools.map((tool, i) => (
              <span key={tool} className="flex items-center gap-2">
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
