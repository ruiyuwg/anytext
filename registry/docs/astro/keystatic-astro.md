# Keystatic & Astro

> Add content to your Astro project using Keystatic as a CMS

[Keystatic](https://keystatic.com/) is an open source, headless content-management system that allows you to structure your content and sync it with GitHub.

Tip

If you’re starting a **new Astro + Keystatic project from scratch**, you can use the [Keystatic CLI](https://keystatic.com/docs/quick-start#keystatic-cli) to generate a new project in seconds:

- npm

  ```shell
  npm create @keystatic@latest
  ```

- pnpm

  ```shell
  pnpm create @keystatic@latest
  ```

- Yarn

  ```shell
  yarn create @keystatic
  ```

Select the Astro template, and you’ll be ready to [deploy](#deploying-keystatic--astro)!

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- An existing Astro project [with an adapter configured](/en/guides/on-demand-rendering/).

Note

If you intend to sync Keystatic’s data with GitHub, you will also need **a GitHub account with `write` permissions** on the repository for this project.

## Installing dependencies

[Section titled “Installing dependencies”](#installing-dependencies)

Add both the Markdoc (for content entries) and the React (for the Keystatic Admin UI Dashboard) integrations to your Astro project, using the `astro add` command for your package manager.

- npm

  ```shell
  npx astro add react markdoc
  ```

- pnpm

  ```shell
  pnpm astro add react markdoc
  ```

- Yarn

  ```shell
  yarn astro add react markdoc
  ```

You will also need two Keystatic packages:

- npm

  ```shell
  npm install @keystatic/core @keystatic/astro
  ```

- pnpm

  ```shell
  pnpm add @keystatic/core @keystatic/astro
  ```

- Yarn

  ```shell
  yarn add @keystatic/core @keystatic/astro
  ```

## Adding the Astro integration

[Section titled “Adding the Astro integration”](#adding-the-astro-integration)

Add the Astro integration from `@keystatic/astro` in your Astro config file:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config'


import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
+import keystatic from '@keystatic/astro'


// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
})
```

## Creating a Keystatic config file

[Section titled “Creating a Keystatic config file”](#creating-a-keystatic-config-file)

A Keystatic config file is required to define your content schema. This file will also allow you to connect a project to a specific GitHub repository (if you decide to do so).

Create a file called `keystatic.config.ts` in the root of the project and add the following code to define both your storage type (`local`) and a single content collection (`posts`):

keystatic.config.ts

```ts
import { config, fields, collection } from '@keystatic/core';


export default config({
  storage: {
    kind: 'local',
  },


  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
```

Already using content collections?

If you are already using [content collections](/en/guides/content-collections/) in your Astro project, then update the schema above to exactly match the collection(s) defined in your existing schema.

Keystatic is now configured to manage your content based on your schema.

## Running Keystatic locally

[Section titled “Running Keystatic locally”](#running-keystatic-locally)

To launch your Keystatic Admin UI dashboard, start Astro’s dev server:

```bash
npm run dev
```

Visit `http://127.0.0.1:4321/keystatic` in the browser to see the Keystatic Admin UI running.

## Creating a new post

[Section titled “Creating a new post”](#creating-a-new-post)

1. In the Keystatic Admin UI dashboard, click on the “Posts” collection.

2. Use the button to create a new post. Add the title “My First Post” and some content, then save the post.

3. This post should now be visible from your “Posts” collection. You can view and edit your individual posts from this dashboard page.

4. Return to view your Astro project files. You will now find a new `.mdoc` file inside the `src/content/posts` directory for this new post:

   - src/

     - content/

       - posts/

         - **my-first-post.mdoc**

5. Navigate to that file in your code editor and verify that you can see the Markdown content you entered. For example:

   ```markdown
   ---
   title: My First Post
   ---


   This is my very first post. I am **super** excited!
   ```

## Rendering Keystatic content

[Section titled “Rendering Keystatic content”](#rendering-keystatic-content)

Use Astro’s Content Collections API to [query and display your posts and collections](/en/guides/content-collections/#querying-collections), just as you would in any Astro project.

### Displaying a collection list

[Section titled “Displaying a collection list”](#displaying-a-collection-list)

The following example displays a list of each post title, with a link to an individual post page.

```tsx
---
import { getCollection } from 'astro:content'


const posts = await getCollection('posts')
---
<ul>
  {posts.map(post => (
    <li>
      <a href={`/posts/${post.slug}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

### Displaying a single entry

[Section titled “Displaying a single entry”](#displaying-a-single-entry)

To display content from an individual post, you can import and use the `<Content />` component to [render your content to HTML](/en/guides/content-collections/#rendering-body-content):

```tsx
---
import { getEntry } from 'astro:content'


const post = await getEntry('posts', 'my-first-post')
const { Content } = await post.render()
---


<main>
  <h1>{post.data.title}</h1>
  <Content />
</main>
```

For more information on querying, filtering, displaying your collections content and more, see the full content [collections documentation](/en/guides/content-collections/).

## Deploying Keystatic + Astro

[Section titled “Deploying Keystatic + Astro”](#deploying-keystatic--astro)

To deploy your website, visit our [deployment guides](/en/guides/deploy/) and follow the instructions for your preferred hosting provider.

You’ll also probably want to [connect Keystatic to GitHub](https://keystatic.com/docs/connect-to-github) so you can manage content on the deployed instance of the project.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- Check out [the official Keystatic guide](https://keystatic.com/docs/installation-astro)
- [Keystatic starter template](https://github.com/Thinkmill/keystatic/tree/main/templates/astro)

# KeystoneJS & Astro

> Add content to your Astro project using KeystoneJS as a CMS

[KeystoneJS](https://keystonejs.com/) is an open source, headless content-management system that allows you to describe the structure of your schema.
