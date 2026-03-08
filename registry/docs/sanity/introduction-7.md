# Introduction

## Webhooks at a glance

Webhooks are a way to integrate applications with automated HTTP requests. Typically you use it to connect services by creating a special URL that accepts incoming requests. What happens when the request resolves depends on the application or service.

> \[!NOTE]
> Webhooks are typically used for, but not limited to:
>
> - Setting up notifications to systems like Slack, Discord, or email services
> - Keep external logs and update auditing systems
> - Update content in other services
> - Trigger automation and workflows

Some services only support receiving webhooks; others can both receive and send them. The Sanity Content Lake supports both sophisticated outgoing webhooks, and receiving incoming webhooks to any appropriate API endpoint, provided they have the proper payload and authentication.

## Webhooks in your Sanity Content Lake

You can create and manage outgoing webhooks in the API section of your project settings, which you'll find at [sanity.io/manage](https://www.sanity.io/manage). Webhooks can also be managed through the CLI or directly through the project APIs.

![API settings with the webhook overview showing a “Trigger site rebuild” webhook.](https://cdn.sanity.io/images/3do82whm/next/13bdd207a065dbdc51d06151b1a170d40cc26378-1053x624.png)

## Configuration

The following fields are available for webhooks. You can find them all under the webhooks section under the API in your project's settings on [sanity.io/manage](https://www.sanity.io/manage).

### Name and description

You can name your webhooks and give them a description. The description field, while optional, is a useful way to add helpful context about your webhook.

### URL

The URL field is where you specify the endpoint to which the webhook request is sent. If you want to test the webhook before entering the production endpoint, you can use services like [webhook.site](https://webhook.site), or [Beeceptor](https://beeceptor.com/). You can also use [ngrok](https://ngrok.com/) or [Localtunnel](https://localtunnel.github.io/www/) to test a hook against your local environment.

### Trigger on

Webhooks can be triggered when a document is **created**, **updated**, **deleted**, or any combination of these.

- **Create** - triggers on the creation of a new document.
- **Update** - triggers on every change to a document once created.
- **Delete** - triggers on the deletion of a document

Between these, you'll be able to react to all major interactions with the documents in question.

> \[!NOTE]
> Pro tip!
> By default, your webhooks will not trigger on draft or version events. They will only trigger when changes to the document are published and not for every single occurrence while you edit. Triggering on draft and version events can be enabled, but be careful or you may end up causing huge amounts of traffic to your endpoint!

### Filter

A GROQ filter specifying which documents will, when changed, trigger your webhook. A filter is what you commonly see between the `*[` and `]` in a GROQ query. This field supports all the GROQ functions you'd expect and has additional support for functions in the [delta::](https://www.sanity.io/docs/specifications/groq-functions) namespace, as well as [before() and after()](https://www.sanity.io/docs/specifications/groq-functions).

If left empty, it will apply to all documents (`*[]`).

Webhook filter does not support the following kind of queries and will just yield to `false`:

- Sub-queries, e.g. `_type == "book" && author._ref in *[_type=="author" && name=="John Doe"]._id`
- Cross dataset references: `_type == "book" && author->featured` where author is a [cross-dataset reference](https://www.sanity.io/docs/studio/cross-dataset-references).

See our [Intro to Filters](https://www.sanity.io/docs/developer-guides/filters-in-groq-powered-webhooks) guide for tips on using filters in webhooks.

### Projection

A GROQ projection defining the payload (or body) of the outgoing webhook request. This field supports GROQ functions in the [delta::](https://www.sanity.io/docs/specifications/groq-functions) namespace, as well as [before() and after()](https://www.sanity.io/docs/specifications/groq-functions).

If left empty, it will include the whole document *after* the change that triggered it.

> \[!WARNING]
> Gotcha
> “Sub-queries” are not supported for webhook projections. For example, the following query will *not* work: `{ "relatedPost": *[^._id in related[]._ref]{_id, title, slug}}`

See our [Intro to Projections](https://www.sanity.io/docs/developer-guides/projections-in-groq-powered-webhooks) guide for tips on using projections in webhooks.

### Status

Enable or disable your webhook.

> \[!NOTE]
> Disabling webhooks
> When a webhook is disabled all pending requests will be canceled.

### HTTP method

This field configures the webhook's [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). It can be set to POST, PUT, PATCH, DELETE, or GET. Some endpoints require incoming requests to use a specific method to work.

### HTTP headers

Additional HTTP headers. You can add multiple headers. A common example is adding an `Authorization: Bearer <token>` header to authenticate the webhook request.

> \[!WARNING]
> Gotcha
> Be mindful if you share webhooks that header configuration will be included with sensitive information if you don't remove it before sharing the link.

A webhook will always include the following headers and values:

- [connection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection): close
- [accept-encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding): gzip
- idempotency-key:  See documentation below.
- [content-type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type): application/json
- [content-length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length):
- [user-agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent): [Sanity.io](http://Sanity.io) webhook delivery
- [host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host):

As well as the following Sanity-specific headers that can be useful for logging and debugging your webhooks:

- `sanity-transaction-id`: ID of transaction.
- `sanity-transaction-time`: Timestamp of transaction.
- `sanity-dataset`: Name of dataset (also available in projection today as `sanity::dataset()`).
- `sanity-document-id`: Document ID being notified about.
- `sanity-project-id`: ID of project (also available in projection today as `sanity::projectId()`).
- `sanity-webhook-id`: ID of webhook.
- `sanity-operation`: Either create, update or delete

> \[!NOTE]
> Info
> The projection will always be returned as JSON. If you for some reason need it to be another content type, you’ll have to pass it through a serverless function or a custom endpoint and do the transformation there.

### API version

Defaults to the `v2021-03-25` of the query API. Can be overridden using the [Webhooks API](https://www.sanity.io/docs/http-reference/webhooks) in cases where you want to create webhooks with old behavior that might have been deprecated.

### Drafts and versions

By default, documents in the `drafts.` and `versions.` ID-namespace will be automatically ignored. Enable the drafts or version setting if you want the triggers and filter to apply to draft or version documents. Note: version support was added in version 2025-02-19.

> \[!WARNING]
> Gotcha
> This might cause a lot of webhooks to trigger whenever someone is working inside Sanity Studio, since almost every keystroke represents an `update`. Webhooks are limited to 1 concurrent request, but you should also make sure that your endpoint is able to handle the incoming events.

### Secret

To let receiving services verify the origin of any outgoing webhook, you may add a secret that will be hashed and included as part of the webhook request's headers. You may find our [webhook toolkit library](https://github.com/sanity-io/webhook-toolkit) helpful for working with secrets. If you want to roll your own; we model the encryption and decryption of secrets on the same standard as [Stripe](https://stripe.com/docs/webhooks/signatures#verify-manually).

## Idempotency-key

Requests include a new header that can be used to de-duplicate deliveries: `idempotency-key`.

This is necessary because webhooks will sometimes be retried, and our system has *at least one* delivery. Using the unique idempotency key lets the receiver ignore messages it has already received.

We follow [this new draft standard](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/) for idempotency.

## Sharing webhooks

Webhook configurations can be shared with a URL. This is practical if you want to quickly repurpose webhooks across projects or share with the community. You can generate a share URL by going to [sanity.io/manage/webhooks/share](https://www.sanity.io/manage/webhooks/share) or by finding the share button in the three-dot-menu in the webhooks overview.

> \[!WARNING]
> Gotcha
> Note that all the configuration is stored as part of the URL. Be mindful of any sensitive information that might be part of the configuration and that it will be shared in plain text. It can be wise to replace secret tokens and so on with capitalized placeholder text.

## Debugging webhooks

### Attempts log

> \[!TIP]
> Protip
> Use the attempts log to determine whether your webhooks are being successfully delivered.

You can find the attempts log if you click the three-dotted menu for a given webhook. The log will include information about the response a webhook request got. The attempts log is available as an [API endpoint](https://www.sanity.io/docs/http-reference/webhooks) at:

```
https://api.sanity.io/v2021-10-04/hooks/projects/${projectId}/${id}/attempts
```

### Message log

> \[!TIP]
> Protip
> Use the message log if you want to know whether all outstanding messages for a webhook have been delivered.

The message log is available as an [API endpoint](https://www.sanity.io/docs/http-reference/webhooks) at:

```
https://${projectId}.api.sanity.io/v2021-10-04/hooks/${id}/messages
```

The log contains a list of messages in the queue and any delivery attempts for each:

- If all the messages returned have the status `queued` then your processing has fallen behind. This may indicate that your webhook processing is too slow and/or that your webhook filter is too broad and is generating a vast number of messages.
- If your webhook request handler takes longer to process a message than the rate at which you are generating changes that trigger the webhook then the queue will never be cleared.

### HTTP Status codes

The HTTP status codes are used to determine if delivery is successful:

- 200-range will be treated as a success
- 400-range will be treated as undeliverable, as the server said it was a client error (with one exception—see next item)
- 429 will be retried using an exponential back-off pattern
- 500-range will be retried using an exponential back-off pattern

## Technical limits, retries, and timeouts

Webhooks are limited to 1 concurrent request.

We will retry sending a Webhook request for up to 30 minutes with an exponential back-off. This limit is subject to changes in the future.

A webhook request will time out after 30 seconds.

## Webhooks origin IP addresses

The full list of IP addresses that Sanity webhooks calls originate from, can be found on this file:

<https://www.sanity.io/files/webhooks-egress-ips.txt>

The IP addresses generally don’t change but they may be updated from time to time, on planned or unplanned/emergency maintenance. For planned changes, we aim to announce upcoming changes 7 days in advance on Sanity’s status page feed here: [https://www.sanity-status.com/](https://www.sanity-status.com/#). Unplanned maintenance changes will happen without notice, but the URL file will be immediately up-to-date.

> \[!WARNING]
> Gotcha
> If you’re aiming to use these addresses for IP filtering/security purposes, make sure you keep your tooling up-to-date with the URL above in an automated/unattended way.
