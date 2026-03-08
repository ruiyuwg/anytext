# Send quotes

Send a quote and convert it to a payment or subscription.

- **Compatible with:** Subscriptions, invoices
- **Requires:** Stripe account
- **Good for:** Online sellers, individual creators, solo entrepreneurs, early-stage startups
- **Pricing:** [Pay-as-you-go](https://stripe.com/pricing), [Stripe Billing pricing](https://stripe.com/billing/pricing) for recurring payments, [Invoicing pricing](https://stripe.com/invoicing/pricing) for advanced invoicing features

With quotes, provide price estimates to your customers that you can convert into *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) or *subscriptions* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis). You can combine recurring and one-off line items, including any discounts or taxes.
![Quote PDF](https://b.stripecdn.com/docs-statics-srv/assets/quote-pdf.fbd3abb09a59b6be9f1c692ab402691c.png)

The generated quote PDF

## Create a quote

To create a quote in the Stripe Dashboard:

1. Go to the [Billing tab](https://dashboard.stripe.com/billing).
2. Click **Quick actions** > **Create quote** (or go directly to the [quote editor](https://dashboard.stripe.com/test/quotes/create)).
3. Select **+ Add new customer**. At a minimum, enter your customer’s **Name** and **Account email**. Click **Add customer**.
4. Under **Items**, add or select a product. (You can also add a coupon.)
5. Choose an expiration date.
6. (Optional) Write a memo, and add a custom header and footer. You can set the future default text for the header and footer in the [quote template](https://dashboard.stripe.com/settings/billing/quote).
7. To preview the quote PDF (which shows the generated quote number) click **Download preview**.
8. Click **Finalize quote**.

After you finalize the quote, send it to your customer:

1. To download the quote, go to **Quotes details page** > **Quote PDF**.
2. Use an external email address to send the PDF to your customer for review.

## Mark a quote as accepted

After your customer accepts the quote, bill them by converting the quote into an invoice or subscription.

You can only create one-off invoices if a quote *only* has one-time prices.

If a quote has at least one recurring price, you can only convert it to a subscription.

### Convert a quote to an invoice

1. To mark a quote as accepted and create a draft invoice, go to **Convert to invoice** > **Quotes details**.

2. Use the [invoice editor](https://dashboard.stripe.com/test/invoices/create) to modify the draft invoice as needed.

3. Email the invoice or automatically charge the customer.

### Convert a quote to a subscription

1. In the quote editor, choose a customer and create or select a product with a recurring price.

2. Enter the quote details and choose to either **Start the subscription immediately** or **Schedule a subscription start date**.

3. Finalize the quote. This marks the quote as **Accepted**.

4. Go to **Convert to subscription** > **Quotes details**.

5. Enter or modify the subscription details, then click **Create subscription**.

If you schedule the subscription to start immediately, Stripe creates an active subscription along with a draft invoice for the initial payment. Stripe finalizes the draft invoice automatically in 1 hour. Otherwise, the subscription begins on the scheduled start date. Depending on the subscription’s payment terms, Stripe collects payment by either charging the customer’s payment method on file or sending them an invoice.

## See also

- [Accessing quotes](https://support.stripe.com/questions/how-to-access-quotes)
- [How quotes work](https://docs.stripe.com/quotes.md)
