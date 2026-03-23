# Custom payment application

Learn how to customize the way payments are recorded and applied using the Stripe Connector for NetSuite.

To learn more and get a demo of the Stripe Connector for NetSuite, go to the [Stripe App Marketplace](https://marketplace.stripe.com/apps/netsuite-connector) and click **Install app**.

The Stripe Connector for NetSuite provides a way for you to reconcile Stripe payment activity from your custom or prebuilt, third-party integration to NetSuite. Using the following tools, you can customize how the connector records and reconciles payments in NetSuite:

- [Stripe metadata](https://docs.stripe.com/use-stripe-apps/netsuite/custom-payment-application.md#stripe-metadata)
- [Invoices for payments](https://docs.stripe.com/use-stripe-apps/netsuite/custom-payment-application.md#invoices-payments)
- [Connector add-ons](https://docs.stripe.com/use-stripe-apps/netsuite/custom-payment-application.md#connector-addons)

## Stripe metadata

You can use Stripe metadata to make sure your Stripe activity is properly represented in NetSuite.

### Relate a Stripe object to a NetSuite record

Add metadata to Stripe objects to relate them to existing NetSuite records. You can add this metadata at the time of syncing, before the Stripe object syncs to NetSuite, or in conjunction with controls that modify the sync timing.

You can relate records in the following ways:

- Add `netsuite_invoice_id: 12345` to a Stripe charge so that the connector applies the customer payment to NetSuite invoice with internal ID `12345`.
- Add `netsuite_credit_memo_id: 67890` to a Stripe refund so that the connector applies the customer refund to NetSuite credit memo with internal ID `67890`.
- Add `netsuite_customer_id: 101010` to a Stripe charge so that the connector creates the customer payment under NetSuite customer with internal ID `101010`.

### Override sync timing

You can choose to override the default sync timing by programmatically controlling when a record syncs to NetSuite. There are two ways to override record sync timing: add records to a denylist or add records to an allowlist.

#### Add records to a denylist

You can add metadata to temporarily stop the connector from syncing a record to NetSuite. This is helpful if your backend integration with Stripe requires adding data to a record before syncing to NetSuite.

Use a denylist to control the timing of a customer sync to NetSuite:

1. Ask your implementation partner to enable the **Denylist payments and refunds** feature in your Stripe app settings. Consult with your implementation partner to understand all accounting and technical implications.
2. Add `netsuite_block_integration: true` to the metadata of any Stripe object.
3. To allow record syncing again, replace `true` with `nil`.

You can’t permanently add a payment or payment-related record to the denylist. After 2 days, the connector automatically attempts to create a bank deposit for the Stripe payout. Until you remove the payment or record from the denylist, the deposit automation fails and the payment or record can’t sync to NetSuite.

#### Examples

The following are examples of when you might want to use a denylist:

**Example 1**: You might have a customer record that your system created when a Stripe customer started the signup process and made a prepayment. Later you collect address data for that customer. The connector typically syncs the customer and payment data to NetSuite right away; however, you can delay syncing to NetSuite until you finish collecting all data for a customer.

**Example 2**: Your Stripe account includes Stripe Billing and an e-commerce app. You want to associate the payments from the e-commerce app with your NetSuite orders, and to automatically sync the subscription invoices and payments. To do so, add metadata to the payments from the e-commerce system. The connector syncs the Stripe Billing invoices and payments to NetSuite. The e-commerce payments without a Netsuite order or invoice ID won’t sync until the associated order or invoice is imported into your NetSuite account. After the order detail is added, you can remove the denylist metadata and add the NetSuite invoice ID to associate the records.

#### Add records to an allowlist

You can add metadata to stop the connector from syncing a record to NetSuite until it’s granted permission. This is helpful if you have an e-commerce system that uses Stripe to process payments before the invoice is created in NetSuite.

Use an allowlist to control the syncing of a record to NetSuite:

1. Ask your implementation partner to enable the **Allowlist payments** feature in your Stripe app settings. Consult with your implementation partner to understand all accounting and technical implications.
2. Add `netsuite_allow_integration: true` to the metadata of a record.

Don’t use an allowlist if either of the following applies:

- You use Stripe Billing. In most cases, Stripe automatically generates invoices, which can create challenges with making sure invoices are added to the allowlist. Instead, you can use a denylist for payments that aren’t related to Stripe Billing.
- You don’t have a fully comprehensive custom system that accounts for every payment in your Stripe account. If a payment in your Stripe account isn’t synced to NetSuite, the deposit automation fails until the payment is synced.

#### Override NetSuite record creation

Override any part of the connector’s record syncing process by adding metadata to Stripe objects to relate them to existing NetSuite records. You can add this metadata at the time of syncing, before the Stripe object syncs to NetSuite, or in conjunction with controls that modify the sync timing. This prevents the connector from creating that record in NetSuite.

For example, you have an existing system that creates customers that you want to use alongside the connector. You can pass the NetSuite customer’s internal ID to the Stripe customer to allow the connector to create a link between the two, rather than creating a new customer. You can also use the same process to link Stripe prices to existing NetSuite items.

See below for the list of [metadata keys](https://docs.stripe.com/use-stripe-apps/netsuite/custom-payment-application.md#metadata-keys) to link records and override record creation.

If you use the [price matching setting](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-prices-coupons-netsuite.md#how-netsuite-represents-products-and-prices), this overrides the method of adding the `netsuite_service_sale_item_id` metadata key to the price object.

> Overriding any part of the connector’s record syncing process that affects accounts receivable might introduce accounting inaccuracies. Our system guarantees that the created records are accurate, but can’t guarantee the accuracy of records created by another system.

### Connector metadata keys

The connector uses metadata keys to link Stripe objects to existing NetSuite records. You can add this metadata at the time of syncing, before the Stripe object syncs to NetSuite, or in conjunction with controls that modify the sync timing.

| Stripe record        | Stripe metadata key                     | NetSuite record                                                                                                 |
| -------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Customer             | `netsuite_customer_id`                  | Customer                                                                                                        |
| Invoice              | `netsuite_invoice_id`                   | Invoice                                                                                                         |
| Price                | `netsuite_service_sale_item_id`         | Service Sale Item

If unspecified, this is the default item type that the connector uses to create new items. |
| Price                | `netsuite_service_resale_item_id`       | Service Resale Item

You can use this item type in place of a Service Sale Item.                              |
| Price                | `netsuite_non_inventory_sale_item_id`   | Non Inventory Sale Item

You can use this item type in place of a Service Sale Item.                          |
| Price                | `netsuite_non_inventory_resale_item_id` | Non Inventory Resale Item

You can use this item type in place of a Service Sale Item.                        |
| Price                | `netsuite_discount_item_id`             | Discount Item

Only applicable if the line item amount is negative.                                           |
| Invoice Line Item    | `netsuite_discount_item_id`             | Discount Item

Only applicable if the line item amount is negative.                                           |
| Coupon               | `netsuite_discount_item_id`             | Discount Item                                                                                                   |
| Charge               | `netsuite_customer_payment_id`          | Customer Payment                                                                                                |
| Charge               | `netsuite_customer_deposit_id`          | Customer Deposit                                                                                                |
| Refund               | `netsuite_customer_refund_id`           | Customer Refund                                                                                                 |
| Refund               | `netsuite_credit_memo_id`               | Credit Memo

Only applicable if the refund’s charge is linked to a Stripe-created invoice.                    |
| Dispute (chargeback) | `netsuite_customer_refund_id`           | Customer Refund                                                                                                 |
| Payout               | `netsuite_deposit_id`                   | Deposit                                                                                                         |

## Invoices for payments

If your system uses Stripe to process payments and it creates a payment in Stripe that isn’t associated with an invoice, you can choose to allow the connector to create an invoice using information from the charge. The connector then applies a customer payment to represent revenue and cash for that transaction.

This workflow doesn’t support discounts, multiple line items, and other complex integrations.

### How it works

1. The connector creates a NetSuite invoice for each charge in Stripe and includes the charge description in a memo on the invoice. You can choose to add data from the Stripe metadata fields to the invoice by using field mappings.
2. The invoice uses a single line item to represent the revenue earned by the entire Stripe charge. By default, all payments on the Stripe account use the same NetSuite item. You can customize this.
3. The connector creates a payment and applies it to the invoice. The payment is automatically reconciled to a bank deposit and fees are recorded.
4. Refunds and disputes automatically represent as a credit memo and refund.

### Customize the NetSuite line item

All invoices generated from charges use the same NetSuite item (Stripe Generic Line Item), by default. If charges are used to purchase multiple types of products in your app, you need to record the revenue for the different products against unique NetSuite items. This allows you to have detailed reports in NetSuite based on revenue by item, quantity of items sold, and more.

You can’t have multiple line items on an invoice from charges. The connector can’t distribute the revenue across separate items from the metadata information on the Stripe charge. If you need to use multiple line items on your NetSuite invoice, you can use a Stripe invoice to sync line-item details.

You can use metadata or a standard field on the Stripe charge to select a NetSuite item. The connector uses the Stripe metadata or field to search for a field on the NetSuite item. If the connector doesn’t find a match, it uses the Stripe Generic Line Item. Matches aren’t case sensitive.

For example, you create a Stripe charge and add the `product_name` metadata that includes the name of a NetSuite item. The connector searches for an item in NetSuite that matches the `product_name` in Stripe. If the connector finds a match, it uses that item on the invoice created for that charge.

Use invoices for payments flow:

1. Ask your implementation partner to enable the **Create invoices for payments** feature in your Stripe app settings. Consult with your implementation partner to understand all accounting and technical implications.
2. Add the following for the connector to use for matching:
   - Add a NetSuite field on the item record
   - Add the corresponding Stripe field on the `Charge` object

For example, you can add a metadata key on a Stripe charge and `itemid` or `displayName` on the NetSuite item.

## Connector add-ons

[Contact us](http://stripe.com/sales) to learn more or to get started with connector add-ons.

The connector provides NetSuite add-ons (bundles) to support common use cases and allow seamless operation with core workflows. You can work with an official implementation partner to customize your integration with these add-ons, which live exclusively in NetSuite.

You can customize the add-ons by developing new workflows on top of them, or modifying existing workflows to support your business needs. For example, you might want to align the payment and reconciliation processes with your unique NetSuite setup, while still using core connector automations.

### Autopay add-on

Use the Autopay add-on to automatically bill your customer’s saved payment method and pay open invoices in NetSuite. You can modify the billing details, such as cadence and parameters, to make sure the correct invoices are billed.

### NetSuite Initiated Refunds add-on

Use the NetSuite Initiated Refunds add-on to trigger [Stripe refunds](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-refunds-netsuite.md) from NetSuite, instead of the Stripe Dashboard or API. NetSuite records are linked or created automatically in multiple scenarios to fully represent the Stripe refund.

### Payment Linker add-on

If you integrate Stripe with a third-party service, such as an e-commerce site, you can use the Payment Linker add-on to automatically sync Stripe payments as customer deposits applied to NetSuite sales orders, or payments applied to NetSuite invoices. Stripe supports total upfront capture or auth-capture flows.

## See also

- [Fields and references](https://docs.stripe.com/use-stripe-apps/netsuite/fields-references.md)
- [Field mappings](https://docs.stripe.com/use-stripe-apps/netsuite/field-mappings.md)
- [Sync data](https://docs.stripe.com/use-stripe-apps/netsuite/sync-data.md)
