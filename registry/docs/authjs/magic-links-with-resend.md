[Guides](/guides/debugging "Guides")Configuring Resend for magic links

# Magic links with Resend

In this tutorial, we’ll be setting up Auth.js in a Next.js application to be able to log in with **Resend**.

Magic links (also known as “passwordless”) authentication is a login method which uses emails containing a verification token embedded in a URL. When the user clicks on the link, they will be redirected to your Auth.js app and be logged in, as long as that verification token is still valid.

This tutorial uses Resend as the Passwordless email provider and Next.js as the framework. Note that for any OAuth provider or any framework, **the process will be the same/very similar**, mainly differing on how you register your application in the chosen provider’s dashboard.

## Setting up Auth.js[](#setting-up-authjs)

### Installing Auth.js and Next.js[](#installing-authjs-and-nextjs)

For this tutorial, we’re gonna use the default [Auth.js & Next.js example app](https://github.com/nextauthjs/next-auth-example). If you already have an existing Next.js app, it should work too. If you don’t, clone the repository:

```
git clone https://github.com/nextauthjs/next-auth-example.git && cd next-auth-example
```

If you’re using the example app, Auth.js is already installed, otherwise follow the [installation instructions](/getting-started/installation).

### Creating the server config[](#creating-the-server-config)

Next, we’re gonna create the main Auth.js configuration file which contains the necessary configuration for Auth.js, as well as the dynamic route handler.

./auth.ts

```
import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
 
export const { handlers, auth } = NextAuth({
  providers: [Resend],
})
```

app/api/auth/\[...nextauth\]/route.ts

```
export { GET, POST } from "@/auth"
```

Since this is a [catch-all dynamic route](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments), it will respond to all the relevant Auth.js API routes so that your application can interact with the chosen OAuth provider using the [OAuth 2](https://oauth.net/2) protocol.

### Adding environment variables[](#adding-environment-variables)

If you haven’t, create an `.env.local` file as explained in the [installation section](/getting-started/installation) and add the following Resend API key variable.

.env.local

```
AUTH_SECRET="changeMe"
 
AUTH_RESEND_KEY=
```

We will be filling `AUTH_RESEND_KEY` with a proper key from the Resend developer portal once we’ve registered our account and application.

## Registering your App[](#registering-your-app)

To be able to send Emails using Resend you’ll need to do two things.

1.  Create an API Key
2.  Verify your Domain

### API Key[](#api-key)

You’ll need to sign up for an account at [Resend](https://resend.com), and then go to [“API Keys”](https://resend.com/api-keys) in the main sidebar. There you can click on **“Create API Key”**. We only need “Sending Access”.

### Domain[](#domain)

To verify your domain, follow the [Resend docs](https://resend.com/docs/dashboard/domains/introduction) and come back once you’ve got everything set up with your domain.

Next, you will have to update the `from` address to be from the domain you’ve configured and verified in Resend.

```
import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
 
export const { handlers, auth } = NextAuth({
  providers: [
    Resend({
      from: "auth@app.company.com",
    }),
  ],
})
```

## Wiring all together[](#wiring-all-together)

Now that we have the required API key, paste it into your `.env.local` file we created earlier.

.env.local

```
AUTH_SECRET="changeMe"
 
AUTH_RESEND_KEY={apiKey}
```

With all the pieces in place, you can now start your local dev server and test the login process.

npmpnpmyarnbun

```
npm run dev
```

```
pnpm run dev
```

```
yarn dev
```

```
bun run dev
```

Navigate to [`http://localhost:3000`](http://localhost:3000). You should see the following page:

![App Start](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-start.17a57a93.webp&w=3840&q=75)

Click on **“Sign in”**, you should be redirected to the default Auth.js signin page. You can [customize this page](/guides/pages/signin) to fit your needs. Next, enter your email address in the email input field and click **“Sign in with Resend”**.

Go to your email inbox and you should find the email from your Auth.js application with a button labelled “Sign in”. Click on this button and you should be redirected back to your local dev app and be signed in!

![GitHub Authentication Success](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub-auth-success.b1a5087d.webp&w=3840&q=75)

If you’ve landed back here that means everything worked! We have completed the whole passwordless authentication flow so that your users can log in to your application via passwordless magic-links!

💡

You can customize the contents of this email and modify some additional Resend parameters. For more details, check out our [Resend provider](/getting-started/providers/resend) docs page.

## Deployment[](#deployment)

Deploying your Auth.js application with Resend does not require any other changes. Just make sure you’ve added all the required environment variables to your production environment. Refer to the [Deployment page](/getting-started/deployment) for more information.

[Configuring GitHub for OAuth](/guides/configuring-github "Configuring GitHub for OAuth")[Configuring OAuth providers](/guides/configuring-oauth-providers "Configuring OAuth providers")
