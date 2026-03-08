# browser.provider

- **Type:** `BrowserProviderOption`

The return value of the provider factory. You can import the factory from `@vitest/browser-<provider-name>` or make your own provider:

```ts{8-10}
import { playwright } from '@vitest/browser-playwright'
import { webdriverio } from '@vitest/browser-webdriverio'
import { preview } from '@vitest/browser-preview'

export default defineConfig({
  test: {
    browser: {
      provider: playwright(),
      provider: webdriverio(),
      provider: preview(),
    },
  },
})
```

To configure how provider initializes the browser, you can pass down options to the factory function:

```ts{7-13,20-26}
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    browser: {
      // shared provider options between all instances
      provider: playwright({
        launchOptions: {
          slowMo: 50,
          channel: 'chrome-beta',
        },
        actionTimeout: 5_000,
      }),
      instances: [
        { browser: 'chromium' },
        {
          browser: 'firefox',
          // overriding options only for a single instance
          // this will NOT merge options with the parent one
          provider: playwright({
            launchOptions: {
              firefoxUserPrefs: {
                'browser.startup.homepage': 'https://example.com',
              },
            },
          })
        }
      ],
    },
  },
})
```

## Custom Provider advanced

The custom provider API is highly experimental and can change between patches. If you just need to run tests in a browser, use the [`browser.instances`](#browser-instances) option instead.

```ts
export interface BrowserProvider {
  name: string
  mocker?: BrowserModuleMocker
  readonly initScripts?: string[]
  /**
   * @experimental opt-in into file parallelisation
   */
  supportsParallelism: boolean
  getCommandsContext: (sessionId: string) => Record<string, unknown>
  openPage: (sessionId: string, url: string) => Promise<void>
  getCDPSession?: (sessionId: string) => Promise<CDPSession>
  close: () => Awaitable<void>
}
```

***

# browser.screenshotDirectory

- **Type:** `string`
- **Default:** `__screenshots__` in the test file directory

Path to the screenshots directory relative to the `root`.

***

# browser.screenshotFailures

- **Type:** `boolean`
- **Default:** `!browser.ui`

Should Vitest take screenshots if the test fails.

***

# browser.testerHtmlPath

- **Type:** `string`

A path to the HTML entry point. Can be relative to the root of the project. This file will be processed with [`transformIndexHtml`](https://vite.dev/guide/api-plugin#transformindexhtml) hook.

***

# browser.trace

- **Type:** `'on' | 'off' | 'on-first-retry' | 'on-all-retries' | 'retain-on-failure' | object`
- **CLI:** `--browser.trace=on`, `--browser.trace=retain-on-failure`
- **Default:** `'off'`

Capture a trace of your browser test runs. You can preview traces with [Playwright Trace Viewer](https://trace.playwright.dev/).

This options supports the following values:

- `'on'` - capture trace for all tests. (not recommended as it's performance heavy)
- `'off'` - do not capture traces.
- `'on-first-retry'` - capture trace only when retrying the test for the first time.
- `'on-all-retries'` - capture trace on every retry of the test.
- `'retain-on-failure'` - capture trace only for tests that fail. This will automatically delete traces for tests that pass.
- `object` - an object with the following shape:

```ts
interface TraceOptions {
  mode: 'on' | 'off' | 'on-first-retry' | 'on-all-retries' | 'retain-on-failure'
  /**
   * The directory where all traces will be stored. By default, Vitest
   * stores all traces in `__traces__` folder close to the test file.
   */
  tracesDir?: string
  /**
   * Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.
   * @default true
   */
  screenshots?: boolean
  /**
   * If this option is true tracing will
   * - capture DOM snapshot on every action
   * - record network activity
   * @default true
   */
  snapshots?: boolean
}
```

This option is supported only by the [**playwright**](/config/browser/playwright) provider.

***

# browser.trackUnhandledErrors

- **Type:** `boolean`
- **Default:** `true`

Enables tracking uncaught errors and exceptions so they can be reported by Vitest.

If you need to hide certain errors, it is recommended to use [`onUnhandledError`](/config/#onunhandlederror) option instead.

Disabling this will completely remove all Vitest error handlers, which can help debugging with the "Pause on exceptions" checkbox turned on.

***

# browser.ui

- **Type:** `boolean`
- **Default:** `!isCI`
- **CLI:** `--browser.ui=false`

Should Vitest UI be injected into the page. By default, injects UI iframe during development.

***

# browser.viewport

- **Type:** `{ width, height }`
- **Default:** `414x896`

Default iframe's viewport.

***

# cache&#x20;

- **Type**: `false`
- **CLI**: `--no-cache`, `--cache=false`

Use this option if you want to disable the cache feature. At the moment Vitest stores cache for test results to run the longer and failed tests first.

The cache directory is controlled by the Vite's [`cacheDir`](https://vitejs.dev/config/shared-options.html#cachedir) option:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: 'custom-folder/.vitest'
})
```

You can limit the directory only for Vitest by using `process.env.VITEST`:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: process.env.VITEST ? 'custom-folder/.vitest' : undefined
})
```

***

# chaiConfig

- **Type:** `{ includeStack?, showDiff?, truncateThreshold? }`
- **Default:** `{ includeStack: false, showDiff: true, truncateThreshold: 40 }`

Equivalent to [Chai config](https://github.com/chaijs/chai/blob/4.x.x/lib/chai/config.js).

## chaiConfig.includeStack

- **Type:** `boolean`
- **Default:** `false`

Influences whether stack trace is included in Assertion error message. Default of false suppresses stack trace in the error message.

## chaiConfig.showDiff

- **Type:** `boolean`
- **Default:** `true`

Influences whether or not the `showDiff` flag should be included in the thrown AssertionErrors. `false` will always be `false`; `true` will be true when the assertion has requested a diff to be shown.

## chaiConfig.truncateThreshold

- **Type:** `number`
- **Default:** `40`

Sets length threshold for actual and expected values in assertion errors. If this threshold is exceeded, for example for large data structures, the value is replaced with something like `[ Array(3) ]` or `{ Object (prop1, prop2) }`. Set it to `0` if you want to disable truncating altogether.

This config option affects truncating values in `test.each` titles and inside the assertion error message.

***

# clearMocks

- **Type:** `boolean`
- **Default:** `false`

Should Vitest automatically call [`vi.clearAllMocks()`](/api/vi#vi-clearallmocks) before each test.

This will clear mock history without affecting mock implementations.

```js [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    clearMocks: true,
  },
})
```

***
