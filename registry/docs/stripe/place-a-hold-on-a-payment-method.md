# Place a hold on a payment method

Separate payment authorization and capture to create a charge now, but capture funds later.

When you create a payment, you can place a hold on an eligible payment method to reserve funds that you can capture later. For example, hotels often authorize a payment in full before a guest arrives, then capture the money when the guest checks out. This is sometimes referred to as *manual capture* (Manually capture funds separately from an authorization).

Authorizing a payment guarantees the amount by holding it on the customer’s payment method. If you’re using the API, the [payment\_method\_details.card.capture\_before](https://docs.stripe.com/api/charges/object.md#charge_object-payment_method_details-card-capture_before) attribute on the charge indicates when the authorization expires.

You need to capture the funds before the authorization expires. If the authorization expires before you capture the funds, the funds are released and the payment status changes to `canceled`. Learn more about [statuses for asynchronous payments](https://docs.stripe.com/payments/paymentintents/lifecycle.md).

## Authorization validity windows

The following tables outline validity windows for authorizing different transaction types.

### Card-not-present transactions

| Card brand           | [Merchant-Initiated Transaction](https://docs.stripe.com/payments/cits-and-mits.md) authorization validity window | [Customer-Initiated Transaction](https://docs.stripe.com/payments/cits-and-mits.md) authorization validity window |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Visa**             | 5 days\*                                                                                                           | 7 days                                                                                                            |
| **Mastercard**       | 7 days                                                                                                            | 7 days                                                                                                            |
| **American Express** | 7 days                                                                                                            | 7 days                                                                                                            |
| **Discover**         | 7 days                                                                                                            | 7 days                                                                                                            |

\* The exact authorization window is 4 days and 18 hours, to allow time for clearing processes.

### Card-present transactions (in-person payments)

| Card brand           | Authorization validity window |
| -------------------- | ----------------------------- |
| **Visa**             | 5 days\*                       |
| **Mastercard**       | 2 days                        |
| **American Express** | 2 days                        |
| **Discover**         | 2 days                        |

\* The exact authorization window is 4 days and 18 hours, to allow time for clearing processes.

### 30-day authorization windows in Japan

If your account is based in Japan, you can hold JPY-denominated transactions from Visa, Mastercard, JCB, Diners Club, and Discover for up to 30 days. Non-JPY and American Express transactions expire after the standard 7-day window.

> As of April 14, 2024, Visa shortened the authorization window for online [Merchant-Initiated Transactions](https://docs.stripe.com/payments/cits-and-mits.md) from 7 days to 5 days. Visa also lengthened the authorization window for in-person (Terminal) transactions from 2 days to 5 days.

## Payment method limitations

Before implementing, understand the following limitations for authorizing and capturing separately.

- Only some payment methods support separate authorization and *capture* (Fulfillment is the process of providing the goods or services purchased by a customer, typically after payment is collected). Some payment methods that support this include cards, Affirm, Afterpay, Cash App Pay, Klarna, and PayPal. Some payment methods that don’t support this include [ACH](https://docs.stripe.com/payments/ach-direct-debit.md) and [iDEAL](https://docs.stripe.com/payments/ideal.md). Read more about [payment method feature support](https://docs.stripe.com/payments/payment-methods/payment-method-support.md).

- Beyond what’s outlined in the tables above, other payment methods have different rules and authorization windows:

  - Card payments: The amount is typically on hold for 7 days for online payments and 2 days for in-person Terminal payments (depending on the type of transaction and the card network). You can request an extended authorization for certain [online](https://docs.stripe.com/payments/extended-authorization.md) and [Terminal payment authorizations](https://docs.stripe.com/terminal/features/extended-authorizations.md) that are eligible for extended validity periods. Card networks may also restrict 1 USD authorizations you don’t intend to capture.
  - [Affirm](https://docs.stripe.com/payments/affirm/accept-a-payment.md?platform=web#manual-capture): If Affirm requires a down payment for very large order amounts, they charge the amount during authorization and refund if the payment isn’t captured. You then have 30 days to capture the payment balance.
  - [Afterpay / Clearpay](https://docs.stripe.com/payments/afterpay-clearpay/accept-a-payment.md?web-or-mobile=web\&payment-ui=direct-api#manual-capture): During authorization, the customer pays the first repayment installment. Afterpay refunds the payment if it’s never captured. You then have 13 days to capture the payment balance.
  - [Cash App Pay](https://docs.stripe.com/payments/cash-app-pay/accept-a-payment.md?web-or-mobile=web\&payment-ui=direct-api#manual-capture): Valid authorizations must be captured within 7 days to complete a payment.
  - [Klarna](https://docs.stripe.com/payments/klarna/accept-a-payment.md?web-or-mobile=web\&payment-ui=direct-api#manual-capture): You must capture the charge by midnight of the 28th calendar day after the charge request, otherwise the authorization expires. For example, you’d need to capture a charge request at UTC 2020-10-01 14:00 by UTC 2020-10-29 00:00.
  - [PayPal](https://docs.stripe.com/payments/paypal/accept-a-payment.md?web-or-mobile=web\&payment-ui=direct-api#manual-capture): Holds the amount for 10 days. Stripe automatically attempts to extend the hold for another 10 days, totalling 20 days. Your [settlement preference](https://docs.stripe.com/payments/paypal/choose-settlement-preference.md) might affect the authorization period. See [separate authorization and capture](https://docs.stripe.com/payments/paypal/accept-a-payment.md?web-or-mobile=web\&payment-ui=direct-api#manual-capture) for more information.

## Use the Dashboard to authorize and capture

You can authorize a payment and capture funds separately without writing code.

1. In the Dashboard, [create a new payment](https://dashboard.stripe.com/test/payments/new). Select **One-time**.
2. When you enter or select the payment method, select **More options** then **Capture funds later**.

The payment appears in your [payments page](https://dashboard.stripe.com/test/payments) as **Uncaptured**.

To capture the funds, go to the payment details page and click **Capture**.

## Tell Stripe to authorize only

#### Checkout Sessions API

To indicate that you want separate authorization and capture, specify [capture\_method](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_intent_data-capture_method) as `manual` when creating the Checkout Session. This parameter instructs Stripe to authorize the amount but not capture it on the customer’s payment method.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d mode=payment \
  -d ui_mode=custom \
  -d "payment_intent_data[capture_method]"=manual
```

With the above approach, you tell Stripe that you can only use “capture after” for a Checkout Session with eligible payment methods.

#### Payment Intents API

To indicate that you want separate authorization and capture, specify [capture\_method](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-capture_method) as `manual` when creating the PaymentIntent. This parameter instructs Stripe to authorize the amount but not capture it on the customer’s payment method.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=card \
  -d capture_method=manual
```

With the above approach, you tell Stripe that you can only use “capture after” for a PaymentIntent with eligible payment methods. For example, you can’t accept card payments and SEPA Direct Debit (which doesn’t support capture after) for a single PaymentIntent. To accept payment methods that might not all support capture after, you can configure capture-after-per-payment-method by configuring `capture_method=manual` on the `payment_method_options[<payment_method_type>]` object.

For example, by configuring `payment_method_options[card][capture_method]=manual`, you’re placing only card payments on hold. You can manage payment methods from the [Dashboard](https://dashboard.stripe.com/settings/payment_methods). Stripe handles the logic for [dynamically displaying](https://docs.stripe.com/payments/payment-methods/dynamic-payment-methods.md) the most relevant eligible payment methods to each customer based on factors such as the transaction’s amount, currency, and payment flow.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "automatic_payment_methods[enabled]"=true \
  -d "payment_method_options[card][capture_method]"=manual
```

Alternatively, you can list `card` and `sepa_debit` using [payment method types](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_types) like in the example below.

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=eur \
  -d "payment_method_types[]"=card \
  -d "payment_method_types[]"=sepa_debit \
  -d "payment_method_options[card][capture_method]"=manual
```

Before continuing to capture, attach a payment method with card details to the PaymentIntent, and authorize the card by confirming the PaymentIntent. You can do this by setting the `payment_method` and `confirm` fields on the PaymentIntent.

> #### Extended authorizations
>
> Usually, an authorization for an online card payment is valid for 7 days. To increase the validity period, you can [place an extended hold on an online card payment](https://docs.stripe.com/payments/extended-authorization.md).

## Capture the funds

> #### Checkout Sessions has a PaymentIntent ID
>
> If you’re using the Checkout Sessions API, make sure you use the [PaymentIntent ID](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-payment_intent) that is returned in the Checkout Session object.

After the payment method is authorized, the PaymentIntent [status](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-status) transitions to `requires_capture`. To capture the authorized funds, make a PaymentIntent [capture](https://docs.stripe.com/api/payment_intents/capture.md) request. This captures the total authorized amount by default. To capture less or (for certain online card payments) more than the initial amount, pass the [amount\_to\_capture](https://docs.stripe.com/api/payment_intents/capture.md#capture_payment_intent-amount_to_capture) option. A partial capture automatically releases the remaining amount. If attempting to capture more than the initial amount for an online card payment, refer to the [overcapture documentation](https://docs.stripe.com/payments/overcapture.md).

The following example demonstrates how to capture 7.50 USD of the authorized 10.99 USD payment:

```curl
curl https://api.stripe.com/v1/payment_intents/pi_123/capture \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount_to_capture=750
```

Although some card payments are eligible for [multicapture](https://docs.stripe.com/payments/multicapture.md), you can only perform one capture on an authorized payment for most payments. If you partially capture a payment, you can’t perform another capture for the difference. (Instead, consider [saving the customer’s payment method details for later](https://docs.stripe.com/payments/save-during-payment.md#save-payment-details-for-future-use) and creating future payments as needed.)

Card statements from some issuers and interfaces from payment methods don’t always distinguish between authorizations and captured (settled) payments, which can sometimes confuse customers.

Additionally, when a customer completes the payment process on a PaymentIntent with manual capture, it triggers the `payment_intent.amount_capturable_updated` event. You can inspect the PaymentIntent’s [amount\_capturable](https://docs.stripe.com/api/payment_intents/object.md#payment_intent_object-amount_capturable) property to see the total amount that you can capture from the PaymentIntent.

## Cancel the authorization

If you need to cancel an authorization, you can [cancel the PaymentIntent](https://docs.stripe.com/refunds.md#cancel-payment).

## Capture payment before authorization expires (Private preview)

You can instruct Stripe to automatically capture before authorization expires instead of manually triggering capture for card payment methods. Use automatic delayed capture to ensure you don’t miss capturing authorized payments. You can also specify a custom delay period from authorization to capture.

To enable automatic delayed capture, set [capture\_method](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-payment_method_options-card) as `automatic_delayed` on the PaymentIntent:

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=card \
  -d "payment_method_options[card][capture_method]"=automatic_delayed
```

With this approach, Stripe captures your card payment before the authorization expires, triggering the capture about 6 hours before the expiry time. This serves as a backup process to ensure we capture authorized payments before expiration. You can still manually [capture](https://docs.stripe.com/api/payment_intents/capture.md) or [cancel](https://docs.stripe.com/refunds.md#cancel-payment) the PaymentIntent before it’s automatically captured.

You can specify a custom delay period for capture by including the `capture_delay_days` parameter. This parameter indicates the number of days to delay capture after successful authorization:

```curl
curl https://api.stripe.com/v1/payment_intents \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=1099 \
  -d currency=usd \
  -d "payment_method_types[]"=card \
  -d "payment_method_options[card][capture_method]"=automatic_delayed \
  -d "payment_method_options[card][capture_delay_days]"=3
```

In this example, Stripe automatically captures the PaymentIntent 3 days after successful authorization. This is useful if you know the amount of time needed to perform actions between authorization and capture, while ensuring capture before authorization expires.

> With `capture_method=automatic_delayed`, Stripe prioritizes capturing the payment before authorization expiration. If the authorization window is shorter than the specified delay period, we capture the PaymentIntent before expiration, ignoring the delay period.

## See also

- [Separate authorization and capture with Checkout](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=checkout\&ui=stripe-hosted#auth-and-capture)
- [Place an extended hold on an online card payment](https://docs.stripe.com/payments/extended-authorization.md)
