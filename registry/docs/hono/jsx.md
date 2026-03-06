# JSX

You can write HTML with JSX syntax with `hono/jsx`.

Although `hono/jsx` works on the client, you will probably use it most often when rendering content on the server side. Here are some things related to JSX that are common to both server and client.

## Settings

To use JSX, modify the `tsconfig.json`:

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx"
  }
}
```

Alternatively, use the pragma directives:

```ts
/** @jsx jsx */
/** @jsxImportSource hono/jsx */
```

For Deno, you have to modify the `deno.json` instead of the `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "precompile",
    "jsxImportSource": "@hono/hono/jsx"
  }
}
```

## Usage

:::info
If you are coming straight from the [Quick Start](/docs/#quick-start), the main file has a `.ts` extension - you need to change it to `.tsx` - otherwise you will not be able to run the application at all. You should additionally modify the `package.json` (or `deno.json` if you are using Deno) to reflect that change (e.g. instead of having `bun run --hot src/index.ts` in dev script, you should have `bun run --hot src/index.tsx`).
:::

`index.tsx`:

```tsx
import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const app = new Hono()

const Layout: FC = (props) => {
  return (
    
      {props.children}
    
  )
}

const Top: FC<{ messages: string[] }> = (props: {
  messages: string[]
}) => {
  return (
    
      Hello Hono!
      
        {props.messages.map((message) => {
          return {message}!!
        })}
      
    
  )
}

app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html()
})

export default app
```

## Metadata hoisting

You can write document metadata tags such as `<title>`, `<link>`, and `<meta>` directly inside your components. These tags will be automatically hoisted to the `<head>` section of the document. This is especially useful when the `<head>` element is rendered far from the component that determines the appropriate metadata.

```tsx
import { Hono } from 'hono'

const app = new Hono()

app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      
        
        {content}
      
    )
  })
  await next()
})

app.get('/about', (c) => {
  return c.render(
    <>
      About Page
      
      about page content
    </>
  )
})

export default app
```

:::info
When hoisting occurs, existing elements are not removed. Elements appearing later are added to the end. For example, if you have `<title>Default</title>` in your `<head>` and a component renders `<title>Page Title</title>`, both titles will appear in the head.
:::

## Fragment

Use Fragment to group multiple elements without adding extra nodes:

```tsx
import { Fragment } from 'hono/jsx'

const List = () => (
  
    first child
    second child
    third child
  
)
```

Or you can write it with `<></>` if it set up properly.

```tsx
const List = () => (
  <>
    first child
    second child
    third child
  </>
)
```

## `PropsWithChildren`

You can use `PropsWithChildren` to correctly infer a child element in a function component.

```tsx
import { PropsWithChildren } from 'hono/jsx'

type Post = {
  id: number
  title: string
}

function Component({ title, children }: PropsWithChildren) {
  return (
    
      {title}
      {children}
    
  )
}
```

## Inserting Raw HTML

To directly insert HTML, use `dangerouslySetInnerHTML`:

```tsx
app.get('/foo', (c) => {
  const inner = { __html: 'JSX &middot; SSR' }
  const Div = 
})
```

## Memoization

Optimize your components by memoizing computed strings using `memo`:

```tsx
import { memo } from 'hono/jsx'

const Header = memo(() => Welcome to Hono)
const Footer = memo(() => Powered by Hono)
const Layout = (
  
    
    Hono is cool!
    
  
)
```

## Context

By using `useContext`, you can share data globally across any level of the Component tree without passing values through props.

```tsx
import type { FC } from 'hono/jsx'
import { createContext, useContext } from 'hono/jsx'

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = createContext(themes.light)

const Button: FC = () => {
  const theme = useContext(ThemeContext)
  return Push!
}

const Toolbar: FC = () => {
  return (
    
      
    
  )
}

// ...

app.get('/', (c) => {
  return c.html(
    
      <ThemeContext.Provider value={themes.dark}>
        
      </ThemeContext.Provider>
    
  )
})
```

## Async Component

`hono/jsx` supports an Async Component, so you can use `async`/`await` in your component.
If you render it with `c.html()`, it will await automatically.

```tsx
const AsyncComponent = async () => {
  await new Promise((r) => setTimeout(r, 1000)) // sleep 1s
  return Done!
}

app.get('/', (c) => {
  return c.html(
    
      
        
      
    
  )
})
```

## Suspense <Badge style="vertical-align: middle;" type="warning" text="Experimental" />

The React-like `Suspense` feature is available.
If you wrap the async component with `Suspense`, the content in the fallback will be rendered first, and once the Promise is resolved, the awaited content will be displayed.
You can use it with `renderToReadableStream()`.

```tsx
import { renderToReadableStream, Suspense } from 'hono/jsx/streaming'

//...

app.get('/', (c) => {
  const stream = renderToReadableStream(
    
      
        loading...}>
          
        
      
    
  )
  return c.body(stream, {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Transfer-Encoding': 'chunked',
    },
  })
})
```

## ErrorBoundary <Badge style="vertical-align: middle;" type="warning" text="Experimental" />

You can catch errors in child components using `ErrorBoundary`.

In the example below, it will show the content specified in `fallback` if an error occurs.

```tsx
function SyncComponent() {
  throw new Error('Error')
  return Hello
}

app.get('/sync', async (c) => {
  return c.html(
    
      
        Out of Service}>
          
        
      
    
  )
})
```

`ErrorBoundary` can also be used with async components and `Suspense`.

```tsx
async function AsyncComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  throw new Error('Error')
  return Hello
}

app.get('/with-suspense', async (c) => {
  return c.html(
    
      
        Out of Service}>
          Loading...}>
            
          
        
      
    
  )
})
```

## StreamingContext <Badge style="vertical-align: middle;" type="warning" text="Experimental" />

You can use `StreamingContext` to provide configuration for streaming components like `Suspense` and `ErrorBoundary`. This is useful for adding nonce values to script tags generated by these components for Content Security Policy (CSP).

```tsx
import { Suspense, StreamingContext } from 'hono/jsx/streaming'

// ...

app.get('/', (c) => {
  const stream = renderToReadableStream(
    
      
        <StreamingContext
          value={{ scriptNonce: 'random-nonce-value' }}
        >
          Loading...}>
            
          
        
      
    
  )

  return c.body(stream, {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Transfer-Encoding': 'chunked',
      'Content-Security-Policy':
        "script-src 'nonce-random-nonce-value'",
    },
  })
})
```

The `scriptNonce` value will be automatically added to any `<script>` tags generated by `Suspense` and `ErrorBoundary` components.

## Integration with html Middleware

Combine the JSX and html middlewares for powerful templating.
For in-depth details, consult the [html middleware documentation](/docs/helpers/html).

```tsx
import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

interface SiteData {
  title: string
  children?: any
}

const Layout = (props: SiteData) =>
  html`<!doctype html>
    
      
        ${props.title}
      
      
        ${props.children}
      
    `

const Content = (props: { siteData: SiteData; name: string }) => (
  
    Hello {props.name}
  
)

app.get('/:name', (c) => {
  const { name } = c.req.param()
  const props = {
    name: name,
    siteData: {
      title: 'JSX with html sample',
    },
  }
  return c.html()
})

export default app
```

## With JSX Renderer Middleware

The [JSX Renderer Middleware](/docs/middleware/builtin/jsx-renderer) allows you to create HTML pages more easily with the JSX.

## Override type definitions

You can override the type definition to add your custom elements and attributes.

```ts
declare module 'hono/jsx' {
  namespace JSX {
    interface IntrinsicElements {
      'my-custom-element': HTMLAttributes & {
        'x-event'?: 'click' | 'scroll'
      }
    }
  }
}
```

# Helpers

Helpers are available to assist in developing your application. Unlike middleware, they don't act as handlers, but rather provide useful functions.

For instance, here's how to use the [Cookie helper](/docs/helpers/cookie):

```ts
import { getCookie, setCookie } from 'hono/cookie'

const app = new Hono()

app.get('/cookie', (c) => {
  const yummyCookie = getCookie(c, 'yummy_cookie')
  // ...
  setCookie(c, 'delicious_cookie', 'macha')
  //
})
```

## Available Helpers

- [Accepts](/docs/helpers/accepts)
- [Adapter](/docs/helpers/adapter)
- [Cookie](/docs/helpers/cookie)
- [css](/docs/helpers/css)
- [Dev](/docs/helpers/dev)
- [Factory](/docs/helpers/factory)
- [html](/docs/helpers/html)
- [JWT](/docs/helpers/jwt)
- [SSG](/docs/helpers/ssg)
- [Streaming](/docs/helpers/streaming)
- [Testing](/docs/helpers/testing)
- [WebSocket](/docs/helpers/websocket)

# Frequently Asked Questions

This guide is a collection of frequently asked questions (FAQ) about Hono and how to resolve them.

## Is there an official Renovate config for Hono?

The Hono teams does not currently maintain [Renovate](https://github.com/renovatebot/renovate) Configuration.
Therefore, please use third-party renovate-config as follows.

In your `renovate.json` :

```json
// renovate.json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>shinGangan/renovate-config-hono" // [!code ++]
  ]
}
```

see [renovate-config-hono](https://github.com/shinGangan/renovate-config-hono) repository for more details.
