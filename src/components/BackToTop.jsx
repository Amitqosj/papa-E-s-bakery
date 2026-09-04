import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/10 bg-cream text-cocoa shadow-soft transition-all hover:-translate-y-0.5 hover:border-rose hover:text-rose sm:bottom-8 sm:right-8 lg:bottom-8"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
