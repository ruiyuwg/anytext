# Moving money using OutboundPayment objects

Learn how to create outbound payments to move money out of financial accounts to third parties.

`OutboundPayment` objects represent push-based transfers from your financial account to a third-party external account using ACH or wire transfer, or another financial account associated with the same platform instantly using the `stripe` network. For example, if you want to send money from your financial account to your vendor’s external US bank account, you create an `OutboundPayment` to move the funds. The receiving accounts for an `OutboundPayment` are either an external bank account or another financial account.

The typical transfer time for outbound payments can range from minutes (when using the Stripe network), same day, to 1-2 business days (when using the ACH network). For more information, see the [Money movement timelines](https://docs.stripe.com/financial-accounts/connect/money-movement/timelines.md#outboundpayment-and-outboundtransfer-transactions) guide.

## Create an OutboundPayment

Use `POST /v1/treasury/outbound_payments` to create an `OutboundPayment`. Among the request’s possible parameters, the following are required:

- `amount`: Amount in cents to pay.
- `currency`: Three-letter ISO currency code (only `usd` supported).
- `financial_account`: The source financial account funds are sent from.
- `destination_payment_method` or `destination_payment_method_data`: Information about the destination of funds for the payment.
  - With `destination_payment_method`, you must first set up the `PaymentMethod` for outbound flows using a [SetupIntent](https://docs.stripe.com/api/setup_intents.md). You must also specify the customer ID that matches the `Customer` object the `PaymentMethod` is attached to. Alternatively, you can use an existing legacy [BankAccount](https://docs.stripe.com/payments/ach-direct-debit/migrating-from-charges.md) attached to the `Customer` in place of a `PaymentMethod`.
  - With `destination_payment_method_data`, you can specify payment method details inline. You can use this parameter to specify bank account details or when you’re [sending funds to another financial account](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-payments.md#create-obp-for-fa) over the Stripe network.

## Create an OutboundPayment to an external bank account

Use `POST /v1/treasury/outbound_payments` to create an `OutboundPayment` from the financial account identified by the ID in the `financial_account` parameter value of the body. The following request adds `statement_descriptor` and `destination_payment_method_data` information.

```curl
curl https://api.stripe.com/v1/treasury/outbound_payments \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d amount=2000 \
  -d currency=usd \
  -d statement_descriptor=payment_1 \
  -d "destination_payment_method_data[type]"=us_bank_account \
  -d "destination_payment_method_data[us_bank_account][account_holder_type]"=individual \
  -d "destination_payment_method_data[us_bank_account][routing_number]"=110000000 \
  -d "destination_payment_method_data[us_bank_account][account_number]"=1234567890 \
  --data-urlencode "destination_payment_method_data[billing_details][email]"="jenny@example.com" \
  -d "destination_payment_method_data[billing_details][phone]"=7135551212 \
  -d "destination_payment_method_data[billing_details][address][city]"=Alvin \
  -d "destination_payment_method_data[billing_details][address][state]"=TX \
  -d "destination_payment_method_data[billing_details][address][postal_code]"=77511 \
  -d "destination_payment_method_data[billing_details][address][line1]"="123 Main St." \
  -d "destination_payment_method_data[billing_details][name]"="Jenny Rosen"
```

If successful, the response returns the newly created `OutboundPayment`.

#### JSON (commented)

```json
{
  "id": "{{OUTBOUND_PAYMENT_ID}}",
  "object": "outbound_payment",
  // The source FinancialAccount. Funds are pulled from this account.
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  // The amount to send. 10.00 USD in this case.
  "amount": 1000,
  "cancelable": true | false,
  "currency": "usd",
  // The destination payment method. Either this or `destination_payment_method_data`
  // must be specified. Use this parameter if you wish to use a reusable
  // Customer-attached PaymentMethod or a legacy BankAccount for the OutboundPayment.
  "destination_payment_method": null | "{{PAYMENTMETHOD_ID}}" | "{{BANK_ACCOUNT_ID}}",
  // The destination payment method. Either this or `destination_payment_method`
  // must be specified. Use this parameter if you do not need a reusable
  // PaymentMethod for the OutboundPayment.
  "destination_payment_method_data": null | {
    "type": "us_bank_account",
    "us_bank_account": {
      "routing_number": "12341234",
      "account_number": "0123456789",
      "account_holder_type": "individual" | "company"
    },
    "billing_details": {
      // `name` must be specified for `us_bank_account` type
      "name": "Jenny Rosen",
      "phone": null | "{{String}}",
      "email": null | "{{String}}",
      "address": null | {
        "line1": null | "{{String}}",
        "line2": null | "{{String}}",
        "city": null | "{{String}}",
        "state": null | "{{String}}",
        "postal_code": null | "{{String}}",
        "country": null | "{{String}}"
      }
    }
  },
  // Optional. To explicitly specify a network, override the `network` value of
  // `destination_payment_method_options`
  "destination_payment_method_options": {
    "us_bank_account": {
      "network": "ach" | "us_domestic_wire"
    }
  },
  // Must be specified if passing in `destination_payment_method` and must match
  // the Customer to which the PaymentMethod is attached. Can also be optionally
  // passed in with `destination_payment_method_data`. The Customer represents
  // the recipient of the OutboundPayment.
  "customer": null | "{{CUSTOMER_ID}}",
  // An internal description for the OutboundPayment.
  "description": null | "Testing",
  // A descriptor for the OutboundPayment to send
  // to the network. For `ach` and `us_domestic_wire` networks,
  // this is the statement descriptor on the bank statement.
  // - `ach`: maximum 10 characters
  // - `us_domestic_wire`: maximum 140 characters
  "statement_descriptor": "payment_1",
  "end_user_details": {
    // When making requests on behalf of a user, set `end_user_details.present=true`
    // and pass the user's IP address.
    // If the request is on behalf of yourself (initiating transfers out of your
    // FinancialAccounts), `end_user_details.present` should be set to `false`
    "present": true | false,
    // You are required to collect the IP address of the creator of this transfer for
    // risk and compliance reasons. This will be used to help determine if this transfer
    // is authorized or should be blocked.
    "ip_address": "127.0.0.1"
  },
  // We will not support updating OutboundPayments after creation. As such, the
  // metadata can only be set at creation time.
  "metadata": null | {{Hash}},
}
```

### Same-day ACH

> Same-day ACH is currently in preview with limited availability, subject to Stripe review and approval. To request access, email <treasury-support@stripe.com>.
>
> If you don’t have access, API calls that include same-day ACH features or parameters return an error.

Using same-day ACH enables sending funds that arrive the same business day if the `OutboundPayment` call successfully completes before the [cutoff time](https://docs.stripe.com/financial-accounts/connect/money-movement/timelines.md#bank-partner-timelines--outbound). To use same-day ACH, set the `destination_payment_method_options.us_bank_account.network` parameter to `ach` and the `destination_payment_method_options.us_bank_account.ach.submission` parameter to `same_day`.

### Wire transfer: routing numbers

Some banks might use a separate wire transfer routing number that differs from ACH. Consequently, you might receive an error during wire creation if the routing number on the payment method doesn’t support wire transfers. If you receive this error, you need to add a new payment method with your bank’s wire routing number.

### Wire transfer: recipient address

Wire transfers require ACH metadata plus recipient name and billing address. The address is the address of the account holder receiving the wire, not the address of their bank.

When entering the `billing_details.address` for a payment method, all address fields must be complete. Attempting to send a wire with incomplete fields on the `billing_details.address` results in an error.

> When sending a wire using an `OutboundTransfer`, if you don’t fill out any address fields, Stripe defaults to the legal entity of the primary Stripe account holder.

### NACHA payroll compliance

NACHA requires originators to explicitly identify ACH payments intended for payroll. When sending an OutboundPayment, set the `purpose` parameter to `payroll` to ensure compliance with this requirement.

## Create an OutboundPayment to a financial account

To move money between financial accounts, call `POST /v1/treasury/outbound_payments` on the origin account and specify the destination account in the `destination_payment_method_data` parameter. Both financial accounts must be associated with the same platform, but can’t be associated with the same connected account. To transfer money between financial accounts associated with the same connected account, use an [OutboundTransfer](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-transfers.md).

```curl
curl https://api.stripe.com/v1/treasury/outbound_payments \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account={{SOURCE_FINANCIAL_ACCOUNT_ID}} \
  -d amount=2000 \
  -d currency=usd \
  -d statement_descriptor="Test outbound payment to FA" \
  -d "destination_payment_method_data[type]"=financial_account \
  -d "destination_payment_method_data[financial_account]"={{DESTINATION_FINANCIAL_ACCOUNT_ID}}
```

The body of your request must be `x-www-form-urlencoded`, but the following JSON defines the data you can send.

#### JSON (commented)

```json
{
  // The source FinancialAccount. Funds are pulled from this account.
  "financial_account": "{{SOURCE_FINANCIAL_ACCOUNT_ID}}",
  // The amount to send.
  "amount": 1000,
  "currency": "usd",
  // The destination payment method. This parameter is the only way to
  // send an OutboundPayment through the `stripe` network.
  "destination_payment_method_data": {
    "type": "financial_account",
    "financial_account": "{{DESTINATION_FINANCIAL_ACCOUNT_ID}}"
  },
  // Optional. The Customer represents the recipient of the OutboundPayment.
  "customer": null | "{{CUSTOMER_ID}}",
  // An internal description for the OutboundPayment.
  "description": null | "Testing",
  // A descriptor for the OutboundPayment to send to the `stripe` network.
  // Maximum 500 characters.
  "statement_descriptor": "Test outbound payment to FA",
  "end_user_details": {
    // When making requests on behalf of a user, set `end_user_details.present=true`
    // and pass the user's IP address.
    // If the request is on behalf of yourself (initiating transfers out of your
    // FinancialAccounts), `end_user_details.present` should be set to `false`
    "present": true | false,
    // You are required to collect the IP address of the creator of this transfer for
    // risk and compliance reasons. This will be used to help determine if this transfer
    // is authorized or should be blocked.
    "ip_address": "127.0.0.1"
  },
  // We will not support updating OutboundPayments after creation. As such, the
  // metadata can only be set at creation time.
  "metadata": null | {{Hash}},
}
```

## Retrieve an OutboundPayment

Use `GET /v1/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}}` to retrieve details for the `OutboundPayment` with the associated ID.

```curl
curl https://api.stripe.com/v1/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

If successful, the response returns the `OutboundPayment` object with the associated ID. Some of the parameters in the response have additional details that are only returned when you add them as values to the `expand[]` parameter. The fields that you can expand have an “Expandable” comment in the following response example. See [Expanding Responses](https://docs.stripe.com/api/expanding_objects.md) to learn more about expanding object responses.

#### JSON (commented)

```json
{
  "id": "{{OUTBOUND_PAYMENT_ID}}",
  "object": "outbound_payment",
  "livemode": true | false,
  "created": "{{Timestamp}}",
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}", // Expandable
  "amount": 1000,
  "currency": "usd",
  // Will only be set if `destination_payment_method` was used during the creation of
  // the OutboundPayment
  "destination_payment_method": "{{PAYMENT_METHOD_ID}}",
  "destination_payment_method_details": null | {
    "type": "us_bank_acount" | "financial_account",
    "billing_details": {
      "name": null | "{{String}}",
      "phone": null | "{{String}}",
      "email": null | "{{String}}",
      "address": null | {
        "line1": null | "{{String}}",
        "line2": null | "{{String}}",
        "city": null | "{{String}}",
        "state": null | "{{String}}",
        "postal_code": null | "{{String}}",
        "country": null | "{{String}}"
      }
    },
    // Will only be set if type is `us_bank_account`
    "us_bank_account": {
      "network": "ach" | "us_domestic_wire",
      "routing_number": "12341234",
      "last4": "6789",
      "account_holder_type": "company",
      "bank_name": "Bank A",
      "fingerprint": "abc123"
    },
    // Will only be set if type is `financial_account`
    "financial_account": {
      "id": "{{DESTINATION_FINANCIAL_ACCOUNT_ID}}",
      "network": "stripe"
    }
  },
  // If the OutboundPayment hasn't yet been sent, this field is `true`, indicating
  // that the user may still cancel through the /cancel endpoint
  // (POST /v1/treasury/outbound_payments/obp_123/cancel)
  "cancelable": true | false,
  "description": "Testing",
  "statement_descriptor": "payment_1",
  // A unique, Stripe-hosted direct link to the regulatory receipt for the OutboundPayment
  "hosted_regulatory_receipt_url": "{{Url}}",
  // See the "OutboundPayment states" section below
  "status": "processing" | "canceled" | "failed" | "posted" | "returned",
  "status_transitions": {
    "processing_at": null | "{{Timestamp}}",
    "canceled_at": null | "{{Timestamp}}",
    "failed_at": null | "{{Timestamp}}",
    "posted_at": null | "{{Timestamp}}",
    "returned_at": null |"{{Timestamp}}"
  },
  // The local date when funds are expected to arrive in the
  // destination account.
  // Set once the status is processing
  // Can change once set (for example, due to a partner delay) - Stripe will fire a
  // `treasury.outbound_payment.expected_arrival_date_updated` webhook when it does
  "expected_arrival_date": null | "{{Timestamp}}",
  // If the OutboundPayment has been returned, this field will be included with more
  // information about the return, including the Transaction that returns the funds.
  // See the "Handling Returned Funds" section below for more details on Returns.
  "returned_details": {
    "code": "account_closed" |
            "account_frozen" |
            "bank_account_restricted" |
            "bank_ownership_changed" |
            "could_not_process" |
            "invalid_account_number" |
            "incorrect_account_holder_name" |
            "invalid_currency" |
            "no_account" |
            "declined", // Generic fallback code
    // Human readable reason for the return. This message is geared towards the
    // end user, to help them determine next steps.
    "message": "The destination has been closed." |
               "The destination has been frozen." |
               "The destination bank account has restrictions on either the type or number of transfers allowed. This normally indicates that the bank account is a savings or other non-checking account." |
               "The destination bank account is no longer valid because its branch has changed ownership." |
               "The destination could not process this OutboundPayment." |
               "The destination bank account details on file are probably incorrect. The routing number seems correct, but the account number is invalid." |
               "The destination bank account details on file may be incorrect." |
               "The destination was unable to process this OutboundPayment because of its currency." |
               "The details of the destination may be incorrect." |
               "The destination has declined this OutboundPayment.",
    "transaction": "trxn_456" // Expandable
  },
  // If available, this field shows network-specific tracking information.
  // Tracking details can appear anytime after the object is no longer cancelable.
  // Stripe sends the `treasury.outbound_payment.tracking_details_updated` event
  // when this field is updated.
  "tracking_details": null | {
    "type": "ach" | "us_domestic_wire",
    // Only set for ACH transfers
    "ach": null | {
      "trace_id": "12345678901234"
    },
    // Only set for wire transfers
    "us_domestic_wire": null | {
      "imad": "20230101MMQFMPD1001234",
      "omad": "20230101MMQFMPD1002345"
    }
  }
  // Transaction representing balance impact of the OutboundPayment, created
  // synchronously with the OutboundPayment.
  // OutboundPayments always have a Transaction from creation (the funds are
  // held immediately).
  // If the OutboundPayment fails, the Transaction will be voided.
  // If the OutboundPayment is returned, its Transaction remains posted. Funds are
  // returned to the balance with returned_details.transaction
  "transaction": "{{TRANSACTION_ID}}", // Expandable
  "end_user_details": {
    "present": true,
    "ip_address": "127.0.0.1"
  },
  "metadata": {}
}
```

## Cancel an OutboundPayment

Use `POST /v1/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}}/cancel` to cancel the `OutboundPayment` with the associated ID. The `OutboundPayment` object includes a `cancelable` parameter with a Boolean value to indicate whether you can cancel the transfer. After an `OutboundPayment` submits to the network, the `cancelable` value becomes `false` and you receive an error from this endpoint for that transfer.

```curl
curl -X POST https://api.stripe.com/v1/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}}/cancel \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

If successful, the response returns the `OutboundPayment` object with the `status` value set to `canceled`.

```json
{
  "id": "{{OUTBOUND_PAYMENT_ID}}",
  "object": "outbound_payment",
  "livemode": false,
  "created": 123456,
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  "amount": 1000,
  "currency": "usd",
  ...
  "status": "canceled",
  "status_transitions": {
    "processing_at": null,
    "canceled_at": 123456,
    "failed_at": null,
    "posted_at": null,
    "returned_at": null
  },
  ...
}
```

## List OutboundPayments

Use `GET /v1/treasury/outbound_payments` to list the `OutboundPayments` from the financial account with the associated ID. You can filter the list with the standard list parameters or by `status` or by `customer`.

```
{
  // Standard list parameters
  "limit", "starting_after", "ending_before",
  // Filter by status
  "status": "processing" | "canceled" | "failed" | "posted" | "returned",
  // Filter by FinancialAccount (Required)
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  // Filter by Customer
  "customer": "{{CUSTOMER_ID}}",
}
```

The following request retrieves the last five [OutboundPayment objects](https://docs.stripe.com/api/treasury/outbound_payments/object.md) for the financial account attached to the platform and paid to the identified `Customer`.

```curl
curl -G https://api.stripe.com/v1/treasury/outbound_payments \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d limit=5 \
  -d customer="{{CUSTOMER_ID}}"
```

## OutboundPayment states

The following table describes each status and what the possible transition states are.

| STATUS                | DESCRIPTION                                                                                                                                                                                                                       | CAN TRANSITION TO STATE        |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `processing`          | The `OutboundPayment` starting state. Funds are allotted to a pending transaction (but are still part of the current balance). The user can cancel the `OutboundPayment` while the value of the `cancelable` parameter is `true`. | `posted`, `canceled`, `failed` |
| `failed` (terminal)   | `OutboundPayment` failed to confirm. Stripe voids the pending transaction and returns the funds to the user.                                                                                                                      | N/A                            |
| `canceled` (terminal) | A user canceled the `OutboundPayment` before posting. Stripe voids the pending transaction and returns the funds to the user.                                                                                                     | N/A                            |
| `posted`              | The `OutboundPayment` posted and funds have left the account. The underlying transaction posts.                                                                                                                                   | `returned`                     |
| `returned` (terminal) | `OutboundPayment` failed to successfully arrive at the destination. Funds return to the user with a transaction (`returned_details[transaction]`).                                                                                | N/A                            |

## Test OutboundPayments

To test your integration end-to-end, we recommend using test [SetupIntent requests](https://docs.stripe.com/financial-accounts/connect/moving-money/working-with-bankaccount-objects.md#setupintents) to create a `PaymentMethod`, then passing that `PaymentMethod` into an `OutboundPayment` creation request using the `destination_payment_method` parameter.

Stripe also allows test `PaymentMethod` tokens and numbers to trigger specific functionality:

- By passing in a test `PaymentMethod` token to `destination_payment_method` (for `ach` and `us_domestic_wire` networks)
  - If you’re passing in a test `PaymentMethod` token directly into `destination_payment_method`, you must still pass in a customer ID to the `customer` parameter. For convenience, Stripe allows you to pass in any existing test customer. This differs from live mode, which requires the existing `PaymentMethod` to be attached to a `Customer` and that same customer ID passed into the `customer` parameter.
- By passing in test routing and account numbers to `destination_payment_method_data[us_bank_account]` (for `ach` and `us_domestic_wire` networks).
- By passing in the ID of an existing test financial account owned by an intra-platform account to `destination_payment_method_data[financial_account]` (for Stripe network).

In all cases, the `OutboundPayment` response returns the processing status. Stripe triggers [webhooks](https://docs.stripe.com/webhooks.md) for the relevant state transitions, and fetching the `OutboundPayment` after creation returns the expected state.

| CREATES                                                                                                                                 | DESTINATION\_PAYMENT\_METHOD (WITH ANY EXISTING TEST CUSTOMER) | DESTINATION\_PAYMENT\_METHOD\_DATA\[US\_BANK\_ACCOUNT]                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| `OutboundPayment` in initial processing state                                                                                           | `pm_usBankAccount_processing`                                | - `routing_number`: 110000000

- `account_number`: 000000000009 |
  | `OutboundPayment` that transitions to `posted` (from `processing`)                                                                      | `pm_usBankAccount`                                           | - `routing_number`: 110000000
- `account_number`: 000123456789 |
  | `OutboundPayment` that transitions to `posted` (from `processing`), additionally adding one day to the original `expected_arrival_date` | `pm_usBankAccount_expectedArrivalDateUpdated`                | - `routing_number`: 110000000
- `account_number`: 000123457890 |
  | `OutboundPayment` that transitions to `canceled` (from `processing`)                                                                    | `pm_usBankAccount_canceledByUser`                            | - `routing_number`: 110000000
- `account_number`: 000000000123 |
  | `OutboundPayment` that transitions to `failed` (from `processing`)                                                                      | `pm_usBankAccount_internalFailure`                           | - `routing_number`: 110000000
- `account_number`: 000000000234 |
  | `OutboundPayment` that transitions to `returned` due to account closure (from processing after posted)                                  | `pm_usBankAccount_accountClosed`                             | - `routing_number`: 110000000
- `account_number`: 000111111113 |
  | `OutboundPayment` that transitions to returned due to no account (from processing after posted)                                         | `pm_usBankAccount_noAccount`                                 | - `routing_number`: 110000000
- `account_number`: 000111111116 |
  | `OutboundPayment` that transitions to `returned` due to invalid account number (from processing after posted)                           | `pm_usBankAccount_invalidAccountNumber`                      | - `routing_number`: 110000000
- `account_number`: 000111111119 |

### OutboundPayment test helper endpoints

Stripe provides endpoints to help you test `OutboundPayments` in different states. Use the test endpoints to move an `OutboundPayment` you create directly to a new state of `posted`, `failed`, or `returned`.

- Use the [test post endpoint](https://docs.stripe.com/api/treasury/outbound_payments/test_mode_post.md) to move the identified `OutboundPayment` from `processing` to `posted`.

  `POST /v1/test_helpers/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}}/post`

- Use the [test fail endpoint](https://docs.stripe.com/api/treasury/outbound_payments/test_mode_fail.md) to move the identified `OutboundPayment` from `processing` to `failed`.

  `POST /v1/test_helpers/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}}/fail`

- Use the [test return endpoint](https://docs.stripe.com/api/treasury/outbound_payments/test_mode_return.md) to move the identified `OutboundPayment` from `processing` to `returned`.

  `POST /v1/test_helpers/treasury/outbound_payments/{{OUTBOUND_PAYMENT_ID}}/return`

These endpoints are particularly useful when testing error scenarios, such as returns, which would otherwise require outside action.

For the `return` endpoint, include the optional `returned_details.code` parameter in the body to indicate why the transfer was returned. If not provided, the transfer defaults to the `declined` return code.

```json
{
  "returned_details": {
    "code": "account_closed" |
          "account_frozen" |
          "bank_account_restricted" |
          "bank_ownership_changed" |
          "could_not_process" |
          "invalid_account_number" |
          "incorrect_account_holder_name" |
          "invalid_currency" |
          "no_account" |
          "declined"
  }
}
```

We also provide a [test update endpoint](https://docs.stripe.com/api/treasury/outbound_payments/test_mode_update.md) to simulate the posting of tracking details on a test `Outbound Payment`. The `tracking_details` field can only be set for test objects.

In all cases, Stripe triggers [webhooks](https://docs.stripe.com/webhooks.md) for each relevant state transition, and fetching the `OutboundPayment` after transition returns the expected state.

## OutboundPayment webhooks

Stripe emits the following `OutboundPayment` events to your [webhook](https://docs.stripe.com/webhooks.md) endpoint:

- `treasury.outbound_payment.created` on `OutboundPayment` creation.
- `treasury.outbound_payment.{{new_status}}` when an `OutboundPayment` changes status. Available status value options include:
  - `treasury.outbound_payment.posted`
  - `treasury.outbound_payment.failed`
  - `treasury.outbound_payment.canceled`
  - `treasury.outbound_payment.returned`
- `treasury.outbound_payment.expected_arrival_date_updated` when the `expected_arrival_date` of an `OutboundPayment` changes.
- `treasury.outbound_payment.tracking_details_updated` when the tracking details for an `OutboundPayment` are updated.
