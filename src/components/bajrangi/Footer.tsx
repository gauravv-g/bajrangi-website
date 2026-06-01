import Image from 'next/image'

interface FooterProps {
  whatsappNumber: string
  phone: string
  email: string
  address: string
}

export function Footer({ whatsappNumber, phone, email, address }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-[#D4A84B]/12">

      {/* ── Top band — brand line ── */}
      <div className="border-b border-[#D4A84B]/8 px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">

          <div>
            <Image
              src="/Bajrangi.png"
              alt="बजरंगी"
              width={160}
              height={52}
              className="object-contain h-11 w-auto mb-4"
            />
            <p className="font-baloo text-white/95 text-xl md:text-2xl font-bold leading-snug">
              मतलब भरोसा।
            </p>
            <p className="font-mono-space text-[#D4A84B]/60 text-[11px] tracking-[3px] mt-2">
              Jo likha hai — woh hi milega।
            </p>
          </div>

          {/* WhatsApp order CTA */}
          <a
            id="footer-whatsapp-cta"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bajrangi se order karna hai।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C8181A] text-white font-baloo font-bold text-base px-7 py-3.5 hover:bg-[#b01517] transition-all duration-200 hover:shadow-[0_0_24px_rgba(200,24,26,0.45)] whitespace-nowrap"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp pe Order Karo
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

          {/* Col 1 — Company */}
          <div>
            <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[4px] uppercase mb-5">Company</p>
            <div className="space-y-2">
              <p className="font-baloo text-white font-semibold text-base">Eshanura Enterprises Pvt. Ltd.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Pvt. Ltd.', 'Startup India', 'MSME', 'GST'].map(badge => (
                  <span
                    key={badge}
                    className="font-mono-space text-[8px] tracking-[1px] text-[#D4A84B]/60 border border-[#D4A84B]/15 px-2 py-1"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-2">
                <svg className="w-3 h-3 text-[#D4A84B]/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-dm text-white/65 text-xs leading-relaxed">{address}</p>
              </div>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[4px] uppercase mb-5">Sampark</p>
            <div className="space-y-4">
              <div>
                <p className="font-mono-space text-white/25 text-[9px] tracking-[2px] uppercase mb-1">Phone / WhatsApp</p>
                <a
                  href={`tel:+91${phone}`}
                  className="font-baloo text-white/90 hover:text-[#D4A84B] text-lg font-semibold transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div>
                <p className="font-mono-space text-white/25 text-[9px] tracking-[2px] uppercase mb-1">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="font-dm text-white/75 hover:text-[#D4A84B] text-sm transition-colors break-all"
                >
                  {email}
                </a>
              </div>
              <div>
                <p className="font-mono-space text-white/25 text-[9px] tracking-[2px] uppercase mb-1">Website</p>
                <p className="font-dm text-white/75 text-sm">bajrangi.eshanura.com</p>
              </div>
              <div>
                <p className="font-mono-space text-white/25 text-[9px] tracking-[2px] uppercase mb-1">Instagram</p>
                <p className="font-dm text-white/75 text-sm">@bajrangi.eshanura</p>
              </div>
            </div>
          </div>

          {/* Col 3 — Products */}
          <div>
            <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[4px] uppercase mb-5">Products</p>
            <div className="space-y-2.5">
              {[
                'चटनी दोना — 4"',
                'बताशा दोना — 5.5"',
                'समोसा दोना — 6"',
                'समोसा प्लेट — 6"',
                'कटोरा दोना — 7"',
                'कटोरा प्लेट — 7"',
                'बड़ा कटोरा — 8"',
                'बड़ी प्लेट — 8"',
                'सिल्वर थाली — 12"',
              ].map(p => (
                <p key={p} className="font-baloo text-white/70 text-sm hover:text-white/90 transition-colors cursor-default">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Col 4 — Stockists */}
          <div>
            <p className="font-mono-space text-[#D4A84B]/50 text-[9px] tracking-[4px] uppercase mb-5">Hamare Stockist</p>
            <div className="space-y-5">
              {[
                { name: 'Laxmi Kirana', area: 'Rakehati, Nighasan, Kheri UP' },
                { name: 'Amit Kirana', area: 'Belrayan, Kheri UP' },
                { name: 'SK Samosa', area: 'DC Road, Lakhimpur-Kheri UP' },
              ].map(s => (
                <div key={s.name}>
                  <p className="font-baloo text-white/85 text-sm font-semibold">{s.name}</p>
                  <p className="font-dm text-white/60 text-xs mt-0.5">{s.area}</p>
                </div>
              ))}
              <div className="pt-2 border-t border-[#D4A84B]/10">
                <a
                  href={`https://wa.me/${'+919839436346'}?text=${encodeURIComponent('Bajrangi stockist banna chahta hoon।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-space text-[#D4A84B]/60 text-[9px] tracking-[3px] uppercase hover:text-[#D4A84B] transition-colors"
                >
                  Stockist bano →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-[#D4A84B]/8 px-6 md:px-12 lg:px-20 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-dm text-white/55 text-xs">
            © {year} Eshanura Enterprises Pvt. Ltd. · Lakhimpur-Kheri, U.P. · All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-white/60 hover:text-[#25D366] text-xs transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-white/20">·</span>
            <a
              href={`tel:+91${phone}`}
              className="font-mono-space text-white/60 hover:text-white/80 text-[10px] tracking-wide transition-colors"
            >
              {phone}
            </a>
            <span className="text-white/10">·</span>
            <span className="font-mono-space text-[#D4A84B]/25 text-[9px] tracking-[3px]">
              मतलब भरोसा
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
