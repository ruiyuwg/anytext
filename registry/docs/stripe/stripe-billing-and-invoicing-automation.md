# Stripe Billing and Invoicing automation

Use the connector to sync your Stripe invoices into NetSuite.

To learn more and get a demo of the Stripe Connector for NetSuite, go to the [Stripe App Marketplace](https://marketplace.stripe.com/apps/netsuite-connector) and click **Install app**.

The Stripe Connector for NetSuite automatically syncs the invoices that you create from Stripe Billing [subscriptions](https://docs.stripe.com/billing/subscriptions/overview.md) or [Stripe Invoicing](https://docs.stripe.com/invoicing/overview.md) into NetSuite. The sync includes details such as [credit notes](https://docs.stripe.com/invoicing/dashboard/credit-notes.md), [discounts](https://docs.stripe.com/billing/subscriptions/coupons.md), [uncollectible invoices](https://docs.stripe.com/revenue-recognition/examples/contra.md#uncollectible), [taxes](https://docs.stripe.com/billing/taxes/collect-taxes.md), and [prorations](https://docs.stripe.com/billing/subscriptions/prorations.md).

You can complete your accounting workflows entirely in Stripe using the automated process, which means you don’t need to manually reconcile activity. Stripe transaction data syncs at the transaction level in NetSuite, allowing you to use advanced reporting on Stripe data in NetSuite.
[Watch on YouTube](https://www.youtube.com/watch?v=KtdLXcKmT7E)

## How it works

When you use the connector with [Stripe Billing](https://docs.stripe.com/billing.md) or [Stripe Invoicing](https://docs.stripe.com/invoicing/overview.md), the invoice automation process is as follows:

1. A customer provides their payment information through a Stripe payment flow on your website. This action creates a Stripe `Customer` object.
2. Stripe creates an invoice at the beginning of each billing period, which prompts the connector to create an invoice in NetSuite. The connector also creates a new customer or links to an existing NetSuite customer.
3. If you enabled NetSuite revenue recognition, the connector splits revenue over the correct period on the line item level.
4. When a customer successfully pays the Stripe invoice, the connector creates a NetSuite `Customer Payment` and applies it to the corresponding invoice in NetSuite. If payment fails, resulting in a canceled subscription, the connector can automatically close the NetSuite invoice with a credit memo, or whatever action you configure for failed payments.
5. The connector automatically syncs refunds and disputes from Stripe to NetSuite, and creates credit memos and customer refunds.
6. The connector [automatically reconciles](https://docs.stripe.com/use-stripe-apps/netsuite/deposit-automation.md) Stripe payments against a bank deposit in NetSuite. This includes calculating and recording any processing fees or currency conversion fees.

## Customer flow

A diagram providing a high level overview of the customer flow for billing and invoice automation outlined in this doc (See full diagram at https://docs.stripe.com/use-stripe-apps/netsuite/invoice-automation)

## Invoice flow

A diagram providing a high level overview of the invoice flow for billing and invoice automation outlined in this doc (See full diagram at https://docs.stripe.com/use-stripe-apps/netsuite/invoice-automation)

## Payment flow

A diagram providing a high level overview of the payment flow for billing and invoice automation outlined in this doc (See full diagram at https://docs.stripe.com/use-stripe-apps/netsuite/invoice-automation)

## Refund or chargeback flow

A diagram providing a high level overview of the refund or chargeback flow for billing and invoice automation outlined in this doc (See full diagram at https://docs.stripe.com/use-stripe-apps/netsuite/invoice-automation)

## See also

- [Deposit automation](https://docs.stripe.com/use-stripe-apps/netsuite/deposit-automation.md)
- [Stripe invoices in NetSuite](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-invoices-netsuite.md)
- [Stripe prices and coupons in NetSuite](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-prices-coupons-netsuite.md)
- [Revenue recognition](https://docs.stripe.com/use-stripe-apps/netsuite/revenue-recognition.md)
