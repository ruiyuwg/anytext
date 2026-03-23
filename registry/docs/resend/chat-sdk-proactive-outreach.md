# Chat SDK Proactive Outreach

Source: https://resend.com/docs/chat-sdk-proactive-outreach

Start new email conversations proactively with the Chat SDK adapter.

By default, the Chat SDK adapter responds to inbound emails. With `openDM`, you can go the other way — start a new email thread with any address, without waiting for them to email you first.

## Sending a proactive email

Call `openDM` on the adapter to create a new thread, then post a message to it.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
const threadId = await chat.adapters.resend.openDM('user@example.com');
const thread = await chat.thread('resend', threadId);
await thread.post('Hello from the bot!');
```

You can also send card emails in proactive threads — the same card structure from [Card Emails](/chat-sdk-card-emails) works here.

## Triggering via HTTP

A common pattern is exposing an HTTP endpoint that triggers outbound emails. This lets external systems (cron jobs, webhooks from other services, admin dashboards) send emails through your bot.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
async function handleNotify(req, res) {
  const { to, message } = JSON.parse(await readBody(req));

  const threadId = await chat.adapters.resend.openDM(to);
  const thread = await chat.thread('resend', threadId);
  await thread.post(message);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ ok: true, threadId }));
}
```

Then call it:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -X POST http://localhost:3000/notify \
  -H "Content-Type: application/json" \
  -d '{"to": "user@example.com", "message": "Your order has shipped!"}'
```

## When to use this

- Welcome emails when a user signs up
- Order confirmations and shipping updates
- Alert notifications (monitoring, billing, security)
- Scheduled digests or reminders

If the recipient replies, the response arrives through the normal `onNewMention` or `onSubscribedMessage` handlers — the threading is handled automatically.

## Try it yourself

Proactive outbound emails via openDM and an HTTP POST endpoint
