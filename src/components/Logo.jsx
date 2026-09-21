import { Link } from 'react-router-dom'

const logoSrc = `${import.meta.env.BASE_URL}favicon.png`

export default function Logo({ className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Marilyn Hampton, home"
      className={`inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ${className}`}
    >
      <img src={logoSrc} alt="" className="h-full w-full object-cover" width={44} height={44} />
    </Link>
  )
}
