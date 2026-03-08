## Buffering

Effect streams use a pull-based model, allowing downstream consumers to control the rate at which they request elements. However, when there's a mismatch in the speed between the producer and the consumer, buffering can help balance their interaction. The `Stream.buffer` operator is designed to manage this, allowing the producer to keep working even if the consumer is slower. You can set a maximum buffer capacity using the `capacity` option.

### buffer

The `Stream.buffer` operator queues elements to allow the producer to work independently from the consumer, up to a specified capacity. This helps when a faster producer and a slower consumer need to operate smoothly without blocking each other.

**Example** (Using a Buffer to Handle Speed Mismatch)

```ts twoslash
import { Stream, Console, Schedule, Effect } from "effect"

const stream = Stream.range(1, 10).pipe(
  // Log each element before buffering
  Stream.tap((n) => Console.log(`before buffering: ${n}`)),
  // Buffer with a capacity of 4 elements
  Stream.buffer({ capacity: 4 }),
  // Log each element after buffering
  Stream.tap((n) => Console.log(`after buffering: ${n}`)),
  // Add a 5-second delay between each emission
  Stream.schedule(Schedule.spaced("5 seconds"))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Output:
before buffering: 1
before buffering: 2
before buffering: 3
before buffering: 4
before buffering: 5
before buffering: 6
after buffering: 1
after buffering: 2
before buffering: 7
after buffering: 3
before buffering: 8
after buffering: 4
before buffering: 9
after buffering: 5
before buffering: 10
...
*/
```

Different buffering options let you tailor the buffering strategy based on your use case:

| **Buffering Type**  | **Configuration**                            | **Description**                                               |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------- |
| **Bounded Queue**   | `{ capacity: number }`                       | Limits the queue to a fixed size.                             |
| **Unbounded Queue** | `{ capacity: "unbounded" }`                  | Allows an unlimited number of buffered items.                 |
| **Sliding Queue**   | `{ capacity: number, strategy: "sliding" }`  | Keeps the most recent items, discarding older ones when full. |
| **Dropping Queue**  | `{ capacity: number, strategy: "dropping" }` | Keeps the earliest items, discarding new ones when full.      |

## Debouncing

Debouncing is a technique used to prevent a function from firing too frequently, which is particularly useful when a stream emits values rapidly but only the last value after a pause is needed.

The `Stream.debounce` function achieves this by delaying the emission of values until a specified time period has passed without any new values. If a new value arrives during the waiting period, the timer resets, and only the latest value will eventually be emitted after a pause.

**Example** (Debouncing a Stream of Rapidly Emitted Values)

```ts twoslash
import { Stream, Effect } from "effect"

// Helper function to log with elapsed time since the last log
let last = Date.now()
const log = (message: string) =>
  Effect.sync(() => {
    const end = Date.now()
    console.log(`${message} after ${end - last}ms`)
    last = end
  })

const stream = Stream.make(1, 2, 3).pipe(
  // Emit the value 4 after 200 ms
  Stream.concat(
    Stream.fromEffect(Effect.sleep("200 millis").pipe(Effect.as(4)))
  ),
  // Continue with more rapid values
  Stream.concat(Stream.make(5, 6)),
  // Emit 7 after 150 ms
  Stream.concat(
    Stream.fromEffect(Effect.sleep("150 millis").pipe(Effect.as(7)))
  ),
  Stream.concat(Stream.make(8)),
  Stream.tap((n) => log(`Received ${n}`)),
  // Only emit values after a pause of at least 100 milliseconds
  Stream.debounce("100 millis"),
  Stream.tap((n) => log(`> Emitted ${n}`))
)

Effect.runPromise(Stream.runCollect(stream)).then(console.log)
/*
Example Output:
Received 1 after 5ms
Received 2 after 2ms
Received 3 after 0ms
> Emitted 3 after 104ms
Received 4 after 99ms
Received 5 after 1ms
Received 6 after 0ms
> Emitted 6 after 101ms
Received 7 after 50ms
Received 8 after 1ms
> Emitted 8 after 101ms
{ _id: 'Chunk', values: [ 3, 6, 8 ] }
*/
```
