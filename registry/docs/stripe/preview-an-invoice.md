# Preview an invoice

Learn how to create a preview of an invoice.

You can create a preview of an invoice for your customer while they’re considering a purchase. [Create a preview](https://docs.stripe.com/api/invoices/create_preview.md) to calculate the total invoice amount, retrieve each invoice line, and include any relevant taxes or discounts. Creating a preview allows you to show the total payment amount to your customer without the need to create an invoice.

For example, if you operate a company that provides repair services to businesses, you might present your customers with multiple items that each have different prices and billing schedules:

- Item 1: 299 USD one-time service fee
- Item 2: 29 USD repair material A
- Item 3: 99 USD repair material B
- Item 4: 49 USD per month support plan

Customers might want to know how much different combinations of your goods and services cost. If they intend to purchase items 1 and 3 while applying the `WINTERSALE` promo code for 15% off, run the following API call:

```curl
curl https://api.stripe.com/v1/invoices/create_preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "invoice_items[0][price]"=price_item_1 \
  -d "invoice_items[0][quantity]"=1 \
  -d "invoice_items[1][price]"=price_item_3 \
  -d "invoice_items[1][quantity]"=1 \
  -d "discounts[0][promotion_code]"=promo_WINTERSALE
```

Stripe returns an [invoice](https://docs.stripe.com/api/invoices/object.md) preview with each of the lines, with the discount applied, and the total amount:

```json
{
  "id": "upcoming_in_1OujwkClCIKljWvsq5v2ICAN",
  "object": "invoice",
  "account_country": "US",
  "account_name": "Stripe Docs",
  "account_tax_ids": null,
  "amount_due": 39800,
  "amount_paid": 0,
  "amount_remaining": 39800,
  "amount_shipping": 0,
  "application": null,
  "application_fee_amount": null,
  "attachments": [],
  "attempt_count": 0,
  "attempted": false,
  "auto_advance": false,
  "automatic_tax": {
    "enabled": false,
    "liability": null,
    "status": null
  },
  "billing_reason": "upcoming",
  "charge": null,
  "collection_method": "charge_automatically",
  "created": 1710544434,
  "currency": "usd",
  "custom_fields": null,
  "customer": "cus_PkEPRnhp0Yk1ph",
  "customer_address": null,
  "customer_email": null,
  "customer_name": null,
  "customer_phone": null,
  "customer_shipping": null,
  "customer_tax_exempt": "none",
  "customer_tax_ids": [],
  "default_margins": [],
  "default_payment_method": null,
  "default_source": null,
  "default_tax_rates": [],
  "description": null,
  "discount": null,
  "discounts": [],
  "due_date": null,
  "effective_at": null,
  "ending_balance": 0,
  "footer": null,
  "from_invoice": null,
  "hosted_invoice_url": null,
  "invoice_pdf": null,
  "issuer": {
    "type": "self"
  },
  "last_finalization_error": null,
  "latest_revision": null,
  "lines": {
    "object": "list",
    "data": [
      {
        "id": "il_tmp_133608ClCIKljWvs8da61423",
        "object": "line_item",
        "amount": 9900,
        "amount_excluding_tax": 9900,
        "currency": "usd",
        "description": "Price2",
        "discount_amounts": [],
        "discountable": true,
        "discounts": [],
        "invoice": "in_1OujwkClCIKljWvsfntkIWhT",
        "invoice_item": "ii_1OujwkClCIKljWvsnajC2mHG",
        "livemode": false,
        "margin_amounts": [],
        "margins": [],
        "metadata": {},
        "period": {
          "end": 1710544434,
          "start": 1710544434
        },
        "plan": null,
        "price": {
          "id": "price_1OujwjClCIKljWvsKriuEI60",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1710544433,
          "currency": "usd",
          "custom_unit_amount": null,
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": null,
          "product": "prod_PkEPiQtlsZzbaa",
          "recurring": null,
          "tax_behavior": "unspecified",
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "one_time",
          "unit_amount": 9900,
          "unit_amount_decimal": "9900"
        },
        "proration": false,
        "proration_details": {
          "credited_items": null
        },
        "quantity": 1,
        "rendering": null,
        "subscription": null,
        "tax_amounts": [],
        "tax_rates": [],
        "type": "invoiceitem",
        "unit_amount_excluding_tax": "9900"
      },
      {
        "id": "il_tmp_1f6911ClCIKljWvs7a00e38c",
        "object": "line_item",
        "amount": 29900,
        "amount_excluding_tax": 29900,
        "currency": "usd",
        "description": "Price1",
        "discount_amounts": [],
        "discountable": true,
        "discounts": [],
        "invoice": "in_1OujwkClCIKljWvsfntkIWhT",
        "invoice_item": "ii_1OujwkClCIKljWvsJVGuvJYk",
        "livemode": false,
        "margin_amounts": [],
        "margins": [],
        "metadata": {},
        "period": {
          "end": 1710544434,
          "start": 1710544434
        },
        "plan": null,
        "price": {
          "id": "price_1OujwiClCIKljWvss6aaPCEe",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1710544432,
          "currency": "usd",
          "custom_unit_amount": null,
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": null,
          "product": "prod_PkEPv778t9PLvu",
          "recurring": null,
          "tax_behavior": "unspecified",
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "one_time",
          "unit_amount": 29900,
          "unit_amount_decimal": "29900"
        },
        "proration": false,
        "proration_details": {
          "credited_items": null
        },
        "quantity": 1,
        "rendering": null,
        "subscription": null,
        "tax_amounts": [],
        "tax_rates": [],
        "type": "invoiceitem",
        "unit_amount_excluding_tax": "29900"
      }
    ],
    "has_more": false,
    "total_count": 2,
    "url": "/v1/invoices/upcoming_in_1OujwkClCIKljWvsq5v2ICAN/lines"
  },
  "livemode": false,
  "metadata": {},
  "next_payment_attempt": null,
  "number": null,
  "on_behalf_of": null,
  "paid": false,
  "paid_out_of_band": false,
  "paper_checks": [],
  "payment_intent": null,
  "payment_settings": {
    "default_mandate": null,
    "payment_method_options": null,
    "payment_method_types": null
  },
  "period_end": 1710544434,
  "period_start": 1710544434,
  "post_payment_credit_notes_amount": 0,
  "pre_payment_credit_notes_amount": 0,
  "quote": null,
  "receipt_number": null,
  "recurring": true,
  "redaction": null,
  "rendering": {
    "amount_tax_display": "exclude_tax",
    "pdf": null,
    "template": null,
    "template_version": null
  },
  "rendering_options": {
    "amount_tax_display": "exclude_tax"
  },
  "shipping_cost": null,
  "shipping_details": null,
  "starting_balance": 0,
  "statement_descriptor": null,
  "status": "draft",
  "status_transitions": {
    "finalized_at": null,
    "marked_uncollectible_at": null,
    "paid_at": null,
    "voided_at": null
  },
  "subscription": null,
  "subscription_details": {
    "metadata": null,
    "pause_collection": null
  },
  "subtotal": 39800,
  "subtotal_excluding_tax": 39800,
  "tax": null,
  "tax_filing_currency": null,
  "test_clock": null,
  "total": 39800,
  "total_discount_amounts": [],
  "total_excluding_tax": 39800,
  "total_margin_amounts": [],
  "total_tax_amounts": [],
  "transfer_data": null,
  "webhooks_delivered_at": null
}
```

Additionally, the resulting invoice preview can be retrieved through the [/v1/invoices/:id](https://docs.stripe.com/api/invoices/retrieve.md) endpoint for the following 72 hours:

```curl
curl https://api.stripe.com/v1/invoices/upcoming_in_1OujwkClCIKljWvsq5v2ICAN \
  -u "<<YOUR_SECRET_KEY>>:"
```

## Include Stripe Tax

To preview tax amounts from Stripe Tax, set `automatic_tax[enabled] = true` and pass the customer’s address in `customer_details[address]`.

Alternatively, you can pass in an IP address in `customer_details[tax][ip_address]` instead if you don’t have the customer’s address. In most cases, Stripe can resolve an IP address to a physical area, but its precision varies and might not reflect your customer’s actual location. We don’t recommend relying on a customer’s IP address to determine their address beyond an initial estimate.

```curl
curl https://api.stripe.com/v1/invoices/create_preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "customer_details[address][line1]"="920 5th Ave" \
  -d "customer_details[address][city]"=Seattle \
  -d "customer_details[address][state]"=WA \
  -d "customer_details[address][postal_code]"=98104 \
  -d "customer_details[address][country]"=US \
  -d "automatic_tax[enabled]"=true \
  -d "invoice_items[0][price]"=price_item_1 \
  -d "invoice_items[0][quantity]"=1 \
  -d "invoice_items[1][price]"=price_item_3 \
  -d "invoice_items[1][quantity]"=1 \
  -d "discounts[0][promotion_code]"=promo_WINTERSALE
```

## Preview invoices with subscriptions

To preview the first invoice with a recurring price, use the [subscription\_details.items](https://docs.stripe.com/api/invoices/create_preview.md#create_create_preview-subscription_details-items) parameter:

```curl
curl https://api.stripe.com/v1/invoices/create_preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "subscription_details[items][0][price]"=price_recurring_4 \
  -d "subscription_details[items][0][quantity]"=1 \
  -d "invoice_items[0][price]"=price_item_1 \
  -d "invoice_items[0][quantity]"=1 \
  -d "invoice_items[1][price]"=price_item_3 \
  -d "invoice_items[1][quantity]"=1 \
  -d "discounts[0][promotion_code]"=promo_WINTERSALE
```

To preview changes to an existing subscription, provide the [subscription or subscription schedule ID](https://docs.stripe.com/billing/subscriptions/subscription-schedules.md#preview-an-invoice).

## Preview the recurring charges only

Your customer might want a recurring subscription along with one-time items, or temporary credits or discounts to use with their purchase. If they want to know what the recurring charges are after any adjustments, use the [preview\_mode](https://docs.stripe.com/api/invoices/create_preview.md#create_create_preview-preview_mode) parameter to offer them a preview of the total.

For example, if `WINTERSALE` is a one-time 15% discount and the customer wants to purchase items 1, 3, and 4, you can retrieve the recurring charge amount with this API call:

```curl
curl https://api.stripe.com/v1/invoices/create_preview \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d preview_mode=recurring \
  -d "subscription_details[items][0][price]"=price_recurring_4 \
  -d "subscription_details[items][0][quantity]"=1 \
  -d "invoice_items[0][price]"=price_item_1 \
  -d "invoice_items[0][quantity]"=1 \
  -d "invoice_items[1][price]"=price_item_3 \
  -d "invoice_items[1][quantity]"=1 \
  -d "discounts[0][promotion_code]"=promo_WINTERSALE
```

The resulting invoice only contains the 49 USD per month support plan with no discounts. Similarly, you can combine `preview_mode` with `subscription` or `subscription_schedule` to display the expected recurring charge, excluding one-off items and discounts.

## Invoice Line pagination

For invoices with more than 10 lines, you can [retrieve a paginated view of the lines](https://docs.stripe.com/api/invoice-line-item/retrieve.md):

```curl
curl https://api.stripe.com/v1/invoices/upcoming_in_1OujwkClCIKljWvsq5v2ICAN/lines \
  -u "<<YOUR_SECRET_KEY>>:"
```
