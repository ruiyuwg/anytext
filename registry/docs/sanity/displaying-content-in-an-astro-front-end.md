# Displaying content in an Astro front end

## Install a new Astro application

![Video](https://stream.mux.com/BRpQTRNc2nAWQweqMyPFw5QoX7019MMOT)

If you have an *existing* application, skip this first step and adapt the rest of the lesson to install Sanity dependencies to fetch and render content.

**Run** the following in a new tab or window in your Terminal (keep the Studio running) to create a new Astro application with Tailwind CSS and TypeScript.

**Terminal**

```sh
# outside your studio directory
npm create astro@latest astro-hello-world -- --template with-tailwindcss --typescript strict --skip-houston --install --git
cd astro-hello-world
```

You should now have your Studio and Astro application in two separate, adjacent folders:

**your-project-folder**

```text
├─ /astro-hello-world
└─ /studio-hello-world
```

## Install Sanity dependencies

**Run** the following inside the `astro-hello-world` directory to:

- Install and configure the official Sanity integration [@sanity/astro](https://www.sanity.io/plugins/sanity-astro)
- Install [astro-portabletext](https://github.com/theisel/astro-portabletext) to render Portable Text

**Terminal**

```sh
# your-project-folder/astro-hello-world
npx astro add @sanity/astro -y
npm install astro-portabletext
```

## Add Types for Sanity Client

\*\*Update \*\*`tsconfig.json` with the following additional code for TypeScript support of Sanity Client.

**/astro-hello-world/src/tsconfig.json**

```json
{
  // ...other settings
  "compilerOptions": {
    "types": ["@sanity/astro/module"]
  }
}

```

## Configure the Sanity client

**Update** the integration configuration to configure a Sanity Client to fetch content.

**/astro-hello-world/astro.config.mjs**

```
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    // 👇 update these lines
    sanity({
      projectId: "xgztagdf",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],
});
```

## Start the development server

**Run** the following command and open <http://localhost:4321> in your browser.

**Terminal**

```sh
# your-project-folder/astro-hello-world
npm run dev
```

## Display content on a posts index page

Astro performs data fetching inside front-matter blocks (`---`) at the top of `.astro` files

**Create** a route for a page with a list of posts fetched from your Sanity dataset, and visit <http://localhost:4321/posts>

**/astro-hello-world/src/pages/posts/index.astro**

```tsx
---
import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const posts = await sanityClient.fetch<SanityDocument[]>(POSTS_QUERY);
---

<main class="container mx-auto min-h-screen max-w-3xl p-8">
  <h1 class="text-4xl font-bold mb-8">Posts</h1>
  <ul class="flex flex-col gap-y-4">
    {posts.map((post) => (
        <li class="hover:underline">
          <a href={`/posts/${post.slug.current}`}>
            <h2 class="text-xl font-semibold">{post.title}</h2>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </a>
        </li>
      ))}
  </ul>
</main>
```

## Display individual posts

**Create** a new route for individual post pages.

The dynamic value of a slug when visiting `/posts/[slug]` in the URL is used as a parameter in the GROQ query used by Sanity Client.

Notice that we’re using [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)’s `prose` class name to style the post’s `body` block content. Install it in your project following their documentation.

**/astro-hello-world/src/pages/posts/\[slug].astro**

```tsx
---
import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { PortableText } from "astro-portabletext";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const post = await sanityClient.fetch<SanityDocument>(POST_QUERY, Astro.params);

export async function getStaticPaths(): Promise<{ params: { slug: string } }> {
  const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`;
  return await sanityClient.fetch(SLUGS_QUERY, Astro.params);
}

const { projectId, dataset } = sanityClient.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const postImageUrl = post.image
  ? urlFor(post.image)?.width(550).height(310).url()
  : null;
---

<main class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
  <a href="/posts" class="hover:underline">&larr; Back to posts</a>
  {
    postImageUrl && (
      <img
        src={postImageUrl}
        alt={post.title}
        class="aspect-video rounded-xl"
        width="550"
        height="310"
      />
    )
  }
  <h1 class="text-4xl font-bold mb-8">{post.title}</h1>
  <div class="prose">
    <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
    {Array.isArray(post.body) && <PortableText value={post.body} />}
  </div>
</main>
```

# Deploying Studio and inviting editors

## Deploy your Studio with Sanity

![Video](https://stream.mux.com/CvYhCQr8e1oZt98NW202BZLLNv376VVKc)

In your Studio directory (`studio-hello-world`) run the following command to deploy your Sanity Studio.

**Terminal**

```sh
npm run deploy
```

## Invite a collaborator

Now that you’ve deployed your Studio, you can optionally invite a collaborator to your project. Navigate to your project in [Sanity Manage](https://www.sanity.io/manage), then select "Members".

They will be able to access the deployed Studio, where you can collaborate together on creating content.

# Agent Actions

#### Jump right in

[Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart)

[Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart)

[Translate quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart)

#### Core concepts

[Agent Actions introduction](https://www.sanity.io/docs/agent-actions/introduction)

[Creating instructions](https://www.sanity.io/docs/agent-actions/instructions)

[Operations](https://www.sanity.io/docs/agent-actions/operations)

#### Dive deeper

[Custom field actions](https://www.sanity.io/docs/studio/ai-assist-field-actions)

[HTTP reference](https://www.sanity.io/docs/http-reference/agent-actions)
