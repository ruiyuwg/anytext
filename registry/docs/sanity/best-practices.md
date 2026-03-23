# Best practices

The below is our best practice guidelines on how webhooks should be used and how your system should handle them.

## Configuration

GROQ webhooks should be configured to trigger on the narrowest possible set of changes. Make sure the filter is as specific as possible and avoid triggering webhooks on draft changes unless absolutely necessary. Drafts can change frequently as content is being edited, which could result in a high volume of webhooks that may be costly or overwhelming for your systems.

## Delays

In rare circumstances there can be delays in the delivery of webhooks. If receiving timely updates is critical to your app, this should be considered in webhook handling. For example, you could check the `sanity-transaction-time` header and compare this to the current date and time - if you see times over a certain age you might trigger a catch up via API calls.

Delays could also mean webhooks can potentially be received out of order. Therefore is can be useful to check the `_updatedAt` value on a document to ensure you're using the latest data. It can sometimes be worth considering whether you're best to use the data in a webhook or use the webhook to trigger a query.

## Recovery from downtime

It's important to consider that downtime can occur with any webhook setup, whether it's on the side of your application or the provider itself.

To mitigate the impact of potential downtime, it's recommended to implement a mechanism for recovering missed data via API calls. This ensures your application can stay up-to-date even if webhooks are temporarily unavailable.

## Idempotence

Idempotence in the context of webhooks refers to the ability to process the same webhook payload multiple times without adverse effects.

For example, if a webhook is delivered and processed successfully, but the acknowledgement response fails to reach the sender due to a network issue, the sender might retry sending the same payload. In an idempotent system, receiving and processing the same payload again would not result in duplicate data or unintended side effects.

Sanity provides an `idempotency-key` header which you can use to ignore messages that might be in a state of being processed or that have been processed already. By checking the `idempotency-key`, you can ensure that your application processes each unique webhook payload only once, even if it is delivered multiple times.

## Reconciliation

Relying solely on webhooks isn't recommended in any application - delivery can't always always guaranteed due to network issues, application downtime, or other factors.

You might want to run regular sync jobs – at hourly, daily or other intervals – to make sure everything updated between syncs is reconciled. This sync could filter using the `_updatedAt` field on Sanity documents to find everything which has changed since the last sync.

## Scalability

As the volume of webhooks received by your application increases, it can become challenging to process all of them in real-time. To handle this scalability issue, it's recommended to implement a queueing system for incoming webhooks.

When a webhook is received, instead of processing it immediately, your application should add it to a queue for asynchronous processing. This allows your webhook endpoint to quickly acknowledge receipt of the webhook and return a response within the 30-second timeout window Sanity implements.

It's important to note that the response returned by your webhook endpoint should indicate that the webhook was received successfully, not that it was fully processed. This distinction is crucial because the actual processing of the webhook happens asynchronously through the queue.

By decoupling the receipt and processing of webhooks using a queue, you can ensure that your application remains responsive and can handle a high volume of incoming webhooks without overwhelming your system. The queue acts as a buffer, allowing you to process webhooks at a pace that your application can handle, while still acknowledging their receipt in a timely manner.

Implementing a robust queueing system for webhook processing is a best practice for building scalable and reliable applications that can handle increasing webhook traffic as your system grows.

## Security

When setting up webhooks, it's important to consider security measures to protect your application and data. Webhooks are sent across HTTP and you will want to ensure the data you receive is sent from Sanity.

Here are a few key points to keep in mind:

- **Secrets**: Sanity allows you to configure a secret token for your webhooks. This secret should be a unique, random string that is only known to your application and Sanity. When Sanity sends a webhook payload to your endpoint, it includes this secret in the request headers. Your application should verify the secret to ensure that the webhook is coming from a trusted source (Sanity) and not from a malicious actor.
- **Sanity Webhook Toolkit**: Sanity offers a [webhook toolkit](https://github.com/sanity-io/webhook-toolkit), which is a set of utilities for handling webhooks in a secure and reliable manner. The toolkit includes features like signature verification, which helps ensure the integrity and authenticity of the webhook payloads you receive. Although the toolkit is written in TypeScript, the concepts and principles it promotes are language-agnostic.
- **IP Whitelisting**: Sanity provides a [specific set of IP addresses](https://www.sanity.io/files/webhooks-egress-ips.txt) from which webhooks are sent. You can configure your application to only accept webhook requests originating from these trusted IP addresses. This adds an extra layer of security by preventing unauthorized sources from sending fake webhook payloads to your endpoint.

By implementing these security measures, you can protect your application from potential threats and ensure that the webhooks you receive are genuine and trustworthy.

# Webhooks API reference

The Webhooks API allows you to programmatically interact with and monitor webhooks.

#### Want to get started?

[GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks)

[Webhook Best Practices](https://www.sanity.io/docs/content-lake/webhook-best-practices)

In addition to webhooks, you can also react to document changes with [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction).

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- Manipulating documents requires read+write access permission for the affected document type. In most cases, this includes the Editor, Developer, or Administrator roles.

## Webhook types

Sanity provides two types of webhooks, transaction and document. Document webhooks are preferred because they are more flexible and powerful.

### Document

A document webhook triggers every time a document is created, updated, or deleted. If a transaction updates 3 documents, 3 webhooks will be executed. Document webhook also allows for more granular filtering and customizable payloads with GROQ.

### Transaction

A transaction webhook triggers once per dataset, meaning if you batch together multiple document mutations in one transaction only one webhook will be executed.
