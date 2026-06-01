'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

/* ───────── Data ───────── */

interface SizeInfo {
  size: string
  sizeNum: number
  products: { nameHi: string; nameEn: string }[]
}

const sizes: SizeInfo[] = [
  {
    size: '4"',
    sizeNum: 4,
    products: [
      { nameHi: 'चटनी दोना', nameEn: 'Chutney Dona' },
    ],
  },
  {
    size: '5.5"',
    sizeNum: 5.5,
    products: [
      { nameHi: 'बताशा दोना', nameEn: 'Batasha Dona' },
    ],
  },
  {
    size: '6"',
    sizeNum: 6,
    products: [
      { nameHi: 'समोसा दोना', nameEn: 'Samosa Dona' },
      { nameHi: 'समोसा प्लेट', nameEn: 'Samosa Plate' },
    ],
  },
  {
    size: '7"',
    sizeNum: 7,
    products: [
      { nameHi: 'कटोरा दोना', nameEn: 'Katora Dona' },
      { nameHi: 'कटोरा प्लेट', nameEn: 'Katora Plate' },
    ],
  },
  {
    size: '8"',
    sizeNum: 8,
    products: [
      { nameHi: 'बड़ा कटोरा', nameEn: 'Bada Katora' },
      { nameHi: 'बड़ी प्लेट', nameEn: 'Bada Plate' },
    ],
  },
  {
    size: '12"',
    sizeNum: 12,
    products: [
      { nameHi: 'सिल्वर थाली', nameEn: 'Silver Thali' },
    ],
  },
]

/* ───────── Animation Variants ───────── */

const headerFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

const circleFadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

const labelFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.6 + i * 0.1, ease: 'easeOut' as const },
  }),
}

/* ───────── Component ───────── */

export function SizeComparison() {
  const [hoveredSize, setHoveredSize] = useState<number | null>(null)

  const maxSize = 12
  const baseRadius = 180 // max circle radius in px

  function getRadius(sizeNum: number): number {
    return (sizeNum / maxSize) * baseRadius
  }

  return (
    <section className="bg-[#FAF3E0] px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <div className="mb-10">
          <motion.div
            className="flex items-center gap-3 mb-4"
            custom={0}
            variants={headerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <span className="font-mono-space text-[10px] text-[#C8181A] tracking-[2px]">04</span>
            <span className="font-mono-space text-[9px] tracking-[3px] uppercase bg-[#C8181A] text-white px-2.5 py-0.5">
              Size Guide
            </span>
          </motion.div>

          <motion.h2
            className="font-baloo text-[clamp(26px,4vw,44px)] text-[#1A0800] font-extrabold leading-tight mb-2"
            custom={1}
            variants={headerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            साइज़ का फर्क देखो
          </motion.h2>

          <motion.p
            className="font-dm text-sm text-[#6B5B4E] max-w-lg"
            custom={2}
            variants={headerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            Hover on any circle to see which products come in that size. All sizes in inches.
          </motion.p>
        </div>

        {/* ── Main content: Circles + Legend ── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* ── Concentric Circles (SVG) ── */}
          <motion.div
            className="flex-1 w-full flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px]">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric circles - drawn from largest to smallest */}
                {sizes.map((s, i) => {
                  const r = getRadius(s.sizeNum)
                  const isHovered = hoveredSize === s.sizeNum
                  const isAnyHovered = hoveredSize !== null
                  const dimmed = isAnyHovered && !isHovered

                  return (
                    <motion.g
                      key={s.size}
                      custom={i}
                      variants={circleFadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.circle
                        cx="200"
                        cy="200"
                        r={r}
                        fill="none"
                        stroke={isHovered ? '#C8181A' : '#C8181A'}
                        strokeWidth={isHovered ? 3 : 1.5}
                        strokeDasharray={isHovered ? 'none' : '4 4'}
                        opacity={dimmed ? 0.2 : isHovered ? 1 : 0.6}
                        className="cursor-pointer"
                        onPointerEnter={() => setHoveredSize(s.sizeNum)}
                        onPointerLeave={() => setHoveredSize(null)}
                        animate={{
                          strokeWidth: isHovered ? 3 : 1.5,
                          opacity: dimmed ? 0.2 : isHovered ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.25 }}
                      />
                      {/* Fill overlay on hover */}
                      {isHovered && (
                        <motion.circle
                          cx="200"
                          cy="200"
                          r={r}
                          fill="#C8181A"
                          fillOpacity={0.06}
                          initial={{ fillOpacity: 0 }}
                          animate={{ fillOpacity: 0.06 }}
                          transition={{ duration: 0.25 }}
                          className="pointer-events-none"
                        />
                      )}
                      {/* Size label at the right edge of circle */}
                      <motion.text
                        x={200 + r + 6}
                        y={200 + 4}
                        fill={isHovered ? '#C8181A' : '#D4A84B'}
                        fontSize={isHovered ? '14' : '11'}
                        fontWeight={isHovered ? 'bold' : '600'}
                        fontFamily="monospace"
                        opacity={dimmed ? 0.3 : 1}
                        className="cursor-pointer select-none"
                        onPointerEnter={() => setHoveredSize(s.sizeNum)}
                        onPointerLeave={() => setHoveredSize(null)}
                        animate={{
                          fill: isHovered ? '#C8181A' : '#D4A84B',
                          fontSize: isHovered ? '14' : '11',
                          opacity: dimmed ? 0.3 : 1,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        {s.size}
                      </motion.text>
                    </motion.g>
                  )
                })}

                {/* Center dot */}
                <circle cx="200" cy="200" r="4" fill="#D4A84B" />
              </svg>
            </div>
          </motion.div>

          {/* ── Legend / Product List ── */}
          <div className="flex-1 w-full max-w-md">
            <div className="space-y-3">
              {sizes.map((s, i) => {
                const isHovered = hoveredSize === s.sizeNum
                const isAnyHovered = hoveredSize !== null
                const dimmed = isAnyHovered && !isHovered

                return (
                  <motion.div
                    key={s.size}
                    custom={i}
                    variants={labelFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onPointerEnter={() => setHoveredSize(s.sizeNum)}
                    onPointerLeave={() => setHoveredSize(null)}
                    className={`
                      relative rounded-lg border p-4 transition-all duration-300 cursor-pointer
                      ${isHovered
                        ? 'border-[#C8181A] bg-white shadow-lg scale-[1.02]'
                        : dimmed
                          ? 'border-[#D4A84B]/10 bg-white/30 opacity-40 scale-[0.98]'
                          : 'border-[#D4A84B]/20 bg-white hover:border-[#C8181A]/40'
                      }
                    `}
                  >
                    {/* Size badge */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`
                          font-mono-space font-bold text-lg leading-none
                          ${isHovered ? 'text-[#C8181A]' : 'text-[#D4A84B]'}
                        `}
                      >
                        {s.size}
                      </span>
                      <span className="font-mono-space text-[9px] tracking-[2px] uppercase text-[#6B5B4E]">
                        inches
                      </span>
                    </div>

                    {/* Product names */}
                    <div className="flex flex-wrap gap-1.5">
                      {s.products.map((p) => (
                        <span
                          key={p.nameHi}
                          className={`
                            font-baloo text-sm font-semibold px-2.5 py-0.5 rounded-full
                            ${isHovered
                              ? 'bg-[#C8181A]/10 text-[#C8181A]'
                              : 'bg-[#D4A84B]/10 text-[#1A0800]'
                            }
                          `}
                        >
                          {p.nameHi}
                        </span>
                      ))}
                    </div>

                    {/* Hover glow accent line */}
                    {isHovered && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg bg-[#C8181A]"
                        layoutId="size-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* ── Instruction text ── */}
            <motion.p
              className="font-dm text-xs text-[#6B5B4E]/60 mt-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              Hover or tap a circle to highlight its products
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
