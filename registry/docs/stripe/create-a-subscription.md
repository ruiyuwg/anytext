# Create a subscription

Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.

When you create a subscription with `collection_method=charge_automatically`, the first invoice is finalized as part of the request. The `payment_behavior` parameter determines the exact behavior of the initial payment.

To start subscriptions where the first invoice always begins in a `draft` status, use [subscription schedules](https://docs.stripe.com/docs/billing/subscriptions/subscription-schedules.md#managing) instead. Schedules provide the flexibility to model more complex billing configurations that change over time.

## Returns

The newly created `Subscription` object, if the call succeeded. If the attempted charge fails, the subscription is created in an `incomplete` status.

## Parameters

- `add_invoice_items` (array of objects, optional)
  A list of prices and quantities that will generate invoice items appended to the next invoice for this subscription. You may pass up to 20 items.

  - `add_invoice_items.discounts` (array of objects, optional)
    The coupons to redeem into discounts for the item.

    - `add_invoice_items.discounts.coupon` (string, optional)
      ID of the coupon to create a new discount for.

    - `add_invoice_items.discounts.discount` (string, optional)
      ID of an existing discount on the object (or one of its ancestors) to reuse.

    - `add_invoice_items.discounts.promotion_code` (string, optional)
      ID of the promotion code to create a new discount for.

  - `add_invoice_items.metadata` (object, optional)
    Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata.md) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

  - `add_invoice_items.period` (object, optional)
    The period associated with this invoice item. If not set, `period.start.type` defaults to `max_item_period_start` and `period.end.type` defaults to `min_item_period_end`.

    - `add_invoice_items.period.end` (object, required)
      End of the invoice item period.

      - `add_invoice_items.period.end.type` (enum, required)
        Select how to calculate the end of the invoice item period.
        Possible enum values:
        - `min_item_period_end`
          Set to the minimum `current_period_end` of all subscription items

        - `timestamp`
          Custom timestamp to use for the end of the invoice item period

      - `add_invoice_items.period.end.timestamp` (timestamp, optional)
        A precise Unix timestamp for the end of the invoice item period. Must be greater than or equal to `period.start`.

    - `add_invoice_items.period.start` (object, required)
      Start of the invoice item period.

      - `add_invoice_items.period.start.type` (enum, required)
        Select how to calculate the start of the invoice item period.
        Possible enum values:
        - `max_item_period_start`
          Set to the maximum `current_period_start` of all subscription items

        - `now`
          Set to the current time (in UTC)

        - `timestamp`
          Custom timestamp to use for the start of the invoice item period

      - `add_invoice_items.period.start.timestamp` (timestamp, optional)
        A precise Unix timestamp for the start of the invoice item period. Must be less than or equal to `period.end`.

  - `add_invoice_items.price` (string, optional)
    The ID of the price object. One of `price` or `price_data` is required.

  - `add_invoice_items.price_data` (object, optional)
    Data used to generate a new [Price](https://docs.stripe.com/docs/api/prices.md) object inline. One of `price` or `price_data` is required.

    - `add_invoice_items.price_data.currency` (enum, required)
      Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

    - `add_invoice_items.price_data.product` (string, required)
      The ID of the [Product](https://docs.stripe.com/api/products.md) that this [Price](https://docs.stripe.com/api/prices.md) will belong to.

    - `add_invoice_items.price_data.tax_behavior` (enum, recommended if calculating taxes)
      Only required if a [default tax behavior](https://docs.stripe.com/docs/tax/products-prices-tax-categories-tax-behavior.md#setting-a-default-tax-behavior-\(recommended\)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
      Possible enum values:
      - `exclusive`
      - `inclusive`
      - `unspecified`

    - `add_invoice_items.price_data.unit_amount` (integer, optional)
      A positive integer in cents (or 0 for a free price) representing how much to charge or a negative integer representing the amount to credit to the customer.

    - `add_invoice_items.price_data.unit_amount_decimal` (string, required conditionally)
      Same as `unit_amount`, but accepts a decimal value in cents with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.

  - `add_invoice_items.quantity` (integer, optional)
    Quantity for this item. Defaults to 1.

  - `add_invoice_items.tax_rates` (array of strings, optional)
    The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.

- `application_fee_percent` (float, optional)
  A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner’s Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).

- `automatic_tax` (object, optional)
  Automatic tax settings for this subscription.

  - `automatic_tax.enabled` (boolean, required)
    Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.

  - `automatic_tax.liability` (object, optional)
    The account that’s liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.

    - `automatic_tax.liability.type` (enum, required)
      Type of the account referenced in the request.
      Possible enum values:
      - `account`
        Indicates that the account being referenced is a connected account which is different from the account making the API request but related to it.

      - `self`
        Indicates that the account being referenced is the account making the API request.

    - `automatic_tax.liability.account` (string, required only if type is account)
      The connected account being referenced when `type` is `account`.

- `backdate_start_date` (timestamp, optional)
  A past timestamp to backdate the subscription’s start date to. If set, the first invoice will contain line items for the timespan between the start date and the current time. Can be combined with trials and the billing cycle anchor.

- `billing_cycle_anchor` (timestamp, optional)
  A future timestamp in UTC format to anchor the subscription’s [billing cycle](https://docs.stripe.com/docs/subscriptions/billing-cycle.md). The anchor is the reference point that aligns future billing cycle dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals.

- `billing_cycle_anchor_config` (object, optional)
  Mutually exclusive with billing\_cycle\_anchor and only valid with monthly and yearly price intervals. When provided, the billing\_cycle\_anchor is set to the next occurrence of the day\_of\_month at the hour, minute, and second UTC.

  - `billing_cycle_anchor_config.day_of_month` (integer, required)
    The day of the month the anchor should be. Ranges from 1 to 31.

  - `billing_cycle_anchor_config.hour` (integer, optional)
    The hour of the day the anchor should be. Ranges from 0 to 23.

  - `billing_cycle_anchor_config.minute` (integer, optional)
    The minute of the hour the anchor should be. Ranges from 0 to 59.

  - `billing_cycle_anchor_config.month` (integer, optional)
    The month to start full cycle periods. Ranges from 1 to 12.

  - `billing_cycle_anchor_config.second` (integer, optional)
    The second of the minute the anchor should be. Ranges from 0 to 59.

- `billing_mode` (object, optional)
  Controls how prorations and invoices for subscriptions are calculated and orchestrated.

  - `billing_mode.type` (enum, required)
    Controls the calculation and orchestration of prorations and invoices for subscriptions. If no value is passed, the default is `flexible`.
    Possible enum values:
    - `classic`
      Calculations for subscriptions and invoices are based on legacy defaults.

    - `flexible`
      Supports more flexible calculation and orchestration options for subscriptions and invoices.

  - `billing_mode.flexible` (object, optional)
    Configure behavior for flexible billing mode.

    - `billing_mode.flexible.proration_discounts` (enum, optional)
      Controls how invoices and invoice items display proration amounts and discount amounts.
      Possible enum values:
      - `included`
        Amounts are net of discounts, and discount amounts are zero.

      - `itemized`
        Amounts are gross of discounts, and discount amounts are accurate.

- `billing_thresholds` (object, optional)
  Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.

  - `billing_thresholds.amount_gte` (integer, optional)
    Monetary threshold that triggers the subscription to advance to a new billing period

  - `billing_thresholds.reset_billing_cycle_anchor` (boolean, optional)
    Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.

- `cancel_at` (timestamp | enum, optional)
  A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
  Possible enum values:
  - `max_period_end`
    Set subscription to cancel at the latest end date among all subscription items’ current billing periods.

  - `min_period_end`
    Set subscription to cancel at the earliest end date among all subscription items’ current billing periods.

- `cancel_at_period_end` (boolean, optional)
  Indicate whether this subscription should cancel at the end of the current period (`current_period_end`). Defaults to `false`.

- `collection_method` (enum, optional)
  Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
  Possible enum values:
  - `charge_automatically`
  - `send_invoice`

- `currency` (enum, optional)
  Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

- `customer` (string, optional)
  The identifier of the customer to subscribe.

- `customer_account` (string, optional)
  The identifier of the account representing the customer to subscribe.

- `days_until_due` (integer, optional)
  Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.

- `default_payment_method` (string, optional)
  ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer’s [invoice\_settings.default\_payment\_method](https://docs.stripe.com/docs/api/customers/object.md#customer_object-invoice_settings-default_payment_method) or [default\_source](https://docs.stripe.com/docs/api/customers/object.md#customer_object-default_source).

- `default_source` (string, optional)
  ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer’s [invoice\_settings.default\_payment\_method](https://docs.stripe.com/docs/api/customers/object.md#customer_object-invoice_settings-default_payment_method) or [default\_source](https://docs.stripe.com/docs/api/customers/object.md#customer_object-default_source).

- `default_tax_rates` (array of strings, optional)
  The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.

- `description` (string, optional)
  The subscription’s description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.

  The maximum length is 500 characters.

- `discounts` (array of objects, optional)
  The coupons to redeem into discounts for the subscription. If not specified or empty, inherits the discount from the subscription’s customer.

  - `discounts.coupon` (string, optional)
    ID of the coupon to create a new discount for.

  - `discounts.discount` (string, optional)
    ID of an existing discount on the object (or one of its ancestors) to reuse.

  - `discounts.promotion_code` (string, optional)
    ID of the promotion code to create a new discount for.

- `invoice_settings` (object, optional)
  All invoices will be billed using the specified settings.

  - `invoice_settings.account_tax_ids` (array of strings, optional)
    The account tax IDs associated with the subscription. Will be set on invoices generated by the subscription.

  - `invoice_settings.issuer` (object, optional)
    The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.

    - `invoice_settings.issuer.type` (enum, required)
      Type of the account referenced in the request.
      Possible enum values:
      - `account`
        Indicates that the account being referenced is a connected account which is different from the account making the API request but related to it.

      - `self`
        Indicates that the account being referenced is the account making the API request.

    - `invoice_settings.issuer.account` (string, required only if type is account)
      The connected account being referenced when `type` is `account`.

- `items` (array of objects, required)
  A list of up to 20 subscription items, each with an attached price.

  - `items.billing_thresholds` (object, optional)
    Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.

    - `items.billing_thresholds.usage_gte` (integer, required)
      Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://docs.stripe.com/docs/api/subscriptions/update.md#update_subscription-billing_thresholds-amount_gte))

  - `items.discounts` (array of objects, optional)
    The coupons to redeem into discounts for the subscription item.

    - `items.discounts.coupon` (string, optional)
      ID of the coupon to create a new discount for.

    - `items.discounts.discount` (string, optional)
      ID of an existing discount on the object (or one of its ancestors) to reuse.

    - `items.discounts.promotion_code` (string, optional)
      ID of the promotion code to create a new discount for.

  - `items.metadata` (object, optional)
    Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata.md) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

  - `items.price` (string, optional)
    The ID of the price object.

  - `items.price_data` (object, optional)
    Data used to generate a new [Price](https://docs.stripe.com/docs/api/prices.md) object inline.

    - `items.price_data.currency` (enum, required)
      Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

    - `items.price_data.product` (string, required)
      The ID of the [Product](https://docs.stripe.com/api/products.md) that this [Price](https://docs.stripe.com/api/prices.md) will belong to.

    - `items.price_data.recurring` (object, required)
      The recurring components of a price such as `interval` and `interval_count`.

      - `items.price_data.recurring.interval` (enum, required)
        Specifies billing frequency. Either `day`, `week`, `month` or `year`.
        Possible enum values:
        - `day`
        - `month`
        - `week`
        - `year`

      - `items.price_data.recurring.interval_count` (integer, optional)
        The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).

    - `items.price_data.tax_behavior` (enum, recommended if calculating taxes)
      Only required if a [default tax behavior](https://docs.stripe.com/docs/tax/products-prices-tax-categories-tax-behavior.md#setting-a-default-tax-behavior-\(recommended\)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
      Possible enum values:
      - `exclusive`
      - `inclusive`
      - `unspecified`

    - `items.price_data.unit_amount` (integer, optional)
      A positive integer in cents (or 0 for a free price) representing how much to charge.

    - `items.price_data.unit_amount_decimal` (string, required conditionally)
      Same as `unit_amount`, but accepts a decimal value in cents with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.

  - `items.quantity` (integer, optional)
    Quantity for this item.

  - `items.tax_rates` (array of strings, optional)
    A list of [Tax Rate](https://docs.stripe.com/docs/api/tax_rates.md) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/docs/api/subscriptions/create.md#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.

- `metadata` (object, optional)
  Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata.md) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

- `off_session` (boolean, optional)
  Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).

- `on_behalf_of` (string, optional)
  The account on behalf of which to charge, for each of the subscription’s invoices.

- `payment_behavior` (enum, optional)
  Only applies to subscriptions with `collection_method=charge_automatically`.

  Use `allow_incomplete` to create Subscriptions with `status=incomplete` if the first invoice can’t be paid. Creating Subscriptions with this status allows you to manage scenarios where additional customer actions are needed to pay a subscription’s invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://docs.stripe.com/docs/billing/migration/strong-customer-authentication.md) for Billing to learn more. This is the default behavior.

  Use `default_incomplete` to create Subscriptions with `status=incomplete` when the first invoice requires payment, otherwise start as active. Subscriptions transition to `status=active` when successfully confirming the PaymentIntent on the first invoice. This allows simpler management of scenarios where additional customer actions are needed to pay a subscription’s invoice, such as failed payments, [SCA regulation](https://docs.stripe.com/docs/billing/migration/strong-customer-authentication.md), or collecting a mandate for a bank debit payment method. If the PaymentIntent is not confirmed within 23 hours Subscriptions transition to `status=incomplete_expired`, which is a terminal state.

  Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription’s first invoice can’t be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further customer action is needed, this parameter doesn’t create a Subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://docs.stripe.com/docs/upgrades.md#2019-03-14) to learn more.

  `pending_if_incomplete` is only used with updates and cannot be passed when creating a Subscription.

  Subscriptions with `collection_method=send_invoice` are automatically activated regardless of the first Invoice status.
  Possible enum values:

  - `allow_incomplete`
  - `default_incomplete`
  - `error_if_incomplete`
  - `pending_if_incomplete`

- `payment_settings` (object, optional)
  Payment settings to pass to invoices created by the subscription.

  - `payment_settings.payment_method_options` (object, optional)
    Payment-method-specific configuration to provide to invoices created by the subscription.

    - `payment_settings.payment_method_options.acss_debit` (object, optional)
      This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice’s PaymentIntent.

      - `payment_settings.payment_method_options.acss_debit.mandate_options` (object, optional)
        Additional fields for Mandate creation

        - `payment_settings.payment_method_options.acss_debit.mandate_options.transaction_type` (enum, optional)
          Transaction type of the mandate.
          Possible enum values:
          - `business`
            Transactions are made for business reasons

          - `personal`
            Transactions are made for personal reasons

      - `payment_settings.payment_method_options.acss_debit.verification_method` (enum, optional)
        Verification method for the intent
        Possible enum values:
        - `automatic`
          Instant verification with fallback to microdeposits.

        - `instant`
          Instant verification.

        - `microdeposits`
          Verification using microdeposits.

    - `payment_settings.payment_method_options.bancontact` (object, optional)
      This sub-hash contains details about the Bancontact payment method options to pass to the invoice’s PaymentIntent.

      - `payment_settings.payment_method_options.bancontact.preferred_language` (enum, optional)
        Preferred language of the Bancontact authorization page that the customer is redirected to.
        Possible enum values:
        - `de`
          German

        - `en`
          English

        - `fr`
          French

        - `nl`
          Dutch

    - `payment_settings.payment_method_options.card` (object, optional)
      This sub-hash contains details about the Card payment method options to pass to the invoice’s PaymentIntent.

      - `payment_settings.payment_method_options.card.mandate_options` (object, optional)
        Configuration options for setting up an eMandate for cards issued in India.

        - `payment_settings.payment_method_options.card.mandate_options.amount` (integer, optional)
          Amount to be charged for future payments.

        - `payment_settings.payment_method_options.card.mandate_options.amount_type` (enum, optional)
          One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
          Possible enum values:
          - `fixed`
            If `fixed`, the `amount` param refers to the exact amount to be charged in future payments.

          - `maximum`
            If `maximum`, the amount charged can be up to the value passed for the `amount` param.

        - `payment_settings.payment_method_options.card.mandate_options.description` (string, optional)
          A description of the mandate or subscription that is meant to be displayed to the customer.

          The maximum length is 200 characters.

      - `payment_settings.payment_method_options.card.network` (string, optional)
        Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.

      - `payment_settings.payment_method_options.card.request_three_d_secure` (enum, optional)
        We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://docs.stripe.com/docs/strong-customer-authentication.md). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/docs/payments/3d-secure/authentication-flow.md#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
        Possible enum values:
        - `any`
          Use `any` to manually request 3DS with a preference for a `frictionless` flow, increasing the likelihood of the authentication being completed without any additional input from the customer. 3DS will always be attempted if it is supported for the card, but Stripe can’t guarantee your preference because the issuer determines the ultimate authentication flow. To learn more about 3DS flows, read our [guide](https://stripe.com/guides/3d-secure-2#frictionless-authentication).

        - `automatic`
          (Default) Our SCA Engine automatically prompts your customers for authentication based on risk level and other requirements.

        - `challenge`
          Use `challenge` to request 3DS with a preference for a `challenge` flow, where the customer must respond to a prompt for active authentication. Stripe can’t guarantee your preference because the issuer determines the ultimate authentication flow. To learn more about 3DS flows, read our [guide](https://stripe.com/guides/3d-secure-2#frictionless-authentication).

    - `payment_settings.payment_method_options.customer_balance` (object, optional)
      This sub-hash contains details about the Bank transfer payment method options to pass to the invoice’s PaymentIntent.

      - `payment_settings.payment_method_options.customer_balance.bank_transfer` (object, optional)
        Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.

        - `payment_settings.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer` (object, Required if type=eu\_bank\_transfer)
          Configuration for eu\_bank\_transfer funding type.

          - `payment_settings.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country` (string, required)
            The desired country code of the bank account information. Permitted values include: `DE`, `FR`, `IE`, or `NL`.

        - `payment_settings.payment_method_options.customer_balance.bank_transfer.type` (enum, optional)
          The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.

      - `payment_settings.payment_method_options.customer_balance.funding_type` (enum, optional)
        The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.

    - `payment_settings.payment_method_options.konbini` (object, optional)
      This sub-hash contains details about the Konbini payment method options to pass to the invoice’s PaymentIntent.

    - `payment_settings.payment_method_options.payto` (object, optional)
      This sub-hash contains details about the PayTo payment method options to pass to the invoice’s PaymentIntent.

      - `payment_settings.payment_method_options.payto.mandate_options` (object, optional)
        Additional fields for Mandate creation.

        - `payment_settings.payment_method_options.payto.mandate_options.amount` (integer, optional)
          The maximum amount that can be collected in a single invoice. If you don’t specify a maximum, then there is no limit.

        - `payment_settings.payment_method_options.payto.mandate_options.purpose` (enum, optional)
          The purpose for which payments are made. Has a default value based on your merchant category code.
          Possible enum values:
          - `dependant_support`
            Transactions are made for dependant support reasons

          - `government`
            Transactions are made for government reasons

          - `loan`
            Transactions are made for loan reasons

          - `mortgage`
            Transactions are made for mortgage reasons

          - `other`
            Transactions are made for other reasons

          - `pension`
            Transactions are made for pension reasons

          - `personal`
            Transactions are made for personal reasons

          - `retail`
            Transactions are made for retail reasons

          - `salary`
            Transactions are made for salary reasons

          - `tax`
            Transactions are made for tax reasons

          - `utility`
            Transactions are made for utility reasons

    - `payment_settings.payment_method_options.sepa_debit` (object, optional)
      This sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice’s PaymentIntent.

    - `payment_settings.payment_method_options.us_bank_account` (object, optional)
      This sub-hash contains details about the ACH direct debit payment method options to pass to the invoice’s PaymentIntent.

      - `payment_settings.payment_method_options.us_bank_account.financial_connections` (object, optional)
        Additional fields for Financial Connections Session creation

        - `payment_settings.payment_method_options.us_bank_account.financial_connections.filters` (object, optional)
          Provide filters for the linked accounts that the customer can select for the payment method.

          - `payment_settings.payment_method_options.us_bank_account.financial_connections.filters.account_subcategories` (array of enums, optional)
            The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
            Possible enum values:
            - `checking`
              Bank account subcategory is checking

            - `savings`
              Bank account subcategory is savings

        - `payment_settings.payment_method_options.us_bank_account.financial_connections.permissions` (array of strings, optional)
          The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.

        - `payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch` (array of enums, optional)
          List of data features that you would like to retrieve upon account creation.
          Possible enum values:
          - `balances`
            Requests to prefetch balance data on accounts collected in this session.

          - `ownership`
            Requests to prefetch ownership data on accounts collected in this session.

          - `transactions`
            Requests to prefetch transaction data on accounts collected in this session.

      - `payment_settings.payment_method_options.us_bank_account.verification_method` (enum, optional)
        Verification method for the intent
        Possible enum values:
        - `automatic`
          Instant verification with fallback to microdeposits.

        - `instant`
          Instant verification only.

        - `microdeposits`
          Verification using microdeposits. Cannot be used with Stripe Checkout, Hosted Invoices, or Payment Element.

  - `payment_settings.payment_method_types` (array of enums, optional)
    The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice). Should not be specified with payment\_method\_configuration
    Possible enum values:
    - `ach_debit`
      ACH

    - `acss_debit`
      Canadian pre-authorized debit

    - `affirm`
      Affirm

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `amazon_pay`
      Amazon Pay

    - `au_becs_debit`
      BECS Direct Debit

    - `bacs_debit`
      Bacs Direct Debit

    - `bancontact`
      Bancontact

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `boleto`
      Boleto

    - `card`
      Card

    - `cashapp`
      Cash App Pay

    - `crypto`
      Crypto

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `custom`
      Custom

    - `customer_balance`
      Bank transfer

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `eps`
      EPS

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `fpx`
      FPX

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `giropay`
      giropay

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `grabpay`
      GrabPay

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `ideal`
      iDEAL

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `kakao_pay`
      Kakao Pay

    - `klarna`
      Klarna

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `konbini`
      Konbini

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `kr_card`
      Korean card

    - `link`
      Link

    - `multibanco`
      Multibanco

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `naver_pay`
      Naver Pay

    - `nz_bank_account`
      NZ BECS Direct Debit

    - `p24`
      Przelewy24

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `pay_by_bank`
      Pay By Bank

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `payco`
      PAYCO

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `paynow`
      PayNow

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `paypal`
      PayPal

    - `payto`
      PayTo

    - `promptpay`
      PromptPay

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `revolut_pay`
      Revolut Pay

    - `sepa_debit`
      SEPA Direct Debit

    - `sofort`
      SOFORT

      If set, the Subscription `collection_method` must be `send_invoice`.

    - `us_bank_account`
      ACH direct debit

    - `wechat_pay`
      WeChat Pay

      If set, the Subscription `collection_method` must be `send_invoice`.

  - `payment_settings.save_default_payment_method` (enum, optional)
    Configure whether Stripe updates `subscription.default_payment_method` when payment succeeds. Defaults to `off` if unspecified.
    Possible enum values:
    - `off`
      Stripe never sets `subscription.default_payment_method`.

    - `on_subscription`
      Stripe sets `subscription.default_payment_method` when a subscription payment succeeds.

- `pending_invoice_item_interval` (object, optional)
  Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://docs.stripe.com/docs/api.md#create_invoice) for the given subscription at the specified interval.

  - `pending_invoice_item_interval.interval` (enum, required)
    Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
    Possible enum values:
    - `day`
    - `month`
    - `week`
    - `year`

  - `pending_invoice_item_interval.interval_count` (integer, optional)
    The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).

- `proration_behavior` (enum, optional)
  Determines how to handle [prorations](https://docs.stripe.com/docs/billing/subscriptions/prorations.md) resulting from the `billing_cycle_anchor`. If no value is passed, the default is `create_prorations`.
  Possible enum values:
  - `always_invoice`
    **Unsupported** for subscription creation.

  - `create_prorations`
    Will cause proration invoice items to be created when applicable.

  - `none`
    Disable creating prorations in this request.

- `transfer_data` (object, optional)
  If specified, the funds from the subscription’s invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.

  - `transfer_data.destination` (string, required)
    ID of an existing, connected Stripe account.

  - `transfer_data.amount_percent` (float, optional)
    A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.

- `trial_end` (string | timestamp, optional)
  Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial\_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer’s trial immediately. Can be at most two years from `billing_cycle_anchor`. See [Using trial periods on subscriptions](https://docs.stripe.com/docs/billing/subscriptions/trials.md) to learn more.

- `trial_from_plan` (boolean, optional)
  Indicates if a plan’s `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://docs.stripe.com/docs/billing/subscriptions/trials.md) to learn more.

- `trial_period_days` (integer, optional)
  Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. See [Using trial periods on subscriptions](https://docs.stripe.com/docs/billing/subscriptions/trials.md) to learn more.

- `trial_settings` (object, optional)
  Settings related to subscription trials.

  - `trial_settings.end_behavior` (object, required)
    Defines how the subscription should behave when the user’s free trial ends.

    - `trial_settings.end_behavior.missing_payment_method` (enum, required)
      Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
      Possible enum values:
      - `cancel`
        Cancel the subscription if a payment method is not attached when the trial ends.

      - `create_invoice`
        Create an invoice when the trial ends, even if the user did not set up a payment method.

      - `pause`
        Pause the subscription if a payment method is not attached when the trial ends.

```curl
curl https://api.stripe.com/v1/subscriptions \
  -u "<<YOUR_SECRET_KEY>>" \
  -d customer=cus_Na6dX7aXxi11N4 \
  -d "items[0][price]"=price_1MowQULkdIwHu7ixraBm864M
```

### Response

```json
{
  "id": "sub_1MowQVLkdIwHu7ixeRlqHVzs",
  "object": "subscription",
  "application": null,
  "application_fee_percent": null,
  "automatic_tax": {
    "enabled": false,
    "liability": null
  },
  "billing_cycle_anchor": 1679609767,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": null,
  "cancellation_details": {
    "comment": null,
    "feedback": null,
    "reason": null
  },
  "collection_method": "charge_automatically",
  "created": 1679609767,
  "currency": "usd",
  "customer": "cus_Na6dX7aXxi11N4",
  "days_until_due": null,
  "default_payment_method": null,
  "default_source": null,
  "default_tax_rates": [],
  "description": null,
  "discounts": null,
  "ended_at": null,
  "invoice_settings": {
    "issuer": {
      "type": "self"
    }
  },
  "items": {
    "object": "list",
    "data": [
      {
        "id": "si_Na6dzxczY5fwHx",
        "object": "subscription_item",
        "created": 1679609768,
        "current_period_end": 1682288167,
        "current_period_start": 1679609767,
        "metadata": {},
        "plan": {
          "id": "price_1MowQULkdIwHu7ixraBm864M",
          "object": "plan",
          "active": true,
          "amount": 1000,
          "amount_decimal": "1000",
          "billing_scheme": "per_unit",
          "created": 1679609766,
          "currency": "usd",
          "discounts": null,
          "interval": "month",
          "interval_count": 1,
          "livemode": false,
          "metadata": {},
          "nickname": null,
          "product": "prod_Na6dGcTsmU0I4R",
          "tiers_mode": null,
          "transform_usage": null,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "price": {
          "id": "price_1MowQULkdIwHu7ixraBm864M",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1679609766,
          "currency": "usd",
          "custom_unit_amount": null,
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": null,
          "product": "prod_Na6dGcTsmU0I4R",
          "recurring": {
            "interval": "month",
            "interval_count": 1,
            "trial_period_days": null,
            "usage_type": "licensed"
          },
          "tax_behavior": "unspecified",
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "recurring",
          "unit_amount": 1000,
          "unit_amount_decimal": "1000"
        },
        "quantity": 1,
        "subscription": "sub_1MowQVLkdIwHu7ixeRlqHVzs",
        "tax_rates": []
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/subscription_items?subscription=sub_1MowQVLkdIwHu7ixeRlqHVzs"
  },
  "latest_invoice": "in_1MowQWLkdIwHu7ixuzkSPfKd",
  "livemode": false,
  "metadata": {},
  "next_pending_invoice_item_invoice": null,
  "on_behalf_of": null,
  "pause_collection": null,
  "payment_settings": {
    "payment_method_options": null,
    "payment_method_types": null,
    "save_default_payment_method": "off"
  },
  "pending_invoice_item_interval": null,
  "pending_setup_intent": null,
  "pending_update": null,
  "schedule": null,
  "start_date": 1679609767,
  "status": "active",
  "test_clock": null,
  "transfer_data": null,
  "trial_end": null,
  "trial_settings": {
    "end_behavior": {
      "missing_payment_method": "create_invoice"
    }
  },
  "trial_start": null
}
```
