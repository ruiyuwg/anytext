# Execution flow

The following page gives a **simplified** overview of Kysely's execution flow, from query building to querying the database. It is a nice introduction for anyone looking to understand how Kysely works under the hood. Knowing what your dependencies do and don't do is always a good idea!

This breakdown explains the journey from a type-safe method call in your application to receiving results from the database, as depicted in the diagram.

1. ### Immutable query building[​](#immutable-query-building "Direct link to Immutable query building")

   The process starts in your `App`. You interact with the `QueryBuilder` by calling its methods (`selectFrom`, `where`, etc.). Each call returns a *new* `QueryBuilder` instance containing an updated, immutable `QueryAST` (Abstract Syntax Tree), which is the internal representation of your SQL query.

2. ### Initiating execution[​](#initiating-execution "Direct link to Initiating execution")

   When you chain the final `.execute()` call, the `QueryBuilder` begins a multi-step execution process, commanding the `QueryExecutor` to perform distinct tasks.

3. ### Query Transformation[​](#query-transformation "Direct link to Query Transformation")

   First, the `QueryBuilder` instructs the `QueryExecutor` to process the `QueryAST`. The `QueryExecutor` iterates through all registered plugins, calling `transformQuery` on each. This allows plugins to modify the query structure before compilation. The final, transformed `QueryAST` is returned to the `QueryBuilder`.

4. ### Query Compilation[​](#query-compilation "Direct link to Query Compilation")

   Next, the `QueryBuilder` tells the `QueryExecutor` to compile the transformed AST. The `QueryExecutor` delegates this to the `Dialect`-specific `QueryCompiler`. The compiler traverses the AST and produces a `CompiledQuery` object (containing the final SQL string and parameters). This `CompiledQuery` is then returned to the `QueryBuilder`.

5. ### Execution & Connection Handling[​](#execution--connection-handling "Direct link to Execution & Connection Handling")

   The `QueryBuilder` now asks the `QueryExecutor` to execute the `CompiledQuery`.

   - The `QueryExecutor` requests a connection from Kysely's `Driver`.
   - The `Driver`'s job is to abstract away vendor-specific details. It communicates with the actual third-party `DatabaseDriver` — for example, the `pg` or `mysql2` npm package — to get a connection from its pool.
   - A `DatabaseConnection` object, which wraps the native connection, is returned to the `QueryExecutor`.

6. ### Database Query[​](#database-query "Direct link to Database Query")

   The `QueryExecutor` passes the `CompiledQuery` to the `DatabaseConnection` object, which executes it. The `DatabaseConnection` uses the underlying `DatabaseDriver` to send the SQL and parameters to the database for execution. The `DatabaseDriver` sends the raw results back. The `DatabaseConnection` standardizes these into a `QueryResult` object and returns it to the `QueryExecutor`. Immediately after, the connection is released back to the pool.

7. ### Result Transformation[​](#result-transformation "Direct link to Result Transformation")

   The `QueryResult` is then passed through the plugin system again. The `QueryExecutor` calls the `transformResult` method on each plugin, allowing for final modifications to the results before they are returned to the `App`.

8. ### Returning to the App[​](#returning-to-the-app "Direct link to Returning to the App")

   The final, transformed `QueryResult` is passed up from the `QueryExecutor` to the `QueryBuilder`. The `QueryBuilder` then resolves the promise from the initial `.execute()` call, delivering the final, typed results to your `App`.

***

# Generating types

To work with Kysely, you're required to provide a database schema type definition to the Kysely constructor.

In many cases, defining your database schema definitions manually is good enough.

However, when building production applications, it's best to stay aligned with the database schema, by automatically generating the database schema type definitions.

There are several ways to do this using third-party libraries:

- [kysely-codegen](https://github.com/RobinBlomberg/kysely-codegen) - This library generates Kysely database schema type definitions by connecting to and introspecting your database. This library works with all built-in dialects.

- [prisma-kysely](https://github.com/valtyr/prisma-kysely) - This library generates Kysely database schema type definitions from your existing Prisma schemas.

- [kanel-kysely](https://github.com/kristiandupont/kanel/tree/main/packages/kanel-kysely) - This library generates Kysely database schema type definitions by connecting to and introspecting your database. This library extends Kanel which is a mature PostgreSQL-only type generator.

- [kysely-schema-generator](https://github.com/deanc/kysely-schema-generator) - This library generates Kysely database schema type definitions by connecting to and introspecting your database. Current MySQL only.

***
