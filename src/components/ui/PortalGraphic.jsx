export default function PortalGraphic({ className = '' }) {
  return (
    <svg viewBox="0 0 280 200" className={className} aria-hidden="true">
      <rect x="6" y="6" width="268" height="188" rx="20" className="fill-paper stroke-ink/15" strokeWidth="1.5" />
      <path d="M6 26a20 20 0 0 1 20-20h228a20 20 0 0 1 20 20v16H6V26Z" className="fill-lilac-soft stroke-ink/15" strokeWidth="1.5" />
      <circle cx="26" cy="24" r="4" className="fill-ink/15" />
      <circle cx="40" cy="24" r="4" className="fill-ink/15" />
      <circle cx="54" cy="24" r="4" className="fill-ink/15" />

      <rect x="6" y="42" width="56" height="152" className="fill-sky/50" />
      <rect x="20" y="62" width="28" height="6" rx="3" className="fill-ink/20" />
      <rect x="20" y="82" width="28" height="6" rx="3" className="fill-ink/10" />
      <rect x="20" y="102" width="20" height="6" rx="3" className="fill-ink/10" />

      <rect x="78" y="60" width="150" height="34" rx="14" className="fill-paper stroke-ink/15" strokeWidth="1.5" />
      <rect x="92" y="70" width="78" height="6" rx="3" className="fill-ink/20" />
      <rect x="92" y="82" width="54" height="6" rx="3" className="fill-ink/10" />

      <rect x="96" y="106" width="150" height="34" rx="14" className="fill-sky/70 stroke-ink/15" strokeWidth="1.5" />
      <rect x="110" y="116" width="70" height="6" rx="3" className="fill-ink/25" />
      <rect x="110" y="128" width="46" height="6" rx="3" className="fill-ink/15" />

      <circle cx="90" cy="160" r="3" className="fill-ink/25" />
      <circle cx="102" cy="160" r="3" className="fill-ink/15" />
      <circle cx="114" cy="160" r="3" className="fill-ink/10" />
    </svg>
  )
}
