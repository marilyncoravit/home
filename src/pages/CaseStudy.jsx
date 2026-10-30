import { Link, Navigate, useParams } from 'react-router-dom'
import BrandLibraryDiagram from '../components/case-study/BrandLibraryDiagram'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import { getProject, projects } from '../data/projects'
import { site } from '../data/site'

const colorMap = {
  lilac: 'bg-lilac',
  peach: 'bg-peach/40',
  sky: 'bg-sky/40',
}

const statsColsMap = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
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
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:-translate-x-0.5"
          >
            <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            Back to work
          </Link>

          <div className="mt-8">
            <Badge>{project.badge}</Badge>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{project.title}</h1>
            <p className="mt-2 text-lg text-muted">{project.caseSubtitle ?? project.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm">
              <p>
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <p>
                <span className="font-semibold">Client/Company:</span> {project.client}
              </p>
            </div>

            {project.openingParagraphs && (
              <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.openingParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          {project.caseVideo ? (
            <video
              src={project.caseVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label={`${project.title} product walkthrough`}
              className="mt-10 w-full rounded-2xl"
            />
          ) : project.screenshots?.length === 1 ? (
            <img
              src={project.screenshots[0]}
              alt={`${project.title} screenshot`}
              className="mt-10 w-full rounded-2xl"
            />
          ) : project.screenshots?.length === 2 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[0, 1].map((i) => (
                <img
                  key={i}
                  src={project.screenshots[i]}
                  alt={`${project.title}, screenshot ${i + 1}`}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          ) : (
            <PlaceholderImage label={`${project.title} screenshot`} className="mt-10" />
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold">Problem</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Approach</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.approach}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Impact</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.impact}</p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl hand-border p-10">
          <div
            className={`grid gap-8 text-center ${statsColsMap[(project.caseStats ?? project.stats).length] ?? 'sm:grid-cols-3'}`}
          >
            {(project.caseStats ?? project.stats).map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {project.futureHeading && (
          <div className="mx-auto mt-14 max-w-6xl">
            <h2 className="text-2xl font-bold sm:text-3xl">{project.futureHeading}</h2>
            {project.futureSections.map((fsection) => (
              <div key={fsection.heading} className="mt-6 first:mt-4">
                <h3 className="text-lg font-bold">{fsection.heading}</h3>
                {fsection.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            {project.showDiagram && <BrandLibraryDiagram />}

            {project.takeawaysIntro && (
              <div className="mt-14">
                <p className="max-w-3xl text-lg font-medium leading-relaxed">
                  {project.takeawaysIntro}
                </p>
                <div className="mt-10 grid gap-10 md:grid-cols-3">
                  {project.takeaways.map((item) => (
                    <div key={item.heading}>
                      <h3 className="text-lg font-bold">{item.heading}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.beyondHeading && (
              <div className="mt-14 rounded-3xl hand-border bg-lilac-soft p-10">
                <h3 className="text-2xl font-bold sm:text-3xl">{project.beyondHeading}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                  {project.beyondCopy}
                </p>
              </div>
            )}
          </div>
        )}
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
