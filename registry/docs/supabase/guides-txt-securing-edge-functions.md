# Securing Edge Functions

Best practices on securing Edge Functions

In the past Supabase Auth used a **symmetric** secret to sign legacy JWTs.
But it was replaced by new [JWT Signing Keys](/blog/jwt-signing-keys#start-using-asymmetric-jwts-today). This guide covers the new patterns for securing your Edge Functions.

If you need to validate using the old method, read the [Legacy JWT Secret guide](/docs/guides/functions/auth-legacy-jwt).

Before continuing, read the [JWT Signing Keys guide](/docs/guides/auth/signing-keys) for details about the main differences compared to Legacy JWTs.

## Overview

When an HTTP request is sent to Edge Functions, you can use Supabase Auth to secure endpoints. In the past, this verification was controlled by the [`verify_jwt` flag](/docs/guides/functions/function-configuration#skipping-authorization-checks).

But, this method is incompatible with the new [JWT Signing Keys](/docs/guides/auth/signing-keys) and also caused trouble when attempting [third-party integration](https://github.com/orgs/supabase/discussions/34988#discussion-8199151).

For this reason we decided to no longer implicitly force JWT verification, but instead suggest patterns and templates to handle this task. This allows users to own and control the auth code, instead of hiding it internally under Edge Runtime infrastructure.

Following the [upcoming API key changes](https://github.com/orgs/supabase/discussions/29260) timetable, the `verify_jwt` flag will still be supported and enabled by default. To move to the new [JWT Signing Keys](/docs/guides/auth/signing-keys), you need to manually [skip the authorization checks](/docs/guides/functions/function-configuration#skipping-authorization-checks) and follow the steps below.

## Integrating with Supabase Auth

Important notes to consider:

- This is done *inside* the `Deno.serve()` callback argument, so that the Authorization header is set for each request.
- Use `Deno.env.get('SUPABASE_URL')` to get the URL associated with your project. Using a value such as `http://localhost:54321` for local development will fail due to Docker containerization.

### Get API details

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=\&framework=).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=\&framework=), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

Currently, the new API keys are not available by default on the Edge Functions environment.
But you can manually expose them as [secret](/docs/guides/functions/secrets#local-secrets) using the `SB_` prefix.

We're working on exposing these secrets and making them default in the future.

```ts
import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SB_PUBLISHABLE_KEY')!)

Deno.serve(async (req) => {
  const authHeader = req.headers.get('Authorization')!
  const token = authHeader.replace('Bearer ', '')

  const { data, error } = await supabase.auth.getClaims(token)
  const userEmail = data?.claims?.email
  if (!userEmail || error) {
    return Response.json(
      { msg: 'Invalid JWT' },
      {
        status: 401,
      }
    )
  }

  return Response.json({ message: `hello ${userEmail}` })
})
```

## Verifying JWT

### Using Supabase template

You can see [a custom JWT verification example on GitHub](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/custom-jwt-validation) and a variety of [auth function templates](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/_shared/jwt) also on GitHub.

To verify incoming requests, you can copy/download the specified template and start using it:

The following example uses [`jose`](https://jsr.io/@panva/jose) library to verify received JWTs.

{/\* prettier-ignore \*/}

````
```typescript name=_shared/jwt/default.ts
// ...

import * as jose from "jsr:@panva/jose@6";

const SUPABASE_JWT_ISSUER = Deno.env.get("SB_JWT_ISSUER") ??
  Deno.env.get("SUPABASE_URL") + "/auth/v1";

const SUPABASE_JWT_KEYS = jose.createRemoteJWKSet(
  new URL(Deno.env.get("SUPABASE_URL")! + "/auth/v1/.well-known/jwks.json"),
);

function getAuthToken(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    throw new Error("Missing authorization header");
  }
  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer") {
    throw new Error(`Auth header is not 'Bearer {token}'`);
  }

  return token;
}

function verifySupabaseJWT(jwt: string) {
  return jose.jwtVerify(jwt, SUPABASE_JWT_KEYS, {
    issuer: SUPABASE_JWT_ISSUER,
  });
}

// Validates authorization header
export async function AuthMiddleware(
  req: Request,
  next: (req: Request) => Promise,
) {
  if (req.method === "OPTIONS") return await next(req);

  try {
    const token = getAuthToken(req);
    const isValidJWT = await verifySupabaseJWT(token);

    if (isValidJWT) return await next(req);

    return Response.json({ msg: "Invalid JWT" }, {
      status: 401,
    });
  } catch (e) {
    return Response.json({ msg: e?.toString() }, {
      status: 401,
    });
  }
}
```





```typescript name=hello/index.ts
// ...

import { AuthMiddleware } from "../_shared/jwt/default.ts";

interface reqPayload {
  name: string;
}

Deno.serve((r) =>
  AuthMiddleware(r, async (req) => {
    const { name }: reqPayload = await req.json();
    const data = {
      message: `Hello ${name} from foo!`,
    };

    return Response.json(data);
  })
);
```
````
