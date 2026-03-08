# Make line item quantities adjustable

Enable your customers to adjust the quantity of items during checkout.

# Stripe-hosted page

> This is a Stripe-hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/adjustable-quantity?payment-ui=stripe-hosted.

The line items for each [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md) keep track of what your customer is purchasing. You can configure the Checkout Session so customers can adjust line item quantities during checkout.

## Create a Checkout Session with an adjustable quantity

Set `adjustable_quantity` on your `line_items` when creating a Checkout Session to enable your customers to update the quantity of an item during checkout.

You can customize the default settings for the minimum and maximum quantities allowed by setting `adjustable_quantity.minimum` and `adjustable_quantity.maximum`. By default, an item’s minimum adjustable quantity is `0` and the maximum adjustable quantity is `99`. You can specify a value of up to `999999` for `adjustable_quantity.maximum`.

When using adjustable quantities with a `line_items[].quantity` value greater than `99` (the default adjustable maximum), set `adjustable_quantity.maximum` to be greater than or equal to that item’s quantity.

If you use adjustable quantities, change your configuration so that it uses `adjustable_quantity.maximum` when creating the Checkout Session to reserve inventory quantity instead of the `line_items` quantity.

Checkout prevents the customer from removing an item if it’s the only item remaining.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][price_data][tax_behavior]"=exclusive \
  -d "line_items[0][adjustable_quantity][enabled]"=true \
  -d "line_items[0][adjustable_quantity][minimum]"=1 \
  -d "line_items[0][adjustable_quantity][maximum]"=10 \
  -d "line_items[0][quantity]"=1 \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

## Handle completed transactions

After the payment completes, you can make a request for the finalized [line items](https://docs.stripe.com/api/checkout/sessions/line_items.md) and their quantities. If your customer removes a line item, it’s also removed from the line items response. See the [Fulfillment guide](https://docs.stripe.com/checkout/fulfillment.md) to learn how to create an event handler to handle completed Checkout Sessions.

> To test your event handler, [install the Stripe CLI](https://docs.stripe.com/stripe-cli.md) and use `stripe listen --forward-to localhost:4242/webhook` to [forward events to your local server](https://docs.stripe.com/webhooks.md#test-webhook).

#### Ruby

```ruby
# Set your secret key. Remember to switch to your live secret key in production!
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = "<<YOUR_SECRET_KEY>>"

require 'sinatra'

# You can find your endpoint's secret in your webhook settings
endpoint_secret = 'whsec_...'

post '/webhook' do
  event = nil

  # Verify webhook signature and extract the event
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    payload = request.body.read
    event = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
  rescue JSON::ParserError => e
    # Invalid payload
    return status 400
  rescue Stripe::SignatureVerificationError => e
    # Invalid signature
    return status 400
  end

  if event['type'] == 'checkout.session.completed'
    checkout_session = event['data']['object']

    line_items = Stripe::Checkout::Session.list_line_items(checkout_session['id'], {limit: 100})

    # Fulfill the purchase...
    begin
      fulfill_order(checkout_session, line_items)
    rescue NotImplementedError => e
      return status 400
    end
  end

  status 200
end

def fulfill_order(checkout_session, line_items)
  # TODO: Remove error and implement...
  raise NotImplementedError.new(<<~MSG)
    Given the Checkout Session "#{checkout_session.id}" load your internal order from the database here.
    Then you can reconcile your order's quantities with the final line item quantity purchased. You can use `checkout_session.metadata` and `price.metadata` to store and later reference your internal order and item ids.
  MSG
end
```

# Embedded form

> This is a Embedded form for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/adjustable-quantity?payment-ui=embedded-form.

The line items for each [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md) keep track of what your customer is purchasing. You can configure the Checkout Session so customers can adjust line item quantities during checkout.

## Create a Checkout Session with an adjustable quantity

Set `adjustable_quantity` on your `line_items` when creating a Checkout Session to enable your customers to update the quantity of an item during checkout.

You can customize the default settings for the minimum and maximum quantities allowed by setting `adjustable_quantity.minimum` and `adjustable_quantity.maximum`. By default, an item’s minimum adjustable quantity is `0` and the maximum adjustable quantity is `99`. You can specify a value of up to `999999` for `adjustable_quantity.maximum`.

When using adjustable quantities with a `line_items[].quantity` value greater than `99` (the default adjustable maximum), set `adjustable_quantity.maximum` to be greater than or equal to that item’s quantity.

If you use adjustable quantities, change your configuration so that it uses `adjustable_quantity.maximum` when creating the Checkout Session to reserve inventory quantity instead of the `line_items` quantity.

Checkout prevents the customer from removing an item if it’s the only item remaining.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][price_data][tax_behavior]"=exclusive \
  -d "line_items[0][adjustable_quantity][enabled]"=true \
  -d "line_items[0][adjustable_quantity][minimum]"=1 \
  -d "line_items[0][adjustable_quantity][maximum]"=10 \
  -d "line_items[0][quantity]"=1 \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Handle completed transactions

After the payment completes, you can make a request for the finalized [line items](https://docs.stripe.com/api/checkout/sessions/line_items.md) and their quantities. If your customer removes a line item, it’s also removed from the line items response. See the [Fulfillment guide](https://docs.stripe.com/checkout/fulfillment.md) to learn how to create an event handler to handle completed Checkout Sessions.

> To test your event handler, [install the Stripe CLI](https://docs.stripe.com/stripe-cli.md) and use `stripe listen --forward-to localhost:4242/webhook` to [forward events to your local server](https://docs.stripe.com/webhooks.md#test-webhook).

#### Ruby

```ruby
# Set your secret key. Remember to switch to your live secret key in production!
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = "<<YOUR_SECRET_KEY>>"

require 'sinatra'

# You can find your endpoint's secret in your webhook settings
endpoint_secret = 'whsec_...'

post '/webhook' do
  event = nil

  # Verify webhook signature and extract the event
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    payload = request.body.read
    event = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
  rescue JSON::ParserError => e
    # Invalid payload
    return status 400
  rescue Stripe::SignatureVerificationError => e
    # Invalid signature
    return status 400
  end

  if event['type'] == 'checkout.session.completed'
    checkout_session = event['data']['object']

    line_items = Stripe::Checkout::Session.list_line_items(checkout_session['id'], {limit: 100})

    # Fulfill the purchase...
    begin
      fulfill_order(checkout_session, line_items)
    rescue NotImplementedError => e
      return status 400
    end
  end

  status 200
end

def fulfill_order(checkout_session, line_items)
  # TODO: Remove error and implement...
  raise NotImplementedError.new(<<~MSG)
    Given the Checkout Session "#{checkout_session.id}" load your internal order from the database here.
    Then you can reconcile your order's quantities with the final line item quantity purchased. You can use `checkout_session.metadata` and `price.metadata` to store and later reference your internal order and item ids.
  MSG
end
```
