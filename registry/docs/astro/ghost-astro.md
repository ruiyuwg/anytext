# Ghost & Astro

> Add content to your Astro project using Ghost as a CMS

[Ghost](https://github.com/TryGhost/Ghost) is an open-source, headless content management system built on Node.js.

## Integrating with Astro

[Section titled “Integrating with Astro”](#integrating-with-astro)

In this section, we’ll use the [Ghost content API](https://ghost.org/docs/content-api/) to bring your data into your Astro project.

### Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started you will need to have the following:

1. **An Astro project** - If you don’t have an Astro project yet, our [Installation guide](/en/install-and-setup/) will get you up and running in no time.

2. **A Ghost site** - It is assumed that you have a site set up with Ghost. If you don’t you can set one up on a [local environment.](https://ghost.org/docs/install/local/)

3. **Content API Key** - You can make an integration under your site’s `Settings > Integrations`. From there you can find your `Content API key`

### Setting up credentials

[Section titled “Setting up credentials”](#setting-up-credentials)

To add your site’s credentials to Astro, create an `.env` file in the root of your project with the following variable:

.env

```ini
CONTENT_API_KEY=YOUR_API_KEY
```

Now, you should be able to use this environment variable in your project.

If you would like to have IntelliSense for your environment variable, you can create a `env.d.ts` file in the `src/` directory and configure `ImportMetaEnv` like this:

src/env.d.ts

```ts
interface ImportMetaEnv {
  readonly CONTENT_API_KEY: string;
}
```

Tip

Read more about [using environment variables](/en/guides/environment-variables/) and `.env` files in Astro.

Your root directory should now include these new files:

- src/

  - **env.d.ts**

- **.env**

- astro.config.mjs

- package.json

### Installing dependencies

[Section titled “Installing dependencies”](#installing-dependencies)

To connect with Ghost, install the official content API wrapper [`@tryghost/content-api`](https://www.npmjs.com/package/@tryghost/content-api) using the command below for your preferred package manager, and optionally, a helpful package containing type definitions if you are using TypeScript:

- npm

  ```shell
  npm install @tryghost/content-api
  npm install --save @types/tryghost__content-api
  ```

- pnpm

  ```shell
  pnpm add @tryghost/content-api
  pnpm add --save-dev @types/tryghost__content-api
  ```

- Yarn

  ```shell
  yarn add @tryghost/content-api
  yarn add --dev @types/tryghost__content-api
  ```

## Making a blog with Astro and Ghost

[Section titled “Making a blog with Astro and Ghost”](#making-a-blog-with-astro-and-ghost)

With the setup above, you are now able to create a blog that uses Ghost as the CMS.

### Prerequisites

[Section titled “Prerequisites”](#prerequisites-1)

1. A Ghost blog
2. An Astro project integrated with the [Ghost content API](https://www.npmjs.com/package/@tryghost/content-api) - See [integrating with Astro](/en/guides/cms/ghost/#integrating-with-astro) for more details on how to set up an Astro project with Ghost.

This example will create an index page that lists posts with links to dynamically-generated individual post pages.

### Fetching Data

[Section titled “Fetching Data”](#fetching-data)

You can fetch your site’s data with the Ghost content API package.

First, create a `ghost.ts` file under a `lib` directory.

- src/

  - lib/

    - **ghost.ts**

  - pages/

    - index.astro

- astro.config.mjs

- package.json

Initialize an API instance with the Ghost API using the API key from the Ghost dashboard’s Integrations page.

src/lib/ghost.ts

```ts
import GhostContentAPI from '@tryghost/content-api';


// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
    url: 'http://127.0.0.1:2368', // This is the default URL if your site is running on a local environment
    key: import.meta.env.CONTENT_API_KEY,
    version: 'v5.0',
});
```

### Displaying a list of posts

[Section titled “Displaying a list of posts”](#displaying-a-list-of-posts)

The page `src/pages/index.astro` will display a list of posts, each with a description and link to its own page.

- src/

  - lib/

    - ghost.ts

  - pages/

    - **index.astro**

- astro.config.mjs

- package.json

Import `ghostClient()` in the Astro frontmatter to use the `posts.browse()` method to access blog posts from Ghost. Set `limit: all` to retrieve all posts.

src/pages/index.astro

```astro
---
import { ghostClient } from '../lib/ghost';
const posts = await ghostClient.posts
    .browse({
        limit: 'all',
    })
    .catch((err) => {
        console.error(err);
    });
---
```

Fetching via the content API returns an array of objects containing the [properties for each post](https://ghost.org/docs/content-api/#posts) such as:

- `title` - the title of the post
- `html` - the HTML rendering of the content of the post
- `feature_image` - the source URL of the featured image of the post
- `slug` - the slug of the post

Use the `posts` array returned from the fetch to display a list of blog posts on the page.

src/pages/index.astro

```astro
---
import { ghostClient } from '../lib/ghost';
const posts = await ghostClient.posts
    .browse({
        limit: 'all',
    })
    .catch((err) => {
        console.error(err);
    });
---


<html lang="en">
    <head>
        <title>Astro + Ghost 👻</title>
    </head>
    <body>


        {
            posts.map((post) => (
                <a href={`/post/${post.slug}`}>
                    <h1> {post.title} </h1>
                </a>
            ))
        }
    </body>
</html>
```

### Generating pages

[Section titled “Generating pages”](#generating-pages)

The page `src/pages/post/[slug].astro` [dynamically generates a page](/en/guides/routing/#dynamic-routes) for each post.

- src/

  - lib/

    - ghost.ts

  - pages/

    - index.astro

    - post/

      - **\[slug].astro**

- astro.config.mjs

- package.json

Import `ghostClient()` to access blog posts using `posts.browse()` and return a post as props to each of your dynamic routes.

src/pages/post/\[slug].astro

```astro
---
import { ghostClient } from '../../lib/ghost';


export async function getStaticPaths() {
    const posts = await ghostClient.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });


    return posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                post: post,
            },
        };
    });
}


const { post } = Astro.props;
---
```

Create the template for each page using the properties of each `post` object.

src/pages/post/\[slug].astro

```diff
---
import { ghostClient } from '../../lib/ghost';
export async function getStaticPaths() {
    const posts = await ghostClient.posts
        .browse({
            limit: 'all',
        })
        .catch((err) => {
            console.error(err);
        });
    return posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                post: post,
            },
        };
    });
}
const { post } = Astro.props;
---
+<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{post.title}</title>
    </head>
    <body>
        <img src={post.feature_image} alt={post.title} />


        <h1>{post.title}</h1>
        <p>{post.reading_time} min read</p>


        +<Fragment set:html={post.html} />
    </body>
</html>
```

Note

`<Fragment />` is a built-in Astro component which allows you to avoid an unnecessary wrapper element. This can be especially useful when fetching HTML from a CMS (e.g. Ghost or [WordPress](/en/guides/cms/wordpress/)).

### Publishing your site

[Section titled “Publishing your site”](#publishing-your-site)

To deploy your site visit our [deployment guide](/en/guides/deploy/) and follow the instructions for your preferred hosting provider.

## Community Resources

[Section titled “Community Resources”](#community-resources)

[Ghost CMS & Astro Tutorial ](https://matthiesen.xyz/blog/astro-ghostcms)

[Astro + Ghost + Tailwind CSS ](https://andr.ec/posts/astro-ghost-blog/)

[Building a Corporate site with Astro and Ghost ](https://artabric.com/post/building-a-corporate-site-with-astro-and-ghost/)

[\`astro-starter-ghost\` ](https://github.com/PhilDL/astro-starter-ghost)

Have a resource to share?

If you found (or made!) a helpful video or blog post about using Ghost with Astro, [add it to this list](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/cms/ghost.mdx)!

# GitCMS & Astro

> Integrate GitCMS into your Astro project for seamless content management

[GitCMS](https://gitcms.blog) turns GitHub into a Git-based headless CMS, offering a Notion-like markdown editing experience right in your browser.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Introducing GitCMS](https://gitcms.blog/posts/introducing-gitcms/)
- [How to Configure GitCMS for an Astro Site](https://gitcms.blog/posts/how-to-configure-gitcms/)
- [Install GitCMS Chrome Extension](https://gitcms.blog/extension)
