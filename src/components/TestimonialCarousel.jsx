import { useEffect, useState } from 'react'
import Icon from './ui/Icon'

const AUTO_ROTATE_MS = 6000

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const goTo = (i) => setIndex((i + count) % count)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  const [reduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (paused || reduceMotion || count <= 1) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, reduceMotion, count])

  const active = testimonials[index]

  return (
    <div
      className="relative mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative rounded-3xl hand-border bg-paper p-10 text-center sketch-shadow sm:p-14">
        <div className="mb-4 flex justify-center gap-1 text-ink">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4" />
          ))}
        </div>
        <p className="mx-auto min-h-[5.5rem] max-w-2xl text-xl font-medium leading-snug sm:min-h-[4.5rem]">
          &ldquo;{active.quote}&rdquo;
        </p>
        <p className="mt-6 font-bold">{active.name}</p>
        <p className="text-sm text-muted">{active.title}</p>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hand-border bg-paper transition-transform hover:-translate-x-0.5 sm:flex"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hand-border bg-paper transition-transform hover:translate-x-0.5"
        >
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show testimonial from ${t.name}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full border border-ink/70 transition-all ${
              i === index ? 'w-6 bg-ink' : 'w-2.5 bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
