# Automatically collect tax on Payment Links

Learn how to calculate and collect tax on a payment page without writing any code.

You can use Stripe Tax with [Payment Links](https://stripe.com/payments/payment-links) to automatically calculate and collect tax on a payment page and share a link to it with your customers, without writing any code.
[Watch on YouTube](https://www.youtube.com/watch?v=aotUFvYtmys)

#### Dashboard

> [Log in](https://dashboard.stripe.com/settings/tax) or [sign up](https://dashboard.stripe.com/register) for Stripe to enable Stripe Tax.

To [create a payment link](https://docs.stripe.com/payment-links/create.md) in the Dashboard:

1. Open the [Payment Links](https://dashboard.stripe.com/payment-links/create) page.
2. Click **+ New**.
3. Fill out the details.
4. Enable **Collect tax automatically**.

To update an existing payment link in the Dashboard:

1. Open the [Payment Links](https://dashboard.stripe.com/payment-links) page.
2. Select the payment link you want to update.
3. On the payment link details page, click the overflow menu (⋯), then click **Edit**.
4. In the payment link editor, select **Collect tax automatically** to enable automatic tax collection on this payment link.
5. (Optional) Select **Collect customers’ addresses** to improve tax calculation accuracy. The more information you provide, the more precise the calculation.
6. Click **Update link** to save your changes.

#### API

To create a payment link with automatic tax collection, pass the `automatic_tax[enabled]` parameter to the [Payment Link API](https://docs.stripe.com/api/payment-link/create.md) endpoint:

```curl
curl https://api.stripe.com/v1/payment_links \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "automatic_tax[enabled]"=true \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1
```

To update an existing payment link in the API, pass the `automatic_tax[enabled]` parameter to the [Payment Link API](https://docs.stripe.com/api/payment-link/update.md) endpoint:

```curl
curl https://api.stripe.com/v1/payment_links/{{PAYMENTLINK_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "automatic_tax[enabled]"=true
```

## Optional: Update your products and prices

Stripe Tax uses information stored on *products* (Products represent what your business sells—whether that's a good or a service) and *prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) to calculate tax, such as *tax code* (A tax code is the category of your product for tax purposes) and *tax behavior* (Tax behavior determines whether you want to include taxes in the price ("inclusive") or add them on top ("exclusive")). If you don’t explicitly specify these configurations, Stripe Tax will use the default tax code selected in [Tax Settings](https://dashboard.stripe.com/settings/tax).

For more information, see [Specify product tax codes and tax behavior](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior.md).

## See also

- [Use Stripe Tax with Connect](https://docs.stripe.com/tax/connect.md)
