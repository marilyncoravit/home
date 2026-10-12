import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import { projects } from '../data/projects'
import { site } from '../data/site'

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
            Thoughtful design.
            <br />
            Meaningful impact.
          </h2>
          <p className="mt-4 text-sm text-muted">
            A selection of projects where I&rsquo;ve turned complex challenges into intuitive
            experiences, from early exploration through delivery.
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
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="mt-6 aspect-[16/9] w-full rounded-2xl bg-paper object-contain"
                />
              ) : (
                <PlaceholderImage label={`${project.title} screenshot`} className="mt-6" />
              )}
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

        <div className="mt-8 rounded-3xl bg-ink p-10 text-paper sm:p-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-paper/60">
            <Icon name="lock" className="h-4 w-4" />
            Additional work
          </div>
          <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            More work behind the scenes.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/70 sm:text-base">
            My recent work spans enterprise customer service, AI-assisted workflows, and
            complex product experiences. While some projects can&rsquo;t be shared publicly,
            I&rsquo;m happy to discuss my approach and contributions in more detail.
          </p>
          <Button href={`mailto:${site.email}`} variant="light" className="mt-6">
            Let&rsquo;s talk about it
            <Icon name="arrowRight" className="h-4 w-4 -rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  )
}
