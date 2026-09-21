import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Logo({ className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Marilyn Hampton, home"
      className={`inline-flex items-center ${className}`}
    >
      <img src={logo} alt="Marilyn" className="h-9 w-auto sm:h-10" />
    </Link>
  )
}
