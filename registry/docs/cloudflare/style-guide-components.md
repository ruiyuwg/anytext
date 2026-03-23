# Components

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Components

When you are [contributing to the Cloudflare Docs](https://developers.cloudflare.com/style-guide/contributions/), you can use our custom components to add additional formatting, such as buttons, tabs, and collapsible sections.

This guide shows you the basics of importing and adding a component to a page. Refer to each component page in this Style Guide to learn the specific props and requirements for each.

Our components are based on [Astro components ↗](https://docs.astro.build/en/basics/astro-components/) and are written in [MDX ↗](https://docs.astro.build/en/guides/markdown-content/), an extended version of Markdown. [Learn more about the Cloudflare Docs framework](https://developers.cloudflare.com/style-guide/how-we-docs/our-site/#site-framework).

## Add a component to a page

To add a component to a page:

1. Import the component to the page by adding this text directly below the [frontmatter](https://developers.cloudflare.com/style-guide/frontmatter/):

```
import { COMPONENT_NAME } from "~/components";  
;  
```

For example, if you were to add [the DashButton component](https://developers.cloudflare.com/style-guide/components/dash-button/) to the [Images getting started page](https://developers.cloudflare.com/images/get-started/), the top of the MDX file corresponding to that page would look like the following:

```
---  
pcx_content_type: get-started  
title: Getting started  
sidebar:  
  order: 2  
---  
import { DashButton } from "~/components";  
;  
```

2. Add the component to the page by adding this text anywhere on the page you want the component to appear:

```
<COMPONENT_NAME PROP_NAME="PROP_VALUE" />  
```

For example, if you were to add the `DashButton` component to some steps in the [Images getting started page](https://developers.cloudflare.com/images/get-started/), here is how the MDX file would look:

```
1. In the Cloudflare dashboard, go to the **Transformations** page.  
   <DashButton url="/?to=/:account/images/transformations" />  
2. Go to the specific zone where you want to enable transformations.  
```

This is how this example would display after it is published:

![DashButton component example](https://developers.cloudflare.com/_astro/dashbutton-example.Dr0ifkyr_Z1kTrT3.webp)

## Choose the right component

To choose the right component for your use case, browse this table which contains our most commonly used components and a visual example of each. For full documentation on all available components and their use cases, browse the individual component pages in this Style Guide.

| Component                                                                                              | Description & visual example                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [APIRequest](https://developers.cloudflare.com/style-guide/components/api-request/)                    | Styled API request block. Generate executable cURL API commands with the required API token permissions. ![APIRequest component example](https://developers.cloudflare.com/_astro/apirequest-example.hp_52Lbh_bbHow.webp)                                                                                                      |
| [Badge](https://developers.cloudflare.com/style-guide/components/badges/)                              | Small descriptive pill. Label content with status, version, category, or other short metadata. ![Badge component example](https://developers.cloudflare.com/_astro/badge-example.CPJJLYDk_12gjYu.webp)                                                                                                                         |
| [DashButton](https://developers.cloudflare.com/style-guide/components/dash-button/)                    | Dashboard deep-link button. Directly link users from documentation into a specific, relevant section of the Cloudflare Dashboard. ![DashButton component example](https://developers.cloudflare.com/_astro/dashbutton-example-2.LsbX6wB1_Z1vt9TR.webp)                                                                         |
| [Details](https://developers.cloudflare.com/style-guide/components/details/)                           | Click-to-expand content block. Hide non-essential, complex, or advanced technical content, allowing users to expand the section when needed. ![Details example](https://developers.cloudflare.com/_astro/details-example.ceYRqozl_Z1Afpdl.webp)                                                                                |
| [DirectoryListing](https://developers.cloudflare.com/style-guide/components/directory-listing)         | Auto-generated sub-page list. Automatically generate a navigable list of links to sub-pages within a specified documentation folder path. ![DirectoryListing component example](https://developers.cloudflare.com/_astro/directorylisting-example.D0UZYG46_2fpuzP.webp)                                                        |
| [Feature](https://developers.cloudflare.com/style-guide/components/feature/)                           | Product feature list item. Highlight a product feature with a description and a direct link button. ![Feature component example](https://developers.cloudflare.com/_astro/feature-example.DNvnxjFl_ZIz5LF.webp)                                                                                                                |
| [FeatureTable](https://developers.cloudflare.com/style-guide/components/feature-table/)                | Product plan comparison table. Display detailed feature information, including availability across different Cloudflare pricing plans. ![FeatureTable component example](https://developers.cloudflare.com/_astro/featuretable-example.CTRfuJLR_Z1pULwf.webp)                                                                  |
| [GlossaryTooltip](https://developers.cloudflare.com/style-guide/components/glossary-tooltip/)          | Hover-activated glossary popup. Provide non-disruptive, hover-activated definitions for technical terms pulled from the documentation glossary. ![Glossary tooltip example](https://developers.cloudflare.com/_astro/glossarytooltip-example.DDUbgTTz_11tHGv.webp)                                                             |
| [LinkCard](https://developers.cloudflare.com/style-guide/components/link-cards/)                       | Navigational cards. Present related tutorials, concepts, or guides in a visually engaging format. ![LinkCard component example](https://developers.cloudflare.com/_astro/linkcard-example.DPZVc0vQ_PdRzU.webp)                                                                                                                 |
| [PackageManagers](https://developers.cloudflare.com/style-guide/components/package-managers)           | Command switcher tabs. Display equivalent installation or execution commands for different package managers. ![DirectoryListing component example](https://developers.cloudflare.com/_astro/packagemanagers-example.BogJLxs-_Z1qYxHP.webp)                                                                                     |
| [Plan](https://developers.cloudflare.com/style-guide/components/plan/)                                 | Product plan availability badge. Show the plan required for a product or specific feature. ![Plan component example](https://developers.cloudflare.com/_astro/plan-example.CKcqf27w_Z23MLwH.webp)                                                                                                                              |
| [RelatedProduct](https://developers.cloudflare.com/style-guide/components/related-product/)            | Formatted product reference. Visually highlight and link to a specific, complementary Cloudflare product, also featuring the product's logo. ![RelatedProduct component example](https://developers.cloudflare.com/_astro/relatedproduct-example.PHvfW3li_Z7lfGK.webp)                                                         |
| [ResourcesBySelector](https://developers.cloudflare.com/style-guide/components/resources-by-selector/) | Filterable code example library. Pull and display lists of code examples and resources based on tags and content type. ![ResourcesBySelector component example](https://developers.cloudflare.com/_astro/resourcesbyselector-example.DNA80nn-_ZbAylP.webp)                                                                     |
| [Stream](https://developers.cloudflare.com/style-guide/components/stream/)                             | Embeddable video player. Display a video player optimized for Cloudflare Stream. ![Stream example](https://developers.cloudflare.com/_astro/stream-example.MfwqXnaD_1k472W.webp)                                                                                                                                               |
| [Tabs and TabItem](https://developers.cloudflare.com/style-guide/components/tabs/)                     | Switchable content tabs. Allow easy switching between content views for different code languages or configuration methods. ![Tabs example](https://developers.cloudflare.com/_astro/tabs-example.Bo6un1S4_Z1GgYd8.webp)                                                                                                        |
| [Type and MetaInfo](https://developers.cloudflare.com/style-guide/components/type-highlighting/)       | Pill-shaped data type badge and metadata annotation about a field or property. Type indicates API parameter data types (String, Integer) and MetaInfo indicates metadata constraints (Required, Optional, Read-only). ![Type and MetaInfo example](https://developers.cloudflare.com/_astro/type-example.DQadfRUC_Z6ujO1.webp) |
| [WranglerConfig](https://developers.cloudflare.com/style-guide/components/wrangler-config/)            | Tabbed Wrangler config display. Show Wrangler configuration files (JSONC and TOML) and bindings with automatic format switching. ![WranglerConfig example](https://developers.cloudflare.com/_astro/wranglerconfig-example.Bc0AW5RB_2dSHYY.webp)                                                                               |
| [YouTube](https://developers.cloudflare.com/style-guide/components/youtube/)                           | Embeddable video player. Embeds a YouTube video player with a specified video ID. ![YouTube example](https://developers.cloudflare.com/_astro/youtube-example.Du_GD2xs_RnBAu.webp)                                                                                                                                             |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}}]}
```
