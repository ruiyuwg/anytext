# Embedding Sanity Studio in Next.js

Sanity Studio can run as a route inside your Next.js application, giving you a single deployment for both your frontend and content editing interface. Mounting the Studio at a route like `/studio` means shared authentication context, one build pipeline, and the ability to dynamically configure the Studio based on environment or user context.

> \[!NOTE]
> Consider your project size
> Co-locating the Studio with your Next.js app is convenient for small to medium projects. For larger projects and teams, a standalone Studio or monorepo setup prevents your content model from becoming too website-centric and makes collaboration easier.

## Prerequisites

- An existing Next.js 14+ project using App Router. If you're starting from scratch, follow the `create-next-app` setup first.
- Node.js 18 or later.
- A Sanity account and project. If you don't have one, the automatic installation flow creates one for you.
- `next-sanity` installed in your project.

## Automatic installation (recommended)

The fastest way to embed the Studio:

**Terminal**

```sh
npx sanity@latest init
```

Run this inside your existing Next.js project. The CLI detects your framework and prompts you to:

1. Create or connect a Sanity project.
2. Choose a Studio route (default: `/studio`).
3. Scaffold configuration files (`sanity.config.ts`, `sanity.cli.ts`, and the route file).

If you already have a Sanity project, the CLI connects to it. If not, it creates one.

## Manual installation

### Install peer dependencies

`sanity` and `styled-components` are peer dependencies required for the Studio. Most package managers (npm v7+, pnpm v8+) install them automatically when you install `next-sanity`.

If you use yarn v1, run the following command:

**Terminal**

```sh
npx install-peerdeps --yarn next-sanity
```

### Create `sanity.config.ts`

Create a Studio configuration file at the root of your Next.js project:

**sanity.config.ts**

```typescript
// sanity.config.ts

'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: [] },
})
```

A few things to note about this configuration:

- `'use client'` is required. Sanity Studio is a client-side React application.
- `basePath` must match the route where you mount the Studio (see next section).
- `schema.types` is where you define your content model. Start empty and add types as you build.

### Create `sanity.cli.ts` (optional)

This enables `npx sanity` commands from within your Next.js project:

**sanity.cli.ts**

```typescript
// sanity.cli.ts

import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  },
})
```

With this in place, you can run commands like `npx sanity cors add` or `npx sanity schema extract` directly from your project.

## Create the Studio route

Create an App Router catch-all route for the Studio:

**src/app/studio/\[\[...tool]]/page.tsx**

```typescript
// src/app/studio/[[...tool]]/page.tsx

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

How this works:

- **\[\[...tool]]** is an optional catch-all segment that captures all Studio sub-routes, including structure, vision, and media.
- **dynamic = 'force-static'** tells Next.js to statically render this route. The Studio shell (HTML, CSS, JavaScript) is the same for all users. Only the data inside is dynamic, loaded client-side after the shell renders. Static rendering gives the fastest initial load.
- **metadata and viewport** exports from `next-sanity/studio` set mobile-friendly viewport settings and prevent search engines from indexing the Studio route.
- **NextStudio** wraps the Sanity Studio component in a Next.js-friendly layout with loading states and viewport handling.

## Customizing metadata

The default metadata exports handle the common case. To customize:

**src/app/studio/\[\[...tool]]/page.tsx**

```typescript
// src/app/studio/[[...tool]]/page.tsx

import type { Metadata, Viewport } from 'next'
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from 'next-sanity/studio'

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'Loading Studio...',
}

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: 'resizes-content',
}
```

Spread the defaults and override specific fields. The defaults include `robots: 'noindex'` and mobile viewport settings that you'll want to keep.

## Advanced: StudioProvider and StudioLayout

If you need to inject custom navigation, wrap the Studio in additional context providers, or access Studio hooks outside of plugins, you can use `StudioProvider` and `StudioLayout` as children of `NextStudio`:

**src/app/studio/\[\[...tool]]/page.tsx**

```typescript
// src/app/studio/[[...tool]]/page.tsx

'use client'

import { NextStudio } from 'next-sanity/studio'
import { StudioProvider, StudioLayout } from 'sanity'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        {/* Components here have access to the same React hooks as Studio plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}
```

How this works: `NextStudio` handles Next.js-specific layout concerns (viewport scaling, loading state). When you pass children, it delegates rendering to them instead of its default `StudioProvider`/`StudioLayout`. This lets you inject custom components between the provider and layout while keeping the Next.js wrapper benefits.

Most applications don't need this level of control. Use the standard `<NextStudio config={config} />` pattern from the section above unless you need to:

- Inject custom navigation or toolbar components
- Access Studio React hooks outside of plugins
- Wrap the Studio in additional context providers

## Pages Router projects

Even if the rest of your application uses Pages Router, embed the Studio on an App Router route. Next.js supports both routers in the same application. The Studio is a client-side React app that works best with App Router's layout system, and the `NextStudio` component is designed for App Router.

Your file structure would look like:

```text
src/
  app/
    studio/
      [[...tool]]/
        page.tsx        # Studio (App Router)
  pages/
    index.tsx           # Your site (Pages Router)
    posts/
      [slug].tsx
```

## Route separation with SanityLive

If you're using `<SanityLive />` and `<VisualEditing />` in your root layout, make sure they don't render on the Studio route. These components are for your content pages, not the Studio itself.

Use route groups to separate layouts:

```text
src/app/
  (app)/                    # content routes
    layout.tsx              # includes <SanityLive /> and <VisualEditing />
    page.tsx
    posts/
      [slug]/
        page.tsx
  (studio)/                 # Studio route
    studio/
      [[...tool]]/
        page.tsx            # no SanityLive, no VisualEditing
```

The `(app)` and `(studio)` groups create separate layout trees. The Studio route gets its own layout without the Live Content and Visual Editing components.

## Troubleshooting

**Studio shows a blank page or hydration error**

Make sure `sanity.config.ts` includes `'use client'` at the top. Without this directive, Next.js tries to render the Studio configuration on the server, which fails because the Studio is a client-side application.

**Studio loads but the URL doesn't match**

The `basePath` in `sanity.config.ts` must match the actual route where the Studio is mounted. If your Studio route is `/admin` instead of `/studio`, update `basePath` to `'/admin'`.

**Peer dependency errors during installation**

If your package manager reports missing peer dependencies for `sanity` or `styled-components`, install them explicitly. This is common with yarn v1, which does not auto-install peer dependencies. Run `npx install-peerdeps next-sanity` or install each package manually.

## Next steps

- [Visual Editing Guide](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router): set up Visual Editing and live preview.
- [Work-ready Next.js](https://www.sanity.io/learn/track/work-ready-next-js): Sanity Learn's multi-course track to level up your Next.js + Sanity skills.
