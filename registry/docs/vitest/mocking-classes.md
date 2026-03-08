# Mocking Classes

You can mock an entire class with a single [`vi.fn`](/api/vi#fn) call.

```ts
class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  static getType(): string {
    return 'animal'
  }

  greet = (): string => {
    return `Hi! My name is ${this.name}!`
  }

  speak(): string {
    return 'bark!'
  }

  isHungry() {}
  feed() {}
}
```

We can re-create this class with `vi.fn` (or `vi.spyOn().mockImplementation()`):

```ts
const Dog = vi.fn(class {
  static getType = vi.fn(() => 'mocked animal')

  constructor(name) {
    this.name = name
  }

  greet = vi.fn(() => `Hi! My name is ${this.name}!`)
  speak = vi.fn(() => 'loud bark!')
  feed = vi.fn()
})
```

If a non-primitive is returned from the constructor function, that value will become the result of the new expression. In this case the `[[Prototype]]` may not be correctly bound:

```ts
const CorrectDogClass = vi.fn(function (name) {
  this.name = name
})

const IncorrectDogClass = vi.fn(name => ({
  name
}))

const Marti = new CorrectDogClass('Marti')
const Newt = new IncorrectDogClass('Newt')

Marti instanceof CorrectDogClass // ✅ true
Newt instanceof IncorrectDogClass // ❌ false!
```

If you are mocking classes, prefer the class syntax over the function.

Generally speaking, you would re-create a class like this inside the module factory if the class is re-exported from another module:

```ts
import { Dog } from './dog.js'

vi.mock(import('./dog.js'), () => {
  const Dog = vi.fn(class {
    feed = vi.fn()
    // ... other mocks
  })
  return { Dog }
})
```

This method can also be used to pass an instance of a class to a function that accepts the same interface:

```ts [src/feed.ts]
function feed(dog: Dog) {
  // ...
}
```

```ts [tests/dog.test.ts]
import { expect, test, vi } from 'vitest'
import { feed } from '../src/feed.js'

const Dog = vi.fn(class {
  feed = vi.fn()
})

test('can feed dogs', () => {
  const dogMax = new Dog('Max')

  feed(dogMax)

  expect(dogMax.feed).toHaveBeenCalled()
  expect(dogMax.isHungry()).toBe(false)
})
```

Now, when we create a new instance of the `Dog` class its `speak` method (alongside `feed` and `greet`) is already mocked:

```ts
const Cooper = new Dog('Cooper')
Cooper.speak() // loud bark!
Cooper.greet() // Hi! My name is Cooper!

// you can use built-in assertions to check the validity of the call
expect(Cooper.speak).toHaveBeenCalled()
expect(Cooper.greet).toHaveBeenCalled()

const Max = new Dog('Max')

// methods are not shared between instances if you assigned them directly
expect(Max.speak).not.toHaveBeenCalled()
expect(Max.greet).not.toHaveBeenCalled()
```

We can reassign the return value for a specific instance:

```ts
const dog = new Dog('Cooper')

// "vi.mocked" is a type helper, since
// TypeScript doesn't know that Dog is a mocked class,
// it wraps any function in a Mock<T> type
// without validating if the function is a mock
vi.mocked(dog.speak).mockReturnValue('woof woof')

dog.speak() // woof woof
```

To mock the property, we can use the `vi.spyOn(dog, 'name', 'get')` method. This makes it possible to use spy assertions on the mocked property:

```ts
const dog = new Dog('Cooper')

const nameSpy = vi.spyOn(dog, 'name', 'get').mockReturnValue('Max')

expect(dog.name).toBe('Max')
expect(nameSpy).toHaveBeenCalledTimes(1)
```

You can also spy on getters and setters using the same method.

Using classes with `vi.fn()` was introduced in Vitest 4. Previously, you had to use `function` and `prototype` inheritence directly. See [v3 guide](https://v3.vitest.dev/guide/mocking.html#classes).

***

# Mocking Dates

Sometimes you need to be in control of the date to ensure consistency when testing. Vitest uses [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers) package for manipulating timers, as well as system date. You can find more about the specific API in detail [here](/api/vi#vi-setsystemtime).

## Example

```js
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const businessHours = [9, 17]

function purchase() {
  const currentHour = new Date().getHours()
  const [open, close] = businessHours

  if (currentHour > open && currentHour < close) {
    return { message: 'Success' }
  }

  return { message: 'Error' }
}

describe('purchasing flow', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it('allows purchases within business hours', () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13)
    vi.setSystemTime(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Success' })
  })

  it('disallows purchases outside of business hours', () => {
    // set hour outside business hours
    const date = new Date(2000, 1, 1, 19)
    vi.setSystemTime(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Error' })
  })
})
```

***

# Mocking Functions

Mocking functions can be split up into two different categories: spying and mocking.

If you need to observe the behaviour of a method on an object, you can use [`vi.spyOn()`](/api/vi#vi-spyon) to create a spy that tracks calls to that method.

If you need to pass down a custom function implementation as an argument or create a new mocked entity, you can use [`vi.fn()`](/api/vi#vi-fn) to create a mock function.

Both `vi.spyOn` and `vi.fn` share the same methods.

## Example

```js
import { afterEach, describe, expect, it, vi } from 'vitest'

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  addItem(item) {
    messages.items.push(item)
    messages.callbacks.forEach(callback => callback(item))
  },
  onItem(callback) {
    messages.callbacks.push(callback)
  },
  getLatest, // can also be a `getter or setter if supported`
}

function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}

it('should get the latest message with a spy', () => {
  const spy = vi.spyOn(messages, 'getLatest')
  expect(spy.getMockName()).toEqual('getLatest')

  expect(messages.getLatest()).toEqual(
    messages.items[messages.items.length - 1],
  )

  expect(spy).toHaveBeenCalledTimes(1)

  spy.mockImplementationOnce(() => 'access-restricted')
  expect(messages.getLatest()).toEqual('access-restricted')

  expect(spy).toHaveBeenCalledTimes(2)
})

it('passing down the mock', () => {
  const callback = vi.fn()
  messages.onItem(callback)

  messages.addItem({ message: 'Another test message', from: 'Testman' })
  expect(callback).toHaveBeenCalledWith({
    message: 'Another test message',
    from: 'Testman',
  })
})
```

***

# Mocking Globals

You can mock global variables that are not present with `jsdom` or `node` by using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. It will put the value of the global variable into a `globalThis` object.

By default, Vitest does not reset these globals, but you can turn on the [`unstubGlobals`](/config/#unstubglobals) option in your config to restore the original values after each test or call [`vi.unstubAllGlobals()`](/api/vi#vi-unstuballglobals) manually.

```ts
import { vi } from 'vitest'

const IntersectionObserverMock = vi.fn(class {
  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
})

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// now you can access it as `IntersectionObserver` or `window.IntersectionObserver`
```

***
