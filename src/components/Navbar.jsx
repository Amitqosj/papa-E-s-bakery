import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Instagram from './InstagramIcon'
import { brand, navLinks } from '../data/content'
import { scrollToId } from '../hooks/useReveal'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace('#', '')
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cocoa/8 bg-ivory/90 py-1.5 shadow-soft backdrop-blur-md sm:py-2'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 min-[375px]:px-5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="group flex min-w-0 items-center gap-2 sm:gap-2.5"
          aria-label="Papa E's Bakery home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-script text-cream shadow-soft transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
            Pe
          </span>
          <span className="truncate font-display text-lg tracking-wide text-cocoa sm:text-2xl">
            Papa E&apos;s
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cocoa-soft transition-colors hover:text-rose xl:text-[0.8rem] xl:tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-cocoa-soft transition-colors hover:text-rose md:inline-flex"
            aria-label="Follow Papa E's on Instagram"
          >
            <Instagram size={18} strokeWidth={1.75} />
          </a>
          <Button
            className="!hidden !px-4 !py-2 text-xs sm:!inline-flex sm:!px-5 sm:!py-2.5"
            onClick={() => scrollToId('order')}
            ariaLabel="Order now"
          >
            Order Now
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full p-2 text-cocoa lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-40 bg-ivory/98 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 pb-10 pt-24 sm:px-8">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="border-b border-cocoa/8 py-4 font-display text-2xl text-cocoa min-[375px]:text-3xl"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-3 pt-8">
            <Button
              fullWidth
              onClick={() => {
                setOpen(false)
                scrollToId('order')
              }}
            >
              Order Now
            </Button>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-sm text-cocoa-soft"
            >
              <Instagram size={16} />
              {brand.instagramHandle}
            </a>
            <p className="text-center text-sm text-cocoa-soft">{brand.location}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
