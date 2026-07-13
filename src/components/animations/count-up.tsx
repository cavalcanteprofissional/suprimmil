"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  format?: boolean
}

export function CountUp({ end, suffix = "", duration = 2, format = false }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)

      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  const display = format
    ? count.toLocaleString("pt-BR")
    : count

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
