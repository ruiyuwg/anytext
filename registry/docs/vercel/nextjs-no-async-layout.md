# NEXTJS\_NO\_ASYNC\_LAYOUT

> **🔒 Permissions Required**: Conformance

This rule examines all Next.js app router layout files and their transitive dependencies to ensure
none are asynchronous or return new Promise instances. Even if the layout component itself is not
asynchronous, importing an asynchronous component somewhere in the layout's dependency tree can
silently cause the layout to render dynamically. This can cause a blank layout to be displayed to
the user while Next.js waits for long promises to resolve.

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

For further reading, these resources may be helpful:

- [Loading UI and Streaming in Next.js](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming):
  This guide discusses strategies for loading UI components and streaming content in Next.js applications.
- [Next.js Layout File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions/layout):
  This document provides an overview of file conventions related to layout in Next.js.
- [Next.js Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes):
  This guide discusses how to use parallel routes to improve performance in Next.js applications.
- [Next.js Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic):
  This document provides an overview of the `dynamic` export and how it can be used to force the dynamic behavior of a layout.

## Examples

This rule will catch the following code.

```tsx filename="app/layout.tsx"
export default async function RootLayout() {
  const data = await fetch();
  return <div>{data}</div>;
}
```

```jsx filename="app/layout.jsx"
async function AuthButton() {
  const isAuthorized = await auth();
  return <div>{isAuthorized ? 'Authorized' : 'Unauthorized'}</div>;
}

export default function Layout() {
  return <AuthButton />;
}
```

## How to fix

You can fix this error by wrapping your async component with a `<Suspense/>` boundary that has
a fallback UI to indicate to Next.js that it should use the fallback until the promise resolves.

You can also move the asynchronous component to a [parallel route](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
which allows Next.js to render one or more pages within the same layout.

Alternatively, you can manually force the dynamic behavior of the layout by exporting a `dynamic` value.
This rule will only error if `dynamic` is not specified or is set to `auto`.
Read more [here](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic).

```tsx filename="app/layout.tsx"
export const dynamic = 'force-static';

export default async function RootLayout() {
  const data = await fetch();
  return <div>{data}</div>;
}
```

title: "NEXTJS\_NO\_ASYNC\_PAGE"
description: "Ensures that the exported Next.js page component and its transitive dependencies are not asynchronous, as that blocks the rendering of the page."
last\_updated: "2026-03-23T09:40:07.551Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_ASYNC\_PAGE"
