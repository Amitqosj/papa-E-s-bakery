import Instagram from './InstagramIcon'
import { brand, instagramGallery } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import Button from './Button'

export default function InstagramGallery() {
  const ref = useReveal()

  return (
    <section className="section-pad bg-cream-dark/40" aria-labelledby="instagram-heading">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Instagram"
          title={<span id="instagram-heading">Follow The Sweet Life</span>}
          subtitle="More cakes. More cookies. More behind-the-scenes magic."
          className="mb-3"
        />
        <p className="mb-10 text-center font-medium tracking-wide text-rose sm:mb-14">
          {brand.instagramHandle}
        </p>

        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
          {instagramGallery.map((item) => (
            <a
              key={item.id}
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-2xl sm:mb-4"
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
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cocoa/0 opacity-0 transition-all duration-400 group-hover:bg-cocoa/45 group-hover:opacity-100">
                <Instagram size={22} className="text-cream" />
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cream">
                  View on Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href={brand.instagramUrl} className="w-full sm:w-auto" ariaLabel="Follow on Instagram">
            <Instagram size={16} aria-hidden="true" />
            Follow {brand.instagramHandle}
          </Button>
          <Button to="/order" variant="secondary" className="w-full sm:w-auto">
            Order From The Site
          </Button>
        </div>
      </div>
    </section>
  )
}
