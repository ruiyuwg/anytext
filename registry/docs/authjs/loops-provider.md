[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Loops

![](/img/providers/loops.svg)

# Loops Provider

## Overview[](#overview)

The Loops provider uses email to send “magic links” that contain URLs with verification tokens can be used to sign in.

Adding support for signing in via email in addition to one or more OAuth services provides a way for users to sign in if they lose access to their OAuth account (e.g. if it is locked or deleted).

The Loops provider can be used in conjunction with (or instead of) one or more OAuth providers.

## How it works[](#how-it-works)

On initial sign in, a **Verification Token** is sent to the email address provided. By default this token is valid for 24 hours. If the Verification Token is used within that time (i.e. by clicking on the link in the email) an account is created for the user and they are signed in.

If someone provides the email address of an _existing account_ when signing in, an email is sent and they are signed into the account associated with that email address when they follow the link in the email.

⚠️

The Loops provider can be used with both JSON Web Token and database managed sessions, however **you must configure a database** to use it. It is not possible to enable email sign in without using a database.

## Configuration[](#configuration)

### Add and Verify your Domain on Loops[](#add-and-verify-your-domain-on-loops)

First, you’ll need to have completed the steps covered in the [‘Start here’](https://loops.so/docs/start-here) Loops documentation. The main thing required is to [set up your domain records](https://loops.so/docs/start-here#1-set-up-your-domain-records).

### Generate an API Key[](#generate-an-api-key)

Next, you will have to generate an API key in the [Loops Dashboard](https://loops.so/api-keys). You can save this API key as the `AUTH_LOOPS_KEY` environment variable.

```
AUTH_LOOPS_KEY=abc
```

### Create a Transactional Email Template on Loops[](#create-a-transactional-email-template-on-loops)

The easiest way to achieve this is using the [Loops email editor](https://loops.so/docs/creating-emails/editor) to create a transactional email template. If you’re new to Loops, you can find rich documentation [here](https://loops.so/docs/transactional/guide).

  

Copy the Transactional ID value from the last page of the template creation process, and save this as the `AUTH_LOOPS_TRANSACTIONAL_ID` environment variable. If you’re following these steps, you should now have two environment variables set up for Loops.

```
AUTH_LOOPS_KEY=abc
AUTH_LOOPS_TRANSACTIONAL_ID=def
```

⚠️

When creating your email template, make sure to include the `url` variable in the template. This is the URL that will sent to the user, allowing them to signin.

Next.jsQwikSvelteKitExpress

### Configure AuthJS with the Loops Provider[](#configure-authjs-with-the-loops-provider)

./auth.ts

```
import NextAuth from "next-auth"
import Loops from "next-auth/providers/loops"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: ..., // database adapter of your choosing
  providers: [
    Loops({
      apiKey: process.env.AUTH_LOOPS_KEY,
      transactionalId: process.env.AUTH_LOOPS_TRANSACTIONAL_ID,
    }),
  ],
})
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/loops.mdx).

### Configure AuthJS with the Loops Provider[](#configure-authjs-with-the-loops-provider-1)

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Loops from "@auth/sveltekit/providers/loops"
import { AUTH_LOOPS_KEY, AUTH_LOOPS_TRANSACTIONAL_ID } from "@env/static/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: ..., // database adapter of your choosing
  providers: [
    Loops({
      apiKey: AUTH_LOOPS_KEY,
      transactionalId: AUTH_LOOPS_TRANSACTIONAL_ID,
    }),
  ],
})
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/loops.mdx).

[Logto](/getting-started/providers/logto "Logto")[Mailchimp](/getting-started/providers/mailchimp "Mailchimp")
