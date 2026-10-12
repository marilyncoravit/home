import aboutPhoto from '../assets/about-photo.webp'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { career, mentorshipTestimonial, site, testimonials, tools } from '../data/site'

function Stars() {
  return (
    <div className="flex justify-center gap-1 text-ink">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Badge>About</Badge>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">A little about me</h2>
            <p className="mt-4 text-lg font-medium">{site.tagline}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{site.bio}</p>
            <Button href={site.linkedin} variant="secondary" className="mt-6" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </Button>
          </div>
          <div className="mx-auto w-40 shrink-0 sm:w-48">
            <div className="overflow-hidden rounded-full hand-border">
              <img src={aboutPhoto} alt={site.name} className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl hand-border bg-paper p-10 text-center sketch-shadow sm:p-14">
          <Stars />
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium leading-snug">
            &ldquo;{mentorshipTestimonial.quote}&rdquo;
          </p>
          <p className="mt-6 font-bold">{mentorshipTestimonial.name}</p>
          <p className="text-sm text-muted">{mentorshipTestimonial.title}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-2xl font-bold">Career highlights</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I&rsquo;ve been lucky to work with amazing teams across industries, each experience
              fueling my love for thoughtful, human-centered design. I&rsquo;m always excited by
              projects that challenge me to learn, adapt, and create something new.
            </p>
            <Button href={site.resumeHref} variant="secondary" className="mt-6" target="_blank" rel="noreferrer">
              View full resume
            </Button>
          </div>

          <ol className="relative space-y-10 border-l border-ink/20 pl-8">
            {career.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full hand-border bg-blush" />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.date}</p>
                <h4 className="mt-2 text-lg font-bold">{item.role}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl hand-border bg-paper p-6 text-center">
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-bold">{t.name}</p>
              <p className="text-xs text-muted">{t.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted">Tools I work with:</p>
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
