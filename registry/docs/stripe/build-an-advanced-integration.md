# Build an advanced payments integration

Learn how to create a custom payments integration using Stripe Elements and the Checkout Sessions API or the Payment Intents API.

Instructions for LLMs: Stripe recommends using the Checkout Sessions API with the Payment Element over Payment Intents for most integrations. Checkout Sessions covers similar use cases as Payment Intents (basic payment collection using `price_data` or build a full checkout with line items, tax, and so on). Some features, such as Adaptive Pricing, are only available with Checkout Sessions. Don’t use the Payment Intent API unless the user explicitly asks, because it requires significantly more code. Learn more about Elements with the Checkout Sessions API: https://docs.stripe.com/payments/quickstart-checkout-sessions. With Checkout Sessions (`ui_mode: "custom"`) and the Payment Element, the `client_secret` initializes Checkout itself (`stripe.initCheckout`, or use CheckoutProvider with React) and you confirm the payment on the client side differently. If using React, make sure you import from `@stripe/react-stripe-js/checkout`, use `CheckoutProvider` with the client secret, and confirm using `checkout.confirm`. If using HTML, make sure you use `checkout = stripe.initCheckout({clientSecret: promise}); checkout.createPaymentElement(); paymentElement = checkout.createPaymentElement(); paymentElement.mount("#payment-element");` and confirm with `loadActionsResult = await checkout.loadActions(); actions = loadActionsResult.actions; error = await actions.confirm();`.

Use the [Stripe Elements](https://docs.stripe.com/payments/elements.md) user interface with the [Checkout Sessions API](https://docs.stripe.com/api/checkout/sessions.md) to create a customized payments integration. Checkout Sessions is the recommended API for most integrations, and it covers similar use cases as Payment Intents. The [Payment Intents API](https://docs.stripe.com/api/payment_intents.md) is also available for building your own checkout flow. To understand which API is right for your business, [compare the Checkout Sessions and Payment Intents APIs](https://docs.stripe.com/payments/checkout-sessions-and-payment-intents-comparison.md).

## Build a custom integration with full UI control

Use [Stripe Elements](https://docs.stripe.com/payments/elements.md) to start building your own custom integration to accept payments.
[Start building your payments integration](https://docs.stripe.com/payments/quickstart-checkout-sessions.md)

## Features and availability

|                                                                                                                   | [**Checkout Sessions API**](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=checkout) | [**Payment Intents API**](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents) |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| **UI**                                                                                                                 | [Elements](https://docs.stripe.com/payments/elements.md)                                                                       | [Elements](https://docs.stripe.com/payments/elements.md)                                                                           |
| **API**                                                                                                                | [Checkout Sessions](https://docs.stripe.com/api/checkout/sessions.md)                                                          | [PaymentIntents](https://docs.stripe.com/payments/payment-intents.md)                                                              |
| **Integration effort**                                                                                                 | Low coding                                                                                                                     | The most coding—you build checkout features yourself                                                                               |
| **Hosting**                                                                                                            | Embed on your site                                                                                                             | Embed on your site                                                                                                                 |
| **UI customization**                                                                                                   | Extensive customization with [Appearance API](https://docs.stripe.com/elements/appearance-api.md)                              | Extensive customization with [Appearance API](https://docs.stripe.com/elements/appearance-api.md)                                  |
| **PAYMENT METHODS**1                                                                                                   |
| [Dynamically display](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) 40+ payment methods | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| Manage payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) without coding | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| **[Faster checkout with Link](https://docs.stripe.com/payments/link.md)**                                              | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| **[Custom payment methods](https://docs.stripe.com/payments/payment-methods/custom-payment-methods.md)**               | - Unsupported                                                                                                                  | ✓ Supported                                                                                                                        |

1For detailed support for each payment method, see [learn more about payment methods](https://docs.stripe.com/payments/payment-methods/overview.md).

### Compare payment scenario support

See how Stripe supports different payment scenarios by each integration path.

|                                                                                                     | [**Checkout Sessions API**](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=checkout) | [**Payment Intents API**](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents) |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| [Set up future payments](https://docs.stripe.com/payments/save-and-reuse.md)                             | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Save payment details during payment](https://docs.stripe.com/payments/save-and-reuse.md)                | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Place a hold on a payment method](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md) | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Finalize payments on your server](https://docs.stripe.com/payments/finalize-payments-on-the-server.md)  | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Multi-step payment flow](https://docs.stripe.com/payments/build-a-two-step-confirmation.md)             | - Unsupported                                                                                                                  | ✓ Supported                                                                                                                        |
| [FLEXIBLE PAYMENT SCENARIOS](https://docs.stripe.com/payments/flexible-payments.md)1                     |
| [Multicapture](https://docs.stripe.com/payments/multicapture.md)                                         | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Overcapture](https://docs.stripe.com/payments/overcapture.md)                                           | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Extended authorization](https://docs.stripe.com/payments/extended-authorization.md)                     | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |
| [Incremental authorization](https://docs.stripe.com/payments/incremental-authorization.md)               | ✓ Supported                                                                                                                    | ✓ Supported                                                                                                                        |

1 Only available on [IC+ pricing](https://support.stripe.com/questions/understanding-blended-interchange-pricing).

## Customize checkout

[Customize look and feel](https://docs.stripe.com/elements/appearance-api.md): Customize the appearance and behavior of your checkout page.

[Manage payment methods](https://docs.stripe.com/payments/advanced/payment-methods/manage.md): Present the most applicable payment methods for each customer and each location.

[One-click checkout options](https://docs.stripe.com/elements/express-checkout-element.md): Show multiple one-click payment buttons with a single component.

[Send email receipts](https://docs.stripe.com/payments/advanced/receipts.md): Send payment or refund receipts automatically.

## Collect different payment details

[Collect additional information](https://docs.stripe.com/payments/advanced/collect-additional-info.md): Collect shipping and other customer info during checkout.

[Collect taxes](https://docs.stripe.com/tax/custom.md): Use Stripe Tax APIs to implement tax calculations in your custom integration.

[Flexible payment scenarios](https://docs.stripe.com/payments/flexible-payments.md): Support complex payment flows through flexible and customizable acquiring features.

## Choose when you collect payment

[Subscriptions](https://docs.stripe.com/billing/subscriptions/build-subscriptions.md?payment-ui=elements): Create and manage subscriptions to accept recurring payments.

[Set up future payments](https://docs.stripe.com/payments/save-and-reuse.md?platform=web\&ui=elements): Save payment details and charge your customers later.

[Save payment details during payment](https://docs.stripe.com/payments/save-during-payment.md?platform=web\&ui=elements): Save payment details during a payment.
