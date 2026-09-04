import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { reviews } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const ref = useReveal()
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const review = reviews[index]

  return (
    <section
      id="reviews"
      className="bg-ivory px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="reviews-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={<span id="reviews-heading">Sweet Words From Our Customers</span>}
          subtitle="DEMO reviews for pitch presentation — replace with real customer feedback."
          className="mb-12 sm:mb-16"
        />

        <div
          className="relative rounded-[1.25rem] border border-cocoa/8 bg-white/70 px-4 py-10 text-center shadow-soft min-[400px]:px-6 sm:rounded-[2rem] sm:px-12 sm:py-16"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="mb-6 flex justify-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="font-display text-xl leading-snug text-cocoa min-[375px]:text-2xl sm:text-3xl md:text-[2.15rem]">
            &ldquo;{review.text}&rdquo;
          </blockquote>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-rose">
            {review.name}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-cocoa/10 p-2.5 text-cocoa transition-colors hover:border-rose hover:text-rose"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Review slides">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-rose' : 'w-2 bg-cocoa/20 hover:bg-cocoa/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-cocoa/10 p-2.5 text-cocoa transition-colors hover:border-rose hover:text-rose"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
