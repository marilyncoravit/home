import blColors from '../../assets/BLColors.webp'
import blDefaults from '../../assets/BLDefaults.webp'
import blEditor from '../../assets/BLEditor.webp'
import blEditorCase from '../../assets/BLEditorCase.mp4'
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

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold sm:text-3xl">Making brand setup effortless</h3>
          <h4 className="mt-4 text-lg font-bold">The opportunity</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Setting up a brand from scratch required customers to manually add their logos,
            colors, and fonts. We introduced a website scraping feature during onboarding to
            help new users quickly populate their Brand Library and establish their defaults.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          <div className="text-left">
            <h4 className="text-lg font-bold">The challenge</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Extracting brand information was only part of the problem. Making sure the
              scraper returned results that matched users&rsquo; expectations required close
              collaboration with product management, data science, and engineering.
            </p>
            <h4 className="mt-6 text-lg font-bold">My contribution</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              I worked closely with these teams to refine how extracted brand assets were
              presented and incorporated into the onboarding experience, with a focus on
              making the process intuitive and giving customers a clear starting point for
              their brand.
            </p>
          </div>
          <video
            src={blEditorCase}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Email editor experience walkthrough"
            className="aspect-[16/9] w-full rounded-2xl hand-border object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}
