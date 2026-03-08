[Getting Started](/getting-started "Getting Started")Providers42 School

![](/img/providers/42-school.svg)

# 42School Provider

## Resources[](#resources)

-   [42School OAuth documentation](https://api.intra.42.fr/apidoc/guides/web_application_flow)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/42-school
```

```
https://example.com/auth/callback/42-school
```

```
https://example.com/auth/callback/42-school
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/42-school.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_42_SCHOOL_ID
AUTH_42_SCHOOL_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import 42School from "next-auth/providers/42-school"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [42School],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import 42School from "@auth/qwik/providers/42-school"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [42School],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import 42School from "@auth/sveltekit/providers/42-school"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [42School],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import 42School from "@auth/express/providers/42-school"
 
app.use("/auth/*",
  ExpressAuth({ providers: [ 42School ] })
)
```

## Notes[](#notes)

-   42 returns a field on `Account` called `created_at` which is a number, this is different from the default schema’s datatype for this field. Check out the [42 School docs](https://api.intra.42.fr/apidoc/guides/getting_started#make-basic-requests) for more info. Make sure to add or edit this field in your database schema in case if you are using an [database adapter](/getting-started/database).

[TypeScript](/getting-started/typescript "TypeScript")[Apple](/getting-started/providers/apple "Apple")
