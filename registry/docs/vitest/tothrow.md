## toThrow

- **Type:** `(expected?: any) => Awaitable<void>`

- **Alias:** `toThrowError`&#x20;

`toThrow` asserts if a function throws an error when it is called.

You can provide an optional argument to test that a specific error is thrown:

- `RegExp`: error message matches the pattern
- `string`: error message includes the substring
- any other value: compare with thrown value using deep equality (similar to `toEqual`)

You must wrap the code in a function, otherwise the error will not be caught, and test will fail.

This does not apply for async calls as [rejects](#rejects) correctly unwraps the promise:

```ts
test('expect rejects toThrow', async ({ expect }) => {
  const promise = Promise.reject(new Error('Test'))
  await expect(promise).rejects.toThrow()
})
```

For example, if we want to test that `getFruitStock('pineapples')` throws, we could write:

```ts
import { expect, test } from 'vitest'

function getFruitStock(type: string) {
  if (type === 'pineapples') {
    throw new Error('Pineapples are not in stock')
  }

  // Do some other stuff
}

test('throws on pineapples', () => {
  // Test that the error message says "stock" somewhere: these are equivalent
  expect(() => getFruitStock('pineapples')).toThrow(/stock/)
  expect(() => getFruitStock('pineapples')).toThrow('stock')

  // Test the exact error message
  expect(() => getFruitStock('pineapples')).toThrow(
    /^Pineapples are not in stock$/,
  )

  expect(() => getFruitStock('pineapples')).toThrow(
    new Error('Pineapples are not in stock'),
  )
  expect(() => getFruitStock('pineapples')).toThrow(expect.objectContaining({
    message: 'Pineapples are not in stock',
  }))
})
```

To test async functions, use in combination with [rejects](#rejects).

```js
function getAsyncFruitStock() {
  return Promise.reject(new Error('empty'))
}

test('throws on pineapples', async () => {
  await expect(() => getAsyncFruitStock()).rejects.toThrow('empty')
})
```

You can also test non-Error values that are thrown:

```ts
test('throws non-Error values', () => {
  expect(() => { throw 42 }).toThrow(42)
  expect(() => { throw { message: 'error' } }).toThrow({ message: 'error' })
})
```

## toMatchSnapshot

- **Type:** `<T>(shape?: Partial<T> | string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

You can provide an optional `hint` string argument that is appended to the test name. Although Vitest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate multiple snapshots in a single it or test block. Vitest sorts snapshots by name in the corresponding `.snap` file.

When a snapshot mismatches and causes the test to fail, if the mismatch is expected, you can press `u` key to update the snapshot once. Or you can pass `-u` or `--update` CLI options to make Vitest always update the tests.

```ts
import { expect, test } from 'vitest'

test('matches snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchSnapshot()
})
```

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

```ts
import { expect, test } from 'vitest'

test('matches snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
```

## toMatchInlineSnapshot

- **Type:** `<T>(shape?: Partial<T> | string, snapshot?: string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

Vitest adds and updates the inlineSnapshot string argument to the matcher in the test file (instead of an external `.snap` file).

```ts
import { expect, test } from 'vitest'

test('matches inline snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  // Vitest will update following content when updating the snapshot
  expect(data).toMatchInlineSnapshot(`
    {
      "foo": Set {
        "bar",
        "snapshot",
      },
    }
  `)
})
```

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

```ts
import { expect, test } from 'vitest'

test('matches snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchInlineSnapshot(
    { foo: expect.any(Set) },
    `
    {
      "foo": Any<Set>,
    }
  `
  )
})
```

## toMatchFileSnapshot

- **Type:** `<T>(filepath: string, hint?: string) => Promise<void>`

Compare or update the snapshot with the content of a file explicitly specified (instead of the `.snap` file).

```ts
import { expect, it } from 'vitest'

it('render basic', async () => {
  const result = renderHTML(h('div', { class: 'foo' }))
  await expect(result).toMatchFileSnapshot('./test/basic.output.html')
})
```

Note that since file system operation is async, you need to use `await` with `toMatchFileSnapshot()`. If `await` is not used, Vitest treats it like `expect.soft`, meaning the code after the statement will continue to run even if the snapshot mismatches. After the test finishes, Vitest will check the snapshot and fail if there is a mismatch.

## toThrowErrorMatchingSnapshot

- **Type:** `(hint?: string) => void`

The same as [`toMatchSnapshot`](#tomatchsnapshot), but expects the same value as [`toThrow`](#tothrow).

## toThrowErrorMatchingInlineSnapshot

- **Type:** `(snapshot?: string, hint?: string) => void`

The same as [`toMatchInlineSnapshot`](#tomatchinlinesnapshot), but expects the same value as [`toThrow`](#tothrow).

## toHaveBeenCalled

- **Type:** `() => Awaitable<void>`

This assertion is useful for testing that a function has been called. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  expect(buySpy).not.toHaveBeenCalled()

  market.buy('apples', 10)

  expect(buySpy).toHaveBeenCalled()
})
```

## toHaveBeenCalledTimes

- **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function was called a certain amount of times. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function called two times', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).toHaveBeenCalledTimes(2)
})
```

## toHaveBeenCalledWith

- **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called at least once with certain parameters. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).toHaveBeenCalledWith('apples', 10)
  expect(buySpy).toHaveBeenCalledWith('apples', 20)
})
```

## toHaveBeenCalledBefore

- **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called before another `Mock`.

```ts
test('calls mock1 before mock2', () => {
  const mock1 = vi.fn()
  const mock2 = vi.fn()

  mock1()
  mock2()
  mock1()

  expect(mock1).toHaveBeenCalledBefore(mock2)
})
```

## toHaveBeenCalledAfter

- **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called after another `Mock`.

```ts
test('calls mock1 after mock2', () => {
  const mock1 = vi.fn()
  const mock2 = vi.fn()

  mock2()
  mock1()
  mock2()

  expect(mock1).toHaveBeenCalledAfter(mock2)
})
```

## toHaveBeenCalledExactlyOnceWit

- **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called exactly once and with certain parameters. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)

  expect(buySpy).toHaveBeenCalledExactlyOnceWith('apples', 10)
})
```

## toHaveBeenLastCalledWith

- **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at its last invocation. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).not.toHaveBeenLastCalledWith('apples', 10)
  expect(buySpy).toHaveBeenLastCalledWith('apples', 20)
})
```

## toHaveBeenNthCalledWith

- **Type**: `(time: number, ...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at the certain time. The count starts at 1. So, to check the second entry, you would write `.toHaveBeenNthCalledWith(2, ...)`.

Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('first call of spy function called with right params', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).toHaveBeenNthCalledWith(1, 'apples', 10)
})
```

## toHaveReturned

- **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully returned a value at least once (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

function getApplesPrice(amount: number) {
  const PRICE = 10
  return amount * PRICE
}

test('spy function returned a value', () => {
  const getPriceSpy = vi.fn(getApplesPrice)

  const price = getPriceSpy(10)

  expect(price).toBe(100)
  expect(getPriceSpy).toHaveReturned()
})
```

## toHaveReturnedTimes

- **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully returned a value an exact amount of times (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns a value two times', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')
  sell('bananas')

  expect(sell).toHaveReturnedTimes(2)
})
```

## toHaveReturnedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters at least once. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns a product', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')

  expect(sell).toHaveReturnedWith({ product: 'apples' })
})
```

## toHaveLastReturnedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns bananas on a last call', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')
  sell('bananas')

  expect(sell).toHaveLastReturnedWith({ product: 'bananas' })
})
```

## toHaveNthReturnedWith

- **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters on a certain call. Requires a spy function to be passed to `expect`.

The count starts at 1. So, to check the second entry, you would write `.toHaveNthReturnedWith(2, ...)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns bananas on second call', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')
  sell('bananas')

  expect(sell).toHaveNthReturnedWith(2, { product: 'bananas' })
})
```

## toHaveResolved

- **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully resolved a value at least once (i.e., did not reject). Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'
import db from './db/apples.js'

async function getApplesPrice(amount: number) {
  return amount * await db.get('price')
}

test('spy function resolved a value', async () => {
  const getPriceSpy = vi.fn(getApplesPrice)

  const price = await getPriceSpy(10)

  expect(price).toBe(100)
  expect(getPriceSpy).toHaveResolved()
})
```

## toHaveResolvedTimes

- **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully resolved a value an exact amount of times (i.e., did not reject). Requires a spy function to be passed to `expect`.

This will only count resolved promises. If the function returned a promise, but it was not resolved yet, it will not be counted.

```ts
import { expect, test, vi } from 'vitest'

test('spy function resolved a value two times', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')
  await sell('bananas')

  expect(sell).toHaveResolvedTimes(2)
})
```

## toHaveResolvedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value at least once. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'

test('spy function resolved a product', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')

  expect(sell).toHaveResolvedWith({ product: 'apples' })
})
```

## toHaveLastResolvedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'

test('spy function resolves bananas on a last call', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')
  await sell('bananas')

  expect(sell).toHaveLastResolvedWith({ product: 'bananas' })
})
```

## toHaveNthResolvedWith

- **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value on a specific invocation. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

The count starts at 1. So, to check the second entry, you would write `.toHaveNthResolvedWith(2, ...)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns bananas on second call', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')
  await sell('bananas')

  expect(sell).toHaveNthResolvedWith(2, { product: 'bananas' })
})
```

## called 4.1.0

- **Type:** `Assertion` (property, not a method)

Chai-style assertion that checks if a spy was called at least once. This is equivalent to `toHaveBeenCalled()`.

This is a property assertion following sinon-chai conventions. Access it without parentheses: `expect(spy).to.have.been.called`

```ts
import { expect, test, vi } from 'vitest'

test('spy was called', () => {
  const spy = vi.fn()

  spy()

  expect(spy).to.have.been.called
  expect(spy).to.not.have.been.called // negation
})
```

## callCount 4.1.0

- **Type:** `(count: number) => void`

Chai-style assertion that checks if a spy was called a specific number of times. This is equivalent to `toHaveBeenCalledTimes(count)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy call count', () => {
  const spy = vi.fn()

  spy()
  spy()
  spy()

  expect(spy).to.have.callCount(3)
})
```

## calledWith 4.1.0

- **Type:** `(...args: any[]) => void`

Chai-style assertion that checks if a spy was called with specific arguments at least once. This is equivalent to `toHaveBeenCalledWith(...args)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy called with arguments', () => {
  const spy = vi.fn()

  spy('apple', 10)
  spy('banana', 20)

  expect(spy).to.have.been.calledWith('apple', 10)
  expect(spy).to.have.been.calledWith('banana', 20)
})
```

## calledOnce 4.1.0

- **Type:** `Assertion` (property, not a method)

Chai-style assertion that checks if a spy was called exactly once. This is equivalent to `toHaveBeenCalledOnce()`.

This is a property assertion following sinon-chai conventions. Access it without parentheses: `expect(spy).to.have.been.calledOnce`

```ts
import { expect, test, vi } from 'vitest'

test('spy called once', () => {
  const spy = vi.fn()

  spy()

  expect(spy).to.have.been.calledOnce
})
```

## calledOnceWith 4.1.0

- **Type:** `(...args: any[]) => void`

Chai-style assertion that checks if a spy was called exactly once with specific arguments. This is equivalent to `toHaveBeenCalledExactlyOnceWith(...args)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy called once with arguments', () => {
  const spy = vi.fn()

  spy('apple', 10)

  expect(spy).to.have.been.calledOnceWith('apple', 10)
})
```

## calledTwice 4.1.0

- **Type:** `Assertion` (property, not a method)

Chai-style assertion that checks if a spy was called exactly twice. This is equivalent to `toHaveBeenCalledTimes(2)`.

This is a property assertion following sinon-chai conventions. Access it without parentheses: `expect(spy).to.have.been.calledTwice`

```ts
import { expect, test, vi } from 'vitest'

test('spy called twice', () => {
  const spy = vi.fn()

  spy()
  spy()

  expect(spy).to.have.been.calledTwice
})
```

## calledThrice 4.1.0

- **Type:** `Assertion` (property, not a method)

Chai-style assertion that checks if a spy was called exactly three times. This is equivalent to `toHaveBeenCalledTimes(3)`.

This is a property assertion following sinon-chai conventions. Access it without parentheses: `expect(spy).to.have.been.calledThrice`

```ts
import { expect, test, vi } from 'vitest'

test('spy called thrice', () => {
  const spy = vi.fn()

  spy()
  spy()
  spy()

  expect(spy).to.have.been.calledThrice
})
```

## lastCalledWith

- **Type:** `(...args: any[]) => void`

Chai-style assertion that checks if the last call to a spy was made with specific arguments. This is equivalent to `toHaveBeenLastCalledWith(...args)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy last called with', () => {
  const spy = vi.fn()

  spy('apple', 10)
  spy('banana', 20)

  expect(spy).to.have.been.lastCalledWith('banana', 20)
})
```

## nthCalledWith

- **Type:** `(n: number, ...args: any[]) => void`

Chai-style assertion that checks if the nth call to a spy was made with specific arguments. This is equivalent to `toHaveBeenNthCalledWith(n, ...args)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy nth called with', () => {
  const spy = vi.fn()

  spy('apple', 10)
  spy('banana', 20)
  spy('cherry', 30)

  expect(spy).to.have.been.nthCalledWith(2, 'banana', 20)
})
```

## returned 4.1.0

- **Type:** `Assertion` (property, not a method)

Chai-style assertion that checks if a spy returned successfully at least once. This is equivalent to `toHaveReturned()`.

This is a property assertion following sinon-chai conventions. Access it without parentheses: `expect(spy).to.have.returned`

```ts
import { expect, test, vi } from 'vitest'

test('spy returned', () => {
  const spy = vi.fn(() => 'result')

  spy()

  expect(spy).to.have.returned
})
```

## returnedWith 4.1.0

- **Type:** `(value: any) => void`

Chai-style assertion that checks if a spy returned a specific value at least once. This is equivalent to `toHaveReturnedWith(value)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy returned with value', () => {
  const spy = vi.fn()
    .mockReturnValueOnce('apple')
    .mockReturnValueOnce('banana')

  spy()
  spy()

  expect(spy).to.have.returnedWith('apple')
  expect(spy).to.have.returnedWith('banana')
})
```

## returnedTimes 4.1.0

- **Type:** `(count: number) => void`

Chai-style assertion that checks if a spy returned successfully a specific number of times. This is equivalent to `toHaveReturnedTimes(count)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy returned times', () => {
  const spy = vi.fn(() => 'result')

  spy()
  spy()
  spy()

  expect(spy).to.have.returnedTimes(3)
})
```

## lastReturnedWith

- **Type:** `(value: any) => void`

Chai-style assertion that checks if the last return value of a spy matches the expected value. This is equivalent to `toHaveLastReturnedWith(value)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy last returned with', () => {
  const spy = vi.fn()
    .mockReturnValueOnce('apple')
    .mockReturnValueOnce('banana')

  spy()
  spy()

  expect(spy).to.have.lastReturnedWith('banana')
})
```

## nthReturnedWith

- **Type:** `(n: number, value: any) => void`

Chai-style assertion that checks if the nth return value of a spy matches the expected value. This is equivalent to `toHaveNthReturnedWith(n, value)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy nth returned with', () => {
  const spy = vi.fn()
    .mockReturnValueOnce('apple')
    .mockReturnValueOnce('banana')
    .mockReturnValueOnce('cherry')

  spy()
  spy()
  spy()

  expect(spy).to.have.nthReturnedWith(2, 'banana')
})
```

## calledBefore 4.1.0

- **Type:** `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => void`

Chai-style assertion that checks if a spy was called before another spy. This is equivalent to `toHaveBeenCalledBefore(mock, failIfNoFirstInvocation)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy called before another', () => {
  const spy1 = vi.fn()
  const spy2 = vi.fn()

  spy1()
  spy2()

  expect(spy1).to.have.been.calledBefore(spy2)
})
```

## calledAfter 4.1.0

- **Type:** `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => void`

Chai-style assertion that checks if a spy was called after another spy. This is equivalent to `toHaveBeenCalledAfter(mock, failIfNoFirstInvocation)`.

```ts
import { expect, test, vi } from 'vitest'

test('spy called after another', () => {
  const spy1 = vi.fn()
  const spy2 = vi.fn()

  spy1()
  spy2()

  expect(spy2).to.have.been.calledAfter(spy1)
})
```

For a complete guide on migrating from Mocha+Chai+Sinon to Vitest, see the [Migration Guide](/guide/migration#mocha-chai-sinon).

## toSatisfy

- **Type:** `(predicate: (value: any) => boolean) => Awaitable<void>`

This assertion checks if a value satisfies a certain predicate.

```ts
import { describe, expect, it } from 'vitest'

const isOdd = (value: number) => value % 2 !== 0

describe('toSatisfy()', () => {
  it('pass with 0', () => {
    expect(1).toSatisfy(isOdd)
  })

  it('pass with negation', () => {
    expect(2).not.toSatisfy(isOdd)
  })
})
```

## resolves

- **Type:** `Promisify<Assertions>`

`resolves` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap value from the pending promise and assert its value with usual assertions. If the promise rejects, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function, that makes an API call and returns some data, you may use this code to assert its return value:

```ts
import { expect, test } from 'vitest'

async function buyApples() {
  return fetch('/buy/apples').then(r => r.json())
}

test('buyApples returns new stock id', async () => {
  // toEqual returns a promise now, so you HAVE to await it
  await expect(buyApples()).resolves.toEqual({ id: 1 }) // jest API
  await expect(buyApples()).resolves.to.equal({ id: 1 }) // chai API
})
```

If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions are actually called, you may use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.

## rejects

- **Type:** `Promisify<Assertions>`

`rejects` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap reason why the promise was rejected, and assert its value with usual assertions. If the promise successfully resolves, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function that fails when you call it, you may use this code to assert the reason:

```ts
import { expect, test } from 'vitest'

async function buyApples(id) {
  if (!id) {
    throw new Error('no id')
  }
}

test('buyApples throws an error when no id provided', async () => {
  // toThrow returns a promise now, so you HAVE to await it
  await expect(buyApples()).rejects.toThrow('no id')
})
```

If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions were actually called, you can use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.

## expect.assertions

- **Type:** `(count: number) => void`

After the test has passed or failed verify that a certain number of assertions was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if we have a function that asynchronously calls two matchers, we can assert that they were actually called.

```ts
import { expect, test } from 'vitest'

async function doAsync(...cbs) {
  await Promise.all(
    cbs.map((cb, index) => cb({ index })),
  )
}

test('all assertions are called', async () => {
  expect.assertions(2)
  function callback1(data) {
    expect(data).toBeTruthy()
  }
  function callback2(data) {
    expect(data).toBeTruthy()
  }

  await doAsync(callback1, callback2)
})
```

When using `assertions` with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.

## expect.hasAssertions

- **Type:** `() => void`

After the test has passed or failed verify that at least one assertion was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if you have a code that calls a callback, we can make an assertion inside a callback, but the test will always pass if we don't check if an assertion was called.

```ts
import { expect, test } from 'vitest'
import { db } from './db.js'

const cbs = []

function onSelect(cb) {
  cbs.push(cb)
}

// after selecting from db, we call all callbacks
function select(id) {
  return db.select({ id }).then((data) => {
    return Promise.all(
      cbs.map(cb => cb(data)),
    )
  })
}

test('callback was called', async () => {
  expect.hasAssertions()
  onSelect((data) => {
    // should be called on select
    expect(data).toBeTruthy()
  })
  // if not awaited, test will fail
  // if you don't have expect.hasAssertions(), test will pass
  await select(3)
})
```

## expect.unreachable

- **Type:** `(message?: string) => never`

This method is used to assert that a line should never be reached.

For example, if we want to test that `build()` throws due to receiving directories having no `src` folder, and also handle each error separately, we could do this:

```ts
import { expect, test } from 'vitest'

async function build(dir) {
  if (dir.includes('no-src')) {
    throw new Error(`${dir}/src does not exist`)
  }
}

const errorDirs = [
  'no-src-folder',
  // ...
]

test.each(errorDirs)('build fails with "%s"', async (dir) => {
  try {
    await build(dir)
    expect.unreachable('Should not pass build')
  }
  catch (err: any) {
    expect(err).toBeInstanceOf(Error)
    expect(err.stack).toContain('build')

    switch (dir) {
      case 'no-src-folder':
        expect(err.message).toBe(`${dir}/src does not exist`)
        break
      default:
        // to exhaust all error tests
        expect.unreachable('All error test must be handled')
        break
    }
  }
})
```

## expect.anything

- **Type:** `() => any`

This asymmetric matcher matches anything except `null` or `undefined`. Useful if you just want to be sure that a property exists with any value that's not either `null` or `undefined`.

```ts
import { expect, test } from 'vitest'

test('object has "apples" key', () => {
  expect({ apples: 22 }).toEqual({ apples: expect.anything() })
})
```

## expect.any

- **Type:** `(constructor: unknown) => any`

This asymmetric matcher, when used with an equality check, will return `true` only if the value is an instance of a specified constructor. Useful, if you have a value that is generated each time, and you only want to know that it exists with a proper type.

```ts
import { expect, test } from 'vitest'
import { generateId } from './generators.js'

test('"id" is a number', () => {
  expect({ id: generateId() }).toEqual({ id: expect.any(Number) })
})
```

## expect.closeTo

- **Type:** `(expected: any, precision?: number) => any`

`expect.closeTo` is useful when comparing floating point numbers in object properties or array item. If you need to compare a number, please use `.toBeCloseTo` instead.

The optional `precision` argument limits the number of digits to check **after** the decimal point. For the default value `2`, the test criterion is `Math.abs(expected - received) < 0.005 (that is, 10 ** -2 / 2)`.

For example, this test passes with a precision of 5 digits:

```js
test('compare float in object properties', () => {
  expect({
    title: '0.1 + 0.2',
    sum: 0.1 + 0.2,
  }).toEqual({
    title: '0.1 + 0.2',
    sum: expect.closeTo(0.3, 5),
  })
})
```

## expect.arrayContaining

- **Type:** `<T>(expected: T[]) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is an array and contains specified items.

```ts
import { expect, test } from 'vitest'

test('basket includes fuji', () => {
  const basket = {
    varieties: [
      'Empire',
      'Fuji',
      'Gala',
    ],
    count: 3
  }
  expect(basket).toEqual({
    count: 3,
    varieties: expect.arrayContaining(['Fuji'])
  })
})
```

You can use `expect.not` with this matcher to negate the expected value.

## expect.objectContaining

- **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value has a similar shape.

```ts
import { expect, test } from 'vitest'

test('basket has empire apples', () => {
  const basket = {
    varieties: [
      {
        name: 'Empire',
        count: 1,
      }
    ],
  }
  expect(basket).toEqual({
    varieties: [
      expect.objectContaining({ name: 'Empire' }),
    ]
  })
})
```

You can use `expect.not` with this matcher to negate the expected value.

## expect.stringContaining

- **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring.

```ts
import { expect, test } from 'vitest'

test('variety has "Emp" in its name', () => {
  const variety = {
    name: 'Empire',
    count: 1,
  }
  expect(variety).toEqual({
    name: expect.stringContaining('Emp'),
    count: 1,
  })
})
```

You can use `expect.not` with this matcher to negate the expected value.

## expect.stringMatching

- **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring or if the string matches a regular expression.

```ts
import { expect, test } from 'vitest'

test('variety ends with "re"', () => {
  const variety = {
    name: 'Empire',
    count: 1,
  }
  expect(variety).toEqual({
    name: expect.stringMatching(/re$/),
    count: 1,
  })
})
```

You can use `expect.not` with this matcher to negate the expected value.

## expect.schemaMatching

- **Type:** `(expected: StandardSchemaV1) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value matches the provided schema. The schema must implement the [Standard Schema v1](https://standardschema.dev/) specification.

```ts
import { expect, test } from 'vitest'
import { z } from 'zod'
import * as v from 'valibot'
import { type } from 'arktype'

test('email validation', () => {
  const user = { email: 'john@example.com' }

  // using Zod
  expect(user).toEqual({
    email: expect.schemaMatching(z.string().email()),
  })

  // using Valibot
  expect(user).toEqual({
    email: expect.schemaMatching(v.pipe(v.string(), v.email()))
  })

  // using ArkType
  expect(user).toEqual({
    email: expect.schemaMatching(type('string.email')),
  })
})
```

You can use `expect.not` with this matcher to negate the expected value.

## expect.addSnapshotSerializer

- **Type:** `(plugin: PrettyFormatPlugin) => void`

This method adds custom serializers that are called when creating a snapshot. This is an advanced feature - if you want to know more, please read a [guide on custom serializers](/guide/snapshot#custom-serializer).

If you are adding custom serializers, you should call this method inside [`setupFiles`](/config/setupfiles). This will affect every snapshot.

If you previously used Vue CLI with Jest, you might want to install [jest-serializer-vue](https://npmx.dev/package/jest-serializer-vue). Otherwise, your snapshots will be wrapped in a string, which cases `"` to be escaped.

## expect.extend

- **Type:** `(matchers: MatchersObject) => void`

You can extend default matchers with your own. This function is used to extend the matchers object with custom matchers.

When you define matchers that way, you also create asymmetric matchers that can be used like `expect.stringContaining`.

```ts
import { expect, test } from 'vitest'

test('custom matchers', () => {
  expect.extend({
    toBeFoo: (received, expected) => {
      if (received !== 'foo') {
        return {
          message: () => `expected ${received} to be foo`,
          pass: false,
        }
      }
    },
  })

  expect('foo').toBeFoo()
  expect({ foo: 'foo' }).toEqual({ foo: expect.toBeFoo() })
})
```

If you want your matchers to appear in every test, you should call this method inside [`setupFiles`](/config/setupfiles).

This function is compatible with Jest's `expect.extend`, so any library that uses it to create custom matchers will work with Vitest.

If you are using TypeScript, since Vitest 0.31.0 you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

```ts
interface CustomMatchers<R = unknown> {
  toBeFoo: () => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
```

Don't forget to include the ambient declaration file in your `tsconfig.json`.

If you want to know more, checkout [guide on extending matchers](/guide/extending-matchers).

## expect.addEqualityTesters

- **Type:** `(tester: Array<Tester>) => void`

You can use this method to define custom testers, which are methods used by matchers, to test if two objects are equal. It is compatible with Jest's `expect.addEqualityTesters`.

```ts
import { expect, test } from 'vitest'

class AnagramComparator {
  public word: string

  constructor(word: string) {
    this.word = word
  }

  equals(other: AnagramComparator): boolean {
    const cleanStr1 = this.word.replace(/ /g, '').toLowerCase()
    const cleanStr2 = other.word.replace(/ /g, '').toLowerCase()

    const sortedStr1 = cleanStr1.split('').sort().join('')
    const sortedStr2 = cleanStr2.split('').sort().join('')

    return sortedStr1 === sortedStr2
  }
}

function isAnagramComparator(a: unknown): a is AnagramComparator {
  return a instanceof AnagramComparator
}

function areAnagramsEqual(a: unknown, b: unknown): boolean | undefined {
  const isAAnagramComparator = isAnagramComparator(a)
  const isBAnagramComparator = isAnagramComparator(b)

  if (isAAnagramComparator && isBAnagramComparator) {
    return a.equals(b)
  }
  else if (isAAnagramComparator === isBAnagramComparator) {
    return undefined
  }
  else {
    return false
  }
}

expect.addEqualityTesters([areAnagramsEqual])

test('custom equality tester', () => {
  expect(new AnagramComparator('listen')).toEqual(new AnagramComparator('silent'))
})
```

***

# expect

- **Type:** `ExpectOptions`

## expect.requireAssertions

- **Type:** `boolean`
- **Default:** `false`

The same as calling [`expect.hasAssertions()`](/api/expect#expect-hasassertions) at the start of every test. This makes sure that no test will pass accidentally.

This only works with Vitest's `expect`. If you use `assert` or `.should` assertions, they will not count, and your test will fail due to the lack of expect assertions.

You can change the value of this by calling `vi.setConfig({ expect: { requireAssertions: false } })`. The config will be applied to every subsequent `expect` call until the `vi.resetConfig` is called manually.

When you run tests with `sequence.concurrent` and `expect.requireAssertions` set to `true`, you should use [local expect](/guide/test-context.html#expect) instead of the global one. Otherwise, this may cause false negatives in [some situations (#8469)](https://github.com/vitest-dev/vitest/issues/8469).

## expect.poll

Global configuration options for [`expect.poll`](/api/expect#poll). These are the same options you can pass down to `expect.poll(condition, options)`.

### expect.poll.interval

- **Type:** `number`
- **Default:** `50`

Polling interval in milliseconds

### expect.poll.timeout

- **Type:** `number`
- **Default:** `1000`

Polling timeout in milliseconds

***
