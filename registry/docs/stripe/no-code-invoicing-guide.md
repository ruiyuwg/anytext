# No-code Invoicing guide

Get started with Stripe Invoicing—no code required.

Stripe Invoicing can help you get paid and save time using the Dashboard. Automatically charge your customer’s payment method on file, or email them the *invoice* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) with or without a link to a payment page. You can also send the invoice or payment page link manually.

> If you’re interested in managing subscriptions and recurring revenue, see [Subscriptions](https://docs.stripe.com/billing.md).
> ![Hosted Invoice Page](https://b.stripecdn.com/docs-statics-srv/assets/hosted-invoice-page-guide.df3cc5a1e4180c338269aacdfa792180.png)

Hosted Invoice Page
![Invoice PDF](https://b.stripecdn.com/docs-statics-srv/assets/invoice-pdf-guide.d79c407ca08ee4b14dc0519fb3772309.png)

Invoice PDF

## Set up your business brand \[Optional]

Before you start using Stripe Invoicing, help your future customers understand your products and terms of service by [establishing your business](https://dashboard.stripe.com/settings/account?support_details) and [customizing how your brand appears](https://dashboard.stripe.com/settings/branding).
![Brand your business](https://b.stripecdn.com/docs-statics-srv/assets/hosted-invoice-page.79b4c18913fe9fb30f47ad8a5f062b6f.png)

Brand your business

## Choose your payment methods \[Optional]

By default, customers can pay invoices with any of the payment methods that you enable in your [Invoice template](https://dashboard.stripe.com/settings/billing/invoice). If you’re a first-time user, Stripe automatically enables cards and other payment methods. You can view these payment methods and turn them on or off in the [Invoice default payment methods configuration](https://dashboard.stripe.com/settings/billing/invoice).

In some situations, there might be restrictions that prevent payment methods from being used for an invoice. For example, a payment method might only operate in one currency, or have limitations on the amount that can be paid. Stripe doesn’t automatically select a payment method when these limitations prevent it from being used. To learn more, see [Payment methods](https://docs.stripe.com/invoicing/payment-methods.md#supported).
![Choose additional payment methods](https://b.stripecdn.com/docs-statics-srv/assets/supported-payment-methods.949a2d41b8da98f93ad94c95c986e75c.png)

Choose additional payment methods

## How to get paid

You can [create and send](https://dashboard.stripe.com/invoices/create) an invoice from the Dashboard. Invoices provide an itemized list of goods and services rendered, which includes the cost, quantity, and taxes. You can also use them as a tool to collect payment. Learn more about [using the Dashboard](https://docs.stripe.com/invoicing/dashboard.md).
![Create and send an invoice](https://b.stripecdn.com/docs-statics-srv/assets/create-send-invoices.985a3078348be3c2591f8d5e2d96e21c.png)

Create and send an invoice

## Set up a custom template \[Optional]

You can use the [Invoice template](https://dashboard.stripe.com/account/billing/invoice) to customize ​​the content of your invoices. Set a default memo, footer, numbering scheme, and determine your default payment terms. Because you know more about your customers and your business than Stripe does, make sure your invoices include all of the required information. See the full invoice customization guide at [Customize invoices](https://docs.stripe.com/invoicing/customize.md).
![Configure the Invoice template](https://b.stripecdn.com/docs-statics-srv/assets/invoice-template.d50c4ba2210f06442b6adbb7279fe7a4.png)

Configure the Invoice template
![Manage tax information](https://b.stripecdn.com/docs-statics-srv/assets/manage-tax-information.3bbd3b8425726dc4ac243bb5bfd707a3.png)

Manage tax information

## Track an invoice

Invoices move through different statuses from the time they’re created to when they’re paid. You can track the status of an invoice on the [Invoices page](https://dashboard.stripe.com/test/invoices). To let your customer know that the due date for an invoice is approaching, [send them an email reminder](https://docs.stripe.com/invoicing/send-email.md). For more information on tracking your invoices, see [Manage invoices](https://docs.stripe.com/invoicing/dashboard/manage-invoices.md).
![Track and manage your invoices](https://b.stripecdn.com/docs-statics-srv/assets/track-invoices.647ee840cc77e53c4d8537ec43ba9289.png)

Track and manage your invoices

## Automate collections and reconciliation

### Automate collections

You can turn on automatic email reminders for unpaid, one-off invoices. You can schedule reminders to be sent prior to an invoice’s due date, on the due date, or after. Learn more about [automatic reminders](https://docs.stripe.com/invoicing/automatic-collection.md#automatic-reminders-for-one-off-invoices).

You can choose to [automatically charge](https://docs.stripe.com/invoicing/automatic-charging.md) your customer’s payment method on file. For one-off invoices that are charged automatically, you can turn on Smart Retries or scheduled retries to automatically re-attempt the payment if it fails on the first attempt.
![Automate invoicing](https://b.stripecdn.com/docs-statics-srv/assets/advanced-invoicing-features.70dfe42ac952e7924876201c06e5902d.png)

Automate invoicing

### Close your books and account for revenue

Using [automatic reconciliation](https://docs.stripe.com/invoicing/automatic-reconciliation.md) means that you don’t need to expose your sensitive bank account details to users or manually reconcile open invoices with your bank. With auto-reconciliation for invoices, Stripe can:

- Match incoming payments with invoice amounts.
- Manage overpayment or underpayment, when the amount paid doesn’t match the invoice.
- Reduce the number of API calls required to transfer funds into Stripe.
- Manage payment retries on open invoices.
  ![Close your books](https://b.stripecdn.com/docs-statics-srv/assets/invoicing-auto-reconciliation.2d4b2648e4b67e8b2a2c7225a22bec69.png)

Close your books

## Let customers manage their invoices \[Optional]

Share a link to your *customer portal* (The customer portal is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details), where customers can log in with their email to manage invoices, view invoice history, update payment information, and so on. Learn how to create and share your [customer portal link](https://docs.stripe.com/customer-management/activate-no-code-customer-portal.md).
