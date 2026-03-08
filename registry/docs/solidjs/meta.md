Meta reference

# Meta

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/meta.mdx)

The `<Meta>` component represents metadata that cannot be represented by other HTML elements. It is a wrapper for the native [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) element and has the same properties.

```
import { Meta } from "@solidjs/meta";
<Meta name="description" content="My site description" />;
```

`Meta` components can be placed in the [`MetaProvider`](/solid-meta/reference/meta/metaprovider) or added throughout the application for additional metadata or override parents. `Meta` tags are considered the same and will be overridden if `name` attributes match.

***

## [Usage](/solid-meta/reference/meta/meta#usage)

### [Adding `meta` tag](/solid-meta/reference/meta/meta#adding-meta-tag)

```
import { MetaProvider, Meta } from "@solidjs/meta";
export default function Root() {  return (    <MetaProvider>      <Meta charset="utf-8" />      <Meta name="viewport" content="width=device-width, initial-scale=1" />      <Meta name="description" content="Hacker News Clone built with Solid" />    </MetaProvider>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/meta.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/meta)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   1. [Adding meta tag](#adding-meta-tag)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/meta.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/meta.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/meta)
