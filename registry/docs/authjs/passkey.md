[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Passkey

![](/img/providers/passkey.svg)

# Passkey

## Setup[](#setup)

⚠️

The WebAuthn / Passkeys provider is experimental and not yet recommended for production use.

The Passkeys provider **requires a database adapter** as well as a new table in that database. Please see the docs page for your adapter for the respective migration details.

Passkeys are currently supported in the following adapters / framework packages.

Package

Minimum Version

Link

`next-auth`

`5.0.0-beta.17`

`@auth/sveltekit`

`1.0.2`

`@auth/prisma-adapter`

`1.3.3`

[Docs](/getting-started/adapters/prisma)

`@auth/unstorage-adapter`

`2.1.0`

[Docs](/getting-started/adapters/unstorage)

`@auth/drizzle-adapter`

`1.1.1`

[Docs](/getting-started/adapters/drizzle)

### Install peer dependencies[](#install-peer-dependencies)

npmpnpmyarnbun

```
npm install @simplewebauthn/browser@9.0.1 @simplewebauthn/server@9.0.3
```

```
pnpm add @simplewebauthn/browser@9.0.1 @simplewebauthn/server@9.0.3
```

```
yarn add @simplewebauthn/browser@9.0.1 @simplewebauthn/server@9.0.3
```

```
bun add @simplewebauthn/browser@9.0.1 @simplewebauthn/server@9.0.3
```

The `@simplewebauthn/browser` peer dependency is only required for custom signin pages. If you’re using the Auth.js default pages, you can skip installing that peer dependency.

### Database Setup[](#database-setup)

The Passkeys provider requires an additional table called `Authenticator`. Passkeys are now supported in multiple adapters, please see their respective docs pages for more detailed migration steps. We’ll use Prisma as an example going forward here, but there is also a raw SQL migration included below.

Prisma Schema

SQL Migration

#### Edge Compatibility[](#edge-compatibility)

If you’re using `next-auth` with Next.js and a proxy (or middleware in older versions), you should ensure that your database client of choice is “edge compatible” when using Next.js versions before 16. In Next.js 16+, `proxy.ts` runs on the Node.js runtime, so edge compatibility is no longer a concern. For older versions, check out our [edge compatibility](/guides/edge-compatibility) guide for more details. There is also Prisma specific information in the [Prisma adapter docs](/getting-started/adapters/prisma#edge-compatibility).

### Update Auth.js Configuration[](#update-authjs-configuration)

Add the `Passkey` provider to your configuration and make sure you’re using a compatible database adapter. You’ll also need to explicitly enable the experimental WebAuthn feature.

./auth.ts

```
import Passkey from "next-auth/providers/passkey"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()
 
export default {
  adapter: PrismaAdapter(prisma),
  providers: [Passkey],
  experimental: { enableWebAuthn: true },
}
```

If you’re using the built-in Auth.js pages, then you are good to go now! Navigating to your `/signin` route should include a “Signin with Passkeys” button now.

### Custom Pages[](#custom-pages)

If you’re building a custom signin page, you can leverage the `next-auth/webauthn` `signIn` function to initiate both WebAuthn registration and authentication. Remember, when using the WebAuthn `signIn` function, you’ll also need the `@simplewebauth/browser` peer dependency installed.

app/login/page.tsx

```
"use client"
 
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"
 
export default function Login() {
  const { data: session, update, status } = useSession()
 
  return (
    <div>
      {status === "authenticated" ? (
        <button onClick={() => signIn("passkey", { action: "register" })}>
          Register new Passkey
        </button>
      ) : status === "unauthenticated" ? (
        <button onClick={() => signIn("passkey")}>Sign in with Passkey</button>
      ) : null}
    </div>
  )
}
```

## Options[](#options)

You can find all of the Passkeys provider options under the [API reference](/reference/core/providers/webauthn#webauthnconfig).

[Passage](/getting-started/providers/passage "Passage")[Patreon](/getting-started/providers/patreon "Patreon")
