# Stripe Billing

You can bill your customers for AI usage by connecting AI Gateway to [Stripe's metered billing](https://docs.stripe.com/billing/subscriptions/usage-based/meter-events). When you include Stripe headers in your requests, AI Gateway automatically emits meter events for every successful response.

## How it works

When you include Stripe headers in your requests, AI Gateway:

1. Routes the request to the appropriate AI provider
2. On a successful response, emits two separate meter events to Stripe: one for input tokens and one for output tokens
3. Includes the customer ID, token count, token type (`input` or `output`), and model ID in each meter event

Stripe metering is **non-blocking**. If a meter event fails, AI Gateway still returns the AI response. Errors are logged for observability but don't affect the response.

## Prerequisites

Before you start, you'll need:

1. A [Stripe account](https://stripe.com) with access to the Billing Meter API
2. A billing meter in your Stripe dashboard with the event name `token-billing-tokens` and dimension payload keys `model` and `token_type`. You can set this up in one of two ways:
   - Go through the [token billing pricing plan flow](https://dashboard.stripe.com/token-billing) in Stripe to create your pricing plans, which also creates the meter with the correct configuration
   - Manually create a billing meter in your Stripe dashboard with the event name `token-billing-tokens` and add `model` and `token_type` as dimension payload keys
3. A Stripe [restricted access key](#stripe-restricted-access-keys) (`rk_...`) with permission to write meter events
4. Stripe customer IDs (`cus_...`) for the users you want to bill

## Headers

You configure Stripe billing entirely through HTTP headers. No changes to the request body are needed:

| Header                         | Required | Description                                                                          |
| ------------------------------ | -------- | ------------------------------------------------------------------------------------ |
| `stripe-customer-id`           | Yes      | The Stripe customer ID to bill (e.g., `cus_abc123`)                                  |
| `stripe-restricted-access-key` | Yes      | A Stripe restricted API key with meter event write permissions (e.g., `rk_live_...`) |

Both headers must be present for meter events to fire. If either is missing, the request proceeds normally without billing.

## Examples

#### \[&#xA;    'AI SDK'

You can pass Stripe headers at the gateway level (applies to all requests) or per-request.

**Gateway-level headers:**

```typescript filename="ai-sdk-gateway.ts"
import { createGateway } from '@ai-sdk/gateway';
import { streamText } from 'ai';

const gateway = createGateway({
  baseURL: 'https://ai-gateway.vercel.sh/v1/ai',
  apiKey: process.env.AI_GATEWAY_API_KEY,
  headers: {
    'stripe-customer-id': process.env.STRIPE_CUSTOMER_ID,
    'stripe-restricted-access-key': process.env.STRIPE_RESTRICTED_ACCESS_KEY,
  },
});

const result = streamText({
  model: gateway('anthropic/claude-sonnet-4.6'),
  prompt: 'Explain quantum computing in simple terms.',
});

for await (const part of result.textStream) {
  process.stdout.write(part);
}
```

**Per-request headers** (useful when you bill different customers from the same gateway instance):

```typescript filename="ai-sdk-per-request.ts"
import { createGateway } from '@ai-sdk/gateway';
import { streamText } from 'ai';

const gateway = createGateway({
  baseURL: 'https://ai-gateway.vercel.sh/v1/ai',
  apiKey: process.env.AI_GATEWAY_API_KEY,
});

const result = streamText({
  model: gateway('openai/gpt-5.4'),
  prompt: 'Summarize how usage-based billing works.',
  headers: {
    'stripe-customer-id': customerId,
    'stripe-restricted-access-key': process.env.STRIPE_RESTRICTED_ACCESS_KEY,
  },
});
```

#### 'TypeScript (OpenAI Chat Completions)'

```typescript filename="openai.ts"
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
  defaultHeaders: {
    'stripe-customer-id': process.env.STRIPE_CUSTOMER_ID,
    'stripe-restricted-access-key': process.env.STRIPE_RESTRICTED_ACCESS_KEY,
  },
});

const completion = await openai.chat.completions.create({
  model: 'anthropic/claude-sonnet-4.6',
  messages: [{ role: 'user', content: 'Hello!' }],
});

console.log(completion.choices[0].message.content);
```

#### 'TypeScript (Anthropic Messages API)'

```typescript filename="anthropic.ts"
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh',
  defaultHeaders: {
    'stripe-customer-id': process.env.STRIPE_CUSTOMER_ID,
    'stripe-restricted-access-key': process.env.STRIPE_RESTRICTED_ACCESS_KEY,
  },
});

const message = await anthropic.messages.create({
  model: 'anthropic/claude-sonnet-4.6',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hello!' }],
});

console.log(message.content);
```

#### 'Python (OpenAI Chat Completions)'

```python filename="openai_billing.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("AI_GATEWAY_API_KEY"),
    base_url="https://ai-gateway.vercel.sh/v1",
    default_headers={
        "stripe-customer-id": os.getenv("STRIPE_CUSTOMER_ID"),
        "stripe-restricted-access-key": os.getenv("STRIPE_RESTRICTED_ACCESS_KEY"),
    },
)

completion = client.chat.completions.create(
    model="anthropic/claude-sonnet-4.6",
    messages=[{"role": "user", "content": "Hello!"}],
)

print(completion.choices[0].message.content)
```

#### 'Python (Anthropic Messages API)'

```python filename="anthropic_billing.py"
import os
import anthropic

client = anthropic.Anthropic(
    api_key=os.getenv("AI_GATEWAY_API_KEY"),
    base_url="https://ai-gateway.vercel.sh",
    default_headers={
        "stripe-customer-id": os.getenv("STRIPE_CUSTOMER_ID"),
        "stripe-restricted-access-key": os.getenv("STRIPE_RESTRICTED_ACCESS_KEY"),
    },
)

message = client.messages.create(
    model="anthropic/claude-sonnet-4.6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}],
)

print(message.content)
```

## Stripe restricted access keys

For security, use a [Stripe restricted API key](https://docs.stripe.com/keys#limit-access) instead of your secret key. The restricted key only needs permission to **write billing meter events**.

To create one:

1. Go to **Stripe Dashboard > Developers > API keys**
2. Click **Create restricted key**
3. Enable **Write** permission for **Billing meter events**
4. Save the key (starts with `rk_live_` or `rk_test_`)

If the key is ever exposed, the blast radius is limited. It can't access customer data, create charges, or perform any other Stripe operations.

## Meter event format

Each successful request emits two meter events to Stripe's `/v2/billing/meter_events` endpoint, one for input tokens and one for output tokens:

```json
{
  "event_name": "token-billing-tokens",
  "payload": {
    "stripe_customer_id": "cus_abc123",
    "value": "1500",
    "token_type": "input",
    "model": "anthropic/claude-sonnet-4.6"
  }
}
```

The `model` field uses the AI Gateway canonical model slug (e.g., `openai/gpt-5.4`, `anthropic/claude-sonnet-4.6`).

## Reliability

AI Gateway handles Stripe meter events with the following guarantees:

- **Non-blocking**: You always get the AI response, even if Stripe metering fails
- **Idempotent**: Each meter event has a unique identifier, which prevents duplicate billing
- **Conditional**: AI Gateway only emits events on successful responses and when token counts are greater than zero
- **Observable**: Failures log `stripe_meter_failed` metrics for monitoring

title: "Image Generation Quickstart"
description: "Generate images from text prompts using AI Gateway."
last\_updated: "2026-03-23T09:40:04.394Z"
source: "https://vercel.com/docs/ai-gateway/getting-started/image"
