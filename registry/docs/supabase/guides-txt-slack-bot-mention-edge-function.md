# Slack Bot Mention Edge Function

The Slack Bot Mention Edge Function allows you to process mentions in Slack and respond accordingly.

## Configuring Slack apps

For your bot to seamlessly interact with Slack, you'll need to configure Slack Apps:

1. Navigate to the Slack Apps page.
2. Under "Event Subscriptions," add the URL of the `slack-bot-mention` function and click to verify the URL.
3. The Edge function will respond, confirming that everything is set up correctly.
4. Add `app-mention` in the events the bot will subscribe to.

## Creating the Edge Function

Deploy the following code as an Edge function using the CLI:

```bash
supabase --project-ref nacho_slacker secrets \
set SLACK_TOKEN=<xoxb-0000000000-0000000000-01010101010nacho101010>
```

Here's the code of the Edge Function, you can change the response to handle the text received:

```ts index.ts
import { WebClient } from 'https://deno.land/x/slack_web_api@6.7.2/mod.js'

const slackBotToken = Deno.env.get('SLACK_TOKEN') ?? ''
const botClient = new WebClient(slackBotToken)

console.log(`Slack URL verification function up and running!`)
Deno.serve(async (req) => {
  try {
    const reqBody = await req.json()
    console.log(JSON.stringify(reqBody, null, 2))
    const { token, challenge, type, event } = reqBody

    if (type == 'url_verification') {
      return new Response(JSON.stringify({ challenge }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      })
    } else if (event.type == 'app_mention') {
      const { user, text, channel, ts } = event
      // Here you should process the text received and return a response:
      const response = await botClient.chat.postMessage({
        channel: channel,
        text: `Hello <@${user}>!`,
        thread_ts: ts,
      })
      return new Response('ok', { status: 200 })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
```

# Handling Stripe Webhooks

Handling signed Stripe Webhooks with Edge Functions. [View on GitHub](https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/stripe-webhooks/index.ts).

```typescript index.ts
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Import via bare specifier thanks to the import_map.json file.
import Stripe from 'https://esm.sh/stripe@14?target=denonext'

const stripe = new Stripe(Deno.env.get('STRIPE_API_KEY') as string, {
  // This is needed to use the Fetch API rather than relying on the Node http
  // package.
  apiVersion: '2024-11-20'
})
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider()

console.log('Hello from Stripe Webhook!')

Deno.serve(async (request) => {
  const signature = request.headers.get('Stripe-Signature')

  // First step is to verify the event. The .text() method must be used as the
  // verification relies on the raw request body rather than the parsed JSON.
  const body = await request.text()
  let receivedEvent
  try {
    receivedEvent = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
      undefined,
      cryptoProvider
    )
  } catch (err) {
    return new Response(err.message, { status: 400 })
  }
  console.log(`🔔 Event received: ${receivedEvent.id}`)
  return new Response(JSON.stringify({ ok: true }), { status: 200 })
});
```

# Building a Telegram Bot

Handle Telegram Bot Webhooks with the [grammY framework](https://grammy.dev/). grammY is an open source Telegram Bot Framework which makes it easy to handle and respond to incoming messages. [View on GitHub](https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/telegram-bot).
