# Cheat sheet

> \[!TIP]
> Protip
> Structure Builder can do so much more than the examples on this page show.
> Get a deeper understanding of Structure Builder by reading the [introduction guide](https://www.sanity.io/docs/studio/structure-builder-introduction) and [API Reference documentation](https://www.sanity.io/docs/studio/structure-builder-reference) to configure initial value templates and more.

In order to use these code examples you will need to configure the `structureTool` plugin in your `sanity.config.ts` file like below:

```typescript
// ./sanity.config.ts

import {structure} from './structure'

export default defineConfig({
  // ...all other settings
  plugins: [
    structureTool({ structure }),
    // ...all other plugins
  ],
})
```

## All document schema types

Your imported `structure` configuration should have the following set up at a minimum: A list, with a title, and an array passed into `items()`.

The following examples you will paste into this root-level `items()` method.

```typescript
// ./structure/index.ts

import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list().title('Base').items(
    S.documentTypeListItems() // <= example code goes here
  )
```

### Filtered list of all document schema types

The `documentTypeListItems` method from above will render a list for every document schema type that is registered in the Studio config. Used together with some clever filtering, this method alone will take you a long way in setting up your document type list to your preference.

In the example below, the `siteSettings` document schema type is filtered out, but all other document types would be listed. Then we insert a divider, and finally the `siteSettings` schema document list is manually inserted.

```tsx
// ./structure/index.ts

import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      // list all document types except 'siteSettings'
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'siteSettings',
      ),
      S.divider(),
      // then add the 'sideSettings' type separate
      S.documentTypeListItem('siteSettings').title(
        'Site settings',
      ),
    ])

```

## All documents of a specific type

`documentTypeListItem()` is a “batteries included” method for showing a list of documents of a given type. Works great for showing complete lists of documents with a custom title. A common usage would be wanting to pluralize the type name in the title.

```tsx
S.documentTypeListItem('lesson').title('Lessons')
```

This would be inserted into the `items` method like this:

```typescript
// ./structure/index.ts

import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
	    S.documentTypeListItem('lesson').title('Lessons')
	  ])
```

### A note on more complex examples

As these examples grow more complicated, you may wish to extract them into “helper functions” so they can be more easily be reused.

Also, going forward, assume the example code is to be inserted into the array passed into the root level `items()`, as we will exclude the boilerplate code for brevity.

```typescript
// ./structure/index.ts

import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      // ⬇ From now on, we will just show this bit 
	    S.documentTypeListItem('lesson').title('Lessons')
      // ⬆ Replace this with the example code
	  ])
```

## Filtered lists of documents

To show documents of a single type, with an additional GROQ filter applied, you will first need to create a `listItem` which has a `documentList` as its `child`. The document list must have an API version if it contains a filter.

These lists are “static” because the values being passed into the filter are known ahead of time.

```typescript
S.listItem()
  .title(`English lessons`)
  .child(
    S.documentList()
      .apiVersion('2024-06-01')
      .title(`English lessons`)
      .schemaType('lesson')
      .filter('_type == "lesson" && language == "en"'),
  )
```

You may choose to map over an array of items and use a params method to modify the results of each filtered list.

```tsx
const languages = [
  {id: 'en', title: 'English'},
  {id: 'es', title: 'Spanish'},
]

languages.map((language) =>
  S.listItem()
    .title(`${language.title} lessons`)
    .child(
      S.documentList()
        .apiVersion('2024-06-01')
        .title(`${language.title} lessons`)
        .schemaType('lesson')
        .filter('_type == "lesson" && language == $language')
        .params({language: language.id}),
    )
```

### Dynamic filtered lists of documents

Say you have a document type `post` which has an array of references to the document type `category`.

In the example below are unfiltered document lists to show all documents of those types, and then a top level list of all category documents, but instead of rendering those documents as a child element, the ID of each document is used to create a filtered list of every post type document that has a reference to that category.

```tsx
S.documentTypeListItem('post').title('Posts'),
S.documentTypeListItem('category').title('Categories'),
S.listItem()
  .title('Posts By Category')
  .child(
    S.documentTypeList('category')
      .title('Posts by Category')
      .child((categoryId) =>
        S.documentList()
          .apiVersion('2024-06-01')
          .title('Posts')
          .filter('_type == "post" && $categoryId in categories[]._ref')
          .params({categoryId}),
      ),
  )
```

You may also want to check out this [guide on parent child relationships](https://www.sanity.io/docs/developer-guides/parent-child-taxonomy) for a more complex setup which includes initial value templates so that new documents created within these lists have filtered values preset.

## Grouped and nested document lists

Some document types may not need to be accessed as often and so to reduce visual noise may be better grouped together into a single menu item.

```typescript
S.listItem()
  .title('Website')
  .child(
    S.list()
      .title('Website')
      .items([
        S.documentTypeListItem('siteSettings').title('Site Settings'),
        S.documentTypeListItem('redirects').title('Redirects'),
        S.documentTypeListItem('labels').title('Labels'),
      ]),
  )
```

## Singleton documents

The structure builder is how you create “singleton” documents with a predetermined ID in Sanity Studio. To create an item with the correct icon, and the narrower height which list items have (compared to the taller height of a document item) the code example below wraps the `editor()` method in a list item of its own. It should inherit the correct icon of the document schema type, and when clicked create or edit a document with the provided ID.

```tsx
S.listItem()
  .id('siteSettings')
  .schemaType('siteSettings')
  .title('Site Settings')
  .child(
    S.editor()
      .id('siteSettings')
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )
```

## Custom Structure by user role

The structure configuration contains a second parameter – context – which contains all sorts of valuable information about the current state of the Studio. Including the logged in user and their roles.

In this example, a different set of items is displayed to an Administrator than a user of any other roles.

```typescript
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Base')
    .items(
      context.currentUser?.roles.find((role) => role.name === 'administrator')
        ? [
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('category').title('Categories'),
            S.divider(),
            S.documentTypeListItem('siteSettings').title('Site Settings'),
          ]
        : [
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('category').title('Categories'),
          ],
    )
```
