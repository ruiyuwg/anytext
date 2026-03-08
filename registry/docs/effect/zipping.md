## Zipping

Zipping combines elements from two streams into a new stream, pairing elements from each input stream. This can be achieved with `Stream.zip` or `Stream.zipWith`, allowing for custom pairing logic.

**Example** (Basic Zipping)

In this example, elements from the two streams are paired sequentially. The resulting stream ends when one of the streams is exhausted.

```ts twoslash
import { Stream, Effect } from "effect"

// Zip two streams together
const stream = Stream.zip(
  Stream.make(1, 2, 3, 4, 5, 6),
  Stream.make("a", "b", "c")
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] }
*/
```

**Example** (Custom Zipping Logic)

Here, `Stream.zipWith` applies custom logic to each pair, combining elements in a user-defined way.

```ts twoslash
import { Stream, Effect } from "effect"

// Zip two streams with custom pairing logic
const stream = Stream.zipWith(
  Stream.make(1, 2, 3, 4, 5, 6),
  Stream.make("a", "b", "c"),
  (n, s) => [n + 10, s + "!"]
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ [ 11, 'a!' ], [ 12, 'b!' ], [ 13, 'c!' ] ] }
*/
```

### Handling Stream Endings

If one input stream ends before the other, you might want to zip with default values to avoid missing pairs. The `Stream.zipAll` and `Stream.zipAllWith` operators provide this functionality, allowing you to specify defaults for either stream.

**Example** (Zipping with Default Values)

In this example, when the second stream completes, the first stream continues with "x" as a default value for the second stream.

```ts twoslash
import { Stream, Effect } from "effect"

const stream = Stream.zipAll(Stream.make(1, 2, 3, 4, 5, 6), {
  other: Stream.make("a", "b", "c"),
  defaultSelf: -1,
  defaultOther: "x"
})

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [
    [ 1, 'a' ],
    [ 2, 'b' ],
    [ 3, 'c' ],
    [ 4, 'x' ],
    [ 5, 'x' ],
    [ 6, 'x' ]
  ]
}
*/
```

**Example** (Custom Logic with zipAllWith)

With `Stream.zipAllWith`, custom logic determines how to combine elements when either stream runs out, offering flexibility to handle these cases.

```ts twoslash
import { Stream, Effect } from "effect"

const stream = Stream.zipAllWith(Stream.make(1, 2, 3, 4, 5, 6), {
  other: Stream.make("a", "b", "c"),
  onSelf: (n) => [n, "x"],
  onOther: (s) => [-1, s],
  onBoth: (n, s) => [n + 10, s + "!"]
})

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [
    [ 11, 'a!' ],
    [ 12, 'b!' ],
    [ 13, 'c!' ],
    [ 4, 'x' ],
    [ 5, 'x' ],
    [ 6, 'x' ]
  ]
}
*/
```

### Zipping Streams at Different Rates

When combining streams that emit elements at different speeds, you may not want to wait for the slower stream to emit. Using `Stream.zipLatest` or `Stream.zipLatestWith`, you can zip elements as soon as either stream produces a new value. These functions use the most recent element from the slower stream whenever a new value arrives from the faster stream.

**Example** (Combining Streams with Different Emission Rates)

```ts twoslash
import { Stream, Schedule, Effect } from "effect"

const s1 = Stream.make(1, 2, 3).pipe(
  Stream.schedule(Schedule.spaced("1 second"))
)

const s2 = Stream.make("a", "b", "c", "d").pipe(
  Stream.schedule(Schedule.spaced("500 millis"))
)

const stream = Stream.zipLatest(s1, s2)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [
    [ 1, 'a' ],    // s1 emits 1 and pairs with the latest value from s2
    [ 1, 'b' ],    // s2 emits 'b', pairs with the latest value from s1
    [ 2, 'b' ],    // s1 emits 2, pairs with the latest value from s2
    [ 2, 'c' ],    // s2 emits 'c', pairs with the latest value from s1
    [ 2, 'd' ],    // s2 emits 'd', pairs with the latest value from s1
    [ 3, 'd' ]     // s1 emits 3, pairs with the latest value from s2
  ]
}
*/
```

### Pairing with Previous and Next Elements

| API                      | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| `zipWithPrevious`        | Pairs each element of a stream with its previous element. |
| `zipWithNext`            | Pairs each element of a stream with its next element.     |
| `zipWithPreviousAndNext` | Pairs each element with both its previous and next.       |

**Example** (Pairing Stream Elements with Next)

```ts twoslash
import { Stream, Effect } from "effect"

const stream = Stream.zipWithNext(Stream.make(1, 2, 3, 4))

Effect.runPromise(Stream.runCollect(stream)).then((chunks) =>
  console.log("%o", chunks)
)
/*
Output:
{
  _id: 'Chunk',
  values: [
    [ 1, { _id: 'Option', _tag: 'Some', value: 2 }, [length]: 2 ],
    [ 2, { _id: 'Option', _tag: 'Some', value: 3 }, [length]: 2 ],
    [ 3, { _id: 'Option', _tag: 'Some', value: 4 }, [length]: 2 ],
    [ 4, { _id: 'Option', _tag: 'None' }, [length]: 2 ],
    [length]: 4
  ]
}
*/
```

### Indexing Stream Elements

The `Stream.zipWithIndex` operator is a helpful tool for indexing each element in a stream, pairing each item with its respective position in the sequence. This is particularly useful when you want to keep track of the order of elements within a stream.

**Example** (Indexing Each Element in a Stream)

```ts twoslash
import { Stream, Effect } from "effect"

const stream = Stream.zipWithIndex(
  Stream.make("Mary", "James", "Robert", "Patricia")
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [
    [ 'Mary', 0 ],
    [ 'James', 1 ],
    [ 'Robert', 2 ],
    [ 'Patricia', 3 ]
  ]
}
*/
```

## Cartesian Product of Streams

The Stream module includes a feature for computing the *Cartesian Product* of two streams, allowing you to create combinations of elements from two different streams. This is helpful when you need to pair each element from one set with every element of another.

In simple terms, imagine you have two collections and want to form all possible pairs by picking one item from each. This pairing process is the Cartesian Product. In streams, this operation generates a new stream that includes every possible pairing of elements from the two input streams.

To create a Cartesian Product of two streams, the `Stream.cross` operator is available, along with similar variants. These operators combine two streams into a new stream of all possible element combinations.

**Example** (Creating a Cartesian Product of Two Streams)

```ts twoslash
import { Stream, Effect, Console } from "effect"

const s1 = Stream.make(1, 2, 3).pipe(Stream.tap(Console.log))
const s2 = Stream.make("a", "b").pipe(Stream.tap(Console.log))

const cartesianProduct = Stream.cross(s1, s2)

Effect.runPromise(Stream.runCollect(cartesianProduct)).then(console.log)
/*
Output:
1
a
b
2
a
b
3
a
b
{
  _id: 'Chunk',
  values: [
    [ 1, 'a' ],
    [ 1, 'b' ],
    [ 2, 'a' ],
    [ 2, 'b' ],
    [ 3, 'a' ],
    [ 3, 'b' ]
  ]
}
*/
```

Note that the right-hand stream (`s2` in this example) will be iterated
over multiple times, once for each element in the left-hand stream
(`s1`). If the right-hand stream involves expensive or
side-effect-producing operations, those will be executed repeatedly.
