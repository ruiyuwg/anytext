# Image maintenance

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/how-we-docs/image-maintenance.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Image maintenance

Though valuable for user understanding, images are difficult to maintain. We have a few strategies that we use to help make this easier.

## Guidelines

We support a few different types of images in our docs, including:

- [Diagrams](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/diagrams/)
- [Screenshots](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/screenshots/)

Of these, we prefer Mermaid diagrams because they are searchable and easily changeable. The "cost" of updating a Mermaid diagram is much lower than re-taking a screenshot or working with a designer to update a diagram.

## Maintenance

The best way to improve image maintenance is to avoid using them.

The other way to streamline maintenance is to remove images that are no longer referenced in your documentation. This pattern becomes particularly helpful if you need to audit images for UI changes or leaked information, because then you are not wasting time looking at unused images too.

We do that through a combination of GitHub actions.

### Flag unused images

We have a specific GitHub action to [flag unused images ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/.github/workflows/image-audit.yml).

What the GitHub action does is:

1. Finds all `.png` or `.svg` files in our content.
2. Checks to see if those files are referenced in any of our MDX files.
3. Ceates a [GitHub issue ↗](https://github.com/cloudflare/cloudflare-docs/issues/23343) if there are unreferenced files.

### Evaluate image paths

In combination with [flagging unused images](#flag-unused-images), we also have logic in our [build process ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/astro.config.ts) to validate image paths.

astro.config.ts

```

export default defineConfig({

  site: "https://developers.cloudflare.com",

  markdown: {

    smartypants: false,

    remarkPlugins: [remarkValidateImages],

    rehypePlugins: [

      rehypeMermaid,

      rehypeExternalLinks,

      rehypeHeadingSlugs,

      rehypeAutolinkHeadings,

      // @ts-expect-error plugins types are outdated but functional

      rehypeTitleFigure,

      rehypeShiftHeadings,

    ],

  },


```

This line ensures that our custom [Remark plugin ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/src/plugins/remark/validate-images.ts) validates all images paths. If the path does not exist, we throw an error and prevent the site from building.

When paired with [flagging unused images](#flag-unused-images), this path validation ensures that a tech writer can safely delete unused files in a pull request. So long as the site builds correctly, you have only deleted image files that are not referenced anywhere.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/how-we-docs/","name":"How we docs"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/how-we-docs/image-maintenance/","name":"Image maintenance"}}]}
```
