## Broadcasting

Broadcasting a stream creates multiple downstream streams that each receive the same elements from the source stream. This is useful when you want to send each element to multiple consumers simultaneously. The upstream stream has a `maximumLag` parameter that sets the limit for how much it can get ahead before slowing down to match the speed of the slowest downstream stream.

**Example** (Broadcasting to Multiple Downstream Streams)

In the following example, we broadcast a stream of numbers to two downstream consumers. The first calculates the maximum value in the stream, while the second logs each number with a delay. The upstream stream's speed adjusts based on the slower logging stream:

```ts twoslash
import { Effect, Stream, Console, Schedule, Fiber } from "effect"

const numbers = Effect.scoped(
  Stream.range(1, 20).pipe(
    Stream.tap((n) =>
      Console.log(`Emit ${n} element before broadcasting`)
    ),
    // Broadcast to 2 downstream consumers with max lag of 5
    Stream.broadcast(2, 5),
    Stream.flatMap(([first, second]) =>
      Effect.gen(function* () {
        // First downstream stream: calculates maximum
        const fiber1 = yield* Stream.runFold(first, 0, (acc, e) =>
          Math.max(acc, e)
        ).pipe(
          Effect.andThen((max) => Console.log(`Maximum: ${max}`)),
          Effect.fork
        )

        // Second downstream stream: logs each element with a delay
        const fiber2 = yield* second.pipe(
          Stream.schedule(Schedule.spaced("1 second")),
          Stream.runForEach((n) =>
            Console.log(`Logging to the Console: ${n}`)
          ),
          Effect.fork
        )

        // Wait for both fibers to complete
        yield* Fiber.join(fiber1).pipe(
          Effect.zip(Fiber.join(fiber2), { concurrent: true })
        )
      })
    ),
    Stream.runCollect
  )
)

Effect.runPromise(numbers).then(console.log)
/*
Output:
Emit 1 element before broadcasting
Emit 2 element before broadcasting
Emit 3 element before broadcasting
Emit 4 element before broadcasting
Emit 5 element before broadcasting
Emit 6 element before broadcasting
Emit 7 element before broadcasting
Emit 8 element before broadcasting
Emit 9 element before broadcasting
Emit 10 element before broadcasting
Emit 11 element before broadcasting
Logging to the Console: 1
Logging to the Console: 2
Logging to the Console: 3
Logging to the Console: 4
Logging to the Console: 5
Emit 12 element before broadcasting
Emit 13 element before broadcasting
Emit 14 element before broadcasting
Emit 15 element before broadcasting
Emit 16 element before broadcasting
Logging to the Console: 6
Logging to the Console: 7
Logging to the Console: 8
Logging to the Console: 9
Logging to the Console: 10
Emit 17 element before broadcasting
Emit 18 element before broadcasting
Emit 19 element before broadcasting
Emit 20 element before broadcasting
Logging to the Console: 11
Logging to the Console: 12
Logging to the Console: 13
Logging to the Console: 14
Logging to the Console: 15
Maximum: 20
Logging to the Console: 16
Logging to the Console: 17
Logging to the Console: 18
Logging to the Console: 19
Logging to the Console: 20
{ _id: 'Chunk', values: [ undefined ] }
*/
```
