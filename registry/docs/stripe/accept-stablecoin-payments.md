# Accept stablecoin payments

Start accepting stablecoins by enabling the Crypto payment method.

You can accept *stablecoin* (A cryptocurrency that's pegged to the value of a fiat currency or other asset in order to limit volatility) payments through *Payment Links* (A link to a secure, hosted payment page that you can generate without code. Share it directly with your customers, or point them to it with a button or QR code), *Checkout* (A low-code payment integration that creates a customizable form for collecting payments. You can embed Checkout directly in your website, redirect customers to a Stripe-hosted payment page, or create a customized checkout page with Stripe Elements), *Elements* (A set of UI components for building a web checkout flow. They adapt to your customer's locale, validate input, and use tokenization, keeping sensitive customer data from touching your server), or the *Payment Intents API* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods). When paying with stablecoins such as USDC, customers get redirected to **crypto.stripe.com** to connect their crypto wallet and complete the transaction. Funds settle in your Stripe balance in USD.

## Before you begin

> Customers can use stablecoins as payment globally, but currently only US businesses can accept stablecoin payments.

To start accepting stablecoin payments, activate the **Crypto** payment method:

1. Make sure your Stripe account is [Active](https://docs.stripe.com/get-started/account/activate.md).
2. Go to **Settings > Payments > [Payment methods](https://dashboard.stripe.com/settings/payment_methods)** and request the **Crypto** payment method.
3. Stripe reviews your access request, and might contact you for more details if necessary. In this case, the payment method appears as **Pending** while we review your request.
4. After you’re approved, **Crypto** becomes active in the Dashboard.

## Use with dynamic payment methods (Recommended)

If you use Stripe’s default [dynamic payment methods](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) with Payment Links, Hosted Checkout, Embedded Checkout Forms, or Elements, then you don’t need to make any further updates. Stripe automatically displays stablecoin payment options to eligible customers.

## Use with a custom integration

If necessary, you can add the crypto payment method to your payment integration manually.

# Checkout

> This is a Checkout for when payment-ui is checkout. View the full page at https://docs.stripe.com/payments/accept-stablecoin-payments?payment-ui=checkout.

When creating a new [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md), you need to:

1. Add `crypto` to the list of `payment_method_types`.

2. Make sure all `line_items` use `usd`.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -d mode=payment \
  -d "payment_method_types[0]"=crypto \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  --data-urlencode success_url="https://example.com/success"
```

## Test your integration

Test your crypto payment integration by opening the payment redirect page using your test API keys. You can test a successful payment flow at no cost using [testnet assets](https://docs.stripe.com/payments/accept-stablecoin-payments.md#testnet-assets).

1. In a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), create a new transaction using your chosen integration method, and open its redirect URL.
2. Connect your preferred wallet and payment network.
3. Complete the payment, and validate that you’re redirected to the expected URL.

### Test payments with testnet assets

Most cryptocurrencies offer testnet assets, or tokens that have no monetary value, that you can use to test blockchain transactions. Stripe recommends the MetaMask wallet, Polygon Amoy testnet, and Circle faucet for testing, but you can use your own preferred services.

#### Install a wallet

1. [Download the MetaMask extension](https://metamask.io/download) for your web browser.
2. [Create a new wallet](https://support.metamask.io/start/creating-a-new-wallet/) or [import an existing one](https://support.metamask.io/start/use-an-existing-wallet/).

#### Enable a testnet

1. In your MetaMask wallet, select **Networks** from the main menu.
2. Click **Add custom network**.
3. Enter the following details:
   - **Network name**: `Polygon Amoy`
   - **Default RPC URL**: `https://rpc-amoy.polygon.technology/`
   - **Chain ID**: `80002`
   - **Currency symbol**: `POL`
   - **Block explorer URL**: `https://amoy.polygonscan.com/`
4. Click **Save**.

#### Import a token

1. In your MetaMask wallet, under **Tokens**, select **Polygon Amoy** from the network dropdown.
2. Click the overflow menu (⋯), and select **Import tokens**.
3. Click **Select a network** > **Polygon Amoy**.
4. Under **Token contract address**, paste the Polygon Amoy testnet contract address:
   ```
   0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
   ```

The **Token symbol** field automatically updates with `USDC` and the **Decimals** field with `6`.

1. Click **Next**.
2. Verify that you’re importing the `USDC` token, and then click **Import**.

Your MetaMask wallet now shows **Polygon Amoy** and **USDC** in the tokens list.

#### Get testnet assets

1. Open [faucet.circle.com](https://faucet.circle.com/)
2. Click **USDC**.
3. Under **Network**, select **Polygon PoS Amoy**.
4. Under **Send to**, paste your wallet address.
5. Click **Send 10 USDC**.

In addition to USDC for making payments, you need POL to pay transaction costs:

1. Open [faucet.polygon.technology](https://faucet.polygon.technology/).
2. Under **Select Chain & Token**, select **Polygon Amoy** and **POL**.
3. Under **Verify your identity**, click the third-party platform you want to authenticate with, and complete the login process.
4. Under **Enter Wallet Address**, paste your wallet address.
5. Click **Claim**.

Testnet transactions can take a few minutes to complete. Check your wallet to confirm that the USDC and POL has transferred.

### More testnet faucets

Check these faucet services for more testing token options:

- [Paxos USDP](https://faucet.paxos.com/)
- [Devnet SOL](https://faucet.solana.com/)
- [Sepolia ETH](https://faucets.chain.link/sepolia)
- [Amoy POL](https://faucet.polygon.technology/)

# Checkout Sessions API

> This is a Checkout Sessions API for when payment-ui is elements and api-integration is checkout. View the full page at https://docs.stripe.com/payments/accept-stablecoin-payments?payment-ui=elements\&api-integration=checkout.

To determine which API meets your business needs, see the [comparison guide](https://docs.stripe.com/payments/checkout-sessions-and-payment-intents-comparison.md).

Use the [Payment Element](https://docs.stripe.com/payments/payment-element.md) to embed a custom Stripe payment form in your website or application and offer payment methods to customers. For advanced configurations and customizations, refer to the [Accept a Payment](https://docs.stripe.com/payments/accept-a-payment.md) integration guide.

Embed a custom payment form in your website or application using the [Payment Element](https://docs.stripe.com/payments/payment-element.md). The Payment Element automatically supports crypto and other payment methods. For additional configuration and customization options, see [Accept a payment](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=checkout).

## Set up the server \[Server-side]

Use the official Stripe libraries to access the API from your application.

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

Add an endpoint on your server that creates a [Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md) and returns its [client secret](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-client_secret) to your front end. A Checkout Session represents your customer’s session as they pay for one-time purchases or subscriptions. Checkout Sessions expire 24 hours after creation.

We recommend using [dynamic payment methods](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) to dynamically display the most relevant eligible payment methods to each customer to maximize conversion. You can also [manually list payment methods](https://docs.stripe.com/payments/payment-methods/integration-options.md#listing-payment-methods-manually), which disables dynamic payment methods.

#### Manage payment methods from the Dashboard

#### TypeScript

```javascript
import express, {Express} from 'express';

const app: Express = express();

app.post('/create-checkout-session', async (req: Express.Request, res: Express.Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 1099,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'custom',
    return_url: 'https://example.com/return?session_id={CHECKOUT_SESSION_ID}'
  });

  res.json({checkoutSessionClientSecret: session.client_secret});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
```

#### Manually list payment methods

#### TypeScript

```javascript
import express, {Express} from 'express';

const app: Express = express();

app.post('/create-checkout-session', async (req: Express.Request, res: Express.Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 1099,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'custom',
    payment_method_types: ['crypto'],
    return_url: 'https://example.com/return?session_id={CHECKOUT_SESSION_ID}'
  });

  res.json({checkoutSessionClientSecret: session.client_secret});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
```

## Set up the front end \[Client-side]

#### HTML + JS

Include the Stripe.js script on your checkout page by adding it to the `head` of your HTML file. Always load Stripe.js directly from js.stripe.com to remain PCI compliant. Don’t include the script in a bundle or host a copy of it yourself.

Make sure you’re on the latest Stripe.js version by including the following script tag `<script src=“https://js.stripe.com/clover/stripe.js”></script>`. Learn more about [Stripe.js versioning](https://docs.stripe.com/sdks/stripejs-versioning.md).

```html
<head>
  <title>Checkout</title>
  <script src="https://js.stripe.com/clover/stripe.js"></script>
</head>
```

> Stripe provides an npm package that you can use to load Stripe.js as a module. See the [project on GitHub](https://github.com/stripe/stripe-js). Version [7.0.0](https://www.npmjs.com/package/%40stripe/stripe-js/v/7.0.0) or later is required.

Initialize stripe.js.

```js
// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe(
  '<<YOUR_PUBLISHABLE_KEY>>',
);
```

#### React

Install [React Stripe.js](https://www.npmjs.com/package/@stripe/react-stripe-js) and the [Stripe.js loader](https://www.npmjs.com/package/@stripe/stripe-js) from the npm public registry. You need at least version 5.0.0 for React Stripe.js and version 8.0.0 for the Stripe.js loader.

```bash
npm install --save @stripe/react-stripe-js@^5.0.0 @stripe/stripe-js@^8.0.0
```

Initialize a `stripe` instance on your front end with your publishable key.

```javascript
import {loadStripe} from '@stripe/stripe-js';
const stripe = loadStripe("<<YOUR_PUBLISHABLE_KEY>>");
```

## Initialize Checkout \[Client-side]

#### HTML + JS

Call [initCheckout](https://docs.stripe.com/js/custom_checkout/init), passing in `clientSecret`.

`initCheckout` returns a [Checkout](https://docs.stripe.com/js/custom_checkout) object that contains data from the Checkout Session and methods to update it.

Read the `total` and `lineItems` from [actions.getSession()](https://docs.stripe.com/js/custom_checkout/session), and display them in your UI. This lets you turn on new features with minimal code changes. For example, adding [manual currency prices](https://docs.stripe.com/payments/custom/localize-prices/manual-currency-prices.md) requires no UI changes if you display the `total`.

```html
<div id="checkout-container"></div>
```

```javascript
const clientSecret = fetch('/create-checkout-session', {method: 'POST'})
  .then((response) => response.json())
  .then((json) => json.client_secret);

const checkout = stripe.initCheckout({clientSecret});
const loadActionsResult = await checkout.loadActions();

if (loadActionsResult.type === 'success') {
  const session = loadActionsResult.actions.getSession();
  const checkoutContainer = document.getElementById('checkout-container');

  checkoutContainer.append(JSON.stringify(session.lineItems, null, 2));
  checkoutContainer.append(document.createElement('br'));
  checkoutContainer.append(`Total: ${session.total.total.amount}`);
}
```

#### React

Wrap your application with the [CheckoutProvider](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider) component, passing in `clientSecret` and the `stripe` instance.

```jsx
import React from 'react';
import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import CheckoutForm from './CheckoutForm';

const clientSecret = fetch('/create-checkout-session', {method: 'POST'})
  .then((response) => response.json())
  .then((json) => json.client_secret);

const App = () => {
  return (
    <CheckoutProvider
      stripe={stripe}options={{clientSecret}}
    >
      <CheckoutForm />
    </CheckoutProvider>
  );
};

export default App;
```

Access the [Checkout](https://docs.stripe.com/js/custom_checkout) object in your checkout form component by using the `useCheckout()` hook. The `Checkout` object contains data from the Checkout Session and methods to update it.

Read the `total` and `lineItems` from the `Checkout` object, and display them in your UI. This lets you enable features with minimal code changes. For example, adding [manual currency prices](https://docs.stripe.com/payments/custom/localize-prices/manual-currency-prices.md) requires no UI changes if you display the `total`.

```jsx
import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {const checkoutState = useCheckout();

  if (checkoutState.type === 'loading') {
    return (
      <div>Loading...</div>
    );
  }

  if (checkoutState.type === 'error') {
    return (
      <div>Error: {checkoutState.error.message}</div>
    );
  }

  return (
    <form>{JSON.stringify(checkoutState.checkout.lineItems, null, 2)}
      {/* A formatted total amount */}
      Total: {checkoutState.checkout.total.total.amount}
    </form>
  );
};
```

## Collect customer email \[Client-side]

#### HTML + JS

You must provide a valid customer email when completing a Checkout Session.

These instructions create an email input and use [updateEmail](https://docs.stripe.com/js/custom_checkout/update_email) from the `Checkout` object.

Alternatively, you can:

- Pass in [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) or [customer](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer) when creating the Checkout Session. Stripe validates emails provided this way.
- Pass in an email you already validated on [checkout.confirm](https://docs.stripe.com/js/custom_checkout/confirm).

```html
<input type="text" id="email" />
<div id="email-errors"></div>
```

```javascript
const checkout = stripe.initCheckout({clientSecret});
const loadActionsResult = await checkout.loadActions();

if (loadActionsResult.type === 'success') {
  const {actions} = loadActionsResult;
  const emailInput = document.getElementById('email');
  const emailErrors = document.getElementById('email-errors');

  emailInput.addEventListener('input', () => {
    // Clear any validation errors
    emailErrors.textContent = '';
  });

  emailInput.addEventListener('blur', () => {
    const newEmail = emailInput.value;actions.updateEmail(newEmail).then((result) => {
      if (result.error) {
        emailErrors.textContent = result.error.message;
      }
    });
  });
}
```

#### React

You must provide a valid customer email when completing a Checkout Session.

These instructions create an email input and use [updateEmail](https://docs.stripe.com/js/react_stripe_js/checkout/update_email) from the `Checkout` object.

Alternatively, you can:

- Pass in [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) or [customer](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer) when creating the Checkout Session. Stripe validates emails provided this way.
- Pass in an email you already validated on [confirm](https://docs.stripe.com/js/react_stripe_js/checkout/confirm).

```jsx
import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js/checkout';

const EmailInput = () => {
  const checkoutState = useCheckout();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);

  if (checkoutState.type === 'loading') {
    return (
      <div>Loading...</div>
    );
  } else if (checkoutState.type === 'error') {
    return (
      <div>Error: {checkoutState.error.message}</div>
    );
  }

  const handleBlur = () => {checkoutState.checkout.updateEmail(email).then((result) => {
      if (result.type === 'error') {
        setError(result.error);
      }
    })
  };

  const handleChange = (e) => {
    setError(null);
    setEmail(e.target.value);
  };

  return (
    <div>
      <label htmlFor="checkout-form-email">Email</label>
      <input
        id="checkout-form-email"
        type="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default EmailInput;
```

## Collect payment details \[Client-side]

Collect payment details on the client with the [Payment Element](https://docs.stripe.com/payments/payment-element.md). The Payment Element is a prebuilt UI component that simplifies collecting payment details for a variety of payment methods.

The Payment Element contains an iframe that securely sends payment information to Stripe over an HTTPS connection. Avoid placing the Payment Element within another iframe because some payment methods require redirecting to another page for payment confirmation.

If you choose to use an iframe and want to accept Apple Pay or Google Pay, the iframe must have the [allow](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowpaymentrequest) attribute set to equal `"payment *"`.

The checkout page address must start with `https://` rather than `http://` for your integration to work. You can test your integration without using HTTPS, but remember to [enable it](https://docs.stripe.com/security/guide.md#tls) when you’re ready to accept live payments.

#### HTML + JS

First, create a container DOM element to mount the [Payment Element](https://docs.stripe.com/payments/payment-element.md). Then create an instance of the `Payment Element` using [checkout.createPaymentElement](https://docs.stripe.com/js/custom_checkout/create_payment_element) and mount it by calling [element.mount](https://docs.stripe.com/js/element/mount), providing either a CSS selector or the container DOM element.

```html
<div id="payment-element"></div>
```

```javascript
const paymentElement = checkout.createPaymentElement();
paymentElement.mount('#payment-element');
```

See the [Stripe.js docs](https://docs.stripe.com/js/custom_checkout/create_payment_element#custom_checkout_create_payment_element-options) to view the supported options.

You can [customize the appearance](https://docs.stripe.com/payments/checkout/customization/appearance.md) of all Elements by passing [elementsOptions.appearance](https://docs.stripe.com/js/custom_checkout/init#custom_checkout_init-options-elementsOptions-appearance) when initializing Checkout on the front end.

#### React

Mount the [Payment Element](https://docs.stripe.com/payments/payment-element.md) component within the [CheckoutProvider](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider).

```jsx
import React from 'react';import {PaymentElement, useCheckout} from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {
  const checkoutState = useCheckout();

  if (checkoutState.type === 'loading') {
    return (
      <div>Loading...</div>
    );
  }

  if (checkoutState.type === 'error') {
    return (
      <div>Error: {checkoutState.error.message}</div>
    );
  }

  return (
    <form>

      {JSON.stringify(checkoutState.checkout.lineItems, null, 2)}
      {/* A formatted total amount */}
      Total: {checkoutState.checkout.total.total.amount}
<PaymentElement options={{layout: 'accordion'}}/>
    </form>
  );
};

export default CheckoutForm;
```

See the [Stripe.js docs](https://docs.stripe.com/js/custom_checkout/create_payment_element#custom_checkout_create_payment_element-options) to view the supported options.

You can [customize the appearance](https://docs.stripe.com/payments/checkout/customization/appearance.md) of all Elements by passing [elementsOptions.appearance](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider#react_checkout_provider-options-elementsOptions-appearance) to the [CheckoutProvider](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider).

## Submit the payment \[Client-side]

#### HTML + JS

Render a **Pay** button that calls [confirm](https://docs.stripe.com/js/custom_checkout/confirm) from the `Checkout` instance to submit the payment.

```html
<button id="pay-button">Pay</button>
<div id="confirm-errors"></div>
```

```js
const checkout = stripe.initCheckout({clientSecret});
const loadActionsResult = await checkout.loadActions();

if (loadActionsResult.type === 'success') {
  const {actions} = loadActionsResult;
  const button = document.getElementById('pay-button');
  const errors = document.getElementById('confirm-errors');
  button.addEventListener('click', () => {
    // Clear any validation errors
    errors.textContent = '';

    actions.confirm().then((result) => {
      if (result.type === 'error') {
        errors.textContent = result.error.message;
      }
    });
  });
}
```

#### React

Render a **Pay** button that calls [confirm](https://docs.stripe.com/js/custom_checkout/confirm) from [useCheckout](https://docs.stripe.com/js/react_stripe_js/checkout/use_checkout) to submit the payment.

```jsx
import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js/checkout';

const PayButton = () => {
  const checkoutState = useCheckout();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  if (checkoutState.type !== "success") {
    return null;
  }

  const handleClick = () => {
    setLoading(true);checkoutState.checkout.confirm().then((result) => {
      if (result.type === 'error') {
        setError(result.error)
      }
      setLoading(false);
    })
  };

  return (
    <div>
      <button disabled={loading} onClick={handleClick}>
        Pay
      </button>
      {error && <div>{error.message}</div>}
    </div>
  )
};

export default PayButton;
```

## Test your integration

Test your crypto payment integration by opening the payment redirect page using your test API keys. You can test a successful payment flow at no cost using [testnet assets](https://docs.stripe.com/payments/accept-stablecoin-payments.md#testnet-assets).

1. In a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), create a new transaction using your chosen integration method, and open its redirect URL.
2. Connect your preferred wallet and payment network.
3. Complete the payment, and validate that you’re redirected to the expected URL.

### Test payments with testnet assets

Most cryptocurrencies offer testnet assets, or tokens that have no monetary value, that you can use to test blockchain transactions. Stripe recommends the MetaMask wallet, Polygon Amoy testnet, and Circle faucet for testing, but you can use your own preferred services.

#### Install a wallet

1. [Download the MetaMask extension](https://metamask.io/download) for your web browser.
2. [Create a new wallet](https://support.metamask.io/start/creating-a-new-wallet/) or [import an existing one](https://support.metamask.io/start/use-an-existing-wallet/).

#### Enable a testnet

1. In your MetaMask wallet, select **Networks** from the main menu.
2. Click **Add custom network**.
3. Enter the following details:
   - **Network name**: `Polygon Amoy`
   - **Default RPC URL**: `https://rpc-amoy.polygon.technology/`
   - **Chain ID**: `80002`
   - **Currency symbol**: `POL`
   - **Block explorer URL**: `https://amoy.polygonscan.com/`
4. Click **Save**.

#### Import a token

1. In your MetaMask wallet, under **Tokens**, select **Polygon Amoy** from the network dropdown.
2. Click the overflow menu (⋯), and select **Import tokens**.
3. Click **Select a network** > **Polygon Amoy**.
4. Under **Token contract address**, paste the Polygon Amoy testnet contract address:
   ```
   0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
   ```

The **Token symbol** field automatically updates with `USDC` and the **Decimals** field with `6`.

1. Click **Next**.
2. Verify that you’re importing the `USDC` token, and then click **Import**.

Your MetaMask wallet now shows **Polygon Amoy** and **USDC** in the tokens list.

#### Get testnet assets

1. Open [faucet.circle.com](https://faucet.circle.com/)
2. Click **USDC**.
3. Under **Network**, select **Polygon PoS Amoy**.
4. Under **Send to**, paste your wallet address.
5. Click **Send 10 USDC**.

In addition to USDC for making payments, you need POL to pay transaction costs:

1. Open [faucet.polygon.technology](https://faucet.polygon.technology/).
2. Under **Select Chain & Token**, select **Polygon Amoy** and **POL**.
3. Under **Verify your identity**, click the third-party platform you want to authenticate with, and complete the login process.
4. Under **Enter Wallet Address**, paste your wallet address.
5. Click **Claim**.

Testnet transactions can take a few minutes to complete. Check your wallet to confirm that the USDC and POL has transferred.

### More testnet faucets

Check these faucet services for more testing token options:

- [Paxos USDP](https://faucet.paxos.com/)
- [Devnet SOL](https://faucet.solana.com/)
- [Sepolia ETH](https://faucets.chain.link/sepolia)
- [Amoy POL](https://faucet.polygon.technology/)

# Payment Intents API

> This is a Payment Intents API for when payment-ui is elements and api-integration is paymentintents. View the full page at https://docs.stripe.com/payments/accept-stablecoin-payments?payment-ui=elements\&api-integration=paymentintents.

To determine which API meets your business needs, see the [comparison guide](https://docs.stripe.com/payments/checkout-sessions-and-payment-intents-comparison.md).

Use the [Payment Element](https://docs.stripe.com/payments/payment-element.md) to embed a custom Stripe payment form in your website or application and offer payment methods to customers. For advanced configurations and customizations, refer to the [Accept a Payment](https://docs.stripe.com/payments/accept-a-payment.md) integration guide.

## Set up Stripe \[Server-side]

To get started, [create a Stripe account](https://dashboard.stripe.com/register).

Use our official libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Collect payment details \[Client-side]

You’re ready to collect payment details on the client with the Payment Element. The Payment Element is a prebuilt UI component that simplifies collecting payment details for a variety of payment methods.

The Payment Element contains an iframe that securely sends payment information to Stripe over an HTTPS connection. Avoid placing the Payment Element within another iframe because some payment methods require redirecting to another page for payment confirmation.

The checkout page address must start with `https://` rather than `http://` for your integration to work. You can test your integration without using HTTPS, but remember to [enable it](https://docs.stripe.com/security/guide.md#tls) when you’re ready to accept live payments.

#### HTML + JS

### Set up Stripe.js

The Payment Element is automatically available as a feature of Stripe.js. Include the Stripe.js script on your checkout page by adding it to the `head` of your HTML file. Always load Stripe.js directly from js.stripe.com to remain PCI compliant. Don’t include the script in a bundle or host a copy of it yourself.

```html
<head>
  <title>Checkout</title>
  <script src="https://js.stripe.com/clover/stripe.js"></script>
</head>
```

Create an instance of Stripe with the following JavaScript on your checkout page:

```javascript
// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');
```

### Add the Payment Element to your checkout page

The Payment Element needs a place on your checkout page. Create an empty DOM node (container) with a unique ID in your payment form:

```html
<form id="payment-form">
  <div id="payment-element">
    <!-- Elements will create form elements here -->
  </div>
  <button id="submit">Submit</button>
  <div id="error-message">
    <!-- Display error message to your customers here -->
  </div>
</form>
```

#### Control payment methods from the Dashboard

After the form above loads, create an Elements instance with a `mode`, `amount`, and `currency`. These values determine which payment methods your customer sees. To provide a new payment method in your form, make sure you enable it in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods).

```javascript
const options = {mode:'payment',
  amount:1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {/*...*/},
};

// Set up Stripe.js and Elements to use in checkout formconst elements = stripe.elements(options);

// Create and mount the Payment Element
const paymentElementOptions = { layout: 'accordion'};
const paymentElement = elements.create('payment', paymentElementOptions);
paymentElement.mount('#payment-element');
```

#### List payment methods manually

To manually list the payment methods you want to be available, add each one to `paymentMethodTypes`.

Then, create an instance of the Payment Element and mount it to the container DOM node.

```javascript
const options = {mode:'payment',
  amount:1099,
  currency: 'usd',
  paymentMethodTypes: ['crypto'],
  // Fully customizable with appearance API.
  appearance: {/*...*/},
};

// Set up Stripe.js and Elements to use in checkout formconst elements = stripe.elements(options);

// Create and mount the Payment Element
const paymentElementOptions = { layout: 'accordion'};
const paymentElement = elements.create('payment', paymentElementOptions);
paymentElement.mount('#payment-element');
```

#### React

### Set up Stripe.js

Install [React Stripe.js](https://www.npmjs.com/package/@stripe/react-stripe-js) and the [Stripe.js loader](https://www.npmjs.com/package/@stripe/stripe-js) from the npm public registry.

```bash
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

### Add and configure the Elements provider to your checkout page

To use the Payment Element component, wrap your checkout page component in an [Elements provider](https://docs.stripe.com/sdks/stripejs-react.md#elements-provider). Call `loadStripe` with your publishable key, and pass the returned `Promise` to the `Elements` provider.

#### Control payment methods from the Dashboard

The `Elements` provider also accepts a `mode`, `amount`, and `currency`. These values determine which payment methods your customer sees. To provide a new payment method in your form, make sure you enable it in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods).

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

function App() {
  const options = {mode:'payment',
    amount:1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

#### List payment methods manually

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

function App() {
  const options = {mode:'payment',
    amount:1099,
    currency: 'usd',
    paymentMethodTypes: ['crypto'],
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Add the Payment Element component

Use the `PaymentElement` component to build your form.

```jsx
import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form><PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
```

You can customize the Payment Element to match the design of your site by passing the [appearance object](https://docs.stripe.com/elements/appearance-api.md) into `options` when creating the `Elements` provider.

### Collect addresses

By default, the Payment Element only collects the necessary billing address details. Some behavior, such as [calculating tax](https://docs.stripe.com/api/tax/calculations/create.md) or entering shipping details, requires your customer’s full address. You can:

- Use the [Address Element](https://docs.stripe.com/elements/address-element.md) to take advantage of autocomplete and localization features to collect your customer’s full address. This helps ensure the most accurate tax calculation.
- Collect address details using your own custom form.

## Create a PaymentIntent \[Server-side]

> #### Run custom business logic immediately before payment confirmation
>
> Navigate to [step 5](https://docs.stripe.com/payments/finalize-payments-on-the-server.md?platform=web\&type=payment#submit-payment) in the finalize payments guide to run your custom business logic immediately before payment confirmation. Otherwise, follow the steps below for a simpler integration, which uses `stripe.confirmPayment` on the client to both confirm the payment and handle any next actions.

#### Control payment methods from the Dashboard

When the customer submits your payment form, use a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods) to facilitate the confirmation and payment process. Create a PaymentIntent on your server with an `amount` and `currency`. To prevent malicious customers from choosing their own prices, always decide how much to charge on the server-side (a trusted environment) and not the client.

Included on a PaymentIntent is a *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)). Return this value to your client for Stripe.js to use to securely complete the payment process.

#### Ruby

```ruby
require 'stripe'
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-intent' do
  intent = Stripe::PaymentIntent.create({
    # To allow saving and retrieving payment methods, provide the Customer ID.
    customer: customer.id,
    amount: 1099,
    currency: 'usd',
  })
  {client_secret: intent.client_secret}.to_json
end
```

#### List payment methods manually

When the customer submits your payment form, use a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods) to facilitate the confirmation and payment process. Create a PaymentIntent on your server with an `amount`, `currency`, and one or more payment methods using `payment_method_types`. To prevent malicious customers from choosing their own prices, always decide how much to charge on the server-side (a trusted environment) and not the client.

Included on a PaymentIntent is a *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)). Return this value to your client for Stripe.js to use to securely complete the payment process.

#### Ruby

```ruby
require 'stripe'
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-intent' do
  intent = Stripe::PaymentIntent.create({
    # To allow saving and retrieving payment methods, provide the Customer ID.
    customer: customer.id,
    amount: 1099,
    currency: 'usd',
    payment_method_types: ['crypto'],
  })
  {client_secret: intent.client_secret}.to_json
end
```

## Submit the payment to Stripe \[Client-side]

Use [stripe.confirmPayment](https://docs.stripe.com/js/payment_intents/confirm_payment) to complete the payment using details from the Payment Element.

Provide a [return\_url](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-return_url) to this function to indicate where Stripe redirects the user after they complete the payment. Your user might be initially redirected to an intermediate site, such as a bank authorization page, before being redirected to the `return_url`. Card payments immediately redirect to the `return_url` when a payment is successful.

If you don’t want to redirect for card payments after payment completion, you can set [redirect](https://docs.stripe.com/js/payment_intents/confirm_payment#confirm_payment_intent-options-redirect) to `if_required`. This only redirects customers that check out with redirect-based payment methods.

#### HTML + JS

```javascript

const form = document.getElementById('payment-form');
const submitBtn = document.getElementById('submit');

const handleError = (error) => {
  const messageContainer = document.querySelector('#error-message');
  messageContainer.textContent = error.message;
  submitBtn.disabled = false;
}

form.addEventListener('submit', async (event) => {
  // We don't want to let default form submission happen here,
  // which would refresh the page.
  event.preventDefault();

  // Prevent multiple form submissions
  if (submitBtn.disabled) {
    return;
  }

  // Disable form submission while loading
  submitBtn.disabled = true;

  // Trigger form validation and wallet collection
  const {error: submitError} = await elements.submit();
  if (submitError) {
    handleError(submitError);
    return;
  }

  // Create the PaymentIntent and obtain clientSecret
  const res = await fetch("/create-intent", {
    method: "POST",
  });

  const {client_secret: clientSecret} = await res.json();

  // Confirm the PaymentIntent using the details collected by the Payment Element
  const {error} = await stripe.confirmPayment({
    elements,
    clientSecret,
    confirmParams: {
      return_url: 'https://example.com/order/123/complete',
    },
  });

  if (error) {
    // This point is only reached if there's an immediate error when
    // confirming the payment. Show the error to your customer (for example, payment details incomplete)
    handleError(error);
  } else {
    // Your customer is redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer is redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
  }
});

```

#### React

```jsx
import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch("/create-intent", {
      method: "POST",
    });

    const {client_secret: clientSecret} = await res.json();

    // Confirm the PaymentIntent using the details collected by the Payment Element
    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading}>
        Submit Payment
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
```

## Optional: Fetch updates from the server \[Client-side]

You might want to update attributes on the PaymentIntent after the Payment Element renders, such as the [amount](https://docs.stripe.com/api/payment_intents/update.md#update_payment_intent-amount) (for example, discount codes or shipping costs). You can [update the PaymentIntent](https://docs.stripe.com/api/payment_intents/update.md) on your server, then call [elements.fetchUpdates](https://docs.stripe.com/js/elements_object/fetch_updates) to see the new amount reflected in the Payment Element. This example shows you how to create the server endpoint that updates the amount on the PaymentIntent:

#### Ruby

```ruby
get '/update' do
  intent = Stripe::PaymentIntent.update(
    '{{PAYMENT_INTENT_ID}}',
    {amount: 1499},
  )
  {status: intent.status}.to_json
end
```

This example demonstrates how to update the UI to reflect these changes on the client side:

```javascript
(async () => {
  const response = await fetch('/update');
  if (response.status === 'requires_payment_method') {
    const {error} = await elements.fetchUpdates();
  }
})();
```

## Optional: Handle the redirect manually \[Server-side]

The best way to handle redirects is to use Stripe.js with `confirmPayment`. If you need to manually redirect your customers:

1. Provide the URL to redirect your customers to after they complete their payment.

```curl
curl https://api.stripe.com/v1/payment_intents/pi_1DRuHnHgsMRlo4MtwuIAUe6u/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d payment_method=pm_1EnPf7AfTbPYpBIFLxIc8SD9 \
  --data-urlencode return_url="https://shop.example.com/crtA6B28E1"
```

1. Confirm the `PaymentIntent` has a status of `requires_action`. The type for the `next_action` will be `redirect_to_url`.

```json
"next_action": {
  "type": "redirect_to_url",
  "redirect_to_url": {
    "url": "https://hooks.stripe.com/...",
    "return_url": "https://example.com/checkout/complete"
  }
}
```

1. Redirect the customer to the URL provided in the `next_action` property.

When the customer finishes the payment process, they’re sent to the `return_url` destination. The `payment_intent` and `payment_intent_client_secret` URL query parameters are included and you can pass through your own query parameters, as described above.

## Optional: Handle post-payment events

Stripe sends a [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) event when the payment completes. Use the Dashboard, a custom *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests), or a partner solution to receive these events and run actions, like sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow.

Listen for these events rather than waiting on a callback from the client. On the client, the customer could close the browser window or quit the app before the callback executes, and malicious clients could manipulate the response. Setting up your integration to listen for asynchronous events also helps you accept more payment methods in the future. Learn about the [differences between all supported payment methods](https://stripe.com/payments/payment-methods-guide).

- **Handle events manually in the Dashboard**

  Use the Dashboard to [View your test payments in the Dashboard](https://dashboard.stripe.com/test/payments), send email receipts, handle payouts, or retry failed payments.

- **Build a custom webhook**

  [Build a custom webhook](https://docs.stripe.com/webhooks/handling-payment-events.md#build-your-own-webhook) handler to listen for events and build custom asynchronous payment flows. Test and debug your webhook integration locally with the Stripe CLI.

- **Integrate a prebuilt app**

  Handle common business events, such as [automation](https://stripe.partners/?f_category=automation) or [marketing and sales](https://stripe.partners/?f_category=marketing-and-sales), by integrating a partner application.

## Test your integration

Test your crypto payment integration by opening the payment redirect page using your test API keys. You can test a successful payment flow at no cost using [testnet assets](https://docs.stripe.com/payments/accept-stablecoin-payments.md#testnet-assets).

1. In a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), create a new transaction using your chosen integration method, and open its redirect URL.
2. Connect your preferred wallet and payment network.
3. Complete the payment, and validate that you’re redirected to the expected URL.

### Test payments with testnet assets

Most cryptocurrencies offer testnet assets, or tokens that have no monetary value, that you can use to test blockchain transactions. Stripe recommends the MetaMask wallet, Polygon Amoy testnet, and Circle faucet for testing, but you can use your own preferred services.

#### Install a wallet

1. [Download the MetaMask extension](https://metamask.io/download) for your web browser.
2. [Create a new wallet](https://support.metamask.io/start/creating-a-new-wallet/) or [import an existing one](https://support.metamask.io/start/use-an-existing-wallet/).

#### Enable a testnet

1. In your MetaMask wallet, select **Networks** from the main menu.
2. Click **Add custom network**.
3. Enter the following details:
   - **Network name**: `Polygon Amoy`
   - **Default RPC URL**: `https://rpc-amoy.polygon.technology/`
   - **Chain ID**: `80002`
   - **Currency symbol**: `POL`
   - **Block explorer URL**: `https://amoy.polygonscan.com/`
4. Click **Save**.

#### Import a token

1. In your MetaMask wallet, under **Tokens**, select **Polygon Amoy** from the network dropdown.
2. Click the overflow menu (⋯), and select **Import tokens**.
3. Click **Select a network** > **Polygon Amoy**.
4. Under **Token contract address**, paste the Polygon Amoy testnet contract address:
   ```
   0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
   ```

The **Token symbol** field automatically updates with `USDC` and the **Decimals** field with `6`.

1. Click **Next**.
2. Verify that you’re importing the `USDC` token, and then click **Import**.

Your MetaMask wallet now shows **Polygon Amoy** and **USDC** in the tokens list.

#### Get testnet assets

1. Open [faucet.circle.com](https://faucet.circle.com/)
2. Click **USDC**.
3. Under **Network**, select **Polygon PoS Amoy**.
4. Under **Send to**, paste your wallet address.
5. Click **Send 10 USDC**.

In addition to USDC for making payments, you need POL to pay transaction costs:

1. Open [faucet.polygon.technology](https://faucet.polygon.technology/).
2. Under **Select Chain & Token**, select **Polygon Amoy** and **POL**.
3. Under **Verify your identity**, click the third-party platform you want to authenticate with, and complete the login process.
4. Under **Enter Wallet Address**, paste your wallet address.
5. Click **Claim**.

Testnet transactions can take a few minutes to complete. Check your wallet to confirm that the USDC and POL has transferred.

### More testnet faucets

Check these faucet services for more testing token options:

- [Paxos USDP](https://faucet.paxos.com/)
- [Devnet SOL](https://faucet.solana.com/)
- [Sepolia ETH](https://faucets.chain.link/sepolia)
- [Amoy POL](https://faucet.polygon.technology/)

## Error codes

The following table details common error codes and recommended actions:

| Error code                                                | Recommended action                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payment_intent_invalid_currency`                         | Enter a supported currency.                                                                                                                                                                                                                                                                                                                                       |
| `missing_required_parameter`                              | Check the error message for more information about the required parameter.                                                                                                                                                                                                                                                                                        |
| `payment_intent_payment_attempt_failed`                   | This code can appear in the [last\_payment\_error.code](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-last_payment_error-code) field of a PaymentIntent. Check the error message for a detailed failure reason and suggestion on error handling.                                                                                      |
| `payment_intent_authentication_failure`                   | This code can appear in the [last\_payment\_error.code](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-last_payment_error-code) field of a PaymentIntent. Check the error message for a detailed failure reason and suggestion on error handling. This error occurs when you manually trigger a failure when testing your integration. |
| `payment_intent_redirect_confirmation_without_return_url` | Provide a `return_url` when confirming a PaymentIntent.                                                                                                                                                                                                                                                                                                           |

# Direct API

> This is a Direct API for when payment-ui is direct-api. View the full page at https://docs.stripe.com/payments/accept-stablecoin-payments?payment-ui=direct-api.

Integrate Pay with Crypto directly through the *Payment Intents API* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods).

## Set up Stripe \[Server-side]

First, [create a Stripe account](https://dashboard.stripe.com/register) or [sign in](https://dashboard.stripe.com/login).

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

## Create a PaymentIntent and retrieve the client secret \[Server-side]

The [PaymentIntent](https://docs.stripe.com/api/payment_intents.md) object represents your intent to collect payment from your customer and tracks the lifecycle of the payment process. Create a PaymentIntent on your server and specify the amount to collect and a supported currency. If you have an existing PaymentIntents integration, add `crypto` to the list of [payment\_method\_types](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_types).

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=crypto
```

### Retrieve the client secret

The PaymentIntent includes a *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)) that the client side uses to securely complete the payment process. You can use different approaches to pass the client secret to the client side.

#### Single-page application

Retrieve the client secret from an endpoint on your server, using the browser’s `fetch` function. This approach is best if your client side is a single-page application, particularly one built with a modern frontend framework like React. Create the server endpoint that serves the client secret:

#### Ruby

```ruby
get '/secret' do
  intent = # ... Create or retrieve the PaymentIntent
  {client_secret: intent.client_secret}.to_json
end
```

And then fetch the client secret with JavaScript on the client side:

```javascript
(async () => {
  const response = await fetch('/secret');
  const {client_secret: clientSecret} = await response.json();
  // Render the form using the clientSecret
})();
```

#### Server-side rendering

Pass the client secret to the client from your server. This approach works best if your application generates static content on the server before sending it to the browser.

Add the [client\_secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret) in your checkout form. In your server-side code, retrieve the client secret from the PaymentIntent:

#### Ruby

```erb
<form id="payment-form" data-secret="<%= @intent.client_secret %>">
  <button id="submit">Submit</button>
</form>
```

```ruby
get '/checkout' do
  @intent = # ... Fetch or create the PaymentIntent
  erb :checkout
end
```

## Redirect to the stablecoin payments page

Use [Stripe.js](https://docs.stripe.com/js.md) to submit the payment to Stripe when a customer chooses **Crypto** as a payment method. Stripe.js is the foundational JavaScript library for building payment flows. It automatically handles complexities like the redirect described below, and lets you extend your integration to other payment methods. Include the Stripe.js script on your checkout page by adding it to the `<head>` of your HTML file.

```html
<head>
  <title>Checkout</title>
  <script src="https://js.stripe.com/clover/stripe.js"></script>
</head>
```

Create an instance of Stripe.js with the following JavaScript on your checkout page:

```javascript
// Set your publishable key. Remember to change this to your live publishable key in production!
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');
```

Use the PaymentIntent [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret) and call `stripe.confirmPayment` to handle the Pay with Crypto redirect. Add a `return_url` to determine where Stripe redirects the customer after they complete the payment:

```javascript
const form = document.getElementById('payment-form');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Set the clientSecret of the PaymentIntent
  const { error } = await stripe.confirmPayment({
    clientSecret: clientSecret,
    confirmParams: {
      payment_method_data: {
        type: 'crypto',
      },
      // Return URL where the customer should be redirected after the authorization
      return_url: `${window.location.href}`,
    },
  });

  if (error) {
    // Inform the customer that there was an error.
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = result.error.message;
  }
});
```

The `return_url` corresponds to a page on your website that displays the result of the payment. You can determine what to display by [verifying the status](https://docs.stripe.com/payments/payment-intents/verifying-status.md#checking-status) of the PaymentIntent. To verify the status, the Stripe redirect to the `return_url` includes the following URL query parameters. You can also append your own query parameters to the `return_url`. They persist throughout the redirect process.

| `payment_intent`               | The unique identifier for the `PaymentIntent`.                                                                                                |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `payment_intent_client_secret` | The [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret) of the `PaymentIntent` object. |

## Optional: Handle post-payment events

Stripe sends a [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) event when the payment completes. Use the Dashboard, a custom [webhook](https://docs.stripe.com/webhooks.md), or a partner solution to receive these events and run actions, like sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow.

Listen for these events rather than waiting on a callback from the client. On the client, the customer might close the browser window or quit the app before the callback executes, and malicious clients could manipulate the response. Setting up your integration to listen for asynchronous events can also help you accept more payment methods in the future. To see the differences between all supported payment methods, see our [payment methods](https://stripe.com/payments/payment-methods-guide) guide.

### Receive events and run business actions

There are a few options for receiving and running business actions:

- **Manually:** Use the [Stripe Dashboard](https://dashboard.stripe.com/test/payments) to view all your Stripe payments, send email receipts, handle payouts, or retry failed payments.

- **Custom code:** [Build a webhook](https://docs.stripe.com/webhooks/handling-payment-events.md#build-your-own-webhook) handler to listen for events and build custom asynchronous payment flows. Test and debug your webhook integration locally with the Stripe CLI.

- **Prebuilt apps:** Handle common business events, like [automation](https://stripe.partners/?f_category=automation) or [marketing and sales](https://stripe.partners/?f_category=marketing-and-sales), by integrating a partner application.

### Supported currencies

You can create crypto payments in the currencies that map to your country. The default local currency for crypto is USD, with customers also seeing their purchase amount in this currency.

## Optional: Handle the redirect manually \[Server-side]

The best way to handle redirects is to use Stripe.js with `confirmPayment`. If you need to manually redirect your customers:

1. Provide the URL to redirect your customers to after they complete their payment.

```curl
curl https://api.stripe.com/v1/payment_intents/pi_1DRuHnHgsMRlo4MtwuIAUe6u/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d payment_method=pm_1EnPf7AfTbPYpBIFLxIc8SD9 \
  --data-urlencode return_url="https://shop.example.com/crtA6B28E1"
```

1. Confirm the `PaymentIntent` has a status of `requires_action`. The type for the `next_action` will be `redirect_to_url`.

```json
"next_action": {
  "type": "redirect_to_url",
  "redirect_to_url": {
    "url": "https://hooks.stripe.com/...",
    "return_url": "https://example.com/checkout/complete"
  }
}
```

1. Redirect the customer to the URL provided in the `next_action` property.

When the customer finishes the payment process, they’re sent to the `return_url` destination. The `payment_intent` and `payment_intent_client_secret` URL query parameters are included and you can pass through your own query parameters, as described above.

## Test your integration

Test your crypto payment integration by opening the payment redirect page using your test API keys. You can test a successful payment flow at no cost using [testnet assets](https://docs.stripe.com/payments/accept-stablecoin-payments.md#testnet-assets).

1. In a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), create a new transaction using your chosen integration method, and open its redirect URL.
2. Connect your preferred wallet and payment network.
3. Complete the payment, and validate that you’re redirected to the expected URL.

### Test payments with testnet assets

Most cryptocurrencies offer testnet assets, or tokens that have no monetary value, that you can use to test blockchain transactions. Stripe recommends the MetaMask wallet, Polygon Amoy testnet, and Circle faucet for testing, but you can use your own preferred services.

#### Install a wallet

1. [Download the MetaMask extension](https://metamask.io/download) for your web browser.
2. [Create a new wallet](https://support.metamask.io/start/creating-a-new-wallet/) or [import an existing one](https://support.metamask.io/start/use-an-existing-wallet/).

#### Enable a testnet

1. In your MetaMask wallet, select **Networks** from the main menu.
2. Click **Add custom network**.
3. Enter the following details:
   - **Network name**: `Polygon Amoy`
   - **Default RPC URL**: `https://rpc-amoy.polygon.technology/`
   - **Chain ID**: `80002`
   - **Currency symbol**: `POL`
   - **Block explorer URL**: `https://amoy.polygonscan.com/`
4. Click **Save**.

#### Import a token

1. In your MetaMask wallet, under **Tokens**, select **Polygon Amoy** from the network dropdown.
2. Click the overflow menu (⋯), and select **Import tokens**.
3. Click **Select a network** > **Polygon Amoy**.
4. Under **Token contract address**, paste the Polygon Amoy testnet contract address:
   ```
   0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
   ```

The **Token symbol** field automatically updates with `USDC` and the **Decimals** field with `6`.

1. Click **Next**.
2. Verify that you’re importing the `USDC` token, and then click **Import**.

Your MetaMask wallet now shows **Polygon Amoy** and **USDC** in the tokens list.

#### Get testnet assets

1. Open [faucet.circle.com](https://faucet.circle.com/)
2. Click **USDC**.
3. Under **Network**, select **Polygon PoS Amoy**.
4. Under **Send to**, paste your wallet address.
5. Click **Send 10 USDC**.

In addition to USDC for making payments, you need POL to pay transaction costs:

1. Open [faucet.polygon.technology](https://faucet.polygon.technology/).
2. Under **Select Chain & Token**, select **Polygon Amoy** and **POL**.
3. Under **Verify your identity**, click the third-party platform you want to authenticate with, and complete the login process.
4. Under **Enter Wallet Address**, paste your wallet address.
5. Click **Claim**.

Testnet transactions can take a few minutes to complete. Check your wallet to confirm that the USDC and POL has transferred.

### More testnet faucets

Check these faucet services for more testing token options:

- [Paxos USDP](https://faucet.paxos.com/)
- [Devnet SOL](https://faucet.solana.com/)
- [Sepolia ETH](https://faucets.chain.link/sepolia)
- [Amoy POL](https://faucet.polygon.technology/)

# iOS

> This is a iOS for when payment-ui is mobile and platform is ios. View the full page at https://docs.stripe.com/payments/accept-stablecoin-payments?payment-ui=mobile\&platform=ios.

We recommend you use the [Mobile Payment Element](https://docs.stripe.com/payments/accept-a-payment.md?=ios), an embeddable payment form, to add Pay with Crypto and other payment methods to your integration with the least amount of effort.

Pay with Crypto is a [single-use](https://docs.stripe.com/payments/payment-methods.md#usage) payment method where customers are required to [authenticate](https://docs.stripe.com/payments/payment-methods.md#customer-actions) their payment. Customers are redirected from your app, authorize the payment with Stripe Crypto, then return to your app. You’re [immediately notified](https://docs.stripe.com/payments/payment-methods.md#payment-notification) when the payment succeeds or fails.

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

### Server-side

This integration requires endpoints on your server that talk to the Stripe API. Use the official libraries for access to the Stripe API from your server:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

### Client-side

The [Stripe iOS SDK](https://github.com/stripe/stripe-ios) is open source, [fully documented](https://stripe.dev/stripe-ios/index.html), and compatible with apps supporting iOS 13 or above.

#### Swift Package Manager

To install the SDK, follow these steps:

1. In Xcode, select **File** > **Add Package Dependencies…** and enter `https://github.com/stripe/stripe-ios-spm` as the repository URL.
2. Select the latest version number from our [releases page](https://github.com/stripe/stripe-ios/releases).
3. Add the **StripePaymentsUI** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripePaymentsUI'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripePaymentsUI
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentsUI/README.md#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripePaymentsUI.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentsUI/README.md#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

Configure the SDK with your Stripe [publishable key](https://dashboard.stripe.com/test/apikeys) on app start. This enables your app to make requests to the Stripe API.

#### Swift

```swift
import UIKitimportStripePaymentsUI

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {StripeAPI.defaultPublishableKey = "<<YOUR_PUBLISHABLE_KEY>>"
        // do any other necessary launch configuration
        return true
    }
}
```

> Use your [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

## Create a PaymentIntent \[Server-side] \[Client-side]

### Server-side

A [PaymentIntent](https://docs.stripe.com/api/payment_intents/object.md) is an object that represents your intent to collect payment from a customer and tracks the lifecycle of the payment process through each stage.

#### Manage payment methods in the Dashboard

You can manage payment methods in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow.

Create a PaymentIntent on your server with an amount and currency. Before creating the PaymentIntent, make sure to turn **Pay with Crypto** on in your [Payment methods settings](https://dashboard.stripe.com/settings/payment_methods).

> Always decide how much to charge on the server-side, a trusted environment, as opposed to the client. This prevents customers from being able to choose their own prices.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "automatic_payment_methods[enabled]"=true
```

#### List payment methods manually

If you don’t want to use the Dashboard or you want to manually specify payment methods, you can list them using the `payment_method_types` attribute.

Create a PaymentIntent on your server with an amount, currency, and a list of payment methods.

> Always decide how much to charge on the server-side, a trusted environment, as opposed to the client. This prevents customers from being able to choose their own prices.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=crypto
```

### Client-side

On the client, request a PaymentIntent from your server and store its *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)).

#### Swift

```swift
class CheckoutViewController: UIViewController {
    var paymentIntentClientSecret: String?

    // ...continued from previous step

    override func viewDidLoad() {
        // ...continued from previous step
        startCheckout()
    }

    func startCheckout() {
        // Request a PaymentIntent from your server and store its client secret
        // Click View full sample to see a complete implementation
    }
}
```

## Submit the payment to Stripe \[Client-side]

When a customer taps to pay with Pay with Crypto, confirm the `PaymentIntent` to complete the payment. Configure an `STPPaymentIntentParams` object with the `PaymentIntent` [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret).

The client secret is different from your API keys that authenticate Stripe API requests. Handle it carefully because it can complete the charge. Don’t log it, embed it in URLs, or expose it to anyone but the customer.

### Set up a return URL

The iOS SDK presents a webview in your app to complete the Pay with Crypto payment. When authentication is finished, the webview can automatically dismiss itself instead of having your customer close it. To enable this behavior, configure a custom URL scheme or universal link and set up your app delegate to forward the URL to the SDK.

#### Swift

```swift
// This method handles opening custom URL schemes (for example, "your-app://stripe-redirect")
func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
    let stripeHandled = StripeAPI.handleURLCallback(with: url)
    if (stripeHandled) {
        return true
    } else {
        // This was not a Stripe url – handle the URL normally as you would
    }
    return false
}

// This method handles opening universal link URLs (for example, "https://example.com/stripe_ios_callback")
func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        if let url = userActivity.webpageURL {
            let stripeHandled = StripeAPI.handleURLCallback(with: url)
            if (stripeHandled) {
                return true
            } else {
                // This was not a Stripe url – handle the URL normally as you would
            }
        }
    }
    return false
}
```

Pass the URL as the `return_url` when you confirm the PaymentIntent. After webview-based authentication finishes, Stripe redirects the user to the `return_url`.

### Confirm the Pay with Crypto payment

Complete the payment by calling `STPPaymentHandler.confirmPayment`. This presents a webview where the customer can complete the payment with Pay with Crypto. After completion, Stripe calls the completion block with the result of the payment.

#### Swift

```swift
let paymentIntentParams = STPPaymentIntentParams(clientSecret: paymentIntentClientSecret)

// Pay with Crypto does not require additional parameters so we only need to pass the initialized
// STPPaymentMethodCryptoParams instance to STPPaymentMethodParams
let crypto = STPPaymentMethodCryptoParams()
let paymentMethodParams = STPPaymentMethodParams(crypto: crypto, billingDetails: nil, metadata: nil)

paymentIntentParams.paymentMethodParams = paymentMethodParams
paymentIntentParams.returnURL = "payments-example://stripe-redirect"

STPPaymentHandler.shared().confirmPayment(paymentIntentParams,
                                          with: self)
{ (handlerStatus, paymentIntent, error) in
    switch handlerStatus {
    case .succeeded:
        // Payment succeeded
        // ...

    case .canceled:
        // Payment canceled
        // ...

    case .failed:
        // Payment failed
        // ...

    @unknown default:
        fatalError()
    }
}
```

## Optional: Handle the redirect manually \[Server-side]

The best way to handle redirects is to use Stripe.js with `confirmPayment`. If you need to manually redirect your customers:

1. Provide the URL to redirect your customers to after they complete their payment.

```curl
curl https://api.stripe.com/v1/payment_intents/pi_1DRuHnHgsMRlo4MtwuIAUe6u/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d payment_method=pm_1EnPf7AfTbPYpBIFLxIc8SD9 \
  --data-urlencode return_url="https://shop.example.com/crtA6B28E1"
```

1. Confirm the `PaymentIntent` has a status of `requires_action`. The type for the `next_action` will be `redirect_to_url`.

```json
"next_action": {
  "type": "redirect_to_url",
  "redirect_to_url": {
    "url": "https://hooks.stripe.com/...",
    "return_url": "https://example.com/checkout/complete"
  }
}
```

1. Redirect the customer to the URL provided in the `next_action` property.

When the customer finishes the payment process, they’re sent to the `return_url` destination. The `payment_intent` and `payment_intent_client_secret` URL query parameters are included and you can pass through your own query parameters, as described above.

## Optional: Handle post-payment events

Stripe sends a [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) event when the payment completes. Use the Dashboard, a custom *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests), or a partner solution to receive these events and run actions, like sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow.

Listen for these events rather than waiting on a callback from the client. On the client, the customer could close the browser window or quit the app before the callback executes, and malicious clients could manipulate the response. Setting up your integration to listen for asynchronous events also helps you accept more payment methods in the future. Learn about the [differences between all supported payment methods](https://stripe.com/payments/payment-methods-guide).

- **Handle events manually in the Dashboard**

  Use the Dashboard to [View your test payments in the Dashboard](https://dashboard.stripe.com/test/payments), send email receipts, handle payouts, or retry failed payments.

- **Build a custom webhook**

  [Build a custom webhook](https://docs.stripe.com/webhooks/handling-payment-events.md#build-your-own-webhook) handler to listen for events and build custom asynchronous payment flows. Test and debug your webhook integration locally with the Stripe CLI.

- **Integrate a prebuilt app**

  Handle common business events, such as [automation](https://stripe.partners/?f_category=automation) or [marketing and sales](https://stripe.partners/?f_category=marketing-and-sales), by integrating a partner application.

# Android

> This is a Android for when payment-ui is mobile and platform is android. View the full page at https://docs.stripe.com/payments/accept-stablecoin-payments?payment-ui=mobile\&platform=android.

We recommend you use the [Mobile Payment Element](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=mobile\&platform=android), an embeddable payment form, to add Pay with Crypto and other payment methods to your integration with the least amount of effort.

Pay with Crypto is a [single-use](https://docs.stripe.com/payments/payment-methods.md#usage) payment method where customers are required to [authenticate](https://docs.stripe.com/payments/payment-methods.md#customer-actions) their payment. Customers are redirected from your app, authorize the payment with Stripe, then return to your app. You’re [immediately notified](https://docs.stripe.com/payments/payment-methods.md#payment-notification) when the payment succeeds or fails.

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

### Server-side

This integration requires endpoints on your server that talk to the Stripe API. Use the official libraries for access to the Stripe API from your server:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

### Client-side

The [Stripe Android SDK](https://github.com/stripe/stripe-android) is open source and [fully documented](https://stripe.dev/stripe-android/).

To install the SDK, add `stripe-android` to the `dependencies` block of your [app/build.gradle](https://developer.android.com/studio/build/dependencies) file:

#### Kotlin

```kotlin
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
  // ...

  // Stripe Android SDK
  implementation("com.stripe:stripe-android:22.8.1")
  // Include the financial connections SDK to support US bank account as a payment method
  implementation("com.stripe:financial-connections:22.8.1")
}
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-android/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

Configure the SDK with your Stripe [publishable key](https://dashboard.stripe.com/apikeys) so that it can make requests to the Stripe API, such as in your `Application` subclass:

#### Kotlin

```kotlin
import com.stripe.android.PaymentConfiguration

class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()
        PaymentConfiguration.init(
            applicationContext,
            "<<YOUR_PUBLISHABLE_KEY>>"
        )
    }
}
```

> Use your [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

Stripe samples also use [OkHttp](https://github.com/square/okhttp) and [GSON](https://github.com/google/gson) to make HTTP requests to a server.

## Create a PaymentIntent \[Server-side] \[Client-side]

### Server-side

A [PaymentIntent](https://docs.stripe.com/api/payment_intents/object.md) is an object that represents your intent to collect payment from a customer and tracks the lifecycle of the payment process through each stage.

#### Manage payment methods in the Dashboard

You can manage payment methods in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors, such as the transaction’s amount, currency, and payment flow.

Create a PaymentIntent on your server with an amount and currency. Before creating the PaymentIntent, make sure to turn **Pay with Crypto** on in the [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) page.

> Always decide how much to charge on the server-side, a trusted environment, as opposed to the client. This prevents customers from being able to choose their own prices.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "automatic_payment_methods[enabled]"=true
```

#### List payment methods manually

If you don’t want to use the Dashboard or you want to manually specify payment methods, you can list them using the `payment_method_types` attribute.

Create a PaymentIntent on your server with an amount, currency, and a list of payment methods.

> Always decide how much to charge on the server-side, a trusted environment, as opposed to the client. This prevents customers from being able to choose their own prices.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=crypto
```

### Client-side

On the client, request a PaymentIntent from your server and store its *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)).

#### Kotlin

```kotlin
class CheckoutActivity : AppCompatActivity() {

  private lateinit var paymentIntentClientSecret: String

  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      // ...
      startCheckout()
  }

  private fun startCheckout() {
      // Request a PaymentIntent from your server and store its client secret in paymentIntentClientSecret
      // Click View full sample to see a complete implementation
  }
}
```

## Submit the payment to Stripe \[Client-side]

When a customer taps to pay with Pay with Crypto, confirm the `PaymentIntent` to complete the payment. Configure a `ConfirmPaymentIntentParams` object with the `PaymentIntent` [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret).

The client secret is different from your API keys that authenticate Stripe API requests. Handle it carefully because it can complete the charge. Don’t log it, embed it in URLs, or expose it to anyone but the customer.

### Confirm Pay with Crypto payment

Complete the payment by calling [PaymentLauncher confirm](https://stripe.dev/stripe-android/payments-core/com.stripe.android.payments.paymentlauncher/-payment-launcher/confirm.html). This redirects the customer to **https://crypto.stripe.com/pay**, where they can complete the payment with Pay with Crypto. After completion, Stripe calls the `PaymentResultCallback` you set with the result of the payment.

#### Kotlin

```kotlin
class CheckoutActivity : AppCompatActivity() {

    // ...

    private val paymentLauncher: PaymentLauncher by lazy {
        val paymentConfiguration = PaymentConfiguration.getInstance(applicationContext)
        PaymentLauncher.create(
            activity = this,
            publishableKey = paymentConfiguration.publishableKey,
            stripeAccountId = paymentConfiguration.stripeAccountId,
            callback = ::onPaymentResult,
        )
    }

    // …

    private fun startCheckout() {
        // ...

        val cryptoParams = PaymentMethodCreateParams.createCrypto()

        val confirmParams = ConfirmPaymentIntentParams
            .createWithPaymentMethodCreateParams(
                paymentMethodCreateParams = cryptoParams,
                clientSecret = paymentIntentClientSecret,
            )

        paymentLauncher.confirm(confirmParams)
    }

    private fun onPaymentResult(paymentResult: PaymentResult) {
        // Handle the payment result…
    }
}
```

## Optional: Handle the redirect manually \[Server-side]

The best way to handle redirects is to use Stripe.js with `confirmPayment`. If you need to manually redirect your customers:

1. Provide the URL to redirect your customers to after they complete their payment.

```curl
curl https://api.stripe.com/v1/payment_intents/pi_1DRuHnHgsMRlo4MtwuIAUe6u/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d payment_method=pm_1EnPf7AfTbPYpBIFLxIc8SD9 \
  --data-urlencode return_url="https://shop.example.com/crtA6B28E1"
```

1. Confirm the `PaymentIntent` has a status of `requires_action`. The type for the `next_action` will be `redirect_to_url`.

```json
"next_action": {
  "type": "redirect_to_url",
  "redirect_to_url": {
    "url": "https://hooks.stripe.com/...",
    "return_url": "https://example.com/checkout/complete"
  }
}
```

1. Redirect the customer to the URL provided in the `next_action` property.

When the customer finishes the payment process, they’re sent to the `return_url` destination. The `payment_intent` and `payment_intent_client_secret` URL query parameters are included and you can pass through your own query parameters, as described above.

## Optional: Handle post-payment events

Stripe sends a [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) event when the payment completes. Use the Dashboard, a custom *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests), or a partner solution to receive these events and run actions, like sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow.

Listen for these events rather than waiting on a callback from the client. On the client, the customer could close the browser window or quit the app before the callback executes, and malicious clients could manipulate the response. Setting up your integration to listen for asynchronous events also helps you accept more payment methods in the future. Learn about the [differences between all supported payment methods](https://stripe.com/payments/payment-methods-guide).

- **Handle events manually in the Dashboard**

  Use the Dashboard to [View your test payments in the Dashboard](https://dashboard.stripe.com/test/payments), send email receipts, handle payouts, or retry failed payments.

- **Build a custom webhook**

  [Build a custom webhook](https://docs.stripe.com/webhooks/handling-payment-events.md#build-your-own-webhook) handler to listen for events and build custom asynchronous payment flows. Test and debug your webhook integration locally with the Stripe CLI.

- **Integrate a prebuilt app**

  Handle common business events, such as [automation](https://stripe.partners/?f_category=automation) or [marketing and sales](https://stripe.partners/?f_category=marketing-and-sales), by integrating a partner application.

### Test your integration

Test your crypto payment integration by opening the payment redirect page using your test API keys. You can test a successful payment flow at no cost using [testnet assets](https://docs.stripe.com/payments/accept-stablecoin-payments.md#testnet-assets).

1. In a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes), create a new transaction using your chosen integration method, and open its redirect URL.
2. Connect your preferred wallet and payment network.
3. Complete the payment, and validate that you’re redirected to the expected URL.

### Test payments with testnet assets

Most cryptocurrencies offer testnet assets, or tokens that have no monetary value, that you can use to test blockchain transactions. Stripe recommends the MetaMask wallet, Polygon Amoy testnet, and Circle faucet for testing, but you can use your own preferred services.

#### Install a wallet

1. [Download the MetaMask extension](https://metamask.io/download) for your web browser.
2. [Create a new wallet](https://support.metamask.io/start/creating-a-new-wallet/) or [import an existing one](https://support.metamask.io/start/use-an-existing-wallet/).

#### Enable a testnet

1. In your MetaMask wallet, select **Networks** from the main menu.
2. Click **Add custom network**.
3. Enter the following details:
   - **Network name**: `Polygon Amoy`
   - **Default RPC URL**: `https://rpc-amoy.polygon.technology/`
   - **Chain ID**: `80002`
   - **Currency symbol**: `POL`
   - **Block explorer URL**: `https://amoy.polygonscan.com/`
4. Click **Save**.

#### Import a token

1. In your MetaMask wallet, under **Tokens**, select **Polygon Amoy** from the network dropdown.
2. Click the overflow menu (⋯), and select **Import tokens**.
3. Click **Select a network** > **Polygon Amoy**.
4. Under **Token contract address**, paste the Polygon Amoy testnet contract address:
   ```
   0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
   ```

The **Token symbol** field automatically updates with `USDC` and the **Decimals** field with `6`.

1. Click **Next**.
2. Verify that you’re importing the `USDC` token, and then click **Import**.

Your MetaMask wallet now shows **Polygon Amoy** and **USDC** in the tokens list.

#### Get testnet assets

1. Open [faucet.circle.com](https://faucet.circle.com/)
2. Click **USDC**.
3. Under **Network**, select **Polygon PoS Amoy**.
4. Under **Send to**, paste your wallet address.
5. Click **Send 10 USDC**.

In addition to USDC for making payments, you need POL to pay transaction costs:

1. Open [faucet.polygon.technology](https://faucet.polygon.technology/).
2. Under **Select Chain & Token**, select **Polygon Amoy** and **POL**.
3. Under **Verify your identity**, click the third-party platform you want to authenticate with, and complete the login process.
4. Under **Enter Wallet Address**, paste your wallet address.
5. Click **Claim**.

Testnet transactions can take a few minutes to complete. Check your wallet to confirm that the USDC and POL has transferred.

### More testnet faucets

Check these faucet services for more testing token options:

- [Paxos USDP](https://faucet.paxos.com/)
- [Devnet SOL](https://faucet.solana.com/)
- [Sepolia ETH](https://faucets.chain.link/sepolia)
- [Amoy POL](https://faucet.polygon.technology/)
