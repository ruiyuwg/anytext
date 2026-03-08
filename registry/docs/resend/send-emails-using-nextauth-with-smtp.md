# Send emails using NextAuth with SMTP

Source: https://resend.com/docs/send-with-nextauth-smtp

Learn how to send your first email using NextAuth.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Install the [NextAuth](https://next-auth.js.org/getting-started/example#install-nextauth) package.

```bash npm theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install next-auth
```

```bash yarn theme={"theme":{"light":"github-light","dark":"vesper"}}
yarn add next-auth
```

```bash pnpm theme={"theme":{"light":"github-light","dark":"vesper"}}
pnpm add next-auth
```

```bash bun theme={"theme":{"light":"github-light","dark":"vesper"}}
bun add next-auth
```

Then, install the [Nodemailer](https://www.npmjs.com/package/nodemailer) package.

```bash npm theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install nodemailer
```

```bash yarn theme={"theme":{"light":"github-light","dark":"vesper"}}
yarn add nodemailer
```

```bash pnpm theme={"theme":{"light":"github-light","dark":"vesper"}}
pnpm add nodemailer
```

```bash bun theme={"theme":{"light":"github-light","dark":"vesper"}}
bun add nodemailer
```

## 2. Configure SMTP credentials

Add your Resend SMTP crendentials in your application's `.env` file:

```ini .env theme={"theme":{"light":"github-light","dark":"vesper"}}
EMAIL_SERVER_USER=resend
EMAIL_SERVER_PASSWORD=YOUR_API_KEY
EMAIL_SERVER_HOST=smtp.resend.com
EMAIL_SERVER_PORT=465
EMAIL_FROM=onboarding@resend.dev
```

## 3. Configure Email Provider

Finally, in your \[...nextauth].js file (typically located in pages/api/auth), configure the Email provider with your SMTP settings:

```js index.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';

export default NextAuth({
  providers: [
    EmailProvider({
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
    // ... other providers as needed
  ],
  // ... any other NextAuth.js configs
});
```

# Send emails with Next.js

Source: https://resend.com/docs/send-with-nextjs

Learn how to send your first email using Next.js and the Resend Node.js SDK.
