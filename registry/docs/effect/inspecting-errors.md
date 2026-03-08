## Inspecting Errors

### tapError

Executes an effectful operation to inspect the failure of an effect without altering it.

**Example** (Inspecting Errors)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

// Simulate a task that fails with an error
const task: Micro.Micro<number, string> = Micro.fail("NetworkError")

// Use tapError to log the error message when the task fails
const tapping = Micro.tapError(task, (error) =>
  log(`expected error: ${error}`)
)

Micro.runFork(tapping)
/*
Output:
expected error: NetworkError
*/
```

### tapErrorCause

This function inspects the complete cause of an error, including failures and defects.

**Example** (Inspecting Error Causes)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

// Create a task that fails with a NetworkError
const task1: Micro.Micro<number, string> = Micro.fail("NetworkError")

const tapping1 = Micro.tapErrorCause(task1, (cause) =>
  log(`error cause: ${cause}`)
)

Micro.runFork(tapping1)
/*
Output:
error cause: MicroCause.Fail: NetworkError
*/

// Simulate a severe failure in the system
const task2: Micro.Micro<number, string> = Micro.die(
  "Something went wrong"
)

const tapping2 = Micro.tapErrorCause(task2, (cause) =>
  log(`error cause: ${cause}`)
)

Micro.runFork(tapping2)
/*
Output:
error cause: MicroCause.Die: Something went wrong
*/
```

### tapDefect

Specifically inspects non-recoverable failures or defects in an effect (i.e., one or more [Die](/docs/data-types/cause/#die) causes).

**Example** (Inspecting Defects)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

// Simulate a task that fails with a recoverable error
const task1: Micro.Micro<number, string> = Micro.fail("NetworkError")

// tapDefect won't log anything because NetworkError is not a defect
const tapping1 = Micro.tapDefect(task1, (cause) =>
  log(`defect: ${cause}`)
)

Micro.runFork(tapping1)
/*
No Output
*/

// Simulate a severe failure in the system
const task2: Micro.Micro<number, string> = Micro.die(
  "Something went wrong"
)

// Log the defect using tapDefect
const tapping2 = Micro.tapDefect(task2, (cause) =>
  log(`defect: ${cause}`)
)

Micro.runFork(tapping2)
/*
Output:
defect: Something went wrong
*/
```
