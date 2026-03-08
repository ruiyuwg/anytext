# Status transitions and finalization

Learn about invoice status transitions and finalization.

The following graphic shows the different ways that an invoice can transition from status to status:
![](https://b.stripecdn.com/docs-statics-srv/assets/invoice_states_diagram_simplified.6990197f2efb082ee5885ae3afb40fda.svg)

Status transitions and finalization

## Transitions and endpoints

The following table outlines the status transitions and their endpoints. It also lists the *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) that are emitted by the endpoint, and the resulting status for each:

| Status          | API Endpoint                                                                                           | Emitted Webhook                | End Status      |
| --------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ | --------------- |
| `draft`         | [DELETE /v1/invoices/:id](https://docs.stripe.com/api/invoices/delete.md)                              | `invoice.deleted`              | (Deleted)       |
| `draft`         | [POST /v1/invoices/:id/finalize](https://docs.stripe.com/api/invoices/finalize.md)                     | `invoice.finalized`            | `open`          |
| `open`          | [POST /v1/invoices/:id/pay](https://docs.stripe.com/api/invoices/pay.md)                               | `invoice.paid`                 | `paid`          |
| `open`          | [POST /v1/invoices/:id/pay](https://docs.stripe.com/api/invoices/pay.md)                               | `invoice.payment_failed`       | `open`          |
| `open`          | [POST /v1/invoices/:id/send](https://docs.stripe.com/api/invoices/send.md)                             | `invoice.sent`                 | `open`          |
| `open`          | [POST /v1/invoices/:id/void](https://docs.stripe.com/api/invoices/void.md)                             | `invoice.voided`               | `void`          |
| `open`          | [POST /v1/invoices/:id/mark\_uncollectible](https://docs.stripe.com/api/invoices/mark_uncollectible.md) | `invoice.marked_uncollectible` | `uncollectible` |
| `uncollectible` | [POST /v1/invoices/:id/pay](https://docs.stripe.com/api/invoices/pay.md)                               | `invoice.paid`                 | `paid`          |
| `uncollectible` | [POST /v1/invoices/:id/pay](https://docs.stripe.com/api/invoices/pay.md)                               | `invoice.payment_failed`       | `uncollectible` |
| `uncollectible` | [POST /v1/invoices/:id/void](https://docs.stripe.com/api/invoices/void.md)                             | `invoice.voided`               | `void`          |

## Finalize draft invoices

When you enable [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection.md), Stripe automatically finalizes, and begins automatic collection of the [invoice](https://docs.stripe.com/billing/invoices/subscription.md). We wait 1 hour after receiving a successful response to the `invoice.created` event from all listening webhooks before attempting payment. If we don’t receive a successful response within 72 hours, we attempt to finalize and send the invoice. [You can configure a longer grace period](https://docs.stripe.com/billing/subscriptions/usage-based/configure-grace-period.md).

Invoices are initially created with `status=draft`, and you can only edit them while they’re in this state. When an invoice is ready to be paid, finalize it. Finalizing an invoice sets `status=open` on the invoice. You can manually finalize an invoice in the [Dashboard](https://docs.stripe.com/invoicing/dashboard.md) or by using the [Finalize](https://docs.stripe.com/api/invoices/finalize.md) endpoint. If you’ve configured [webhook](https://docs.stripe.com/webhooks.md) endpoints, you receive an `invoice.finalized` event when an invoice finalizes.

```curl
curl -X POST https://api.stripe.com/v1/invoices/{{INVOICE_ID}}/finalize \
  -u "<<YOUR_SECRET_KEY>>:"
```

In live mode, if your webhook endpoint doesn’t [respond properly](https://docs.stripe.com/webhooks.md), Stripe continues retrying the webhook notification for up to 3 days with an exponential back off. In a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), we retry three times over a few hours. During that time, we won’t attempt to charge the customer unless we receive a successful response. We also send you an email to notify you that the webhook is failing.

This behavior applies to all webhook endpoints defined on your account, including cases where a [Connect application](https://stripe.com/works-with) or other third-party service is having trouble handling incoming webhooks.

## Post-finalization

Finalizing an invoice does the following:

- It allows the invoice to be paid.
- It ensures that an invoice number is present.
- It makes certain properties [immutable](https://docs.stripe.com/invoicing/integration/workflow-transitions.md#immutable) on the invoice.
- It creates an incomplete payment intent for the invoice.
- It generates a unique URL where someone can pay the invoice, and a link to download a [PDF of the invoice](https://docs.stripe.com/api/invoices/object.md#invoice_object-invoice_pdf).

> If an invoice isn’t finalized, you can’t collect payment.

### Finalized invoice restrictions

After you finalize an invoice, you can’t change certain fields that pertain to the amount and customer. This is to satisfy the common tax-compliance requirement that finalized invoices be retained—as they were finalized—for a legally required minimum time period.

In some jurisdictions, editing fields that modify the total amount due on an invoice could render the invoice invalid. These are typically fields associated with your account, customer, line items, or taxes. It’s your responsibility to make sure that the invoices you create comply with all applicable laws.

If you require updates to the invoice amount after it finalizes, use [credit notes](https://docs.stripe.com/invoicing/dashboard/credit-notes.md). Credit notes allow you to modify the invoice amount by specifying an adjustment in money owed by the customer. You can issue credit notes for any invoice in an `open` or `paid` status. Finalizing the invoice copies the following customer fields to it and makes them immutable:

- [invoice.customer\_address](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_address)
- [invoice.customer\_email](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_email)
- [invoice.customer\_name](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_name)
- [invoice.customer\_phone](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_phone)
- [invoice.customer\_shipping](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_shipping)
- [invoice.customer\_tax\_exempt](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_tax_exempt)
- [invoice.customer\_tax\_ids](https://docs.stripe.com/api/invoices/object.md#invoice_object-customer_tax_ids)

If you want to change a customer-related property on an invoice:

1. Void the current invoice.
2. [Duplicate](https://docs.stripe.com/invoicing/dashboard.md#modify-invoice) the voided invoice.
3. Update the customer information on the new invoice.

### Emails after finalization

By default, Stripe automatically sends invoices when you set [collection\_method](https://docs.stripe.com/api/invoices/object.md#invoice_object-collection_method) to `send_invoice`. Stripe doesn’t email invoices in the following cases:

- When [charged automatically](https://docs.stripe.com/invoicing/automatic-charging.md).
- When [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection.md) is turned off for the invoice.
- When the [Email finalized invoices to customers](https://dashboard.stripe.com/settings/billing/automatic) option is turned off.

> If you turn off the **Email finalized invoices to customers** option, automatic or manual finalization doesn’t send an invoice.

## Asynchronous payments

For more details on using the *Payment Intents API* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods) to complete *3D Secure* (3D Secure (3DS) provides an additional layer of authentication for credit card transactions that protects businesses from liability for fraudulent card payments) authentication, refer to the [3D Secure guide](https://docs.stripe.com/payments/3d-secure/authentication-flow.md#when-to-use-3d-secure).

Some payment methods require customer interaction to complete the payment—for example, a European card or bank transfer may require *Strong Customer Authentication* (Strong Customer Authentication (SCA) is a regulatory requirement in effect as of September 14, 2019, that impacts many European online payments. It requires customers to use two-factor authentication like 3D Secure to verify their purchase) (SCA).

Use the invoice’s [payment\_intent](https://docs.stripe.com/api/invoices/object.md#invoice_object-payment_intent) parameter to choose how to handle the response from the payment attempt, which may be either `success` or `requires_action`.

When the PaymentIntent status is `requires_action`, your user must complete a [3D Secure authentication](https://docs.stripe.com/strong-customer-authentication.md) to complete the payment.

Instead of building this yourself, you can rely on Stripe to handle it for you. [Enable reminder emails](https://dashboard.stripe.com/settings/billing/automatic) in the Dashboard so that Stripe can automatically send emails to your customers whenever `requires_action` occurs. These emails include a link to the [Hosted Invoice Page](https://docs.stripe.com/invoicing/hosted-invoice-page.md), where a customer can perform all of the actions required to pay the invoice. To learn more about these emails and how to customize them, see [Sending email reminders](https://docs.stripe.com/invoicing/send-email.md).
