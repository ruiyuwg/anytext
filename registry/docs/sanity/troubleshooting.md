# Troubleshooting

## Troubleshooting Overlays

### Styling of editable fields is incorrect

If the text on the page is breaking out of its container – or its container is much wider than normal – it can be resolved by splitting the encoded text out from the original text.

> Note: This is not due to the encoded characters themselves. This problem should only present itself if the element also uses negative letter-spacing in its CSS or is inside of a `<ReactWrapBalancer>`.

Then identify where the problematic element is rendered in code, for example:

```tsx
export function MyComponent({ text }: { text: string }) {
  return <h1>{text}</h1>;
}

```

Rewrite using `@vercel/stega` to avoid any styling issues:

```tsx
import { vercelStegaSplit } from "@vercel/stega";

export function MyComponent({ text }: { text: string }) {
  const { cleaned, encoded } = vercelStegaSplit(text);

  return (
    <h1>
      {cleaned}
      <span style={{ display: "none" }}>{encoded}</span>
    </h1>);
}

```

If you find yourself doing this more than once, you might like to extract this logic to a reusable component:

```tsx
import { vercelStegaSplit } from "@vercel/stega";

export default function Clean({ value }: { value: string }) {
  const { cleaned, encoded } = vercelStegaSplit(value);

  return encoded ? (
    <>
      {cleaned}
      <span style={{ display: "none" }}>{encoded}</span>
    </>) : (
    cleaned
  );
}

export function MyComponent({ text }: { text: string }) {
  return (
    <h1>
      <Clean value={text} />
    </h1>);
}

```

### Overlay displays over the wrong element

If the wrong element is highlighted when hovering, an additional attribute can be added to a containing element.

For example, if the following component highlights the `<h1>` and you want it to highlight the `<section>` element:

```html
<section>
	<h1>{dynamicTitle}</h1>
	<div>Hardcoded Tagline</div>
</section>

```

Add a data attribute to highlight the correct item:

- For Visual Editing with `@sanity/visual-editing`, add `data-sanity-edit-target`
- For Vercel Visual Editing, add `data-vercel-edit-target`

```html
<section data-sanity-edit-target>
	<h1>{dynamicTitle}</h1>
	<div>Hardcoded Tagline</div>
</section>

```

## Troubleshooting stega-encoding

### There are weird characters in your DOM

These are most probably the Stega encoded strings! They are a subset of [HTML entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity) that, when rendered, produce invisible output. Below is the string value of “Oxford Shoes” when it contains a Stega-encoded Content Source Map:

```json
Oxford Shoes&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&#xFEFF;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwj;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwnj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&zwnj;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&#xFEFF;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwj;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwnj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&zwj;&ZeroWidthSpace;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&zwj;&zwnj;&zwnj;&zwnj;&zwj;&#xFEFF;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&zwj;&#xFEFF;&#xFEFF;&zwnj;&zwj;&#xFEFF;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&zwnj;&zwj;&zwj;&zwnj;&zwnj;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwnj;&ZeroWidthSpace;&zwnj;&#xFEFF;&ZeroWidthSpace;&zwj;&zwnj;&zwj;&ZeroWidthSpace;&zwnj;&zwnj;&zwj;&zwnj;&zwj;&zwnj;&#xFEFF;&zwnj;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&zwnj;&ZeroWidthSpace;&zwj;&ZeroWidthSpace;&zwj;&zwnj;&#xFEFF;&#xFEFF;&zwnj;
```

When rendered in an HTML document, this string will still display as “Oxford Shoes.” You use [this tool](https://mothereff.in/html-entities) to test the string by pasting the value above into the “Encoded” input field.

### Comparing field values doesn’t work in preview mode

Your application likely evaluates values from the Content Lake to perform specific logic. If these values contain invisible encoded metadata, they may no longer work.

For example, imagine a function that determines that a Sanity document's market value is the same as the current market:

```tsx
function showDocument(document: SanityDocument, currentMarket: string) {
  return document.market === currentMarket
}

```

Without stega enabled, this function works as expected. However, if `document.market` contains encoded metadata, this comparison will fail.

If `document.market` is never shown on the page and will not benefit from Visual Editing, filtering it out of the stega encoding process is recommended. You can pass a [filtering function](https://reference.sanity.io/_sanity/client/index/FilterDefault/) to `stega.filter` when configuring the client.

Alternatively, [clean the value](https://reference.sanity.io/_sanity/client/stega/stegaClean/) before comparing it:

```tsx
import {stegaClean} from "@sanity/client/stega"

function showDocument(document: SanityDocument, currentMarket: string) {
  return stegaClean(document.market) === currentMarket
}

```

Since you'll likely do this more than once, consider extracting to a helper function.

## Troubleshooting embedded studios

When using Visual Editing with embedded studios—studios that render on a route in your front-end App—do not include Visual Editing or SanityLive components in the root or layout component for your studio.

We recommend creating dedicated content and studio layouts so you can keep your studio separate from the front-end visual editing components.
