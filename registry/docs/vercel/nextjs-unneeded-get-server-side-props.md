# NEXTJS\_UNNEEDED\_GET\_SERVER\_SIDE\_PROPS

> **🔒 Permissions Required**: Conformance

This rule will analyze each Next.js page's `getServerSideProps` to see if the context parameter is being used and if not
then it will fail.

When using `getServerSideProps` to render a Next.js page on the server, if the page doesn't require any information
from the request, consider using [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) with
`getStaticProps`. If you are using `getServerSideProps` to refresh the data on each page load, consider using
[ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) instead with a `revalidate`
property to control how often the page is regenerated. If you are using `getServerSideProps` to randomize the data on
each page load, consider moving that logic to the client instead and use `getStaticProps` to reuse the statically generated
page.

## Example

An example of when this check would fail:

```tsx filename="src/pages/index.tsx"
import { type GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return {
    props: { stargazersCount: json.stargazers_count },
  };
};

function Home({ stargazersCount }) {
  return <h1>The Next.js repo has {stargazersCount} stars.</h1>;
}

export default Home;
```

In this example, the `getServerSideProps` function is used to pass data from an API to the page,
but it isn't using any information from the context argument so `getServerSideProps` is unnecessary.

## How to fix

Instead, we can convert the page to use [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
with `getStaticProps`. This will generate the page at build time and serve it statically. If you need the page to
be updated more frequently, then you can also use [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
with the revalidate option:

```tsx filename="src/pages/index.tsx"
import { type GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return {
    props: { stargazersCount: json.stargazers_count },
    revalidate: 60, // Using ISR, regenerate the page every 60 seconds
  };
};

function Home({ stargazersCount }) {
  return <h1>The Next.js repo has {stargazersCount} stars.</h1>;
}

export default Home;
```

Or, you can use information from the context argument to customize the page:

```tsx filename="src/pages/index.tsx"
import { type GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.github.com/repos/vercel/${context.query.repoName}`,
  );
  const json = await res.json();
  return {
    props: {
      repoName: context.query.repoName,
      stargazersCount: json.stargazers_count,
    },
  };
};

function Home({ repoName, stargazersCount }) {
  return (
    <h1>
      The {repoName} repo has {stargazersCount} stars.
    </h1>
  );
}

export default Home;
```

title: "NEXTJS\_USE\_NATIVE\_FETCH"
description: "Requires using native "
last\_updated: "2026-03-08T05:03:12.741Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_USE\_NATIVE\_FETCH"

# NEXTJS\_USE\_NATIVE\_FETCH

> **🔒 Permissions Required**: Conformance

Next.js extends the native [Web `fetch` API](https://nextjs.org/docs/app/api-reference/functions/fetch)
with additional caching capabilities which means third-party fetch libraries are not needed.
Including these libraries in your app can increase bundle size and negatively impact performance.

This rule will detect any usage of the following third-party fetch libraries:

- `isomorphic-fetch`
- `whatwg-fetch`
- `node-fetch`
- `cross-fetch`
- `axios`

If there are more libraries you would like to restrict,
consider using a [custom rule](https://vercel.com/docs/conformance/custom-rules).

By default, this rule is disabled. You can enable it by
[customizing Conformance](/docs/conformance/customize).

For further reading, see:

- https://nextjs.org/docs/app/api-reference/functions/fetch
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch\_API

## Examples

This rule will catch the following code.

```tsx {1}
import fetch from 'isomorphic-fetch';

export async function getAuth() {
  const auth = await fetch('/api/auth');
  return auth.json();
}
```

## How to fix

Replace the third-party fetch library with the native `fetch` API Next.js provides.

title: "NEXTJS\_USE\_NEXT\_FONT"
description: "Requires using next/font to load local fonts and fonts from supported CDNs."
last\_updated: "2026-03-08T05:03:12.750Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_USE\_NEXT\_FONT"

# NEXTJS\_USE\_NEXT\_FONT

> **🔒 Permissions Required**: Conformance

[`next/font`](https://nextjs.org/docs/pages/api-reference/components/font)
automatically optimizes fonts and removes external network requests for
improved privacy and performance.

By default, this rule is disabled. Enable it by
[customizing Conformance](/docs/conformance/customize).

This means you can optimally load web fonts with zero layout shift, thanks to
the underlying CSS size-adjust property used.

For further reading, see:

- https://nextjs.org/docs/basic-features/font-optimization
- https://nextjs.org/docs/pages/api-reference/components/font
- https://www.lydiahallie.io/blog/optimizing-webfonts-in-nextjs-13

## Examples

This rule will catch the following code.

```css {3-4}
@font-face {
  font-family: Foo;
  src:
    url(https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL-vwnYh2eg.woff2)
      format('woff2'),
    url(/custom-font.ttf) format('truetype');
  font-display: block;
  font-style: normal;
  font-weight: 400;
}
```

```ts {3-6}
function App() {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
      rel="stylesheet"
    />
  );
}
```

## How to fix

Replace any `@font-face` at-rules and `link` elements that are caught by this
rule with [`next/font`](https://nextjs.org/docs/api-reference/next/font).

title: "NEXTJS\_USE\_NEXT\_IMAGE"
description: "Requires that next/image is used for all images."
last\_updated: "2026-03-08T05:03:12.759Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_USE\_NEXT\_IMAGE"
