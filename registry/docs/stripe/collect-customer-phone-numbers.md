# Collect customer phone numbers

Collect a phone number for shipping or invoicing when your customer makes a payment.

You can enable phone number collection on all `payment` and `subscription` [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) Sessions (phone number collection isn’t supported in `setup` mode). Only collect phone numbers if you need them for the transaction.

## Enable phone number collection

To enable phone number collection, set [phone\_number\_collection\[enabled\]](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-phone_number_collection-enabled) to `true` when creating a Checkout Session.

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "phone_number_collection[enabled]"=true \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "phone_number_collection[enabled]"=true \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

With phone number collection enabled, Checkout adds a *required* phone number field to the payment form. If you’re collecting a shipping address, the phone number field displays under the address fields. Otherwise, Checkout displays the phone number field below the email input. Customers can only enter one phone number per session.

## Retrieve the phone number

When your customer checks out with third-party wallets, such as [Apple Pay](https://docs.stripe.com/apple-pay.md) or [Google Pay](https://docs.stripe.com/google-pay.md), the phone number format isn’t guaranteed because of limitations on those platforms. We return the phone number value that’s provided by the third-party wallet.

We guarantee phone numbers in the [E.164](https://en.wikipedia.org/wiki/E.164) format when a customer doesn’t use [wallet payments](https://docs.stripe.com/payments/wallets.md).

After the session, you can retrieve customer phone numbers from the resulting *Customer* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments), or *Checkout Session* (A Checkout Session represents your customer's session as they pay for one-time purchases or subscriptions through Checkout. After a successful payment, the Checkout Session contains a reference to the Customer, and either the successful PaymentIntent or an active Subscription) objects:

- [On the Customer](https://docs.stripe.com/api/customers.md): Checkout saves collected phone numbers onto the [phone](https://docs.stripe.com/api/customers/object.md#customer_object-phone) property of the Customer object, which you can access programmatically by either fetching the Customer object directly with the [API](https://docs.stripe.com/api/customers/retrieve.md), or by listening for the [customer.created](https://docs.stripe.com/api/events/types.md#event_types-customer.created) event in a *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests). You can also view the customer’s phone number in the [dashboard](https://dashboard.stripe.com/customers).
- [On the Checkout Session](https://docs.stripe.com/api/checkout/sessions.md): The customer’s phone number is also saved in the [customer\_details](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_details) hash of the Checkout Session object, under [customer\_details.phone](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_details-phone). After each successful Checkout Session, Stripe emits the [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event containing the Checkout Session object (and phone number), which you can listen for in a *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests).

## Collect phone numbers for existing customers

Passing in an existing [Customer](https://docs.stripe.com/api/customers.md) with a populated [phone](https://docs.stripe.com/api/customers/object.md#customer_object-phone) property to the [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md) results in the phone number field being prefilled.

If the customer updates their phone number, this updated value persists on the [phone](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-phone) property on the [Customer object](https://docs.stripe.com/api/customers.md), overwriting any previously saved phone number.

### Update phone numbers with the customer portal

You can allow customers to manage their own accounts (which includes [updating their phone numbers](https://docs.stripe.com/api/customer_portal/configurations/create.md#create_portal_configuration-features-customer_update-allowed_updates)) in the customer portal.

## See also

- [Integrate the customer portal](https://docs.stripe.com/customer-management.md)
