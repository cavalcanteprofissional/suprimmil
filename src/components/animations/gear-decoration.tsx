"use client"

import { motion } from "framer-motion"

interface GearDecorationProps {
  className?: string
  size?: number
  speed?: number
  direction?: "cw" | "ccw"
  opacity?: number
}

export function GearDecoration({
  className = "",
  size = 120,
  speed = 20,
  direction = "cw",
  opacity = 0.08,
}: GearDecorationProps) {
  const teeth = 8
  const cx = size / 2
  const cy = size / 2
  const innerR = size * 0.32
  const outerR = size * 0.4
  const toothH = size * 0.1
  const holeR = size * 0.12

  const points: string[] = []
  const steps = teeth * 2
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2 - Math.PI / 2
    const isTooth = i % 2 === 0
    const r = isTooth ? outerR + toothH : outerR
    points.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`)
  }

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ rotate: direction === "cw" ? 360 : -360 }}
      transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      aria-hidden
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={points.join(" ")}
          fill="currentColor"
          opacity={opacity}
          className="text-accent-500"
        />
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="currentColor"
          opacity={opacity}
          className="text-accent-500"
        />
        <circle
          cx={cx}
          cy={cy}
          r={holeR}
          fill="transparent"
          className="text-accent-500"
          style={{ fill: "transparent" }}
        />
        <circle
          cx={cx}
          cy={cy}
          r={size * 0.04}
          fill="currentColor"
          opacity={opacity}
          className="text-accent-500"
        />
      </svg>
    </motion.div>
  )
}
