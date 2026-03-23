# Chat SDK Card Emails

Source: https://resend.com/docs/chat-sdk-card-emails

Send rich HTML card emails using the Chat SDK and React Email.

The Chat SDK adapter renders Card elements into styled HTML emails using `@react-email/components`. This lets you send structured, branded messages without writing raw HTML.

## Card structure

A card has a `type`, `title`, optional `subtitle`, and `children` array. Children can be text blocks, dividers, link buttons, or action groups.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import type { CardElement } from 'chat';

const card: CardElement = {
  type: 'card',
  title: 'Order Confirmed',
  subtitle: 'Order #1234',
  children: [
    { type: 'text', content: 'Your order has been shipped.' },
    { type: 'divider' },
    {
      type: 'actions',
      children: [
        {
          type: 'link-button',
          label: 'Track Order',
          url: 'https://example.com/track/1234',
        },
      ],
    },
  ],
};
```

### Child element types

| Type          | Fields         | Description                       |
| ------------- | -------------- | --------------------------------- |
| `text`        | `content`      | Plain text paragraph              |
| `divider`     | —              | Horizontal rule                   |
| `link-button` | `label`, `url` | Clickable button that opens a URL |
| `actions`     | `children`     | Container for link buttons        |

## Sending a card

Pass the card object and a `fallbackText` string to `thread.post()`. The fallback is used by email clients that don't render HTML.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
chat.onNewMention(async (thread, message) => {
  await thread.subscribe();
  await thread.post({
    card: {
      type: 'card',
      title: 'Welcome!',
      subtitle: 'Thanks for reaching out',
      children: [
        {
          type: 'text',
          content: "Hi! Thanks for emailing us. We'll get back to you shortly.",
        },
        { type: 'divider' },
        {
          type: 'actions',
          children: [
            {
              type: 'link-button',
              label: 'Visit our website',
              url: 'https://resend.com',
            },
          ],
        },
      ],
    },
    fallbackText: 'Welcome! Thanks for reaching out.',
  });
});
```

Always include `fallbackText`. Some email clients strip HTML entirely, and the fallback text is what recipients will see in that case.

## Try it yourself

Full working example that sends a styled card on first contact
