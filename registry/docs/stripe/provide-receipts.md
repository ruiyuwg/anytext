# Provide receipts

Use Stripe to provide your customers with receipts that meet card network rules.

Receipts for payments created using your [test API keys](https://docs.stripe.com/keys.md#test-live-modes) aren’t sent automatically. Instead, you can view or manually send a receipt using the [Dashboard](https://dashboard.stripe.com/payments).

Card network rules and local regulatory requirements are different for in-person payments. If you accept payments using Stripe Terminal, you must provide customers with the option to receive a physical or email receipt. Stripe provides everything you need to start offering receipts with your first transaction.

Receipts must contain certain fields to comply with card network rules. You can use Stripe’s [prebuilt email receipts](https://docs.stripe.com/terminal/features/receipts.md#prebuilt), or use receipt data from the Stripe API and your Terminal integration to generate on-brand [custom receipts](https://docs.stripe.com/terminal/features/receipts.md#custom).

## Prebuilt email receipts

Prebuilt email receipts already include all card network-required fields. It’s the simplest way to set up compliant receipts.

- [receipt\_email](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-receipt_email)
- [receiptEmail (iOS)](https://stripe.dev/stripe-terminal-ios/docs/Classes/SCPPaymentIntentParameters.html#/c:objc\(cs\)SCPPaymentIntentParameters\(py\)receiptEmail)
- [receiptEmail (Android)](https://stripe.dev/stripe-terminal-android/external/com.stripe.stripeterminal.external.models/-payment-intent-parameters/receipt-email.html)
- [receiptEmail (React Native)](https://stripe.dev/stripe-terminal-react-native/api-reference/index.html#CreatePaymentIntentParams)
- [receiptEmail (Java)](https://stripe.dev/stripe-terminal-java/external/com.stripe.stripeterminal.external.models/-payment-intent-parameters/receipt-email.html)

If you have the customer’s email, use the [receipt\_email](https://docs.stripe.com/api/payment_intents/create.md#create_payment_intent-receipt_email) field when creating a PaymentIntent. When you provide a `receipt_email`, Stripe automatically emails a compliant receipt to the customer when [capturing](https://docs.stripe.com/terminal/payments/collect-card-payment.md#capture-payment) the PaymentIntent.

To trigger an automatic email receipt *after* the customer checks out, update the PaymentIntent’s `receipt_email` with the customer’s email.

For more information about automatic email receipts, see [Email Receipts](https://docs.stripe.com/receipts.md).
![](https://b.stripecdn.com/docs-statics-srv/assets/terminal-pre-built-receipt.64db66739eaf8f8db1f9dd61c463a322.png)

## Custom receipts

You can also customize receipts to include any design and content you want—as long as you list required information. When you accept in-person payments with *EMV* (EMV refers to the standards governing acceptance of chip-enabled cards and some contactless payment methods. Today most payment cards issued around the world support EMV) chip cards, card networks require you to include several fields on the receipts you provide to customers.

The Stripe API allows you to fetch necessary fields for compliance-ready receipts.

The following fields become available in the PaymentIntent object as soon as the payment is [confirmed](https://docs.stripe.com/terminal/payments/collect-card-payment.md#confirm-payment).

| Field                            | Name                   | Requirement                   |
| -------------------------------- | ---------------------- | ----------------------------- |
| `account_type`                   | Account Type           | **Required** (Optional in US) |
| `application_preferred_name`     | Application name       | **Required**                  |
| `dedicated_file_name`            | AID                    | **Required**                  |
| `authorization_response_code`    | ARC                    | Optional                      |
| `application_cryptogram`         | Application Cryptogram | Optional                      |
| `terminal_verification_results`  | TVR                    | Optional                      |
| `transaction_status_information` | TSI                    | Optional                      |

- [receipt](https://docs.stripe.com/api/charges/object.md#charge_object-payment_method_details-card_present-receipt)
- [ReceiptDetails (iOS)](https://stripe.dev/stripe-terminal-ios/docs/Classes/SCPReceiptDetails.html)
- [ReceiptDetails (Android)](https://stripe.dev/stripe-terminal-android/external/com.stripe.stripeterminal.external.models/-receipt-details/index.html)
- [ReceiptDetails (React Native)](https://stripe.dev/stripe-terminal-react-native/api-reference/index.html#ReceiptDetails)
- [ReceiptDetails (Java)](https://stripe.dev/stripe-terminal-java/external/com.stripe.stripeterminal.external.models/-receipt-details/index.html)

You can access these fields server-side using the Stripe API, or client-side using the Stripe Terminal SDKs. When using the JavaScript SDK, the PaymentIntent object matches the [API object](https://docs.stripe.com/api/payment_intents/object.md).

Whether you’re emailing or printing your custom receipts for Terminal payments, be sure to include the **required** fields to meet card network rules. If provided, you can also access the cardholder’s preferred language (based on the presented card’s settings), using the `preferred_locales` field on the [Payment Method](https://docs.stripe.com/api/payment_methods/object.md#payment_method_object-card_present-preferred_locales) object.
