# Introduction

Sanity gives Next.js developers a structured content backend with real-time collaboration, a customizable editing environment, and APIs designed for modern React patterns. Whether you're building a marketing site, a documentation platform, or a full-scale web application, Sanity provides the content infrastructure while Next.js handles rendering and routing.

## Get started

- [Quickstart](https://www.sanity.io/docs/next-js-quickstart): get a working Next.js + Sanity project running in minutes.
- [Learn course](https://www.sanity.io/learn/track/work-ready-next-js): build a full content-driven application from scratch with video walkthroughs.
- [Starter template](https://www.sanity.io/templates/nextjs-sanity-clean): clone a preconfigured project with Sanity Studio, Visual Editing, and live content already wired up.

## The next-sanity toolkit

`next-sanity` is the official integration package for Next.js. Rather than piecing together `@sanity/client`, `@sanity/visual-editing`, and framework-specific glue code, it gives you a single dependency with exports designed for Next.js patterns like Server Components, the App Router data cache, and Draft Mode.

Install it inside an existing Next.js project:

**Terminal**

```sh
npx sanity@latest init
```

This detects your Next.js project and scaffolds the configuration files, a configured Sanity client, and an optional embedded Studio route. For manual installation or full configuration options, see [Configuring the Sanity client for Next.js](https://www.sanity.io/docs/nextjs/configure-sanity-client-nextjs).

The package includes:

- **Sanity Client** (`createClient`): a Sanity client configured for Next.js `fetch` caching.
- **Live Content API** (`defineLive`, `SanityLive`): real-time content updates and automatic cache revalidation.
- **Visual Editing** (`VisualEditing`, `defineEnableDraftMode`): click-to-edit overlays for draft content in the Presentation Tool.
- **Embedded Studio** (`NextStudio`): mount Sanity Studio as a route in your Next.js app.
- **GROQ utilities** (`defineQuery`, `groq`): query helpers with [TypeGen](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen) support and syntax highlighting.
- **Webhook validation** (`parseBody`): secure webhook signature validation for revalidation handlers.
- **Portable Text**: re-export of `@portabletext/react` for rendering rich text.
- **Image URL**: companion `@sanity/image-url` package for CDN image transformations.

## Key features

### Visual Editing + Live Content API

Visual Editing lets content editors click directly on rendered content in the Presentation Tool to open the corresponding field in the Studio. It uses stega encoding to invisibly map rendered text back to its source document and field, creating a seamless editing workflow.

The Live Content API (`defineLive`) gives your application real-time content updates and automatic cache revalidation. Content editors see changes reflected on the live site within seconds of publishing, without manual cache busting or webhook configuration. This is the recommended approach for most Next.js applications.

#### Add Visual Editing and Live Content

Follow our integration guide to update your existing app to use Visual Editing and Live Content, or spin up a new Next.js app and Studio to get started.
[Get started](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router)

### Caching and revalidation

For applications that need fine-grained control over caching (or don't use the Live Content API), Sanity integrates with Next.js data caching through time-based, tag-based, and path-based revalidation strategies. Webhook handlers validate incoming payloads and trigger cache invalidation when content changes.

[Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs)

[Validating Sanity webhooks in Next.js](https://www.sanity.io/docs/nextjs/validating-sanity-webhooks-nextjs)

### Embedded Studio

The [recommended path is to deploy your studio to Sanity](https://www.sanity.io/docs/studio/deployment), but you can also mount Sanity Studio as a route inside your Next.js application using the `NextStudio` component. This means your content editing environment lives at a path like `/studio` in the same deployment as your frontend, with no separate hosting required. See our guide on [embedding Studio in a Next.js app](https://www.sanity.io/docs/nextjs/embedding-sanity-studio-in-nextjs).

## Next steps

- [Next.js App Router quickstart](https://www.sanity.io/docs/next-js-quickstart): Get started with Next.js and Sanity.
- [Configure the Sanity client for Next.js](https://www.sanity.io/docs/nextjs/configure-sanity-client-nextjs): client setup, environment variables, `useCdn`, tokens, GROQ queries, and fetching patterns.
- [Visual Editing with Next.js App Router](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router): enable click-to-edit overlays, live preview, and more in the Presentation Tool.
- [Add live content to your application](https://www.sanity.io/docs/developer-guides/live-content-guide): set up `defineLive` for automatic caching and real-time updates.
