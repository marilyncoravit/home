import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Returns a goTo(hash) handler factory for section links (e.g. "#about").
 * Smooth-scrolls in place on the home page; navigates to the home page
 * and lets it scroll into place when called from any other route.
 */
export default function useSectionNav(onNavigate) {
  const location = useLocation()
  const navigate = useNavigate()

  return (hash) => (e) => {
    e.preventDefault()
    onNavigate?.()
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      return
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }
}
