import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Button from './ui/Button'
import Icon from './ui/Icon'

const links = [
  { label: 'Work', hash: '#work' },
  { label: 'Process', hash: '#process' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (hash) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      return
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || menuOpen ? 'bg-paper/90 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo onClick={() => setMenuOpen(false)} />
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <a href={link.hash} onClick={goTo(link.hash)} className="transition-colors hover:text-muted">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            onClick={goTo('#contact')}
            variant="secondary"
            className="hidden !px-5 !py-2 text-sm sm:inline-flex"
          >
            Let&rsquo;s talk
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full hand-border md:hidden"
          >
            <Icon name={menuOpen ? 'minus' : 'plus'} className="h-4 w-4" />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-ink/10 px-6 py-4 text-sm font-medium md:hidden">
          {links.map((link) => (
            <li key={link.hash}>
              <a href={link.hash} onClick={goTo(link.hash)} className="block py-2">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={goTo('#contact')} className="block py-2 font-semibold">
              Let&rsquo;s talk
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
