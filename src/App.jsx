import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import FeaturedProducts from './components/FeaturedProducts'
import Menu from './components/Menu'
import CustomCakeSection from './components/CustomCakeSection'
import Occasions from './components/Occasions'
import FounderStory from './components/FounderStory'
import InstagramGallery from './components/InstagramGallery'
import Reviews from './components/Reviews'
import OrderProcess from './components/OrderProcess'
import CustomOrderForm from './components/CustomOrderForm'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import MobileOrderBar from './components/MobileOrderBar'
import BackToTop from './components/BackToTop'
import { scrollToId } from './hooks/useReveal'

/**
 * Papa E's Bakery — Static SPA frontend.
 * Single-page scrolling experience. No backend required.
 */
export default function App() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const t = window.setTimeout(() => scrollToId(hash), 50)
      return () => window.clearTimeout(t)
    }
    return undefined
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rose focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="min-w-0 overflow-x-clip">
        <Hero />
        <TrustBar />
        <FeaturedProducts />
        <Menu />
        <CustomCakeSection />
        <Occasions />
        <FounderStory />
        <InstagramGallery />
        <Reviews />
        <OrderProcess />
        <CustomOrderForm />
        <ContactCTA />
      </main>
      <Footer />
      <MobileOrderBar />
      <BackToTop />
    </>
  )
}
