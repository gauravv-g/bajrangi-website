'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

interface NavbarProps {
  whatsappNumber: string
  phone: string
}

export function Navbar({ whatsappNumber, phone }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Products',     href: '/#products' },
    { label: 'Bajrangi Kyun?', href: '/#truths' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/95 shadow-[0_1px_0_rgba(212,168,75,0.12)]'
          : 'bg-[#0C0C0C]'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <div className={`max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-22'}`}>

        {/* Logo */}
        <a href="/#hero" className="flex items-center shrink-0">
          <Image
            src="/Bajrangi.png"
            alt="बजरंगी"
            width={240}
            height={76}
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-9 md:h-10' : 'h-13 md:h-15'} w-auto`}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm text-sm text-white/60 hover:text-[#D4A84B] tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:+91${phone}`}
            className="flex items-center gap-1.5 text-white/40 hover:text-white/70 font-mono-space text-xs tracking-wide transition-colors"
          >
            <Phone className="w-3 h-3" />
            {phone}
          </a>
          <a
            id="nav-order-cta"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8181A] hover:bg-[#b01517] text-white font-baloo font-bold text-sm px-5 py-2.5 transition-all duration-200 hover:shadow-[0_0_20px_rgba(200,24,26,0.4)]"
          >
            Order Karein
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70 p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C0C0C] border-t border-[#D4A84B]/10 px-5 pb-6 pt-2">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-dm text-white/70 py-3.5 border-b border-white/5 hover:text-[#D4A84B] transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-5">
            <a
              href={`tel:+91${phone}`}
              className="flex-1 border border-white/15 text-white/70 font-baloo text-sm py-3 text-center transition-colors hover:border-white/30"
            >
              📞 {phone}
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#C8181A] text-white font-baloo font-bold text-sm py-3 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
