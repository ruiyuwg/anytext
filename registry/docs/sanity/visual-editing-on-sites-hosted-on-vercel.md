# Visual Editing on sites hosted on Vercel

![Heading element with the text: "Having fun while travelling". The heading has an overlay marking it as editable with a label reading "Open in Sanity Studio"](https://cdn.sanity.io/images/3do82whm/next/5c546d0a0c282340b54a8ca9bab3a8aac7747251-1656x524.png)

The feature works using a new technology invented by Sanity called [Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps), which is also available as an API for you to use to build your own implementation.

Getting started with Visual Editing requires minimal changes to your website’s front-end code, only some configuration in an enhanced Sanity Client.

Visual Editing can be used on any hosting with the installation and configuration of the [@sanity/overlays](https://github.com/sanity-io/overlays) package.

[Vercel Visual Editing](https://vercel.com/docs/workflow-collaboration/visual-editing/cms-guide) offers a similar experience without the additional package – as Vercel automatically adds the clickable buttons in preview builds – and benefits from the Vercel toolbar's other features like comments and preview.

## How does Visual Editing work?

This video walkthrough demonstrates Vercel Visual Editing. Read more [on their documentation](https://vercel.com/docs/workflow-collaboration/visual-editing).

![Visual Editing with Sanity & Vercel](https://www.youtube.com/watch?v=ZslEtOdsL1Q)

Visual Editing overlays contain a clickable \*\*Edit in Sanity Studio \*\*button onto each editable element on your website. Clicking the button opens your Studio in a new tab with the editor pane focused on the field corresponding to the front-end element.

![Shows a web page titled "Visual Editing Demo", with a graphic with the legend "Content editing at your fingertips"](https://cdn.sanity.io/images/3do82whm/next/afa03d41ea32daa7cfb19cbbccebb031bf3b250a-2822x2334.png)

Content Source Maps embeds metadata into your query results, containing information about the document and field in your Content Lake that the data originated from.

Visual Editing uses this metadata to link each element in your front end to its corresponding document and field in your Sanity Studio, allowing for easy access and editing, particularly for teammates who are less familiar with your content model.

![Shows the graphic from the web page in the former image being edited in Sanity Studio ](https://cdn.sanity.io/images/3do82whm/next/7765583186e19afdf5ae59e26918fc29d6e32e08-2822x2334.png)

## How to enable Visual Editing

To enable Visual Editing on Vercel or any other hosting, follow these steps:

### 1. Install the Sanity client

To include metadata for Visual Editing in your query results, you need the Sanity client included with [next-sanity](https://github.com/sanity-io/next-sanity) (for Next.js projects) or the standard `@sanity/client`.

If you are already importing `createClient` from either `next-sanity` or `@sanity/client`, skip to step 4. Otherwise, start by installing the appropriate npm package.

```sh
# for Next.js applications
npm i next-sanity

# framework-agnostic version
npm i @sanity/client
```

### 2. Change your import statements

The client included in `next-sanity` and `@sanity/preview-kit` is a drop-in replacement for the vanilla JavaScript client with some extra features. Therefore, after installing either of these clients, everything should still work the same when you change your import statements.

```typescript
// Depending on which package you installed, replace this:
import {createClient} from '@sanity/client'

// ... with one of these:
import {createClient} from 'next-sanity'
```

### 3. Configure the client

Finally, add the following lines to your client configuration:

```typescript
const client = createClient({
  projectId: '<projectId>',
  dataset: 'production',
  apiVersion: '2022-05-03',
  useCdn: true,
  stega: {
    studioUrl: '/studio', // Or: 'https://my-cool-project.sanity.studio'
    enabled: true, // Optional. Default to: process.env.VERCEL_ENV === 'preview', 
  }
})
```

The `stega.studioUrl` is necessary to allow Visual Editing to construct complete URLs to content in your Sanity Studio. It can be a relative path for embedded studios – e.g., `“/studio”` – or a fully qualified URL for studios hosted elsewhere.

The `stega.enabled` property lets you conditionally enable or disable the generation of content source maps that are needed for Visual Editing. It is recommended that you only enable it for non-production builds.

With these steps complete, your front end should now include the metadata required for Visual Editing. You can learn more about the available stega options, including how to filter out specific documents or paths, in the [Stega documentation](https://www.sanity.io/docs/visual-editing/stega).

#### Using Vercel Visual Editing? You're done!

If you have access to Vercel Visual Editing, deploy a preview build of your front-end and look for the Edit icon on the Vercel toolbar. You should see clickable elements highlighted to open and edit content in your Sanity Studio.

For any hosting other than Vercel, continue to step 4

> \[!WARNING]
> Gotcha
> The first time you view a preview deployment that has Visual Editing enabled, you will be prompted to add the preview URL to the list of allowed CORS origins for your project. This is necessary to enable the feature. [Read more about CORS here](https://www.sanity.io/docs/cli-reference/cors-in-cli).

### 4. Install @sanity/overlays

If you do not have access to Vercel Visual Editing, a similar experience is available with the [@sanity/overlays](https://github.com/sanity-io/overlays) package.

```sh
npm i @sanity/overlays
```

This package is vanilla JavaScript and can be configured in any framework. Most commonly, you might import and run the enable function in a React application like this:

```tsx
import { enableVisualEditing } from '@sanity/overlays'

export default function App() {
  useEffect(enableVisualEditing, [])

  // ... return <html>
}
```

Ensure the function only runs once and at the root level. You might consider applying additional logic so that it is also only bundled and executed in non-production environments.

You should now – even in local development – be able to see highlighted elements that can be clicked to open their document and field in Sanity Studio.

![An apartment listing component with the title outlined and an "Edit in Sanity Studio" button](https://cdn.sanity.io/images/3do82whm/next/d905e8ad9b57d8b3ba56f181617e8d73aad6fdaf-712x602.png)

## GraphQL

With the [Sanity GraphQL API v2023-08-01](https://www.sanity.io/changelog?platforms=GraphQL#change-9ec89318-a340-4e23-91d9-3154da5b6244) update, Visual Editing is now also available for GraphQL. Read about it in the [GraphQL docs](https://www.sanity.io/docs/content-lake/graphql).

## Solutions

### Creating editable images

Images can become clickable links if the `alt` attribute contains a value with encoded metadata.

The [image schema type](https://www.sanity.io/docs/image-type) can contain additional fields, for example, an `altText` string field:

```typescript
defineField({
  name: 'picture',
  type: 'image',
  fields: [defineField({name: 'altText', type: 'string'})],
})
```

Then in your front end, ensure this field value is used in the `alt` attribute. If it contains metadata encoding, Visual Editing will make the image a clickable element.

```jsx
<img src={urlFor(image)} alt={image?.altText} />
```

![A card listing for a property with a border around the image with a button "Edit in Sanity Studio"](https://cdn.sanity.io/images/3do82whm/next/2ec77938c01085d7e00a24c4baa24b18afc4e964-712x648.png)

See the documentation for more options when [presenting images](https://www.sanity.io/docs/apis-and-sdks/presenting-images).

### Encoding metadata on number fields

Only values returned as strings can be encoded with metadata. Number values will not contain encoding by default.

To make number values editable, cast them to strings using the [string() GROQ function](https://www.sanity.io/docs/specifications/groq-functions). This should add encoding to these values.

```groq
*[_type == "property"]{
  name, 
  description, 
  "beds": string(beds),
  "bathrooms": string(bathrooms)
}
```

You may, however, need to update your front end's logic to evaluate these values as strings instead of numbers.

## Troubleshooting

A number of the solutions below rely on the `vercelStegaSplit` function from the [@vercel/stega](https://www.npmjs.com/package/@vercel/stega) npm package. This works for any hosting provider, not just Vercel, as they both consume the same metadata.

Install it with:

```sh
npm i @vercel/stega
```

### Comparing field values fails

Your production front end likely evaluates values returned from the Content Lake to perform specific logic. If these values contain encoded metadata from Content Source Maps, likely, they will no longer work.

#### How to fix

For example, imagine a function that determines that a Sanity document's market value is the same as the current market:

```typescript
function showDocument(document: SanityDocument, currentMarket: string) {
  return document.market === currentMarket
}
```

Without Content Source Maps, this function works as expected. However, if `document.market` contains encoded metadata, this comparison will fail.

If `document.market` is never shown on the page and will not benefit from Visual Editing, it may be best to remove it from the encoded paths in the [stega filter](https://www.sanity.io/docs/visual-editing/stega).

Alternatively, "clean" the value before comparing it. Since you'll likely do this more than once, consider extracting to a helper function.

```typescript
import {vercelStegaSplit} from '@vercel/stega'

function clean(value: string) {
  return vercelStegaSplit(value).cleaned
}

function showDocument(document: SanityDocument, currentMarket: string) {
  return clean(document.market) === currentMarket
}
```

### The styling of the editable fields is incorrect

If the text on the page is breaking out of its container – or its container is much wider than normal – it can be resolved by splitting the encoded text out from the original text.

> **Note:** This is not due to the encoded characters themselves. This problem should only present itself if the element also uses negative `letter-spacing` in its CSS or is inside of a `<ReactWrapBalancer>`.

Then identify where the problematic element is rendered in code, for example:

```tsx
function MyComponent({ text }) {
	return (
		<h1>{text}</h1>
	);
}
```

Rewrite using `@vercel/stega` to avoid any styling issues:

```tsx
import { vercelStegaSplit } from '@vercel/stega';

function MyComponent({ text }) {
	const { cleaned, encoded } = vercelStegaSplit(text);

	return (
		<h1>
			{cleaned}
			<span style={{ display: 'none' }}>{encoded}</span>
		</h1>
	);
}
```

If you find yourself doing this more than once, you might like to extract this logic to a reusable component:

```tsx
import {vercelStegaSplit} from '@vercel/stega'

export default function Clean({value}: {value: string}) {
  const {cleaned, encoded} = vercelStegaSplit(value)

  return encoded ? (
    <>
      {cleaned}
      <span style={{display: 'none'}}>{encoded}</span>
    </>
  ) : (
    cleaned
  )
}

function MyComponent({ text }) {
	return (
		<h1><Clean value={text} /></h1>
	);
}
```

### Formatting dates throws an error

Sometimes, you can experience type errors when trying to format dates.

#### How to fix

Identify where the date is formatted in code, for example:

```typescript
function formatDate(datestring) {
	const date = new Date(datestring);
	return date.nicelyFormatted();
}
```

Rewrite using `@vercel/stega` to avoid any styling issues:

```typescript
import { vercelStegaSplit } from '@vercel/stega';

function formatDate(datestring) {
	const { cleaned, encoded } = vercelStegaSplit(datestring);
	const date = new Date(cleaned);
	return `${date}${encoded}`;
}
```

### The wrong element is being highlighted

If the wrong element is highlighted when hovering them, it can be resolved by adding an attribute to the correct element.

#### How to fix

For example, if this component highlights the `<h1>` and you want it to highlight the entire `<section>` element:

```html
<section>
	<h1>{dynamicTitle}</h1>
	<div>Hardcoded Tagline</div>
</section>
```

Add a data attribute to highlight the correct item:

- For Visual Editing with `@sanity/overlays`, add `data-sanity-edit-target`
- For Vercel Visual Editing, add `data-vercel-edit-target`

```html
<section data-sanity-edit-target>
	<h1>{dynamicTitle}</h1>
	<div>Hardcoded Tagline</div>
</section>
```
