import { defineField, defineType } from 'sanity'

export const settingsSchema = defineType({
  name: 'settings',
  title: 'Site Settings / सेटिंग्स',
  type: 'document',
  // Singleton — only one document of this type
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline (below बजरंगी)',
      type: 'string',
      initialValue: 'मतलब भरोसा।',
    }),
    defineField({
      name: 'heroPromise',
      title: 'Hero Promise Line',
      type: 'string',
      initialValue: '100 माने पूरे 100 — गिन के देखो।',
    }),
    defineField({
      name: 'heroBrandLine',
      title: 'Hero Brand Line (italic, quiet)',
      type: 'string',
      initialValue: 'Jo likha hai — woh hi milega।',
    }),
    defineField({
      name: 'storyText',
      title: 'Story / Brand Story',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number (with country code, no +)',
      type: 'string',
      initialValue: '919839436346',
    }),
    defineField({
      name: 'phone',
      title: 'Display Phone Number',
      type: 'string',
      initialValue: '9839436346',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      initialValue: 'care@bajrangi.eshanura.com',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      initialValue: '908, Hathipur-Uttari, Lakhimpur-Kheri (U.P.) 262701, India',
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
