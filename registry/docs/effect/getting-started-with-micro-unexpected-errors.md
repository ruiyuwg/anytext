## Unexpected Errors

Unexpected errors, also referred to as *defects*, *untyped errors*, or *unrecoverable errors*, are errors that developers
do not anticipate occurring during normal program execution.
Unlike expected errors, which are considered part of a program's domain and control flow,
unexpected errors resemble unchecked exceptions and lie outside the expected behavior of the program.

Since these errors are not expected, Effect **does not track** them at the type level.
However, the Effect runtime does keep track of these errors and provides several methods to aid in recovering from unexpected errors.

### die

The `Micro.die` function returns an effect that throws a specified error. This function is useful for terminating a program when a defect, a critical and unexpected error, is detected in the code.

**Example** (Terminating on Division by Zero with `Effect.die`)

```ts twoslash
import { Micro } from "effect"

const divide = (a: number, b: number): Micro.Micro<number> =>
  b === 0
    ? Micro.die(new Error("Cannot divide by zero"))
    : Micro.succeed(a / b)

Micro.runPromise(divide(1, 0))
/*
throws:
Die [(MicroCause.Die) Error]: Cannot divide by zero
  ...stack trace...
*/
```

### orDie

The `Micro.orDie` function converts an effect's failure into a termination of the program, removing the error from the type of the effect. It is useful when you encounter failures that you do not intend to handle or recover from.

**Example** (Converting Failure to Defect with `Micro.orDie`)

```ts twoslash
import { Micro } from "effect"

const divide = (a: number, b: number): Micro.Micro<number, Error> =>
  b === 0
    ? Micro.fail(new Error("Cannot divide by zero"))
    : Micro.succeed(a / b)

//      ┌─── Micro<number, never, never>
//      ▼
const program = Micro.orDie(divide(1, 0))

Micro.runPromise(program)
/*
throws:
Die [(MicroCause.Die) Error]: Cannot divide by zero
  ...stack trace...
*/
```

### catchAllDefect

The `Micro.catchAllDefect` function allows you to recover from all defects using a provided function.

**Example** (Handling All Defects with `Micro.catchAllDefect`)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

// Simulating a runtime error
const task = Micro.die("Boom!")

const program = Micro.catchAllDefect(task, (defect) =>
  log(`Unknown defect caught: ${defect}`)
)

// We get a Right because we caught all defects
Micro.runPromiseExit(program).then((exit) => console.log(exit))
/*
Output:
Unknown defect caught: Boom!
{
  "_id": "MicroExit",
  "_tag": "Success"
}
*/
```

It's important to understand that `Micro.catchAllDefect` can only handle defects, not expected errors (such as those caused by `Micro.fail`) or interruptions in execution (such as when using `Micro.interrupt`).

A defect refers to an error that cannot be anticipated in advance, and there is no reliable way to respond to it. As a general rule, it's recommended to let defects crash the application, as they often indicate serious issues that need to be addressed.

However, in some specific cases, such as when dealing with dynamically loaded plugins, a controlled recovery approach might be necessary. For example, if our application supports runtime loading of plugins and a defect occurs within a plugin, we may choose to log the defect and then reload only the affected plugin instead of crashing the entire application. This allows for a more resilient and uninterrupted operation of the application.

## Fallback

### orElseSucceed

The `Effect.orElseSucceed` function will replace the original failure with a success value, ensuring the effect cannot fail:

**Example** (Replacing Failure with Success using `Micro.orElseSucceed`)

```ts twoslash
import { Micro } from "effect"

const validate = (age: number): Micro.Micro<number, string> => {
  if (age < 0) {
    return Micro.fail("NegativeAgeError")
  } else if (age < 18) {
    return Micro.fail("IllegalAgeError")
  } else {
    return Micro.succeed(age)
  }
}

const program = Micro.orElseSucceed(validate(-1), () => 18)

console.log(Micro.runSyncExit(program))
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": 18
}
*/
```
