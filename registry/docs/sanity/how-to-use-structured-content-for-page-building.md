# How to use structured content for page building

> \[!NOTE]
> This developer guide was contributed by Knut Melvær (Head of Developer Community and Education), Simeon Griggs (Principal Educator), and Irina Blumenfeld (Solution Architect @ Sanity).

You can use structured content to make landing page builders that will be useful beyond your next redesign. This guide shows you the basics of page building, and offers advice for dealing with presentation-related concerns.

> \[!TIP]
> Building with Next.js? We have a complete course on Sanity Learn covering why and [how to implement a page builder](https://www.sanity.io/learn/course/page-building) within an application. Check it out!

Sanity can be used to manage things like **landing page builders**: they give editors enough control over page composition to get their message across using content modules, *without* breaking layout.

In this guide, you’ll find suggestions for how to create content modules for page builders that should nicely translate to a component-based frontend framework or design system.

> \[!TIP]
> While page builders can be a very handy approach to content creation, it's worth asking yourself if a page builder is what you actually need. You can also arrive at compelling combinations of content and presentation by sourcing content from from various places using simple rules in your frontend.

## Why you should model for meaning, not presentation

The goal of structured content is to make sure that your content stays resilient, adaptable, and easy to integrate wherever you need it. That’s why you should generally make content models that reflect your content's meaning rather than how it is presented. Because different presentation contexts (even within the same medium) come with different constraints: what makes sense on the web might not make sense in an app, and so on.

This guide makes no assumptions about presentation: no colors, floats, etc. While it might be tempting to add these, we think it best to leave those kinds of concerns to your code. They can add complexity to the implementation and to the things editors need to keep track of.

Think about your next redesign. Would you rather:

- Start with clean content that you can apply to a new channel or design?
- Or, have to untangle your core content from a lot of presentation-related stuff that only made sense to your last design?

We find that modeling for meaning leads to better workflows and more durable content.

> \[!TIP]
> The rest of this guide involves a basic knowledge of schema building with Sanity.io. If you’ve never made one before, take a 3 minute detour to [learn the basics of schema configuration](https://www.sanity.io/guides/how-to-configure-schemas), and/or keep our [schema docs](https://www.sanity.io/docs/studio/schema-types) open as a reference .

## Set up a page builder

The page builder is typically an [array of custom object or reference types](https://www.sanity.io/docs/studio/array-type) that can be reordered. It's the container for all your building blocks. With Sanity, there are no pre-built blocks for you to use, but it's fast and easy to make what you need.

If you use **objects**, the content is easier to query but trapped within the document.

If you use **references**, the content can be reused between documents, and your queries must resolve them.

![Page Builder Array](https://cdn.sanity.io/images/3do82whm/next/f4dbdbbb570744a0b9c561ff745dbc877eb7c282-1765x1367.png)

Let's add some blocks you’d expect to see on a typical landing page:

- **Hero**: for your boldest statements
- **Text + illustration**: when words aren’t enough
- **Call to action**: a reference to a "promotion" document
- **Gallery**: for eye candy 🍬
- **Form**: newsletter signups, contact, etc
- **Video**: for your latest promo clip or live stream recording

Now let's bring them to life in a bare-bones [document](https://www.sanity.io/docs/studio/document-type) type called `page`:

```typescript
// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          to: [{type: 'promotion'}],
        }),
        // etc...
      ],
    }),
  ],
})
```

All the fields within the `pageBuilder` array are selectable types that authors can build with. The custom types named here are not yet [registered to the schema](https://www.sanity.io/help/schema-lift-anonymous-object-type) and will need to be created. As well as the "promotion" document type used by the `callToAction` [reference](https://www.sanity.io/docs/studio/reference-type) field.

## Modeling the content blocks

### Hero

Let's setup `heroType.ts` as an [object](https://www.sanity.io/docs/studio/object-type) type so that it can be reused elsewhere in our schema if we need it. We’ll add fields for `heading`, `tagline`, and an `image`.

```typescript
// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})
```

We enabled the hotspot option for art direction in the image field and added a simple string field for \*\*alternative text. **Alt-text** \*\*provides a text-based alternative to non-text content (like images) on web pages. Among other things, it helps vision-impaired people understand the meaning of your images.

> \[!TIP]
> You may consider enforcing the existence of alt-text by applying [validation](https://www.sanity.io/docs/studio/validation) to this field.

Those fields will look like this in your Sanity Studio:

![Sanity user interface for a hero block content module](https://cdn.sanity.io/images/3do82whm/next/d0b1baf14a4800d8227eb894408b10492c42faf4-1600x1677.png)

### Text with illustration

This object looks a lot like our hero, except we’ve added a field called `excerpt` to store multiline [text](https://www.sanity.io/docs/studio/text-type) content.

```typescript
// ./schemas/textWithIllustration.js

import {defineField, defineType} from 'sanity'

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})
```

> \[!TIP]
> If you need more than plain text you could use the [block content type](https://www.sanity.io/configuration) to include things like **bold**, *italics*, etc.

![Sanity user interface for Text with Illustration page builder content module](https://cdn.sanity.io/images/3do82whm/next/cd500c37fafd4311e0ee22503ee82d85b28120a4-1605x1930.png)

### Image gallery

When you strip away all the presentation concerns, a gallery is just a sortable list of images. Normally the array type presents a vertically draggable list, but if you set it to `grid` it will do look like the example above. Here's how you do it:

```typescript
// imageGallery.js

import {defineField, defineType} from 'sanity'

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
})
```

![Sanity array of images using grid layout option.](https://cdn.sanity.io/images/3do82whm/next/0a56402ddf83f5ad1e5a96d2bac0603abb9de868-1602x882.png)

### Form

Forms come in many different shapes and sizes. In order to preserve the durability of our content structure beyond the next redesign, all we really need to do is declare the kind of form we want to embed in our page builder array. Here's an example presenting 3 variations for `newsletter`, `register`, and `contact` form types:

```typescript
// ./schemas/formType.js

import {defineField, defineType} from 'sanity'

export const formType = defineType({
  name: 'form',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
})
```

![Sanity user interface for a basic form field](https://cdn.sanity.io/images/3do82whm/next/880f0d6b312dd140fb2ced17829c1c2e0806f791-1602x1112.png)

You can then use frontend code to provide varying presentations of your forms depending on the page context, and the type of form you selected.

### Video

If you strip away presentation-based thinking, a video object can be modeled in the same way as our **call to action** object:

- a [URL](https://www.sanity.io/docs/studio/url-type) field to define the resource location of your video file
- a `string` field for the video's label

```typescript
// ./schemas/videoType.js

import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
})
```

![Sanity user interface for video content module.](https://cdn.sanity.io/images/3do82whm/next/b041bc7cc2474493f07b5fee59e771b4e6571483-1600x742.png)

### Call to action

The call to action field inside the pageBuilder is a reference to a new document type. Using references opens up the potential to re-use content across multiple pages – or have those references be pages of their own.

For this we'll need to create a new document type:

```typescript
// ./schemas/promotionType.ts

import {defineField, defineType} from 'sanity'

export const promotionType = defineType({
  name: 'promotion',
  type: 'document',
  title: 'Promotion',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})
```

![Sanity user interface for creating a new document from a reference field](https://cdn.sanity.io/images/3do82whm/next/77a2de7989ebef1851c96cbb1d59e76bcd8e57da-2518x1186.png)

## Register new types to your schema

With these new schema files created, ensure they're registered to your Studio's schema by loading them into the `schemaTypes` array of your `sanity.config.ts`

```typescript
// ./schemas/index.ts

import {callToActionType} from './callToActionType'
import {formType} from './formType'
import {heroType} from './heroType'
import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videoType} from './videoType'

export const schemaTypes = [
  pageType,
  heroType,
  callToActionType,
  textWithIllustrationType,
  imageGalleryType,
  formType,
  videoType,
]
```

### Improved UI with custom item previews

You now have an interface for content creators to build new layouts from predetermined "blocks". This authoring experience is currently lacking some flair and the individual blocks are difficult to differentiate.

In any object or document schema type, the [preview key can be customized](https://www.sanity.io/docs/studio/previews-list-views) so that the items can contain an icon or image and more contextual information about themselves.

Revisiting the schema in `heroType.ts`, customize the icon and preview keys to improve the user interface for creating new Hero items and viewing existing Hero items in an array.

```typescript
// ./schemas/heroType.ts

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  // ... existing configuration
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    },
  },
})

```

Repeat this for all custom object types and documents. Once complete, the page builder array should look something more like this:

![Page builder array with customized object previews](https://cdn.sanity.io/images/3do82whm/next/02be99ec767c2d77d25d6d75ee368929f341411c-1420x1161.png)

### Add groups and create a grid layout

Now let’s add the options object to our `pageBuilder` array to create a grid layout, and add an [insertMenu](https://www.sanity.io/docs/studio/array-type) to separate the modules into groups, such as Landing Page, Promotions and Black Friday.

```typescript
  options: {
    layout: 'grid',
    insertMenu: {
      filter: true,
      groups: [
        {
          name: 'landing',
          title: 'Landing Page',
          of: ['hero', 'promotion', 'form'],
        },
        {
          name: 'promotions',
          title: 'Promotions',
          of: ['gallery', 'video', 'promotion'],
        },
        {
          name: 'blackFriday',
          title: 'Black Friday',
          of: ['textWithIllustration', 'gallery', 'video'],
        }
      ],
      views: [
        {name: 'list'},
        {name: 'grid', 
          previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.jpg`
        }
      ]
    }
  },
```

Groups allow faster findability of related modules for a specific purpose.

[Filter](https://www.sanity.io/docs/studio/array-type) makes it easier to search for modules if there is a long list.

[Views](https://www.sanity.io/docs/studio/array-type) allow you to toggle between list and grid options with optional preview images for each type. If the optional preview image is not defined, the icon associated with the respective schema type will be displayed.

![Array with page building blocks separated into groups](https://cdn.sanity.io/images/3do82whm/next/c7f62b5dc3c20b7212a8efa1952ee5f4655604e7-1720x1421.png)

![Array with page building blocks inside "Black Friday" Group](https://cdn.sanity.io/images/3do82whm/next/21b1f5abfcb0deca287f670a91a22a01a899faf8-1773x1857.png)

![Toggle Grid View Icon](https://cdn.sanity.io/images/3do82whm/next/1639bcc6c181e0f15bc4714539cb2b87538f74cf-1827x1849.png)

If you toggle grid view, you will see the following view that includes the preview image for each block.

If the optional preview image is not defined inside the `pageBuilder` array schema, the icon associated with the respective schema type will be displayed.

![Page Builder Array with Preview Images](https://cdn.sanity.io/images/3do82whm/next/274182b1446b1cf06f90df2ce8c8f00699611243-1451x1221.png)

Much better for both creating and reading!

## Use your front end for flexible presentations

Because we avoided embedding presentation concerns in our page builder, you can now present that content in many ways in front end code. For example, perhaps your `hero` item renders its `heading` field as an` <h1>` if it is the first item in the array; otherwise, as an `<h2>` with a different layout.

It's possible to present those fields in countless ways without compromising the content's meaning.

### Querying the page builder array with GROQ

When querying an array of objects with GROQ you may need to resolve different fields – and resolve references – from different types. To do this, you can use the shorthand form of [GROQ's select() function](https://www.sanity.io/docs/specifications/groq-functions) to create a unique [projection](https://www.sanity.io/docs/content-lake/how-queries-work) for each unique type in the array.

```groq
*[_type == "page"]{
  pageBuilder[]{
    // "hero" in an "object" from which we can "pick" fields
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
    // "callToAction" is a "reference"
    // We can resolve "itself" with the @ operator
    _type == "callToAction" => @-> {
      _type,
      title,
      link
    }
    // ...continue for each unique "_type"
  },
}
```

## What we have learned

We've learned the basics of modeling a page builder with Sanity.io. We've primed the pump with a few common builder modules that you can alter or extended to fulfill the unique needs of your project.

Along the way, we made a case for keeping presentation-related concerns out of your content models. Content editing will be less complicated, and code maintenance will be easier, and your next redesign budget will thank you for it!

## Page building demo

The example code in this guide can be found in [this example Sanity Studio](https://github.com/sanity-io/page-building).

Get started by cloning this repository, using your own project and then render the content into one of [our starter templates](https://www.sanity.io/templates).
