# Moving money using DebitReversal objects

Learn how you can retrieve funds taken out of a financial account from an external account holder.

Returning the funds from a [ReceivedDebit](https://docs.stripe.com/api/treasury/received_debits.md) creates a [DebitReversal](https://docs.stripe.com/api/treasury/debit_reversals.md). You can get the funds back from a `ReceivedDebit` in only some scenarios (detailed in the following table). Whether you can return the funds of a `ReceivedDebit` depends on the network and source flow.

The `reversal_details` sub-hash on the `ReceivedDebit` resource can have the following combination of values, which determines whether you can return the `ReceivedDebit` funds.

| RESTRICTED REASON        | DEADLINE (EPOCH TIMESTAMP) | EXAMPLE SCENARIO                                                                                                                                                                                                                                                        |
| ------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `null`                   | 7940828047                 | A `ReceivedDebit` that you can return funds from, but only until the timestamp in `deadline`. ACH `ReceivedDebits` have a deadline that determines how long you have to return them.                                                                                    |
| `deadline_passed`        | 1629480538                 | A `ReceivedDebit` whose funds were returnable before the timestamp in `deadline`, but is no longer returnable using the API because the `deadline` has passed. ACH `ReceivedDebits` have a limited time of when they’re returnable using the API after they’re created. |
| `already_reversed`       | null                       | A `ReceivedDebit` that’s already been returned. It might have a non-null `deadline` value.                                                                                                                                                                              |
| `source_flow_restricted` | null                       | A `ReceivedDebit` that can’t be returned because its `source_flow` isn’t reversible.                                                                                                                                                                                    |

## Return deadlines

You have approximately 1 business day to return ACH debits using the API after receipt. After this time, ACH debit funds might still be returnable but funds return isn’t guaranteed. Contact support to request a return of funds if the reversal deadline has passed.

To create returns of `ReceivedDebit` funds produced by activity on `Issuing` cards, see the [Issuing disputes](https://docs.stripe.com/issuing/purchases/disputes.md) guide.

## Create a DebitReversal

Use `POST /v1/treasury/debit_reversals` to create a `DebitReversal`. Specify the ID of the `ReceivedDebit` to reverse with the `received_debit` parameter in the body of the request.

> You can’t update `DebitReversals`, so you must set any optional [metadata](https://docs.stripe.com/api/treasury/debit_reversals/object.md#debit_reversal_object-metadata) on creation.

The following request creates a `DebitReversal` based on the `ReceivedDebit` ID value on the required `received_debit` parameter. The request also sets an optional metadata value.

```curl
curl https://api.stripe.com/v1/treasury/debit_reversals \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d received_debit={{RECEIVED_DEBIT_ID}} \
  -d "metadata[reason]"=Because
```

If successful, the response returns the new `DebitReversal` object.

```json
{
  "id": "{{DEBIT_REVERSAL_ID}}",
  "object": "debit_reversal",
  "amount": 1000,
  "currency": "usd",
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  "hosted_regulatory_receipt_url": "https://payments.stripe.com/regulatory-receipt/{{URL_ID}}",
  "linked_flows": null,
  "livemode": false,
  "metadata": {},
  "network": "ach",
  "received_debit": "{{RECEIVED_DEBIT_ID}}",
  "resolution": null,
  "status": "processing",
  "status_transitions": {
    "completed_at": null
  },
  "transaction": "{{TRANSACTION_ID}}"
}
```

## Retrieve a DebitReversal

Use `GET /v1/treasury/debit_reversals/{{DEBIT_REVERSAL_ID}}` to retrieve the `DebitReversal` with the associated ID.

```curl
curl https://api.stripe.com/v1/treasury/debit_reversals/{{DEBIT_REVERSAL_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}"
```

If successful, the response returns the identified `DebitReversal`.

#### JSON (commented)

```json
{
  "id": "{{DEBIT_REVERSAL_ID}}",
  "object": "debit_reversal",
  "livemode": true | false,
  "created": "{{Timestamp}}",
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  "amount": 1000,
  "currency": "usd",
  // the ReceivedDebit being returned
  "received_debit": "{{RECEIVED_DEBIT_ID}}",
  // whether funds have been returned depending on the DebitReversal outcome
  "resolution": null | "won",
  "status": "processing" | "canceled" | "completed",
  "status_transitions": {
    "processing_at": "{{Timestamp}}",
    "canceled_at": null | "{{Timestamp}}",
    "completed_at": null | "{{Timestamp}}"
  },
  // Transaction representing balance impact of the DebitReversal
  "transaction": "{{TRANSACTION_ID}}",
  // A unique, Stripe-hosted direct link to the regulatory receipt for the DebitReversal
  "hosted_regulatory_receipt_url": "{{Url}}",
  // A map of String-String intended for users to use custom data
  "metadata": {}
}
```

## List DebitReversals

Use `GET /v1/treasury/debit_reversals` to retrieve a list of `DebitReversals` for the financial account with the ID provided in the required `financial_account` parameter. You can filter the list by standard list parameters, `status`, or by `ReceivedDebit` ID using the `received_debit` parameter.

```
{
  // Standard list parameters
  "limit", "starting_after", "ending_before",
  // Filter by financial account (Required)
  "financial_account": "{{FINANCIAL_ACCOUNT_ID}}",
  // Filter by `status`
  "status": "processing" | "canceled" | "completed"
  // Filter by ReceivedDebit
  "received_debit": "{{RECEIVED_DEBIT_ID}}",
}
```

The following request retrieves the last three [DebitReversal objects](https://docs.stripe.com/api/treasury/debit_reversals/object.md) for the identified financial account.

```curl
curl -G https://api.stripe.com/v1/treasury/debit_reversals \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d financial_account="{{TREASURYFINANCIALACCOUNT_ID}}" \
  -d limit=3
```

## Test DebitReversals

To test `DebitReversals`, you must first create a [test ReceivedDebit](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/debit-reversals.md#test-received-debit). Afterwards, use `POST /v1/treasury/debit_reversals` and specify the test `ReceivedDebit` ID in the `received_debit` parameter to create a test `DebitReversal`.

## DebitReversal webhooks

Stripe emits the following `DebitReversal` events to your [webhook](https://docs.stripe.com/webhooks.md) endpoint:

- `treasury.debit_reversal.created` on `DebitReversal` creation.
- `treasury.debit_reversal.completed` when the `DebitReversal` completes.
