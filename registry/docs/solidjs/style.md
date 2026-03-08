Meta reference

# Style

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/style.mdx)

`Style` is a component that adds the [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) element to your document's `head`.

```
import { Style } from "@solidjs/meta";
<Style>  {`    body {      background-color: #000;    }  `}</Style>;
```

***

## [Usage](/solid-meta/reference/meta/style#usage)

### [Adding `style` tag](/solid-meta/reference/meta/style#adding-style-tag)

The `Style` component can add CSS to style elements within your application. It is recommended to add styles in an external stylesheet and use a `Link` instead, rather than using this component, however.

Note

Styles within the `Style` component are not scoped.

```
import { MetaProvider, Style } from "@solidjs/meta";
export default function Root() {  return (    <MetaProvider>      <Style>{`          p {            color: #26b72b;          }        `}</Style>    </MetaProvider>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/style.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/style)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   1. [Adding style tag](#adding-style-tag)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/style.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/reference/meta/style.mdx\&page=https://docs.solidjs.com/solid-meta/reference/meta/style)
