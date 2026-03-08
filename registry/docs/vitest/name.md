# name

- **Type:**

```ts
interface UserConfig {
  name?: string | { label: string; color?: LabelColor }
}
```

Assign a custom name to the test project or Vitest process. The name will be visible in the CLI and UI, and available in the Node.js API via [`project.name`](/api/advanced/test-project#name).

The color used by the CLI and UI can be changed by providing an object with a `color` property.

## Colors

The displayed colors depend on your terminal’s color scheme. In the UI, colors match their CSS equivalents.

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

## Example

```js [string]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'unit',
  },
})
```

```js [object]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: {
      label: 'unit',
      color: 'blue',
    },
  },
})
```

This property is mostly useful if you have several projects as it helps distinguish them in your terminal:

```js{7,11} [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        name: 'unit',
        include: ['./test/*.unit.test.js'],
      },
      {
        name: 'e2e',
        include: ['./test/*.e2e.test.js'],
      },
    ],
  },
})
```

Vitest automatically assigns a name when none is provided. Resolution order:

- If the project is specified by a config file or directory, Vitest uses the package.json's `name` field.
- If there is no `package.json`, Vitest falls back to the project folder's basename.
- If the project is defined inline in the `projects` array (an object), Vitest assigns a numeric name equal to that project's array index (0-based).
  :::

Note that projects cannot have the same name. Vitest will throw an error during the config resolution.

You can also assign different names to different browser [instances](/config/browser/instances):

```js{10,11} [vitest.config.js]
import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium', name: 'Chrome' },
        { browser: 'firefox', name: 'Firefox' },
      ],
    },
  },
})
```

Browser instances inherit their parent project's name with the browser name appended in parentheses. For example, a project named `browser` with a chromium instance will be shown as `browser (chromium)`.

If the parent project has no name, or instances are defined at the root level (not inside a named project), the instance name defaults to the browser value (e.g. `chromium`). To override this behavior, set an explicit `name` on the instance.

***

# onConsoleLog&#x20;

```ts
function onConsoleLog(
  log: string,
  type: 'stdout' | 'stderr',
  entity: TestModule | TestSuite | TestCase | undefined,
): boolean | void
```

Custom handler for `console` methods in tests. If you return `false`, Vitest will not print the log to the console. Note that Vitest ignores all other falsy values.

Can be useful for filtering out logs from third-party libraries.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
      return !(log === 'message from third party library' && type === 'stdout')
    },
  },
})
```

***

# onStackTrace&#x20;

- **Type**: `(error: Error, frame: ParsedStack) => boolean | void`

Apply a filtering function to each frame of each stack trace when handling errors. This does not apply to stack traces printed by [`printConsoleTrace`](/config/printconsoletrace#printconsoletrace). The first argument, `error`, is a `TestError`.

Can be useful for filtering out stack trace frames from third-party libraries.

The stack trace's total size is also typically limited by V8's [`Error.stackTraceLimit`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit) number. You could set this to a high value in your test setup function to prevent stacks from being truncated.

```ts
import type { ParsedStack, TestError } from 'vitest'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onStackTrace(error: TestError, { file }: ParsedStack): boolean | void {
      // If we've encountered a ReferenceError, show the whole stack.
      if (error.name === 'ReferenceError') {
        return
      }

      // Reject all frames from third party libraries.
      if (file.includes('node_modules')) {
        return false
      }
    },
  },
})
```

***

# onUnhandledError  4.0.0

- **Type:**

```ts
function onUnhandledError(
  error: (TestError | Error) & { type: string }
): boolean | void
```

A custom callback for filtering unhandled errors that should not be reported. When an error is filtered out, it no longer affects the result of the test run.

To report unhandled errors without affecting the test outcome, use the [`dangerouslyIgnoreUnhandledErrors`](/config/dangerouslyignoreunhandlederrors) option instead.

This callback is called on the main thread, it doesn't have access to your test context.

## Example

```ts
import type { ParsedStack } from 'vitest'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onUnhandledError(error): boolean | void {
      // Ignore all errors with the name "MySpecialError".
      if (error.name === 'MySpecialError') {
        return false
      }
    },
  },
})
```

***

# open&#x20;

- **Type:** `boolean`
- **Default:** `!process.env.CI`
- **CLI:** `--open`, `--open=false`

Open Vitest UI automatically if it's [enabled](/config/ui).

***
