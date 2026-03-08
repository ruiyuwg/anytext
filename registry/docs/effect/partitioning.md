## Partitioning

Partitioning a stream involves dividing it into two distinct streams based on a specified condition. The Stream module offers two functions for this purpose: `Stream.partition` and `Stream.partitionEither`. Let's look at how these functions work and the best scenarios for their use.

### partition

The `Stream.partition` function takes a predicate (a condition) as input and divides the original stream into two substreams. One substream will contain elements that meet the condition, while the other contains those that do not. Both resulting substreams are wrapped in a `Scope` type.

**Example** (Partitioning a Stream into Odd and Even Numbers)

```ts twoslash
import { Stream, Effect } from "effect"

//      ┌─── Effect<[Stream<number>, Stream<number>], never, Scope>
//      ▼
const program = Stream.range(1, 9).pipe(
  Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
)

Effect.runPromise(
  Effect.scoped(
    Effect.gen(function* () {
      const [odds, evens] = yield* program
      console.log(yield* Stream.runCollect(odds))
      console.log(yield* Stream.runCollect(evens))
    })
  )
)
/*
Output:
{ _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
{ _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
*/
```

### partitionEither

In some cases, you might need to partition a stream using a condition that involves an effect. For this, the `Stream.partitionEither` function is ideal. This function uses an effectful predicate to split the stream into two substreams: one for elements that produce `Either.left` values and another for elements that produce `Either.right` values.

**Example** (Partitioning a Stream with an Effectful Predicate)

```ts twoslash
import { Stream, Effect, Either } from "effect"

//      ┌─── Effect<[Stream<number>, Stream<number>], never, Scope>
//      ▼
const program = Stream.range(1, 9).pipe(
  Stream.partitionEither(
    // Simulate an effectful computation
    (n) => Effect.succeed(n % 2 === 0 ? Either.right(n) : Either.left(n)),
    { bufferSize: 5 }
  )
)

Effect.runPromise(
  Effect.scoped(
    Effect.gen(function* () {
      const [odds, evens] = yield* program
      console.log(yield* Stream.runCollect(odds))
      console.log(yield* Stream.runCollect(evens))
    })
  )
)
/*
Output:
{ _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
{ _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
*/
```
