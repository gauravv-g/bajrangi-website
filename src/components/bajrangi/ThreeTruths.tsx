'use client'

import { motion } from 'framer-motion'

const truths = [
  {
    number: '01',
    line: 'हर दोना गिना।',
    sub: 'कोई shortcut नहीं।',
    icon: '✋',
  },
  {
    number: '02',
    line: 'पर्ची हमेशा अंदर।',
    sub: 'खोलो। गिनो। मिलाओ।',
    icon: '📋',
  },
  {
    number: '03',
    line: 'मशीन से सील।',
    sub: 'एक बार। कोई छेड़छाड़ नहीं।',
    icon: '🔒',
  },
]

export function ThreeTruths() {
  return (
    <section id="truths" className="bg-[#1A0A02] relative overflow-hidden noise-overlay py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono-space text-[#D4A84B] text-[10px] tracking-[4px] uppercase mb-3">बजरंगी क्यों?</p>
          <h2 className="font-baloo text-[clamp(28px,5vw,48px)] text-white font-extrabold leading-tight">
            तीन बातें। <span className="text-shimmer">सीधी।</span>
          </h2>
        </motion.div>

        {/* Cards — lines only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4A84B]/10">
          {truths.map((truth, i) => (
            <motion.div
              key={truth.number}
              className="group bg-[#1A0A02] p-8 md:p-10 relative hover:bg-[#200D05] transition-colors duration-300 border-b md:border-b-0 md:border-r border-[#D4A84B]/10 last:border-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Number watermark */}
              <span className="absolute top-5 right-6 font-mono-space text-[80px] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
                {truth.number}
              </span>

              <div className="text-3xl mb-6">{truth.icon}</div>

              {/* The line — the only thing that matters */}
              <h3 className="font-baloo text-[clamp(24px,4vw,32px)] text-white font-extrabold leading-tight mb-2">
                {truth.line}
              </h3>

              {/* Sub — 3 words max */}
              <p className="font-mono-space text-[#D4A84B] text-sm tracking-wide">
                {truth.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/40 to-transparent" />
    </section>
  )
}
