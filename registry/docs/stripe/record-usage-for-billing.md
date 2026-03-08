# Record usage for billing

Learn how to record customer usage data.

If you need guidance for the previous usage-based billing process, refer to our [legacy documentation](https://docs.stripe.com/billing/subscriptions/usage-based-legacy.md).

Throughout each billing period, you must record usage in Stripe to bill your customers the correct amounts. You can decide how often you record usage in Stripe. You can record usage in Stripe using the Dashboard or API.

To record usage in Stripe, first [configure your meter](https://docs.stripe.com/billing/subscriptions/usage-based/meters/configure.md) and then add the recorded usage through the Stripe Dashboard or API.

Stripe processes meter events asynchronously, so aggregated usage in meter event summaries and on upcoming invoices might not immediately reflect recently received meter events.

[Use the API](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage-api.md): Use the Stripe API to record customer usage data.

[Use the Stripe Dashboard](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage-in-bulk-dashboard.md): Use the Dashboard to upload a CSV file with usage data.

[Use Amazon S3](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage-in-bulk.md): Use Amazon S3 to add customer usage data in bulk.
