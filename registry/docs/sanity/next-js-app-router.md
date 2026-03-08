# Next.js (App Router)

Following this guide will enable you to:

- Render overlays in your application, allowing content editors to jump directly from Sanity content to its source in Sanity Studio.
- Edit your content and see changes reflected in an embedded preview of your application in Sanity’s Presentation tool.
- **Optional:** Provide live content updates and seamless switching between draft and published content.

## Prerequisites

- A Sanity project with [a hosted or embedded Studio](https://www.sanity.io/docs/studio/deployment). If using an embedded studio, make sure you use [route groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to separate your app and studio layouts.
- A Next.js application using App Router. Follow [this documentation](https://nextjs.org/docs/app/getting-started) to set one up.

## Next.js application setup

The following steps should be performed in your Next.js application.

### Install dependencies

Install the dependencies that will provide your application with data fetching and Visual Editing capabilities.

**Terminal**

```sh
npm install @sanity/client next-sanity
```

### Set environment variables

Create a `.env` file in your application’s root directory to provide Sanity specific configuration.

You can use [Manage](https://www.sanity.io/manage) to find your project ID and dataset, and to create a token with [Viewer permissions](https://www.sanity.io/docs/user-guides/roles) which will be used to fetch preview content.

The URL of your Sanity Studio will depend on where it is [hosted](https://www.sanity.io/docs/studio/deployment) or [embedded](https://www.sanity.io/docs/studio/embedding-sanity-studio).

**.env**

```bash
# Public
NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
NEXT_PUBLIC_SANITY_STUDIO_URL="https://YOUR_PROJECT.sanity.studio"
# Private
SANITY_VIEWER_TOKEN="YOUR_VIEWER_TOKEN"

```

## Application setup

### Configure the Sanity client

Create a Sanity client instance to handle fetching data from Content Lake.

Configuring the `stega` option enables automatic overlays for basic data types when preview mode is enabled. You can read more about how stega works [here](https://www.sanity.io/docs/visual-editing/stega).

**src/sanity/client.ts**

```tsx
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: true,
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

```

### Draft mode

Draft mode allows authorized content editors to view and interact with draft content.

Create an API endpoint to enable draft mode when viewing your application in Presentation tool.

**src/app/api/draft-mode/enable/route.ts**

```tsx
import { client } from "@/sanity/client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_VIEWER_TOKEN,
  }),
});

```

Create a server action which can be used to disable draft mode. Add a delay to ensure a loading state is shown.

**src/app/actions.ts**

```tsx
'use server'

import {draftMode} from 'next/headers'

export async function disableDraftMode() {
  const disable = (await draftMode()).disable()
  const delay = new Promise((resolve) => setTimeout(resolve, 1000))

  await Promise.allSettled([disable, delay]);
}

```

Create a new component for disabling draft mode. We will render this for content authors when viewing draft content in a non-Presentation context.

**src/components/DisableDraftMode.tsx**

```tsx
"use client";

import { useTransition } from "react";
import { disableDraftMode } from "@/app/actions";
import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const [pending, startTransition] = useTransition();
  const isPresentationTool = useIsPresentationTool();
  
// Only show the disable draft mode button when outside of Presentation Tool
  if (isPresentationTool === null && isPresentationTool !== true) {
    return null;
  }

  const disable = () =>
    startTransition(() => disableDraftMode());

  return (
    <div>
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}

```

### Enable Visual Editing

The `<VisualEditing>` component handles rendering overlays, enabling click to edit, and refreshing pages in your application when content changes.

> \[!WARNING]
> Embedded studios
> The approach below adds the VisualEditing component to the root layout. If you’re using an embedded studio—one that renders on a route in your Next.js app—you should only include the VisualEditing component in your content layouts.
> Do not render these components on a parent layout of the studio.

Import it into your root layout, and render it conditionally when draft mode is enabled alongside the `<DisableDraftMode>` component you created above.

**src/app/layout.tsx**

```tsx
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}


```

> \[!NOTE]
> next-sanity v11
> Prior to v11 of `next-sanity`, applications could import the VisualEditing component from the root instead of the /visual-editing path. You're encouraged to upgrade to v11 or higher, but if you need to use an earlier version you should `import {VisualEditing} from 'next-sanity'` instead of `'next-sanity/visual-editing'`.

### Render a page in preview mode

Add configuration to your `client.fetch` calls when draft mode is enabled in order to fetch up-to-date preview content with stega encoding.

**/src/app/\[slug]/page.tsx**

```tsx
import { defineQuery } from "next-sanity";
import { draftMode } from "next/headers";
import { client } from "@/sanity/client";

const query = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]{title}`
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const data = await client.fetch(
    query,
    { slug },
    isEnabled
      ? {
          perspective: "drafts",
          useCdn: false,
          stega: true,
        }
      : undefined
  );

  return <h1>{data.title}</h1>;
}

```

## Studio setup

To setup Presentation tool in your Sanity Studio, import the tool from `sanity/presentation`, add it to your `plugins` array, and configure `previewUrl`, optionally passing an origin, path, and endpoints to enable and disable preview mode.

We similarly recommend using environment variables loaded via a `.env` file to support development and production environments.

**sanity.config.ts**

```tsx
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  // ... project configuration
  plugins: [
    presentationTool({
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    // ... other plugins
  ],
});

```

**.env**

```text
# Public
NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_SANITY_DATASET="YOUR_DATASET"
NEXT_PUBLIC_SANITY_STUDIO_URL="https://YOUR_PROJECT.sanity.studio"
SANITY_STUDIO_PREVIEW_ORIGIN="https://my-cool-frontend.com"
# Private
SANITY_VIEWER_TOKEN="YOUR_VIEWER_TOKEN"
```

See more available [previewUrl options](https://reference.sanity.io/sanity/presentation/PreviewUrlResolverOptions/).

## Optional Extras

### Live Content API

[The Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) can be used to receive real time updates in your application when viewing both draft content in contexts like Presentation tool, and published content in your user-facing production application.

Implementing Visual Editing using the Live Content API is recommended for the best experience for both users and content editors.

### Update Sanity client

First, update your client configuration. The token can be removed from the base client instance as we pass it as configuration in the next step.

**src/sanity/client.ts**

```typescript
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: true,
--  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

```

### Configure `defineLive`

Configure `defineLive` to enable automatic revalidation and refreshing of your fetched content.

The Viewer token can be used as both `browserToken` and `serverToken`, as the `browserToken` is only shared with the browser when draft mode is enabled.

**src/sanity/live.ts**

```tsx
import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_VIEWER_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});

```

> \[!NOTE]
> next-sanity v11
> Prior to v11 of `next-sanity`, applications could import `defineLive` from the root instead of the `/live` path. You're encouraged to upg to v11 or higher, but if you need to use an earlier version you should `import {defineLive} from 'next-sanity'` instead of `'next-sanity/Live'`.

### Layout and pages

The `<SanityLive>` component is responsible for making all `sanityFetch` calls in your application *live*, so should always be rendered. It will also enable seamless switching between draft and published content when viewing your application in Presentation tool.

> \[!WARNING]
> Embedded studios
> The approach below adds the VisualEditing and SanityLive components to the root layout. If you’re using an embedded studio—one that renders on a route in your Next.js app—you should only include SanityLive and VisualEditing components in your content layouts.
> Including SanityLive in your studio route can cause unexpected reloads.

**src/app/layout.tsx**

```typescript
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { SanityLive } from "@/sanity/live";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
         <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

```

Replace your `client.fetch` calls with the newly exported `sanityFetch` function.

Explicitly passing the options parameter based on the draft mode status is no longer necessary as `sanityFetch` handles setting the correct options internally.

**src/app/\[slug]/page.tsx**

```typescript
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/live'

const query = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]{title}`,
)

export default async function Page({
  params
}: {
  params: Promise<{slug: string}>;
}) {

const { data } = await sanityFetch({
      query,
      params,
});

  return <h1>{data.title}</h1>;
}

```
