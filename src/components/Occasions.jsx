import { occasions } from '../data/content'
import { useReveal, scrollToId } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Occasions() {
  const ref = useReveal()

  return (
    <section
      id="occasions"
      className="bg-cream px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="occasions-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Occasions"
          title={<span id="occasions-heading">Made For Every Sweet Moment</span>}
          subtitle="Whatever you're celebrating, there's a creation waiting to make it sweeter."
          className="mb-10 sm:mb-14 lg:mb-16"
        />

        <div className="grid grid-cols-2 gap-2 min-[400px]:gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {occasions.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId('order')}
              className={`group relative overflow-hidden rounded-xl text-left shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose min-[400px]:rounded-2xl ${
                index === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
              aria-label={`Order for ${item.title}`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[16/10] md:aspect-square' : 'aspect-[4/5]'}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
                  <h3 className="font-display text-lg text-cream min-[400px]:text-xl sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
