import { useState } from 'react'
import panelImg from '../../assets/ImageEditingPanel.webp'
import ratiosImg from '../../assets/ImageEditingRatios.webp'
import resultImg from '../../assets/ImageEditingResult.webp'
import Lightbox from '../ui/Lightbox'

const steps = [
  {
    number: '1',
    title: 'Start from the image panel',
    caption: 'Crop lives right alongside Replace and Remove, where customers already look.',
    image: panelImg,
    alt: 'Image panel in the Klaviyo editor showing Crop, Replace, and Remove actions',
  },
  {
    number: '2',
    title: 'Choose a ratio or go custom',
    caption: 'Common ratios cover the fast path, and custom width and height stay available.',
    image: ratiosImg,
    alt: 'Crop tool with an aspect ratio menu open, showing Custom, 1:1, 16:9, and 4:3 options',
  },
  {
    number: '3',
    title: 'See the result in context',
    caption: 'A live preview shows exactly how the crop will appear in the email.',
    image: resultImg,
    alt: 'A square-cropped image previewed inside the email template',
  },
]

export default function ImageEditingDiagram() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      {steps.map((step) => (
        <div key={step.number} className="rounded-3xl hand-border bg-blush/40 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Step {step.number}
          </p>
          <p className="mt-1 text-lg font-bold">{step.title}</p>
          <button
            type="button"
            onClick={() => setLightboxImage({ src: step.image, alt: step.alt })}
            className="block w-full cursor-zoom-in transition-opacity hover:opacity-90"
          >
            <img
              src={step.image}
              alt={step.alt}
              className="mt-4 aspect-[16/10] w-full rounded-2xl object-cover object-top"
            />
          </button>
          <p className="mt-3 text-sm leading-relaxed text-muted">{step.caption}</p>
        </div>
      ))}

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}
