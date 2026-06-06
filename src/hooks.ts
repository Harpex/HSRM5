import { useEffect, useRef, useState } from 'react'

/**
 * Bir elemana referans verir; viewport'a girince `is-visible` sınıfını ekler.
 * Brif: "Animasyonlar hissedilmeli fakat fark edilmemeli."
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Görünür olduğunda 0'dan hedefe yumuşakça sayan sayaç.
 */
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    let frame = 0
    let start: number | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()

        const step = (timestamp: number) => {
          if (start === null) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          // easeOutExpo — sona doğru yumuşayan hareket
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          setValue(Math.round(eased * target))
          if (progress < 1) frame = requestAnimationFrame(step)
        }
        frame = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return { ref, value }
}
