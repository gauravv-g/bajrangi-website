import { getProducts, getSettings } from '@/sanity/queries'
import { SEED_PRODUCTS, SEED_SETTINGS } from '@/lib/seed-data'
import { Navbar }             from '@/components/bajrangi/Navbar'
import { HeroSection }        from '@/components/bajrangi/HeroSection'
import { ManifestoBar }       from '@/components/bajrangi/ManifestoBar'
import { ThreeTruths }        from '@/components/bajrangi/ThreeTruths'
import { ProductsSection }    from '@/components/bajrangi/ProductsSection'
import { ChallengeSection }   from '@/components/bajrangi/ChallengeSection'
import { Footer }             from '@/components/bajrangi/Footer'
import { GoldDivider }        from '@/components/bajrangi/GoldDivider'
import { FloatingActions }    from '@/components/bajrangi/FloatingActions'

export const revalidate = 60

export default async function Home() {
  const [productsRaw, settingsRaw] = await Promise.all([
    getProducts(),
    getSettings(),
  ])

  const products = productsRaw?.length ? productsRaw : SEED_PRODUCTS
  const settings = settingsRaw ?? SEED_SETTINGS
  const wa      = settings.whatsappNumber ?? SEED_SETTINGS.whatsappNumber
  const ph      = settings.phone          ?? SEED_SETTINGS.phone
  const em      = settings.email          ?? SEED_SETTINGS.email
  const addr    = settings.address        ?? SEED_SETTINGS.address

  return (
    <main className="pb-14 md:pb-0">
      <Navbar
        whatsappNumber={wa}
        phone={ph}
      />

      {/* 1 — Brand */}
      <HeroSection
        tagline={settings.heroTagline ?? SEED_SETTINGS.heroTagline}
        promise={settings.heroPromise  ?? SEED_SETTINGS.heroPromise}
        whatsappNumber={wa}
      />

      {/* 2 — The declaration */}
      <ManifestoBar />

      {/* 3 — Bajrangi kyon? The three proofs */}
      <GoldDivider />
      <ThreeTruths />

      {/* 4 — Products */}
      <GoldDivider />
      <ProductsSection
        products={products}
        whatsappNumber={wa}
      />

      {/* 5 — The challenge, the reframe, the kirana identity */}
      <GoldDivider />
      <ChallengeSection
        whatsappNumber={wa}
        phone={ph}
      />

      {/* 6 — Footer: brand + company + contact + stockists */}
      <Footer
        whatsappNumber={wa}
        phone={ph}
        email={em}
        address={addr}
      />

      <FloatingActions
        whatsappNumber={wa}
        phone={ph}
      />
    </main>
  )
}
