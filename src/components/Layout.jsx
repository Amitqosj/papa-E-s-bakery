import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileOrderBar from './MobileOrderBar'
import BackToTop from './BackToTop'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rose focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="min-w-0 overflow-x-clip pt-0">
        <Outlet />
      </main>
      <Footer />
      <MobileOrderBar />
      <BackToTop />
    </>
  )
}
