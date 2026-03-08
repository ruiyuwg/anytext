## Resource Management

### MicroScope

In simple terms, a `MicroScope` represents the lifetime of one or more resources. When a scope is closed, the resources associated with it are guaranteed to be released.

With the `MicroScope` data type, you can:

- **Add finalizers**: A finalizer specifies the cleanup logic for a resource.
- **Close the scope**: When the scope is closed, all resources are released, and the finalizers are executed.

**Example** (Managing a Scope)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

const program =
  // create a new scope
  Micro.scopeMake.pipe(
    // add finalizer 1
    Micro.tap((scope) => scope.addFinalizer(() => log("finalizer 1"))),
    // add finalizer 2
    Micro.tap((scope) => scope.addFinalizer(() => log("finalizer 2"))),
    // close the scope
    Micro.andThen((scope) =>
      scope.close(Micro.exitSucceed("scope closed successfully"))
    )
  )

Micro.runPromise(program)
/*
Output:
finalizer 2 <-- finalizers are closed in reverse order
finalizer 1
*/
```

In the above example, finalizers are added to the scope, and when the scope is closed, the finalizers are **executed in the reverse order**.

This reverse order is important because it ensures that resources are released in the correct sequence.

For instance, if you acquire a network connection and then access a file on a remote server, the file must be closed before the network connection to avoid errors.

### addFinalizer

The `Micro.addFinalizer` function is a high-level API that allows you to add finalizers to the scope of an effect. A finalizer is a piece of code that is guaranteed to run when the associated scope is closed. The behavior of the finalizer can vary based on the `MicroExit` value, which represents how the scope was closed—whether successfully or with an error.

**Example** (Adding a Finalizer on Success)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

//      ┌─── Micro<string, never, MicroScope>
//      ▼
const program = Micro.gen(function* () {
  yield* Micro.addFinalizer((exit) => log(`finalizer after ${exit._tag}`))
  return "some result"
})

//      ┌─── Micro<string, never, never>
//      ▼
const runnable = Micro.scoped(program)

Micro.runPromise(runnable).then(console.log, console.error)
/*
Output:
finalizer after Success
some result
*/
```

Next, let's explore how things behave in the event of a failure:

**Example** (Adding a Finalizer on Failure)

```ts twoslash
import { Micro } from "effect"

// Helper function to log a message
const log = (message: string) => Micro.sync(() => console.log(message))

const program = Micro.gen(function* () {
  yield* Micro.addFinalizer((exit) => log(`finalizer after ${exit._tag}`))
  return yield* Micro.fail("Uh oh!")
})

const runnable = Micro.scoped(program)

Micro.runPromiseExit(runnable).then(console.log)
/*
Output:
finalizer after Failure
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

### Defining Resources

We can define a resource using operators like `Micro.acquireRelease(acquire, release)`, which allows us to create a scoped value from an `acquire` and `release` workflow.

Every acquire release requires three actions:

- **Acquiring Resource**. An effect describing the acquisition of resource. For example, opening a file.
- **Using Resource**. An effect describing the actual process to produce a result. For example, counting the number of lines in a file.
- **Releasing Resource**. An effect describing the final step of releasing or cleaning up the resource. For example, closing a file.

The `Micro.acquireRelease` operator performs the `acquire` workflow **uninterruptibly**.
This is important because if we allowed interruption during resource acquisition we could be interrupted when the resource was partially acquired.

The guarantee of the `Micro.acquireRelease` operator is that if the `acquire` workflow successfully completes execution then the `release` workflow is guaranteed to be run when the `Scope` is closed.

**Example** (Defining a Simple Resource)

```ts twoslash
import { Micro } from "effect"

// Define an interface for a resource
interface MyResource {
  readonly contents: string
  readonly close: () => Promise<void>
}

// Simulate resource acquisition
const getMyResource = (): Promise<MyResource> =>
  Promise.resolve({
    contents: "lorem ipsum",
    close: () =>
      new Promise((resolve) => {
        console.log("Resource released")
        resolve()
      })
  })

// Define how the resource is acquired
const acquire = Micro.tryPromise({
  try: () =>
    getMyResource().then((res) => {
      console.log("Resource acquired")
      return res
    }),
  catch: () => new Error("getMyResourceError")
})

// Define how the resource is released
const release = (res: MyResource) => Micro.promise(() => res.close())

// Create the resource management workflow
//
//      ┌─── Micro<MyResource, Error, MicroScope>
//      ▼
const resource = Micro.acquireRelease(acquire, release)

//      ┌─── Micro<void, Error, never>
//      ▼
const program = Micro.scoped(
  Micro.gen(function* () {
    const res = yield* resource
    console.log(`content is ${res.contents}`)
  })
)

Micro.runPromise(program)
/*
Resource acquired
content is lorem ipsum
Resource released
*/
```

The `Micro.scoped` operator removes the `MicroScope` from the context, indicating that there are no longer any resources used by this workflow which require a scope.

### acquireUseRelease

The `Micro.acquireUseRelease(acquire, use, release)` function is a specialized version of the `Micro.acquireRelease` function that simplifies resource management by automatically handling the scoping of resources.

The main difference is that `acquireUseRelease` eliminates the need to manually call `Micro.scoped` to manage the resource's scope. It has additional knowledge about when you are done using the resource created with the `acquire` step. This is achieved by providing a `use` argument, which represents the function that operates on the acquired resource. As a result, `acquireUseRelease` can automatically determine when it should execute the release step.

**Example** (Automatically Managing Resource Lifetime)

```ts twoslash
import { Micro } from "effect"

// Define the interface for the resource
interface MyResource {
  readonly contents: string
  readonly close: () => Promise<void>
}

// Simulate getting the resource
const getMyResource = (): Promise<MyResource> =>
  Promise.resolve({
    contents: "lorem ipsum",
    close: () =>
      new Promise((resolve) => {
        console.log("Resource released")
        resolve()
      })
  })

// Define the acquisition of the resource with error handling
const acquire = Micro.tryPromise({
  try: () =>
    getMyResource().then((res) => {
      console.log("Resource acquired")
      return res
    }),
  catch: () => new Error("getMyResourceError")
})

// Define the release of the resource
const release = (res: MyResource) => Micro.promise(() => res.close())

const use = (res: MyResource) =>
  Micro.sync(() => console.log(`content is ${res.contents}`))

//      ┌─── Micro<void, Error, never>
//      ▼
const program = Micro.acquireUseRelease(acquire, use, release)

Micro.runPromise(program)
/*
Resource acquired
content is lorem ipsum
Resource released
*/
```
