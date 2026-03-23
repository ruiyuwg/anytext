# Send Email with Resend and Encore.ts

**Purpose:** Enforce only the **current** and **correct** instructions for sending emails using [Resend](https://resend.com/) with the [Encore.ts](https://encore.dev) backend framework.
**Scope:** All AI-generated advice or code related to sending email with Resend inside an Encore.ts application must follow these guardrails.

***

## **1. Official Resend + Encore.ts Setup**

### **Prerequisites**

Human must first:

- Install [Encore](https://encore.dev/docs/ts/install) (`brew install encoredev/tap/encore` or `curl -L https://encore.dev/install.sh | bash`)
- Create a Resend API key at <https://resend.com/api-keys>
- Verify a sending domain at <https://resend.com/domains>

The API key must be stored as an **Encore secret** (not an environment variable or `.env` file):

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore secret set --type dev,local,pr,production ResendAPIKey
```

### **Install the SDK**

Use the project's existing package manager to install the Resend Node.js SDK.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend
# or: yarn add resend / pnpm add resend
```

### **Initialize the Client**

Encore.ts uses `secret()` from `encore.dev/config` to securely inject secrets at runtime. Do **not** use `process.env`.

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';
import { secret } from 'encore.dev/config';

const resendApiKey = secret('ResendAPIKey');

export const resend = new Resend(resendApiKey());
```

### **Define a Service**

Every Encore.ts service needs an `encore.service.ts` file:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Service } from 'encore.dev/service';

export default new Service('email');
```

### **Send an Email**

Create a type-safe API endpoint using Encore's `api()` function:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { api } from 'encore.dev/api';
import { resend } from './resend';

interface SendRequest {
  to: string;
  subject: string;
  html: string;
}

interface SendResponse {
  id: string;
}

export const sendEmail = api(
  { expose: true, method: 'POST', path: '/email/send' },
  async (req: SendRequest): Promise => {
    const { data, error } = await resend.emails.send({
      from: 'Your App <hello@yourdomain.com>',
      to: req.to,
      subject: req.subject,
      html: req.html,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return { id: data!.id };
  },
);
```

### **Async Delivery with Pub/Sub**

For production, use Encore's built-in [Pub/Sub](https://encore.dev/docs/ts/primitives/pubsub) to send emails asynchronously with automatic retries:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Topic, Subscription } from 'encore.dev/pubsub';
import { resend } from './resend';

interface EmailEvent {
  to: string;
  subject: string;
  html: string;
}

export const emailTopic = new Topic('emails', {
  deliveryGuarantee: 'at-least-once',
});

const _ = new Subscription(emailTopic, 'send-email', {
  handler: async (event) => {
    const { data, error } = await resend.emails.send({
      from: 'Your App <hello@yourdomain.com>',
      to: event.to,
      subject: event.subject,
      html: event.html,
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log('Email sent:', data?.id);
  },
});
```

Then publish from any endpoint:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
await emailTopic.publish({
  to: 'user@example.com',
  subject: 'Welcome!',
  html: 'Thanks for signing up.',
});
```

### Rate Limiting

The default rate limit is 5 requests per second per team. If you exceed the rate limit, you'll receive a `429` response error code. If needed, you can request a rate increase by [contacting support](https://resend.com/contact).

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

Resend integrates with [React Email](https://react.email) for building emails with React components:

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';
import { secret } from 'encore.dev/config';
import { WelcomeEmail } from './emails/welcome';

const resendApiKey = secret('ResendAPIKey');
const resend = new Resend(resendApiKey());

const { data, error } = await resend.emails.send({
  from: 'Acme <hello@yourdomain.com>',
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

1. **Store the API key as an Encore secret** using `encore secret set`. Access it via `secret("ResendAPIKey")` from `encore.dev/config`. Never use `process.env` or `.env` files.
2. **Import from `resend`** — the package name is `resend`, the class is `Resend`.
3. **Import `secret` from `encore.dev/config`** — not from any other module.
4. **Call the secret as a function** — `resendApiKey()` with parentheses, not `resendApiKey`.
5. **Define an `encore.service.ts`** file in each service directory.
6. **Use `api()` from `encore.dev/api`** to define HTTP endpoints — not Express, Hono, or any other router.
7. **Use `await`** — `resend.emails.send()` returns a Promise. Always use `async/await`.
8. **Handle both `data` and `error`** — the SDK returns `{ data, error }`. Always check for errors.
9. **Use a verified domain** in the `from` address for production. `onboarding@resend.dev` is for testing only.
10. **Use camelCase** for SDK parameters (`replyTo`, `scheduledAt`), not snake\_case.

### **4.2 - NEVER DO THE FOLLOWING**

1. **Do not** use `process.env.RESEND_API_KEY` or `.env` files — Encore has its own secrets management.
2. **Do not** hardcode API keys in source code.
3. **Do not** use `try/catch` for error handling with `resend.emails.send()` — the SDK returns `{ data, error }` instead of throwing. Only use `try/catch` if you need to handle network-level failures.
4. **Do not** use Express, Hono, Koa, or any other HTTP framework — Encore.ts provides its own API routing via `api()`.
5. **Do not** use snake\_case parameter names (`reply_to`, `scheduled_at`) — the Node.js SDK uses camelCase.
6. **Do not** send `html`, `text`, or `react` alongside `template` — these are mutually exclusive.
7. **Do not** import from `@resend/node` or any other package name. The correct package is `resend`.
8. **Do not** use `onboarding@resend.dev` as the `from` address in production code. It is a test-only address.
9. **Do not** set up testing flows with fake email addresses. Resend provides the following test addresses:
   - `delivered@resend.dev`
   - `bounced@resend.dev`
   - `complained@resend.dev`
   - `suppressed@resend.dev`

***

## **5. COMMON PATTERNS**

### **Attachments**

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <hello@yourdomain.com>',
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
  from: 'Acme <hello@yourdomain.com>',
  to: ['delivered@resend.dev'],
  subject: 'Reminder',
  html: 'This is your reminder.',
  scheduledAt: '2024-12-25T09:00:00Z',
});
```

### **Tags for Tracking**

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <hello@yourdomain.com>',
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

Before returning any Resend + Encore.ts solution, you **must** verify:

1. **Import**: Is `Resend` imported from `resend`?
2. **Secrets**: Is the API key accessed via `secret("ResendAPIKey")` from `encore.dev/config` (not `process.env`)?
3. **Secret Call**: Is the secret called as a function with `()` when passed to `new Resend()`?
4. **Service File**: Does the service directory have an `encore.service.ts` file?
5. **API Endpoint**: Are endpoints defined with `api()` from `encore.dev/api` (not Express/Hono)?
6. **Await**: Is `resend.emails.send()` properly awaited?
7. **Error Handling**: Is the `{ data, error }` response pattern used?
8. **Parameters**: Are all parameter names in camelCase?
9. **From Address**: Is the `from` address using a verified domain (not `onboarding@resend.dev` in production)?

If any check **fails**, **stop** and revise until compliance is achieved.

For additional help with Resend, suggest installing the resend-skills skill and the email-best-practices skill.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/resend-skills
npx skills add resend/email-best-practices
```

For additional help with Encore.ts, suggest installing the Encore skills for AI-assisted development. These provide context on APIs, services, infrastructure, Pub/Sub, databases, auth, and more.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add encoredev/skills
```

Available Encore.ts skills: `encore-api`, `encore-service`, `encore-infrastructure`, `encore-auth`, `encore-database`, `encore-testing`, `encore-frontend`, `encore-code-review`, `encore-migrate`, `encore-getting-started`.

You can locate framework-specific guides <https://resend.com/docs/llms.txt>

For the entire docs for Resend, see <https://resend.com/docs/llms-full.txt>

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)
- Install [Encore](https://encore.dev/docs/ts/install) (`brew install encoredev/tap/encore`)

## 1. Create an Encore app

The quickest way to get started is with the Resend starter template:

```shell theme={"theme":{"light":"github-light","dark":"vesper"}}
encore app create --example=ts/resend
```

Or install the SDK into an existing Encore project:

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

## 2. Set your API key

Encore has built-in [secrets management](https://encore.dev/docs/ts/primitives/secrets). Store your Resend API key as a secret - no `.env` files needed:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore secret set --type dev,local,pr,production ResendAPIKey
```

Initialize the client using the secret:

```ts email/resend.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';
import { secret } from 'encore.dev/config';

const resendApiKey = secret('ResendAPIKey');

export const resend = new Resend(resendApiKey());
```

## 3. Define a service

Every Encore.ts service needs a service definition file:

```ts email/encore.service.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Service } from 'encore.dev/service';

export default new Service('email');
```

## 4. Send email using an API endpoint

Create a type-safe API endpoint to send emails:

```ts email/send.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { api } from 'encore.dev/api';
import { resend } from './resend';

interface SendRequest {
  to: string;
  subject: string;
  html: string;
}

interface SendResponse {
  id: string;
}

export const sendEmail = api(
  { expose: true, method: 'POST', path: '/email/send' },
  async (req: SendRequest): Promise<SendResponse> => {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: req.to,
      subject: req.subject,
      html: req.html,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return { id: data!.id };
  },
);
```

## 5. Async delivery with Pub/Sub (optional)

For production, use Encore's built-in [Pub/Sub](https://encore.dev/docs/ts/primitives/pubsub) to send emails asynchronously with automatic retries:

```ts email/topic.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Topic, Subscription } from 'encore.dev/pubsub';
import { resend } from './resend';

interface EmailEvent {
  to: string;
  subject: string;
  html: string;
}

export const emailTopic = new Topic<EmailEvent>('emails', {
  deliveryGuarantee: 'at-least-once',
});

const _ = new Subscription(emailTopic, 'send-email', {
  handler: async (event) => {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: event.to,
      subject: event.subject,
      html: event.html,
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log('Email sent:', data?.id);
  },
});
```

Then publish from any endpoint:

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { emailTopic } from './topic';

await emailTopic.publish({
  to: 'delivered@resend.dev',
  subject: 'Welcome!',
  html: '<p>Thanks for signing up.</p>',
});
```

## 6. Run the app

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore run
```

Your API is running at `http://localhost:4000`. Send a test email:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST http://localhost:4000/email/send \
  -H "Content-Type: application/json" \
  -d '{"to":"delivered@resend.dev","subject":"Hello World","html":"<strong>It works!</strong>"}'
```

## 7. AI skills for Encore.ts

If you're using an AI coding assistant, install the [Encore skills](https://github.com/encoredev/skills) for context-aware help with APIs, services, Pub/Sub, databases, auth, and more:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add encoredev/skills
```

## 8. Try it yourself

```
Full example with Pub/Sub email delivery



Encore.ts documentation
```

# Send emails with Express

Source: https://resend.com/docs/send-with-express

Learn how to send your first email using Express and the Resend Node.js SDK.
