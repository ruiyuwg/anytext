# [Micro for Effect Users](https://effect.website/docs/micro/effect-users/)

## Overview

import { Aside } from "@astrojs/starlight/components"

The Micro module is currently in its experimental stages. We encourage
your feedback to further improve its features.

The Micro module is designed as a lighter alternative to the standard Effect module, tailored for situations where it is beneficial to reduce the bundle size.

This module is standalone and does not include more complex functionalities such as [Layer](/docs/requirements-management/layers/), [Ref](/docs/state-management/ref/), [Queue](/docs/concurrency/queue/), and [Deferred](/docs/concurrency/deferred/). This feature set makes Micro especially suitable for libraries that wish to utilize Effect functionalities while keeping the bundle size to a minimum, particularly for those aiming to provide `Promise`-based APIs.

Micro also supports use cases where a client application uses Micro, and a server employs the full suite of Effect features, maintaining both compatibility and logical consistency across various application components.

Integrating Micro adds a minimal footprint to your bundle, starting at **5kb gzipped**, which may increase depending on the features you use.

Utilizing major Effect modules beyond basic data modules like `Option`,
`Either`, `Array`, will incorporate the Effect runtime into your bundle,
negating the benefits of Micro.

## Importing Micro

Micro is a part of the Effect library and can be imported just like any other module:

```ts showLineNumbers=false
import { Micro } from "effect"
```

You can also import it using a namespace import like this:

```ts showLineNumbers=false
import * as Micro from "effect/Micro"
```

Both forms of import allow you to access the functionalities provided by the `Micro` module.

However an important consideration is **tree shaking**, which refers to a process that eliminates unused code during the bundling of your application.
Named imports may generate tree shaking issues when a bundler doesn't support deep scope analysis.

Here are some bundlers that support deep scope analysis and thus don't have issues with named imports:

- Rollup
- Webpack 5+

## Main Types

### Micro

The `Micro` type uses three type parameters:

```text showLineNumbers=false
        ┌─── Represents the success type
        │        ┌─── Represents the error type
        │        │      ┌─── Represents required dependencies
        ▼        ▼      ▼
Micro<Success, Error, Requirements>
```

which mirror those of the `Effect` type.

### MicroExit

The `MicroExit` type is a streamlined version of the [Exit](/docs/data-types/exit/) type, designed to capture the outcome of a `Micro` computation.
It can either be successful, containing a value of type `A`, or it can fail, containing an error of type `E` wrapped in a `MicroCause`.

```ts showLineNumbers=false
type MicroExit<A, E> = MicroExit.Success<A, E> | MicroExit.Failure<A, E>
```

### MicroCause

The `MicroCause` type is a streamlined version of the [Cause](/docs/data-types/cause/) type.

Similar to how `Cause` is a union of types, `MicroCause` comes in three forms:

```ts showLineNumbers=false
type MicroCause<E> = Die | Fail<E> | Interrupt
```

| Variant     | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| `Die`       | Indicates an unforeseen defect that wasn't planned for in the system's logic.               |
| `Fail<E>`   | Covers anticipated errors that are recognized and typically handled within the application. |
| `Interrupt` | Signifies an operation that has been purposefully stopped.                                  |

### MicroSchedule

The `MicroSchedule` type is a streamlined version of the [Schedule](/docs/scheduling/introduction/) type.

```ts showLineNumbers=false
type MicroSchedule = (attempt: number, elapsed: number) => Option<number>
```

Represents a function that can be used to calculate the delay between
repeats.

The function takes the current attempt number and the elapsed time since
the first attempt, and returns the delay for the next attempt. If the
function returns `None`, the repetition will stop.

## How to Use This Guide

Below, you'll find a series of comparisons between the functionalities of `Effect` and `Micro`. Each table lists a functionality of `Effect` alongside its counterpart in `Micro`. The icons used have the following meanings:

- ⚠️: The feature is available in `Micro`, but with some differences from `Effect`.
- ❌: The feature is not available in `Effect`.

## Creating Effects

| Effect                 | Micro                | ⚠️                                   |
| ---------------------- | -------------------- | ------------------------------------ |
| `Effect.try`           | `Micro.try`          | requires a `try` block               |
| `Effect.tryPromise`    | `Micro.tryPromise`   | requires a `try` block               |
| `Effect.sleep`         | `Micro.sleep`        | only handles milliseconds            |
| `Effect.failCause`     | `Micro.failWith`     | uses `MicroCause` instead of `Cause` |
| `Effect.failCauseSync` | `Micro.failWithSync` | uses `MicroCause` instead of `Cause` |
| ❌                     | `Micro.make`         |                                      |
| ❌                     | `Micro.fromOption`   |                                      |
| ❌                     | `Micro.fromEither`   |                                      |

## Running Effects

| Effect                  | Micro                  | ⚠️                                                 |
| ----------------------- | ---------------------- | -------------------------------------------------- |
| `Effect.runSyncExit`    | `Micro.runSyncExit`    | returns a `MicroExit` instead of an `Exit`         |
| `Effect.runPromiseExit` | `Micro.runPromiseExit` | returns a `MicroExit` instead of an `Exit`         |
| `Effect.runFork`        | `Micro.runFork`        | returns a `MicroFiber` instead of a `RuntimeFiber` |

### runSyncExit

The `Micro.runSyncExit` function is used to execute an Effect synchronously, which means it runs immediately and returns the result as a [MicroExit](#microexit).

**Example** (Handling Results as MicroExit)

```ts twoslash
import { Micro } from "effect"

const result1 = Micro.runSyncExit(Micro.succeed(1))
console.log(result1)
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": 1
}
*/

const result2 = Micro.runSyncExit(Micro.fail("my error"))
console.log(result2)
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Failure",
  "cause": {
    "_tag": "Fail",
    "traces": [],
    "name": "MicroCause.Fail",
    "error": "my error"
  }
}
*/
```

### runPromiseExit

The `Micro.runPromiseExit` function is used to execute an Effect and obtain the result as a `Promise` that resolves to a [MicroExit](#microexit).

**Example** (Handling Results as MicroExit)

```ts twoslash
import { Micro } from "effect"

Micro.runPromiseExit(Micro.succeed(1)).then(console.log)
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": 1
}
*/

Micro.runPromiseExit(Micro.fail("my error")).then(console.log)
/*
Output:
{
  "_id": "MicroExit",
  "_tag": "Failure",
  "cause": {
    "_tag": "Fail",
    "traces": [],
    "name": "MicroCause.Fail",
    "error": "my error"
  }
}
*/
```

### runFork

The `Micro.runFork` function executes the effect and return a `MicroFiber` that can be awaited, joined, or aborted.

You can listen for the result by adding an observer using the `addObserver` method.

**Example** (Observing an Asynchronous Effect)

```ts twoslash
import { Micro } from "effect"

//      ┌─── MicroFiber<number, never>
//      ▼
const fiber = Micro.succeed(42).pipe(Micro.delay(1000), Micro.runFork)

// Attach an observer to log the result when the effect completes
fiber.addObserver((result) => {
  console.log(result)
})

console.log("observing...")
/*
Output:
observing...
{
  "_id": "MicroExit",
  "_tag": "Success",
  "value": 42
}
*/
```

## Building Pipelines

| Effect             | Micro             | ⚠️                                                      |
| ------------------ | ----------------- | ------------------------------------------------------- |
| `Effect.andThen`   | `Micro.andThen`   | doesn't handle `Promise` or `() => Promise` as argument |
| `Effect.tap`       | `Micro.tap`       | doesn't handle `() => Promise` as argument              |
| `Effect.all`       | `Micro.all`       | no `batching` and `mode` options                        |
| `Effect.forEach`   | `Micro.forEach`   | no `batching` option                                    |
| `Effect.filter`    | `Micro.filter`    | no `batching` option                                    |
| `Effect.filterMap` | `Micro.filterMap` | the filter is effectful                                 |

## Expected Errors

| Effect        | Micro        | ⚠️                                         |
| ------------- | ------------ | ------------------------------------------ |
| `Effect.exit` | `Micro.exit` | returns a `MicroExit` instead of an `Exit` |

## Unexpected Errors

| Effect | Micro                |     |
| ------ | -------------------- | --- |
| ❌     | `Micro.catchCauseIf` |     |

## Timing Out

| Effect | Micro                 |     |
| ------ | --------------------- | --- |
| ❌     | `Micro.timeoutOrElse` |     |

## Requirements Management

To access a service while using `Micro.gen`, you need to wrap the service tag using the `Micro.service` function:

**Example** (Accessing a Service in `Micro.gen`)

```ts twoslash
import { Micro, Context } from "effect"

class Random extends Context.Tag("MyRandomService")<
  Random,
  { readonly next: Micro.Micro<number> }
>() {}

const program = Micro.gen(function* () {
  // const random = yield* Random // this doesn't work
  const random = yield* Micro.service(Random)
  const randomNumber = yield* random.next
  console.log(`random number: ${randomNumber}`)
})

const runnable = Micro.provideService(program, Random, {
  next: Micro.sync(() => Math.random())
})

Micro.runPromise(runnable)
/*
Example Output:
random number: 0.8241872233134417
*/
```

## Scope

| Effect       | Micro             | ⚠️                                          |
| ------------ | ----------------- | ------------------------------------------- |
| `Scope`      | `MicroScope`      | returns a `MicroScope` instead of a `Scope` |
| `Scope.make` | `Micro.scopeMake` | returns a `MicroScope` instead of a `Scope` |

## Retrying

| Effect         | Micro         | ⚠️                  |
| -------------- | ------------- | ------------------- |
| `Effect.retry` | `Micro.retry` | different `options` |

## Repetition

| Effect          | Micro              | ⚠️                  |
| --------------- | ------------------ | ------------------- |
| `Effect.repeat` | `Micro.repeat`     | different `options` |
| ❌              | `Micro.repeatExit` |                     |

## Timing out

| Effect | Micro                 |     |
| ------ | --------------------- | --- |
| ❌     | `Micro.timeoutOrElse` |     |

## Sandboxing

| Effect           | Micro           | ⚠️                                              |
| ---------------- | --------------- | ----------------------------------------------- |
| `Effect.sandbox` | `Micro.sandbox` | returns a `MicroCause<E>` instead of `Cause<E>` |

## Error Channel Operations

| Effect                 | Micro                    | ⚠️                                    |
| ---------------------- | ------------------------ | ------------------------------------- |
| ❌                     | `Micro.filterOrFailWith` |                                       |
| `Effect.tapErrorCause` | `Micro.tapErrorCause`    | `MicroCause<E>` instead of `Cause<E>` |
| ❌                     | `Micro.tapCauseIf`       |                                       |
| `Effect.tapDefect`     | `Micro.tapDefect`        | `unknown` instead of `Cause<never>`   |

## Requirements Management

| Effect           | Micro                  | ⚠️                     |
| ---------------- | ---------------------- | ---------------------- |
| `Effect.provide` | `Micro.provideContext` | only handles `Context` |
| ❌               | `Micro.provideScope`   |                        |
| ❌               | `Micro.service`        |                        |

## Scoping, Resources and Finalization

| Effect                     | Micro                     | ⚠️                                       |
| -------------------------- | ------------------------- | ---------------------------------------- |
| `Effect.addFinalizer`      | `Micro.addFinalizer`      | `MicroExit` instead of `Exit` and no `R` |
| `Effect.acquireRelease`    | `Micro.acquireRelease`    | `MicroExit` instead of `Exit`            |
| `Effect.acquireUseRelease` | `Micro.acquireUseRelease` | `MicroExit` instead of `Exit`            |
| `Effect.onExit`            | `Micro.onExit`            | `MicroExit` instead of `Exit`            |
| `Effect.onError`           | `Micro.onError`           | uses `MicroCause` instead of `Cause`     |
| ❌                         | `Micro.onExitIf`          |                                          |

## Concurrency

| Effect              | Micro              | ⚠️                                     |
| ------------------- | ------------------ | -------------------------------------- |
| `Effect.fork`       | `Micro.fork`       | `MicroFiber` instead of `RuntimeFiber` |
| `Effect.forkDaemon` | `Micro.forkDaemon` | `MicroFiber` instead of `RuntimeFiber` |
| `Effect.forkIn`     | `Micro.forkIn`     | `MicroFiber` instead of `RuntimeFiber` |
| `Effect.forkScoped` | `Micro.forkScoped` | `MicroFiber` instead of `RuntimeFiber` |

# [Getting Started with Micro](https://effect.website/docs/micro/new-users/)

## Overview

import {
Aside,
Tabs,
TabItem,
Steps
} from "@astrojs/starlight/components"

The Micro module is currently in its experimental stages. We encourage
your feedback to further improve its features.

The Micro module is designed as a lighter alternative to the standard Effect module, tailored for situations where it is beneficial to reduce the bundle size.

This module is standalone and does not include more complex functionalities such as [Layer](/docs/requirements-management/layers/), [Ref](/docs/state-management/ref/), [Queue](/docs/concurrency/queue/), and [Deferred](/docs/concurrency/deferred/). This feature set makes Micro especially suitable for libraries that wish to utilize Effect functionalities while keeping the bundle size to a minimum, particularly for those aiming to provide `Promise`-based APIs.

Micro also supports use cases where a client application uses Micro, and a server employs the full suite of Effect features, maintaining both compatibility and logical consistency across various application components.

Integrating Micro adds a minimal footprint to your bundle, starting at **5kb gzipped**, which may increase depending on the features you use.

Utilizing major Effect modules beyond basic data modules like `Option`,
`Either`, `Array`, will incorporate the Effect runtime into your bundle,
negating the benefits of Micro.

## Importing Micro

Before you start, make sure you have completed the following setup:

Install the `effect` library in your project. If it is not already installed, you can add it using npm with the following command:

```sh showLineNumbers=false
npm install effect
```

```sh showLineNumbers=false
pnpm add effect
```

```sh showLineNumbers=false
yarn add effect
```

```sh showLineNumbers=false
bun add effect
```

```sh showLineNumbers=false
deno add npm:effect
```

Micro is a part of the Effect library and can be imported just like any other module:

```ts showLineNumbers=false
import { Micro } from "effect"
```

You can also import it using a namespace import like this:

```ts showLineNumbers=false
import * as Micro from "effect/Micro"
```

Both forms of import allow you to access the functionalities provided by the `Micro` module.

However an important consideration is **tree shaking**, which refers to a process that eliminates unused code during the bundling of your application.
Named imports may generate tree shaking issues when a bundler doesn't support deep scope analysis.

Here are some bundlers that support deep scope analysis and thus don't have issues with named imports:

- Rollup
- Webpack 5+

## The Micro Type

Here is the general form of a `Micro`:

```text showLineNumbers=false
        ┌─── Represents the success type
        │        ┌─── Represents the error type
        │        │      ┌─── Represents required dependencies
        ▼        ▼      ▼
Micro<Success, Error, Requirements>
```

which mirror those of the `Effect` type:

| Parameter        | Description                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Success**      | Represents the type of value that an effect can succeed with when executed. If this type parameter is `void`, it means the effect produces no useful information, while if it is `never`, it means the effect runs forever (or until failure). |
| **Error**        | Represents the expected errors that can occur when executing an effect. If this type parameter is `never`, it means the effect cannot fail, because there are no values of type `never`.                                                       |
| **Requirements** | Represents the contextual data required by the effect to be executed. This data is stored in a collection named `Context`. If this type parameter is `never`, it means the effect has no requirements and the `Context` collection is empty.   |

## The MicroExit Type

The `MicroExit` type is used to represent the result of a `Micro` computation.
It can either be successful, containing a value of type `A`, or it can fail, containing an error of type `E` wrapped in a `MicroCause`.

```ts showLineNumbers=false
type MicroExit<A, E> = MicroExit.Success<A, E> | MicroExit.Failure<A, E>
```

## The MicroCause Type

The `MicroCause` type describes the different reasons why an effect may fail.

`MicroCause` comes in three forms:

```ts showLineNumbers=false
type MicroCause<E> = Die | Fail<E> | Interrupt
```

| Variant     | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| `Die`       | Indicates an unforeseen defect that wasn't planned for in the system's logic.               |
| `Fail<E>`   | Covers anticipated errors that are recognized and typically handled within the application. |
| `Interrupt` | Signifies an operation that has been purposefully stopped.                                  |
