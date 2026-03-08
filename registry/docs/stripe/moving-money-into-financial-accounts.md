# Moving money into financial accounts

Learn the requests available to move money into financial accounts.

You can add money to your financial account using `InboundTransfer` and `ReceivedCredit` objects. In some scenarios, you can reverse `ReceivedCredits`, which creates a [CreditReversal object](https://docs.stripe.com/api/treasury/credit_reversals/object.md). For more information, see the [Moving money using CreditReversal objects guide](https://docs.stripe.com/financial-accounts/connect/moving-money/into/credit-reversals.md).

Financial Accounts for platforms also provides test objects to facilitate testing money flows into financial accounts. The test endpoint for creating a `ReceivedCredit`, for example, enables you to add money to your test financial account balance to begin experimenting with other money movement capabilities. The test endpoints for `InboundTransfers`, on the other hand, enable you to test effects of your other business logic when an `InboundTransfer` object transitions to a particular state.

## See also

- [Moving money using InboundTransfer objects](https://docs.stripe.com/financial-accounts/connect/moving-money/into/inbound-transfers.md)
- [Moving money using ReceivedCredit objects](https://docs.stripe.com/financial-accounts/connect/moving-money/into/received-credits.md)
- [Moving money using CreditReversal objects](https://docs.stripe.com/financial-accounts/connect/moving-money/into/credit-reversals.md)
