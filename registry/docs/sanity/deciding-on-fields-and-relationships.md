# Deciding on fields and relationships

> \[!NOTE]
> This developer guide was contributed by Knut Melvær (Head of Developer Community and Education) and Ronald Aveling (Ronald works with content for Sanity.io).

Content modeling is an art of solving tricky problems. This guide shows you how to work through those dilemmas and build relationships that can stand the test of time.

Our journey to build a content model with Sanity is well and truly underway. We’ve been through the [what](https://www.sanity.io/guides/content-modeling-guide-introduction) and [why](https://www.sanity.io/guides/content-modeling-guide-why), looked at [mental models](https://www.sanity.io/guides/discover-your-contents-mental-model), and built a [foundation in code](https://www.sanity.io/guides/implementing-a-content-model-in-sanity-io) that we can use with real content. Here’s what we’ve made so far:

![CandiCorp content mode diagram showing category and article content types as complete.](https://cdn.sanity.io/images/3do82whm/next/c8ca35878b252527c7552cd7c3fb0bc0eb0b35f8-1866x1173.png)

We have the basics in place for categories and articles, but there’s more to be done. Let’s dive back in...

## Set up subscriptions

> \[!NOTE]
> **TODO:**
>
> - Provide *small* and *large* subscription plans.
> - Let subscription issues include different product variations (size, flavor, etc) every month.
>   **Note:**
>   For the purposes of this demo, product variations exist on CandiCorp’s PIM platform but are accessible in Sanity Studio (thanks to the “magic” of APIs). It’s possible to build out *all* these functionalities in Sanity, but we chose to include 3rd party services because:
> - Modeling product variations, subscribers, and payment fields would require another chapter.
> - API integrations are an advantage of headless content platforms worth highlighting.

We could build a fixed array of subscription plans containing the small and large sizes we need. But using a document type is better in this case as it lets CandiCorp add more plans (including discounts and limited offers) later on.

```javascript
// schemas/documents/subscriptionPlan.js

export default {
  title: 'Subscription plan',
  name: 'subscriptionPlan',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        auto: true
      }
    },
    {
      title: 'Active?',
      name: 'active',
      type: 'boolean',
      // in case we retire old plans
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
      // visible on the frontend when subscribers sign up
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      // pricing info, sent to Stripe for payments
      validation: Rule => Rule.required().positive().precision(2)
      // ensures a value is added before publishing
      // forces the input to be a positive number with 2 decimal places
    }
  ]
}
```

Subscription issues need lists of different products, but they also need a quantity associated with each product listing. Let's bind quantities to products with a new `productSelect` object:

```javascript
// schemas/objects/productSelect.js

export default {
  title: 'Product select',
  name: 'productSelect',
  type: 'object',
  fields: [
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [{type: 'product'}]
      // ✨ Sanity Studio magically displays a list of active products from the PIM via API integration ✨ 
      // Learn more at https://youtu.be/AaKfuhndEf8
    },
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
      validation: Rule => Rule.required().positive().integer()
    },
  ]
}
```

> \[!TIP]
> The [object](https://www.sanity.io/docs/studio/object-type) type is used to define custom content types that have fields including strings, numbers, arrays, and other object types.

Now we can reference that object in the `subscriptionIssue` document type:

```javascript
// schemas/documents/subscriptionIssue.js

export default {
  title: 'Subscription issue',
  name: 'subscriptionIssue',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Ship date',
      name: 'shipDate',
      type: 'date',
      // the month the subscription is shipped in
    },
    {
      title: 'Plan type',
      name: 'planType',
      type: 'reference',
      to: [
        {type: 'subscriptionPlan'},
        // add a single plan only
      ]
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'productSelect',
          // add many product/quantity combinations
        }
      ]
    },
  ]
}
```

## Build an organization

> \[!NOTE]
> **TODO:**
>
> - An easy-to-manage staff directory with contact info.
> - Include *role* and *department* details for each member of staff.
> - Credit staff members who write articles.
>   **Nice to have:**
> - An organizational chart generated from staff and department data.

Our original mental model includes the *staff members* as a type. But can we say that all article authors will be staff members? Hard to know for certain. Let’s leave room for other possibilities and change this type to a `person`.

We can throw in some [boolean](https://www.sanity.io/docs/studio/boolean-type) fields to declare if our person is a *staff member* or *author* so we can filter based on the status of those fields when referencing person records within other documents.

```javascript
// schemas/documents/person.js

export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [
    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
    },
    {
      title: 'Last Name',
      name: 'lastName',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
    {
      title: 'Staff member?',
      name: 'staff',
      type: 'boolean',
    },
    {
      title: 'Author?',
      name: 'author',
      type: 'boolean',
      // makes it easy to reference only people who are authors in article documents
    },
    {
      title: 'Role',
      name: 'role',
      type: 'reference',
      to: [
        {type: 'role'},
      ]
    },
    {
      title: 'Department',
      name: 'department',
      type: 'reference',
      to: [
        {type: 'department'},
      ]
    }
  ]
}
```

Roles and departments can be basic document types with a `title` and `slug` to start out. References to role and department can be left empty if the person is not a staff member.

In order to produce an organizational chart from structured content, we’ll need to add hierarchical relationships between different departments. We’ll tackle that in [the next chapter](https://www.sanity.io/guides/hierarchies-graphs-navigation).

> \[!TIP]
> **It’s OK to change your mind**
> Don’t be concerned by the way we changed *staff members* to *people*. Iteration is an essential part of a healthy content modeling process.
> When you’re asking lots of questions and entertaining many possibilities you’re doing it right. Every choice comes with consequences and constraints, and your first idea for how to solve a problem may not be the best. So don’t let your initial hunch get in the way of exploring things from every angle.
> These dilemmas come with the territory, and you should expect to encounter lots of them. We’re all operating with built-in biases and incomplete perspectives. So embrace the questions, have an open mind to different points of view, and trust in the process.

## Connect people to publications

> \[!NOTE]
> **TODO:**
>
> - Category references ✅
> - Author references
> - Implement rich text field
> - References to products and other articles within rich-text

Our [first iteration of the Article type](https://www.sanity.io/guides/implementing-a-content-model-in-sanity-io#917f053e1e1d) needs more fields. Articles are handy in lots of places like websites and catalogs, but what about newsletters or for documentation? We don't have a crystal ball, so let's leave wiggle room for our future selves with something flexible.

We can reference authors the same way we did categories, but how do we set up the main article field?

### Wrangling Rich-Text

A big "blob" of Rich Text content lives at the heart of most articles. These fields usually contain headings, bullet lists, etc, and are a home for all the unique stuff you can’t turn into reusable parts. You’re reading rich-text right now, and Sanity’s solution to rich text is called [Portable Text](https://www.sanity.io/blog/why-structured-text-is-awesome-and-you-totally-want-it-in-your-cms). We can add a basic Portable Text instance using the [block](https://www.sanity.io/docs/studio/block-type) type like so:

```javascript
{ title: 'Content', name: 'content', type: 'array', of: [{type: 'block'}] }
```

Portable Text is great because you get to [store rich text as data](https://youtu.be/dt5K6gHGpr0?t=100), but you can also trick it out with custom references and annotations. Let’s do that with a new `portableText` array, add connections to products and articles, and throw an image block in for good measure.

```javascript
// schemas/objects/portableText.js

export default {
  title: 'Rich Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'Quote', value: 'blockquote'},
        // block level styles
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          // add your own decorator
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              }
            ]
            // everybody needs a URL link
          },
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'reference',
            to: [
              {type: 'article'},
              {type: 'product'},
            ],
            // links, but to internal docs
          }
        ]
      }
    },
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [
        {type: 'product'},
      ]
      // product embed
    },
    {
      title: 'Article',
      name: 'article',
      type: 'reference',
      to: [
        {type: 'article'},
      ]
      // article embed
    },
    {
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Alternative text for screen readers.',
        },
      ]
      // image + alt text!
    },
  ]
}

```

Then we can connect it to the article document along with our author refs and some other handy fields:

```javascript
// schemas/documents/article.js

export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        auto: true
      }
    },
    {
      title: 'Publication date',
      name: 'publishDate',
      type: 'date',
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'category'},
          ]
        }
      ]
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
      // handy for content previews
    },
    {
      title: 'Authors',
      name: 'authors',
      type: 'array',
      // an array of refs leaves room for multiple authors
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
          ]
        }
      ]
    },
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
      // rich text on steroids
    },
  ]
}
```

And here it is in action:

> \[!NOTE]
> That `portableText.js` file is no different than a regular field. We can include it in any document we like. Need a version of Portable Text with more or fewer features? Then make a new field with the necessary configuration.

## Create a catalog for print and web

> \[!NOTE]
> **TODO:**
>
> - Eliminate layout concerns from the catalog authoring process to allow for print and web versions.
> - Include articles in the catalog.
> - Increase the frequency of editions.

Let’s create a new document type called `catalog`. We’ll need the basics of `title` , `slug`, and an `image` field for print and digital covers. A **content builder** will handle the main content assembly. In Sanity Studio, a content builder is an [array](https://www.sanity.io/docs/studio/array-type) of items.

> \[!TIP]
> If you’re new to content builders, [read this guide](https://www.sanity.io/docs/developer-guides/how-to-use-structured-content-for-page-building) to learn more about them and why you should model them based on what they mean, not how they should look.

We want articles and products for sure. Adding single articles to the content builder makes sense, but adding products one at a time would be far too time-consuming. Grouping is required.

If we make categories available in the content builder we reuse a product grouping mechanism that‘s already in place. We also get the added benefit of being able to list articles that share the same category, or not.

If we add a third product grouping option to the builder we can include ad hoc collections of products based on themes that unrelated to categories. Discounted lines and Easter and Halloween bundles come to mind. Let‘s iterate on the mental model to reflect the new thinking and build it

```javascript
// schemas/objects/productGroup.js

export default {
  title: 'Product group',
  name: 'productGroup',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      // useful for editing, and in a table of contents
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      // handy for introducing the group
      // portableText would also work a charm 
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'product'},
          ]
        }
      ]
    }
  ]
}
```

```javascript
// schemas/documents/catalog.js

export default {
  title: 'Catalog',
  name: 'catalog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        auto: true
      }
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date'
    },
    {
      title: 'Content builder',
      name: 'contentBuilder',
      type: 'array',
      of: [
        {
          type: 'productGroup',
        },
        {
          type: 'reference',
          to: [
            {type: 'article'},
            {type: 'category'},
          ]
        }
      ]
    }
  ]
}
```

We now have drag-and-drop curation of large content blocks ready to roll. And because we’ve avoided presentation concerns there’s nothing stopping these catalogs from being formatted for print on demand, or PDF, or responsive web layouts.

## What we made

Here‘s what we achieved with a few schema files and a good measure of critical thinking. That’s quite a foundation!

## What we learned

This guide has taught us a lot about the many ways we can build and connect things with Sanity. But more importantly, it offered a mental framework for reasoning about content dilemmas. Your problems and solutions will no doubt be different and that’s the way it should be. We’ve discovered that are no hard rules or bulletproof solutions, just compromises that strike the balance between today’s needs and tomorrow’s possibilities.

Next up, we’ll wrap our minds around the different ways [we can handle hierarchies and navigation with Sanity](https://www.sanity.io/guides/hierarchies-graphs-navigation).
