# Scalable navigation patterns

Designing a navigation in a structured content system like Sanity is different from what you might be used to in monolithic CMS platforms. Instead of dragging menu items around in a theme editor, you're building a flexible, scalable content model that supports both the site today and what it might grow into. This guide walks you through a simple approach to structuring navigation in Sanity, whether you're working with straightforward links or building out a more complex menu.

## Why model navigation in Sanity?

When you use Sanity to manage navigation, you get a few key benefits:

- \*\*Structured Content: \*\*Your links are just data. You can reference them, reuse them, and change how they're rendered without changing the data.
- **Editor-friendly:** Once set up, editors can manage the nav without asking developers for help.
- **Keeps things in sync:** If you reference a page in the nav, and the slug changes, it updates everywhere—automatically. No more broken links.

## Start simple: a basic navigation model

Here's a lightweight schema for a simple navigation menu. It supports:

- Internal links (references to pages)
- External links (plain URLs)

**navbar.ts**

```
import { defineType, defineField, defineArrayMember } from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Site Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Links',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
            }),
            defineField({
              name: 'link',
              type: 'array',
              validation: (rule) => rule.max(1).required(),
              of: [
                {
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal Link',
                  fields: [
                    { 
                      name: 'internalReference',
                      type: 'reference',
                      to: [
                        { type: 'page' },
                        { type: 'product' },
                        { type: 'blogPost' }
                      ],
                    },
                  ],
                },
                {
                  name: 'externalLink',
                  type: 'object',
                  title: 'External Link',
                  fields: [
                    { name: 'url', type: 'url' },
                  ],
                },
              ],
            }),
            defineField({
              name: 'openInNewTab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
})
```

This model gives editors the ability to manage links easily, and gives you the data shape you need on the frontend.

What you will get is something like this:

![a screenshot of a simple navigation page](https://cdn.sanity.io/images/3do82whm/next/71dd6fc3fc56d96c1bd3b9d55b17b9e151f8bce3-954x587.png)

## Want to support grouped links? (A lightweight mega menu)

A mega menu is a large dropdown that displays multiple columns of organized links instead of a simple list — think of those wide navigation dropdowns you see on e-commerce and SaaS sites with sections like Resources, Products, Company, etc.

Here's a simple add-on model to enable that.

**nav-column.ts**

```
import { defineType, defineField, defineArrayMember } from 'sanity'

export const megaMenuColumn = defineType({
  name: 'megaMenuColumn',
  title: 'Mega Menu Column',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Links',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'columnLink',
          fields: [
            defineField({
              name: 'linkLabel',
              type: 'string',
              title: 'Link Label',
            }),
            defineField({
              name: 'link',
              type: 'array',
              validation: (rule) => rule.max(1).required(),
              of: [
                {
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal Link',
                  fields: [
                    { 
                      name: 'internalReference',
                      type: 'reference',
                      to: [
                        { type: 'page' },
                        { type: 'product' },
                        { type: 'blogPost' }
                      ],
                    },
                  ],
                },
                {
                  name: 'externalLink',
                  type: 'object',
                  title: 'External Link',
                  fields: [
                    { name: 'url', type: 'url' },
                  ],
                },
              ],
            }),
            defineField({
              name: 'openInNewTab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
})
```

The interface in studio would look like this:

![a screenshot of a page that says navigation label](https://cdn.sanity.io/images/3do82whm/next/064732a2e3ae336f35f2ad7c366174473759431c-928x749.png)

You could then embed this `megaMenuColumn` in a top-level `navigation` document like this:

**navbar.ts**

```
import { defineType, defineField, defineArrayMember } from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Site Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Links',
      of: [
        defineField({
          name: 'items',
          type: 'array',
          of: [
            { type: 'navItem' },
            { type: 'megaMenuColumn'},
          ],
        })
      ],
    }),
  ],
})
```

This allows a navigation to mix simple links and grouped mega menu columns into on flexible array.

## Best practices

#### Use references whenever possible

Referencing internal documents like `page` keeps your links in sync when slugs change. Let your data be the source of truth.

#### Model the content, not the UI

Your schema should reflect the structure of the content itself, not how it's currently rendered in your frontend. This keeps your data flexible and portable, so if your design or framework changes, you're not stuck with a schema built around a previous layout.

#### Make it editor-friendly

Give fields clear names and descriptions. Use previews so editors can see what they're editing at a glance.

#### Reuse structures

Objects like `navItem` or `megaMenuColumn` can be reused in footers, mobile navs, or anywhere else you need links.

## Wrapping up

Navigation is one of the most important systems on your site. With Sanity you can make it flexible for devs and friendly for editors. Start small, model only what you need, and grow from there.

If you're ready to take it further, try:

- Adding localization support for translated navigations
- Including call-to-action buttons, featured items, or media
- Add custom previews for links. Here's an example:

```
preview: {
  select: {
    title: 'title',
    linkType: 'linkType',
  },
  prepare({ title, linkType }) {
    return {
      title,
      subtitle: linkType === 'internal' ? 'Internal link' : 'External link',
    }
  }
}
```

And here is what your users see:

![Image showing preview of a link](https://cdn.sanity.io/images/3do82whm/next/19973e2a51ecc55189c6896d1d07a04a36f69c31-1268x776.png)

But for now? Keep it simple. Keep it structured. Let your content speak for itself.
