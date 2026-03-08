## Grouping

When processing streams of data, you may need to group elements based on specific criteria. The Stream module provides two functions for this purpose: `groupByKey`, `groupBy`, `grouped` and `groupedWithin`. Let's review how these functions work and when to use each one.

### groupByKey

The `Stream.groupByKey` function partitions a stream based on a key function of type `(a: A) => K`, where `A` is the type of elements in the stream, and `K` represents the keys for grouping. This function is non-effectful and groups elements by simply applying the provided key function.

The result of `Stream.groupByKey` is a `GroupBy` data type, representing the grouped stream. To process each group, you can use `GroupBy.evaluate`, which takes a function of type `(key: K, stream: Stream<V, E>) => Stream.Stream<...>`. This function operates across all groups and merges them together in a non-deterministic order.

**Example** (Grouping by Tens Place in Exam Scores)

In the following example, we use `Stream.groupByKey` to group exam scores by the tens place and count the number of scores in each group:

```ts twoslash
import { Stream, GroupBy, Effect, Chunk } from "effect"

class Exam {
  constructor(
    readonly person: string,
    readonly score: number
  ) {}
}

// Define a list of exam results
const examResults = [
  new Exam("Alex", 64),
  new Exam("Michael", 97),
  new Exam("Bill", 77),
  new Exam("John", 78),
  new Exam("Bobby", 71)
]

// Group exam results by the tens place in the score
const groupByKeyResult = Stream.fromIterable(examResults).pipe(
  Stream.groupByKey((exam) => Math.floor(exam.score / 10) * 10)
)

// Count the number of exam results in each group
const stream = GroupBy.evaluate(groupByKeyResult, (key, stream) =>
  Stream.fromEffect(
    Stream.runCollect(stream).pipe(
      Effect.andThen((chunk) => [key, Chunk.size(chunk)] as const)
    )
  )
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{ _id: 'Chunk', values: [ [ 60, 1 ], [ 90, 1 ], [ 70, 3 ] ] }
*/
```

### groupBy

For more complex grouping requirements where partitioning involves effects, you can use the `Stream.groupBy` function. This function accepts an effectful partitioning function and returns a `GroupBy` data type, representing the grouped stream. You can then process each group by using `GroupBy.evaluate`, similar to `Stream.groupByKey`.

**Example** (Grouping Names by First Letter)

In the following example, we group names by their first letter and count the number of names in each group. Here, the partitioning operation is set up as an effectful operation:

```ts twoslash
import { Stream, GroupBy, Effect, Chunk } from "effect"

// Group names by their first letter
const groupByKeyResult = Stream.fromIterable([
  "Mary",
  "James",
  "Robert",
  "Patricia",
  "John",
  "Jennifer",
  "Rebecca",
  "Peter"
]).pipe(
  // Simulate an effectful groupBy operation
  Stream.groupBy((name) => Effect.succeed([name.substring(0, 1), name]))
)

// Count the number of names in each group and display results
const stream = GroupBy.evaluate(groupByKeyResult, (key, stream) =>
  Stream.fromEffect(
    Stream.runCollect(stream).pipe(
      Effect.andThen((chunk) => [key, Chunk.size(chunk)] as const)
    )
  )
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
{
  _id: 'Chunk',
  values: [ [ 'M', 1 ], [ 'J', 3 ], [ 'R', 2 ], [ 'P', 2 ] ]
}
*/
```

### grouped

The `Stream.grouped` function is ideal for dividing a stream into chunks of a specified size, making it easier to handle data in smaller, organized segments. This is particularly helpful when processing or displaying data in batches.

**Example** (Dividing a Stream into Chunks of 3 Elements)

```ts twoslash
import { Stream, Effect } from "effect"

// Create a stream of numbers and group them into chunks of 3
const stream = Stream.range(0, 8).pipe(Stream.grouped(3))

Effect.runPromise(Stream.runCollect(stream)).then((chunks) =>
  console.log("%o", chunks)
)
/*
Output:
{
  _id: 'Chunk',
  values: [
    { _id: 'Chunk', values: [ 0, 1, 2, [length]: 3 ] },
    { _id: 'Chunk', values: [ 3, 4, 5, [length]: 3 ] },
    { _id: 'Chunk', values: [ 6, 7, 8, [length]: 3 ] },
    [length]: 3
  ]
}
*/
```

### groupedWithin

The `Stream.groupedWithin` function allows for flexible grouping by creating chunks based on either a specified maximum size or a time interval, whichever condition is met first. This is especially useful for working with data where timing constraints are involved.

**Example** (Grouping by Size or Time Interval)

In this example, `Stream.groupedWithin(18, "1.5 seconds")` groups the stream into chunks whenever either 18 elements accumulate or 1.5 seconds elapse since the last chunk was created.

```ts twoslash
import { Stream, Schedule, Effect, Chunk } from "effect"

// Create a stream that repeats every second and group by size or time
const stream = Stream.range(0, 9).pipe(
  Stream.repeat(Schedule.spaced("1 second")),
  Stream.groupedWithin(18, "1.5 seconds"),
  Stream.take(3)
)

Effect.runPromise(Stream.runCollect(stream)).then((chunks) =>
  console.log(Chunk.toArray(chunks))
)
/*
Output:
[
  {
    _id: 'Chunk',
    values: [
      0, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 0, 1, 2, 3,
      4, 5, 6, 7
    ]
  },
  {
    _id: 'Chunk',
    values: [
      8, 9, 0, 1, 2,
      3, 4, 5, 6, 7,
      8, 9
    ]
  },
  {
    _id: 'Chunk',
    values: [
      0, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 0, 1, 2, 3,
      4, 5, 6, 7
    ]
  }
]
*/
```
