# What sending feature should I be using?

Source: https://resend.com/docs/knowledge-base/what-sending-feature-to-use

How to pick between our different sending features depending on your number of recipients and the nature of the message.

Resend allows you to send both **Transactional** and **Marketing** emails.

## What's the difference between Transactional and Marketing emails?

### What is a Transactional email?

A **Transactional email** is a message triggered by a user action or required for legal compliance. These emails are essential communications that users **cannot unsubscribe** from. Common examples include:

- Order confirmations
- Password reset emails
- Account notifications

Typically, transactional emails are **1-to-1** messages sent in response to a specific event.

### What is a Marketing email?

A **Marketing email** is any email that is not transactional. These can be **promotional**, **informative**, or **general communication** messages.

Marketing emails are regulated by laws like **CAN-SPAM** (US) and **CASL** (Canada), and **recipients must have the option to unsubscribe**.

Examples of marketing emails:

- Promotional offers and discounts
- Newsletters
- Product updates

Marketing emails can be **1-to-1** (e.g., abandoned cart reminders) or **1-to-many** (e.g., newsletters).

## Should I be sending a Transactional or a Marketing email?

While not exhaustive, here's a table listing different examples of emails and the most appropriate type for each example.

| Type of Message    | Type of Recipient | Transactional | Marketing |
| ------------------ | ----------------- | ------------- | --------- |
| Order confirmation | Single            | ✓             | ⨯         |
| Password reset     | Single            | ✓             | ⨯         |
| Abandoned cart     | Single            | ⨯             | ✓         |
| Newsletter         | Multiple          | ⨯             | ✓         |
| Promotional offer  | Multiple          | ⨯             | ✓         |

## How to send an email with Resend?

### How to send a Transactional email?

You can send a Transactional email using:

- Our [Send Email API](/api-reference/emails/send-email)
- Our [Batch Send API](/api-reference/emails/send-batch-emails) (send up to 100 transactional emails in one API call)

### How to send a Marketing email?

You can send Marketing emails using:

- [Resend no-code Editor](/dashboard/broadcasts/introduction) – a collaborative interface for designing emails
- [Broadcast API](/api-reference/broadcasts/create-broadcast) – for programmatic sending

# What's the difference between Opportunistic TLS vs Enforced TLS?

Source: https://resend.com/docs/knowledge-base/whats-the-difference-between-opportunistic-tls-vs-enforced-tls

Understand the different TLS configurations available.

Resend supports TLS 1.2, TLS 1.1 and TLS 1.0 for TLS connections.

There are two types of TLS configurations available:

- Opportunistic TLS
- Enforced TLS

## What is Opportunistic TLS?

Opportunistic TLS means that Resend always attempts to make a secure connection to the receiving mail server.

If the receiving server does not support TLS, the fallback is sending the message unencrypted.

## What is Enforced TLS?

Enforced TLS means that the email communication must use TLS no matter what.

If the receiving server does not support TLS, the email will not be sent.

## Is Enforced TLS better than Opportunistic TLS?

One strategy is not necessarily better than the other.

The decision is less about one option being safe and the other being unsafe, and more about one option being safe and the other being safer.

When you have Enforced TLS enabled, you might see an increase in bounce rates because some outdated mail servers do not support TLS.

So it's important to understand the different use cases for each configuration. If you're sending sensitive information like authentication emails, you might want to use Enforced TLS. If you're sending marketing emails, you might want to use Opportunistic TLS.

In simple terms, with Opportunistic TLS, delivery is more important than security. On the other hand, with Enforced TLS, security is more important than delivery.
