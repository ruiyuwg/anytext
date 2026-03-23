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
      Hello! ${username}!`
  )
})
```

### Insert snippets into JSX

Insert the inline script into JSX:

```tsx
app.get('/', (c) => {
  return c.html(
    
      
        Test Site
        {html`
          
            // No need to use dangerouslySetInnerHTML.
            // If you write it here, it will not be escaped.
          
        `}
      
      Hello!
    
  )
})
```

### Act as functional component

Since `html` returns an HtmlEscapedString, it can act as a fully functional component without using JSX.

#### Use `html` to speed up the process instead of `memo`

```typescript
const Footer = () => html`
  
    My Address...
  
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


  
  ${props.title}
  
  
  
  
  
  


  ${props.children}


`

const Content = (props: { siteData: SiteData; name: string }) => (
  
    Hello {props.name}
  
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
  return c.html()
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

# Dev Helper

Dev Helper provides useful methods you can use in development.

```ts
import { Hono } from 'hono'
import { getRouterName, showRoutes } from 'hono/dev'
```

## `getRouterName()`

You can get the name of the currently used router with `getRouterName()`.

```ts
const app = new Hono()

// ...

console.log(getRouterName(app))
```

## `showRoutes()`

`showRoutes()` function displays the registered routes in your console.

Consider an application like the following:

```ts
const app = new Hono().basePath('/v1')

app.get('/posts', (c) => {
  // ...
})

app.get('/posts/:id', (c) => {
  // ...
})

app.post('/posts', (c) => {
  // ...
})

showRoutes(app, {
  verbose: true,
})
```

When this application starts running, the routes will be shown in your console as follows:

```txt
GET   /v1/posts
GET   /v1/posts/:id
POST  /v1/posts
```

## Options

### <Badge type="info" text="optional" /> verbose: `boolean`

When set to `true`, it displays verbose information.

### <Badge type="info" text="optional" /> colorize: `boolean`

When set to `false`, the output will not be colored.
