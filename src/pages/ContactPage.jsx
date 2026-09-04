import { Mail, MapPin, Phone } from 'lucide-react'
import Instagram from '../components/InstagramIcon'
import { brand } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Button from '../components/Button'

const CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80'

export default function ContactPage() {
  const ref = useReveal()

  return (
    <section className="section-pad bg-cream pt-28 sm:pt-32" aria-labelledby="contact-page-heading">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        {/* Left-aligned content */}
        <div className="min-w-0 text-left">
          <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-rose">
            Contact
          </p>
          <h1
            id="contact-page-heading"
            className="font-display text-[2.15rem] leading-[1.1] text-cocoa min-[375px]:text-4xl sm:text-5xl lg:text-[3.25rem]"
          >
            Let&apos;s Make Something Sweet.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cocoa-soft sm:text-base md:text-lg">
            Planning something special? Reach out — we&apos;d love to help create a dessert worth
            remembering.
          </p>

          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose">
                <MapPin size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cocoa-soft">
                  Location
                </p>
                <p className="mt-0.5 text-base text-cocoa">{brand.location}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose">
                <Mail size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cocoa-soft">
                  Email
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-0.5 inline-block text-base text-cocoa transition-colors hover:text-rose"
                >
                  {brand.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose">
                <Instagram size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cocoa-soft">
                  Instagram
                </p>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-block text-base text-cocoa transition-colors hover:text-rose"
                >
                  {brand.instagramHandle}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose">
                <Phone size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cocoa-soft">
                  Orders
                </p>
                <p className="mt-0.5 text-base text-cocoa">Custom orders via form or Instagram DM</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
            <Button to="/order" className="w-full min-[420px]:w-auto">
              Order Now
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${brand.email}`}
              className="w-full min-[420px]:w-auto"
            >
              <Mail size={15} aria-hidden="true" />
              Email Papa E&apos;s
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative overflow-hidden rounded-2xl shadow-lift sm:rounded-3xl">
          <div className="aspect-[4/5] lg:aspect-[5/6]">
            <img
              src={CONTACT_IMAGE}
              alt="Assorted sweet treats from Papa E's Bakery"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
