# Use a prebuilt checkout UI

[Checkout](https://stripe.com/payments/checkout) is a low-code, prebuilt payment form that Stripe hosts or that you can embed into your website. Checkout uses the [Checkout Sessions API](https://docs.stripe.com/api/checkout/sessions.md).

## Create a payments form to accept payments on your website

Accept one-time and subscription payments from more than 40 local payment methods.
[Start building your checkout integration](https://docs.stripe.com/checkout/quickstart.md)

## Payment UIs

You can use two different payment UIs with the [Checkout Sessions API](https://docs.stripe.com/api/checkout/sessions.md). The following images highlight which aspects of the checkout UI Stripe hosts in each option. You can also see these options by [exploring our demo](https://checkout.stripe.dev).
![Hosted checkout form](https://b.stripecdn.com/docs-statics-srv/assets/checkout-hosted-hover.4f0ec46833037b6fd0f1a62d9fcf7053.png)

[Hosted page](https://docs.stripe.com/checkout/quickstart.md) Customers enter their payment details in a Stripe-hosted payment page, then return to your site after payment completion.
![Embedded Checkout form](https://b.stripecdn.com/docs-statics-srv/assets/checkout-embedded-hover.19e99126cb27ab25f704d7357f672e1f.png)

[Embedded page](https://docs.stripe.com/checkout/embedded/quickstart.md) Customers enter their payment details in an embedded payment form on your site without redirection.

|                   | [STRIPE-HOSTED PAGE](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=stripe-hosted) | [EMBEDDED FORM](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=embedded-form) |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **UI**                 | [Checkout](https://docs.stripe.com/payments/checkout/how-checkout-works.md?payment-ui=stripe-hosted)            | [Checkout](https://docs.stripe.com/payments/checkout/how-checkout-works.md?payment-ui=embedded-form)       |
| **API**                | [Checkout Sessions](https://docs.stripe.com/api/checkout/sessions.md)                                           | [Checkout Sessions](https://docs.stripe.com/api/checkout/sessions.md)                                      |
| **Integration effort** | Complexity: 2/5                                                                                                 | Complexity: 2/5                                                                                            |
| **Hosting**            | Stripe-hosted page (optional [custom domains](https://docs.stripe.com/payments/checkout/custom-domains.md))     | Embed on your site                                                                                         |
| **UI customization**   | Limited customization1                                                                                          | Limited customization1                                                                                     |

1Limited customization provides [20 preset fonts](https://docs.stripe.com/payments/checkout/customization/appearance.md#font-compatibility), 3 preset border radius options, logo and background customization, and custom button color.

## Customize checkout

[Customize the look and feel](https://docs.stripe.com/payments/checkout/customization.md): Customize the appearance and behavior of the checkout flow.

[Collect additional information](https://docs.stripe.com/payments/checkout/collect-additional-info.md): Collect shipping details and other customer information during checkout.

[Collect taxes](https://docs.stripe.com/payments/checkout/taxes.md): Collect taxes for one-time payments in Stripe Checkout.

[Dynamically update checkout](https://docs.stripe.com/payments/checkout/dynamic-updates.md): Make updates while your customer checks out.

[Extend checkout with custom components](https://docs.stripe.com/payments/checkout/custom-components.md): Add custom components to your payment form.

[Add trials, discounts, and upsells](https://docs.stripe.com/payments/checkout/promotions.md): Add promotions, such as trials, discounts, and optional items.

## Change when and how you collect payment

[Set up subscriptions](https://docs.stripe.com/payments/subscriptions.md): Create a subscription with recurring payments for your customers.

[Set up future payments](https://docs.stripe.com/payments/checkout/save-and-reuse.md): Save your customers’ payment details to charge them later.

[Save payment details during payment](https://docs.stripe.com/payments/checkout/save-during-payment.md): Accept a payment and save your customer’s payment details for future purchases.

[Let customers pay in their local currency](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md): Use Adaptive Pricing to allow customers to pay in their local currency.

## Manage your business

[Manage your product catalog](https://docs.stripe.com/payments/checkout/product-catalog.md): Handle your inventory and fulfillment with Checkout.

[Migrate payment methods to the Dashboard](https://docs.stripe.com/payments/dashboard-payment-methods.md): Migrate the management of your payment methods to the Dashboard.

[After the payment](https://docs.stripe.com/payments/checkout/after-the-payment.md): Customize the post-payment checkout process.

## Sample projects

[One-time payments](https://github.com/stripe-samples/checkout-one-time-payments)

[Subscriptions](https://github.com/stripe-samples/checkout-single-subscription)
