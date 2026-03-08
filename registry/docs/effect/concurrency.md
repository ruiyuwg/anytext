## Concurrency

### Forking Effects

One of the fundamental ways to create a fiber is by forking an existing effect.
When you fork an effect, it starts executing the effect on a new fiber, giving you a reference to this newly-created fiber.

The following code demonstrates how to create a single fiber using the `Micro.fork` function. This fiber will execute the function `fib(100)` independently of the main fiber:

**Example** (Forking a Fiber)

```ts twoslash
import { Micro } from "effect"

const fib = (n: number): Micro.Micro<number> =>
  n < 2
    ? Micro.succeed(n)
    : Micro.zipWith(fib(n - 1), fib(n - 2), (a, b) => a + b)

//      ┌─── Micro<MicroFiber<number, never>, never, never>
//      ▼
const fib10Fiber = Micro.fork(fib(10))
```

### Joining Fibers

A common operation with fibers is joining them using the `Micro.fiberJoin` function.
This function returns a `Micro` that will succeed or fail based on the outcome of the fiber it joins:

**Example** (Joining a Fiber)

```ts twoslash
import { Micro } from "effect"

const fib = (n: number): Micro.Micro<number> =>
  n < 2
    ? Micro.succeed(n)
    : Micro.zipWith(fib(n - 1), fib(n - 2), (a, b) => a + b)

//      ┌─── Micro<MicroFiber<number, never>, never, never>
//      ▼
const fib10Fiber = Micro.fork(fib(10))

const program = Micro.gen(function* () {
  // Retrieve the fiber
  const fiber = yield* fib10Fiber
  // Join the fiber and get the result
  const n = yield* Micro.fiberJoin(fiber)
  console.log(n)
})

Micro.runPromise(program)
// Output: 55
```

### Awaiting Fibers

Another useful function for fibers is `Micro.fiberAwait`.
This function returns an effect containing a `MicroExit` value, which provides detailed information about how the fiber completed.

**Example** (Awaiting Fiber Completion)

```ts twoslash
import { Micro } from "effect"

const fib = (n: number): Micro.Micro<number> =>
  n < 2
    ? Micro.succeed(n)
    : Micro.zipWith(fib(n - 1), fib(n - 2), (a, b) => a + b)

//      ┌─── Micro<MicroFiber<number, never>, never, never>
//      ▼
const fib10Fiber = Micro.fork(fib(10))

const program = Micro.gen(function* () {
  // Retrieve the fiber
  const fiber = yield* fib10Fiber
  // Await its completion and get the MicroExit result
  const exit = yield* Micro.fiberAwait(fiber)
  console.log(exit)
})

Micro.runPromise(program)
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": 55
}
*/
```
