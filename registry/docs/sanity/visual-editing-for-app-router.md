# Visual Editing for App Router

This guide walks through the specific wiring that makes Sanity's visual editing work with a Next.js application.

By the end, editors will be able to open the Presentation Tool in the Studio, see the frontend in a live preview, click on any text element to jump to the corresponding field, and see changes reflected in real time as they type.

**What you'll set up:**

- A Sanity client configured for Content Source Map encoding.
- `defineLive` for real-time content fetching and live updates.
- Draft Mode routes to toggle between published and draft content.
- The Presentation Tool with document-to-URL mapping.
- Click-to-edit overlays powered by `<VisualEditing />`.

The guide assumes you already have document types defined in your Studio and pages that render them. The focus is purely on the integration layer: the files and configuration that connect the two apps.

## Prerequisites

- Node.js 20+.
- Next.js 16.x with the [App Router](https://nextjs.org/docs/app). This guide uses route handlers, `generateStaticParams`, `generateMetadata`, and Draft Mode, all of which are App Router features. It also expects that you’re app uses `next-sanity` v12.1.1 or later.
- A Sanity project with a dataset. [Create one](https://www.sanity.io/manage) if you don't have one.
- [An API token](https://www.sanity.io/docs/content-lake/http-auth) with **Viewer** permissions for that project. Create one under **API** → **Tokens** in your project settings.
- `http://localhost:3000` added as a [CORS origin](https://www.sanity.io/docs/content-lake/browser-security-and-cors) with **Allow credentials** checked.

You can create a basic Next.js app with the following command.

**TERMINAL**

```sh
# In a directory, outside your studio directory
npx create-next-app@latest frontend --tailwind --ts --app --src-dir --eslint --import-alias "@/*" --turbopack
cd frontend
```

You can create a new Studio with the following command.

**TERMINAL**

```sh
pnpm create sanity@latest --dataset production --template clean --typescript --output-path studio
cd studio
```

If you’re setting up a new Next.js app and Studio from scratch, we suggest following our [Next.js quick start](https://www.sanity.io/docs/next-js-quickstart). The schemas, routes, and file layout in this guide follows the structure set up in the quick start.

## How the pieces fit together

Before diving into the code, here's what happens at runtime when an editor opens the Presentation Tool:

1. The Studio loads the Next.js frontend inside an iframe. The URL it loads comes from the `origin` field in the Presentation Tool configuration.
2. The Studio hits the Draft Mode enable route on the frontend (`/api/draft-mode/enable`). This activates Next.js Draft Mode in the iframe session.
3. With Draft Mode active, `sanityFetch` returns strings with invisible characters embedded in them. These characters are Content Source Maps (called "stega") that encode which document and field each string came from, along with the Studio URL.
4. The `<VisualEditing />` component (which only renders during Draft Mode) reads those encoded strings from the DOM and draws click-to-edit overlays on every text element.
5. When an editor clicks an overlay, the Studio navigates to that document and field.
6. When an editor changes a field, the `<SanityLive />` component picks up the mutation and the frontend re-renders with the new content.

> \[!NOTE]
> Contracts between the two apps.
> If you change one side, check the other.
>
> - The Studio's `previewMode.enable` path (`/api/draft-mode/enable`) must match an actual route in the Next.js app.
> - The URLs returned by `resolve.ts` (e.g., `/posts/${slug}`) must match actual routes in `web/src/app/`.
> - The `stega.studioUrl` in the Next.js client must point to the running Studio.
> - The Sanity project must have the frontend's origin in its CORS settings with **Allow credentials** enabled.

## Environment variables

The Next.js app needs three environment variables. The Studio doesn't need any since the project ID and dataset are hardcoded in `sanity.config.ts`, however, you can use [environment variables in Studio](https://www.sanity.io/docs/studio/environment-variables) if you need the flexibility.

**web/.env.local**

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your-viewer-token
```

`NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are public because the Sanity client needs them in the browser for live subscriptions.

`SANITY_API_READ_TOKEN` is server-only and never exposed to the client bundle directly. It's passed to `defineLive`, which handles sharing it with the browser securely when Draft Mode is active.

## Studio setup

These files live in `studio/`. If you’re setting up a new Studio from scratch, these examples use the schema and conventions found in the [Next.js quick start](https://www.sanity.io/docs/next-js-quickstart).

### Presentation Tool configuration

The Presentation Tool is a Studio plugin that renders your frontend inside an iframe and enables the visual editing workflow. Configure it in `sanity.config.ts`:

**studio/sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {resolve} from './src/presentation/resolve'

export default defineConfig({
  name: 'default',
  title: 'Blog Studio',

  projectId: 'your-project-id',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {
        origin: 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
```

The important fields here:

- **resolve**: This defines the document location resolver. You’ll set this up in the next section.
- **previewUrl.origin**: The full URL of the Next.js app. The Presentation Tool loads this in the iframe. When the Studio and frontend are separate apps (as they are here), this is required. If you embedded the Studio inside the Next.js app at `/studio`, the origin would be implicit and you could omit it.
- **previewUrl.previewMode.enable**: The path (relative to `origin`) that the Studio calls to activate Draft Mode. The Studio makes a GET request to `http://localhost:3000/api/draft-mode/enable` with authentication parameters. This is what flips the switch that makes the frontend return draft content with stega encoding.

### Document locations

Document locations tell the Presentation Tool which frontend URLs correspond to which document types. This powers two things: when you select a document in the Studio, the iframe navigates to the right page; and documents show location badges linking to their frontend URLs.

**studio/src/presentation/resolve.ts**

```typescript
import {defineLocations, type PresentationPluginOptions} from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // The key is the document type name from your schema
    post: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/posts/${doc?.slug}`,
          },
          {title: 'All posts', href: '/posts'},
        ],
      }),
    }),
  },
}
```

`select` uses GROQ-like field paths to pull data from the document. `resolve` receives that data and returns an array of `{title, href}` objects. The first location is treated as the primary one. You can add multiple locations if a document appears on several pages (for example, a post appears on its own page and on the posts index).

### CORS

The Sanity project needs `http://localhost:3000` added as a CORS origin with **Allow credentials** enabled. If you already added this in the prerequisites, you're set. If not, add it in your project settings at [sanity.io/manage](https://www.sanity.io/manage) under **API** → **CORS Origins**, or add it with the CLI.

**TERMINAL**

```sh
npx sanity cors add http://localhost:3000 --credentials
```

For production, you'd add your deployed frontend URL as well.

## Next.js setup

These files live in `frontend/`. If you’re setting up a new Next.js project from scratch, these examples use the schema and conventions found in the [Next.js quick start](https://www.sanity.io/docs/next-js-quickstart).

### The Sanity client

**frontend/src/sanity/lib/client.ts**

```typescript
import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
if (!dataset) throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-02-01',
  useCdn: true,
  stega: {
    studioUrl: 'http://localhost:3333',
  },
})
```

Most of this is standard Sanity client setup. The critical field for visual editing is **stega.studioUrl**.

When Draft Mode is active, `sanityFetch` (which we'll set up next) asks the Content Lake for Content Source Maps alongside the query results. It then encodes these source maps as invisible characters into string values.

The `<VisualEditing />` overlay component reads these encoded strings from the DOM to create click-to-edit links. Without `stega.studioUrl`, it has the document and field information but doesn't know where to send the editor. The overlays render but don't connect to anything.

For production, you'd point this to your deployed Studio URL.

### The Live Content API

**frontend/src/sanity/lib/live.ts**

```typescript
import {defineLive} from 'next-sanity/live'
import {client} from './client'

export const {sanityFetch, SanityLive} = defineLive({
  client: client.withConfig({apiVersion: '2026-02-01'}),
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
})
```

`defineLive` is the main integration point between Sanity and Next.js. It returns two things:

- **sanityFetch**: A server-side function you use in page components instead of `client.fetch()`. It handles caching, revalidation, stega encoding, and perspective switching (published vs. draft or version content) automatically based on whether Draft Mode is active.
- **SanityLive**: A React component that subscribes to real-time content updates. When an editor changes a field in the Studio, this component picks up the mutation and triggers a re-render.

The two tokens:

- **serverToken**: Used for server-side fetches. This is what lets `sanityFetch` read draft content when Draft Mode is active. Without it, the frontend can only return published content.
- **browserToken**: Shared with the browser during Draft Mode to enable live subscriptions. This is the token that powers real-time updates. It should have Viewer permissions only since it's exposed to the client.

> \[!NOTE]
> Why have the same token twice?
> While most apps are fine with a shared “Viewer” role token, enterprise customers with custom roles may choose to narrow the read permissions of the browser token further.

### Fetching data in pages

Here's a page component that shows the three different fetch modes you'll use:

**frontend/src/app/posts/\[slug]/page.tsx**

```typescript
import {notFound} from 'next/navigation'
import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'
import {POST_QUERY, POST_SLUGS_QUERY} from '@/sanity/queries'

// Update with your own queries
const POST_QUERY = defineQuery(`
*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    body
  }
`)

const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`)

type Props = {
  params: Promise<{slug: string}>
}

// 1. Static params: published perspective, no stega
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: 'published',
    stega: false,
  })
  return data
}

// 2. Metadata: stega disabled to keep invisible characters out of <title>
export async function generateMetadata({params}: Props) {
  const {data} = await sanityFetch({
    query: POST_QUERY,
    params: await params,
    stega: false,
  })
  return {title: data?.title ?? 'Post not found'}
}

// 3. Page component: default settings (stega active in Draft Mode)
export default async function PostPage({params}: Props) {
  const {data: post} = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  })

  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      {/* ... */}
    </article>
  )
}
```

Three modes, three different configurations:

- **generateStaticParams**: Uses `perspective: 'published'` so it only generates pages for published posts (not drafts). Uses `stega: false` because these values are used as URL segments, not rendered text.
- **generateMetadata**: Uses `stega: false` because stega characters in `<title>` or `<meta>` tags corrupt your SEO. Invisible characters in a page title look fine in the browser tab but break search engine results.
- **The page component**: Uses default settings. When Draft Mode is off, it returns clean published content. When Draft Mode is on, it returns draft content with stega encoding, which is exactly what the overlays need.

### The root layout

**frontend/src/app/layout.tsx**

```typescript
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity/visual-editing'
import {SanityLive} from '@/sanity/lib/live'
import {DisableDraftMode} from '@/components/disable-draft-mode'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  )
}
```

Two components are doing the visual editing work here:

- \*\*\*\* renders on every request, whether Draft Mode is active or not. It establishes a connection to the Content Lake and listens for content changes. When someone publishes a document, this component triggers revalidation so the page updates without a full deploy.
- \*\*\*\* renders only when Draft Mode is enabled. It scans the DOM for stega-encoded strings, decodes the Content Source Map data embedded in them (document ID, field path, Studio URL), and draws transparent overlays on top of each element. Clicking an overlay sends a message to the parent Studio window (via `postMessage`) telling it to navigate to that document and field.
- \*\*\*\* renders a button for users to manually disable draft mode. You’ll create this shortly.

The `(await draftMode()).isEnabled` check is the gate. Outside of Draft Mode, the page renders clean published content with no overlays and no invisible characters. Inside Draft Mode, you get draft content, stega encoding, and click-to-edit overlays.

> \[!TIP]
> Don't want Live Content?
> If you don’t want the Live Content API’s auto-refresh capabilities, perhaps if you have more granular caching and revalidation needs, see the [section below on replacing sanityFetch with your own helper](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router).

### Draft Mode routes

These two routes are the bridge between the Studio and the frontend.

**Enable route:**

**frontend/src/app/api/draft-mode/enable/route.ts**

```typescript
import {client} from '@/sanity/lib/client'
import {defineEnableDraftMode} from 'next-sanity/draft-mode'

export const {GET} = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN || ''
  }),
})
```

When an editor opens the Presentation Tool, the Studio makes a GET request to this route with authentication parameters. `defineEnableDraftMode` handles the handshake: it verifies the request came from a legitimate Studio session (not a random visitor), then calls `draftMode().enable()` to activate Draft Mode for that browser session. From that point on, every `sanityFetch` call in the session returns draft content with stega encoding.

The `client.withConfig` part gives the handler an authenticated client to verify the request against the Sanity API.

**Disable route:**

**frontend/src/app/api/draft-mode/disable/route.ts**

```typescript
import {draftMode} from 'next/headers'
import {NextResponse} from 'next/server'

// set redirect to your preferred location
export async function GET() {
  ;(await draftMode()).disable()
  return NextResponse.redirect(
    new URL('/', 'http://localhost:3000')
  )
}
```

This turns off Draft Mode and redirects to the homepage. It's called by the "**Disable Draft Mode**" button (covered next).

### The "Disable Draft Mode" button

**frontend/src/components/disable-draft-mode.tsx**

```typescript
'use client'

import {useIsPresentationTool} from 'next-sanity/hooks'

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool()

  // Hide the button when inside the Presentation Tool
  if (isPresentationTool) return null

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-gray-900 px-4 py-2 text-sm text-white"
    >
      Disable Draft Mode
    </a>
  )
}
```

This component renders a floating button to exit Draft Mode, but only when the user is viewing the frontend directly (not inside the Presentation Tool's iframe). Inside the Presentation Tool, the Studio controls Draft Mode, so the button would be redundant.

`useIsPresentationTool` returns `true` when the frontend is loaded inside a Presentation Tool iframe and `false` when it's loaded directly in a browser tab. This is how you distinguish between the two contexts.

## Run both apps

With everything set up, you can now run both apps to test the functionality. If you’re using npm and using two separate directories as described in this guide. Run the `dev` command in each directory.

```sh
npm run dev
```

## The full flow

Now that you've seen every file, here's the complete sequence when an editor uses visual editing. This is the same flow described in "How the pieces fit together," but now you can trace each step back to the specific file that handles it:

1. The editor opens the **Presentation Tool** in the Studio (`sanity.config.ts`).
2. The Studio loads `http://localhost:3000` (the `origin`) in an iframe and uses `resolve.ts` to map the current document to a frontend URL.
3. The Studio hits `http://localhost:3000/api/draft-mode/enable` with authentication parameters (`enable/route.ts`).
4. The enable route verifies the request and activates **Draft Mode** in the iframe session.
5. The page re-renders. `sanityFetch` (`live.ts`) detects Draft Mode and returns draft content with **stega-encoded strings**: each string value has invisible characters that encode the document ID, field path, and Studio URL (`client.ts`).
6. `<VisualEditing />` (`layout.tsx`, only mounted during Draft Mode) reads the DOM, finds the stega-encoded strings, and renders transparent **click-to-edit overlays** on each text element.
7. The editor clicks an overlay. The overlay sends a `postMessage` to the parent Studio window with the document ID and field path. The Studio navigates to that field.
8. The editor changes a field. The mutation propagates through the Content Lake.
9. `<SanityLive />` (`layout.tsx`) picks up the mutation via its real-time subscription and triggers a re-render. The page updates with the new content.

## Next steps

- **Deploy to production.** Update `stega.studioUrl`, the Presentation Tool `origin`, and your CORS origins to point to your deployed URLs instead of `localhost`. It’s common to use ENV variables for these values with local fallbacks.
- **Add more document types to **`resolve.ts`**.** Any document type that has a corresponding frontend route can get visual editing. Add entries to the `locations` object for each type.
- **Customize overlay behavior.** The `<VisualEditing />` component accepts props for filtering which elements get overlays. See the [next-sanity visual editing reference](https://reference.sanity.io/next-sanity/visual-editing/client-component/VisualEditingProps/) for details.

## Troubleshooting

### Visual Editing without the Live Content API

The instructions above rely on the Live Content API, but if your revalidation needs are different, you can substitute the live functionality with a custom `sanityFetch` , and remove the `<SanityLive />` component.

Remove `live.ts` and create `fetch.ts`.

**frontend/src/sanity/lib/fetch.ts**

```
import {draftMode} from 'next/headers'
import {client} from './client'
import {token} from './token'

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
  stega: stegaOverride,
  perspective: perspectiveOverride,
}: {
  query: string
  params?: Record<string, unknown>
  revalidate?: number | false
  tags?: string[]
  stega?: boolean
  perspective?: 'published' | 'drafts' | 'raw'
}): Promise<{data: T}> {
  const isDraftMode = (await draftMode()).isEnabled

  const perspective = perspectiveOverride ?? (isDraftMode ? 'drafts' : 'published')
  const stega = stegaOverride ?? isDraftMode
  const useCdn = !isDraftMode

  const data = await client
    .withConfig({useCdn, stega: stega ? {studioUrl: 'http://localhost:3333'} : false})
    .fetch<T>(query, params, {
      token: isDraftMode ? token : undefined,
      perspective,
      next: {
        revalidate: isDraftMode ? 0 : tags.length ? false : revalidate,
        tags: isDraftMode ? [] : tags,
      },
    })

  return {data}
}
```

Then, import this new `sanityFetch` instead of the `live.ts` one.

**frontend/src/app/posts/\[slug]/page.tsx**

```tsx
import {notFound} from 'next/navigation'
import {sanityFetch} from '@/sanity/lib/fetch'

type Props = {
  params: Promise<{slug: string}>
}

/* ...omitted */

// Page component: default settings (stega active in Draft Mode)
export default async function PostPage({params}: Props) {
  const {data: post} = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  })

  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      {/* ... */}
    </article>
  )
}
```

Pass in any overrides you need to handle revalidation as needed.

Next, remove `SanityLive` from the layout component.

**frontend/src/app/layout.tsx**

```tsx
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity/visual-editing'
import {DisableDraftMode} from '@/components/disable-draft-mode'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  )
}
```

The VisualEditing and DisableDraftMode components will handle the rest. Learn more about [revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs) for more details on configuring a custom sanityFetch helper.

### Overlays appear but clicking does nothing

**Cause:** `stega.studioUrl` is missing from the Sanity client in `frontend/src/sanity/lib/client.ts`.

**Fix:** Add `stega: { studioUrl: 'http://localhost:3333' }` to `createClient`.

### Presentation Tool shows a blank iframe

**Cause:** `origin` is missing from the Presentation Tool config in `studio/sanity.config.ts`. This only happens when the Studio and frontend run as separate apps. When the Studio is embedded inside the Next.js app, the origin is implicit.

**Fix:** Add `origin: 'http://localhost:3000'` to `previewUrl` in the `presentationTool()` config.

### Page titles or meta tags contain garbled text

**Cause:** Stega encoding is active in `generateMetadata`. The invisible source map characters end up in `<title>` and `<meta>` tags. The page looks fine in the browser, but search engines see corrupted text.

**Fix:** Always pass `stega: false` when calling `sanityFetch` inside `generateMetadata`.

### Live preview doesn't update, 403 errors in browser console

**Cause:** The frontend's origin is missing from the Sanity project's CORS settings, so the browser can't reach the Content Lake.

**Fix:** Add `http://localhost:3000` (with **Allow credentials** checked) in your project's CORS settings at [sanity.io/manage](https://www.sanity.io/manage) under **API** → **CORS Origins**.

### String comparisons fail in Draft Mode

**Cause:** Stega encoding adds invisible characters to string values. An equality check like `align === 'center'` returns `false` even when the visible value is `"center"` because the encoded string contains extra characters.

**Fix:** Use `stegaClean()` to strip the encoding before comparing:

```typescript
import {stegaClean} from 'next-sanity'

const cleanAlign = stegaClean(align)
if (cleanAlign === 'center') {
  // ...
}
```

## Reference

### Key packages

| Package | Version | Purpose |
| --- | --- | --- |
| sanity | 5.x | Sanity Studio |
| next | 16.x | Next.js framework |
| next-sanity | 12.x | Sanity integration for Next.js |
| @portabletext/react | 6.x | Portable Text rendering |
| @sanity/image-url | 2.x | Image URL generation |

### File map

Every file involved in the visual editing integration, what it does, and what it depends on:

| File | Role | Depends on |
| --- | --- | --- |
| studio/sanity.config.ts | Configures the Presentation Tool with the frontend's origin and previewMode.enable path | studio/src/presentation/resolve.ts |
| studio/src/presentation/resolve.ts | Maps document types to frontend URLs for iframe navigation and location badges | Schema type names, frontend route structure in web/src/app/ |
| frontend/src/sanity/lib/client.ts | Sanity client with stega.studioUrl so overlays resolve back to the Studio | NEXT\_PUBLIC\_SANITY\_PROJECT\_ID, NEXT\_PUBLIC\_SANITY\_DATASET |
| frontend/src/sanity/lib/token.ts | Exports the API read token for the Draft Mode enable route | SANITY\_API\_READ\_TOKEN |
| frontend/src/sanity/lib/live.ts | defineLive returns sanityFetch (data fetching) and SanityLive (real-time subscriptions) | client.ts, SANITY\_API\_READ\_TOKEN |
| frontend/src/app/layout.tsx | Root layout: renders  always,  in Draft Mode only | live.ts, disable-draft-mode.tsx |
| frontend/src/app/api/draft-mode/enable/route.ts | Activates Draft Mode when called by the Presentation Tool | client.ts, SANITY\_API\_READ\_TOKEN |
| frontend/src/app/api/draft-mode/disable/route.ts | Deactivates Draft Mode and redirects to homepage | Nothing |
| frontend/src/components/disable-draft-mode.tsx | "Disable Draft Mode" button, hidden when inside the Presentation Tool | Nothing |

### Import paths (next-sanity 12.x)

These changed significantly from earlier versions. If you're referencing older tutorials or blog posts, the paths below are the ones that work with v12:

| Export | Import from |
| --- | --- |
| createClient, defineQuery, groq, stegaClean | next-sanity |
| defineLive | next-sanity/live |
| VisualEditing | next-sanity/visual-editing |
| defineEnableDraftMode | next-sanity/draft-mode |
| useIsPresentationTool, useOptimistic | next-sanity/hooks |
| PortableText | @portabletext/react (not re-exported from next-sanity) |
