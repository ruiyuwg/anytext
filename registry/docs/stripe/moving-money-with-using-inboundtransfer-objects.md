# Moving money with using InboundTransfer objects

Learn how to transfer money from another account you own into a financial account.

Inbound transfers move money from an external US bank account into a financial account using the ACH network. These transfers are initiated with [InboundTransfer](https://docs.stripe.com/api/treasury/inbound_transfers.md) objects.

Inbound transfers take 2-4 business days to complete unless you’re using the same-day ACH capability. For more information, see the [Money movement timelines](https://docs.stripe.com/financial-accounts/connect/money-movement/timelines.md#inboundtransfer-transactions) guide.

> You can use inbound transfers to move funds from a financial account owner’s bank account. Inbound transfers don’t support moving funds from a third-party external account. To accept funds from a third-party external account into a financial account, use an [ACH Debit](https://docs.stripe.com/payments/ach-direct-debit/accept-a-payment.md) to fund the Payments balance, followed by a [payout to the financial account](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md).

## Create an InboundTransfer

Use `POST /v1/treasury/inbound_transfers` to create an `InboundTransfer` object, which represents pull-based transfers from an external account that you own into your financial account. In other words, you create an `InboundTransfer` to move funds into your financial account by debiting your external US bank account. You must include the following parameters with your request:

- `amount`: The amount in cents to be transferred into the financial account.
- `currency`: Three-letter ISO currency code (`usd` is currently the only supported value).
- `financial_account`: The ID of the financial account receiving the transfer.
- `origin_payment_method`: The source of funds for the inbound transfer. You must first set up the account-attached payment method for inbound flows and verify the bank account using a [SetupIntent](https://docs.stripe.com/api/setup_intents.md). Alternatively, you can use an existing [BankAccount](https://docs.stripe.com/api/customer_bank_accounts.md) previously set up as a verified [ExternalAccount](https://docs.stripe.com/api/external_accounts.md). Whether you use a payment method or a bank account, you need the [account owner’s permission](https://docs.stripe.com/financial-accounts/connect/moving-money/working-with-bankaccount-objects.md) to debit the funds from the account.

The following JSON shows the data you can include in the body of your request.

```json
{
  // The source PaymentMethod or BankAccount. Funds are pulled from this account.
  "origin_payment_method": "{{PAYMENT_METHOD_ID}}" | "{{BANK_ACCOUNT_ID}}",
  // The destination FinancialAccount. Funds arrive in this account.
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  // The amount to debit. 10.00 USD in this case.
  "amount": 1000,
  "currency": "usd",
  // An optional, internal description for the InboundTransfer.
  "description": "Funds for vendor payment payment_234281",
  // An optional descriptor for the InboundTransfer to send
  // to the network with the debit request. Max 10 characters
  "statement_descriptor": "payment_1",
  // Stripe doesn't support updating InboundTransfers after creation.
  // You can only set metadata at creation time.
  "metadata": null | {{Hash}}
}
```

The following request transfers 200 USD using an account-attached payment method into the financial account with the provided ID. The `Stripe-Account` header value identifies the Stripe account that owns both the financial account and the payment method.

```curl
curl https://api.stripe.com/v1/treasury/inbound_transfers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d origin_payment_method="{{PAYMENTMETHOD_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d amount=20000 \
  -d currency=usd \
  -d description="Funds for repair" \
  -d statement_descriptor="Invoice 12"
```

If successful, the response provides the `InboundTransfer` object. The object includes a `hosted_regulatory_receipt_url` that provides access to details of the transaction for the account holder on your platform.

```json
{
    "id": "{{INBOUND_TRANSFER_ID}}",
    "object": "inbound_transfer",
    "amount": 20000,
    "created": 1648071297,
    "currency": "usd",
    "description": "Funds for repair",
    "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
    "hosted_regulatory_receipt_url": "https://payments.stripe.com/regulatory-receipt/{{IBT_URL}}",
    "linked_flows": null,
    "livemode": false,
    "metadata": {},
    "origin_payment_method": "{{PAYMENT_METHOD_ID}}",
    ...
    "statement_descriptor": "Invoice 12",
    "status": "processing",
    ...
}
```

> In rare cases, Stripe might cancel an InboundTransfer request due to various risk factors. In these scenarios, the API request errors with response code 402. The error message provides additional detail on the risk factors that led to the intervention.

### Same-day ACH

> Same-day ACH is currently in preview with limited availability, subject to Stripe review and approval. To request access, email <treasury-support@stripe.com>.
>
> If you don’t have access, API calls that include same-day ACH features or parameters return an error.

Use same-day ACH so funds arrive in the originating financial account the same business day if the `InboundTransfer` succeeds before the [cutoff time](https://docs.stripe.com/financial-accounts/connect/money-movement/timelines.md#bank-partner-timelines--inbound). Otherwise, funds arrive the following business day. Set the `origin_payment_method_options.us_bank_account.ach.submission` parameter to `same_day`.

#### Fraud risk with same-day ACH availability

The fast settlement of same-day ACH inbound transfers can expose your platform to greater financial risk than from standard ACH inbound transfers. For example, a connected account can initiate an inbound transfer that gets returned due to insufficient funds in the source account. Same-day settlement leaves more time to potentially withdraw the funds from the financial account before they’re returned. If the connected account withdraws the funds, and then the return causes a negative balance in the financial account, [your platform is responsible](https://docs.stripe.com/financial-accounts/connect/account-management/working-with-balances-and-transactions.md#overdrafts).

When Stripe’s fraud prevention systems consider an inbound transfer to be high risk, the creation request fails with an error:

```json
{
  "error": {
    "type": "invalid_request_error",
    "message_code": "inbound_transfer_not_same_day_eligible",
    "message": "This transaction is not eligible for same-day availability at this time. Please try again with `standard` ACH submission."
  }
}
```

When you encounter an error with the `inbound_transfer_not_same_day_eligible` message code, retry the request with the `origin_payment_method_options.us_bank_account.ach.submission` parameter set to `standard`.

## Retrieve an InboundTransfer

Use `GET /v1/treasury/inbound_transfers/{{INBOUND_TRANSFER_ID}}` to retrieve the `InboundTransfer` object with the associated ID.

The following JSON shows the data you can include in the body of your request. Some of the parameters in the response have additional details that are only returned when you add them as values to the `expand[]` parameter. The fields that you can expand have an “Expandable” comment in the following response example. See [Expanding Responses](https://docs.stripe.com/api/expanding_objects.md) to learn more about expanding object responses.

```json
{
  "id": "{{INBOUND_TRANSFER_ID}}",
  "object": "inbound_transfer",
  "livemode": false,
  "created": "{{Timestamp}}",
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}", // Expandable
  "amount": 1000,
  "currency": "usd",
  // The only current valid PaymentMethod type for InboundTransfers is us_bank_account
  "origin_payment_method": "{{PAYMENT_METHOD_ID}}",
  "origin_payment_method_details": {
    "type": "us_bank_account",
    "billing_details": {
      "name": "{{String}}",
      "address": {},
      "phone": "{{String}}",
      "email": "{{String}}"
    },
  },
  "description": "Funds for vendor payment payment_234281",
  "statement_descriptor": "payment_1",
  // See the following InboundTransfer state machine section
  "status": "processing" | "succeeded" | "failed",
  "status_transitions": {
    "succeeded_at": null | "{{Timestamp}}",
    "failed_at": null | "{{Timestamp}}"
  },
  // If the InboundTransfer fails, this field includes reasons for the failure
  "failure_details": {
    "code": "account_closed" |
            "account_frozen" |
            "bank_account_restricted" |
            "bank_ownership_changed" |
            "could_not_process" | // Generic fallback code
            "invalid_account_number" |
            "incorrect_account_holder_name" |
            "invalid_currency" |
            "no_account"
  },
  // Transaction representing balance impact of the InboundTransfer, created
  // upon success. If the InboundTransfer fails, no transaction
  // is created
  "transaction": "{{TRANSACTION_ID}}", // Expandable
  "hosted_regulatory_receipt_url": "https://stripe.com/unique-receipt-url",
  // If the InboundTransfer was returned after succeeding, `returned` is
  // set to True, and a ReceivedDebit is added to the linked_flows hash
  "returned": "{{Boolean}}",
  "linked_flows": {
    "return": nil | "{{RETURN_ID}}", // Expandable
  },
  "metadata": {},
}
```

The following request retrieves the `InboundTransfer` with the `id` value of `{{INBOUND_TRANSFER_ID}}`. Including `transaction` in the `expand[]` array of the body returns the relevant expanded information.

```curl
curl -G https://api.stripe.com/v1/treasury/inbound_transfers/{{INBOUND_TRANSFER_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "expand[]"=financial_account
```

If successful, the response returns the `InboundTransfer` object with the expanded information.

```json
{
    "id": "{{INBOUND_TRANSFER_ID}}",
    "object": "inbound_transfer",
    "amount": 20000,
    "created": 1648071297,
    "currency": "usd",
    "description": "Inbound transfer",
    "failure_details": null,
    "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
    "hosted_regulatory_receipt_url": "https://payments.stripe.com/regulatory-receipt/{{INBOUND_TRANSFER_ID}}",
    "linked_flows": null,
    "livemode": false,
    "metadata": {},
    "origin_payment_method": "{{PAYMENT_METHOD_ID}}",
    "origin_payment_method_details": {
        "billing_details": {
            "address": {
                "city": "city",
                "country": "US",
                "line1": "Test line1",
                "line2": null,
                "postal_code": "12345",
                "state": "CA"
            },
            "email": "success@example.com",
            "name": "Created from ...",
            "phone": null
        },
        "type": "us_bank_account",
        "us_bank_account": {
            "account_holder_type": "individual",
            "account_type": "checking",
            "bank_name": "STRIPE TEST BANK",
            "fingerprint": "9k4N3QBuYSZOQY08",
            "last4": "6789",
            "network": "ach",
            "routing_number": "110000000"
        }
    },
    "returned": false,
    "statement_descriptor": "test payme",
    "status": "succeeded",
    "status_transitions": {
        "failed_at": null,
        "succeeded_at": 1648071306
    },"transaction": {
        "id": "{{TRANSACTION_ID}}",
        "object": "transaction",
        "amount": 20000,
        "balance_impact": {
            "cash": {
                "available": 20000,
                "inbound_pending": 0,
                "outbound_pending": 0
            },
            "credit": null,
            "current": 20000,
            "type": "cash"
        },
        "created": 1648071304,
        "currency": "usd",
        "description": "Created from ...",
        "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
        "financial_account_type": "treasury",
        "flow": "{{INBOUND_TRANSFER_ID}}",
        "flow_type": "inbound_transfer",
        "livemode": false,
        "status": "posted",
        "status_transitions": {
            "posted_at": 1648071304,
            "voided_at": null
        },
        "treasury": {
            "regulatory_receipt_url": "https://payments.stripe.com/treasury/receipt/{{TRANSACTION_ID}}"
        }
    }
}
```

## List InboundTransfers

Use `GET /v1/treasury/inbound_transfers` to retrieve all the `InboundTransfers` for the financial account with the associated ID. You can filter the list with the standard list parameters or by `status`.

```
{
  // Standard list parameters
  "limit", "starting_after", "ending_before",
  // Filter by status
  "status": "processing" | "succeeded" | "failed",
  // Filter by FinancialAccount (Required)
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}", // Required
}
```

The following request retrieves all the inbound transfers with a status of `succeeded` for the financial account with ID `{{FINANCIAL_ACCOUNT_ID}}`, which is attached to the connected account with ID `{{CONNECTED_ACCOUNT_ID}}`.

```curl
curl -G https://api.stripe.com/v1/treasury/inbound_transfers \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d status=succeeded
```

## Manually review InboundTransfers

You can reduce the risk of inbound transfers by delaying when they’re submitted to our banking partners or by holding funds for an extended period. These holds can provide you with additional time to review potentially suspicious activity. You can [request access](https://support.stripe.com/contact) to the `inbound_transfers.ach.platform_review` feature to make financial accounts with this feature enabled receive all inbound transfers with a `requires_confirmation` status.

Below is an example of setting this feature on a new financial account. You can also add other features.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "supported_currencies[]"=usd \
  -d "inbound_transfers[ach][requested]"=true \
  -d "inbound_transfers[ach][platform_review][requested]"=true
```

Below is an example of setting this feature on an existing financial account.

```curl
curl https://api.stripe.com/v1/treasury/financial_accounts/fa_xxx/features \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "supported_currencies[]"=usd \
  -d "inbound_transfers[ach][requested]"=true \
  -d "inbound_transfers[ach][platform_review][requested]"=true
```

Typically, we automatically send inbound transfers to the bank upon creation. However, inbound transfers with a `requires_confirmation` status require explicit user confirmation through the `/v1/treasury/inbound_transfers/{id}/confirm` endpoint before we can submit the transfers to our banking partners. You can review the inbound transfer details and risk signals before confirming or canceling the transfer. You have 5 business days to confirm or cancel inbound transfers in the `requires_confirmation` state. After 5 business days, the inbound transfer is automatically canceled. For example, you have until the following Friday to confirm an inbound transfer with the `requires_confirmation` state that’s created on a Friday (assuming no US holidays).

Use the `funds_availability_delay` parameter with the `confirm` endpoint to specify the delay (in seconds) to hold the funds before releasing them to the intended financial account. This allows you to use the additional delay to manually review a transfer. You can also use this field to hold funds past the ACH return window, so the originating bank can’t recall funds after they’re spent. For extra security, set `funds_availability_delay` to 432,000, which releases funds beyond the return window.

Below is an example of calling the `confirm` endpoint without an availability delay.

```curl
curl -X POST https://api.stripe.com/v1/treasury/inbound_transfers/ibt_xxx/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

Below is an example of calling the `confirm` endpoint with an availability delay.

```curl
curl https://api.stripe.com/v1/treasury/inbound_transfers/ibt_xxx/confirm \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d funds_availability_delay=432000
```

## InboundTransfer states

The following table describes each status and what the possible transition states are.

| STATUS                  | DESCRIPTION                                                                                                                                                                                                                                                              | TRANSITIONS TO STATE                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `processing`            | The `InboundTransfer` creation succeeded. Stripe instructs movement of funds on the network.                                                                                                                                                                             | `failed`, `canceled`, `succeeded`, `requires_confirmation` |
| `requires_confirmation` | The `InboundTransfer` is created in an holding state. Stripe hasn’t initiated the movement of funds on the network and the user has to explicitly confirm their intent to trigger this inbound transfer using the `/v1/treasury/inbound_transfers/:ID/confirm` endpoint. | `processing`, `canceled`                                   |
| `failed` (terminal)     | The `InboundTransfer` failed to confirm. No transaction was created, and the `payment_method` hasn’t been debited.                                                                                                                                                       | N/A                                                        |
| `canceled` (terminal)   | The `InboundTransfer` was canceled prior to submission to the network. Stripe voids the transaction and no funds are moved from the external bank account.                                                                                                               | N/A                                                        |
| `succeeded` (terminal)  | The `InboundTransfer` succeeded and funds have landed in the account. A Transaction has been created. InboundTransfers can be returned after succeeding if the external account pulls back their funds, which is represented by a linked ReceivedDebit.                  | N/A                                                        |

## Test InboundTransfers

To test your integration end-to-end, use test [SetupIntents requests](https://docs.stripe.com/api/setup_intents.md) to create a `PaymentMethod`, then pass that `PaymentMethod` into an `InboundTransfer` creation request. Valid `PaymentMethods` result in succeeded `InboundTransfers`, while invalid `PaymentMethods` (for example, of unsupported types, containing an unverified bank account, or not set up for inbound flows) throw the same errors as in live mode.

## Test InboundTransfer states

Stripe also provides a set of test `PaymentMethod` tokens you can use to trigger specific state transitions:

| PAYMENT\_METHOD VALUE               | RESULT                                                               |
| ---------------------------------- | -------------------------------------------------------------------- |
| `pm_usBankAccount`                 | `InboundTransfer` that transitions from `processing` to `succeeded`. |
| `pm_usBankAccount_processing`      | `InboundTransfer` that remains in the `processing` state.            |
| `pm_usBankAccount_internalFailure` | `InboundTransfer` that transitions from `processing` to `failed`.    |

To test various edge cases more quickly, `PaymentMethod` tokens simulate specific failure types:

| PAYMENT\_METHOD VALUE                    | RESULT                                                                                                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pm_usBankAccount_noAccount`            | `InboundTransfer` that transitions to failed with `failure_details.code= "no_account"`.                                                                                         |
| `pm_usBankAccount_accountClosed`        | `InboundTransfer` that transitions to `failed` with `failure_details.code= "account_closed"`.                                                                                   |
| `pm_usBankAccount_invalidAccountNumber` | `InboundTransfer` that transitions to failed with `failure_details.code= "invalid_account_number"`.                                                                             |
| `pm_usBankAccount_insufficientFunds`    | `InboundTransfer` that transitions to failed with `failure_details.code= "insufficient_funds"`.                                                                                 |
| `pm_usBankAccount_debitNotAuthorized`   | `InboundTransfer` that transitions to failed with `failure_details.code= "debit_not_authorized"`.                                                                               |
| `pm_usBankAccount_dispute`              | `InboundTransfer` that transitions from `processing` to `succeeded` and is later disputed. `inbound_transfer.returned` becomes `true`, and a linked `ReceivedDebit` is created. |

In all preceding cases, the `InboundTransfer` response begins in the `processing` state. You receive [webhook events](https://docs.stripe.com/webhooks.md) for each relevant state transition, and fetching the `InboundTransfer` after creation returns the expected state.

You can also test the error state by passing the `pm_usBankAccount_sameDayACHIneligible` token as the `PaymentMethod`. This triggers an `InboundTransfer` (with same-day ACH submission) creation failure and returns an error.

## InboundTransfer test helper endpoints

Stripe also provides endpoints that enable you to test `InboundTransfers` in different states. Create an `InboundTransfer`, then:

- Use the [test `succeed` endpoint](https://docs.stripe.com/api/treasury/inbound_transfers/test_mode_succeed.md) to move the transfer with the associated ID directly into the `succeeded` state.

  `POST /v1/test_helpers/treasury/inbound_transfers/{{INBOUND_TRANSFER_ID}}/succeed`

- Use the [test fail endpoint](https://docs.stripe.com/api/treasury/inbound_transfers/test_mode_fail.md) to move the transfer with the associated ID directly into the `failed` state.

  `POST /v1/test_helpers/treasury/inbound_transfers/{{INBOUND_TRANSFER_ID}}/fail`

These endpoints are particularly useful when testing error scenarios, such as returns, which would otherwise require action from the external account the InboundTransfer was pulling funds from.

Include the optional `failure_details.code` parameter in the body to indicate why the transfer failed. If you don’t provide it, the transfer fails with the default `could_not_process` failure code.

```json
{
  "failure_details": {
    "code": "account_closed" |
          "account_frozen" |
          "bank_account_restricted" |
          "bank_ownership_changed" |
          "could_not_process" | // Generic fallback code
          "invalid_account_number" |
          "incorrect_account_holder_name" |
          "invalid_currency" |
          "no_account"
  }
}
```

Financial Accounts for platforms also provides a `return` endpoint to simulate an InboundTransfer that succeeds, but is later returned.

Use the [test return endpoint](https://docs.stripe.com/api/treasury/inbound_transfers/test_mode_return.md) to initiate the simulated return on the `InboundTransfer` with the associated ID.

`POST /v1/test_helpers/treasury/inbound_transfers/{{INBOUND_TRANSFER_ID}}/return`

All test endpoints trigger [webhooks](https://docs.stripe.com/webhooks.md) for each relevant state transition, and fetching the `InboundTransfer` after transition returns the expected state.

## InboundTransfer webhooks

Stripe emits the following `InboundTransfer` events to your [webhook](https://docs.stripe.com/webhooks.md) endpoint:

- `treasury.inbound_transfer.created` on `InboundTransfer` creation.
- `treasury.inbound_transfer.{{new_status}}` when an `InboundTransfer` changes status. Available status value options include:
  - `treasury.inbound_transfer.succeeded`
  - `treasury.inbound_transfer.failed`
