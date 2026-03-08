# Collect and save payment details for future use

Use your Stripe Terminal integration to collect and save payment methods for returning customers.

Use Stripe Terminal to collect and save *payment methods* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs) (including NFC-based [mobile wallets](https://docs.stripe.com/payments/wallets.md)) for online reuse. Use an in-person payment to initiate an online *subscription* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis) using [Billing](https://docs.stripe.com/billing.md), save payment details to a customer’s online account, or defer payment.

## Collect and save reusable payment details

You can collect reusable payment details and save them for online use with Terminal:

- [Directly, without charging the payment method](https://docs.stripe.com/terminal/features/saving-payment-details/save-directly.md)
- [After payment](https://docs.stripe.com/terminal/features/saving-payment-details/save-after-payment.md)

## Create a reusable PaymentMethod

When you create a PaymentIntent or SetupIntent with a card-present payment method, you can’t save the PaymentMethod directly. However, in most cases, Stripe can create a reusable `generated_card` PaymentMethod using the payment information. It represents the same payment method and can be reused for online payments.

## Charge a saved PaymentMethod

You can charge customers at a later date using payment details that were saved during an earlier transaction.

[Create and confirm a PaymentIntent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method) with the saved payment method.

To [save a card or mobile wallet from a Terminal PaymentIntent](https://docs.stripe.com/terminal/features/saving-payment-details/save-after-payment.md), attach the `generated_card` PaymentMethod to a Customer. This allows you to reuse it without having to collect payment details again. If you attach a PaymentMethod to a PaymentIntent without also attaching the PaymentMethod to a Customer, you won’t be able to reuse the Payment Method in future transactions.

## Charge customers outside the checkout flow

If the customer isn’t in your checkout flow when you charge the customer, set [off\_session](https://docs.stripe.com/api/payment_intents/confirm.md#confirm_payment_intent-off_session) to `true`. This causes the PaymentIntent to throw an error if customer authentication is required.

#### curl

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -d "payment_method_types[]"="card" \
  -d "amount"=1099 \
  -d "currency"="usd" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "payment_method"="{{PAYMENT_METHOD_ID}}"
```

When charging a saved card or mobile wallet, you can’t use the [confirmPaymentIntent](https://docs.stripe.com/terminal/payments/collect-card-payment.md#confirm-payment) method. Payments with generated cards are online payments and can’t be processed with Terminal SDK methods.

## Track customer behavior with card fingerprints

Use the Stripe API to recognize repeat customers across online and retail channels by correlating transactions by the same card. Like `card` payment methods, each `card_present` payment method has a [fingerprint](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-card-fingerprint) attribute that uniquely identifies a particular card number. Cards from [mobile wallets](https://docs.stripe.com/payments/wallets.md) (for example, Apple Pay or Google Pay) don’t share a fingerprint with cards used online.

Starting with [API version 2018-01-23](https://docs.stripe.com/upgrades.md#2018-01-23), Connect platforms see a fingerprint on `card_present` and `card` PaymentMethods that’s uniform across all connected accounts. You can use this fingerprint to look up a specific card’s charges in a connected account.

## Compliance

You’re responsible for your compliance with all applicable laws, regulations, and network rules when saving a customer’s payment details. For example, the European Data Protection Board has issued guidance regarding saving payment details. These requirements generally apply if you want to save your customer’s payment method for future use. This applies in situations such as presenting a customer’s payment method to them in the checkout flow for a future purchase, or charging them when they’re not actively using your website or app, placing a MOTO order, or in your store.

Add terms to your checkout flow that state how you plan to save payment method details and allow customers to opt in. If you plan to charge the customer while they’re not actively checking out, make sure (at a minimum) that your terms also cover the following:

- The customer’s agreement to your initiating a payment or a series of payments on their behalf for specified transactions.
- The anticipated timing and frequency of payments (for instance, whether charges are for scheduled installment or subscription payments, or for unscheduled top-ups).
- How the payment amount is determined.
- Your cancellation policy, if you’re setting up the payment method for a subscription service.

Make sure you keep a record of your customer’s written agreement to these terms.

When you save a payment method, you can only use it for the specific purpose that you included in your terms. If you want to charge customers when they’re not actively checking out and also save the customer’s payment method to present to them as a saved payment method for future purchases, you must explicitly collect consent from the customer. One way to do so is with a “Save my payment method for future use” checkbox.
