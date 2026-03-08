Getting started

# Client setup

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/client-setup.mdx)

You can inject a tag into the `<head />` by rendering one of the head tag components when necessary. No special requirements are needed on the client side.

```
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
const App = () => (  <MetaProvider>    <div class="Home">      <Title>Title of page</Title>      <Link rel="canonical" href="http://solidjs.com/" />      <Meta name="example" content="whatever" />      // ...    </div>  </MetaProvider>);
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/getting-started/client-setup.mdx\&page=https://docs.solidjs.com/solid-meta/getting-started/client-setup)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/client-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/getting-started/client-setup.mdx\&page=https://docs.solidjs.com/solid-meta/getting-started/client-setup)
