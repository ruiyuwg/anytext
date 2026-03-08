# Subscription upsells

Enable customers to upgrade their subscription plan at checkout by using upsells.

Subscription upsells give customers the option to upgrade to a longer-term plan using Checkout. Upselling customers to longer subscription intervals (for example, from monthly to yearly) can increase your average order value and cash flow.

All recurring prices that aren’t metered are eligible to use subscription upsells. For any eligible price, you can set up a subscription upsell to another price that meets the following criteria:

- Prices must reference the same [Product](https://docs.stripe.com/api/prices/object.md#price_object-product).
- Prices must have the same [currency](https://docs.stripe.com/api/prices/object.md#price_object-currency).
- Prices must be `recurring` [type](https://docs.stripe.com/api/prices/object.md#price_object-type).
- If your prices use [tax behavior](https://docs.stripe.com/api/prices/object.md#price_object-tax_behavior), their values must be identical.
- If your price uses [tiers](https://docs.stripe.com/api/prices/object.md#price_object-tiers), the value for `up_to` in each tier must be identical.
- If using [quantity transformation](https://docs.stripe.com/api/prices/object.md#price_object-transform_quantity), the values for `divide_by` and `round` must be identical.

## Create a subscription upsell

Configure a subscription upsell in the Dashboard on the Price details page. To view the details for a Price, select a Product and select a price associated with the Product. In the Upsells section, select an upsell price from the dropdown menu. Upsells immediately apply to eligible Checkout Sessions that use that price.
![Configure a subscription upsell on the Price details page](https://b.stripecdn.com/docs-statics-srv/assets/add-upsell.08bc9bf9425295edb1ada9ff297ee257.gif)

Configure a subscription upsell on the Price details page.

## Checkout flow

During checkout, customers see an option to select the upsell with savings displayed, if applicable. For a Checkout Session to be eligible for upsells, it must:

- Be a subscription mode Checkout Session
- Have only one `type=recurring` price in the Checkout Session
- Have a valid configuration for the upsell price

Stripe calculates savings based on the amount the user saves in one billing cycle if they chose upsell pricing. For example, a monthly subscription of 100 USD that upsells to an annual subscription of 1000 USD shows savings of 200 USD. Checkout displays the savings as an amount or a percentage, depending on the character length of the savings.

Users can toggle between the initial price option and the upsell price option and then checkout.
![Toggle between the initial price option and the upsell price option](https://b.stripecdn.com/docs-statics-srv/assets/upsell-preview.2a43c1a8acb9f167178b7fda6a2b0796.gif)

Customer preview.

## Retrieve Checkout Session line items

After a customer selects an upsell, the `line_items` for the Checkout Session update to reflect the upsell price. When [fulfilling your order](https://docs.stripe.com/checkout/fulfillment.md#create-payment-event-handler) using the `checkout.session.completed` webhook, make sure to [retrieve the line items](https://docs.stripe.com/api/checkout/sessions/line_items.md).

## Trial behavior

If a customer selects an upsell for a Checkout Session with a trial available, the trial length won’t change.

## Coupon behavior

If you pass a coupon to the [discounts](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-discounts) array of the Checkout Session, that coupon is also applied to the upsell price if a customer selects the upsell. For example, if a monthly subscription upsells to a yearly subscription, and you pass in a 50% off coupon with a duration of four months, the discount applies to all invoices in the four month period starting when the coupon is first applied. If the customer selects the upsell, the 50% discount applies to the entire yearly subscription because the yearly invoice is created during the coupon’s four month period.

## Remove a subscription upsell

You can remove a subscription upsell on the Price details page. After you remove a subscription upsell, that upsell won’t be available to any new Checkout Sessions.
![Remove an upsell](https://b.stripecdn.com/docs-statics-srv/assets/remove-upsell.36e5e59619f3c13f0aa94a3bd48bafdb.gif)

Remove an upsell.
