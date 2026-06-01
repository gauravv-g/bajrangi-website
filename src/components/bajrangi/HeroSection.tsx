'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const ticker1 = ['बजरंगी', 'मतलब भरोसा', 'चटनी दोना', 'बताशा दोना', 'समोसा दोना', 'कटोरा दोना', 'बड़ा कटोरा', 'Color & Silver', 'सिर्फ बजरंगी में']
const ticker2 = ['100 माने पूरे 100', 'गिन के देखो', '4"', '5.5"', '6"', '7"', '8"', 'पूरा माल', 'पक्का भरोसा', 'हर बार']

interface HeroSectionProps {
  tagline: string
  promise: string
  whatsappNumber: string
}

export function HeroSection({ tagline, promise, whatsappNumber }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const packY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const packOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="bg-[#0C0C0C] min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* ── Background: giant ghost "100" behind the left copy column ── */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-mono-space font-bold leading-none text-white/[0.03]"
          style={{ fontSize: 'clamp(220px,32vw,420px)', marginLeft: '-2vw', marginBottom: '-0.1em' }}
        >
          100
        </span>
      </div>

      {/* ── Warm red glow — bottom left, where the pack sits ── */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 700px 600px at 70% 60%, rgba(200,24,26,0.09) 0%, transparent 65%)',
        }}
      />

      {/* ── Top bar — stamp ── */}
      <div className="relative z-10 bg-[#C8181A] px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between">
        <span className="font-mono-space text-[11px] md:text-xs tracking-[4px] text-white/95 uppercase font-medium">
          Eshanura Enterprises Pvt. Ltd.
        </span>
        <span className="font-mono-space text-[11px] md:text-xs tracking-[3px] text-white/95 uppercase hidden md:block font-medium">
          Lakhimpur-Kheri, U.P.
        </span>
        <span className="font-mono-space text-[11px] md:text-xs tracking-[3px] text-white/95 uppercase font-semibold">
          9839436346
        </span>
      </div>

      {/* ── Main body ── */}
      <div className="flex-1 relative z-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-16 pb-4">

        {/* LEFT — copy */}
        <div className="lg:w-[42%] flex flex-col justify-center">

          {/* Brand name */}
          <motion.h1
            className="font-baloo font-extrabold leading-[0.85] text-white mb-3"
            style={{ fontSize: 'clamp(72px,11vw,128px)' }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            बजरंगी।
          </motion.h1>

          {/* Brand line — the only copy that matters */}
          <motion.p
            className="font-baloo font-bold text-[#F5C563] mb-8"
            style={{ fontSize: 'clamp(20px,2.8vw,30px)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            मतलब भरोसा<span className="text-[#C8181A]">।</span>
          </motion.p>

          {/* The proof — three facts, no fluff */}
          <motion.div
            className="flex flex-col gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            {[
              { label: '100 माने पूरे 100', sub: 'हर पैकेट में। हर बार।' },
              { label: 'पर्ची अंदर', sub: 'गिनती की गवाही।' },
              { label: 'मशीन से सील', sub: 'खुल नहीं सकता।' },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8181A] flex-shrink-0" />
                <span className="font-baloo font-extrabold text-white text-xl md:text-2xl leading-none">
                  {label}
                </span>
                <span className="font-mono-space text-sm md:text-base text-white/90 tracking-wide hidden sm:block">
                  — {sub}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          >
            <a
              id="hero-products-cta"
              href="#products"
              className="group bg-[#C8181A] text-white font-baloo font-bold text-base md:text-lg px-7 py-3.5 flex items-center gap-2 relative overflow-hidden transition-all duration-300 hover:bg-[#b01517]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              माल देखें
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              id="hero-whatsapp-cta"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#D4A84B]/50 text-[#D4A84B] font-baloo font-bold text-base md:text-lg px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:border-[#D4A84B] hover:bg-[#D4A84B]/8"
            >
              Order on WhatsApp
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* RIGHT — merged full-bleed product shot */}
        <div className="lg:w-[58%] w-full aspect-[2752/1536] relative overflow-hidden">
          <motion.div
            style={{ y: packY, opacity: packOpacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full h-full relative"
          >
            <Image
              src="/HERO.png"
              alt="Bajrangi Paper Dona & Plates"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Smooth Edge Fades to blend the image background into the night background */}
            <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-8 sm:h-16 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-8 sm:h-16 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* Count stamp — overlaid on the pack */}
          <motion.div
            className="absolute bottom-4 right-4 bg-[#C8181A] px-5 py-3 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="font-mono-space font-bold text-white text-xl md:text-3xl leading-none">100</p>
            <p className="font-mono-space text-white/95 text-[11px] md:text-xs tracking-[2px] uppercase font-semibold">pcs inside</p>
          </motion.div>

          {/* Seal badge */}
          <motion.div
            className="absolute top-4 left-4 border border-[#D4A84B]/45 bg-[#1a0a02] px-4 py-2 z-20"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <p className="font-mono-space text-[#D4A84B] text-[11px] md:text-xs tracking-[2px] uppercase font-bold">Machine Sealed</p>
          </motion.div>
        </div>
      </div>

      {/* ── Tickers ── */}
      <div className="relative z-10 w-full overflow-hidden mt-auto">
        <div
          className="bg-[#C8181A] py-3 overflow-hidden whitespace-nowrap"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          }}
        >
          <div className="animate-ticker-left inline-block">
            {[...ticker1, ...ticker1, ...ticker1].map((item, i) => (
              <span key={i} className="font-baloo text-white text-base md:text-lg font-bold mx-5">
                {item} ·
              </span>
            ))}
          </div>
        </div>
        <div
          className="bg-[#D4A84B] py-2 overflow-hidden whitespace-nowrap"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          }}
        >
          <div className="animate-ticker-right inline-block">
            {[...ticker2, ...ticker2, ...ticker2].map((item, i) => (
              <span key={i} className="font-mono-space text-[#0C0C0C] text-xs md:text-sm font-bold mx-5">
                {item} ·
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
