# Collect customer tax IDs with Checkout

Learn how to collect VAT and other customer tax IDs with Checkout.

# Hosted page

> This is a Hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/tax/checkout/tax-ids?payment-ui=stripe-hosted.

Displaying a customer’s tax ID and legal business name on *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) and processing VAT refunds are common requirements that you can satisfy by enabling tax ID collection in Checkout. This guide assumes that you’ve already integrated Checkout. If you haven’t, see the [Accept a payment guide](https://docs.stripe.com/payments/accept-a-payment.md).

## Enable Tax ID collection

With tax ID collection enabled, Checkout shows and hides the tax ID collection form depending on your customer’s location. If your customer is in a location supported by tax ID collection, Checkout shows a checkbox allowing the customer to indicate that they’re purchasing as a business. When a customer checks the box, Checkout displays fields for them to enter the tax ID and legal entity name for the business. If available, Checkout uses the customer’s shipping address to determine their location, otherwise Checkout uses the customer’s billing address. Customers can only enter one tax ID.

### New Customers

To enable tax ID collection for new customers, set [tax\_id\_collection\[enabled\]](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-tax_id_collection-enabled) to `true` when creating a Checkout session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

This example creates a Session in `payment` mode with tax ID collection enabled. For subscriptions, make the same changes with the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) set to `subscription`.

You can additionally configure Checkout to create a new [Customer](https://docs.stripe.com/api/customers/object.md) for you using [customer\_creation](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_creation). If you do, Checkout saves any tax ID information collected during a Session to that new Customer. If not, the tax ID information will still be available at [customer\_details.tax\_ids](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_details-tax_ids).

### Existing Customers

#### Customer v1

If you pass an existing Customer when creating a Session, Checkout updates the Customer with any tax ID information collected during the Session. Checkout saves the collected business name onto the Customer’s [name](https://docs.stripe.com/api/customers/object.md#customer_object-name) property, and adds the collected tax ID to the Customer’s [customer.tax\_ids](https://docs.stripe.com/api/customers/object.md#customer_object-tax_ids) array. Since the collection of a business name could result in the Customer’s existing [name](https://docs.stripe.com/api/customers/object.md#customer_object-name) being overridden, you must set [customer\_update.name](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-name) to `auto` when creating the Session.

> Checkout only collects tax IDs on Customers that don’t already have an existing tax ID. If a Customer has one or more tax IDs saved, Checkout doesn’t display the tax ID collection form even if tax ID collection is enabled.

When collecting tax IDs for existing customers you can either base their location on existing addresses on the customer or the addresses entered during checkout. By default, Checkout looks for existing addresses on the customer to assess their location:

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "customer_update[name]"=auto \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

If you don’t have the addresses of your existing customers saved, you can base their location on the billing or shipping address entered during Checkout. To specify that you want to use the billing address entered during Checkout to assess the customer’s location, you must set [customer\_update.address](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-address) to `auto`. When setting [customer\_update.address](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-address) to `auto`, Checkout replaces any previously saved addresses on the customer with the address entered during the session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "customer_update[name]"=auto \
  -d "customer_update[address]"=auto \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

If you’re collecting shipping addresses for existing customers, you must base their location on the shipping address entered during checkout. To do so, set [customer\_update.shipping](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-shipping) to `auto`. When setting [customer\_update.shipping](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-shipping) to `auto`, Checkout replaces any previously saved shipping addresses on the customer with the shipping address entered during the session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "customer_update[name]"=auto \
  -d "customer_update[shipping]"=auto \
  -d "shipping_address_collection[allowed_countries][0]"=DE \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

The above code example creates a Session in `payment` mode with tax ID collection enabled. For subscriptions, make the same changes with the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) set to `subscription`.

## Optional: Require tax ID collection

You can optionally configure Checkout to require tax ID collection by setting the [tax\_id\_collection\[required\]](https://docs.stripe.com/api/.md#create_checkout_session-tax_id_collection-required) parameter. When set to `if_supported`, Checkout will require tax ID information for payment for customers in [supported billing countries](https://docs.stripe.com/tax/checkout/tax-ids.md#supported-types).

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "tax_id_collection[required]"=if_supported \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success"
```

## Retrieve Customer Tax ID details after a Session

Checkout includes provided tax IDs on the resulting [Session](https://docs.stripe.com/api/checkout/sessions/object.md) object. After each completed Session, Checkout emits a [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event that you can listen for in a *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) endpoint. If you want to retrieve the collected tax ID from the Session object, it’s available under the Session’s [customer\_details.tax\_ids](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_details-tax_ids) array:

```json
{
  "object": {
    "id": "cs_test_a1dJwt0TCJTBsDkbK7RcoyJ91vJxe2Y",
    "object": "checkout.session",
    ...
    "customer": {{CUSTOMER_ID}},
    "customer_details": {
      ..."tax_ids": [
        {
          "type": "eu_vat",
          "value": "FRAB123456789"
        }
      ]
    },
    ..."tax_id_collection": {
      "enabled": true
    },
    ...
  }
}
```

Checkout saves collected tax IDs and business names to the [Customer](https://docs.stripe.com/api/customers/object.md) object when you associate the Checkout Session with a Customer. Checkout stores a collected tax ID under the [customer.tax\_ids](https://docs.stripe.com/api/customers/object.md#customer_object-tax_ids) array on the Customer. You can retrieve all tax IDs saved to a Customer with the [Tax IDs](https://docs.stripe.com/api/tax_ids/list.md) resource by setting [owner.type](https://docs.stripe.com/api/tax_ids/list.md#list_tax_ids-owner-type) to `customer` and [owner.customer](https://docs.stripe.com/api/tax_ids/list.md#list_tax_ids-owner-customer) to the customer ID. Checkout saves the business name to the Customer’s [name](https://docs.stripe.com/api/customers/object.md#customer_object-name) and [business\_name](https://docs.stripe.com/api/customers/object.md#customer_object-business_name) properties. Your subscription invoices always show the collected legal business name.

## Test your integration

In testing environments, you can enter any alphanumeric string that is in the correct format of a supported tax ID type (for example, `DE123456789` for `eu_vat`). For a full list of example tax IDs you can reference our [Customer Tax ID guide](https://docs.stripe.com/billing/customer/tax-ids.md#supported-tax-id). You can also use our [test tax IDs](https://docs.stripe.com/connect/testing.md#test-business-tax-ids) to test various verification state flows.

## Validation

During the Checkout Session, Stripe verifies that the provided tax IDs are formatted correctly, but not that they’re valid. You’re responsible for ensuring the validity of customer information collected during checkout. To help, Stripe automatically performs asynchronous validation against government databases for [Australian Business Numbers (ABNs)](https://docs.stripe.com/tax/invoicing/tax-ids.md#australian-business-numbers-abn), [European Value Added Tax (EU VAT)](https://docs.stripe.com/tax/invoicing/tax-ids.md#european-value-added-tax-eu-vat-numbers), and [United Kingdom Value Added Tax (GB VAT)](https://docs.stripe.com/tax/invoicing/tax-ids.md#united-kingdom-value-added-tax-gb-vat-numbers) numbers. Learn more about the [validation we perform](https://docs.stripe.com/tax/invoicing/tax-ids.md#validation), and how to consume the status of those checks.

If you use Stripe Tax and your customer provides a tax ID, Stripe Tax applies the reverse charge or zero rate according to applicable laws, as long as the tax ID conforms to the necessary number format, regardless of its validity.

## Supported Tax ID types

Checkout collects the following tax ID types in the given regions:

| Country | Enum       | Description                                                                 | Example              | Impact in Tax Calculation\* |
| ------- | ---------- | --------------------------------------------------------------------------- | -------------------- | -------------------------- |
| AE      | ae\_trn     | United Arab Emirates TRN                                                    | 123456789012345      | Yes                        |
| AL      | al\_tin     | Albania Tax Identification Number                                           | J12345678N           | Yes                        |
| AM      | am\_tin     | Armenia Tax Identification Number                                           | 02538904             | Yes                        |
| AO      | ao\_tin     | Angola Tax Identification Number                                            | 5123456789           | No                         |
| AT      | eu\_vat     | European VAT number                                                         | ATU12345678          | Yes                        |
| AU      | au\_abn     | Australian Business Number (AU ABN)                                         | 12345678912          | Yes                        |
| AW      | aw\_tin     | Aruba Tax Identification Number                                             | 12345678             | Yes                        |
| AZ      | az\_tin     | Azerbaijan Tax Identification Number                                        | 0123456789           | Yes                        |
| BA      | ba\_tin     | Bosnia and Herzegovina Tax Identification Number                            | 123456789012         | Yes                        |
| BB      | bb\_tin     | Barbados Tax Identification Number                                          | 1123456789012        | No                         |
| BD      | bd\_bin     | Bangladesh Business Identification Number                                   | 123456789-0123       | Yes                        |
| BE      | eu\_vat     | European VAT number                                                         | BE0123456789         | Yes                        |
| BF      | bf\_ifu     | Burkina Faso Tax Identification Number (Numéro d'Identifiant Fiscal Unique) | 12345678A            | Yes                        |
| BG      | eu\_vat     | European VAT number                                                         | BG0123456789         | Yes                        |
| BH      | bh\_vat     | Bahraini VAT Number                                                         | 123456789012345      | Yes                        |
| BJ      | bj\_ifu     | Benin Tax Identification Number (Identifiant Fiscal Unique)                 | 1234567890123        | Yes                        |
| BS      | bs\_tin     | Bahamas Tax Identification Number                                           | 123.456.789          | No                         |
| BY      | by\_tin     | Belarus TIN Number                                                          | 123456789            | Yes                        |
| CA      | ca\_bn      | Canadian BN                                                                 | 123456789            | No                         |
| CA      | ca\_gst\_hst | Canadian GST/HST number                                                     | 123456789RT0002      | Yes                        |
| CA      | ca\_pst\_bc  | Canadian PST number (British Columbia)                                      | PST-1234-5678        | No                         |
| CA      | ca\_pst\_mb  | Canadian PST number (Manitoba)                                              | 123456-7             | No                         |
| CA      | ca\_pst\_sk  | Canadian PST number (Saskatchewan)                                          | 1234567              | No                         |
| CA      | ca\_qst     | Canadian QST number (Québec)                                                | 1234567890TQ1234     | Yes                        |
| CD      | cd\_nif     | Congo (DR) Tax Identification Number (Número de Identificação Fiscal)       | A0123456M            | No                         |
| CH      | ch\_vat     | Switzerland VAT number                                                      | CHE-123.456.789 MWST | Yes                        |
| CL      | cl\_tin     | Chilean TIN                                                                 | 12.345.678-K         | Yes                        |
| CM      | cm\_niu     | Cameroon Tax Identification Number (Numéro d'Identifiant fiscal Unique)     | M123456789000L       | No                         |
| CR      | cr\_tin     | Costa Rican tax ID                                                          | 1-234-567890         | No                         |
| CV      | cv\_nif     | Cape Verde Tax Identification Number (Número de Identificação Fiscal)       | 213456789            | No                         |
| CY      | eu\_vat     | European VAT number                                                         | CY12345678Z          | Yes                        |
| CZ      | eu\_vat     | European VAT number                                                         | CZ1234567890         | Yes                        |
| DE      | eu\_vat     | European VAT number                                                         | DE123456789          | Yes                        |
| DK      | eu\_vat     | European VAT number                                                         | DK12345678           | Yes                        |
| EC      | ec\_ruc     | Ecuadorian RUC number                                                       | 1234567890001        | No                         |
| EE      | eu\_vat     | European VAT number                                                         | EE123456789          | Yes                        |
| EG      | eg\_tin     | Egyptian Tax Identification Number                                          | 123456789            | Yes                        |
| ES      | es\_cif     | Spanish NIF number (previously Spanish CIF number)                          | A12345678            | No                         |
| ES      | eu\_vat     | European VAT number                                                         | ESA1234567Z          | Yes                        |
| ET      | et\_tin     | Ethiopia Tax Identification Number                                          | 1234567890           | Yes                        |
| FI      | eu\_vat     | European VAT number                                                         | FI12345678           | Yes                        |
| FR      | eu\_vat     | European VAT number                                                         | FRAB123456789        | Yes                        |
| GB      | eu\_vat     | Northern Ireland VAT number                                                 | XI123456789          | Yes                        |
| GB      | gb\_vat     | United Kingdom VAT number                                                   | GB123456789          | Yes                        |
| GE      | ge\_vat     | Georgian VAT                                                                | 123456789            | Yes                        |
| GN      | gn\_nif     | Guinea Tax Identification Number (Número de Identificação Fiscal)           | 123456789            | Yes                        |
| GR      | eu\_vat     | European VAT number                                                         | EL123456789          | Yes                        |
| HR      | eu\_vat     | European VAT number                                                         | HR12345678912        | Yes                        |
| HU      | eu\_vat     | European VAT number                                                         | HU12345678           | Yes                        |
| HU      | hu\_tin     | Hungary tax number (adószám)                                                | 12345678-1-23        | No                         |
| IE      | eu\_vat     | European VAT number                                                         | IE1234567AB          | Yes                        |
| IN      | in\_gst     | Indian GST number                                                           | 12ABCDE3456FGZH      | Yes                        |
| IS      | is\_vat     | Icelandic VAT                                                               | 123456               | Yes                        |
| IT      | eu\_vat     | European VAT number                                                         | IT12345678912        | Yes                        |
| KE      | ke\_pin     | Kenya Revenue Authority Personal Identification Number                      | P000111111A          | No                         |
| KG      | kg\_tin     | Kyrgyzstan Tax Identification Number                                        | 12345678901234       | No                         |
| KH      | kh\_tin     | Cambodia Tax Identification Number                                          | 1001-123456789       | Yes                        |
| KR      | kr\_brn     | Korean BRN                                                                  | 123-45-67890         | Yes                        |
| KZ      | kz\_bin     | Kazakhstani Business Identification Number                                  | 123456789012         | Yes                        |
| LA      | la\_tin     | Laos Tax Identification Number                                              | 123456789-000        | No                         |
| LI      | li\_vat     | Liechtensteinian VAT number                                                 | 12345                | Yes                        |
| LK      | lk\_vat     | Sri Lanka VAT number                                                        | 123456789-1234       | Yes                        |
| LT      | eu\_vat     | European VAT number                                                         | LT123456789123       | Yes                        |
| LU      | eu\_vat     | European VAT number                                                         | LU12345678           | Yes                        |
| LV      | eu\_vat     | European VAT number                                                         | LV12345678912        | Yes                        |
| MA      | ma\_vat     | Morocco VAT Number                                                          | 12345678             | Yes                        |
| MD      | md\_vat     | Moldova VAT Number                                                          | 1234567              | Yes                        |
| ME      | me\_pib     | Montenegro PIB Number                                                       | 12345678             | No                         |
| MK      | mk\_vat     | North Macedonia VAT Number                                                  | MK1234567890123      | Yes                        |
| MR      | mr\_nif     | Mauritania Tax Identification Number (Número de Identificação Fiscal)       | 12345678             | No                         |
| MT      | eu\_vat     | European VAT number                                                         | MT12345678           | Yes                        |
| MX      | mx\_rfc     | Mexican RFC number                                                          | ABC010203AB9         | No                         |
| NG      | ng\_tin     | Nigerian Tax Identification Number                                          | 12345678-0001        | No                         |
| NL      | eu\_vat     | European VAT number                                                         | NL123456789B12       | Yes                        |
| NO      | no\_vat     | Norwegian VAT number                                                        | 123456789MVA         | Yes                        |
| NP      | np\_pan     | Nepal PAN Number                                                            | 123456789            | Yes                        |
| NZ      | nz\_gst     | New Zealand GST number                                                      | 123456789            | Yes                        |
| OM      | om\_vat     | Omani VAT Number                                                            | OM1234567890         | Yes                        |
| PE      | pe\_ruc     | Peruvian RUC number                                                         | 12345678901          | Yes                        |
| PH      | ph\_tin     | Philippines Tax Identification Number                                       | 123456789012         | Yes                        |
| PL      | eu\_vat     | European VAT number                                                         | PL1234567890         | Yes                        |
| PL      | pl\_nip     | Polish NIP number                                                           | 1234567890           | No                         |
| PT      | eu\_vat     | European VAT number                                                         | PT123456789          | Yes                        |
| RO      | eu\_vat     | European VAT number                                                         | RO1234567891         | Yes                        |
| RS      | rs\_pib     | Serbian PIB number                                                          | 123456789            | No                         |
| RU      | ru\_inn     | Russian INN                                                                 | 1234567891           | Yes                        |
| RU      | ru\_kpp     | Russian KPP                                                                 | 123456789            | Yes                        |
| SA      | sa\_vat     | Saudi Arabia VAT                                                            | 123456789012345      | Yes                        |
| SE      | eu\_vat     | European VAT number                                                         | SE123456789123       | Yes                        |
| SG      | sg\_gst     | Singaporean GST                                                             | M12345678X           | Yes                        |
| SI      | eu\_vat     | European VAT number                                                         | SI12345678           | Yes                        |
| SK      | eu\_vat     | European VAT number                                                         | SK1234567891         | Yes                        |
| SN      | sn\_ninea   | Senegal NINEA Number                                                        | 12345672A2           | No                         |
| SR      | sr\_fin     | Suriname FIN Number                                                         | 1234567890           | Yes                        |
| TH      | th\_vat     | Thai VAT                                                                    | 1234567891234        | Yes                        |
| TJ      | tj\_tin     | Tajikistan Tax Identification Number                                        | 123456789            | Yes                        |
| TR      | tr\_tin     | Turkish Tax Identification Number                                           | 0123456789           | Yes                        |
| TW      | tw\_vat     | Taiwanese VAT                                                               | 12345678             | Yes                        |
| TZ      | tz\_vat     | Tanzania VAT Number                                                         | 12345678A            | Yes                        |
| UA      | ua\_vat     | Ukrainian VAT                                                               | 123456789            | Yes                        |
| UG      | ug\_tin     | Uganda Tax Identification Number                                            | 1014751879           | Yes                        |
| UY      | uy\_ruc     | Uruguayan RUC number                                                        | 123456789012         | Yes                        |
| UZ      | uz\_tin     | Uzbekistan TIN Number                                                       | 123456789            | No                         |
| UZ      | uz\_vat     | Uzbekistan VAT Number                                                       | 123456789012         | Yes                        |
| ZA      | za\_vat     | South African VAT number                                                    | 4123456789           | Yes                        |
| ZM      | zm\_tin     | Zambia Tax Identification Number                                            | 1004751879           | No                         |
| ZW      | zw\_tin     | Zimbabwe Tax Identification Number                                          | 1234567890           | No                         |

\*Stripe Tax won't apply tax if this tax ID is provided, in line with the relevant laws.

# Embedded page

> This is a Embedded page for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/tax/checkout/tax-ids?payment-ui=embedded-form.

Displaying a customer’s tax ID and legal business name on *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) is a common requirement that you can satisfy by enabling tax ID collection in Checkout. This guide assumes that you’ve already integrated Checkout. If you haven’t, see the [Accept a payment guide](https://docs.stripe.com/payments/accept-a-payment.md).

## Enable Tax ID collection

With tax ID collection enabled, Checkout shows and hides the tax ID collection form depending on your customer’s location. If your customer is in a location supported by tax ID collection, Checkout shows a checkbox allowing the customer to indicate that they’re purchasing as a business. When a customer checks the box, Checkout displays fields for them to enter the tax ID and legal entity name for the business. If available, Checkout uses the customer’s shipping address to determine their location, otherwise Checkout uses the customer’s billing address. Customers can only enter one tax ID.

### New Customers

To enable tax ID collection for new customers, set [tax\_id\_collection\[enabled\]](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-tax_id_collection-enabled) to `true` when creating a Checkout session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

This example creates a Session in `payment` mode with tax ID collection enabled. For subscriptions, make the same changes with the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) set to `subscription`.

You can additionally configure Checkout to create a new [Customer](https://docs.stripe.com/api/customers/object.md) for you using [customer\_creation](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_creation). If you do, Checkout saves any tax ID information collected during a Session to that new Customer. If not, the tax ID information will still be available at [customer\_details.tax\_ids](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_details-tax_ids).

### Existing Customers

#### Customer v1

If you pass an existing Customer when creating a Session, Checkout updates the Customer with any tax ID information collected during the Session. Checkout saves the collected business name onto the Customer’s [name](https://docs.stripe.com/api/customers/object.md#customer_object-name) property, and adds the collected tax ID to the Customer’s [customer.tax\_ids](https://docs.stripe.com/api/customers/object.md#customer_object-tax_ids) array. Since the collection of a business name could result in the Customer’s existing [name](https://docs.stripe.com/api/customers/object.md#customer_object-name) being overridden, you must set [customer\_update.name](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-name) to `auto` when creating the Session.

> Checkout only collects tax IDs on Customers that don’t already have an existing tax ID. If a Customer has one or more tax IDs saved, Checkout doesn’t display the tax ID collection form even if tax ID collection is enabled.

When collecting tax IDs for existing customers you can either base their location on existing addresses on the customer or the addresses entered during checkout. By default, Checkout looks for existing addresses on the customer to assess their location:

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "customer_update[name]"=auto \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

If you don’t have the addresses of your existing customers saved, you can base their location on the billing or shipping address entered during Checkout. To specify that you want to use the billing address entered during Checkout to assess the customer’s location, you must set [customer\_update.address](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-address) to `auto`. When setting [customer\_update.address](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-address) to `auto`, Checkout replaces any previously saved addresses on the customer with the address entered during the session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "customer_update[name]"=auto \
  -d "customer_update[address]"=auto \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

If you’re collecting shipping addresses for existing customers, you must base their location on the shipping address entered during checkout. To do so, set [customer\_update.shipping](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-shipping) to `auto`. When setting [customer\_update.shipping](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-customer_update-shipping) to `auto`, Checkout replaces any previously saved shipping addresses on the customer with the shipping address entered during the session.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d customer="{{CUSTOMER_ID}}" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "customer_update[name]"=auto \
  -d "customer_update[shipping]"=auto \
  -d "shipping_address_collection[allowed_countries][0]"=DE \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

This example creates a Session in `payment` mode with tax ID collection enabled. For subscriptions, make the same changes with the [mode](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-mode) set to `subscription`.

## Optional: Require tax ID collection

You can optionally configure Checkout to require tax ID collection by setting the [tax\_id\_collection\[required\]](https://docs.stripe.com/api/.md#create_checkout_session-tax_id_collection-required) parameter. When set to `if_supported`, Checkout will require tax ID information for payment for customers in [supported billing countries](https://docs.stripe.com/tax/checkout/tax-ids.md#supported-types).

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][price_data][product_data][name]"=T-shirt \
  -d "line_items[0][price_data][currency]"=eur \
  -d "line_items[0][quantity]"=2 \
  -d "tax_id_collection[enabled]"=true \
  -d "tax_id_collection[required]"=if_supported \
  -d mode=payment \
  -d ui_mode=embedded \
  --data-urlencode return_url="https://example.com/return"
```

## Retrieve Customer Tax ID details after a Session

Checkout includes provided tax IDs on the resulting [Session](https://docs.stripe.com/api/checkout/sessions/object.md) object. After each completed Session, Checkout emits a [checkout.session.completed](https://docs.stripe.com/api/events/types.md#event_types-checkout.session.completed) event that you can listen for in a *webhook* (A webhook is a real-time push notification sent to your application as a JSON payload through HTTPS requests) endpoint. If you want to retrieve the collected tax ID from the Session object, it’s available under the Session’s [customer\_details.tax\_ids](https://docs.stripe.com/api/checkout/sessions/object.md#checkout_session_object-customer_details-tax_ids) array:

```json
{
  "object": {
    "id": "cs_test_a1dJwt0TCJTBsDkbK7RcoyJ91vJxe2Y",
    "object": "checkout.session",
    ...
    "customer": {{CUSTOMER_ID}},
    "customer_details": {
      ..."tax_ids": [
        {
          "type": "eu_vat",
          "value": "FRAB123456789"
        }
      ]
    },
    ..."tax_id_collection": {
      "enabled": true
    },
    ...
  }
}
```

Checkout saves collected tax IDs and business names to the [Customer](https://docs.stripe.com/api/customers/object.md) object when you associate the Checkout Session with a Customer. Checkout stores a collected tax ID under the [customer.tax\_ids](https://docs.stripe.com/api/customers/object.md#customer_object-tax_ids) array on the Customer. You can retrieve all tax IDs saved to a Customer with the [Tax IDs](https://docs.stripe.com/api/tax_ids/list.md) resource by setting [owner.type](https://docs.stripe.com/api/tax_ids/list.md#list_tax_ids-owner-type) to `customer` and [owner.customer](https://docs.stripe.com/api/tax_ids/list.md#list_tax_ids-owner-customer) to the customer ID. Checkout saves the business name to the Customer’s [name](https://docs.stripe.com/api/customers/object.md#customer_object-name) and [business\_name](https://docs.stripe.com/api/customers/object.md#customer_object-business_name) properties. Your subscription invoices always show the collected legal business name.

## Test your integration

In testing environments, you can enter any alphanumeric string that is in the correct format of a supported tax ID type (for example, `DE123456789` for `eu_vat`). For a full list of example tax IDs you can reference our [Customer Tax ID guide](https://docs.stripe.com/billing/customer/tax-ids.md#supported-tax-id). You can also use our [test tax IDs](https://docs.stripe.com/connect/testing.md#test-business-tax-ids) to test various verification state flows.

## Validation

During the Checkout Session, Stripe verifies that the provided tax IDs are formatted correctly, but not that they’re valid. You’re responsible for ensuring the validity of customer information collected during checkout. To help, Stripe automatically performs asynchronous validation against government databases for [Australian Business Numbers (ABNs)](https://docs.stripe.com/tax/invoicing/tax-ids.md#australian-business-numbers-abn), [European Value Added Tax (EU VAT)](https://docs.stripe.com/tax/invoicing/tax-ids.md#european-value-added-tax-eu-vat-numbers), and [United Kingdom Value Added Tax (GB VAT)](https://docs.stripe.com/tax/invoicing/tax-ids.md#united-kingdom-value-added-tax-gb-vat-numbers) numbers. Learn more about the [validation we perform](https://docs.stripe.com/tax/invoicing/tax-ids.md#validation), and how to consume the status of those checks.

If you use Stripe Tax and your customer provides a tax ID, Stripe Tax applies the reverse charge or zero rate according to applicable laws, as long as the tax ID conforms to the necessary number format, regardless of its validity.

## Supported Tax ID types

Checkout collects the following tax ID types in the given regions:

| Country | Enum       | Description                                                                 | Example              | Impact in Tax Calculation\* |
| ------- | ---------- | --------------------------------------------------------------------------- | -------------------- | -------------------------- |
| AE      | ae\_trn     | United Arab Emirates TRN                                                    | 123456789012345      | Yes                        |
| AL      | al\_tin     | Albania Tax Identification Number                                           | J12345678N           | Yes                        |
| AM      | am\_tin     | Armenia Tax Identification Number                                           | 02538904             | Yes                        |
| AO      | ao\_tin     | Angola Tax Identification Number                                            | 5123456789           | No                         |
| AT      | eu\_vat     | European VAT number                                                         | ATU12345678          | Yes                        |
| AU      | au\_abn     | Australian Business Number (AU ABN)                                         | 12345678912          | Yes                        |
| AW      | aw\_tin     | Aruba Tax Identification Number                                             | 12345678             | Yes                        |
| AZ      | az\_tin     | Azerbaijan Tax Identification Number                                        | 0123456789           | Yes                        |
| BA      | ba\_tin     | Bosnia and Herzegovina Tax Identification Number                            | 123456789012         | Yes                        |
| BB      | bb\_tin     | Barbados Tax Identification Number                                          | 1123456789012        | No                         |
| BD      | bd\_bin     | Bangladesh Business Identification Number                                   | 123456789-0123       | Yes                        |
| BE      | eu\_vat     | European VAT number                                                         | BE0123456789         | Yes                        |
| BF      | bf\_ifu     | Burkina Faso Tax Identification Number (Numéro d'Identifiant Fiscal Unique) | 12345678A            | Yes                        |
| BG      | eu\_vat     | European VAT number                                                         | BG0123456789         | Yes                        |
| BH      | bh\_vat     | Bahraini VAT Number                                                         | 123456789012345      | Yes                        |
| BJ      | bj\_ifu     | Benin Tax Identification Number (Identifiant Fiscal Unique)                 | 1234567890123        | Yes                        |
| BS      | bs\_tin     | Bahamas Tax Identification Number                                           | 123.456.789          | No                         |
| BY      | by\_tin     | Belarus TIN Number                                                          | 123456789            | Yes                        |
| CA      | ca\_bn      | Canadian BN                                                                 | 123456789            | No                         |
| CA      | ca\_gst\_hst | Canadian GST/HST number                                                     | 123456789RT0002      | Yes                        |
| CA      | ca\_pst\_bc  | Canadian PST number (British Columbia)                                      | PST-1234-5678        | No                         |
| CA      | ca\_pst\_mb  | Canadian PST number (Manitoba)                                              | 123456-7             | No                         |
| CA      | ca\_pst\_sk  | Canadian PST number (Saskatchewan)                                          | 1234567              | No                         |
| CA      | ca\_qst     | Canadian QST number (Québec)                                                | 1234567890TQ1234     | Yes                        |
| CD      | cd\_nif     | Congo (DR) Tax Identification Number (Número de Identificação Fiscal)       | A0123456M            | No                         |
| CH      | ch\_vat     | Switzerland VAT number                                                      | CHE-123.456.789 MWST | Yes                        |
| CL      | cl\_tin     | Chilean TIN                                                                 | 12.345.678-K         | Yes                        |
| CM      | cm\_niu     | Cameroon Tax Identification Number (Numéro d'Identifiant fiscal Unique)     | M123456789000L       | No                         |
| CR      | cr\_tin     | Costa Rican tax ID                                                          | 1-234-567890         | No                         |
| CV      | cv\_nif     | Cape Verde Tax Identification Number (Número de Identificação Fiscal)       | 213456789            | No                         |
| CY      | eu\_vat     | European VAT number                                                         | CY12345678Z          | Yes                        |
| CZ      | eu\_vat     | European VAT number                                                         | CZ1234567890         | Yes                        |
| DE      | eu\_vat     | European VAT number                                                         | DE123456789          | Yes                        |
| DK      | eu\_vat     | European VAT number                                                         | DK12345678           | Yes                        |
| EC      | ec\_ruc     | Ecuadorian RUC number                                                       | 1234567890001        | No                         |
| EE      | eu\_vat     | European VAT number                                                         | EE123456789          | Yes                        |
| EG      | eg\_tin     | Egyptian Tax Identification Number                                          | 123456789            | Yes                        |
| ES      | es\_cif     | Spanish NIF number (previously Spanish CIF number)                          | A12345678            | No                         |
| ES      | eu\_vat     | European VAT number                                                         | ESA1234567Z          | Yes                        |
| ET      | et\_tin     | Ethiopia Tax Identification Number                                          | 1234567890           | Yes                        |
| FI      | eu\_vat     | European VAT number                                                         | FI12345678           | Yes                        |
| FR      | eu\_vat     | European VAT number                                                         | FRAB123456789        | Yes                        |
| GB      | eu\_vat     | Northern Ireland VAT number                                                 | XI123456789          | Yes                        |
| GB      | gb\_vat     | United Kingdom VAT number                                                   | GB123456789          | Yes                        |
| GE      | ge\_vat     | Georgian VAT                                                                | 123456789            | Yes                        |
| GN      | gn\_nif     | Guinea Tax Identification Number (Número de Identificação Fiscal)           | 123456789            | Yes                        |
| GR      | eu\_vat     | European VAT number                                                         | EL123456789          | Yes                        |
| HR      | eu\_vat     | European VAT number                                                         | HR12345678912        | Yes                        |
| HU      | eu\_vat     | European VAT number                                                         | HU12345678           | Yes                        |
| HU      | hu\_tin     | Hungary tax number (adószám)                                                | 12345678-1-23        | No                         |
| IE      | eu\_vat     | European VAT number                                                         | IE1234567AB          | Yes                        |
| IN      | in\_gst     | Indian GST number                                                           | 12ABCDE3456FGZH      | Yes                        |
| IS      | is\_vat     | Icelandic VAT                                                               | 123456               | Yes                        |
| IT      | eu\_vat     | European VAT number                                                         | IT12345678912        | Yes                        |
| KE      | ke\_pin     | Kenya Revenue Authority Personal Identification Number                      | P000111111A          | No                         |
| KG      | kg\_tin     | Kyrgyzstan Tax Identification Number                                        | 12345678901234       | No                         |
| KH      | kh\_tin     | Cambodia Tax Identification Number                                          | 1001-123456789       | Yes                        |
| KR      | kr\_brn     | Korean BRN                                                                  | 123-45-67890         | Yes                        |
| KZ      | kz\_bin     | Kazakhstani Business Identification Number                                  | 123456789012         | Yes                        |
| LA      | la\_tin     | Laos Tax Identification Number                                              | 123456789-000        | No                         |
| LI      | li\_vat     | Liechtensteinian VAT number                                                 | 12345                | Yes                        |
| LK      | lk\_vat     | Sri Lanka VAT number                                                        | 123456789-1234       | Yes                        |
| LT      | eu\_vat     | European VAT number                                                         | LT123456789123       | Yes                        |
| LU      | eu\_vat     | European VAT number                                                         | LU12345678           | Yes                        |
| LV      | eu\_vat     | European VAT number                                                         | LV12345678912        | Yes                        |
| MA      | ma\_vat     | Morocco VAT Number                                                          | 12345678             | Yes                        |
| MD      | md\_vat     | Moldova VAT Number                                                          | 1234567              | Yes                        |
| ME      | me\_pib     | Montenegro PIB Number                                                       | 12345678             | No                         |
| MK      | mk\_vat     | North Macedonia VAT Number                                                  | MK1234567890123      | Yes                        |
| MR      | mr\_nif     | Mauritania Tax Identification Number (Número de Identificação Fiscal)       | 12345678             | No                         |
| MT      | eu\_vat     | European VAT number                                                         | MT12345678           | Yes                        |
| MX      | mx\_rfc     | Mexican RFC number                                                          | ABC010203AB9         | No                         |
| NG      | ng\_tin     | Nigerian Tax Identification Number                                          | 12345678-0001        | No                         |
| NL      | eu\_vat     | European VAT number                                                         | NL123456789B12       | Yes                        |
| NO      | no\_vat     | Norwegian VAT number                                                        | 123456789MVA         | Yes                        |
| NP      | np\_pan     | Nepal PAN Number                                                            | 123456789            | Yes                        |
| NZ      | nz\_gst     | New Zealand GST number                                                      | 123456789            | Yes                        |
| OM      | om\_vat     | Omani VAT Number                                                            | OM1234567890         | Yes                        |
| PE      | pe\_ruc     | Peruvian RUC number                                                         | 12345678901          | Yes                        |
| PH      | ph\_tin     | Philippines Tax Identification Number                                       | 123456789012         | Yes                        |
| PL      | eu\_vat     | European VAT number                                                         | PL1234567890         | Yes                        |
| PL      | pl\_nip     | Polish NIP number                                                           | 1234567890           | No                         |
| PT      | eu\_vat     | European VAT number                                                         | PT123456789          | Yes                        |
| RO      | eu\_vat     | European VAT number                                                         | RO1234567891         | Yes                        |
| RS      | rs\_pib     | Serbian PIB number                                                          | 123456789            | No                         |
| RU      | ru\_inn     | Russian INN                                                                 | 1234567891           | Yes                        |
| RU      | ru\_kpp     | Russian KPP                                                                 | 123456789            | Yes                        |
| SA      | sa\_vat     | Saudi Arabia VAT                                                            | 123456789012345      | Yes                        |
| SE      | eu\_vat     | European VAT number                                                         | SE123456789123       | Yes                        |
| SG      | sg\_gst     | Singaporean GST                                                             | M12345678X           | Yes                        |
| SI      | eu\_vat     | European VAT number                                                         | SI12345678           | Yes                        |
| SK      | eu\_vat     | European VAT number                                                         | SK1234567891         | Yes                        |
| SN      | sn\_ninea   | Senegal NINEA Number                                                        | 12345672A2           | No                         |
| SR      | sr\_fin     | Suriname FIN Number                                                         | 1234567890           | Yes                        |
| TH      | th\_vat     | Thai VAT                                                                    | 1234567891234        | Yes                        |
| TJ      | tj\_tin     | Tajikistan Tax Identification Number                                        | 123456789            | Yes                        |
| TR      | tr\_tin     | Turkish Tax Identification Number                                           | 0123456789           | Yes                        |
| TW      | tw\_vat     | Taiwanese VAT                                                               | 12345678             | Yes                        |
| TZ      | tz\_vat     | Tanzania VAT Number                                                         | 12345678A            | Yes                        |
| UA      | ua\_vat     | Ukrainian VAT                                                               | 123456789            | Yes                        |
| UG      | ug\_tin     | Uganda Tax Identification Number                                            | 1014751879           | Yes                        |
| UY      | uy\_ruc     | Uruguayan RUC number                                                        | 123456789012         | Yes                        |
| UZ      | uz\_tin     | Uzbekistan TIN Number                                                       | 123456789            | No                         |
| UZ      | uz\_vat     | Uzbekistan VAT Number                                                       | 123456789012         | Yes                        |
| ZA      | za\_vat     | South African VAT number                                                    | 4123456789           | Yes                        |
| ZM      | zm\_tin     | Zambia Tax Identification Number                                            | 1004751879           | No                         |
| ZW      | zw\_tin     | Zimbabwe Tax Identification Number                                          | 1234567890           | No                         |

\*Stripe Tax won't apply tax if this tax ID is provided, in line with the relevant laws.
