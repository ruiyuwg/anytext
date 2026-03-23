# Tax rates and IDs

Assign tax rates to draft invoices for tax calculation.

If you’re looking for automated tax calculation where you don’t need to define the rates, use [Stripe Tax](https://docs.stripe.com/tax.md).

After you [create a tax rate](https://docs.stripe.com/billing/taxes/tax-rates.md), you can assign it:

- On individual *invoice* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) items.
- On the entire subtotal of the invoice.

> Stripe recommends that you assign a tax rate on individual invoice items.

## Set tax rates on individual items

You can set tax rates on individual items using the [Dashboard](https://dashboard.stripe.com/invoices/create) or [API](https://docs.stripe.com/api/tax_rates.md). You can add up to ten tax rates to each line item.

#### Dashboard

If you’re creating an invoice through the Dashboard, assign tax rates to individual line items.

#### API

When you modify or create invoice line items through the API, set the invoice item’s [tax\_rates](https://docs.stripe.com/api/invoiceitems/update.md#update_invoiceitem-tax_rates):

```curl
curl https://api.stripe.com/v1/invoiceitems/ii_CWYWo9Ham19N4a \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "tax_rates[]"=txr_1EO66sClCIKljWvs98IiVfHW \
  -d "tax_rates[]"=txr_1EEOvcClCIKljWvsqYb9U0MB
```

For [type](https://docs.stripe.com/api/invoice-line-item/object.md#invoice_line_item_object-type) `subscription` or `invoiceitem`, use the line item’s [id](https://docs.stripe.com/api/invoice-line-item/object.md#invoice_line_item_object-id). For `type=invoiceitem`, you can also use the [invoice\_item](https://docs.stripe.com/api/invoice-line-item/object.md#invoice_line_item_object-invoice_item) value.

> For API version [2018-05-21](https://docs.stripe.com/upgrades.md#2018-05-21) and earlier, you must pass the `unique_line_item_id` parameter instead of the line item’s `id` field. Pass the `id` field that starts with `sli_`.

## Set default tax rates for the entire invoice

If you sell one type of product, or have simple tax needs, you can set a default tax rate on the invoice. Default tax rates apply to all invoice line items. For more complex use cases, you can also set an item-level tax rate that overrides the default tax rate. You can add up to five default tax rates to each invoice.

#### Dashboard

If you’re creating an invoice through the Dashboard, you can assign a default tax rate after you add an item.

#### API

To set the invoice’s [default\_tax\_rates](https://docs.stripe.com/api/invoices/update.md#update_invoice-default_tax_rates) through the API:

```curl
curl https://api.stripe.com/v1/invoices/in_18jwqyLlRB0eXbMtrUQ97YBw \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "default_tax_rates[]"=txr_1EO66sClCIKljWvs98IiVfHW \
  -d "default_tax_rates[]"=txr_1EEOvcClCIKljWvsqYb9U0MB
```
