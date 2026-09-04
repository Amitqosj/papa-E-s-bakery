import { Check } from 'lucide-react'
import { useReveal, scrollToId } from '../hooks/useReveal'
import Button from './Button'

const features = [
  'Custom Designs',
  'Personalized Themes',
  'Celebration Cakes',
  'Made For Your Moment',
]

const CUSTOM_IMAGE =
  'https://images.unsplash.com/photo-1535254973040-607b474d7f5a?auto=format&fit=crop&w=1200&q=85'

export default function CustomCakeSection() {
  const ref = useReveal()

  return (
    <section
      id="custom-cakes"
      className="bg-ivory px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="custom-heading"
    >
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <div className="relative overflow-hidden rounded-[1.25rem] shadow-lift sm:rounded-[2rem]">
          <div className="aspect-[4/5] max-h-[70vh] sm:max-h-none">
            <img
              src={CUSTOM_IMAGE}
              alt="Custom decorated celebration cake from Papa E's Bakery"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-sage-dark sm:mb-4 sm:text-[0.7rem]">
            Custom Cakes
          </p>
          <h2
            id="custom-heading"
            className="font-display text-[2rem] leading-[1.12] text-cocoa min-[375px]:text-4xl sm:text-5xl md:text-[3.5rem]"
          >
            Dream It.
            <br />
            <span className="italic text-rose">We&apos;ll Bake It.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cocoa-soft sm:mt-6 sm:text-base md:text-lg">
            Have something special in mind? Tell us your colors, theme, flavor and occasion —
            and let&apos;s turn your idea into something delicious.
          </p>

          <ul className="mt-6 space-y-3 sm:mt-8" aria-label="Custom cake features">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3 text-cocoa">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/40 text-sage-dark">
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10">
            <Button className="w-full sm:w-auto" onClick={() => scrollToId('order')}>
              Start a Custom Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
