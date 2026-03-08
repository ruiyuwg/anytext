# Hygraph & Astro

> Add content to your Astro project using Hygraph as a CMS

[Hygraph](https://hygraph.com/) is a federated content management platform. It exposes a GraphQL endpoint for fetching content.

## Integrating with Astro

[Section titled “Integrating with Astro”](#integrating-with-astro)

In this section, you’ll create a [Hygraph](https://hygraph.com/) GraphQL endpoint to fetch with Astro.

### Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need to have the following:

1. **A Hygraph account and project**. If you don’t have an account, you can [sign up for free](https://app.hygraph.com/signup) and create a new project.

2. **Hygraph access permissions** - In `Project Settings > API Access`, configure Public Content API permissions to allow read requests without authentication. If you haven’t set any permissions, you can click **Yes, initialize defaults** to add the required permissions to use the “High Performance Content API”.

### Setting up the endpoint

[Section titled “Setting up the endpoint”](#setting-up-the-endpoint)

To add your Hygraph endpoint to Astro, create a `.env` file in the root of your project with the following variable:

.env

```ini
HYGRAPH_ENDPOINT=YOUR_HIGH_PERFORMANCE_API
```

Now, you should be able to use this environment variable in your project.

If you would like to have IntelliSense for your environment variables, you can create a `env.d.ts` file in the `src/` directory and configure `ImportMetaEnv` like this:

src/env.d.ts

```ts
interface ImportMetaEnv {
  readonly HYGRAPH_ENDPOINT: string;
}
```

Note

Read more about [using environment variables](/en/guides/environment-variables/) and `.env` files in Astro.

Your root directory should now include these new files:

- src/

  - **env.d.ts**

- **.env**

- astro.config.mjs

- package.json

### Fetching data

[Section titled “Fetching data”](#fetching-data)

Fetch data from your Hygraph project by using the `HYGRAPH_ENDPOINT`.

For example, to fetch entries of a `blogPosts` content type that has a string field `title`, create a GraphQL query to fetch that content. Then, define the type of the content, and set it as the type of the response.

src/pages/index.astro

```astro
---
interface Post {
  title: string;
}


const query = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
      {
        blogPosts {
          title
        }
      }`,
  }),
};


const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
const json = await response.json();
const posts: Post[] = json.data.blogPosts;
---


<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
    {
      posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
        </div>
      ))
    }
  </body>
</html>
```

## Deploy

[Section titled “Deploy”](#deploy)

### Configuring Netlify Webhook

[Section titled “Configuring Netlify Webhook”](#configuring-netlify-webhook)

To set up a webhook in Netlify:

1. Deploy your site to Netlify with [this guide](/en/guides/deploy/netlify/). Remember to add your `HYGRAPH_ENDPOINT` to the environment variables.

2. Then Go to your Hygraph project dashboard and click on **Apps**.

3. Go to the marketplace and search for Netlify and follow the instructions provided.

4. If all went good, now you can deploy your website with a click in the Hygraph interface.

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [Hygraph + Astro example with `marked` for markdown parsing](https://github.com/camunoz2/example-astrowithhygraph)

# JekyllPad & Astro

> Manage your Astro site content with JekyllPad’s browser-based, GitHub-backed editor, no Git or Markdown hassles ever.

[JekyllPad](https://www.jekyllpad.com) is a lightweight, browser-based CMS that connects directly to your GitHub repository.

It provides a modern WYSIWYG + Markdown editor, commits changes straight to your repo, and runs 100% client‑side, so you can manage content for Astro without setting up servers or learning Git.

It is a client-side application that runs completely in user’s browser. This means data, oauth and security tokens, all stays in user’s browser. No installation required, works with any mobile or desktop browsers.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [JekyllPad CMS for Astro](https://www.jekyllpad.com/features/astro-headless-cms)
