# Type-Safe SQL with Kysely

Supabase Edge Functions can [connect directly to your Postgres database](/docs/guides/functions/connect-to-postgres) to execute SQL queries. [Kysely](https://github.com/kysely-org/kysely#kysely) is a type-safe and autocompletion-friendly typescript SQL query builder.

Combining Kysely with Deno Postgres gives you a convenient developer experience for interacting directly with your Postgres database.

## Code

Find the example on [GitHub](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/kysely-postgres)

Get your database connection credentials from the project's [**Connect** panel](/dashboard/project/_/?showConnect=true) and store them in an `.env` file:

```bash .env
DB_HOSTNAME=
DB_PASSWORD=
DB_SSL_CERT="-----BEGIN CERTIFICATE-----
GET YOUR CERT FROM YOUR PROJECT DASHBOARD
-----END CERTIFICATE-----"
```

Create a `DenoPostgresDriver.ts` file to manage the connection to Postgres via [deno-postgres](https://deno-postgres.com/):

```ts DenoPostgresDriver.ts
import {
  CompiledQuery,
  DatabaseConnection,
  Driver,
  PostgresCursorConstructor,
  QueryResult,
  TransactionSettings,
} from 'https://esm.sh/kysely@0.23.4'
import { freeze, isFunction } from 'https://esm.sh/kysely@0.23.4/dist/esm/util/object-utils.js'
import { extendStackTrace } from 'https://esm.sh/kysely@0.23.4/dist/esm/util/stack-trace-utils.js'
import { Pool, PoolClient } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'

export interface PostgresDialectConfig {
  pool: Pool | (() => Promise<Pool>)
  cursor?: PostgresCursorConstructor
  onCreateConnection?: (connection: DatabaseConnection) => Promise<void>
}

const PRIVATE_RELEASE_METHOD = Symbol()

export class PostgresDriver implements Driver {
  readonly #config: PostgresDialectConfig
  readonly #connections = new WeakMap<PoolClient, DatabaseConnection>()
  #pool?: Pool

  constructor(config: PostgresDialectConfig) {
    this.#config = freeze({ ...config })
  }

  async init(): Promise<void> {
    this.#pool = isFunction(this.#config.pool) ? await this.#config.pool() : this.#config.pool
  }

  async acquireConnection(): Promise<DatabaseConnection> {
    const client = await this.#pool!.connect()
    let connection = this.#connections.get(client)

    if (!connection) {
      connection = new PostgresConnection(client, {
        cursor: this.#config.cursor ?? null,
      })
      this.#connections.set(client, connection)

      // The driver must take care of calling `onCreateConnection` when a new
      // connection is created. The `pg` module doesn't provide an async hook
      // for the connection creation. We need to call the method explicitly.
      if (this.#config?.onCreateConnection) {
        await this.#config.onCreateConnection(connection)
      }
    }

    return connection
  }

  async beginTransaction(
    connection: DatabaseConnection,
    settings: TransactionSettings
  ): Promise<void> {
    if (settings.isolationLevel) {
      await connection.executeQuery(
        CompiledQuery.raw(`start transaction isolation level ${settings.isolationLevel}`)
      )
    } else {
      await connection.executeQuery(CompiledQuery.raw('begin'))
    }
  }

  async commitTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw('commit'))
  }

  async rollbackTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw('rollback'))
  }

  async releaseConnection(connection: PostgresConnection): Promise<void> {
    connection[PRIVATE_RELEASE_METHOD]()
  }

  async destroy(): Promise<void> {
    if (this.#pool) {
      const pool = this.#pool
      this.#pool = undefined
      await pool.end()
    }
  }
}

interface PostgresConnectionOptions {
  cursor: PostgresCursorConstructor | null
}

class PostgresConnection implements DatabaseConnection {
  #client: PoolClient
  #options: PostgresConnectionOptions

  constructor(client: PoolClient, options: PostgresConnectionOptions) {
    this.#client = client
    this.#options = options
  }

  async executeQuery<O>(compiledQuery: CompiledQuery): Promise<QueryResult<O>> {
    try {
      const result = await this.#client.queryObject<O>(compiledQuery.sql, [
        ...compiledQuery.parameters,
      ])

      if (
        result.command === 'INSERT' ||
        result.command === 'UPDATE' ||
        result.command === 'DELETE'
      ) {
        const numAffectedRows = BigInt(result.rowCount || 0)

        return {
          numUpdatedOrDeletedRows: numAffectedRows,
          numAffectedRows,
          rows: result.rows ?? [],
        } as any
      }

      return {
        rows: result.rows ?? [],
      }
    } catch (err) {
      throw extendStackTrace(err, new Error())
    }
  }

  async *streamQuery<O>(
    _compiledQuery: CompiledQuery,
    chunkSize: number
  ): AsyncIterableIterator<QueryResult<O>> {
    if (!this.#options.cursor) {
      throw new Error(
        "'cursor' is not present in your postgres dialect config. It's required to make streaming work in postgres."
      )
    }

    if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
      throw new Error('chunkSize must be a positive integer')
    }

    // stream not available
    return null
  }

  [PRIVATE_RELEASE_METHOD](): void {
    this.#client.release()
  }
}
```

Create an `index.ts` file to execute a query on incoming requests:

```ts index.ts
import { serve } from 'https://deno.land/std@0.175.0/http/server.ts'
import { Pool } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'
import {
  Kysely,
  Generated,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler,
} from 'https://esm.sh/kysely@0.23.4'
import { PostgresDriver } from './DenoPostgresDriver.ts'

console.log(`Function "kysely-postgres" up and running!`)

interface AnimalTable {
  id: Generated<bigint>
  animal: string
  created_at: Date
}

// Keys of this interface are table names.
interface Database {
  animals: AnimalTable
}

// Create a database pool with one connection.
const pool = new Pool(
  {
    tls: { caCertificates: [Deno.env.get('DB_SSL_CERT')!] },
    database: 'postgres',
    hostname: Deno.env.get('DB_HOSTNAME'),
    user: 'postgres',
    port: 5432,
    password: Deno.env.get('DB_PASSWORD'),
  },
  1
)

// You'd create one of these when you start your app.
const db = new Kysely<Database>({
  dialect: {
    createAdapter() {
      return new PostgresAdapter()
    },
    createDriver() {
      return new PostgresDriver({ pool })
    },
    createIntrospector(db: Kysely<unknown>) {
      return new PostgresIntrospector(db)
    },
    createQueryCompiler() {
      return new PostgresQueryCompiler()
    },
  },
})

serve(async (_req) => {
  try {
    // Run a query
    const animals = await db.selectFrom('animals').select(['id', 'animal', 'created_at']).execute()

    // Neat, it's properly typed \o/
    console.log(animals[0].created_at.getFullYear())

    // Encode the result as pretty printed JSON
    const body = JSON.stringify(
      animals,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      2
    )

    // Return the response with the correct content type header
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response(String(err?.message ?? err), { status: 500 })
  }
})
```

# Limits

Limits applied Edge Functions in Supabase's hosted platform.

## Runtime limits

- Maximum Memory: 256MB
- Maximum Duration (Wall clock limit):
  This is the duration an Edge Function worker will stay active. During this period, a worker can serve multiple requests or process background tasks.
  - Free plan: 150s
  - Paid plans: 400s
- Maximum CPU Time: 2s (Amount of actual time spent on the CPU per request - does not include async I/O.)
- Request idle timeout: 150s (If an Edge Function doesn't send a response before the timeout, 504 Gateway Timeout will be returned)

## Platform limits

- Maximum Function Size: 20MB (After bundling using CLI)
- Maximum no. of Functions per project:
  - Free: 100
  - Pro: 500
  - Team: 1000
  - Enterprise: Unlimited
- Maximum log message length: 10,000 characters
- Log event threshold: 100 events per 10 seconds
- Recursive/Nested Function Calling: ~5000 requests per minute [more details](/docs/guides/functions/recursive-functions)

### Secrets

- Maximum number of secrets per project: **100**
- Secret name length: up to **256** characters
- Maximum secret size: **48 KiB** (**24,576** characters)
- Names must NOT start with the prefix `SUPABASE_` (this prefix is reserved).

## Other limits & restrictions

- Outgoing connections to ports `25` and `587` are not allowed.
- Serving of HTML content is only supported with [custom domains](/docs/reference/cli/supabase-domains) (Otherwise `GET` requests that return `text/html` will be rewritten to `text/plain`).
- Web Worker API (or Node `vm` API) are not available.
- Static files cannot be deployed using the API flag. You need to build them with [Docker on the CLI](/docs/guides/functions/quickstart#step-6-deploy-to-production).
- Node Libraries that require multithreading are not supported. Examples: [`libvips`](https://github.com/libvips/libvips), [sharp](https://github.com/lovell/sharp).
