'use client'

import { useState, useEffect } from 'react'

const SECTIONS = ['hero', 'proof', 'products', 'calculator', 'occasions', 'attack', 'faq', 'order', 'retailer', 'findus']

export function useScrollSpy() {
  const [activeId, setActiveId] = useState<string>('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        {
          threshold: 0.3,
          rootMargin: '-100px 0px 0px 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return activeId
}
