export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ink/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ink ${className}`}
    >
      {children}
    </span>
  )
}
