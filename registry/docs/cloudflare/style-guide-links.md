# Links

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/how-we-docs/links.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Links

Though [links](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/links/) are an important part of documentation, they also have their own maintenance cost.

We have a few strategies we use to make link maintenance easier.

## Link types

There are 3 types of links:

- **External**: To other resources, such as [www.cloudflare.com ↗](http://www.cloudflare.com).
- **Internal**: To other pages in the docs, such as [Workers](https://developers.cloudflare.com/workers/).
- **Anchor**: To specific parts of other pages in our docs, such as [Proxied records](https://developers.cloudflare.com/dns/proxy-status/#proxied-records).

For each type of link, we think through a few different aspects of the experience.

- **External**:
  - *Source of truth*: Another site.
  - *Why does it break*: Another site changed its content.
  - *Customer experience of a break*: `404` page on another site.
- **Internal**:
  - *Source of truth*: Your site.
  - *Why does it break*: Your site changed its content.
  - *Customer experience of a break*: `404` page on your site.
- **Anchor**:
  - *Source of truth*: Your site.
  - *Why does it break*: Your site changed its content.
  - *Customer experience of a break*: Page load on your site. Content might be further down the page or have been moved to another page.

## Checks

### Internal links

Of these three [link types](#link-types), only **Internal** links:

- Happen *within* the context of a change to your site's content.
- Universally lead to a bad customer experience (a `404` page).
- Are easily auditable within the current context.

For these reasons, we choose to make a build **fail** based on broken internal links. For our implementation, we rely on the [Starlight link validator plugin ↗](https://github.com/HiDeoo/starlight-links-validator).

astro.config.ts

```

      plugins: [

        ...(runLinkCheck

          ? [

              starlightLinksValidator({

                errorOnInvalidHashes: false,

                errorOnLocalLinks: false,

                exclude: [

                  "/api/",

                  "/api/**",

                  "/changelog/**",

                  "/http/resources/**",

                  "{props.*}",

                  "/",

                  "/glossary/",

                  "/products/",

                  "/rules/snippets/examples/?operation=*",

                  "/rules/transform/examples/?operation=*",

                  "/ruleset-engine/rules-language/fields/reference/**",

                  "/workers/examples/?languages=*",

                  "/workers/examples/?tags=*",

                  "/workers-ai/models/**",

                ],

              }),

            ]

          : []),


```

Whether or not we run the link validation depends an environmental variable that we set in our [CI build process ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/.github/workflows/ci.yml#L52).

We also make two intentional decisions about this link auditing:

- **Absolute links, not relative**: We enforce absolute links (`/style-guide/how-we-docs/metadata/`) and fail on relative links (`../metadata/`) to avoid time-consuming maintenance in the future. This decision also helps with find/replace work and any future platform migrations.
- **No redirects**: We do not consider redirects when evaluating links. We have the current source of truth, so we should utilize that truth to its fullest (as well as helping us avoid redirect chains and future maintenance).

### External links

Though external links are not good for the customer experience, they also don't change within the context of a change to your site's content. Additionally, external link checking can be time consuming and error prone, which can slow down contributions.

We use an external SEO tool to help flag these broken external links for us, addressing them as needed (instead of making a build fail because of them).

### Anchor links

Anchor links do not have as dramatic as consequences of being wrong as internal links. If you have a broken anchor link, a customer will either need to manually scroll to the header or - in some cases - go to another page.

Because of these characteristics, we run [periodic, background checks ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/.github/workflows/anchor-link-audit.yml) to flag broken anchor links, using the `htmltest` library.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/how-we-docs/","name":"How we docs"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/how-we-docs/links/","name":"Links"}}]}
```
