import { orderSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import Button from './Button'

export default function OrderProcess() {
  const ref = useReveal()

  return (
    <section className="section-pad bg-cream" aria-labelledby="process-heading">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Simple Steps"
          title={<span id="process-heading">How To Order</span>}
          subtitle="From Instagram discovery to a clear, organized request."
          className="mb-14 sm:mb-16"
        />

        <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
          {orderSteps.map((step) => (
            <li key={step.number} className="text-center md:text-left">
              <span className="font-display text-5xl text-rose/25 sm:text-6xl">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl text-cocoa sm:text-3xl">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-cocoa-soft sm:text-base md:mx-0">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-sm italic text-cocoa-soft/80">
          For custom orders, availability and pricing are confirmed with you directly.
        </p>

        <div className="mt-8 flex justify-center">
          <Button to="/order" className="w-full max-w-xs sm:w-auto">
            Start Your Order
          </Button>
        </div>
      </div>
    </section>
  )
}
