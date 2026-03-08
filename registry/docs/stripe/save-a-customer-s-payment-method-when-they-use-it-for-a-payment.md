# Save a customer's payment method when they use it for a payment

Learn how to save your customer's payment details for future purchases when they make a payment.

# Checkout Sessions API

> This is a Checkout Sessions API for when payment-ui is embedded-components. View the full page at https://docs.stripe.com/payments/save-during-payment?payment-ui=embedded-components.

Use the [Checkout Sessions API](https://docs.stripe.com/api/checkout/sessions.md) to save payment details during a purchase. This is useful for situations such as:

- Charging a customer for an e-commerce order and storing the payment details for future purchases.
- Initiating the first payment in a series of recurring payments.
- Charging a deposit and storing the payment details to charge the full amount later.

## Compliance

You’re responsible for your compliance with all applicable laws, regulations, and network rules when saving a customer’s payment details for future use, such as displaying a customer’s payment method to them in the checkout flow for a future purchase or charging them when they’re not actively using your website or app. Before saving or charging a customer’s payment mathod, make sure you:

- Add terms to your website or app that state how you plan to save payment method details, such as:
  - The customer’s agreement allowing you to initiate a payment or a series of payments on their behalf for specified transactions.
  - The anticipated timing and frequency of payments (for example, if the charges are for scheduled installments, subscription payments, or unscheduled top-ups).
  - How you determine the payment amount.
  - Your cancellation policy, if the payment method is for a subscription service.
- Use a saved payment method for only the purpose stated in your terms.
- Collect explicit consent from the customer for this specific use. For example, include a “Save my payment method for future checkbox.
- Keep a record of your customer’s written agreement to your terms.

> When using Elements with the Checkout Sessions API, only cards are supported for saved payment methods. You can’t save other payment methods, such as bank accounts.

## Prerequisites

1. Follow the Checkout guide to [accept a payment](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=stripe-hosted).
2. Follow this guide to save the payment method used during a payment so you can retrieve it for use in future payments by the same customer.

## Enable saved payment methods

> Global privacy laws are complicated and nuanced. Before implementing the ability to store customer payment method details, work with your legal team to make sure that it complies with your privacy and compliance framework.

To allow a customer to save their payment method for future use, specify the [saved\_payment\_method\_options.payment\_method\_save](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-saved_payment_method_options-payment_method_save) parameter when creating the Checkout Session.

Saving a payment method requires a [Customer](https://docs.stripe.com/api/customers/object.md). Pass an existing customer or create a new one by setting [customer\_creation](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_creation) to `always` on the Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d mode=payment \
  -d ui_mode=custom \
  -d customer_creation=always \
  -d "saved_payment_method_options[payment_method_save]"=enabled
```

After you create the Checkout Session, use the [client secret](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-client_secret) returned in the response to [build your checkout page](https://docs.stripe.com/payments/quickstart-checkout-sessions.md).

> In the latest version of Stripe.js, specifying `enableSave` to `auto` is optional because that’s the default value when saved payment methods are enabled on the Checkout Session.

#### HTML + JS

The Payment Element automatically displays a consent collection checkbox when saved payment methods are enabled on the Checkout Session. You can explicitly configure this behavior using [elementsOptions](https://docs.stripe.com/js/custom_checkout/init#custom_checkout_init-options-elementsOptions) on `initCheckout`.

```javascript
const checkout = stripe.initCheckout({
  clientSecret,
  elementsOptions: {savedPaymentMethod: {
      // Default is 'auto' in the latest version of Stripe.js - this configuration is optional
      enableSave: 'auto',
    }
  }
});
```

#### React

The Payment Element automatically displays a consent collection checkbox when saved payment methods are enabled on the Checkout Session. You can explicitly configure this behavior using [elementsOptions](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider#react_checkout_provider-options-elementsOptions) on the `CheckoutProvider`.

```jsx
import React from 'react';
import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import CheckoutForm from './CheckoutForm';

const App = () => {
  const clientSecret = fetch('/create-checkout-session', {method: 'POST'})
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret)

  return (
    <CheckoutProvider
      stripe={stripe}
      options={{
        clientSecret,
        elementsOptions: {savedPaymentMethod: {
            // Default is 'auto' in the latest version of Stripe.js - this configuration is optional
            enableSave: 'auto',
          }
        },
      }}
    >
      <CheckoutForm />
    </CheckoutProvider>
  );
};

export default App;
```

## Reuse a previously saved payment method

Each saved payment method is linked to a [Customer](https://docs.stripe.com/api/customers/object.md) object. Before creating the Checkout Session, authenticate your customer, and pass the corresponding [Customer ID](https://docs.stripe.com/api/customers/object.md#customer_object-id) to the Checkout Session.

> In the latest version of Stripe.js, `enableRedisplay` defaults to `auto` when saved payment methods are enabled on the Checkout Session.

The Payment Element automatically redisplays previously saved payment methods for your customer to use during checkout when saved payment methods are enabled on the Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d mode=payment \
  -d ui_mode=custom \
  -d customer="{{CUSTOMER_ID}}"
```

#### HTML + JS

You can explicitly configure the redisplay behavior using [elementsOptions](https://docs.stripe.com/js/custom_checkout/init#custom_checkout_init-options-elementsOptions) on `initCheckout`.

```javascript
const checkout = stripe.initCheckout({
  clientSecret,
  elementsOptions: {
    savedPaymentMethod: {
      // Default is 'auto' in the latest version of Stripe.js - this configuration is optional
      enableSave: 'auto',// Default is 'auto' in the latest version of Stripe.js - this configuration is optional
      enableRedisplay: 'auto',
    }
  }
});
```

#### React

You can explicitly configure the redisplay behavior using [elementsOptions](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider#react_checkout_provider-options-elementsOptions) on the `CheckoutProvider`.

```jsx
import React from 'react';
import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import CheckoutForm from './CheckoutForm';

const App = () => {
  const clientSecret = fetch('/create-checkout-session', {method: 'POST'})
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret)

  return (
    <CheckoutProvider
      stripe={stripe}
      options={{
        clientSecret,
        elementsOptions: {
          savedPaymentMethod: {
            // Default is 'auto' in the latest version of Stripe.js - this configuration is optional
            enableSave: 'auto',// Default is 'auto' in the latest version of Stripe.js - this configuration is optional
            enableRedisplay: 'auto',
          }
        },
      }}
    >
      <CheckoutForm />
    </CheckoutProvider>
  );
};

export default App;
```

## Optional: Build a saved payment method UI

#### HTML + JS

You can build your own saved payment method UI instead of using the built-in UI provided by the Payment Element.

To prevent the Payment Element from handling consent collection and displaying the previously saved payment methods, pass in additional [elementsOptions](https://docs.stripe.com/js/custom_checkout/init#custom_checkout_init-options-elementsOptions) on `initCheckout`.

```javascript
const checkout = stripe.initCheckout({
  clientSecret,
  elementsOptions: {savedPaymentMethod: {
      enableSave: 'never',
      enableRedisplay: 'never',
    }
  }
});
```

#### React

You can build your own saved payment method UI instead of using the built-in UI provided by the Payment Element.

To prevent the Payment Element from handling consent collection and displaying the previously saved payment methods, pass in additional [elementsOptions](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider#react_checkout_provider-options-elementsOptions) on the `CheckoutProvider`.

```jsx
import React from 'react';
import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import CheckoutForm from './CheckoutForm';

const App = () => {
  const clientSecret = fetch('/create-checkout-session', {method: 'POST'})
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret)

  return (
    <CheckoutProvider
      stripe={stripe}
      options={{
        clientSecret,
        elementsOptions: {savedPaymentMethod: {
            enableSave: 'never',
            enableRedisplay: 'never',
          }
        },
      }}
    >
      <CheckoutForm />
    </CheckoutProvider>
  );
};

export default App;
```

### Collect consent

> Global privacy laws are complicated and nuanced. Before implementing the ability to store customer payment method details, work with your legal team to make sure that it complies with your privacy and compliance framework.

In most cases, you must collect a customer’s consent before you save their payment method details. The following example shows how to obtain consent using a checkbox.

#### HTML + JS

```html
<label>
  <input type="checkbox" id="save-payment-method-checkbox" />
  Save my payment information for future purchases
</label>
<button id="pay-button">Pay</button>
<div id="confirm-errors"></div>
```

#### React

```jsx
import React from 'react';

type Props = {
  savePaymentMethod: boolean;
  onSavePaymentMethodChange: (save: boolean) => void;
}
const ConsentCollection = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSavePaymentMethodChange(e.target.checked);
  };
  return (
    <label>
      <input
        type="checkbox"
        checked={props.savePaymentMethod}
        onChange={handleChange}
      />
      Save my payment information for future purchases
    </label>
  );
};

export default ConsentCollection;
```

When you call [confirm](https://docs.stripe.com/js/custom_checkout/confirm), you can indicate to Stripe that your customer has provided consent by passing the `savePaymentMethod` parameter. When you save a customer’s payment details, you’re responsible for complying with all applicable laws, regulations, and network rules.

#### HTML + JS

```js
const checkout = stripe.initCheckout({clientSecret});
const button = document.getElementById('pay-button');
const errors = document.getElementById('confirm-errors');
const checkbox = document.getElementById('save-payment-method-checkbox');
const loadActionsResult = await checkout.loadActions();
if (loadActionsResult.type === 'success') {
  const {actions} = loadActionsResult;
  button.addEventListener('click', () => {
    // Clear any validation errors
    errors.textContent = '';
const savePaymentMethod = checkbox.checked;
    actions.confirm({savePaymentMethod}).then((result) => {
      if (result.type === 'error') {
        errors.textContent = result.error.message;
      }
    });
  });
}
```

#### React

```jsx
import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js/checkout';

type Props = {
  savePaymentMethod: boolean;
}
const PayButton = (props: Props) => {
  const checkoutState = useCheckout();
  const [loading, setLoading] = React.useState(false);
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
  const {confirm} = checkoutState.checkout;
  const handleClick = () => {
    setLoading(true);confirm({savePaymentMethod: props.savePaymentMethod}).then((result) => {
      if (result.type === 'error') {
        setError(result.error)
      }
      setLoading(false);
    })
  };

  return (
    <div>
      <button disabled={!loading} onClick={handleClick}>
        Pay
      </button>
      {error && <div>{error.message}</div>}
    </div>
  )
};

export default PayButton;
```

### Render saved payment methods

Use the [savedPaymentMethods](https://docs.stripe.com/js/custom_checkout/session_object#custom_checkout_session_object-savedPaymentMethods) array on the front end to render the customer’s available payment methods.

> The `savedPaymentMethods` array includes only the payment methods that have [allow\_redisplay](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-allow_redisplay) set to `always`. Follow the steps for [collecting consent](https://docs.stripe.com/payments/save-during-payment.md#collect-consent) from your customer and make sure to properly set the `allow_redisplay` parameter.

#### HTML + JS

```html
<div id="saved-payment-methods"></div>
```

```js
const checkout = stripe.initCheckout({clientSecret});
const loadActionsResult = await checkout.loadActions();
if (loadActionsResult.type === 'success') {
  const container = document.getElementById('saved-payment-methods');
  const {actions} = loadActionsResult;
  actions.getSession().savedPaymentMethods.forEach((pm) => {
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.value = pm.id;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(`Card ending in ${pm.card.last4}`));
    container.appendChild(label);
  });
}
```

#### React

```jsx
import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js/checkout';

type Props = {
  selectedPaymentMethod: string | null;
  onSelectPaymentMethod: (paymentMethod: string) => void;
};
const PaymentMethods = (props: Props) => {const checkoutState = useCheckout();

  if (checkoutState.type === 'loading') {
    return (
      <div>Loading...</div>
    );
  } else if (checkoutState.type === 'error') {
    return (
      <div>Error: {checkoutState.error.message}</div>
    );
  }const {savedPaymentMethods} = checkoutState.checkout;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSelectPaymentMethod(e.target.value);
  };

  return (
    <div>
      {savedPaymentMethods.map((pm) => (
        <label key={pm.id}>
          <input
            type="radio"
            value={pm.id}
            checked={props.selectedPaymentMethod === pm.id}
            onChange={handleOptionChange}
          />
          Card ending in {pm.card.last4}
        </label>
      ))}
    </div>
  );
};

export default PaymentMethods;
```

### Confirm with a saved payment method

When your customer selects a saved payment method and is ready to complete checkout, call [confirm](https://docs.stripe.com/js/custom_checkout/confirm) and pass in the [paymentMethod](https://docs.stripe.com/js/custom_checkout/confirm#custom_checkout_session_confirm-options-paymentMethod) ID.

#### HTML + JS

```html
<button id="pay-button">Pay</button>
```

```js
const checkout = stripe.initCheckout({clientSecret});

const loadActionsResult = await checkout.loadActions();
if (loadActionsResult.type === 'success') {
  const container = document.getElementById('saved-payment-methods');
  const {actions} = loadActionsResult;
  actions.getSession().savedPaymentMethods.forEach((pm) => {
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.value = pm.id;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(`Card ending in ${pm.card.last4}`));
    container.appendChild(label);
  });
}
```

#### React

```jsx
import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js/checkout';

type Props = {
  selectedPaymentMethod: string | null;
}
const PayButton = (props: Props) => {
  const checkoutState = useCheckout();
  const [loading, setLoading] = React.useState(false);

  if (checkoutState.type === 'loading') {
    return (
      <div>Loading...</div>
    );
  } else if (checkoutState.type === 'error') {
    return (
      <div>Error: {checkoutState.error.message}</div>
    );
  }
  const {confirm} = checkoutState.checkout;

  const handleClick = () => {
    setLoading(true);confirm({paymentMethod: props.selectedPaymentMethod}).then((result) => {
      if (result.error) {
        // Confirmation failed. Display the error message.
      }
      setLoading(false);
    })
  };

  return (
    <button disabled={loading} onClick={handleClick}>
      Pay
    </button>
  )
};

export default PayButton;
```

# Payment Intents API

> This is a Payment Intents API for when payment-ui is elements. View the full page at https://docs.stripe.com/payments/save-during-payment?payment-ui=elements.

Use the [Payment Intents API](https://docs.stripe.com/api/payment_intents.md) to save payment details from a purchase. There are several use cases:

- Charge a customer for an e-commerce order and store the details for future purchases.
- Initiate the first payment of a series of recurring payments.
- Charge a deposit and store the details to charge the full amount later.

> #### Card-present transactions
>
> Card-present transactions, such as payments through Stripe Terminal, use a different process for saving the payment method. For details, see [the Terminal documentation](https://docs.stripe.com/terminal/features/saving-payment-details/save-after-payment.md).

## Compliance

You’re responsible for your compliance with all applicable laws, regulations, and network rules when saving a customer’s payment details for future use, such as displaying a customer’s payment method to them in the checkout flow for a future purchase or charging them when they’re not actively using your website or app. Before saving or charging a customer’s payment mathod, make sure you:

- Add terms to your website or app that state how you plan to save payment method details, such as:
  - The customer’s agreement allowing you to initiate a payment or a series of payments on their behalf for specified transactions.
  - The anticipated timing and frequency of payments (for example, if the charges are for scheduled installments, subscription payments, or unscheduled top-ups).
  - How you determine the payment amount.
  - Your cancellation policy, if the payment method is for a subscription service.
- Use a saved payment method for only the purpose stated in your terms.
- Collect explicit consent from the customer for this specific use. For example, include a “Save my payment method for future checkbox.
- Keep a record of your customer’s written agreement to your terms.

## Prerequisites

1. Follow the Payment Intents API guide to [accept a payment](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents).
2. Follow this guide to save the payment method used during a payment so you can retrieve it for use in future payments by the same customer.

## Save payment methods during payment \[Server-side]

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

When creating a [PaymentIntent](https://docs.stripe.com/api/payment_intents/.md) on your server, also create a [CustomerSession](https://docs.stripe.com/api/customer_sessions/.md) providing the [Customer ID](https://docs.stripe.com/api/customers/object.md#customer_object-id) and enabling the [payment\_element](https://docs.stripe.com/api/customer_sessions/object.md#customer_session_object-components-payment_element) component for your session. Configure which saved payment method [features](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components-payment_element-features) you want to enable. For instance, enabling [payment\_method\_save](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components-payment_element-features-payment_method_save) displays a checkbox offering customers to save their payment details for future use.

You can specify `setup_future_usage` on a PaymentIntent or Checkout Session to override the default behavior for saving payment methods. This ensures that you automatically save the payment method for future use, even if the customer doesn’t explicitly choose to save it.

> Allowing buyers to remove their saved payment methods by enabling [payment\_method\_remove](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components-payment_element-features-payment_method_remove) impacts subscriptions that depend on that payment method. Removing the payment method detaches the [PaymentMethod](https://docs.stripe.com/api/payment_methods.md) from that [Customer](https://docs.stripe.com/api/customers.md).

#### Ruby

```ruby

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
Stripe.api_key = '<<YOUR_SECRET_KEY>>'

post '/create-intent-and-customer-session' do
  intent = Stripe::PaymentIntent.create({
    amount: 1099,
    currency: 'usd',
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

Create the Elements instance using the client secrets for both the PaymentIntent and the CustomerSession. Then, use this Elements instance to create a Payment Element.

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

When confirming the PaymentIntent, Stripe.js automatically controls setting [setup\_future\_usage](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-setup_future_usage) on the PaymentIntent and [allow\_redisplay](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-allow_redisplay) on the PaymentMethod, depending on whether the customer checked the box to save their payment details.

### Enforce CVC recollection

Optionally, specify `require_cvc_recollection` [when creating the PaymentIntent](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_options-card-require_cvc_recollection) to enforce CVC recollection when a customer is paying with a card.

### Detect the selection of a saved payment method

To control dynamic content when a saved payment method is selected, listen to the Payment Element `change` event, which is populated with the selected payment method.

```javascript
paymentElement.on('change', function(event) {
  if (event.value.payment_method) {
    // Control dynamic content if a saved payment method is selected
  }
})
```

## Save only payment methods that support reuse \[Server-side]

You can’t make all payment methods [reusable](https://docs.stripe.com/payments/accept-a-payment.md#save-payment-method-details) by enabling `setup_future_usage` in the Payment Intent. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md#additional-api-supportability) to learn more about which payment methods are compatible with `setup_future_usage`.

Instead, you can save payment method details only when a customer selects a payment method that supports it. For example, if you accept both card payments and Giropay (which you can’t reuse), configure `setup_future_usage=off_session` on the `payment_method_options[card]` object.

If the customer declines to have their payment details saved, disable `setup_future_usage` in the PaymentIntent on the server-side. We don’t support making this adjustment on the client-side.

#### Manage payment methods from the Dashboard

You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow.

#### curl

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -d "amount"=1099 \
  -d "currency"="usd" \
  -d "automatic_payment_methods[enabled]"="true" \
  -d "payment_method_options[card][setup_future_usage]"="off_session"
```

#### Listing payment methods manually

Alternatively, you can list `card` and `giropay` using [payment method types](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_types) like in the example below.

#### curl

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -d "amount"=1099 \
  -d "currency"="usd" \
  -d "payment_method_types[]"="card" \
  -d "payment_method_types[]"="giropay" \
  -d "payment_method_options[card][setup_future_usage]"="off_session"
```

## Charge the saved payment method later \[Server-side]

> `bancontact`, `ideal`, and `sofort` are one-time payment methods by default. When set up for future usage, they generate a `sepa_debit` reusable payment method type so you need to use `sepa_debit` to query for saved payment methods.

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

Confirming the PaymentIntent  using iDEAL, Bancontact, or Sofort, generates a [SEPA Direct Debit](https://docs.stripe.com/payments/sepa-debit.md) *PaymentMethod* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs). SEPA Direct Debit is a [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method that transitions to an intermediate `processing` state before transitioning several days later to a `succeeded` or `requires_payment_method` state.

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

## See also

- [Save payment details during in-app payments](https://docs.stripe.com/payments/mobile/save-during-payment.md)
- [Save payment details in a Checkout session](https://docs.stripe.com/payments/checkout/how-checkout-works.md#save-payment-methods)
- [Set up future payments](https://docs.stripe.com/payments/save-and-reuse.md)
- [Handle post-payment events](https://docs.stripe.com/webhooks/handling-payment-events.md)
