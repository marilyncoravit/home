import discoverAfter from '../../assets/EmailAIDiscoverAfter.webp'
import discoverBefore from '../../assets/EmailAIDiscoverBefore.webp'
import Icon from '../ui/Icon'

export default function EmailAIDiagram() {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex-1 self-stretch rounded-3xl hand-border bg-peach/40 p-8 text-center">
          <p className="text-xl font-bold">Before</p>
          <p className="mt-2 text-sm text-muted">Low visibility</p>
          <img
            src={discoverBefore}
            alt="Email editor before the AI visibility update, with a plain sparkle icon easy to miss"
            className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover object-top"
          />
        </div>

        <Icon name="arrowRight" className="h-6 w-6 shrink-0 rotate-90 text-muted sm:rotate-0" />

        <div className="flex-1 self-stretch rounded-3xl hand-border bg-sky p-8 text-center">
          <p className="text-xl font-bold">After</p>
          <p className="mt-2 text-sm text-muted">Clear AI cue</p>
          <img
            src={discoverAfter}
            alt="Email editor after the AI visibility update, with a highlighted purple sparkle icon"
            className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover object-top"
          />
        </div>
      </div>

      <p className="mt-6 text-center text-sm leading-relaxed text-muted">
        A highlighted sparkle icon and a purple border around AI-generated sections made AI&rsquo;s
        presence unmistakable.
      </p>
    </div>
  )
}
