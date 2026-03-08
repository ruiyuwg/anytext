# Build a SaaS platform

Provide a platform where merchants accept payments directly from their customers through your integration.

> This guide uses Accounts v2 to create and manage connected accounts. For a guide that uses Accounts v1, see [Build a SaaS platform with Accounts v1](https://docs.stripe.com/connect/end-to-end-saas-platform.md).

If you’re a subscription-based [SaaS business](https://docs.stripe.com/saas.md), but don’t extend Stripe products or payment processing to your merchants, you don’t need Connect.

As a software as a service (SaaS) platform, you extend your integration of Stripe products to your merchant connected accounts. Those merchants can access Stripe through your platform to accept payments from their own customers and receive *payouts* (A payout is the transfer of funds to an external account, usually a bank account, in the form of a deposit) from their Stripe balance.

## Monetization

A SaaS platform can design its revenue strategy using a referrer or wholesale model.

### Stripe-owned pricing model

Your platform refers merchants to Stripe to process payments and use other financial products. In this model, the platform’s connected accounts:

- Are the *merchant of record* (The legal entity responsible for facilitating the sale of products to a customer that handles any applicable regulations and liabilities, including sales taxes. In a Connect integration, it can be the platform or a connected account) for payments from their customers.
- Pay Stripe fees.
- Assume liability for their negative balances.
- Process payments as [direct charges](https://docs.stripe.com/connect/direct-charges.md).

Stripe doesn’t charge your platform in this model and you can earn revenue by:

- Charging your connected accounts a subscription fee for using your platform.
- Charging your connected accounts an application fee per transaction.
- Qualifying for revenue share from Stripe when your connected accounts meet product activation targets.
  A diagram showing Stripe-owned pricing monetization for a SaaS platform (See full diagram at https://docs.stripe.com/connect/saas)

### Buy rate model

Your platform purchases and white labels payment processing and other products from Stripe, and offers them to your connected accounts. In this model, the platform’s connected accounts:

- Don’t pay Stripe fees.
- Are the *merchant of record* (The legal entity responsible for facilitating the sale of products to a customer that handles any applicable regulations and liabilities, including sales taxes. In a Connect integration, it can be the platform or a connected account) for payments from their customers.
- Are liable to the platform, not Stripe, for their negative balances.
- Process payments as [direct charges](https://docs.stripe.com/connect/direct-charges.md) or [destination on-behalf-of (OBO) charges](https://docs.stripe.com/connect/destination-charges.md?platform=web\&ui=stripe-hosted#settlement-merchant).

Stripe charges your platform in this model and you can earn revenue by:

- Charging your connected accounts a subscription fee for using your platform.
- Charging your connected accounts an application fee per transaction. Use the [platform pricing](https://docs.stripe.com/connect/platform-pricing-tools.md) tool to automatically set pricing logic for the application fees you charge your connected accounts.
  A diagram showing buy rate monetization for a SaaS platform (See full diagram at https://docs.stripe.com/connect/saas)

## Resources

[SaaS platform blueprint](https://dashboard.stripe.com/test/workbench/blueprints/learn-accounts-v2?code-pane-shown=true): Use this guided API Blueprint in the Dashboard to learn how to add connected accounts to your platform and charge them a subscription fee through Billing.

[SaaS platform quickstart](https://docs.stripe.com/connect/saas/quickstart.md): Review an annotated sample SaaS platform integration and download its code to use as a starting point for your integration.

[Essential tasks](https://docs.stripe.com/connect/saas/essential-tasks.md): Follow the sequence of essential tasks to build your SaaS platform and onboard your connected accounts.
