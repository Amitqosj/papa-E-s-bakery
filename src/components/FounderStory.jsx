import { useReveal, scrollToId } from '../hooks/useReveal'
import Button from './Button'

const STORY_IMAGE =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85'

export default function FounderStory() {
  const ref = useReveal()

  return (
    <section
      id="story"
      className="bg-ivory px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="story-heading"
    >
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-rose">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="font-display text-[2rem] leading-[1.12] text-cocoa min-[375px]:text-4xl sm:text-5xl"
          >
            More Than A Bakery.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-cocoa-soft sm:text-lg">
            <p>
              Papa E&apos;s Bakery is a young, creative bakery brand based in Atlanta — built
              around a passion for baking, thoughtful design, and making beautiful desserts for
              people and their special moments.
            </p>
            <p>
              Led by a young baker with a genuine love for the craft, the brand grew from
              Instagram into a custom bakery known for creativity, care, and treats that feel
              personal.
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
            <Button variant="secondary" onClick={() => scrollToId('contact')}>
              Meet Papa E
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <div className="aspect-[4/5]">
              <img
                src={STORY_IMAGE}
                alt="DEMO: Behind-the-scenes baking moment — replace with founder photography"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center font-script text-2xl text-rose/70">Atlanta · handmade</p>
        </div>
      </div>
    </section>
  )
}
