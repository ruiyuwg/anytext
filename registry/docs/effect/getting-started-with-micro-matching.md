## Matching

### match

The `Micro.match` function lets you handle both success and failure cases without performing side effects. You provide a handler for each case.

**Example** (Handling Both Success and Failure Cases)

```ts twoslash
import { Micro } from "effect"

const success: Micro.Micro<number, Error> = Micro.succeed(42)

const program1 = Micro.match(success, {
  onFailure: (error) => `failure: ${error.message}`,
  onSuccess: (value) => `success: ${value}`
})

// Run and log the result of the successful effect
Micro.runPromise(program1).then(console.log)
// Output: "success: 42"

const failure: Micro.Micro<number, Error> = Micro.fail(
  new Error("Uh oh!")
)

const program2 = Micro.match(failure, {
  onFailure: (error) => `failure: ${error.message}`,
  onSuccess: (value) => `success: ${value}`
})

// Run and log the result of the failed effect
Micro.runPromise(program2).then(console.log)
// Output: "failure: Uh oh!"
```

### matchEffect

The `Micro.matchEffect` function, similar to `Micro.match`, allows you to handle both success and failure cases, but it also enables you to perform additional side effects within those handlers.

**Example** (Handling Success and Failure with Side Effects)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

const success: Micro.Micro<number, Error> = Micro.succeed(42)
const failure: Micro.Micro<number, Error> = Micro.fail(
  new Error("Uh oh!")
)

const program1 = Micro.matchEffect(success, {
  onFailure: (error) =>
    Micro.succeed(`failure: ${error.message}`).pipe(Micro.tap(log)),
  onSuccess: (value) =>
    Micro.succeed(`success: ${value}`).pipe(Micro.tap(log))
})

Micro.runSync(program1)
/*
Output:
success: 42
*/

const program2 = Micro.matchEffect(failure, {
  onFailure: (error) =>
    Micro.succeed(`failure: ${error.message}`).pipe(Micro.tap(log)),
  onSuccess: (value) =>
    Micro.succeed(`success: ${value}`).pipe(Micro.tap(log))
})

Micro.runSync(program2)
/*
Output:
failure: Uh oh!
*/
```

### matchCause / matchCauseEffect

The `Micro.matchCause` and `Micro.matchCauseEffect` functions allow you to handle failures more precisely by providing access to the complete cause of failure within a fiber. This makes it possible to differentiate between various failure types and respond accordingly.

**Example** (Handling Different Failure Causes with `Micro.matchCauseEffect`)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

const task: Micro.Micro<number, Error> = Micro.die("Uh oh!")

const program = Micro.matchCauseEffect(task, {
  onFailure: (cause) => {
    switch (cause._tag) {
      case "Fail":
        // Handle standard failure with a logged message
        return log(`Fail: ${cause.error.message}`)
      case "Die":
        // Handle defects (unexpected errors) by logging the defect
        return log(`Die: ${cause.defect}`)
      case "Interrupt":
        // Handle interruption
        return log("Interrupt")
    }
  },
  onSuccess: (value) =>
    // Log success if the task completes successfully
    log(`succeeded with ${value} value`)
})

Micro.runSync(program)
// Output: "Die: Uh oh!"
```

## Retrying

### retry

The `Micro.retry` function allows you to retry a failing effect according to a defined policy.

**Example** (Retrying with a Fixed Delay)

```ts twoslash
import { Micro } from "effect"

let count = 0

// Simulates an effect with possible failures
const effect = Micro.async<string, Error>((resume) => {
  if (count <= 2) {
    count++
    console.log("failure")
    resume(Micro.fail(new Error()))
  } else {
    console.log("success")
    resume(Micro.succeed("yay!"))
  }
})

// Define a repetition policy using a spaced delay between retries
const policy = Micro.scheduleSpaced(100)

const repeated = Micro.retry(effect, { schedule: policy })

Micro.runPromise(repeated).then(console.log)
/*
Output:
failure
failure
failure
success
yay!
*/
```
