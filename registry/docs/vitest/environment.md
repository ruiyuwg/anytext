# environment

- **Type:** `'node' | 'jsdom' | 'happy-dom' | 'edge-runtime' | string`
- **Default:** `'node'`
- **CLI:** `--environment=<env>`

The environment that will be used for testing. The default environment in Vitest
is a Node.js environment. If you are building a web application, you can use
browser-like environment through either [`jsdom`](https://github.com/jsdom/jsdom)
or [`happy-dom`](https://github.com/capricorn86/happy-dom) instead.
If you are building edge functions, you can use [`edge-runtime`](https://edge-runtime.vercel.app/packages/vm) environment

You can also use [Browser Mode](/guide/browser/) to run integration or unit tests in the browser without mocking the environment.

To define custom options for your environment, use [`environmentOptions`](/config/environmentoptions).

By adding a `@vitest-environment` docblock or comment at the top of the file,
you can specify another environment to be used for all tests in that file:

Docblock style:

```js
/**
 * @vitest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

Comment style:

```js
// @vitest-environment happy-dom

test('use happy-dom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

For compatibility with Jest, there is also a `@jest-environment`:

```js
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

You can also define a custom environment. When non-builtin environment is used, Vitest will try to load the file if it's relative or absolute, or a package `vitest-environment-${name}`, if the name is a bare specifier.

The custom environment file should export an object with the shape of `Environment`:

```ts [environment.js]
import type { Environment } from 'vitest'

export default <Environment>{
  name: 'custom',
  viteEnvironment: 'ssr',
  setup() {
    // custom setup
    return {
      teardown() {
        // called after all tests with this env have been run
      }
    }
  }
}
```

The `viteEnvironment` field corresponde to the environment defined by the [Vite Environment API](https://vite.dev/guide/api-environment#environment-api). By default, Vite exposes `client` (for the browser) and `ssr` (for the server) environments.

Vitest also exposes `builtinEnvironments` through `vitest/environments` entry, in case you just want to extend it. You can read more about extending environments in [our guide](/guide/environment).

jsdom environment exposes `jsdom` global variable equal to the current [JSDOM](https://github.com/jsdom/jsdom) instance. If you want TypeScript to recognize it, you can add `vitest/jsdom` to your `tsconfig.json` when you use this environment:

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitest/jsdom"]
  }
}
```

***

# environmentOptions

- **Type:** `Record<'jsdom' | 'happyDOM' | string, unknown>`
- **Default:** `{}`

These options are passed to the setup method of the current [environment](/config/environment). By default, you can configure options only for `jsdom` and `happyDOM` when you use them as your test environment.

## Example

```js [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:3000',
      },
      happyDOM: {
        width: 300,
        height: 400,
      },
    },
  },
})
```

Options are scoped to their environment. For example, put jsdom options under the `jsdom` key and happy-dom options under the `happyDOM` key. This lets you mix multiple environments within the same project.

***

# exclude

- **Type:** `string[]`
- **Default:** `['**/node_modules/**', '**/.git/**']`
- **CLI:** `vitest --exclude "**/excluded-file" --exclude "*/other-files/*.js"`

A list of [glob patterns](https://superchupu.dev/tinyglobby/comparison) that should be excluded from your test files. These patterns are resolved relative to the [`root`](/config/root) ([`process.cwd()`](https://nodejs.org/api/process.html#processcwd) by default).

Vitest uses the [`tinyglobby`](https://npmx.dev/package/tinyglobby) package to resolve the globs.

This option does not affect coverage. If you need to remove certain files from the coverage report, use [`coverage.exclude`](/config/coverage#exclude).

This is the only option that doesn't override your configuration if you provide it with a CLI flag. All glob patterns added via `--exclude` flag will be added to the config's `exclude`.

## Example

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      './temp/**',
    ],
  },
})
```

Although the CLI `exclude` option is additive, manually setting `exclude` in your config will replace the default value. To extend the default `exclude` patterns, use `configDefaults` from `vitest/config`:

```js{6}
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      'packages/template/*',
      './temp/**',
    ],
  },
})
```

***

# execArgv

- **Type:** `string[]`
- **Default:** `[]`

Pass additional arguments to `node` in the runner worker. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

Be careful when using, it as some options may crash worker, e.g. `--prof`, `--title`. See https://github.com/nodejs/node/issues/41103.

***

# expandSnapshotDiff

- **Type:** `boolean`
- **CLI:** `--expandSnapshotDiff`, `--expand-snapshot-diff`
- **Default:** `false`

Show full diff when snapshot fails instead of a patch.

***

# expect

The following types are used in the type signatures below

```ts
type Awaitable<T> = T | PromiseLike<T>
```

`expect` is used to create assertions. In this context `assertions` are functions that can be called to assert a statement. Vitest provides `chai` assertions by default and also `Jest` compatible assertions built on top of `chai`. Since Vitest 4.1, for spy/mock testing, Vitest also provides Chai-style assertions (e.g., [`expect(spy).to.have.been.called()`](#called)) alongside Jest-style assertions (e.g., `expect(spy).toHaveBeenCalled()`). Unlike `Jest`, Vitest supports a message as the second argument - if the assertion fails, the error message will be equal to it.

```ts
export interface ExpectStatic extends Chai.ExpectStatic, AsymmetricMatchersContaining {
  <T>(actual: T, message?: string): Assertion<T>
  extend: (expects: MatchersObject) => void
  anything: () => any
  any: (constructor: unknown) => any
  getState: () => MatcherState
  setState: (state: Partial<MatcherState>) => void
  not: AsymmetricMatchersContaining
}
```

For example, this code asserts that an `input` value is equal to `2`. If it's not, the assertion will throw an error, and the test will fail.

```ts twoslash
import { expect } from 'vitest'

const input = Math.sqrt(4)

expect(input).to.equal(2) // chai API
expect(input).toBe(2) // jest API
```

Technically this example doesn't use [`test`](/api/test) function, so in the console you will see Node.js error instead of Vitest output. To learn more about `test`, please read [Test API Reference](/api/test).

Also, `expect` can be used statically to access matcher functions, described later, and more.

`expect` has no effect on testing types, if the expression doesn't have a type error. If you want to use Vitest as [type checker](/guide/testing-types), use [`expectTypeOf`](/api/expect-typeof) or [`assertType`](/api/assert-type).

## assert

- **Type:** `Chai.AssertStatic`

Vitest reexports chai's [`assert` API](https://www.chaijs.com/api/assert/) as `expect.assert` for convenience. You can see the supported methods on the [Assert API page](/api/assert).

This is especially useful if you need to narrow down the type, since `expect.to*` methods do not support that:

```ts
interface Cat {
  __type: 'Cat'
  mew(): void
}
interface Dog {
  __type: 'Dog'
  bark(): void
}
type Animal = Cat | Dog

const animal: Animal = { __type: 'Dog', bark: () => {} }

expect.assert(animal.__type === 'Dog')
// does not show a type error!
expect(animal.bark()).toBeUndefined()
```

Note that `expect.assert` also supports other type-narrowing methods (like `assert.isDefined`, `assert.exists` and so on).

## soft

- **Type:** `ExpectStatic & (actual: any) => Assertions`

`expect.soft` functions similarly to `expect`, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.

```ts
import { expect, test } from 'vitest'

test('expect.soft test', () => {
  expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
  expect.soft(1 + 2).toBe(4) // mark the test as fail and continue
})
// reporter will report both errors at the end of the run
```

It can also be used with `expect`. if `expect` assertion fails, the test will be terminated and all errors will be displayed.

```ts
import { expect, test } from 'vitest'

test('expect.soft test', () => {
  expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
  expect(1 + 2).toBe(4) // failed and terminate the test, all previous errors will be output
  expect.soft(1 + 3).toBe(5) // do not run
})
```

`expect.soft` can only be used inside the [`test`](/api/test) function.

## poll

```ts
interface ExpectPoll extends ExpectStatic {
  (actual: () => T, options?: { interval?: number; timeout?: number; message?: string }): Promise<Assertions<T>>
}
```

`expect.poll` reruns the *assertion* until it is succeeded. You can configure how many times Vitest should rerun the `expect.poll` callback by setting `interval` and `timeout` options.

If an error is thrown inside the `expect.poll` callback, Vitest will retry again until the timeout runs out.

```ts
import { expect, test } from 'vitest'

test('element exists', async () => {
  asyncInjectElement()

  await expect.poll(() => document.querySelector('.element')).toBeTruthy()
})
```

`expect.poll` makes every assertion asynchronous, so you need to await it. Since Vitest 3, if you forget to await it, the test will fail with a warning to do so.

`expect.poll` doesn't work with several matchers:

- Snapshot matchers are not supported because they will always succeed. If your condition is flaky, consider using [`vi.waitFor`](/api/vi#vi-waitfor) instead to resolve it first:

```ts
import { expect, vi } from 'vitest'

const flakyValue = await vi.waitFor(() => getFlakyValue())
expect(flakyValue).toMatchSnapshot()
```

- `.resolves` and `.rejects` are not supported. `expect.poll` already awaits the condition if it's asynchronous.
- `toThrow` and its aliases are not supported because the `expect.poll` condition is always resolved before the matcher gets the value
  :::

## not

Using `not` will negate the assertion. For example, this code asserts that an `input` value is not equal to `2`. If it's equal, the assertion will throw an error, and the test will fail.

```ts
import { expect, test } from 'vitest'

const input = Math.sqrt(16)

expect(input).not.to.equal(2) // chai API
expect(input).not.toBe(2) // jest API
```

## toBe

- **Type:** `(value: any) => Awaitable<void>`

`toBe` can be used to assert if primitives are equal or that objects share the same reference. It is equivalent of calling `expect(Object.is(3, 3)).toBe(true)`. If the objects are not the same, but you want to check if their structures are identical, you can use [`toEqual`](#toequal).

For example, the code below checks if the trader has 13 apples.

```ts
import { expect, test } from 'vitest'

const stock = {
  type: 'apples',
  count: 13,
}

test('stock has 13 apples', () => {
  expect(stock.type).toBe('apples')
  expect(stock.count).toBe(13)
})

test('stocks are the same', () => {
  const refStock = stock // same reference

  expect(stock).toBe(refStock)
})
```

Try not to use `toBe` with floating-point numbers. Since JavaScript rounds them, `0.1 + 0.2` is not strictly `0.3`. To reliably assert floating-point numbers, use [`toBeCloseTo`](#tobecloseto) assertion.

## toBeCloseTo

- **Type:** `(value: number, numDigits?: number) => Awaitable<void>`

Use `toBeCloseTo` to compare floating-point numbers. The optional `numDigits` argument limits the number of digits to check *after* the decimal point. The default for `numDigits` is 2. For example:

```ts
import { expect, test } from 'vitest'

test.fails('decimals are not equal in javascript', () => {
  expect(0.2 + 0.1).toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
})

test('decimals are rounded to 5 after the point', () => {
  // 0.2 + 0.1 is 0.30000 | "000000000004" removed
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
  // nothing from 0.30000000000000004 is removed
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50)
})
```

## toBeDefined

- **Type:** `() => Awaitable<void>`

`toBeDefined` asserts that the value is not equal to `undefined`. Useful use case would be to check if function *returned* anything.

```ts
import { expect, test } from 'vitest'

function getApples() {
  return 3
}

test('function returned something', () => {
  expect(getApples()).toBeDefined()
})
```

## toBeUndefined

- **Type:** `() => Awaitable<void>`

Opposite of `toBeDefined`, `toBeUndefined` asserts that the value *is* equal to `undefined`. Useful use case would be to check if function hasn't *returned* anything.

```ts
import { expect, test } from 'vitest'

function getApplesFromStock(stock: string) {
  if (stock === 'Bill') {
    return 13
  }
}

test('mary doesn\'t have a stock', () => {
  expect(getApplesFromStock('Mary')).toBeUndefined()
})
```

## toBeTruthy

- **Type:** `() => Awaitable<void>`

`toBeTruthy` asserts that the value is true when converted to boolean. Useful if you don't care for the value, but just want to know it can be converted to `true`.

For example, having this code you don't care for the return value of `stocks.getInfo` - it maybe a complex object, a string, or anything else. The code will still work.

```ts
import { Stocks } from './stocks.js'

const stocks = new Stocks()
stocks.sync('Bill')
if (stocks.getInfo('Bill')) {
  stocks.sell('apples', 'Bill')
}
```

So if you want to test that `stocks.getInfo` will be truthy, you could write:

```ts
import { expect, test } from 'vitest'
import { Stocks } from './stocks.js'

const stocks = new Stocks()

test('if we know Bill stock, sell apples to him', () => {
  stocks.sync('Bill')
  expect(stocks.getInfo('Bill')).toBeTruthy()
})
```

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

## toBeFalsy

- **Type:** `() => Awaitable<void>`

`toBeFalsy` asserts that the value is false when converted to boolean. Useful if you don't care for the value, but just want to know if it can be converted to `false`.

For example, having this code you don't care for the return value of `stocks.stockFailed` - it may return any falsy value, but the code will still work.

```ts
import { Stocks } from './stocks.js'

const stocks = new Stocks()
stocks.sync('Bill')
if (!stocks.stockFailed('Bill')) {
  stocks.sell('apples', 'Bill')
}
```

So if you want to test that `stocks.stockFailed` will be falsy, you could write:

```ts
import { expect, test } from 'vitest'
import { Stocks } from './stocks.js'

const stocks = new Stocks()

test('if Bill stock hasn\'t failed, sell apples to him', () => {
  stocks.syncStocks('Bill')
  expect(stocks.stockFailed('Bill')).toBeFalsy()
})
```

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

## toBeNull

- **Type:** `() => Awaitable<void>`

`toBeNull` simply asserts if something is `null`. Alias for `.toBe(null)`.

```ts
import { expect, test } from 'vitest'

function apples() {
  return null
}

test('we don\'t have apples', () => {
  expect(apples()).toBeNull()
})
```

## toBeNullable

- **Type:** `() => Awaitable<void>`

`toBeNullable` simply asserts if something is nullable (`null` or `undefined`).

```ts
import { expect, test } from 'vitest'

function apples() {
  return null
}

function bananas() {
  return undefined
}

test('we don\'t have apples', () => {
  expect(apples()).toBeNullable()
})

test('we don\'t have bananas', () => {
  expect(bananas()).toBeNullable()
})
```

## toBeNaN

- **Type:** `() => Awaitable<void>`

`toBeNaN` simply asserts if something is `NaN`. Alias for `.toBe(NaN)`.

```ts
import { expect, test } from 'vitest'

let i = 0

function getApplesCount() {
  i++
  return i > 1 ? Number.NaN : i
}

test('getApplesCount has some unusual side effects...', () => {
  expect(getApplesCount()).not.toBeNaN()
  expect(getApplesCount()).toBeNaN()
})
```

## toBeOneOf

- **Type:** `(sample: Array<any> | Set<any>) => any`

`toBeOneOf` asserts if a value matches any of the values in the provided array or set.

Providing a `Set` is an experimental feature and may change in a future release.

```ts
import { expect, test } from 'vitest'

test('fruit is one of the allowed values', () => {
  expect(fruit).toBeOneOf(['apple', 'banana', 'orange'])
})
```

The asymmetric matcher is particularly useful when testing optional properties that could be either `null` or `undefined`:

```ts
test('optional properties can be null or undefined', () => {
  const user = {
    firstName: 'John',
    middleName: undefined,
    lastName: 'Doe'
  }

  expect(user).toEqual({
    firstName: expect.any(String),
    middleName: expect.toBeOneOf([expect.any(String), undefined]),
    lastName: expect.any(String),
  })
})
```

You can use `expect.not` with this matcher to ensure a value does NOT match any of the provided options.

## toBeTypeOf

- **Type:** `(c: 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined') => Awaitable<void>`

`toBeTypeOf` asserts if an actual value is of type of received type.

```ts
import { expect, test } from 'vitest'

const actual = 'stock'

test('stock is type of string', () => {
  expect(actual).toBeTypeOf('string')
})
```

`toBeTypeOf` uses the native `typeof` operator under the hood with all its quirks, most notably that the value `null` has type `object`.

```ts
test('toBeTypeOf cannot check for null or array', () => {
  expect(null).toBeTypeOf('object')
  expect([]).toBeTypeOf('object')
})
```

## toBeInstanceOf

- **Type:** `(c: any) => Awaitable<void>`

`toBeInstanceOf` asserts if an actual value is instance of received class.

```ts
import { expect, test } from 'vitest'
import { Stocks } from './stocks.js'

const stocks = new Stocks()

test('stocks are instance of Stocks', () => {
  expect(stocks).toBeInstanceOf(Stocks)
})
```

## toBeGreaterThan

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThan` asserts if actual value is greater than received one. Equal values will fail the test.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have more then 10 apples', () => {
  expect(getApples()).toBeGreaterThan(10)
})
```

## toBeGreaterThanOrEqual

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThanOrEqual` asserts if actual value is greater than received one or equal to it.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have 11 apples or more', () => {
  expect(getApples()).toBeGreaterThanOrEqual(11)
})
```

## toBeLessThan

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThan` asserts if actual value is less than received one. Equal values will fail the test.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have less then 20 apples', () => {
  expect(getApples()).toBeLessThan(20)
})
```

## toBeLessThanOrEqual

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThanOrEqual` asserts if actual value is less than received one or equal to it.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have 11 apples or less', () => {
  expect(getApples()).toBeLessThanOrEqual(11)
})
```

## toEqual

- **Type:** `(received: any) => Awaitable<void>`

`toEqual` asserts if actual value is equal to received one or has the same structure, if it is an object (compares them recursively). You can see the difference between `toEqual` and [`toBe`](#tobe) in this example:

```ts
import { expect, test } from 'vitest'

const stockBill = {
  type: 'apples',
  count: 13,
}

const stockMary = {
  type: 'apples',
  count: 13,
}

test('stocks have the same properties', () => {
  expect(stockBill).toEqual(stockMary)
})

test('stocks are not the same', () => {
  expect(stockBill).not.toBe(stockMary)
})
```

For `Error` objects, non-enumerable properties such as `name`, `message`, `cause` and `AggregateError.errors` are also compared. For `Error.cause`, the comparison is done asymmetrically:

```ts
// success
expect(new Error('hi', { cause: 'x' })).toEqual(new Error('hi'))

// fail
expect(new Error('hi')).toEqual(new Error('hi', { cause: 'x' }))
```

To test if something was thrown, use [`toThrow`](#tothrow) assertion.

## toStrictEqual

- **Type:** `(received: any) => Awaitable<void>`

`toStrictEqual` asserts if the actual value is equal to the received one or has the same structure if it is an object (compares them recursively), and of the same type.

Differences from [`.toEqual`](#toequal):

- Keys with `undefined` properties are checked. e.g. `{a: undefined, b: 2}` does not match `{b: 2}` when using `.toStrictEqual`.
- Array sparseness is checked. e.g. `[, 1]` does not match `[undefined, 1]` when using `.toStrictEqual`.
- Object types are checked to be equal. e.g. A class instance with fields `a` and `b` will not equal a literal object with fields `a` and `b`.

```ts
import { expect, test } from 'vitest'

class Stock {
  constructor(type) {
    this.type = type
  }
}

test('structurally the same, but semantically different', () => {
  expect(new Stock('apples')).toEqual({ type: 'apples' })
  expect(new Stock('apples')).not.toStrictEqual({ type: 'apples' })
})
```

## toContain

- **Type:** `(received: string) => Awaitable<void>`

`toContain` asserts if the actual value is in an array. `toContain` can also check whether a string is a substring of another string. If you are running tests in a browser-like environment, this assertion can also check if class is contained in a `classList`, or an element is inside another one.

```ts
import { expect, test } from 'vitest'
import { getAllFruits } from './stocks.js'

test('the fruit list contains orange', () => {
  expect(getAllFruits()).toContain('orange')
})

test('pineapple contains apple', () => {
  expect('pineapple').toContain('apple')
})

test('the element contains a class and is contained', () => {
  const element = document.querySelector('#el')
  // element has a class
  expect(element.classList).toContain('flex')
  // element is inside another one
  expect(document.querySelector('#wrapper')).toContain(element)
})
```

## toContainEqual

- **Type:** `(received: any) => Awaitable<void>`

`toContainEqual` asserts if an item with a specific structure and values is contained in an array.
It works like [`toEqual`](#toequal) inside for each element.

```ts
import { expect, test } from 'vitest'
import { getFruitStock } from './stocks.js'

test('apple available', () => {
  expect(getFruitStock()).toContainEqual({ fruit: 'apple', count: 5 })
})
```

## toHaveLength

- **Type:** `(received: number) => Awaitable<void>`

`toHaveLength` asserts if an object has a `.length` property and it is set to a certain numeric value.

```ts
import { expect, test } from 'vitest'

test('toHaveLength', () => {
  expect('abc').toHaveLength(3)
  expect([1, 2, 3]).toHaveLength(3)

  expect('').not.toHaveLength(3) // doesn't have .length of 3
  expect({ length: 3 }).toHaveLength(3)
})
```

## toHaveProperty

- **Type:** `(key: any, received?: any) => Awaitable<void>`

`toHaveProperty` asserts if a property at provided reference `key` exists for an object.

You can provide an optional value argument also known as deep equality, like the `toEqual` matcher to compare the received property value.

```ts
import { expect, test } from 'vitest'

const invoice = {
  'isActive': true,
  'P.O': '12345',
  'customer': {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
  'total_amount': 5000,
  'items': [
    {
      type: 'apples',
      quantity: 10,
    },
    {
      type: 'oranges',
      quantity: 5,
    },
  ],
}

test('John Doe Invoice', () => {
  expect(invoice).toHaveProperty('isActive') // assert that the key exists
  expect(invoice).toHaveProperty('total_amount', 5000) // assert that the key exists and the value is equal

  expect(invoice).not.toHaveProperty('account') // assert that this key does not exist

  // Deep referencing using dot notation
  expect(invoice).toHaveProperty('customer.first_name')
  expect(invoice).toHaveProperty('customer.last_name', 'Doe')
  expect(invoice).not.toHaveProperty('customer.location', 'India')

  // Deep referencing using an array containing the key
  expect(invoice).toHaveProperty('items[0].type', 'apples')
  expect(invoice).toHaveProperty('items.0.type', 'apples') // dot notation also works

  // Deep referencing using an array containing the keyPath
  expect(invoice).toHaveProperty(['items', 0, 'type'], 'apples')
  expect(invoice).toHaveProperty(['items', '0', 'type'], 'apples') // string notation also works

  // Wrap your key in an array to avoid the key from being parsed as a deep reference
  expect(invoice).toHaveProperty(['P.O'], '12345')

  // Deep equality of object property
  expect(invoice).toHaveProperty('items[0]', { type: 'apples', quantity: 10 })
})
```

## toMatch

- **Type:** `(received: string | regexp) => Awaitable<void>`

`toMatch` asserts if a string matches a regular expression or a string.

```ts
import { expect, test } from 'vitest'

test('top fruits', () => {
  expect('top fruits include apple, orange and grape').toMatch(/apple/)
  expect('applefruits').toMatch('fruit') // toMatch also accepts a string
})
```

## toMatchObject

- **Type:** `(received: object | array) => Awaitable<void>`

`toMatchObject` asserts if an object matches a subset of the properties of an object.

You can also pass an array of objects. This is useful if you want to check that two arrays match in their number and order of elements, as opposed to `arrayContaining`, which allows for extra elements in the received array.

```ts
import { expect, test } from 'vitest'

const johnInvoice = {
  isActive: true,
  customer: {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
  total_amount: 5000,
  items: [
    {
      type: 'apples',
      quantity: 10,
    },
    {
      type: 'oranges',
      quantity: 5,
    },
  ],
}

const johnDetails = {
  customer: {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
}

test('invoice has john personal details', () => {
  expect(johnInvoice).toMatchObject(johnDetails)
})

test('the number of elements must match exactly', () => {
  // Assert that an array of object matches
  expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([
    { foo: 'bar' },
    { baz: 1 },
  ])
})
```
