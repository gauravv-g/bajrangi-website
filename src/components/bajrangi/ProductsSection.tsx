'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getWhatsAppLink } from '@/lib/utils'

interface Product {
  _id: string
  nameHi: string
  nameEn: string
  size: string
  pack: string
  variants: string[]
  bestFor: string
  image?: { asset?: { _ref?: string; url?: string } } | null
  priceColor?: number
  priceSilver?: number
}

interface ProductsSectionProps {
  products: Product[]
  whatsappNumber: string
}

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' as const },
  }),
}

export function ProductsSection({ products, whatsappNumber }: ProductsSectionProps) {
  const [activeVariant, setActiveVariant] = useState<'Color' | 'Silver'>('Color')
  const filtered = products.filter(p => p.variants?.includes(activeVariant))

  const isPlate = (p: Product) => p.nameHi.includes('प्लेट') || p.nameEn.toLowerCase().includes('plate')
  const isThali = (p: Product) => p.nameHi.includes('थाली') || p.nameEn.toLowerCase().includes('thali')

  const getProductImage = (p: Product, variant: 'Color' | 'Silver') => {
    if (isThali(p)) return '/silver-thali.png'
    if (isPlate(p)) return '/silver-plate.png'
    return variant === 'Silver' ? '/silver-dona1.png' : '/color-dona.png'
  }

  return (
    <section id="products" className="bg-[#FAF3E0] px-5 md:px-12 lg:px-20 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background watermark */}
      <span className="absolute -top-4 right-4 font-mono-space text-[180px] font-bold text-[#C8181A]/[0.02] select-none pointer-events-none leading-none">
        100
      </span>

      {/* Decorative soft glow overlays */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C8181A]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4A84B]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 border-l-2 border-[#C8181A] pl-6">
          <motion.p
            className="font-mono-space text-[#C8181A] text-xs tracking-[0.3em] uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            उत्पाद संग्रह
          </motion.p>
          <motion.h2
            className="font-baloo text-[clamp(32px,5.5vw,56px)] text-[#1A0800] font-extrabold leading-tight mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            दोना। प्लेट।
          </motion.h2>
          <motion.p
            className="font-mono-space text-[#C8181A]/70 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            100 माने पूरे 100 · Jo likha hai — woh hi milega
          </motion.p>
        </div>

        {/* Filters and Toggle */}
        <div className="mb-12 flex items-center justify-between flex-wrap gap-6 border-b border-[#1A0800]/10 pb-6">
          <div role="radiogroup" aria-label="Variant" className="inline-flex bg-white/40 backdrop-blur-sm border border-[#1A0800]/10 p-1.5 rounded-xl shadow-sm">
            {(['Color', 'Silver'] as const).map(v => (
              <button
                key={v}
                role="radio"
                aria-checked={activeVariant === v}
                onClick={() => setActiveVariant(v)}
                className={`font-mono-space text-xs tracking-[2px] uppercase px-8 py-3.5 transition-all duration-300 rounded-lg cursor-pointer ${
                  activeVariant === v
                    ? 'bg-[#1A0800] text-[#FAF3E0] shadow-md font-bold'
                    : 'text-[#1A0800] hover:bg-[#1A0800]/5'
                }`}
              >
                {v === 'Color' ? 'Color' : 'Silver'}
              </button>
            ))}
          </div>

          {/* Quiet credential badges */}
          <div className="flex flex-wrap gap-2.5">
            {['✓ 100 माने पूरे 100', '✓ पर्ची अंदर', '✓ मशीन से सील'].map(b => (
              <span key={b} className="font-mono-space text-[10px] tracking-[1.5px] px-3.5 py-2 bg-[#1A0800] text-[#D4A84B] border border-[#D4A84B]/20 rounded-md shadow-sm">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariant}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((product, i) => {
              return (
                <motion.div
                  key={`${product._id}-${activeVariant}`}
                  custom={i}
                  variants={cardAnim}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(26,8,0,0.06), 0 1px 2px rgba(212,168,75,0.1)',
                  }}
                  className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col border border-[#1A0800]/8 hover:border-[#D4A84B]/30 transition-all duration-300 shadow-md"
                >
                  {/* Recessed Capsule Image Area — curved border, no overlays */}
                  <div className="relative h-56 w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF7EE] to-white border-b border-[#1A0800]/5">
                    
                    {/* Radial aura glow behind the product */}
                    <div
                      className="absolute inset-0 z-0 pointer-events-none opacity-45 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60"
                      style={{
                        background: activeVariant === 'Silver'
                          ? 'radial-gradient(circle 90px at 50% 50%, rgba(200,24,26,0.05) 0%, transparent 70%)'
                          : 'radial-gradient(circle 90px at 50% 50%, rgba(212,168,75,0.08) 0%, transparent 70%)',
                      }}
                    />

                    {/* Proportional scaling & aspect transform removed for real full-size images */}
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                      className="w-full h-full relative z-10"
                    >
                      <Image
                        src={getProductImage(product, activeVariant)}
                        alt={`${product.nameHi} — ${activeVariant}`}
                        fill
                        priority
                        className="object-cover"
                        style={{
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Details Area — padding 20px */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Size mark — top */}
                    <span className="font-mono-space text-[10px] text-[#D4A84B] font-bold uppercase tracking-[0.2em] mb-2 block">
                      {product.size.replace('"', '')} INCH SIZE
                    </span>

                    {/* Hindi Name */}
                    <h3 className="font-baloo text-2xl font-bold text-[#1A0800] leading-none mb-1">
                      {product.nameHi}
                    </h3>

                    {/* English Name */}
                    <p className="font-dm text-xs text-[#6B5B4E] mb-5">
                      {product.nameEn}
                    </p>

                    {/* Hairline divider */}
                    <div className="h-px bg-[#1A0800]/8 w-full mb-4" />

                    {/* Packing Details block */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono-space text-xs text-[#6B5B4E] tracking-wide">
                        Standard Packing
                      </span>
                      <span className="font-mono-space text-xs font-bold text-[#1A0800]">
                        {product.pack.replace('pcs', 'Pcs')}
                      </span>
                    </div>

                    {/* Meta Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      <span className="font-dm text-[11px] text-[#6B5B4E] bg-[#1A0800]/5 px-3.5 py-1.5 rounded-full border border-[#1A0800]/5">
                        {product.bestFor}
                      </span>
                    </div>

                    {/* WhatsApp CTA — flush to card bottom */}
                    <motion.a
                      href={getWhatsAppLink(whatsappNumber, product.nameHi, product.nameEn, product.size, activeVariant, product.pack)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden bg-[#C8181A] text-white font-dm font-semibold text-xs py-3.5 rounded-lg w-full flex items-center justify-center cursor-pointer border border-[#D4A84B]/20 hover:border-[#D4A84B]/40 shadow-sm"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {/* Gold shimmer sweep */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A84B]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="relative tracking-[0.05em] uppercase">WhatsApp pe Order Karo</span>
                    </motion.a>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
