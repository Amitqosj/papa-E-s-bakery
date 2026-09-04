import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { reviews } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const ref = useReveal()
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const review = reviews[index]

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <section
      id="reviews"
      className="section-pad scroll-mt-24 bg-ivory"
      aria-labelledby="reviews-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={<span id="reviews-heading">Sweet Words From Our Customers</span>}
          subtitle="Demo reviews for pitch — replace with real customer feedback anytime."
          className="mb-12 sm:mb-16"
        />

        <div
          className="relative rounded-2xl border border-cocoa/8 bg-white/75 px-5 py-12 text-center shadow-soft sm:rounded-3xl sm:px-12 sm:py-16"
          aria-live="polite"
          aria-atomic="true"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="mb-6 flex justify-center gap-1"
            aria-label={`${review.rating} out of 5 stars`}
          >
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="font-display text-xl leading-snug text-cocoa min-[375px]:text-2xl sm:text-3xl">
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
