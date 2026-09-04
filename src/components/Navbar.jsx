import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Instagram from './InstagramIcon'
import { brand, navLinks } from '../data/content'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 xl:text-[0.78rem] ${
      isActive ? 'text-rose' : 'text-cocoa-soft hover:text-rose'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== '/'
          ? 'border-b border-cocoa/10 bg-cream/90 py-2 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 min-[375px]:px-5 sm:px-8">
        <NavLink
          to="/"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="Papa E's Bakery home"
          end
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-script text-cream shadow-soft transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            Pe
          </span>
          <span className="truncate font-display text-lg tracking-wide text-cocoa sm:text-xl">
            Papa E&apos;s
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-rose transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
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
            to="/order"
            className="!hidden !rounded-xl !px-5 !py-2.5 !text-[0.7rem] !tracking-[0.12em] sm:!inline-flex"
            ariaLabel="Order now"
          >
            Order Now
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-cream/80 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`fixed inset-0 z-40 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-cocoa/25 transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-lift transition-transform duration-400 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-cocoa/8 px-5 py-4">
            <span className="font-display text-xl text-cocoa">Papa E&apos;s</span>
            <button
              type="button"
              className="rounded-full p-2 text-cocoa"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col overflow-y-auto px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-cocoa/8 py-4 font-display text-2xl transition-colors ${
                    isActive ? 'text-rose' : 'text-cocoa'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="space-y-3 border-t border-cocoa/8 px-5 py-6">
            <Button to="/order" fullWidth className="!rounded-xl" onClick={() => setOpen(false)}>
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
          </div>
        </div>
      </div>
    </header>
  )
}
