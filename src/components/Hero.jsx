import { brand } from '../data/content'
import { scrollToId } from '../hooks/useReveal'
import Button from './Button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 40%, rgba(196,120,106,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(168,184,154,0.2), transparent 50%)',
        }}
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 pb-14 pt-24 xs:px-5 sm:gap-10 sm:px-8 sm:pb-16 sm:pt-28 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-28">
        {/* Copy — brand-first, already-premium tone */}
        <div className="reveal is-visible order-2 w-full min-w-0 lg:order-1">
          <p className="mb-3 font-display text-[1.65rem] leading-none tracking-[0.04em] text-cocoa sm:mb-4 sm:text-3xl md:text-4xl">
            PAPA E&apos;S BAKERY
          </p>

          <h1 className="font-display text-[2.15rem] leading-[1.1] text-cocoa min-[375px]:text-[2.45rem] sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
            Sweet Moments,
            <br />
            <span className="italic text-rose">Beautifully Baked.</span>
          </h1>

          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-cocoa-soft sm:mt-5 sm:text-lg">
            Handcrafted cakes, cookies &amp; custom creations from Atlanta.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
            <Button
              className="w-full min-[400px]:w-auto"
              onClick={() => scrollToId('order')}
            >
              Order Something Sweet
            </Button>
            <Button
              variant="secondary"
              className="w-full min-[400px]:w-auto"
              onClick={() => scrollToId('menu')}
            >
              Explore Menu
            </Button>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-2 text-xs text-cocoa-soft/80 sm:mt-8 sm:text-sm">
            <span className="inline-block h-px w-6 shrink-0 bg-gold sm:w-8" aria-hidden="true" />
            <span>
              From Instagram to your celebration · {brand.followersLabel}
            </span>
          </p>
        </div>

        {/* Photography — dominant visual */}
        <div className="relative order-1 w-full min-w-0 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] max-h-[58vh] w-full overflow-hidden rounded-[1.25rem] shadow-lift sm:max-h-none sm:rounded-[1.75rem] lg:aspect-[4/5] lg:max-h-[78vh]">
            <img
              src={HERO_IMAGE}
              alt="Handcrafted celebration cake from Papa E's Bakery"
              className="h-full w-full object-cover"
              fetchPriority="high"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/20 via-transparent to-transparent" />
          </div>
          <p className="pointer-events-none absolute -bottom-1 left-1 rotate-[-6deg] font-script text-2xl text-rose/75 min-[375px]:left-2 sm:-bottom-2 sm:text-3xl md:text-4xl">
            baked with love
          </p>
        </div>
      </div>
    </section>
  )
}
