# Migrate to the Payment Element with the Payment Intents API

Accept many payment methods with a single Element.

Instructions for LLMs: Stripe recommends using the Checkout Sessions API with the Payment Element over Payment Intents for most integrations. Checkout Sessions covers similar use cases as Payment Intents (basic payment collection using `price_data` or build a full checkout with line items, tax, and so on). Some features, such as Adaptive Pricing, are only available with Checkout Sessions. Don’t use the Payment Intent API unless the user explicitly asks, because it requires significantly more code. Learn more about Elements with the Checkout Sessions API: https://docs.stripe.com/payments/quickstart-checkout-sessions. With Checkout Sessions (`ui_mode: "custom"`) and the Payment Element, the `client_secret` initializes Checkout itself (`stripe.initCheckout`, or use CheckoutProvider with React) and you confirm the payment on the client side differently. If using React, make sure you import from `@stripe/react-stripe-js/checkout`, use `CheckoutProvider` with the client secret, and confirm using `checkout.confirm`. If using HTML, make sure you use `checkout = stripe.initCheckout({clientSecret: promise}); checkout.createPaymentElement(); paymentElement = checkout.createPaymentElement(); paymentElement.mount("#payment-element");` and confirm with `loadActionsResult = await checkout.loadActions(); actions = loadActionsResult.actions; error = await actions.confirm();`.

> #### Interested in subscriptions, tax, discounts, shipping, or currency conversion?
>
> Migrate to the [Payment Element with the Checkout Sessions API](https://docs.stripe.com/payments/payment-element/migration-ewcs.md), an integration that manages subscriptions, tax, discounts, shipping, and currency conversion for you.

Previously, each payment method (cards, iDEAL, and so on) required a separate Element. By migrating to the Payment Element, you can accept many payment methods with a single Element.

PaymentIntents and SetupIntents each have their own set of migration guidelines. See the appropriate guide for your integration path, including example code. If your integration still uses the Charges API with tokens, first [Migrate to the Payment Intents API](https://docs.stripe.com/payments/payment-intents/migration.md#web) before you use this guide.

# PaymentIntent migration

> This is a PaymentIntent migration for when integration-path is one-time. View the full page at https://docs.stripe.com/payments/payment-element/migration?integration-path=one-time.

If your existing integration uses the [Payment Intents](https://docs.stripe.com/payments/payment-intents.md) API to create and track payments or save card details during a payment, follow the steps below to use the Payment Element.

## Enable payment methods

> This integration path doesn’t support BLIK or pre-authorized debits that use the Automated Clearing Settlement System (ACSS). You also can’t use `customer_balance` with dynamic payment methods when the deferred intent is created client-side. The client-side deferred-intent flow can’t include a [Customer](https://docs.stripe.com/api/customers/object.md), and `customer_balance` requires a `Customer` on the [PaymentIntent](https://docs.stripe.com/api/payment_intents.md), so it’s excluded to avoid errors. To use `customer_balance`, create the `PaymentIntent` server-side with a `Customer` and return its `client_secret` to the client.

View your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) and enable the payment methods you want to support. You need at least one payment method enabled to create a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods).

By default, Stripe enables cards and other prevalent payment methods that can help you reach more customers, but we recommend turning on additional payment methods that are relevant for your business and customers. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md) for product and payment method support, and our [pricing page](https://stripe.com/pricing/local-payment-methods) for fees.

## Update Elements instance \[Client-side]

Next, update your client-side code to pass `mode`, `currency`, and `amount` when you create the Elements instance. For use with a PaymentIntent, set the `mode` to `'payment'` and the `currency` and `amount` to what you’ll charge your customer.

#### Javascript

### Before

```javascript
const stripe =
    Stripe('<<YOUR_PUBLISHABLE_KEY>>');
const elements = stripe.elements();
```

### After

```javascript
const stripe =
    Stripe('<<YOUR_PUBLISHABLE_KEY>>');
const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
};
const elements = stripe.elements(options);
```

#### React

### Before

```jsx
 const stripePromise =
     loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

 function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
```

### After

```jsx
const stripePromise =
    loadStripe('<<YOUR_PUBLISHABLE_KEY>>');
const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
};

function App() {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
```

## Optional: Save payment details during a payment

If your existing integration also saves payment details during a payment, use the `setup_future_usage` option when creating the Elements group instead of passing it at the confirm payment stage with `stripe.confirmCardPayment`. The Payment Element will use this information to display additional input fields and show mandates as needed.

> You can’t save some payment methods during payments. You can still enable these payment methods for other use cases, but customers won’t see them as an option when setting up future payments. See [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md) for more details about what’s supported.

#### Javascript

```javascript
const stripe =
    Stripe('<<YOUR_PUBLISHABLE_KEY>>');
const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,setup_future_usage: 'off_session',
};
const elements = stripe.elements(options);
```

#### React

```jsx
const stripePromise =
    loadStripe('<<YOUR_PUBLISHABLE_KEY>>');
const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,setup_future_usage: 'off_session',
};

function App() {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
```

Pass `setup_future_usage` when creating your PaymentIntent.

#### curl

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -d "customer"="{{CUSTOMER_ID}}" \-d "setup_future_usage"= "off_session" \
  -d "amount"=1099 \
  -d "currency"="usd" \
```

## Optional: Additional Elements options \[Client-side]

The [Elements object](https://docs.stripe.com/js/elements_object/create_without_intent) accepts additional options that influence payment collection. Based on the options provided, the Payment Element displays available payment methods from those you’ve enabled. Learn more about [payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md).

Make sure the Elements options you provide (such as `captureMethod`, `setupFutureUsage`, and `paymentMethodOptions`) match the equivalent parameters you pass when creating and confirming the Intent. Mismatched parameters can result in unexpected behavior or errors.

| Property                     | Type                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Required                              |
| ---------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `mode`                       | - `payment`

- `setup`
- `subscription`         | Indicates whether the Payment Element is used with a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods), *SetupIntent* (The Setup Intents API lets you build dynamic flows for collecting payment method details for future payments. It tracks the lifecycle of a payment setup flow and can trigger additional authentication steps if required by law or by the payment method), or *Subscription* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis). | Yes                                   |
  | `currency`                   | `string`                                           | The currency of the amount to charge the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes                                   |
  | `amount`                     | `number`                                           | The amount to charge the customer, shown in Apple Pay, Google Pay, or BNPL UIs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | For `payment` and `subscription` mode |
  | `setupFutureUsage`           | - `off_session`
- `on_session`                   | Indicates that you intend to make future payments with the payment details collected by the Payment Element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | No                                    |
  | `captureMethod`              | - `automatic`
- `automatic_async`
- `manual`   | Controls when to capture the funds from the customer’s account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No                                    |
  | `onBehalfOf`                 | `string`                                           | Connect only. The Stripe account ID, which is the business of record. See [use cases](https://docs.stripe.com/connect/charges.md) to determine if this option is relevant for your integration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No                                    |
  | `paymentMethodTypes`         | `string[]`                                         | A list of payment method types to render. You can omit this attribute to manage your payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No                                    |
  | `paymentMethodConfiguration` | `string`                                           | The [payment method configuration](https://docs.stripe.com/api/payment_method_configurations.md) to use when managing your payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). If not specified, your default configuration is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No                                    |
  | `paymentMethodCreation`      | `manual`                                           | Allows PaymentMethods to be created from the Elements instance using [stripe.createPaymentMethod](https://docs.stripe.com/js/payment_methods/create_payment_method_elements).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | No                                    |
  | `paymentMethodOptions`       | `{us_bank_account: {verification_method: string}}` | Verification options for the `us_bank_account` payment method. Accepts the same verification methods as [Payment Intents](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_options-us_bank_account-verification_method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No                                    |
  | `paymentMethodOptions`       | `{card: {installments: {enabled: boolean}}}`       | Allows manually enabling the card installment plan selection UI if applicable when you aren’t managing your payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). You must set `mode='payment'` *and* explicitly specify `paymentMethodTypes`. Otherwise an error is raised. Incompatible with `paymentMethodCreation='manual'`.                                                                                                                                                                                                                                                                                                                                                                                    | No                                    |

## Add the Payment Element \[Client-side]

If you’re using [React Stripe.js](https://github.com/stripe/react-stripe-js), update to the latest package to use the Payment Element.

You can now replace the Card Element and individual payment methods Elements with the Payment Element. The Payment Element automatically adjusts to collect input fields based on the payment method and country (for example, full billing address collection for SEPA Direct Debit) so you don’t have to maintain customized input fields anymore.

The following example replaces `CardElement` with `PaymentElement`:

#### JavaScript

```html
<form id="payment-form"><div id="payment-element">
    <!-- Mount the Payment Element here -->
  </div>
  <button id="submit">Submit</button>
</form>
```

```javascript
const paymentElement = elements.create("payment");
paymentElement.mount("#payment-element");
```

If your payment flow already always collects details like the customer’s name or email address, you can prevent the Payment Element from collecting this information by passing the [fields](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-fields) option when creating the Payment Element. If you disable the collection of a certain field, you must pass that same data back with [stripe.confirmPayment](https://docs.stripe.com/js/payment_intents/confirm_payment).

## Update your PaymentIntent creation call \[Server-side]

The Payment Element allows you to accept multiple payment methods. You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow. We prioritize payment methods that increase conversion and are most relevant to the customer’s currency and location.

Any of the additional elements options passed when creating the Elements group in the earlier step should also be passed when creating the PaymentIntent.

#### curl

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -H "Stripe-Version: 2026-02-25.clover" \
  -d "amount"=1099 \
  -d "currency"="usd" \-d "automatic_payment_methods[enabled]"=true \
```

> Each payment method needs to support the currency passed in the PaymentIntent and your business needs to be based in one of the countries each payment method supports. For more details about what’s supported, see the [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md).

## Update the submit handler \[Client-side]

Instead of using individual confirm methods like `stripe.confirmCardPayment` or `stripe.confirmP24Payment`, use [stripe.confirmPayment](https://docs.stripe.com/js/payment_intents/confirm_payment) to collect payment information and submit it to Stripe.

To confirm the PaymentIntent, make the following updates to your submit handler:

- Call `await elements.submit()` to trigger form validation and collect any data required for [wallets](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-wallets).
- Optional: Move PaymentIntent creation to the submit handler. This way you only create the PaymentIntent when you’re sure of the final amount.
- Pass the `elements` instance you used to create the Payment Element and the `clientSecret` from the PaymentIntent as parameters to `stripe.confirmPayment`.

When called, `stripe.confirmPayment` attempts to complete any [required actions](https://docs.stripe.com/payments/paymentintents/lifecycle.md), such as authenticating your customers by displaying a 3DS dialog or redirecting them to a bank authorization page. When confirmation is complete, users are directed to the `return_url` you configured, which normally corresponds to a page on your website that [provides the status of the payment](https://docs.stripe.com/payments/accept-a-payment.md#web-post-payment).

If you want to keep the same checkout flow for card payments and only redirect for redirect-based payment methods, you can set [redirect](https://docs.stripe.com/js/payment_intents/confirm_payment#confirm_payment_intent-options-redirect) to `if_required`.

The following code example replaces `stripe.confirmCardPayment` with `stripe.confirmPayment`:

### Before

```javascript
// Create the PaymentIntent and obtain clientSecret
const res = await fetch("/create-intent", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
});

const {client_secret: clientSecret} = await res.json();

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe) {
    // Stripe.js hasn't yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }

  setLoading(true);


  if (error) {
    handleError(error);
  }
};
```

### After

```javascript
const handleSubmit = async (event) => {
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
    headers: {"Content-Type": "application/json"},
  });

  const {client_secret: clientSecret} = await res.json();
// Use the clientSecret and Elements instance to confirm the setup
  const {error} = await stripe.confirmPayment({
    elements,
    clientSecret,
    confirmParams: {
      return_url: 'https://example.com/order/123/complete',
    },
    // Uncomment below if you only want redirect for redirect-based payments
    // redirect: "if_required",
  });

  if (error) {
    handleError(error);
  }
};
```

## Optional: Recollect a CVC

When creating subsequent payments on a saved card, you might want to re-collect the CVC of the card as an additional fraud measure to verify the user.

Start by creating a PaymentIntent on your server with the amount, currency, your [Customer](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-customer) ID, and [require\_cvc\_recollection](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_options-card-require_cvc_recollection). [List](https://docs.stripe.com/api/payment_methods/list.md) the *PaymentMethods* (PaymentMethods represent your customer's payment instruments, used with the Payment Intents or Setup Intents APIs) associated with your *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments) to determine which PaymentMethods to show for CVC re-collection.

After passing the PaymentIntent’s client secret to the browser, you’re ready to re-collect CVC information with Stripe Elements on your client. Use the `cardCvc` Element to re-collect a CVC value from your user, and then confirm the payment from your client using [stripe.confirmCardPayment](https://docs.stripe.com/js.md#stripe-confirm-card-payment). Set `payment_method` to your PaymentMethod ID, and `payment_method_options[card][cvc]` to your `cardCvc` Element.

```javascript
const result = await stripe.confirmCardPayment(clientSecret, {
  payment_method: '{{PAYMENT_METHOD_ID}}',
  payment_method_options: {
    card: {
      cvc: cardCvcElement
    }
  },
});

if (result.error) {
  // Show error to your customer
  console.log(result.error.message);
} else {
  if (result.paymentIntent.status === 'succeeded') {
    // Show a success message to your customer
    // There's a risk of the customer closing the window before callback
    // execution. Set up a webhook or plugin to listen for the
    // payment_intent.succeeded event that handles any business critical
    // post-payment actions.
  }
}
```

A payment might succeed even with a failed CVC check. To prevent this, configure your [Radar rules](https://docs.stripe.com/radar/rules.md#traditional-bank-checks) to block payments when CVC verification fails.

## Handle post-payment events \[Server-side]

Stripe sends a [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) event when the payment completes. Use the [Dashboard webhook tool](https://dashboard.stripe.com/webhooks) or follow the [webhook guide](https://docs.stripe.com/webhooks/quickstart.md) to receive these events and run actions, such as sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow.

Listen for these events rather than waiting on a callback from the client. On the client, the customer could close the browser window or quit the app before the callback executes, and malicious clients could manipulate the response. Setting up your integration to listen for asynchronous events is what enables you to accept [different types of payment methods](https://stripe.com/payments/payment-methods-guide) with a single integration.

In addition to handling the `payment_intent.succeeded` event, we recommend handling these other events when collecting payments with the Payment Element:

| Event                                                                                                                           | Description                                                                                                                                                                                                                                                                         | Action                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md?lang=php#event_types-payment_intent.succeeded)           | Sent when a customer successfully completes a payment.                                                                                                                                                                                                                              | Send the customer an order confirmation and *fulfill* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) their order. |
| [payment\_intent.processing](https://docs.stripe.com/api/events/types.md?lang=php#event_types-payment_intent.processing)         | Sent when a customer successfully initiates a payment, but the payment has yet to complete. This event is most commonly sent when the customer initiates a bank debit. It’s followed by either a `payment_intent.succeeded` or `payment_intent.payment_failed` event in the future. | Send the customer an order confirmation that indicates their payment is pending. For digital goods, you might want to fulfill the order before waiting for payment to complete.                  |
| [payment\_intent.payment\_failed](https://docs.stripe.com/api/events/types.md?lang=php#event_types-payment_intent.payment_failed) | Sent when a customer attempts a payment, but the payment fails.                                                                                                                                                                                                                     | If a payment transitions from `processing` to `payment_failed`, offer the customer another attempt to pay.                                                                                       |

## Test the integration

#### Cards

| Card number         | Scenario                                                                                                                                                                                                                                                                                      | How to test                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 4242424242424242    | The card payment succeeds and doesn’t require authentication.                                                                                                                                                                                                                                 | Fill out the credit card form using the credit card number with any expiration, CVC, and postal code. |
| 4000002500003155    | The card payment requires *authentication* (Strong Customer Authentication (SCA) is a regulatory requirement in effect as of September 14, 2019, that impacts many European online payments. It requires customers to use two-factor authentication like 3D Secure to verify their purchase). | Fill out the credit card form using the credit card number with any expiration, CVC, and postal code. |
| 4000000000009995    | The card is declined with a decline code like `insufficient_funds`.                                                                                                                                                                                                                           | Fill out the credit card form using the credit card number with any expiration, CVC, and postal code. |
| 6205500000000000004 | The UnionPay card has a variable length of 13-19 digits.                                                                                                                                                                                                                                      | Fill out the credit card form using the credit card number with any expiration, CVC, and postal code. |

#### Wallets

| Payment method | Scenario                                                                                                                                                                     | How to test                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alipay         | Your customer successfully pays with a redirect-based and [immediate notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method. | Choose any redirect-based payment method, fill out the required details, and confirm the payment. Then click **Complete test payment** on the redirect page. |

#### Bank redirects

| Payment method                         | Scenario                                                                                                                                                                                        | How to test                                                                                                                                                                                             |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BECS Direct Debit                      | Your customer successfully pays with BECS Direct Debit.                                                                                                                                         | Fill out the form using the account number `900123456` and BSB `000000`. The confirmed PaymentIntent initially transitions to `processing`, then transitions to the `succeeded` status 3 minutes later. |
| BECS Direct Debit                      | Your customer’s payment fails with an `account_closed` error code.                                                                                                                              | Fill out the form using the account number `111111113` and BSB `000000`.                                                                                                                                |
| Bancontact, EPS, iDEAL, and Przelewy24 | Your customer fails to authenticate on the redirect page for a redirect-based and immediate notification payment method.                                                                        | Choose any redirect-based payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page.                                                |
| Pay by Bank                            | Your customer successfully pays with a redirect-based and [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method.                      | Choose the payment method, fill out the required details, and confirm the payment. Then click **Complete test payment** on the redirect page.                                                           |
| Pay by Bank                            | Your customer fails to authenticate on the redirect page for a redirect-based and delayed notification payment method.                                                                          | Choose the payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page.                                                               |
| BLIK                                   | BLIK payments fail in a variety of ways—immediate failures (for example, the code is expired or invalid), delayed errors (the bank declines) or timeouts (the customer didn’t respond in time). | Use email patterns to [simulate the different failures.](https://docs.stripe.com/payments/blik/accept-a-payment.md#simulate-failures)                                                                   |

#### Bank debits

| Payment method    | Scenario                                                                                          | How to test                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SEPA Direct Debit | Your customer successfully pays with SEPA Direct Debit.                                           | Fill out the form using the account number `AT321904300235473204`. The confirmed PaymentIntent initially transitions to processing, then transitions to the succeeded status three minutes later. |
| SEPA Direct Debit | Your customer’s payment intent status transitions from `processing` to `requires_payment_method`. | Fill out the form using the account number `AT861904300235473202`.                                                                                                                                |

#### Vouchers

| Payment method | Scenario                                          | How to test                                                                                            |
| -------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Boleto, OXXO   | Your customer pays with a Boleto or OXXO voucher. | Select Boleto or OXXO as the payment method and submit the payment. Close the dialog after it appears. |

See [Testing](https://docs.stripe.com/testing.md) for additional information to test your integration.

# SetupIntent migration

> This is a SetupIntent migration for when integration-path is future. View the full page at https://docs.stripe.com/payments/payment-element/migration?integration-path=future.

If your existing integration uses the [Setup Intents](https://docs.stripe.com/payments/setup-intents.md) API for future payments, follow the steps below to use the Payment Element.

## Enable payment methods

> This integration path doesn’t support BLIK or pre-authorized debits that use the Automated Clearing Settlement System (ACSS). You also can’t use `customer_balance` with dynamic payment methods when the deferred intent is created client-side. The client-side deferred-intent flow can’t include a [Customer](https://docs.stripe.com/api/customers/object.md), and `customer_balance` requires a `Customer` on the [PaymentIntent](https://docs.stripe.com/api/payment_intents.md), so it’s excluded to avoid errors. To use `customer_balance`, create the `PaymentIntent` server-side with a `Customer` and return its `client_secret` to the client.

View your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) and enable the payment methods you want to support. You need at least one payment method enabled to create a *SetupIntent* (The Setup Intents API lets you build dynamic flows for collecting payment method details for future payments. It tracks the lifecycle of a payment setup flow and can trigger additional authentication steps if required by law or by the payment method).

By default, Stripe enables cards and other prevalent payment methods that can help you reach more customers, but we recommend turning on additional payment methods that are relevant for your business and customers. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md) for product and payment method support, and our [pricing page](https://stripe.com/pricing/local-payment-methods) for fees.

## Update Elements instance \[Client-side]

Next, update your client-side code to pass the `mode` and `currency` when you create the Elements instance. For use with a SetupIntent, set the `mode` to `'setup'` and the `currency` to what you’ll charge your customer in the future.

#### Javascript

### Before

```javascript
const stripe =
    Stripe('<<YOUR_PUBLISHABLE_KEY>>');
const elements = stripe.elements();
```

### After

```javascript
const stripe =
    Stripe('<<YOUR_PUBLISHABLE_KEY>>');
const options = {
  mode: 'setup',
  currency: 'usd',
};
const elements = stripe.elements(options);
```

#### React

### Before

```jsx
 const stripePromise =
     loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

 function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
```

### After

```jsx
const stripePromise =
    loadStripe('<<YOUR_PUBLISHABLE_KEY>>');
const options = {
  mode: 'setup',
  currency: 'usd',
};

function App() {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
```

## Optional: Additional Elements options \[Client-side]

The [Elements object](https://docs.stripe.com/js/elements_object/create_without_intent) accepts additional options that influence payment collection. Based on the options provided, the Payment Element displays available payment methods from those you’ve enabled. Learn more about [payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md).

Make sure the Elements options you provide (such as `captureMethod`, `setupFutureUsage`, and `paymentMethodOptions`) match the equivalent parameters you pass when creating and confirming the Intent. Mismatched parameters can result in unexpected behavior or errors.

| Property                     | Type                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Required                              |
| ---------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `mode`                       | - `payment`

- `setup`
- `subscription`         | Indicates whether the Payment Element is used with a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods), *SetupIntent* (The Setup Intents API lets you build dynamic flows for collecting payment method details for future payments. It tracks the lifecycle of a payment setup flow and can trigger additional authentication steps if required by law or by the payment method), or *Subscription* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis). | Yes                                   |
  | `currency`                   | `string`                                           | The currency of the amount to charge the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes                                   |
  | `amount`                     | `number`                                           | The amount to charge the customer, shown in Apple Pay, Google Pay, or BNPL UIs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | For `payment` and `subscription` mode |
  | `setupFutureUsage`           | - `off_session`
- `on_session`                   | Indicates that you intend to make future payments with the payment details collected by the Payment Element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | No                                    |
  | `captureMethod`              | - `automatic`
- `automatic_async`
- `manual`   | Controls when to capture the funds from the customer’s account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No                                    |
  | `onBehalfOf`                 | `string`                                           | Connect only. The Stripe account ID, which is the business of record. See [use cases](https://docs.stripe.com/connect/charges.md) to determine if this option is relevant for your integration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | No                                    |
  | `paymentMethodTypes`         | `string[]`                                         | A list of payment method types to render. You can omit this attribute to manage your payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No                                    |
  | `paymentMethodConfiguration` | `string`                                           | The [payment method configuration](https://docs.stripe.com/api/payment_method_configurations.md) to use when managing your payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). If not specified, your default configuration is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No                                    |
  | `paymentMethodCreation`      | `manual`                                           | Allows PaymentMethods to be created from the Elements instance using [stripe.createPaymentMethod](https://docs.stripe.com/js/payment_methods/create_payment_method_elements).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | No                                    |
  | `paymentMethodOptions`       | `{us_bank_account: {verification_method: string}}` | Verification options for the `us_bank_account` payment method. Accepts the same verification methods as [Payment Intents](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_options-us_bank_account-verification_method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | No                                    |
  | `paymentMethodOptions`       | `{card: {installments: {enabled: boolean}}}`       | Allows manually enabling the card installment plan selection UI if applicable when you aren’t managing your payment methods in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). You must set `mode='payment'` *and* explicitly specify `paymentMethodTypes`. Otherwise an error is raised. Incompatible with `paymentMethodCreation='manual'`.                                                                                                                                                                                                                                                                                                                                                                                    | No                                    |

## Add the Payment Element \[Client-side]

If you’re using [React Stripe.js](https://github.com/stripe/react-stripe-js), update to the latest package to use the Payment Element.

You can now replace the Card Element and individual payment methods Elements with the Payment Element. The Payment Element automatically adjusts to collect input fields based on the payment method and country (for example, full billing address collection for SEPA Direct Debit) so you don’t have to maintain customized input fields anymore.

The following example replaces `CardElement` with `PaymentElement`:

#### JavaScript

```html
<form id="payment-form"><div id="payment-element">
    <!-- Mount the Payment Element here -->
  </div>
  <button id="submit">Submit</button>
</form>
```

```javascript
const paymentElement = elements.create("payment");
paymentElement.mount("#payment-element");
```

If your payment flow already always collects details like the customer’s name or email address, you can prevent the Payment Element from collecting this information by passing the [fields](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-fields) option when creating the Payment Element. If you disable the collection of a certain field, you must pass that same data back with [stripe.confirmSetup](https://docs.stripe.com/js/setup_intents/confirm_setup).

## Update your SetupIntent creation call \[Server-side]

Because the Payment Element allows you to accept multiple payment methods, we recommend using `automatic_payment_methods`. When you enable it, Stripe evaluates the currency, payment method restrictions, and other parameters to determine the list of  payment methods available for your customers. We prioritize payment methods that increase conversion and are most relevant to the currency and location of the customer.

Add the `automatic_payment_methods` attribute to the endpoint on your server that creates the SetupIntent.

Any of the additional elements options passed when creating the Elements group in the earlier step should also be passed when creating the SetupIntent.

#### curl

```bash
curl https://api.stripe.com/v1/setup_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -H "Stripe-Version: 2026-02-25.clover" \
  -d "customer"="{{CUSTOMER_ID}}" \-d "automatic_payment_methods[enabled]"=true
```

> You can’t save some payment methods for future payments. For more information, see [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md).

## Update the submit handler \[Client-side]

Instead of using individual confirm methods like `stripe.confirmCardSetup` or `stripe.confirmP24Setup`, use [stripe.confirmSetup](https://docs.stripe.com/js/setup_intents/confirm_setup) to collect payment information and submit it to Stripe.

To confirm the SetupIntent, make the following updates to your submit handler:

- Call `await elements.submit()` to trigger form validation and collect any data required for [wallets](https://docs.stripe.com/js/elements_object/create_payment_element#payment_element_create-options-wallets).
- Optional: Move SetupIntent creation to the submit handler. This way you only create the SetupIntent when the user is ready to submit their payment method details.
- Pass the `elements` instance you used to create the Payment Element and the `clientSecret` from the SetupIntent as parameters to `stripe.confirmSetup`.

When called, `stripe.confirmSetup` attempts to complete any [required actions](https://docs.stripe.com/payments/paymentintents/lifecycle.md), such as authenticating your customers by displaying a 3DS dialog or redirecting them to a bank authorization page. When confirmation is complete, users are directed to the `return_url` you configured, which normally corresponds to a page on your website that provides the status of the `SetupIntent`.

If you want to keep the same flow for saving card payment details and only redirect for redirect-based payment methods, set [redirect](https://docs.stripe.com/js/setup_intents/confirm_setup#confirm_setup_intent-options-redirect) to `if_required`.

The following code examples replaces `stripe.confirmCardSetup` with `stripe.confirmSetup`:

### Before

```javascript
// Create the SetupIntent and obtain clientSecret
const res = await fetch("/create-intent", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
});

const {client_secret: clientSecret} = await res.json();

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe) {
    // Stripe.js hasn't yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }

  setLoading(true);


  if (error) {
    handleError(error);
  }
};
```

### After

```javascript
const handleSubmit = async (event) => {
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
// Create the SetupIntent and obtain clientSecret
  const res = await fetch("/create-intent", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
  });

  const {client_secret: clientSecret} = await res.json();
// Use the clientSecret and Elements instance to confirm the setup
  const {error} = await stripe.confirmSetup({
    elements,
    clientSecret,
    confirmParams: {
      return_url: 'https://example.com/order/123/complete',
    },
    // Uncomment below if you only want redirect for redirect-based payments
    // redirect: "if_required",
  });

  if (error) {
    handleError(error);
  }
};
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
