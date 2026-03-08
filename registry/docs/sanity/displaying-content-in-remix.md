# Displaying content in Remix

## Install a new React Router 7 (Remix) application

![Video](https://stream.mux.com/BImVH3jL01viMdWCMfBbfSdrD2Gg01oEB01)

If you have an *existing* application, skip this first step and adapt the rest of the lesson to install Sanity dependencies to fetch and render content.

**Run** the following in a new tab or window in your Terminal (keep the Studio running) to create a new React Router 7 application with Tailwind CSS and TypeScript.

**Terminal**

```sh
# outside your studio directory
npx create-react-router@latest react-router-{{PROJECT_NAME_SLUGIFIED}} -y
cd react-router-{{PROJECT_NAME_SLUGIFIED}}
```

You should now have your Studio and React Router 7 application in two separate, adjacent folders:

**your-project-folder**

```text
├─ /react-router-{{PROJECT_NAME_SLUGIFIED}}
└─ /studio-{{PROJECT_NAME_SLUGIFIED}}
```

## Install Sanity dependencies

**Run** the following inside the `react-router-hello-world` directory to install:

- [@sanity/client](https://reference.sanity.dev/_sanity/client/) for fetching content from Sanity
- [@sanity/image-url](https://github.com/sanity-io/image-url) helper functions to take image data from Sanity and create a URL
- [@portabletext/react](https://github.com/portabletext/react-portabletext) to render Portable Text as React components

**Terminal**

```sh
# in react-router-{{PROJECT_NAME_SLUGIFIED}}
npm install @sanity/client @sanity/image-url @portabletext/react
```

## Start the development server

**Run** the following command and open <http://localhost:5173> in your browser.

**Terminal**

```sh
# in react-router-{{PROJECT_NAME_SLUGIFIED}}
npm run dev
```

## Configure the Sanity client

To fetch content from Sanity, you’ll first need to configure a Sanity Client.

**Create** a directory `react-router-hello-world/app/sanity` and within it create a `client.ts` file, with the following code:

**/react-router-hello-world/app/sanity/client.ts**

```
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
```

## Display content on the home page

React Router uses a `loader` function exported from **routes** for server-side fetching of data. Routes are configured in the `app/routes.ts` file.

The default home page can be found at `app/routes/home.tsx`

**Update** it to render a list of posts fetched from your Sanity dataset using the code below.

**/react-router-hello-world/app/routes/home.tsx**

```tsx
import type { SanityDocument } from "@sanity/client";
import { Link } from "react-router";
import { client } from "~/sanity/client";
import type { Route } from "./+types/home";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export async function loader() {
  return { posts: await client.fetch<SanityDocument[]>(POSTS_QUERY) };
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link to={`/${post.slug.current}`}>
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

The dynamic value of a slug when visiting `/:post` in the URL is used as a parameter in the GROQ query used by Sanity Client.

Notice that we’re using [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)’s `prose` class name to style the post’s `body` block content. Install it in your project following their documentation.

**Update** the `routes.ts` configuration file to load this route when individual post links are clicked.

**/react-router-hello-world/app/routes/post.tsx**

```tsx
import { Link } from "react-router";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import type { Route } from "../+types/root";
import { client } from "~/sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export async function loader({ params }: Route.LoaderArgs) {
  return { post: await client.fetch<SanityDocument>(POST_QUERY, params) };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link to="/" className="hover:underline">
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

**/react-router-hello-world/app/routes.ts**

```
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/:slug", "routes/post.tsx"),
] satisfies RouteConfig;

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

# Media Library

#### Get started

[Media Library Introduction](https://www.sanity.io/docs/media-library/introduction)

[Configure your library](https://www.sanity.io/docs/media-library/configure-library)

[Configure Studio](https://www.sanity.io/docs/media-library/configure-studio)

[Upload assets programmatically](https://www.sanity.io/docs/media-library/upload-assets)

#### Next steps

[Working with video](https://www.sanity.io/docs/media-library/working-with-video)

[Importing assets to Media Library](https://www.sanity.io/docs/media-library/importing-assets)

[Create an aspect](https://www.sanity.io/docs/media-library/create-aspect)

#### Dive deeper

[Media Library API reference](https://www.sanity.io/docs/http-reference/media-library)

[Link assets to documents](https://www.sanity.io/docs/media-library/link-media-assets)
