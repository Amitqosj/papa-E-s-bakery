import { brand } from '../data/content'
import { scrollToId } from '../hooks/useReveal'
import Button from './Button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85'

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-cream" aria-label="Hero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 12% 35%, rgba(196,120,106,0.14), transparent 55%), radial-gradient(ellipse 45% 40% at 90% 15%, rgba(168,184,154,0.16), transparent 50%)',
        }}
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 pb-16 pt-28 min-[375px]:px-5 sm:gap-12 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-2 lg:gap-16">
        <div className="reveal is-visible order-2 w-full min-w-0 lg:order-1">
          <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-rose sm:mb-4 sm:text-[0.72rem]">
            Papa E&apos;s Bakery · Atlanta, GA
          </p>

          <h1 className="font-display text-[2.35rem] leading-[1.08] text-cocoa min-[375px]:text-[2.65rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]">
            Sweet Moments,
            <br />
            <span className="italic text-rose">Beautifully Baked.</span>
          </h1>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-cocoa-soft sm:mt-6 sm:text-lg">
            Handcrafted cakes and sweet creations made for life&apos;s most memorable moments.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Button className="w-full !rounded-xl min-[420px]:w-auto" onClick={() => scrollToId('order')}>
              Order Something Sweet
            </Button>
            <Button
              variant="secondary"
              className="w-full !rounded-xl min-[420px]:w-auto"
              onClick={() => scrollToId('menu')}
            >
              Explore the Menu
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-3 text-xs tracking-wide text-cocoa-soft/75 sm:text-sm">
            <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
            {brand.followersLabel}
          </p>
        </div>

        <div className="relative order-1 w-full min-w-0 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] max-h-[56vh] w-full overflow-hidden rounded-2xl shadow-lift sm:max-h-none sm:rounded-3xl lg:aspect-[4/5] lg:max-h-[78vh]">
            <img
              src={HERO_IMAGE}
              alt="Handcrafted celebration cake from Papa E's Bakery"
              className="h-full w-full object-cover"
              fetchPriority="high"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/25 via-transparent to-transparent" />
          </div>
          <p className="pointer-events-none absolute -bottom-1 left-2 rotate-[-6deg] font-script text-2xl text-rose/70 sm:left-3 sm:text-3xl md:text-4xl">
            baked with love
          </p>
        </div>
      </div>
    </section>
  )
}
