# NO\_EXTERNAL\_CSS\_AT\_IMPORTS

> **🔒 Permissions Required**: Conformance

Importing CSS through ([`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import))
is render blocking, causing browsers to sequentially download and parse the
imported CSS (a [critical request chain](https://developer.chrome.com/en/docs/lighthouse/performance/critical-request-chains/)).

```css filename="app.module.css"
@import url('https://fonts.googleapis.com/css2?family=Inter');
```

This can result in a [flash of unstyled content (FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content),
where page content is briefly shown without complete styles until all required
CSS has been downloaded and parsed, along with slower page load times.

Imports to relative paths are processed by frameworks like Next.js, and will
not be affected by this issue.

```css filename="app.module.css"
/* This import is safe. */
@import './globals.css';
```

> **💡 Note:** Note that this rule currently only parses CSS and not CSS written in Less,
> Sass, or other CSS preprocessor syntaxes.

## How to fix

If you're importing a font, you can use [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)
which will automatically optimize your fonts (including custom fonts) and
remove external network requests.

If you're importing CSS, such as Bootstrap, avoid loading it from external
sources, such as a CDN or the [Next.js public folder](https://nextjs.org/docs/basic-features/static-file-serving).
Instead, you can import that CSS relatively, or from a package.

```ts filename="layout.tsx"
// CSS imported relatively from a local file.
import './globals.css';
// CSS from a package in `node_modules`.
import 'bootstrap/dist/css/bootstrap.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
```

title: "NO\_FETCH\_FROM\_MIDDLEWARE"
description: "Requires that any fetch call that is depended on transitively by Next.js middleware be reviewed and approved before use."
last\_updated: "2026-03-23T09:40:07.725Z"
source: "https://vercel.com/docs/conformance/rules/NO\_FETCH\_FROM\_MIDDLEWARE"

# NO\_FETCH\_FROM\_MIDDLEWARE

> **🔒 Permissions Required**: Conformance

[Next.js middleware](https://nextjs.org/docs/advanced-features/middleware) runs
code at the Edge. This means that the code is globally distributed. When
middleware makes a `fetch` call, it may be to a backend that is not globally
distributed, in which case the latency of the middleware function will be
really slow. To prevent this, `fetch` calls that can be made from middleware are
flagged and reviewed to make sure that it looks like an appropriate use.

## Example

This check will fail when a `fetch` call is detected from Next.js middleware or
transitive dependencies used by the middleware file.

In this example, there are two files. An experiments file asynchronously
fetches experiments using `fetch`. The middleware file uses the experiments
library to fetch the experiments and then decide to rewrite the URL.

```ts filename="experiments.ts"
export async function getExperiments() {
  const res = await fetch('/experiments');
  return res.json();
}
```

```ts filename="middleware.ts"
export async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
): Promise<Response> {
  const experiments = await getExperiments();

  if (experiments.includes('new-marketing-page)) {
    return NextResponse.rewrite(MARKETING_PAGE_URL);
  }
  return NextResponse.next();
}
```

## How to fix

The correct fix will depend on the specific situation. If the server that is
being called is globally distributed, then this asynchronous call may be okay.
If not, then the code should try to remove the `fetch` statement to avoid
making a request that would add latency to middleware.

title: "NO\_INLINE\_SVG"
description: "Prevent the use of "
last\_updated: "2026-03-23T09:40:07.728Z"
source: "https://vercel.com/docs/conformance/rules/NO\_INLINE\_SVG"

# NO\_INLINE\_SVG

> **🔒 Permissions Required**: Conformance

Preventing the use of `<svg></svg>` inline improves the health of your codebase at the page level.
Using inlined `svg` tags in excess can cause hydration issues, negatively impact the performance of both
the browser and the server rendering.

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

## How to fix

If you hit this issue, you can resolve it by using SVGs as an [`<Image>`](https://nextjs.org/docs/pages/api-reference/components/image)
component. Don't forget to enable [`dangerouslyAllowSVG`](https://nextjs.org/docs/pages/api-reference/components/image#dangerouslyallowsvg)
in your application's `next.config.js` file, and use the `unoptimized` component prop.

```JSX filename=".app/page.js"
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/logo.svg"
      width={100}
      height={100}
      alt="Logo of ACME"
      unoptimized
    />
  )
}
```

title: "NO\_INSTANCEOF\_ERROR"
description: "Disallows using "
last\_updated: "2026-03-23T09:40:07.734Z"
source: "https://vercel.com/docs/conformance/rules/NO\_INSTANCEOF\_ERROR"
