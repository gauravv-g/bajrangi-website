'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, ShieldCheck, FileCheck, Lock, Share2, Check } from 'lucide-react'

/* ───────── Types ───────── */

interface ProductQuickViewProps {
  product: {
    nameHi: string
    nameEn: string
    size: string
    variant: string
    pack: string
    bestFor: string
    whoBuys: string
  }
  isOpen: boolean
  onClose: () => void
}

/* ───────── WhatsApp Link Helper ───────── */

function getWhatsAppLink(product: ProductQuickViewProps['product']) {
  const msg = `🙏 Namaste Bajrangi!\n\nMujhe chahiye:\n📦 Product: ${product.nameHi} (${product.nameEn})\n📐 Size: ${product.size}\n🎨 Variant: ${product.variant}\n🔢 Pack: ${product.pack}\n🔢 Quantity: ___ packet\n\nMera naam: ___\nCity/Area: ___\n\nWhatsApp pe confirm karo.`
  return `https://wa.me/919839436346?text=${encodeURIComponent(msg)}`
}

/* ───────── USP Badge Data ───────── */

const uspBadges = [
  {
    icon: ShieldCheck,
    label: 'Guaranteed Count',
    style: 'bg-[#C8181A] text-white',
  },
  {
    icon: FileCheck,
    label: 'Count Slip Inside',
    style: 'bg-[#0C0C0C] text-[#D4A84B] border border-[#D4A84B]',
  },
  {
    icon: Lock,
    label: 'Machine Sealed',
    style: 'bg-[#0C0C0C] text-white',
  },
]

/* ───────── Component ───────── */

export function ProductQuickView({
  product,
  isOpen,
  onClose,
}: ProductQuickViewProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Dark overlay ── */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* ── Modal card ── */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative bg-[#FAF3E0] w-full max-w-md rounded-lg overflow-hidden pointer-events-auto"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Gold accent bar at top ── */}
              <div className="h-1.5 bg-gradient-to-r from-[#C8181A] via-[#D4A84B] to-[#C8181A]" />

              {/* ── Subtle background pattern ── */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #1A0800 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* ── Close button ── */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors duration-200"
                aria-label="Close quick view"
              >
                <X className="w-4 h-4 text-[#1A0800]" />
              </button>

              {/* ── Content ── */}
              <div className="relative z-10 p-6 md:p-8">
                {/* ── Product names ── */}
                <h2 className="font-baloo text-2xl md:text-3xl font-extrabold text-[#C8181A] leading-tight mb-1">
                  {product.nameHi}
                </h2>
                <p className="font-dm text-sm text-[#6B5B4E] mb-5">
                  {product.nameEn}
                </p>

                {/* ── Size — very large ── */}
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-mono-space text-[56px] md:text-[72px] font-bold text-[#1A0800] leading-none">
                    {product.size}
                  </span>
                  <span className="font-mono-space text-[10px] tracking-[2px] text-[#6B5B4E] uppercase">
                    size
                  </span>
                </div>

                {/* ── Variant badge ── */}
                <div className="mb-5">
                  <span
                    className={`inline-block font-mono-space text-xs tracking-[1px] px-3 py-1.5 rounded-sm font-bold ${
                      product.variant === 'Silver'
                        ? 'bg-gradient-to-r from-[#A0A0A0] via-[#E0E0E0] to-[#A0A0A0] text-[#1A0800]'
                        : 'bg-[#C8181A] text-white'
                    }`}
                  >
                    {product.variant}
                  </span>
                </div>

                {/* ── Pack info ── */}
                <div className="flex items-center gap-2 mb-5 text-sm">
                  <span className="font-mono-space text-[10px] tracking-[1px] text-[#D4A84B] uppercase w-16 shrink-0">
                    Pack
                  </span>
                  <span className="font-dm text-[#1A0800] font-semibold">
                    {product.pack}
                  </span>
                </div>

                {/* ── Best For & Who Buys ── */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-mono-space text-[10px] tracking-[1px] text-[#D4A84B] uppercase w-20 shrink-0 pt-0.5">
                      Best For
                    </span>
                    <span className="font-dm text-[#6B5B4E]">
                      {product.bestFor}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-mono-space text-[10px] tracking-[1px] text-[#D4A84B] uppercase w-20 shrink-0 pt-0.5">
                      Who Buys
                    </span>
                    <span className="font-dm text-[#6B5B4E]">
                      {product.whoBuys}
                    </span>
                  </div>
                </div>

                {/* ── USP Badges ── */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {uspBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`inline-flex items-center gap-1.5 font-mono-space text-[9px] tracking-[1px] px-2.5 py-1.5 rounded-sm ${badge.style}`}
                    >
                      <badge.icon className="w-3 h-3" />
                      {badge.label}
                    </span>
                  ))}
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4A84B]/30 to-transparent mb-6" />

                {/* ── Dona/Plate Visual SVG ── */}
                <div className="flex justify-center mb-6">
                  <svg viewBox="0 0 120 60" className="w-32 h-16" aria-hidden="true">
                    {/* Bowl/dona shape */}
                    <ellipse cx="60" cy="35" rx="50" ry="20" fill="none" stroke={product.variant === 'Silver' ? '#A0A0A0' : '#C8181A'} strokeWidth="2" opacity="0.3" />
                    <ellipse cx="60" cy="30" rx="45" ry="15" fill={product.variant === 'Silver' ? 'rgba(160,160,160,0.08)' : 'rgba(200,24,26,0.08)'} stroke={product.variant === 'Silver' ? '#E0E0E0' : '#C8181A'} strokeWidth="1.5" />
                    {/* Size indicator */}
                    <line x1="15" y1="50" x2="105" y2="50" stroke="#D4A84B" strokeWidth="0.5" opacity="0.4" />
                    <text x="60" y="58" textAnchor="middle" fontSize="8" fontFamily="'Space Mono', monospace" fill="#D4A84B" opacity="0.6">{product.size}</text>
                  </svg>
                </div>

                {/* ── WhatsApp CTA ── */}
                <motion.a
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#C8181A] text-white font-baloo font-bold text-base px-6 py-4 rounded-md w-full relative overflow-hidden group"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(200,24,26,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Shine sweep on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <MessageCircle className="w-5 h-5 relative" />
                  <span className="relative">WhatsApp pe Order Karo</span>
                </motion.a>

                {/* ── Share Button ── */}
                <ShareButton product={product} />

                <p className="font-dm text-[10px] text-[#6B5B4E]/60 text-center mt-3">
                  Pre-filled message ke saath WhatsApp khulega
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ───────── Share Button Sub-component ───────── */

function ShareButton({ product }: { product: ProductQuickViewProps['product'] }) {
  const [copied, setCopied] = useState(false)

  const shareText = `🔥 Bajrangi ${product.nameHi} (${product.nameEn}) — ${product.size} | ${product.variant} | ${product.pack} | ✓ Guaranteed Count | ✓ Machine Sealed\n\nOrder: wa.me/919839436346`

  const handleShare = async () => {
    // Try native share API first (works on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Bajrangi ${product.nameHi}`,
          text: shareText,
        })
        return
      } catch {
        // Fall through to clipboard
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Final fallback: open WhatsApp share
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank')
    }
  }

  return (
    <motion.button
      onClick={handleShare}
      className="mt-3 w-full flex items-center justify-center gap-2 border-2 border-[#D4A84B]/30 text-[#D4A84B] font-baloo font-bold text-sm px-6 py-3 rounded-md hover:bg-[#D4A84B]/10 hover:border-[#D4A84B]/50 transition-all duration-300"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share Product Details
        </>
      )}
    </motion.button>
  )
}
