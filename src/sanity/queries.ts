import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export function urlFor(source: SanityImageSource) {
  if (!client) return { url: () => '' } as ReturnType<ReturnType<typeof imageUrlBuilder>['image']>
  return imageUrlBuilder(client).image(source)
}

export async function getProducts() {
  if (!client) return null
  try {
    return await client.fetch(`
      *[_type == "product"] | order(order asc) {
        _id,
        nameHi,
        nameEn,
        size,
        pack,
        variants,
        bestFor,
        image,
        priceColor,
        priceSilver,
      }
    `)
  } catch {
    return null
  }
}

export async function getSettings() {
  if (!client) return null
  try {
    return await client.fetch(`*[_type == "settings"][0]`)
  } catch {
    return null
  }
}
