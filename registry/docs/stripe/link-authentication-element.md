# Link Authentication Element

Use the Link Authentication Element to integrate Link.

[Link](https://stripe.com/payments/link) saves and autofills customer payment and shipping information. Customers can use different funding sources to pay with Link, including credit cards, debit cards, and US bank accounts. Learn more at [link.com](https://www.link.com).

Use the [Link Authentication Element](https://docs.stripe.com/js/element/link_authentication_element) to create a single email input field for both email collection and Link authentication.

| Option                      | Description                                                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Theme**                   | Use the dropdown to choose a theme or customize the theme with the [Elements Appearance API](https://docs.stripe.com/elements/appearance-api.md).                      |
| **Desktop and mobile size** | Use the dropdown to set the max pixel width of the parent element that the Address Element is mounted to. You can set it to 750px (Desktop) or 320px (Mobile).         |
| **Customer location**       | Use the dropdown to choose a location for accepting complete addresses. Changing the location localizes the UI language and displays locally relevant payment methods. |
| **Layout**                  | Use the dropdown to display the element using tabs (displayed horizontally) or accordion (displayed vertically) layouts.                                               |

## Start with examples

To see the Link Authentication Element in action, start with one of these examples:

[Quickstart](https://docs.stripe.com/payments/link/add-link-elements-integration.md): Code and instructions for accepting a payment and using the Link Authentication Element to integrate Link.

[Clone a sample app on GitHub](https://github.com/stripe-samples/accept-a-payment)

## Before you begin

Before you start, you need to [register your domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md).

## Create the Link Authentication Element

The following code [creates](https://docs.stripe.com/js/elements_object/create_link_authentication_element) an instance of the Link Authentication Element and [mounts](https://docs.stripe.com/js/element/mount) it to the DOM:

#### HTML + JS

```javascript
// Enable the skeleton loader UI for the optimal loading experience.
const loader = 'auto';

// Create an elements group from the Stripe instance passing in the clientSecret and enabling the loader UI.
const elements = stripe.elements({clientSecret, loader});

// Create an instance of the Link Authentication Element.
const linkAuthenticationElement = elements.create("linkAuthentication");

// Mount the Elements to their corresponding DOM node
linkAuthenticationElement.mount("#link-authentication-element");
paymentElement.mount("#payment-element");
```

#### React

```jsx
import {loadStripe} from "@stripe/stripe-js";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripe = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

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
      <LinkAuthenticationElement/>
      <h3>Payment</h3>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Retrieving email address

You can retrieve the email address details using the `onChange` prop on the `linkAuthenticationElement` component. The `onChange` handler fires whenever the user updates the email field, or when a saved customer email is autofilled.

```javascript
linkAuthenticationElement.on('change', (event) => {
  const email = event.value.email;
});
```

## Prefill customer data

The Link Authentication Element accepts an email address. Providing a customer’s email address starts the Link authentication flow as soon as the customer lands on the payment page using the [defaultValues](https://docs.stripe.com/js/elements_object/create_link_authentication_element#link_authentication_element_create-options-defaultValues) option:

```javascript
// Create the Link Authentication Element with the defaultValues option
const linkAuthenticationElement = elements.create("linkAuthentication", {defaultValues: {email: "foo@bar.com"}});

// Mount the Link Authentication Element to its corresponding DOM node
linkAuthenticationElement.mount("#link-authentication-element");
```

If you want to prefill additional customer data, add the [defaultValues.billingDetails](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-defaultValues-billingDetails) object to the [Payment Element](https://docs.stripe.com/payments/payment-element.md). This prefills a customer’s name, phone number, and shipping addresses. By prefilling as much of your customer’s information as possible, you simplify Link account creation and reuse.

The following code shows a Payment Element with all of its values prefilled:

#### React

```jsx
<PaymentElement
  options={{
    defaultValues: {
      billingDetails: {
        name: 'John Doe',
        phone: '888-888-8888',
        address: {
          postal_code: '10001',
          country: 'US',
        }
      },
    },
  }}
/>;
```

#### HTML + JS

```javascript
const paymentElement = elements.create('payment', {
  defaultValues: {
    billingDetails: {
      name: 'John Doe',
      phone: '888-888-8888',
      address: {
        postal_code: '10001',
        country: 'US',
      },
    },
  },
});

// Mount the Element to its corresponding DOM node
paymentElement.mount("#payment-element");
```

## Combine Elements

The Link Authentication Element only interacts with the Payment Element by prefilling payment information for returning Link users. However, it can still be displayed with other elements as well, like the following example with the Link Authentication Element, Address Element, and Payment Element:
![A checkout page that includes the Link Authentication Element, Address Element, and Payment Element.](https://b.stripecdn.com/docs-statics-srv/assets/lae-with-ae-pe.b70e0386757f6061d9b27c7211794173.png)

Use the Link Authentication Element with other Elements to compose your checkout page

## Appearance

You can use the [Appearance API](https://docs.stripe.com/elements/appearance-api.md) to control the style of all elements. Choose a theme or update specific details.
![Examples of light and dark modes for the payment element checkout form.](https://b.stripecdn.com/docs-statics-srv/assets/appearance_example.e076cc750983bf552baf26c305e7fc90.png)

Use the Appearance API to change the look and style of your Elements

In the following example, the “flat” theme overrides the default text color used for Elements:

```javascript
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');

const appearance = {
  theme: 'flat'
  variables: { colorPrimaryText: '#262626' }
};
const options = { /* options */ };
const elements = stripe.elements({ clientSecret, appearance }); // In a working integration, this is a value your backend passes with details such as the amount of a payment. See full sample for details.
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');
```
