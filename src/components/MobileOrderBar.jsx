import { useEffect, useState } from 'react'
import { scrollToId } from '../hooks/useReveal'
import Button from './Button'

export default function MobileOrderBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('home')
      const order = document.getElementById('order')
      if (!hero) return

      const pastHero = window.scrollY > hero.offsetHeight * 0.45
      const orderRect = order?.getBoundingClientRect()
      const nearOrder =
        orderRect && orderRect.top < window.innerHeight && orderRect.bottom > 80

      setVisible(pastHero && !nearOrder)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-cocoa/10 bg-ivory/95 px-3 pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <Button
        fullWidth
        onClick={() => scrollToId('order')}
        className={!visible ? 'pointer-events-none' : ''}
        ariaLabel="Order now"
      >
        Order Now
      </Button>
    </div>
  )
}
