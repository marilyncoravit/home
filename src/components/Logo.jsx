import { Link } from 'react-router-dom'
import headshot from '../assets/headshot.webp'

export default function Logo({ className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Marilyn Hampton, home"
      className={`inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ${className}`}
    >
      <img src={headshot} alt="" className="h-full w-full object-cover" width={44} height={44} />
    </Link>
  )
}
