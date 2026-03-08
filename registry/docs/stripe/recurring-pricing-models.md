# Recurring pricing models

Learn about the pricing models you can use with subscriptions.

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

Pricing models are patterns that represent your business on Stripe and consists of the products or services you sell, how much they cost, what currency you accept for payments, and the service period for subscriptions. To build the pricing model, you use [products](https://docs.stripe.com/api/products.md) (what you sell) and [prices](https://docs.stripe.com/api/prices.md) (how much and how often to charge for your products).

| Pricing model                                                                              | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Flat rate](https://docs.stripe.com/subscriptions/pricing-models/flat-rate-pricing.md)     | Customers choose a service tier (for example, Basic, Starter, or Enterprise) and pay a flat rate for it.                                                                 |
| [Per-seat](https://docs.stripe.com/subscriptions/pricing-models/per-seat-pricing.md)       | Each pricing unit represents one user. For example, a business purchases software for its employees and each employee requires a license to access the software.         |
| [Tiered](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing.md)           | The unit cost changes with quantity (volume-based pricing) or usage (graduated pricing).                                                                                 |
| [Usage-based](https://docs.stripe.com/subscriptions/pricing-models/usage-based-pricing.md) | Charge customers based on their usage of your product or service. The models for this kind of pricing include fixed fee and overage, pay as you go, and credit burndown. |

## See also

- [Prebuilt subscriptions page with Stripe Checkout](https://docs.stripe.com/billing/quickstart.md)
- [Build a subscriptions integration](https://docs.stripe.com/billing/subscriptions/build-subscriptions.md)
- [Embed a pricing table](https://docs.stripe.com/payments/checkout/pricing-table.md)
