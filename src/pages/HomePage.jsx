import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import FeaturedProducts from '../components/FeaturedProducts'
import Occasions from '../components/Occasions'
import InstagramGallery from '../components/InstagramGallery'
import OrderProcess from '../components/OrderProcess'
import ContactCTA from '../components/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <Occasions />
      <InstagramGallery />
      <OrderProcess />
      <ContactCTA />
    </>
  )
}
