# Create subscriptions

Set up recurring payments by offering subscriptions to your service.

- **Stripe compatibility:** Payment Links, customer portal
- **Requires:** Stripe account
- **Good for:** SaaS businesses, individual creators, e-commerce businesses
- **Pricing:** [Stripe Billing pricing](https://stripe.com/billing/pricing) for recurring payments

Subscriptions represent what your customer is paying for and how much and how often you’re charging them for the product. You can subscribe customers manually through the Dashboard. You can also let them sign up through your website or a [Payment Link](https://docs.stripe.com/payment-links/create.md?pricing-model=standard).

This page shows you how to manually create and edit a subscription in your Stripe Dashboard.

## Create a subscription

To create a subscription:

1. In the Stripe Dashboard, go to the [subscriptions](https://dashboard.stripe.com/test/subscriptions) page.

2. Click **+Create subscription**.

3. Find or add a customer.

4. Enter the pricing and product information. You can add multiple products.

5. Set the start and end date of the subscription.

6. Set the starting date for the billing cycle. This defines when the next invoice is generated. Depending on your settings, the saved payment method on file might also be charged automatically on the billing cycle date. Learn more about the [billing cycle date](https://docs.stripe.com/billing/subscriptions/billing-cycle.md).

7. (Recommended) [Configure email reminders and notifications](https://docs.stripe.com/invoicing/send-email.md#email-configuration) for subscribers.

8. (Optional) Add the default tax behavior, a coupon, a free trial, or metadata.

9. (Optional) Enable [revenue recovery](https://docs.stripe.com/billing/revenue-recovery.md) features in the Dashboard, which can help you reduce and recover failed subscription payments. You can automatically retry failed payments, build custom automations, configure customer emails, and so on.

### Advanced options

### Set up usage-based subscriptions

To bill users based on how much of your service they use, without writing code:

1. Track usage outside of Stripe.
2. Generate invoices for each billing cycle.

See [usage-based pricing](https://docs.stripe.com/products-prices/pricing-models.md#usage-based-pricing) and [usage based subscriptions](https://docs.stripe.com/billing/subscriptions/usage-based.md) to learn more.

## Edit a subscription

To edit a subscription:

1. Go to the [subscriptions](https://dashboard.stripe.com/test/subscriptions) page.

2. Find the subscription you want to modify, click the overflow menu (⋯), then click **Update subscription**. You can also click the pencil icon (✏) next to the subscription name. From this menu, you can also:

   - **Cancel the subscription**: Select a date to cancel the subscription immediately, at the end of the current period, or on a custom date. You can also select the option to refund the last payment for this subscription and create a [credit note](https://docs.stripe.com/invoicing/dashboard/credit-notes.md) for your records.

   - **Pause payment collection**: Select the duration of the pause (indefinite or ending on a custom date) and how invoices should behave during the pause.

   - **Share payment update link**: Generate a link the customer can use to [update the subscription payment method](https://docs.stripe.com/billing/subscriptions/payment-methods-setting.md#update-payment-method).

3. Make your changes to the subscription.

4. Click **Update subscription**.

## Delete a subscription

You can’t delete a subscription. But you can cancel it or pause payment collection. See [editing a subscription](https://docs.stripe.com/no-code/subscriptions.md#edit-susbscription) for those details.

## Subscriptions on mobile

Use the [Stripe Dashboard mobile app](https://docs.stripe.com/dashboard/mobile.md) to create or manage subscriptions on your mobile device. (Currently only available on [iOS](https://apps.apple.com/app/apple-store/id978516833?pt=91215812\&ct=stripe-docs-subscriptions-nc\&mt=8) only.)

1. Go to the **Customers** tab.
2. Select a customer.
3. Tap the plus sign (**+**) in the subscription row. Alternatively, tap the overflow menu (⋯), and select **Create subscription**.

You can only select existing products with a recurring price.

### Cancel a subscription from the mobile app

1. Go to **Payments > Subscriptions**.
2. Select an active subscription.
3. Tap **Cancel Subscription** in the action bar.

You can’t pause subscriptions using the app.
