'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ChevronUp, Phone } from 'lucide-react'

interface FloatingActionsProps {
  whatsappNumber: string
  phone: string
}

export function FloatingActions({ whatsappNumber, phone }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showWaPopup, setShowWaPopup]     = useState(false)
  const [popupDismissed, setPopupDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Show WhatsApp popup after 10 seconds, once
    const timer = setTimeout(() => {
      if (!popupDismissed) setShowWaPopup(true)
    }, 10000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [popupDismissed])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const dismissPopup = () => { setShowWaPopup(false); setPopupDismissed(true) }

  return (
    <>
      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
        {/* Popup bubble */}
        <AnimatePresence>
          {showWaPopup && !popupDismissed && (
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-4 max-w-[220px] border border-[#25D366]/20 relative"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <button
                onClick={dismissPopup}
                className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <p className="font-baloo text-sm font-bold text-[#1A0800] mb-1">Namaste! 🙏</p>
              <p className="font-dm text-xs text-[#6B5B4E]">Bajrangi se order karna hai?</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Namaste! Order karna tha।')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismissPopup}
                className="mt-3 w-full bg-[#25D366] text-white font-baloo font-bold text-xs py-2 rounded-lg flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Haan, order karo!
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main WhatsApp FAB */}
        <div className="relative">
          {/* Ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-ping" />
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20c05e] rounded-full flex items-center justify-center shadow-xl transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="WhatsApp pe baat karo"
          >
            <MessageCircle className="w-6 h-6 text-white fill-current" />
          </motion.a>
        </div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 z-40 w-10 h-10 bg-[#1A0800]/80 text-[#D4A84B] rounded-full flex items-center justify-center shadow-lg backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0C]/95 backdrop-blur border-t border-[#D4A84B]/10 flex">
        <a
          href={`tel:+91${phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white/70 hover:text-white font-baloo text-sm border-r border-[#D4A84B]/10"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#C8181A] text-white font-baloo font-bold text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Order Karein
        </a>
      </div>
    </>
  )
}
