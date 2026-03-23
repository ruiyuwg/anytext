# Dynamically customize shipping options

Update shipping options based on a customer's shipping address.

# Hosted page

> This is a Hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/custom-shipping-options?payment-ui=stripe-hosted.

The hosted page integration doesn’t support dynamically customizing shipping options. To dynamically customize shipping options, use the [Embedded page](https://docs.stripe.com/payments/checkout/custom-shipping-options.md?payment-ui=embedded-form) or the [Checkout elements](https://docs.stripe.com/payments/checkout/custom-shipping-options.md?payment-ui=embedded-components) integration instead.

# Embedded page

> This is a Embedded page for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/custom-shipping-options?payment-ui=embedded-form.

Learn how to dynamically update shipping options based on the address that your customer enters when you use Checkout.

### Use cases

- **Validate an address**: Confirm whether you can ship a product to a customer’s address using your own custom validation rules. You can also create a custom UI for customers to confirm their preferred address.
- **Show relevant shipping options**: Display only available shipping methods, based on the customer’s address. For example, show overnight shipping only for deliveries in your country.
- **Dynamically calculate shipping rates**: Calculate and display shipping fees based on a customer’s delivery address.
- **Update shipping rates based on order total**: Offer shipping rates based on the shipping address or order total, such as free shipping for orders over 100 USD. For checkouts allowing quantity changes or cross-sells, see [Dynamically updating line items](https://docs.stripe.com/payments/checkout/dynamically-update-line-items.md).

### Limitations

- Only supported in [payment mode](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-mode). [Shipping rates](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_options) aren’t available in subscription mode.
- Doesn’t support updates in response to changes from outside of the checkout page.

## Create a Checkout Session \[Server-side]

From your server, create a *Checkout Session* (A Checkout Session represents your customer's session as they pay for one-time purchases or subscriptions through Checkout. After a successful payment, the Checkout Session contains a reference to the Customer, and either the successful PaymentIntent or an active Subscription).

- Set the [ui\_mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-ui_mode) to `embedded`.
- Set the [permissions.update\_shipping\_details](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-permissions-update_shipping_details) to `server_only`.
- Set the [shipping\_address\_collection.allowed\_countries](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection-allowed_countries) to the list of countries you want to offer shipping to.
- Set the [shipping\_options.shipping\_rate\_data](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_options-shipping_rate_data) that creates a dummy shipping rate with a 0 USD shipping amount.

By default, the Stripe Checkout client automatically updates the [shipping\_details](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-collected_information-shipping_details) of the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) object with the shipping information the customer enters, including the customer’s [name](https://docs.stripe.com/api/checkout/sessions/update.md#update_checkout_session-collected_information-shipping_details-name) and [address](https://docs.stripe.com/api/checkout/sessions/update.md#update_checkout_session-collected_information-shipping_details-address).

> When [permissions.update\_shipping\_details](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-permissions-update_shipping_details) is `server_only`, it disables the automatic client-side update and only your server can update the shipping details using your Stripe secret key.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d ui_mode=embedded \
  -d "permissions[update_shipping_details]"=server_only \
  -d "shipping_address_collection[allowed_countries][0]"=US \
  -d "shipping_options[0][shipping_rate_data][display_name]"="Dummy shipping" \
  -d "shipping_options[0][shipping_rate_data][type]"=fixed_amount \
  -d "shipping_options[0][shipping_rate_data][fixed_amount][amount]"=0 \
  -d "shipping_options[0][shipping_rate_data][fixed_amount][currency]"=usd \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode return_url="https://example.com/return"
```

## Customize shipping options \[Server-side]

From your server, create a new endpoint to calculate the shipping options based on the customer’s shipping address.

1. [Retrieve](https://docs.stripe.com/api/checkout/sessions/retrieve.md) the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) using the `checkoutSessionId` from the request body.
2. Validate the customer’s shipping details from the request body.
3. Calculate the shipping options based on the customer’s shipping address and the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md)’s line items.
4. [Update](https://docs.stripe.com/api/checkout/sessions/update.md) the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) with the customer’s [shipping\_details](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-collected_information-shipping_details) and the [shipping\_options](https://docs.stripe.com/api/checkout/sessions/update.md#update_checkout_session-shipping_options).

#### Ruby

```ruby
require 'sinatra'
require 'json'
require 'stripe'

set :port, 4242

# Set your secret key. Remember to switch to your live secret key in production!
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = "<<YOUR_SECRET_KEY>>"

# Return a boolean indicating whether the shipping details are valid
def validate_shipping_details(shipping_details)
  # TODO: Remove error and implement...
  raise NotImplementedError.new(<<~MSG)
    Validate the shipping details the customer has entered.
  MSG
end

# Return an array of the updated shipping options or the original options if no update is needed
def calculate_shipping_options(shipping_details, session)
  # TODO: Remove error and implement...
  raise NotImplementedError.new(<<~MSG)
    Calculate shipping options based on the customer's shipping details and the
    Checkout Session's line items.
  MSG
end

post '/calculate-shipping-options' do
  content_type :json
  request.body.rewind
  request_data = JSON.parse(request.body.read)

  checkout_session_id = request_data['checkout_session_id']
  shipping_details = request_data['shipping_details']

  # 1. Retrieve the Checkout Session
  session = Stripe::Checkout::Session.retrieve(checkout_session_id)

  # 2. Validate the shipping details
  if !validate_shipping_details(shipping_details)
    return { type: 'error', message: "We can't ship to your address. Please choose a different address." }.to_json
  end

  # 3. Calculate the shipping options
  shipping_options = calculate_shipping_options(shipping_details, session)

  # 4. Update the Checkout Session with the customer's shipping details and shipping options
  if shipping_options
    Stripe::Checkout::Session.update(checkout_session_id, {
      collected_information: { shipping_details: shipping_details },
      shipping_options: shipping_options
    })

    return { type: 'object', value: { succeeded: true } }.to_json
  else
    return { type: 'error', message: "We can't find shipping options. Please try again." }.to_json
  end
end
```

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

```javascript
// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');
```

Create an asynchronous `fetchClientSecret` function that makes a request to your server to create the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) and retrieve the client secret.

Create an asynchronous `onShippingDetailsChange` function that makes a request to your server to calculate the shipping options based on the customer’s shipping address. Stripe Checkout calls the function when the customer completes the shipping details form.

```javascript
initialize();

async function initialize() {
  // Fetch Checkout Session and retrieve the client secret
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  // Call your backend to set shipping options
  const onShippingDetailsChange = async (shippingDetailsChangeEvent) => {
    const {checkoutSessionId, shippingDetails} = shippingDetailsChangeEvent;
    const response = await fetch("/calculate-shipping-options", {
      method: "POST",
      body: JSON.stringify({
        checkout_session_id: checkoutSessionId,
        shipping_details: shippingDetails,
      })
    })

    if (response.type === 'error') {
      return Promise.resolve({type: "reject", errorMessage: response.message});
    } else {
      return Promise.resolve({type: "accept"});
    }
  };

  // Initialize Checkout
  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
    onShippingDetailsChange,
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

Initialize the `stripe` instance with your publishable API key.

```jsx
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');
```

To use the Embedded Checkout component, create an `EmbeddedCheckoutProvider`.

Create an asynchronous `fetchClientSecret` function that makes a request to your server to create the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) and retrieve the client secret.

Create an asynchronous `onShippingDetailsChange` function that makes a request to your server to calculate the shipping options based on the customer’s shipping address. Stripe Checkout calls the function when the customer completes the shipping details form.

Pass `stripePromise` to the provider and the functions into the `options` prop accepted by the provider.

```jsx
import * as React from 'react';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';


const App = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  // Call your backend to set shipping options
  const onShippingDetailsChange = async (shippingDetailsChangeEvent) => {
    const {checkoutSessionId, shippingDetails} = shippingDetailsChangeEvent;
    const response = await fetch("/calculate-shipping-options", {
      method: "POST",
      body: JSON.stringify({
        checkout_session_id: checkoutSessionId,
        shipping_details: shippingDetails,
      })
    })

    if (response.type === 'error') {
      return Promise.resolve({type: "reject", errorMessage: response.message});
    } else {
      return Promise.resolve({type: "accept"});
    }
  };

  const options = {fetchClientSecret, onShippingDetailsChange};

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

> Always return a `Promise` from your `onShippingDetailsChange` function and resolve it with a [ResultAction](https://docs.stripe.com/js/embedded_checkout/init#embedded_checkout_init-options-onShippingDetailsChange-ResultAction) object.

The Checkout client updates the UI based on the result of your `onShippingDetailsChange` function.

- When the result has `type: "accept"`, the Checkout UI renders the shipping options that you set from your server.
- When the result has `type: "reject"`, the Checkout UI shows the error message that you set in the result.

Optionally, you can listen to `onShippingDetailsChange` and create a custom UI for customers to select and confirm their preferred address from multiple possible addresses.

Checkout renders in an iframe that securely sends payment information to Stripe over an HTTPS connection.

> Avoid placing Checkout within another iframe because some payment methods require redirecting to another page for payment confirmation.

## Test the integration

Follow these steps to test your integration, and ensure your custom shipping options work correctly.

1. Set up a sandbox environment that mirrors your production setup. Use your Stripe sandbox API keys for this environment.

2. Simulate various shipping addresses to verify that your `calculateShippingOptions` function handles different scenarios correctly.

3. Verify server-side logic by using logging or debugging tools to confirm that your server:

   - Retrieves the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md).
   - Validates shipping details.
   - Calculates shipping options.
   - Updates the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) with new shipping details and options. Make sure the update response contains the new shipping details and options.

4. Verify client-side logic by completing the checkout process multiple times in your browser. Pay attention to how the UI updates after entering shipping details. Make sure that:

   - The `onShippingDetailsChange` function is called when expected.
   - Shipping options update correctly based on the provided address.
   - Error messages display properly when shipping is unavailable.

5. Enter invalid shipping addresses or simulate server errors to test error handling, both server-side and client-side.
