import { useEffect, useRef, useState } from 'react'
import Icon from './ui/Icon'

const colorMap = {
  mint: 'bg-mint-soft',
  blush: 'bg-blush/60',
  peach: 'bg-peach/60',
  butter: 'bg-butter/60',
  sky: 'bg-sky/60',
}

export default function ProcessCarousel({ steps }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateBounds = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }

  useEffect(() => {
    updateBounds()
    const el = trackRef.current
    if (!el) return undefined
    el.addEventListener('scroll', updateBounds)
    window.addEventListener('resize', updateBounds)
    return () => {
      el.removeEventListener('scroll', updateBounds)
      window.removeEventListener('resize', updateBounds)
    }
  }, [])

  const scrollByCard = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = (card?.offsetWidth ?? 320) + 24
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div className="relative mt-14">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step) => (
          <div
            key={step.title}
            data-card
            className={`flex w-[280px] shrink-0 snap-start flex-col rounded-2xl hand-border p-6 sm:w-[320px] ${colorMap[step.color]}`}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full hand-border bg-paper">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-muted">{step.number}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous process step"
          className="flex h-10 w-10 items-center justify-center rounded-full hand-border bg-paper transition-opacity disabled:opacity-30"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next process step"
          className="flex h-10 w-10 items-center justify-center rounded-full hand-border bg-paper transition-opacity disabled:opacity-30"
        >
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
