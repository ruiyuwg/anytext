# Stripe Connector for NetSuite

Use the app to reconcile your Stripe activity into NetSuite.

The Stripe Connector for NetSuite eliminates manual work and custom NetSuite development by automating accounting workflows.

The connector includes an automated testing system that runs daily tests on every NetSuite feature and use case. You can connect your Stripe test environment to your NetSuite release preview to verify that the connector functions properly with the latest NetSuite release and your other integrations.

The connector uses HTTPS to [securely](https://docs.stripe.com/security.md) communicate with NetSuite, and the latest version of TLS supported by NetSuite. No unauthenticated data is passed to NetSuite or any other system. In addition, the connector uses Stripe components for payment collection and [SCA compliance](https://docs.stripe.com/strong-customer-authentication.md#sca-enforcement).

1. Prepare your Stripe and NetSuite accounts for [onboarding](https://docs.stripe.com/use-stripe-apps/netsuite/onboarding.md).

2. [Contact us](https://marketplace.stripe.com/apps/netsuite-connector) to get started with your implementation.

> You can also install the [free, self-serve version](https://docs.stripe.com/use-stripe-apps/netsuite/invoice-payment-link/overview.md) of the connector. This version allows you to accept payments with a Stripe payment link, without syncing payments or other data to NetSuite.

## Workflow automations

[Use invoice automation](https://docs.stripe.com/use-stripe-apps/netsuite/invoice-automation.md): Record your Stripe Invoicing and Stripe Billing activity into NetSuite for reporting.

[Include the invoice payment page](https://docs.stripe.com/use-stripe-apps/netsuite/invoice-payment-page.md): Include the invoice payment page in your NetSuite invoices and customers.

[Use the customer payment page](https://docs.stripe.com/use-stripe-apps/netsuite/customer-payment-page.md): Collect and apply payments to multiple invoices as partial payments.

[Reconcile Stripe payments](https://docs.stripe.com/use-stripe-apps/netsuite/custom-payment-application.md): Reconcile Stripe payments from third-party or in-house systems into NetSuite.

[Stripe and NetSuite field references](https://docs.stripe.com/use-stripe-apps/netsuite/fields-references.md): Learn about how the connector correlates Stripe records with NetSuite records.

## Accounting workflows

[Reconcile Stripe charges](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-charges-netsuite.md): Automatically reconcile Stripe charges and payments to NetSuite based on how they’re created.

[Reconcile Stripe disputes](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-disputes-netsuite.md): Automatically reconcile disputes in NetSuite immediately after they occur in Stripe.

[Reconcile Stripe refunds](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-refunds-netsuite.md): Automatically reconcile Stripe refunds to NetSuite bank deposits based on the payment status.

[Reconcile Stripe payouts](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-payouts-netsuite.md): Automatically reconcile Stripe payouts to NetSuite bank deposits, including fees and transactions.

[Reconcile Stripe Connect activity](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-connect-netsuite.md): Automatically reconcile Stripe Connect transfers, application fees, and connected account activity to NetSuite.

[Accept payments in multiple currencies](https://docs.stripe.com/use-stripe-apps/netsuite/multiple-currencies.md): Accept payments in multiple currencies and automatically reconcile payments that require currency conversion.

## Features

- **Automatic creation**: Create entries for customers, invoices, income, and accounts receivable. When using Stripe Billing subscriptions, Stripe provides revenue recognition data for invoice line items.

- **Automatic application**: Apply payments and refunds to the corresponding invoices and credit memos.

- **Dispute lifecycle integration**: Include automation of income, cash, and fees associated with won or lost disputes.

- **Automatic bank reconciliation**: Include the amount and date of the deposit on the transaction level.
