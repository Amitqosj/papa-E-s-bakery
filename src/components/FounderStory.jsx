import { useReveal } from '../hooks/useReveal'
import Button from './Button'

const STORY_IMAGE =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85'

export default function FounderStory() {
  const ref = useReveal()

  return (
    <section className="section-pad bg-ivory" aria-labelledby="story-heading">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20"
      >
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-rose">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="font-display text-[2.15rem] leading-[1.1] text-cocoa min-[375px]:text-4xl sm:text-5xl"
          >
            More Than A Bakery.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-cocoa-soft sm:text-base md:text-lg">
            <p>
              Papa E&apos;s Bakery is a creative Atlanta bakery built on passion for baking,
              thoughtful design, and desserts made for real celebrations.
            </p>
            <p>
              Led by a young baker with an entrepreneurial spirit, the brand grew from Instagram
              into a custom bakery known for craft, creativity, and treats that feel personal —
              proof that ambition and heart can build something beautiful.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-display text-2xl italic leading-snug text-cocoa sm:text-3xl">
              &ldquo;Every cake has a story.
              <br />
              We just help make it a little sweeter.&rdquo;
            </p>
          </blockquote>

          <div className="mt-10">
            <Button to="/contact" variant="secondary">
              Meet Papa E
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-lift sm:rounded-3xl">
            <div className="aspect-[4/5]">
              <img
                src={STORY_IMAGE}
                alt="Behind-the-scenes baking at Papa E's Bakery"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center font-script text-2xl text-rose/65">Atlanta · handmade</p>
        </div>
      </div>
    </section>
  )
}
