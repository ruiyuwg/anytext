# Send Email with Resend Node.js SDK

**Purpose:** Enforce only the **current** and **correct** instructions for sending emails using the [Resend](https://resend.com/) Node.js SDK.
**Scope:** All AI-generated advice or code related to sending email with Resend must follow these guardrails.

***

## **1. Official Resend Node.js Setup**

### **Prerequisites**

Human must first create an API key and verify their domain at <https://resend.com/domains>.

The API key must be stored in an environment variable called `RESEND_API_KEY`.

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const resend = new Resend(process.env.RESEND_API_KEY);
```

The domain should be verified at <https://resend.com/domains> and added to the `from` address.

### **Install the SDK**

Use the project's existing package manager to install the Resend Node.js SDK.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend
# or: yarn add resend / pnpm add resend / bun add resend
```

### **Initialize the Client**

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
```

### **Send an Email**

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Hello World',
  html: 'It works!',
});

if (error) {
  console.error(error);
  return;
}

console.log(data); // { id: '49a3999c-...' }
```

### Rate Limiting

The default rate limit is 2 requests per second per team. If you exceed the rate limit, you'll receive a `429` response error code. If needed, you can request a rate increase by [contacting support](https://resend.com/contact).

### Idempotency

Best practice: Add an idempotency key to prevent duplicated emails, which is useful for retrying failed emails safely.

- Should be **unique per API request**
- Idempotency keys expire after **24 hours**
- Have a maximum length of **256 characters**
- Pattern: `<event-type>/<entity-id>`
- Example: `welcome-user/123456789`

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Hello World',
  html: 'It works!',
  idempotencyKey: 'unique-id',
});
```

***

## **2. Complete `emails.send()` Parameter Reference**

### **Required Parameters**

| Parameter | Type                 | Description                                                                      |
| --------- | -------------------- | -------------------------------------------------------------------------------- |
| `from`    | `string`             | Sender email address. Supports friendly name format: `"Name <email@domain.com>"` |
| `to`      | `string \| string[]` | Recipient email address(es). Maximum 50 addresses.                               |
| `subject` | `string`             | Email subject line.                                                              |

### **Content Parameters (at least one required)**

| Parameter | Type              | Description                                                |
| --------- | ----------------- | ---------------------------------------------------------- |
| `html`    | `string`          | HTML version of the email body.                            |
| `text`    | `string`          | Plain text version. Auto-generated from `html` if omitted. |
| `react`   | `React.ReactNode` | React Email component to render the message. Node.js only. |

### **Optional Parameters**

| Parameter     | Type                 | Description                                                   |
| ------------- | -------------------- | ------------------------------------------------------------- |
| `cc`          | `string \| string[]` | Carbon copy recipients.                                       |
| `bcc`         | `string \| string[]` | Blind carbon copy recipients.                                 |
| `replyTo`     | `string \| string[]` | Reply-to address(es).                                         |
| `scheduledAt` | `string`             | Schedule delivery time. Accepts ISO 8601 or natural language. |
| `headers`     | `object`             | Custom email headers as key-value pairs.                      |
| `tags`        | `Tag[]`              | Custom metadata. Name and value: max 256 chars, ASCII only.   |
| `attachments` | `Attachment[]`       | File attachments. Max 40MB total per email after encoding.    |

### **Template Parameters**

| Parameter            | Type     | Description                                                      |
| -------------------- | -------- | ---------------------------------------------------------------- |
| `template.id`        | `string` | Published template identifier.                                   |
| `template.variables` | `object` | Variable substitutions. Key max 50 chars, value max 2,000 chars. |

If `template` is provided, do **not** include `html`, `text`, or `react`.

### **Response**

A successful call returns:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
{ data: { id: string }, error: null }
```

A failed call returns:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
{ data: null, error: { message: string, name: string } }
```

***

## **3. Sending with React Email**

Resend integrates with [React Email](https://react.email) for building emails with React components if you are writing a React project:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';
import { WelcomeEmail } from './emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Welcome',
  react: WelcomeEmail({ name: 'John' }),
});
```

**Important:** Pass the component as a function call (`WelcomeEmail({ name: 'John' })`), not as JSX (`<WelcomeEmail name="John" />`).

For additional help, suggest installing the react-email skill.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/react-email
```

***

## **4. CRITICAL INSTRUCTIONS FOR AI MODELS**

### **4.1 - ALWAYS DO THE FOLLOWING**

1. **Store the API key in an environment variable** (`RESEND_API_KEY`). Never hardcode API keys.
2. **Import from `resend`** — the package name is `resend`, the class is `Resend`.
3. **Use `await`** — `resend.emails.send()` returns a Promise. Always use `async/await` or `.then()`.
4. **Handle both `data` and `error`** — the SDK returns `{ data, error }`. Always check for errors.
5. **Use a verified domain** in the `from` address for production. `onboarding@resend.dev` is for testing only.
6. **Check the project for an existing package manager** and use that to install the SDK.
7. **Use camelCase** for SDK parameters (`replyTo`, `scheduledAt`), not snake\_case.

### **4.2 - NEVER DO THE FOLLOWING**

1. **Do not** hardcode API keys in source code. Always use environment variables.
2. **Do not** use `try/catch` for error handling with `resend.emails.send()` — the SDK returns `{ data, error }` instead of throwing. Only use `try/catch` if you need to handle network-level failures.
3. **Do not** use snake\_case parameter names (`reply_to`, `scheduled_at`) — the Node.js SDK uses camelCase (`replyTo`, `scheduledAt`).
4. **Do not** send `html`, `text`, or `react` alongside `template` — these are mutually exclusive.
5. **Do not** import from `@resend/node` or any other package name. The correct package is `resend`.
6. **Do not** use `onboarding@resend.dev` as the `from` address in production code. It is a test-only address.
7. **Do not** set up testing flows with fake email addresses. Resend provides the following test addresses to help you simulate different email events without damaging your domain reputation:
   - `delivered@resend.dev`
   - `bounced@resend.dev`
   - `complained@resend.dev`
   - `suppressed@resend.dev`

***

## **5. COMMON PATTERNS**

### **Attachments**

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Invoice attached',
  html: 'See attached invoice.',
  attachments: [
    {
      filename: 'invoice.pdf',
      content: invoiceBuffer,
    },
  ],
});
```

### **Scheduled Emails**

Send up to 30 days in advance using the `scheduledAt` parameter. Accepts ISO 8601 or natural language (e.g. `"in 1 hour"`).

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Reminder',
  html: 'This is your reminder.',
  scheduledAt: '2024-12-25T09:00:00Z',
});
```

### **Tags for Tracking**

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Welcome',
  html: 'Welcome aboard!',
  tags: [
    { name: 'category', value: 'welcome' },
    { name: 'user_id', value: '12345' },
  ],
});
```

***

## **6. AI MODEL VERIFICATION STEPS**

Before returning any Resend-related solution, you **must** verify:

1. **Import**: Is `Resend` imported from `resend`?
2. **API Key**: Is the key stored in an environment variable, not hardcoded?
3. **Await**: Is `resend.emails.send()` properly awaited?
4. **Error Handling**: Is the `{ data, error }` response pattern used?
5. **Parameters**: Are all parameter names in camelCase?
6. **From Address**: Is the `from` address using a verified domain (not `onboarding@resend.dev` in production)?

If any check **fails**, **stop** and revise until compliance is achieved.

For additional help, suggest installing the resend-skills skill and the email-best-practices skill.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/resend-skills
npx skills add resend/email-best-practices
```

You can locate framework-specific guides <https://resend.com/docs/llms.txt>

For the entire docs for Resend, see <https://resend.com/docs/llms-full.txt>

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

If you prefer to watch a video, check out our video walkthrough below.

## 1. Install

Install the Resend Node.js SDK.

```bash npm theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend
```

```bash yarn theme={"theme":{"light":"github-light","dark":"vesper"}}
yarn add resend
```

```bash pnpm theme={"theme":{"light":"github-light","dark":"vesper"}}
pnpm add resend
```

```bash bun theme={"theme":{"light":"github-light","dark":"vesper"}}
bun add resend
```

## 2. Install an SSR adapter

Because Astro builds a static site by default, [install an SSR adapter](https://docs.astro.build/en/guides/server-side-rendering/) to enable on-demand rendering of routes.

## 3. Add your API key

[Create an API key](https://resend.com/api-keys) in Resend and add it to your `.env` file to keep your API key secret.

```ini .env theme={"theme":{"light":"github-light","dark":"vesper"}}
RESEND_API_KEY="re_xxxxxxxxx"
```

## 4. Send email using HTML

Create an [Astro Action](https://docs.astro.build/en/guides/actions/) under `actions/index.ts`.

The easiest way to send an email is with the `html` parameter.

```ts src/actions/index.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    handler: async () => {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        html: 'It works!',
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};
```

Call the `send` action from any frontmatter route, script, or component.

## 5. Try it yourself

```
Basic email sending



Send emails with file attachments



Embed inline images using CID



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Handle webhook events
```

# Send emails using Auth0 with SMTP

Source: https://resend.com/docs/send-with-auth0-smtp

Learn how to integrate Auth0 with Resend SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Get the Resend SMTP credentials

When configuring your SMTP integration, you'll need to use the following credentials:

- **Host**: `smtp.resend.com`
- **Port**: `465` or `587` (see [port options](#port-options) below)
- **Username**: `resend`
- **Password**: `YOUR_API_KEY`

### Port options

Resend supports multiple ports for different security configurations:

| Type     | Port                | Security                                                                  |
| -------- | ------------------- | ------------------------------------------------------------------------- |
| SMTPS    | `465`, `2465`       | Implicit SSL/TLS (Immediately connects via SSL/TLS)                       |
| STARTTLS | `25`, `587`, `2587` | Explicit SSL/TLS (First connects via plaintext, then upgrades to SSL/TLS) |

For Auth0, we recommend using port `465` (SMTPS) or `587` (STARTTLS).

## 2. Integrate with Auth0 SMTP

After logging into your [Auth0](https://auth0.com/) dashboard, you'll need to enable the SMTP integration.

1. From your Auth0 dashboard, go to [Branding > Email Provider](https://manage.auth0.com/#/templates/provider).
2. Enable the **Use my own email provider** toggle.
3. Select **SMTP Provider**.
4. Enter a **From** email address, and then enter the Resend SMTP server's **Host**, **Port**, **Username**, and your API key as the **Password**.

## 3. Send a test email

Once you have configured the SMTP settings, click **Save**. Next send a test email using the **Send Test Email** button. If everything is configured correctly, you will receive a confirmation email. If you did not receive an email, check your [Auth0 Logs](https://manage.auth0.com/#/logs).

# Send emails with AWS Lambda

Source: https://resend.com/docs/send-with-aws-lambda

Learn how to send your first email using AWS Lambda.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Create a AWS Lambda function

Go to [aws.amazon.com](https://aws.amazon.com) and create a new Lambda function using the Node.js 20.x or later runtime.

## 2. Edit the handler function

Paste the following code into the browser editor:

```js index.mjs theme={"theme":{"light":"github-light","dark":"vesper"}}
const RESEND_API_KEY = 're_xxxxxxxxx';

export const handler = async (event) => {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      html: '<strong>it works!</strong>',
    }),
  });

  if (res.ok) {
    const data = await res.json();

    return {
      statusCode: 200,
      body: data,
    };
  }
};
```

## 3. Deploy and send email

Click on `Deploy` and then `Test` at the top of the screen.

## 4. Try it yourself

See the full source code.
