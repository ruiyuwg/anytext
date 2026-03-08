# Integrating with Supabase Database (Postgres)

Connect to your Postgres database from Edge Functions.

Connect to your Postgres database from an Edge Function by using the `supabase-js` client.
You can also use other Postgres clients like [Deno Postgres](https://deno.land/x/postgres)

***

## Using supabase-js

The `supabase-js` client handles authorization with Row Level Security and automatically formats responses as JSON. This is the recommended approach for most applications:

```ts index.ts
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (req) => {
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_PUBLISHABLE_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { data, error } = await supabase.from('countries').select('*')

    if (error) {
      throw error
    }

    return new Response(JSON.stringify({ data }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(String(err?.message ?? err), { status: 500 })
  }
})
```

This enables:

- Automatic Row Level Security enforcement
- Built-in JSON serialization
- Consistent error handling
- TypeScript support for database schema

***

## Using a Postgres client

Because Edge Functions are a server-side technology, it's safe to connect directly to your database using any popular Postgres client. This means you can run raw SQL from your Edge Functions.

Here is how you can connect to the database using Deno Postgres driver and run raw SQL. Check out the [full example](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/postgres-on-the-edge).

```typescript
import { Pool } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'

// Create a database pool with one connection.
const pool = new Pool(
  {
    tls: { enabled: false },
    database: 'postgres',
    hostname: Deno.env.get('DB_HOSTNAME'),
    user: Deno.env.get('DB_USER'),
    port: 6543,
    password: Deno.env.get('DB_PASSWORD'),
  },
  1
)

Deno.serve(async (_req) => {
  try {
    // Grab a connection from the pool
    const connection = await pool.connect()

    try {
      // Run a query
      const result = await connection.queryObject`SELECT * FROM animals`
      const animals = result.rows // [{ id: 1, name: "Lion" }, ...]

      // Encode the result as pretty printed JSON
      const body = JSON.stringify(
        animals,
        (_key, value) => (typeof value === 'bigint' ? value.toString() : value),
        2
      )

      // Return the response with the correct content type header
      return new Response(body, {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
    } finally {
      // Release the connection back into the pool
      connection.release()
    }
  } catch (err) {
    console.error(err)
    return new Response(String(err?.message ?? err), { status: 500 })
  }
})
```

***

## Using Drizzle

You can use Drizzle together with [Postgres.js](https://github.com/porsager/postgres). Both can be loaded directly from npm:

**Set up dependencies in `import_map.json`**:

```json supabase/functions/import_map.json
{
  "imports": {
    "drizzle-orm": "npm:drizzle-orm@0.29.1",
    "drizzle-orm/": "npm:/drizzle-orm@0.29.1/",
    "postgres": "npm:postgres@3.4.3"
  }
}
```

**Use in your function**:

```ts supabase/functions/drizzle/index.ts
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { countries } from '../_shared/schema.ts'

const connectionString = Deno.env.get('SUPABASE_DB_URL')!

Deno.serve(async (_req) => {
  // Disable prefetch as it is not supported for "Transaction" pool mode
  const client = postgres(connectionString, { prepare: false })
  const db = drizzle(client)
  const allCountries = await db.select().from(countries)

  return Response.json(allCountries)
})
```

You can find the full example on [GitHub](https://github.com/thorwebdev/edgy-drizzle).

***

## SSL connections

### Production

Deployed edge functions are pre-configured to use SSL for connections to the Supabase database. You don't need to add any extra configurations.

### Local development

If you want to use SSL connections during local development, follow these steps:

1. Download the SSL certificate from [Database Settings](/dashboard/project/_/database/settings)
2. Add to your [local .env file](/docs/guides/functions/secrets), add these two variables:

```bash
SSL_CERT_FILE=/path/to/cert.crt # set the path to the downloaded cert
DENO_TLS_CA_STORE=mozilla,system
```

Then, restart your local development server:

```bash
supabase functions serve your-function
```
