# Attribute limit

## What is the attribute limit?

The attribute limit determines how many unique combinations of attribute and datatype you can have in your dataset. Depending on what plan your project is on, your limit is one of the following:

- Free: 2k attributes
- Growth: 10k attributes
- Enterprise: Custom # attributes

> \[!WARNING]
> Gotcha
> The attribute limit is a hard technical limit right now. For this reason, we do not currently offer a pay-as-you-go option for extra attributes.

## What counts as an attribute?

As shown above, an attribute is officially defined as *a unique combination of attribute and datatype*. An alternative way to think about them is as the different paths through your content.

Let's take a basic data structure:

```json
{
  "foo": [
    {
      "bar":…,
      "baz":…
    },
    {
      "bar":…,
      "baz":…
    },
    {
      "bat": {
        "bar":…
      }
    }
  ]
}
```

This structure contains six unique paths or attributes:

1. foo -> an array
2. foo\[] -> an object
3. foo\[].bar -> a string
4. foo\[].baz -> a string
5. foo\[].bat -> an object
6. foo\[].bat.bar -> a string

Paths only count towards your attribute limit when they hold actual content. Solely changing your schema definitions will not affect the attribute count. Schema definitions define the structure of your content, a bit like a blueprint defines the structure of a building. Until you add or remove content using the Sanity Studio or the HTTP API, your attribute count will remain unchanged.

Each unique path is counted once, no matter how often it is used. Removing a path from your attribute count requires deleting every piece of content on that path across all documents.

In short, your attribute count:

- goes up when you first add content on a path
- goes down when a path no longer holds any content
- stays the same regardless of whether a path is used once or many times

## Best practices

When structuring your content, there are a few pitfalls to keep in mind to avoid hitting the attribute limit. Although this is not an exhaustive list, following the best practices below should go a long way in keeping your attribute count in check.

### Use arrays for page building

A common use case for Sanity is using structured content for [page building](https://www.sanity.io/docs/developer-guides/how-to-use-structured-content-for-page-building). In setting up a page builder, it may be tempting to use the block content type as the editor gives a lot of flexibility and allows adding any number of custom objects that can then be used inline.

However, a block content field has quite an extensive data structure by default:
• a `blockContent` array, with inside of it:
• `blocks` objects, with inside of them:
• `markDefs` and `children` arrays, with inside of them:
• `span` types, with inside of them:
• a `marks` array and a `text` field

This nested structure is further extended by any custom types you add to it, all with their own unique paths. A block content field with many custom objects may therefore lead to a hefty amount of attributes.

Another issue with this approach is that people sometimes want to use block content fields *inside* of custom objects. This is likely to lead to even more attributes as a result of now having the above structure embedded in the same structure. Moreover, when the exact same block content component is used, allowing this type of nesting basically gives editors the freedom to nest to an arbitrarily deep level, which can then drag a project over the attribute limit.

To avoid any of these challenges and keep the attribute count as low as possible, we recommend using arrays for page building. In addition to fewer attributes, greater control over the exact content structure, and reduced risk of getting into nesting situations, this approach has the added advantage of not having to deal with serializers for complex custom objects.

### Avoid excessive nesting and recursive data structures

Things get worse when subsequently the same block content configuration is used for any block content fields inside the custom objects, so editors can endlessly nest the entire page builder inside itself.

### Focus on meaning, not presentation

Before responsive web made its entrance and people started optimizing for different devices, it was customary to mix content with presentation. A headline could be blue, have font size 24px, line-height 30px, and a bottom padding of 10px. Although it may still be tempting today to offer that same level of control to editors, there are several downsides to this approach. For one, whenever you want to change your front-end's design, editors will have to review all relevant content.

Most importantly for this guide, adding all these presentational attributes is likely to boost your attribute count significantly as they would exist for nearly every piece of content.

Instead of mimicking CSS properties in your schema definitions, we recommend a separation of concerns. Leave the presentational aspects to wherever you implement your content and instead stick to semantics in your content structure - in other words, focus on the *meaning* of your content.

### Beware of multipliers in translation/localization

There is a variety of i18n/l10n approaches out there, some of which have a greater impact on your attribute count than others. For example, one approach suggests wrapping all your fields inside a language object, so you get the following structure:

```json
{
 "de": {
  ...
 }
 "en": {
  ...
 }
}
```

This basically multiplies the number of attributes by the number of languages added, as all fields get duplicated on a language path. Adding more than a few languages this way means trouble.

Instead of duplicating the fields inside a document, thereby creating all these extra paths, a more frugal approach is to duplicate the *document* instead. To differentiate between the different languages and more easily query for them, you can consider adding a (hidden) internationalization field to your document type and/or add the language to the document ID. As you will be reusing the same fields across different documents, adding an extra language no longer affects your attribute count at all.

## What to do if you hit the limit?

If you inadvertently hit the attribute limit on one of your datasets, you will see the following error when opening your Sanity Studio: `Total attribute count exceeds limit`.

### Export your data

Before deleting any content or changing your data structure, we highly recommend running a full export of your dataset to prevent any unintended data loss. To do so, you can run the [dataset export](https://www.sanity.io/docs/content-lake/schema-and-content-migrations) command in your terminal. For example:

`sanity dataset export production production.tar.gz`

### Get unblocked

The first step after exporting your data is to get unblocked so you and other users on your project can work in the studio again. In other words, the challenge is to get back below the attribute limit.

Perhaps there is a heavily nested structure with block content *and* translations that could be optimised. Or maybe you have singletons for different pages that could be folded into a single page type instead to further reduce the number of unique paths.

A final note is that it also helps to remove any unused content from schema revisions. For example, if you used to have a particular document type with a bunch of documents, but later removed that type, or even some fields within a type, make sure to clean up the content so there are no leftovers in the datastore that will count towards the attribute limit.

### Restructure your content

How to restructure your content depends on your content model and is therefore different per project. However, there are a bunch of examples to get you started. Please note that in all cases, it is highly recommended to run a full dataset export \*before \*proceeding.

### Track your progress

To keep an eye on your attribute limit while restructuring your content, you can use this URL: `https://<projectId>.api.sanity.io/v1/data/stats/<datasetName>`

The attribute count is the value of `fields.count.value` and the limit is inside `fields.count.limit`.

## Closing remarks

Although this guide was specifically about the attribute limit, the principles outlined above are best practices that are likely to lead to a more solid, flexible, and future-proof content model in any situation.
