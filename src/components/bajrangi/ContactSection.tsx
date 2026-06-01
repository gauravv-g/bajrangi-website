'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

interface ContactSectionProps {
  whatsappNumber: string
  phone: string
  email: string
  address: string
}

export function ContactSection({ whatsappNumber, phone, email, address }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-[#0C0C0C] noise-overlay relative overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono-space text-[#D4A84B] text-[10px] tracking-[4px] uppercase mb-3">संपर्क</p>
          <h2 className="font-baloo text-[clamp(28px,5vw,48px)] text-white font-extrabold leading-tight">
            Order करना है?<br />
            <span className="text-shimmer">WhatsApp karo।</span>
          </h2>
          <p className="font-dm text-white/50 mt-3 text-base md:text-lg max-w-lg mx-auto">
            सीधा बात करते हैं। कोई form नहीं, कोई wait नहीं।
          </p>
        </motion.div>

        {/* Big WhatsApp button */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('🙏 Namaste Bajrangi! Mujhe order karna hai।')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full max-w-lg mx-auto bg-[#25D366] hover:bg-[#20c05e] text-white font-baloo font-bold text-xl md:text-2xl py-5 px-8 rounded-2xl mb-10 relative overflow-hidden"
          whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(37,211,102,0.4)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MessageCircle className="w-7 h-7" />
          WhatsApp pe Baat Karo
        </motion.a>

        {/* Contact grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href={`tel:+91${phone}`}
            className="bg-white/[0.04] border border-white/10 hover:border-[#D4A84B]/30 rounded-xl p-6 text-center group transition-all duration-300"
          >
            <Phone className="w-6 h-6 text-[#D4A84B] mx-auto mb-3" />
            <p className="font-mono-space text-[9px] text-white/40 tracking-[2px] uppercase mb-1">Phone</p>
            <p className="font-dm text-white text-lg font-medium group-hover:text-[#D4A84B] transition-colors">{phone}</p>
          </a>

          <a
            href={`mailto:${email}`}
            className="bg-white/[0.04] border border-white/10 hover:border-[#D4A84B]/30 rounded-xl p-6 text-center group transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-[#D4A84B] mx-auto mb-3" />
            <p className="font-mono-space text-[9px] text-white/40 tracking-[2px] uppercase mb-1">Email</p>
            <p className="font-dm text-white text-sm font-medium group-hover:text-[#D4A84B] transition-colors break-all">{email}</p>
          </a>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center">
            <MapPin className="w-6 h-6 text-[#D4A84B] mx-auto mb-3" />
            <p className="font-mono-space text-[9px] text-white/40 tracking-[2px] uppercase mb-1">Address</p>
            <p className="font-dm text-white/70 text-sm leading-relaxed">{address}</p>
          </div>
        </motion.div>

        {/* Credentials row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['Eshanura Enterprises Pvt. Ltd.', 'MSME Registered', 'GST Compliant', 'Made in India 🇮🇳'].map(c => (
            <span key={c} className="font-mono-space text-[9px] tracking-[1px] text-white/30 border border-white/10 px-3 py-1.5 rounded-sm">
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
