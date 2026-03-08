# Explore the Link Authentication Element

Create a single email input for both email collection and Link authentication.

If you already have customer email addresses, [pass them directly to the Payment Element](https://docs.stripe.com/payments/link/payment-element-link.md?elements=pass-email) instead.

Create a single email input for both email collection and Link authentication by adding the [Link Authentication Element](https://docs.stripe.com/payments/elements/link-authentication-element.md) to your Elements integration. If your customer doesn’t have a Link account, and they select one of its supported payment methods (credit card, debit card, or US bank), they’re given the option of signing up.

Alternatively, if your customer already has a Link account, it authenticates them with a one-time-password, then automatically fills their payment details in the Payment Element.
![Use the Link Authentication Element as part of your checkout page](https://b.stripecdn.com/docs-statics-srv/assets/link-authentication-element.a5477f2043e29562f86d6de06f02e6b9.png)

Use the Link Authentication Element as part of your checkout page

## Add the Link Authentication Element

Put the Link Authentication Element at the beginning of the checkout page, followed by the [Address Element](https://docs.stripe.com/elements/address-element.md) (optional), then the Payment Element. The following code [creates](https://docs.stripe.com/js/elements_object/create_link_authentication_element) an instance of the Link Authentication Element and [mounts](https://docs.stripe.com/js/element/mount) it to the DOM:

#### HTML + JS

```javascript
// Enable the skeleton loader UI for the optimal loading experience.
const loader = 'auto';

// Create an elements group from the Stripe instance passing in the clientSecret and enabling the loader UI.
const elements = stripe.elements({clientSecret, loader});

// Create an instance of the Link Authentication Element optionally prefilling a customer's email address.
const linkAuthenticationElement = elements.create("linkAuthentication", {defaultValues: {email: "foo@bar.com"}});

// Passing in defaultValues is optional, but useful if you want to prefill customer information to simplify the customer experience.
const paymentElement = elements.create('payment', {
  defaultValues: {
    billingDetails: {
      name: 'John Doe',
      phone: '888-888-8888',
    },
  },
});

// Mount the Elements to their corresponding DOM node
linkAuthenticationElement.mount("#link-authentication-element");
paymentElement.mount("#payment-element");
```

`linkAuthenticationElement` renders an email address input. When Link matches a customer email with an existing Link account, it sends the customer a secure, one-time code to their phone to authenticate. If the customer successfully authenticates, Stripe displays their Link-saved addresses and payment methods automatically so they can use them. You also need to [register your domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md).

#### React

On your payment page, wrap your payment form with the `Elements` component, passing in the [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret).

​Replace any existing email input fields with `linkAuthenticationElement`. When a customer email matches an existing Link account, Link sends a secure, one-time code to the customer’s phone to authenticate. If they successfully authenticate, Stripe autofills their Link-saved addresses and payment methods.

Use [defaultValues](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-defaultValues) to pass as much customer information as possible, speeding the checkout process for your customers.

```jsx
import {loadStripe} from "@stripe/stripe-js";
import {
  Elements,
  linkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripe = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

// Customize the appearance of Elements using the Appearance API.
const appearance = {/* ... */};

// Enable the skeleton loader UI for the optimal loading experience.
const loader = 'auto';

const CheckoutPage = ({clientSecret}) => (
  <Elements stripe={stripe} options={{clientSecret, appearance, loader}}>
    <CheckoutForm />
  </Elements>
);

export default function CheckoutForm() {
  return (
    <form>
      <h3>Contact info</h3>
      <linkAuthenticationElement
        // Optional prop for prefilling customer information
        options={{
          defaultValues: {
            email: 'foo@bar.com',
          },
        }}
      />
      <h3>Payment</h3>
      <PaymentElement
        // Optional prop for prefilling customer information
        options={{
          defaultValues: {
            billingDetails: {
              name: 'John Doe',
              phone: '888-888-8888',
            },
          },
        }}
      />;
      <button type="submit">Submit</button>
    </form>
  );
}
```

The Link Authentication, Payment, and Address Elements don’t need to be on the same page. You can display each Element where most appropriate in your checkout flow.

> If you use the Link Authentication Element early in your checkout flow to collect email addresses, you don’t need to add it to your shipping or payment pages. Only show it once.

### Retrieve an email address

To retrieve an email address, use the `onChange` prop on `linkAuthenticationElement`. The `onChange` handler fires when a user updates the email field or Link autofills a saved customer email.

```jsx
<linkAuthenticationElement onChange={(event) => {
  setEmail(event.value.email);
}} />
```

## See also

- [Stripe Web Elements](https://docs.stripe.com/payments/elements.md)
- [Payment Element](https://docs.stripe.com/payments/payment-element.md)
- [Address Element](https://docs.stripe.com/elements/address-element.md)
