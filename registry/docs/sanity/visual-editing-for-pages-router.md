# Visual Editing for Pages Router

Following this guide will enable you to:

- Render overlays in your application, allowing content editors to jump directly from Sanity content to its source in Sanity Studio.
- Edit your content and see changes reflected in an embedded preview of your application in Sanity’s Presentation tool.
- Provide instant updates and seamless switching between draft and published content.

> \[!WARNING]
> Gotcha
> This guide is for the Next.js Pages Router. [Go here for the guide on Next.js App Router](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router).

## Prerequisites

- A Sanity project with [a hosted or embedded Studio](https://www.sanity.io/docs/studio/deployment).
- A Next.js application using Pages Router. Follow [this guide](https://nextjs.org/docs/pages/building-your-application) to set one up.

## Next.js application setup

The following steps should be performed in your Next.js application.

### Install dependencies

Install the dependencies that will provide your application with data fetching and Visual Editing capabilities.

```sh
npm install next-sanity @sanity/visual-editing @sanity/react-loader @sanity/preview-url-secret

```

## Add environment variables

Create a `.env` file in your application’s root directory to provide Sanity specific configuration.

You can use [Manage](https://www.sanity.io/manage) to find your project ID and dataset, and to create a token with Viewer permissions which will be used to fetch preview content.

The URL of your Sanity Studio will depend on where it is [hosted](https://www.sanity.io/docs/studio/deployment) or [embedded](https://www.sanity.io/docs/studio/embedding-sanity-studio).

**.env**

```text
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

```typescript
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-06",
  useCdn: true,
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

```

### Draft mode

Draft mode allows authorized content editors to view and interact with draft content. Presentation tool and sharing communicate with your Next.js app to enable / disable draft mode.

Create an API endpoint (in `src/pages/api`) to enable draft mode when viewing your application in Presentation tool.

**src/pages/api/enable-draft.ts**

```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { client } from "@/sanity/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.url) {
    return res.status(500).json({ message: "Missing request URL" });
  }

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client.withConfig({
      token: process.env.SANITY_VIEWER_TOKEN,
    }),
    req.url
  );

  if (!isValid) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  // Enable Draft Mode
  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: redirectTo });
  res.end();
}

```

Similarly, create an API endpoint to disable draft mode.

**src/pages/api/disable-draft.ts**

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handle(
  _req: NextApiRequest,
  res: NextApiResponse<void>,
): void {
  // Exit the current user from "Draft Mode".
  res.setDraftMode({ enable: false })

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
```

Create a new component with a link to the disable endpoint. We add conditional logic to only render this for content authors when viewing draft content in a non-Presentation context. The code in this example uses minimal styling, but you may wish to create a more suitable banner that fits your layout.

**src/components/DisableDraftMode.tsx**

```tsx
import { useEffect, useState } from "react";

export function DisableDraftMode() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window.top === window);
  }, []);

  return show && <a href={"/api/disable-draft"}>Disable Draft Mode</a>;
}
```

### Enable Visual Editing

Create a Visual Editing wrapper component.

The `<VisualEditing>` component handles rendering overlays, enabling click to edit, and refreshing pages in your application when content changes. Render it alongside the `<DisableDraftMode>` component you created above.

> \[!WARNING]
> Embedded studios
> The approach below adds the VisualEditing components to the App layout. If you’re using an embedded studio—one that renders on a route in your Next.js app—you should only include VisualEditing components in your content layouts.
> Our recommendation is that you create dedicated layout components for your content and studio routes.

We provide a basic refresh mechanism that will reload the page when changes are made in Presentation tool. You can optionally use loaders to provide seamless updates.

```tsx
// src/components/SanityVisualEditing.tsx

import { VisualEditing } from "@sanity/visual-editing/next-pages-router";
import { useLiveMode } from '@sanity/react-loader'
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { client } from "@/sanity/client";

const stegaClient = client.withConfig({stega: true})

export default function SanityVisualEditing() {
	useLiveMode({client: stegaClient})

  return (
    <>
      <VisualEditing />
      <DisableDraftMode />
    </>
  );
}

```

In the root layout file, dynamically import and render the `<SanityVisualEditing>` wrapper component when draft mode is enabled.

**src/pages/\_app.tsx**

```tsx
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const SanityVisualEditing = dynamic(() => import("@/components/SanityVisualEditing"));

export default function App({ Component, pageProps }: AppProps) {
  const { draftMode } = pageProps;
  return (
    <>
      <Component {...pageProps} />
      {draftMode && <SanityVisualEditing />}
    </>
  );
}

```

### Set up loaders

Create a new file to configure loaders. Call `setServerClient`, with the client instance which should be used to fetch data on the server.

We also create a helper function to return fetch options based on the draft mode state, and export this alongside `loadQuery` for convenience.

**src/sanity/ssr.ts**

```tsx
import * as serverOnly from "@sanity/react-loader";
import { client } from "./client";
import { ClientPerspective } from "next-sanity";

const { loadQuery, setServerClient } = serverOnly;

setServerClient(
  client.withConfig({
    token: process.env.SANITY_VIEWER_TOKEN,
  })
);

const loadQueryOptions = (context: { draftMode?: boolean }) => {
  const { draftMode } = context;
  return draftMode
    ? {
        // At this time, this approach does not support dynamicly
        // pulling in the Studio perspective, so you must hard-code the value
        // or retrieve it from the cookie manually.
        perspective: "drafts" as ClientPerspective,
        stega: true,
        useCdn: false,
      }
    : {};
};

export { loadQuery, loadQueryOptions };


```

### Render a page in preview mode

In `getStaticProps` use the `loadQuery` function created above. The `initial` data returned here is passed to `useQuery` in the page component.

When in Presentation, `useQuery` will handle live updates as content is edited.

**src/pages/index.tsx**

```tsx
import { loadQuery, loadQueryOptions } from "@/sanity/ssr";
import { useQuery } from "@sanity/react-loader";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const query = `*[_type == "page"][0]{title}`;

export const getStaticProps = (async (context) => {
  const { draftMode = false } = context; 
  const options = loadQueryOptions({ draftMode });
  const initial = await loadQuery<{ title?: string }>(query, {}, options);
  return { props: { initial, draftMode } };
}) satisfies GetStaticProps;

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: PageProps) {
  const { initial } = props;
  const { data } = useQuery(query, {}, { initial });
  return <h1>{data.title}</h1>;
}

```

## Studio setup

To setup Presentation tool in your Sanity Studio, import the tool from `sanity/presentation`, add it to your `plugins` array, and set `previewUrl` to the base URL of your application.

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
        // Add a new ENV var to your Studio codebase if needed to accomodate live vs local preview.
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000',
        preview: "/",
        previewMode: {
          enable: "/api/enable-draft",
          disable: "/api/disable-draft",
        },
      },
    }),
    // ... other plugins
  ],
});

```

## Optional Extras

### Add data attributes for overlays

`useQuery` also returns an `encodeDataAttribute` helper method for generating `data-sanity` attributes. These attributes give you direct control over rendering [overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays) in your application, and are especially useful if not using stega encoding.

**src/pages/index.tsx**

```tsx
import { loadQuery } from "@/sanity/ssr";
import { useQuery } from "@sanity/react-loader";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const query = `*[_type == "page"][0]{title}`;

export const getStaticProps = (async (context) => {
  const options = loadQueryOptions(context);
  const initial = await loadQuery<{ title?: string }>(query, {}, options);
  return { props: { initial } };
}) satisfies GetStaticProps;

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page(props: PageProps) {
  const { initial } = props;
  const { data, encodeDataAttribute } = useQuery(query, {}, { initial });
  return <h1 data-sanity={encodeDataAttribute(["title"])}>{data.title}</h1>;
}

```

# Setting up your studio

## Create a new Studio with Sanity CLI

![Video](https://stream.mux.com/wIMs3CS7T4pP7hRArpQZsBZ01Be02vCjbK)

Run the command in your Terminal to initialize your project on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/docs/help/cli-errors).

**Terminal**

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path studio-hello-world
cd studio-hello-world
```

## Run Sanity Studio locally

Inside the directory of the Studio, start the development server by running the following command.

**Terminal**

```sh
# in studio-hello-world 
npm run dev
```

## Log in to the Studio

**Open** the Studio running locally in your browser from <http://localhost:3333>.

You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

# Defining a schema

## Create a new document type

![Video](https://stream.mux.com/IfVfAwxfwOKN2khdGCQ3cs5IuF1rYte1)

Create a new file in your Studio’s `schemaTypes` folder called `postType.ts` with the code below which contains a set of fields for a new `post` document type.

**/studio-hello-world/schemaTypes/postType.ts**

```
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
```

## Register the `post` schema type to the Studio schema

Now you can import this document type into the `schemaTypes` array in the `index.ts` file in the same folder.

**/studio-hello-world/schemaTypes/index.ts**

```
import {postType} from './postType'

export const schemaTypes = [postType]
```

## Publish your first document

When you save these two files, your Studio should automatically reload and show your first document type. Click the `+` symbol at the top left to create and publish a new `post` document.

# Querying content with GROQ

## Write your first GROQ query

![Video](https://stream.mux.com/Mc12Sdeu00ugrGuQyz00Du1G4AQZmT36UV)

Open **Vision** in your Studio's top nav bar and paste this query into the **Query** code block field.

**Vision**

```groq
*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt
}
```

- `*` represents all documents in a dataset as an array
- `[_type == "post"]` represents a **filter** to only return matching documents
- `{ _id, title, slug, publishedAt }` represents a **projection** which defines the attributes from those documents that you wish to include in the response.

## Run the query

Click **Fetch** to see the JSON output in **Results**. You should see the document you previously published in the results.

Queries run in Vision use your authenticated session, so you will see private documents – which have a `.` in the `_id` key, like `drafts.`. You will not see when queried from your front end in the next step.
