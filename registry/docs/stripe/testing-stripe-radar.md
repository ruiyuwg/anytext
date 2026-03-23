# Testing Stripe Radar

Use the following information to test your fraud prevention strategy.

Use the following test credit card numbers to create payments in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment with a specific risk level. Create test payments in either the [Stripe Dashboard](https://dashboard.stripe.com/test/payments) (in a sandbox) or by calling [create a charge](https://docs.stripe.com/api.md#create_charge) with your [test API key](https://docs.stripe.com/keys.md).

#### Card numbers

| Number           | Description                                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4000000000004954 | Results in a charge with a risk level of `highest`, but could be blocked depending on the rules you have in place (for example, payments made with this card aren’t blocked if the `Block if :risk_level: = 'highest'` rule is disabled). |
| 4100000000000019 | Results in a charge with a risk level of `highest`, and is always blocked regardless of your rules.                                                                                                                                       |
| 4000000000009235 | Results in a charge with a risk level of `elevated`.                                                                                                                                                                                      |

#### Tokens

| Token                          | Description                                                                                                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tok_riskLevelHighest`         | Results in a charge with a risk level of `highest`, but could be blocked depending on the rules you have in place (for example, payments made with this card aren’t blocked if the `Block if :risk_level: = 'highest'` rule is disabled). |
| `tok_chargeDeclinedFraudulent` | Results in a charge with a risk level of `highest`, and is always blocked regardless of your rules.                                                                                                                                       |
| `tok_riskLevelElevated`        | Results in a charge with a risk level of `elevated`.                                                                                                                                                                                      |

#### PaymentMethods

| PaymentMethod                      | Description                                                                                                                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pm_card_riskLevelHighest`         | Results in a charge with a risk level of `highest`, but could be blocked depending on the rules you have in place (for example, payments made with this card aren’t blocked if the `Block if :risk_level: = 'highest'` rule is disabled). |
| `pm_card_chargeDeclinedFraudulent` | Results in a charge with a risk level of `highest`, and is always blocked regardless of your rules.                                                                                                                                       |
| `pm_card_riskLevelElevated`        | Results in a charge with a risk level of `elevated`.                                                                                                                                                                                      |

## Rules

Before you [add or update a rule](https://docs.stripe.com/radar/rules.md), we’ll search for historical live mode payments that match the rule criteria. You can inspect that list of payments to verify the criterion’s intended behavior, and we also summarize those search results to help you estimate its future impact.

For each rule you test, the summary includes the volume and number of payments that fall into the following categories:

- **Disputes and early fraud warnings**: Payments that received a dispute or an [early fraud warning (EFW)](https://docs.stripe.com/disputes/how-disputes-work.md#early-fraud-warnings).
- **Refunded payments**: Payments that were refunded.
- **Blocked and failed payments**: Payments that were either blocked by Radar, blocked by Stripe, or declined by issuers.
- **Succeeded payments**: Payments that are successfully processed and haven’t yet been identified as fraudulent nor refunded.

Additionally, when you test allow rules, you can also see **Overrides**. This refers to payments that Radar blocks due to high risk of fraud or a custom block rule, but now will be allowed by your proposed rule. In the Dashboard, you can see further breakdowns of these summary metrics. For example, you can see refunds that are classified as fraudulent.
![Screenshot that shows the potential impact a custom rule could have](https://b.stripecdn.com/docs-statics-srv/assets/backtesting-review-new-rule.6f8037bd10a5877e60a6237ebdbd414d.png)

Review the sample questions in the following table to help you decide if you can implement your rule.

> It’s uncommon to find a perfect rule that only blocks fraudulent payments or only allows good payments. Thus, your decision to implement a rule is typically based on a trade-off. Consider if this rule will block enough fraudulent payments to be worthwhile compared to any valid payments it might incorrectly block. The trade-off that’s right for you depends on the particulars of your business. For more information, see our [fraud detection primer](https://stripe.com/radar/guide#fraud-prevention-performance).

| Rule type   | Implement this rule if…                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block       | - It matches payments that were disputed, received an EFW, or refunded as fraud at the cost of an acceptable amount of legitimate payments for your business.

- It matches refunds and you’re trying to save operational burden and prevent refund abuse.
- It matches payments that failed because issuers declined the payment. Sometimes, issuers might decrease auth rates for you if you send a [high number of transactions that fail](https://docs.stripe.com/disputes/prevention/card-testing.md#consequences) (For example, if a business experiences a large amount of Card Testing). |
  | Review      | - It matches payments that were disputed, received an EFW, or refunded as fraud. It prompts your team to closely evaluate potential fraudulent transactions or other suspicious payment activities.                                                                                                                                                                                                                                                                                                                                                                                                 |
  | Request 3DS | - It matches payments that were disputed, received an EFW, or refunded as fraud at the cost of an acceptable amount of legitimate payments for your business. 3DS doesn’t always guarantee that your user will receive a challenge. This means that while you might get liability shift if a fraudulent actor passes frictionless 3DS and commits fraud, you might still receive an EFW (which ultimately can lead to identification in VFMP).                                                                                                                                                      |
  | Allow       | - It matches an acceptable amount of previously blocked payments that you have a high degree of certainty should be safe for your business. Allow rules are somewhat trickier to evaluate because there’s no way of knowing which previously-blocked charges would, if allowed, have turned out to be fraudulent. So, with these rules, it’s particularly important to review the list of matching historical payments to ensure these are payments you’d like to allow.
- It doesn’t match a lot of Overrides. This indicates that you’re letting through high risk payments.                    |
