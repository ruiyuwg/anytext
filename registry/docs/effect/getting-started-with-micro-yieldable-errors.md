## Yieldable Errors

Yieldable Errors are special types of errors that can be yielded directly within a generator function using `Micro.gen`.
These errors allow you to handle them intuitively, without needing to explicitly invoke `Micro.fail`. This simplifies how you manage custom errors in your code.

### Error

The `Error` constructor provides a way to define a base class for yieldable errors.

**Example** (Creating and Yielding a Custom Error)

```ts twoslash
import { Micro } from "effect"

// Define a custom error class extending Error
class MyError extends Micro.Error<{ message: string }> {}

export const program = Micro.gen(function* () {
  // Yield a custom error (equivalent to failing with MyError)
  yield* new MyError({ message: "Oh no!" })
})

Micro.runPromiseExit(program).then(console.log)
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Failure",
  "cause": {
    "_tag": "Fail",
    "traces": [],
    "name": "(MicroCause.Fail) Error",
    "error": {
      "message": "Oh no!"
    }
  }
}
*/
```

### TaggedError

The `TaggedError` constructor lets you define custom yieldable errors with unique tags. Each error has a `_tag` property, allowing you to easily distinguish between different error types. This makes it convenient to handle specific tagged errors using functions like `Micro.catchTag`.

**Example** (Handling Multiple Tagged Errors)

```ts twoslash
import { Micro } from "effect"

// An error with _tag: "Foo"
class FooError extends Micro.TaggedError("Foo")<{
  message: string
}> {}

// An error with _tag: "Bar"
class BarError extends Micro.TaggedError("Bar")<{
  randomNumber: number
}> {}

export const program = Micro.gen(function* () {
  const n = Math.random()
  return n > 0.5
    ? "yay!"
    : n < 0.2
    ? yield* new FooError({ message: "Oh no!" })
    : yield* new BarError({ randomNumber: n })
}).pipe(
  // Handle different tagged errors using catchTag
  Micro.catchTag("Foo", (error) =>
    Micro.succeed(`Foo error: ${error.message}`)
  ),
  Micro.catchTag("Bar", (error) =>
    Micro.succeed(`Bar error: ${error.randomNumber}`)
  )
)

Micro.runPromise(program).then(console.log, console.error)
/*
Example Output (n < 0.2):
Foo error: Oh no!
*/
```
