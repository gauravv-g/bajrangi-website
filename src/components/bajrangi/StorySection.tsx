'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function StorySection() {
  return (
    <section id="story" className="bg-[#FAF3E0] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — logo on black */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-xs md:max-w-sm mx-auto rounded-2xl overflow-hidden border border-[#D4A84B]/20 shadow-2xl">
              <Image
                src="/Bajrangi.png"
                alt="बजरंगी"
                fill
                className="object-contain p-10 bg-[#0C0C0C]"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4A84B]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4A84B]" />
            </div>
            <div className="absolute -bottom-4 -right-2 md:right-0 bg-[#C8181A] text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="font-baloo font-bold text-sm">Eshanura Enterprises Pvt. Ltd.</p>
              <p className="font-dm text-xs text-white/75">Lakhimpur-Kheri, U.P.</p>
            </div>
          </motion.div>

          {/* Right — three lines. That's it. */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-mono-space text-[#C8181A] text-[10px] tracking-[4px] uppercase mb-6">हमारे बारे में</p>

            {/* The three lines */}
            <div className="space-y-1 mb-10">
              <h2 className="font-baloo text-[clamp(22px,4vw,44px)] text-[#1A0800] font-extrabold leading-tight">
                हम Lakhimpur-Kheri से हैं।
              </h2>
              <h2 className="font-baloo text-[clamp(22px,4vw,44px)] text-[#1A0800] font-extrabold leading-tight">
                एक नाम है — <span className="text-[#C8181A]">Bajrangi।</span>
              </h2>
              <h2 className="font-baloo text-[clamp(22px,4vw,44px)] text-[#1A0800] font-extrabold leading-tight">
                और हम गिन के देते हैं।
              </h2>
            </div>

            {/* Quiet brand line */}
            <p className="font-dm italic text-[#6B5B4E] text-base border-l-2 border-[#D4A84B]/40 pl-4 mb-8">
              &ldquo;Jo likha hai — woh hi milega।&rdquo;
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
