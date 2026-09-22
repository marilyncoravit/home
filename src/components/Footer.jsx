import Logo from './Logo'
import Icon from './ui/Icon'
import { site } from '../data/site'

const links = [
  { label: 'About', hash: '#about' },
  { label: 'Process', hash: '#process' },
  { label: 'Contact', hash: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-lilac">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-14 sm:flex-row">
        <Logo />
        <ul className="flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.hash}>
              <a href={link.hash} className="transition-colors hover:text-muted">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hand-border bg-paper transition-transform hover:-translate-y-0.5"
          >
            <Icon name="linkedin" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hand-border bg-paper transition-transform hover:-translate-y-0.5"
          >
            <Icon name="mail" className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-ink/10 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
