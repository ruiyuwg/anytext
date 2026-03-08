## Throttling

Throttling is a technique for regulating the rate at which elements are emitted from a stream. It helps maintain a steady data output pace, which is valuable in situations where data processing needs to occur at a consistent rate.

The `Stream.throttle` function uses the [token bucket algorithm](https://en.wikipedia.org/wiki/Token_bucket) to control the rate of stream emissions.

**Example** (Throttle Configuration)

```ts showLineNumbers=false
Stream.throttle({
  cost: () => 1,
  duration: "100 millis",
  units: 1
})
```

In this configuration:

- Each chunk processed uses one token (`cost = () => 1`).
- Tokens are replenished at a rate of one token (`units: 1`) every 100 milliseconds (`duration: "100 millis"`).

  Note that throttling operates on chunks rather than individual elements.
  The `cost` function sets the token cost for each chunk.

### Shape Strategy (Default)

The "shape" strategy moderates data flow by delaying chunk emissions until they comply with specified bandwidth constraints.
This strategy ensures that data throughput does not exceed defined limits, allowing for steady and controlled data emission.

**Example** (Applying Throttling with the Shape Strategy)

```ts twoslash
import { Stream, Effect, Schedule, Chunk } from "effect"

// Helper function to log with elapsed time since last log
let last = Date.now()
const log = (message: string) =>
  Effect.sync(() => {
    const end = Date.now()
    console.log(`${message} after ${end - last}ms`)
    last = end
  })

const stream = Stream.fromSchedule(Schedule.spaced("50 millis")).pipe(
  Stream.take(6),
  Stream.tap((n) => log(`Received ${n}`)),
  Stream.throttle({
    cost: Chunk.size,
    duration: "100 millis",
    units: 1
  }),
  Stream.tap((n) => log(`> Emitted ${n}`))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Example Output:
Received 0 after 56ms
> Emitted 0 after 0ms
Received 1 after 52ms
> Emitted 1 after 48ms
Received 2 after 52ms
> Emitted 2 after 49ms
Received 3 after 52ms
> Emitted 3 after 48ms
Received 4 after 52ms
> Emitted 4 after 47ms
Received 5 after 52ms
> Emitted 5 after 49ms
{ _id: 'Chunk', values: [ 0, 1, 2, 3, 4, 5 ] }
*/
```

### Enforce Strategy

The "enforce" strategy strictly regulates data flow by discarding chunks that exceed bandwidth constraints.

**Example** (Throttling with the Enforce Strategy)

```ts twoslash
import { Stream, Effect, Schedule, Chunk } from "effect"

// Helper function to log with elapsed time since last log
let last = Date.now()
const log = (message: string) =>
  Effect.sync(() => {
    const end = Date.now()
    console.log(`${message} after ${end - last}ms`)
    last = end
  })

const stream = Stream.make(1, 2, 3, 4, 5, 6).pipe(
  Stream.schedule(Schedule.exponential("100 millis")),
  Stream.tap((n) => log(`Received ${n}`)),
  Stream.throttle({
    cost: Chunk.size,
    duration: "1 second",
    units: 1,
    strategy: "enforce"
  }),
  Stream.tap((n) => log(`> Emitted ${n}`))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Example Output:
Received 1 after 106ms
> Emitted 1 after 1ms
Received 2 after 200ms
Received 3 after 402ms
Received 4 after 801ms
> Emitted 4 after 1ms
Received 5 after 1601ms
> Emitted 5 after 1ms
Received 6 after 3201ms
> Emitted 6 after 0ms
{ _id: 'Chunk', values: [ 1, 4, 5, 6 ] }
*/
```

### burst option

The `Stream.throttle` function offers a burst option that allows for temporary increases in data throughput beyond the set rate limits.
This option is set to greater than 0 to activate burst capability (default is 0, indicating no burst support).
The burst capacity provides additional tokens in the token bucket, enabling the stream to momentarily exceed its configured rate when bursts of data occur.

**Example** (Throttling with Burst Capacity)

```ts twoslash
import { Effect, Schedule, Stream, Chunk } from "effect"

// Helper function to log with elapsed time since last log
let last = Date.now()
const log = (message: string) =>
  Effect.sync(() => {
    const end = Date.now()
    console.log(`${message} after ${end - last}ms`)
    last = end
  })

const stream = Stream.fromSchedule(Schedule.spaced("10 millis")).pipe(
  Stream.take(20),
  Stream.tap((n) => log(`Received ${n}`)),
  Stream.throttle({
    cost: Chunk.size,
    duration: "200 millis",
    units: 5,
    strategy: "enforce",
    burst: 2
  }),
  Stream.tap((n) => log(`> Emitted ${n}`))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Example Output:
Received 0 after 16ms
> Emitted 0 after 0ms
Received 1 after 12ms
> Emitted 1 after 0ms
Received 2 after 11ms
> Emitted 2 after 0ms
Received 3 after 11ms
> Emitted 3 after 0ms
Received 4 after 11ms
> Emitted 4 after 1ms
Received 5 after 11ms
> Emitted 5 after 0ms
Received 6 after 12ms
> Emitted 6 after 0ms
Received 7 after 11ms
Received 8 after 12ms
Received 9 after 11ms
Received 10 after 11ms
> Emitted 10 after 0ms
Received 11 after 11ms
Received 12 after 11ms
Received 13 after 12ms
> Emitted 13 after 0ms
Received 14 after 11ms
Received 15 after 12ms
Received 16 after 11ms
Received 17 after 11ms
> Emitted 17 after 0ms
Received 18 after 12ms
Received 19 after 10ms
{
  _id: 'Chunk',
  values: [
    0, 1,  2,  3,  4,
    5, 6, 10, 13, 17
  ]
}
*/
```

In this setup, the stream starts with a bucket containing 5 tokens, allowing the first five chunks to be emitted instantly.
The additional burst capacity of 2 accommodates further emissions momentarily, allowing for handling of subsequent data more flexibly.
Over time, as the bucket refills according to the throttle configuration, additional elements are emitted, demonstrating how the burst capability can manage uneven data flows effectively.

## Scheduling

When working with streams, you may need to introduce specific time intervals between each element's emission. The `Stream.schedule` combinator allows you to set these intervals.

**Example** (Adding a Delay Between Stream Emissions)

```ts twoslash
import { Stream, Schedule, Console, Effect } from "effect"

// Create a stream that emits values with a 1-second delay between each
const stream = Stream.make(1, 2, 3, 4, 5).pipe(
  Stream.schedule(Schedule.spaced("1 second")),
  Stream.tap(Console.log)
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
1
2
3
4
5
{
  _id: "Chunk",
  values: [ 1, 2, 3, 4, 5 ]
}
*/
```

In this example, we've used the `Schedule.spaced("1 second")` schedule to introduce a one-second gap between each emission in the stream.
