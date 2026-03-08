# Moving money using ReceivedCredit objects

Learn how to move money into a financial account from another financial account or bank account.

When funds move into a financial account, Stripe creates a corresponding [ReceivedCredit](https://docs.stripe.com/api/treasury/received_credits.md) object on the account. A `ReceivedCredit` contains information on how the funds were sent and from what account, where possible. You can send funds to a financial account with the account’s routing and account numbers for `ach` and `us_domestic_wire`, or the financial account ID for transfers between financial accounts.

When the origin of the funds is another financial account, the `ReceivedCredit` contains a `linked_flows.source_flow` reference to the originating money movement. In this case, the source `OutboundPayment` has `stripe` as its `network` value.

## Retrieve a ReceivedCredit

Use `GET /v1/treasury/received_credits/{{RECEIVED_CREDIT_ID}}` to retrieve the [ReceivedCredit](https://docs.stripe.com/api/treasury/received_credits.md) with the specified ID.

The following request retrieves the `ReceivedCredit` with the specified ID. The response for this request includes expanded [Transaction object](https://docs.stripe.com/api/treasury/transactions.md) details.

```curl
curl -G https://api.stripe.com/v1/treasury/received_credits/{{RECEIVED_CREDIT_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d "expand[]"=transaction
```

If successful, the response provides the requested `ReceivedCredit` object. Some of the parameters in the response have additional details that are only returned when you add them as values to the `expand[]` parameter of your request. The fields that you can expand have an `Expandable` comment in the following response example. See [Expanding Responses](https://docs.stripe.com/api/expanding_objects.md) to learn more about expanding object responses.

#### JSON (commented)

```json
{
  "id": "{{RECEIVED_CREDIT_ID}}",
  "object": "received_credit",
  "livemode": true | false,
  "created": "{{Timestamp}}",
  // The FinancialAccount that received the funds
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}", // Expandable
  "amount": 1000,
  "currency": "usd",
  // The description of this movement sent by the originator
  "description": "Testing",
  // ReceivedCredits are created with a status of either `succeeded` (approved) or `failed`
  // (declined). When failed, no Transaction is created. The failure reason can be found
  // in the "failure_code" field.
  "status": "succeeded" | "failed",
  // The network that was used for this movement
  "network": "ach" | "stripe" | "us_domestic_wire",
  // Information about the originating account of the movement
  "received_payment_method_details": {
    "type": "us_bank_account" | "balance" | "financial_account",
    // Only set if type is `us_bank_account`.
    // This contains information of the source external bank account.
    "us_bank_account": null | {
      "bank_name": "{{String}}",
      "routing_number": "12341234",
      "last4": "6789"
    },
    // Only set if type is `financial_account`.
    // This contains information of the source FinancialAccount.
    "financial_account": nil | {
      "id": "{{FINANCIAL_ACCOUNT_ID}}"
    },
    // Only set if type is `balance`.
    // This is only set when the source is a Payout.
    "balance": null | "payments",
    "billing_details": null | {
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
    }
  },
  // A unique, Stripe-hosted direct link to the regulatory receipt for the ReceivedCredit
  "hosted_regulatory_receipt_url": "{{URL}}",
  "reversal_details": {
    "restricted_reason": null | "source_flow_restricted" | "network_restricted" | "deadline_passed" | "already_reversed",
    "deadline": null | "{{Timestamp}}"
  },
  "linked_flows": {
    // When the platform can see both source and destination
    // accounts, we link to the originating flow
    // When the `network` type is `stripe`, this could be an OutboundPayment originated from another merchant, a
    // Payout originated from the same merchant (a balance transfer from payments),
    // or the result of reversing a Stripe network ReceivedCredit by the recipient
    // whom funds were sent to in the past.
    // When the `network` type is `ach`, this could be either nil or a Payout.
    "source_flow": null | "{{OUTBOUND_PAYMENT_ID}}" | "{{PAYOUT_ID}}",
    "source_flow_type": null | "outbound_payment" | "payout",
    // Includable by expanding linked_flows['source_flow_details']. When included, this field will
    // either be an OutboundPayment or a Payout.
    "source_flow_details": null,
    // CreditReversals allow you to reverse a ReceivedCredit as long as it's before the reversal_details['deadline']
    // If reversed, the ReceivedCredit will link to the CreditReversal.
    "credit_reversal": null | "{{CREDIT_REVERSAL_ID}}"
  },
  // Currently, the only failure reasons for ReceivedCredits are due to restrictions on the account.
  "failure_code": null |
    "account_closed" |
    "account_frozen",
  // Transaction created by the ReceivedCredit. Created synchronously.
  "transaction": "{{TRANSACTION_ID}}" // Expandable
}
```

## List ReceivedCredits

Use `GET /v1/treasury/received_credits` to retrieve all of the `ReceivedCredits` for the financial account with the ID of the required `financial_account` parameter. You can filter the list with the standard list parameters, by `status`, or by `linked_flows.source_flow_type`.

```
{
  // Standard list parameters
  "limit", "starting_after", "ending_before",
  // Filter by FinancialAccount (required)
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  // Filter by status
  "status": "succeeded" | "failed",
  // Filter by `source_flow_type`
  "linked_flows.source_flow_type": nil | "payout" | "outbound_payment"
}
```

The following request retrieves the `ReceivedCredits` that have a status of `failed` for the specified financial account.

```curl
curl -G https://api.stripe.com/v1/treasury/received_credits \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d status=failed
```

If successful, the response includes the [ReceivedCredit](https://docs.stripe.com/api/treasury/received_credits.md) objects that match the criteria specified in the request.

## Test ReceivedCredits

Use `POST /v1/test_helpers/treasury/received_credits` to simulate receiving funds in a financial account. To simulate a bank transfer from an account outside of Stripe to your financial account, set `initiating_payment_method_details` to the values of the external bank account, and set `network` to `ach` or `us_domestic_wire`.

The following request creates a test `ReceivedCredit` from an external bank account using an `OutboundPayment` between two financial accounts on the same platform.

```curl
curl https://api.stripe.com/v1/test_helpers/treasury/received_credits \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account={{DESTINATION_FINANCIAL_ACCOUNT_ID}} \
  -d network=ach \
  -d amount=1234 \
  -d currency=usd
```

If successful, the response returns a `ReceivedCredit` object. The following is an example of a response for a bank transfer.

```json
{
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  "network": "ach",
  "amount": "1234",
  "currency": "usd",
  "description": "Test",
  "source_details": {
    "type": "aba",
    "aba": {
      "country": "US",
      "routing_number": "12341234",
      "account_number": "0123456789",
      "account_holder_name": "Jenny Rosen"
    }
  }
}
```

## ReceivedCredit webhooks

Stripe emits the following `ReceivedCredit` events to your [webhook](https://docs.stripe.com/webhooks.md) endpoint:

- `treasury.received_credit.created` on `ReceivedCredit` creation.
- `treasury.received_credit.{{new_status}}` when an `ReceivedCredit` changes status. Available status value options include:
  - `treasury.received_credit.succeeded`
  - `treasury.received_credit.failed`
