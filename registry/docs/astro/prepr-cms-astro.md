# Prepr CMS & Astro

> Add content to your Astro project using Prepr as a CMS

[Prepr CMS](https://www.prepr.io/) is a headless CMS with built-in personalization.

## Integrating with Astro

[Section titled “Integrating with Astro”](#integrating-with-astro)

Prepr CMS provides a [GraphQL API](https://docs.prepr.io/reference/graphql/v1/overview) to connect your data to Astro.

### Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need the following:

- A new or existing Astro project configured for [on-demand rendering](/en/guides/on-demand-rendering/).
- [A free Prepr account](https://signup.prepr.io/)
- [A Prepr environment with existing blog posts](https://docs.prepr.io/account/set-up-environments#create-an-envirntonment). These posts must include a `title` and `content`. Other fields are optional.

### Setting up credentials

[Section titled “Setting up credentials”](#setting-up-credentials)

To add the Prepr endpoint to your Astro project, create a `.env file` in the root of your project if one does not already exist and add the following variable:

.env

```ini
PREPR_ENDPOINT=YOUR_PREPR_API_URL
```

You will find your `YOUR_PREPR_API_URL` value from your Prepr account settings:

1. Go to  **Settings > Access tokens** to view both your Preview and Production access tokens.

2. Use the **API URL** value from the **GraphQL Production** access token to only retrieve published content items for your Astro site.

### Configuring the Prepr endpoint

[Section titled “Configuring the Prepr endpoint”](#configuring-the-prepr-endpoint)

Create a new folder `src/lib/` and add a new file called `prepr.js`. This is where you will configure the Prepr endpoint. Add the following code to fetch your data from Prepr CMS:

src/lib/prepr.js

```js
export async function Prepr(query, variables) {
    const response = await fetch(import.meta.env.PREPR_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
    })
    return response
}
```

Your root directory should now include these files:

- src/

  - lib/

    - **prepr.js**

- **.env**

- astro.config.mjs

- package.json

### Fetching data

[Section titled “Fetching data”](#fetching-data)

You will fetch your data from Prepr by writing queries to interact with its GraphQL API.

#### Create a GraphQL query to retrieve your blog articles:

[Section titled “Create a GraphQL query to retrieve your blog articles:”](#create-a-graphql-query-to-retrieve-your-blog-articles)

1. Create a new folder `src/queries/` and add a file named `get-articles.js`.

2. Add the following query to this file to retrieve all articles:

   src/queries/get-articles.js

   ```js
   const GetArticles = `
   query {
       Articles {
         items {
           _id
           _slug
           title
       }
     }
   }
   `
   export default GetArticles
   ```

3. To display a linked list of your blog posts on a page, import and execute your query, including the necessary Prepr endpoint. You will then have access to all your posts titles and their slugs to render to the page. (In the next step, you will [create individual pages for your blog posts](#creating-individual-blog-post-pages).)

   src/pages/index.astro

   ```diff
   ---
   import Layout from '../layouts/Layout.astro';
   +import { Prepr } from '../lib/prepr.js';
   +import GetArticles from '../queries/get-articles.js';


   +const response = await Prepr(GetArticles)
   +const { data } = await response.json()
   +const articles = data.Articles
   ---



     
       My blog site
     
     
       +{
   +      articles.items.map((post) => (
           
             {post.title}
           
   +      ))
       +}
     

   ```

Your root directory should include these new files:

- src/

  - lib/

    - prepr.js

  - pages/

    - index.astro

  - **queries** /

    - **get-articles.js**

- .env

- astro.config.mjs

- package.json

#### Creating individual blog post pages

[Section titled “Creating individual blog post pages”](#creating-individual-blog-post-pages)

To create a page for each blog post, you will execute a new GraphQL query on a [dynamic routing](/en/guides/routing/#on-demand-dynamic-routes) `.astro` page. This query will fetch a specific article by its slug and a new page will be created for each individual blog post.

1. Create a file called `get-article-by-slug.js` in the `queries` folder and add the following to query a specific article by its slug and return data such as the article `title` and `content`:

   src/lib/queries/get-article-by-slug.js

   ```js
   const GetArticleBySlug = `
   query ($slug: String) {
      Article (slug: $slug) {
        _id
        title
        content {
          __typename
          ... on Text {
            body
            text
          }
          ... on Assets {
            items {
              url
            }
          }
        }
      }
   }`


   export default GetArticleBySlug
   ```

   Tip

   You can create and [test GraphQL queries](https://docs.prepr.io/reference/graphql/v1/test-queries) using the [Apollo explorer](https://studio.apollographql.com/sandbox/explorer) in Prepr. Open the API Explorer from the *Article* content item page in Prepr. The Article content is stored in a *Dynamic content field*. Check out the GraphQL docs for more details on [how to fetch the data within this field](https://docs.prepr.io/reference/graphql/v1/schema-field-types-dynamic-content-field).

2. Inside the `src/pages` folder, create a file called `[…slug].astro`. Add the following code to import and execute the query from the previous step and display the retrieved article:

   src/pages/\[...slug].astro

   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import {Prepr} from '../lib/prepr.js';
   import GetArticleBySlug from '../queries/get-article-by-slug.js';


   const { slug } = Astro.params;
   const response = await Prepr(GetArticleBySlug, {slug})
   const { data } = await response.json()
   const article = data.Article
   ---



     
       {article.title}
       {
         article.content.map((content) => (
           
             {
               content.__typename === "Assets" &&
               
             }
             {
               content.__typename === 'Text' &&
               
             }
           
         ))
       }
     

   ```

Your root directory should now include these new files:

- src/

  - lib/

    - prepr.js

  - pages/

    - index.astro
    - **\[…slug].astro**

  - queries/

    - get-articles.js
    - **get-article-by-slug.js**

- .env

- astro.config.mjs

- package.json

Now, when you click an article link from the main list of blog posts, you will be taken to a page with its individual content.

### Publishing your site

[Section titled “Publishing your site”](#publishing-your-site)

To deploy your Prepr blog, visit our [deployment guides](/en/guides/deploy/) and follow the instructions for your preferred hosting provider.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- Follow the [Prepr CMS Astro quickstart](https://github.com/preprio/astro-quick-start) guide to make a simple blog with Astro and Prepr CMS. 
- Check out the [Connecting Prepr CMS to Astro](https://docs.prepr.io/connecting-front-end-apps/astro) for an overview of Astro and Prepr CMS resources.

# Prismic & Astro

> Add content to your Astro project using Prismic as a CMS

[Prismic](https://prismic.io/) is a headless content management system.

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [Building with Astro & Prismic - w/ Nate Moore](https://www.youtube.com/watch?v=qFUfuDSLdxM) (livestream) and the [repo from the show](https://github.com/natemoo-re/miles-of-code).

# Sanity & Astro

> Add content to your Astro project using Sanity as a CMS

[Sanity](https://www.sanity.io) is a headless content management system that focuses on [structured content](https://www.sanity.io/structured-content-platform).

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Official Sanity integration for Astro](https://www.sanity.io/plugins/sanity-astro)

- [Build your blog with Astro and Sanity](https://www.sanity.io/guides/sanity-astro-blog)

- [A minimal Astro site with a Sanity Studio](https://www.sanity.io/templates/astro-sanity-clean)

## Themes

[Section titled “Themes”](#themes)

- [![](/_astro/astro-chef-project.CkjCJgM-_ZI34Cs.webp) The Balanced Chef](https://astro.build/themes/details/the-balanced-chef/)

# Sitecore Experience Manager & Astro

> Add content to your project using Sitecore as your CMS.

[Sitecore Experience Manager (XM)](https://www.sitecore.com/products/experience-manager) is an enterprise-level content management system built on ASP.NET.

## Getting started

[Section titled “Getting started”](#getting-started)

1. [Create a Sitecore Headless website](https://doc.sitecore.com/xp/en/developers/sxa/103/sitecore-experience-accelerator/create-a-headless-tenant-and-site.html) following Sitecore’s official documentation.

2. Run the following project initialization command in your terminal:

   ```shell
   npx @astro-sitecore-jss/create-astro-sitecore-jss@latest
   ```

3. Follow the instructions in the terminal to create your project.

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [Sitecore JavaScript Software Development Kit for Astro](https://github.com/exdst/jss-astro-public) on GitHub
- [Introduction to Sitecore with Astro](https://exdst.com/posts/20231002-sitecore-astro)
- [Starting Your First Sitecore Astro Project](https://exdst.com/posts/20240103-first-sitecore-astro-project)

# Sitepins & Astro

> Use Sitepins to manage content for your Astro project with a Git-based visual CMS.

[Sitepins](https://sitepins.com) is a Git-based, headless CMS for websites built with modern frameworks like Astro. It offers a clean WYSIWYG editor, a version-controlled content workflow, and seamless integration with Astro and other SSGs.

## Getting started

[Section titled “Getting started”](#getting-started)

1. [Create a Sitepins account](https://app.sitepins.com/register).

2. Connect your GitHub repository that contains your Astro project.

3. Configure your content, media and config folders and start editing in the visual editor.

Once connected, Sitepins will sync your content from the selected folder and provide a visual interface to manage and publish content with full Git version control.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Sitepins Website](https://sitepins.com)
- [Documentation](https://docs.sitepins.com)
- [Live Demo](https://demo.sitepins.com)

# Spinal & Astro

> Add content to your project using Spinal as your CMS.

[Spinal](https://spinalcms.com/cms-for-astro/) is a commercial, SaaS-focused, Git-based CMS.

## Getting started

[Section titled “Getting started”](#getting-started)

1. [Create a Spinal account](https://spinalcms.com/signup/).

2. Connect your GitHub account to Spinal.

3. Select your Astro repository when prompted.

All Markdown content from the selected folder will be imported into your Spinal account and is ready to be edited.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Documentation theme built for Astro with Tailwind CSS](https://spinalcms.com/resources/astro-documentation-theme-with-tailwind-css/)

## Production Sites

[Section titled “Production Sites”](#production-sites)

The following sites use Astro + Spinal in production:

- [spinalcms.com](https://spinalcms.com/) (all blog articles, documentation, changelog, feature pages, etc.)
