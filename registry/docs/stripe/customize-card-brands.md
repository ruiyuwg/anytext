# Customize card brands

Customize the card brands that Checkout displays.

# Hosted page

> This is a Hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/customization/card-brands?payment-ui=stripe-hosted.

You can customize the card brands you want to display to your customers during checkout.

To block specific card brands, include the `brands_blocked` parameter when you create a Checkout Session. Pass an array with any of the following card brand values:

- `visa`
- `mastercard`
- `american_express`
- `discover_global_network`

The `discover_global_network` value encompasses all of the cards that are part of the Discover Global Network, including Discover, Diners, JCB, UnionPay, and Elo.

The following code example initializes the Checkout Session with the `brands_blocked` parameter set to `['american_express']`, which prevents customers from using American Express cards.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success" \
  -d "payment_method_options[card][restrictions][brands_blocked][0]"=american_express
```

If a customer enters an unsupported card number in Checkout, an error message notifies them that their card brand isn’t accepted.
![Card brand filtering on Checkout](https://b.stripecdn.com/docs-statics-srv/assets/card-brand-filtering-on-form.e3a1bab1800020eefd977e093863d208.png)

An error surfaces informing the customer that you don’t accept Visa (or whatever card brand you have blocked).

[Link](https://docs.stripe.com/payments/link/checkout-link.md) also disables saved cards for returning customers if the saved card is blocked.
![Card brand filtering on Checkout with Link](https://b.stripecdn.com/docs-statics-srv/assets/card-brand-filtering-link.eb5ed48829c0b18a59dadf2a77cd6a66.png)

If a Link user’s saved card is blocked, it’s disabled.

Checkout also filters cards in Apple and Google Pay wallets, customer’s [saved payment methods](https://docs.stripe.com/payments/checkout/save-during-payment.md), and [networks from co-badged cards](https://docs.stripe.com/co-badged-cards-compliance.md).

# Embedded Page

> This is a Embedded Page for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/customization/card-brands?payment-ui=embedded-form.

You can customize the card brands you want to display to your customers during checkout.

To block specific card brands, include the `brands_blocked` parameter when you create a Checkout Session. Pass an array with any of the following card brand values:

- `visa`
- `mastercard`
- `american_express`
- `discover_global_network`

The `discover_global_network` value encompasses all of the cards that are part of the Discover Global Network, including Discover, Diners, JCB, UnionPay, and Elo.

The following code example initializes the Checkout Session with the `brands_blocked` parameter set to `['american_express']`, which prevents customers from using American Express cards.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=1 \
  -d mode=payment \
  --data-urlencode return_url="https://example.com/return" \
  -d ui_mode=embedded \
  -d "payment_method_options[card][restrictions][brands_blocked][0]"=american_express
```

If a customer enters an unsupported card number in Checkout, an error message notifies them that their card brand isn’t accepted.
![Card brand filtering on Checkout](https://b.stripecdn.com/docs-statics-srv/assets/card-brand-filtering-on-form.e3a1bab1800020eefd977e093863d208.png)

An error surfaces informing the customer that you don’t accept Visa (or whatever card brand you have blocked).

[Link](https://docs.stripe.com/payments/link/checkout-link.md) also disables saved cards for returning customers if the saved card is blocked.
![Card brand filtering on Checkout with Link](https://b.stripecdn.com/docs-statics-srv/assets/card-brand-filtering-link.eb5ed48829c0b18a59dadf2a77cd6a66.png)

If a Link user’s saved card is blocked, it’s disabled.

Checkout also filters cards in Apple and Google Pay wallets, customer’s [saved payment methods](https://docs.stripe.com/payments/checkout/save-during-payment.md), and [networks from co-badged cards](https://docs.stripe.com/co-badged-cards-compliance.md).
