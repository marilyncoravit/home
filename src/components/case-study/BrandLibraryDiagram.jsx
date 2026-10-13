import blColors from '../../assets/BLColors.webp'
import blDashboard from '../../assets/BLDashboard.webp'
import blDefaults from '../../assets/BLDefaults.webp'
import blEditor from '../../assets/BLEditor.webp'
import Icon from '../ui/Icon'

export default function BrandLibraryDiagram() {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex-1 self-stretch rounded-3xl hand-border bg-lilac-soft p-8 text-center">
          <p className="text-xl font-bold">Brand</p>
          <p className="mt-2 text-sm text-muted">Store and manage brand assets</p>
          <img
            src={blColors}
            alt="Brand colors management screenshot"
            className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover object-top"
          />
        </div>

        <Icon name="arrowRight" className="h-6 w-6 shrink-0 rotate-90 text-muted sm:rotate-0" />

        <div className="flex-1 self-stretch rounded-3xl hand-border bg-sky p-8 text-center">
          <p className="text-xl font-bold">Defaults</p>
          <p className="mt-2 text-sm text-muted">Choose primary assets for templates</p>
          <img
            src={blDefaults}
            alt="Brand email defaults screenshot"
            className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover object-top"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Icon name="arrowRight" className="h-5 w-5 rotate-90 text-muted" />
      </div>

      <div className="mt-2 text-center">
        <p className="text-xl font-bold">Editor experience</p>
        <p className="mt-2 text-sm text-muted">
          Automatically apply defaults, with the flexibility to swap assets
        </p>
        <img
          src={blEditor}
          alt="Email editor experience screenshot"
          className="mx-auto mt-4 aspect-[16/9] w-full max-w-3xl rounded-2xl hand-border object-cover object-top"
        />
        <img
          src={blDashboard}
          alt="Klaviyo account dashboard screenshot"
          className="mx-auto mt-4 aspect-[16/9] w-full max-w-3xl rounded-2xl hand-border object-cover object-top"
        />
      </div>
    </div>
  )
}
