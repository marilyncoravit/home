import blColors from '../../assets/BLColors.webp'
import Icon from '../ui/Icon'

const chips = ['Logos', 'Colors', 'Fonts', 'Buttons', 'Social links']

export default function BrandLibraryDiagram() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full rounded-3xl hand-border bg-lilac-soft p-8 text-center">
        <p className="text-xl font-bold">Brand</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full hand-border bg-paper px-4 py-2 text-xs font-semibold"
            >
              {chip}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Store and manage brand assets</p>
        <img
          src={blColors}
          alt="Brand colors management screenshot"
          className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover object-top"
        />
      </div>

      <Icon name="arrowRight" className="h-5 w-5 rotate-90 text-muted" />

      <div className="w-full rounded-3xl hand-border bg-sky p-8 text-center">
        <p className="text-xl font-bold">Brand Defaults</p>
        <p className="mt-2 text-sm text-muted">Choose primary assets for templates</p>
      </div>

      <Icon name="arrowRight" className="h-5 w-5 rotate-90 text-muted" />

      <div className="text-center">
        <p className="text-xl font-bold">Editor experience</p>
        <p className="mt-2 text-sm text-muted">
          Automatically apply defaults, with the flexibility to swap assets
        </p>
      </div>
    </div>
  )
}
