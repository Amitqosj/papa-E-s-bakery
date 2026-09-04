import { getFeaturedProducts } from '../data/products'
import { useReveal, scrollToId } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const ref = useReveal()
  const featured = getFeaturedProducts().slice(0, 6)

  return (
    <section id="featured" className="section-pad scroll-mt-24 bg-ivory" aria-labelledby="featured-heading">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured"
          title={<span id="featured-heading">Something Sweet Is Waiting</span>}
          subtitle="From celebration cakes to little treats — sample creations you can replace with your real menu."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onOrder={() => scrollToId('order')} />
          ))}
        </div>
      </div>
    </section>
  )
}
