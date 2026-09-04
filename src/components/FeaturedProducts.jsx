import { getFeaturedProducts } from '../data/products'
import { useReveal, scrollToId } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const ref = useReveal()
  const featured = getFeaturedProducts().slice(0, 6)

  return (
    <section
      id="featured"
      className="bg-ivory px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="featured-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured"
          title={
            <span id="featured-heading">
              Something Sweet
              <br />
              Is Waiting
            </span>
          }
          subtitle="Sample creations for this demo — swap in your real cakes, cookies, and photos anytime."
          className="mb-10 sm:mb-14 lg:mb-16"
        />

        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={() => scrollToId('order')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
