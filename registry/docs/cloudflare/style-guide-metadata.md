# Metadata

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/how-we-docs/metadata.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Metadata

Page-level metadata - content type, associated products, last updated, word count - lets you take a broader, more strategic view of your content.

It helps you answer questions like the following:

- As a writer:
  - Am I missing something obvious in the content strategy?
  - What are some pages I should be updating right now?
  - How does X tutorial compare with all tutorials? Is it getting more traffic than the baseline?
- As a manager:
  - Are we over or underinvesting in a specific product area? Or a specific content type?
  - How does the traffic to this set of products compare to another?
  - How can I communicate broader trends to my stakeholders?

You cannot answer these questions without some level of rollup reporting, which you can only get through metadata.

## What we track

At Cloudflare, we track the following information about different pages:

| Value                        | Description                                                                                                                                                                    | Examples                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| **Product**                  | The top-level subfolder of the page.                                                                                                                                           | dns, bots                                   |
| **Product Group**            | The primary area that each product falls into.                                                                                                                                 | Application Performance, Developer Platform |
| **Tags**                     | Specific [atttributes](https://developers.cloudflare.com/style-guide/frontmatter/tags/) related to a page's content or purpose.                                                | AI, JavaScript, Headers                     |
| **Content type**             | The primary purpose of the page, which corresponds to our listed [content types](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/). | how-to, faq                                 |
| **Last modified**            | How many days ago was this page last updated?                                                                                                                                  | 63                                          |
| **Last reviewed** (optional) | How many days ago was this page last reviewed?                                                                                                                                 | 100                                         |

Of all of these values, there is a bit of nuance to our **Last reviewed** metadata. **Last reviewed** differs from **Last modified** because a review is more thorough than an update. A review implies that all contents of the page have been vetted for accuracy.

Because of this extra effort, we only track **Last reviewed** for content types that are particularly important to the user journey and require an additional level of maintenance. At the moment, those content types are [tutorials](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/tutorial/).

***

## How we track

We set these values at two different levels, the folder level and the page level.

### Folder-level attributes

We set two values at a folder level, `Product` and `Product Group`. We take this approach because we can assume that these values apply every page within that folder.

For example, here's the content from our [DNS folder ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/products/dns.yaml).

dns.yaml

```

name: DNS


product:

  title: DNS

  url: /dns/

  group: Application performance


meta:

  title: Cloudflare DNS docs

  description: Cloudflare DNS provides the fastest, most resilient, and simplest

    managed DNS platform to meet your needs.

  author: "@cloudflare"


resources:

  community: https://community.cloudflare.com/tags/c/reliability/7/none

  dashboard_link: https://dash.cloudflare.com/?to=/:account/:zone/dns

  learning_center: https://www.cloudflare.com/learning/dns/what-is-dns/


```

### Page-level attributes

We primarily set page-level attributes through the [page's frontmatter](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/).

For example, here are the values set for our [Build a Slackbot tutorial](https://developers.cloudflare.com/workers/tutorials/build-a-slackbot/).

build-a-slackbot.mdx

```

---

updated: 2024-06-05

difficulty: Beginner

pcx_content_type: tutorial

title: Build a Slackbot

tags:

  - Hono

languages:

  - TypeScript

---


```

However, the `last_modified` value is pulled automatically from the git history of a file.

***

## How we use values

We choose to render all of these values as specific `meta` properties for each page.

For example, these are the `meta` properties and values on the [AI Crawl Control - Get Started page](https://developers.cloudflare.com/ai-crawl-control/get-started/).

Get Started | AI Crawl Control

```

<meta name="pcx_content_group" content="Core platform" >

<meta name="pcx_product" content="AI Crawl Control" >

<meta name="pcx_content_type" content="get-started" >

<meta name="pcx_last_modified" content="7" >


```

We render these values using a custom override for our [Head.astro ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/src/components/overrides/Head.astro) file. If specific values are set, we then add them as meta tags onto the page.

Head.astro

```

    if (product.data.product.title) {

      ["pcx_product", "algolia_product_filter"].map((name) => {

        metaTags.push({

          name,

          content: product.data.product.title,

        });

      });

    }


```

### Benefits

We get two primary benefits from structuring our content this way.

First, our metadata is easily consumable by anyone who crawls our pages. We started using these values for our Algolia search configuration and internal reporting, but have since expanded to sharing this data with other teams that consume our content for AI systems too.

Additionally, this decisions means that our GitHub repo is always the source of truth. We do not have to keep a spreadsheet or mapping updated elsewhere, the source of truth is always in our repo and - by extension - a lot more likely to be accurate than if we maintained multiple sources of truth.

***

## How we ensure quality

It's difficult to avoid errors with this kind of metadata, specifically because we are relying on freeform text entry in the frontmatter of individual files.

We utilize [Zod schemas ↗](https://zod.dev/) heavily in our Astro site, which are defined in [src/schemas/ ↗](https://github.com/cloudflare/cloudflare-docs/tree/production/src/schemas).

These allow us to provide [Intellisense guidance ↗](https://docs.astro.build/en/reference/experimental-flags/content-intellisense/) for contributors using IDEs for local development.

![Intellisense in action](https://developers.cloudflare.com/_astro/intellisense.An5j893x_Z1QY0z6.webp)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/how-we-docs/","name":"How we docs"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/how-we-docs/metadata/","name":"Metadata"}}]}
```
