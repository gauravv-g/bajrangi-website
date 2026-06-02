import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bajrangi Wholesale — Paper Dona & Plate B2B Supplier | Lakhimpur-Kheri, UP',
  description: 'बजरंगी थोक विक्रेता | Wholesale paper dona & plate supplier in Lakhimpur-Kheri, UP. Half carton / full carton orders. GST invoice. MSME & Startup India registered. WhatsApp: 9839436346.',
  keywords: [
    'paper dona wholesale supplier UP',
    'paper plate wholesale Lakhimpur-Kheri',
    'dona plate B2B supplier Uttar Pradesh',
    'bulk paper dona order',
    'paper dona manufacturer Lakhimpur',
    'disposable plate wholesale dealer UP',
    'पेपर दोना थोक विक्रेता लखीमपुर',
    'कागज दोना थोक उत्तर प्रदेश',
  ],
  openGraph: {
    title: 'Bajrangi Wholesale — Paper Dona & Plate B2B Supplier | Lakhimpur-Kheri, UP',
    description: 'Wholesale paper dona & plate. Half/full carton orders. GST invoice. Lakhimpur-Kheri, UP.',
    url: 'https://bajrangi.eshanura.com/wholesale',
    type: 'website',
  },
}

const WA_NUMBER = '919839436346'
const WA_WHOLESALE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Namaste Bajrangi!\nMain wholesale order karna chahta hoon.\nMera naam: ___\nCity/Area: ___\nShop/Business: ___\nProducts chahiye: ___\nQuantity (half/full carton): ___')}`

const reasons = [
  {
    label: 'GST Invoice',
    desc: 'Har order ke saath pakki invoice. Business record ke liye.',
  },
  {
    label: 'Machine Sealed',
    desc: 'Packet khul ke nahi aata. Jo count likha hai, woh hi milta hai.',
  },
  {
    label: 'Pvt. Ltd. Company',
    desc: 'Eshanura Enterprises Pvt. Ltd. — registered, accountable, real.',
  },
  {
    label: 'Startup India · MSME',
    desc: 'Government registered. CIN: U17099UP2025PTC214526.',
  },
  {
    label: 'Direct from Lakhimpur-Kheri',
    desc: 'No middleman. Factory price. Faster delivery in UP.',
  },
  {
    label: 'Color & Silver Both Available',
    desc: 'Stock dono variants. Apne customers ki demand poori karo.',
  },
]

const products = [
  { nameHi: 'चटनी दोना', nameEn: 'Chutney Dona', size: '4"', pack: '100 pcs', priceColor: 10, priceSilver: 15 },
  { nameHi: 'बताशा दोना', nameEn: 'Batasha Dona', size: '5.5"', pack: '100 pcs', priceColor: 18, priceSilver: 22 },
  { nameHi: 'समोसा दोना', nameEn: 'Samosa Dona', size: '6"', pack: '100 pcs', priceColor: 23, priceSilver: 28 },
  { nameHi: 'कटोरा दोना', nameEn: 'Katora Dona', size: '7"', pack: '50 pcs', priceColor: 20, priceSilver: 23 },
  { nameHi: 'बड़ा कटोरा', nameEn: 'Bada Katora', size: '8"', pack: '50 pcs', priceColor: 23, priceSilver: 27 },
  { nameHi: 'सिल्वर थाली', nameEn: 'Silver Thali', size: '12"', pack: '25 pcs', priceColor: null, priceSilver: null },
]

const stockists = [
  { name: 'Laxmi Kirana', location: 'Rakehati, Nighasan, Kheri UP' },
  { name: 'Amit Kirana', location: 'Belrayan, Kheri UP' },
  { name: 'SK Samosa', location: 'DC Road, Lakhimpur-Kheri UP' },
]

export default function WholesalePage() {
  return (
    <main className="bg-[#FAF3E0] min-h-screen">

      {/* Top bar */}
      <div className="bg-[#C8181A] px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-mono text-xs tracking-widest text-white/90 uppercase hover:text-white transition-colors">
          ← Bajrangi Home
        </Link>
        <span className="font-mono text-xs tracking-widest text-white/90 uppercase">
          9839436346
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">

        {/* Hero block */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[4px] text-[#C8181A] uppercase mb-3">थोक ऑर्डर</p>
          <h1 className="font-['Baloo_2'] font-extrabold text-[#1A0A02] text-4xl md:text-5xl leading-tight mb-5">
            Bajrangi Wholesale<br />
            <span className="text-[#C8181A]">Paper Dona &amp; Plate</span>
          </h1>
          <p className="text-[#2C1A0E]/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Lakhimpur-Kheri se seedha aapke kirana tak. Half carton ya full carton —
            dono chalega. GST invoice milegi. Count guaranteed.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['Startup India', 'MSME', 'GST Registered', 'Pvt. Ltd.'].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-[2px] text-[#D4A84B] border border-[#D4A84B]/30 px-3 py-1.5 rounded-sm uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Why Bajrangi */}
        <section className="mb-14">
          <h2 className="font-['Baloo_2'] font-bold text-[#1A0A02] text-2xl mb-6">
            Bajrangi se wholesale kyun?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r) => (
              <div key={r.label} className="bg-white border border-[#2C1A0E]/08 rounded-lg p-5">
                <div className="w-2 h-2 rounded-full bg-[#C8181A] mb-3" />
                <p className="font-['Baloo_2'] font-bold text-[#1A0A02] text-base mb-1">{r.label}</p>
                <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/55 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products quick reference */}
        <section className="mb-14">
          <h2 className="font-['Baloo_2'] font-bold text-[#1A0A02] text-2xl mb-2">
            Products &amp; Rates
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/50 text-sm mb-6">
            Full price list ke liye{' '}
            <Link href="/price-list" className="text-[#C8181A] hover:underline">
              yahan dekhein →
            </Link>
          </p>
          <div className="space-y-0 rounded-lg border border-[#2C1A0E]/10 overflow-hidden">
            {products.map((p, i) => (
              <div
                key={p.nameEn}
                className={`flex items-center justify-between px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF3E0]'} border-b border-[#2C1A0E]/08 last:border-0`}
              >
                <div>
                  <span className="font-['Baloo_2'] font-bold text-[#1A0A02] text-base">{p.nameHi}</span>
                  <span className="font-mono text-xs text-[#2C1A0E]/40 ml-2">{p.size} · {p.pack}</span>
                </div>
                <div className="flex gap-4 text-right">
                  {p.priceColor && (
                    <div>
                      <p className="font-mono text-[9px] text-[#2C1A0E]/35 uppercase tracking-widest">Color</p>
                      <p className="font-mono font-bold text-[#C8181A]">₹{p.priceColor}</p>
                    </div>
                  )}
                  {p.priceSilver && (
                    <div>
                      <p className="font-mono text-[9px] text-[#2C1A0E]/35 uppercase tracking-widest">Silver</p>
                      <p className="font-mono font-bold text-[#C8181A]">₹{p.priceSilver}</p>
                    </div>
                  )}
                  {!p.priceColor && !p.priceSilver && (
                    <p className="font-mono text-xs text-[#2C1A0E]/35">WhatsApp pe poochein</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to order */}
        <section className="mb-14">
          <h2 className="font-['Baloo_2'] font-bold text-[#1A0A02] text-2xl mb-6">Order Kaise Karein?</h2>
          <div className="space-y-4">
            {[
              { step: '1', text: 'Neeche diye WhatsApp button pe tap karein.' },
              { step: '2', text: 'Apna naam, city, product aur quantity bhejein.' },
              { step: '3', text: 'Hum rate confirm karenge aur delivery details share karenge.' },
              { step: '4', text: 'GST invoice ke saath order dispatch hoga.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-[#C8181A] text-white font-mono font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {s.step}
                </span>
                <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/70 text-base pt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA block */}
        <div className="bg-[#1A0A02] rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div>
            <p className="font-['Baloo_2'] font-extrabold text-white text-2xl md:text-3xl mb-1">
              Wholesale Order Karo
            </p>
            <p className="font-['DM_Sans',sans-serif] text-white/55 text-sm">
              Half carton ya full carton. GST invoice guaranteed.
            </p>
            <p className="font-mono text-[#D4A84B] text-sm mt-2 tracking-wider">9839436346</p>
          </div>
          <a
            id="wholesale-whatsapp-cta"
            href={WA_WHOLESALE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8181A] text-white font-['Baloo_2'] font-bold text-lg px-8 py-4 hover:bg-[#A01214] transition-colors whitespace-nowrap flex-shrink-0"
          >
            WhatsApp pe Order Karo
          </a>
        </div>

        {/* Stockists */}
        <section className="mb-14">
          <h2 className="font-['Baloo_2'] font-bold text-[#1A0A02] text-2xl mb-2">
            Current Stockists
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/50 text-sm mb-6">
            Yeh hamare verified stockists hain. Inse bhi mil sakta hai Bajrangi.
          </p>
          <div className="space-y-0 rounded-lg border border-[#2C1A0E]/10 overflow-hidden">
            {stockists.map((s, i) => (
              <div
                key={s.name}
                className={`flex items-center justify-between px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF3E0]'} border-b border-[#2C1A0E]/08 last:border-0`}
              >
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[#1A0A02] text-base">{s.name}</span>
                <span className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/50 text-sm text-right">{s.location}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hindi SEO paragraph */}
        <div className="pt-10 border-t border-[#2C1A0E]/10">
          <h2 className="font-['Baloo_2'] font-bold text-[#1A0A02] text-xl mb-4">
            लखीमपुर खीरी में पेपर दोना थोक विक्रेता — बजरंगी
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/55 text-base leading-relaxed max-w-3xl">
            बजरंगी, एशनुरा एंटरप्राइजेज प्राइवेट लिमिटेड का एक ब्रांड है, जो लखीमपुर खीरी, उत्तर प्रदेश से पेपर दोना
            और प्लेट का थोक विक्रय करता है। हम किराना स्टोर, हलवाई, कैटरर्स और इवेंट सप्लायर्स को
            Color और Silver दोनों वेरिएंट में उपलब्ध कराते हैं। हर पैकेट में पूरी गिनती की गारंटी,
            जीएसटी इनवॉइस के साथ। Startup India और MSME पंजीकृत कंपनी।
            थोक ऑर्डर के लिए व्हाट्सऐप करें: 9839436346.
          </p>
        </div>

      </div>
    </main>
  )
}
