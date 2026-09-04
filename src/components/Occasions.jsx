import { occasions } from '../data/content'
import { useNavigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Occasions() {
  const ref = useReveal()
  const navigate = useNavigate()

  return (
    <section className="section-pad bg-cream" aria-labelledby="occasions-heading">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Occasions"
          title={<span id="occasions-heading">Made For Every Sweet Moment</span>}
          subtitle="Whatever you're celebrating, there's a creation waiting to make it sweeter."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {occasions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate('/order')}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
              aria-label={`Order for ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/75 via-cocoa/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <h3 className="font-display text-lg text-cream sm:text-xl">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
