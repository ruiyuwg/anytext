## Expected Errors

These errors, also referred to as *failures*, *typed errors*
or *recoverable errors*, are errors that developers anticipate as part of the normal program execution.
They serve a similar purpose to checked exceptions and play a role in defining the program's domain and control flow.

Expected errors **are tracked** at the type level by the `Micro` data type in the "Error" channel:

```text showLineNumbers=false "Error"
        ┌─── Represents the success type
        │        ┌─── Represents the error type
        │        │      ┌─── Represents required dependencies
        ▼        ▼      ▼
Micro<Success, Error, Requirements>
```

### either

The `Micro.either` function transforms an `Micro<A, E, R>` into an effect that encapsulates both potential failure and success within an [Either](/docs/data-types/either/) data type:

```ts showLineNumbers=false
Micro<A, E, R> -> Micro<Either<A, E>, never, R>
```

This means if you have an effect with the following type:

```ts showLineNumbers=false
Micro<string, HttpError, never>
```

and you call `Micro.either` on it, the type becomes:

```ts showLineNumbers=false
Micro<Either<string, HttpError>, never, never>
```

The resulting effect cannot fail because the potential failure is now represented within the `Either`'s `Left` type.
The error type of the returned `Micro` is specified as `never`, confirming that the effect is structured to not fail.

By yielding an `Either`, we gain the ability to "pattern match" on this type to handle both failure and success cases within the generator function.

**Example** (Using `Micro.either` to Handle Errors)

```ts twoslash
import { Micro, Either } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Micro<string, HttpError | ValidationError, never>
//      ▼
const program = Micro.gen(function* () {
  // Simulate http and validation errors
  if (Math.random() > 0.5) yield* Micro.fail(new HttpError())
  if (Math.random() > 0.5) yield* Micro.fail(new ValidationError())
  return "some result"
})

//      ┌─── Micro<string, never, never>
//      ▼
const recovered = Micro.gen(function* () {
  //      ┌─── Either<string, HttpError | ValidationError>
  //      ▼
  const failureOrSuccess = yield* Micro.either(program)
  return Either.match(failureOrSuccess, {
    // Failure case
    onLeft: (error) => `Recovering from ${error._tag}`,
    // Success case
    onRight: (value) => `Result is: ${value}`
  })
})

Micro.runPromiseExit(recovered).then(console.log)
/*
Example Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": "Recovering from ValidationError"
}
*/
```

As you can see since all errors are handled, the error type of the resulting effect `recovered` is `never`:

```ts showLineNumbers=false
const recovered: Micro<string, never, never>
```

### catchAll

The `Micro.catchAll` function allows you to catch any error that occurs in the program and provide a fallback.

**Example** (Catching All Errors with `Micro.catchAll`)

```ts twoslash
import { Micro } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Micro<string, HttpError | ValidationError, never>
//      ▼
const program = Micro.gen(function* () {
  // Simulate http and validation errors
  if (Math.random() > 0.5) yield* Micro.fail(new HttpError())
  if (Math.random() > 0.5) yield* Micro.fail(new ValidationError())
  return "some result"
})

//      ┌─── Micro<string, never, never>
//      ▼
const recovered = program.pipe(
  Micro.catchAll((error) =>
    Micro.succeed(`Recovering from ${error._tag}`)
  )
)

Micro.runPromiseExit(recovered).then(console.log)
/*
Example Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": "Recovering from HttpError"
}
*/
```

We can observe that the type in the error channel of our program has changed to `never`:

```ts showLineNumbers=false
const recovered: Micro<string, never, never>
```

indicating that all errors have been handled.

### catchTag

If your program's errors are **all tagged** with a `_tag` field that acts as a discriminator you can use the `Effect.catchTag` function to catch and handle specific errors with precision.

**Example** (Handling Errors by Tag with `Micro.catchTag`)

```ts twoslash
import { Micro } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Micro<string, HttpError | ValidationError, never>
//      ▼
const program = Micro.gen(function* () {
  // Simulate http and validation errors
  if (Math.random() > 0.5) yield* Micro.fail(new HttpError())
  if (Math.random() > 0.5) yield* Micro.fail(new ValidationError())
  return "Success"
})

//      ┌─── Micro<string, ValidationError, never>
//      ▼
const recovered = program.pipe(
  Micro.catchTag("HttpError", (_HttpError) =>
    Micro.succeed("Recovering from HttpError")
  )
)

Micro.runPromiseExit(recovered).then(console.log)
/*
Example Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": "Recovering from HttpError"
}
*/
```

In the example above, the `Micro.catchTag` function allows us to handle `HttpError` specifically.
If a `HttpError` occurs during the execution of the program, the provided error handler function will be invoked,
and the program will proceed with the recovery logic specified within the handler.

We can observe that the type in the error channel of our program has changed to only show `ValidationError`:

```ts showLineNumbers=false
const recovered: Micro<string, ValidationError, never>
```

indicating that `HttpError` has been handled.
