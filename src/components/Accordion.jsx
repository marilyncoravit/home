import { useState } from 'react'
import Icon from './ui/Icon'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-ink/15 border-t border-ink/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-semibold">{item.question}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full hand-border">
                <Icon name={isOpen ? 'minus' : 'plus'} className="h-3.5 w-3.5" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
