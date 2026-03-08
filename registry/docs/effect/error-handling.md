## Error Handling

When constructing layers, it is important to handle potential errors. The Effect library provides tools like `Layer.catchAll` and `Layer.orElse` to manage errors and define fallback layers in case of failure.

### catchAll

The `Layer.catchAll` function allows you to recover from errors during layer construction by specifying a fallback layer. This can be useful for handling specific error cases and ensuring the application can continue with an alternative setup.

**Example** (Recovering from Errors During Layer Construction)

```ts twoslash
import { Config, Context, Effect, Layer } from "effect"

class HTTPServer extends Context.Tag("HTTPServer")<HTTPServer, void>() {}

// Simulating an HTTP server
const server = Layer.effect(
  HTTPServer,
  Effect.gen(function* () {
    const host = yield* Config.string("HOST")
    console.log(`Listening on http://localhost:${host}`)
  })
).pipe(
  // Recover from errors during layer construction
  Layer.catchAll((configError) =>
    Layer.effect(
      HTTPServer,
      Effect.gen(function* () {
        console.log(`Recovering from error:\n${configError}`)
        console.log(`Listening on http://localhost:3000`)
      })
    )
  )
)

Effect.runFork(Layer.launch(server))
/*
Output:
Recovering from error:
(Missing data at HOST: "Expected HOST to exist in the process context")
Listening on http://localhost:3000
...
*/
```

### orElse

The `Layer.orElse` function provides a simpler way to fall back to an alternative layer if the initial layer fails. Unlike `Layer.catchAll`, it does not receive the error as input. Use this when you only need to provide a default layer without reacting to specific errors.

**Example** (Fallback to an Alternative Layer)

```ts twoslash
import { Config, Context, Effect, Layer } from "effect"

class Database extends Context.Tag("Database")<Database, void>() {}

// Simulating a database connection
const postgresDatabaseLayer = Layer.effect(
  Database,
  Effect.gen(function* () {
    const databaseConnectionString = yield* Config.string(
      "CONNECTION_STRING"
    )
    console.log(
      `Connecting to database with: ${databaseConnectionString}`
    )
  })
)

// Simulating an in-memory database connection
const inMemoryDatabaseLayer = Layer.effect(
  Database,
  Effect.gen(function* () {
    console.log(`Connecting to in-memory database`)
  })
)

// Fallback to in-memory database if PostgreSQL connection fails
const database = postgresDatabaseLayer.pipe(
  Layer.orElse(() => inMemoryDatabaseLayer)
)

Effect.runFork(Layer.launch(database))
/*
Output:
Connecting to in-memory database
...
*/
```
