# Review uncaptured payments

Learn how to use reviews if your Stripe integration uses auth and capture.

By default, you [create payments](https://docs.stripe.com/payments/accept-a-payment.md) in one step. You don’t need to do anything else to send funds to your bank account. Stripe also supports two-step payments, often called [auth and capture](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md). If your integration uses this method, approving a review and capturing a payment are separate actions.

Your capture window for approved payments varies by [card brand](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md#authorization-validity-windows), potential [extended holds](https://docs.stripe.com/payments/extended-authorization.md), and [payment method type](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md#auth-capture-limitations).

## Review uncaptured payments in the Dashboard

When we place an uncaptured payment in review, the Stripe Dashboard shows a **Capture** button alongside buttons to approve or cancel the review. Uncaptured payments show a **Cancel** button instead of a **Refund** button because canceling an uncaptured payment releases the authorization without creating a [Refund object](https://docs.stripe.com/api/refunds.md).

> Approving the review doesn’t automatically capture the charge. You still need to click **Capture**.
> ![](https://b.stripecdn.com/docs-statics-srv/assets/uncaptured-payment.b9aab5781bebea8e1cc8f349dc2092bf.png)

## Use the API to automatically capture approved payments

Through the API, you can set up your integration to:

- Immediately capture payments *not* placed in `review`.
- Leave payments placed in `review` uncaptured.
- When the review is approved, capture the payment.

### Immediately capture payments not placed in review

Set the `capture_method` in your API request to create an uncaptured payment. After a successful request, check the [review](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-review) attribute on the PaymentIntent. If it’s empty, capture the charge.

#### Ruby

```ruby

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# Get the credit card details submitted by the form
# Create a PaymentIntent with manual capture
payment_intent = Stripe::PaymentIntent.create({
  amount: 1000,
  currency: 'usd',
  payment_method: '{{PAYMENT_METHOD_ID}}',
  description: 'Example charge',
  confirm: true,
  capture_method: 'manual',
})

# Check if the payment is in review. If not, capture it.
if !payment_intent.review
  payment_intent.capture
end
```

### Capture a payment after a review is approved

In the previous step, you left payments in `review` and uncaptured. Use *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) to automatically capture these payments after approval.

Configure your webhooks to listen for the `review.closed` event. The event includes the [Review object](https://docs.stripe.com/api.md#review_object), and its `reason` attribute indicates whether the review was approved or closed for another reason (for example, the payment was refunded).

```json
// Review object included in review.closed event webhook.
{
  "id": "prv_08voh1589O8KAxCGPcIQpmkz",
  "object": "review",
  "payment_intent": "pi_1D0CsEITpIrAk4QYdrWDnbRS",
  "created": 1474379631,
  "livemode": false,
  "open": false,
  "reason": "approved"
}
```

If `reason` is `approved`, capture the charge.

```ruby

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post "/my/webhook/url" do
  event_json = JSON.parse(request.body.read)
  event = Stripe::Event.retrieve(event_json["id"])

  if event.type == 'review.closed'
    review = event.object
    if review.reason == 'approved'
      pi = Stripe::PaymentIntent.retrieve(review.payment_intent)
      pi.capture
    end
  end

  status 200
end
```
