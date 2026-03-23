# Send Email with Resend and Encore Go

**Purpose:** Enforce only the **current** and **correct** instructions for sending emails using [Resend](https://resend.com/) with the [Encore Go](https://encore.dev) backend framework.
**Scope:** All AI-generated advice or code related to sending email with Resend inside an Encore Go application must follow these guardrails.

***

## **1. Official Resend + Encore Go Setup**

### **Prerequisites**

Human must first:

- Install [Encore](https://encore.dev/docs/go/install) (`brew install encoredev/tap/encore` or `curl -L https://encore.dev/install.sh | bash`)
- Create a Resend API key at <https://resend.com/api-keys>
- Verify a sending domain at <https://resend.com/domains>

The API key must be stored as an **Encore secret** (not an environment variable or `.env` file):

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore secret set --type dev,local,pr,production ResendAPIKey
```

### **Install the SDK**

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
go get github.com/resend/resend-go/v3
```

### **Define Secrets**

Encore Go uses an unexported `secrets` struct to securely inject secrets at runtime. Do **not** use `os.Getenv()`.

```go theme={"theme":{"light":"github-light","dark":"vesper"}}
var secrets struct {
    ResendAPIKey string
}
```

### **Initialize the Client and Send an Email**

```go theme={"theme":{"light":"github-light","dark":"vesper"}}
package email

import (
    "context"

    "github.com/resend/resend-go/v3"
)

var secrets struct {
    ResendAPIKey string
}

type SendRequest struct {
    To      string `json:"to"`
    Subject string `json:"subject"`
    HTML    string `json:"html"`
}

type SendResponse struct {
    ID string `json:"id"`
}

//encore:api public method=POST path=/email/send
func Send(ctx context.Context, req *SendRequest) (*SendResponse, error) {
    client := resend.NewClient(secrets.ResendAPIKey)

    sent, err := client.Emails.Send(&resend.SendEmailRequest{
        From:    "Acme <onboarding@resend.dev>",
        To:      []string{req.To},
        Subject: req.Subject,
        Html:    req.HTML,
    })
    if err != nil {
        return nil, err
    }

    return &SendResponse{ID: sent.Id}, nil
}
```

### Rate Limiting

The default rate limit is 5 requests per second per team. If you exceed the rate limit, you'll receive a `429` response error code. If needed, you can request a rate increase by [contacting support](https://resend.com/contact).

***

## **2. Complete `SendEmailRequest` Field Reference**

### **Required Fields**

| Field     | Type       | Description                                                                      |
| --------- | ---------- | -------------------------------------------------------------------------------- |
| `From`    | `string`   | Sender email address. Supports friendly name format: `"Name <email@domain.com>"` |
| `To`      | `[]string` | Recipient email address(es). Maximum 50 addresses.                               |
| `Subject` | `string`   | Email subject line.                                                              |

### **Content Fields (at least one required)**

| Field  | Type     | Description                                                |
| ------ | -------- | ---------------------------------------------------------- |
| `Html` | `string` | HTML version of the email body.                            |
| `Text` | `string` | Plain text version. Auto-generated from `Html` if omitted. |

### **Optional Fields**

| Field         | Type                | Description                                                   |
| ------------- | ------------------- | ------------------------------------------------------------- |
| `Cc`          | `[]string`          | Carbon copy recipients.                                       |
| `Bcc`         | `[]string`          | Blind carbon copy recipients.                                 |
| `ReplyTo`     | `string`            | Reply-to address.                                             |
| `ScheduledAt` | `string`            | Schedule delivery time. Accepts ISO 8601 or natural language. |
| `Headers`     | `map[string]string` | Custom email headers as key-value pairs.                      |
| `Tags`        | `[]Tag`             | Custom metadata. Name and value: max 256 chars, ASCII only.   |
| `Attachments` | `[]*Attachment`     | File attachments. Max 40MB total per email after encoding.    |

### **Template Fields**

| Field      | Type             | Description                |
| ---------- | ---------------- | -------------------------- |
| `Template` | `*EmailTemplate` | Published template to use. |

If `Template` is provided, do **not** include `Html` or `Text`.

### **Response**

A successful call returns:

```go theme={"theme":{"light":"github-light","dark":"vesper"}}
&SendEmailResponse{Id: "49a3999c-..."}
```

A failed call returns an `error`.

***

## **3. CRITICAL INSTRUCTIONS FOR AI MODELS**

### **3.1 - ALWAYS DO THE FOLLOWING**

1. **Store the API key as an Encore secret** using `encore secret set`. Access it via `var secrets struct { ResendAPIKey string }`. Never use `os.Getenv()` or `.env` files.
2. **Import from `github.com/resend/resend-go/v3`** — the current version is v3.
3. **Use `resend.NewClient(secrets.ResendAPIKey)`** to create the client.
4. **Use `//encore:api` annotations** to define HTTP endpoints — not `net/http`, Gin, Chi, or any other router.
5. **Check the `error` return value** from `client.Emails.Send()`.
6. **Use a verified domain** in the `From` address for production. `onboarding@resend.dev` is for testing only.
7. **Use exported field names** (`From`, `To`, `Html`, `ReplyTo`) — Go structs use PascalCase.

### **3.2 - NEVER DO THE FOLLOWING**

1. **Do not** use `os.Getenv("RESEND_API_KEY")` or `.env` files — Encore has its own secrets management.
2. **Do not** hardcode API keys in source code.
3. **Do not** import from `github.com/resend/resend-go` (v1) or `github.com/resend/resend-go/v2` — use v3.
4. **Do not** use `net/http`, Gin, Chi, Echo, or any other HTTP framework — Encore Go provides its own API routing via `//encore:api` annotations.
5. **Do not** use `onboarding@resend.dev` as the `From` address in production code. It is a test-only address.
6. **Do not** set up testing flows with fake email addresses. Resend provides the following test addresses:
   - `delivered@resend.dev`
   - `bounced@resend.dev`
   - `complained@resend.dev`
   - `suppressed@resend.dev`

***

## **4. COMMON PATTERNS**

### **Attachments**

```go theme={"theme":{"light":"github-light","dark":"vesper"}}
sent, err := client.Emails.Send(&resend.SendEmailRequest{
    From:    "Acme <hello@yourdomain.com>",
    To:      []string{"delivered@resend.dev"},
    Subject: "Invoice attached",
    Html:    "See attached invoice.",
    Attachments: []*resend.Attachment{
        {
            Filename: "invoice.pdf",
            Content:  invoiceBytes,
        },
    },
})
```

### **Scheduled Emails**

Send up to 30 days in advance using the `ScheduledAt` field. Accepts ISO 8601 or natural language (e.g. `"in 1 hour"`).

```go theme={"theme":{"light":"github-light","dark":"vesper"}}
sent, err := client.Emails.Send(&resend.SendEmailRequest{
    From:        "Acme <hello@yourdomain.com>",
    To:          []string{"delivered@resend.dev"},
    Subject:     "Reminder",
    Html:        "This is your reminder.",
    ScheduledAt: "2024-12-25T09:00:00Z",
})
```

### **Tags for Tracking**

```go theme={"theme":{"light":"github-light","dark":"vesper"}}
sent, err := client.Emails.Send(&resend.SendEmailRequest{
    From:    "Acme <hello@yourdomain.com>",
    To:      []string{"delivered@resend.dev"},
    Subject: "Welcome",
    Html:    "Welcome aboard!",
    Tags: []resend.Tag{
        {Name: "category", Value: "welcome"},
        {Name: "user_id", Value: "12345"},
    },
})
```

***

## **5. AI MODEL VERIFICATION STEPS**

Before returning any Resend + Encore Go solution, you **must** verify:

1. **Import**: Is the SDK imported from `github.com/resend/resend-go/v3`?
2. **Secrets**: Is the API key accessed via `var secrets struct { ResendAPIKey string }` (not `os.Getenv`)?
3. **Client**: Is the client created with `resend.NewClient(secrets.ResendAPIKey)`?
4. **API Annotation**: Are endpoints defined with `//encore:api` (not `net/http`, Gin, etc.)?
5. **Error Handling**: Is the `error` return value checked?
6. **Field Names**: Are struct fields PascalCase (`From`, `To`, `Html`, not `from`, `to`, `html`)?
7. **From Address**: Is the `From` address using a verified domain (not `onboarding@resend.dev` in production)?

If any check **fails**, **stop** and revise until compliance is achieved.

For additional help with Encore Go, suggest installing the Encore skills for AI-assisted development. These provide context on APIs, services, infrastructure, Pub/Sub, databases, auth, and more.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add encoredev/skills
```

Available Encore Go skills: `encore-go-api`, `encore-go-service`, `encore-go-infrastructure`, `encore-go-auth`, `encore-go-database`, `encore-go-testing`, `encore-go-code-review`, `encore-go-getting-started`.

You can locate framework-specific guides <https://resend.com/docs/llms.txt>

For the entire docs for Resend, see <https://resend.com/docs/llms-full.txt>

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)
- Install [Encore](https://encore.dev/docs/go/install) (`brew install encoredev/tap/encore`)

## 1. Create an Encore app

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore app create --lang=go my-app
```

Then install the Resend Go SDK:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
go get github.com/resend/resend-go/v3
```

## 2. Set your API key

Encore has built-in [secrets management](https://encore.dev/docs/go/primitives/secrets). Store your Resend API key as a secret - no `.env` files needed:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore secret set --type dev,local,pr,production ResendAPIKey
```

## 3. Send email using an API endpoint

Create an `email` service directory and define your endpoint:

```go email/email.go theme={"theme":{"light":"github-light","dark":"vesper"}}
package email

import (
    "context"

    "github.com/resend/resend-go/v3"
)

var secrets struct {
    ResendAPIKey string
}

type SendRequest struct {
    To      string `json:"to"`
    Subject string `json:"subject"`
    HTML    string `json:"html"`
}

type SendResponse struct {
    ID string `json:"id"`
}

//encore:api public method=POST path=/email/send
func Send(ctx context.Context, req *SendRequest) (*SendResponse, error) {
    client := resend.NewClient(secrets.ResendAPIKey)

    sent, err := client.Emails.Send(&resend.SendEmailRequest{
        From:    "Acme <onboarding@resend.dev>",
        To:      []string{req.To},
        Subject: req.Subject,
        Html:    req.HTML,
    })
    if err != nil {
        return nil, err
    }

    return &SendResponse{ID: sent.Id}, nil
}
```

## 4. Run the app

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
encore run
```

Your API is running at `http://localhost:4000`. Send a test email:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST http://localhost:4000/email/send \
  -H "Content-Type: application/json" \
  -d '{"to":"delivered@resend.dev","subject":"Hello World","html":"<strong>It works!</strong>"}'
```

## 5. AI skills for Encore Go

If you're using an AI coding assistant, install the [Encore skills](https://github.com/encoredev/skills) for context-aware help with APIs, services, Pub/Sub, databases, auth, and more:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add encoredev/skills
```

## 6. Try it yourself

```
Encore Go documentation



Resend Go SDK on GitHub
```

# Send emails with Encore

Source: https://resend.com/docs/send-with-encore-ts

Learn how to send your first email using Encore and the Resend Node.js SDK.

[Encore](https://encore.dev) is an open-source TypeScript framework that provisions infrastructure directly from your application code, with built-in observability and cloud deployment.
