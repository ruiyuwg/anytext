## Creating Layers

The `Layer` type is structured as follows:

```text showLineNumbers=false
        ┌─── The service to be created
        │                ┌─── The possible error
        │                │      ┌─── The required dependencies
        ▼                ▼      ▼
Layer<RequirementsOut, Error, RequirementsIn>
```

A `Layer` represents a blueprint for constructing a `RequirementsOut` (the service). It requires a `RequirementsIn` (dependencies) as input and may result in an error of type `Error` during the construction process.

| Parameter         | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| `RequirementsOut` | The service or resource to be created.                                     |
| `Error`           | The type of error that might occur during the construction of the service. |
| `RequirementsIn`  | The dependencies required to construct the service.                        |

By using layers, you can better organize your services, ensuring that their dependencies are clearly defined and separated from their implementation details.

For simplicity, let's assume that we won't encounter any errors during the value construction (meaning `Error = never`).

Now, let's determine how many layers we need to implement our dependency graph:

| Layer          | Dependencies                                               | Type                                       |
| -------------- | ---------------------------------------------------------- | ------------------------------------------ |
| `ConfigLive`   | The `Config` service does not depend on any other services | `Layer<Config>`                            |
| `LoggerLive`   | The `Logger` service depends on the `Config` service       | `Layer<Logger, never, Config>`             |
| `DatabaseLive` | The `Database` service depends on `Config` and `Logger`    | `Layer<Database, never, Config \| Logger>` |

A common convention when naming the `Layer` for a particular service is
to add a `Live` suffix for the "live" implementation and a `Test` suffix
for the "test" implementation. For example, for a `Database` service,
the `DatabaseLive` would be the layer you provide in your application
and the `DatabaseTest` would be the layer you provide in your tests.

When a service has multiple dependencies, they are represented as a **union type**. In our case, the `Database` service depends on both the `Config` and `Logger` services. Therefore, the type for the `DatabaseLive` layer will be:

```ts showLineNumbers=false "Config | Logger"
Layer<Database, never, Config | Logger>
```

### Config

The `Config` service does not depend on any other services, so `ConfigLive` will be the simplest layer to implement. Just like in the [Managing Services](/docs/requirements-management/services/) page, we must create a tag for the service. And because the service has no dependencies, we can create the layer directly using the `Layer.succeed` constructor:

```ts twoslash
import { Effect, Context, Layer } from "effect"

// Declaring a tag for the Config service
class Config extends Context.Tag("Config")<
  Config,
  {
    readonly getConfig: Effect.Effect<{
      readonly logLevel: string
      readonly connection: string
    }>
  }
>() {}

// Layer<Config, never, never>
const ConfigLive = Layer.succeed(
  Config,
  Config.of({
    getConfig: Effect.succeed({
      logLevel: "INFO",
      connection: "mysql://username:password@hostname:port/database_name"
    })
  })
)
```

Looking at the type of `ConfigLive` we can observe:

- `RequirementsOut` is `Config`, indicating that constructing the layer will produce a `Config` service
- `Error` is `never`, indicating that layer construction cannot fail
- `RequirementsIn` is `never`, indicating that the layer has no dependencies

Note that, to construct `ConfigLive`, we used the `Config.of`
constructor. However, this is merely a helper to ensure correct type inference
for the implementation. It's possible to skip this helper and construct the
implementation directly as a simple object:

```ts twoslash collapse={4-12}
import { Effect, Context, Layer } from "effect"

// Declaring a tag for the Config service
class Config extends Context.Tag("Config")<
  Config,
  {
    readonly getConfig: Effect.Effect<{
      readonly logLevel: string
      readonly connection: string
    }>
  }
>() {}

// Layer<Config, never, never>
const ConfigLive = Layer.succeed(Config, {
  getConfig: Effect.succeed({
    logLevel: "INFO",
    connection: "mysql://username:password@hostname:port/database_name"
  })
})
```

### Logger

Now we can move on to the implementation of the `Logger` service, which depends on the `Config` service to retrieve some configuration.

Just like we did in the [Managing Services](/docs/requirements-management/services/#using-the-service) page, we can yield the `Config` tag to "extract" the service from the context.

Given that using the `Config` tag is an effectful operation, we use `Layer.effect` to create a layer from the resulting effect.

```ts twoslash collapse={4-20}
import { Effect, Context, Layer } from "effect"

// Declaring a tag for the Config service
class Config extends Context.Tag("Config")<
  Config,
  {
    readonly getConfig: Effect.Effect<{
      readonly logLevel: string
      readonly connection: string
    }>
  }
>() {}

// Layer<Config, never, never>
const ConfigLive = Layer.succeed(Config, {
  getConfig: Effect.succeed({
    logLevel: "INFO",
    connection: "mysql://username:password@hostname:port/database_name"
  })
})

// Declaring a tag for the Logger service
class Logger extends Context.Tag("Logger")<
  Logger,
  { readonly log: (message: string) => Effect.Effect<void> }
>() {}

// Layer<Logger, never, Config>
const LoggerLive = Layer.effect(
  Logger,
  Effect.gen(function* () {
    const config = yield* Config
    return {
      log: (message) =>
        Effect.gen(function* () {
          const { logLevel } = yield* config.getConfig
          console.log(`[${logLevel}] ${message}`)
        })
    }
  })
)
```

Looking at the type of `LoggerLive`:

```ts showLineNumbers=false
Layer<Logger, never, Config>
```

we can observe that:

- `RequirementsOut` is `Logger`
- `Error` is `never`, indicating that layer construction cannot fail
- `RequirementsIn` is `Config`, indicating that the layer has a requirement

### Database

Finally, we can use our `Config` and `Logger` services to implement the `Database` service.

```ts twoslash collapse={4-20,23-41}
import { Effect, Context, Layer } from "effect"

// Declaring a tag for the Config service
class Config extends Context.Tag("Config")<
  Config,
  {
    readonly getConfig: Effect.Effect<{
      readonly logLevel: string
      readonly connection: string
    }>
  }
>() {}

// Layer<Config, never, never>
const ConfigLive = Layer.succeed(Config, {
  getConfig: Effect.succeed({
    logLevel: "INFO",
    connection: "mysql://username:password@hostname:port/database_name"
  })
})

// Declaring a tag for the Logger service
class Logger extends Context.Tag("Logger")<
  Logger,
  { readonly log: (message: string) => Effect.Effect<void> }
>() {}

// Layer<Logger, never, Config>
const LoggerLive = Layer.effect(
  Logger,
  Effect.gen(function* () {
    const config = yield* Config
    return {
      log: (message) =>
        Effect.gen(function* () {
          const { logLevel } = yield* config.getConfig
          console.log(`[${logLevel}] ${message}`)
        })
    }
  })
)

// Declaring a tag for the Database service
class Database extends Context.Tag("Database")<
  Database,
  { readonly query: (sql: string) => Effect.Effect<unknown> }
>() {}

// Layer<Database, never, Config | Logger>
const DatabaseLive = Layer.effect(
  Database,
  Effect.gen(function* () {
    const config = yield* Config
    const logger = yield* Logger
    return {
      query: (sql: string) =>
        Effect.gen(function* () {
          yield* logger.log(`Executing query: ${sql}`)
          const { connection } = yield* config.getConfig
          return { result: `Results from ${connection}` }
        })
    }
  })
)
```

Looking at the type of `DatabaseLive`:

```ts showLineNumbers=false
Layer<Database, never, Config | Logger>
```

we can observe that the `RequirementsIn` type is `Config | Logger`, i.e., the `Database` service requires both `Config` and `Logger` services.
