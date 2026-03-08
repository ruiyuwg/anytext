# Radar

Use Stripe Radar to protect your business against fraud.

[Stripe Radar](https://stripe.com/radar) provides real-time fraud protection and requires no additional development time. [Radar for Fraud Teams](https://stripe.com/radar/fraud-teams) adds customization capabilities and deeper insights and trend analysis for your business. [Radar for Platforms](https://docs.stripe.com/radar/radar-for-platforms.md), currently in public preview, provides protection against both transaction and account risk.

Radar evaluates transactions in real-time, using AI algorithms to assess the risk of fraud. All Radar pricing tiers [charge a fee](https://stripe.com/radar/pricing) for each transaction they evaluate, including the first transaction and all subsequent transactions for recurring payments. The exception is Stripe Billing users, who are only billed for the first transaction—subsequent transactions aren’t billed. Radar for Platforms also charges a connected account fee.

Radar screens all payment attempts types (such as successful, declined, blocked, and flagged for review) and the following payment method types:

- [Cards](https://docs.stripe.com/payments/cards.md)
- [Wallets](https://docs.stripe.com/payments/wallets.md)  (when the underlying payment method is a card)
- [ACH Direct Debit](https://docs.stripe.com/payments/ach-direct-debit.md)
- [SEPA Direct Debit](https://docs.stripe.com/payments/sepa-debit.md)
- [Other popular payment methods](https://docs.stripe.com/radar/local-payment-methods.md) (Preview)

Radar doesn’t screen SetupIntents for non-card payment methods. Learn more about Radar’s [features](https://docs.stripe.com/radar.md#features).

## Design your integration with your fraud strategy

[Set up your integration](https://docs.stripe.com/radar/optimize-fraud-signals.md): Make sure your payment integration collects the transaction data needed for Stripe to assess fraud risk.

[Radar Sessions](https://docs.stripe.com/radar/radar-session.md): Use Radar Session to apply Radar protection to your non-Stripe tokenized payments.

[Try out rules](https://docs.stripe.com/radar/testing.md): Simulate fraudulent payments in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) or perform what-if analyses for new rules.

## Use the Dashboard to understand and manage fraud

[View risk evaluation results](https://docs.stripe.com/radar/risk-evaluation.md): See Radar’s risk ratings and actions.

[Analyze Radar metrics](https://docs.stripe.com/radar/analytics.md): Understand fraud patterns and their impact on your business.

[Automate responses to fraud warnings](https://docs.stripe.com/workflows/use-cases.md#fraud-warnings-workflow): Learn how to automatically respond to customers based on fraud warnings, without writing code.

## Customize your fraud interventions with Radar for Fraud Teams

[Set risk score](https://docs.stripe.com/radar/risk-settings.md): Adjust the default threshold risk score that tells Radar to allow or block a payment.

[Handle manual reviews](https://docs.stripe.com/radar/reviews.md): Review suspicious payments that need a human decision.

[Create lists](https://docs.stripe.com/radar/lists.md): Maintain lists of trusted customers to automatically allow or block charges accordingly.

[Customize rules](https://docs.stripe.com/radar/rules.md): Modify criteria that instructs Radar to allow, block, review, or request 3DS authentication.

[Local payment methods](https://docs.stripe.com/radar/local-payment-methods.md): Use powerful Radar controls and analytics across popular payment methods.

## Features

- [AI-based fraud detection](https://docs.stripe.com/radar/optimize-fraud-signals.md): Automatically identify and block fraudulent transactions using advanced algorithms, and evaluate the [risk score](https://docs.stripe.com/radar/risk-evaluation.md) of each transaction.

- [Custom rules engine](https://docs.stripe.com/radar/rules.md): Create and implement your own fraud prevention rules based on your business needs, and [set up automatic responses](https://docs.stripe.com/radar/risk-settings.md) to specific risk levels.

- [Risk insights](https://docs.stripe.com/radar/reviews/risk-insights.md): Understand the factors driving risk on every payment, and detect suspicious patterns in customer behavior across transactions and location data.

- [Direct 3D Secure integration](https://docs.stripe.com/radar/rules.md#how-to-create-effective-rules): Incorporate additional authentication for high-risk card transactions.

- [Block lists and allow lists](https://docs.stripe.com/radar/lists.md): Manage lists of high-risk or trusted users, email addresses, IP addresses, metadata, and payment methods.

- [Real-time monitoring](https://docs.stripe.com/radar/analytics.md): View and respond to potentially fraudulent activity as it happens.

- (Preview) [Local payment method fraud controls](https://docs.stripe.com/radar/local-payment-methods.md), including customizable rules, block and allow lists, and consolidated fraud analytics across your entire payment volume
