# Save a customer's payment method without making a payment

Learn how to save a payment method and charge it later.

# Checkout Sessions API

> This is a Checkout Sessions API for when payment-ui is embedded-components. View the full page at https://docs.stripe.com/payments/save-and-reuse?payment-ui=embedded-components.

The [Checkout Sessions API in `setup` mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) lets you save a customer’s payment details without an initial payment. This is helpful if you want to onboard customers now, set them up for payments, and charge them using the Payment Intents API in the future—when they’re offline.

Use this integration to set up recurring payments or to create one-time payments with a final amount determined later, often after the customer receives your service.

> #### Card-present transactions
>
> Card-present transactions, such as [collecting card details through Stripe Terminal](https://docs.stripe.com/terminal/features/saving-payment-details/save-directly.md), use a different process for saving the payment method.

## Compliance

You’re responsible for your compliance with all applicable laws, regulations, and network rules when saving a customer’s payment details. These requirements generally apply if you want to save your customer’s payment method for future use, such as displaying a customer’s payment method to them in the checkout flow for a future purchase or charging them when they’re not actively using your website or app. Add terms to your website or app that state how you plan to save payment method details and allow customers to opt in.

When you save a payment method, you can only use it for the specific usage you have included in your terms. To charge a payment method when a customer is offline and save it as an option for future purchases, make sure that you explicitly collect consent from the customer for this specific use. For example, include a “Save my payment method for future use” checkbox to collect consent.

To charge a customer when they’re offline, make sure your terms include the following:

- The customer’s agreement to your initiating a payment or a series of payments on their behalf for specified transactions.
- The anticipated timing and frequency of payments (for example, if the charges are for scheduled installments, subscription payments, or unscheduled top-ups).
- How you determine the payment amount.
- Your cancellation policy, if the payment method is for a subscription service.

Make sure you keep a record of your customer’s written agreement to these terms.

> If you need to use manual server-side confirmation or your integration requires presenting payment methods separately, see our [alternative guide](https://docs.stripe.com/payments/save-and-reuse-cards-only.md).

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

## Create a Customer \[Server-side]

To set up a payment method for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a `Customer` object when your customer creates an account with your business. `Customer` objects allow for reusing payment methods and tracking across multiple payments.

> #### Compare Customers v1 and Accounts v2 references
>
> If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

```curl
curl -X POST https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:"
```

## Use setup mode \[Server-side]

Create a Checkout Session with [mode=setup](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode).

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=setup \
  -d ui_mode=custom \
  -d currency=usd
```

## Attach the payment method to a Customer \[Server-side]

If you didn’t create the Checkout Session with an existing customer, use the ID of the *PaymentMethod* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs) to [attach](https://docs.stripe.com/api/payment_methods/attach.md) the payment method to a customer.

Otherwise, the payment method automatically attaches to the customer you provided when creating the Checkout Session.

```curl
curl https://api.stripe.com/v1/payment_methods/{{PAYMENTMETHOD_ID}}/attach \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}"
```

## Retrieve the payment method \[Server-side]

After a customer successfully completes their Checkout Session, handle the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) webhook. Retrieve the Session object in the webhook, and then do the following:

- Get the value of the [setup\_intent](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-setup_intent) key, which is the SetupIntent ID created during the Checkout Session.
- Use the SetupIntent ID to [retrieve](https://docs.stripe.com/api/setup_intents/retrieve.md) the SetupIntent object. The returned object contains a [payment\_method](https://docs.stripe.com/api/setup_intents/object.md#setup_intent_object-payment_method) ID that you can attach to a customer in the next step.

Learn more about [setting up webhooks](https://docs.stripe.com/webhooks.md).

## Charge the payment method later \[Server-side]

After you attach the PaymentMethod to a customer, you can make an *off-session* (A payment is described as off-session if it occurs without the direct involvement of the customer, using previously-collected payment information) payment using a [PaymentIntent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method):

- Set [customer](https://docs.stripe.com/api.md#create_payment_intent-customer) to the customer ID and [payment\_method](https://docs.stripe.com/api.md#create_payment_intent-payment_method) to payment method ID.
- Set [off\_session](https://docs.stripe.com/api/payment_intents/confirm.md#confirm_payment_intent-off_session) to `true` to indicate that the customer isn’t in your checkout flow during a payment attempt and can’t fulfill an authentication request made by a partner, such as a card issuer, bank, or other payment institution. If, during your checkout flow, a partner requests authentication, Stripe requests exemptions using customer information from a previous *on-session* (A payment is described as on-session if it occurs while the customer is actively in your checkout flow and able to authenticate the payment method) transaction. If the conditions for exemption aren’t met, the PaymentIntent might result in an error.
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

If a payment attempt fails, the request also fails with a 402 HTTP status code, and the PaymentIntent status is *requires\_payment\_method* (This status appears as "requires\_source" in API versions before 2019-02-11). Notify your customer to return to your application (for example, by sending an email or in-app notification) and direct your customer to a new Checkout Session to select another payment method.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=1099 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=custom \
  --data-urlencode return_url="https://example.com/return"
```

# Setup Intents API

> This is a Setup Intents API for when payment-ui is elements. View the full page at https://docs.stripe.com/payments/save-and-reuse?payment-ui=elements.

The [Setup Intents API](https://docs.stripe.com/api/setup_intents.md) lets you save a customer’s payment details without an initial payment. This is helpful if you want to onboard customers now, set them up for payments, and charge them in the future—when they’re offline.

Use this integration to set up recurring payments or to create one-time payments with a final amount determined later, often after the customer receives your service.

> #### Card-present transactions
>
> Card-present transactions, such as collecting card details through Stripe Terminal, use a different process for saving the payment method. For details, see [the Terminal documentation](https://docs.stripe.com/terminal/features/saving-payment-details/save-directly.md).

## Compliance

You’re responsible for your compliance with all applicable laws, regulations, and network rules when saving a customer’s payment details. These requirements generally apply if you want to save your customer’s payment method for future use, such as displaying a customer’s payment method to them in the checkout flow for a future purchase or charging them when they’re not actively using your website or app. Add terms to your website or app that state how you plan to save payment method details and allow customers to opt in.

When you save a payment method, you can only use it for the specific usage you have included in your terms. To charge a payment method when a customer is offline and save it as an option for future purchases, make sure that you explicitly collect consent from the customer for this specific use. For example, include a “Save my payment method for future use” checkbox to collect consent.

To charge them when they’re offline, make sure your terms include the following:

- The customer’s agreement to your initiating a payment or a series of payments on their behalf for specified transactions.
- The anticipated timing and frequency of payments (for example, if the charges are for scheduled installments, subscription payments, or unscheduled top-ups).
- How you determine the payment amount.
- Your cancellation policy, if the payment method is for a subscription service.

Make sure you keep a record of your customer’s written agreement to these terms.

> If you need to use manual server-side confirmation or your integration requires presenting payment methods separately, see our [alternative guide](https://docs.stripe.com/payments/save-and-reuse-cards-only.md).

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

## Enable payment methods

View your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) and enable the payment methods you want to support. You need at least one payment method enabled to create a *SetupIntent* (The Setup Intents API lets you build dynamic flows for collecting payment method details for future payments. It tracks the lifecycle of a payment setup flow and can trigger additional authentication steps if required by law or by the payment method).

By default, Stripe enables cards and other prevalent payment methods that can help you reach more customers, but we recommend turning on additional payment methods that are relevant for your business and customers. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md) for product and payment method support, and our [pricing page](https://stripe.com/pricing/local-payment-methods) for fees.

## Create a Customer \[Server-side]

To set up a payment method for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a `Customer` object when your customer creates an account with your business. `Customer` objects allow for reusing payment methods and tracking across multiple payments.

> #### Compare Customers v1 and Accounts v2 references
>
> If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

```curl
curl -X POST https://api.stripe.com/v1/customers \
  -u "<<YOUR_SECRET_KEY>>:"
```

## Create a SetupIntent \[Server-side]

> If you want to render the Payment Element without first creating a SetupIntent, see [Collect payment details before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md?type=setup).

A [SetupIntent](https://docs.stripe.com/api/setup_intents.md) is an object that represents your intent to set up a customer’s payment method for future payments. The payment methods shown to customers during the checkout process are also included on the `SetupIntent`. You can let Stripe automatically pull payment methods from your Dashboard settings or you can list them manually.

Unless your integration requires a code-based option for offering payment methods, Stripe recommends the automated option. This is because Stripe evaluates the currency, payment method restrictions, and other parameters to determine the list of supported payment methods. Payment methods that increase conversion and that are most relevant to the currency and customer’s location are prioritized. Lower priority payment methods are hidden beneath an overflow menu.

#### Manage payment methods from the Dashboard

Some payment methods can’t be saved for future payments, and customers don’t see them as options when setting up future payments. For more details about managing payment methods, see [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md).

You can optionally create a SetupIntent with `automatic_payment_methods` enabled, and the SetupIntent is created using the payment methods you configured in the Dashboard. Specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default in the latest version of the API.

You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow.

```curl
curl https://api.stripe.com/v1/setup_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "automatic_payment_methods[enabled]"=true
```

#### Manually list payment methods

Create a SetupIntent on your server with a list of [payment methods](https://docs.stripe.com/payments/payment-methods/integration-options.md) you want to support.

```curl
curl https://api.stripe.com/v1/setup_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer={{CUSTOMER_ID}} \
  -d "payment_method_types[]"=bancontact \
  -d "payment_method_types[]"=card \
  -d "payment_method_types[]"=ideal
```

### Retrieve the client secret

The SetupIntent includes a *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)) that the client side uses to securely complete the payment process. You can use different approaches to pass the client secret to the client side.

#### Single-page application

Retrieve the client secret from an endpoint on your server, using the browser’s `fetch` function. This approach is best if your client side is a single-page application, particularly one built with a modern frontend framework like React. Create the server endpoint that serves the client secret:

#### Ruby

```ruby
get '/secret' do
  intent = # ... Create or retrieve the SetupIntent
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

Add the [client\_secret](https://docs.stripe.com/api/setup_intents/object.md#setup_intent_object-client_secret) in your checkout form. In your server-side code, retrieve the client secret from the SetupIntent:

#### Ruby

```erb
<form id="payment-form" data-secret="<%= @intent.client_secret %>">
  <div id="payment-element">
    <!-- placeholder for Elements -->
  </div>
  <button id="submit">Submit</button>
</form>
```

```ruby
get '/checkout' do
  @intent = # ... Fetch or create the SetupIntent
  erb :checkout
end
```

> #### Using Radar
>
> When saving a customer’s payment method without an initial payment, [Radar](https://docs.stripe.com/radar.md) doesn’t act on the SetupIntent by default. If you want to activate this as the default, go to the [Radar settings](https://dashboard.stripe.com/settings/radar) and enable **Use Radar on payment methods saved for future use**.

## Collect payment details \[Client-side]

You’re ready to collect payment details on the client with the [Payment Element](https://docs.stripe.com/payments/payment-element.md). The Payment Element is a prebuilt UI component that simplifies collecting payment details for a variety of payment methods.

The Payment Element contains an iframe that securely sends payment information to Stripe over an HTTPS connection. The checkout page address must start with `https://` rather than `http://` for your integration to work. You can test your integration without doing so, but remember to [enable HTTPS](https://docs.stripe.com/security/guide.md#tls) when you’re ready to accept live payments.

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

### Add the Payment Element to your payment setup page

The Payment Element needs a place to live on your payment setup page. Create an empty DOM node (container) with a unique ID in your payment form:

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

When the previous form loads, create an instance of the Payment Element and mount it to the container DOM node. Pass the [client secret](https://docs.stripe.com/api/setup_intents/object.md#setup_intent_object-client_secret) from the previous step into `options` when you create the [Elements](https://docs.stripe.com/js/elements_object/create) instance:

```javascript
const options = {
  clientSecret: '{{CLIENT_SECRET}}',
  // Fully customizable with appearance API.
  appearance: {/*...*/},
};

// Set up Stripe.js and Elements using the SetupIntent's client secretconst elements = stripe.elements(options);

// Create and mount the Payment Element
const paymentElementOptions = { layout: 'accordion'};
const paymentElement = elements.create('payment', paymentElementOptions);
paymentElement.mount('#payment-element');

```

The Payment Element renders a dynamic form that allows your customer to pick a payment method. For each payment method, the form automatically asks the customer to fill in all necessary payment details.

### Customize appearance

Customize the Payment Element to match the design of your site by passing the [appearance object](https://docs.stripe.com/js/elements_object/create#stripe_elements-options-appearance) into `options` when creating the `elements` instance. Stripe Elements is a collection of drop-in UI components. To further customize your form or collect different customer information, browse the [Elements docs](https://docs.stripe.com/payments/elements.md).

### Request Apple Pay merchant token

If you accept Apple Pay payments, we recommend configuring the `applePay` [option](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-applePay) to modify what’s displayed in the Apple Pay interface. By doing this, Apple Pay’s [merchant tokens](https://docs.stripe.com/apple-pay/merchant-tokens.md?pay-element=web-pe) are used. The following example shows a configuration for a payment that begins on January 5, 2030. This information will be reflected in the Apple Pay interface.

```javascript
const paymentElement = elements.create('payment', {
  applePay: {
    deferredPaymentRequest: {
      paymentDescription: 'My deferred payment',
      managementURL: 'https://example.com/billing',
      deferredBilling: {
        amount: 2500,
        label: 'Deferred Fee',
        deferredPaymentDate: new Date('2030-01-05')
      },
    }
  },
  // Other options
});
```

#### React

### Set up Stripe.js

Install [React Stripe.js](https://www.npmjs.com/package/@stripe/react-stripe-js) and the [Stripe.js loader](https://www.npmjs.com/package/@stripe/stripe-js) from the npm public registry:

```bash
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

### Add and configure the Elements provider to your payment setup page

To use the Payment Element component, wrap your payment setup page component in an [Elements provider](https://docs.stripe.com/sdks/stripejs-react.md#elements-provider). Call `loadStripe` with your publishable key, and pass the returned `Promise` to the `Elements` provider. Also pass the [client secret](https://docs.stripe.com/api/setup_intents/object.md#setup_intent_object-client_secret) from the previous step as `options` to the `Elements` provider.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SetupForm from './SetupForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

function App() {
  const options = {
    // passing the SetupIntent's client secret
    clientSecret: '{{CLIENT_SECRET}}',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <SetupForm />
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Add the Payment Element component

Use the `PaymentElement` component to build your form:

```jsx
import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const SetupForm = () => {
  return (
    <form><PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default SetupForm;
```

Stripe Elements is a collection of drop-in UI components. To further customize your form or collect different customer information, browse the [Elements docs](https://docs.stripe.com/payments/elements.md).

The Payment Element renders a dynamic form that allows your customer to pick a payment method. For each payment method, the form automatically asks the customer to fill in all necessary payment details.

### Customize appearance

Customize the Payment Element to match the design of your site by passing the [appearance object](https://docs.stripe.com/js/elements_object/create#stripe_elements-options-appearance) into `options` when creating the `Elements` provider.

### Request Apple Pay merchant token

If you accept Apple Pay payments, we recommend configuring the `applePay` [option](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-applePay) to modify what’s displayed in the Apple Pay interface. By doing this, Apple Pay’s [merchant tokens](https://docs.stripe.com/apple-pay/merchant-tokens.md?pay-element=web-pe) are used. The following example shows a configuration for a payment that begins on January 5, 2030. This information will be reflected in the Apple Pay interface.

```jsx
import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const SetupForm = () => {
  const options = {
    applePay: {
      deferredPaymentRequest: {
        paymentDescription: 'My deferred payment',
        managementURL: 'https://example.com/billing',
        deferredBilling: {
          amount: 2500,
          label: 'Deferred Fee',
          deferredPaymentDate: new Date('2030-01-05')
        },
      }
    },
    // Other options
  };

  return (
    <form><PaymentElement options={options} />
      <button>Submit</button>
    </form>
  );
};

export default SetupForm;
```

### Configure currency

When using SetupIntents with [automatic\_payment\_methods](https://docs.stripe.com/api/setup_intents/create.md#create_setup_intent-automatic_payment_methods), you can specify the currency when you [create the Payment Element](https://docs.stripe.com/js/elements_object/create#stripe_elements-options-currency). The Payment Element renders the enabled payment methods that support the provided currency. For more details, see [the Payment Element documentation](https://docs.stripe.com/payments/payment-methods/integration-options.md).

### Collect addresses

By default, the Payment Element only collects the necessary billing address details. Some behavior, such as [calculating tax](https://docs.stripe.com/api/tax/calculations/create.md) or entering shipping details, requires your customer’s full address. You can:

- Use the [Address Element](https://docs.stripe.com/elements/address-element.md) to take advantage of autocomplete and localization features to collect your customer’s full address. This helps ensure the most accurate tax calculation.
- Collect address details using your own custom form.

## Optional: Link in your checkout page \[Client-side]

Let your customer check out faster by using [Link](https://docs.stripe.com/payments/link.md) in the [Payment Element](https://docs.stripe.com/payments/payment-element.md). You can autofill information for any logged-in customer already using Link, regardless of whether they initially saved their information in Link with another business. The default Payment Element integration includes a Link prompt in the card form. To manage Link in the Payment Element, go to your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
![Authenticate or enroll with Link directly in the Payment Element during checkout](https://b.stripecdn.com/docs-statics-srv/assets/link-in-pe.2efb5138a4708b781b8a913ebddd9aba.png)

Collect a customer email address for Link authentication or enrollment

### Integration options

There are two ways you can integrate Link with the Payment Element. Of these, Stripe recommends passing a customer email address to the Payment Element if available. Remember to consider how your checkout flow works when deciding between these options:

| Integration option                                                 | Checkout flow                                                                                                                                                                        | Description                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pass a customer email address to the Payment Element (Recommended) | - Your customer enters their email address before landing on the checkout page (in a previous account creation step, for example).

- You prefer to use your own email input field. | Programmatically pass a customer email address to the Payment Element. In this scenario, a customer authenticates to Link directly in the payment form instead of a separate UI component.                                                                 |
  | Collect a customer email address in the Payment Element            | - Your customers can choose to enter their email and authenticate or enroll with Link directly in the Payment Element during checkout.
- No code change is required.               | If a customer hasn’t enrolled with Link and they choose a supported payment method in the Payment Element, they’re prompted to save their details using Link. For those who have already enrolled, Link automatically populates their payment information. |

Use [defaultValues](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-defaultValues) to pass a customer email address to the Payment Element.

```javascript
const paymentElement = elements.create('payment', {
  defaultValues: {
    billingDetails: {
      email: 'foo@bar.com',
    }
  },
  // Other options
});
```

For more information, read how to [build a custom checkout page that includes Link](https://docs.stripe.com/payments/link/add-link-elements-integration.md).

## Optional: Save and retrieve customer payment methods

You can configure the Payment Element to save your customer’s payment methods for future use. This section shows you how to integrate the [saved payment methods feature](https://docs.stripe.com/payments/save-customer-payment-methods.md), which enables the Payment Element to:

- Prompt buyers for consent to save a payment method
- Save payment methods when buyers provide consent
- Display saved payment methods to buyers for future purchases
- [Automatically update lost or expired cards](https://docs.stripe.com/payments/cards/overview.md#automatic-card-updates) when buyers replace them
  ![The Payment Element and a saved payment method checkbox](https://b.stripecdn.com/docs-statics-srv/assets/spm-save.fe0b24afd0f0a06e0cf4eecb0ce2403a.png)

Save payment methods.
![The Payment Element with a Saved payment method selected](https://b.stripecdn.com/docs-statics-srv/assets/spm-saved.5dba5a8a190a9a0e9f1a99271bed3f4b.png)

Reuse a previously saved payment method.

### Enable saving the payment method in the Payment Element

Create a [CustomerSession](https://docs.stripe.com/api/customer_sessions/.md) on your server by providing the [Customer ID](https://docs.stripe.com/api/customers/object.md#customer_object-id) and enabling the [payment\_element](https://docs.stripe.com/api/customer_sessions/object.md#customer_session_object-components-payment_element) component for your session. Configure which saved payment method [features](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components-payment_element-features) you want to enable. For instance, enabling [payment\_method\_save](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components-payment_element-features-payment_method_save) displays a checkbox that allows customers to save their payment details for future use.

You can specify `setup_future_usage` on a PaymentIntent or Checkout Session to override the default behavior for saving payment methods. This ensures that you automatically save the payment method for future use, even if the customer doesn’t explicitly choose to save it.

> Allowing buyers to remove their saved payment methods by enabling [payment\_method\_remove](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components-payment_element-features-payment_method_remove) impacts subscriptions that depend on that payment method. Removing the payment method detaches the [PaymentMethod](https://docs.stripe.com/api/payment_methods.md) from that [Customer](https://docs.stripe.com/api/customers.md).

#### Ruby

```ruby

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-intent-and-customer-session' do
  intent = Stripe::SetupIntent.create({
    # In the latest version of the API, specifying the `automatic_payment_methods` parameter
    # is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {enabled: true},
    customer: {{CUSTOMER_ID}},
  })
  customer_session = Stripe::CustomerSession.create({
    customer: {{CUSTOMER_ID}},
    components: {
      payment_element: {
          enabled: true,
          features: {
            payment_method_redisplay: 'enabled',
            payment_method_save: 'enabled',
            payment_method_save_usage: 'off_session',
            payment_method_remove: 'enabled',
          },
        },
    },
  })
  {
    client_secret: intent.client_secret,
    customer_session_client_secret: customer_session.client_secret
  }.to_json
end
```

Your Elements instance uses the CustomerSession’s *client secret* (A client secret is used with your publishable key to authenticate a request for a single object. Each client secret is unique to the object it's associated with) to access that customer’s saved payment methods. [Handle errors](https://docs.stripe.com/error-handling.md) properly when you create the CustomerSession. If an error occurs, you don’t need to provide the CustomerSession client secret to the Elements instance, as it’s optional.

Create the Elements instance using the client secrets for both the SetupIntent and the CustomerSession. Then, use this Elements instance to create a Payment Element.

```javascript
// Create the CustomerSession and obtain its clientSecret
const res = await fetch("/create-intent-and-customer-session", {
  method: "POST"
});

const {
  customer_session_client_secret: customerSessionClientSecret
} = await res.json();

const elementsOptions = {
  clientSecret: '{{CLIENT_SECRET}}',customerSessionClientSecret,
  // Fully customizable with appearance API.
  appearance: {/*...*/},
};

// Set up Stripe.js and Elements to use in checkout form, passing the client secret
// and CustomerSession's client secret obtained in a previous step
const elements = stripe.elements(elementsOptions);

// Create and mount the Payment Element
const paymentElementOptions = { layout: 'accordion'};
const paymentElement = elements.create('payment', paymentElementOptions);
paymentElement.mount('#payment-element');
```

When confirming the SetupIntent, Stripe.js automatically controls setting [allow\_redisplay](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-allow_redisplay) on the PaymentMethod, depending on whether the customer checked the box to save their payment details.

### Detect the selection of a saved payment method

To control dynamic content when a saved payment method is selected, listen to the Payment Element `change` event, which is populated with the selected payment method.

```javascript
paymentElement.on('change', function(event) {
  if (event.value.payment_method) {
    // Control dynamic content if a saved payment method is selected
  }
})
```

## Submit the payment details to Stripe \[Client-side]

Use [stripe.confirmSetup](https://docs.stripe.com/js/setup_intents/confirm_setup) to complete the setup using details collected by the Payment Element. Provide a [return\_url](https://docs.stripe.com/api/setup_intents/create.md#create_setup_intent-return_url) to this function so that Stripe can redirect the user after they complete setup. We may first redirect them to an intermediate site, like a bank authorization page, before redirecting them to the `return_url`.

If your customer saves their card details, we immediately redirect them to the `return_url` when setup is successful. If you don’t want to redirect for card payments, you can set [redirect](https://docs.stripe.com/js/setup_intents/confirm_setup#confirm_setup_intent-options-redirect) to `if_required`. This only redirects customers that check out with redirect-based payment methods.

#### HTML + JS

```javascript
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
const {error} = await stripe.confirmSetup({
    //`Elements` instance that was used to create the Payment Element
    elements,
    confirmParams: {
      return_url: 'https://example.com/account/payments/setup-complete',
    }
  });

  if (error) {
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Show error to your customer (for example, payment
    // details incomplete)
    const messageContainer = document.querySelector('#error-message');
    messageContainer.textContent = error.message;
  } else {
    // Your customer will be redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer will be redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
  }
});
```

#### React

To call [stripe.confirmSetup](https://docs.stripe.com/js/setup_intents/confirm_setup) from your payment form component, use the [useStripe](https://docs.stripe.com/sdks/stripejs-react.md#usestripe-hook) and [useElements](https://docs.stripe.com/sdks/stripejs-react.md#useelements-hook) hooks.

If you prefer traditional class components over hooks, you can instead use an [ElementsConsumer](https://docs.stripe.com/sdks/stripejs-react.md#elements-consumer).

```jsx
import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const SetupForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return null;
    }
const {error} = await stripe.confirmSetup({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://example.com/account/payments/setup-complete',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
};

export default SetupForm;
```

Make sure the `return_url` corresponds to a page on your website that [provides the status](https://docs.stripe.com/payments/payment-intents/verifying-status.md) of the `SetupIntent`. Stripe provides the following URL query parameters to verify the status when we redirect the customer to the `return_url`. You can also append your own query parameters when providing the `return_url`, and they persist through the redirect process.

| Parameter                    | Description                                                                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `setup_intent`               | The unique identifier for the `SetupIntent`.                                                                                            |
| `setup_intent_client_secret` | The [client secret](https://docs.stripe.com/api/setup_intents/object.md#setup_intent_object-client_secret) of the `SetupIntent` object. |

You can use [stripe.retrieveSetupIntent](https://docs.stripe.com/js/setup_intents/retrieve_setup_intent) to retrieve the SetupIntent using the `setup_intent_client_secret` query parameter. Successful confirmation of the SetupIntent saves the resulting `PaymentMethod` ID (in `result.setupIntent.payment_method`) to the provided `Customer`.

#### HTML + JS

```javascript

// Initialize Stripe.js using your publishable key
const stripe = Stripe('{PUBLISHABLE_KEY}');

// Retrieve the "setup_intent_client_secret" query parameter appended to
// your return_url by Stripe.js
const clientSecret = new URLSearchParams(window.location.search).get(
  'setup_intent_client_secret'
);

// Retrieve the SetupIntent
stripe.retrieveSetupIntent(clientSecret).then(({setupIntent}) => {
  const message = document.querySelector('#message')

  // Inspect the SetupIntent `status` to indicate the status of the payment
  // to your customer.
  //
  // Some payment methods will [immediately succeed or fail][0] upon
  // confirmation, while others will first enter a `processing` state.
  //
  // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
  switch (setupIntent.status) {
    case 'succeeded': {
      message.innerText = 'Success! Your payment method has been saved.';
      break;
    }

    case 'processing': {
      message.innerText = "Processing payment details. We'll update you when processing is complete.";
      break;
    }

    case 'requires_payment_method': {
      message.innerText = 'Failed to process payment details. Please try another payment method.';

      // Redirect your user back to your payment page to attempt collecting
      // payment again

      break;
    }
  }
});
```

#### React

```jsx

// PaymentStatus.jsx

import React, {useState, useEffect} from 'react';
import {useStripe} from '@stripe/react-stripe-js';

const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "setup_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'setup_intent_client_secret'
    );

    // Retrieve the SetupIntent
    stripe
      .retrieveSetupIntent(clientSecret)
      .then(({setupIntent}) => {
        // Inspect the SetupIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (setupIntent.status) {
          case 'succeeded':
            setMessage('Success! Your payment method has been saved.');
            break;

          case 'processing':
            setMessage("Processing payment details. We'll update you when processing is complete.");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Failed to process payment details. Please try another payment method.');
            break;
        }
      });
  }, [stripe]);


  return message
};

export default PaymentStatus;
```

> If you have tooling that tracks the customer’s browser session, you might need to add the `stripe.com` domain to the referrer exclude list. Redirects cause some tools to create new sessions which prevents you from tracking the complete session.

## Charge the saved payment method later \[Server-side]

> #### Compliance
>
> You’re responsible for your compliance with all applicable laws, regulations, and network rules when saving a customer’s payment details. When rendering past payment methods to your end customer for future purchases, make sure you’re listing payment methods where you’ve collected consent from the customer to save the payment method details for this specific future use. To differentiate between payment methods attached to customers that can and can’t be presented to your end customer as a saved payment method for future purchases, use the [allow\_redisplay](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-allow_redisplay) parameter.

When you’re ready to charge your customer *off-session* (A payment is described as off-session if it occurs without the direct involvement of the customer, using previously-collected payment information), use the Customer and PaymentMethod IDs to create a PaymentIntent. To find a payment method to charge, list the payment methods associated with your customer. This example lists cards but you can list any supported [type](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-type).

```curl
curl -G https://api.stripe.com/v1/payment_methods \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d type=card
```

When you have the Customer and PaymentMethod IDs, create a PaymentIntent with the amount and currency of the payment. Set a few other parameters to make the off-session payment:

- Set [off\_session](https://docs.stripe.com/api/payment_intents/confirm.md#confirm_payment_intent-off_session) to `true` to indicate that the customer isn’t in your checkout flow during a payment attempt and can’t fulfill an authentication request made by a partner, such as a card issuer, bank, or other payment institution. If, during your checkout flow, a partner requests authentication, Stripe requests exemptions using customer information from a previous *on-session* (A payment is described as on-session if it occurs while the customer is actively in your checkout flow and able to authenticate the payment method) transaction. If the conditions for exemption aren’t met, the PaymentIntent might throw an error.
- Set the value of the PaymentIntent’s [confirm](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-confirm) property to `true`, which causes confirmation to occur immediately when the PaymentIntent is created.
- Set [payment\_method](https://docs.stripe.com/api.md#create_payment_intent-payment_method) to the ID of the PaymentMethod and [customer](https://docs.stripe.com/api.md#create_payment_intent-customer) to the ID of the Customer.

#### curl

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -d amount=1099 \
  -d currency=usd \
  # In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
  -d "automatic_payment_methods[enabled]"=true \-d customer="{{CUSTOMER_ID}}" \
  -d payment_method="{{PAYMENT_METHOD_ID}}" \
  -d return_url="https://example.com/order/123/complete" \
  -d off_session=true \
  -d confirm=true
```

When a payment attempt fails, the request also fails with a 402 HTTP status code and the status of the PaymentIntent is *requires\_payment\_method* (This status appears as "requires\_source" in API versions before 2019-02-11). You must notify your customer to return to your application to complete the payment (for example, by sending an email or in-app notification).

Check the code of the [error](https://docs.stripe.com/api/errors/handling.md) raised by the Stripe API library. If the payment failed due to an [authentication\_required](https://docs.stripe.com/declines/codes.md) decline code, use the declined PaymentIntent’s client secret with confirmPayment to allow the customer to authenticate the payment.

```javascript
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {error} = await stripe.confirmPayment({
    // The client secret of the PaymentIntent
    clientSecret,
    confirmParams: {
      return_url: 'https://example.com/order/123/complete',
    },
  });

  if (error) {
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Show error to your customer (for example, payment
    // details incomplete)
    const messageContainer = document.querySelector('#error-message');
    messageContainer.textContent = error.message;
  } else {
    // Your customer will be redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer will be redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
  }
});
```

> `stripe.confirmPayment` can take several seconds to complete. During that time, disable your form from being resubmitted and show a waiting indicator like a spinner. If you receive an error, show it to the customer, re-enable the form, and hide the waiting indicator. If the customer must perform additional steps to complete the payment, such as authentication, Stripe.js walks them through that process.

If the payment failed for other reasons, such as insufficient funds, send your customer to a payment page to enter a new payment method. You can reuse the existing PaymentIntent to attempt the payment again with the new payment details.

## Test the integration

Use test payment details and the test redirect page to verify your integration. Click the tabs below to view details for each payment method.

#### Cards

| Payment method | Scenario                                                                                                                                                                                                                                                                                                        | How to test                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Credit card    | The card setup succeeds and doesn’t require *authentication* (Strong Customer Authentication (SCA) is a regulatory requirement in effect as of September 14, 2019, that impacts many European online payments. It requires customers to use two-factor authentication like 3D Secure to verify their purchase). | Fill out the credit card form using the credit card number `4242 4242 4242 4242` with any expiration, CVC, and postal code. |
| Credit card    | The card requires authentication for the initial setup, then succeeds for subsequent payments.                                                                                                                                                                                                                  | Fill out the credit card form using the credit card number `4000 0025 0000 3155` with any expiration, CVC, and postal code. |
| Credit card    | The card requires authentication for the initial setup and also requires authentication for subsequent payments.                                                                                                                                                                                                | Fill out the credit card form using the credit card number `4000 0027 6000 3184` with any expiration, CVC, and postal code. |
| Credit card    | The card is declined during setup.                                                                                                                                                                                                                                                                              | Fill out the credit card form using the credit card number `4000 0000 0000 9995` with any expiration, CVC, and postal code. |

#### Bank redirects

| Payment method    | Scenario                                                                                                                                                 | How to test                                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bancontact        | Your customer successfully sets up a SEPA Direct Debit payment method for future usage by using Bancontact.                                              | Use any name in the Bancontact form, then click **Authorize test setup** on the redirect page.                                                                                         |
| Bancontact        | Your customer fails to authenticate on the Bancontact redirect page.                                                                                     | Use any name in the Bancontact form, then click **Fail test setup** on the redirect page.                                                                                              |
| BECS Direct Debit | Your customer successfully pays with BECS Direct Debit.                                                                                                  | Fill out the form using the account number `900123456`. The confirmed PaymentIntent initially transitions to `processing`, then transitions to the `succeeded` status 3 minutes later. |
| BECS Direct Debit | Your customer’s payment fails with an `account_closed` error code.                                                                                       | Fill out the form using the account number `111111113`.                                                                                                                                |
| iDEAL             | Your customer successfully sets up a [SEPA Direct Debit](https://docs.stripe.com/payments/sepa-debit.md) payment method for future usage by using iDEAL. | Use any name and bank in the iDEAL form, then click **Authorize test setup** on the redirect page.                                                                                     |
| iDEAL             | Your customer fails to authenticate on the iDEAL redirect page.                                                                                          | Select any bank and use any name in the iDEAL form, then click **Fail test setup** on the redirect page.                                                                               |

#### Bank debits

| Payment method    | Scenario                                                                                         | How to test                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SEPA Direct Debit | Your customer successfully pays with SEPA Direct Debit.                                          | Fill out the form using the account number `AT321904300235473204`. The confirmed PaymentIntent initially transitions to processing, then transitions to the succeeded status three minutes later. |
| SEPA Direct Debit | Your customer’s payment intent status transition from `processing` to `requires_payment_method`. | Fill out the form using the account number `AT861904300235473202`.                                                                                                                                |

### Test charging a saved SEPA Debit PaymentMethod

Confirming the  SetupIntent  using iDEAL, Bancontact, or Sofort, generates a [SEPA Direct Debit](https://docs.stripe.com/payments/sepa-debit.md) *PaymentMethod* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs). SEPA Direct Debit is a [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method that transitions to an intermediate `processing` state before transitioning several days later to a `succeeded` or `requires_payment_method` state.

#### Email

Set `payment_method.billing_details.email` to one of the following values to test the `PaymentIntent` status transitions. You can include your own custom text at the beginning of the email address followed by an underscore. For example, `test_1_generatedSepaDebitIntentsFail@example.com` results in a SEPA Direct Debit PaymentMethod that always fails when used with a `PaymentIntent`.

| Email Address                                                      | Description                                                                                                                       |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `generatedSepaDebitIntentsSucceed@example.com`                     | The `PaymentIntent` status transitions from `processing` to `succeeded`.                                                          |
| `generatedSepaDebitIntentsSucceedDelayed@example.com`              | The `PaymentIntent` status transitions from `processing` to `succeeded` after at least three minutes.                             |
| `generatedSepaDebitIntentsFail@example.com`                        | The `PaymentIntent` status transitions from `processing` to `requires_payment_method`.                                            |
| `generatedSepaDebitIntentsFailDelayed@example.com`                 | The `PaymentIntent` status transitions from `processing` to `requires_payment_method` after at least three minutes.               |
| `generatedSepaDebitIntentsSucceedDisputed@example.com`             | The `PaymentIntent` status transitions from `processing` to `succeeded`, but a dispute is created immediately.                    |
| `generatedSepaDebitIntentsFailsDueToInsufficientFunds@example.com` | The `PaymentIntent` status transitions from `processing` to `requires_payment_method` with the `insufficient_funds` failure code. |

#### PaymentMethod

Use these PaymentMethods to test that the `PaymentIntent` status transitions. These tokens are useful for automated testing to immediately attach the PaymentMethod to the SetupIntent on the server.

| Payment Method                                                       | Description                                                                                                                       |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `pm_bancontact_generatedSepaDebitIntentsSucceed`                     | The `PaymentIntent` status transitions from `processing` to `succeeded`.                                                          |
| `pm_bancontact_generatedSepaDebitIntentsSucceedDelayed`              | The `PaymentIntent` status transitions from `processing` to `succeeded` after at least three minutes.                             |
| `pm_bancontact_generatedSepaDebitIntentsFail`                        | The `PaymentIntent` status transitions from `processing` to `requires_payment_method`.                                            |
| `pm_bancontact_generatedSepaDebitIntentsFailDelayed`                 | The `PaymentIntent` status transitions from `processing` to `requires_payment_method` after at least three minutes.               |
| `pm_bancontact_generatedSepaDebitIntentsSucceedDisputed`             | The `PaymentIntent` status transitions from `processing` to `succeeded`, but a dispute is created immediately.                    |
| `pm_bancontact_generatedSepaDebitIntentsFailsDueToInsufficientFunds` | The `PaymentIntent` status transitions from `processing` to `requires_payment_method` with the `insufficient_funds` failure code. |

## Optional: Customize the layout \[Client-side]

You can customize the Payment Element’s layout (accordion or tabs) to fit your checkout interface. For more information about each of the properties, see  [elements.create](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options).

#### Accordion

You can start using the layout features by passing a layout `type` and other optional properties when creating the Payment Element:

```javascript
const paymentElement = elements.create('payment', {
  layout: {
    type: 'accordion',
    defaultCollapsed: false,
    radios: 'always',
    spacedAccordionItems: false
  }
});
```

#### Tabs

### Specify the layout

Set the value for layout to `tabs`. You also have the option to specify other properties, such as the ones in the following example:

```javascript
const paymentElement = elements.create('payment', {
  layout: {
    type: 'tabs',
    defaultCollapsed: false,
  }
});
```

The following image is the same Payment Element rendered using different layout configurations:
![Three checkout form experiences](https://b.stripecdn.com/docs-statics-srv/assets/pe_layout_example.525f78bcb99b95e49be92e5dd34df439.png)

Payment Element layouts

## Optional: Apple Pay and Google Pay \[Client-side]

When you [enable card payments](https://docs.stripe.com/payments/save-and-reuse.md?platform=web\&ui=elements#create-intent), we display Apple Pay and Google Pay for customers whose environment meets the [wallet display conditions](https://docs.stripe.com/testing/wallets.md). To accept payments from these wallets, you must also:

- Enable them in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods). Apple Pay is enabled by default.
- [Register your domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md).

> #### Regional Testing
>
> Stripe Elements doesn’t support Google Pay or Apple Pay for Stripe accounts and customers in India. Therefore, you can’t test your Google Pay or Apple Pay integration if the tester’s IP address is in India, even if the Stripe account is based outside India.

## Disclose Stripe to your customers

Stripe collects information on customer interactions with Elements to provide services to you, prevent fraud, and improve its services. This includes using cookies and IP addresses to identify which Elements a customer saw during a single checkout session. You’re responsible for disclosing and obtaining all rights and consents necessary for Stripe to use data in these ways. For more information, visit our [privacy center](https://stripe.com/legal/privacy-center#as-a-business-user-what-notice-do-i-provide-to-my-end-customers-about-stripe).

## See also

- [Accept a payment](https://docs.stripe.com/payments/accept-a-payment.md)
- [Save payment details during payment](https://docs.stripe.com/payments/save-during-payment.md)
- [The Elements Appearance API](https://docs.stripe.com/elements/appearance-api.md)
- [Send complete fraud signals](https://docs.stripe.com/radar/optimize-fraud-signals.md)
