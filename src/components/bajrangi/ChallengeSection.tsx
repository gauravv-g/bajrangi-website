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
      className="relative flex flex-col justify-center py-16 md:py-24 border-b border-[#D4A84B]/10 overflow-hidden"
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
      {/* Background ambient red/gold glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 25%, rgba(200,24,26,0.06) 0%, transparent 60%), radial-gradient(ellipse at 50% 75%, rgba(212,168,75,0.04) 0%, transparent 60%)',
        }}
      />

      {/* ── PART 1: The Counting Challenge & The Contrast (Customer Trust) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-6">
          The Guarantee & The Contrast
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column: Bold Challenge copy */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-baloo text-white text-[clamp(32px,4.5vw,56px)] font-bold leading-none tracking-tight">
              बजरंगी का पैकेट उठाओ। <span className="text-[#C8181A]">गिनो।</span>
            </h2>
            <p className="font-baloo text-[#D4A84B] text-[clamp(20px,2.8vw,32px)] font-bold leading-snug">
              अगर एक भी पीस कम निकला — सीधे फ़ोन करो: {phone}
            </p>
            <p className="font-dm text-white/70 text-base leading-relaxed max-w-xl">
              हर पैकेट के अंदर एक मशीन-सील्ड पर्ची होती है। यह गिनती की गवाही है। कोई नहीं देखता इसे बनते हुए, पर वो आपके भरोसे की रक्षा करने के लिए वहाँ मौजूद होती है।
            </p>
            
            <div className="pt-4">
              <a
                id="challenge-whatsapp-cta"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bajrangi se order karna hai।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C8181A] text-white font-baloo font-bold text-base px-8 py-4 hover:bg-[#b01517] transition-all duration-200 hover:shadow-[0_0_24px_rgba(200,24,26,0.4)]"
              >
                WhatsApp pe Order Karo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Contrast Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Market Card */}
            <div className="bg-[#141414] border border-white/5 p-6 rounded-xl">
              <span className="font-mono-space text-white/40 text-[10px] tracking-wider uppercase block mb-2">बाज़ार का सामान्य दोना</span>
              <p className="font-baloo text-white/60 text-lg leading-snug line-through decoration-[#C8181A]/50">
                100 बोलकर बेचेंगे, अंदर सिर्फ 92, 95 या 97 ही निकलेंगे। यह बाज़ार की आम धोखेबाज़ी है।
              </p>
            </div>
            
            {/* Bajrangi Card */}
            <div className="bg-[#141414] border border-[#D4A84B]/20 p-6 rounded-xl relative shadow-md">
              <div className="absolute top-0 right-0 bg-[#C8181A] text-white text-[8px] tracking-[2px] font-mono-space uppercase px-2.5 py-1 rounded-bl-lg rounded-tr-xl">
                100% पक्का
              </div>
              <span className="font-mono-space text-[#D4A84B] text-[10px] tracking-wider uppercase block mb-2">बजरंगी दोना</span>
              <p className="font-baloo text-white text-xl font-bold leading-snug">
                100 का पैकेट लिखा है, तो पूरे 100 ही मिलेंगे। <span className="text-[#D4A84B]">जो लिखा है — वही मिलेगा।</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-between items-center text-[#D4A84B]/40 font-mono-space text-[9px] tracking-[2px] uppercase">
          <span>Matlab Bharosa</span>
          <span>Dare & Contrast Strategy</span>
        </div>
      </SectionWrapper>

      {/* ── PART 2: The Kirana Strategy & Stockist Partnership (Business Trust) ── */}
      <SectionWrapper>
        <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[5px] uppercase mb-6">
          The Strategy & Partnership
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Kirana Trust explanation */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="font-baloo text-white text-2xl md:text-3xl font-bold leading-tight">
              किराना की साख (Reputation) ही उसकी असली पूँजी है।
            </h3>
            <p className="font-dm text-white/75 text-sm md:text-base leading-relaxed">
              जब कोई थोक विक्रेता या फ़ैक्टरी पैकेट में 5 पीस कम देती है, तो ग्राहक कंपनी को नहीं जानता; वह आपके ऊपर से भरोसा उठाता है। बजरंगी आपके उस भरोसे की रक्षा करता है।
            </p>
            <p className="font-baloo text-[#D4A84B] text-lg font-bold italic">
              &ldquo;यह दोने की बात नहीं है। यह उस इंसान की बात है जिसने आपके लिए गिना।&rdquo;
            </p>
          </div>

          {/* Right Column: Premium Gold-bordered B2B Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#D4A84B]/20 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Subtle glow behind B2B Card */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#D4A84B]/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-3">
              <span className="font-mono-space text-[#D4A84B] text-[10px] tracking-[3px] uppercase block">Exclusive Partnership</span>
              <h4 className="font-baloo text-white text-xl font-bold leading-snug">अपने क्षेत्र के पहले बजरंगी स्टॉकइस्ट बनें।</h4>
              <p className="font-dm text-white/60 text-xs leading-relaxed">
                बजरंगी की 100% पक्की गिनती की साख को अपने क्षेत्र के किराना नेटवर्क तक पहुँचाएँ और प्रीमियम मार्जिन कमाएँ।
              </p>
            </div>
            
            <div className="mt-8">
              <a
                id="challenge-stockist-cta"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bajrangi stockist banna chahta hoon।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#1A0800] border border-[#D4A84B]/30 hover:border-[#D4A84B] text-[#D4A84B] font-mono-space text-[10px] tracking-[3px] uppercase py-3.5 rounded-lg shadow-sm transition-all duration-300 hover:bg-[#D4A84B]/5"
              >
                WhatsApp Register &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#D4A84B]/10 flex justify-between items-center text-[#D4A84B]/40 font-mono-space text-[9px] tracking-[2px] uppercase">
          <span>Kirana Trust Network</span>
          <span>B2B Stockist Strategy</span>
        </div>
      </SectionWrapper>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent" />
    </section>
  )
}
