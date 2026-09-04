import { Sparkles, Heart, MapPin, PartyPopper } from 'lucide-react'
import Instagram from './InstagramIcon'
import { trustItems } from '../data/content'

const iconMap = {
  instagram: Instagram,
  sparkles: Sparkles,
  heart: Heart,
  map: MapPin,
  party: PartyPopper,
}

export default function TrustBar() {
  return (
    <section className="border-y border-cocoa/8 bg-white/50" aria-label="Brand highlights">
      <div className="scrollbar-hide mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-4 min-[375px]:px-5 sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-3 sm:overflow-visible sm:px-8 sm:py-5 md:justify-between md:py-6">
        {trustItems.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.label} className="flex shrink-0 items-center gap-2 md:gap-3">
              {i > 0 && (
                <span
                  className="mr-1 hidden h-4 w-px bg-cocoa/15 sm:mr-2 md:mr-0 md:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-1.5 px-1.5 text-cocoa-soft sm:gap-2 sm:px-2">
                {Icon && (
                  <Icon size={14} strokeWidth={1.75} className="shrink-0 text-rose sm:h-[15px] sm:w-[15px]" />
                )}
                <span className="whitespace-nowrap text-[0.62rem] font-medium uppercase tracking-[0.1em] sm:text-[0.7rem] sm:tracking-[0.14em]">
                  {item.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
