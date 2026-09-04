import Instagram from './InstagramIcon'
import { brand, instagramGallery } from '../data/content'
import { useReveal, scrollToId } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import Button from './Button'

export default function InstagramGallery() {
  const ref = useReveal()

  return (
    <section
      id="instagram"
      className="bg-cream-dark/35 px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="instagram-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="From Instagram"
          title={<span id="instagram-heading">Follow The Sweet Life</span>}
          subtitle="See the work on Instagram — then order here with clear details, not endless DMs."
          className="mb-3 sm:mb-4"
        />
        <p className="mb-8 text-center font-medium text-rose sm:mb-12 lg:mb-14">
          {brand.instagramHandle}
        </p>

        <div className="columns-2 gap-2 min-[480px]:gap-3 sm:columns-3 sm:gap-4 lg:gap-5">
          {instagramGallery.map((item) => (
            <a
              key={item.id}
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-2 block break-inside-avoid overflow-hidden rounded-xl min-[480px]:mb-3 min-[480px]:rounded-2xl sm:mb-4"
              aria-label={item.alt}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  item.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 px-1 sm:mt-12 sm:flex-row sm:items-center">
          <Button href={brand.instagramUrl} ariaLabel="Follow on Instagram" className="w-full sm:w-auto">
            <Instagram size={16} aria-hidden="true" />
            Follow On Instagram
          </Button>
          <Button variant="secondary" onClick={() => scrollToId('order')} className="w-full sm:w-auto">
            Order From The Site
          </Button>
        </div>
      </div>
    </section>
  )
}
