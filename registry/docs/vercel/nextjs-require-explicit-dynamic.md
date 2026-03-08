# NEXTJS\_REQUIRE\_EXPLICIT\_DYNAMIC

> **🔒 Permissions Required**: Conformance

> **⚠️ Warning:** This rule conflicts with the experimental Next.js feature [Partial
> Prerendering
> (PPR)](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).
> If you enable PPR in your Next.js app, you should not enable this rule.

For convenience, Next.js defaults to automatically selecting the rendering mode
for pages and routes.

Whilst this works well, it also means that rendering modes can be changed
unintentionally (i.e. through an update to a component that a page depends on).
These changes can lead to unexpected behaviors, including performance issues.

To mitigate the chance that rendering modes change unexpectedly, you should
explicitly set the `dynamic` route segment option to the desired mode. Note
that the default value is `auto`, which will not satisfy this rule.

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

For further reading, see:

- [Next.js File Conventions: Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic)

## Examples

This rule will catch any pages or routes that:

- Do not have the `dynamic` option set to a valid value.
- Have the `dynamic` option set to `'auto'` (which is the default value).

In the following example, the page component does not have the `dynamic` route
segment option set.

```tsx filename="app/page.tsx"
export default function Page() {
  // ...
}
```

The next example sets the `dynamic` route segment option, however it sets it to
`'auto'`, which is already the default behavior and will not satisfy this rule.

```tsx filename="app/dashboard/page.tsx" {1}
export const dynamic = 'auto';

export default function Page() {
  // ...
}
```

## How to fix

If you see this issue in your codebase, you can resolve it by explicitly
setting the `dynamic` route segment option for the page or route.

In this example, the `dynamic` route segment option is set to `error`, which
forces the page to static, and will throw an error if any components use
[dynamic functions](https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies#dynamic-functions)
or uncached data.

```tsx filename="app/page.tsx" {1}
export const dynamic = 'error';

export default function Page() {
  const text = 'Hello world';
  return <div>{text}</div>;
}
```

title: "NEXTJS\_SAFE\_NEXT\_PUBLIC\_ENV\_USAGE"
description: "Usage process.env.NEXT\_PUBLIC\_\* environment variables must be allowlisted."
last\_updated: "2026-03-08T05:03:12.725Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_SAFE\_NEXT\_PUBLIC\_ENV\_USAGE"

# NEXTJS\_SAFE\_NEXT\_PUBLIC\_ENV\_USAGE

> **🔒 Permissions Required**: Conformance

The use of `process.env.NEXT_PUBLIC_*` environment variables may warrant a review from other developers to ensure there are no unintended leakage of environment variables.

When enabled, this rule requires that all usage of `NEXT_PUBLIC_*` must be included in the [allowlist](https://vercel.com/docs/conformance/allowlist).

## Examples

This rule will catch any pages or routes that are using `process.env.NEXT_PUBLIC_*` environment variables.

In the following example, we are using a local variable to initialize our analytics service. As the variable will be visible in the client, a review of the code is required, and the usage should be added to the [allowlist](https://vercel.com/docs/conformance/allowlist).

```tsx filename="app/dashboard/page.tsx" {1}
setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID);

function HomePage() {
  return <h1>Hello World</h1>;
}

export default HomePage;
```

## How to fix

If you hit this issue, include the entry in the [Conformance allowlist file](https://vercel.com/docs/conformance/allowlist).

title: "NEXTJS\_SAFE\_SVG\_IMAGES"
description: "Prevent dangerouslyAllowSVG without Content Security Policy in Next.js applications."
last\_updated: "2026-03-08T05:03:12.733Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_SAFE\_SVG\_IMAGES"

# NEXTJS\_SAFE\_SVG\_IMAGES

> **🔒 Permissions Required**: Conformance

SVG can do many of the same things that HTML/JS/CSS can, meaning that it can be dangerous to execute SVG
as this can lead to vulnerabilities without proper [Content Security Policy](https://nextjs.org/docs/advanced-features/security-headers) (CSP) headers.

## How to fix

If you need to serve SVG images with the default Image Optimization API, you
can set `dangerouslyAllowSVG` inside your `next.config.js`:

```js filename="next.config.js"
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

In addition, it is strongly recommended to also set `contentDispositionType` to
force the browser to download the image, as well as `contentSecurityPolicy` to
prevent scripts embedded in the image from executing.

title: "NEXTJS\_SAFE\_URL\_IMPORTS"
description: "Prevent unsafe URL Imports from being added to Next.js applications."
last\_updated: "2026-03-08T05:03:12.737Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_SAFE\_URL\_IMPORTS"

# NEXTJS\_SAFE\_URL\_IMPORTS

> **🔒 Permissions Required**: Conformance

URL imports are an experimental feature that allows you to import modules directly
from external servers (instead of from the local disk). When you opt-in, and
supply URL prefixes inside `next.config.js`, like so:

```js filename="next.config.js"
module.exports = {
  experimental: {
    urlImports: ['https://example.com/assets/', 'https://cdn.skypack.dev'],
  },
};
```

If any of the URLs have not been added to the safe import comformance configuration,
then this will cause this rule to fail.

## How to fix

Engineers should reach out to the appropriate engineer(s) or team(s) for a
security review of the URL import configuration.

When requesting a review, please provide as much information as possible around
the proposed URL being added, and if there any security implications for using
the URL.

If this URL is deemed safe for general use, it can be added to the list of approved URL imports. This can be done by following the [Customizing Conformance](/docs/conformance/customize#configuring-a-conformance-rule) docs to add the URL to your `conformance.config.jsonc` file:

```json filename="conformance.config.jsonc"
"NEXTJS_SAFE_URL_IMPORTS": {
  urlImports: [theUrlToAdd],
}
```

title: "NEXTJS\_UNNEEDED\_GET\_SERVER\_SIDE\_PROPS"
description: "Catches usages of getServerSideProps that could use static rendering instead, improving the performance of those pages."
last\_updated: "2026-03-08T05:03:12.746Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_UNNEEDED\_GET\_SERVER\_SIDE\_PROPS"
