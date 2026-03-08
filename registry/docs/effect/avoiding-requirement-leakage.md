## Avoiding Requirement Leakage

When constructing the `Database` service, it's important to avoid exposing the dependencies on `Config` and `Logger` within the `Database` interface.

You might be tempted to define the `Database` service as follows:

**Example** (Leaking Dependencies in the Service Interface)

```ts twoslash "Config | Logger"
import { Effect, Context } from "effect"

// Declaring a tag for the Config service
class Config extends Context.Tag("Config")<Config, {}>() {}

// Declaring a tag for the Logger service
class Logger extends Context.Tag("Logger")<Logger, {}>() {}

// Declaring a tag for the Database service
class Database extends Context.Tag("Database")<
  Database,
  {
    // ❌ Avoid exposing Config and Logger as a requirement
    readonly query: (
      sql: string
    ) => Effect.Effect<unknown, never, Config | Logger>
  }
>() {}
```

Here, the `query` function of the `Database` service requires both `Config` and `Logger`. This design leaks implementation details, making the `Database` service aware of its dependencies, which complicates testing and makes it difficult to mock.

Service functions should avoid requiring dependencies directly. In practice, service operations should have the `Requirements` parameter set to `never`:

```text showLineNumbers=false "never"
                         ┌─── No dependencies required
                         ▼
Effect<Success, Error, never>
```

To demonstrate the problem, let's create a test instance of the `Database` service:

**Example** (Creating a Test Instance with Leaked Dependencies)

```ts twoslash collapse={3-17}
import { Effect, Context } from "effect"

// Declaring a tag for the Config service
class Config extends Context.Tag("Config")<Config, {}>() {}

// Declaring a tag for the Logger service
class Logger extends Context.Tag("Logger")<Logger, {}>() {}

// Declaring a tag for the Database service
class Database extends Context.Tag("Database")<
  Database,
  {
    readonly query: (
      sql: string
    ) => Effect.Effect<unknown, never, Config | Logger>
  }
>() {}

// Declaring a test instance of the Database service
const DatabaseTest = Database.of({
  // Simulating a simple response
  query: (sql: string) => Effect.succeed([])
})

import * as assert from "node:assert"

// A test that uses the Database service
const test = Effect.gen(function* () {
  const database = yield* Database
  const result = yield* database.query("SELECT * FROM users")
  assert.deepStrictEqual(result, [])
})

//      ┌─── Effect<unknown, never, Config | Logger>
//      ▼
const incompleteTestSetup = test.pipe(
  // Attempt to provide only the Database service without Config and Logger
  Effect.provideService(Database, DatabaseTest)
)
```

Because the `Database` service interface directly includes dependencies on `Config` and `Logger`, it forces any test setup to include these services, even if they're irrelevant to the test. This adds unnecessary complexity and makes it difficult to write simple, isolated unit tests.

Instead of directly tying dependencies to the `Database` service interface, dependencies should be managed at the construction phase.

We can use **layers** to properly construct the `Database` service and manage its dependencies without leaking details into the interface.

When a service has its own requirements, it's best to separate
implementation details into layers. Layers act as **constructors for
creating the service**, allowing us to handle dependencies at the
construction level rather than the service level.
