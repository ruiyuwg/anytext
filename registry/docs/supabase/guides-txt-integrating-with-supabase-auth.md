# Integrating With Supabase Auth

Integrate Supabase Auth with Edge Functions

Edge Functions work with [Supabase Auth](/docs/guides/auth).

This allows you to:

- Automatically identify users through Legacy JWT tokens
- Enforce Row Level Security policies
- Integrate with your existing auth flow

## Setting up auth context

When a user makes a request to an Edge Function, you can use the `Authorization` header to set the Auth context in the Supabase client and enforce Row Level Security policies.

```js
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (req: Request) => {
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    // Create client with Auth context of the user that called the function.
    // This way your row-level-security (RLS) policies are applied.
    {
      global: {
        headers: { Authorization: req.headers.get('Authorization')! },
      },
    }
  );

  //...
})
```

This context setting happens in the `Deno.serve()` callback argument, so that the `Authorization` header is set for each individual request scope.

***

## Fetching the user

By getting the JWT from the `Authorization` header, you can provide the token to `getUser()` to fetch the user object to obtain metadata for the logged in user.

```js
Deno.serve(async (req: Request) => {
  // ...
  const authHeader = req.headers.get('Authorization')!
  const token = authHeader.replace('Bearer ', '')
  const { data } = await supabaseClient.auth.getUser(token)
  // ...
})
```

***

## Row Level Security

After initializing a Supabase client with the Auth context, all queries will be executed with the context of the user. For database queries, this means [Row Level Security](/docs/guides/database/postgres/row-level-security) will be enforced.

```js
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (req: Request) => {
  // ...
  // This query respects RLS - users only see rows they have access to
  const { data, error } = await supabaseClient.from('profiles').select('*');

  if (error) {
    return new Response('Database error', { status: 500 })
  }

  // ...
})
```

***

## Example

See the full [example on GitHub](https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/select-from-table-with-auth-rls/index.ts).

```typescript
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from 'npm:supabase-js@2'
// New approach (v2.95.0+)
import { corsHeaders } from 'jsr:@supabase/supabase-js@2/cors'
// For older versions:
// import { corsHeaders } from '../_shared/cors.ts'

console.log(`Function "select-from-table-with-auth-rls" up and running!`)

Deno.serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // First get the token from the Authorization header
    const token = req.headers.get('Authorization').replace('Bearer ', '')

    // Now we can get the session or user object
    const {
      data: { user },
    } = await supabaseClient.auth.getUser(token)

    // And we can run queries in the context of our authenticated user
    const { data, error } = await supabaseClient.from('users').select('*')
    if (error) throw error

    return new Response(JSON.stringify({ user, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/select-from-table-with-auth-rls' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
```
