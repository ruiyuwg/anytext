# Client Components

`hono/jsx` supports not only server side but also client side. This means that it is possible to create an interactive UI that runs in the browser. We call it Client Components or `hono/jsx/dom`.

It is fast and very small. The counter program in `hono/jsx/dom` is only 2.8KB with Brotli compression. But, 47.8KB for React.

This section introduces Client Components-specific features.

## Counter example

Here is an example of a simple counter, the same code works as in React.

```tsx
import { useState } from 'hono/jsx'
import { render } from 'hono/jsx/dom'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    
      Count: {count}
       setCount(count + 1)}>Increment
    
  )
}

function App() {
  return (
    
      
        
      
    
  )
}

const root = document.getElementById('root')
render(, root)
```

## `render()`

You can use `render()` to insert JSX components within a specified HTML element.

```tsx
render(, container)
```

You can see full example code here: [Counter example](https://github.com/honojs/examples/tree/main/hono-vite-jsx).

## Hooks compatible with React

hono/jsx/dom has Hooks that are compatible or partially compatible with React. You can learn about these APIs by looking at [the React documentation](https://react.dev/reference/react/hooks).

- `useState()`
- `useEffect()`
- `useRef()`
- `useCallback()`
- `use()`
- `startTransition()`
- `useTransition()`
- `useDeferredValue()`
- `useMemo()`
- `useLayoutEffect()`
- `useReducer()`
- `useDebugValue()`
- `createElement()`
- `memo()`
- `isValidElement()`
- `useId()`
- `createRef()`
- `forwardRef()`
- `useImperativeHandle()`
- `useSyncExternalStore()`
- `useInsertionEffect()`
- `useFormStatus()`
- `useActionState()`
- `useOptimistic()`

## `startViewTransition()` family

The `startViewTransition()` family contains original hooks and functions to handle [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) easily. The followings are examples of how to use them.

### 1. An easiest example

You can write a transition using the `document.startViewTransition` shortly with the `startViewTransition()`.

```tsx
import { useState, startViewTransition } from 'hono/jsx'
import { css, Style } from 'hono/css'

export default function App() {
  const [showLargeImage, setShowLargeImage] = useState(false)
  return (
    <>
      
      <button
        onClick={() =>
          startViewTransition(() =>
            setShowLargeImage((state) => !state)
          )
        }
      >
        Click!
      
      
        {!showLargeImage ? (
          
        ) : (
          <div
            class={css`
              background: url('https://hono.dev/images/logo-large.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 600px;
              height: 600px;
            `}
          >
        )}
      
    </>
  )
}
```

### 2. Using `viewTransition()` with `keyframes()`

The `viewTransition()` function allows you to get the unique `view-transition-name`.

You can use it with the `keyframes()`, The `::view-transition-old()` is converted to `::view-transition-old(${uniqueName))`.

```tsx
import { useState, startViewTransition } from 'hono/jsx'
import { viewTransition } from 'hono/jsx/dom/css'
import { css, keyframes, Style } from 'hono/css'

const rotate = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`

export default function App() {
  const [showLargeImage, setShowLargeImage] = useState(false)
  const [transitionNameClass] = useState(() =>
    viewTransition(css`
      ::view-transition-old() {
        animation-name: ${rotate};
      }
      ::view-transition-new() {
        animation-name: ${rotate};
      }
    `)
  )
  return (
    <>
      
      <button
        onClick={() =>
          startViewTransition(() =>
            setShowLargeImage((state) => !state)
          )
        }
      >
        Click!
      
      
        {!showLargeImage ? (
          
        ) : (
          <div
            class={css`
              ${transitionNameClass}
              background: url('https://hono.dev/images/logo-large.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 600px;
              height: 600px;
            `}
          >
        )}
      
    </>
  )
}
```

### 3. Using `useViewTransition`

If you want to change the style only during the animation. You can use `useViewTransition()`. This hook returns the `[boolean, (callback: () => void) => void]`, and they are the `isUpdating` flag and the `startViewTransition()` function.

When this hook is used, the Component is evaluated at the following two times.

- Inside the callback of a call to `startViewTransition()`.
- When [the `finish` promise becomes fulfilled](https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition/finished)

```tsx
import { useState, useViewTransition } from 'hono/jsx'
import { viewTransition } from 'hono/jsx/dom/css'
import { css, keyframes, Style } from 'hono/css'

const rotate = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`

export default function App() {
  const [isUpdating, startViewTransition] = useViewTransition()
  const [showLargeImage, setShowLargeImage] = useState(false)
  const [transitionNameClass] = useState(() =>
    viewTransition(css`
      ::view-transition-old() {
        animation-name: ${rotate};
      }
      ::view-transition-new() {
        animation-name: ${rotate};
      }
    `)
  )
  return (
    <>
      
      <button
        onClick={() =>
          startViewTransition(() =>
            setShowLargeImage((state) => !state)
          )
        }
      >
        Click!
      
      
        {!showLargeImage ? (
          
        ) : (
          <div
            class={css`
              ${transitionNameClass}
              background: url('https://hono.dev/images/logo-large.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 600px;
              height: 600px;
              position: relative;
              ${isUpdating &&
              css`
                &:before {
                  content: 'Loading...';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                }
              `}
            `}
          >
        )}
      
    </>
  )
}
```

## The `hono/jsx/dom` runtime

There is a small JSX Runtime for Client Components. Using this will result in smaller bundled results than using `hono/jsx`. Specify `hono/jsx/dom` in `tsconfig.json`. For Deno, modify the deno.json.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx/dom"
  }
}
```

Alternatively, you can specify `hono/jsx/dom` in the esbuild transform options in `vite.config.ts`.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxImportSource: 'hono/jsx/dom',
  },
})
```

# Miscellaneous

## Contributing

Contributions Welcome! You can contribute in the following ways.

- Create an Issue - Propose a new feature. Report a bug.
- Pull Request - Fix a bug and typo. Refactor the code.
- Create third-party middleware - Instruct below.
- Share - Share your thoughts on the Blog, X(Twitter), and others.
- Make your application - Please try to use Hono.

For more details, see [Contribution Guide](https://github.com/honojs/hono/blob/main/docs/CONTRIBUTING.md).

## Sponsoring

You can sponsor Hono authors via the GitHub sponsor program.

- [Sponsor @yusukebe on GitHub Sponsors](https://github.com/sponsors/yusukebe)
- [Sponsor @usualoma on GitHub Sponsors](https://github.com/sponsors/usualoma)

## Other Resources

- GitHub repository: <a href="https://github.com/honojs">https://github.com/honojs</a>
- npm registry: <a href="https://www.npmjs.com/package/hono">https://www.npmjs.com/package/hono</a>
- JSR: <a href="https://jsr.io/@hono/hono">https://jsr.io/@hono/hono</a>
