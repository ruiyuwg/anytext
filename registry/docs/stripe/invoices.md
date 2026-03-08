# Invoices

Invoices are statements of amounts owed by a customer, and are either generated one-off, or generated periodically from a subscription.

They contain [invoice items](https://docs.stripe.com/api/invoices.md#invoiceitems), and proration adjustments that may be caused by subscription upgrades/downgrades (if necessary).

If your invoice is configured to be billed through automatic charges, Stripe automatically finalizes your invoice and attempts payment.  Note that finalizing the invoice, [when automatic](https://docs.stripe.com/docs/invoicing/integration/automatic-advancement-collection.md), does not happen immediately as the invoice is created. Stripe waits until one hour after the last webhook was successfully sent (or the last webhook timed out after failing). If you (and the platforms you may have connected to) have no webhooks configured, Stripe waits one hour after creation to finalize the invoice.

If your invoice is configured to be billed by sending an email, then based on your [email settings](https://dashboard.stripe.com/account/billing/automatic), Stripe will email the invoice to your customer and await payment. These emails can contain a link to a hosted page to pay the invoice.

Stripe applies any customer credit on the account before determining the amount due for the invoice (i.e., the amount that will be actually charged). If the amount due for the invoice is less than Stripe’s [minimum allowed charge per currency](https://docs.stripe.com/docs/currencies.md#minimum-and-maximum-charge-amounts), the invoice is automatically marked paid, and we add the amount due to the customer’s credit balance which is applied to the next invoice.

More details on the customer’s credit balance are [here](https://docs.stripe.com/docs/billing/customer/balance.md).

Related guide: [Send invoices to customers](https://docs.stripe.com/docs/billing/invoices/sending.md)

## Endpoints

### Create a preview invoice

- [POST /v1/invoices/create\_preview](https://docs.stripe.com/api/invoices/create_preview.md)

### Create an invoice

- [POST /v1/invoices](https://docs.stripe.com/api/invoices/create.md)

### Update an invoice

- [POST /v1/invoices/:id](https://docs.stripe.com/api/invoices/update.md)

### Retrieve an invoice

- [GET /v1/invoices/:id](https://docs.stripe.com/api/invoices/retrieve.md)

### List all invoices

- [GET /v1/invoices](https://docs.stripe.com/api/invoices/list.md)

### Delete a draft invoice

- [DELETE /v1/invoices/:id](https://docs.stripe.com/api/invoices/delete.md)

### Attach a payment to an Invoice

- [POST /v1/invoices/:id/attach\_payment](https://docs.stripe.com/api/invoices/attach_payment.md)

### Finalize an invoice

- [POST /v1/invoices/:id/finalize](https://docs.stripe.com/api/invoices/finalize.md)

### Mark an invoice as uncollectible

- [POST /v1/invoices/:id/mark\_uncollectible](https://docs.stripe.com/api/invoices/mark_uncollectible.md)

### Pay an invoice

- [POST /v1/invoices/:id/pay](https://docs.stripe.com/api/invoices/pay.md)

### Search invoices

- [GET /v1/invoices/search](https://docs.stripe.com/api/invoices/search.md)

### Send an invoice for manual payment

- [POST /v1/invoices/:id/send](https://docs.stripe.com/api/invoices/send.md)

### Void an invoice

- [POST /v1/invoices/:id/void](https://docs.stripe.com/api/invoices/void.md)
