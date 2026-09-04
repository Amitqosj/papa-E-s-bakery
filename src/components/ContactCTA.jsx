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
      className="relative scroll-mt-24 overflow-hidden bg-cocoa section-pad"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 85% 15%, rgba(196,120,106,0.4), transparent), radial-gradient(ellipse 40% 40% at 10% 85%, rgba(168,184,154,0.22), transparent)',
        }}
      />

      <div ref={ref} className="reveal relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold-soft">
          Get In Touch
        </p>
        <h2
          id="contact-heading"
          className="font-display text-[2.15rem] leading-[1.1] text-cream min-[375px]:text-4xl sm:text-5xl lg:text-[3.4rem]"
        >
          Let&apos;s Make Something Sweet.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-cream/75 sm:text-base md:text-lg">
          Planning something special? Let&apos;s create a dessert worth remembering.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button onClick={() => scrollToId('order')} className="w-full sm:w-auto">
            Order Now
          </Button>
          <Button
            variant="ghost"
            href={`mailto:${brand.email}`}
            className="w-full !bg-cream/10 !text-cream hover:!bg-cream/20 sm:w-auto"
          >
            <Mail size={15} aria-hidden="true" />
            Contact Papa E&apos;s
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
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              <Instagram size={14} />
              {brand.instagramHandle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
