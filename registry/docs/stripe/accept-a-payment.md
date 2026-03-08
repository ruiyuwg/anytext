# Accept a payment

Securely accept payments online.

Instructions for LLMs: Stripe frequently releases new products and features. Fetch the Stripe best practices skill from https://raw.githubusercontent.com/stripe/ai/refs/heads/main/skills/stripe-best-practices/SKILL.md before implementing.

Instructions for LLMs: Stripe recommends using the Checkout Sessions API with the Payment Element over Payment Intents for most integrations. Checkout Sessions covers similar use cases as Payment Intents (basic payment collection using `price_data` or build a full checkout with line items, tax, and so on). Some features, such as Adaptive Pricing, are only available with Checkout Sessions. Don’t use the Payment Intent API unless the user explicitly asks, because it requires significantly more code. Learn more about Elements with the Checkout Sessions API: https://docs.stripe.com/payments/quickstart-checkout-sessions. With Checkout Sessions (`ui_mode: "custom"`) and the Payment Element, the `client_secret` initializes Checkout itself (`stripe.initCheckout`, or use CheckoutProvider with React) and you confirm the payment on the client side differently. If using React, make sure you import from `@stripe/react-stripe-js/checkout`, use `CheckoutProvider` with the client secret, and confirm using `checkout.confirm`. If using HTML, make sure you use `checkout = stripe.initCheckout({clientSecret: promise}); checkout.createPaymentElement(); paymentElement = checkout.createPaymentElement(); paymentElement.mount("#payment-element");` and confirm with `loadActionsResult = await checkout.loadActions(); actions = loadActionsResult.actions; error = await actions.confirm();`.

Build a payment form or use a prebuilt checkout page to start accepting online payments.

# Stripe-hosted page

> This is a Stripe-hosted page for when payment-ui is checkout and ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=checkout\&ui=stripe-hosted.

Redirect to a Stripe-hosted payment page using [Stripe Checkout](https://docs.stripe.com/payments/checkout.md). See how this integration [compares to Stripe’s other integration types](https://docs.stripe.com/payments/online-payments.md#compare-features-and-availability).

#### Integration effort

Complexity: 2/5

#### Integration type

Redirect to Stripe-hosted payment page

#### UI customization

Limited customization

- 20 preset fonts
- 3 preset border radius
- Custom background and border color
- Custom logo

[Try it out](https://checkout.stripe.dev/)

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

## Redirect your customer to Stripe Checkout \[Client-side] \[Server-side]

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

## Show a success page \[Client-side] \[Server-side]

It’s important for your customer to see a success page after they successfully submit the payment form. Host this success page on your site.

Create a minimal success page:

```html
<html>
  <head><title>Thanks for your order!</title></head>
  <body>
    <h1>Thanks for your order!</h1>
    <p>
      We appreciate your business!
      If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
    </p>
  </body>
</html>
```

Next, update the Checkout Session creation endpoint to use this new page:

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="http://localhost:4242/success.html"
```

> If you want to customize your success page, read the [custom success page](https://docs.stripe.com/payments/checkout/custom-success-page.md) guide.

### Testing

1. Click your checkout button.
2. Fill out the payment details with the test card information:
   - Enter `4242 4242 4242 4242` as the card number.
   - Enter any future date for card expiry.
   - Enter any 3-digit number for CVC.
   - Enter any billing postal code.
3. Click **Pay**.
4. You’re redirected to your new success page.

Next, find the new payment in the Stripe Dashboard. Successful payments appear in the Dashboard’s [list of payments](https://dashboard.stripe.com/payments). When you click a payment, it takes you to the payment details page. The **Checkout summary** section contains billing information and the list of items purchased, which you can use to manually fulfill the order.

## Handle post-payment events

Stripe sends a [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event when a customer completes a Checkout Session payment. Use the [Dashboard webhook tool](https://dashboard.stripe.com/webhooks) or follow the [webhook guide](https://docs.stripe.com/webhooks/quickstart.md) to receive and handle these events, which might trigger you to:

- Send an order confirmation email to your customer.
- Log the sale in a database.
- Start a shipping workflow.

Listen for these events rather than waiting for your customer to be redirected back to your website. Triggering fulfillment only from your Checkout landing page is unreliable. Setting up your integration to listen for asynchronous events allows you to accept [different types of payment methods](https://stripe.com/payments/payment-methods-guide) with a single integration.

Learn more in our [fulfillment guide for Checkout](https://docs.stripe.com/checkout/fulfillment.md).

Handle the following events when collecting payments with the Checkout:

| Event                                                                                                                                        | Description                                                                                | Action                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed)                             | Sent when a customer successfully completes a Checkout Session.                            | Send the customer an order confirmation and *fulfill* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) their order. |
| [checkout.session.async\_payment\_succeeded](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.async_payment_succeeded) | Sent when a payment made with a delayed payment method, such as ACH direct debt, succeeds. | Send the customer an order confirmation and *fulfill* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) their order. |
| [checkout.session.async\_payment\_failed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.async_payment_failed)       | Sent when a payment made with a delayed payment method, such as ACH direct debt, fails.    | Notify the customer of the failure and bring them back on-session to attempt payment again.                                                                                                      |

## Test your integration

To test your Stripe-hosted payment form integration:

1. Create a Checkout Session.
2. Fill out the payment details with a method from the following table.
   - Enter any future date for card expiry.
   - Enter any 3-digit number for CVC.
   - Enter any billing postal code.
3. Click **Pay**. You’re redirected to your `success_url`.
4. Go to the Dashboard and look for the payment on the [Transactions page](https://dashboard.stripe.com/test/payments?status%5B0%5D=successful). If your payment succeeded, you’ll see it in that list.
5. Click your payment to see more details, like a Checkout summary with billing information and the list of purchased items. You can use this information to fulfill the order.

Learn more about [testing your integration](https://docs.stripe.com/testing.md).

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

### Test cards

| Number              | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| 4242 4242 4242 4242 | Succeeds and immediately processes the payment.               |
| 4000 0000 0000 3220 | Requires 3D Secure 2 authentication for a successful payment. |
| 4000 0000 0000 9995 | Always fails with a decline code of `insufficient_funds`.     |

## Optional: Create products and prices

Before you create a Checkout Session, you can create *Products* (Products represent what your business sells—whether that's a good or a service) and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) upfront. Use products to represent different physical goods or levels of service, and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) to represent each product’s pricing. You can [set up your Checkout Session](https://docs.stripe.com/payments/checkout/pay-what-you-want.md) to accept tips and donations, or sell pay-what-you-want products and services.

For example, you can create a T-shirt as a product with a price of 20 USD. This allows you to update and add prices without needing to change the details of your underlying products. You can either create products and prices with the Stripe Dashboard or API. Learn more about [how products and prices work](https://docs.stripe.com/products-prices/how-products-and-prices-work.md).

#### API

The API only requires a `name` to create a [Product](https://docs.stripe.com/api/products.md). Checkout displays the product `name`, `description`, and `images` that you supply.

```curl
curl https://api.stripe.com/v1/products \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name=T-shirt
```

Next, create a [Price](https://docs.stripe.com/api/prices.md) to define how much to charge for your product. This includes how much the product costs and what currency to use.

```curl
curl https://api.stripe.com/v1/prices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d product="{{PRODUCT_ID}}" \
  -d unit_amount=2000 \
  -d currency=usd
```

#### Dashboard

> Copy products created in a sandbox to live mode so that you don’t need to re-create them. In the Product detail view in the Dashboard, click **Copy to live mode** in the upper right corner. You can only do this once for each product created in a sandbox. Subsequent updates to the test product aren’t reflected for the live product.

Make sure you’re in a sandbox by clicking **Sandboxes** within the Dashboard account picker. Next, define the items you want to sell. To create a new product and price:

- Navigate to the [Products](https://dashboard.stripe.com/test/products) section in the Dashboard.
- Click **Add product**.
- Select **One time** when setting the price.

Checkout displays the product name, description, and images that you supply.

Each price you create has an ID. When you create a Checkout Session, reference the price ID and quantity. If you’re selling in multiple currencies, make your Price *multi-currency* (A single Price object can support multiple currencies. Each purchase uses one of the supported currencies for the Price, depending on how you use the Price in your integration). Checkout automatically [determines the customer’s local currency](https://docs.stripe.com/payments/checkout/localize-prices/manual-currency-prices.md) and presents that currency if the Price supports it.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=payment \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  --data-urlencode success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}"
```

## Optional: Prefill customer data \[Server-side]

If you’ve already collected your customer’s email and want to prefill it in the Checkout Session for them, pass [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) when creating a Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  --data-urlencode customer_email="customer@example.com" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

## Optional: Save payment method details \[Server-side]

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

## Optional: Separate authorization and capture \[Server-side]

Stripe supports two-step card payments so you can first authorize a card, then capture funds later. When Stripe authorizes a payment, the card issuer guarantees the funds and places a hold for the payment amount on the customer’s card. You then have a certain amount of time to capture the funds, [depending on the card](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md#auth-capture-limitations)). If you don’t capture the payment before the authorization expires, the payment is cancelled and the issuer releases the held funds.

Separating authorization and capture is useful if you need to take additional actions between confirming that a customer is able to pay and collecting their payment. For example, if you’re selling stock-limited items, you may need to confirm that an item purchased by your customer using Checkout is still available before capturing their payment and fulfilling the purchase. Accomplish this using the following workflow:

1. Confirm that Stripe authorized the customer’s payment method.
2. Consult your inventory management system to confirm that the item is still available.
3. Update your inventory management system to indicate that a customer has purchased the item.
4. Capture the customer’s payment.
5. Inform your customer whether their purchase was successful on your confirmation page.

To indicate that you want to separate authorization and capture, you must set the value of [payment\_intent\_data.capture\_method](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-capture_method) to `manual` when creating the Checkout Session. This instructs Stripe to only authorize the amount on the customer’s card.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d "payment_intent_data[capture_method]"=manual \
  --data-urlencode success_url="https://example.com/success.html"
```

To capture an uncaptured payment, you can use either the [Dashboard](https://dashboard.stripe.com/test/payments?status%5B%5D=uncaptured) or the [capture](https://docs.stripe.com/api/payment_intents/capture.md) endpoint. Programmatically capturing payments requires access to the PaymentIntent created during the Checkout Session, which you can get from the [Session](https://docs.stripe.com/api/payment_intents/capture.md) object.

## Optional: Customer account management \[No code]

Let your customers [manage](https://docs.stripe.com/customer-management.md) their own accounts by sharing a link to your *customer portal* (The customer portal is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details). The customer portal lets customers log in with their email to manage subscriptions, update payment methods, and so on.

## See also

- [Add discounts](https://docs.stripe.com/payments/checkout/discounts.md)
- [Collect taxes](https://docs.stripe.com/payments/checkout/taxes.md)
- [Collect tax IDs](https://docs.stripe.com/tax/checkout/tax-ids.md)
- [Add shipping](https://docs.stripe.com/payments/collect-addresses.md?payment-ui=checkout)
- [Customize your branding](https://docs.stripe.com/payments/checkout/customization.md)

# Embedded form

> This is a Embedded form for when payment-ui is checkout and ui is embedded-form. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=checkout\&ui=embedded-form.

Embed a prebuilt payment form on your site using [Stripe Checkout](https://docs.stripe.com/payments/checkout.md). See how this integration [compares to Stripe’s other integration types](https://docs.stripe.com/payments/online-payments.md#compare-features-and-availability).

#### Integration effort

Complexity: 2/5

#### Integration type

Embed prebuilt payment form on your site

#### UI customization

Limited customization

- 20 preset fonts
- 3 preset border radius
- Custom background and border color
- Custom logo

Use the [branding settings](https://dashboard.stripe.com/settings/branding/checkout) in the Stripe Dashboard to match Checkout to your site design.

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

## Create a Checkout Session \[Server-side]

From your server, create a *Checkout Session* (A Checkout Session represents your customer's session as they pay for one-time purchases or subscriptions through Checkout. After a successful payment, the Checkout Session contains a reference to the Customer, and either the successful PaymentIntent or an active Subscription) and set the [ui\_mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-ui_mode) to `embedded`. You can configure the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md) with [line items](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items) to include and options such as [currency](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-currency).

You can also create a Checkout Session for an [existing customer](https://docs.stripe.com/payments/existing-customers.md?platform=web\&ui=stripe-hosted), allowing you to prefill Checkout fields with known contact information and unify your purchase history for that customer.

To return customers to a custom page that you host on your website, specify that page’s URL in the [return\_url](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-return_url) parameter. Include the `{CHECKOUT_SESSION_ID}` template variable in the URL to retrieve the session’s status on the return page. Checkout automatically substitutes the variable with the Checkout Session ID before redirecting.

Read more about [configuring the return page](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=embedded-form#return-page) and other options for [customizing redirect behavior](https://docs.stripe.com/payments/checkout/custom-success-page.md?payment-ui=embedded-form).

After you create the Checkout Session, use the `client_secret` returned in the response to [mount Checkout](https://docs.stripe.com/payments/accept-a-payment.md#mount-checkout).

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

## Show a return page

After your customer attempts payment, Stripe redirects them to a return page that you host on your site. When you created the Checkout Session, you specified the URL of the return page in the [return\_url](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-return_url) parameter. Read more about other options for [customizing redirect behavior](https://docs.stripe.com/payments/checkout/custom-success-page.md?payment-ui=embedded-form).

When rendering your return page, retrieve the Checkout Session status using the Checkout Session ID in the URL. Handle the result according to the session status as follows:

- `complete`: The payment succeeded. Use the information from the Checkout Session to render a success page.
- `open`: The payment failed or was canceled. Remount Checkout so that your customer can try again.

#### Ruby

```ruby
get '/session-status' do
  session = Stripe::Checkout::Session.retrieve(params[:session_id])

  {status: session.status, customer_email:  session.customer_details.email}.to_json
end
```

```javascript
const session = await fetch(`/session_status?session_id=${session_id}`)
if (session.status == 'open') {
  // Remount embedded Checkout
} else if (session.status == 'complete') {
  // Show success page
  // Optionally use session.payment_status or session.customer_email
  // to customize the success page
}
```

#### Redirect-based payment methods

During payment, some payment methods redirect the customer to an intermediate page, such as a bank authorization page. When they complete that page, Stripe redirects them to your return page.

Learn more about [redirect-based payment methods and redirect behavior](https://docs.stripe.com/payments/checkout/custom-success-page.md?payment-ui=embedded-form#redirect-based-payment-methods).

## Handle post-payment events

Stripe sends a [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event when a customer completes a Checkout Session payment. Use the [Dashboard webhook tool](https://dashboard.stripe.com/webhooks) or follow the [webhook guide](https://docs.stripe.com/webhooks/quickstart.md) to receive and handle these events, which might trigger you to:

- Send an order confirmation email to your customer.
- Log the sale in a database.
- Start a shipping workflow.

Listen for these events rather than waiting for your customer to be redirected back to your website. Triggering fulfillment only from your Checkout landing page is unreliable. Setting up your integration to listen for asynchronous events allows you to accept [different types of payment methods](https://stripe.com/payments/payment-methods-guide) with a single integration.

Learn more in our [fulfillment guide for Checkout](https://docs.stripe.com/checkout/fulfillment.md).

Handle the following events when collecting payments with the Checkout:

| Event                                                                                                                                        | Description                                                                                | Action                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed)                             | Sent when a customer successfully completes a Checkout Session.                            | Send the customer an order confirmation and *fulfill* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) their order. |
| [checkout.session.async\_payment\_succeeded](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.async_payment_succeeded) | Sent when a payment made with a delayed payment method, such as ACH direct debt, succeeds. | Send the customer an order confirmation and *fulfill* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) their order. |
| [checkout.session.async\_payment\_failed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.async_payment_failed)       | Sent when a payment made with a delayed payment method, such as ACH direct debt, fails.    | Notify the customer of the failure and bring them back on-session to attempt payment again.                                                                                                      |

## Test your integration

To test your embedded payment form integration:

1. Create an embedded Checkout Session and mount the payment form on your page.
2. Fill out the payment details with a method from the table below.
   - Enter any future date for card expiry.
   - Enter any 3-digit number for CVC.
   - Enter any billing postal code.
3. Click **Pay**. You’re redirected to your `return_url`.
4. Go to the Dashboard and look for the payment on the [Transactions page](https://dashboard.stripe.com/test/payments?status%5B0%5D=successful). If your payment succeeded, you’ll see it in that list.
5. Click your payment to see more details, like a Checkout summary with billing information and the list of purchased items. You can use this information to fulfill the order.

Learn more about [testing your integration](https://docs.stripe.com/testing.md).

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

## Optional: Add more payment methods

By default, Checkout [supports many payment methods](https://docs.stripe.com/payments/payment-methods/integration-options.md#choose-how-to-add-payment-methods). You have to take additional steps to enable and display some methods, like Apple Pay, Google Pay, and buy now, pay later methods.

### Apple Pay and Google Pay

To accept payments from Apple Pay and Google Pay, you must:

- Enable them in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods). Apple Pay is enabled by default.
- Serve your application over HTTPS in development and production.
- [Register your domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md).
- Serve your application over HTTPS in development and production. You can use a service like [ngrok](https://ngrok.com/) to serve your application for local testing.

In addition, a Checkout Session only displays the Apple Pay button to customers when *all* of the following conditions are true:

- The customer’s device is running macOS version 17 or later or iOS version 17 or later.
- The customer is using the Safari browser.
- The customer has a valid card registered with Apple Pay.

A Checkout Session only displays the Google Pay button to customers when *all* of the following conditions are true:

- The customer’s device is running Chrome 61 or newer.
- The customer has a valid card registered with Google Pay.

> #### Regional testing
>
> Stripe Checkout doesn’t support Apple Pay or Google Pay for Stripe accounts or customers in India. If your IP address is in India, you can’t test your Apple Pay or Google Pay integration, even if the Stripe account is outside India.

## Optional: Create products and prices

Before you create a Checkout Session, you can create *Products* (Products represent what your business sells—whether that's a good or a service) and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) upfront. Use products to represent different physical goods or levels of service, and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) to represent each product’s pricing. You can [set up your Checkout Session](https://docs.stripe.com/payments/checkout/pay-what-you-want.md) to accept tips and donations, or sell pay-what-you-want products and services.

For example, you can create a T-shirt as a product with a price of 20 USD. This allows you to update and add prices without needing to change the details of your underlying products. You can either create products and prices with the Stripe Dashboard or API. Learn more about [how products and prices work](https://docs.stripe.com/products-prices/how-products-and-prices-work.md).

#### API

The API only requires a `name` to create a [Product](https://docs.stripe.com/api/products.md). Checkout displays the product `name`, `description`, and `images` that you supply.

```curl
curl https://api.stripe.com/v1/products \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name=T-shirt
```

Next, create a [Price](https://docs.stripe.com/api/prices.md) to define how much to charge for your product. This includes how much the product costs and what currency to use.

```curl
curl https://api.stripe.com/v1/prices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d product="{{PRODUCT_ID}}" \
  -d unit_amount=2000 \
  -d currency=usd
```

#### Dashboard

> Copy products created in a sandbox to live mode so that you don’t need to re-create them. In the Product detail view in the Dashboard, click **Copy to live mode** in the upper right corner. You can only do this once for each product created in a sandbox. Subsequent updates to the test product aren’t reflected for the live product.

Make sure you’re in a sandbox by clicking **Sandboxes** within the Dashboard account picker. Next, define the items you want to sell. To create a new product and price:

- Navigate to the [Products](https://dashboard.stripe.com/test/products) section in the Dashboard.
- Click **Add product**.
- Select **One time** when setting the price.

Checkout displays the product name, description, and images that you supply.

Each price you create has an ID. When you create a Checkout Session, reference the price ID and quantity. If you’re selling in multiple currencies, make your Price *multi-currency* (A single Price object can support multiple currencies. Each purchase uses one of the supported currencies for the Price, depending on how you use the Price in your integration). Checkout automatically [determines the customer’s local currency](https://docs.stripe.com/payments/checkout/localize-prices/manual-currency-prices.md) and presents that currency if the Price supports it.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d mode=payment \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Optional: Prefill customer data \[Server-side]

If you’ve already collected your customer’s email and want to prefill it in the Checkout Session for them, pass [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) when creating a Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  --data-urlencode customer_email="customer@example.com" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Optional: Save payment method details \[Server-side]

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

## Optional: Customer account management \[No code]

Let your customers [manage](https://docs.stripe.com/customer-management.md) their own accounts by sharing a link to your *customer portal* (The customer portal is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details). The customer portal lets customers log in with their email to manage subscriptions, update payment methods, and so on.

## Optional: Separate authorization and capture \[Server-side]

Stripe supports two-step card payments so you can first authorize a card, then capture funds later. When Stripe authorizes a payment, the card issuer guarantees the funds and places a hold for the payment amount on the customer’s card. You then have a certain amount of time to capture the funds, [depending on the card](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md#auth-capture-limitations)). If you don’t capture the payment before the authorization expires, the payment is cancelled and the issuer releases the held funds.

Separating authorization and capture is useful if you need to take additional actions between confirming that a customer is able to pay and collecting their payment. For example, if you’re selling stock-limited items, you may need to confirm that an item purchased by your customer using Checkout is still available before capturing their payment and fulfilling the purchase. Accomplish this using the following workflow:

1. Confirm that Stripe authorized the customer’s payment method.
2. Consult your inventory management system to confirm that the item is still available.
3. Update your inventory management system to indicate that a customer has purchased the item.
4. Capture the customer’s payment.
5. Inform your customer whether their purchase was successful on your confirmation page.

To indicate that you want to separate authorization and capture, you must set the value of [payment\_intent\_data.capture\_method](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-capture_method) to `manual` when creating the Checkout Session. This instructs Stripe to only authorize the amount on the customer’s card.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d "payment_intent_data[capture_method]"=manual \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

To capture an uncaptured payment, you can use either the [Dashboard](https://dashboard.stripe.com/test/payments?status%5B%5D=uncaptured) or the [capture](https://docs.stripe.com/api/payment_intents/capture.md) endpoint. Programmatically capturing payments requires access to the PaymentIntent created during the Checkout Session, which you can get from the [Session](https://docs.stripe.com/api/payment_intents/capture.md) object.

## Optional: Order fulfillment

Learn how to [programmatically get a notification](https://docs.stripe.com/checkout/fulfillment.md) whenever a customer pays.

## See also

- [Add discounts](https://docs.stripe.com/payments/checkout/discounts.md)
- [Collect taxes](https://docs.stripe.com/payments/checkout/taxes.md)
- [Collect tax IDs](https://docs.stripe.com/tax/checkout/tax-ids.md)
- [Add shipping](https://docs.stripe.com/payments/collect-addresses.md?payment-ui=checkout)
- [Customize your branding](https://docs.stripe.com/payments/checkout/customization.md)

# Checkout Sessions API

> This is a Checkout Sessions API for when payment-ui is elements and api-integration is checkout. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=elements\&api-integration=checkout.

Build a custom payment form using [Stripe Elements](https://docs.stripe.com/payments/elements.md) and the [Checkout Sessions API](https://docs.stripe.com/api/checkout/sessions.md). See how this integration [compares to Stripe’s other integration types](https://docs.stripe.com/payments/online-payments.md#compare-features-and-availability).

The Checkout Sessions API provides built-in support for tax calculation, discounts, shipping, and currency conversion, reducing the amount of custom code you need to write. This is the recommended approach for most integrations. Learn more about [when to use Checkout Sessions instead of PaymentIntents](https://docs.stripe.com/payments/checkout-sessions-and-payment-intents-comparison.md).

The client-side and server-side code builds a checkout form that accepts various payment methods.

#### Integration effort

Complexity: 3/5

#### Integration type

Combine UI components into a custom payment flow

#### UI customization

CSS-level customization with the [Appearance API](https://docs.stripe.com/elements/appearance-api.md)

## Set up the server \[Server-side]

Before you begin, you need to [register](https://dashboard.stripe.com/register) for a Stripe account.

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

Add an endpoint on your server that creates a [Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md) and returns its [`client_secret`](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-client_secret) to your front end. A Checkout Session represents your customer’s session as they pay for one-time purchases or subscriptions. Checkout Sessions expire 24 hours after creation.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d ui_mode=custom \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode return_url="https://example.com/return?session_id={CHECKOUT_SESSION_ID}"
```

## Set up the front end \[Client-side]

#### HTML + JS

Include the Stripe.js script on your checkout page by adding it to the `head` of your HTML file. Always load Stripe.js directly from js.stripe.com to remain PCI compliant. Don’t include the script in a bundle or host a copy of it yourself.

Make sure you’re using the latest Stripe.js version. Learn more about [Stripe.js versioning](https://docs.stripe.com/sdks/stripejs-versioning.md).

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
npm install --save @stripe/react-stripe-js @stripe/stripe-js
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

1. Navigate to your checkout page.
2. Fill out the payment details with a payment method from the following table. For card payments:
   - Enter any future date for card expiry.
   - Enter any 3-digit number for CVC.
   - Enter any billing postal code.
3. Submit the payment to Stripe.
4. Go to the Dashboard and look for the payment on the [Transactions page](https://dashboard.stripe.com/test/payments?status%5B0%5D=successful). If your payment succeeded, you’ll see it in that list.
5. Click your payment to see more details, like billing information and the list of purchased items. You can use this information to [fulfill the order](https://docs.stripe.com/checkout/fulfillment.md).

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

## Optional: Create products and prices

Before you create a Checkout Session, you can create *Products* (Products represent what your business sells—whether that's a good or a service) and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) upfront. Use products to represent different physical goods or levels of service, and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) to represent each product’s pricing. You can [set up your Checkout Session](https://docs.stripe.com/payments/checkout/pay-what-you-want.md) to accept tips and donations, or sell pay-what-you-want products and services.

For example, you can create a T-shirt as a product with a price of 20 USD. This allows you to update and add prices without needing to change the details of your underlying products. You can either create products and prices with the Stripe Dashboard or API. Learn more about [how products and prices work](https://docs.stripe.com/products-prices/how-products-and-prices-work.md).

#### API

The API only requires a `name` to create a [Product](https://docs.stripe.com/api/products.md). Checkout displays the product `name`, `description`, and `images` that you supply.

```curl
curl https://api.stripe.com/v1/products \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name=T-shirt
```

Next, create a [Price](https://docs.stripe.com/api/prices.md) to define how much to charge for your product. This includes how much the product costs and what currency to use.

```curl
curl https://api.stripe.com/v1/prices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d product="{{PRODUCT_ID}}" \
  -d unit_amount=2000 \
  -d currency=usd
```

#### Dashboard

> Copy products created in a sandbox to live mode so that you don’t need to re-create them. In the Product detail view in the Dashboard, click **Copy to live mode** in the upper right corner. You can only do this once for each product created in a sandbox. Subsequent updates to the test product aren’t reflected for the live product.

Make sure you’re in a sandbox by clicking **Sandboxes** within the Dashboard account picker. Next, define the items you want to sell. To create a new product and price:

- Navigate to the [Products](https://dashboard.stripe.com/test/products) section in the Dashboard.
- Click **Add product**.
- Select **One time** when setting the price.

Checkout displays the product name, description, and images that you supply.

Each price you create has an ID. When you create a Checkout Session, reference the price ID and quantity. If you’re selling in multiple currencies, make your Price *multi-currency* (A single Price object can support multiple currencies. Each purchase uses one of the supported currencies for the Price, depending on how you use the Price in your integration). Checkout automatically [determines the customer’s local currency](https://docs.stripe.com/payments/checkout/localize-prices/manual-currency-prices.md) and presents that currency if the Price supports it.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d ui_mode=custom \
  -d mode=payment \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  --data-urlencode return_url="https://example.com/return?session_id={CHECKOUT_SESSION_ID}"
```

## Optional: Prefill customer data \[Server-side]

If you’ve already collected your customer’s email and want to prefill it in the Checkout Session for them, pass [customer\_email](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_email) when creating a Checkout Session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  --data-urlencode customer_email="customer@example.com" \
  -d ui_mode=custom \
  -d mode=payment \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  --data-urlencode return_url="https://example.com/return?session_id={CHECKOUT_SESSION_ID}"
```

## Optional: Save payment method details

Learn how to [accept a payment and save your customer’s payment details](https://docs.stripe.com/payments/save-during-payment.md) for future purchases.

## Optional: Listen for Checkout Session changes

### Listen for Checkout Session changes

You can listen for changes to the [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md) by adding an event listener on the `change` event with [checkout.on](https://docs.stripe.com/js/custom_checkout/change_event).

#### HTML + JS

```javascript
checkout = stripe.initCheckout({
  clientSecret: promise,
  elementsOptions: { appearance },
});

checkout.on('change', (session) => {
  // Handle changes to the checkout session
});
```

#### React

```jsx
import React from 'react';
import { useCheckout } from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {
  const checkoutState = useCheckout();
  if (checkoutState.type === 'success') {
    checkoutState.checkout.on('change', (session) => {
      // Handle changes to the checkout session
    });
  }
};
```

## Optional: Collect billing and shipping addresses

## Collect a billing address

By default, a Checkout Session collects the minimal billing details required for payment through the Payment Element.

### Using the Billing Address Element

You can collect complete billing addresses using the Billing Address Element.

First, pass [billing\_address\_collection=required](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-billing_address_collection) when you create the Checkout Session.

#### HTML + JS

Create a container DOM element to mount the Billing Address Element. Then create an instance of the Billing Address Element using [checkout.createBillingAddressElement](https://docs.stripe.com/js/custom_checkout/create_billing_address_element) and mount it by calling [element.mount](https://docs.stripe.com/js/element/mount), providing either a CSS selector or the container DOM element.

```html
<div id="billing-address"></div>
```

```javascript
const billingAddressElement = checkout.createBillingAddressElement();
billingAddressElement.mount('#billing-address');
```

The Billing Address Element supports the following options:

- [contacts](https://docs.stripe.com/js/custom_checkout/create_billing_address_element#custom_checkout_create_billing_address_element-options-contacts)
- [display](https://docs.stripe.com/js/custom_checkout/create_billing_address_element#custom_checkout_create_billing_address_element-options-display)

#### React

Mount the `BillingAddressElement` component within the `CheckoutProvider`.

```jsx
import React from 'react';
import {BillingAddressElement} from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {
  return (
    <form>
      <BillingAddressElement/>
    </form>
  )
};
```

The Billing Address Element supports the following props:

- [contacts](https://docs.stripe.com/js/custom_checkout/create_billing_address_element#custom_checkout_create_billing_address_element-options-contacts)
- [display](https://docs.stripe.com/js/custom_checkout/create_billing_address_element#custom_checkout_create_billing_address_element-options-display)

### Using a custom form

You can build your own form to collect billing addresses.

- If your checkout page has a distinct address collection step before confirmation, call [updateBillingAddress](https://docs.stripe.com/js/react_stripe_js/checkout/update_billing_address) when your customer submits the address.
- Otherwise, you can submit the address when your customer clicks the “pay” button by passing [billingAddress](https://docs.stripe.com/js/custom_checkout/confirm#custom_checkout_session_confirm-options-billingAddress) to [confirm](https://docs.stripe.com/js/custom_checkout/confirm).

### Collect partial billing addresses

To collect partial billing addresses, such as only the country and postal code, pass [billing\_address\_collection=auto](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-billing_address_collection).

When collecting partial billing addresses, you must [collect addresses manually](https://docs.stripe.com/payments/accept-a-payment.md#collect-billing-addresses-manually). By default, the Payment Element automatically collects the minimal billing details required for payment. To avoid double collection of billing details, pass [fields.billingDetails=never](https://docs.stripe.com/js/custom_checkout/create_payment_element#custom_checkout_create_payment_element-options-fields-billingDetails) when creating the Payment Element. If you only intend to collect a subset of billing details (such as the customer’s name), pass `never` for only the fields you intend to collect yourself.

## Collect a shipping address

To collect a customer’s shipping address, pass the [shipping\_address\_collection](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection) parameter when you create the Checkout Session.

When you collect a shipping address, you must also specify which countries to allow shipping to. Configure the [allowed\_countries](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection-allowed_countries) property with an array of [two-letter ISO country codes](https://www.nationsonline.org/oneworld/country_code_list.htm).

### How to use the Shipping Address Element

You can collect complete shipping addresses with the Shipping Address Element.

#### HTML + JS

Create a container DOM element to mount the Shipping Address Element. Then create an instance of the Shipping Address Element using [checkout.createShippingAddressElement](https://docs.stripe.com/js/custom_checkout/create_shipping_address_element) and mount it by calling [element.mount](https://docs.stripe.com/js/element/mount), providing either a CSS selector or the container DOM element.

```html
<div id="shipping-address"></div>
```

```javascript
const shippingAddressElement = checkout.createShippingAddressElement();
shippingAddressElement.mount('#shipping-address');
```

The Shipping Address Element supports the following options:

- [contacts](https://docs.stripe.com/js/custom_checkout/create_shipping_address_element#custom_checkout_create_shipping_address_element-options-contacts)
- [display](https://docs.stripe.com/js/custom_checkout/create_shipping_address_element#custom_checkout_create_shipping_address_element-options-display)

#### React

Mount the `ShippingAddressElement` component within the `CheckoutProvider`.

```jsx
import React from 'react';
import {ShippingAddressElement} from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {
  return (
    <form>
      <ShippingAddressElement/>
    </form>
  )
};
```

The Shipping Address Element supports the following props:

- [contacts](https://docs.stripe.com/js/custom_checkout/create_shipping_address_element#custom_checkout_create_shipping_address_element-options-contacts)
- [display](https://docs.stripe.com/js/custom_checkout/create_shipping_address_element#custom_checkout_create_shipping_address_element-options-display)

### Listen for Checkout Session changes

You can listen for changes to the [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md) by adding an event listener to handle address-related changes.

#### HTML + JS

Use the [Session object](https://docs.stripe.com/js/custom_checkout/session_object) to render the shipping amount in your checkout form.

```html
<div>
  <h3> Totals </h3>
  <div id="subtotal" ></div>
  <div id="shipping" ></div>
  <div id="total" ></div>
</div>
```

```javascript
const checkout = stripe.initCheckout({clientSecret});
const subtotal = document.getElementById('subtotal');
const shipping = document.getElementById('shipping');
const total = document.getElementById('total');

checkout.on('change', (session) => {
  subtotal.textContent = `Subtotal: ${session.total.subtotal.amount}`;
  shipping.textContent = `Shipping: ${session.total.shippingRate.amount}`;
  total.textContent = `Total: ${session.total.total.amount}`;
});

```

#### React

Use [useCheckout](https://docs.stripe.com/js/react_stripe_js/checkout/use_checkout) to render the shipping cost in your checkout form.

```jsx
import React from 'react';
import {useCheckout, ShippingAddressElement} from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {
  const checkoutState = useCheckout();

  if (checkoutState.type === 'error') {
    return (
      <div>Error: {checkoutState.error.message}</div>
    );
  }

  return (
    <div>
      <div>
        <form>
          <ShippingAddressElement />
        </form>
      </div>
      <div>
        <h2>Checkout Summary</h2>
        {checkoutState.type === 'success' && (
          <>
            <pre>
              {JSON.stringify(checkoutState.checkout.lineItems, null, 2)}
            </pre>
            <h3>Totals</h3>
            <pre>
              Subtotal: {checkoutState.checkout.total.subtotal.amount}
              Shipping: {checkoutState.checkout.total.shippingRate.amount}
              Total: {checkoutState.checkout.total.total.amount}
            </pre>
          </>
        )}
      </div>
    </div>
  )
};
```

### Sync billing and shipping addresses

When you use both a Billing Address Element and Shipping Address Element, you can show a checkbox that lets customers sync their billing and shipping addresses.

#### HTML + JS

Pass the [syncAddressCheckbox](https://docs.stripe.com/js/custom_checkout/init#custom_checkout_init-options-elementsOptions-syncAddressCheckbox) option in `elementsOptions` when initializing Checkout to configure which Address Element shows the checkbox.

```javascript
const checkout = stripe.initCheckout({
  clientSecret,
  elementsOptions: {
    syncAddressCheckbox: 'shipping',
  },
});
```

#### React

Pass the [syncAddressCheckbox](https://docs.stripe.com/js/react_stripe_js/checkout/checkout_provider#react_checkout_provider-options-elementsOptions-syncAddressCheckbox) option in `elementsOptions` to the `CheckoutProvider` to configure which Address Element shows the checkbox.

```jsx
<CheckoutProvider
  stripe={stripePromise}
  options={{
    fetchClientSecret: () => promise,
    elementsOptions: {
      syncAddressCheckbox: 'shipping',
    },
  }}
>
  <CheckoutForm />
</CheckoutProvider>
```

Set the value to `'billing'` or `'shipping'` to choose which Address Element shows the checkbox. Set it to `'none'` to hide the checkbox.

### Use a custom form

You can build your own form to collect shipping addresses.

- If your checkout page has a distinct address collection step before confirmation, call [updateShippingAddress](https://docs.stripe.com/js/react_stripe_js/checkout/update_shipping_address) when your customer submits the address.
- Otherwise, you can submit the address when your customer clicks the “pay” button by passing [shippingAddress](https://docs.stripe.com/js/custom_checkout/confirm#custom_checkout_session_confirm-options-shippingAddress) to [confirm](https://docs.stripe.com/js/custom_checkout/confirm).

## Optional: Separate authorization and capture \[Server-side]

Stripe supports two-step card payments so you can first authorize a card, then capture funds later. When Stripe authorizes a payment, the card issuer guarantees the funds and places a hold for the payment amount on the customer’s card. You then have a certain amount of time to capture the funds, [depending on the card](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md#auth-capture-limitations)). If you don’t capture the payment before the authorization expires, the payment is cancelled and the issuer releases the held funds.

Separating authorization and capture is useful if you need to take additional actions between confirming that a customer is able to pay and collecting their payment. For example, if you’re selling stock-limited items, you may need to confirm that an item purchased by your customer using Checkout is still available before capturing their payment and fulfilling the purchase. Accomplish this using the following workflow:

1. Confirm that Stripe authorized the customer’s payment method.
2. Consult your inventory management system to confirm that the item is still available.
3. Update your inventory management system to indicate that a customer has purchased the item.
4. Capture the customer’s payment.
5. Inform your customer whether their purchase was successful on your confirmation page.

To indicate that you want to separate authorization and capture, you must set the value of [payment\_intent\_data.capture\_method](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-capture_method) to `manual` when creating the Checkout Session. This instructs Stripe to only authorize the amount on the customer’s card.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"={{PRICE_ID}} \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  -d "payment_intent_data[capture_method]"=manual \
  -d return_url={{RETURN_URL}} \
  -d ui_mode=custom
```

To capture an uncaptured payment, you can use either the [Dashboard](https://dashboard.stripe.com/test/payments?status%5B%5D=uncaptured) or the [capture](https://docs.stripe.com/api/payment_intents/capture.md) endpoint. Programmatically capturing payments requires access to the PaymentIntent created during the Checkout Session, which you can get from the [Session](https://docs.stripe.com/api/payment_intents/capture.md) object.

## Optional: Customer account management \[No code]

Let your customers [manage](https://docs.stripe.com/customer-management.md) their own accounts by sharing a link to your *customer portal* (The customer portal is a secure, Stripe-hosted page that lets your customers manage their subscriptions and billing details). The customer portal lets customers log in with their email to manage subscriptions, update payment methods, and so on.

## Optional: Order fulfillment

Learn how to [programmatically get a notification](https://docs.stripe.com/checkout/fulfillment.md?payment-ui=embedded-components) when a customer pays.

## See also

- [Add discounts for one-time payments](https://docs.stripe.com/payments/checkout/discounts.md?payment-ui=embedded-components)
- [Collect taxes](https://docs.stripe.com/payments/checkout/taxes.md?payment-ui=embedded-components)
- [Enable adjustable line item quantities](https://docs.stripe.com/payments/checkout/adjustable-quantity.md?payment-ui=embedded-components)
- [Add one-click buttons](https://docs.stripe.com/elements/express-checkout-element/accept-a-payment.md?payment-ui=embedded-components)

# Payment Intents API

> This is a Payment Intents API for when payment-ui is elements and api-integration is paymentintents. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=elements\&api-integration=paymentintents.

Build a custom payment form using [Stripe Elements](https://docs.stripe.com/payments/elements.md) and the [Payment Intents API](https://docs.stripe.com/api/payment_intents.md). See how this integration [compares to Stripe’s other integration types](https://docs.stripe.com/payments/online-payments.md#compare-features-and-availability).

The Payment Intents API is a lower-level API that you can use to build your own checkout or payments flow, but requires significantly more code and ongoing maintenance. We recommend [Payment Element with Checkout Sessions](https://docs.stripe.com/payments/quickstart-checkout-sessions.md) for most integrations because it covers similar payment flows as Payment Intents. Learn more about [when to use Checkout Sessions instead of PaymentIntents](https://docs.stripe.com/payments/checkout-sessions-and-payment-intents-comparison.md).

The client-side and server-side code builds a checkout form that accepts various payment methods.

#### Integration effort

Complexity: 4/5

#### Integration type

Combine UI components into a custom payment flow

#### UI customization

CSS-level customization with the [Appearance API](https://docs.stripe.com/elements/appearance-api.md)

> #### Interested in using Stripe Tax, discounts, shipping, or currency conversion?
>
> Stripe has a Payment Element integration that manages tax, discounts, shipping, and currency conversion for you. See [build a checkout page](https://docs.stripe.com/payments/quickstart-checkout-sessions.md) to learn more.

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

## Create a PaymentIntent \[Server-side]

> If you want to render the Payment Element without first creating a PaymentIntent, see [Collect payment details before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md?type=payment).

The [PaymentIntent](https://docs.stripe.com/api/payment_intents.md) object represents your intent to collect payment from a customer and tracks charge attempts and state changes throughout the payment process.
A high-level overview of the payments integration this document describes. (See full diagram at https://docs.stripe.com/payments/accept-a-payment)

### Create the PaymentIntent

Create a PaymentIntent on your server with an [amount](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-amount) and [currency](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-currency). In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default. You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow.

Stripe uses your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) to display the payment methods you have enabled. To see how your payment methods appear to customers, enter a transaction ID or set an order amount and currency in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods/review). To override payment methods, manually list any that you want to enable using the [payment\_method\_types](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-payment_method_types) attribute.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "automatic_payment_methods[enabled]"=true
```

> Always decide how much to charge on the server side, a trusted environment, as opposed to the client. This prevents malicious customers from being able to choose their own prices.

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
  <div id="payment-element">
    <!-- placeholder for Elements -->
  </div>
  <button id="submit">Submit</button>
</form>
```

```ruby
get '/checkout' do
  @intent = # ... Fetch or create the PaymentIntent
  erb :checkout
end
```

## Collect payment details \[Client-side]

Collect payment details on the client with the [Payment Element](https://docs.stripe.com/payments/payment-element.md). The Payment Element is a prebuilt UI component that simplifies collecting payment details for a variety of payment methods.

The Payment Element contains an iframe that securely sends payment information to Stripe over an HTTPS connection. Avoid placing the Payment Element within another iframe because some payment methods require redirecting to another page for payment confirmation.

If you choose to use an iframe and want to accept Apple Pay or Google Pay, the iframe must have the [allow](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowpaymentrequest) attribute set to equal `"payment *"`.

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

### Add the Payment Element to your payment page

The Payment Element needs a place to live on your payment page. Create an empty DOM node (container) with a unique ID in your payment form:

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

When the previous form loads, create an instance of the Payment Element and mount it to the container DOM node. Pass the [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret) from the previous step into `options` when you create the [Elements](https://docs.stripe.com/js/elements_object/create) instance:

Handle the client secret carefully because it can complete the charge. Don’t log it, embed it in URLs, or expose it to anyone but the customer.

```javascript
const options = {
  clientSecret: '{{CLIENT_SECRET}}',
  // Fully customizable with appearance API.
  appearance: {/*...*/},
};

// Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in a previous stepconst elements = stripe.elements(options);

// Create and mount the Payment Element
const paymentElementOptions = { layout: 'accordion'};
const paymentElement = elements.create('payment', paymentElementOptions);
paymentElement.mount('#payment-element');

```

#### React

### Set up Stripe.js

Install [React Stripe.js](https://www.npmjs.com/package/@stripe/react-stripe-js) and the [Stripe.js loader](https://www.npmjs.com/package/@stripe/stripe-js) from the npm public registry:

```bash
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

### Add and configure the Elements provider to your payment page

To use the Payment Element component, wrap your checkout page component in an [Elements provider](https://docs.stripe.com/sdks/stripejs-react.md#elements-provider). Call `loadStripe` with your publishable key, and pass the returned `Promise` to the `Elements` provider. Also pass the [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret) from the previous step as `options` to the `Elements` provider.

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
  const options = {
    // passing the client secret obtained in step 3
    clientSecret: '{{CLIENT_SECRET}}',
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

Use the `PaymentElement` component to build your form:

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

Stripe Elements is a collection of drop-in UI components. To further customize your form or collect different customer information, browse the [Elements docs](https://docs.stripe.com/payments/elements.md).

The Payment Element renders a dynamic form that allows your customer to pick a payment method. For each payment method, the form automatically asks the customer to fill in all necessary payment details.

### Customize appearance

Customize the Payment Element to match the design of your site by passing the [appearance object](https://docs.stripe.com/js/elements_object/create#stripe_elements-options-appearance) into `options` when creating the `Elements` provider.

### Collect addresses

By default, the Payment Element only collects the necessary billing address details. Some behavior, such as [calculating tax](https://docs.stripe.com/api/tax/calculations/create.md) or entering shipping details, requires your customer’s full address. You can:

- Use the [Address Element](https://docs.stripe.com/elements/address-element.md) to take advantage of autocomplete and localization features to collect your customer’s full address. This helps ensure the most accurate tax calculation.
- Collect address details using your own custom form.

### Request Apple Pay merchant token

If you’ve configured your integration to [accept Apple Pay payments](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=checkout), we recommend configuring the Apple Pay interface to return a merchant token to enable merchant initiated transactions (MIT). [Request the relevant merchant token type](https://docs.stripe.com/apple-pay/merchant-tokens.md?pay-element=web-pe) in the Payment Element.

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

## Submit the payment to Stripe \[Client-side]

Use [stripe.confirmPayment](https://docs.stripe.com/js/payment_intents/confirm_payment) to complete the payment using details from the Payment Element. Provide a [return\_url](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-return_url) to this function to indicate where Stripe should redirect the user after they complete the payment. Your user may be first redirected to an intermediate site, like a bank authorization page, before being redirected to the `return_url`. Card payments immediately redirect to the `return_url` when a payment is successful.

If you don’t want to redirect for card payments after payment completion, you can set [redirect](https://docs.stripe.com/js/payment_intents/confirm_payment#confirm_payment_intent-options-redirect) to `if_required`. This only redirects customers that check out with redirect-based payment methods.

#### HTML + JS

```javascript
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
const {error} = await stripe.confirmPayment({
    //`Elements` instance that was used to create the Payment Element
    elements,
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

#### React

To call [stripe.confirmPayment](https://docs.stripe.com/js/payment_intents/confirm_payment) from your payment form component, use the [useStripe](https://docs.stripe.com/sdks/stripejs-react.md#usestripe-hook) and [useElements](https://docs.stripe.com/sdks/stripejs-react.md#useelements-hook) hooks.

If you prefer traditional class components over hooks, you can instead use an [ElementsConsumer](https://docs.stripe.com/sdks/stripejs-react.md#elements-consumer).

```jsx
import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
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
      return;
    }
const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
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

export default CheckoutForm;
```

Make sure the `return_url` corresponds to a page on your website that provides the status of the payment. When Stripe redirects the customer to the `return_url`, we provide the following URL query parameters:

| Parameter                      | Description                                                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `payment_intent`               | The unique identifier for the `PaymentIntent`.                                                                                                |
| `payment_intent_client_secret` | The [client secret](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-client_secret) of the `PaymentIntent` object. |

> If you have tooling that tracks the customer’s browser session, you might need to add the `stripe.com` domain to the referrer exclude list. Redirects cause some tools to create new sessions, which prevents you from tracking the complete session.

Use one of the query parameters to retrieve the PaymentIntent. Inspect the [status of the PaymentIntent](https://docs.stripe.com/payments/paymentintents/lifecycle.md) to decide what to show your customers. You can also append your own query parameters when providing the `return_url`, which persist through the redirect process.

#### HTML + JS

```javascript

// Initialize Stripe.js using your publishable key
const stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');

// Retrieve the "payment_intent_client_secret" query parameter appended to
// your return_url by Stripe.js
const clientSecret = new URLSearchParams(window.location.search).get(
  'payment_intent_client_secret'
);

// Retrieve the PaymentIntent
stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
  const message = document.querySelector('#message')

  // Inspect the PaymentIntent `status` to indicate the status of the payment
  // to your customer.
  //
  // Some payment methods will [immediately succeed or fail][0] upon
  // confirmation, while others will first enter a `processing` state.
  //
  // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
  switch (paymentIntent.status) {
    case 'succeeded':
      message.innerText = 'Success! Payment received.';
      break;

    case 'processing':
      message.innerText = "Payment processing. We'll update you when payment is received.";
      break;

    case 'requires_payment_method':
      message.innerText = 'Payment failed. Please try another payment method.';
      // Redirect your user back to your payment page to attempt collecting
      // payment again
      break;

    default:
      message.innerText = 'Something went wrong.';
      break;
  }
});
```

#### React

```jsx
import React, {useState, useEffect} from 'react';
import {useStripe} from '@stripe/react-stripe-js';

const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Success! Payment received.');
            break;

          case 'processing':
            setMessage("Payment processing. We'll update you when payment is received.");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);


  return message;
};

export default PaymentStatus;
```

## Handle post-payment events \[Server-side]

Stripe sends a [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md#event_types-payment_intent.succeeded) event when the payment completes. Use the [Dashboard webhook tool](https://dashboard.stripe.com/webhooks) or follow the [webhook guide](https://docs.stripe.com/webhooks/quickstart.md) to receive these events and run actions, such as sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow.

Listen for these events rather than waiting on a callback from the client. On the client, the customer could close the browser window or quit the app before the callback executes, and malicious clients could manipulate the response. Setting up your integration to listen for asynchronous events is what enables you to accept [different types of payment methods](https://stripe.com/payments/payment-methods-guide) with a single integration.

In addition to handling the `payment_intent.succeeded` event, we recommend handling these other events when collecting payments with the Payment Element:

| Event                                                                                                                           | Description                                                                                                                                                                                                                                                                         | Action                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [payment\_intent.succeeded](https://docs.stripe.com/api/events/types.md?lang=php#event_types-payment_intent.succeeded)           | Sent when a customer successfully completes a payment.                                                                                                                                                                                                                              | Send the customer an order confirmation and *fulfill* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected) their order. |
| [payment\_intent.processing](https://docs.stripe.com/api/events/types.md?lang=php#event_types-payment_intent.processing)         | Sent when a customer successfully initiates a payment, but the payment has yet to complete. This event is most commonly sent when the customer initiates a bank debit. It’s followed by either a `payment_intent.succeeded` or `payment_intent.payment_failed` event in the future. | Send the customer an order confirmation that indicates their payment is pending. For digital goods, you might want to fulfill the order before waiting for payment to complete.                  |
| [payment\_intent.payment\_failed](https://docs.stripe.com/api/events/types.md?lang=php#event_types-payment_intent.payment_failed) | Sent when a customer attempts a payment, but the payment fails.                                                                                                                                                                                                                     | If a payment transitions from `processing` to `payment_failed`, offer the customer another attempt to pay.                                                                                       |

## Test your integration

To test your custom payments integration:

1. Create a Payment Intent and retrieve the client secret.
2. Fill out the payment details with a method from the following table.
   - Enter any future date for card expiry.
   - Enter any 3-digit number for CVC.
   - Enter any billing postal code.
3. Submit the payment to Stripe. You’re redirected to your `return_url`.
4. Go to the Dashboard and look for the payment on the [Transactions page](https://dashboard.stripe.com/test/payments?status%5B0%5D=successful). If your payment succeeded, you’ll see it in that list.
5. Click your payment to see more details, like billing information and the list of purchased items. You can use this information to fulfill the order.

Learn more about [testing your integration](https://docs.stripe.com/testing.md).

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

## Optional: Add more payment methods

The Payment Element [supports many payment methods](https://docs.stripe.com/payments/payment-methods/integration-options.md#choose-how-to-add-payment-methods) by default. You have to take additional steps to enable and display some payment methods.

### Affirm

To begin using Affirm, you must enable it in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). When you create a PaymentIntent with the Affirm payment method, you need to include a [shipping address](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-shipping). This example suggests passing the shipping information on the client after the customer [selects their payment method](https://docs.stripe.com/payments/accept-a-payment.md#web-create-intent). Learn more about using [Affirm](https://docs.stripe.com/payments/affirm.md) with Stripe.

#### HTML + JS

```javascript
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {error} = await stripe.confirmPayment({
    //`Elements` instance that was used to create the Payment Element
    elements,
    confirmParams: {
      return_url: 'https://my-site.com/order/123/complete',shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '1 Street',
          city: 'Seattle',
          state: 'WA',
          postal_code: '95123',
          country: 'US'
        }
      },

    }
  });

  if (error) {
    // This point is reached if there's an immediate error when
    // confirming the payment. Show error to your customer (for example,
    // payment details incomplete)
    const messageContainer = document.querySelector('#error-message');
    messageContainer.textContent = error.message;
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

const CheckoutForm = () => {
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
      return;
    }

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://my-site.com/order/123/complete',shipping: {
          name: 'Jenny Rosen',
          address: {
            line1: '1 Street',
            city: 'Seattle',
            state: 'WA',
            postal_code: '95123',
            country: 'US'
          }
        },

      }
    });


    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example,
      // payment details incomplete)
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

export default CheckoutForm;
```

#### Test Affirm

Learn how to test different scenarios using the following table:

| Scenario                                                         | How to test                                                                               |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Your customer successfully pays with Affirm.                     | Fill out the form (make sure to include a shipping address) and authenticate the payment. |
| Your customer fails to authenticate on the Affirm redirect page. | Fill out the form and click **Fail test payment** on the redirect page.                   |

### Afterpay (Clearpay)

When you create a PaymentIntent with the Afterpay payment method, you need to include a [shipping address](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-shipping). Learn more about using [Afterpay](https://docs.stripe.com/payments/afterpay-clearpay.md) with Stripe.

You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow. The example below uses the [automatic\_payment\_methods](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-automatic_payment_methods-enabled) attribute but you can list `afterpay_clearpay` with [payment method types](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_types). In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default. Regardless of which option you choose, make sure that you enable Afterpay Clearpay in the [Dashboard](https://dashboard.stripe.com/settings/payment_methods).

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "automatic_payment_methods[enabled]"=true \
  -d "shipping[name]"="Jenny Rosen" \
  -d "shipping[address][line1]"="1234 Main Street" \
  -d "shipping[address][city]"="San Francisco" \
  -d "shipping[address][state]"=CA \
  -d "shipping[address][country]"=US \
  -d "shipping[address][postal_code]"=94111
```

#### Test Afterpay (Clearpay)

Learn how to test different scenarios using the following table:

| Scenario                                                           | How to test                                                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Your customer successfully pays with Afterpay.                     | Fill out the form (make sure to include a shipping address) and authenticate the payment. |
| Your customer fails to authenticate on the Afterpay redirect page. | Fill out the form and click **Fail test payment** on the redirect page.                   |

### Apple Pay and Google Pay

When you [enable card payments](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents#create-the-paymentintent), we display Apple Pay and Google Pay for customers whose environment meets the [wallet display conditions](https://docs.stripe.com/testing/wallets.md). To accept payments from these wallets, you must also:

- Enable them in your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods). Apple Pay is enabled by default.
- Serve your application over HTTPS in development and production.
- [Register your domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md).
- [Fetch updates from the server](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=elements\&api-integration=paymentintents#fetch-updates) if you update the amount of a [PaymentIntent](https://docs.stripe.com/api/payment_intents.md) to keep the wallet’s payment modal in sync.

> #### Regional Testing
>
> Stripe Elements doesn’t support Google Pay or Apple Pay for Stripe accounts and customers in India. Therefore, you can’t test your Google Pay or Apple Pay integration if the tester’s IP address is in India, even if the Stripe account is based outside India.

Learn more about using [Apple Pay](https://docs.stripe.com/apple-pay.md) and [Google Pay](https://docs.stripe.com/google-pay.md) with Stripe.

### ACH Direct Debit

When using the Payment Element with the ACH Direct Debit payment method, follow these steps:

1. Create a [Customer object](https://docs.stripe.com/api/customers.md).

   ```curl
   curl -X POST https://api.stripe.com/v1/customers \
     -u "<<YOUR_SECRET_KEY>>:"
   ```

2. Specify the customer ID when creating the `PaymentIntent`.

   ```curl
   curl https://api.stripe.com/v1/payment_intents \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d amount=1099 \
     -d currency=usd \
     -d setup_future_usage=off_session \
     -d customer={{CUSTOMER_ID}} \
     -d "payment_method_types[]"=us_bank_account
   ```

3. Select a [verification method](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-payment_method_options-us_bank_account-verification_method).

When using the ACH Direct Debit payment method with the Payment Element, you can only select `automatic` or `instant`.

Learn more about using [ACH Direct Debit](https://docs.stripe.com/payments/ach-direct-debit.md) with Stripe.

#### Test ACH Direct Debit

| Scenario                                                                           | How to test                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Your customer successfully pays with a US bank account using instant verification. | Select **US bank account** and fill out the form. Click the test institution. Follow the instructions on the modal to link your bank account. Click your payment button.                                                                                                                                                                       |
| Your customer successfully pays with a US bank account using microdeposits.        | Select **US bank account** and fill out the form. Click **Enter bank details manually instead**. Follow the instructions on the modal to link your bank account. You may use these [test account numbers](https://docs.stripe.com/payments/ach-direct-debit/accept-a-payment.md?platform=web#test-account-numbers). Click your payment button. |
| Your customer fails to complete the bank account linking process.                  | Select **US bank account** and click the test institution or **Enter bank details manually instead**. Close the modal without completing it.                                                                                                                                                                                                   |

### BLIK

When using the Payment Element with BLIK, the user can close the modal prompting them to authorize the payment in their banking app. This triggers a redirect to your `return_url` and doesn’t return the user to the checkout page. Learn more about using [BLIK](https://docs.stripe.com/payments/blik.md) with Stripe.

To handle users closing the modal, in the server-side handler for your `return_url`, inspect the Payment Intent’s `status` to see if it’s `succeeded` or still `requires_action` (meaning the user has closed the modal without authorizing), dealing with each case as needed.

### QR code payment methods

When using the Payment Element with a QR code based payment method (WeChat Pay, PayNow, Pix, PromptPay, Cash App Pay), the user can close the QR code modal. This triggers a redirect to your `return_url` and doesn’t return the user to the checkout page.

To handle users closing QR code modals, at the server-side handler for your `return_url`, inspect the Payment Intent’s `status` to see if it’s `succeeded` or still `requires_action` (meaning the user has closed the modal without paying), dealing with each case as needed.

Alternatively, prevent the automatic redirect to your `return_url` by passing the advanced optional parameter [`redirect=if_required`](https://docs.stripe.com/js/payment_intents/confirm_payment#confirm_payment_intent-options-redirect), which prevents the redirect when closing a QR code modal.

### Cash App Pay

The Payment Element renders a dynamic form differently in desktop web or mobile web since it uses different customer authentication methods. Learn more about using [Cash App Pay](https://docs.stripe.com/payments/cash-app-pay.md) with Stripe.

#### Mobile web app element

Cash App Pay is a redirect based payment method in mobile web. It redirects your customer to Cash App in live mode or a test payment page in a test environment. After the payment is complete, they’re redirected to the `return_url`, regardless of whether you set `redirect=if_required` or not.

#### Desktop web app element

Cash App Pay is a QR code payment method in desktop web, where the Payment Element renders a QR code modal. Your customer needs to scan the QR code with a QR code scanning application or the Cash App mobile application.

In live mode, it redirects the customer to the `return_url` as soon as they’re redirected to the Cash App. In test environments, they can approve or decline the payment before being redirected to the `return_url`. Customers can also close the QR code modal before completing the payment, which triggers a redirect to your `return_url`.

Make sure the `return_url` corresponds to a page on your website to inspect the Payment Intent’s `status`. The Payment Intent’s `status` can be `succeeded`, `failed`, or `requires_action` (for example, the customer has closed the modal without scanning the QR code).

Alternatively, prevent the automatic redirect to your `return_url` by passing the advanced optional parameter `redirect=if_required`, which prevents the redirect when closing a QR code modal.

### PayPal

To use PayPal, make sure you’re on a [registered domain](https://docs.stripe.com/payments/payment-methods/pmd-registration.md).

## Disclose Stripe to your customers

Stripe collects information on customer interactions with Elements to provide services to you, prevent fraud, and improve its services. This includes using cookies and IP addresses to identify which Elements a customer saw during a single checkout session. You’re responsible for disclosing and obtaining all rights and consents necessary for Stripe to use data in these ways. For more information, visit our [privacy center](https://stripe.com/legal/privacy-center#as-a-business-user-what-notice-do-i-provide-to-my-end-customers-about-stripe).

## See also

- [Stripe Elements](https://docs.stripe.com/payments/elements.md)
- [Set up future payments](https://docs.stripe.com/payments/save-and-reuse.md)
- [Save payment details during payment](https://docs.stripe.com/payments/save-during-payment.md)
- [Calculate sales tax, GST and VAT in your payment flow](https://docs.stripe.com/tax/custom.md)

# In-app integration for iOS

> This is a In-app integration for iOS for when payment-ui is mobile and platform is ios. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=mobile\&platform=ios.
> ![](https://b.stripecdn.com/docs-statics-srv/assets/ios-overview.9e0d68d009dc005f73a6f5df69e00458.png)

Integrate Stripe’s prebuilt payment UI into the checkout of your iOS app with the [PaymentSheet](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet.html) class. See our sample integration [on GitHub](https://github.com/stripe/stripe-ios/tree/master/Example/PaymentSheet%20Example).

## Set up Stripe \[Server-side] \[Client-side]

First, you need a Stripe account. [Register now](https://dashboard.stripe.com/register).

### Server-side

This integration requires endpoints on your server that talk to the Stripe API. Use our official libraries for access to the Stripe API from your server:

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
3. Add the **StripePaymentSheet** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripePaymentSheet'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripePaymentSheet
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentSheet/README.md#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripePaymentSheet.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripePaymentSheet/README.md#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

## Enable payment methods

View your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) and enable the payment methods you want to support. You need at least one payment method enabled to create a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods).

By default, Stripe enables cards and other prevalent payment methods that can help you reach more customers, but we recommend turning on additional payment methods that are relevant for your business and customers. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md) for product and payment method support, and our [pricing page](https://stripe.com/pricing/local-payment-methods) for fees.

## Add an endpoint \[Server-side]

> #### Note
>
> To display the PaymentSheet before you create a PaymentIntent, see [Collect payment details before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md?type=payment).

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

This integration uses three Stripe API objects:

1. [PaymentIntent](https://docs.stripe.com/api/payment_intents.md): Stripe uses this to represent your intent to collect payment from a customer, tracking your charge attempts and payment state changes throughout the process.

2. (Optional) [Customer](https://docs.stripe.com/api/customers.md): To set up a payment method for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a Customer object when your customer creates an account with your business. If your customer is making a payment as a guest, you can create a Customer object before payment and associate it with your own internal representation of the customer’s account later.

3. (Optional) [CustomerSession](https://docs.stripe.com/api/customer_sessions.md): Information on the Customer object is sensitive, and can’t be retrieved directly from an app. A CustomerSession grants the SDK temporary scoped access to the Customer and provides additional configuration options. See a complete list of [configuration options](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components).

> If you never save cards to a Customer and don’t allow returning Customers to reuse saved cards, you can omit the Customer and CustomerSession objects from your integration.

For security reasons, your app can’t create these objects. Instead, add an endpoint on your server that:

1. Retrieves the Customer, or creates a new one.
2. Creates a [CustomerSession](https://docs.stripe.com/api/customer_sessions.md) for the Customer.
3. Creates a PaymentIntent with the [amount](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-amount), [currency](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-currency), and [customer](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-customer).
4. Returns the Payment Intent’s *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)), the CustomerSession’s `client_secret`, the Customer’s [id](https://docs.stripe.com/api/customers/object.md#customer_object-id), and your [publishable key](https://dashboard.stripe.com/apikeys) to your app.

The payment methods shown to customers during the checkout process are also included on the PaymentIntent. You can let Stripe pull payment methods from your Dashboard settings or you can list them manually. Regardless of the option you choose, know that the currency passed in the PaymentIntent filters the payment methods shown to the customer. For example, if you pass `eur` on the PaymentIntent and have OXXO enabled in the Dashboard, OXXO won’t be shown to the customer because OXXO doesn’t support `eur` payments.

Unless your integration requires a code-based option for offering payment methods, Stripe recommends the automated option. This is because Stripe evaluates the currency, payment method restrictions, and other parameters to determine the list of supported payment methods. Payment methods that increase conversion and that are most relevant to the currency and customer’s location are prioritized.

#### Manage payment methods from the Dashboard

You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow. The PaymentIntent is created using the payment methods you configured in the Dashboard. If you don’t want to use the Dashboard or if you want to specify payment methods manually, you can list them using the `payment_method_types` attribute.

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an CustomerSession for the Customer
curl https://api.stripe.com/v1/customer_sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "components[mobile_payment_element][enabled]"=true \
  -d "components[mobile_payment_element][features][payment_method_save]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_redisplay]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_remove]"=enabled

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \
  # In the latest version of the API, specifying the `automatic_payment_methods` parameter
  # is optional because Stripe enables its functionality by default.
  -d "automatic_payment_methods[enabled]"=true \
```

#### Listing payment methods manually

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an CustomerSession for the Customer
curl https://api.stripe.com/v1/customer_sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "components[mobile_payment_element][enabled]"=true \
  -d "components[mobile_payment_element][features][payment_method_save]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_redisplay]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_remove]"=enabled

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \
  -d "payment_method_types[]"="bancontact" \
  -d "payment_method_types[]"="card" \
  -d "payment_method_types[]"="ideal" \
  -d "payment_method_types[]"="klarna" \
  -d "payment_method_types[]"="sepa_debit" \
```

> Each payment method needs to support the currency passed in the PaymentIntent and your business needs to be based in one of the countries each payment method supports. See the [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md) page for more details about what’s supported.

## Collect payment details \[Client-side]

To display the mobile Payment Element on your checkout screen, make sure you:

- Display the products the customer is purchasing along with the total amount
- Use the [Address Element](https://docs.stripe.com/elements/address-element.md?platform=ios) to collect any required shipping information from the customer
- Add a checkout button to display Stripe’s UI

#### UIKit

In your app’s checkout screen, fetch the PaymentIntent client secret, CustomerSession client secret, Customer ID, and publishable key from the endpoint you created in the previous step. Use `STPAPIClient.shared` to set your publishable key and initialize the [PaymentSheet](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet.html).

#### iOS (Swift)

```swift
import UIKit@_spi(CustomerSessionBetaAccess) import StripePaymentSheet

class CheckoutViewController: UIViewController {
  @IBOutlet weak var checkoutButton: UIButton!
  var paymentSheet: PaymentSheet?
  let backendCheckoutUrl = URL(string: "Your backend endpoint/payment-sheet")! // Your backend endpoint

  override func viewDidLoad() {
    super.viewDidLoad()

    checkoutButton.addTarget(self, action: #selector(didTapCheckoutButton), for: .touchUpInside)
    checkoutButton.isEnabled = false

    // MARK: Fetch the PaymentIntent client secret, CustomerSession client secret, Customer ID, and publishable key
    var request = URLRequest(url: backendCheckoutUrl)
    request.httpMethod = "POST"
    let task = URLSession.shared.dataTask(with: request, completionHandler: { [weak self] (data, response, error) in
      guard let data = data,
            let json = try? JSONSerialization.jsonObject(with: data, options: []) as? [String : Any],
            let customerId = json["customer"] as? String,
            let customerSessionClientSecret = json["customerSessionClientSecret"] as? String,
            let paymentIntentClientSecret = json["paymentIntent"] as? String,
            let publishableKey = json["publishableKey"] as? String,
            let self = self else {
        // Handle error
        return
      }
STPAPIClient.shared.publishableKey = publishableKey// MARK: Create a PaymentSheet instance
      var configuration = PaymentSheet.Configuration()
      configuration.merchantDisplayName = "Example, Inc."
      configuration.customer = .init(id: customerId, customerSessionClientSecret: customerSessionClientSecret)
      // Set `allowsDelayedPaymentMethods` to true if your business handles
      // delayed notification payment methods like US bank accounts.
      configuration.allowsDelayedPaymentMethods = true
      self.paymentSheet = PaymentSheet(paymentIntentClientSecret:paymentIntentClientSecret, configuration: configuration)

      DispatchQueue.main.async {
        self.checkoutButton.isEnabled = true
      }
    })
    task.resume()
  }

}
```

When the customer taps the **Checkout** button, call `present` to present the PaymentSheet. After the customer completes the payment, Stripe dismisses the PaymentSheet and calls the completion block with [PaymentSheetResult](https://stripe.dev/stripe-ios/stripe-paymentsheet/Enums/PaymentSheetResult.html).

#### iOS (Swift)

```swift
@objc
func didTapCheckoutButton() {
  // MARK: Start the checkout process
  paymentSheet?.present(from: self) { paymentResult in
    // MARK: Handle the payment result
    switch paymentResult {
    case .completed:
      print("Your order is confirmed")
    case .canceled:
      print("Canceled!")
    case .failed(let error):
      print("Payment failed: \(error)")
    }
  }
}
```

#### SwiftUI

Create an `ObservableObject` model for your checkout screen. This model publishes a [PaymentSheet](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet.html) and a [PaymentSheetResult](https://stripe.dev/stripe-ios/stripe-paymentsheet/Enums/PaymentSheetResult.html).

```swift
import StripePaymentSheet
import SwiftUI

class CheckoutViewModel: ObservableObject {
  let backendCheckoutUrl = URL(string: "Your backend endpoint/payment-sheet")! // Your backend endpoint
  @Published var paymentSheet: PaymentSheet?
  @Published var paymentResult: PaymentSheetResult?
}
```

Fetch the PaymentIntent client secret, CustomerSession client secret, Customer ID, and publishable key from the endpoint you created in the previous step. Use `STPAPIClient.shared` to set your publishable key and initialize the [PaymentSheet](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet.html).

```swift
@_spi(CustomerSessionBetaAccess) import StripePaymentSheet
import SwiftUI

class CheckoutViewModel: ObservableObject {
  let backendCheckoutUrl = URL(string: "Your backend endpoint/payment-sheet")! // Your backend endpoint
  @Published var paymentSheet: PaymentSheet?
  @Published var paymentResult: PaymentSheetResult?
func preparePaymentSheet() {
    // MARK: Fetch thePaymentIntent and Customer information from the backend
    var request = URLRequest(url: backendCheckoutUrl)
    request.httpMethod = "POST"
    let task = URLSession.shared.dataTask(with: request, completionHandler: { [weak self] (data, response, error) in
      guard let data = data,
            let json = try? JSONSerialization.jsonObject(with: data, options: []) as? [String : Any],
            let customerId = json["customer"] as? String,
            let customerSessionClientSecret = json["customerSessionClientSecret"] as? String,
            letpaymentIntentClientSecret = json["paymentIntent"] as? String,
            let publishableKey = json["publishableKey"] as? String,
            let self = self else {
        // Handle error
        return
      }

      STPAPIClient.shared.publishableKey = publishableKey// MARK: Create a PaymentSheet instance
      var configuration = PaymentSheet.Configuration()
      configuration.merchantDisplayName = "Example, Inc."
      configuration.customer = .init(id: customerId, customerSessionClientSecret: customerSessionClientSecret)
      // Set `allowsDelayedPaymentMethods` to true if your business handles
      // delayed notification payment methods like US bank accounts.
      configuration.allowsDelayedPaymentMethods = true

      DispatchQueue.main.async {
        self.paymentSheet = PaymentSheet(paymentIntentClientSecret:paymentIntentClientSecret, configuration: configuration)
      }
    })
    task.resume()
  }
}
struct CheckoutView: View {
  @ObservedObject var model = CheckoutViewModel()

  var body: some View {
    VStack {
      if model.paymentSheet != nil {
        Text("Ready to pay.")
      } else {
        Text("Loading…")
      }
    }.onAppear { model.preparePaymentSheet() }
  }
}
```

Add a [PaymentSheet.PaymentButton](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/PaymentButton.html) to your `View`. This behaves similarly to a SwiftUI `Button`, which allows you to customize it by adding a `View`. When you tap the button, it displays the PaymentSheet. After you complete the payment, Stripe dismisses the PaymentSheet and calls the `onCompletion` handler with a [PaymentSheetResult](https://stripe.dev/stripe-ios/stripe-paymentsheet/Enums/PaymentSheetResult.html) object.

```swift
@_spi(CustomerSessionBetaAccess) import StripePaymentSheet
import SwiftUI

class CheckoutViewModel: ObservableObject {
  let backendCheckoutUrl = URL(string: "Your backend endpoint/payment-sheet")! // Your backend endpoint
  @Published var paymentSheet: PaymentSheet?
  @Published var paymentResult: PaymentSheetResult?

  func preparePaymentSheet() {
    // MARK: Fetch the PaymentIntent and Customer information from the backend
    var request = URLRequest(url: backendCheckoutUrl)
    request.httpMethod = "POST"
    let task = URLSession.shared.dataTask(with: request, completionHandler: { [weak self] (data, response, error) in
      guard let data = data,
            let json = try? JSONSerialization.jsonObject(with: data, options: []) as? [String : Any],
            let customerId = json["customer"] as? String,
            let customerSessionClientSecret = json["customerSessionClientSecret"] as? String,
            let paymentIntentClientSecret = json["paymentIntent"] as? String,
            let publishableKey = json["publishableKey"] as? String,
            let self = self else {
        // Handle error
        return
      }

      STPAPIClient.shared.publishableKey = publishableKey
      // MARK: Create a PaymentSheet instance
      var configuration = PaymentSheet.Configuration()
      configuration.merchantDisplayName = "Example, Inc."
      configuration.customer = .init(id: customerId, customerSessionClientSecret: customerSessionClientSecret)
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment methods
      // that complete payment after a delay, like SEPA Debit and Sofort.
      configuration.allowsDelayedPaymentMethods = true

      DispatchQueue.main.async {
        self.paymentSheet = PaymentSheet(paymentIntentClientSecret: paymentIntentClientSecret, configuration: configuration)
      }
    })
    task.resume()
  }
func onPaymentCompletion(result: PaymentSheetResult) {
    self.paymentResult = result
  }
}

struct CheckoutView: View {
  @ObservedObject var model = CheckoutViewModel()

  var body: some View {
    VStack {if let paymentSheet = model.paymentSheet {
        PaymentSheet.PaymentButton(
          paymentSheet: paymentSheet,
          onCompletion: model.onPaymentCompletion
        ) {
          Text("Buy")
        }
      } else {
        Text("Loading…")
      }if let result = model.paymentResult {
        switch result {
        case .completed:
          Text("Payment complete")
        case .failed(let error):
          Text("Payment failed: \(error.localizedDescription)")
        case .canceled:
          Text("Payment canceled.")
        }
      }
    }.onAppear { model.preparePaymentSheet() }
  }
}
```

If `PaymentSheetResult` is `.completed`, inform the user (for example, by displaying an order confirmation screen).

Setting `allowsDelayedPaymentMethods` to true allows [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment methods like US bank accounts. For these payment methods, the final payment status isn’t known when the `PaymentSheet` completes, and instead succeeds or fails later. If you support these types of payment methods, inform the customer their order is confirmed and only fulfill their order (for example, ship their product) when the payment is successful.

## Set up a return URL \[Client-side]

The customer might navigate away from your app to authenticate (for example, in Safari or their banking app). To allow them to automatically return to your app after authenticating, [configure a custom URL scheme](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app) and set up your app delegate to forward the URL to the SDK. Stripe doesn’t support [universal links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

#### SceneDelegate

#### Swift

```swift
// This method handles opening custom URL schemes (for example, "your-app://stripe-redirect")
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url else {
        return
    }
    let stripeHandled = StripeAPI.handleURLCallback(with: url)
    if (!stripeHandled) {
        // This was not a Stripe url – handle the URL normally as you would
    }
}

```

#### AppDelegate

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
```

#### SwiftUI

#### Swift

```swift

@main
struct MyApp: App {
  var body: some Scene {
    WindowGroup {
      Text("Hello, world!").onOpenURL { incomingURL in
          let stripeHandled = StripeAPI.handleURLCallback(with: incomingURL)
          if (!stripeHandled) {
            // This was not a Stripe url – handle the URL normally as you would
          }
        }
    }
  }
}
```

Additionally, set the [returnURL](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html#/s:6Stripe12PaymentSheetC13ConfigurationV9returnURLSSSgvp) on your [PaymentSheet.Configuration](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html) object to the URL for your app.

```swift
var configuration = PaymentSheet.Configuration()
configuration.returnURL = "your-app://stripe-redirect"
```

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

#### Bank redirects

| Payment method    | Scenario                                                                                                                                                                                        | How to test                                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bancontact, iDEAL | Your customer fails to authenticate on the redirect page for a redirect-based and immediate notification payment method.                                                                        | Choose any redirect-based payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page. |
| Pay by Bank       | Your customer successfully pays with a redirect-based and [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method.                      | Choose the payment method, fill out the required details, and confirm the payment. Then click **Complete test payment** on the redirect page.            |
| Pay by Bank       | Your customer fails to authenticate on the redirect page for a redirect-based and delayed notification payment method.                                                                          | Choose the payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page.                |
| BLIK              | BLIK payments fail in a variety of ways—immediate failures (for example, the code is expired or invalid), delayed errors (the bank declines) or timeouts (the customer didn’t respond in time). | Use email patterns to [simulate the different failures.](https://docs.stripe.com/payments/blik/accept-a-payment.md#simulate-failures)                    |

#### Bank debits

| Payment method    | Scenario                                                                                          | How to test                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SEPA Direct Debit | Your customer successfully pays with SEPA Direct Debit.                                           | Fill out the form using the account number `AT321904300235473204`. The confirmed PaymentIntent initially transitions to processing, then transitions to the succeeded status three minutes later. |
| SEPA Direct Debit | Your customer’s payment intent status transitions from `processing` to `requires_payment_method`. | Fill out the form using the account number `AT861904300235473202`.                                                                                                                                |

See [Testing](https://docs.stripe.com/testing.md) for additional information to test your integration.

## Optional: Enable Link

Enable Link in your [Payment Method settings](https://dashboard.stripe.com/settings/payment_methods) to allow your customers to securely save and reuse their payment information using Link’s one-click express checkout button.

### Pass your customer’s email to the Mobile Payment Element

Link authenticates a customer using their email address. Stripe recommends prefilling as much information as possible to streamline the checkout process.

To prefill the customer’s name, email address, and phone number, supply `defaultBillingDetails` with your customer information after initializing `PaymentSheet.Configuration`.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.name = "Jenny Rosen"
configuration.defaultBillingDetails.email = "jenny.rosen@example.com"
configuration.defaultBillingDetails.phone = "888-888-8888"
```

## Optional: Enable Apple Pay

> If your checkout screen has a dedicated **Apple Pay button**, follow the [Apple Pay guide](https://docs.stripe.com/apple-pay.md#present-payment-sheet) and use `ApplePayContext` to collect payment from your Apple Pay button. You can use `PaymentSheet` to handle other payment method types.

### Register for an Apple Merchant ID

Obtain an Apple Merchant ID by [registering for a new identifier](https://developer.apple.com/account/resources/identifiers/add/merchant) on the Apple Developer website.

Fill out the form with a description and identifier. Your description is for your own records and you can modify it in the future. Stripe recommends using the name of your app as the identifier (for example, `merchant.com.{{YOUR_APP_NAME}}`).

### Create a new Apple Pay certificate

Create a certificate for your app to encrypt payment data.

Go to the [iOS Certificate Settings](https://dashboard.stripe.com/settings/ios_certificates) in the Dashboard, click **Add new application**, and follow the guide.

Download a Certificate Signing Request (CSR) file to get a secure certificate from Apple that allows you to use Apple Pay.

One CSR file must be used to issue exactly one certificate. If you switch your Apple Merchant ID, you must go to the [iOS Certificate Settings](https://dashboard.stripe.com/settings/ios_certificates) in the Dashboard to obtain a new CSR and certificate.

### Integrate with Xcode

Add the Apple Pay capability to your app. In Xcode, open your project settings, click the **Signing & Capabilities** tab, and add the **Apple Pay** capability. You might be prompted to log in to your developer account at this point. Select the merchant ID you created earlier, and your app is ready to accept Apple Pay.
![](https://b.stripecdn.com/docs-statics-srv/assets/xcode.a701d4c1922d19985e9c614a6f105bf1.png)

Enable the Apple Pay capability in Xcode

### Add Apple Pay

#### One-time payment

To add Apple Pay to PaymentSheet, set [applePay](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html#/s:6Stripe12PaymentSheetC13ConfigurationV8applePayAC05ApplefD0VSgvp) after initializing `PaymentSheet.Configuration` with your Apple merchant ID and the [country code of your business](https://dashboard.stripe.com/settings/account).

#### iOS (Swift)

```swift
var configuration = PaymentSheet.Configuration()
configuration.applePay = .init(
  merchantId: "merchant.com.your_app_name",
  merchantCountryCode: "US"
)
```

#### Recurring payments

To add Apple Pay to PaymentSheet, set [applePay](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html#/s:6Stripe12PaymentSheetC13ConfigurationV8applePayAC05ApplefD0VSgvp) after initializing `PaymentSheet.Configuration` with your Apple merchant ID and the [country code of your business](https://dashboard.stripe.com/settings/account).

Per [Apple’s guidelines](https://developer.apple.com/design/human-interface-guidelines/apple-pay#Supporting-subscriptions) for recurring payments, you must also set additional attributes on the `PKPaymentRequest`. Add a handler in [ApplePayConfiguration.paymentRequestHandlers](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/applepayconfiguration/handlers/paymentrequesthandler) to configure the [PKPaymentRequest.paymentSummaryItems](https://developer.apple.com/documentation/passkit/pkpaymentrequest/1619231-paymentsummaryitems) with the amount you intend to charge (for example, 9.95 USD a month).

You can also adopt [merchant tokens](https://developer.apple.com/apple-pay/merchant-tokens/) by setting the `recurringPaymentRequest` or `automaticReloadPaymentRequest` properties on the `PKPaymentRequest`.

To learn more about how to use recurring payments with Apple Pay, see [Apple’s PassKit documentation](https://developer.apple.com/documentation/passkit/pkpaymentrequest).

#### iOS (Swift)

```swift
let customHandlers = PaymentSheet.ApplePayConfiguration.Handlers(
    paymentRequestHandler: { request in
        // PKRecurringPaymentSummaryItem is available on iOS 15 or later
        if #available(iOS 15.0, *) {
            let billing = PKRecurringPaymentSummaryItem(label: "My Subscription", amount: NSDecimalNumber(string: "59.99"))

            // Payment starts today
            billing.startDate = Date()

            // Payment ends in one year
            billing.endDate = Date().addingTimeInterval(60 * 60 * 24 * 365)

            // Pay once a month.
            billing.intervalUnit = .month
            billing.intervalCount = 1

            // recurringPaymentRequest is only available on iOS 16 or later
            if #available(iOS 16.0, *) {
                request.recurringPaymentRequest = PKRecurringPaymentRequest(paymentDescription: "Recurring",
                                                                            regularBilling: billing,
                                                                            managementURL: URL(string: "https://my-backend.example.com/customer-portal")!)
                request.recurringPaymentRequest?.billingAgreement = "You'll be billed $59.99 every month for the next 12 months. To cancel at any time, go to Account and click 'Cancel Membership.'"
            }
            request.paymentSummaryItems = [billing]
            request.currencyCode = "USD"
        } else {
            // On older iOS versions, set alternative summary items.
            request.paymentSummaryItems = [PKPaymentSummaryItem(label: "Monthly plan starting July 1, 2022", amount: NSDecimalNumber(string: "59.99"), type: .final)]
        }
        return request
    }
)
var configuration = PaymentSheet.Configuration()
configuration.applePay = .init(merchantId: "merchant.com.your_app_name",
                                merchantCountryCode: "US",
                                customHandlers: customHandlers)
```

### Order tracking

To add [order tracking](https://developer.apple.com/design/human-interface-guidelines/technologies/wallet/designing-order-tracking) information in iOS 16 or later, configure an [authorizationResultHandler](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/applepayconfiguration/handlers/authorizationresulthandler) in your `PaymentSheet.ApplePayConfiguration.Handlers`. Stripe calls your implementation after the payment is complete, but before iOS dismisses the Apple Pay sheet.

In your `authorizationResultHandler` implementation, fetch the order details from your server for the completed order. Add the details to the provided [PKPaymentAuthorizationResult](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationresult) and return the modified result.

To learn more about order tracking, see [Apple’s Wallet Orders documentation](https://developer.apple.com/documentation/walletorders).

#### iOS (Swift)

```swift
let customHandlers = PaymentSheet.ApplePayConfiguration.Handlers(
    authorizationResultHandler: { result in
      do {
        // Fetch the order details from your service
        let myOrderDetails = try await MyAPIClient.shared.fetchOrderDetails(orderID: orderID)
        result.orderDetails = PKPaymentOrderDetails(
          orderTypeIdentifier: myOrderDetails.orderTypeIdentifier, // "com.myapp.order"
          orderIdentifier: myOrderDetails.orderIdentifier, // "ABC123-AAAA-1111"
          webServiceURL: myOrderDetails.webServiceURL, // "https://my-backend.example.com/apple-order-tracking-backend"
          authenticationToken: myOrderDetails.authenticationToken) // "abc123"
        // Return your modified PKPaymentAuthorizationResult
        return result
      } catch {
        return PKPaymentAuthorizationResult(status: .failure, errors: [error])
      }
    }
)
var configuration = PaymentSheet.Configuration()
configuration.applePay = .init(merchantId: "merchant.com.your_app_name",
                               merchantCountryCode: "US",
                               customHandlers: customHandlers)
```

## Enable card scanning

To enable card scanning support for iOS, set the `NSCameraUsageDescription` (**Privacy - Camera Usage Description**) in the `Info.plist` of your application, and provide a reason for accessing the camera (for example, “To scan cards”).

## Optional: Enable ACH payments

To enable ACH debit payments include `StripeFinancialConnections` as a dependency for your app.

The [Stripe iOS SDK](https://github.com/stripe/stripe-ios) is open source, [fully documented](https://stripe.dev/stripe-ios/index.html), and compatible with apps supporting iOS 13 or above.

#### Swift Package Manager

To install the SDK, follow these steps:

1. In Xcode, select **File** > **Add Package Dependencies…** and enter `https://github.com/stripe/stripe-ios-spm` as the repository URL.
2. Select the latest version number from our [releases page](https://github.com/stripe/stripe-ios/releases).
3. Add the **StripeFinancialConnections** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripeFinancialConnections'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripeFinancialConnections
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripeFinancialConnections/README.md#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripeFinancialConnections.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripeFinancialConnections/README.md#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

## Optional: Customize the sheet

All customization is configured through the [PaymentSheet.Configuration](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html) object.

### Appearance

Customize colors, fonts, and so on to match the look and feel of your app by using the [appearance API](https://docs.stripe.com/elements/appearance-api.md?platform=ios).

### Payment method layout

Configure the layout of payment methods in the sheet using [paymentMethodLayout](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/configuration-swift.struct/paymentmethodlayout). You can display them horizontally, vertically, or let Stripe optimize the layout automatically.
![](https://b.stripecdn.com/docs-statics-srv/assets/ios-mpe-payment-method-layouts.9d0513e2fcec5660378ba1824d952054.png)

#### Swift

```swift
var configuration = PaymentSheet.Configuration()
configuration.paymentMethodLayout = .automatic
```

### Collect users addresses

Collect local and international shipping or billing addresses from your customers using the [Address Element](https://docs.stripe.com/elements/address-element.md?platform=ios).

### Merchant display name

Specify a customer-facing business name by setting [merchantDisplayName](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html#/s:18StripePaymentSheet0bC0C13ConfigurationV19merchantDisplayNameSSvp). By default, this is your app’s name.

#### Swift

```swift
var configuration = PaymentSheet.Configuration()
configuration.merchantDisplayName = "My app, Inc."
```

### Dark mode

`PaymentSheet` automatically adapts to the user’s system-wide appearance settings (light and dark mode). If your app doesn’t support dark mode, you can set [style](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html#/s:18StripePaymentSheet0bC0C13ConfigurationV5styleAC18UserInterfaceStyleOvp) to `alwaysLight` or `alwaysDark` mode.

```swift
var configuration = PaymentSheet.Configuration()
configuration.style = .alwaysLight
```

### Default billing details

To set default values for billing details collected in the payment sheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.address.country = "US"
configuration.defaultBillingDetails.email = "foo@bar.com"
```

### Billing details collection

Use `billingDetailsCollectionConfiguration` to specify how you want to collect billing details in the payment sheet.

You can collect your customer’s name, email, phone number, and address.

If you only want to billing details required by the payment method, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to true. In that case, the `PaymentSheet.Configuration.defaultBillingDetails` are set as the payment method’s [billing details](https://docs.stripe.com/api/payment_methods/object.md?lang=node#payment_method_object-billing_details).

If you want to collect additional billing details that aren’t necessarily required by the payment method, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to false. In that case, the billing details collected through the `PaymentSheet` are set as the payment method’s billing details.

```swift
var configuration = PaymentSheet.Configuration()
configuration.defaultBillingDetails.email = "foo@bar.com"
configuration.billingDetailsCollectionConfiguration.name = .always
configuration.billingDetailsCollectionConfiguration.email = .never
configuration.billingDetailsCollectionConfiguration.address = .full
configuration.billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod = true
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.

## Optional: Handle user logout

`PaymentSheet` stores some information locally to remember whether a user has used Link within an app. To clear the internal state of `PaymentSheet`, call the `PaymentSheet.resetCustomer()` method when your user logs out.

```swift
import UIKit
import StripePaymentSheet

class MyViewController: UIViewController {

  @objc
  func didTapLogoutButton() {
    PaymentSheet.resetCustomer()
    // Other logout logic required by your app
  }

}
```

## Optional: Complete payment in your UI

You can present the Payment Sheet to only collect payment method details and then later call a `confirm` method to complete payment in your app’s UI. This is useful if you have a custom buy button or require additional steps after you collect payment details.
![](https://b.stripecdn.com/docs-statics-srv/assets/ios-multi-step.cd631ea4f1cd8cf3f39b6b9e1e92b6c5.png)

Complete the payment in your app’s UI

#### UIKit

The following steps walk you through how to complete payment in your app’s UI. See our sample integration out on [GitHub](https://github.com/stripe/stripe-ios/blob/master/Example/PaymentSheet%20Example/PaymentSheet%20Example/ExampleCustomCheckoutViewController.swift).

1. First, initialize [PaymentSheet.FlowController](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/flowcontroller) instead of `PaymentSheet` and update your UI with its `paymentOption` property. This property contains an image and label representing the customer’s initially selected, default payment method.

```swift
PaymentSheet.FlowController.create(paymentIntentClientSecret: paymentIntentClientSecret, configuration: configuration) { [weak self] result in
  switch result {
  case .failure(let error):
    print(error)
  case .success(let paymentSheetFlowController):
    self?.paymentSheetFlowController = paymentSheetFlowController
    // Update your UI using paymentSheetFlowController.paymentOption
  }
}
```

1. Next, call `presentPaymentOptions` to collect payment details. When completed, update your UI again with the `paymentOption` property.

```swift
paymentSheetFlowController.presentPaymentOptions(from: self) {
  // Update your UI using paymentSheetFlowController.paymentOption
}
```

1. Finally, call `confirm`.

```swift
paymentSheetFlowController.confirm(from: self) { paymentResult in
  // MARK: Handle the payment result
  switch paymentResult {
  case .completed:
    print("Payment complete!")
  case .canceled:
    print("Canceled!")
  case .failed(let error):
    print(error)
  }
}
```

#### SwiftUI

The following steps walk you through how to complete payment in your app’s UI. See our sample integration out on [GitHub](https://github.com/stripe/stripe-ios/blob/master/Example/PaymentSheet%20Example/PaymentSheet%20Example/ExampleSwiftUICustomPaymentFlow.swift).

1. First, initialize [PaymentSheet.FlowController](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/flowcontroller) instead of `PaymentSheet`. Its `paymentOption` property contains an image and label representing the customer’s currently selected payment method, which you can use in your UI.

```swift
PaymentSheet.FlowController.create(paymentIntentClientSecret: paymentIntentClientSecret, configuration: configuration) { [weak self] result in
  switch result {
  case .failure(let error):
    print(error)
  case .success(let paymentSheetFlowController):
    self?.paymentSheetFlowController = paymentSheetFlowController
    // Use the paymentSheetFlowController.paymentOption properties in your UI
    myPaymentMethodLabel = paymentSheetFlowController.paymentOption?.label ?? "Select a payment method"
    myPaymentMethodImage = paymentSheetFlowController.paymentOption?.image ?? UIImage(systemName: "square.and.pencil")!
  }
}
```

1. Use [PaymentSheet.FlowController.PaymentOptionsButton](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/flowcontroller/paymentoptionsbutton) to wrap the button that presents the sheet to collect payment details. When `PaymentSheet.FlowController` calls the `onSheetDismissed` argument, the `paymentOption` for the `PaymentSheet.FlowController` instance reflects the currently selected payment method.

```swift
PaymentSheet.FlowController.PaymentOptionsButton(
  paymentSheetFlowController: paymentSheetFlowController,
  onSheetDismissed: {
    myPaymentMethodLabel = paymentSheetFlowController.paymentOption?.label ?? "Select a payment method"
    myPaymentMethodImage = paymentSheetFlowController.paymentOption?.image ?? UIImage(systemName: "square.and.pencil")!
  },
  content: {
    /* An example button */
    HStack {
      Text(myPaymentMethodLabel)
      Image(uiImage: myPaymentMethodImage)
    }
  }
)
```

1. Use [PaymentSheet.FlowController.PaymentOptionsButton](https://stripe.dev/stripe-ios/stripepaymentsheet/documentation/stripepaymentsheet/paymentsheet/flowcontroller/paymentoptionsbutton) to wrap the button that confirms the payment.

```swift
PaymentSheet.FlowController.ConfirmButton(
  paymentSheetFlowController: paymentSheetFlowController,
  onCompletion: { result in
    // MARK: Handle the payment result
    switch result {
    case .completed:
      print("Payment complete!")
    case .canceled:
      print("Canceled!")
    case .failed(let error):
      print(error)
    }
  },
  content: {
    /* An example button */
    Text("Pay")
  }
)
```

Setting `allowsDelayedPaymentMethods` to true allows [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment methods like US bank accounts. For these payment methods, the final payment status isn’t known when the `PaymentSheet` completes, and instead succeeds or fails later. If you support these types of payment methods, inform the customer their order is confirmed and only fulfill their order (for example, ship their product) when the payment is successful.

## Optional: Enable CVC recollection on confirmation

The following instructions for re-collecting the CVC of a saved card during PaymentIntent confirmation assume that your integration includes the following:

- Creation of PaymentIntents before collecting payment details

### Update parameters of the intent creation

To re-collect the CVC when confirming payment, include `require_cvc_recollection` during the creation of the PaymentIntent.

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an Ephemeral Key for the Customer
curl https://api.stripe.com/v1/ephemeral_keys \
  -u <<YOUR_SECRET_KEY>>: \
  -H "Stripe-Version: 2026-02-25.clover" \
  -H "Stripe-Account: 2026-02-25.clover" \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \-d "payment_method_options[card][require_cvc_recollection]"=true \
  # In the latest version of the API, specifying the `automatic_payment_methods` parameter
  # is optional because Stripe enables its functionality by default.
  -d "automatic_payment_methods[enabled]"=true \
```

# In-app integration for Android

> This is a In-app integration for Android for when payment-ui is mobile and platform is android. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=mobile\&platform=android.
> ![](https://b.stripecdn.com/docs-statics-srv/assets/android-overview.471eaf89a760f5b6a757fd96b6bb9b60.png)

Integrate Stripe’s prebuilt payment UI into the checkout of your Android app with the [PaymentSheet](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/index.html) class.

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

## Enable payment methods

View your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) and enable the payment methods you want to support. You need at least one payment method enabled to create a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods).

By default, Stripe enables cards and other prevalent payment methods that can help you reach more customers, but we recommend turning on additional payment methods that are relevant for your business and customers. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md) for product and payment method support, and our [pricing page](https://stripe.com/pricing/local-payment-methods) for fees.

## Add an endpoint \[Server-side]

> #### Note
>
> To display the PaymentSheet before you create a PaymentIntent, see [Collect payment details before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md?type=payment).

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

This integration uses three Stripe API objects:

1. [PaymentIntent](https://docs.stripe.com/api/payment_intents.md): Stripe uses this to represent your intent to collect payment from a customer, tracking your charge attempts and payment state changes throughout the process.

2. (Optional) [Customer](https://docs.stripe.com/api/customers.md): To set up a payment method for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a Customer object when your customer creates an account with your business. If your customer is making a payment as a guest, you can create a Customer object before payment and associate it with your own internal representation of the customer’s account later.

3. (Optional) [CustomerSession](https://docs.stripe.com/api/customer_sessions.md): Information on the Customer object is sensitive, and can’t be retrieved directly from an app. A CustomerSession grants the SDK temporary scoped access to the Customer and provides additional configuration options. See a complete list of [configuration options](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components).

> If you never save cards to a Customer and don’t allow returning Customers to reuse saved cards, you can omit the Customer and CustomerSession objects from your integration.

For security reasons, your app can’t create these objects. Instead, add an endpoint on your server that:

1. Retrieves the Customer, or creates a new one.
2. Creates a [CustomerSession](https://docs.stripe.com/api/customer_sessions.md) for the Customer.
3. Creates a PaymentIntent with the [amount](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-amount), [currency](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-currency), and [customer](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-customer).
4. Returns the Payment Intent’s *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)), the CustomerSession’s `client_secret`, the Customer’s [id](https://docs.stripe.com/api/customers/object.md#customer_object-id), and your [publishable key](https://dashboard.stripe.com/apikeys) to your app.

The payment methods shown to customers during the checkout process are also included on the PaymentIntent. You can let Stripe pull payment methods from your Dashboard settings or you can list them manually. Regardless of the option you choose, know that the currency passed in the PaymentIntent filters the payment methods shown to the customer. For example, if you pass `eur` on the PaymentIntent and have OXXO enabled in the Dashboard, OXXO won’t be shown to the customer because OXXO doesn’t support `eur` payments.

Unless your integration requires a code-based option for offering payment methods, Stripe recommends the automated option. This is because Stripe evaluates the currency, payment method restrictions, and other parameters to determine the list of supported payment methods. Payment methods that increase conversion and that are most relevant to the currency and customer’s location are prioritized.

#### Manage payment methods from the Dashboard

You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow. The PaymentIntent is created using the payment methods you configured in the Dashboard. If you don’t want to use the Dashboard or if you want to specify payment methods manually, you can list them using the `payment_method_types` attribute.

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an CustomerSession for the Customer
curl https://api.stripe.com/v1/customer_sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "components[mobile_payment_element][enabled]"=true \
  -d "components[mobile_payment_element][features][payment_method_save]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_redisplay]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_remove]"=enabled

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \
  # In the latest version of the API, specifying the `automatic_payment_methods` parameter
  # is optional because Stripe enables its functionality by default.
  -d "automatic_payment_methods[enabled]"=true \
```

#### Listing payment methods manually

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an CustomerSession for the Customer
curl https://api.stripe.com/v1/customer_sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "components[mobile_payment_element][enabled]"=true \
  -d "components[mobile_payment_element][features][payment_method_save]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_redisplay]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_remove]"=enabled

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \
  -d "payment_method_types[]"="bancontact" \
  -d "payment_method_types[]"="card" \
  -d "payment_method_types[]"="ideal" \
  -d "payment_method_types[]"="klarna" \
  -d "payment_method_types[]"="sepa_debit" \
```

> Each payment method needs to support the currency passed in the PaymentIntent and your business needs to be based in one of the countries each payment method supports. See the [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md) page for more details about what’s supported.

## Collect payment details \[Client-side]

Before displaying the mobile Payment Element, your checkout page should:

- Show the products being purchased and the total amount
- Collect any required shipping information using the [Address Element](https://docs.stripe.com/elements/address-element.md?platform=android)
- Include a checkout button to present Stripe’s UI

#### Jetpack Compose

[Initialize](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-builder/index.html) a `PaymentSheet` instance inside `onCreate` of your checkout Activity, passing a method to handle the result.

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult

@Composable
fun App() {
  val paymentSheet = remember { PaymentSheet.Builder(::onPaymentSheetResult) }.build()
}

private fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {
  // implemented in the next steps
}
```

Next, fetch the PaymentIntent client secret, Customer Session client secret, Customer ID, and publishable key from the endpoint you created in the previous step. Set the publishable key using `PaymentConfiguration` and store the others for use when you present the PaymentSheet.

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberimport androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import com.stripe.android.PaymentConfiguration
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult

@Composable
fun App() {
  val paymentSheet = remember { PaymentSheet.Builder(::onPaymentSheetResult) }.build()val context = LocalContext.current
  var customerConfig by remember { mutableStateOf<PaymentSheet.CustomerConfiguration?>(null) }
  varpaymentIntentClientSecret by remember { mutableStateOf<String?>(null) }

  LaunchedEffect(context) {
    // Make a request to your own server and retrieve payment configurations
    val networkResult = ...
    if (networkResult.isSuccess) {paymentIntentClientSecret = networkResult.paymentIntent
        customerConfig = PaymentSheet.CustomerConfiguration.createWithCustomerSession(
          id = networkResult.customer,
          clientSecret = networkResult.customerSessionClientSecret
        )PaymentConfiguration.init(context, networkResult.publishableKey)}
  }
}

private fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {
  // implemented in the next steps
}
```

When the customer taps your checkout button, call [presentWithPaymentIntent](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/index.html#1814490530%2FFunctions%2F2002900378) to present the payment sheet. After the customer completes the payment, the sheet dismisses and the [PaymentSheetResultCallback](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet-result-callback/index.html) is called with a [PaymentSheetResult](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet-result/index.html).

```kotlin
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import com.stripe.android.PaymentConfiguration
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult

@Composable
fun App() {
  val paymentSheet = remember { PaymentSheet.Builder(::onPaymentSheetResult) }.build()
  val context = LocalContext.current
  var customerConfig by remember { mutableStateOf<PaymentSheet.CustomerConfiguration?>(null) }
  var paymentIntentClientSecret by remember { mutableStateOf<String?>(null) }

  LaunchedEffect(context) {
    // Make a request to your own server and retrieve payment configurations
    val networkResult = ...
    if (networkResult.isSuccess) {
        paymentIntentClientSecret = networkResult.paymentIntent
        customerConfig = PaymentSheet.CustomerConfiguration.createWithCustomerSession(
          id = networkResult.customer,
          clientSecret = networkResult.customerSessionClientSecret
        )
        PaymentConfiguration.init(context, networkResult.publishableKey)
    }
  }Button(
    onClick = {
      val currentConfig = customerConfig
      val currentClientSecret =paymentIntentClientSecret

      if (currentConfig != null && currentClientSecret != null) {
        presentPaymentSheet(paymentSheet, currentConfig, currentClientSecret)
      }
    }
  ) {
    Text("Checkout")
  }
}private fun presentPaymentSheet(
  paymentSheet: PaymentSheet,
  customerConfig: PaymentSheet.CustomerConfiguration,paymentIntentClientSecret: String
) {
  paymentSheet.presentWithPaymentIntent(paymentIntentClientSecret,
    PaymentSheet.Configuration.Builder(merchantDisplayName = "My merchant name")
      .customer(customerConfig)
      // Set `allowsDelayedPaymentMethods` to true if your business handles
      // delayed notification payment methods like US bank accounts.
      .allowsDelayedPaymentMethods(true)
      .build()
  )
}
private fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {when(paymentSheetResult) {
    is PaymentSheetResult.Canceled -> {
      print("Canceled")
    }
    is PaymentSheetResult.Failed -> {
      print("Error: ${paymentSheetResult.error}")
    }
    is PaymentSheetResult.Completed -> {
      // Display for example, an order confirmation screen
      print("Completed")
    }
  }
}
```

#### Views (Classic)

[Initialize](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/index.html#-394860221%2FConstructors%2F2002900378) a `PaymentSheet` instance inside `onCreate` of your checkout Activity, passing a method to handle the result.

#### Kotlin

```kotlin
import com.stripe.android.paymentsheet.PaymentSheet

class CheckoutActivity : AppCompatActivity() {
  lateinit var paymentSheet: PaymentSheet

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    paymentSheet = PaymentSheet.Builder(::onPaymentSheetResult).build(this)
  }

  fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {
    // implemented in the next steps
  }
}
```

Next, fetch the PaymentIntent client secret, Customer Session client secret, Customer ID, and publishable key from the endpoint you created in the previous step. Set the publishable key using `PaymentConfiguration` and store the others for use when you present the PaymentSheet.

#### Kotlin

```kotlin
import com.stripe.android.paymentsheet.PaymentSheet

class CheckoutActivity : AppCompatActivity() {
  lateinit var paymentSheet: PaymentSheetlateinit var customerConfig: PaymentSheet.CustomerConfiguration
  lateinit varpaymentIntentClientSecret: String

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    paymentSheet = PaymentSheet.Builder(::onPaymentSheetResult).build(this)lifecycleScope.launch {
      // Make a request to your own server and retrieve payment configurations
      val networkResult = MyBackend.getPaymentConfig()
      if (networkResult.isSuccess) {paymentIntentClientSecret = networkResult.paymentIntent
        customerConfig = PaymentSheet.CustomerConfiguration.createWithCustomerSession(
          id = networkResult.customer,
          clientSecret = networkResult.customerSessionClientSecret
        )PaymentConfiguration.init(context, networkResult.publishableKey)}
    }
  }

  fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {
    // implemented in the next steps
  }
}
```

When the customer taps your checkout button, call [presentWithPaymentIntent](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/index.html#1814490530%2FFunctions%2F2002900378) to present the payment sheet. After the customer completes the payment, the sheet dismisses and the [PaymentSheetResultCallback](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet-result-callback/index.html) is called with a [PaymentSheetResult](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet-result/index.html).

#### Kotlin

```kotlin
// ...
class CheckoutActivity : AppCompatActivity() {
  lateinit var paymentSheet: PaymentSheet
  lateinit var customerConfig: PaymentSheet.CustomerConfiguration
  lateinit var paymentIntentClientSecret: String
  // ...fun presentPaymentSheet() {
    paymentSheet.presentWithPaymentIntent(paymentIntentClientSecret,
      PaymentSheet.Configuration.Builder(merchantDisplayName = "My merchant name")
        .customer(customerConfig)
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
        .allowsDelayedPaymentMethods(true)
        .build()
    )
  }

  fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {when(paymentSheetResult) {
      is PaymentSheetResult.Canceled -> {
        print("Canceled")
      }
      is PaymentSheetResult.Failed -> {
        print("Error: ${paymentSheetResult.error}")
      }
      is PaymentSheetResult.Completed -> {
        // Display for example, an order confirmation screen
        print("Completed")
      }
    }
  }
}
```

Setting `allowsDelayedPaymentMethods` to true allows [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment methods like US bank accounts. For these payment methods, the final payment status isn’t known when the `PaymentSheet` completes, and instead succeeds or fails later. If you support these types of payment methods, inform the customer their order is confirmed and only fulfill their order (for example, ship their product) when the payment is successful.

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

#### Bank redirects

| Payment method    | Scenario                                                                                                                                                                                        | How to test                                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bancontact, iDEAL | Your customer fails to authenticate on the redirect page for a redirect-based and immediate notification payment method.                                                                        | Choose any redirect-based payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page. |
| Pay by Bank       | Your customer successfully pays with a redirect-based and [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method.                      | Choose the payment method, fill out the required details, and confirm the payment. Then click **Complete test payment** on the redirect page.            |
| Pay by Bank       | Your customer fails to authenticate on the redirect page for a redirect-based and delayed notification payment method.                                                                          | Choose the payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page.                |
| BLIK              | BLIK payments fail in a variety of ways—immediate failures (for example, the code is expired or invalid), delayed errors (the bank declines) or timeouts (the customer didn’t respond in time). | Use email patterns to [simulate the different failures.](https://docs.stripe.com/payments/blik/accept-a-payment.md#simulate-failures)                    |

#### Bank debits

| Payment method    | Scenario                                                                                          | How to test                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SEPA Direct Debit | Your customer successfully pays with SEPA Direct Debit.                                           | Fill out the form using the account number `AT321904300235473204`. The confirmed PaymentIntent initially transitions to processing, then transitions to the succeeded status three minutes later. |
| SEPA Direct Debit | Your customer’s payment intent status transitions from `processing` to `requires_payment_method`. | Fill out the form using the account number `AT861904300235473202`.                                                                                                                                |

See [Testing](https://docs.stripe.com/testing.md) for additional information to test your integration.

## Optional: Enable Link

Enable Link in your [Payment Method settings](https://dashboard.stripe.com/settings/payment_methods) to allow your customers to securely save and reuse their payment information using Link’s one-click express checkout button.

### Pass your customer’s email to the Mobile Payment Element

Link authenticates a customer using their email address. Stripe recommends prefilling as much information as possible to streamline the checkout process.

To prefill the customer’s name, email address, and phone number, supply `defaultBillingDetails` with your customer information when initializing `PaymentSheet.Configuration`.

#### Kotlin

```kotlin
val configuration = PaymentSheet.Configuration.Builder(merchantDisplayName = "Example, Inc.")
  .defaultBillingDetails(
    PaymentSheet.BillingDetails(
        name = "Jenny Rosen",
        email = "jenny.rosen@example.com",
        phone = "888-888-8888"
    )
  )
  .build()
```

## Optional: Enable Google Pay

### Set up your integration

To use Google Pay, first enable the Google Pay API by adding the following to the `<application>` tag of your **AndroidManifest.xml**:

```xml
<application>
  ...
  <meta-data
    android:name="com.google.android.gms.wallet.api.enabled"
    android:value="true" />
</application>
```

For more details, see Google Pay’s [Set up Google Pay API](https://developers.google.com/pay/api/android/guides/setup) for Android.

### Add Google Pay

To add Google Pay to your integration, pass a [PaymentSheet.GooglePayConfiguration](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-google-pay-configuration/index.html) with your Google Pay environment (production or test) and the [country code of your business](https://dashboard.stripe.com/settings/account) when initializing [PaymentSheet.Configuration](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/index.html).

#### Kotlin

```kotlin
val googlePayConfiguration = PaymentSheet.GooglePayConfiguration(
  environment = PaymentSheet.GooglePayConfiguration.Environment.Test,
  countryCode = "US",
  currencyCode = "USD" // Required for Setup Intents, optional for Payment Intents
)
val configuration = PaymentSheet.Configuration.Builder(merchantDisplayName = "My merchant name")
  .googlePay(googlePayConfiguration)
  .build()
```

### Test Google Pay

Google allows you to make test payments through their [Test card suite](https://developers.google.com/pay/api/android/guides/resources/test-card-suite). The test suite supports using Stripe [test cards](https://docs.stripe.com/testing.md).

You must test Google Pay using a physical Android device instead of a simulated device, in a country where Google Pay is supported. Log in to a Google account on your test device with a real card saved to Google Wallet.

## Optional: Enable card scanning

To enable card scanning support, [request production access](https://developers.google.com/pay/api/android/guides/test-and-deploy/request-prod-access) to the Google Pay API from the [Google Pay and Wallet Console](https://pay.google.com/business/console?utm_source=devsite\&utm_medium=devsite\&utm_campaign=devsite).

- If you’ve enabled Google Pay, the card scanning feature is automatically available in our UI on eligible devices. To learn more about eligible devices, see the [Google Pay API constraints](https://developers.google.com/pay/payment-card-recognition/debit-credit-card-recognition)
- **Important:** The card scanning feature only appears in builds signed with the same signing key registered in the [Google Pay & Wallet Console](https://pay.google.com/business/console). Test or debug builds using different signing keys (for example, builds distributed through Firebase App Tester) won’t show the **Scan card** option. To test card scanning in pre-release builds, you must either:
  - Sign your test builds with your production signing key
  - Add your test signing key fingerprint to the Google Pay and Wallet Console

## Optional: Enable ACH payments

To enable ACH debit payments include Financial Connections as a dependency for your app.

The [Stripe Android SDK](https://github.com/stripe/stripe-android) is open source and [fully documented](https://stripe.dev/stripe-android/).

To install the SDK, add `financial-connections` to the `dependencies` block of your [app/build.gradle](https://developer.android.com/studio/build/dependencies) file:

#### Kotlin

```kotlin
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
  // ...

  // Financial Connections Android SDK
  implementation("com.stripe:financial-connections:22.8.1")
}
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-android/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

## Optional: Customize the sheet

All customization is configured using the [PaymentSheet.Configuration](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/index.html) object.

### Appearance

Customize colors, fonts, and more to match the look and feel of your app by using the [appearance API](https://docs.stripe.com/elements/appearance-api.md?platform=android).

### Payment method layout

Configure the layout of payment methods in the sheet using [paymentMethodLayout](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/-builder/index.html#2123253356%2FFunctions%2F2002900378). You can display them horizontally, vertically, or let Stripe optimize the layout automatically.
![](https://b.stripecdn.com/docs-statics-srv/assets/android-mpe-payment-method-layouts.3bcfe828ceaad1a94e0572a22d91733f.png)

#### Kotlin

```kotlin
PaymentSheet.Configuration.Builder("Example, Inc.")
  .paymentMethodLayout(PaymentSheet.PaymentMethodLayout.Automatic)
  .build()
```

### Collect users addresses

Collect local and international shipping or billing addresses from your customers using the [Address Element](https://docs.stripe.com/elements/address-element.md?platform=android).

### Business display name

Specify a customer-facing business name by setting [merchantDisplayName](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/index.html#-191101533%2FProperties%2F2002900378). By default, this is your app’s name.

#### Kotlin

```kotlin
PaymentSheet.Configuration.Builder(
  merchantDisplayName = "My app, Inc."
).build()
```

### Dark mode

By default, `PaymentSheet` automatically adapts to the user’s system-wide appearance settings (light and dark mode). You can change this by setting light or dark mode on your app:

#### Kotlin

```kotlin
// force dark
AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES)
// force light
AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
```

### Default billing details

To set default values for billing details collected in the payment sheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

#### Kotlin

```kotlin
val address = PaymentSheet.Address(country = "US")
val billingDetails = PaymentSheet.BillingDetails(
  address = address,
  email = "foo@bar.com"
)
val configuration = PaymentSheet.Configuration.Builder(merchantDisplayName = "Merchant, Inc.")
  .defaultBillingDetails(billingDetails)
  .build()
```

### Configure collection of billing details

Use `BillingDetailsCollectionConfiguration` to specify how you want to collect billing details in the PaymentSheet.

You can collect your customer’s name, email, phone number, and address.

If you want to attach default billing details to the PaymentMethod object even when those fields aren’t collected in the UI, set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to `true`.

#### Kotlin

```kotlin
val billingDetails = PaymentSheet.BillingDetails(
  email = "foo@bar.com"
)
val billingDetailsCollectionConfiguration = BillingDetailsCollectionConfiguration(
  attachDefaultsToPaymentMethod = true,
  name = BillingDetailsCollectionConfiguration.CollectionMode.Always,
  email = BillingDetailsCollectionConfiguration.CollectionMode.Never,
  address = BillingDetailsCollectionConfiguration.AddressCollectionMode.Full,
)
val configuration = PaymentSheet.Configuration.Builder(merchantDisplayName = "Merchant, Inc.")
  .defaultBillingDetails(billingDetails)
  .billingDetailsCollectionConfiguration(billingDetailsCollectionConfiguration)
  .build()
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.

## Optional: Handle user logout

`PaymentSheet` stores some information locally to remember whether a user has used Link within an app. To clear the internal state of `PaymentSheet`, call the `PaymentSheet.resetCustomer()` method when your user logs out.

#### Kotlin

```kotlin
class MyActivity: Activity {

  fun onLogoutButtonClicked() {
    PaymentSheet.resetCustomer(this)
    // Other logout logic required by your app
  }
}
```

## Optional: Complete payment in your UI

You can present Payment Sheet to only collect payment method details and complete the payment back in your app’s UI. This is useful if you have a custom buy button or require additional steps after payment details are collected.
![](https://b.stripecdn.com/docs-statics-srv/assets/android-multi-step.84d8a0a44b1baa596bda491322b6d9fd.png)

> A sample integration is [available on our GitHub](https://github.com/stripe/stripe-android/blob/master/paymentsheet-example/src/main/java/com/stripe/android/paymentsheet/example/samples/ui/paymentsheet/custom_flow/CustomFlowActivity.kt).

1. First, initialize [PaymentSheet.FlowController](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-flow-controller/index.html) instead of `PaymentSheet` using one of the [Builder](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-flow-controller/-builder/index.html) methods.

#### Android (Kotlin)

```kotlin
class CheckoutActivity : AppCompatActivity() {
  private lateinit var flowController: PaymentSheet.FlowController

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val flowController = PaymentSheet.FlowController.Builder(
      resultCallback = ::onPaymentSheetResult,
      paymentOptionResultCallback = ::onPaymentOption,
    ).build(this)
  }
}
```

1. Next, call `configureWithPaymentIntent` with the Stripe object keys fetched from your backend and update your UI in the callback using [getPaymentOption()](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-flow-controller/index.html#-2091462043%2FFunctions%2F2002900378). This contains an image and label representing the customer’s currently selected payment method.

#### Android (Kotlin)

```kotlin
flowController.configureWithPaymentIntent(
  paymentIntentClientSecret = paymentIntentClientSecret,
  configuration = PaymentSheet.Configuration.Builder("Example, Inc.")
    .customer(PaymentSheet.CustomerConfiguration(
      id = customerId,
      ephemeralKeySecret = ephemeralKeySecret
    ))
    .build()
) { isReady, error ->
  if (isReady) {
    // Update your UI using `flowController.getPaymentOption()`
  } else {
    // handle FlowController configuration failure
  }
}
```

1. Next, call [presentPaymentOptions](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-flow-controller/index.html#449924733%2FFunctions%2F2002900378) to collect payment details. When the customer finishes, the sheet is dismissed and calls the [paymentOptionCallback](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-option-callback/index.html) passed earlier in `create`. Implement this method to update your UI with the returned `paymentOption`.

#### Android (Kotlin)

```kotlin
// ...
  flowController.presentPaymentOptions()
// ...
  private fun onPaymentOption(paymentOptionResult: PaymentOptionResult) {
    val paymentOption = paymentOptionResult.paymentOption
    if (paymentOption != null) {
      paymentMethodButton.text = paymentOption.label
      paymentMethodButton.setCompoundDrawablesRelativeWithIntrinsicBounds(
        paymentOption.drawableResourceId,
        0,
        0,
        0
      )
    } else {
      paymentMethodButton.text = "Select"
      paymentMethodButton.setCompoundDrawablesRelativeWithIntrinsicBounds(
        null,
        null,
        null,
        null
      )
    }
  }
```

1. Finally, call [confirm](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-flow-controller/index.html#-479056656%2FFunctions%2F2002900378) to complete the payment. When the customer finishes, the sheet is dismissed and calls the [paymentResultCallback](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet-result-callback/index.html#237248767%2FFunctions%2F2002900378) passed earlier in `create`.

#### Android (Kotlin)

```kotlin
  // ...
    flowController.confirmPayment()
  // ...

  private fun onPaymentSheetResult(
    paymentSheetResult: PaymentSheetResult
  ) {
    when (paymentSheetResult) {
      is PaymentSheetResult.Canceled -> {
        // Payment canceled
      }
      is PaymentSheetResult.Failed -> {
        // Payment Failed. See logcat for details or inspect paymentSheetResult.error
      }
      is PaymentSheetResult.Completed -> {
        // Payment Complete
      }
    }
  }
```

Setting `allowsDelayedPaymentMethods` to true allows [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment methods like US bank accounts. For these payment methods, the final payment status isn’t known when the `PaymentSheet` completes, and instead succeeds or fails later. If you support these types of payment methods, inform the customer their order is confirmed and only fulfill their order (for example, ship their product) when the payment is successful.

## Optional: Enable CVC recollection on confirmation

The following instructions for re-collecting the CVC of a saved card during PaymentIntent confirmation assume that your integration includes the following:

- Creation of PaymentIntents before collecting payment details

### Update parameters of the intent creation

To re-collect the CVC when confirming payment, include `require_cvc_recollection` during the creation of the PaymentIntent.

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an Ephemeral Key for the Customer
curl https://api.stripe.com/v1/ephemeral_keys \
  -u <<YOUR_SECRET_KEY>>: \
  -H "Stripe-Version: 2026-02-25.clover" \
  -H "Stripe-Account: 2026-02-25.clover" \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \-d "payment_method_options[card][require_cvc_recollection]"=true \
  # In the latest version of the API, specifying the `automatic_payment_methods` parameter
  # is optional because Stripe enables its functionality by default.
  -d "automatic_payment_methods[enabled]"=true \
```

# In-app integration for React Native

> This is a In-app integration for React Native for when payment-ui is mobile and platform is react-native. View the full page at https://docs.stripe.com/payments/accept-a-payment?payment-ui=mobile\&platform=react-native.
> ![](https://b.stripecdn.com/docs-statics-srv/assets/ios-overview.9e0d68d009dc005f73a6f5df69e00458.png)

This integration combines all of the steps required to pay, including collecting payment details and confirming the payment, into a single sheet that displays on top of your app.

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

The [React Native SDK](https://github.com/stripe/stripe-react-native) is open source and fully documented. Internally, it uses the [native iOS](https://github.com/stripe/stripe-ios) and [Android](https://github.com/stripe/stripe-android) SDKs. To install Stripe’s React Native SDK, run one of the following commands in your project’s directory (depending on which package manager you use):

#### yarn

```bash
yarn add @stripe/stripe-react-native
```

#### npm

```bash
npm install @stripe/stripe-react-native
```

Next, install some other necessary dependencies:

- For iOS, go to the **ios** directory and run `pod install` to ensure that you also install the required native dependencies.
- For Android, there are no more dependencies to install.

> We recommend following the [official TypeScript guide](https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project) to add TypeScript support.

### Stripe initialization

To initialize Stripe in your React Native app, either wrap your payment screen with the `StripeProvider` component, or use the `initStripe` initialization method. Only the API [publishable key](https://docs.stripe.com/keys.md#obtain-api-keys) in `publishableKey` is required. The following example shows how to initialize Stripe using the `StripeProvider` component.

```jsx
import { useState, useEffect } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      {/* Your app code here */}
    </StripeProvider>
  );
}
```

> Use your API [test keys](https://docs.stripe.com/keys.md#obtain-api-keys) while you test and develop, and your [live mode](https://docs.stripe.com/keys.md#test-live-modes) keys when you publish your app.

## Enable payment methods

View your [payment methods settings](https://dashboard.stripe.com/settings/payment_methods) and enable the payment methods you want to support. You need at least one payment method enabled to create a *PaymentIntent* (The Payment Intents API tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods).

By default, Stripe enables cards and other prevalent payment methods that can help you reach more customers, but we recommend turning on additional payment methods that are relevant for your business and customers. See [Payment method support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md) for product and payment method support, and our [pricing page](https://stripe.com/pricing/local-payment-methods) for fees.

## Add an endpoint \[Server-side]

> #### Note
>
> To display the PaymentSheet before you create a PaymentIntent, see [Collect payment details before creating an Intent](https://docs.stripe.com/payments/accept-a-payment-deferred.md?type=payment).

If your Connect platform uses [customer-configured Accounts](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-customer), use our [guide](https://docs.stripe.com/connect/use-accounts-as-customers.md) to replace `Customer` and event references in your code with the equivalent Accounts v2 API references.

This integration uses three Stripe API objects:

1. [PaymentIntent](https://docs.stripe.com/api/payment_intents.md): Stripe uses this to represent your intent to collect payment from a customer, tracking your charge attempts and payment state changes throughout the process.

2. (Optional) [Customer](https://docs.stripe.com/api/customers.md): To set up a payment method for future payments, you must attach it to a *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments). Create a Customer object when your customer creates an account with your business. If your customer is making a payment as a guest, you can create a Customer object before payment and associate it with your own internal representation of the customer’s account later.

3. (Optional) [CustomerSession](https://docs.stripe.com/api/customer_sessions.md): Information on the Customer object is sensitive, and can’t be retrieved directly from an app. A CustomerSession grants the SDK temporary scoped access to the Customer and provides additional configuration options. See a complete list of [configuration options](https://docs.stripe.com/api/customer_sessions/create.md#create_customer_session-components).

> If you never save cards to a Customer and don’t allow returning Customers to reuse saved cards, you can omit the Customer and CustomerSession objects from your integration.

For security reasons, your app can’t create these objects. Instead, add an endpoint on your server that:

1. Retrieves the Customer, or creates a new one.
2. Creates a [CustomerSession](https://docs.stripe.com/api/customer_sessions.md) for the Customer.
3. Creates a PaymentIntent with the [amount](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-amount), [currency](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-currency), and [customer](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-customer).
4. Returns the Payment Intent’s *client secret* (The client secret is a unique key returned from Stripe as part of a PaymentIntent. This key lets the client access important fields from the PaymentIntent (status, amount, currency) while hiding sensitive ones (metadata, customer)), the CustomerSession’s `client_secret`, the Customer’s [id](https://docs.stripe.com/api/customers/object.md#customer_object-id), and your [publishable key](https://dashboard.stripe.com/apikeys) to your app.

The payment methods shown to customers during the checkout process are also included on the PaymentIntent. You can let Stripe pull payment methods from your Dashboard settings or you can list them manually. Regardless of the option you choose, know that the currency passed in the PaymentIntent filters the payment methods shown to the customer. For example, if you pass `eur` on the PaymentIntent and have OXXO enabled in the Dashboard, OXXO won’t be shown to the customer because OXXO doesn’t support `eur` payments.

Unless your integration requires a code-based option for offering payment methods, Stripe recommends the automated option. This is because Stripe evaluates the currency, payment method restrictions, and other parameters to determine the list of supported payment methods. Payment methods that increase conversion and that are most relevant to the currency and customer’s location are prioritized.

#### Manage payment methods from the Dashboard

You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the return of eligible payment methods based on factors such as the transaction’s amount, currency, and payment flow. The PaymentIntent is created using the payment methods you configured in the Dashboard. If you don’t want to use the Dashboard or if you want to specify payment methods manually, you can list them using the `payment_method_types` attribute.

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an CustomerSession for the Customer
curl https://api.stripe.com/v1/customer_sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "components[mobile_payment_element][enabled]"=true \
  -d "components[mobile_payment_element][features][payment_method_save]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_redisplay]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_remove]"=enabled

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \
  # In the latest version of the API, specifying the `automatic_payment_methods` parameter
  # is optional because Stripe enables its functionality by default.
  -d "automatic_payment_methods[enabled]"=true \
```

#### Listing payment methods manually

#### curl

```bash
# Create a Customer (use an existing Customer ID if this is a returning customer)
curl https://api.stripe.com/v1/customers \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -H "Stripe-Account: {{CONNECTED_ACCOUNT_ID}}"

# Create an CustomerSession for the Customer
curl https://api.stripe.com/v1/customer_sessions \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "components[mobile_payment_element][enabled]"=true \
  -d "components[mobile_payment_element][features][payment_method_save]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_redisplay]"=enabled \
  -d "components[mobile_payment_element][features][payment_method_remove]"=enabled

# Create a PaymentIntent
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -X "POST" \
  -d "customer"="{{CUSTOMER_ID}}" \
  -d "amount"=1099 \
  -d "currency"="eur" \
  -d "payment_method_types[]"="bancontact" \
  -d "payment_method_types[]"="card" \
  -d "payment_method_types[]"="ideal" \
  -d "payment_method_types[]"="klarna" \
  -d "payment_method_types[]"="sepa_debit" \
```

> Each payment method needs to support the currency passed in the PaymentIntent and your business needs to be based in one of the countries each payment method supports. See the [Payment method integration options](https://docs.stripe.com/payments/payment-methods/integration-options.md) page for more details about what’s supported.

## Collect payment details \[Client-side]

Before displaying the mobile Payment Element, your checkout page should:

- Show the products being purchased and the total amount
- Collect any required shipping information
- Include a checkout button to present Stripe’s UI

In the checkout of your app, make a network request to the backend endpoint you created in the previous step and call `initPaymentSheet` from the `useStripe` hook.

```javascript

export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    // see below
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Screen>
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </Screen>
  );
}
```

When your customer taps the **Checkout** button, call `presentPaymentSheet()` to open the sheet. After the customer completes the payment, the sheet is dismissed and the promise resolves with an optional `StripeError<PaymentSheetError>`.

```javascript
export default function CheckoutScreen() {
  // continued from above

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  return (
    <Screen>
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </Screen>
  );
}
```

If there is no error, inform the user they’re done (for example, by displaying an order confirmation screen).

Setting `allowsDelayedPaymentMethods` to true allows [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment methods like US bank accounts. For these payment methods, the final payment status isn’t known when the `PaymentSheet` completes, and instead succeeds or fails later. If you support these types of payment methods, inform the customer their order is confirmed and only fulfill their order (for example, ship their product) when the payment is successful.

## Set up a return URL (iOS only) \[Client-side]

When a customer exits your app (for example to authenticate in Safari or their banking app), provide a way for them to automatically return to your app. Many payment method types *require* a return URL. If you don’t provide one, we can’t present payment methods that require a return URL to your users, even if you’ve enabled them.

To provide a return URL:

1. [Register](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app#Register-your-URL-scheme) a custom URL. Universal links aren’t supported.
2. [Configure](https://reactnative.dev/docs/linking) your custom URL.
3. Set up your root component to forward the URL to the Stripe SDK as shown below.

> If you’re using Expo, [set your scheme](https://docs.expo.io/guides/linking/#in-a-standalone-app) in the `app.json` file.

```jsx
import { useEffect, useCallback } from 'react';
import { Linking } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

export default function MyApp() {
  const { handleURLCallback } = useStripe();

  const handleDeepLink = useCallback(
    async (url: string | null) => {
      if (url) {
        const stripeHandled = await handleURLCallback(url);
        if (stripeHandled) {
          // This was a Stripe URL - you can return or add extra handling here as you see fit
        } else {
          // This was NOT a Stripe URL – handle as you normally would
        }
      }
    },
    [handleURLCallback]
  );

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      handleDeepLink(initialUrl);
    };

    getUrlAsync();

    const deepLinkListener = Linking.addEventListener(
      'url',
      (event: { url: string }) => {
        handleDeepLink(event.url);
      }
    );

    return () => deepLinkListener.remove();
  }, [handleDeepLink]);

  return (
    <View>
      <AwesomeAppComponent />
    </View>
  );
}
```

Additionally, set the `returnURL` when you call the `initPaymentSheet` method:

```js
await initPaymentSheet({
  ...
  returnURL: 'your-app://stripe-redirect',
  ...
});
```

For more information on native URL schemes, refer to the [Android](https://developer.android.com/training/app-links/deep-linking) and [iOS](https://developer.apple.com/documentation/xcode/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app) docs.

## Handle post-payment events

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

#### Bank redirects

| Payment method    | Scenario                                                                                                                                                                                        | How to test                                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bancontact, iDEAL | Your customer fails to authenticate on the redirect page for a redirect-based and immediate notification payment method.                                                                        | Choose any redirect-based payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page. |
| Pay by Bank       | Your customer successfully pays with a redirect-based and [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment method.                      | Choose the payment method, fill out the required details, and confirm the payment. Then click **Complete test payment** on the redirect page.            |
| Pay by Bank       | Your customer fails to authenticate on the redirect page for a redirect-based and delayed notification payment method.                                                                          | Choose the payment method, fill out the required details, and confirm the payment. Then click **Fail test payment** on the redirect page.                |
| BLIK              | BLIK payments fail in a variety of ways—immediate failures (for example, the code is expired or invalid), delayed errors (the bank declines) or timeouts (the customer didn’t respond in time). | Use email patterns to [simulate the different failures.](https://docs.stripe.com/payments/blik/accept-a-payment.md#simulate-failures)                    |

#### Bank debits

| Payment method    | Scenario                                                                                          | How to test                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SEPA Direct Debit | Your customer successfully pays with SEPA Direct Debit.                                           | Fill out the form using the account number `AT321904300235473204`. The confirmed PaymentIntent initially transitions to processing, then transitions to the succeeded status three minutes later. |
| SEPA Direct Debit | Your customer’s payment intent status transitions from `processing` to `requires_payment_method`. | Fill out the form using the account number `AT861904300235473202`.                                                                                                                                |

See [Testing](https://docs.stripe.com/testing.md) for additional information to test your integration.

## Enable card scanning \[Client-side]

> Enabling card scanning is required for Apple’s iOS app review process. Card scanning is not required for Android’s app review process, but we recommend enabling it.

### iOS

To enable card scanning support for iOS, set the `NSCameraUsageDescription` (**Privacy - Camera Usage Description**) in the `Info.plist` of your application, and provide a reason for accessing the camera (for example, “To scan cards”).

### (Optional) Android

To enable card scanning support, [request production access](https://developers.google.com/pay/api/android/guides/test-and-deploy/request-prod-access) to the Google Pay API from the [Google Pay and Wallet Console](https://pay.google.com/business/console?utm_source=devsite\&utm_medium=devsite\&utm_campaign=devsite).

- If you’ve enabled Google Pay, the card scanning feature is automatically available in our UI on eligible devices. To learn more about eligible devices, see the [Google Pay API constraints](https://developers.google.com/pay/payment-card-recognition/debit-credit-card-recognition)
- **Important:** The card scanning feature only appears in builds signed with the same signing key registered in the [Google Pay & Wallet Console](https://pay.google.com/business/console). Test or debug builds using different signing keys (for example, builds distributed through Firebase App Tester) won’t show the **Scan card** option. To test card scanning in pre-release builds, you must either:
  - Sign your test builds with your production signing key
  - Add your test signing key fingerprint to the Google Pay and Wallet Console

## Optional: Enable Link

Enable Link in your [Payment Method settings](https://dashboard.stripe.com/settings/payment_methods) to allow your customers to securely save and reuse their payment information using Link’s one-click express checkout button.

### Pass your customer’s email to the Mobile Payment Element

Link authenticates a customer using their email address. Stripe recommends prefilling as much information as possible to streamline the checkout process.

To prefill the customer’s name, email address, and phone number, supply `defaultBillingDetails` with your customer information to `initPaymentSheet`.

```javascript
await initPaymentSheet({
  ...
  defaultBillingDetails: {
    name: 'Jenny Rosen',
    email: 'jenny.rosen@example.com',
    phone: '888-888-8888',
  },
});
```

## Optional: Enable Apple Pay

### Register for an Apple Merchant ID

Obtain an Apple Merchant ID by [registering for a new identifier](https://developer.apple.com/account/resources/identifiers/add/merchant) on the Apple Developer website.

Fill out the form with a description and identifier. Your description is for your own records and you can modify it in the future. Stripe recommends using the name of your app as the identifier (for example, `merchant.com.{{YOUR_APP_NAME}}`).

### Create a new Apple Pay certificate

Create a certificate for your app to encrypt payment data.

Go to the [iOS Certificate Settings](https://dashboard.stripe.com/settings/ios_certificates) in the Dashboard, click **Add new application**, and follow the guide.

Download a Certificate Signing Request (CSR) file to get a secure certificate from Apple that allows you to use Apple Pay.

One CSR file must be used to issue exactly one certificate. If you switch your Apple Merchant ID, you must go to the [iOS Certificate Settings](https://dashboard.stripe.com/settings/ios_certificates) in the Dashboard to obtain a new CSR and certificate.

### Integrate with Xcode

Add the Apple Pay capability to your app. In Xcode, open your project settings, click the **Signing & Capabilities** tab, and add the **Apple Pay** capability. You might be prompted to log in to your developer account at this point. Select the merchant ID you created earlier, and your app is ready to accept Apple Pay.
![](https://b.stripecdn.com/docs-statics-srv/assets/xcode.a701d4c1922d19985e9c614a6f105bf1.png)

Enable the Apple Pay capability in Xcode

### Add Apple Pay

#### One-time payment

Pass your merchant ID when you create `StripeProvider`:

```javascript
import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  return (
    <StripeProvider
      publishableKey="<<YOUR_PUBLISHABLE_KEY>>"
      merchantIdentifier="MERCHANT_ID"
    >
      // Your app code here
    </StripeProvider>
  );
}
```

When you call `initPaymentSheet`, pass in your [ApplePayParams](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#ApplePayParams):

```javascript
await initPaymentSheet({
  // ...
  applePay: {
    merchantCountryCode: 'US',
  },
});
```

#### Recurring payments

When you call `initPaymentSheet`, pass in an [ApplePayParams](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#ApplePayParams) with `merchantCountryCode` set to the country code of your business.

In accordance with [Apple’s guidelines](https://developer.apple.com/design/human-interface-guidelines/apple-pay#Supporting-subscriptions) for recurring payments, you must also set a `cardItems` that includes a [RecurringCartSummaryItem](https://stripe.dev/stripe-react-native/api-reference/modules/ApplePay.html#RecurringCartSummaryItem) with the amount you intend to charge (for example, “$59.95 a month”).

You can also adopt [merchant tokens](https://developer.apple.com/apple-pay/merchant-tokens/) by setting the `request` with its `type` set to `PaymentRequestType.Recurring`

To learn more about how to use recurring payments with Apple Pay, see [Apple’s PassKit documentation](https://developer.apple.com/documentation/passkit/pkpaymentrequest).

#### iOS (React Native)

```javascript
const initializePaymentSheet = async () => {
  const recurringSummaryItem = {
    label: 'My Subscription',
    amount: '59.99',
    paymentType: 'Recurring',
    intervalCount: 1,
    intervalUnit: 'month',
    // Payment starts today
    startDate: new Date().getTime() / 1000,

    // Payment ends in one year
    endDate: new Date().getTime() / 1000 + 60 * 60 * 24 * 365,
  };

  const {error} = await initPaymentSheet({
    // ...
    applePay: {
      merchantCountryCode: 'US',
      cartItems: [recurringSummaryItem],
      request: {
        type: PaymentRequestType.Recurring,
        description: 'Recurring',
        managementUrl: 'https://my-backend.example.com/customer-portal',
        billing: recurringSummaryItem,
        billingAgreement:
          "You'll be billed $59.99 every month for the next 12 months. To cancel at any time, go to Account and click 'Cancel Membership.'",
      },
    },
  });
};
```

### Order tracking

To add [order tracking](https://developer.apple.com/design/human-interface-guidelines/technologies/wallet/designing-order-tracking) information in iOS 16 or later, configure a `setOrderTracking` callback function. Stripe calls your implementation after the payment is complete, but before iOS dismisses the Apple Pay sheet.

In your implementation of `setOrderTracking` callback function, fetch the order details from your server for the completed order, and pass the details to the provided `completion` function.

To learn more about order tracking, see [Apple’s Wallet Orders documentation](https://developer.apple.com/documentation/walletorders).

#### iOS (React Native)

```javascript
await initPaymentSheet({
  // ...
  applePay: {
    // ...
    setOrderTracking: async complete => {
      const apiEndpoint =
        Platform.OS === 'ios'
          ? 'http://localhost:4242'
          : 'http://10.0.2.2:4567';
      const response = await fetch(
        `${apiEndpoint}/retrieve-order?orderId=${orderId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        const orderDetails = await response.json();
        // orderDetails should include orderIdentifier, orderTypeIdentifier,
        // authenticationToken and webServiceUrl
        complete(orderDetails);
      }
    },
  },
});
```

## Optional: Enable Google Pay

### Set up your integration

To use Google Pay, first enable the Google Pay API by adding the following to the `<application>` tag of your **AndroidManifest.xml**:

```xml
<application>
  ...
  <meta-data
    android:name="com.google.android.gms.wallet.api.enabled"
    android:value="true" />
</application>
```

For more details, see Google Pay’s [Set up Google Pay API](https://developers.google.com/pay/api/android/guides/setup) for Android.

### Add Google Pay

When you initialize `PaymentSheet`, set `merchantCountryCode` to the country code of your business and set `googlePay` to true.

You can also use the test environment by passing the `testEnv` parameter. You can only test Google Pay on a physical Android device. Follow the [React Native docs](https://reactnative.dev/docs/running-on-device) to test your application on a physical device.

```javascript
const { error, paymentOption } = await initPaymentSheet({
  // ...
  googlePay: {
    merchantCountryCode: 'US',
    testEnv: true, // use test environment
  },
});
```

## Optional: Customize the sheet \[Client-side]

All customization is configured using `initPaymentSheet`.

### Appearance

Customize colors, fonts, and so on to match the look and feel of your app by using the [appearance API](https://docs.stripe.com/elements/appearance-api.md?platform=react-native).

### Merchant display name

Specify a customer-facing business name by setting `merchantDisplayName`. By default, this is your app’s name.

```javascript
await initPaymentSheet({
  // ...
  merchantDisplayName: 'Example Inc.',
});
```

### Dark mode

By default, `PaymentSheet` automatically adapts to the user’s system-wide appearance settings (light and dark mode). You can change this by setting the `style` property to `alwaysLight` or `alwaysDark` mode on iOS.

```javascript
await initPaymentSheet({
  // ...
  style: 'alwaysDark',
});
```

On Android, set light or dark mode on your app:

```
// force dark
AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES)
// force light
AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
```

### Default billing details

To set default values for billing details collected in the PaymentSheet, configure the `defaultBillingDetails` property. The `PaymentSheet` pre-populates its fields with the values that you provide.

```javascript
await initPaymentSheet({
  // ...
  defaultBillingDetails: {
      email: 'foo@bar.com',
      address: {
        country: 'US',
      },
  },
});
```

### Collect billing details

Use `billingDetailsCollectionConfiguration` to specify how you want to collect billing details in the PaymentSheet.

You can collect your customer’s name, email, phone number, and address.

If you don’t intend to collect the values that the payment method requires, you must do the following:

1. Attach the values that aren’t collected by `PaymentSheet` to the `defaultBillingDetails` property.
2. Set `billingDetailsCollectionConfiguration.attachDefaultsToPaymentMethod` to `true`.

```javascript
await initPaymentSheet({
  // ...
  defaultBillingDetails: {
    email: 'foo@bar.com',
  }
  billingDetailsCollectionConfiguration: {
    name: PaymentSheet.CollectionMode.ALWAYS,
    email: PaymentSheet.CollectionMode.NEVER,
    address: PaymentSheet.AddressCollectionMode.FULL,
    attachDefaultsToPaymentMethod: true
  },
});
```

> Consult with your legal counsel regarding laws that apply to collecting information. Only collect phone numbers if you need them for the transaction.

## Optional: Handle user logout

`PaymentSheet` stores some information locally to remember whether a user has used Link within an app. To clear the internal state of `PaymentSheet`, call the `resetPaymentSheetCustomer()` method when your user logs out.

```javascript
export default function CheckoutScreen() {
  // continued from above
  const { initPaymentSheet, presentPaymentSheet, resetPaymentSheetCustomer } = useStripe();

  const logout = async () => {
    await resetPaymentSheetCustomer();
  };

  return (
    <Screen>
      <Button
        title="Checkout"
        onPress={openPaymentSheet}
      />
      <Button
        title="Checkout"
        onPress={logout}
      />
    </Screen>
  );
}
```

## Optional: Complete payment in your UI

You can present Payment Sheet to only collect payment method details and then later call a `confirm` method to complete payment in your app’s UI. This is useful if you have a custom buy button or require additional steps after payment details are collected.
![](https://b.stripecdn.com/docs-statics-srv/assets/react-native-multi-step.84d8a0a44b1baa596bda491322b6d9fd.png)

> A sample integration is [available on our GitHub](https://github.com/stripe/stripe-react-native/blob/master/example/src/screens/PaymentsUICustomScreen.tsx).

1. First, call `initPaymentSheet` and pass `customFlow: true`. `initPaymentSheet` resolves with an initial payment option containing an image and label representing the customer’s payment method. Update your UI with these details.

```javascript
const {
  initPaymentSheet,
  presentPaymentSheet,
  confirmPaymentSheetPayment,
} = useStripe()

const { error, paymentOption } = await initPaymentSheet({
  customerId: customer,
  customerEphemeralKeySecret: ephemeralKey,
  paymentIntentClientSecret: paymentIntent,
  customFlow: true,
  merchantDisplayName: 'Example Inc.',
});
// Update your UI with paymentOption
```

1. Use `presentPaymentSheet` to collect payment details. When the customer finishes, the sheet dismisses itself and resolves the promise. Update your UI with the selected payment method details.

```javascript
const { error, paymentOption } = await presentPaymentSheet();
```

1. Use `confirmPaymentSheetPayment` to confirm the payment. This resolves with the result of the payment.

```javascript
const { error } = await confirmPaymentSheetPayment();

if (error) {
  Alert.alert(`Error code: ${error.code}`, error.message);
} else {
  Alert.alert(
    'Success',
    'Your order is confirmed!'
  );
}
```

Setting `allowsDelayedPaymentMethods` to true allows [delayed notification](https://docs.stripe.com/payments/payment-methods.md#payment-notification) payment methods like US bank accounts. For these payment methods, the final payment status isn’t known when the `PaymentSheet` completes, and instead succeeds or fails later. If you support these types of payment methods, inform the customer their order is confirmed and only fulfill their order (for example, ship their product) when the payment is successful.
