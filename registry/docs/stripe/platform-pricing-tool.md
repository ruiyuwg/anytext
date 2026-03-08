# Platform pricing tool

Set platform processing fees for your connected accounts from your Stripe Dashboard.

If your platform is [responsible for paying Stripe fees](https://docs.stripe.com/connect/platform-pricing-tools.md#fee-payer-reference), the [platform pricing tool](https://dashboard.stripe.com/settings/connect/platform_pricing) allows you to set pricing logic for all platform processing fees you charge your connected accounts. You can use this fee, known as an “application fee," for different purposes depending on your platform’s Connect configuration and business model:

- SaaS Platforms who are responsible for paying Stripe fees typically use application fees to recover or sometimes mark up payment processing costs they charge to their connected accounts.
- Marketplaces or other platforms might absorb Stripe fees themselves, but charge a commission when paying out funds to their connected accounts.

With the platform pricing tool, platforms can implement a range of pricing strategies for different payment processing use-cases, without the need to write any code:

- Create pricing that applies different application fees based on the properties of a transaction.
- Define pricing groups to use different pricing for different connected accounts.

## Demo

[Watch on YouTube](https://www.youtube.com/watch?v=FLgJB28g2MA)

## Eligibility for payments

The values available for defining your pricing scheme depend on which Stripe products you use and how you’ve integrated them. The following sections describe which platform configurations can use and access the platform pricing tools.

### Requirements

Stripe applies pricing schemes to a payment when the payment meets all of the following requirements:

- The pricing scheme is enabled.
- Stripe charges fees on the payment to your platform rather than the connected account.
- Your platform is permitted to charge app fees in the connected account’s country.
- The payment doesn’t explicitly apply `application_fee or transfer_data[amount]` parameters that override  managed application fees.
- The payment doesn’t use multi-capture.

In addition to the requirements, pricing schemes observe the following limitations:

- If you use Standard Connect with destination charges, you can’t override pricing or implement different pricing schemes for individual connected accounts.
- If a payment’s captured amount is less than the charge, the calculated fee is against the captured amount of the payment. For example, if only 5 USD is captured on a 10 USD charge, the fee is based on 5 USD.

### Fee payer reference

Support for platform pricing tools also depends on your [funds flow](https://docs.stripe.com/connect/charges.md#types) configuration for your connected accounts.

- [Controller property configurations](https://docs.stripe.com/connect/migrate-to-controller-properties.md):
  - You can use platform pricing tools to calculate application fees for all accounts where the `controller.fees.payer` on the account is the Connect platform (`application`).
  - If a connected account uses destination charges, the platform is the fee payer even if you set `controller.fees.payer=account`.

- Standard, Custom, or Express type configuration:
  - Configured pricing applies to destination charges.
  - Configured pricing doesn’t apply to direct charges unless the platform is on *IC+ pricing* (A pricing plan where businesses pay the variable network cost for each transaction plus the Stripe fee rather than a flat rate for all transactions. This pricing model provides more visibility into payments costs).
  - Custom configurations that use direct charges on IC+ pricing are only eligible for pricing tools for card charges. Other payment methods aren’t supported.

## Eligibility for Instant Payouts

Stripe applies pricing schemes to an Instant Payout when:

- Your platform controls pricing.
- Your pricing scheme is enabled.
- Your connected accounts are eligible for Instant Payouts.
  - When Stripe is liable for connected account losses, [Stripe determines connected account eligibility](https://docs.stripe.com/payouts/instant-payouts.md#eligibility-and-daily-volume-limits) and volume limits. You must set up separate pricing rules for each Instant Payout currency for these connected accounts.
  - When your platform is liable for connected account losses, [your platform manages eligibility](https://docs.stripe.com/connect/instant-payouts.md#manage-risk-and-eligibility) for connected accounts. These connected accounts must be in the same country as the platform, so different currencies don’t apply.
  - A connected account must have an external account that [supports Instant Payouts](https://docs.stripe.com/payouts/instant-payouts-banks.md).

Connected accounts can’t pay out more than their available balance. Instant Payout fees reflect in the [Payout](https://docs.stripe.com/api/payouts/object.md#payout_object-application_fee) object to help with reporting and reconciliation. See [Transactions](https://dashboard.stripe.com/connect/application_fees) in the Dashboard to view your collected fees. If an Instant Payout fails, we automatically refund the application fee.

> #### Instant payout application fees API integration impact
>
> Enabling pricing tools for Instant Payouts without using the [Balance API net-of-fees](https://docs.stripe.com/api/balance/balance_object.md#balance_object-instant_available-net_available) attribute can break your API integration.

## Subscriptions and invoices

Stripe also applies your pricing scheme-defined application fees to invoice and subscription payments. As with standard purchase payments, when you apply an explicit application fee to an invoice or subscription, that fee overrides any matching scheme-defined fee.

## Access platform pricing tools

Different roles have different levels of access to pricing schemes.

Roles that don’t have access to the platform’s default pricing can review the version copied to the connected accounts. Connected accounts can’t view or edit any pricing schemes.

#### Platform account

The following roles can access pricing schemes that apply to all connected accounts.

| Role                       | Permissions    |
| -------------------------- | -------------- |
| Administrator              | Read and write |
| Developer                  | None           |
| IAM Admin                  | None           |
| Connect Onboarding Analyst | None           |
| Transfer Analyst           | None           |
| Analyst                    | None           |
| Dispute Analyst            | None           |
| Refund Analyst             | None           |
| Support Specialist         | None           |
| Support Communications     | None           |
| Tax Analyst                | None           |
| View Only                  | None           |
| Top-ups Specialist         | None           |

#### Connected accounts

The following roles can access pricing schemes on a specific connected account’s Details page in the Dashboard.

| Role                       | Permissions    |
| -------------------------- | -------------- |
| Administrator              | Read and write |
| Developer                  | Read and write |
| Connect Onboarding Analyst | Read and write |
| View Only                  | Read Only      |
| Analyst                    | Read Only      |
| Tax Analyst                | None           |
| Support Specialist         | None           |
| IAM Admin                  | None           |
| Transfer Analyst           | None           |
| Dispute Analyst            | None           |
| Refund Analyst             | None           |
| Support Communications     | None           |
| Top-ups Specialist         | None           |
