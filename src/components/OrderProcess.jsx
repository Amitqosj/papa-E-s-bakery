import { orderSteps } from '../data/content'
import { useReveal, scrollToId } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import Button from './Button'

export default function OrderProcess() {
  const ref = useReveal()

  return (
    <section
      id="how-to-order"
      className="bg-cream px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Instagram → Order"
          title={<span id="process-heading">How To Order</span>}
          subtitle="This site turns Instagram discovery into a clear, organized ordering experience."
          className="mb-12 sm:mb-14 lg:mb-16"
        />

        <ol className="grid gap-8 sm:gap-10 md:grid-cols-3">
          {orderSteps.map((step) => (
            <li key={step.number} className="relative text-center md:text-left">
              <span className="font-display text-5xl text-rose/30 sm:text-6xl">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl text-cocoa sm:text-3xl">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-cocoa-soft sm:text-base md:mx-0">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center text-sm italic text-cocoa-soft/80 sm:mt-12">
          For custom orders, availability and pricing are confirmed with you directly.
        </p>

        <div className="mt-8 flex justify-center px-2">
          <Button className="w-full max-w-xs sm:w-auto" onClick={() => scrollToId('order')}>
            Start Your Order
          </Button>
        </div>
      </div>
    </section>
  )
}
