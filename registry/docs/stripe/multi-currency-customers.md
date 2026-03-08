# Multi-currency customers

Change the billable currency for any customer to accept multiple currencies.

If you need to sell in multiple currencies but have each individual customer use a single currency, see [multi-currency Prices](https://docs.stripe.com/products-prices/how-products-and-prices-work.md#multiple-currencies).

Use the Invoicing API to issue an invoice to a customer in a different currency. With the multi-currency customers feature, you can bill the same *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments) using a different currency than what’s set as their default currency, and change the currency for a customer’s subscriptions. You can’t have two active subscriptions with different currencies.

This guide also explains how to create a credit note and inspect a customer’s credit balance in all assigned currencies. For illustrative purposes, we use the Canadian Dollar (CAD).

## Create an invoice

Before you invoice a customer, create an invoice item by passing in the customer `id`, `amount`, and `currency`. Only add invoice items to a single customer at a time to avoid adding them to the wrong one.

The maximum number of invoice items is 250. Creating an invoice adds up to 250 pending invoice items with the remainder to be added on the next invoice. To see your customer’s pending invoice items, see the **Customer details** page or set the [pending](https://docs.stripe.com/api/invoiceitems/list.md#list_invoiceitems-pending) attribute to `true` when you use the API to list all of the invoice items.

> A CAD invoice doesn’t apply a customer credit balance denominated in USD or any other currency other than CAD. Additionally, any amount-off coupons you applied to the customer that are denominated in non-CAD currency are ignored.

```curl
curl https://api.stripe.com/v1/invoiceitems \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d amount=1000 \
  -d currency=cad
```

You must pass in the `currency` parameter when you issue a multi-currency invoice. The `currency` parameter dictates which invoice items get pulled into the invoice. For example, if you were to create two invoice items—one in USD and the other in CAD—for the same customer, setting the currency to CAD would only pull in the CAD invoice item (ignoring the USD invoice item).

```curl
curl https://api.stripe.com/v1/invoices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d collection_method=send_invoice \
  -d days_until_due=30 \
  -d pending_invoice_items_behavior=include \
  -d currency=cad
```

## Create a credit note

If there’s an issue with the invoice, you can create a credit note. If you need to apply the credit to the customer’s credit balance (as opposed to back to the original payment method), Stripe allocates the credit amount to the CAD-specific credit balance.

```curl
curl https://api.stripe.com/v1/credit_notes \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d invoice={{INVOICE_ID}} \
  -d reason=duplicate \
  -d amount=1000 \
  -d credit_amount=1000
```

## Inspect the credit balance

To see how much credit a customer has in each currency, use the `invoice_credit_balance` parameter:

```curl
curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "expand[]"=invoice_credit_balance
```

The customer’s credit balance is drawn down from the next CAD invoice created for this customer. It won’t, however, be drawn down for invoices created in different currencies.

## See also

- [Integrate with the Invoicing API](https://docs.stripe.com/invoicing/integration.md)
- [Manage customers](https://docs.stripe.com/invoicing/customer.md)
- [Products and prices](https://docs.stripe.com/invoicing/products-prices.md)
