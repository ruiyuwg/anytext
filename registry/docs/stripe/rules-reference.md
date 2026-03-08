# Rules reference

Learn about the structure of rules and the order in which Radar processes them.

To understand how Radar transaction rules work with Stripe *Connect* (Connect is Stripe's solution for multi-party businesses, such as marketplace or software platforms, to route payments between sellers, customers, and other recipients), see [Using Radar with Connect](https://docs.stripe.com/connect/radar.md).

Before creating a rule, you need to understand how they’re processed and what transaction and account attributes you can use to set evaluation criteria. The Stripe machine-learning fraud systems can block many fraudulent payments for you, but you can also set up rules that are unique to your business using the [supported attributes](https://docs.stripe.com/radar/rules/reference.md#supported-attributes).

## Transaction rule processing and ordering

*Radar* (Stripe Radar helps detect and block fraud for any type of business using machine learning that trains on data across millions of global companies. It’s built into Stripe and requires no additional setup to get started) evaluates each payment against the rules you create according to their action type, using the following prioritization:

1. **Request 3DS**: Rules that when used with the [Payment Intents API](https://docs.stripe.com/payments/payment-intents.md) or [Checkout](https://docs.stripe.com/payments/checkout.md), *request* the issuer to do *3D Secure authentication* (3D Secure (3DS) provides an additional layer of authentication for credit card transactions that protects businesses from liability for fraudulent card payments) if supported. Radar evaluates these before any block, review, or allow rules.
2. **Allow**: Rules that *allow* a payment to be processed. Payments that fall under allow rules aren’t evaluated against any block or review rules.
3. **Block**: Rules that *block* a payment and reject it. Blocked payments aren’t evaluated against any review rules.
4. **Review**: Rules that allow payments to be processed but then place them in *review*.

Rules of the same action type aren’t ordered.

If a payment matches the criteria for a rule, Radar takes the appropriate action and discontinues evaluation. For example, if a payment matches an allow rule, it’s processed normally, without evaluating any subsequent block or review rules, even if the payment would also meet their criteria. An example set of rules might be as follows:

- **Allow** payments less than `$10`
- **Allow** payments made within the US and with a risk level of `normal`
- **Block** payments where the risk level is `high`
- **Block** payments `greater than $1,000`
- **Review** payments made with a card issued `outside the US`

Using the rules above:

- All payments less than 10 USD are processed, regardless of their risk level or issuing location. Since the first rule allows the payment, no further rules are evaluated.
- A 1,500 USD payment made within the US with a normal risk level processes normally because it meets the criteria of the second rule, so isn’t evaluated against the rule to block payments over 1,000 USD.
- A high risk payment over 1,000 USD is blocked because it doesn’t meet the criteria of either allow rule, then triggers both block rules, regardless of the order of evaluation.

## Account rule processing

[Radar for Platforms](https://docs.stripe.com/radar/radar-for-platforms.md) lets your platform create rules for both transaction and account-level actions. You can raise an account for review with or without pausing payouts on the account.

## Rule structure

The rule structure has two components—the *action* to take and the *condition* to evaluate:

`{action} if {condition}`

Together they represent the *predicate*. In practice, a rule to block all payments over 1,000 USD appears as:

`Block if :amount_in_usd: > 1000.00`

- The *action* is `Block`
- The *condition* is `:amount_in_usd: > 1000.00`

### Transaction Actions

A rule performs one of the four actions described in this section when a payment meets its criteria. The order of the following action types represents the priority Radar follows when evaluating each rule.

#### Request 3D Secure

When used with the Payment Intents API, this rule determines if Stripe requests the issuer to attempt *3D Secure authentication* (3D Secure (3DS) provides an additional layer of authentication for credit card transactions that protects businesses from liability for fraudulent card payments). Requesting 3DS alone doesn’t block all possible [3D Secure outcomes](https://docs.stripe.com/radar/rules.md#request-3d-secure). Whether or not there are matches on this rule, we evaluate rules for allow, block, and review afterward.

#### Allow

This rule determines when to allow a payment that meets certain criteria, regardless of any of your other matching rules. When a payment matches the criteria in an allow rule, it’s not subject to further Radar rules evaluation. Stripe processes the payment normally, but the card issuer might still decline it.

#### Block

Block rules advise Stripe to always block a payment. If a payment matches the criteria in a block rule, Stripe rejects it and it’s not subject to further rules evaluation.

#### Review

You might want to allow certain types of payments but also have the option to examine them more closely. With review rules, you can [place payments in review](https://docs.stripe.com/radar/reviews.md). This is especially useful for payments that don’t fit common patterns, such as larger payments or payments from a country that you don’t often ship to. Stripe still processes these payments and charges the customer, but you have an additional opportunity to review the order and check for signs of fraud.

When a particular rule is triggered, Radar takes the prescribed action and discontinues any further rule evaluation.

### Account Actions

Radar for Platforms includes rules that perform one of two actions when an account meets its criteria:

- Raise for review
- Raise for review and pause payouts while under review

#### Review

Your platform can raise reviews on accounts, which appear in the Radar review queue section of your Connected accounts list. Review rules help you identify when the account itself might be causing your platform financial harm.

#### Payout Pause *(and Review)*

You can act quickly to prevent losses by setting a rule to automatically pause payouts while you review the account. These reviews also appear in the Radar reviews queue. We recommend that you start by raising accounts for review, and using automatic payout pauses only when you’re confident the rule impacts accounts as intended.

### Conditions

If a payment matches a rule’s condition, the corresponding action is taken. A basic condition is, itself, made up of three parts:

`[attribute] [operator] [value]`

- **Attribute**: The attribute of a payment (for example, the *amount* or *type of card*)
- **Operator**: The arithmetic that compares the attribute to the value (for example, *greater than* or *not equal to*)
- **Value**: The criteria you want to use (for example, `100.00` or `debit`)

Combining both the action and condition together, the structure of a rule is:

`{action} if {[attribute] [operator] [value]}`

Four types of conditions exist, depending on the attribute type:

- `[string_attribute] [operator] [string_value]`
- `[country_attribute] [operator] [country_value]`
- `[numeric_attribute] [operator] [numeric_value]`
- `[boolean_attribute]`

You can also use attributes as a corresponding value within a condition. For example, you can create a rule to block payments where the issuing country of the card doesn’t match the country where the payment took place:

`Block if :card_country: != :ip_country:`

For a list of all possible conditions, refer to the [supported attributes](https://docs.stripe.com/radar/rules/reference.md#supported-attributes).

#### String attributes

These contain any combination of characters. String attributes and values most commonly represent a piece of text, such as a card’s brand (for example, `visa`, `amex`) or risk level (for example, `elevated`). You can use these in rules to allow payments only from a particular country, or block payments made with prepaid cards.

#### Metadata attributes

These attributes are derived from the [metadata you’ve attached to your payments](https://docs.stripe.com/payments/charges-api.md#storing-information-in-metadata). Metadata attributes can operate as either strings or numbers. When used as strings, metadata attributes are *case-sensitive*.

You can use these attributes when creating Stripe Radar rules, enabling you to write rules against any custom business attributes you have passed to Stripe in the metadata field attached to your payments.

Metadata attributes are written in the following structure:

`::[metadata attribute name]:: [operator] [metadata_value]`

For example, suppose we have payments with the following key-value data stored in the metadata field:

| **Metadata Name** | **Metadata Value** |
| ----------------- | ------------------ |
| **Customer Age**  | 22                 |
| **Item ID**       | 5A381D             |
| **Category ID**   | groceries          |

You can write a rule to place payments that match the following criteria into review.

`Review if ::Customer Age:: < 30`

You can also write rules using both metadata attributes and other [supported attributes](https://docs.stripe.com/radar/rules/reference.md#supported-attributes) mentioned in this document. For example, you can write a rule that only places a payment in review if the `Item ID` matches `5A381D` and the payment amount exceeds 1,000 USD.

`Review if ::Item ID:: = '5A381D' and :amount_in_usd: > 1000`

Metadata attributes also support the `IN` operator to match against multiple values. For example, you can write a rule that places a payment in review if the `Category ID` is one of groceries, electronics, or clothing.

`Review if ::Category ID:: IN ('groceries', 'electronics', 'clothing')`

You can use the `INCLUDES` operator with rules for metadata attributes and other string attributes to match substrings. For example, you can write a rule that places a payment in review if the `Item ID` includes the string `A381`. This matches A381, 5A381D, A381D, 5A381, and so on.

`Review if ::Item ID:: INCLUDES 'A381'`

> Metadata attributes are case-sensitive when used as strings. Make sure that metadata values you specify in rules are exactly the same as the ones attached to your payments.

**Metadata on Customer and Destination Objects**

You can also access metadata on customer and destination objects (if those are used for a given payment). These attributes use the following structure:

`::[customer|destination]:[metadata attribute name]:: [operator] [metadata_value]`

For example, suppose you had a customer with the following metadata:

| **Metadata Name** | **Metadata Value** |
| ----------------- | ------------------ |
| **Trusted**       | true               |

You could write a rule that always allows payments if the customer’s `Trusted` metadata field is `true`.

`Allow if ::customer:Trusted:: = 'true'`

Or if you had a destination with the following metadata:

| **Metadata Name** | **Metadata Value** |
| ----------------- | ------------------ |
| **Category**      | new                |

You could write a rule that places a payment in review if the destination’s `Category` metadata field is `new`.

`Review if ::destination:Category:: = 'new'`

#### Country attributes

These use [two-letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) to represent a country, such as `US` for United States, `GB` for Great Britain, or `AR` for Argentina. Country attributes operate the same as string attributes, the only difference being that the value must be a country code.

#### State attributes

These use [ISO codes](https://en.wikipedia.org/wiki/ISO_3166-2) to represent the state or principal subdivision of a country, such as `CA` to represent California of the [United States](https://en.wikipedia.org/wiki/ISO_3166-2:US), `ENG` to represent England which is part of [Great Britain](https://en.wikipedia.org/wiki/ISO_3166-2:GB), or `L` to represent La Pampa which is part of [Argentina](https://en.wikipedia.org/wiki/ISO_3166-2:AR). We omit the two-letter country code from the state ISO code, so if you want to block transactions from California, compare the state attribute to `CA`.

`Block if :ip_state: = 'CA'`

State attributes operate the same as string attributes, the only difference being that the value must be an ISO code.

#### Numeric attributes

As these contain only numbers, they support more operators than string attributes and values. A payment’s *amount* is one example of a numeric attribute. You can create a rule to perform an action if the amount is higher, lower, equal, or not equal to the amount you specify.

For numeric attributes that are counts over time windows, the count excludes the payment that you’re currently processing. For example, `total_charges_per_customer_hourly` represents the number of previous charge attempts from a given customer in the preceding hour. So, for the first charge attempt in a given hour for a customer, `total_charges_per_customer_hourly` has a value of `0`. For a second charge attempt within the same hour, it has a value of `1`, and so on.

Time-since-first-seen attributes also don’t take into account the payment you’re currently processing. For example, a payment without an email has a missing value for `seconds_since_email_first_seen`. So do payments with emails never seen before on your account (since we don’t include the payment currently being processed, this is effectively the same behavior as the first example). See below for more details about [missing values](https://docs.stripe.com/radar/rules/reference.md#missing-attributes). The `seconds_since_email_first_seen` field is only non-null after a new payment with a given email is processed.

#### Bounded numeric attributes

Bounded numeric attributes are similar to the numeric attributes described above. For example, they exclude the payment that you’re currently processing. The difference is that the available values for bounded numeric attributes are capped (or *bounded*) at a specific value.

As an example, take `authorized_charges_per_email_hourly` which represents the number of previous charges that were authorized for the email in the past hour on your account. For the sake of the example, let’s say it has a bound of `5`. For the first charge attempt in the past hour with the email `jenny.rosen@example.com` the counter has a value of `0`. Subsequent charge attempts in the same hour see higher counter values. After authorizing the 6th charge within the hour from `jenny.rosen@example.com`, the counter stops incrementing and stays at `5` despite actually having `6` charge attempts in the past hour.

If an attempt to increment the counter above the cap occurs, we exclude older values from consideration and replace them with newer values. For example, consider a counter with a cap of `3` that’s been filled up with 3 charges. One way to visualize the counter is by maintaining a list of timestamps representing arrival times of charges: `[10, 20, 30]` for instance. When a charge arrives at time `50`, the counter now looks like `[20, 30, 50]`.

#### Boolean attributes

A Boolean attribute represents whether a particular attribute is true. Unlike string and numeric attributes, Boolean attributes have no operators or values. You can use a Boolean attribute to block payments that have been made with a disposable email address, or place payments in review that were made with an anonymous IP address.

#### Post-authorization attributes

A post-authorization attribute (for example, `:cvc_check:`, `:address_zip_check:`, or `:address_line1_check:`) requires Stripe to exchange data with card issuers as part of the authorization process. The card issuer verifies this data against the information they have on file for the cardholder and checks for a match. Rules that use post-authorization attributes execute after rules that don’t use post-authorization attributes. (This won’t affect whether a charge is blocked or not, but might impact which rule blocks the charge.)

If you use a post-authorization attribute in a rule, your customer’s statement might temporarily show an authorization even if the charge is ultimately blocked—the authorization generally disappears after a few days.

Address (*AVS* (The address verification system (AVS) is used to pass billing address information to issuers to verify the data if available)) and *CVC* (The card verification code (CVC) or card verification value (CVV) is a three- or four-digit number printed directly on a card used to verify the entered card number) attributes have five possible values:

| **Attribute value** | **Explanation**                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `pass`              | The data provided is correct.                                                                                             |
| `fail`              | The data provided is incorrect.                                                                                           |
| `unavailable`       | The customer’s card issuer won’t check the data provided. Not all card issuers or countries support address verification. |
| `unchecked`         | The data was provided but the customer’s card issuer hasn’t checked the data provided yet.                                |
| `not_provided`      | The data wasn’t provided to Stripe.                                                                                       |

Some example rules:

- `Block if :address_line1_check: = 'fail'`
- `Block if :cvc_check: = 'fail'`
- `Block if :address_zip_check: in ('fail', 'not_provided')`

Requiring a strict `pass` on rules can be overly restrictive. For example, *wallets* (A digital wallet is a contactless payment method that stores payment options, such as credit and debit cards, allowing customers to use a smart device to make a purchase) usually don’t provide a CVC because they store tokenized card information. Therefore *CVC* (The card verification code (CVC) or card verification value (CVV) is a three- or four-digit number printed directly on a card used to verify the entered card number) checks, like *3D-Secure* (3D Secure (3DS) provides an additional layer of authentication for credit card transactions that protects businesses from liability for fraudulent card payments) checks, aren’t available for payment methods such as Apple Pay. Stripe recommends using Radar’s [Built-in rules](https://docs.stripe.com/radar/rules.md#built-in-rules), which consider these edge cases.

#### Supported attributes

Refer to the list of all [supported attributes](https://docs.stripe.com/radar/rules/supported-attributes.md) for a complete list of attributes you can apply to your rule definitions.

#### Converted amounts

When using `amount_in_xyz`, Stripe automatically determines the converted amount of any payment when checking if the amount matches your chosen criteria. For example, if you create a rule using `amount_in_usd` to block all payments greater than 1,000 USD, Stripe blocks a payment of a lower nominal amount in a different currency (for example, 900 GBP) if its equivalent converted value exceeds 1,000 USD.

#### “Takes into account payments from 2020 onwards” in practice

The descriptions of some rule attributes include the phrase “takes into account payments from 2020 onwards”. This means that the rule treats a card that last transacted with your business in 2019 the same as a card that’s new to your business. Consider what this means in the context of your business and rules as it could result in counterintuitive behavior. For example, if you create a rule to block high-value payments from new cards, you might end up blocking a good customer who hasn’t made a purchase since 2019.

#### “This attribute only includes live mode Customer objects that interacted with your account in the past \<week, year>. This data updates at most every 72 hours.” in practice

The descriptions of some rule attributes include the sentences “This attribute only includes live mode Customer objects that interacted with your account in the past \<week, year>. This data updates at most every 72 hours.” This means that live mode Customer objects that were created, charged, or updated on your account in the past week or year are included in these counts. However, the count doesn’t update immediately and might take up to 72 hours to propagate through the system, though often times these counters update sooner than 72 hours.

### Operators

A condition’s operator denotes the comparison between the payment’s attribute and the value you provide. Different operators are available, depending on the type of attribute being used.

| Operator     | String        | Metadata    | Country       | State         | Numeric       | Description                                                                                                           | Example                            |
| ------------ | ------------- | ----------- | ------------- | ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **=**        | ✓ Supported   | ✓ Supported | ✓ Supported   | ✓ Supported   | ✓ Supported   | Equal to                                                                                                              | `:card_country: = 'us'`            |
| **!=**       | ✓ Supported   | ✓ Supported | ✓ Supported   | ✓ Supported   | ✓ Supported   | Not equal to                                                                                                          | `:card_funding: != 'prepaid'`      |
| **<**        | - Unsupported | ✓ Supported | - Unsupported | - Unsupported | ✓ Supported   | Less than                                                                                                             | `:amount_in_gbp: < 10.00`          |
| **>**        | - Unsupported | ✓ Supported | - Unsupported | - Unsupported | ✓ Supported   | Greater than                                                                                                          | `:amount_in_usd: > 500.00`         |
| **<=**       | - Unsupported | ✓ Supported | - Unsupported | - Unsupported | ✓ Supported   | Less than or equal to                                                                                                 | `:amount_in_eur: <= 100.00`        |
| **>=**       | - Unsupported | ✓ Supported | - Unsupported | - Unsupported | ✓ Supported   | Greater than or equal to                                                                                              | `:amount_in_cad: >= 10.00`         |
| **IN**       | ✓ Supported   | ✓ Supported | ✓ Supported   | ✓ Supported   | ✓ Supported   | Is in the group                                                                                                       | `:card_country: IN ('gb', 'ie')`   |
| **INCLUDES** | ✓ Supported   | ✓ Supported | ✓ Supported   | ✓ Supported   | - Unsupported | Contains the string                                                                                                   | `:ip_address: INCLUDES '192.168'`  |
| **LIKE**     | ✓ Supported   | ✓ Supported | ✓ Supported   | ✓ Supported   | - Unsupported | Matches the given pattern. Use the wildcard character `%` to match zero or any number of letters, digits, or symbols. | `:email: LIKE 'fraud%@stripe.com'` |

### Lists

You can reference a group of values in your rules through [lists](https://docs.stripe.com/radar/lists.md). All list aliases referenced in rules must start with `@`. To construct a rule referencing a list, follow the structure:

`{action} [attribute] in [list]`

For example, say you have a list of card countries you’d like to block. You could write a rule using several `OR` clauses:

`Block if :card_country: = 'CA' OR :card_country: = 'DE' OR :card_country: = 'AE'`

You could also write a rule using an inline list:

`Block if :card_country: IN ('CA', 'DE', 'AE')`

You could also create a list of card countries you want to block, named `card_countries_to_block`. You can then [add](https://docs.stripe.com/radar/lists.md#custom-lists) the countries of your choice to the list and reference that list in a rule:

`Block if :card_country: in @card_countries_to_block`

Referencing a list in a rule allows you to edit a large number of items in one place instead of maintaining many individual rules.

> #### EU Businesses
>
> EU businesses: Be aware of the Geo-blocking Regulation and its prohibitions on blocking payments from customers based in EU member states. [Learn more about this regulation](https://support.stripe.com/questions/eu-geo-blocking-regulation-changes).

### Missing attributes

Typical rule conditions refer to attributes set on every payment, such as `:card_country:` (which is set on every card-based charge) or a metadata attribute you always send with your payment requests. In some scenarios an attribute might be missing, for example:

- You have different checkout flows on your site, and some of them don’t collect customers’ email addresses

- You’ve only recently started using Stripe.js, and so `:ip_country:` is available on new payments, but not available on historical payments (which we search when previewing rules)

- For some of your payments, a bug in your integration fails to set an expected metadata key

#### How rule conditions evaluate missing attributes

Consider the rule `Block if :email_domain: = 'definitelyfraud.com'`. If you didn’t collect the customer’s email address, the `:email_domain:` attribute doesn’t exist, so the rule condition doesn’t match the payment.

Now consider the rule `Review if :email_domain: != 'definitelysafe.com'`. If the `:email_domain:` attribute is missing, this rule *also* doesn’t match the payment. It might seem like a match because no value isn’t `'definitelysafe.com'`. However, we interpret `!= 'definitelysafe.com'` to mean “the attribute has some value other than `'definitelysafe.com'`,” which a missing attribute doesn’t satisfy. Missing attribute information is also carried forward when using the `NOT` operator, so the rule `Review if NOT (:email_domain: = 'definitelysafe.com')` similarly doesn’t match the payment if the `:email_domain:` attribute is missing.

Boolean attributes are false instead of missing when the transaction doesn’t have the attribute. For example, `:is_new_card_on_customer:` is false instead of missing for ACH and SEPA transactions.

More generally: any comparison (for example, `=`, `!=`, `>`, `<`) of a missing feature against another static value or feature (missing or present) always returns false. Usage of the `NOT` operator with any comparison containing a missing feature always returns false.

#### Explicit handling with the `is_missing` function

If you want to explicitly check for the existence of an attribute or metadata attribute, use the `is_missing` function. Provide this function with the attribute or metadata key that might be missing.

For example, you could write a rule to match all payments where you don’t have access to a customer’s email address:

- `Review if is_missing(:email_domain:)`

Or you might write a rule to match all payments that have a certain metadata attribute set:

- `Review if !(is_missing(::foo::))`

You can also use the `is_missing` function in `OR` or `AND` conjunctions:

- `Review if is_missing(:email_domain:) OR :email_domain: IN ('yopmail.net', 'yandex.ru')`

### Complex conditions

You can build complex conditions by joining together basic conditions using the operators **AND**, **OR**, and **NOT**. You can also use their symbolic equivalents: **&&**, **||**, and **!** respectively.

Similar to programming languages such as C, Python, and SQL, Stripe supports standard operator *precedence* (order of operations). For instance, the complex condition:

`{condition_X} OR NOT {condition_Y} AND {condition_Z}`

is interpreted as:

`{condition_X} OR ((NOT {condition_Y}) AND {condition_Z})`

Sub-conditional grouping within complex conditions is also supported using parentheses. For instance, you can amend the prior example to explicitly change the evaluation order of sub-predicates:

`({condition_X} OR (NOT {condition_Y})) AND {condition_Z}`

`{condition_X} OR NOT ({condition_Y} AND {condition_Z})`

By using parentheses in different locations, each of these complex conditions lead to different results.

### Valid conditions

The following conditions are examples of correct use of attributes and a supported operator:

- `:card_brand: = 'amex'`
- `:card_country: != 'US'`
- `:amount_in_usd: >= 1000.00`
- `:is_anonymous_ip:`

### Invalid conditions

When creating a rule, Radar provides feedback if you attempt to use an invalid condition. For reference, the following are examples of invalid conditions, where the value for an attribute or the operator used isn’t supported:

- `:risk_level: < 'highest'` (string values can only make use of = or != operators)
- `:ip_country: = 'Canada'` (country values must be expressed in two-letter short code)
- `:amount_in_usd: >= 'one thousand dollars'` (numeric values must be expressed in numbers)
- `:is_anonymous_ip: = 'true'` (Boolean attributes are not used with operators or values)

### Velocity rules

Many [supported attributes](https://docs.stripe.com/radar/rules/supported-attributes.md) include invariants for different time scales (for example, the `daily` in `total_charges_per_email_daily`). These are called velocity rules.

Stripe calculates attributes using bucket increments. The increment length varies based on the attribute interval. This means the velocity for any attribute might include data that occurred within the interval plus one bucket. For example, an hourly attribute interval might be 3900 seconds (one hour and five minutes) of the current transaction because the interval uses five minute buckets.

The attributes are defined as:

- `hourly` is up to 3900 seconds (5 minute buckets)
- `daily` is up to 90000 seconds (1 hour buckets)
- `weekly` is up to 608400 seconds (1 hour buckets)
- `yearly` is up to 31622400 seconds (1 day buckets)
- `all_time` includes 5 years of data with velocity up to 31622400 seconds (1 day buckets)

A common use case for these attributes is to reduce [card testing](https://docs.stripe.com/disputes/prevention/card-testing.md#prevent-card-testing) or enumeration attack scenarios, as explained in the [Radar 101 guide](https://stripe.com/guides/radar-rules-101#rules-that-help-prevent-card-testing-or-card-cashing).

## See also

- [3DS Rule Examples](https://docs.stripe.com/radar/rules.md#request-3d-secure)
- [Continuous Fraud Management Guide](https://stripe.com/guides/improve-fraud-management-with-radar-for-fraud-teams-and-stripe-data)
- [Query Disputes and Fraud Data](https://docs.stripe.com/stripe-data/query-disputes-and-fraud-data.md)
- [Rules Overview](https://docs.stripe.com/radar/rules.md)
- [Supported Attributes](https://docs.stripe.com/radar/rules/supported-attributes.md)
