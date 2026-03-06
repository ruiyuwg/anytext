# html Helper

The html Helper lets you write HTML in JavaScript template literal with a tag named `html`. Using `raw()`, the content will be rendered as is. You have to escape these strings by yourself.

## Import

```ts
import { Hono } from 'hono'
import { html, raw } from 'hono/html'
```

## `html`

```ts
const app = new Hono()

app.get('/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
    html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})
```

### Insert snippets into JSX

Insert the inline script into JSX:

```tsx
app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <title>Test Site</title>
        {html`
          <script>
            // No need to use dangerouslySetInnerHTML.
            // If you write it here, it will not be escaped.
          </script>
        `}
      </head>
      <body>Hello!</body>
    </html>
  )
})
```

### Act as functional component

Since `html` returns an HtmlEscapedString, it can act as a fully functional component without using JSX.

#### Use `html` to speed up the process instead of `memo`

```typescript
const Footer = () => html`
  <footer>
    <address>My Address...</address>
  </footer>
`
```

### Receives props and embeds values

```typescript
interface SiteData {
  title: string
  description: string
  image: string
  children?: any
}
const Layout = (props: SiteData) => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>${props.title}</title>
  <meta name="description" content="${props.description}">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <!-- More elements slow down JSX, but not template literals. -->
  <meta property="og:title" content="${props.title}">
  <meta property="og:image" content="${props.image}">
</head>
<body>
  ${props.children}
</body>
</html>
`

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <h1>Hello {props.name}</h1>
  </Layout>
)

app.get('/', (c) => {
  const props = {
    name: 'World',
    siteData: {
      title: 'Hello <> World',
      description: 'This is a description',
      image: 'https://example.com/image.png',
    },
  }
  return c.html(<Content {...props} />)
})
```

## `raw()`

```ts
app.get('/', (c) => {
  const name = 'John &quot;Johnny&quot; Smith'
  return c.html(html`<p>I'm ${raw(name)}.</p>`)
})
```

## Tips

Thanks to these libraries, Visual Studio Code and vim also interprets template literals as HTML, allowing syntax highlighting and formatting to be applied.

- <https://marketplace.visualstudio.com/items?itemName=bierner.lit-html>
- <https://github.com/MaxMEllon/vim-jsx-pretty>

# ConnInfo Helper

The ConnInfo Helper helps you to get the connection information. For example, you can get the client's remote address easily.

## Import

```ts [Cloudflare Workers]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/cloudflare-workers'
```

```ts [Deno]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/deno'
```

```ts [Bun]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/bun'
```

```ts [Vercel]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/vercel'
```

```ts [AWS Lambda]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/aws-lambda'
```

```ts [Cloudflare Pages]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/cloudflare-pages'
```

```ts [Netlify]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/netlify'
```

```ts [Lambda@Edge]
import { Hono } from 'hono'
import { getConnInfo } from 'hono/lambda-edge'
```

```ts [Node.js]
import { Hono } from 'hono'
import { getConnInfo } from '@hono/node-server/conninfo'
```

## Usage

```ts
const app = new Hono()

app.get('/', (c) => {
  const info = getConnInfo(c) // info is `ConnInfo`
  return c.text(`Your remote address is ${info.remote.address}`)
})
```

## Type Definitions

The type definitions of the values that you can get from `getConnInfo()` are the following:

```ts
type AddressType = 'IPv6' | 'IPv4' | undefined

type NetAddrInfo = {
  /**
   * Transport protocol type
   */
  transport?: 'tcp' | 'udp'
  /**
   * Transport port number
   */
  port?: number

  address?: string
  addressType?: AddressType
} & (
  | {
      /**
       * Host name such as IP Addr
       */
      address: string

      /**
       * Host name type
       */
      addressType: AddressType
    }
  | {}
)

/**
 * HTTP Connection information
 */
interface ConnInfo {
  /**
   * Remote information
   */
  remote: NetAddrInfo
}
```

# Accepts Helper

Accepts Helper helps to handle Accept headers in the Requests.

## Import

```ts
import { Hono } from 'hono'
import { accepts } from 'hono/accepts'
```

## `accepts()`

The `accepts()` function looks at the Accept header, such as Accept-Encoding and Accept-Language, and returns the proper value.

```ts
import { accepts } from 'hono/accepts'

app.get('/', (c) => {
  const accept = accepts(c, {
    header: 'Accept-Language',
    supports: ['en', 'ja', 'zh'],
    default: 'en',
  })
  return c.json({ lang: accept })
})
```

### `AcceptHeader` type

The definition of the `AcceptHeader` type is as follows.

```ts
export type AcceptHeader =
  | 'Accept'
  | 'Accept-Charset'
  | 'Accept-Encoding'
  | 'Accept-Language'
  | 'Accept-Patch'
  | 'Accept-Post'
  | 'Accept-Ranges'
```

## Options

### &#x20;header: `AcceptHeader`

The target accept header.

### &#x20;supports: `string[]`

The header values which your application supports.

### &#x20;default: `string`

The default values.

### &#x20;match: `(accepts: Accept[], config: acceptsConfig) => string`

The custom match function.
