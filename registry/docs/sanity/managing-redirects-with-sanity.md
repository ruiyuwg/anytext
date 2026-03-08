# Managing redirects with Sanity

> \[!NOTE]
> This developer guide was contributed by Chris LaRocque (Senior Solution Architect).

It’s tough to nail down a ‘one size fits all’ approach to redirects with Sanity, as different frameworks handle redirects differently. This guide will explain how to model and implement redirects for a few of the major JavaScript frameworks.

## What’s a redirect?

A redirect is a way to navigate users from one URL to another. For example, if we had a page at "https://our-site.com/old-link" and updated the URL for that content to "https://our-site.com/new-link", a redirect would allow us to ensure that anybody with the old URL was brought to the new URL without seeing a 404 or error page.

## Why use redirects?

Redirects exist to ensure your users have a great experience on your website and that search engines can find and index your site content. When users hit a 404 page on your site, it disrupts their journey to finding your products/content, and when search engine crawlers see 404s, it can begin to impact the search ranking for those pages negatively. Common reasons for implementing redirects include:

- **Bring users to a new version of a page on your site** - Sometimes, when migrating sites or simply removing outdated content in favor of newer pages, you’ll need to redirect from the old to the new URL to avoid 404 errors. Examples include:- During a site migration: `/old-blog/my-blog => /blog/my-blog`

- When replacing old content: `/outdated-page => /new-better-page`

- **Short/memorable URLs that link to an existing page on your website** - Often for print ads (or any type of ad you can’t click on) it’s helpful to have an easy-to-memorize URL that points to other content on your site with a longer URL- `https://your-website.com/learn => <https://your-website.com/resources/blog/learn-about-our-area-of-expertise`>

### Why redirects have been tricky in the past for headless architecture

In “monolithic” CMSes like WordPress or Drupal, redirects are typically just a plugin away, as those platforms control your server as well as your content. When implementing a headless CMS, your front-end and CMS become “decoupled” so an extra bit of integration work is needed to have redirects live alongside your content. Because every front-end framework is different, the integration work needed for each is slightly different, but this guide, coupled with Sanity’s flexibility, should make it quick and easy.

## Best practices

### Redirect to relevant content

When possible, redirect users to content relevant to the initial page they were expecting to visit. Redirecting to a relevant page helps user experience, and search engine crawlers will penalize pages that redirect to content unrelated to the original page.

### Avoid redirect chains

Several redirects chained together can complicate crawling by search engines, as such testing your redirects should include checking if there are multiple redirects chained together. If your site has chained redirects, modify the redirect to get from A to B directly.

### Implement Search Console (or a similar tool)

Tools like Google Search Console give you insight into how your site is being indexed and where potential issues may live on your site.

### Fix errors at the source

If your content contains “old” links to redirected pages, redirects can act as a ‘band-aid’, but it is best to go back through these links and ensure they get updated to point directly to the new, non-redirected content instead of relying on the redirect to bring users where they need to go.

### Test your redirects

Make sure your team has an environment where redirects can be checked before going live

## Next.js

[Next.js redirect docs](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)

In Next.js, redirects can be defined in `next.config.js` in a function called `redirects` . This approach works in both app and page routers.

First, create a schema in Sanity for the redirect document type. Note that this schema matches the options expected in `next.config`

```typescript
// schemas/redirect.ts

import { defineType, defineField, type Rule, type Slug } from 'sanity'

// Shared validation for our redirect slugs
const slugValidator = (rule: Rule) =>
  rule.required().custom((value: Slug) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a /";
    }
    return true;
  });
  
export const redirectType = defineType({
    name: 'redirect',
    title: 'Redirect',
    type: 'document',
    description: 'Redirect for next.config.js',
    fields: [
        defineField({
            name: 'source',
            type: 'slug',
            validation: (rule: Rule) => slugValidator(rule),
        }),
        defineField({
            name: 'destination',
            type: 'slug',
            validation: (rule: Rule) => slugValidator(rule),
        }),
        defineField({
            name: 'permanent',
            type: 'boolean',
        }),
    ],
    // null / false makes it temporary (307)
    initialValue: {
	    permanent: true
	  },
})
```

Next, fetch the redirects from Sanity and return them in the `redirects` function inside `next.config.js` .

```javascript
// next.config.js	

const { createClient } = require("@sanity/client");

// Initialize Sanity client
const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  useCdn: false, // Ensure no accidental 'stale' data
  apiVersion: "2023-05-03" // use current date (YYYY-MM-DD) to target the latest API version
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Fetch redirects from Sanity
  async redirects() {
    const redirects = await client.fetch(
      `*[_type == "redirect"]{
        "source":source.current, 
        "destination":destination.current, 
        permanent
      }`,
    );
    return redirects;
  },
  // rest of next.config
};

module.exports = nextConfig;
```

## Astro

[Astro redirect docs](https://docs.astro.build/en/guides/routing/#configured-redirects)

Redirects can be placed in your `astro.config` file.

First model the redirects, I chose `from` and `to` as the name here, but they can be whatever you like (Astro just requires a key/value pair):

```typescript
// schemas/redirect.ts

import { defineType, defineField, type Rule, type Slug } from 'sanity'

// Shared validation for our redirect slugs
const slugValidator = (rule: Rule) =>
  rule.required().custom((value: Slug) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a /";
    }
    return true;
  });
  
export const redirectType = defineType({
    name: 'redirect',
    title: 'Redirect',
    type: 'document',
    description: 'Redirect for astro.config',
    fields: [
        defineField({
            name: 'from',
            type: 'slug',
            validation: (rule: Rule) => slugValidator(rule),
        }),
        defineField({
            name: 'to',
            type: 'slug',
            validation: (rule: Rule) => slugValidator(rule),
        })
    ],
})
```

Then, in `astro.config`:

1. Fetch our redirect documents from Sanity
2. Loop through the redirects to turn them into key/value pairs
3. Pass the new `redirects` object to our `defineConfig` function

```javascript
// astro.config.(ts|mjs)

import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  useCdn: false, // Ensure no accidental 'stale' data
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// Fetch our redirects from Sanity via GROQ
const redirectData = await client.fetch(
  `*[_type == "redirect"]{
	  "from": from.current,
	  "to": to.current
	}`
);

// Create empty object to add our redirects to
const redirects = {};

// Loop through redirects from Sanity and make them key/value pairs as Astro expects
redirectData.map((redirect) => (redirects[redirect.from] = redirect.to));

// Pass redirects to the config object
export default defineConfig({
  integrations: [
   // all your normal integrations / config info
  ],
  redirects, // pass the object we made above
});
```

Astro allows you to pass a redirect status code as well; you’d just need to add it to the schema in Sanity and modify the `redirectData.map()` function a bit.

## Remix

[Remix entry.server file docs](https://remix.run/docs/en/main/file-conventions/entry.server)

Remix is slightly different from Next/Astro (where you provide an array of redirects in the root config file), as Remix asks you to have an `entry.server` file where you can handle these redirects.

If you don’t already have an `entry.server` file in your Remix project, you can create one using `npx remix reveal` .

> \[!WARNING]
> It's important to use `npx remix reveal` instead of just creating your own file, as the default `entry.server` file contains crucial logic for your app that we’ll simply be adding redirects to

Our schema is general, as Remix doesn’t expect a specific object shape/naming convention:

```typescript
// schemas/redirect.ts

import { defineType, defineField, type Rule, type Slug } from 'sanity'

// Shared validation for our redirect slugs
const slugValidator = (rule: Rule) =>
  rule.required().custom((value: Slug) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a /";
    }
    return true;
  });
  
export const redirectType = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  description: "Redirect for Remix"
  fields: [
    defineField({
      name: "from",
      type: "slug",
      validation: (rule: Rule) => slugValidator(rule),
    }),
    defineField({
      name: "to",
      type: "slug",
      validation: (rule: Rule) => slugValidator(rule),
    }),
  ],
});
```

In `entry.server` change the default export `handleRequest` to an async function and add the following to the top of the function:

```tsx
// entry.server.(tsx|jsx)

import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  
  // Pathname for querying slugs, origin for creating new URL
  let { pathname, origin } = new URL(request.url);

  // Check for the specific redirect in Sanity
  const redirectData = await client.fetch(
    `*[_type == "redirect" && from.current == $pathname][0]{
      "from": from.current,
      "to": to.current
    }`,
    { pathname }
  );
  
  // If there is a redirect in Sanity for the current path, redirect to it.
  if (redirectData) {
	  // Redirects to home page come back as null
	  if(!redirectData.to){
	      return Response.redirect(`${origin}/`);
	  }
    return Response.redirect(`${origin}/${redirectData.to}`);
  }
  // rest of handleRequest function code
 }
```

In the code above we:

1. Check if the current pathname has a redirect stored in Sanity
2. If a redirect exists, redirect to that page

## Nuxt

[Nuxt server directory docs](https://nuxt.com/docs/guide/directory-structure/server)

[Guide that helped me understand Nuxt redirects](https://deltener.com/blog/creating-redirects-with-nuxt/)

Nuxt redirects are handled similar to the Remix example above, where they’re implemented as middleware for all requests to the app.

First, model a redirect in Sanity. Our schema is general, as Nuxt doesn’t expect a specific object shape/naming convention:

```typescript
// schemas/redirect.ts

import { defineType, defineField, type Rule, type Slug } from 'sanity'

// Shared validation for our redirect slugs
const slugValidator = (rule: Rule) =>
  rule.required().custom((value: Slug) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a /";
    }
    return true;
  });
  
export const redirectType = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  description: "Redirect for Nuxt"
  fields: [
    defineField({
      name: "from",
      type: "slug",
      validation: (rule: Rule) => slugValidator(rule),
    }),
    defineField({
      name: "to",
      type: "slug",
      validation: (rule: Rule) => slugValidator(rule),
    }),
  ],
});
```

Then in your Nuxt app’s `server` directory add a `middleware` directory with a file inside called `index.ts` (or whatever you want, any file in `server/middleware` be ran as middleware).

```typescript
// server/middleware/index.ts

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

export default defineEventHandler(async (event) => {
  let { pathname } = getRequestURL(event);

  // Check for the specific redirect in Sanity
  const redirectData = await client.fetch(
    `*[_type == "redirect" && from.current == $pathname][0]{
    "from": from.current,
    "to": to.current
  }`,
    { pathname }
  );
	
  // If we found a redirect, make it so!
  if (redirectData) {
    // When no 'to' is provided, it means redirect to the homepage
    if (!redirectData.to) {
      await sendRedirect(event, "/");
    }
    await sendRedirect(event, `/${redirectData.to}`);
  }
});
```

## Extra considerations

### For developers

- Whenever possible use [server-side redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects#serverside). All these examples are showing how to create server-side redirects.

- Understand how your framework handles redirects - This can include - **How to set redirects in your framework** - Some frameworks like Next.js or Astro let you set redirects in their configuration file, others like Remix or Nuxt have you set redirect logic in middleware.

- **What happens when there’s a conflict between a redirect and a created page** - Some frameworks will nullify redirects for a certain path if a page was created there, other frameworks allow the redirect to take precedence. Be sure to communicate this behavior to the folks who will be creating the redirects in Sanity so they know what to expect.

- **Understand how splat/dynamic route redirects work in your framework** - Some frameworks make it easy to implement splat redirects, others require a bit more work. It’s also worth considering if you *want* splat based redirects to be controlled in your CMS or rather have a pre-defined list stored in code, as often these types of redirects are used during a site migration and are somewhat “code-y” for CMS users.

- Provide authors an environment to test redirects - Give authors the ability to create + publish redirects autonomously by providing some type of staging area for them to ensure their redirects work before going live.

### For folks implementing redirects in Sanity

- Having multiple redirects for the same path can lead to unpredictable behavior - There should only ever be 1 redirect for each ‘from’ path, and that 1 redirect should only have 1 ‘to’ path set.
- When changing fields like slugs, make sure you're implementing redirects for those changed paths. We have [a guide for developers to automate the creation of redirects](https://www.sanity.io/guides/nextjs-automatic-redirects) if desired.
