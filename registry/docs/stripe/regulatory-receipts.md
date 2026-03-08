# Regulatory receipts

Learn about hosted transaction receipts.

All changes to a balance have a corresponding [Transaction object](https://docs.stripe.com/api/treasury/transactions/object.md) that provides a summary of money movements. Some transaction types are considered *regulated* under Stripe’s money transmission licenses and require special treatment. You, the platform, must offer a transaction receipt and present disclosures to the customers of the sellers and service providers (connected accounts) on the platform taking part in regulated transactions.

## Providing access to receipts

Stripe provides hosted regulatory transaction receipts on all of our money movement resources, recording the URL as the value for the `hosted_regulatory_receipt_url` attribute. This hosted receipt includes a description of the transaction, amount, timing information, and relevant disclosures. Because the sellers and service providers (connected accounts) on your platform don’t have Stripe Dashboard access, you must provide them with the ability to retrieve receipts from within the product.
![Hosted receipt of an outbound payment showing transaction id, amount sent, date posted, description of transaction, and a regulatory disclosure message.](https://b.stripecdn.com/docs-statics-srv/assets/receipt.4490fc802089baf86a8ee4bf9b98118a.png)

Regulatory receipt

> Don’t store receipt URLs as they’re subject to change and only valid for 60 days.

You can find this hosted receipt in the `hosted_regulatory_receipt_url` attribute of the following objects:

- [InboundTransfer](https://docs.stripe.com/api/treasury/inbound_transfers/object.md#inbound_transfer_object-hosted_regulatory_receipt_url)
- [ReceivedCredit](https://docs.stripe.com/api/treasury/received_credits/object.md#received_credit_object-hosted_regulatory_receipt_url)
- [ReceivedDebit](https://docs.stripe.com/api/treasury/received_debits/object.md#received_debit_object-hosted_regulatory_receipt_url)
- [CreditReversal](https://docs.stripe.com/api/treasury/credit_reversals/object.md#credit_reversal_object-hosted_regulatory_receipt_url)
- [DebitReversal](https://docs.stripe.com/api/treasury/debit_reversals/object.md#debit_reversal_object-hosted_regulatory_receipt_url)
- [OutboundTransfer](https://docs.stripe.com/api/treasury/outbound_transfers/object.md#outbound_transfer_object-hosted_regulatory_receipt_url)
- [OutboundPayment](https://docs.stripe.com/api/treasury/outbound_payments/object.md#outbound_payment_object-hosted_regulatory_receipt_url)
