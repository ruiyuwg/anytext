# Connect webhooks

Learn how to use webhooks with Connect to be notified of Stripe activity.

Stripe uses *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) to notify your application when an event happens in your account. All *Connect* (Connect is Stripe's solution for multi-party businesses, such as marketplace or software platforms, to route payments between sellers, customers, and other recipients) integrations should establish a [webhook endpoint](https://dashboard.stripe.com/account/webhooks) to listen for Connect events.

## Connect webhooks

A Connect platform uses two types of webhooks:

- *Account* webhooks are for activity on your own account (for example, most requests made using your API keys and without [authenticating as another Stripe account](https://docs.stripe.com/connect/authentication.md)). This includes all types of charges, except those made directly on a connected account.
- *Connect* webhooks are for activity on any connected account. We send all events on the connected account (including account updates and direct charges) to the Connect webhooks.

When you create a Connect webhook, you must configure it to receive Connect webhook events. When creating it in [the Dashboard](https://dashboard.stripe.com/test/webhooks), for **Listen to**, select **Events on Connected accounts**. When creating it using the API, set the [connect parameter](https://docs.stripe.com/api/webhook_endpoints/create.md#create_webhook_endpoint-connect) to true.
![Webhook settings in the Stripe Dashboard](https://b.stripecdn.com/docs-statics-srv/assets/webhooks.ac3d6c19a5281fbbd2b85a335cd887b3.png)

For Connect webhooks, your development webhook URLs receive only test webhooks, but your production webhook URLs receive both live and test webhooks. This is because you can perform both live and test transactions under a production application. We recommend that you check the `livemode` value when receiving an event webhook to determine whether users need to take action.

You must define separate webook endpoints for your [sandbox](https://docs.stripe.com/sandboxes.md) accounts to receive events for those accounts.

Each event for a connected account contains a top-level `account` property that identifies the connected account. Because the connected account owns [the object that triggered the event](https://docs.stripe.com/api/events/object.md#event_object-data-object), you must make API requests for that object [as the connected account](https://docs.stripe.com/connect/authentication.md).

```json
{
  "id": ""{{EVENT_ID}}"",
  "livemode": true,
  "object": "event",
  "type": "customer.created",
  "account": ""{{CONNECTED_ACCOUNT_ID}}"",
  "pending_webhooks": 2,
  "created": 1349654313,
  "data": {...}
}
```

The following table describes some of the most common and important events related to connected accounts:

| Event                              | data.object type                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account.application.deauthorized` | `application`                                         | Occurs when a connected account disconnects from your platform. You can use it to trigger cleanup on your server. Available for connected accounts with access to the Stripe Dashboard, which includes [Standard accounts](https://docs.stripe.com/connect/standard-accounts.md).                                                                                                                                                                                                                                                                           |
| `account.external_account.updated` | An external account, such as `card` or `bank_account` | Occurs when [a bank account or debit card attached to a connected account is updated](https://docs.stripe.com/connect/payouts-bank-accounts.md), which can impact payouts. Available for connected accounts that your platform controls, which includes Custom and Express accounts, and Standard accounts with [platform controls](https://docs.stripe.com/connect/platform-controls-for-stripe-dashboard-accounts.md) enabled.                                                                                                                            |
| `account.updated`                  | `account`                                             | Allows you to monitor changes to connected account requirements and status changes. Available for all connected accounts.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `balance.available`                | `balance`                                             | Occurs when your Stripe balance has been updated. For example, when [funds you’ve added from your bank account](https://docs.stripe.com/connect/top-ups.md) are available for transfer to your connected account.                                                                                                                                                                                                                                                                                                                                           |
| `payment_intent.succeeded`         | `payment_intent`                                      | Occurs when a payment intent results in a successful charge. Available for all payments, including [destination](https://docs.stripe.com/connect/destination-charges.md) and [direct](https://docs.stripe.com/connect/direct-charges.md) charges.                                                                                                                                                                                                                                                                                                           |
| `payout.failed`                    | `payout`                                              | Occurs when [a payout fails](https://docs.stripe.com/connect/payouts-connected-accounts.md#webhooks). When a payout fails, the external account involved is disabled, and no automatic or manual payouts can be processed until the external account is updated.                                                                                                                                                                                                                                                                                            |
| `person.updated`                   | `person`                                              | Occurs when a `Person` associated with the `Account` is updated. If you [use the Persons API to handle requirements](https://docs.stripe.com/connect/handling-api-verification.md#verification-process), listen for this event to monitor changes to requirements and status changes for individuals. Available for connected accounts that your platform controls, which includes Custom and Express accounts, and Standard accounts with [platform controls](https://docs.stripe.com/connect/platform-controls-for-stripe-dashboard-accounts.md) enabled. |

#### Event - account.application.deauthorized

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you're testing your webhook locally with the Stripe CLI, you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'account.application.deauthorized'
    application = event['data']['object']
    connected_account_id = event['account']
    handle_deauthorization(connected_account_id, application)
  end

  status 200
end

def handle_deauthorization(connected_account_id, application)
  # Clean up account state.
  puts 'Connected account ID: ' + connected_account_id
  puts application.to_s
end
```

#### Event - account.updated

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you're testing your webhook locally with the Stripe CLI, you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'account.updated'
    account = event['data']['object']
    handle_account_update(account)
  end

  status 200
end

def handle_account_update(account)
  # Collect more required information
  puts account.to_s
end
```

#### Event - person.updated

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you're testing your webhook locally with the Stripe CLI, you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'person.updated'
    person = event['data']['object']
    connected_account_id = event['account']
    handle_person_update(connected_account_id, person)
  end

  status 200
end

def handle_person_update(connected_account_id, person)
  # Collect more required information
  puts 'Connected account ID: ' + connected_account_id
  puts person.to_s
end
```

#### Event - payment\_intent.succeeded, direct charge

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you are testing your webhook locally with the Stripe CLI you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'payment_intent.succeeded'
    payment_intent = event['data']['object']
    connected_account_id = event['account']
    handle_successful_payment_intent(connected_account_id, payment_intent)
  end

  status 200
end

def handle_successful_payment_intent(connected_account_id, payment_intent)
  # Fulfill the purchase
  puts 'Connected account ID: ' + connected_account_id
  puts payment_intent.to_s
end
```

#### Event - payment\_intent.succeeded, non-direct charge

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you are testing your webhook locally with the Stripe CLI you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'payment_intent.succeeded'
    payment_intent = event['data']['object']
    handle_successful_payment_intent(payment_intent)
  end

  status 200
end

def handle_successful_payment_intent(payment_intent)
  # Fulfill the purchase
  puts payment_intent.to_s
end
```

#### Event - balance.available

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you're testing your webhook locally with the Stripe CLI, you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'balance.available'
    balance = event['data']['object']
    handle_available_balance(balance)
  end

  status 200
end

def handle_available_balance(balance)
  # Transfer funds to a connected account
  puts balance.to_s
end
```

#### Event - account.external\_account.updated

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you're testing your webhook locally with the Stripe CLI, you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'account.external_account.updated'
    external_account = event['data']['object']
    connected_account_id = event['account']
    handle_external_account_update(connected_account_id, external_account)
  end

  status 200
end

def handle_external_account_update(connected_account_id, external_account)
  # Transfer funds to a connected account
  puts 'Connected account ID: ' + connected_account_id
  puts external_account.to_s
end
```

#### Event - payout.failed

#### Ruby

```ruby
# Using Sinatra.
require 'sinatra'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

# If you're testing your webhook locally with the Stripe CLI, you
# can find the endpoint's secret by running `stripe listen`
# Otherwise, find your endpoint's secret in your webhook settings in
# the Developer Dashboard
endpoint_secret = 'whsec_...'

post '/webhook' do
  payload = request.body.read
  sig_header = request.env['HTTP_STRIPE_SIGNATURE']

  event = nil
# Verify webhook signature and extract the event.
  # See https://stripe.com/docs/webhooks#verify-events for more information.
  begin
    event = Stripe::Webhook.construct_event(
      payload, sig_header, endpoint_secret
    )
  rescue JSON::ParserError => e
    # Invalid payload.
    status 400
    return
  rescue Stripe::SignatureVerificationError => e
    # Invalid Signature.
    status 400
    return
  end

  if event['type'] == 'payout.failed'
    payout = event['data']['object']
    connected_account_id = event['account']
    handle_failed_payout(connected_account_id, payout)
  end

  status 200
end

def handle_failed_payout(connected_account_id, payout)
  # Re-collect bank account required information
  puts 'Connected account ID: ' + connected_account_id
  puts payout.to_s
end
```

## Test webhooks locally

You can test webhooks locally with the Stripe CLI.

1. If you haven’t already, [install the Stripe CLI](https://docs.stripe.com/stripe-cli/install.md) on your machine.

2. Log in to your Stripe account and set up the CLI by running `stripe login` on the command line.

3. Allow your local host to receive a simulated event on your connected account by running `stripe listen --forward-to localhost:{PORT}/webhook` in one terminal window, and running `stripe trigger {{EVENT_NAME}}` in another.

> For Connect webhooks, use [--forward-connect-to](https://docs.stripe.com/cli/listen#listen-forward-connect-to) with `stripe listen` and [--stripe-account](https://docs.stripe.com/cli/trigger#trigger-stripe_account) with `stripe trigger`.

## See also

- [Webhook documentation](https://docs.stripe.com/webhooks.md)
- [Event object reference](https://docs.stripe.com/api.md#events)
