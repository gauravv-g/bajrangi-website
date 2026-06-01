import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(
  waNumber: string,
  nameHi: string,
  nameEn: string,
  size: string,
  variant: string,
  pack: string,
): string {
  const msg = `🙏 Namaste Bajrangi!

Mujhe chahiye:
📦 Product: ${nameHi} (${nameEn})
📐 Size: ${size}
🎨 Variant: ${variant}
🔢 Pack: ${pack}
🔢 Quantity: ___ packet

Mera naam: ___
City / Area: ___

Please confirm on WhatsApp.`
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`
}
