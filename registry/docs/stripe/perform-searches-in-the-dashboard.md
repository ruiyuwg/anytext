# Perform searches in the Dashboard

Use the Dashboard to search for payments, customers, and more.

[Stripe Sigma](https://docs.stripe.com/stripe-data.md) makes all of your business data available as an interactive SQL environment in the Dashboard. You can use it to perform highly advanced searches and generate customized reports.

Use Dashboard’s search to find important resources, and navigate across different Stripe resources, like *connected accounts* (A person or business accepting payments or receiving payouts on a Connect platform), *customers* (Customer objects represent customers of your business. They let you reuse payment methods and give you the ability to track multiple payments), *invoices* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice), *payouts* (A payout is the transfer of funds to an external account, usually a bank account, in the form of a deposit),  and *products* (Products represent what your business sells—whether that's a good or a service).

When you perform a search, the top results appear immediately. View all of the matches by clicking **View all results** or pressing **Enter**. From the resulting groups of search results, click **View all** to see an expanded display with column headings, some of which provide sorting options.

## Get started

Use different pieces of information as search terms:

- The last four digits of a card or account number (**4242**).
- The payment method type (**iDEAL**).
- The business name of a connected Stripe account (**Rocketship**).
- The email receipt number (**1817-9523**).

For searches that require dates, you can use different formats, like **08/22**, **2020-07-12**, or **last week**. Use object identifiers (dispute ID) to take you directly to the object you’re looking for. No additional context is necessary for most searches. The Dashboard automatically looks for the most relevant information based on your search query. You can make use of search filters and operators for more granular control.

## Search filters and operators

By default, the Dashboard looks for values that match your search term in the most logical fields within objects. (For example, it’ll look for an email address in the `email` field or an object description.) You can use filters and operators to further refine your searches. The more terms you provide in your search query, the fewer the number of results.

#### Filters

Use filters to limit your search terms so that they only apply to specific fields within applicable objects. Preface a search term with one of these filters. If your search term must include a space, wrap it in quotation marks (`name:"John Doe"`). Many fields are shared across different objects. For instance, the `amount` field applies to payments, invoices, payouts, and so on.

| Filter        | Description                                                                                                                                                                                                  | Example                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| `amount:`     | The amount of an object. For decimal currencies, use a decimal point for both currency units (for example, dollars and cents).                                                                               | **amount:149.99**                 |
| `brand:`      | The brand of card associated with an object.                                                                                                                                                                 | **brand:visa**                    |
| `country:`    | The two-letter [ISO code](https://en.wikipedia.org/wiki/ISO_3166-1) representing the country associated with an object.                                                                                      | **country:GB**                    |
| `created:`    | The date an object was created (identical to `date`).                                                                                                                                                        | **created:2020/07/12**            |
| `currency:`   | The three-letter [ISO code](https://en.wikipedia.org/wiki/ISO_4217) representing the currency of an object.                                                                                                  | **currency:EUR**                  |
| `date:`       | The date an object was created (identical to `created`).                                                                                                                                                     | **date:yesterday**                |
| `email:`      | The email (either full address or part of one) of an object.                                                                                                                                                 | **email:jenny.rosen@example.com** |
| `exp:`        | The expiration date of the card associated with an object.                                                                                                                                                   | **exp:08/22**                     |
| `flow:`       | The type of [flow for customer action](https://docs.stripe.com/sources.md#flow-for-customer-action) that applies to a [Sources](https://docs.stripe.com/sources.md) payment.                                 | **flow:redirect**                 |
| `last4:`      | The last four digits of the card or account number associated with an object.                                                                                                                                | **last4:4080**                    |
| `metadata:`   | [Metadata](https://docs.stripe.com/api.md#metadata) value on a supported object. Additional [search options](https://docs.stripe.com/dashboard/search.md#metadata-searches) for metadata are also available. | **metadata:555-5555**             |
| `name:`       | The cardholder or customer name associated with an object.                                                                                                                                                   | **name:jenny**                    |
| `number:`     | The unique number identifying an invoice.                                                                                                                                                                    | **number:06b2b1a642-0023**        |
| `postal:`     | The ZIP or postal code associated with an object.                                                                                                                                                            | **postal:12345**                  |
| `receipt:`    | The receipt number used in a payment or refund email receipt.                                                                                                                                                | **receipt:3330-2392**             |
| `risk_level:` | The [risk level](https://docs.stripe.com/radar/risk-evaluation.md) of a payment determined by [Radar](https://docs.stripe.com/radar.md).                                                                     | **risk\_level:elevated**          |
| `status:`     | The status of an object.                                                                                                                                                                                     | **status:canceled**               |
| `type:`       | The type of [PaymentMethod](https://docs.stripe.com/payments/payment-methods.md) or [Source](https://docs.stripe.com/sources.md) used to create a payment.                                                   | **type:ideal**                    |
| `usage:`      | The [usage](https://docs.stripe.com/sources.md#single-use-or-reusable) availability of a [Sources](https://docs.stripe.com/sources.md) payment method.                                                       | **usage:single\_use**             |
| `zip:`        | The ZIP or postal code associated with an object.                                                                                                                                                            | **zip:12345**                     |

#### Operators

You can use the following operators when searching for amounts and dates to refine your search to a particular range:

| Operator | Description                                          | Example                |
| -------- | ---------------------------------------------------- | ---------------------- |
| `>`      | Greater than an amount, or after the specified date. | **amount:>149.99**     |
| `<`      | Less than an amount, or before the specified date.   | **date:<2020-07-12**   |
| `..`     | Within a range of dates or amounts.                  | **amount:50.00…99.99** |

You can also use the Boolean operator `is:` with the following operators:

| Operator      | Description                                  | Example            |
| ------------- | -------------------------------------------- | ------------------ |
| `account`     | A connected account.                         | **is:account**     |
| `active`      | A plan or price that is active.              | **is:active**      |
| `charge`      | A payment (identical to `payment`).          | **is:charge**      |
| `captured`    | A payment that has been captured.            | **is:captured**    |
| `coupon`      | A coupon.                                    | **is:coupon**      |
| `customer`    | A customer.                                  | **is:customer**    |
| `document`    | A document.                                  | **is:document**    |
| `disputed`    | A payment that has been disputed.            | **is:disputed**    |
| `invoice`     | An invoice.                                  | **is:invoice**     |
| `invoiceitem` | An invoice item.                             | **is:invoiceitem** |
| `paid`        | A payment or invoice that has been paid.     | **is:paid**        |
| `payment`     | A payment (identical to `charge`).           | **is:payment**     |
| `payout`      | A payout.                                    | **is:payout**      |
| `plan`        | A subscription plan.                         | **is:plan**        |
| `price`       | A price.                                     | **is:price**       |
| `product`     | A product.                                   | **is:product**     |
| `refunded`    | A payment or invoice that has been refunded. | **is:refunded**    |
| `transfer`    | A movement of funds between Stripe accounts. | **is:transfer**    |

### Combine and negate search terms

Use more than one search term to narrow down your search. You can also negate any search filter with a hyphen (`-`) so that matches for it aren’t included.

| Example                           | Description                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| `type:card last4:4242 exp:08/22`  | The last four digits of the card are `4242` and expiration date is `08/22`.           |
| `type:card last4:4242 -exp:08/22` | The last four digits of the card are `4242` and expiration date is *not* `08/22`.     |
| `type:ideal status:canceled`      | iDEAL payments where the source has been canceled and not used to complete a payment. |

To search for an entire phrase, use quotation marks. For example, **“Stripe Shop”** provides matches for that full phrase, but **Stripe Shop** searches the words **Stripe** and **Shop** separately.

### Metadata searches

You can search for [metadata](https://docs.stripe.com/api.md#metadata) that you added to objects that support it. For example, you can find documents that have metadata key `order_id` with corresponding metadata value `xyn712` using any of the following search queries:

- `xyn712`
- `order_id:xyn712`
- `metadata:xyn712`
- `metadata:order_id=xyn712`

## Search across an organization

After you add multiple Stripe accounts to an [organization](https://docs.stripe.com/get-started/account/orgs.md), your team members can search across all of the accounts they have access to in it. By default, searches display results from all of these accounts. If a team member is viewing the Dashboard from in an account, there’s an option in the search dropdown to only search within that account.

## Best practices

Many searches can be performed with a single search term. Use something that would be fairly specific, such as a name or email address. If you’re seeing too few results, make the search term less specific. If there are too many results, include additional terms, one at a time.

Use a wider range of values when using dates or amounts as search terms. Currency conversions and time zone differences between you and your customer are a common source of confusion when looking up information about a payment. In these cases, additional search terms or even different ones altogether can help.

> #### Bookmark searches
>
> As search terms are included in the URL, you can bookmark the search or share it with other team members as you would any other web page.
