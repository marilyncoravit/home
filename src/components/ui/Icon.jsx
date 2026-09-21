const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.35-4.35" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-2 0-.5-.2-1-.5-1.3-.3-.35-.5-.8-.5-1.3 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-4.4-4-7.4-9-7.4Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </>
  ),
  phone: (
    <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .5 1 1v3.4c0 .6-.4 1-1 1C10.6 20.5 3.5 13.4 3.5 4.5c0-.6.4-1 1-1H8c.5 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2 2Z" />
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <circle cx="8" cy="8.3" r="1.1" fill="currentColor" stroke="none" />
      <path d="M8 11v6" />
      <path d="M12 17v-3.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5V17" />
      <path d="M12 11v.6" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  star: (
    <path d="M12 3.5l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.5l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.5Z" />
  ),
  sparkle: (
    <path d="M12 2c.6 3.6 1.3 6 2.3 7.1 1.1 1.2 3.4 1.9 6.7 2.4-3.3.5-5.6 1.2-6.7 2.4-1 1.1-1.7 3.5-2.3 7.1-.6-3.6-1.3-6-2.3-7.1-1.1-1.2-3.4-1.9-6.7-2.4 3.3-.5 5.6-1.2 6.7-2.4C10.7 8 11.4 5.6 12 2Z" />
  ),
  hash: <path d="M9 3.5 7 20.5M17 3.5l-2 17M4 9h16M3.5 15h16" />,
  check: <path d="M5 13l4 4L19 7" />,
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.6 }) {
  const path = paths[name]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
