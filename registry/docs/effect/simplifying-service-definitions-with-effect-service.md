## Simplifying Service Definitions with Effect.Service

The `Effect.Service` API provides a way to define a service in a single step, including its tag and layer.
It also allows specifying dependencies upfront, making service construction more straightforward.

### Defining a Service with Dependencies

The following example defines a `Cache` service that depends on a file system.

**Example** (Defining a Cache Service)

```ts twoslash
import { FileSystem } from "@effect/platform"
import { NodeFileSystem } from "@effect/platform-node"
import { Effect } from "effect"

// Define a Cache service
class Cache extends Effect.Service<Cache>()("app/Cache", {
  // Define how to create the service
  effect: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem
    const lookup = (key: string) => fs.readFileString(`cache/${key}`)
    return { lookup } as const
  }),
  // Specify dependencies
  dependencies: [NodeFileSystem.layer]
}) {}
```

### Using the Generated Layers

The `Effect.Service` API automatically generates layers for the service.

| Layer                              | Description                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| `Cache.Default`                    | Provides the `Cache` service with its dependencies already included.              |
| `Cache.DefaultWithoutDependencies` | Provides the `Cache` service but requires dependencies to be provided separately. |

```ts twoslash collapse={6-13}
import { FileSystem } from "@effect/platform"
import { NodeFileSystem } from "@effect/platform-node"
import { Effect } from "effect"

// Define a Cache service
class Cache extends Effect.Service<Cache>()("app/Cache", {
  effect: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem
    const lookup = (key: string) => fs.readFileString(`cache/${key}`)
    return { lookup } as const
  }),
  dependencies: [NodeFileSystem.layer]
}) {}

// Layer that includes all required dependencies
//
//      ┌─── Layer<Cache>
//      ▼
const layer = Cache.Default

// Layer without dependencies, requiring them to be provided externally
//
//      ┌─── Layer.Layer<Cache, never, FileSystem>
//      ▼
const layerNoDeps = Cache.DefaultWithoutDependencies
```

### Accessing the Service

A service created with `Effect.Service` can be accessed like any other Effect service.

**Example** (Accessing the Cache Service)

```ts twoslash collapse={6-13}
import { FileSystem } from "@effect/platform"
import { NodeFileSystem } from "@effect/platform-node"
import { Effect, Console } from "effect"

// Define a Cache service
class Cache extends Effect.Service<Cache>()("app/Cache", {
  effect: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem
    const lookup = (key: string) => fs.readFileString(`cache/${key}`)
    return { lookup } as const
  }),
  dependencies: [NodeFileSystem.layer]
}) {}

// Accessing the Cache Service
const program = Effect.gen(function* () {
  const cache = yield* Cache
  const data = yield* cache.lookup("my-key")
  console.log(data)
}).pipe(Effect.catchAllCause((cause) => Console.log(cause)))

const runnable = program.pipe(Effect.provide(Cache.Default))

Effect.runFork(runnable)
/*
{
  _id: 'Cause',
  _tag: 'Fail',
  failure: {
    _tag: 'SystemError',
    reason: 'NotFound',
    module: 'FileSystem',
    method: 'readFile',
    pathOrDescriptor: 'cache/my-key',
    syscall: 'open',
    message: "ENOENT: no such file or directory, open 'cache/my-key'",
    [Symbol(@effect/platform/Error/PlatformErrorTypeId)]: Symbol(@effect/platform/Error/PlatformErrorTypeId)
  }
}
*/
```

Since this example uses `Cache.Default`, it interacts with the real file system. If the file does not exist, it results in an error.

### Injecting Test Dependencies

To test the program without depending on the real file system, we can inject a test file system using the `Cache.DefaultWithoutDependencies` layer.

**Example** (Using a Test File System)

```ts twoslash collapse={6-13,16-20}
import { FileSystem } from "@effect/platform"
import { NodeFileSystem } from "@effect/platform-node"
import { Effect, Console } from "effect"

// Define a Cache service
class Cache extends Effect.Service<Cache>()("app/Cache", {
  effect: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem
    const lookup = (key: string) => fs.readFileString(`cache/${key}`)
    return { lookup } as const
  }),
  dependencies: [NodeFileSystem.layer]
}) {}

// Accessing the Cache Service
const program = Effect.gen(function* () {
  const cache = yield* Cache
  const data = yield* cache.lookup("my-key")
  console.log(data)
}).pipe(Effect.catchAllCause((cause) => Console.log(cause)))

// Create a test file system that always returns a fixed value
const FileSystemTest = FileSystem.layerNoop({
  readFileString: () => Effect.succeed("File Content...")
})

const runnable = program.pipe(
  Effect.provide(Cache.DefaultWithoutDependencies),
  // Provide the mock file system
  Effect.provide(FileSystemTest)
)

Effect.runFork(runnable)
// Output: File Content...
```

### Mocking the Service Directly

Alternatively, you can mock the `Cache` service itself instead of replacing its dependencies.

**Example** (Mocking the Cache Service)

```ts twoslash collapse={6-13,16-20}
import { FileSystem } from "@effect/platform"
import { NodeFileSystem } from "@effect/platform-node"
import { Effect, Console } from "effect"

// Define a Cache service
class Cache extends Effect.Service<Cache>()("app/Cache", {
  effect: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem
    const lookup = (key: string) => fs.readFileString(`cache/${key}`)
    return { lookup } as const
  }),
  dependencies: [NodeFileSystem.layer]
}) {}

// Accessing the Cache Service
const program = Effect.gen(function* () {
  const cache = yield* Cache
  const data = yield* cache.lookup("my-key")
  console.log(data)
}).pipe(Effect.catchAllCause((cause) => Console.log(cause)))

// Create a mock implementation of Cache
const cache = new Cache({
  lookup: () => Effect.succeed("Cache Content...")
})

// Provide the mock Cache service
const runnable = program.pipe(Effect.provideService(Cache, cache))

Effect.runFork(runnable)
// Output: File Content...
```

### Alternative Ways to Define a Service

The `Effect.Service` API supports multiple ways to define a service:

| Method    | Description                                        |
| --------- | -------------------------------------------------- |
| `succeed` | Provides a static implementation of the service.   |
| `sync`    | Defines a service using a synchronous constructor. |
| `effect`  | Defines a service with an effectful constructor.   |
| `scoped`  | Creates a service with lifecycle management.       |

**Example** (Defining a Service with a Static Implementation)

This is the simplest way to define a service. It is useful when you want to provide a constant value for the service.

```ts twoslash
import { Effect } from "effect"

class MagicNumber extends Effect.Service<MagicNumber>()("MagicNumber", {
  succeed: { value: 42 }
}) {}

//      ┌─── Effect<void, never, MagicNumber>
//      ▼
const program = Effect.gen(function* () {
  const magicNumber = yield* MagicNumber
  console.log(`The magic number is ${magicNumber.value}`)
})

Effect.runPromise(program.pipe(Effect.provide(MagicNumber.Default)))
// The magic number is 42
```

**Example** (Defining a Service with a Synchronous Constructor)

```ts twoslash
import { Effect, Random } from "effect"

class Sync extends Effect.Service<Sync>()("Sync", {
  sync: () => ({
    next: Random.nextInt
  })
}) {}

//      ┌─── Effect<void, never, Sync>
//      ▼
const program = Effect.gen(function* () {
  const sync = yield* Sync
  const n = yield* sync.next
  console.log(`The number is ${n}`)
})

Effect.runPromise(program.pipe(Effect.provide(Sync.Default)))
// Example Output: The number is 3858843290019673
```

**Example** (Managing a Service with Lifecycle Control)

```ts twoslash
import { Effect, Console } from "effect"

class Scoped extends Effect.Service<Scoped>()("Scoped", {
  scoped: Effect.gen(function* () {
    // Acquire the resource and ensure it is properly released
    const resource = yield* Effect.acquireRelease(
      Console.log("Aquiring...").pipe(Effect.as("foo")),
      () => Console.log("Releasing...")
    )
    // Register a finalizer to run when the effect is completed
    yield* Effect.addFinalizer(() => Console.log("Shutting down"))
    return { resource }
  })
}) {}

//      ┌─── Effect<void, never, Scoped>
//      ▼
const program = Effect.gen(function* () {
  const resource = (yield* Scoped).resource
  console.log(`The resource is ${resource}`)
})

Effect.runPromise(
  program.pipe(
    Effect.provide(
      //       ┌─── Layer<Scoped, never, never>
      //       ▼
      Scoped.Default
    )
  )
)
/*
Aquiring...
The resource is foo
Shutting down
Releasing...
*/
```

The `Scoped.Default` layer does not require `Scope` as a dependency, since `Scoped` itself manages its lifecycle.

### Enabling Direct Method Access

By setting `accessors: true`, you can call service methods directly using the service tag instead of first extracting the service.

**Example** (Defining a Service with Direct Method Access)

```ts twoslash del={11-12} ins={13}
import { Effect, Random } from "effect"

class Sync extends Effect.Service<Sync>()("Sync", {
  sync: () => ({
    next: Random.nextInt
  }),
  accessors: true // Enables direct method access via the tag
}) {}

const program = Effect.gen(function* () {
  // const sync = yield* Sync
  // const n = yield* sync.next
  const n = yield* Sync.next // No need to extract the service first
  console.log(`The number is ${n}`)
})

Effect.runPromise(program.pipe(Effect.provide(Sync.Default)))
// Example Output: The number is 3858843290019673
```

Direct method access does not work with generic methods.

### Effect.Service vs Context.Tag

Both `Effect.Service` and `Context.Tag` are ways to model services in the Effect ecosystem. They serve similar purposes but target different use-cases.

| Feature                             | Effect.Service                                          | Context.Tag                               |
| ----------------------------------- | ------------------------------------------------------- | ----------------------------------------- |
| Tag creation                        | Generated for you (the class name acts as the tag)      | You declare the tag manually              |
| Default implementation              | **Required** - supplied inline (`effect`, `sync`, etc.) | **Optional** - can be supplied later      |
| Ready-made layers (`.Default`, ...) | Automatically generated                                 | You build layers yourself                 |
| Best suited for                     | Application code with a clear runtime implementation    | Library code or dynamically-scoped values |
| When no sensible default exists     | Not ideal; you would still have to invent one           | Preferred                                 |

**Key points**

- **Less boilerplate:** `Effect.Service` is syntactic sugar over `Context.Tag` plus the accompanying layer and helpers.
- **Default required:**
  A class that extends `Effect.Service` must declare **one** of the built-in constructors (`effect`, `sync`, `succeed`, or `scoped`). This baseline implementation becomes part of `MyService.Default`, so any code that imports the service can run without providing extra layers.
  That is handy for app-level services where a sensible runtime implementation exists (logging, HTTP clients, real databases, and so on).
  If your service is inherently contextual (for example, a per-request database handle) or you are writing a library that should not assume an implementation, prefer `Context.Tag`: you publish only the tag and let callers supply the layer that makes sense in their environment.
- **The class *is* the tag:** When you create a class with `extends Effect.Service`, the class constructor itself acts as the tag. You can provide alternate implementations by supplying a value for that class when wiring layers:

  ```ts
  const mock = new MyService({
    /* mocked methods */
  })
  program.pipe(Effect.provideService(MyService, mock))
  ```
