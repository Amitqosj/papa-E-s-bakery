import { useState } from 'react'
import { CATEGORIES, getProductsByCategory } from '../data/products'
import { useReveal, scrollToId } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'

export default function Menu() {
  const ref = useReveal()
  const [active, setActive] = useState('all')
  const items = getProductsByCategory(active)

  return (
    <section id="menu" className="section-pad scroll-mt-24 bg-cream" aria-labelledby="menu-heading">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Menu"
          title={<span id="menu-heading">Pick Your Favorite</span>}
          subtitle="Browse sample categories — swap names, photos, and starting prices anytime."
          className="mb-10 sm:mb-12"
        />

        <div
          className="scrollbar-hide -mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
          role="tablist"
          aria-label="Menu categories"
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? 'bg-cocoa text-cream shadow-soft'
                    : 'border border-cocoa/12 bg-white/40 text-cocoa-soft hover:border-rose/40 hover:text-rose'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-8" role="tabpanel">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              compact
              onOrder={() => scrollToId('order')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
