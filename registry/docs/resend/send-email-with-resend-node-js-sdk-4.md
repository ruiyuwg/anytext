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

## 1. Install

Get the Resend Node.js SDK.

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

## 2. Send email using HTML

The easiest way to send an email is by using the `html` parameter.

```js server.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import express, { Request, Response } from "express";
import { Resend } from "resend";

const app = express();
const resend = new Resend("re_xxxxxxxxx");

app.get("/", async (req: Request, res: Response) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
```

## 3. Try it yourself

```
Basic email sending



Send emails with file attachments



Embed inline images using CID



Send emails using Resend hosted templates



Schedule emails for future delivery



Prevent email threading on Gmail



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```

# Send emails with FastAPI

Source: https://resend.com/docs/send-with-fastapi

Learn how to send your first email using FastAPI and the Resend Python SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the Resend Python SDK.

```bash Pip theme={"theme":{"light":"github-light","dark":"vesper"}}
pip install resend
```

## 2. Send email using HTML

The easiest way to send an email is by using the `html` parameter.

```py main.py theme={"theme":{"light":"github-light","dark":"vesper"}}
import os
from typing import Dict
from fastapi import FastAPI
import resend

resend.api_key = os.environ["RESEND_API_KEY"]

app = FastAPI()

@app.post("/")
def send_mail() -> Dict:
    params: resend.Emails.SendParams = {
        "from": "Acme <onboarding@resend.dev>",
        "to": ["delivered@resend.dev"],
        "subject": "hello world",
        "html": "<strong>it works!</strong>",
    }
    email: resend.Emails.SendResponse = resend.Emails.send(params)
    return email
```

## 3. Try it yourself

```
Full FastAPI web application



Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```

# Send emails with Flask

Source: https://resend.com/docs/send-with-flask

Learn how to send your first email using Flask and the Resend Python SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the Resend Python SDK.

```bash Pip theme={"theme":{"light":"github-light","dark":"vesper"}}
pip install resend
```

## 2. Send email using HTML

The easiest way to send an email is by using the `html` parameter.

```py index.py theme={"theme":{"light":"github-light","dark":"vesper"}}
import resend
import os
from flask import Flask, jsonify

resend.api_key = os.environ["RESEND_API_KEY"]

app = Flask(__name__)


@app.route("/")
def index():
    params: resend.Emails.SendParams = {
        "from": "Acme <onboarding@resend.dev>",
        "to": ["delivered@resend.dev"],
        "subject": "hello world",
        "html": "<strong>it works!</strong>",
    }

    r = resend.Emails.send(params)
    return jsonify(r)


if __name__ == "__main__":
    app.run()
```

## 3. Try it yourself

```
Full Flask web application



Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```

# Send emails with Go

Source: https://resend.com/docs/send-with-go

Learn how to send your first email using the Resend Go SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the Resend Go SDK.

```bash bash theme={"theme":{"light":"github-light","dark":"vesper"}}
go get github.com/resend/resend-go/v3
```

## 2. Send email using HTML

The easiest way to send an email is by using the `html` parameter.

```Go main.go theme={"theme":{"light":"github-light","dark":"vesper"}}
package main

import (
	"fmt"

	"github.com/resend/resend-go/v3"
)

func main() {
    client := resend.NewClient("re_xxxxxxxxx")

    params := &resend.SendEmailRequest{
        From:    "Acme <onboarding@resend.dev>",
        To:      []string{"delivered@resend.dev"},
        Html:    "<strong>hello world</strong>",
        Subject: "Hello from Golang",
        Cc:      []string{"cc@example.com"},
        Bcc:     []string{"bcc@example.com"},
        ReplyTo: "replyto@example.com",
    }

    sent, err := client.Emails.Send(params)
    if err != nil {
        fmt.Println(err.Error())
        return
    }
    fmt.Println(sent.Id)
}
```

## 3. Try it yourself

```
Basic email sending



Send emails with file attachments



Embed inline images using CID



Send emails using Resend hosted templates



Schedule emails for future delivery



Prevent email threading on Gmail



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow



Full Chi web framework application



Full Gin web framework application
```

# Send emails with Hono

Source: https://resend.com/docs/send-with-hono

Learn how to send your first email using Hono and the Resend Node.js SDK.
