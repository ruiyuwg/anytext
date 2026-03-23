## Miscellaneous

A set of useful helper functions that Vitest provides.

### vi.waitFor

```ts
function waitFor<T>(
  callback: WaitForCallback<T>,
  options?: number | WaitForOptions
): Promise<T>
```

Wait for the callback to execute successfully. If the callback throws an error or returns a rejected promise it will continue to wait until it succeeds or times out.

If options is set to a number, the effect is equivalent to setting `{ timeout: options }`.

This is very useful when you need to wait for some asynchronous action to complete, for example, when you start a server and need to wait for it to start.

```ts
import { expect, test, vi } from 'vitest'
import { createServer } from './server.js'

test('Server started successfully', async () => {
  const server = createServer()

  await vi.waitFor(
    () => {
      if (!server.isReady) {
        throw new Error('Server not started')
      }

      console.log('Server started')
    },
    {
      timeout: 500, // default is 1000
      interval: 20, // default is 50
    }
  )
  expect(server.isReady).toBe(true)
})
```

It also works for asynchronous callbacks

```ts
// @vitest-environment jsdom

import { expect, test, vi } from 'vitest'
import { getDOMElementAsync, populateDOMAsync } from './dom.js'

test('Element exists in a DOM', async () => {
  // start populating DOM
  populateDOMAsync()

  const element = await vi.waitFor(async () => {
    // try to get the element until it exists
    const element = await getDOMElementAsync() as HTMLElement | null
    expect(element).toBeTruthy()
    expect(element.dataset.initialized).toBeTruthy()
    return element
  }, {
    timeout: 500, // default is 1000
    interval: 20, // default is 50
  })
  expect(element).toBeInstanceOf(HTMLElement)
})
```

If `vi.useFakeTimers` is used, `vi.waitFor` automatically calls `vi.advanceTimersByTime(interval)` in every check callback.

### vi.waitUntil

```ts
function waitUntil<T>(
  callback: WaitUntilCallback<T>,
  options?: number | WaitUntilOptions
): Promise<T>
```

This is similar to `vi.waitFor`, but if the callback throws any errors, execution is immediately interrupted and an error message is received. If the callback returns falsy value, the next check will continue until truthy value is returned. This is useful when you need to wait for something to exist before taking the next step.

Look at the example below. We can use `vi.waitUntil` to wait for the element to appear on the page, and then we can do something with the element.

```ts
import { expect, test, vi } from 'vitest'

test('Element render correctly', async () => {
  const element = await vi.waitUntil(
    () => document.querySelector('.element'),
    {
      timeout: 500, // default is 1000
      interval: 20, // default is 50
    }
  )

  // do something with the element
  expect(element.querySelector('.element-child')).toBeTruthy()
})
```

### vi.hoisted

```ts
function hoisted<T>(factory: () => T): T
```

All static `import` statements in ES modules are hoisted to the top of the file, so any code that is defined before the imports will actually be executed after imports are evaluated.

However, it can be useful to invoke some side effects like mocking dates before importing a module.

To bypass this limitation, you can rewrite static imports into dynamic ones like this:

```diff
callFunctionWithSideEffect()
- import { value } from './some/module.js'
+ const { value } = await import('./some/module.js')
```

When running `vitest`, you can do this automatically by using `vi.hoisted` method. Under the hood, Vitest will convert static imports into dynamic ones with preserved live-bindings.

```diff
- callFunctionWithSideEffect()
import { value } from './some/module.js'
+ vi.hoisted(() => callFunctionWithSideEffect())
```

Running code before the imports means that you cannot access imported variables because they are not defined yet:

```ts
import { value } from './some/module.js'

vi.hoisted(() => { value }) // throws an error // [!code warning]
```

This code will produce an error:

```
Cannot access '__vi_import_0__' before initialization
```

If you need to access a variable from another module inside of `vi.hoisted`, use dynamic import:

```ts
await vi.hoisted(async () => {
  const { value } = await import('./some/module.js')
})
```

However, it is discourage to import anything inside of `vi.hoisted` because imports are already hoisted - if you need to execute something before the tests are running, just execute it in the imported module itself.

This method returns the value that was returned from the factory. You can use that value in your `vi.mock` factories if you need easy access to locally defined variables:

```ts
import { expect, vi } from 'vitest'
import { originalMethod } from './path/to/module.js'

const { mockedMethod } = vi.hoisted(() => {
  return { mockedMethod: vi.fn() }
})

vi.mock('./path/to/module.js', () => {
  return { originalMethod: mockedMethod }
})

mockedMethod.mockReturnValue(100)
expect(originalMethod()).toBe(100)
```

Note that this method can also be called asynchronously even if your environment doesn't support top-level await:

```ts
const json = await vi.hoisted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
})
```

### vi.setConfig

```ts
function setConfig(config: RuntimeOptions): void
```

Updates config for the current test file. This method supports only config options that will affect the current test file:

```ts
vi.setConfig({
  allowOnly: true,
  testTimeout: 10_000,
  hookTimeout: 10_000,
  clearMocks: true,
  restoreMocks: true,
  fakeTimers: {
    now: new Date(2021, 11, 19),
    // supports the whole object
  },
  maxConcurrency: 10,
  sequence: {
    hooks: 'stack'
    // supports only "sequence.hooks"
  }
})
```

### vi.resetConfig

```ts
function resetConfig(): void
```

If [`vi.setConfig`](#vi-setconfig) was called before, this will reset config to the original state.

### vi.defineHelper 4.1.0

```ts
function defineHelper<F extends (...args: any) => any>(fn: F): F
```

Wraps a function to create an assertion helper. When an assertion fails inside the helper, the error stack trace will point to where the helper was called, not inside the helper itself. This makes it easier to identify the source of test failures when using custom assertion functions.

Works with both synchronous and asynchronous functions, and supports `expect.soft()`.

```ts
import { expect, vi } from 'vitest'

const assertPair = vi.defineHelper((a, b) => {
  expect(a).toEqual(b)
})

test('example', () => {
  assertPair('left', 'right') // Error points to this line
})
```

Example output:

```js
FAIL  example.test.ts > example
AssertionError: expected 'left' to deeply equal 'right'

Expected: "right"
Received: "left"

 ❯ example.test.ts:8:3
      7| test('example', () => {
      8|   assertPair('left', 'right')
       |   ^
      9| })
```

***
