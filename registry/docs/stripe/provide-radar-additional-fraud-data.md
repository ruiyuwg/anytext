# Provide Radar additional fraud data

Learn how to provide critical data for improved fraud protection.

If you perform card tokenization yourself, through a third-party, or send raw credit card numbers to Stripe from your servers, critical device details won’t be automatically captured. With fewer data points, *Radar* (Stripe Radar helps detect and block fraud for any type of business using machine learning that trains on data across millions of global companies. It’s built into Stripe and requires no additional setup to get started) might produce less accurate fraud scores. Inaccurate fraud scores can result in fraudulent charges not being blocked.

By using Radar Sessions, you can capture critical fraud information without tokenizing on Stripe. A Radar Session is a snapshot of the browser metadata and device details that helps Radar make more accurate predictions on your payments. This metadata includes information like IP address, browser, screen or device information, and other device characteristics. You can find more details about how Radar uses this data by reading about how Radar performs [advanced fraud detection](https://docs.stripe.com/disputes/prevention/advanced-fraud-detection.md).

> The best way to tokenize your payment information is with a [preferred Stripe integration](https://docs.stripe.com/radar/optimize-fraud-signals.md#integration-fraud-signal-completeness), which handles the secure collection and tokenization of payment information. On a preferred Stripe integration,  Radar has visibility on your checkout flows and leverages the additional data to provide better fraud protection. If you use a preferred Stripe integration, don’t use Radar Sessions because you automatically send Stripe sufficient information.

This guide shows you how to provide Stripe with complete fraud information for these charges. It requires four steps:

1. [Set up Stripe.js and mobile SDKs](https://docs.stripe.com/radar/radar-session.md#setup)
2. [Create a Radar Session from your client and send it to your server](https://docs.stripe.com/radar/radar-session.md#create-radar-session)
3. [Send a Radar Session from your server to Stripe](https://docs.stripe.com/radar/radar-session.md#submit-payment-info)
4. [Verify that your integration works](https://docs.stripe.com/radar/radar-session.md#verify)

## Set up Stripe.js and mobile SDKs

Include [Stripe.js](https://docs.stripe.com/js/including) on your website. To get started with Radar Sessions using the mobile SDKs, see the documentation for [iOS](https://github.com/stripe/stripe-ios) (v21.6.0 or later) and [Android](https://github.com/stripe/stripe-android) (v16.9.0 or later).

## Create a Radar Session from your client and send it to your server

You need to create a Radar Session in your checkout flow or when saving card details. Stripe uses the Radar Session to associate the client information captured by Stripe libraries with subsequent server-side API requests.

#### JavaScript

```javascript
// Initialize Stripe.js.
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');

const {radarSession, error} = await stripe.createRadarSession();

if (error) {
  // Typically you should not abort your checkout flow if an error is returned.
  console.error(error);
} else {
  // Send the Radar Session to your server or store it and
  // send later when the user submits their payment details.
  radarSessionHandler(radarSession);
}
```

> Call `createRadarSession` as late in your checkout flow as possible. Your payment details or confirmation pages are good candidates. `createRadarSession` can be loaded asynchrously.

## Send a Radar Session from your server to Stripe

You have some customizable choices on how to complete this step based on your particular use case and payments scenario.

| Integration path                                                                                                                    | What happens                                                                                                                                                                                                                 | Use this for…                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attach a Radar Session ID on both a Payment Method (when collecting card details) and when creating or confirming a Payment Intent. | Radar uses both sessions (when a user added a Payment Method and when the user actually made a payment with that Payment Method) to deliver better fraud protection by comparing browser information between the two events. | *On-session* (A payment is described as on-session if it occurs while the customer is actively in your checkout flow and able to authenticate the payment method) payments. |
| Attach a Radar Session ID on a Payment Method.                                                                                      | Radar associates the client data with the Payment Method and all future payments made with it.                                                                                                                               | *Off-session* (A payment is described as off-session if it occurs without the direct involvement of the customer, using previously-collected payment information) payments. |

### On-session payments

Radar Sessions only works with Payment Intents API creation requests that result in a charge attempt. Therefore, when you create a PaymentIntent and are providing a Radar Session you must also specify `confirm=true`.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=card \
  -d payment_method="{{PAYMENTMETHOD_ID}}" \
  -d confirm=true \
  -d "radar_options[session]"={{RADAR_SESSION_ID}}
```

If you have an existing Payment Intent, you can attach a Radar Session to it when it’s *confirmed* (Confirming an intent indicates that the customer intends to use the current or provided payment method. Upon confirmation, the intent attempts to initiate the portions of the flow that have real-world side effects).

```curl
curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d payment_method="{{PAYMENTMETHOD_ID}}" \
  -d "radar_options[session]"={{RADAR_SESSION_ID}}
```

Although not required, if your customers visit your site and make on-session payments, it’s always best to send a Radar Session when you create or confirm a Payment Intent and when you create a Payment Method. Any charges created using a Payment Method with a Radar Session use the client information associated with that Radar Session.

```curl
curl https://api.stripe.com/v1/payment_methods \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d type=card \
  -d "card[number]"=4242424242424242 \
  -d "card[exp_month]"=11 \
  -d "card[exp_year]"=2026 \
  -d "card[cvc]"=314 \
  -d "radar_options[session]"={{RADAR_SESSION_ID}}
```

This allows Radar to use both sessions (when a user added a Payment Method and when the user actually made a payment with that Payment Method) to deliver better fraud protection by comparing browser information between the two events.

### Off-session payments

To send a Radar Session for off-session payments, which means completing the payment without the customer’s direct involvement, you need to attach a Radar Session when creating a Payment Method for your customer.

```curl
curl https://api.stripe.com/v1/payment_methods \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d type=card \
  -d "card[number]"=4242424242424242 \
  -d "card[exp_month]"=11 \
  -d "card[exp_year]"=2026 \
  -d "card[cvc]"=314 \
  -d "radar_options[session]"={{RADAR_SESSION_ID}}
```

## Verify that your integration works

Verify your integration by ensuring that the following is present in your API responses when you attach the session to Payment Intents, or Payment Methods. You can separately issue a `GET` for each of those resources and see the `radar_options` field when Radar Sessions were successfully attached.

```json
...
"radar_options": {
    "session": "{{RADAR_SESSION_ID}}"
}
...
```
