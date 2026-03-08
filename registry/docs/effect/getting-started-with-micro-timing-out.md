## Timing out

When an operation does not finish within the specified duration, the behavior of the `Micro.timeout` depends on whether the operation is "uninterruptible".

An uninterruptible effect is one that, once started, cannot be stopped
mid-execution by the timeout mechanism directly. This could be because
the operations within the effect need to run to completion to avoid
leaving the system in an inconsistent state.

1. **Interruptible Operation**: If the operation can be interrupted, it is terminated immediately once the timeout threshold is reached, resulting in a `TimeoutException`.

   ```ts twoslash
   import { Micro } from "effect"

   const task = Micro.gen(function* () {
     console.log("Start processing...")
     yield* Micro.sleep(2_000) // Simulates a delay in processing
     console.log("Processing complete.")
     return "Result"
   })

   const timedEffect = task.pipe(Micro.timeout(1_000))

   Micro.runPromiseExit(timedEffect).then(console.log)
   /*
   Output:
   Start processing...
   {
     "_id": "MicroExit",
     "_tag": "Failure",
     "cause": {
       "_tag": "Fail",
       "traces": [],
       "name": "(MicroCause.Fail) TimeoutException",
       "error": {
         "_tag": "TimeoutException"
       }
     }
   }
   */
   ```

2. **Uninterruptible Operation**: If the operation is uninterruptible, it continues until completion before the `TimeoutException` is assessed.

   ```ts twoslash
   import { Micro } from "effect"

   const task = Micro.gen(function* () {
     console.log("Start processing...")
     yield* Micro.sleep(2_000) // Simulates a delay in processing
     console.log("Processing complete.")
     return "Result"
   })

   const timedEffect = task.pipe(
     Micro.uninterruptible,
     Micro.timeout(1_000)
   )

   // Outputs a TimeoutException after the task completes,
   // because the task is uninterruptible
   Micro.runPromiseExit(timedEffect).then(console.log)
   /*
   Output:
   Start processing...
   Processing complete.
   {
     "_id": "MicroExit",
     "_tag": "Failure",
     "cause": {
       "_tag": "Fail",
       "traces": [],
       "name": "(MicroCause.Fail) TimeoutException",
       "error": {
         "_tag": "TimeoutException"
       }
     }
   }
   */
   ```

## Sandboxing

The `Micro.sandbox` function allows you to encapsulate all the potential causes of an error in an effect. It exposes the full cause of an effect, whether it's due to a failure, defect or interruption.

In simple terms, it takes an effect `Micro<A, E, R>` and transforms it into an effect `Micro<A, MicroCause<E>, R>` where the error channel now contains a detailed cause of the error.

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

//      ┌─── Micro<string, Error, never>
//      ▼
const task = Micro.fail(new Error("Oh uh!")).pipe(
  Micro.as("primary result")
)

//      ┌─── Effect<string, MicroCause<Error>, never>
//      ▼
const sandboxed = Micro.sandbox(task)

const program = sandboxed.pipe(
  Micro.catchTag("Fail", (cause) =>
    log(`Caught a defect: ${cause.error}`).pipe(
      Micro.as("fallback result on expected error")
    )
  ),
  Micro.catchTag("Interrupt", () =>
    log(`Caught a defect`).pipe(
      Micro.as("fallback result on fiber interruption")
    )
  ),
  Micro.catchTag("Die", (cause) =>
    log(`Caught a defect: ${cause.defect}`).pipe(
      Micro.as("fallback result on unexpected error")
    )
  )
)

Micro.runPromise(program).then(console.log)
/*
Output:
Caught a defect: Error: Oh uh!
fallback result on expected error
*/
```
