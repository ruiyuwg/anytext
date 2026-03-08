Getting StartedIntroduction

# What is Auth.js?

Auth.js is a runtime agnostic library based on standard Web APIs that integrates deeply with multiple modern JavaScript frameworks to provide an authentication experience that’s simple to get started with, easy to extend, and always private and secure!

This documentation covers `next-auth@5.0.0-beta` and later and all other frameworks under the `@auth/*` namespace. Documentation for `next-auth@4.x.y` can still be found at [next-auth.js.org](https://next-auth.js.org).

Select your framework of choice to get started, or view the example application deployment or repository with the buttons below.

[![Next.js Logo](/img/etc/nextjs.svg)

Next.js

](/getting-started/installation?framework=Next.js)

[](https://next-auth-example.vercel.app/ "Live Example")[](https://github.com/nextauthjs/next-auth-example "GitHub Repository")

[![Qwik Logo](/img/etc/qwik.svg)

Qwik

](/getting-started/installation?framework=Qwik)

[](https://qwik-auth-example.vercel.app/ "Live Example")[](https://github.com/nextauthjs/qwik-auth-example "GitHub Repository")

[![SvelteKit Logo](/img/etc/sveltekit.svg)

SvelteKit

](/getting-started/installation?framework=SvelteKit)

[](https://sveltekit-auth-example.vercel.app/ "Live Example")[](https://github.com/nextauthjs/sveltekit-auth-example "GitHub Repository")

[![Express Logo](/img/etc/express.svg)

Express

](/getting-started/installation?framework=Express)

[](https://express-auth-example.vercel.app/ "Live Example")[](https://github.com/nextauthjs/express-auth-example "GitHub Repository")

[

Add New

](/guides/creating-a-framework-integration)

Check the [integrations page](/getting-started/integrations) for all supported packages. We are working on supporting more frameworks, but you can create your own or help us create one for your favorite framework.

## Authentication methods[](#authentication-methods)

There are 4 ways to authenticate users with Auth.js:

-   [OAuth authentication](/getting-started/authentication/oauth) (_Sign in with Google, GitHub, LinkedIn, etc…_)
-   [Magic Links](/getting-started/authentication/email) (_Email Provider like Forward Email, Resend, Sendgrid, Nodemailer etc…_)
-   [Credentials](/getting-started/authentication/credentials) (_Username and Password, Integrating with external APIs, etc…_)
-   [WebAuthn](/getting-started/authentication/webauthn) (_Passkeys, etc…_)

### Official Providers[](#official-providers)

[![](/img/providers/github.svg)

GitHub

](/getting-started/providers/github)[![](/img/providers/google.svg)

Google

](/getting-started/providers/google)[![](/img/providers/twitter.svg)

Twitter

](/getting-started/providers/twitter)[![](/img/providers/apple.svg)

Apple

](/getting-started/providers/apple)[![](/img/providers/discord.svg)

Discord

](/getting-started/providers/discord)[![](/img/providers/auth0.svg)

Auth0

](/getting-started/providers/auth0)[![](/img/providers/facebook.svg)

Facebook

](/getting-started/providers/facebook)[![](/img/providers/keycloak.svg)

Keycloak

](/getting-started/providers/keycloak)

Show more

### Supported Databases[](#supported-databases)

Optionally, Auth.js can be integrated with an external database via Database adapters, in case you need or want to store user data.

[![](/img/adapters/prisma.svg)

Prisma

](/getting-started/adapters/prisma)[![](/img/adapters/drizzle.svg)

Drizzle ORM

](/getting-started/adapters/drizzle)[![](/img/adapters/neon.svg)

Neon

](/getting-started/adapters/neon)[![](/img/adapters/supabase.svg)

Supabase

](/getting-started/adapters/supabase)[![](/img/adapters/firebase.svg)

Firebase

](/getting-started/adapters/firebase)[![](/img/adapters/typeorm.svg)

TypeORM

](/getting-started/adapters/typeorm)[![](/img/adapters/kysely.svg)

Kysely

](/getting-started/adapters/kysely)[![](/img/adapters/upstash-redis.svg)

Upstash Redis

](/getting-started/adapters/upstash-redis)

Show more

[Migrate to Better Auth](/getting-started/migrate-to-better-auth "Migrate to Better Auth")
