# [TestClock](https://effect.website/docs/testing/testclock/)

## Overview

import { Aside } from "@astrojs/starlight/components"

In most cases, we want our unit tests to run as quickly as possible. Waiting for real time to pass can slow down our tests significantly. Effect provides a handy tool called `TestClock` that allows us to **control time during testing**. This means we can efficiently and predictably test code that involves time without having to wait for the actual time to pass.

## How TestClock Works

Imagine `TestClock` as a wall clock that only moves forward when we adjust it manually using the `TestClock.adjust` and `TestClock.setTime` functions. The clock time does not progress on its own.

When we adjust the clock time, any effects scheduled to run at or before that time will execute. This allows us to simulate time passage in tests without waiting for real time.

**Example** (Simulating a Timeout with TestClock)

```ts twoslash
import { Effect, TestClock, Fiber, Option, TestContext } from "effect"
import * as assert from "node:assert"

const test = Effect.gen(function* () {
  // Create a fiber that sleeps for 5 minutes and then times out
  // after 1 minute
  const fiber = yield* Effect.sleep("5 minutes").pipe(
    Effect.timeoutTo({
      duration: "1 minute",
      onSuccess: Option.some,
      onTimeout: () => Option.none<void>()
    }),
    Effect.fork
  )

  // Adjust the TestClock by 1 minute to simulate the passage of time
  yield* TestClock.adjust("1 minute")

  // Get the result of the fiber
  const result = yield* Fiber.join(fiber)

  // Check if the result is None, indicating a timeout
  assert.ok(Option.isNone(result))
}).pipe(Effect.provide(TestContext.TestContext))

Effect.runPromise(test)
```

A key point is forking the fiber where `Effect.sleep` is invoked. Calls to `Effect.sleep` and related methods wait until the clock time matches or exceeds the scheduled time for their execution. By forking the fiber, we retain control over the clock time adjustments.

A recommended pattern when using the `TestClock` is to fork the effect
being tested, adjust the clock time as needed, and then verify that the
expected outcomes have occurred.

## Testing Recurring Effects

Here's an example demonstrating how to test an effect that runs at fixed intervals using the `TestClock`:

**Example** (Testing an Effect with Fixed Intervals)

In this example, we test an effect that runs at regular intervals. An unbounded queue is used to manage the effects, and we verify the following:

1. No effect occurs before the specified recurrence period.
2. An effect occurs after the recurrence period.
3. The effect executes exactly once.

```ts twoslash
import { Effect, Queue, TestClock, Option, TestContext } from "effect"
import * as assert from "node:assert"

const test = Effect.gen(function* () {
  const q = yield* Queue.unbounded()

  yield* Queue.offer(q, undefined).pipe(
    // Delay the effect for 60 minutes and repeat it forever
    Effect.delay("60 minutes"),
    Effect.forever,
    Effect.fork
  )

  // Check if no effect is performed before the recurrence period
  const a = yield* Queue.poll(q).pipe(Effect.andThen(Option.isNone))

  // Adjust the TestClock by 60 minutes to simulate the passage of time
  yield* TestClock.adjust("60 minutes")

  // Check if an effect is performed after the recurrence period
  const b = yield* Queue.take(q).pipe(Effect.as(true))

  // Check if the effect is performed exactly once
  const c = yield* Queue.poll(q).pipe(Effect.andThen(Option.isNone))

  // Adjust the TestClock by another 60 minutes
  yield* TestClock.adjust("60 minutes")

  // Check if another effect is performed
  const d = yield* Queue.take(q).pipe(Effect.as(true))
  const e = yield* Queue.poll(q).pipe(Effect.andThen(Option.isNone))

  // Ensure that all conditions are met
  assert.ok(a && b && c && d && e)
}).pipe(Effect.provide(TestContext.TestContext))

Effect.runPromise(test)
```

It's important to note that after each recurrence, the next occurrence is scheduled to happen at the appropriate time. Adjusting the clock by 60 minutes places exactly one value in the queue; adjusting by another 60 minutes adds another value.

## Testing Clock

This example demonstrates how to test the behavior of the `Clock` using the `TestClock`:

**Example** (Simulating Time Passage with TestClock)

```ts twoslash
import { Effect, Clock, TestClock, TestContext } from "effect"
import * as assert from "node:assert"

const test = Effect.gen(function* () {
  // Get the current time using the Clock
  const startTime = yield* Clock.currentTimeMillis

  // Adjust the TestClock by 1 minute to simulate the passage of time
  yield* TestClock.adjust("1 minute")

  // Get the current time again
  const endTime = yield* Clock.currentTimeMillis

  // Check if the time difference is at least
  // 60,000 milliseconds (1 minute)
  assert.ok(endTime - startTime >= 60_000)
}).pipe(Effect.provide(TestContext.TestContext))

Effect.runPromise(test)
```

## Testing Deferred

The `TestClock` also impacts asynchronous code scheduled to run after a specific time.

**Example** (Simulating Delayed Execution with Deferred and TestClock)

```ts twoslash
import { Effect, Deferred, TestClock, TestContext } from "effect"
import * as assert from "node:assert"

const test = Effect.gen(function* () {
  // Create a deferred value
  const deferred = yield* Deferred.make<number, void>()

  // Run two effects concurrently: sleep for 10 seconds and succeed
  // the deferred with a value of 1
  yield* Effect.all(
    [Effect.sleep("10 seconds"), Deferred.succeed(deferred, 1)],
    { concurrency: "unbounded" }
  ).pipe(Effect.fork)

  // Adjust the TestClock by 10 seconds
  yield* TestClock.adjust("10 seconds")

  // Await the value from the deferred
  const readRef = yield* Deferred.await(deferred)

  // Verify the deferred value is correctly set
  assert.ok(readRef === 1)
}).pipe(Effect.provide(TestContext.TestContext))

Effect.runPromise(test)
```

# [Operations](https://effect.website/docs/stream/operations/)

## Overview

import { Aside } from "@astrojs/starlight/components"

In this guide, we'll explore some essential operations you can perform on streams. These operations allow you to manipulate and interact with stream elements in various ways.

## Tapping

The `Stream.tap` operation allows you to run an effect on each element emitted by the stream, observing or performing side effects without altering the elements or return type. This can be useful for logging, monitoring, or triggering additional actions with each emission.

**Example** (Logging with `Stream.tap`)

For example, `Stream.tap` can be used to log each element before and after a mapping operation:

```ts twoslash
import { Stream, Console, Effect } from "effect"

const stream = Stream.make(1, 2, 3).pipe(
  Stream.tap((n) => Console.log(`before mapping: ${n}`)),
  Stream.map((n) => n * 2),
  Stream.tap((n) => Console.log(`after mapping: ${n}`))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
before mapping: 1
after mapping: 2
before mapping: 2
after mapping: 4
before mapping: 3
after mapping: 6
{ _id: 'Chunk', values: [ 2, 4, 6 ] }
*/
```

## Taking Elements

The "taking" operations in streams let you extract a specific set of elements, either by a fixed number, condition, or position within the stream. Here are a few ways to apply these operations:

| API         | Description                                           |
| ----------- | ----------------------------------------------------- |
| `take`      | Extracts a fixed number of elements.                  |
| `takeWhile` | Extracts elements while a certain condition is met.   |
| `takeUntil` | Extracts elements until a certain condition is met.   |
| `takeRight` | Extracts a specified number of elements from the end. |

**Example** (Extracting Elements in Different Ways)

```ts twoslash
import { Stream, Effect } from "effect"

const stream = Stream.iterate(0, (n) => n + 1)

// Using `take` to extract a fixed number of elements:
const s1 = Stream.take(stream, 5)
Effect.runPromise(Stream.runCollect(s1)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
*/

// Using `takeWhile` to extract elements while a condition is met:
const s2 = Stream.takeWhile(stream, (n) => n < 5)
Effect.runPromise(Stream.runCollect(s2)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
*/

// Using `takeUntil` to extract elements until a condition is met:
const s3 = Stream.takeUntil(stream, (n) => n === 5)
Effect.runPromise(Stream.runCollect(s3)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ 0, 1, 2, 3, 4, 5 ] }
*/

// Using `takeRight` to take elements from the end of the stream:
const s4 = Stream.takeRight(s3, 3)
Effect.runPromise(Stream.runCollect(s4)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ 3, 4, 5 ] }
*/
```

## Streams as an Alternative to Async Iterables

When working with asynchronous data sources, such as async iterables, you often need to consume data in a loop until a certain condition is met. Streams provide a similar approach and offer additional flexibility.

With async iterables, data is processed in a loop until a break or return statement is encountered. To replicate this behavior with Streams, consider these options:

| API         | Description                                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `takeUntil` | Takes elements from a stream until a specified condition is met, similar to breaking out of a loop.                                                                   |
| `toPull`    | Returns an effect that continuously pulls data chunks from the stream. This effect can fail with `None` when the stream is finished or with `Some` error if it fails. |

**Example** (Using `Stream.toPull`)

```ts twoslash
import { Stream, Effect } from "effect"

// Simulate a chunked stream
const stream = Stream.fromIterable([1, 2, 3, 4, 5]).pipe(
  Stream.rechunk(2)
)

const program = Effect.gen(function* () {
  // Create an effect to get data chunks from the stream
  const getChunk = yield* Stream.toPull(stream)

  // Continuously fetch and process chunks
  while (true) {
    const chunk = yield* getChunk
    console.log(chunk)
  }
})

Effect.runPromise(Effect.scoped(program)).then(console.log, console.error)
/*
Output:
{ _id: 'Chunk', values: [ 1, 2 ] }
{ _id: 'Chunk', values: [ 3, 4 ] }
{ _id: 'Chunk', values: [ 5 ] }
(FiberFailure) Error: {
  "_id": "Option",
  "_tag": "None"
}
*/
```
