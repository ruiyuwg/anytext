## Interruptions

All effects in Effect are executed by fibers. If you didn't create the fiber yourself, it was created by an operation you're using (if it's concurrent) or by the Effect runtime system.

A fiber is created any time an effect is run. When running effects concurrently, a fiber is created for each concurrent effect.

To summarize:

- A `Micro` is a higher-level concept that describes an effectful computation. It is lazy and immutable, meaning it represents a computation that may produce a value or fail but does not immediately execute.
- A fiber, on the other hand, represents the running execution of a `Micro`. It can be interrupted or awaited to retrieve its result. Think of it as a way to control and interact with the ongoing computation.

Fibers can be interrupted in various ways. Let's explore some of these scenarios and see examples of how to interrupt fibers in Effect.

### Interrupting Fibers

If a fiber's result is no longer needed, it can be interrupted, which immediately terminates the fiber and safely releases all resources by running all finalizers.

Similar to `.await`, `.interrupt` returns a `MicroExit` value describing how the fiber completed.

**Example** (Interrupting a Fiber)

```ts twoslash
import { Micro } from "effect"

const program = Micro.gen(function* () {
  // Fork a fiber that runs indefinitely, printing "Hi!"
  const fiber = yield* Micro.fork(
    Micro.forever(
      Micro.sync(() => console.log("Hi!")).pipe(Micro.delay(10))
    )
  )
  yield* Micro.sleep(30)
  // Interrupt the fiber
  yield* Micro.fiberInterrupt(fiber)
})

Micro.runPromise(program)
/*
Output:
Hi!
Hi!
*/
```

### Micro.interrupt

A fiber can be interrupted using the `Micro.interrupt` effect on that particular fiber.

**Example** (Without Interruption)

In this case, the program runs without any interruption, logging the start and completion of the task.

```ts twoslash
import { Micro } from "effect"

const program = Micro.gen(function* () {
  console.log("start")
  yield* Micro.sleep(2_000)
  console.log("done")
})

Micro.runPromiseExit(program).then(console.log)
/*
Output:
start
done
{
  "_id": "MicroExit",
  "_tag": "Success"
}
*/
```

**Example** (With Interruption)

Here, the fiber is interrupted after the log `"start"` but before the `"done"` log. The `Effect.interrupt` stops the fiber, and it never reaches the final log.

```ts {6} twoslash
import { Micro } from "effect"

const program = Micro.gen(function* () {
  console.log("start")
  yield* Micro.sleep(2_000)
  yield* Micro.interrupt
  console.log("done")
})

Micro.runPromiseExit(program).then(console.log)
/*
Output:
start
{
  "_id": "MicroExit",
  "_tag": "Failure",
  "cause": {
    "_tag": "Interrupt",
    "traces": [],
    "name": "MicroCause.Interrupt"
  }
}
*/
```

When a fiber is interrupted, the cause of the interruption is captured, including details like the fiber's ID and when it started.

### Interruption of Concurrent Effects

When running multiple effects concurrently, such as with `Micro.forEach`, if one of the effects is interrupted, it causes all concurrent effects to be interrupted as well.

**Example** (Interrupting Concurrent Effects)

```ts twoslash
import { Micro } from "effect"

const program = Micro.forEach(
  [1, 2, 3],
  (n) =>
    Micro.gen(function* () {
      console.log(`start #${n}`)
      yield* Micro.sleep(2 * 1_000)
      if (n > 1) {
        yield* Micro.interrupt
      }
      console.log(`done #${n}`)
    }),
  { concurrency: "unbounded" }
)

Micro.runPromiseExit(program).then((exit) =>
  console.log(JSON.stringify(exit, null, 2))
)
/*
Output:
start #1
start #2
start #3
done #1
{
  "_id": "MicroExit",
  "_tag": "Failure",
  "cause": {
    "_tag": "Interrupt",
    "traces": [],
    "name": "MicroCause.Interrupt"
  }
}
*/
```

## Racing

The `Effect.race` function allows you to run multiple effects concurrently, returning the result of the first one that successfully completes.

**Example** (Basic Race Between Effects)

```ts twoslash
import { Micro } from "effect"

const task1 = Micro.delay(Micro.fail("task1"), 1_000)
const task2 = Micro.delay(Micro.succeed("task2"), 2_000)

// Run both tasks concurrently and return
// the result of the first to complete
const program = Micro.race(task1, task2)

Micro.runPromise(program).then(console.log)
/*
Output:
task2
*/
```

If you want to handle the result of whichever task completes first, whether it succeeds or fails, you can use the `Micro.either` function. This function wraps the result in an [Either](/docs/data-types/either/) type, allowing you to see if the result was a success (`Right`) or a failure (`Left`):

**Example** (Handling Success or Failure with Either)

```ts twoslash
import { Micro } from "effect"

const task1 = Micro.delay(Micro.fail("task1"), 1_000)
const task2 = Micro.delay(Micro.succeed("task2"), 2_000)

// Run both tasks concurrently, wrapping the result
// in Either to capture success or failure
const program = Micro.race(Micro.either(task1), Micro.either(task2))

Micro.runPromise(program).then(console.log)
/*
Output:
{ _id: 'Either', _tag: 'Left', left: 'task1' }
*/
```
