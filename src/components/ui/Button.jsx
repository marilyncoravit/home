import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

const variants = {
  primary: `${base} bg-ink text-paper sketch-shadow hover:shadow-none`,
  secondary: `${base} bg-paper text-ink hand-border sketch-shadow hover:shadow-none`,
  ghost: `${base} bg-transparent text-ink border border-ink/40 hover:border-ink`,
}

export default function Button({
  as,
  href,
  to,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const cls = `${variants[variant] ?? variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  const Comp = as || 'button'
  return (
    <Comp className={cls} {...props}>
      {children}
    </Comp>
  )
}
