# NEXTJS\_NO\_GET\_INITIAL\_PROPS

> **🔒 Permissions Required**: Conformance

`getInitialProps` is an older Next.js API for server-side rendering that can usually be replaced with
`getServerSideProps` or `getStaticProps` for more performant and secure code.

`getInitialProps` runs on both the server and the client after page load, so the JavaScript bundle will
contain any dependencies used by `getInitialProps`. This means that it is possible for unintended code to
be included in the client side bundle, for example, code that should only be used on the server such as
database connections.

If you need to avoid a server-round trip when performing a client side transition, `getInitialProps` could be used.
However, if you do not, `getServerSideProps` is a good API to use instead so that the code remains on the server and
does not bloat the JavaScript bundle, or `getStaticProps` can be used if the page can be statically generated at build time.

This rule is for highlighting these concerns and while there are still valid use cases for using `getInitialProps` if you do need to
do data fetching on both the client and the server, they should be reviewed and approved.

## Example

An example of when this check would fail:

```ts filename="src/pages/index.tsx"
import { type NextPage } from 'next';

const Home: NextPage = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Home;
```

In this example, the `getInitialProps` function is used to fetch data from an API,
but it isn't necessary that we fetch the data on both the client and the server so we can fix it below.

## How to fix

Instead, we should use `getServerSideProps` instead of `getInitialProps`:

```ts filename="src/pages/index.tsx"
import { type GetServerSideProps } from 'next';

const Home = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return {
    props: {
      stars: json.stargazers_count
    },
  };
};

export default Home;
```

title: "NEXTJS\_NO\_PRODUCTION\_SOURCE\_MAPS"
description: "Applications using Next.js should not enable production source maps so that they don"
last\_updated: "2026-03-23T09:40:07.602Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_PRODUCTION\_SOURCE\_MAPS"
