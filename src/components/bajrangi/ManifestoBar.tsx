'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const lines = [
  {
    text: '95 को 100 कहना — धोखा है।',
    size: 'text-[clamp(28px,5.5vw,72px)]',
    weight: 'font-bold',
    color: 'text-white',
    delay: 0,
  },
  {
    text: 'बाज़ार के लिए यह \'normal\' है।',
    size: 'text-[clamp(26px,5vw,66px)]',
    weight: 'font-bold',
    color: 'text-white/75',
    delay: 0.22,
  },
  {
    text: 'बजरंगी के लिए नहीं।',
    size: 'text-[clamp(32px,6.5vw,88px)]',
    weight: 'font-extrabold',
    color: 'text-[#C8181A]',
    delay: 0.48,
  },
]

export function ManifestoBar() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative bg-[#0C0C0C] overflow-hidden py-24 md:py-36 px-6 noise-overlay"
    >
      {/* Red glow — center */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 55%, rgba(200,24,26,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Eyebrow — sets context */}
        <motion.p
          className="font-mono-space text-[#D4A84B]/60 text-[10px] tracking-[5px] uppercase mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Jo likha hai — woh hi milega।
        </motion.p>

        {/* The three lines — each one lands separately */}
        <div className="flex flex-col gap-2 md:gap-3">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                className={`font-baloo leading-tight tracking-tight ${line.size} ${line.weight} ${line.color}`}
                initial={{ y: '110%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay: line.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line.text}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Brand stamp */}
        <motion.div
          className="mt-12 md:mt-16 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="h-px flex-1 max-w-[48px] bg-[#D4A84B]/35" />
          <span className="font-mono-space text-[#D4A84B]/55 text-[9px] tracking-[5px] uppercase">
            Bajrangi — मतलब भरोसा
          </span>
          <div className="h-px flex-1 bg-[#D4A84B]/35" />
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/50 to-transparent" />
    </section>
  )
}
