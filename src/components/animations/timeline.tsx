"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TimelineItem {
  year: string
  text: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      )

      itemRefs.current.forEach((item, i) => {
        if (!item) return
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="mx-auto max-w-2xl overflow-hidden">
      <div className="relative">
        <div
          ref={lineRef}
          className="absolute left-[5px] top-1 bottom-1 w-0.5 origin-top bg-accent-500/60"
        />
        <div className="space-y-0">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el }}
              className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 shrink-0 rounded-full bg-accent-500 ring-4 ring-light-100" />
              </div>
              <div className="pt-0.5 min-w-0">
                <span className="text-sm font-bold text-accent-500">
                  {item.year}
                </span>
                <p className="mt-1 text-sm sm:text-base text-dark-100 break-words">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
