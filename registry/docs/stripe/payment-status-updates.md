# Payment status updates

Monitor and verify payment status, so that you can respond to successful and failed payments.

*PaymentIntents* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods) update in response to actions taken by the customer or payment method. Your integration can inspect the PaymentIntent to determine the status of the payment process, so that you can take business actions or respond to states that require further intervention.

You can also use the Stripe Dashboard to configure your account to email you about payment status, such as successful payments. Change your [email notifications](https://docs.stripe.com/get-started/account/teams.md#email-notifications) in your [user settings](https://dashboard.stripe.com/settings/user).

## Check PaymentIntent status on the client

When completing a payment on the client with the [confirmCardPayment](https://docs.stripe.com/js.md#stripe-confirm-card-payment) function, you can inspect the returned PaymentIntent to determine its current status:

```javascript
(async () => {
  const {paymentIntent, error} = await stripe.confirmCardPayment(clientSecret);
  if (error) {
    // Handle error here
  } else if (paymentIntent && paymentIntent.status === 'succeeded') {
    // Handle successful payment here
  }
})();
```

The following are the possible outcomes of using the `confirmCardPayment` function:

| **Event**                     | **What Happened**                                    | **Expected Integration**                                                   |
| ----------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| Resolves with a PaymentIntent | The customer completed payment on your checkout page | Inform the customer that their payment succeeded                           |
| Resolves with an error        | The customer’s payment failed on your checkout page  | Display an error message and prompt your customer to attempt payment again |

The promise returned by `confirmCardPayment` resolves when the payment process has either completed or failed with an error. When it completes successfully and returns a PaymentIntent, the status is always `succeeded` (or `requires_capture` if [capturing later](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md)). When the payment requires an additional step such as authentication, the promise doesn’t resolve until that step is either complete or has timed out.

## Check PaymentIntent status on the client without using confirmCardPayment

To check the status of a PaymentIntent without using the `confirmCardPayment` function, retrieve it independently by using the [retrievePaymentIntent](https://docs.stripe.com/js/payment_intents/retrieve_payment_intent) function and passing in the *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)).

```javascript
(async () => {
  const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret);
  if (paymentIntent && paymentIntent.status === 'succeeded') {
    // Handle successful payment here
  } else {
    // Handle unsuccessful, processing, or canceled payments and API errors here
  }
})();
```

The following are some [possible statuses](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-status) of the PaymentIntent following a confirmation:

| **What Happened**                                    | **Expected PaymentIntent Status** |
| ---------------------------------------------------- | --------------------------------- |
| The customer completed payment on your checkout page | `succeeded`                       |
| The customer didn’t complete the checkout            | `requires_action`                 |
| The customer’s payment failed on your checkout page  | `requires_payment_method`         |

[Read more about the PaymentIntent statuses](https://docs.stripe.com/payments/paymentintents/lifecycle.md).

## Monitor a PaymentIntent with webhooks

Stripe can send *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) events to your server to notify you when the status of a PaymentIntent changes, which you can use for purposes such as determining when to fulfill goods and services.

Don’t attempt to handle order *fulfillment* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) on the client side because customers can leave the page after payment is complete but before the fulfillment process initiates. Instead, use webhooks to monitor the `payment_intent.succeeded` event and handle its completion asynchronously instead of attempting to initiate fulfillment on the client side.

> It’s technically possible to use polling instead of webhooks to monitor for changes caused by asynchronous operations—repeatedly retrieving a PaymentIntent so that you can check its status—but doing so is much less reliable and might cause rate limiiting issues. Stripe enforces [rate limiting](https://docs.stripe.com/testing.md#rate-limits) on API requests, so exercise caution if you decide to use polling.

To handle a webhook event, create a route on your server and configure a corresponding webhook endpoint [in the Dashboard](https://dashboard.stripe.com/account/webhooks). Stripe sends the `payment_intent.succeeded` event when a payment succeeds, and the `payment_intent.payment_failed` event when a payment fails.

The webhook payload includes the PaymentIntent object. The following example shows how to handle both events:

#### Ruby

```ruby
require 'sinatra'
require 'stripe'

post '/webhook' do
    payload = request.body.read
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    event = nil

    begin
        event = Stripe::Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    rescue JSON::ParserError => e
        # Invalid payload
        status 400
        return
    rescue Stripe::SignatureVerificationError => e
        # Invalid signature
        status 400
        return
    end

    case event['type']
    when 'payment_intent.succeeded'
        intent = event['data']['object']
        puts "Succeeded:", intent['id']
        # Fulfill the customer's purchase
    when 'payment_intent.payment_failed'
        intent = event['data']['object']
        error_message = intent['last_payment_error'] && intent['last_payment_error']['message']
        puts "Failed:", intent['id'], error_message
        # Notify the customer that payment failed
    end

    status 200
end
```

When payment is unsuccessful, you can find more details by inspecting the PaymentIntent’s `last_payment_error` property. You can notify the customer that their payment didn’t complete and encourage them to try again with a different payment method. Reuse the same PaymentIntent to continue tracking the customer’s purchase.

### Handling specific webhook events

The following list describes how to handle webhook events:

| Event                       | Description                                                                                                                                                                               | Next steps                                                                                                      |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `processing`                | The customer’s payment was submitted to Stripe successfully. Only applicable to payment methods with [delayed success confirmation](https://docs.stripe.com/payments/payment-methods.md). | Wait for the initiated payment to succeed or fail.                                                              |
| `succeeded`                 | The customer’s payment succeeded                                                                                                                                                          | Fulfill the purchased goods or services                                                                         |
| `amount_capturable_updated` | The customer’s payment is authorized and ready for capture                                                                                                                                | Capture the funds that are available for payment                                                                |
| `payment_failed`            | The customer’s payment was declined by a card network or otherwise expired                                                                                                                | Reach out to your customer through email or push notification and prompt them to provide another payment method |

To test webhooks locally, you can use [Stripe CLI](https://docs.stripe.com/stripe-cli.md). After you install it, you can forward events to your server:

```bash
stripe listen --forward-to localhost:4242/webhook
Ready! Your webhook signing secret is '{{WEBHOOK_SIGNING_SECRET}}' (^C to quit)
```

Learn more about [setting up webhooks](https://docs.stripe.com/webhooks.md).

## Identifying charges on a PaymentIntent

When you attempt to collect payment from a customer, the PaymentIntent creates a [Charge](https://docs.stripe.com/api/charges.md). To get the ID of the most recent charge, inspect the PaymentIntent’s [latest\_charge](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-latest_charge) property:

#### Ruby

```ruby

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

intent = Stripe::PaymentIntent.retrieve('{{PAYMENT_INTENT_ID}}')
latest_charge = intent.latest_charge
```

To view all of the charges associated with a PaymentIntent, including any unsuccessful charges, [list all charges](https://docs.stripe.com/api/charges/list.md#list_charges-payment_intent) and specify the `payment_intent​` parameter.

```curl
curl -G https://api.stripe.com/v1/charges \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d payment_intent="{{PAYMENTINTENT_ID}}"
```

## Handling next actions

Some payment methods require additional steps, such as authentication, to complete the payment process. Stripe.js handles these automatically when confirming the PaymentIntent, but if you have an advanced integration, you might want to handle these manually.

The PaymentIntent’s [next\_action](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-next_action) property exposes the next step that your integration must handle to complete the payment. The type of possible next actions can differ between various payment methods. You can find a full list of possible next actions in the [API documentation](https://docs.stripe.com/api.md#payment_intent_object-next_action-type).

You can refer to the [payment methods documentation](https://docs.stripe.com/payments/payment-methods/overview.md) for more details about how to handle their required next actions.
