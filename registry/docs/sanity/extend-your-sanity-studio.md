### Extend your Sanity Studio

We'll be creating 2 new content types for our studio, `post` and `marketingCampaign`. The `post` content type resembles something like a typical post and you could easily repurpose existing content types to suit your needs. Our two functions below use these two content types and could be tweaked as needed.

**documents/post.ts**

```
import {defineField, defineType} from 'sanity'
import {BasketIcon, ImageIcon} from '@sanity/icons'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        },
        {
          name: 'products',
          type: 'object',
          title: 'Products',
          icon: BasketIcon,
          fields: [
            {name: 'products', type: 'array', of: [{type: 'reference', to: [{type: 'product'}]}]},
          ],
          preview: {
            select: {
              products: 'products',
            },
            prepare(selection: any) {
              const {products} = selection
              return {
                title: 'Products',
                subtitle: `${products.length} products`,
              }
            },
          },
        },
        {
          type: 'image',
          icon: ImageIcon,
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'In Progress', value: 'inprogress'},
          {title: 'Ready for Review', value: 'ready-for-review'},
          {title: 'Ready', value: 'ready'},
          {title: 'Sent', value: 'sent'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
      initialValue: 'inprogress',
    }),
    defineField({
      name: 'marketingCampaign',
      title: 'Marketing Campaign',
      type: 'reference',
      to: [{type: 'marketingCampaign'}],
      weak: true,
    }),
    defineField({
      name: 'klaviyoListId',
      title: 'Klaviyo List ID',
      type: 'string',
      description: 'Optional: Override the default Klaviyo list ID for this post',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      media: 'body.0.asset',
    },
    prepare(selection: any) {
      const {title, status, media} = selection
      return {
        title: title || 'Untitled Post',
        subtitle: status ? `Status: ${status}` : 'No status',
        media: media,
      }
    },
  },
})

```

**documents/marketingCampaign.ts**

```
import {defineField, defineType} from 'sanity'

export const marketingCampaignType = defineType({
  name: 'marketingCampaign',
  title: 'Marketing Campaign',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'post',
      title: 'Post Content',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Ready (will trigger Klaviyo Send)', value: 'ready'},
          {title: 'Sent', value: 'sent'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
      initialValue: 'draft',
    }),
    defineField({
      name: 'klaviyoTemplateId',
      title: 'Klaviyo Template ID',
      type: 'string',
      description: 'The template ID from Klaviyo',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'klaviyoCampaignId',
      title: 'Klaviyo Campaign ID',
      type: 'string',
      description: 'The campaign ID from Klaviyo',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'A description of this marketing campaign',
    }),
  ],
})

```
