# React Router/Remix

Following this guide will enable you to:

- Edit your content in drafts or releases and see changes reflected in an embedded preview of your react router application in Sanity Studio's Presentation tool.
- **Optional**: Render overlays in your application, allowing content editors to jump directly from Sanity content to its source in Sanity Studio.

## Prerequisites

- A Sanity project with a hosted or embedded Studio. Read more about hosting [here](https://www.sanity.io/docs/studio/deployment).
- A React Router application. This guide uses code from the [Displaying content section](https://www.sanity.io/docs/react-router-quickstart/displaying-content-in-a-react-router-front-end) of the quick start as a starting point. This guide uses React Router 7.9+.

## React Router application setup

The following steps should be performed in your React Router application.

### Install dependencies

Install the dependencies that will provide your application with data fetching and Visual Editing capabilities. You may already have some of them if you followed the quick start.

```bash
pnpm add @sanity/client @sanity/visual-editing @sanity/preview-url-secret @sanity/react-loader
```

### Add environment variables

Create a `.env` file in your application’s root directory to provide Sanity specific configuration.

You can use [Manage](https://www.sanity.io/manage) to find your project ID and dataset, and to create a token with Viewer permissions which will be used to fetch preview content.

The URL of your Sanity Studio will depend on where it is [hosted](https://www.sanity.io/docs/studio/deployment) or [embedded](https://www.sanity.io/docs/studio/embedding-sanity-studio). When working with a locally-running studio, you'll want to set the public URL to `http://localhost:3333`.

```bash
# .env

# Public
PUBLIC_SANITY_PROJECT_ID="YOUR_PROJECT_ID"
PUBLIC_SANITY_DATASET="YOUR_DATASET"
PUBLIC_SANITY_STUDIO_URL="https://YOUR_PROJECT.sanity.studio"
# Private
SANITY_API_READ_TOKEN="YOUR_VIEWER_TOKEN"

```

## Application setup

### Configure the Sanity client

Create a Sanity client instance (or edit your existing one) to handle fetching data from Content Lake.

Configuring the `stega` option enables automatic overlays for basic data types when preview mode is enabled. You can read more about how stega works [here](https://www.sanity.io/docs/visual-editing/stega).

**app/sanity/client.ts**

```tsx
import { createClient } from "@sanity/client";

declare global {
  interface Window {
    ENV: {
      PUBLIC_SANITY_PROJECT_ID: string;
      PUBLIC_SANITY_DATASET: string;
      PUBLIC_SANITY_STUDIO_URL: string;
    };
  }
}

const env = typeof document === "undefined" ? process.env : window.ENV;

export const client = createClient({
  projectId: env.PUBLIC_SANITY_PROJECT_ID,
  dataset: env.PUBLIC_SANITY_DATASET,
  apiVersion: "2025-10-30",
  useCdn: false,
  stega: {
    studioUrl: env.PUBLIC_SANITY_STUDIO_URL,
  },
});

```

### Add preview mode logic

Preview mode allows authorized content editors to view and interact with draft content.

Create a preview helper file, named `session.ts` in the `app/sanity` directory, to manage preview sessions and return context about the current preview state. This helper exposes getters and setters to store preview and perspective context as a cookie.

**app/sanity/session.ts**

```typescript
// app/sanity/preview.ts

import { createCookieSessionStorage } from "react-router";
import type { loadQuery } from "@sanity/react-loader"
import crypto from "node:crypto";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      httpOnly: true,
      name: "__sanity_preview",
      path: "/",
      sameSite: !import.meta.env.DEV ? "none" : "lax",
      secrets: [crypto.randomBytes(16).toString("hex")],
      secure: !import.meta.env.DEV,
    },
  });

async function getPreviewData(request: Request): Promise<{
  preview: boolean;
  options: Parameters<typeof loadQuery>[2]
}> {
  const session = await getSession(request.headers.get("Cookie"));
  const preview = session.get("previewMode") || false
  return {
    preview,
    options: preview ? {
      perspective: session.has("perspective") ? session.get("perspective").split(',') : "drafts",
      stega: true,
    } : {
      perspective: 'published',
      stega: false,
    }
  };
}

export { commitSession, destroySession, getSession, getPreviewData };

```

> \[!WARNING]
> Vite impementations
> **If you’re using Vite or any browser-based build tool**, avoid importing Node.js-only modules like node:crypto directly in shared files (such as session.ts).
> You will need to use another hex generator that is compatible or utilize env variables for the `secrets` key.

Create an API endpoint to enable preview mode when viewing your application in Presentation tool. This performs some checks and commits some data into a cookie which enables preview mode for other parts of your app.

**app/routes/api.preview-mode.enable.tsx**

```tsx
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import type { ClientPerspective } from "@sanity/client";
import { client } from "~/sanity/client";
import { getSession, commitSession } from "~/sanity/session";
import type { Route } from "./+types/api.preview-mode.enable";

export async function loader({ request }: Route.LoaderArgs) {
  const token = process.env.SANITY_API_READ_TOKEN;
  
  if (!token) {
    throw new Response(
      "SANITY_API_READ_TOKEN environment variable is not set. Create a .env file with your Sanity read token.",
      { status: 500 }
    );
  }

  // The preview-url-secret library lets you confirm
  // that the preview command is coming from Studio.
  const clientWithToken = client.withConfig({ token });
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new Response("Invalid preview URL", { status: 401 });
  }

  // Get or create session
  const session = await getSession(request.headers.get("Cookie"));
  
  // Enable preview mode
  session.set("previewMode", true);
  
  // Get perspective from URL query params
  const url = new URL(request.url);
  const perspectiveParam = url.searchParams.get("sanity-preview-perspective");
  const perspective: ClientPerspective = (perspectiveParam as ClientPerspective)
  session.set("perspective", perspective);

  return new Response(null, {
    status: 307,
    headers: {
      Location: redirectTo,
      "Set-Cookie": await commitSession(session),
    },
  });
}
```

Similarly, create an API endpoint to disable draft mode. You may want to adjust how you handle redirects to better-match your UI.

**app/routes/api.preview-mode.disable.tsx**

```tsx
import { getSession, destroySession } from "~/sanity/session";
import type { Route } from "./+types/api.preview-mode.disable";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirect") || "/";

  // Get the session and destroy it
  const session = await getSession(request.headers.get("Cookie"));

  return new Response(null, {
    status: 307,
    headers: {
      Location: redirectTo,
      "Set-Cookie": await destroySession(session),
    },
  });
}
```

Next, add these routes as new entries in your application’s `routes` file. Don't forget your other routes.

**app/routes.ts**

```typescript
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Other routes
  route("api/preview-mode/enable", "routes/api.preview-mode.enable.tsx"),
  route("api/preview-mode/disable", "routes/api.preview-mode.disable.tsx"),
] satisfies RouteConfig;


```

Next, create a new component with a link to the disable endpoint. We add conditional logic to only render this for content authors when viewing draft content in a non-Presentation context. If they're inside Studio, they can use Presentation's built-in 'Edit' toggle.

**app/components/DisablePreviewMode.tsx**

```tsx
import { useEffect, useState } from "react";

export function DisablePreviewMode() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window === window.parent && !window.opener);
  }, []);

  return show && <a href="/api/preview-mode/disable">Disable Preview Mode</a>;
}


```

Finally, update the `root` to use our session logic and render the `DisablePreviewMode` component when preview mode is enabled.

Edit the `root.tsx` file to include the following:

**app/root.tsx**

```tsx
import {
  isRouteErrorResponse,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import { getPreviewData } from "./sanity/session";
import { DisablePreviewMode } from "./components/DisablePreviewMode";

export async function loader({ request }: Route.LoaderArgs) {
  const { preview } = await getPreviewData(request);
  return { 
    preview,
    ENV: {
      PUBLIC_SANITY_PROJECT_ID: process.env.PUBLIC_SANITY_PROJECT_ID,
      PUBLIC_SANITY_DATASET: process.env.PUBLIC_SANITY_DATASET,
      PUBLIC_SANITY_STUDIO_URL: process.env.PUBLIC_SANITY_STUDIO_URL,
    }
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {data?.ENV && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
        )}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useRouteLoaderData<typeof loader>("root");
  const preview = data?.preview || false;

  return (
    <>
      <Outlet />
      {preview && (
        <>
          <DisablePreviewMode />
        </>
      )}
    </>
  );
}
```

### Set up loaders

Loaders vastly improve the server/client handoff experience compared to using Sanity client on it's own. First create a loader, then update your data fetching to use it.

Create a new `loader.server.ts` file alongside your other Sanity files.

**app/sanity/loader.server.ts**

```
import {loadQuery, setServerClient} from '@sanity/react-loader'
import {client} from './client'

const serverClient = client.withConfig({ token: process.env.SANITY_API_READ_TOKEN })
setServerClient(serverClient)

export {loadQuery}
```

Next, update your routes to use the loader and the `getPreviewData` helper we created earlier.

We'll start with a home route and render a list of posts.

**app/routes/home.tsx**

```tsx
import type { SanityDocument } from "@sanity/client";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import { getPreviewData } from "~/sanity/session";
import { loadQuery } from "~/sanity/loader.server";
import { useQuery } from "@sanity/react-loader";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12] {
  _id,
  title,
  slug,
  publishedAt,
}`

export async function loader({ request }: Route.LoaderArgs) {
  // Retreive options based on the preview cookie
  const { options } = await getPreviewData(request);
  // Pass the preview options, including perspectives, to the query
  const data = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, options);
  return {
    initial: data
  }
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { initial } = loaderData;
  // Pass the initial data from the loader in to a new query.
  // Note that we're now using `useQuery`.
  const { data: posts } = useQuery<SanityDocument[]>(POSTS_QUERY, {}, {initial});
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post._id}>
            <Link to={`/posts/${post.slug.current}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

Repeat this for your other routes. We'll add one more in this example to render the individual posts. This example also includes some image rendering from the quick start, which you can remove if you aren't using it.

**app/routes/post.tsx**

```tsx
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type { SanityDocument } from "@sanity/client";
import {PortableText} from "@portabletext/react";
import type { Route } from "./+types/post";
import { loadQuery } from "~/sanity/loader.server";
import { getPreviewData } from "~/sanity/session";
import { useQuery } from "@sanity/react-loader";
import { client } from "~/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`

export async function loader({ params, request }: Route.LoaderArgs){
  const { options } = await getPreviewData(request);
  const data = await loadQuery<SanityDocument>(POST_QUERY, params, options);
  const { projectId, dataset } = client.config();

  return {
    params,
    projectId,
    dataset,
    initial: data
  }
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { projectId, dataset, initial, params } = loaderData;
  if (!params || !params.slug) {
    throw new Error("No slug, 404");
  }
  const { data: post } = useQuery<SanityDocument>(POST_QUERY, {}, {initial});

  const urlFor = (source: SanityImageSource) => {
    if (!projectId || !dataset) return null;
    const builder = createImageUrlBuilder({ projectId, dataset });
    return builder.image(source);
  };
  
  const postImageUrl = post?.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url() : null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      {postImageUrl && (
        <img src={postImageUrl} alt={post.title} />
      )}
      <PortableText value={post.body} />
    </div>
  )
}
```

If you're following along, your routes file should have at least these routes.

**app/routes.ts**

```tsx
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/preview-mode/enable", "routes/api.preview-mode.enable.tsx"),
  route("api/preview-mode/disable", "routes/api.preview-mode.disable.tsx"),
  route("posts/:slug", "routes/post.tsx"),
] satisfies RouteConfig;

```

At this point you can move to configuring your studio.

## Studio setup

To setup Presentation tool in your Sanity Studio, import the tool from `sanity/presentation`, add it to your `plugins` array, and set `previewUrl` to the base URL of your application. You should also configure the location resolvers to improve the experience.

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
        // Define a preview origin in your studio's .env
        // This is not the same as the react-router env
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:5173',
        preview: '/',
        previewMode: {
          enable: '/api/preview-mode/enable',
          disable: '/api/preview-mode/disable',
        }
      },
      resolve: {
        locations: {
          // These will differ depending on your schema
          // and rendering logic.
          post: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({
              locations: [
                { title: doc?.title, href: `posts/${doc?.slug ?? ''}`},
                { title: 'Home', href: '/'},
              ]
            })
          })
        }
      }
    }),
    // ... other plugins
  ],
});

```

Now if you visit a document in Studio, it will show a "used in" widget at the top of each document. Use this to open the document in Presentation.

With both your app and Studio set up, you should now be able to test Presentation. Run both the app and studio, then visit Presentation in Studio to test the functionality. Learn more about [configuring the presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool).

## Additional features

### Optional: Visual Editing overlays

You can include a React Router-specific visual editing component that enables hover overlays and outlines that make the content editor experience more enjoyable. It adds overlays, click to edit buttons, and communicates with Presentation.

First, install the visual editing package.

```sh
pnpm add @sanity/visual-editing
```

Next, in your React Router app, create a new `SanityVisualEditing` component that will include  the `DisablePreviewMode` component.

**app/components/SanityVisualEditing.tsx**

```tsx
import { VisualEditing } from "@sanity/visual-editing/react-router";
import { DisablePreviewMode } from "./DisablePreviewMode";

export function SanityVisualEditing() {
  return (
    <>
      <VisualEditing />
      <DisablePreviewMode />
    </>
  );
}

```

Then, update the imports and `App` function in `root.tsx` to use this new component instead.

**app/root.tsx**

```tsx
import { SanityVisualEditing } from "./components/SanityVisualEditing";
// ...
// ...

export default function App() {
  const data = useRouteLoaderData<typeof loader>("root");
  const preview = data?.preview || false;

  return (
    <>
      <Outlet />
      {preview && (
        <>
          <SanityVisualEditing />
        </>
      )}
    </>
  );
}

```
