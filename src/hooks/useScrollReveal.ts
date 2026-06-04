import { type RefObject, useEffect } from "react"

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(
  ref: RefObject<Element | null>,
  options: ScrollRevealOptions = {}
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
          observer.unobserve(el)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.rootMargin])
}
