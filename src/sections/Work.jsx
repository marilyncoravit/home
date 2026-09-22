import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Icon from '../components/ui/Icon'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import { projects } from '../data/projects'

const colorMap = {
  lilac: 'bg-lilac-soft',
  peach: 'bg-peach/40',
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <Badge>Selected work</Badge>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            A few projects I&rsquo;m proud to have shaped end to end.
          </h2>
          <p className="mt-4 text-sm text-muted">
            From messy problem to shipped product: here&rsquo;s a look at how I work and what it drove.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`group flex flex-col rounded-3xl hand-border p-6 transition-transform duration-200 hover:-translate-y-1 ${colorMap[project.color]}`}
            >
              <Badge className="w-fit bg-paper">{project.badge}</Badge>
              <PlaceholderImage label={`${project.title} screenshot`} className="mt-6" />
              <div className="mt-6 flex-1">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                <div className="flex gap-6 text-xs text-muted">
                  {project.stats.slice(0, 2).map((stat) => (
                    <span key={stat.label}>
                      <strong className="text-ink">{stat.value}</strong> {stat.label}
                    </span>
                  ))}
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full hand-border bg-paper transition-transform group-hover:translate-x-1">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
