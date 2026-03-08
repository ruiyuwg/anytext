# Products and prices

Use the Invoicing API to manage products and prices.

Define all your business and product offerings in one place. *Products* (Products represent what your business sells—whether that's a good or a service) define what you sell and *Prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) track how much and how often to charge. This is a core entity within Stripe that works with *subscriptions* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis), *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice), and [Checkout](https://docs.stripe.com/payments/checkout.md).

Prices enable these use cases:

- A software provider that charges a one-time setup fee whenever a user creates a new subscription.
- An e-commerce store that sends a recurring box of goods for 10 USD per month and wants to allow customers to purchase one-time add-ons.
- A professional services firm that can now create a standard list of services and choose from that list per invoice instead of typing out each line item by hand.
- A non-profit organization that allows donors to define a custom recurring donation amount per customer.

You can manage your product catalog with products and prices. Products define what you sell and prices track how much and how often to charge. Manage your products and their prices in the Dashboard or through the API.

#### Dashboard

If you used the Dashboard in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) to set up your business, you can copy each of your products over to live mode by using **Copy to live mode** in the [Product catalog page](https://dashboard.stripe.com/products). Use our official libraries to access the Stripe API from your application.

1. Navigate to the **Product catalog** page, and click **Add product**.

2. Select whether you want to create a **One-time product**, or a **Recurring one-time product**.

3. Give your product a name, and assign it a price.

#### API

Learn how to create [Products](https://docs.stripe.com/api/products.md) and [Prices](https://docs.stripe.com/api/prices.md).

> For a complete guide on how to get started using the [Stripe CLI](https://docs.stripe.com/stripe-cli.md) or API, see the [Invoicing end-to-end integration guide](https://docs.stripe.com/invoicing/integration.md).

### Create a product

To create a product, enter its name:

```curl
curl https://api.stripe.com/v1/products \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d name="Gold Special"
```

### Create a price

[Prices](https://docs.stripe.com/api.md#prices) define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the billing interval (when the price is for a subscription). Like products, if you only have a few prices, it’s preferable to manage them in the Dashboard. Use the unit amount to express prices in the lowest unit of the currency—in this case, cents (10 USD is 1,000 cents, so the unit amount is 1000).

As an alternative, if you don’t need to create a price for your product, you can use the [amount](https://docs.stripe.com/api/invoiceitems/create.md#create_invoiceitem-amount) parameter during invoice item creation.

To create a price and assign it to the product, pass the product ID, unit amount, and currency. In the following example, the price for the “Gold Special” product is 10 USD:

```curl
curl https://api.stripe.com/v1/prices \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d product="{{PRODUCT_ID}}" \
  -d unit_amount=1000 \
  -d currency=usd
```
