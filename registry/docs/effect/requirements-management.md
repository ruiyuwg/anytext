## Requirements Management

In the context of programming, a **service** refers to a reusable component or functionality that can be used by different parts of an application.
Services are designed to provide specific capabilities and can be shared across multiple modules or components.

Services often encapsulate common tasks or operations that are needed by different parts of an application.
They can handle complex operations, interact with external systems or APIs, manage data, or perform other specialized tasks.

Services are typically designed to be modular and decoupled from the rest of the application.
This allows them to be easily maintained, tested, and replaced without affecting the overall functionality of the application.

To create a new service, you need two things:

- A unique identifier.
- A type describing the possible operations of the service.

```ts twoslash
import { Micro, Context } from "effect"

// Declaring a tag for a service that generates random numbers
class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Micro.Micro<number> }
>() {}
```

Now that we have our service tag defined, let's see how we can use it by building a simple program.

**Example** (Using a Custom Service in a Program)

```ts twoslash
import * as Context from "effect/Context"
import { Micro } from "effect"

// Declaring a tag for a service that generates random numbers
class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Micro.Micro<number> }
>() {}

// Using the service
//
//      ┌─── Micro<void, never, Random>
//      ▼
const program = Micro.gen(function* () {
  // Access the Random service
  const random = yield* Micro.service(Random)

  // Retrieve a random number from the service
  const randomNumber = yield* random.next

  console.log(`random number: ${randomNumber}`)
})
```

It's worth noting that the type of the `program` variable includes `Random` in the `Requirements` type parameter:

```ts "Random" showLineNumbers=false
const program: Micro<void, never, Random>
```

This indicates that our program requires the `Random` service to be provided in order to execute successfully.

To successfully execute the program, we need to provide an actual implementation of the `Random` service.

**Example** (Providing and Using a Service)

```ts twoslash
import { Micro, Context } from "effect"

// Declaring a tag for a service that generates random numbers
class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Micro.Micro<number> }
>() {}

// Using the service
const program = Micro.gen(function* () {
  // Access the Random service
  const random = yield* Micro.service(Random)

  // Retrieve a random number from the service
  const randomNumber = yield* random.next

  console.log(`random number: ${randomNumber}`)
})

// Providing the implementation
//
//      ┌─── Micro<void, never, never>
//      ▼
const runnable = Micro.provideService(program, Random, {
  next: Micro.sync(() => Math.random())
})

Micro.runPromise(runnable)
/*
Example Output:
random number: 0.8241872233134417
*/
```
