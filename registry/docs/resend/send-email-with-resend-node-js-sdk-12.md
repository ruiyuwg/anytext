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

Make sure you have the latest version of the [Vercel CLI](https://vercel.com/docs/cli#installing-vercel-cli) installed.

## 1. Install dependencies

Install the Resend Node.js SDK:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend
```

## 2. Set up environment variables

Add your Resend API key to your environment variables:

```bash .env.local theme={"theme":{"light":"github-light","dark":"vesper"}}
RESEND_API_KEY=re_xxxxxxxxx
```

## 3. Create a Next.js function

Create a route file under `app/api/send/route.ts` if you're using the [App Router](https://nextjs.org/docs/app/building-your-application/routing/router-handlers).

```ts route.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'hello world',
    html: '<strong>it works!</strong>',
  });

  return Response.json(response, {
    status: response.error ? 500 : 200,
  });
}
```

## 4. Send email locally

Run function locally:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npm run dev
```

Open the endpoint URL to send an email: `http://localhost:3000/api/send`

## 5. Send email in production

Deploy function to Vercel:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
vercel
```

Make sure to add your `RESEND_API_KEY` environment variable in your Vercel project settings.

Open the endpoint URL to send an email: `https://your-project.vercel.app/api/send`

## 6. Try it yourself

See the full source code.

# Send emails using WordPress with SMTP

Source: https://resend.com/docs/send-with-wordpress-smtp

Learn how to send your first email using Wordpress.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install a plugin

First, you'll need to install and activate the [WP Mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/) plugin. Once the plugin is activated you will see the setup wizard. You can skip this step as we'll guide you through how to configure the plugin for Resend. Just click on **Go to the Dashboard** at the bottom of the screen to exit the setup wizard.

## 2. Configuration

From your admin dashboard, visit the **WP Mail SMTP > Settings** page to configure the plugin. Firstly, configure your **From Email**, **From Name**, and **Return Path**. Next, we'll configure the SMTP settings for Resend. Select **Other SMTP** in the **Mailer** section.

In the **Other SMTP** section, configure the following settings:

- **SMTP Host**: `smtp.resend.com`
- **Encryption**: `SSL`
- **SMTP Port**: `465`
- **Auto TLS**: `ON`
- **Authentication**: `ON`
- **SMTP Username**: `resend`
- **SMTP Password**: `YOUR_API_KEY`

Make sure to replace `YOUR_API_KEY` with an existing key or create a new [API Key](https://resend.com/api-keys).

## 3. Sending a test email

From your admin dashboard, visit the **WP Mail SMTP > Tools** page to send a test email.

# Send emails with v0 and Resend

Source: https://resend.com/docs/v0-integration

Learn how to add the Resend integration to your v0 project.

[v0](https://v0.dev) by Vercel is a platform for building web sites, tools, apps, and projects via chat. You can add Resend in a v0 project by asking the chat to add email sending with Resend.

## 1. Add your Resend API key

To use Resend with v0, you'll need to add a Resend API key, which you can create in the [Resend Dashboard](https://resend.com/api-keys).

Do not share your API key with others or expose it in the browser or other
client-side code.

## 2. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in v0 (or ask the chat to update these fields).

Get more help adding a custom domain in [Resend's documentation](/dashboard/domains/introduction).

# contact.created

Source: https://resend.com/docs/webhooks/contacts/created

Received when a contact is created.

Event triggered whenever a **contact was successfully created**.

*Note: When importing multiple contacts using CSV, these events won't be triggered. [Contact support](https://resend.com/contact) if you have any questions.*

```
Unique identifier for the contact



Unique identifier for the audience this contact belongs to



Array of segment IDs the contact belongs to



ISO 8601 timestamp when the contact was created



ISO 8601 timestamp when the contact was last updated



Contact's email address



Contact's first name



Contact's last name



Whether the contact has unsubscribed from all emails sent from your team
```

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "contact.created",
  "created_at": "2024-11-17T19:32:22.980Z",
  "data": {
    "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
    "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
    "segment_ids": ["78261eea-8f8b-4381-83c6-79fa7120f1cf"],
    "created_at": "2024-11-17T19:32:22.980Z",
    "updated_at": "2024-11-17T19:32:22.980Z",
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false
  }
}
```

# contact.deleted

Source: https://resend.com/docs/webhooks/contacts/deleted

Received when a contact is deleted.

Event triggered whenever a **contact was successfully deleted**.

```
Unique identifier for the contact



Unique identifier for the audience this contact belongs to



Array of segment IDs the contact belongs to



ISO 8601 timestamp when the contact was created



ISO 8601 timestamp when the contact was last updated



Contact's email address



Contact's first name



Contact's last name



Whether the contact has unsubscribed from all emails sent from your team
```

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "contact.deleted",
  "created_at": "2024-11-17T19:32:22.980Z",
  "data": {
    "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
    "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
    "segment_ids": ["78261eea-8f8b-4381-83c6-79fa7120f1cf"],
    "created_at": "2024-11-10T15:11:94.110Z",
    "updated_at": "2024-11-17T19:32:22.980Z",
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false
  }
}
```

# contact.updated

Source: https://resend.com/docs/webhooks/contacts/updated

Received when a contact is updated.

Event triggered whenever a **contact was successfully updated**.

```
Unique identifier for the contact



Unique identifier for the audience this contact belongs to



Array of segment IDs the contact belongs to



ISO 8601 timestamp when the contact was created



ISO 8601 timestamp when the contact was last updated



Contact's email address



Contact's first name



Contact's last name



Whether the contact has unsubscribed from all emails sent from your team
```

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "contact.updated",
  "created_at": "2024-10-11T23:47:56.678Z",
  "data": {
    "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
    "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
    "segment_ids": ["78261eea-8f8b-4381-83c6-79fa7120f1cf"],
    "created_at": "2024-10-10T15:11:94.110Z",
    "updated_at": "2024-10-11T23:47:56.678Z",
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false
  }
}
```
