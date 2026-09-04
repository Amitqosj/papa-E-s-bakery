import { Mail, MapPin } from 'lucide-react'
import Instagram from './InstagramIcon'
import { brand } from '../data/content'
import { useReveal, scrollToId } from '../hooks/useReveal'
import Button from './Button'

export default function ContactCTA() {
  const ref = useReveal()

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cocoa px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(196,120,106,0.35), transparent), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(168,184,154,0.25), transparent)',
        }}
      />

      <div ref={ref} className="reveal relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-soft">
          Get In Touch
        </p>
        <h2
          id="contact-heading"
          className="font-display text-[2rem] leading-[1.12] text-cream min-[375px]:text-4xl sm:text-5xl md:text-[3.5rem]"
        >
          Let&apos;s Make Something Sweet.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/75 sm:mt-5 sm:text-base md:text-lg">
          Planning a birthday, celebration or simply craving something special?
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
          <Button onClick={() => scrollToId('order')} className="w-full sm:w-auto">
            Order Now
          </Button>
          <Button
            variant="ghost"
            href={`mailto:${brand.email}`}
            className="w-full !bg-cream/10 !text-cream hover:!bg-cream/20 sm:w-auto"
          >
            <Mail size={15} aria-hidden="true" />
            Email Papa E&apos;s
          </Button>
          <Button
            variant="ghost"
            href={brand.instagramUrl}
            className="w-full !bg-cream/10 !text-cream hover:!bg-cream/20 sm:w-auto"
          >
            <Instagram size={15} aria-hidden="true" />
            Instagram
          </Button>
        </div>

        <ul className="mt-12 flex flex-col items-center gap-3 text-sm text-cream/70 sm:flex-row sm:justify-center sm:gap-8">
          <li className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" aria-hidden="true" />
            {brand.location}
          </li>
          <li>
            <a href={`mailto:${brand.email}`} className="transition-colors hover:text-cream">
              {brand.email}
            </a>
          </li>
          <li>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              {brand.instagramHandle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
