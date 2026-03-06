# Head

We expose a built-in component for appending elements to the `head` of the page:

```jsx
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage
```

## Avoid duplicated tags

To avoid duplicate tags in your `head` you can use the `key` property, which will make sure the tag is only rendered once, as in the following example:

```jsx
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage
```

In this case only the second \`\` is rendered. `meta` tags with duplicate `key` attributes are automatically handled.

> **Good to know**: `<title>` and `<base>` tags are automatically checked for duplicates by Next.js, so using key is not necessary for these tags.

> The contents of `head` get cleared upon unmounting the component, so make sure each page completely defines what it needs in `head`, without making assumptions about what other pages added.

## Use minimal nesting

`title`, `meta` or any other elements (e.g. `script`) need to be contained as **direct** children of the `Head` element,
or wrapped into maximum one level of `<React.Fragment>` or arrays—otherwise the tags won't be correctly picked up on client-side navigations.

## Use `next/script` for scripts

We recommend using [`next/script`](/docs/pages/guides/scripts) in your component instead of manually creating a `<script>` in `next/head`.

## No `html` or `body` tags

You **cannot** use `<Head>` to set attributes on `<html>` or `<body>` tags. This will result in an `next-head-count is missing` error. `next/head` can only handle tags inside the HTML `<head>` tag.

# Image

The Next.js Image component extends the HTML `<img>` element for automatic image optimization.

```jsx filename="app/page.js"
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
```

> **Good to know**: If you are using a version of Next.js prior to 13, you'll want to use the [next/legacy/image](/docs/pages/api-reference/components/image-legacy) documentation since the component was renamed.
