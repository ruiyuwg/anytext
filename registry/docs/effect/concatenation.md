## Concatenation

In stream processing, you may need to combine the contents of multiple streams. The Stream module offers several operators to achieve this, including `Stream.concat`, `Stream.concatAll`, and `Stream.flatMap`. Let's look at how each of these operators works.

### Simple Concatenation

The `Stream.concat` operator is a straightforward method for joining two streams. It returns a new stream that emits elements from the first stream (left-hand) followed by elements from the second stream (right-hand). This is helpful when you want to combine two streams in a specific sequence.

**Example** (Concatenating Two Streams Sequentially)

```ts twoslash
import { Stream, Effect } from "effect"

const stream = Stream.concat(Stream.make(1, 2, 3), Stream.make("a", "b"))

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ 1, 2, 3, 'a', 'b' ] }
*/
```

### Concatenating Multiple Streams

If you have multiple streams to concatenate, `Stream.concatAll` provides an efficient way to combine them without manually chaining multiple `Stream.concat` operations. This function takes a [Chunk](/docs/data-types/chunk/) of streams and returns a single stream containing the elements of each stream in sequence.

**Example** (Concatenating Multiple Streams)

```ts twoslash
import { Stream, Effect, Chunk } from "effect"

const s1 = Stream.make(1, 2, 3)
const s2 = Stream.make("a", "b")
const s3 = Stream.make(true, false, false)

const stream = Stream.concatAll<number | string | boolean, never, never>(
  Chunk.make(s1, s2, s3)
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [
    1,     2,     3,
    'a',   'b',   true,
    false, false
  ]
}
*/
```

### Advanced Concatenation with flatMap

The `Stream.flatMap` operator allows for advanced concatenation by creating a stream where each element is generated
by applying a function of type `(a: A) => Stream<...>` to each output of the source stream.
This operator then concatenates all the resulting streams, effectively flattening them.

**Example** (Generating Repeated Elements with `Stream.flatMap`)

```ts twoslash
import { Stream, Effect } from "effect"

// Create a stream where each element is repeated 4 times
const stream = Stream.make(1, 2, 3).pipe(
  Stream.flatMap((a) => Stream.repeatValue(a).pipe(Stream.take(4)))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [
    1, 1, 1, 1, 2,
    2, 2, 2, 3, 3,
    3, 3
  ]
}
*/
```

If you need to perform the `flatMap` operation concurrently, you can use the [concurrency](/docs/concurrency/basic-concurrency/#concurrency-options) option to control how many inner streams run simultaneously.

Additionally, you can use the `switch` option to implement a "switch" behavior where previous streams are automatically
cancelled when new elements arrive from the source stream. This is particularly useful when you only need the most recent
result and want to conserve resources by cancelling outdated operations.

**Example** (Using the `switch` option)

```ts twoslash
import { Stream, Effect, Console } from "effect"

// Helper function to create a stream with logging
const createStreamWithLogging = (n: number) =>
  Stream.fromEffect(
    Effect.gen(function* () {
      console.log(`Starting stream for value: ${n}`)
      const result = yield* Effect.delay(Effect.succeed(n), "500 millis")
      console.log(`Completed stream for value: ${result}`)
      return result
    }).pipe(
      Effect.onInterrupt(() =>
        Console.log(`Interrupted stream for value: ${n}`)
      )
    )
  )

// Without switch (default behavior):
// all streams run to completion
const stream1 = Stream.fromIterable([1, 2, 3]).pipe(
  Stream.flatMap(createStreamWithLogging)
)

// With switch behavior:
// only the last stream completes, previous streams
// are cancelled when new values arrive
const stream2 = Stream.fromIterable([1, 2, 3]).pipe(
  Stream.flatMap(createStreamWithLogging, { switch: true })
)

// Run examples sequentially to see the difference
Effect.runPromise(
  Effect.gen(function* () {
    console.log("=== Without switch (all streams complete) ===")
    const result1 = yield* Stream.runCollect(stream1)
    console.log(result1)

    console.log("\n=== With switch (only last stream completes) ===")
    const result2 = yield* Stream.runCollect(stream2)
    console.log(result2)
  })
)
/*
Output:
=== Without switch (all streams complete) ===
Starting stream for value: 1
Completed stream for value: 1
Starting stream for value: 2
Completed stream for value: 2
Starting stream for value: 3
Completed stream for value: 3
{ _id: 'Chunk', values: [ 1, 2, 3 ] }

=== With switch (only last stream completes) ===
Starting stream for value: 1
Interrupted stream for value: 1
Starting stream for value: 2
Interrupted stream for value: 2
Starting stream for value: 3
Completed stream for value: 3
{ _id: 'Chunk', values: [ 3 ] }
*/
```

The `switch` option is especially valuable for scenarios like search functionality, real-time data processing,
or any situation where you want to discard previous operations when new input arrives.
