'use client'

import { motion } from 'framer-motion'

// Composite characters — represent the real market, not fake testimonials
const people = [
  {
    name: 'Ramesh uncle',
    role: 'Kirana wala',
    town: 'Bahraich, UP',
    line: '"Woh hi rakhta hoon jis par mujhe bharosa ho।"',
  },
  {
    name: 'Pappu bhaiya',
    role: 'Chaat wala',
    town: 'Lakhimpur, UP',
    line: '"Raat ko ginna band ho gaya।"',
  },
  {
    name: 'Raju bhaiya',
    role: 'Samosa wala',
    town: 'Sitapur, UP',
    line: '"Ek baar bhi nahi nikla kam।"',
  },
  {
    name: 'Chacha',
    role: 'Chai ki dukaan',
    town: 'Pilibhit, UP',
    line: '"Dhoka nahi mila — isliye nahi badla।"',
  },
]

export function PeopleLines() {
  return (
    <section className="bg-[#1A0A02] py-16 md:py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header — one line */}
        <motion.p
          className="font-mono-space text-[#D4A84B]/70 text-[10px] tracking-[4px] uppercase mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          वो जो जानते हैं
        </motion.p>

        {/* People — 4 lines on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D4A84B]/10">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              className="bg-[#1A0A02] p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {/* The line — biggest */}
              <p className="font-baloo text-white text-lg md:text-xl font-semibold leading-snug mb-4">
                {p.line}
              </p>
              {/* Identity — small, quiet */}
              <div className="border-t border-[#D4A84B]/15 pt-3">
                <p className="font-baloo text-[#D4A84B] text-sm font-bold">{p.name}</p>
                <p className="font-mono-space text-white/30 text-[9px] tracking-[1px] uppercase">{p.role} · {p.town}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent" />
    </section>
  )
}
