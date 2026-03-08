## Scheduling

### MicroSchedule

The `MicroSchedule` type represents a function that can be used to calculate the delay between
repeats.

```ts showLineNumbers=false
type MicroSchedule = (attempt: number, elapsed: number) => Option<number>
```

The function takes the current attempt number and the elapsed time since
the first attempt, and returns the delay for the next attempt. If the
function returns `None`, the repetition will stop.

### repeat

The `Micro.repeat` function returns a new effect that repeats the given effect according to a specified schedule or until the first failure.

The scheduled recurrences are in addition to the initial execution, so
`Micro.repeat(action, Micro.scheduleRecurs(1))` executes `action` once
initially, and if it succeeds, repeats it an additional time.

**Example** (Repeating a Successful Effect)

```ts twoslash
import { Micro } from "effect"

// Define an effect that logs a message to the console
const action = Micro.sync(() => console.log("success"))

// Define a schedule that repeats the action 2 more times with a delay
const policy = Micro.scheduleAddDelay(Micro.scheduleRecurs(2), () => 100)

// Repeat the action according to the schedule
const program = Micro.repeat(action, { schedule: policy })

Micro.runPromise(program)
/*
Output:
success
success
success
*/
```

**Example** (Handling Failures in Repetition)

```ts twoslash
import { Micro } from "effect"

let count = 0

// Define an async effect that simulates an action with potential failure
const action = Micro.async<string, string>((resume) => {
  if (count > 1) {
    console.log("failure")
    resume(Micro.fail("Uh oh!"))
  } else {
    count++
    console.log("success")
    resume(Micro.succeed("yay!"))
  }
})

// Define a schedule that repeats the action 2 more times with a delay
const policy = Micro.scheduleAddDelay(Micro.scheduleRecurs(2), () => 100)

// Repeat the action according to the schedule
const program = Micro.repeat(action, { schedule: policy })

// Run the program and observe the result on failure
Micro.runPromiseExit(program).then(console.log)
/*
Output:
success
success
failure
{
  "_id": "MicroExit",
  "_tag": "Failure",
  "cause": {
    "_tag": "Fail",
    "traces": [],
    "name": "MicroCause.Fail",
    "error": "Uh oh!"
  }
}
*/
```

### Simulating Schedule Behavior

This helper function, `dryRun`, demonstrates how different scheduling policies control repetition timing without executing an actual effect. By returning an array of delay intervals, it visualizes how a schedule would space repetitions.

```ts twoslash
import { Option, Micro } from "effect"

// Helper function to simulate and visualize a schedule's behavior
const dryRun = (
  schedule: Micro.MicroSchedule, // The scheduling policy to simulate
  maxAttempt: number = 7 // Maximum number of repetitions to simulate
): Array<number> => {
  let attempt = 1 // Track the current attempt number
  let elapsed = 0 // Track the total elapsed time
  const out: Array<number> = [] // Array to store each delay duration
  let duration = schedule(attempt, elapsed)

  // Continue until the schedule returns no delay or maxAttempt is reached
  while (Option.isSome(duration) && attempt <= maxAttempt) {
    const value = duration.value
    out.push(value)
    attempt++
    elapsed += value

    // Get the next duration based on the current attempt
    // and total elapsed time
    duration = schedule(attempt, elapsed)
  }

  return out
}
```

### scheduleSpaced

A schedule that repeats indefinitely, each repetition spaced the specified duration from the last run.

**Example** (Recurring with Delay Between Executions)

```ts twoslash collapse={5-21}
import { Micro } from "effect"
import * as Option from "effect/Option"

// Helper function to simulate and visualize a schedule's behavior
const dryRun = (
  schedule: Micro.MicroSchedule,
  maxAttempt: number = 7
): Array<number> => {
  let attempt = 1
  let elapsed = 0
  const out: Array<number> = []
  let duration = schedule(attempt, elapsed)
  while (Option.isSome(duration) && attempt <= maxAttempt) {
    const value = duration.value
    attempt++
    elapsed += value
    out.push(value)
    duration = schedule(attempt, elapsed)
  }
  return out
}

const policy = Micro.scheduleSpaced(10)

console.log(dryRun(policy))
/*
Output:
[
  10, 10, 10, 10,
  10, 10, 10
]
*/
```

### scheduleExponential

A schedule that recurs using exponential backoff, with each delay increasing exponentially.

**Example** (Exponential Backoff Schedule)

```ts twoslash collapse={5-21}
import { Micro } from "effect"
import * as Option from "effect/Option"

// Helper function to simulate and visualize a schedule's behavior
const dryRun = (
  schedule: Micro.MicroSchedule,
  maxAttempt: number = 7
): Array<number> => {
  let attempt = 1
  let elapsed = 0
  const out: Array<number> = []
  let duration = schedule(attempt, elapsed)
  while (Option.isSome(duration) && attempt <= maxAttempt) {
    const value = duration.value
    attempt++
    elapsed += value
    out.push(value)
    duration = schedule(attempt, elapsed)
  }
  return out
}

const policy = Micro.scheduleExponential(10)

console.log(dryRun(policy))
/*
Output:
[
    20,  40,  80,
   160, 320, 640,
  1280
]
*/
```

### scheduleUnion

Combines two schedules using union. The schedule recurs as long as one of the schedules wants to, using the minimum delay between recurrences.

**Example** (Union of Exponential and Spaced Schedules)

```ts twoslash collapse={5-21}
import { Micro } from "effect"
import * as Option from "effect/Option"

// Helper function to simulate and visualize a schedule's behavior
const dryRun = (
  schedule: Micro.MicroSchedule,
  maxAttempt: number = 7
): Array<number> => {
  let attempt = 1
  let elapsed = 0
  const out: Array<number> = []
  let duration = schedule(attempt, elapsed)
  while (Option.isSome(duration) && attempt <= maxAttempt) {
    const value = duration.value
    attempt++
    elapsed += value
    out.push(value)
    duration = schedule(attempt, elapsed)
  }
  return out
}

const policy = Micro.scheduleUnion(
  Micro.scheduleExponential(10),
  Micro.scheduleSpaced(300)
)

console.log(dryRun(policy))
/*
Output:
[
  20,  < exponential
  40,
  80,
  160,
  300, < spaced
  300,
  300
]
*/
```

### scheduleIntersect

Combines two schedules using intersection. The schedule recurs only if both schedules want to continue, using the maximum delay between them.

**Example** (Intersection of Exponential and Recurs Schedules)

```ts twoslash collapse={5-21}
import { Micro } from "effect"
import * as Option from "effect/Option"

// Helper function to simulate and visualize a schedule's behavior
const dryRun = (
  schedule: Micro.MicroSchedule,
  maxAttempt: number = 7
): Array<number> => {
  let attempt = 1
  let elapsed = 0
  const out: Array<number> = []
  let duration = schedule(attempt, elapsed)
  while (Option.isSome(duration) && attempt <= maxAttempt) {
    const value = duration.value
    attempt++
    elapsed += value
    out.push(value)
    duration = schedule(attempt, elapsed)
  }
  return out
}

const policy = Micro.scheduleIntersect(
  Micro.scheduleExponential(10),
  Micro.scheduleSpaced(300)
)

console.log(dryRun(policy))
/*
Output:
[
  300, < spaced
  300,
  300,
  300,
  320, < exponential
  640,
  1280
]
*/
```
