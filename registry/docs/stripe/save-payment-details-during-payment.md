# Save payment details during payment

Learn how to accept a payment and save your customer's payment details for future purchases.

# Stripe-hosted page

> This is a Stripe-hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/save-during-payment?payment-ui=stripe-hosted.

Use [Stripe Checkout](https://docs.stripe.com/payments/checkout.md) for a fast, low-code integration that allows your customers to save their payment details for future purchases.

## Set up Stripe \[Server-side]

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

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

## Create a customer \[Server-side]

To set a card up for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a Customer object when your customer creates an account with your business. Customer objects allow for reusing payment methods and tracking across multiple payments.

> #### Compare Customers v1 and Accounts v2 references
>
> If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

```curl
curl https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name="Jenny Rosen" \
  --data-urlencode email="jennyrosen@example.com"
```

Successful creation returns the [Customer](https://docs.stripe.com/api/customers/object.md) object. You can inspect the object for the customer `id` and store the value in your database for later retrieval.

You can find these customers in the [Customers](https://dashboard.stripe.com/customers) page in the Dashboard.

## Create a Checkout Session \[Client-side] \[Server-side]

Add a checkout button to your website that calls a server-side endpoint to create a [Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md).

You can also create a Checkout Session for an [existing customer](https://docs.stripe.com/payments/existing-customers.md?platform=web\&ui=stripe-hosted), allowing you to prefill Checkout fields with known contact information and unify your purchase history for that customer.

```html
<html>
  <head>
    <title>Buy cool new product</title>
  </head>
  <body>
    <!-- Use action="/create-checkout-session.php" if your server is PHP based. -->
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </body>
</html>
```

A Checkout Session is the programmatic representation of what your customer sees when they’re redirected to the payment form. You can configure it with options such as:

- [Line items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items) to charge
- Currencies to use

You must populate `success_url` with the URL value of a page on your website that Checkout returns your customer to after they complete the payment.

> Checkout Sessions expire 24 hours after creation by default.

After creating a Checkout Session, redirect your customer to the [URL](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-url) returned in the response.

#### Ruby

```ruby
# This example sets up an endpoint using the Sinatra framework.


require 'json'
require 'sinatra'
require 'stripe'

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-checkout-session' dosession = Stripe::Checkout::Session.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    # These placeholder URLs will be replaced in a following step.
    success_url: 'https://example.com/success',
  })

  redirect session.url, 303
end
```

### Payment methods

By default, Stripe enables cards and other common payment methods. You can turn individual payment methods on or off in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). In Checkout, Stripe evaluates the currency and any restrictions, then dynamically presents the supported payment methods to the customer.

To see how your payment methods appear to customers, enter a transaction ID or set an order amount and currency in the Dashboard.

You can enable Apple Pay and Google Pay in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods). By default, Apple Pay is enabled and Google Pay is disabled. However, in some cases Stripe filters them out even when they’re enabled. We filter Google Pay if you [enable automatic tax](https://docs.stripe.com/tax/checkout.md) without collecting a shipping address.

Checkout’s Stripe-hosted pages don’t need integration changes to enable Apple Pay or Google Pay. Stripe handles these payments the same way as other card payments.

### Confirm your endpoint

Confirm your endpoint is accessible by starting your web server (for example, `localhost:4242`) and running the following command:

```bash
curl -X POST -is "http://localhost:4242/create-checkout-session" -d ""
```

You should see a response in your terminal that looks like this:

```bash
HTTP/1.1 303 See Other
Location: https://checkout.stripe.com/c/pay/cs_test_...
...
```

### Testing

You should now have a working checkout button that redirects your customer to Stripe Checkout.

1. Click the checkout button.
2. You’re redirected to the Stripe Checkout payment form.

If your integration isn’t working:

1. Open the Network tab in your browser’s developer tools.
2. Click the checkout button and confirm it sent an XHR request to your server-side endpoint (`POST /create-checkout-session`).
3. Verify the request is returning a 200 status.
4. Use `console.log(session)` inside your button click listener to confirm the correct data returned.

For more information about configuring and testing your hosted Checkout integration, see [Accept a Payment](https://docs.stripe.com/payments/accept-a-payment.md?platform=web\&ui=hosted-form).

## Save payment method \[Server-side]

After setting up your hosted Checkout integration, choose a configuration for your integration to save the payment methods used by your customers.

By default, payment methods used to make a one-time payment with Checkout aren’t available for future use.

### Save payment methods to charge them off-session

You can set Checkout to save payment methods used to make a one-time payment by passing the [payment\_intent\_data.setup\_future\_usage](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-setup_future_usage) argument. This is useful if you need to capture a payment method on-file to use for future fees, such as cancellation or no-show fees.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer_creation=always \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success.html" \
  -d "payment_intent_data[setup_future_usage]"=off_session
```

If you use Checkout in `subscription` mode, Stripe automatically saves the payment method to charge it for subsequent payments. Card payment methods saved to customers using either `setup_future_usage` or `subscription` mode don’t appear for return purchases in Checkout (more on this below). We recommend using [custom text](https://docs.stripe.com/payments/checkout/customization/policies.md) to link out to any relevant terms regarding the usage of saved payment information.

> Global privacy laws are complicated and nuanced. We recommend contacting your legal and privacy team prior to implementing [setup\_future\_usage](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-setup_future_usage) because it might implicate your existing privacy compliance framework. Refer to [the guidance issued by the European Protection Board](https://edpb.europa.eu/system/files/2021-05/recommendations022021_on_storage_of_credit_card_data_en_1.pdf) to learn more about saving payment details.

### Save payment methods to prefill them in Checkout

By default, Checkout uses [Link](https://docs.stripe.com/payments/link/checkout-link.md) to provide your customers with the option to securely save and reuse their payment information. If you prefer to manage payment methods yourself, use [saved\_payment\_method\_options.payment\_method\_save](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_save) when creating a Checkout Session to let your customers save their payment methods for future purchases in Checkout.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer_creation=always \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success.html" \
  -d "saved_payment_method_options[payment_method_save]"=enabled
```

Passing this parameter in either [payment](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) or [subscription](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) mode displays an optional checkbox to let customers explicitly save their payment method for future purchases. When customers check this checkbox, Checkout saves the payment method with [allow\_redisplay: always](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-allow_redisplay). Checkout uses this parameter to determine whether a payment method can be prefilled on future purchases. When using `saved_payment_method_options.payment_method_save`, you don’t need to pass in `setup_future_usage` to save the payment method.

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

Using [saved\_payment\_method\_options.payment\_method\_save](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_save) requires a `Customer`. To save a new customer, set the Checkout Session’s [customer\_creation](https://docs.stripe.com/api/checkout/sessions/create.md) to `always`. Otherwise, the session doesn’t save the customer or the payment method.

If `payment_method_save` isn’t passed in or if the customer doesn’t agree to save the payment method, Checkout still saves payment methods created in `subscription` mode or using `setup_future_usage`. These payment methods have an `allow_redisplay` value of `limited`, which prevents them from being prefilled for returning purchases and allows you to comply with card network rules and data protection regulations. Learn how to [change the default behavior enabled by these modes](https://support.stripe.com/questions/prefilling-saved-cards-in-checkout) and how to change or override `allow_redisplay` behavior.

> You can use Checkout to save cards and other payment methods to charge them off-session, but Checkout only prefills saved cards. Learn how to [prefill saved cards](https://support.stripe.com/questions/prefilling-saved-cards-in-checkout). To save a payment method without an initial payment, [use Checkout in setup mode](https://docs.stripe.com/payments/save-and-reuse.md?platform=checkout).

### Let customers remove saved payment methods

To let your customers remove a saved payment method so it doesn’t resurface for future payments, use [saved\_payment\_method\_options.payment\_method\_remove](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_remove) when creating a Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer={{CUSTOMER_ID}} \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success.html" \
  -d "saved_payment_method_options[payment_method_remove]"=enabled
```

The customer can’t remove a payment method if it’s tied to an active subscription and the customer doesn’t have a default payment method saved for invoice and subscription payments.

# Embedded form

> This is a Embedded form for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/save-during-payment?payment-ui=embedded-form.

Use [Stripe Checkout](https://docs.stripe.com/payments/checkout.md) to embed a prebuilt payment form on your website that allows your customers to save their payment details for future purchases.

## Set up Stripe \[Server-side]

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

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

## Create a customer \[Server-side]

To set a card up for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a Customer object when your customer creates an account with your business. Customer objects allow for reusing payment methods and tracking across multiple payments.

> #### Compare Customers v1 and Accounts v2 references
>
> If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

```curl
curl https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name="Jenny Rosen" \
  --data-urlencode email="jennyrosen@example.com"
```

Successful creation returns the [Customer](https://docs.stripe.com/api/customers/object.md) object. You can inspect the object for the customer `id` and store the value in your database for later retrieval.

You can find these customers in the [Customers](https://dashboard.stripe.com/customers) page in the Dashboard.

## Create a Checkout Session \[Server-side]

From your server, create a *Checkout Session* (A Checkout Session represents your customer's session as they pay for one-time purchases or subscriptions through Checkout. After a successful payment, the Checkout Session contains a reference to the Customer, and either the successful PaymentIntent or an active Subscription) and set the [ui\_mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-ui_mode) to `embedded`. You can configure the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md) with [line items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items) to include and options such as [currency](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-currency).

You can also create a Checkout Session for an [existing customer](https://docs.stripe.com/payments/existing-customers.md?platform=web\&ui=stripe-hosted), allowing you to prefill Checkout fields with known contact information and unify your purchase history for that customer.

To return customers to a custom page that you host on your website, specify that page’s URL in the [return\_url](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-return_url) parameter. Include the `{CHECKOUT_SESSION_ID}` template variable in the URL to retrieve the session’s status on the return page. Checkout automatically substitutes the variable with the Checkout Session ID before redirecting.

Read more about [configuring the return page](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=embedded-form#return-page) and other options for [customizing redirect behavior](https://docs.stripe.com/payments/checkout/custom-success-page.md?payment-ui=embedded-form).

After you create the Checkout Session, use the `client_secret` returned in the response to [mount Checkout](https://docs.stripe.com/payments/checkout/save-during-payment.md#mount-checkout).

#### Ruby

```ruby
# This example sets up an endpoint using the Sinatra framework.
require 'json'
require 'sinatra'
require 'stripe'

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-checkout-session' do
  session = Stripe::Checkout::Session.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: 'payment',ui_mode: 'embedded',
    return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
  })

  {clientSecret: session.client_secret}.to_json
end
```

## Mount Checkout \[Client-side] \[Server-side]

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

## Save payment method \[Server-side]

After setting up your embedded Checkout integration, choose a configuration for your integration to save the payment methods used by your customers.

By default, payment methods used to make a one-time payment with Checkout aren’t available for future use.

### Save payment methods to charge them off-session

You can set Checkout to save payment methods used to make a one-time payment by passing the [payment\_intent\_data.setup\_future\_usage](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-setup_future_usage) argument. This is useful if you need to capture a payment method on-file to use for future fees, such as cancellation or no-show fees.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer_creation=always \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return" \
  -d "payment_intent_data[setup_future_usage]"=off_session
```

If you use Checkout in `subscription` mode, Stripe automatically saves the payment method to charge it for subsequent payments. Card payment methods saved to customers using either `setup_future_usage` or `subscription` mode don’t appear for return purchases in Checkout (more on this below). We recommend using [custom text](https://docs.stripe.com/payments/checkout/customization/policies.md) to link out to any relevant terms regarding the usage of saved payment information.

> Global privacy laws are complicated and nuanced. We recommend contacting your legal and privacy team prior to implementing [setup\_future\_usage](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-setup_future_usage) because it might implicate your existing privacy compliance framework. Refer to [the guidance issued by the European Protection Board](https://edpb.europa.eu/system/files/2021-05/recommendations022021_on_storage_of_credit_card_data_en_1.pdf) to learn more about saving payment details.

### Save payment methods to prefill them in Checkout

By default, Checkout uses [Link](https://docs.stripe.com/payments/link/checkout-link.md) to provide your customers with the option to securely save and reuse their payment information. If you prefer to manage payment methods yourself, use [saved\_payment\_method\_options.payment\_method\_save](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_save) when creating a Checkout Session to let your customers save their payment methods for future purchases in Checkout.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer_creation=always \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return" \
  -d "saved_payment_method_options[payment_method_save]"=enabled
```

Passing this parameter in either [payment](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) or [subscription](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) mode displays an optional checkbox to let customers explicitly save their payment method for future purchases. When customers check this checkbox, Checkout saves the payment method with [allow\_redisplay: always](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-allow_redisplay). Checkout uses this parameter to determine whether a payment method can be prefilled on future purchases. When using `saved_payment_method_options.payment_method_save`, you don’t need to pass in `setup_future_usage` to save the payment method.

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

Using [saved\_payment\_method\_options.payment\_method\_save](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_save) requires a `Customer`. To save a new customer, set the Checkout Session’s [customer\_creation](https://docs.stripe.com/api/checkout/sessions/create.md) to `always`. Otherwise, the session doesn’t save the customer or the payment method.

If `payment_method_save` isn’t passed in or if the customer doesn’t agree to save the payment method, Checkout still saves payment methods created in `subscription` mode or using `setup_future_usage`. These payment methods have an `allow_redisplay` value of `limited`, which prevents them from being prefilled for returning purchases and allows you to comply with card network rules and data protection regulations. Learn how to [change the default behavior enabled by these modes](https://support.stripe.com/questions/prefilling-saved-cards-in-checkout) and how to change or override `allow_redisplay` behavior.

> You can use Checkout to save cards and other payment methods to charge them off-session, but Checkout only prefills saved cards. Learn how to [prefill saved cards](https://support.stripe.com/questions/prefilling-saved-cards-in-checkout). To save a payment method without an initial payment, [use Checkout in setup mode](https://docs.stripe.com/payments/save-and-reuse.md?platform=checkout).

### Let customers remove saved payment methods

To let your customers remove a saved payment method so it doesn’t resurface for future payments, use [saved\_payment\_method\_options.payment\_method\_remove](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_remove) when creating a Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer={{CUSTOMER_ID}} \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return" \
  -d "saved_payment_method_options[payment_method_remove]"=enabled
```

The customer can’t remove a payment method if it’s tied to an active subscription and the customer doesn’t have a default payment method saved for invoice and subscription payments.
