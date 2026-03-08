# Perspectives for preview and presentation

By presenting all in-flight changes together within the real experience, content creators, reviewers, and stakeholders can get a realistic view of what the experience will look like when these changes are published. High-fidelity content previews enable valuable and accurate feedback, validation, and approvals before rolling out updates.

Likewise, ensuring that your "production" or "public" experience or application only presents published content is critical to ensuring that what is presented to your consumers is complete, validated, and approved.

Sanity offers a range of tools and [Perspectives](https://www.sanity.io/docs/content-lake/perspectives) for Content Lake to help you build first-class preview experiences.

> \[!TIP]
> Protip
> This article focuses on preview environments outside the studio. To learn more about the various ways of previewing content changes within Sanity Studio, please visit [this article](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing).

A key feature of composable content is that you can shape data from a variety of independent but interconnected documents into whatever shape is required on the consuming end. For content authored in Sanity Studio, all unpublished changes are tracked in *draft documents* that co-exist with the published version of the same document. With content spread over multiple documents, each with its own publishing state, creating robust preview tooling can become cumbersome.

Perspectives is an out-of-the-box solution that does away with the heavy lifting of creating engaging preview experiences.

> \[!NOTE]
> Defining "published"
> For simplicity, this article assumes that the publish status on the consuming end matches that of the Content Lake. That is, a document that is published in your studio should be visible in the front-end, while unpublished changes in draft documents are what’s most relevant for previewing purposes.

## Content Lake Perspectives

[Perspectives](https://www.sanity.io/docs/content-lake/perspectives) let you run your queries against an alternate "view" of the documents in your dataset. Use the `drafts` perspective to preview what your content would look like if all drafts were published, or set the `published` perspective in your production environment to make sure no unfinished draft content is accidentally made public.

If you use the [Content Releases](https://www.sanity.io/docs/studio/content-releases-configuration) feature, you can also pass a perspective stack to view a custom perspective containing versions of documents across multiple releases.

The perspective is set as a property of the Sanity client configuration or passed as a parameter to the HTTP API query endpoints, allowing you to reuse queries between preview and production environments.

### Best practice

Web applications often use perspectives to retrieve initial server-side or static content.

- In your production environment, queries use the `published` perspective.
- In preview environments, queries use the `drafts` perspective or a perspective stack and are then hydrated with live updates via [Loaders](https://www.sanity.io/docs/visual-editing/fetching-content-for-visual-editing).

```typescript
// Example JS/TS client configuration
import {createClient} from '@sanity/client'

const client = createClient({
  ...config,
  useCdn: false, // must be false for 'drafts'
  perspective: 'drafts', // 'raw' | 'published' | 'drafts' 
})
```

```
// Example using HTTP API
/data/query/production?query=*[]&perspective=drafts
```

### `raw`

The `raw` perspective returns drafts, document versions from releases, and published content for authenticated requests.

> \[!WARNING]
> Gotcha
> Prior to API version `2025-02-19`, `raw` was the default perspective value and returned both published and draft documents.

### `drafts`

When using this perspective, your queries will return as if all draft documents in your dataset were published. This means:

- References to draft documents will be resolved/dereferenced normally, exactly as when dereferencing published documents
- Query results will not be cached in the CDN, ensuring you always get the latest most up-to-date version of in-flight changes
- When using [custom permission resources](https://www.sanity.io/docs/content-lake/roles-concepts), draft documents will be presented only when the user’s permissions grant access to the draft document; otherwise, the published version is presented

### `published`

The default perspective value. When you use this perspective, your queries will operate as if there were no draft or version documents in your dataset.

[Perspectives for Content Lake](https://www.sanity.io/docs/content-lake/perspectives)

[JS/TS Client README](https://github.com/sanity-io/client#readme)

### Release perspectives

The Content Releases feature introduces document versions and allows you to customize the perspective to layer one or more releases in a perspective stack.

Releases take priority from left to right. For example, in the perspective `a,b,c` you would see changes in `a` take priority over `b` and `c`, and changes in `b` take priority over `c`.

```typescript
// Example JS/TS client configuration
import {createClient} from '@sanity/client'

const client = createClient({
  ...config,
  useCdn: false, // must be false for 'release previews'
  perspective: ['a','b','c']
})
```

The `published` perspective is automatically added to the end, so even if a release only contains changes to one document, the response will include all matching published documents in addition to the release changes. You can also append `drafts` to the list to include draft versions.

## Preview tooling

The Perspectives feature alone can enable running independent preview and production environments, but for truly custom, interactive live-as-you-type preview, Sanity also offers powerful tooling for any front end framework and offers guides on the most popular ones.

[Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)

[Guide: Visual Editing with Next.js](https://www.sanity.io/guides/nextjs-app-router-live-preview)

[Guide: Visual Editing with Remix](https://www.sanity.io/guides/remix-run-live-preview)
