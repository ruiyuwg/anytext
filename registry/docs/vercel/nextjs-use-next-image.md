# NEXTJS\_USE\_NEXT\_IMAGE

> **🔒 Permissions Required**: Conformance

The Next.js Image component ([`next/image`](https://nextjs.org/docs/pages/api-reference/components/image))
extends the HTML `<img>` element with features for automatic image optimization.

It optimizes image sizes for different devices using modern image formats,
improves visual stability by preventing layout shifts during image loading,
and speeds up page loads with lazy loading and optional blur-up placeholders.

Additionally, it provides the flexibility of on-demand image resizing, even for
images hosted on remote servers. This may incur costs from your managed hosting
provider (see [below](#important-note-on-costs) for more information)

By default, this rule is disabled. Enable it by
[customizing Conformance](/docs/conformance/customize).

For further reading, see:

- https://nextjs.org/docs/app/building-your-application/optimizing/images
- https://nextjs.org/docs/pages/api-reference/components/image

## Important note on costs

Using image optimization may incur costs from your managed hosting
provider. You can opt out of image optimization by setting the optional
[`unoptimized` prop](https://nextjs.org/docs/pages/api-reference/components/image#unoptimized).

Please check with your hosting provider for details.

- [Vercel pricing](https://vercel.com/pricing)
- [Cloudinary pricing](https://cloudinary.com/pricing)
- [imgix pricing](https://imgix.com/pricing)

## Important note on self-hosting

If self-hosting, you'll need to install the optional package
[`sharp`](https://www.npmjs.com/package/sharp), which Next.js will use to
optimize images. Optimized images will require more available storage on your
server.

## Examples

This rule will catch the following code.

```tsx {2}
function App() {
  return <img src="/media/image.png" alt="Example" />;
}
```

The following code will not be caught by this rule.

```tsx
function App() {
  return (
    <picture>
      <source srcSet="/hero.avif" type="image/avif" />
      <source srcSet="/hero.webp" type="image/webp" />
      <img src="/hero.jpg" alt="Landscape picture" width={800} height={500} />
    </picture>
  );
}
```

## How to fix

Replace any `<img>` elements that are caught by this rule with
[`next/image`](https://nextjs.org/docs/pages/api-reference/components/image).

Again, please check with your managed hosting provider for image optimization
costs.

title: "NEXTJS\_USE\_NEXT\_SCRIPT"
description: "Requires that next/script is used for all scripts."
last\_updated: "2026-03-23T09:40:07.695Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_USE\_NEXT\_SCRIPT"

# NEXTJS\_USE\_NEXT\_SCRIPT

> **🔒 Permissions Required**: Conformance

[`next/script`](https://nextjs.org/docs/pages/api-reference/components/script)
automatically optimizes scripts for improved performance through customizable
loading strategies. By default, `next/script` loads scripts so that they're
non-blocking, meaning that they load after the page has loaded.

Additionally, `next/script` has built in event handlers for common events such
as `onLoad` and `onError`.

By default, this rule is disabled. Enable it by
[customizing Conformance](/docs/conformance/customize).

For further reading, see:

- https://nextjs.org/docs/pages/building-your-application/optimizing/scripts
- https://nextjs.org/docs/pages/api-reference/components/script

## Examples

This rule will catch the following code.

```tsx {2}
function insertScript() {
  const script = document.createElement('script');
  script.src = process.env.SCRIPT_PATH;
  document.body.appendChild(script);
}
```

```tsx {3-5}
function App() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: "console.log('Hello world');" }}
    />
  );
}
```

## How to fix

Replace any `document.createElement('script')` calls and `<script>`
elements that are caught by this rule with [`next/script`](https://nextjs.org/docs/pages/api-reference/components/script).

title: "NO\_ASSIGN\_WINDOW\_LOCATION"
description: "Prevent unsafe assignment to window.location.href in your application."
last\_updated: "2026-03-23T09:40:07.699Z"
source: "https://vercel.com/docs/conformance/rules/NO\_ASSIGN\_WINDOW\_LOCATION"

# NO\_ASSIGN\_WINDOW\_LOCATION

> **🔒 Permissions Required**: Conformance

Direct assignments to "window.location.href" or "window.location" should be avoided due to possible XSS attacks that can occur from lack
of sanitization of input to the "href".

## How to fix

The recommended approach for Next.js applications is to use a custom `redirectTo` function. This provides a clear way to use `router.push()`
or `window.location.href` to provide an experience that is best for the user (client-side navigation only, or a full page refresh).
Here's an example of how you might do this using Next.js:

Before:

```js filename="my-site.js"
windows.location.href = '/login';
```

After:

```js filename="my-site.js"
router.push('/login');
```

title: "NO\_CORS\_HEADERS"
description: "Warns when CORS header (or header-like) configuration is detected, requiring that configuration to be allowlisted."
last\_updated: "2026-03-23T09:40:07.705Z"
source: "https://vercel.com/docs/conformance/rules/NO\_CORS\_HEADERS"
