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
              width={180}
              height={58}
              className="object-contain h-12 w-auto mb-4"
            />
            <p className="font-baloo text-white/95 text-2xl md:text-3xl font-extrabold leading-snug">
              मतलब भरोसा।
            </p>
            <p className="font-mono-space text-[#D4A84B]/70 text-xs md:text-sm tracking-[3px] mt-3">
              Jo likha hai — woh hi milega।
            </p>
          </div>

          {/* WhatsApp order CTA */}
          <a
            id="footer-whatsapp-cta"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bajrangi se order karna hai।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C8181A] text-white font-baloo font-bold text-lg px-8 py-4.5 hover:bg-[#b01517] transition-all duration-200 hover:shadow-[0_0_24px_rgba(200,24,26,0.45)] whitespace-nowrap"
          >
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp pe Order Karo
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">

          {/* Col 1 — Company & Corporate Info */}
          <div className="space-y-5">
            <p className="font-mono-space text-[#F5C563] text-xs md:text-sm tracking-[4px] uppercase font-bold mb-4">Corporate Office</p>
            <div className="space-y-4">
              <p className="font-baloo text-white font-extrabold text-xl md:text-2xl">Eshanura Enterprises Private Limited</p>
              
              <p className="font-dm text-white/80 text-base leading-relaxed">
                Manufacturer of eco-friendly, biodegradable, and compostable tableware solutions. Providing sustainable alternatives to single-use plastics.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="font-mono-space text-xs md:text-sm tracking-[1.5px] text-[#F5C563] border border-[#F5C563]/30 px-3.5 py-2 rounded bg-[#FAF3E0]/5 font-semibold">
                  CIN: U17099UP2025PTC214526
                </span>
                <span className="font-mono-space text-xs md:text-sm tracking-[1.5px] text-[#FAF3E0]/70 border border-white/10 px-3.5 py-2 rounded bg-white/5 font-semibold">
                  Startup India
                </span>
                <span className="font-mono-space text-xs md:text-sm tracking-[1.5px] text-[#FAF3E0]/70 border border-white/10 px-3.5 py-2 rounded bg-white/5 font-semibold">
                  MSME Registered
                </span>
                <span className="font-mono-space text-xs md:text-sm tracking-[1.5px] text-[#FAF3E0]/70 border border-white/10 px-3.5 py-2 rounded bg-white/5 font-semibold">
                  GST Compliant
                </span>
              </div>

              <div className="space-y-3.5 pt-2 text-base text-white/90">
                <p className="font-dm leading-relaxed">
                  <span className="text-[#F5C563]/55 block text-xs uppercase tracking-wider font-mono-space font-semibold mb-1">Registered Address</span>
                  908, Hathipur Uttari Seth Ghat Road, Lakhimpur Kheri, Uttar Pradesh - 262701
                </p>
              </div>
            </div>
          </div>

          {/* Col 2 — Contact & Customer Care */}
          <div className="space-y-5">
            <p className="font-mono-space text-[#F5C563] text-xs md:text-sm tracking-[4px] uppercase font-bold mb-4">Contact Info</p>
            <div className="space-y-5 text-base">
              <div>
                <p className="font-mono-space text-white/50 text-xs tracking-[2px] uppercase font-semibold mb-1.5">Phone / WhatsApp</p>
                <a
                  href={`tel:+91${phone}`}
                  className="font-baloo text-white hover:text-[#F5C563] text-2xl md:text-3xl font-extrabold transition-colors"
                >
                  +91 {phone}
                </a>
              </div>
              <div>
                <p className="font-mono-space text-white/50 text-xs tracking-[2px] uppercase font-semibold mb-1.5">Customer Care</p>
                <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
                <a
                  href={`mailto:${email}`}
                  className="font-dm text-lg text-white/90 hover:text-[#F5C563] transition-colors break-all font-medium"
                >
                  {email}
                </a>
                <span dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="font-mono-space text-white/50 text-xs tracking-[2px] uppercase font-semibold mb-1.5">Website</p>
                  <p className="font-dm text-lg text-white/95 font-medium">bajrangi.eshanura.com</p>
                </div>
                <div>
                  <p className="font-mono-space text-white/50 text-xs tracking-[2px] uppercase font-semibold mb-1.5">Instagram</p>
                  <p className="font-dm text-lg text-white/95 font-medium">@bajrangi.eshanura</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Products & Links */}
          <div className="space-y-5">
            <p className="font-mono-space text-[#F5C563] text-xs md:text-sm tracking-[4px] uppercase font-bold mb-4">Products</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-base">
              {[
                'चटनी दोना — 4"',
                'बताशा दोना — 5.5"',
                'समोसा दोना — 6"',
                'समोसा प्लेट — 6"',
                'कटोरा दोना — 7"',
                'कटोरा प्लेट — 7"',
                'बड़ा कटोरा — 8"',
                'सिल्वर थाली — 12"',
              ].map(p => (
                <p key={p} className="font-baloo text-white/75 font-medium text-sm">
                  {p}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Hindi SEO block ── */}
      <div className="border-t border-[#D4A84B]/8 px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-dm text-white/20 text-xs leading-relaxed max-w-3xl">
            बजरंगी — लखीमपुर खीरी, उत्तर प्रदेश से पेपर दोना और प्लेट के थोक विक्रेता। चटनी दोना, बताशा दोना, समोसा दोना, कटोरा दोना, बड़ा कटोरा — Color और Silver वेरिएंट में। किराना थोक ऑर्डर, GST इनवॉइस, मशीन सील पैकेट। Eshanura Enterprises Pvt. Ltd., Startup India, MSME पंजीकृत।
          </p>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-[#D4A84B]/8 px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-white/70 text-base">
            © {year} Eshanura Enterprises Private Limited · Lakhimpur-Kheri, U.P. · All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-white/80 hover:text-[#25D366] text-base transition-colors font-medium"
            >
              WhatsApp
            </a>
            <span className="text-white/20">·</span>
            <a
              href={`tel:+91${phone}`}
              className="font-mono-space text-white/80 hover:text-white text-sm tracking-wide transition-colors font-medium"
            >
              {phone}
            </a>
            <span className="text-white/10">·</span>
            <span className="font-mono-space text-[#F5C563]/60 text-xs md:text-sm tracking-[3px] font-bold">
              मतलब भरोसा
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
