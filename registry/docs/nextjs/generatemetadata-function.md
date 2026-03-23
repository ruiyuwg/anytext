## `generateMetadata` function

Dynamic metadata depends on **dynamic information**, such as the current route parameters, external data, or `metadata` in parent segments, can be set by exporting a `generateMetadata` function that returns a [`Metadata` object](#metadata-fields).

Resolving `generateMetadata` is part of rendering the page. If the page can be prerendered and `generateMetadata` doesn't introduce dynamic behavior, the resulting metadata is included in the page's initial HTML.

Otherwise the metadata resolved from `generateMetadata` [can be streamed](/docs/app/api-reference/functions/generate-metadata#streaming-metadata) after sending the initial UI.

```tsx filename="app/products/[id]/page.tsx" switcher
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default function Page({ params, searchParams }: Props) {}
```

```jsx filename="app/products/[id]/page.js" switcher
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default function Page({ params, searchParams }) {}
```

For type completion of `params` and `searchParams`, you can type the first argument with [`PageProps<'/route'>`](/docs/app/api-reference/file-conventions/page#page-props-helper) or [`LayoutProps<'/route'>`](/docs/app/api-reference/file-conventions/layout#layout-props-helper) for pages and layouts respectively.

> **Good to know**:
>
> - Metadata can be added to `layout.js` and `page.js` files.
> - Next.js will automatically resolve the metadata, and create the relevant `<head>` tags for the page.
> - The `metadata` object and `generateMetadata` function exports are **only supported in Server Components**.
> - You cannot export both the `metadata` object and `generateMetadata` function from the same route segment.
> - `fetch` requests inside `generateMetadata` are automatically [memoized](/docs/app/glossary#memoization) for the same data across `generateMetadata`, `generateStaticParams`, Layouts, Pages, and Server Components.
> - React [`cache` can be used](https://react.dev/reference/react/cache) if `fetch` is unavailable.
> - [File-based metadata](/docs/app/api-reference/file-conventions/metadata) has the higher priority and will override the `metadata` object and `generateMetadata` function.

## Why `generateMetadata` is Server Component only

`generateMetadata` and the `metadata` export are only supported in Server Components because metadata must be resolved on the server before the page component is rendered. This allows Next.js to include the metadata in the initial HTML response.

If you need to use Client Component features, keep your `page.tsx` as a Server Component and move the Client Component logic to a separate file:

```tsx filename="app/page.tsx" switcher
import type { Metadata } from 'next'
import { InteractiveComponent } from './interactive-component'

export const metadata: Metadata = {
  title: 'My Page',
}

export default function Page() {
  return <InteractiveComponent />
}
```

```jsx filename="app/page.js" switcher
import { InteractiveComponent } from './interactive-component'

export const metadata = {
  title: 'My Page',
}

export default function Page() {
  return <InteractiveComponent />
}
```

```tsx filename="app/interactive-component.tsx" switcher
'use client'

export function InteractiveComponent() {
  // Client-side interactivity (hooks, event handlers, etc.)
}
```

```jsx filename="app/interactive-component.js" switcher
'use client'

export function InteractiveComponent() {
  // Client-side interactivity (hooks, event handlers, etc.)
}
```
