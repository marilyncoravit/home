/**
 * Stand-in for a real screenshot/photo asset. Clearly labeled so it's obvious
 * what to swap out once real project imagery is available.
 */
export default function PlaceholderImage({ label, className = '', aspect = 'aspect-[4/3]' }) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/30 bg-[repeating-linear-gradient(135deg,rgba(28,28,30,0.04)_0,rgba(28,28,30,0.04)_10px,transparent_10px,transparent_20px)] p-6 text-center ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        Image placeholder
      </span>
      {label ? <span className="text-sm text-muted">{label}</span> : null}
    </div>
  )
}
