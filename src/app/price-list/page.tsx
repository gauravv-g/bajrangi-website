import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bajrangi Price List 2025 — Paper Dona & Plate Wholesale Price | Lakhimpur-Kheri, UP',
  description: 'बजरंगी पेपर दोना प्लेट का थोक मूल्य सूची 2025। Chutney Dona ₹10/100 से शुरू। Color & Silver variants. GST invoice. Wholesale order: 9839436346.',
  keywords: [
    'bajrangi price list',
    'paper dona price list 2025',
    'paper dona wholesale price UP',
    'silver dona price per piece',
    'chutney dona 4 inch price',
    'katora dona 7 inch price',
    'paper plate wholesale price Lakhimpur-Kheri',
    'dona plate rate list',
    'डोना प्लेट मूल्य सूची',
  ],
  openGraph: {
    title: 'Bajrangi Price List 2025 — Paper Dona & Plate Wholesale',
    description: 'Full wholesale price list for all Bajrangi paper dona and plate products. Color & Silver variants. GST invoice.',
    url: 'https://bajrangi.eshanura.com/price-list',
    type: 'website',
  },
}

const products = [
  {
    nameHi: 'चटनी दोना',
    nameEn: 'Chutney Dona',
    size: '4"',
    pack: '100 pcs',
    priceColor: 10,
    priceSilver: 15,
    use: 'Chutney, pickle, prasad',
  },
  {
    nameHi: 'बताशा दोना',
    nameEn: 'Batasha Dona',
    size: '5.5"',
    pack: '100 pcs',
    priceColor: 18,
    priceSilver: 22,
    use: 'Batasha, mithai, puja',
  },
  {
    nameHi: 'समोसा दोना',
    nameEn: 'Samosa Dona',
    size: '6"',
    pack: '100 pcs',
    priceColor: 23,
    priceSilver: 28,
    use: 'Samosa, kachori, snacks',
  },
  {
    nameHi: 'समोसा प्लेट',
    nameEn: 'Samosa Plate',
    size: '6"',
    pack: '50 pcs',
    priceColor: null,
    priceSilver: 28,
    use: 'Flat serving, events',
  },
  {
    nameHi: 'कटोरा दोना',
    nameEn: 'Katora Dona',
    size: '7"',
    pack: '50 pcs',
    priceColor: 20,
    priceSilver: 23,
    use: 'Dal, sabzi, curry',
  },
  {
    nameHi: 'कटोरा प्लेट',
    nameEn: 'Katora Plate',
    size: '7"',
    pack: '50 pcs',
    priceColor: null,
    priceSilver: 23,
    use: 'Full meal, events',
  },
  {
    nameHi: 'बड़ा कटोरा',
    nameEn: 'Bada Katora',
    size: '8"',
    pack: '50 pcs',
    priceColor: 23,
    priceSilver: 27,
    use: 'Langar, bhandara',
  },
  {
    nameHi: 'बड़ी प्लेट',
    nameEn: 'Bada Plate',
    size: '8"',
    pack: '50 pcs',
    priceColor: null,
    priceSilver: 27,
    use: 'Wedding, bhoj',
  },
  {
    nameHi: 'सिल्वर थाली',
    nameEn: 'Silver Thali',
    size: '12"',
    pack: '25 pcs',
    priceColor: null,
    priceSilver: null,
    use: 'Catering, festive meals',
  },
]

const WA_NUMBER = '919839436346'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Namaste Bajrangi!\nPrice list dekha. Order karna hai.\nMera naam: ___\nCity: ___\nProduct: ___\nQuantity: ___ packet')}`

export default function PriceListPage() {
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

        {/* Page heading */}
        <div className="mb-10 md:mb-14">
          <p className="font-mono text-xs tracking-[4px] text-[#C8181A] uppercase mb-3">थोक मूल्य सूची</p>
          <h1 className="font-['Baloo_2'] font-extrabold text-[#1A0A02] text-4xl md:text-5xl leading-tight mb-4">
            Bajrangi Price List — 2025
          </h1>
          <p className="text-[#2C1A0E]/60 text-base md:text-lg max-w-xl">
            Paper Dona &amp; Plate wholesale rates. All prices per pack. GST invoice on every order.
            Machine-sealed — count guaranteed.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-[#2C1A0E]/10 mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1A0A02] text-[#F5EDD8]">
                <th className="text-left px-5 py-4 font-['Baloo_2'] font-bold text-base">Product</th>
                <th className="text-center px-4 py-4 font-mono text-xs tracking-widest uppercase">Size</th>
                <th className="text-center px-4 py-4 font-mono text-xs tracking-widest uppercase">Pack</th>
                <th className="text-center px-4 py-4 font-['Baloo_2'] font-bold text-base text-[#D4A84B]">Color ₹</th>
                <th className="text-center px-4 py-4 font-['Baloo_2'] font-bold text-base text-[#D4A84B]">Silver ₹</th>
                <th className="text-left px-5 py-4 font-mono text-xs tracking-widest uppercase text-[#F5EDD8]/60">Best For</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={p.nameEn}
                  className={`border-t border-[#2C1A0E]/08 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF3E0]'} hover:bg-[#C8181A]/4 transition-colors`}
                >
                  <td className="px-5 py-4">
                    <span className="font-['Baloo_2'] font-bold text-[#1A0A02] text-base block">{p.nameHi}</span>
                    <span className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/50 text-xs">{p.nameEn}</span>
                  </td>
                  <td className="text-center px-4 py-4 font-mono text-sm text-[#2C1A0E]/70">{p.size}</td>
                  <td className="text-center px-4 py-4 font-mono text-sm text-[#2C1A0E]/70">{p.pack}</td>
                  <td className="text-center px-4 py-4">
                    {p.priceColor ? (
                      <div>
                        <span className="font-mono font-bold text-[#C8181A] text-lg">₹{p.priceColor}</span>
                        <span className="block font-mono text-[10px] text-[#2C1A0E]/40">
                          ₹{(p.priceColor / parseInt(p.pack)).toFixed(2)}/pc
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#2C1A0E]/25 font-mono text-xs">—</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-4">
                    {p.priceSilver ? (
                      <div>
                        <span className="font-mono font-bold text-[#C8181A] text-lg">₹{p.priceSilver}</span>
                        <span className="block font-mono text-[10px] text-[#2C1A0E]/40">
                          ₹{(p.priceSilver / parseInt(p.pack)).toFixed(2)}/pc
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#2C1A0E]/25 font-mono text-xs">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 font-['DM_Sans',sans-serif] text-[#2C1A0E]/55 text-sm">{p.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4 mb-10">
          {products.map((p) => (
            <div key={p.nameEn} className="bg-white rounded-lg border border-[#2C1A0E]/10 p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-['Baloo_2'] font-bold text-[#1A0A02] text-lg">{p.nameHi}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/50 text-xs">{p.nameEn}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-[#2C1A0E]/50 block">{p.size}</span>
                  <span className="font-mono text-xs text-[#2C1A0E]/50 block">{p.pack}</span>
                </div>
              </div>
              <div className="flex gap-4 border-t border-[#2C1A0E]/08 pt-3">
                {p.priceColor && (
                  <div>
                    <p className="font-mono text-[10px] text-[#2C1A0E]/40 uppercase tracking-widest mb-0.5">Color</p>
                    <p className="font-mono font-bold text-[#C8181A] text-xl">₹{p.priceColor}</p>
                    <p className="font-mono text-[9px] text-[#2C1A0E]/35">₹{(p.priceColor / parseInt(p.pack)).toFixed(2)}/pc</p>
                  </div>
                )}
                {p.priceSilver && (
                  <div>
                    <p className="font-mono text-[10px] text-[#2C1A0E]/40 uppercase tracking-widest mb-0.5">Silver</p>
                    <p className="font-mono font-bold text-[#C8181A] text-xl">₹{p.priceSilver}</p>
                    <p className="font-mono text-[9px] text-[#2C1A0E]/35">₹{(p.priceSilver / parseInt(p.pack)).toFixed(2)}/pc</p>
                  </div>
                )}
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/45 text-xs mt-2">{p.use}</p>
            </div>
          ))}
        </div>

        {/* Notes block */}
        <div className="bg-[#1A0A02] rounded-lg px-6 md:px-8 py-6 mb-10 space-y-2">
          {[
            'Minimum order: Half carton ya full carton.',
            'GST invoice milegi — har order ke saath.',
            '100 pcs wale packet mein poore 100. 50 pcs wale mein poore 50. Gin ke dekho.',
            'Color variant mein printed design hota hai. Silver mein silver coating.',
          ].map((note) => (
            <p key={note} className="font-['DM_Sans',sans-serif] text-[#F5EDD8]/65 text-sm flex gap-3">
              <span className="text-[#C8181A] flex-shrink-0 mt-0.5">·</span>
              {note}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a
            id="price-list-whatsapp-cta"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8181A] text-white font-['Baloo_2'] font-bold text-lg px-8 py-4 hover:bg-[#A01214] transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp pe Order Karo
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-[#2C1A0E]/25 text-[#2C1A0E] font-['Baloo_2'] font-bold text-base px-6 py-4 hover:border-[#C8181A]/50 hover:bg-[#C8181A]/4 transition-colors"
          >
            Products Dekhein →
          </Link>
        </div>

        {/* Hindi SEO paragraph */}
        <div className="mt-16 pt-10 border-t border-[#2C1A0E]/10">
          <h2 className="font-['Baloo_2'] font-bold text-[#1A0A02] text-xl mb-4">
            बजरंगी पेपर दोना और प्लेट — थोक मूल्य, लखीमपुर खीरी, उत्तर प्रदेश
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#2C1A0E]/60 text-base leading-relaxed max-w-3xl">
            बजरंगी द्वारा एशनुरा एंटरप्राइजेज प्राइवेट लिमिटेड, लखीमपुर खीरी — उत्तर प्रदेश के प्रमुख पेपर दोना और प्लेट थोक विक्रेता।
            चटनी दोना, बताशा दोना, समोसा दोना, कटोरा दोना, बड़ा कटोरा — सभी Color और Silver वेरिएंट में उपलब्ध।
            हर पैकेट में पूरी गिनती, मशीन सील, जीएसटी इनवॉइस के साथ।
            थोक ऑर्डर के लिए व्हाट्सऐप करें: 9839436346.
          </p>
        </div>

      </div>
    </main>
  )
}
