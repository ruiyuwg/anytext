# How Checkout works

Learn how to use Checkout to collect payments on your website.

Checkout is a low-code payment integration that creates a customizable form for collecting payments.

Checkout’s built-in features allow you to reduce your development time. It supports more than 40 payment methods, including [Link](https://docs.stripe.com/payments/link.md), which lets your customers save their payment method for faster checkout. You can accept payments by embedding Checkout directly into your website, redirecting customers to a Stripe-hosted payment page, or creating a customized checkout page with [Stripe Elements](https://docs.stripe.com/payments/elements.md). Checkout supports payments for both [one-time purchases](https://docs.stripe.com/payments/online-payments.md) and [subscriptions](https://docs.stripe.com/subscriptions.md).

You can also customize Checkout and access additional functionality with [Checkout Sessions](https://docs.stripe.com/api/checkout/sessions.md) and the Stripe Dashboard. For a complete list of features, see its [built-in and customizable features](https://docs.stripe.com/payments/checkout/how-checkout-works.md#features).

# Stripe-hosted page

> This is a Stripe-hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/how-checkout-works?payment-ui=stripe-hosted.

## Checkout lifecycle

![](https://docs.stripecdn.com/how_it_works_hosted.7eedb1ea7079a84bb6a89e1cc033bfed06963fb60f5fb9d94c649fc7e04efb2c.mp4)

1. When customers are ready to complete their purchase, your application creates a new `Checkout Session`.
2. The `Checkout Session` provides a URL that redirects customers to a Stripe-hosted payment page.
3. Customers enter their payment details on the payment page and complete the transaction.
4. After the transaction, a *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) [fulfills the order](https://docs.stripe.com/checkout/fulfillment.md) using the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event.
   A diagram of a Stripe-hosted page integration's lifecycle (See full diagram at https://docs.stripe.com/payments/checkout/how-checkout-works)

## Low-code integration

Checkout requires minimal coding and is the best choice for most integrations because of its prebuilt features and customization options. You can integrate Checkout by creating a `Checkout Session` and collecting customer payment details. Collect payments by redirecting customers to a [Stripe-hosted payment page](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=stripe-hosted).

[Compare Checkout](https://docs.stripe.com/payments/online-payments.md#compare-features-and-availability) to other Stripe payment options to determine the best one for you. Checkout displays a payment form to collect customer payment information, validates cards, handles errors, and so on.

## Features

| Feature                                                                                                      | Customizable |
| ------------------------------------------------------------------------------------------------------------ | ------------ |
| Support for digital wallets and Link                                                                         | Built-in     |
| Responsive mobile design                                                                                     | Built-in     |
| SCA-ready                                                                                                    | Built-in     |
| CAPTCHAs                                                                                                     | Built-in     |
| PCI compliance                                                                                               | Built-in     |
| Card validation                                                                                              | Built-in     |
| Error messaging                                                                                              | Built-in     |
| [Adjustable quantities](https://docs.stripe.com/payments/checkout/adjustable-quantity.md)                    | Built-in     |
| [Automatic tax collection](https://docs.stripe.com/tax/checkout.md)                                          | Built-in     |
| International language support                                                                               | Built-in     |
| [Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md)          | Built-in     |
| [Collect taxes](https://docs.stripe.com/payments/checkout/taxes.md)                                          | Customizable |
| [Custom branding with colors, buttons, and font](https://docs.stripe.com/payments/checkout/customization.md) | Customizable |
| [Optional items](https://docs.stripe.com/payments/checkout/optional-items.md)                                | Customizable |
| [Global payment methods](https://docs.stripe.com/payments/dashboard-payment-methods.md)                      | Customizable |
| [Subscription upsells](https://docs.stripe.com/payments/checkout/upsells.md)                                 | Customizable |
| [Custom domains](https://docs.stripe.com/payments/checkout/custom-domains.md) (Stripe-hosted page only)      | Customizable |
| [Email receipts](https://docs.stripe.com/receipts.md)                                                        | Customizable |
| [Apply discounts](https://docs.stripe.com/payments/checkout/discounts.md)                                    | Customizable |
| [Custom success page](https://docs.stripe.com/payments/checkout/custom-success-page.md)                      | Customizable |
| [Recover abandoned carts](https://docs.stripe.com/payments/checkout/abandoned-carts.md)                      | Customizable |
| [Autofill payment details with Link](https://docs.stripe.com/payments/link/checkout-link.md)                 | Customizable |
| [Collect Tax IDs](https://docs.stripe.com/tax/checkout/tax-ids.md)                                           | Customizable |
| [Collect shipping information](https://docs.stripe.com/payments/collect-addresses.md?payment-ui=checkout)    | Customizable |
| [Collect phone numbers](https://docs.stripe.com/payments/checkout/phone-numbers.md)                          | Customizable |
| [Set the subscription billing cycle date](https://docs.stripe.com/payments/checkout/billing-cycle.md)        | Customizable |

### Custom branding

You can set fonts, colors, icons, and field styles for your Stripe-hosted Checkout page using the [Branding settings](https://dashboard.stripe.com/settings/branding/checkout) in the Dashboard. For more information, see [Customize your integration](https://docs.stripe.com/payments/checkout/customization.md).

### Custom domains

If you use Stripe’s [custom domain feature](https://docs.stripe.com/payments/checkout/custom-domains.md), you can serve Stripe-hosted Checkout pages on a subdomain of your custom domain. Custom domains are a paid feature. For information, see [Pricing and fees](https://stripe.com/pricing).

## Checkout Session

The `Checkout Session` is a programmatic representation of what your customers see on the checkout page. After creating a `Checkout Session`, redirect your customers to its URL to complete the purchase. When customers complete their purchase, you can [fulfill their orders](https://docs.stripe.com/checkout/fulfillment.md) by configuring an [event destination](https://docs.stripe.com/event-destinations.md) to process `Checkout Session` events. This code snippet from the [quickstart guide](https://docs.stripe.com/checkout/quickstart.md) is an example of how to create a `Checkout Session` in your application.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

### One-time and recurring payments

Allow customers to make one-time payments or subscribe to a product or service by setting the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) parameter in a `Checkout Session`.

| Mode                                                                      | Purchase type                                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Payment                                                                   | One-time purchases                                                                |
| [Subscription](https://docs.stripe.com/billing/subscriptions/overview.md) | - Recurring purchases

- Mixed cart: Recurring purchases with one-time purchases |

### Mixed cart

Create a mixed cart in Checkout that lets your customers purchase Subscription items and one-time purchase items at the same time. To create a mixed cart, set the `mode` parameter to `subscription` and include the Price IDs, or `price_data`, for each line\_item in the [line\_items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items) array. Price IDs come from Price objects created using the Stripe Dashboard or API and allow you to store information about your product catalog in Stripe.

You can also use [price\_data](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price_data) to reference information from an external database where you’re hosting price and product details without storing product catalog information on Stripe. For more information, see [Build a subscriptions integration](https://docs.stripe.com/billing/subscriptions/build-subscriptions.md).

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"={{RECURRING_PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d "line_items[1][price]"={{ONE_TIME_PRICE_ID}} \
  -d "line_items[1][quantity]"=1 \
  -d mode=subscription \
  --data-urlencode success_url="https://example.com/success"
```

### Payment methods

You can view, enable, and disable different payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) at any time. Stripe enables certain payment methods for you by default. We might also enable additional payment methods after notifying you. View our [complete list of payment methods](https://docs.stripe.com/payments/payment-methods/overview.md).

### Save payment details and default payment methods

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

You can [save payment details for future use](https://docs.stripe.com/payments/save-and-reuse.md) by sending an API parameter when you create a `Checkout Session`. Options to save payment details include:

- **Single payment**: If your `Checkout Session` uses `payment` mode, set the [payment\_intent\_data.setup\_future\_usage](https://docs.stripe.com/payments/payment-intents.md#future-usage) parameter.
- **Subscription payment**: If your `Checkout Session` uses `subscription` mode, Stripe saves the payment method by default.
- [Multiple saved payment methods](https://docs.stripe.com/payments/accept-a-payment.md?platform=web\&ui=checkout#save-payment-method-details): If a customer has multiple payment methods saved, you can store a default payment method to the `Customer` object’s [default\_payment\_method](https://docs.stripe.com/api/customers/object.md#customer_object-invoice_settings-default_payment_method) field. However, these payment methods don’t appear for return purchases in Checkout.

### Guest customers

The `Customer` object represents a customer of your business. It stores their information and associates them with their subscriptions and payments. `Checkout Sessions` that don’t use existing `Customers` or create new ones are associated with [guest customers](https://docs.stripe.com/payments/checkout/guest-customers.md) instead.

### Expiration

By default, a `Checkout Session` expires after 24 hours.

You can set a custom expiration time for a `Checkout Session` by setting the [expires\_at](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-expires_at) parameter. It can be anywhere from 30 minutes to 24 hours after `Checkout Session` creation.

You can also [expire](https://docs.stripe.com/api/checkout/sessions/expire.md) a `Checkout Session`.

## Complete a transaction

To automate business flows after a transaction occurs, register an [event destination](https://docs.stripe.com/event-destinations.md) and build a [webhook endpoint handler](https://docs.stripe.com/webhooks/quickstart.md). Consider the following events and automations to enable:

- Process the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event to fulfill orders when a customer completes their purchase.
- Process the [checkout.session.expired](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.expired) event to return items to your inventory or send users a cart [abandonment](https://docs.stripe.com/payments/checkout/abandoned-carts.md) email when they don’t make a purchase and their cart expires.

# Embedded form

> This is a Embedded form for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/how-checkout-works?payment-ui=embedded-form.

## Checkout lifecycle

![](https://docs.stripecdn.com/how_it_works_embedded.0e959f038676541a6341d6ba5fe2ceb27fd5d2093ae52132c7a04d22bb274f5e.mp4)

1. When a customer is ready to complete their purchase, your application creates a new `Checkout Session`.
2. You embed Checkout on your website to show a payment form.
3. Customers enter their payment details and complete the transaction.
4. After the transaction, the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) webhook event triggers the [order fulfillment process](https://docs.stripe.com/checkout/fulfillment.md).
   A diagram of an embedded form integration's lifecycle (See full diagram at https://docs.stripe.com/payments/checkout/how-checkout-works)

## Low-code integration

Checkout requires minimal coding and is the best choice for most integrations because of its prebuilt functionalities and customization options. You can integrate Checkout by creating a `Checkout Session` and collecting customer payment details. Collect payment by [embedding a payment form](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=embedded-form) in your website.

[Compare Checkout](https://docs.stripe.com/payments/online-payments.md#compare-features-and-availability) to other Stripe payment options to determine the best one for you. Checkout displays a payment form to collect customer payment information, validates cards, handles errors, and so on.

| Feature                                                                                                      | Customizable |
| ------------------------------------------------------------------------------------------------------------ | ------------ |
| Support for digital wallets and Link                                                                         | Built-in     |
| Responsive mobile design                                                                                     | Built-in     |
| SCA-ready                                                                                                    | Built-in     |
| CAPTCHAs                                                                                                     | Built-in     |
| PCI compliance                                                                                               | Built-in     |
| Card validation                                                                                              | Built-in     |
| Error messaging                                                                                              | Built-in     |
| [Adjustable quantities](https://docs.stripe.com/payments/checkout/adjustable-quantity.md)                    | Built-in     |
| [Automatic tax collection](https://docs.stripe.com/tax/checkout.md)                                          | Built-in     |
| International language support                                                                               | Built-in     |
| [Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md)          | Built-in     |
| [Collect taxes](https://docs.stripe.com/payments/checkout/taxes.md)                                          | Customizable |
| [Custom branding with colors, buttons, and font](https://docs.stripe.com/payments/checkout/customization.md) | Customizable |
| [Optional items](https://docs.stripe.com/payments/checkout/optional-items.md)                                | Customizable |
| [Global payment methods](https://docs.stripe.com/payments/dashboard-payment-methods.md)                      | Customizable |
| [Subscription upsells](https://docs.stripe.com/payments/checkout/upsells.md)                                 | Customizable |
| [Custom domains](https://docs.stripe.com/payments/checkout/custom-domains.md) (Stripe-hosted page only)      | Customizable |
| [Email receipts](https://docs.stripe.com/receipts.md)                                                        | Customizable |
| [Apply discounts](https://docs.stripe.com/payments/checkout/discounts.md)                                    | Customizable |
| [Custom success page](https://docs.stripe.com/payments/checkout/custom-success-page.md)                      | Customizable |
| [Recover abandoned carts](https://docs.stripe.com/payments/checkout/abandoned-carts.md)                      | Customizable |
| [Autofill payment details with Link](https://docs.stripe.com/payments/link/checkout-link.md)                 | Customizable |
| [Collect Tax IDs](https://docs.stripe.com/tax/checkout/tax-ids.md)                                           | Customizable |
| [Collect shipping information](https://docs.stripe.com/payments/collect-addresses.md?payment-ui=checkout)    | Customizable |
| [Collect phone numbers](https://docs.stripe.com/payments/checkout/phone-numbers.md)                          | Customizable |
| [Set the subscription billing cycle date](https://docs.stripe.com/payments/checkout/billing-cycle.md)        | Customizable |

### Custom branding

You can set fonts, colors, icons, and field styles for your embedded form using the [Branding settings](https://dashboard.stripe.com/settings/branding/checkout) in the Dashboard. For more information, see [Customize your integration](https://docs.stripe.com/payments/checkout/customization.md).

## Checkout Session

The `Checkout Session` is a programmatic representation of what your customers see on the payment form. After creating a `Checkout Session`, mount Checkout on your payment page to complete the purchase. When customers complete their purchase, you can [fulfill their orders](https://docs.stripe.com/checkout/fulfillment.md) by configuring an [event destination](https://docs.stripe.com/event-destinations.md) to process `Checkout Session` events. This code snippet from the [quickstart guide](https://docs.stripe.com/checkout/quickstart.md) is an example of how to create a `Checkout Session` in your application.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

### One-time and recurring payments

Allow customers to make one-time payments or subscribe to a product or service by setting the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) parameter in a `Checkout Session`.

| Mode                                                                      | Purchase type                                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Payment                                                                   | One-time purchases                                                                |
| [Subscription](https://docs.stripe.com/billing/subscriptions/overview.md) | - Recurring purchases

- Mixed cart: Recurring purchases with one-time purchases |

### Mixed cart

Create a mixed cart in Checkout that lets your customers purchase Subscription items and one-time purchase items at the same time. To create a mixed cart, set the `mode` parameter to `subscription` and include the Price IDs, or `price_data`, for each line\_item in the [line\_items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items) array. Price IDs come from Price objects created using the Stripe Dashboard or API and allow you to store information about your product catalog in Stripe.

You can also use [price\_data](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price_data) to reference information from an external database where you’re hosting price and product details without storing product catalog information on Stripe. For more information, see [Build a subscriptions integration](https://docs.stripe.com/billing/subscriptions/build-subscriptions.md).

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"={{RECURRING_PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d "line_items[1][price]"={{ONE_TIME_PRICE_ID}} \
  -d "line_items[1][quantity]"=1 \
  -d mode=subscription \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

### Payment methods

You can view, enable, and disable different payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) at any time. Stripe enables certain payment methods for you by default. We might also enable additional payment methods after notifying you. View our [complete list of payment methods](https://docs.stripe.com/payments/payment-methods/overview.md).

### Save payment details and default payment methods

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

You can [save payment details for future use](https://docs.stripe.com/payments/save-and-reuse.md) by sending an API parameter when you create a `Checkout Session`. Options to save payment details include:

- **Single payment**: If your `Checkout Session` uses `payment` mode, set the [payment\_intent\_data.setup\_future\_usage](https://docs.stripe.com/payments/payment-intents.md#future-usage) parameter.
- **Subscription payment**: If your `Checkout Session` uses `subscription` mode, Stripe saves the payment method by default.
- [Multiple saved payment methods](https://docs.stripe.com/payments/accept-a-payment.md?platform=web\&ui=checkout#save-payment-method-details): If a customer has multiple payment methods saved, you can store a default payment method to the `Customer` object’s [default\_payment\_method](https://docs.stripe.com/api/customers/object.md#customer_object-invoice_settings-default_payment_method) field. However, these payment methods don’t appear for return purchases in Checkout.

### Guest customers

The `Customer` object represents a customer of your business, and it helps tracking subscriptions and payments that belong to the same customer. `Checkout Sessions` that don’t create `Customers` are associated with [guest customers](https://docs.stripe.com/payments/checkout/guest-customers.md) instead.

### Expiration

By default, a `Checkout Session` expires after 24 hours.

You can set a custom expiration time for a `Checkout Session` by setting the [expires\_at](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-expires_at) parameter. It can be anywhere from 30 minutes to 24 hours after `Checkout Session` creation.

You can also [expire](https://docs.stripe.com/api/checkout/sessions/expire.md) a `Checkout Session`.

## Complete a transaction

To automate business flows after a transaction has occurred, register an [event destination](https://docs.stripe.com/event-destinations.md) and build a [webhook endpoint handler](https://docs.stripe.com/webhooks/quickstart.md). Consider the following events and automations to enable:

- Process the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event to fulfill orders when a customer completes their purchase
- Process the [checkout.session.expired](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.expired) event to return items to your inventory or send users a cart [abandonment](https://docs.stripe.com/payments/checkout/abandoned-carts.md) email when they don’t make a purchase and their cart expires

# Embedded components

> This is a Embedded components for when payment-ui is embedded-components. View the full page at https://docs.stripe.com/payments/checkout/how-checkout-works?payment-ui=embedded-components.

Use [Elements with the Checkout Sessions API](https://docs.stripe.com/payments/quickstart-checkout-sessions.md) to build a customizable checkout page. Customers use a customized checkout page on your site to enter payment details and complete their purchase.
![Checkout form using Elements with Checkout Sessions API](https://b.stripecdn.com/docs-statics-srv/assets/checkout-elements-hover.512770b61b5ddfe25735112b0b5cb9cb.png)

## Checkout lifecycle

1. When a customer is ready to complete their purchase, your application creates a new `Checkout Session`.
2. You embed Elements on your website to show a payment form.
3. Customers enter their payment details and complete the transaction.
4. After the transaction, the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) webhook event triggers the [order fulfillment process](https://docs.stripe.com/checkout/fulfillment.md).
   A diagram of an embedded component integration's lifecycle (See full diagram at https://docs.stripe.com/payments/checkout/how-checkout-works)

## See also

- [Checkout quickstart](https://docs.stripe.com/checkout/quickstart.md)
- [Fulfill your orders](https://docs.stripe.com/checkout/fulfillment.md)
- [Collect taxes in Checkout](https://docs.stripe.com/payments/checkout/taxes.md)
- [Manage limited inventory with Checkout](https://docs.stripe.com/payments/checkout/managing-limited-inventory.md)
- [Automatically convert to local currencies with Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md)
