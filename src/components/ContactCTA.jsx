import { Mail } from 'lucide-react'
import { brand } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Button from './Button'

/** Home page CTA band — routes to Contact / Order pages */
export default function ContactCTA() {
  const ref = useReveal()

  return (
    <section className="relative overflow-hidden bg-cocoa section-pad" aria-labelledby="home-contact-cta">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 85% 15%, rgba(196,120,106,0.4), transparent), radial-gradient(ellipse 40% 40% at 10% 85%, rgba(168,184,154,0.22), transparent)',
        }}
      />

      <div ref={ref} className="reveal relative mx-auto max-w-7xl">
        <div className="max-w-xl text-left">
          <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold-soft">
            Get In Touch
          </p>
          <h2
            id="home-contact-cta"
            className="font-display text-[2.15rem] leading-[1.1] text-cream min-[375px]:text-4xl sm:text-5xl"
          >
            Let&apos;s Make Something Sweet.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/75 sm:text-base md:text-lg">
            Planning something special? Let&apos;s create a dessert worth remembering.
          </p>

          <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
            <Button to="/order" className="w-full min-[420px]:w-auto">
              Order Now
            </Button>
            <Button
              to="/contact"
              variant="ghost"
              className="w-full !bg-cream/10 !text-cream hover:!bg-cream/20 min-[420px]:w-auto"
            >
              <Mail size={15} aria-hidden="true" />
              Contact Papa E&apos;s
            </Button>
          </div>

          <p className="mt-8 text-sm text-cream/60">
            {brand.location} · {brand.email}
          </p>
        </div>
      </div>
    </section>
  )
}
