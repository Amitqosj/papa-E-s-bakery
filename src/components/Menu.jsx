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
    <section
      id="menu"
      className="bg-cream-dark/40 px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="menu-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Menu"
          title={<span id="menu-heading">Pick Your Favorite</span>}
          subtitle="Demo menu only — no live prices. Ready to replace with your real products and photos."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div
          className="scrollbar-hide -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-12 sm:justify-center sm:px-0"
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
                className={`min-h-11 shrink-0 rounded-full px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 sm:px-5 sm:text-xs ${
                  isActive
                    ? 'bg-cocoa text-cream shadow-soft'
                    : 'border border-cocoa/10 bg-white/50 text-cocoa-soft hover:border-rose/40 hover:text-rose'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        <div
          className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          role="tabpanel"
        >
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
