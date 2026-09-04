import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Instagram from './InstagramIcon'
import { brand, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/8 bg-cream px-4 pb-28 pt-14 min-[375px]:px-5 sm:px-8 sm:pb-20 sm:pt-16 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.3fr_1fr_0.9fr]">
          <div className="min-w-0">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-script text-cream">
                Pe
              </span>
              <span className="font-display text-xl text-cocoa sm:text-2xl">Papa E&apos;s Bakery</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cocoa-soft">{brand.tagline}</p>
            <p className="mt-3 text-sm text-cocoa-soft">{brand.location}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-1 inline-block text-sm text-cocoa-soft transition-colors hover:text-rose"
            >
              {brand.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-rose">Explore</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cocoa-soft transition-colors hover:text-rose"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/order" className="text-sm text-cocoa-soft transition-colors hover:text-rose">
                  Order Now
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-rose">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cocoa-soft transition-colors hover:text-rose"
                >
                  <Instagram size={15} aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 text-sm text-cocoa-soft transition-colors hover:text-rose"
                >
                  <Mail size={15} aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-cocoa/8 pt-8 text-center text-xs text-cocoa-soft/70 sm:flex-row sm:text-left">
          <p>© 2026 Papa E&apos;s Bakery</p>
          <p>Made with love in Atlanta, GA</p>
        </div>
      </div>
    </footer>
  )
}
