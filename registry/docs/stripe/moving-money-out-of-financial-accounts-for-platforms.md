# Moving money out of Financial Accounts for platforms

Learn the requests available to move money out of financial accounts.

You can use a number of methods to move funds from a financial account to another account (either an external account or another financial account):

- Originate an `OutboundPayment` to move money to a third party’s external account or financial account through *ACH* (Automated Clearing House (ACH) is a US financial network used for electronic payments and money transfers that doesn’t rely on paper checks, credit card networks, wire transfers, or cash), *wire transfer* (Also called a bank transfer or credit transfer, wire transfers are a method of electronic funds transfers that move money from a payer to a payee), or the Stripe network.
- Originate an `OutboundTransfer` to move money to an external account belonging to the same connected account through ACH or wire transfer or between financial accounts associated with the same connected account.
- Initiate a card transaction through Stripe Issuing to send money using *card networks* (A network that processes the transactions of a particular card brand. It might be an intermediary in front of an issuing bank as with Visa or Mastercard, or a standalone entity as with American Express).
- Receive a `ReceivedDebit` (initiated by the owner of an external account) to pull money from the financial account through ACH.

## Money movement with PaymentMethods

Within Stripe, you can save payment method information using a [PaymentMethod](https://docs.stripe.com/api/payment_methods.md) object. You might use `PaymentMethods` to save your vendors’ account data so you don’t have to re-enter and collect their information for every payment you make to them.

You can attach `PaymentMethods` containing bank account information to a customer (for sending money to a third party) or to a Stripe account (for sending money to a company’s own external bank account). In both cases, you create the `PaymentMethod` using [SetupIntent](https://docs.stripe.com/payments/setup-intents.md) endpoints.

The type of Financial Accounts for platforms requests you make with a `PaymentMethod` depends on how they’re attached:

- For customer-attached, use `PaymentIntent` and `OutboundPayment` requests.
- For account-attached, use `InboundTransfer` and `OutboundTransfer` requests.

See [Working with SetupIntents, PaymentMethods, and BankAccounts](https://docs.stripe.com/financial-accounts/connect/moving-money/working-with-bankaccount-objects.md) for more information.

## Handling returned funds

The destination for `OutboundTransfers` and `OutboundPayments` can reject the relative flow. For example, the destination address might not exist and the `OutboundTransfer` or `OutboundPayment` fails. This can occur over the `ach` and `us_domestic_wire` networks. `CreditReversals` can also return `OutboundPayments` over the `stripe` network. In the case of returned funds, the `OutboundTransfer` or `OutboundPayment` transitions to the `returned` status and Stripe creates a transaction to return the funds to the source financial account. Stripe also triggers a `treasury.outbound_transfer.returned` or `treasury.outbound_payment.returned` webhook.

## Tracking outbound funds

You might need to track the status of an outbound transaction initiated from a financial account for several reasons. Examples of such situations include a payment that has been sent but not yet received, or a payment that appears to be arriving late. To help you in tracking `OutboundTransfers` and `OutboundPayments`, we provide network-specific tracking IDs for you to work with banks to track their status.

### Tracking an ACH transaction

If you’re sending funds over ACH rails, we recommend allowing up to 3 business days for the transaction to process per the standard timeline. When the funds reach the network, you can use the ACH trace ID to track the payment status, found in the `tracking_details[ach][trace_id]` field of the `OutboundTransfer` or `OutboundPayment` object. You can share this trace ID with the receiving bank to help identify potential issues.

### Tracking a wire transaction

Depending on the destination bank and the time of submission, our bank partner might send domestic wire transfers over either FedWire or CHIPS. If you originate a wire out of a Financial account at Evolve, it’s sent using FedWire. If you originate a wire out of a Financial Account at Fifth Third, it’s sent using CHIPS provided the receiving bank accepts CHIPS and the wire is sent during CHIPS operating hours; otherwise, it’s sent using FedWire.

For wires sent using FedWire transfers, locate the IMAD and OMAD fields in the `tracking_details[us_domestic_wire][imad]` and `tracking_details[us_domestic_wire][omad]` fields.

For wires sent using CHIPS, locate the transfer’s System Sequence Number in `tracking_details[us_domestic_wire][chips]`. You can share these IDs with the receiving bank to track the wire transfer’s status.

The `tracking_details` field can populate anytime after the transaction is submitted to our partner bank and is no longer cancelable. Stripe also fires the `treasury.outbound_payment.tracking_details_updated` or `treasury.outbound_transfers.tracking_details_updated` webhook when there’s an update to the `tracking_details` field.

## See also

- [Moving money using OutboundPayment objects](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-payments.md)
- [Moving money using OutboundTransfer objects](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-transfers.md)
- [Moving money using ReceivedDebit objects](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/received-debits.md)
- [Moving money using DebitReversal objects](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/debit-reversals.md)
- [Working with Stripe Issuing cards](https://docs.stripe.com/financial-accounts/connect/account-management/issuing-cards.md)
