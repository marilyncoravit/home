import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { career, site, testimonials } from '../data/site'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Badge>About</Badge>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">More about me</h2>
            <p className="mt-4 text-lg font-medium">{site.tagline}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{site.bio}</p>
          </div>
          <div className="mx-auto w-40 shrink-0 sm:w-48">
            <div className="overflow-hidden rounded-full hand-border">
              <PlaceholderImage label="Headshot" aspect="aspect-square" className="rounded-full border-0" />
            </div>
          </div>
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
                <h4 className="mt-1 text-lg font-bold">{item.role}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}
