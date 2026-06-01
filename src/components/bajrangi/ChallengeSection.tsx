'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ChallengeSectionProps {
  whatsappNumber: string
  phone: string
}

function SectionWrapper({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      id={id}
      className="relative min-h-[80vh] flex flex-col justify-center py-20 md:py-28 border-b border-[#D4A84B]/10 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto w-full px-6 md:px-12 lg:px-20 z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function ChallengeSection({ whatsappNumber, phone }: ChallengeSectionProps) {
  return (
    <section
      id="challenge"
      className="relative bg-[#0C0C0C] overflow-hidden noise-overlay"
    >
      {/* Background ambient red glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(200,24,26,0.06) 0%, transparent 60%), radial-gradient(ellipse at 50% 70%, rgba(212,168,75,0.04) 0%, transparent 60%)',
        }}
      />

      {/* ── Spread 1: Piyush Pandey (The Dare) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-8">
          The Dare
        </p>
        <div className="space-y-2 mb-10">
          <p className="font-baloo text-white text-[clamp(26px,4.5vw,60px)] font-bold leading-none tracking-tight">
            बजरंगी का पैकेट उठाओ।
          </p>
          <p className="font-baloo text-[#C8181A] text-[clamp(56px,10vw,130px)] font-extrabold leading-none tracking-tighter">
            गिनो।
          </p>
          <p className="font-baloo text-white/85 text-[clamp(20px,3.2vw,44px)] font-bold leading-tight">
            अगर एक भी पीस कम निकला —
          </p>
          <p className="font-baloo text-[#D4A84B] text-[clamp(20px,3.2vw,44px)] font-bold leading-tight">
            सीधे फ़ोन करो: {phone}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-between pt-6 border-t border-[#D4A84B]/10">
          <a
            id="challenge-whatsapp-cta"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bajrangi se order karna hai।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8181A] text-white font-baloo font-bold text-base px-7 py-3.5 hover:bg-[#b01517] transition-all duration-200 hover:shadow-[0_0_24px_rgba(200,24,26,0.4)]"
          >
            WhatsApp pe Order Karo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <span className="font-mono-space text-[#D4A84B]/40 text-[10px] tracking-[3px] uppercase mt-2 sm:mt-0">
            Campaign Concept: Piyush Pandey's Dare
          </span>
        </div>
      </SectionWrapper>

      {/* ── Spread 2: Prasoon Joshi (The Poetry of the Slip) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-8">
          The Poetry of Witness
        </p>
        <div className="border-l border-[#D4A84B]/20 pl-6 md:pl-8 py-2 mb-10">
          <p className="font-baloo text-[#D4A84B] text-xl md:text-2xl font-bold mb-4">
            एक पर्ची। गिनती की गवाही।
          </p>
          <p className="font-baloo text-white text-[clamp(22px,4.2vw,48px)] font-bold leading-tight">
            हर पैकेट के अंदर एक पर्ची होती है।
          </p>
          <p className="font-baloo text-white/75 text-[clamp(20px,3.8vw,42px)] font-bold leading-tight mt-1">
            कोई नहीं देखता इसे बनते हुए।
          </p>
          <p className="font-baloo text-[#D4A84B]/90 text-[clamp(20px,3.8vw,42px)] font-bold leading-tight mt-1">
            पर वो वहाँ होती है।
          </p>
        </div>
        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-end">
          <span className="font-mono-space text-[#D4A84B]/40 text-[10px] tracking-[3px] uppercase">
            Campaign Concept: Prasoon Joshi's Poetic Witness
          </span>
        </div>
      </SectionWrapper>

      {/* ── Spread 3: Donald Draper (The Reframe) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-8">
          The Reframe
        </p>
        <div className="relative mb-10">
          <span className="absolute -top-10 -left-6 font-mono-space text-[120px] text-white/[0.02] select-none pointer-events-none">
            “
          </span>
          <p className="font-baloo text-white/90 text-[clamp(20px,3vw,36px)] font-semibold leading-relaxed italic pr-6">
            &ldquo;यह दोने की बात नहीं है।<br />
            यह उस इंसान की बात है<br />
            जिसने आपके लिए गिना।&rdquo;
          </p>
        </div>
        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-end">
          <span className="font-mono-space text-[#D4A84B]/40 text-[10px] tracking-[3px] uppercase">
            Campaign Concept: Donald Draper's Reframe
          </span>
        </div>
      </SectionWrapper>

      {/* ── Spread 4: Sukesh Nayak (The Everyday Contrast) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-8">
          The Contrast
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#141414] border border-white/5 p-6 md:p-8">
            <span className="font-mono-space text-white/40 text-xs tracking-wider uppercase block mb-3">बाज़ार का दोना</span>
            <p className="font-baloo text-white/70 text-[clamp(18px,2.2vw,24px)] leading-snug line-through decoration-[#C8181A]/50">
              100 का पैकेट बोलकर बेचेंगे।<br />
              अंदर सिर्फ 92, 95 या 97 निकलेंगे।<br />
              धोखा बाज़ार का नियम बन चुका है।
            </p>
          </div>
          <div className="bg-[#141414] border border-[#D4A84B]/20 p-6 md:p-8 relative">
            <div className="absolute top-0 right-0 bg-[#C8181A] text-white text-[8px] tracking-[2px] font-mono-space uppercase px-2 py-0.5">
              100% पक्का
            </div>
            <span className="font-mono-space text-[#D4A84B] text-xs tracking-wider uppercase block mb-3">बजरंगी दोना</span>
            <p className="font-baloo text-white text-[clamp(18px,2.2vw,24px)] font-bold leading-snug">
              100 का पैकेट लिखा है।<br />
              अंदर पूरे 100 ही मिलेंगे।<br />
              <span className="text-[#D4A84B]">जो लिखा है — वही मिलेगा।</span>
            </p>
          </div>
        </div>
        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-end">
          <span className="font-mono-space text-[#D4A84B]/40 text-[10px] tracking-[3px] uppercase">
            Campaign Concept: Sukesh Nayak's Everyday Contrast
          </span>
        </div>
      </SectionWrapper>

      {/* ── Spread 5: Josy Paul (The Provocation) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-8">
          The Provocation
        </p>
        <div className="mb-10 max-w-3xl">
          <p className="font-baloo text-white text-[clamp(24px,3.8vw,44px)] font-bold leading-tight">
            जो <span className="text-[#C8181A]">Bajrangi</span> रखता है — वो अपने ग्राहकों से बिना बोले एक बात कह रहा है:
          </p>
          <p className="font-baloo text-[#D4A84B] text-[clamp(26px,4.2vw,48px)] font-extrabold leading-tight mt-4 italic">
            &ldquo;मेरे यहाँ आपके साथ कोई धोखा नहीं होगा।&rdquo;
          </p>
        </div>
        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-end">
          <span className="font-mono-space text-[#D4A84B]/40 text-[10px] tracking-[3px] uppercase">
            Campaign Concept: Josy Paul's Provocative Pride
          </span>
        </div>
      </SectionWrapper>

      {/* ── Spread 6: Aditya Kanthy (The Kirana Strategy) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-8">
          The Strategy
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10 items-center">
          <div className="lg:col-span-3 space-y-4">
            <p className="font-baloo text-white text-xl md:text-2xl font-bold">
              किराना की साख (Reputation) ही उसकी असली पूँजी है।
            </p>
            <p className="font-dm text-white/75 text-sm leading-relaxed">
              जब कोई थोक विक्रेता या फैक्ट्री पैकेट में 5 पीस कम देती है, तो ग्राहक कंपनी को नहीं जानता। वह आपके ऊपर से भरोसा उठाता है। बजरंगी आपके उस भरोसे की रक्षा करता है।
            </p>
          </div>
          <div className="lg:col-span-2 bg-[#141414] border border-[#D4A84B]/10 p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="font-mono-space text-[#D4A84B]/60 text-[9px] tracking-[3px] uppercase mb-2">Stockist Partnership</p>
              <p className="font-baloo text-white text-lg font-bold leading-snug">अपने क्षेत्र के पहले बजरंगी स्टॉकइस्ट बनें।</p>
            </div>
            <a
              id="challenge-stockist-cta"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bajrangi stockist banna chahta hoon।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-[#D4A84B] font-mono-space text-[10px] tracking-[3px] uppercase border-b border-[#D4A84B]/40 hover:border-[#D4A84B] transition-colors pb-1 w-fit mt-6"
            >
              WhatsApp register →
            </a>
          </div>
        </div>
        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-end">
          <span className="font-mono-space text-[#D4A84B]/40 text-[10px] tracking-[3px] uppercase">
            Campaign Strategy: Aditya Kanthy's Kirana Trust
          </span>
        </div>
      </SectionWrapper>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent" />
    </section>
  )
}
