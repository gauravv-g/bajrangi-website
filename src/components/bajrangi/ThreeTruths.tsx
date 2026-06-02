'use client'

import { motion } from 'framer-motion'

const truths = [
  {
    number: '01',
    line: 'हर दोना गिना।',
    sub: 'कोई shortcut नहीं।',
  },
  {
    number: '02',
    line: 'पर्ची हमेशा अंदर।',
    sub: 'खोलो। गिनो। मिलाओ।',
  },
  {
    number: '03',
    line: 'मशीन से सील।',
    sub: 'एक बार। कोई छेड़छाड़ नहीं।',
  },
]

const getIcon = (num: string) => {
  if (num === '01') {
    return (
      <svg className="w-12 h-12 text-[#D4A84B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8c0 4.418 3.582 8 8 8h1a8 8 0 0 0 8-8v-3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2" />
      </svg>
    )
  }
  if (num === '02') {
    return (
      <svg className="w-12 h-12 text-[#D4A84B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 7h6" />
        <path d="M9 11h6" />
        <path d="M9 15h4" />
        <circle cx="16" cy="15" r="1.5" className="fill-[#C8181A]" stroke="none" />
      </svg>
    )
  }
  return (
    <svg className="w-12 h-12 text-[#D4A84B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z" />
      <circle cx="12" cy="16" r="1.5" className="fill-[#D4A84B]" />
    </svg>
  )
}

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
          <p className="font-mono-space text-[#F5C563] text-xs md:text-sm tracking-[4px] uppercase mb-3">बजरंगी क्यों?</p>
          <h2 className="font-baloo text-[clamp(32px,5.5vw,54px)] text-white font-extrabold leading-tight">
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
              <span className="absolute top-5 right-6 font-mono-space text-[100px] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
                {truth.number}
              </span>

              <div className="mb-6">{getIcon(truth.number)}</div>

              {/* The line — the only thing that matters */}
              <h3 className="font-baloo text-[clamp(28px,4.5vw,36px)] text-white font-extrabold leading-tight mb-2.5">
                {truth.line}
              </h3>

              {/* Sub — 3 words max */}
              <p className="font-mono-space text-[#F5C563] text-base md:text-lg tracking-wide">
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
