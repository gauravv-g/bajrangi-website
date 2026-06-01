import { defineField, defineType } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Product / उत्पाद',
  type: 'document',
  fields: [
    defineField({
      name: 'nameHi',
      title: 'Hindi Name / हिंदी नाम',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'English Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size (e.g. 6")',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pack',
      title: 'Pack Size (e.g. 100 pcs)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'variants',
      title: 'Available Variants',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Color', value: 'Color' },
          { title: 'Silver', value: 'Silver' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'string',
      description: 'e.g. Chutney, pickle, small portions',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'priceColor',
      title: 'Price Color Variant (INR)',
      type: 'number',
      description: 'Price for the Color variant packet. Leave empty if Color variant is not available.',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'priceSilver',
      title: 'Price Silver Variant (INR)',
      type: 'number',
      description: 'Price for the Silver variant packet. Leave empty if Silver variant is not available.',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'nameHi',
      subtitle: 'size',
      media: 'image',
    },
  },
})
