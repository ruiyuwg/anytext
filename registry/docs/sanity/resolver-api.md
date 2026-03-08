# Resolver API

The Presentation tool lets you add affordances to open a document and its preview quickly. This is done by adding configuration to `resolve.mainDocuments` and `resolve.locations` where you define what content goes into a specific route.

Main Document Resolvers lets you express the most important document for any given route. Moreover, the Locations Resolvers lets you define patterns for other routes that content from any given document might be used.

[Configuring the Presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool)

## Main Document Resolvers

The Main Document Resolver API provides a method of resolving a main document from a given route or route pattern.

Often, a route in an application will be closely tied to a document in Content Lake. For instance, a blog post will likely draw most of its content from a single post document. We could describe this as the "main" document for that post route.

```tsx
// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {defineDocuments, presentationTool} from 'sanity/presentation'

export default defineConfig({
  /* ... */
  plugins: [
    presentationTool({
      /* ... */
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/posts/:slug',
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
      },
    }),
    structureTool(),
  ],
})

```

When a main document is defined, Presentation will automatically display it when navigating to the matching route in our application.

The `resolve.mainDocuments` property of Presentation tool’s configuration accepts an array of objects, each with a route pattern and method for resolving a document. This can be a document `type`, an object with a GROQ `filter` and optional `params`, or a `resolve` function that returns one.

Internally, when Presentation detects a navigation event, it will compare the current URL against one of these resolver methods. The first matching document will be considered the main document, and be automatically displayed as the navigation occurs.

```tsx
// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {defineDocuments, presentationTool} from 'sanity/presentation'

export default defineConfig({
  /* ... */
  plugins: [
    presentationTool({
      /* ... */
      resolve: {
        mainDocuments: defineDocuments([
          // Document type, useful shorthand for singleton documents.
          {
            route: '/products',
            type: 'productsListing',
          },
          // GROQ filter with static parameters.
          {
            route: '/products/a-unique-product',
            filter: `_type == "product" && slug.current == $slug`,
            params: {slug: 'has-a-different-slug'},
          },
          // GROQ filter, infer the parameters from the route definition.
          {
            route: '/products/:slug',
            filter: `_type == "product" && slug.current == $slug`,
          },
          // Resolve function for more complex cases, for example modifying the slug.
          {
            route: '/pages/:type/:slug',
            resolve(ctx) {
              const {params} = ctx
              return {
                filter: `_type == $type && slug.current == $slug}`,
                params: {
                  type: params.type,
                  slug: params.slug.replaceAll('_', '-'),
                },
              }
            },
          },
          // Supports both array and absolute URL route definitions
          {
            route: ['https://sanity.io/:slug', 'https://sanity.studio/:slug'],
            filter: `_type == "page" && slug.current == $slug`,
          },
        ]),
      },
    }),
    structureTool(),
  ],
})

```

> \[!TIP]
> Protip
> `defineDocuments()` is an optional helper function for TypeScript users. You can provide an array directly if you don't need type safety.

The paths of each `route` value are parsed using [path-to-regexp](https://github.com/pillarjs/path-to-regexp) to extract the parameters.

If an origin is provided, it will **not** be parsed for parameters, i.e. this will be matched literally: `https://:subdomain.sanity.io`

## Document Locations Resolvers

The Document Locations Resolver API allows you to define *where* data is being used in your application(s).

It gives content editors visibility of the pages that display the content they are editing, and the potential impact of the changes they make.

The `resolve.locations` property of Presentation tool’s configuration accepts an object whose keys each correspond to a document type in your schema. The corresponding value provides a method for resolving document location state.

If you're used to [configuring preview options](https://www.sanity.io/docs/studio/previews-list-views) in your schema, the API will feel familiar.

The `select` object defines the fields that should be returned in the document object passed to the `resolve` function. The `resolve` function itself accepts a document and should return some `DocumentLocationsState`.

Alternatively, you can directly pass `DocumentLocationsState`.

> \[!TIP]
> Protip
> `defineLocations()` is an optional helper function for TypeScript users. You can provide an array directly if you don't need type safety.

```tsx
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {defineLocations, presentationTool} from 'sanity/presentation'

export default defineConfig({
  /* ... */
  plugins: [
    presentationTool({
      /* ... */
      resolve: {
        locations: {
          // Resolve locations using values from the matched document
          product: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: `/products/${doc?.slug}`,
                  icon: EnvelopeIcon,  // Custom icon (optional)
                  showHref: false,     // Show/hide URL (default: true)
                },
                {
                  title: 'Products',
                  href: '/products',
                },
              ],
            }),
          }),
          // Define static locations
          productListing: defineLocations({
            select: {title: 'title'},
            resolve: () => ({
              locations: [
                { title: 'Products', href: '/products'},
              ]
            })
          }),
          // Provide a notice when a document is used across all pages
          siteSettings: defineLocations({
            message: 'This document is used on all pages',
            tone: 'caution',
          }),
        },
      },
    }),
    structureTool(),
  ],
})

```

### Advanced Location Resolvers

The above pattern should cover the vast majority of uses cases. However if you need more fine grained control, `resolve.locations` also accepts a `DocumentLocationResolver` function.

In most cases, you will call `context.documentStore.listenQuery` with a GROQ query that returns the queried documents as an Observable.

We recommend installing `rxjs` as a dependency in your Studio project to make it easier to interact with the Observable object returned from `listenQuery`. You can also add `@sanity/id-utils` to make capturing the draft and/or version IDs easier.

```sh
npm install rxjs @sanity/id-utils
```

```tsx
// locations.ts
import {DocumentLocationResolver} from 'sanity/presentation'
import {getDraftId} from '@sanity/id-utils'
import {map} from 'rxjs'

// Pass 'context' as the second argument
export const locations: DocumentLocationResolver = (params, context) => {
  // Set up locations for post documents
  if (params.type === 'post') {
    const query = {
      fetch: `*[_id==$id][0]{slug,title}`,
      listen: `*[_id in [$id,$draftId]]`,
    }
    const queryParams = {id: params.id, draftId: getDraftId(params.id)}
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      query,
      queryParams,
      {perspective: 'drafts'}, // returns a draft article if it exists
    )
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null
        }
        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/post/${doc.slug.current}`,
            },
            {
              title: 'Posts',
              href: '/',
            },
          ],
        }
      }),
    )
  }
  return null
}


```

![A screenshot from the Studio's content form showing a list of locations where a product document is being used.](https://cdn.sanity.io/images/3do82whm/next/d0b2ee5c27abfcd1f3837386110c2439df2c15e7-560x406.png)

The locate callback property is a resolver that takes a document `id` and `type` parameters, and returns a state object that contains the locations that can be previewed for a given document.

We recommend containing the Document Location Resolver in a dedicated file to reduce clutter in your Studio configuration file. In the example above, it's exported as a named JavaScript variable so it can be imported to the studio configuration file like this:

```typescript
// sanity.config.ts
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {locations} from './locations'
// ...other imports


export default defineConfig({
  // ...configuration for the project

  plugins: [
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      resolve: {
        locations
      }
    }),
    // ...other plugins
  ],
})
```

### Show all locations where a document is being used

Typically, with structured content, content from a document might be used in multiple locations by [means of references](https://www.sanity.io/docs/studio/connected-content). With GROQ, you can query for all documents that refer to a specific document ([or use other join logic](https://www.sanity.io/docs/specifications/groq-joins)) and use that to build a list of locations for where a document is being used.

Below is an example showing how to build a list of locations for a "person" document that is being referred to by a "post" document as its author:

```typescript
// locations.ts
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from 'sanity/presentation'
import { map, Observable } from 'rxjs'

export const locations: DocumentLocationResolver = (params, context) => {
  if (params.type === 'post' || params.type === 'person') {
    /* 
      Listen to all changes in the selected document 
      and all documents that reference it
    */
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{_type,slug,title, name}`,
      params,
      { perspective: 'previewDrafts' },
    ) as Observable<
      | {
          _type: string
          slug?: { current: string }
          title?: string | null
          name?: string | null
        }[]
      | null
    >
    // pipe the real-time results to RXJS's map function
    return doc$.pipe(
      map((docs) => {
        if (!docs) {
          return {
            message: 'Unable to map document type to locations',
            tone: 'critical',
          } satisfies DocumentLocationsState
        }
        // Generate all the locations for person documents
        const personLocations = docs
          .filter(({ _type, slug }) => _type === 'person' && slug?.current)
          .map(({ name, slug }) => ({
            title: name || 'Name missing',
            href: `/authors/${slug.current}`,
          }))

        // Generate all the locations for post documents
        const postLocations: Array<any> = docs
          .filter(({ _type, slug }) => _type === 'post' && slug?.current)
          .map(({ title, slug }) => ({
            title: title || 'Name missing',
            href: `/posts/${slug.current}`,
          }))

        return {
          locations: [
            ...personLocations,
            ...postLocations,
            // Add a link to the "All posts" page when there are post documents
            postLocations.length > 0 && {
              title: 'All posts',
              href: '/posts',
            },
            // Add a link to the "All authors" page when there are person documents
            personLocations.length > 0 && {
              title: 'All authors',
              href: '/authors',
            },
          ].filter(Boolean),
        } satisfies DocumentLocationsState
      }),
    )
  }

  return null
}
```

## Document Location Resolver Reference

In addition to the example above, the Document Location Resolver can return customized top-level messages and visual cues:

#### Properties

| Property | Description |
| --- | --- |
| message | Override the top-level text in the document locations UI. Useful if you want to customize the string (replace "pages") or display warnings.

Default value: Used on ${number} pages

Examples:

Unable to resolve locations for this document

Used in ${docs.length} email campaign${docs.length === 1 ?? 's'} |
| tone | Gives the document locations UI a background color. It can be used to signal criticality.

Default: positive |
| locations | An array of document locations objects with title and href properties. The href can be absolute or relative and will open in the Presentation tool. |

# useOptimistic hook

The [useOptimistic](https://reference.sanity.io/_sanity/visual-editing/react/useOptimistic/) hook uses a local document store to enable developers to opt-in to instant updates for specific content. UI can be updated with the anticipated result of a mutation, avoiding the delay required when submitting and refetching data from Content Lake.

It's primarily used for enabling drag and drop functionality for Visual Editing. You can learn more about how to use it in [the Drag and drop documentation](https://www.sanity.io/docs/visual-editing/enabling-drag-and-drop).

## `useOptimistic`

| Method | Description |
| --- | --- |
| useOptimistic(passthrough, reducer): void | Returns

When no mutations are pending, the hook returns the original passthrough value.

When mutations are pending, it returns the optimistically updated state as determined by the reducers.

In production, the useOptimistic is a no-op and will always return the passthrough value. |
| Reducers(state, action): void | A reducer function or array of reducers that determine how the state should be updated in response to optimistic mutations. |

Reducer actions

Here is the signature for the `action` parameter for reducers:

#### Properties

| Property | Description |
| --- | --- |
| document | The document that was updated |
| id | The published document ID (the same as the \_id) |
| originalId | The original document ID |
| type | The type of action occurring (only mutate is currently supported) |
