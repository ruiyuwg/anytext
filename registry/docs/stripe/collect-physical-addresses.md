# Collect physical addresses

Learn how to collect billing and shipping addresses.

When you use a Stripe-hosted payment page or embedded payment form, you can collect billing and shipping addresses.

## Collect a billing address

By default, a Checkout Session only collects a customer’s billing address when necessary (for example, to calculate tax). To always collect a billing address, set `billing_address_collection` to `required` when you [create a Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md).

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d billing_address_collection=required \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d billing_address_collection=required \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Collect a shipping address

To collect a customer’s shipping address in Checkout, pass the `shipping_address_collection` parameter when you [create a Checkout Session](https://docs.stripe.com/api/checkout/sessions/create.md). When you collect a shipping address, you must also specify which countries to allow shipping to. Configure the `allowed_countries` property with an array of [two-letter ISO country codes](https://www.nationsonline.org/oneworld/country_code_list.htm).

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d billing_address_collection=required \
  -d "shipping_address_collection[allowed_countries][]"=US \
  -d "shipping_address_collection[allowed_countries][]"=CA \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d billing_address_collection=required \
  -d "shipping_address_collection[allowed_countries][]"=US \
  -d "shipping_address_collection[allowed_countries][]"=CA \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

When the customer completes the session, the [Checkout Session](https://docs.stripe.com/api/checkout/sessions/object.md) object saves the collected shipping address on the `shipping_details` property and includes it in the payload of the `checkout.session.completed` *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests). You can also see shipping information in the Dashboard on the payment details page.

## See also

- [Charge for shipping](https://docs.stripe.com/payments/during-payment/charge-shipping.md)
- [Collect phone numbers](https://docs.stripe.com/payments/checkout/phone-numbers.md)
