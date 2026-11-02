import { useEffect } from 'react'
import Icon from './Icon'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper hand-border"
      >
        <Icon name="plus" className="h-5 w-5 rotate-45" />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-full max-w-full rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}
