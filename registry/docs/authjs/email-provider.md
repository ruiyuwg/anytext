[Getting Started](/getting-started "Getting Started")[Authentication](/getting-started/authentication "Authentication")Magic Links

# Email Provider

This login mechanism starts by the user providing their email address at the login form. Then a **Verification Token** is sent to the provided email address. The user then has 24 hours to click the link in the email body to “consume” that token and register their account, otherwise the verification token will expire and they will have to request a new one.

💡

An Email Provider can be used with both [JSON Web Tokens](https://jwt.io/) and [database](/concepts/session-strategies#database-session) session, whichever you choose, you **must still configure a database** so that Auth.js can save the verification tokens and look them up when the user attempts to login. It is not possible to enable an email provider without using a database.

### Providers[](#providers)

![](/img/providers/forwardemail.svg)

Forward Email

![](/img/providers/resend.svg)

Resend

![](/img/providers/sendgrid.svg)

Sendgrid

![](/img/providers/nodemailer.svg)

Nodemailer

![](/img/providers/postmark.svg)

Postmark

![](/img/providers/loops.svg)

Loops

![](/img/providers/mailgun.svg)

Mailgun

### Forward Email Setup[](#forward-email-setup)

### Database Adapter[](#database-adapter)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for passwordless login to work as verification tokens need to be stored.

### Setup Environment Variables[](#setup-environment-variables)

Auth.js will automatically pick up these if formatted like the example above. You can [also use a different name for the environment variables](/guides/environment-variables#oauth-variables) if needed, but then you’ll need to pass them to the provider manually.

.env

```
AUTH_FORWARDEMAIL_KEY=abc123
```

### Setup Provider[](#setup-provider)

Let’s enable `ForwardEmail` as a sign in option in our Auth.js configuration. You’ll have to import the `ForwardEmail` provider from the package and pass it to the providers array we setup earlier in the Auth.js config file:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import ForwardEmail from "next-auth/providers/forwardemail"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [ForwardEmail],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import ForwardEmail from "@auth/qwik/providers/forwardemail"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [ForwardEmail],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import ForwardEmail from "@auth/sveltekit/providers/forwardemail"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [ForwardEmail],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Add Signin Button[](#add-signin-button)

Next, we can add a signin button somewhere in your application like the Navbar. This will send an email to the user containing the magic link to sign in.

Next.jsQwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("forwardemail", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Forward Email</button>
    </form>
  )
}
```

./components/sign-in.tsx

```
import { component$ } from "@builder.io/qwik"
import { useSignIn } from "./plugin@auth"
 
export default component$(() => {
  const signInSig = useSignIn()
 
  return (
    <button
      onClick$={() => signInSig.submit({ redirectTo: "/" })}
    >
      SignIn
    </button>
  )
})
```

src/routes/+page.svelte

```
<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="forwardemail" />
  </nav>
</div>
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin)

Start your application, once the user enters their Email and clicks on the signin button, they’ll be redirected to a page that asks them to check their email. When they click on the link in their email, they will be signed in.

Check our [Customising magic links emails](/getting-started/providers/forwardemail#customization) to learn how to change the look and feel of the emails the user receives to sign in.

For more information on this provider go to the [Forward Email docs page](/getting-started/providers/forwardemail).

### Resend Setup[](#resend-setup)

### Database Adapter[](#database-adapter-1)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for passwordless login to work as verification tokens need to be stored.

### Setup Environment Variables[](#setup-environment-variables-1)

Auth.js will automatically pick up these if formatted like the example above. You can [also use a different name for the environment variables](/guides/environment-variables#oauth-variables) if needed, but then you’ll need to pass them to the provider manually.

.env

```
AUTH_RESEND_KEY=abc123
```

### Setup Provider[](#setup-provider-1)

Let’s enable `Resend` as a sign in option in our Auth.js configuration. You’ll have to import the `Resend` provider from the package and pass it to the providers array we setup earlier in the Auth.js config file:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Resend],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Resend from "@auth/qwik/providers/resend"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Resend],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Resend from "@auth/sveltekit/providers/resend"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Resend],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Add Signin Button[](#add-signin-button-1)

Next, we can add a signin button somewhere in your application like the Navbar. This will send an email to the user containing the magic link to sign in.

Next.jsNext.js (Client)QwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("resend", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Resend</button>
    </form>
  )
}
```

./components/sign-in.tsx

```
"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  const resendAction = (formData: FormData) => {
    signIn("resend", formData)
  }
 
  return (
    <form action={resendAction}>
      <label htmlFor="email-resend">
        Email
        <input type="email" id="email-resend" name="email" />
      </label>
      <input type="submit" value="Signin with Resend" />
    </form>
  )
}
```

./components/sign-in.tsx

```
import { component$ } from "@builder.io/qwik"
import { useSignIn } from "./plugin@auth"
 
export default component$(() => {
  const signInSig = useSignIn()
 
  return (
    <button
      onClick$={() => signInSig.submit({ redirectTo: "/" })}
    >
      SignIn
    </button>
  )
})
```

src/routes/+page.svelte

```
<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="resend" />
  </nav>
</div>
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin-1)

Start your application, once the user enters their Email and clicks on the signin button, they’ll be redirected to a page that asks them to check their email. When they click on the link in their email, they will be signed in.

Check our [Customising magic links emails](/getting-started/providers/resend#customization) to learn how to change the look and feel of the emails the user receives to sign in.

For more information on this provider go to the [Resend docs page](/getting-started/providers/resend).

### Sendgrid Setup[](#sendgrid-setup)

### Database Adapter[](#database-adapter-2)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for passwordless login to work as verification tokens need to be stored.

### Setup Environment Variables[](#setup-environment-variables-2)

Auth.js will automatically pick up these if formatted like the example above. You can [also use a different name for the environment variables](/guides/environment-variables#oauth-variables) if needed, but then you’ll need to pass them to the provider manually.

.env

```
AUTH_SENDGRID_KEY=abc123
```

### Setup Provider[](#setup-provider-2)

Let’s enable `Sendgrid` as a sign in option in our Auth.js configuration. You’ll have to import the `Sendgrid` provider from the package and pass it to the providers array we setup earlier in the Auth.js config file:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Sendgrid from "next-auth/providers/sendgrid"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Sendgrid],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Sendgrid from "@auth/qwik/providers/sendgrid"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Sendgrid],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Sendgrid from "@auth/sveltekit/providers/sendgrid"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Sendgrid],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Add Signin Button[](#add-signin-button-2)

Next, we can add a signin button somewhere in your application like the Navbar. This will send an email to the user containing the magic link to sign in.

Next.jsNext.js (Client)QwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("sendgrid", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Sendgrid</button>
    </form>
  )
}
```

./components/sign-in.tsx

```
"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  const sendgridAction = (formData: FormData) => {
    signIn("sendgrid", formData)
  }
 
  return (
    <form action={sendgridAction}>
      <label htmlFor="email-sendgrid">
        Email
        <input type="email" id="email-sendgrid" name="email" />
      </label>
      <input type="submit" value="Signin with Sendgrid" />
    </form>
  )
}
```

./components/sign-in.tsx

```
import { component$ } from "@builder.io/qwik"
import { useSignIn } from "./plugin@auth"
 
export default component$(() => {
  const signInSig = useSignIn()
 
  return (
    <button
      onClick$={() => signInSig.submit({ redirectTo: "/" })}
    >
      SignIn
    </button>
  )
})
```

src/routes/+page.svelte

```
<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="sendgrid" />
  </nav>
</div>
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin-2)

Start your application, once the user enters their Email and clicks on the signin button, they’ll be redirected to a page that asks them to check their email. When they click on the link in their email, they will be signed in.

Check our [Customising magic links emails](/getting-started/providers/sendgrid#customization) to learn how to change the look and feel of the emails the user receives to sign in.

For more information on this provider go to the [Sendgrid docs page](/getting-started/providers/sendgrid).

### Nodemailer Setup[](#nodemailer-setup)

### Install `nodemailer`[](#install-nodemailer)

Auth.js does not include `nodemailer` as a dependency, so you’ll need to install it yourself if you want to use the Nodemailer provider.

npmpnpmyarnbun

```
npm install nodemailer
```

```
pnpm add nodemailer
```

```
yarn add nodemailer
```

```
bun add nodemailer
```

You will need access to an SMTP server, ideally from one of [the services known to work with nodemailer](https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/). Alternatively, Nodemailer does support [other transport mechanisms](https://nodemailer.com/transports/).

### Database Adapter[](#database-adapter-3)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for magic link login to work as verification tokens need to be stored.

### SMTP Transport Configuration[](#smtp-transport-configuration)

There are two ways to configure the SMTP server connection: using a connection string or a configuration object.

Connection stringConfiguration object

.env

```
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@example.com
```

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Nodemailer from "@auth/qwik/providers/nodemailer"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Nodemailer({
        server: import.meta.env.EMAIL_SERVER,
        from: import.meta.env.EMAIL_FROM,
      }),
    ],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Nodemailer from "@auth/sveltekit/providers/nodemailer"
import { env } from "$env/dynamic/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Nodemailer({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
    }),
  ],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

.env

```
EMAIL_SERVER_USER=username
EMAIL_SERVER_PASSWORD=password
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@example.com
```

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Nodemailer from "@auth/qwik/providers/nodemailer"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Nodemailer({
        server: {
          host: import.meta.env.EMAIL_SERVER_HOST,
          port: import.meta.env.EMAIL_SERVER_PORT,
          auth: {
            user: import.meta.env.EMAIL_SERVER_USER,
            pass: import.meta.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: import.meta.env.EMAIL_FROM,
      }),
    ],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Nodemailer from "@auth/sveltekit/providers/nodemailer"
import { env } from "$env/dynamic/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Nodemailer({
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: env.EMAIL_SERVER_PORT,
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
    }),
  ],
})
```

src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin Button[](#signin-button)

Next, we can add a sign in button somewhere in your application like the Navbar. This will forward the user on to the Auth.js default signin page.

Next.jsQwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  )
}
```

./components/sign-in.tsx

```
import { component$ } from "@builder.io/qwik"
import { useSignIn } from "./plugin@auth"
 
export default component$(() => {
  const signInSig = useSignIn()
 
  return (
    <button
      onClick$={() => signInSig.submit({ redirectTo: "/" })}
    >
      SignIn
    </button>
  )
})
```

src/routes/+page.svelte

```
<script lang="ts">
  import { signIn } from '@auth/sveltekit/client'
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <button on:click={signIn}>Signin</button>
  </nav>
</div>
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin-3)

Start your application, click on the sign in button we just added, and you should see Auth.js built-in sign in page with the option to sign in with your email:

![Screenshot of sign in page](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstart.8f9b33b2.webp&w=3840&q=75)

Insert your email and click “Sign in with Email”. You should receive an email from Auth.js, click on it and should be redirected to your application, landing already authenticated.

For more information on this provider go to the [Nodemailer docs page](/getting-started/providers/nodemailer).

### Postmark Setup[](#postmark-setup)

### Database Adapter[](#database-adapter-4)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for passwordless login to work as verification tokens need to be stored.

### Setup Environment Variables[](#setup-environment-variables-3)

Auth.js will automatically pick up these if formatted like the example above. You can [also use a different name for the environment variables](/guides/environment-variables#oauth-variables) if needed, but then you’ll need to pass them to the provider manually.

.env

```
AUTH_POSTMARK_KEY=abc123
```

### Setup Provider[](#setup-provider-3)

Let’s enable `Postmark` as a sign in option in our Auth.js configuration. You’ll have to import the `Postmark` provider from the package and pass it to the providers array we setup earlier in the Auth.js config file:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Postmark from "next-auth/providers/postmark"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Postmark],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Postmark from "@auth/qwik/providers/postmark"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Postmark],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Postmark from "@auth/sveltekit/providers/postmark"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Postmark],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Add Signin Button[](#add-signin-button-3)

Next, we can add a signin button somewhere in your application like the Navbar. This will send an email to the user containing the magic link to sign in.

Next.jsNext.js (Client)QwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("postmark", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Postmark</button>
    </form>
  )
}
```

./components/sign-in.tsx

```
"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  const postmarkAction = (formData: FormData) => {
    signIn("postmark", formData)
  }
 
  return (
    <form action={postmarkAction}>
      <label htmlFor="email-postmark">
        Email
        <input type="email" id="email-postmark" name="email" />
      </label>
      <input type="submit" value="Signin with Postmark" />
    </form>
  )
}
```

./components/sign-in.tsx

```
import { component$ } from "@builder.io/qwik"
import { useSignIn } from "./plugin@auth"
 
export default component$(() => {
  const signInSig = useSignIn()
 
  return (
    <button
      onClick$={() => signInSig.submit({ redirectTo: "/" })}
    >
      SignIn
    </button>
  )
})
```

src/routes/+page.svelte

```
<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="postmark" />
  </nav>
</div>
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin-4)

Start your application, once the user enters their Email and clicks on the signin button, they’ll be redirected to a page that asks them to check their email. When they click on the link in their email, they will be signed in.

Check our [Customising magic links emails](/getting-started/providers/postmark#customization) to learn how to change the look and feel of the emails the user receives to sign in.

For more information on this provider go to the [Postmark docs page](/getting-started/providers/postmark).

### Loops Setup[](#loops-setup)

### Database Adapter[](#database-adapter-5)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for passwordless login to work as verification tokens need to be stored.

### Create your Transactional Email Template on Loops[](#create-your-transactional-email-template-on-loops)

Loops have provided a super handy [guide](https://loops.so/docs/transactional/guide) to help you get started with creating your transactional email template. This provider only passes one data varaiable into the template, `url` which is the magic link to sign in. This is case sensitive, so make sure you use `url` in your template.  
On the last page of Template creation, you’ll need to copy the `TRANSACTIONAL ID`. If you skipped this step, don’t worry, you can get this at any from the Template edit page.

### Create an API Key on Loops[](#create-an-api-key-on-loops)

You’ll need to create an API key to authenticate with Loops. This key should be kept secret and not shared with anyone. You can Generate a key by going to the [API Settings Page](https://app.loops.so/settings?page=api) and clicking Generate. You should name the key something that makes sense to you, like “Auth.js”.

### Setup Environment Variables[](#setup-environment-variables-4)

To implement Loops, you need to set up the following environment variables. You should have these from the previous steps.

.env

```
AUTH_LOOPS_KEY=abc123
AUTH_LOOPS_TRANSACTIONAL_ID=def456
```

### Setup Provider[](#setup-provider-4)

Let’s enable `Loops` as a sign-in option for our Auth.js configuration. You’ll have to import the `Loops` provider from the package and pass it to the providers array we set up earlier in the Auth.js config file:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Loops from "next-auth/providers/loops"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Loops({
      apiKey: process.env.AUTH_LOOPS_KEY,
      transactionalId: process.env.AUTH_LOOPS_TRANSACTIONAL_ID,
    }),
  ],
})
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Loops from "@auth/sveltekit/providers/loops"
import {
  AUTH_LOOPS_KEY,
  AUTH_LOOPS_TRANSACTIONAL_ID,
} from "$env/static/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Loops({
      apiKey: AUTH_LOOPS_KEY,
      transactionalId: AUTH_LOOPS_TRANSACTIONAL_ID,
    }),
  ],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Add Signin Button[](#add-signin-button-4)

Next, we add a signin button somewhere in your application like the Navbar. This will send an email to the user containing the magic link to sign in.

Next.jsQwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("loops", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Sign in with Loops</button>
    </form>
  )
}
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

src/routes/+page.svelte

```
 
<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="loops"/>
  </nav>
</div>
 
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin-5)

Start your application, click on the signin button we just added, and you should see Auth.js built-in sign in page with the option to sign in with your email. A user can enter their email, click “Sign in with Loops”, and receive their beautifully formatted signin email. Clicking on the link in the email will redirect the user to your application, landing already authenticated!

### Mailgun Setup[](#mailgun-setup)

### Database Adapter[](#database-adapter-6)

Please make sure you’ve [setup a database adapter](/getting-started/database), as mentioned earlier, a database is required for passwordless login to work as verification tokens need to be stored.

### Setup Environment Variables[](#setup-environment-variables-5)

Auth.js will automatically pick up these if formatted like the example above. You can [also use a different name for the environment variables](/guides/environment-variables#oauth-variables) if needed, but then you’ll need to pass them to the provider manually.

.env

```
AUTH_MAILGUN_KEY=abc123
```

### Setup Provider[](#setup-provider-5)

Let’s enable `Mailgun` as a sign in option in our Auth.js configuration. You’ll have to import the `Mailgun` provider from the package and pass it to the providers array we setup earlier in the Auth.js config file:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Mailgun from "next-auth/providers/mailgun"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Mailgun],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Mailgun from "@auth/qwik/providers/mailgun"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Mailgun],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Mailgun from "@auth/sveltekit/providers/mailgun"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Mailgun],
})
```

./src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Add Signin Button[](#add-signin-button-5)

Next, we can add a signin button somewhere in your application like the Navbar. This will send an email to the user containing the magic link to sign in.

Next.jsQwikSvelteKitExpress

./components/sign-in.tsx

```
import { signIn } from "../../auth.ts"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("mailgun", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Mailgun</button>
    </form>
  )
}
```

./components/sign-in.tsx

```
import { component$ } from "@builder.io/qwik"
import { useSignIn } from "./plugin@auth"
 
export default component$(() => {
  const signInSig = useSignIn()
 
  return (
    <button
      onClick$={() => signInSig.submit({ redirectTo: "/" })}
    >
      SignIn
    </button>
  )
})
```

src/routes/+page.svelte

```
<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>
 
<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="mailgun" />
  </nav>
</div>
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/authentication/email.mdx).

### Signin[](#signin-6)

Start your application, once the user enters their Email and clicks on the signin button, they’ll be redirected to a page that asks them to check their email. When they click on the link in their email, they will be signed in.

Check our [Customising magic links emails](/getting-started/providers/mailgun#customization) to learn how to change the look and feel of the emails the user receives to sign in.

For more information on this provider go to the [Mailgun docs page](/getting-started/providers/mailgun).

[OAuth](/getting-started/authentication/oauth "OAuth")[Credentials](/getting-started/authentication/credentials "Credentials")
