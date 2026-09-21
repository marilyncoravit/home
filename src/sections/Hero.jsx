import headshot from '../assets/headshot.webp'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-24">
      <Icon
        name="sparkle"
        className="pointer-events-none absolute right-10 top-8 h-8 w-8 text-ink/70 sm:right-24"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            {site.role} &middot; {site.location}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m {site.name.split(' ')[0]}. I design products people
            actually enjoy using.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{site.heroIntro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#work">
              View my work
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&rsquo;s connect
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] bg-mint-soft sm:-left-8 sm:-top-8" />
          <div className="relative rounded-[2rem] hand-border bg-paper p-4">
            <img
              src={headshot}
              alt={site.name}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-2 rounded-2xl hand-border bg-blush px-4 py-4 sketch-shadow sm:-right-8">
            <span className="font-script text-3xl leading-none">15+</span>
            <span className="max-w-[9rem] text-xs font-medium leading-snug">
              years of design experience
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
