# NEXTJS\_NO\_ASYNC\_PAGE

> **🔒 Permissions Required**: Conformance

This rule examines all Next.js app router page files and their transitive dependencies to ensure
none are asynchronous or return new Promise instances. Even if the page component itself is not
asynchronous, importing an asynchronous component somewhere in the page's dependency tree can
silently cause the page to render dynamically. This can cause a blank page to be displayed to
the user while Next.js waits for long promises to resolve.

This rule will not error if it detects a sibling [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)
file beside the page.

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

For further reading, you may find these resources helpful:

- [Loading UI and Streaming in Next.js](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming):
  This guide discusses strategies for loading UI components and streaming content in Next.js applications.
- [Next.js Loading File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions/loading):
  This document provides an overview of file conventions related to loading in Next.js.
- [Next.js Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic):
  This document provides an overview of the `dynamic` export and how it can be used to force the dynamic behavior of a layout.

## Examples

This rule will catch the following code.

```tsx filename="app/page.tsx"
export default async function Page() {
  const data = await fetch();
  return <div>{data}</div>;
}
```

```jsx filename="app/page.jsx"
async function AuthButton() {
  const isAuthorized = await auth();
  return <div>{isAuthorized ? 'Authorized' : 'Unauthorized'}</div>;
}

export default function Page() {
  return <AuthButton />;
}
```

## How to fix

You can fix this error by wrapping your async component with a `<Suspense/>` boundary that has
a fallback UI to indicate to Next.js that it should use the fallback until the promise resolves.

Alternatively, you can manually force the dynamic behavior of the page by exporting a `dynamic` value.
This rule will only error if `dynamic` is not specified or is set to `auto`.
Read more [here](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic).

```tsx filename="app/page.tsx"
export const dynamic = 'force-static';

export default async function Page() {
  const data = await fetch();
  return <div>{data}</div>;
}
```

title: "NEXTJS\_NO\_BEFORE\_INTERACTIVE"
description: "Requires review of usage of the beforeInteractive strategy in Script (next/script) elements."
last\_updated: "2026-03-23T09:40:07.569Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_BEFORE\_INTERACTIVE"

# NEXTJS\_NO\_BEFORE\_INTERACTIVE

> **🔒 Permissions Required**: Conformance

The default [loading strategy](https://nextjs.org/docs/basic-features/script#strategy)
for [`next/script`](https://nextjs.org/docs/basic-features/script) is optimised
for fast page loads.

Setting the strategy to [`beforeInteractive`](https://nextjs.org/docs/api-reference/next/script#beforeinteractive)
forces the script to load before any Next.js code and before hydration occurs,
which delays the page from becoming interactive.

For further reading, see:

- [Loading strategy in Next.js](https://nextjs.org/docs/basic-features/script#strategy)
- [`next/script` docs](https://nextjs.org/docs/api-reference/next/script#beforeinteractive)
- [Chrome blog on the Next.js Script component](https://developer.chrome.com/blog/script-component/#the-nextjs-script-component)

## Examples

This rule will catch the following code.

```ts {5}
import Script from 'next/script';

export default function MyPage() {
  return (
    <Script src="https://example.com/script.js" strategy="beforeInteractive" />
  );
}
```

## How to fix

This rule flags any usage of `beforeInteractive` for review. If approved, the
exception should be added to the allowlist.

title: "NEXTJS\_NO\_CLIENT\_DEPS\_IN\_MIDDLEWARE"
description: "Disallows dependency on client libraries inside of middleware to improve performance of middleware."
last\_updated: "2026-03-23T09:40:07.584Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_CLIENT\_DEPS\_IN\_MIDDLEWARE"

# NEXTJS\_NO\_CLIENT\_DEPS\_IN\_MIDDLEWARE

> **🔒 Permissions Required**: Conformance

This check disallows dependencies on client libraries, such as `react` and
`next/router` in Next.js middleware. Since middleware runs on the server and
runs on every request, this code is not able to run any client side code and it
should have a small bundle size to improve loading and execution times.

## Example

An example of when this check could manifest is when middleware transitively
depends on a file that also uses `react` within the same file.

For example:

```ts filename="experiments.ts"
import { createContext, type Context } from 'react';

export function createExperimentContext(): Context<ExperimentContext> {
  return createContext<ExperimentContext>({
    experiments: () => {
      return EXPERIMENT_DEFAULTS;
    },
  });
}

export async function getExperiments() {
  return activeExperiments;
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

In this example, the `experiments.ts` file both fetches the active experiments
as well as provides helper functions to use experiments on the client in React.

## How to fix

Client dependencies used or transitively depended on by middleware files should
be refactored to avoid depending on the client libraries. In the example above,
the code that is used by middleware to fetch experiments should be moved to a
separate file from the code that provides the React functionality.

title: "NEXTJS\_NO\_DYNAMIC\_AUTO"
description: "Prevent usage of force-dynamic as a dynamic page rendering strategy."
last\_updated: "2026-03-23T09:40:07.588Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_DYNAMIC\_AUTO"

# NEXTJS\_NO\_DYNAMIC\_AUTO

> **🔒 Permissions Required**: Conformance

Changing the dynamic behavior of a layout or page using "force-dynamic" is
not recommended in App Router. This is because this will force only dynamic rendering
of those pages and opt-out "fetch" request from the fetch cache. Furthermore, opting
out will also prevent future optimizations such as partially static subtrees and
hybrid server-side rendering, which can significantly improve performance.

See [Next.js Segment Config docs](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
for more information on the different migration strategies that can be used and how
they work.

## How to fix

Usage of `force-dynamic` can be avoided and instead `no-store` or `fetch` calls
can be used instead. Alternatively, usage of `cookies()` can also avoid the need
to use `force-dynamic`.

```js
// Example of how to use `no-store` on `fetch` calls.
const data = fetch(someURL, { cache: 'no-store' });
```

title: "NEXTJS\_NO\_FETCH\_IN\_SERVER\_PROPS"
description: "Prevent relative fetch calls in getServerSideProps from being added to Next.js applications."
last\_updated: "2026-03-23T09:40:07.591Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_FETCH\_IN\_SERVER\_PROPS"

# NEXTJS\_NO\_FETCH\_IN\_SERVER\_PROPS

> **🔒 Permissions Required**: Conformance

Since both `getServerSideProps` and API routes run on the server, calling `fetch` on a non-relative
URL will trigger an additional network request.

## How to fix

Instead of using `fetch` to make a call to the API route, you can instead share the code in a shared
library or module to avoid another network request. You can then import this hared logic and call directly
within your `getServerSideProps` function, avoiding additional network requests entirely.

title: "NEXTJS\_NO\_GET\_INITIAL\_PROPS"
description: "Requires any use of getInitialProps in Next.js pages be reviewed and approved, and encourages using getServerSideProps or getStaticProps instead."
last\_updated: "2026-03-23T09:40:07.596Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_GET\_INITIAL\_PROPS"
