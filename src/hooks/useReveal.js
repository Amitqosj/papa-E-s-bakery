import { useEffect, useRef, useState } from 'react'

/** Subtle scroll-reveal for premium section entrances */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/** Smooth scroll to section, accounting for sticky navbar */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const navOffset = 88
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })

  if (history.replaceState) {
    history.replaceState(null, '', `#${id}`)
  }
}

/**
 * Track which section is in view for active nav highlighting.
 * @param {string[]} sectionIds
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = sectionIds[0]
        let bestRatio = -1
        sectionIds.forEach((id) => {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestRatio > 0) setActiveId(bestId)
        else if (window.scrollY < 120) setActiveId('home')
      },
      {
        root: null,
        // Bias toward the middle of the viewport under the sticky nav
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
