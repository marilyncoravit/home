import { Navigate, useParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import { getProject, projects } from '../data/projects'
import { site } from '../data/site'

const colorMap = {
  lilac: 'bg-lilac',
  peach: 'bg-peach/40',
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/" replace />

  const otherProject = projects.find((p) => p.slug !== project.slug)

  return (
    <article>
      <section className={`px-6 pb-16 pt-14 ${colorMap[project.color]}`}>
        <div className="mx-auto max-w-6xl">
          <Button to="/#work" variant="ghost" className="!px-4 !py-2 text-xs">
            &larr; Back to work
          </Button>

          <div className="mt-8">
            <Badge>{project.badge}</Badge>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{project.title}</h1>
            <p className="mt-2 max-w-2xl text-lg text-muted">{project.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm">
              <p>
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <p>
                <span className="font-semibold">Client/Company:</span> {project.client}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <PlaceholderImage label={`${project.title} — screenshot 1`} />
            <PlaceholderImage label={`${project.title} — screenshot 2`} />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-bold">Problem</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-bold">Approach</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.approach}</p>
          </div>
          <div>
            <h2 className="font-bold">Impact</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.impact}</p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl rounded-3xl hand-border p-10">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-lilac px-6 py-16 text-center">
        <p className="text-sm text-muted">Want the full story?</p>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(`Re: ${project.title}`)}`}
          className="mt-2 inline-block text-lg font-bold underline decoration-2 underline-offset-4"
        >
          Let&rsquo;s walk through it together
        </a>
        <div className="mt-10">
          <Button to={`/work/${otherProject.slug}`} variant="secondary">
            <Icon name="arrowRight" className="h-4 w-4" />
            Next project: {otherProject.title}
          </Button>
        </div>
      </section>
    </article>
  )
}
