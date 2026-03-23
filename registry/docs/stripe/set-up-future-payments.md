# Set up future payments

Learn how to save payment details in a Checkout session and charge your customers later.

# Hosted page

> This is a Hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/save-and-reuse?payment-ui=stripe-hosted.

To collect customer payment details that you can reuse later, use Checkout’s setup mode. Setup mode uses the [Setup Intents API](https://docs.stripe.com/api/setup_intents.md) to create [Payment Methods](https://docs.stripe.com/api/payment_methods.md).

Check out our [full, working sample on GitHub](https://github.com/stripe-samples/checkout-remember-me-with-twilio-verify).

## Set up Stripe \[Server-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

Use our official libraries to access the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Create a Checkout Session \[Client-side] \[Server-side]

Add a checkout button to your website that calls a server-side endpoint to create a Checkout Session.

```html
<html>
  <head>
    <title>Checkout</title>
  </head>
  <body>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </body>
</html>
```

To create a setup mode Session, use the `mode` parameter with a value of `setup` when creating the Session. You can optionally specify the [customer](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer) parameter to automatically attach the created payment method to an existing customer. Checkout uses [Dynamic payment methods](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) by default, which requires you to pass the [currency](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-currency) parameter when using `setup` mode.

Append the `{CHECKOUT_SESSION_ID}` template variable to the `success_url` to get access to the Session ID after your customer successfully completes a Checkout Session. After creating the Checkout Session, redirect your customer to the [URL](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-url) returned in the response.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=setup \
  -d currency=usd \
  -d customer="{{CUSTOMER_ID}}" \
  --data-urlencode success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}"
```

### Payment methods

By default, Stripe enables cards and other common payment methods. You can turn individual payment methods on or off in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). In Checkout, Stripe evaluates the currency and any restrictions, then dynamically presents the supported payment methods to the customer.

To see how your payment methods appear to customers, enter a transaction ID or set an order amount and currency in the Dashboard.

You can enable Apple Pay and Google Pay in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods). By default, Apple Pay is enabled and Google Pay is disabled. However, in some cases Stripe filters them out even when they’re enabled. We filter Google Pay if you [enable automatic tax](https://docs.stripe.com/tax/checkout.md) without collecting a shipping address.

Checkout’s Stripe-hosted pages don’t need integration changes to enable Apple Pay or Google Pay. Stripe handles these payments the same way as other card payments.

## Retrieve the Checkout Session \[Server-side]

After a customer successfully completes their Checkout Session, you need to retrieve the Session object. There are two ways to do this:

- **Asynchronously**: Handle `checkout.session.completed` *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests), which contain a Session object. Learn more about [setting up webhooks](https://docs.stripe.com/webhooks.md).
- **Synchronously**: Obtain the Session ID from the `success_url` when a user redirects back to your site. Use the Session ID to [retrieve](https://docs.stripe.com/api/checkout/sessions/retrieve.md) the Session object.

```curl
curl https://api.stripe.com/v1/checkout/sessions/cs_test_MlZAaTXUMHjWZ7DcXjusJnDU4MxPalbtL5eYrmS2GKxqscDtpJq8QM0k \
  -u "<<YOUR_SECRET_KEY>>:"
```

The right choice depends on your tolerance for dropoff, as customers may not always reach the `success_url` after a successful payment. It’s possible for them close their browser tab before the redirect occurs. Handling webhooks prevents your integration from being susceptible to this form of dropoff.

After you have retrieved the Session object, get the value of the `setup_intent` key, which is the ID for the SetupIntent created during the Checkout Session. A [SetupIntent](https://docs.stripe.com/payments/setup-intents.md) is an object used to set up the customer’s bank account information for future payments.

Example `checkout.session.completed` payload:

```json
{
  "id": "evt_1Ep24XHssDVaQm2PpwS19Yt0",
  "object": "event",
  "api_version": "2019-03-14",
  "created": 1561420781,
  "data": {
    "object": {
      "id": "cs_test_MlZAaTXUMHjWZ7DcXjusJnDU4MxPalbtL5eYrmS2GKxqscDtpJq8QM0k",
      "object": "checkout.session",
      "billing_address_collection": null,
      "client_reference_id": null,
      "customer": "",
      "customer_email": null,
      "display_items": [],
      "mode": "setup","setup_intent": "seti_1EzVO3HssDVaQm2PJjXHmLlM",
      "submit_type": null,
      "subscription": null,
      "success_url": "https://example.com/success"
    }
  },
  "livemode": false,
  "pending_webhooks": 1,
  "request": {
    "id": null,
    "idempotency_key": null
  },
  "type": "checkout.session.completed"
}
```

Note the `setup_intent` ID for the next step.

## Retrieve the SetupIntent \[Server-side]

Using the `setup_intent` ID, [retrieve](https://docs.stripe.com/api/setup_intents/retrieve.md) the SetupIntent object. The returned object contains a `payment_method` ID that you can attach to a customer in the next step.

```curl
curl https://api.stripe.com/v1/setup_intents/seti_1EzVO3HssDVaQm2PJjXHmLlM \
  -u "<<YOUR_SECRET_KEY>>:"
```

> If you’re requesting this information synchronously from the Stripe API (as opposed to handling webhooks), you can combine the previous step with this step by [expanding](https://docs.stripe.com/api/expanding_objects.md) the SetupIntent object in the request to the /v1/checkout/session endpoint. Doing this prevents you from having to make two network requests to access the newly created PaymentMethod ID.

## Charge the payment method later \[Server-side]

If you didn’t create the Checkout Session with an existing customer, use the ID of the PaymentMethod to [attach](https://docs.stripe.com/api/payment_methods/attach.md) the *PaymentMethod* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs) to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). After you attach the PaymentMethod to a customer, you can make an *off-session* (A payment is described as off-session if it occurs without the direct involvement of the customer, using previously-collected payment information) payment using a [PaymentIntent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method):

- Set [customer](https://docs.stripe.com/api.md#create_payment_intent-customer) to the ID of the Customer and [payment\_method](https://docs.stripe.com/api.md#create_payment_intent-payment_method) to the ID of the PaymentMethod.
- Set [off\_session](https://docs.stripe.com/api/payment_intents/confirm.md#confirm_payment_intent-off_session) to `true` to indicate that the customer isn’t in your checkout flow during a payment attempt and can’t fulfill an authentication request made by a partner, such as a card issuer, bank, or other payment institution. If, during your checkout flow, a partner requests authentication, Stripe requests exemptions using customer information from a previous *on-session* (A payment is described as on-session if it occurs while the customer is actively in your checkout flow and able to authenticate the payment method) transaction. If the conditions for exemption aren’t met, the PaymentIntent might throw an error.
- Set the value of the PaymentIntent’s [confirm](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-confirm) property to `true`, which causes confirmation to occur immediately when you create the PaymentIntent.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d customer="{{CUSTOMER_ID}}" \
  -d payment_method="{{PAYMENTMETHOD_ID}}" \
  -d off_session=true \
  -d confirm=true
```

When a payment attempt fails, the request also fails with a 402 HTTP status code and the status of the PaymentIntent is *requires\_payment\_method* (This status appears as "requires\_source" in API versions before 2019-02-11). Notify your customer to return to your application (for example, by sending an email or in-app notification) and direct your customer to a new Checkout Session to select another payment method.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=1099 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}"
```

# Embedded page

> This is a Embedded page for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/save-and-reuse?payment-ui=embedded-form.

To collect customer payment details that you can reuse later, use Checkout’s setup mode. Setup mode uses the [Setup Intents API](https://docs.stripe.com/api/setup_intents.md) to create [Payment Methods](https://docs.stripe.com/api/payment_methods.md).

## Set up Stripe \[Server-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

Use our official libraries to access the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Create a Checkout Session \[Server-side]

From your server, create a *Checkout Session* (A Checkout Session represents your customer's session as they pay for one-time purchases or subscriptions through Checkout. After a successful payment, the Checkout Session contains a reference to the Customer, and either the successful PaymentIntent or an active Subscription) and set the [ui\_mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-ui_mode) to `embedded`. To create a setup mode Checkout Session, set the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) to `setup`.

To return customers to a custom page that you host on your website, specify that page’s URL in the [return\_url](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-return_url) parameter. Include the `{CHECKOUT_SESSION_ID}` template variable in the URL to retrieve the session’s status on the return page. Checkout automatically substitutes the variable with the Checkout Session ID before redirecting.

Read more about [configuring the return page](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=embedded-form#return-page) and other options for [customizing redirect behavior](https://docs.stripe.com/payments/checkout/custom-success-page.md?payment-ui=embedded-form).

You can optionally specify the [customer parameter](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer) to automatically attach the created payment method to an existing customer.

After you create the Checkout Session, use the `client_secret` returned in the response to [mount Checkout](https://docs.stripe.com/payments/checkout/save-and-reuse.md#mount-checkout).

#### Ruby

```ruby
# This example sets up an endpoint using the Sinatra framework.
require 'json'
require 'sinatra'
require 'stripe'

# Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
# Find your keys at https://dashboard.stripe.com/apikeys.
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-checkout-session' do
  session = Stripe::Checkout::Session.create({
    currency: 'usd',
    mode: 'setup',
    ui_mode: 'embedded',
    return_url: 'https://example.com/return?session_id={CHECKOUT_SESSION_ID}'
  })

  {clientSecret: session.client_secret}.to_json
end
```

### Payment methods

By default, Stripe enables cards and other common payment methods. You can turn individual payment methods on or off in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). In Checkout, Stripe evaluates the currency and any restrictions, then dynamically presents the supported payment methods to the customer.

To see how your payment methods appear to customers, enter a transaction ID or set an order amount and currency in the Dashboard.

You can enable Apple Pay and Google Pay in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods). By default, Apple Pay is enabled and Google Pay is disabled. However, in some cases Stripe filters them out even when they’re enabled. We filter Google Pay if you [enable automatic tax](https://docs.stripe.com/tax/checkout.md) without collecting a shipping address.

Checkout’s Stripe-hosted pages don’t need integration changes to enable Apple Pay or Google Pay. Stripe handles these payments the same way as other card payments.

## Mount Checkout \[Client-side]

#### HTML + JS

Checkout is available as part of [Stripe.js](https://docs.stripe.com/js.md). Include the Stripe.js script on your page by adding it to the head of your HTML file. Next, create an empty DOM node (container) to use for mounting.

```html
<head>
  <script src="https://js.stripe.com/clover/stripe.js"></script>
</head>
<body>
  <div id="checkout">
    <!-- Checkout will insert the payment form here -->
  </div>
</body>
```

Initialize Stripe.js with your publishable API key.

Create an asynchronous `fetchClientSecret` function that makes a request to your server to create the Checkout Session and retrieve the client secret. Pass this function into `options` when you create the Checkout instance:

```javascript
// Initialize Stripe.js
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');

initialize();

// Fetch Checkout Session and retrieve the client secret
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  // Initialize Checkout
  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}
```

#### React

Install [react-stripe-js](https://docs.stripe.com/sdks/stripejs-react.md) and the Stripe.js loader from npm:

```bash
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

To use the Embedded Checkout component, create an `EmbeddedCheckoutProvider`. Call `loadStripe` with your publishable API key and pass the returned `Promise` to the provider.

Create an asynchronous `fetchClientSecret` function that makes a request to your server to create the Checkout Session and retrieve the client secret. Pass this function into the `options` prop accepted by the provider.

```jsx
import * as React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_123');

const App = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
```

Checkout renders in an iframe that securely sends payment information to Stripe over an HTTPS connection.

> Avoid placing Checkout within another iframe because some payment methods require redirecting to another page for payment confirmation.

### Customize appearance

Customize Checkout to match the design of your site by setting the background color, button color, border radius, and fonts in your account’s [branding settings](https://dashboard.stripe.com/settings/branding).

By default, Checkout renders with no external padding or margin. We recommend using a container element such as a div to apply your desired margin (for example, 16px on all sides).

## Retrieve the Checkout Session \[Server-side]

After a customer successfully completes their Checkout Session, you need to retrieve the Session object. There are two ways to do this:

- **Asynchronously**: Handle `checkout.session.completed` *webhooks* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests), which contain a Session object. Learn more about [setting up webhooks](https://docs.stripe.com/webhooks.md).
- **Synchronously**: Obtain the Session ID from the `return_url` when a user redirects back to your site. Use the Session ID to [retrieve](https://docs.stripe.com/api/checkout/sessions/retrieve.md) the Session object.

```curl
curl https://api.stripe.com/v1/checkout/sessions/cs_test_MlZAaTXUMHjWZ7DcXjusJnDU4MxPalbtL5eYrmS2GKxqscDtpJq8QM0k \
  -u "<<YOUR_SECRET_KEY>>:"
```

The right choice depends on your tolerance for dropoff, as customers may not always reach the `return_url` after a successful payment. It’s possible for them close their browser tab before the redirect occurs. Handling webhooks prevents your integration from being susceptible to this form of dropoff.

After you have retrieved the Session object, get the value of the `setup_intent` key, which is the ID for the SetupIntent created during the Checkout Session. A [SetupIntent](https://docs.stripe.com/payments/setup-intents.md) is an object used to set up the customer’s bank account information for future payments.

Example `checkout.session.completed` payload:

```json
{
  "id": "evt_1Ep24XHssDVaQm2PpwS19Yt0",
  "object": "event",
  "api_version": "2019-03-14",
  "created": 1561420781,
  "data": {
    "object": {
      "id": "cs_test_MlZAaTXUMHjWZ7DcXjusJnDU4MxPalbtL5eYrmS2GKxqscDtpJq8QM0k",
      "object": "checkout.session",
      "billing_address_collection": null,
      "client_reference_id": null,
      "customer": "",
      "customer_email": null,
      "display_items": [],
      "mode": "setup","setup_intent": "seti_1EzVO3HssDVaQm2PJjXHmLlM",
      "submit_type": null,
      "subscription": null,
      "success_url": "https://example.com/success"
    }
  },
  "livemode": false,
  "pending_webhooks": 1,
  "request": {
    "id": null,
    "idempotency_key": null
  },
  "type": "checkout.session.completed"
}
```

Note the `setup_intent` ID for the next step.

## Retrieve the SetupIntent \[Server-side]

Using the SetupIntent ID, [retrieve](https://docs.stripe.com/api/setup_intents/retrieve.md) the SetupIntent object. The returned object contains a `payment_method` ID that you can attach to a customer in the next step.

```curl
curl https://api.stripe.com/v1/setup_intents/seti_1EzVO3HssDVaQm2PJjXHmLlM \
  -u "<<YOUR_SECRET_KEY>>:"
```

> If you’re requesting this information synchronously from the Stripe API (as opposed to handling webhooks), you can combine the previous step with this step by [expanding](https://docs.stripe.com/api/expanding_objects.md) the SetupIntent object in the request to the /v1/checkout/session endpoint. Doing this prevents you from having to make two network requests to access the newly created PaymentMethod ID.

## Charge the payment method later \[Server-side]

If you didn’t create the Checkout Session with an existing customer, use the ID of the PaymentMethod to [attach](https://docs.stripe.com/api/payment_methods/attach.md) the *PaymentMethod* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs) to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). After you attach the PaymentMethod to a customer, you can make an *off-session* (A payment is described as off-session if it occurs without the direct involvement of the customer, using previously-collected payment information) payment using a [PaymentIntent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method):

- Set [customer](https://docs.stripe.com/api.md#create_payment_intent-customer) to the ID of the Customer and [payment\_method](https://docs.stripe.com/api.md#create_payment_intent-payment_method) to the ID of the PaymentMethod.
- Set [off\_session](https://docs.stripe.com/api/payment_intents/confirm.md#confirm_payment_intent-off_session) to `true` to indicate that the customer isn’t in your checkout flow during a payment attempt and can’t fulfill an authentication request made by a partner, such as a card issuer, bank, or other payment institution. If, during your checkout flow, a partner requests authentication, Stripe requests exemptions using customer information from a previous *on-session* (A payment is described as on-session if it occurs while the customer is actively in your checkout flow and able to authenticate the payment method) transaction. If the conditions for exemption aren’t met, the PaymentIntent might throw an error.
- Set the value of the PaymentIntent’s [confirm](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-confirm) property to `true`, which causes confirmation to occur immediately when you create the PaymentIntent.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d customer="{{CUSTOMER_ID}}" \
  -d payment_method="{{PAYMENTMETHOD_ID}}" \
  -d off_session=true \
  -d confirm=true
```

When a payment attempt fails, the request also fails with a 402 HTTP status code and the status of the PaymentIntent is *requires\_payment\_method* (This status appears as "requires\_source" in API versions before 2019-02-11). Notify your customer to return to your application (for example, by sending an email or in-app notification) and direct your customer to a new Checkout Session to select another payment method.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=1099 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return?session_id={CHECKOUT_SESSION_ID}"
```
