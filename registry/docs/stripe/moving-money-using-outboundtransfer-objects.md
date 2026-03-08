# Moving money using OutboundTransfer objects

Learn how to transfer money out of financial accounts to external accounts.

An `OutboundTransfer` object facilitates money movement out of a financial account. Use `OutboundTransfer` to send funds over ACH rails or through a domestic wire transfer to an external bank account that a connected account owns.

Outbound transfers typically arrive at the receiving bank between the same day and 2 business days, depending on whether you use a wire or ACH.

> (Multi FA beta) If enrolled in the Multi FA beta, you can use `OutboundTransfer` to send funds over `stripe` network rails to another financial account associated with the same connected account. Funds arrive in the destination financial account within minutes.

For more information, see the [Money movement timelines](https://docs.stripe.com/financial-accounts/connect/money-movement/timelines.md#outboundpayment-and-outboundtransfer-transactions) guide.

`OutboundTransfers` support the `us_bank_account` type of payment method. Alternatively, you can use an existing [BankAccount](https://docs.stripe.com/payments/ach-direct-debit/migrating-from-charges.md) that belongs to the merchant as an [ExternalAccount](https://docs.stripe.com/api/external_accounts.md).

## Create an OutboundTransfer

Use `POST /v1/treasury/outbound_transfers` to create an [OutboundTransfer](https://docs.stripe.com/api/treasury/outbound_transfers/create.md) for the financial account with the associated ID. Among the request’s possible parameters, four are required:

- `amount`: Amount of transfer in cents.
- `currency`: Three-letter ISO currency code.
- `financial_account`: Source financial account ID to pull funds from.
- `destination_payment_method`: Destination `PaymentMethod` ID or `BankAccount` ID to receive funds.
- `destination_payment_method_data`: Financial account to receive funds.

```json
{
  // The source financial account to pull funds from.
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  // The amount to send. 10.00 USD in this case.
  "amount": 1000,
  "currency": "usd",
  // The destination PaymentMethod or BankAccount.
  // This should be nil if destination_payment_method is set.
  destination_payment_method_data: {
  type: "financial_account", // us_bank_account is not supported
  financial_account: "{{FINANCIAL_ACCOUNT_ID}}",
  },

  // This should be nil if destination_payment_method_data is set.
  "destination_payment_method": "{{PAYMENT_METHOD_ID}}"  | "{{BANK_ACCOUNT_ID}}",
  // Optionally, to explicitly specify a network, override the `network` value
  // This should be nil if destination_payment_method_data is set.
  "destination_payment_method_options": {
    "us_bank_account": {
      "network": "ach" | "us_domestic_wire"
    }
  },
  // A description visible on the external bank statement.
  "statement_descriptor": "Bank xfer",
  // An optional internal description to identify this OutboundTransfer
  "description": "Transfer to my external account",
  // Stripe doesn't support updating originated transfers after creation.
  // You can only set metadata at creation.
  "metadata": nil | Hash,
}
```

The following request creates an `OutboundTransfer` on an account-attached `PaymentMethod` with the source of funds coming from the identified financial account.

```curl
curl https://api.stripe.com/v1/treasury/outbound_transfers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d amount=1000 \
  -d currency=usd \
  -d destination_payment_method="{{PAYMENTMETHOD_ID}}" \
  -d statement_descriptor="Test xfer" \
  -d "destination_payment_method_options[us_bank_account][network]"=ach
```

If successful, the response returns the newly created `OutboundTransfer` object.

```json
{
    "id": "{{OUTBOUND_TRANSFER_ID}}",
    "object": "outbound_transfer",
    "amount": 1000,
    "cancelable": true,
    "created": 1648479987,
    "currency": "usd",
    "description": null,
    "destination_payment_method": "{{PAYMENT_METHOD_ID}}" | null,
    "destination_payment_method_details": {
        "billing_details": {
            "address": {
                "city": null,
                "country": null,
                "line1": null,
                "line2": null,
                "postal_code": null,
                "state": null
            },
            "email": null,
            "name": null,
            "phone": null
        },
        "type": "financial_account",
        "financial_account": {
          "id": "{{FINANCIAL_ACCOUNT_ID}}",
          "network": "stripe",
        },
    },
    "expected_arrival_date": 1648512000,
    "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
    "hosted_regulatory_receipt_url": "https://payments.stripe.com/regulatory-receipt/{{URL_ID}}",
    "livemode": false,
    "metadata": {},
    "returned_details": null,
    "statement_descriptor": "Test xfer",
    "status": "processing",
    "status_transitions": {
        "canceled_at": null,
        "failed_at": null,
        "posted_at": null,
        "returned_at": null
    },
    "transaction": "{{TRANSACTION_ID}}"
}
```

### Same-day ACH

> Same-day ACH is currently in preview with limited availability, subject to Stripe review and approval. To request access, email <treasury-support@stripe.com>.
>
> If you don’t have access, API calls that include same-day ACH features or parameters return an error.

Using same-day ACH enables sending funds that arrive the same business day if the `OutboundTransfer` call successfully completes before the [cutoff time](https://docs.stripe.com/financial-accounts/connect/money-movement/timelines.md#bank-partner-timelines--outbound). To use same-day ACH, set the `destination_payment_method_options.us_bank_account.network` parameter to `ach` and the `destination_payment_method_options.us_bank_account.ach.submission` parameter to `same_day`.

### Wire transfer: routing numbers

Some banks might use a separate wire transfer routing number that differs from ACH. Consequently, you might receive an error during wire creation if the routing number on the payment method doesn’t support wire transfers. If you receive this error, you need to add a new payment method with your bank’s wire routing number.

### Wire transfer: recipient address

Wire transfers require ACH metadata plus recipient name and billing address. The address is the address of the account holder receiving the wire, not the address of their bank.

When entering the `billing_details.address` for a payment method, all address fields must be complete. Attempting to send a wire with incomplete fields on the `billing_details.address` results in an error.

> When sending a wire using an `OutboundTransfer`, if you don’t fill out any address fields, Stripe defaults to the legal entity of the primary Stripe account holder.

## Retrieve an OutboundTransfer

Use `GET /v1/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}}` to retrieve details for the `OutboundTransfer` with the associated ID.

The following request retrieves the `OutboundTransfer` with the associated ID, expanding the details of the `Transaction`.

```curl
curl -G https://api.stripe.com/v1/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "expand[]"=transaction
```

If successful, the response returns the `OutboundTransfer` object with the associated ID. Some of the parameters in the response have additional details that are only returned when you add them as values to the `expand[]` parameter. The fields that you can expand have an “Expandable” comment in the following response example. See [Expanding Responses](https://docs.stripe.com/api/expanding_objects.md) to learn more about expanding object responses.

#### JSON (commented)

```json
{
  "id": "{{OUTBOUND_TRANSFER_ID}}",
  "object": "outbound_transfer",
  "livemode": Boolean,
  "created": Timestamp,
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}", // Expandable
  "amount": 1000,
  "currency": "usd",
  "destination_payment_method": "{{PAYMENT_METHOD_ID}}",
  "description": "Transfer to my external account",
  "statement_descriptor": "Bank xfer",
  // For more information about status, see [OutboundTransfer states](#outbound-transfer-states)
  "status": "processing" | "failed" | "posted" | "returned" | "canceled",
  "status_transitions": {
    "canceled_at": nil | Timestamp,
    "failed_at": nil | Timestamp,
    "posted_at": nil | Timestamp,
    "returned_at": nil | Timestamp,
  },
  // The local date when funds are expected to arrive in the
  // destination account
  // Set once the status is processing
  // Can change once set (for example, due to a partner delay) - Stripe fires a
  // `treasury.outbound_transfer.expected_arrival_date_updated` webhook when it does
  "expected_arrival_date": Timestamp,
  // Transaction representing balance impact of the OutboundTransfer, created
  // synchronously with the OutboundTransfer
  // OutboundTransfer always have a Transaction from creation (the funds are
  // held immediately).
  // If the OutboundTransfer fails, the Transaction will be voided
  // If the OutboundTransfer is returned, its Transaction remains posted
  // Funds are returned to the balance with returned_details.transaction
  "transaction": "{{TRANSACTION_ID}}", // Expandable
  // A unique, Stripe-hosted direct link to the regulatory receipt for this OutboundTransfer
  "hosted_regulatory_receipt_url": Url,
  "destination_payment_method_details": nil | {
    "type": "us_bank_acount",
    "billing_details": {
      "name": nil | String,
      "phone": nil | String,
      "email": nil | String,
      "address": nil | {
        "line1": nil | String,
        "line2": nil | String,
        "city": nil | String,
        "state": nil | String,
        "postal_code": nil | String,
        "country": nil | String
      }
    }
  },
  // If the OutboundTransfer hasn't yet been sent, this field is `true`, indicating
  // that the user may still cancel through the cancel endpoint (POST v1/outbound_transfers/obt_123/cancel)
  "cancelable": Boolean,
  // If the OutboundTransfer has been returned, this field will be included with more
  // information about the return, including the transaction that returns the funds
  // The possible return codes and messages are listed below
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
            "declined" // Generic fallback code
    // Human readable reason for the return. This message is geared towards the
    // end user, to help them determine next steps.
    "message": "The destination has been closed." |
               "The destination has been frozen." |
               "The destination bank account has restrictions on either the type or number of transfers allowed. This normally indicates that the bank account is a savings or other non-checking account." |
               "The destination bank account is no longer valid because its branch has changed ownership." |
               "The destination could not process this OutboundTransfer." |
               "The destination bank account details on file are probably incorrect. The routing number seems correct, but the account number is invalid." |
               "The destination bank account details on file may be incorrect." |
               "The destination was unable to process this OutboundTransfer because of its currency." |
               "The details of the destination may be incorrect." |
               "The destination has declined this OutboundTransfer."
    "transaction": "{{TRANSACTION_ID}}" // Expandable
  },
  // If available, this field shows network-specific tracking information.
  // Tracking details can appear anytime after the object is no longer cancelable.
  // Stripe sends the `treasury.outbound_transfer.tracking_details_updated` event
  // when this field is updated.
  "tracking_details": nil | {
    "type": "ach" | "us_domestic_wire",
    // Only set for ACH transfers
    "ach": nil | {
      "trace_id": "12345678901234"
    },
    // Only set for wire transfers
    "us_domestic_wire": nil | {
      "imad": "20230101MMQFMPD1001234",
      "omad": "20230101MMQFMPD1002345"
    }
  },
  "metadata": {},
}
```

## Cancel an OutboundTransfer

Use `POST /v1/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}}/cancel` to cancel the `OutboundTransfer` with the associated ID. The `OutboundTransfer` object includes a `cancelable` parameter with a Boolean value to indicate whether you can cancel the transfer. After an `OutboundTransfer` submits to the network, the `cancelable` value becomes `false` and you receive an error from this endpoint for that transfer.

```curl
curl -X POST https://api.stripe.com/v1/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}}/cancel \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

If successful, the response returns the `OutboundTransfer` object with a status of `canceled`.

```json
{
    "id": "{{OUTBOUND_TRANSFER_ID}} ",
    "object": "outbound_transfer",
    "amount": 1000,
    "cancelable": false,
    "created": 1648487177,
    "currency": "usd",
    ...
    "status": "canceled",
    "status_transitions": {
        "canceled_at": 1648487198,
        "failed_at": null,
        "posted_at": null,
        "returned_at": null
    },
    "transaction": "{{TRANSACTION_ID}}"
}
```

## List OutboundTransfers

Use `GET /v1/treasury/outbound_transfers` to list the `OutboundTransfers` sent from the financial account with the ID of the `financial_account` parameter. You can filter the list with the standard list parameters or by `status`.

```json
{
  // Standard list parameters
  "limit", "starting_after", "ending_before",
  // Filter by status
  "status": "processing" | "posted" | "failed" | "returned" | "canceled",
  // Filter by FinancialAccount (Required)
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
}
```

The following request retrieves `OutboundTransfers` from the financial account identified. The included parameters limit the response to the first three transfers after the `OutboundTransfer` with the provided ID.

```curl
curl -G https://api.stripe.com/v1/treasury/outbound_transfers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d limit=3 \
  -d starting_after={{OUTBOUND_TRANSFER_ID}}
```

If successful, the response returns a list of [OutboundTransfer objects](https://docs.stripe.com/api/treasury/outbound_transfers/object.md) that satisfy any filtering conditions.

## OutboundTransfer states

The following table describes each `status` for `OutboundTransfers` and what the possible transition states are.

| STATUS                | DESCRIPTION                                                                                                                                                                                                                         | TRANSITIONS TO STATE           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `processing`          | The `OutboundTransfer` starting state. Funds are allotted to a pending transaction (but are still part of the current balance). The user can cancel the `OutboundTransfer` while the value of the `cancelable` parameter is `true`. | `posted`, `canceled`, `failed` |
| `canceled` (terminal) | A user canceled the `OutboundTransfer` before posting. Stripe voids the pending transaction and returns the funds to the user.                                                                                                      | N/A                            |
| `posted`              | Stripe has adjusted the Financial Account balance and determined the `OutboundTransfer` is unlikely to be returned.                                                                                                                 | `returned`                     |
| `returned` (terminal) | The `OutboundTransfer` failed to successfully arrive at the destination (for example, due to incorrect account details). Stripe returns the funds to the user with `returned_details[transaction]`.                                 | N/A                            |
| `failed` (terminal)   | The `OutboundTransfer` failed to be sent to the network. Stripe voids the pending transaction and returns the funds to the user. Stripe might use this state to indicate internal errors.                                           | N/A                            |

## Test OutboundTransfers

In testing environments, you can specify the `destination_payment_method` as a test payment method. You can create your own test [PaymentMethods](https://docs.stripe.com/api/payment_methods.md) or use our test IDs when testing your integration.

| TYPE              | OUTCOME                                                                          | PAYMENT METHOD                                |
| ----------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| `us_bank_account` | Default, transitions to `posted`.                                                | `pm_usBankAccount`                            |
| `us_bank_account` | Transitions to `posted`, adds one day to the original `expected_arrival_date`.   | `pm_usBankAccount_expectedArrivalDateUpdated` |
| `us_bank_account` | Remains in `processing`.                                                         | `pm_usBankAccount_processing`                 |
| `us_bank_account` | Transitions to `canceled`.                                                       | `pm_usBankAccount_canceledByUser`             |
| `us_bank_account` | Transitions to `failed`.                                                         | `pm_usBankAccount_internalFailure`            |
| `us_bank_account` | Transitions to `returned` with `returned_details.code="no_account"`.             | `pm_usBankAccount_noAccount`                  |
| `us_bank_account` | Transitions to `returned` with `returned_details.code="account_closed"`.         | `pm_usBankAccount_accountClosed`              |
| `us_bank_account` | Transitions to `returned` with `returned_details.code="invalid_account_number"`. | `pm_usBankAccount_invalidAccountNumber`       |

In all cases, the `OutboundTransfer` response is in the `processing` state. Stripe triggers [webhooks](https://docs.stripe.com/webhooks.md) for the relevant state transitions, and fetching the `OutboundTransfer` after creation returns the expected state.

### OutboundTransfer test helper endpoints

Stripe provides endpoints to help you test `OutboundTransfers` in different states. After creating an `OutboundTransfer`, use these endpoints to move the `OutboundTransfer` directly to a new state of `posted`, `failed`, `canceled`, or `returned`.

- Use the [test post endpoint](https://docs.stripe.com/api/treasury/outbound_transfers/test_mode_post.md) to move the identified `OutboundTransfer` from `processing` to `posted`.

  `POST /v1/test_helpers/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}}/post`

- Use the [test fail endpoint](https://docs.stripe.com/api/treasury/outbound_transfers/test_mode_fail.md) to move the identified `OutboundTransfer` from `processing` to `failed`.

  `POST /v1/test_helpers/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}}/fail`

- Use the [test return endpoint](https://docs.stripe.com/api/treasury/outbound_transfers/test_mode_return.md) to move the identified `OutboundTransfer` from `posted` to `returned`.

  `POST /v1/test_helpers/treasury/outbound_transfers/{{OUTBOUND_TRANSFER_ID}}/return`

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

We also provide a [test update endpoint](https://docs.stripe.com/api/treasury/outbound_transfers/test_mode_update.md) to simulate the posting of tracking details on a test `Outbound Transfer`. The `tracking_details` field can only be set for test objects.

In all cases, Stripe triggers [webhooks](https://docs.stripe.com/webhooks.md) for each relevant state transition, and fetching the `OutboundTransfer` after transition returns the expected state.

## OutboundTransfer webhooks

Stripe emits the following `OutboundTransfer` events to your [webhook](https://docs.stripe.com/webhooks.md) endpoint:

- `treasury.outbound_transfer.created` on OutboundTransfer creation.
- `treasury.outbound_transfer.{{new_status}}` when an OutboundTransfer changes status. Available status value options include:
  - `treasury.outbound_transfer.posted`
  - `treasury.outbound_transfer.failed`
  - `treasury.outbound_transfer.returned`
  - `treasury.outbound_transfer.canceled`
- `treasury.outbound_transfer.expected_arrival_date_updated` when the `expected_arrival_date` of an OutboundTransfer changes.
- `treasury.outbound_transfer.tracking_details_updated` when the tracking details for an `OutboundTransfer` are updated.
