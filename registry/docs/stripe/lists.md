# Lists

Create your own lists of information to block, allow, or review matching payments.

Stripe Radar for Fraud Teams lets you create lists of specific types of information and use them in [rules](https://docs.stripe.com/radar/rules.md). For example, you might want to create rules using a list of:

- **Customer IDs for trusted customers**. Use this list to automatically allow payments by these customers.
- **Email addresses you tied to fraud**. Automatically block any payment with an email address on this list.
- **Suspicious IP addresses**. Place payments into review that have a matching IP address.

Lists make rules more manageable. Instead of creating individual rules for one item at a time, you can add similar types of information to a list (for example, email addresses) for a rule to use automatically.

## Default lists

Stripe Radar includes a set of default lists to help you get started. Your [default allow and block rules](https://docs.stripe.com/radar/rules.md) can reference the allow and block lists in the following categories. Some lists are relevant across payment methods, and others apply only to specific payment methods.

#### Cards

- **Card BIN**

  The Bank Identification Number (BIN) of the card being used to make the payment. This is the first six digits of the card number (for example, `424242`).

- **Card country**

  The two-letter code corresponding to the country where the card was issued (for example, `US`).

- **Card fingerprint**

  The [fingerprint](https://docs.stripe.com/api.md#card_object-fingerprint) of the card being used to make the payment. The card fingerprint is a unique Stripe identifier of a particular card number (for example, orWziM4j7CiRL8). It’s a property of the [Card](https://docs.stripe.com/api.md#card_object) object and you can see it in the Dashboard when viewing a payment.

- **Charge description**

  The [description](https://docs.stripe.com/api.md#charge_object-description) supplied with the payment.

- **Client IP country**

  The two-letter code corresponding to the country-level geolocation of the IP address where the payment originates (for example, `GB`).

- **Client IP address**

  The IP address from which the payment originates (for example, `13.112.224.240`).

- **Customer ID**

  The [customer ID](https://docs.stripe.com/api.md#charge_object-customer) supplied with the payment (for example, `cus_AeFLnRaI51AbRi`).

- **Email**

  The first email derived from the charge, card, or customer objects, in that order (for example, `jenny.rosen@example.com`).

- **Email domain**

  The first email domain derived from the `Charge`, `Card`, or `Customer` objects, in that order (for example, `example.com`).

#### ACH Direct Debit

- **ACH fingerprint**

  The [fingerprint](https://docs.stripe.com/api/customer_bank_accounts/object.md#customer_bank_account_object-fingerprint) of the bank account being used to make the payment. The ACH fingerprint is a unique Stripe identifier of a particular ACH bank account (for example, orWziM4j7CiRL8). It’s a property of the [Bank Account](https://docs.stripe.com/api/customer_bank_accounts/object.md) object and you can see it in the Dashboard when viewing a payment.

- **Charge description**

  The [description](https://docs.stripe.com/api.md#charge_object-description) supplied with the payment.

- **Client IP country**

  The two-letter code corresponding to the country-level geolocation of the IP address where the payment originates (for example, `GB`).

- **Client IP address**

  The IP address from which the payment originates (for example, `13.112.224.240`).

- **Customer ID**

  The [customer ID](https://docs.stripe.com/api.md#charge_object-customer) supplied with the payment (for example, `cus_AeFLnRaI51AbRi`).

- **Email**

  The first email derived from the charge, bank account, or customer objects, in that order (for example, `jenny.rosen@example.com`).

- **Email domain**

  The first email domain derived from the `Charge`, `Bank Account`, or `Customer` objects, in that order (for example, `example.com`).

#### SEPA Direct Debit

- **SEPA Direct Debit fingerprint**

  The [fingerprint](https://docs.stripe.com/api/customer_bank_accounts/object.md#customer_bank_account_object-fingerprint) of the bank account being used to make the payment. The SEPA fingerprint is a unique Stripe identifier of a particular SEPA bank account (for example, orWziM4j7CiRL8). It’s a property of the [Bank Account](https://docs.stripe.com/api/customer_bank_accounts/object.md) object and you can see it in the Dashboard when viewing a payment.

- **Charge description**

  The [description](https://docs.stripe.com/api.md#charge_object-description) supplied with the payment.

- **Client IP country**

  The two-letter code corresponding to the country-level geolocation of the IP address where the payment originates (for example, `GB`).

- **Client IP address**

  The IP address from which the payment originates (for example, `13.112.224.240`).

- **Customer ID**

  The [customer ID](https://docs.stripe.com/api.md#charge_object-customer) supplied with the payment (for example, `cus_AeFLnRaI51AbRi`).

- **Email**

  The first email derived from the charge, bank account, or customer objects, in that order (for example, `jenny.rosen@example.com`).

- **Email domain**

  The first email domain derived from the `Charge`, `Bank Account`, or `Customer` objects, in that order (for example, `example.com`).

> You can add and remove items from these lists but you can’t edit or remove the default lists themselves.

## Custom lists

You can create lists of your own that contain items that are a specific type of information. The types of lists you can create are:

- String
- Case-sensitive string
- Card fingerprint
- Card BIN
- Customer ID
- Email
- IP address
- Country
- SEPA Direct Debit fingerprint
- ACH Direct Debit fingerprint

Use the [Dashboard](https://dashboard.stripe.com/test/radar/lists) or the [API](https://docs.stripe.com/api/radar/value_lists/create.md) to create lists. To create a new list in the Dashboard:

1. Click **New**.
2. Enter a name for the list (we automatically generate an alias to use as a reference when writing rules, but you can override this).
3. Select the type of list to create.
4. Click **Add** to save your new list.

After creating your new list, [add a new rule](https://docs.stripe.com/radar/rules/reference.md#lists) that references it.

You can edit or remove lists you’ve created by clicking the overflow menu (**•••**), and you can edit the list directly by clicking the name of the list.

## Managing list items

Users of Stripe Radar for Fraud Teams can also add items directly to lists from the Dashboard.

You can view and remove items when viewing a list in the [Dashboard](https://dashboard.stripe.com/test/radar/lists). Each item includes information about when it was added and by whom. You can filter items by value, author, and date added. Each list can contain up to 50,000 items.

For cards payments, you can [refund and report a payment as fraudulent](https://docs.stripe.com/radar/risk-evaluation.md#feedback-on-risk-evaluations) to trigger the following actions:

- Adds the card fingerprint to your default card fingerprint block list. If the payment is made using a [Customer](https://docs.stripe.com/api.md#customer_object) object, it adds the card fingerprints of any other cards also added to the list.
- Adds any email address associated with the payment to your default email block list. It takes the email address from:
  - The `receipt_email` of the payment
  - The `email` of the `Customer` object that the payment was created on
  - Any email addresses found in the customer or payment `description` fields, and in the card’s `name` field

When refunding a payment because of suspected fraud, make sure to specify this reason to help our AI models recognize similar cases in the future.

You can also make a [charge update](https://docs.stripe.com/api/charges/update.md#update_charge-fraud_details) request using the API and set `fraud_details.user_report` to `fraudulent`. This also adds any associated cards and email addresses to your card fingerprint and email block lists.

When adding string list items in the Dashboard, you can select the length of time before they expire. After they expire, rule evaluations no longer use them.

Allowlists can allow fraudsters to operate without restrictions and bypass controls, particularly if unnecessary entries aren’t regularly removed. For this reason, entries on default fingerprint allowlists have a maximum lifespan of 30 days.

You can create custom payment method fingerprint lists with longer or indefinite expiration windows for your custom rules using Stripe Radar for Fraud Teams.

## See also

- [Rules](https://docs.stripe.com/radar/rules.md)
