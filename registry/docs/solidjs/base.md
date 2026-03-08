Meta reference

# Base

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/base.mdx)

`Base` is a component that specifies the base URL for all relative URLs in the document. This provides a way to define the [`base`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) element of your document's `head`.

```
import { Base } from "@solidjs/meta";
<Base target="_blank" href="https://docs.solidjs.com/" />;
```

***

## [Usage](/solid-meta/reference/meta/base#usage)

### [Adding `base` tag](/solid-meta/reference/meta/base#adding-base-tag)

```
import { MetaProvider, Base } from "@solidjs/meta";
export default function Root() {  return (    <MetaProvider>      <Base target="_blank" href="https://docs.solidjs.com/" />    </MetaProvider>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/base.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/base)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   1. [Adding base tag](#adding-base-tag)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/base.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/base.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/base)
