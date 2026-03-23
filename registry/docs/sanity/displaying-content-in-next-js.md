# Displaying content in Next.js

## Install a new Next.js application

![Video](https://stream.mux.com/QSs5g22NaumIiAkggFufaDtEpCumej1j)

If you have an *existing* application, skip this first step and adapt the rest of the lesson to install Sanity dependencies to fetch and render content.

**Run** the following in a new tab or window in your Terminal (keep the Studio running) to create a new Next.js application with Tailwind CSS and TypeScript.

**Terminal**

```sh
# outside your studio directory
npx create-next-app@latest nextjs-hello-world --tailwind --ts --app --src-dir --eslint --import-alias "@/*" --turbopack
cd nextjs-hello-world
```

You should now have your Studio and Next.js application in two separate, adjacent folders:

```text
├─ /nextjs-hello-world
└─ /studio-hello-world
```

## Install Sanity dependencies

**Run** the following inside the `nextjs-hello-world` directory to install:

- [next-sanity](https://github.com/sanity-io/next-sanity) a collection of utilities for integrating Next.js with Sanity
- [@sanity/image-url](https://www.sanity.io/docs/apis-and-sdks/image-urls) helper functions to take image data from Sanity and create a URL

**Terminal**

```sh
# in nextjs-hello-world
npm install --legacy-peer-deps next-sanity @sanity/image-url
```

## Start the development server

**Run** the following command and open [http://localhost:3000](http://localhost:3333) in your browser.

**Terminal**

```sh
# in nextjs-hello-world
npm run dev
```

## Configure the Sanity client

To fetch content from Sanity, you’ll first need to configure a Sanity Client.

**Create** a directory `nextjs-hello-world/src/sanity` and within it create a `client.ts` file, with the following code:

**/nextjs-hello-world/src/sanity/client.ts**

```
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "<your-project-id>",
  dataset: "<your-dataset>",
  apiVersion: "2024-01-01",
  useCdn: false,
});
```

## Display content on the homepage

Next.js uses server components for loading data at specific routes. The current home page can be found at `src/app/page.tsx`.

**Update** it to render a list of posts fetched from your Sanity dataset using the code below.

**/nextjs-hello-world/src/app/page.tsx**

```tsx
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

## Display individual posts

**Create** a new route for individual post pages.

The dynamic value of a slug when visiting `/[slug]` in the URL is used as a parameter in the GROQ query used by Sanity Client.

Notice that we’re using [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)’s `prose` class name to style the post’s `body` block content. Install it in your project following their documentation.

**/nextjs-hello-world/src/app/\[slug]/page.tsx**

```tsx
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
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

# Administer organizations, projects, datasets, and users

#### Manage your team

[Roles](https://www.sanity.io/docs/user-guides/roles)

[Projects, organizations, and billing](https://www.sanity.io/docs/platform-management/projects-organizations-and-billing)

[Roles @ Sanity Learn](https://www.sanity.io/learn/course/introduction-to-users-and-roles/introduction)

#### Understand pricing

[Plans and Payments](https://www.sanity.io/docs/platform-management/plans-and-payments)

[Pricing plans](https://www.sanity.io/pricing)
