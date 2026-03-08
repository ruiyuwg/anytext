# Order carbon removal

Pre-order carbon removal tons from Frontier's offtake portfolio.

# API

> This is a API for when dashboard-or-api is api. View the full page at https://docs.stripe.com/climate/orders/order-carbon-removal?dashboard-or-api=api.

## Fund a climate order

When you purchase carbon removal, we deduct the funds from your Stripe balance. You can fund your balance using a [Top-up](https://docs.stripe.com/get-started/account/add-funds.md), [Invoice](https://docs.stripe.com/invoicing/no-code-guide.md), or [Checkout session](https://docs.stripe.com/checkout/quickstart.md). For an example of how to fund a climate order from your application, see the [Climate Orders quickstart](https://docs.stripe.com/climate/orders/quickstart.md).

## Create a climate order

Reserve and pay for carbon removal by creating a climate order. You can use the order to track your products through confirmation and delivery. When you create your order, we immediately deduct the funds from your Stripe balance.

#### Purchase by amount

```curl
curl https://api.stripe.com/v1/climate/orders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d amount=10000 \
  -d currency=usd \
  -d product=climsku_frontier_offtake_portfolio_2027
```

#### Purchase by quantity

```curl
curl https://api.stripe.com/v1/climate/orders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d metric_tons=1 \
  -d product=climsku_frontier_offtake_portfolio_2027
```

You have 24 hours to cancel a climate order and receive a refund of the purchase amount, but fees won’t be refunded.

> If you’re programmatically funding your account, make this call in the corresponding webhook handler for your funding source.

#### Checkout session

```javascript
case 'checkout.session.completed':
  await stripe.climate.orders.create({
    amount: 10000,
    currency: 'usd',
    product: "climsku_frontier_offtake_portfolio_2027"
  });
```

#### Invoice

```javascript
case 'invoice.paid':
  await stripe.climate.orders.create({
    amount: 10000,
    currency: 'usd',
    product: "climsku_frontier_offtake_portfolio_2027"
  });
```

#### Top-up

```javascript
case 'topup.succeeded':
  await stripe.climate.orders.create({
    amount: 10000,
    currency: 'usd',
    product: "climsku_frontier_offtake_portfolio_2027"
  });
```

## Track your climate orders

You can track the status of your climate orders in the [Dashboard](https://dashboard.stripe.com/climate/orders).

To get updates about a climate order, listen for events on your Stripe account. When the order status changes, you receive an event with the details. When your order is delivered, you receive a `climate.order.delivered` event. See [Webhooks for climate orders](https://docs.stripe.com/climate/orders/webhooks.md) for other possible event types.

# Dashboard

> This is a Dashboard for when dashboard-or-api is dashboard. View the full page at https://docs.stripe.com/climate/orders/order-carbon-removal?dashboard-or-api=dashboard.

## Fund a climate order

You can order carbon removal directly from the [Dashboard](https://dashboard.stripe.com/climate/orders). When you purchase carbon removal, we deduct the funds from your Stripe balance. You can fund your balance using a [Top-up](https://docs.stripe.com/get-started/account/add-funds.md), [Invoice](https://docs.stripe.com/invoicing/no-code-guide.md), or [Checkout session](https://docs.stripe.com/checkout/quickstart.md). For an example of how to fund a climate order from your application, see the [Climate Orders quickstart](https://docs.stripe.com/climate/orders/quickstart.md).

## Create a climate order

#### Stripe balance

Reserve and pay for carbon removal by creating a climate order. You can use the order to track your products through delivery. When you create your order using the **Stripe balance** payment source, we immediately deduct the funds from your Stripe balance.
![The Climate orders dashboard displaying the ability to create an order funded from your Stripe balance](https://b.stripecdn.com/docs-statics-srv/assets/climate_order_from_stripe_balance.de167e2c676c094381bcf1a2408594dd.png)

#### Customer invoice

Invoice your customers for their carbon removal purchases. After the invoice has been paid, the order will automatically confirm and we’ll deduct the funds from your Stripe balance. You can use the order to track your products through confirmation and delivery.

To send an invoice to fund your order, select the **Customer invoice** payment source. Next, complete the required order information:
![The first step for creating a Climate order funded by an invoice from the Dashboard](https://b.stripecdn.com/docs-statics-srv/assets/climate_order_from_invoice_1.1fdfdaf93b04daf69f36c62479524b32.png)

Finally, fill out the invoice details and click send. This is where you can make adjustments to the invoice itself. For example, you can add additional line items or adjust the price itself.

> Adjusting the invoice price won’t affect the order amount that was previously set. After the invoice has settled in your account, the total order amount will be deducted from your Stripe balance, even if the invoice amount is more or less than the order total.
> ![The second step for creating a Climate order funded by an invoice from the Dashboard](https://b.stripecdn.com/docs-statics-srv/assets/climate_order_from_invoice_2.75d8e52bdacf97c2a89bfc6155b1954b.png)

## Track your climate orders

You have 24 hours to cancel a climate order and receive a refund of the purchase amount, but fees won’t be refunded. You can track the status of your climate orders in the [Dashboard](https://dashboard.stripe.com/climate/orders).
