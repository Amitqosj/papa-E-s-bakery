import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

export default function MobileOrderBar() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()
  const onOrderPage = pathname === '/order'

  useEffect(() => {
    if (onOrderPage) {
      setVisible(false)
      return undefined
    }

    const onScroll = () => {
      setVisible(window.scrollY > 320)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onOrderPage])

  if (onOrderPage) return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-cocoa/10 bg-ivory/95 px-3 pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <Button
        to="/order"
        fullWidth
        className={!visible ? 'pointer-events-none' : ''}
        ariaLabel="Order now"
      >
        Order Now
      </Button>
    </div>
  )
}
