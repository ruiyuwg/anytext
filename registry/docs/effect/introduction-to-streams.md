# [Introduction to Streams](https://effect.website/docs/stream/introduction/)

## Overview

In this guide, we'll explore the concept of a `Stream<A, E, R>`. A `Stream` is a program description that, when executed, can emit **zero or more values** of type `A`, handle errors of type `E`, and operates within a context of type `R`.

## Use Cases

Streams are particularly handy whenever you're dealing with sequences of values over time. They can serve as replacements for observables, node streams, and AsyncIterables.

## What is a Stream?

Think of a `Stream` as an extension of an `Effect`. While an `Effect<A, E, R>` represents a program that requires a context of type `R`, may encounter an error of type `E`, and always produces a single result of type `A`, a `Stream<A, E, R>` takes this further by allowing the emission of zero or more values of type `A`.

To clarify, let's examine some examples using `Effect`:

```ts twoslash
import { Effect, Chunk, Option } from "effect"

// An Effect that fails with a string error
const failedEffect = Effect.fail("fail!")

// An Effect that produces a single number
const oneNumberValue = Effect.succeed(3)

// An Effect that produces a chunk of numbers
const oneListValue = Effect.succeed(Chunk.make(1, 2, 3))

// An Effect that produces an optional number
const oneOption = Effect.succeed(Option.some(1))
```

In each case, the `Effect` always ends with **exactly one value**. There is no variability; you always get one result.

## Understanding Streams

Now, let's shift our focus to `Stream`. A `Stream` represents a program description that shares similarities with `Effect`, it requires a context of type `R`, may signal errors of type `E`, and yields values of type `A`. However, the key distinction is that it can yield **zero or more values**.

Here are the possible scenarios for a `Stream`:

- **An Empty Stream**: It can end up empty, representing a stream with no values.
- **A Single-Element Stream**: It can represent a stream with just one value.
- **A Finite Stream of Elements**: It can represent a stream with a finite number of values.
- **An Infinite Stream of Elements**: It can represent a stream that continues indefinitely, essentially an infinite stream.

Let's see these scenarios in action:

```ts twoslash
import { Stream } from "effect"

// An empty Stream
const emptyStream = Stream.empty

// A Stream with a single number
const oneNumberValueStream = Stream.succeed(3)

// A Stream with a range of numbers from 1 to 10
const finiteNumberStream = Stream.range(1, 10)

// An infinite Stream of numbers starting from 1 and incrementing
const infiniteNumberStream = Stream.iterate(1, (n) => n + 1)
```

In summary, a `Stream` is a versatile tool for representing programs that may yield multiple values, making it suitable for a wide range of tasks, from processing finite lists to handling infinite sequences.

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
