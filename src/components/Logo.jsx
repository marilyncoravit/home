import { Link } from 'react-router-dom'

export default function Logo({ className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Marilyn Hampton, home"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-soft font-script text-2xl hand-border ${className}`}
    >
      m
    </Link>
  )
}
