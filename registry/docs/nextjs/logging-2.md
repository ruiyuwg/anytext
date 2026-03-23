# logging

## Options

### Incoming Requests

By default all the incoming requests will be logged in the console during development. You can use the `incomingRequests` option to decide which requests to ignore.
Since this is only logged in development, this option doesn't affect production builds.

```js filename="next.config.js"
module.exports = {
  logging: {
    incomingRequests: {
      ignore: [/\api\/v1\/health/],
    },
  },
}
```

Or you can disable incoming request logging by setting `incomingRequests` to `false`.

```js filename="next.config.js"
module.exports = {
  logging: {
    incomingRequests: false,
  },
}
```

### Browser Console Logs

You can forward browser console logs (such as `console.log`, `console.warn`, `console.error`) to the terminal during development. This is useful for debugging client-side code without needing to check the browser's developer tools.

```js filename="next.config.js"
module.exports = {
  logging: {
    browserToTerminal: true,
  },
}
```

#### Options

The `browserToTerminal` option accepts the following values:

| Value     | Description                                         |
| --------- | --------------------------------------------------- |
| `'warn'`  | Forward only warnings and errors, by default        |
| `'error'` | Forward only errors                                 |
| `true`    | Forward all console output (log, info, warn, error) |
| `false`   | Disable browser log forwarding                      |

```js filename="next.config.js"
module.exports = {
  logging: {
    browserToTerminal: 'warn',
  },
}
```

#### Source Location

When enabled, browser logs include source location information (file path and line number) by default. For example:

```tsx filename="pages/index.tsx" highlight={6}
export default function Home() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('Hello World')
      }}
    >
      Click me
    </button>
  )
}
```

Clicking the button prints this message to the terminal:

```bash filename="Terminal"
[browser] Hello World (pages/index.tsx:6:17)
```

### Disabling Logging

In addition, you can disable the development logging by setting `logging` to `false`.

```js filename="next.config.js"
module.exports = {
  logging: false,
}
```

## Version History

| Version   | Changes                                                                          |
| --------- | -------------------------------------------------------------------------------- |
| `v16.2.0` | `browserToTerminal` added (moved from `experimental.browserDebugInfoInTerminal`) |
| `v15.4.0` | `experimental.browserDebugInfoInTerminal` introduced                             |
| `v15.2.0` | `incomingRequests` added                                                         |
| `v15.0.0` | `logging: false` option added, `fetches.hmrRefreshes` added for App Router       |
| `v14.0.0` | `logging.fetches` moved to stable for App Router                                 |

# onDemandEntries

# onDemandEntries

Next.js exposes some options that give you some control over how the server will dispose or keep in memory built pages in development.

To change the defaults, open `next.config.js` and add the `onDemandEntries` config:

```js filename="next.config.js"
module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}
```

# optimizePackageImports

# optimizePackageImports

> This feature is currently experimental and subject to change, it is not recommended for production.

Some packages can export hundreds or thousands of modules, which can cause performance issues in development and production.

Adding a package to `experimental.optimizePackageImports` will only load the modules you are actually using, while still giving you the convenience of writing import statements with many named exports.

```js filename="next.config.js"
module.exports = {
  experimental: {
    optimizePackageImports: ['package-name'],
  },
}
```

The following libraries are optimized by default:

- `lucide-react`
- `date-fns`
- `lodash-es`
- `ramda`
- `antd`
- `react-bootstrap`
- `ahooks`
- `@ant-design/icons`
- `@headlessui/react`
- `@headlessui-float/react`
- `@heroicons/react/20/solid`
- `@heroicons/react/24/solid`
- `@heroicons/react/24/outline`
- `@visx/visx`
- `@tremor/react`
- `rxjs`
- `@mui/material`
- `@mui/icons-material`
- `recharts`
- `react-use`
- `@material-ui/core`
- `@material-ui/icons`
- `@tabler/icons-react`
- `mui-core`
- `react-icons/*`
- `effect`
- `@effect/*`

# output
