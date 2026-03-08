# Automatically collect tax on Checkout sessions

Learn how to automatically calculate taxes in Checkout.

Stripe Tax automatically calculates the taxes on all purchases and *subscriptions* (A Subscription represents the product details associated with the plan that your customer subscribes to. Allows you to charge the customer on a recurring basis) accumulated during a Checkout session. If you haven’t integrated with Checkout, you must complete the integration using the [Accept a Payment guide](https://docs.stripe.com/checkout/quickstart.md).

This video shows how to enable automatic tax collection when using hosted integrations like Stripe Checkout.
[Watch on YouTube](https://www.youtube.com/watch?v=fMk7y-C6JuM)

## Create a Checkout Session

You can create Checkout sessions for one time and recurring purchases.

A customer’s tax rates come from their location, which Checkout assesses from the customer’s address. The address that Checkout uses to calculate taxes depends on whether the customer is new or existing, and whether you collect shipping addresses during the Checkout Session:

|                                    | New Customer                                                                                         | Existing Customer                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Collect a billing address only** | Checkout calculates taxes based on the customer’s billing address entered into the Checkout Session  | If the customer has a previously saved shipping address, Checkout calculates taxes based on that address. Otherwise, you can calculate taxes based on billing address entered during Checkout (by specifying [customer\_update\[address\]=auto](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-address)) or the billing address saved to the customer (the default behavior). |
| **Collect a shipping address**     | Checkout calculates taxes based on the customer’s shipping address entered into the Checkout Session | Checkout calculates taxes based on the customer’s shipping address entered into the Checkout Session. *Existing addresses on the customer won’t apply in this case.*                                                                                                                                                                                                                                                        |

> To ensure that Google Pay is offered as a payment method while using Stripe Tax in Checkout, you must either require collecting a shipping address, or provide an existing customer with a saved shipping address. Apple Pay with Stripe Tax displays only when the customer’s browser supports Apple Pay version 12 or greater.

## Calculate tax for new customers

Set `customer_creation=always` in the Checkout Session to create a [Customer](https://docs.stripe.com/api/customers.md) with collected billing and shipping addresses when not identifying an existing customer.

Checkout calculates the tax based on the location of the shipping address, if provided, or else the billing address.

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d "automatic_tax[enabled]"=true \
  -d customer_creation=always \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price]"="{{PRICE_ID}}" \
  -d "line_items[0][quantity]"=2 \
  -d "automatic_tax[enabled]"=true \
  -d customer_creation=always \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Calculate tax for existing customers

#### Customer v1

To calculate tax on Checkout sessions created for existing customers, set `automatic_tax[enabled]` to `true` and specify the `customer` ID. Checkout uses the following address prioritization to calculate taxes:

1. If specified, Checkout uses the [collected shipping address](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-shipping_address_collection) to calculate taxes. If you collect the shipping address, you must also set `customer_update[shipping]` to `auto` to add or update the Customer with the collected shipping address.

   #### Stripe-hosted page

   ```curl
   curl https://api.stripe.com/v1/checkout/sessions \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d "line_items[0][price]"="{{PRICE_ID}}" \
     -d "line_items[0][quantity]"=2 \
     -d "automatic_tax[enabled]"=true \
     -d customer="{{CUSTOMER_ID}}" \
     -d "customer_update[shipping]"=auto \
     -d "shipping_address_collection[allowed_countries][0]"=US \
     -d mode=payment \
     --data-urlencode success_url="https://example.com/success"
   ```

   #### Embedded form

   ```curl
   curl https://api.stripe.com/v1/checkout/sessions \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d "line_items[0][price]"="{{PRICE_ID}}" \
     -d "line_items[0][quantity]"=2 \
     -d "automatic_tax[enabled]"=true \
     -d customer="{{CUSTOMER_ID}}" \
     -d "customer_update[shipping]"=auto \
     -d "shipping_address_collection[allowed_countries][0]"=US \
     -d mode=payment \
     -d ui_mode=embedded \
     --data-urlencode return_url="https://example.com/return"
   ```

2. If you don’t collect the shipping address, Checkout uses the Customer’s [existing shipping address](https://docs.stripe.com/api/customers/object.md#customer_object-shipping-address) to calculate taxes, if available.

3. If the shipping address isn’t available, Checkout uses the billing address to calculate taxes. Set `billing_address_collection` to `required` to always collect a billing address, or leave it at `auto` (default) to collect when needed. If Checkout collects the billing address, set `customer_update[address]` to `auto` to direct Tax to use the collected billing address, or to `never` to use the Customer’s existing address to calculate taxes.

   #### Stripe-hosted page

   ```curl
   curl https://api.stripe.com/v1/checkout/sessions \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d "line_items[0][price]"="{{PRICE_ID}}" \
     -d "line_items[0][quantity]"=2 \
     -d "automatic_tax[enabled]"=true \
     -d customer="{{CUSTOMER_ID}}" \
     -d "customer_update[address]"=auto \
     -d billing_address_collection=required \
     -d mode=payment \
     --data-urlencode success_url="https://example.com/success"
   ```

   #### Embedded form

   ```curl
   curl https://api.stripe.com/v1/checkout/sessions \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d "line_items[0][price]"="{{PRICE_ID}}" \
     -d "line_items[0][quantity]"=2 \
     -d "automatic_tax[enabled]"=true \
     -d customer="{{CUSTOMER_ID}}" \
     -d "customer_update[address]"=auto \
     -d billing_address_collection=required \
     -d mode=payment \
     -d ui_mode=embedded \
     --data-urlencode return_url="https://example.com/return"
   ```

4. Otherwise, Checkout uses addresses from the customer, following the [address hierarchy](https://docs.stripe.com/tax/customer-locations.md#address-hierarchy).

## Check the response

To inspect the results of the latest tax calculation, you can read the tax amount calculated by Checkout from the [total\_details.amount\_tax](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-total_details) on the Checkout Session resource. Additionally, the tax outcome for each payment is available when [viewing a payment](https://dashboard.stripe.com/test/payments) in the Dashboard.

## Optional: Update your products and prices

Stripe Tax uses information stored on *products* (Products represent what your business sells—whether that's a good or a service) and *prices* (Prices define how much and how often to charge for products. This includes how much the product costs, what currency to use, and the interval if the price is for subscriptions) to calculate tax, such as *tax code* (A tax code is the category of your product for tax purposes) and *tax behavior* (Tax behavior determines whether you want to include taxes in the price ("inclusive") or add them on top ("exclusive")). If you don’t explicitly specify these configurations, Stripe Tax will use the default tax code selected in [Tax Settings](https://dashboard.stripe.com/settings/tax).

For more information, see [Specify product tax codes and tax behavior](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior.md).

## Optional: Specifying tax codes when creating products inline

When creating a Checkout Session with [line\_items.price\_data.product\_data](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-line_items-price_data-product_data), you can specify a tax code directly in the request. We recommend you do this when you’re creating new products rather than using existing product IDs.

#### Stripe-hosted page

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][product_data][tax_code]"=txcd_99999999 \
  -d "line_items[0][quantity]"=1 \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

#### Embedded form

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][unit_amount]"=2000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][product_data][tax_code]"=txcd_99999999 \
  -d "line_items[0][quantity]"=1 \
  -d "automatic_tax[enabled]"=true \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

Replace `txcd_99999999` with the appropriate [tax code](https://docs.stripe.com/tax/tax-codes.md) for your product. The tax code determines how the product is categorized for tax purposes. If you don’t specify a tax code, Stripe Tax uses the default tax code from your [Tax Settings](https://dashboard.stripe.com/settings/tax).

## See also

- [Determining customer locations](https://docs.stripe.com/tax/customer-locations.md)
- [Checkout and tax IDs](https://docs.stripe.com/tax/checkout/tax-ids.md)
- [Reporting and filing](https://docs.stripe.com/tax/reports.md)
- [Use Stripe Tax with Connect](https://docs.stripe.com/tax/connect.md)
- [Calculate tax in your custom checkout flow](https://docs.stripe.com/tax/custom.md)
