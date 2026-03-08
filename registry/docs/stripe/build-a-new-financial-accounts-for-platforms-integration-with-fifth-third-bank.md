# Build a new Financial Accounts for platforms integration with Fifth Third Bank

Get started with Financial Accounts for platforms.

This guide describes how to get started with Financial Accounts for platforms using Fifth Third Bank.

## Before you integrate

### Sandbox environments

You can enable Financial Accounts for platforms on *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environments immediately. Test environments operate independently of any specific bank partner.

Before you create financial accounts in live mode for your Financial Accounts for platforms integration, we recommend that you create test financial accounts in sandboxes. Test financial accounts can’t receive or send real money, and don’t generate a live account with real routing and account information, but are otherwise identical in configuration and functionality.

If you create a test `Account` object and want to bypass onboarding requirements to test functionality, use `POST /v1/accounts/{{CONNECTED_ACCOUNT_ID}}` to [provide test values](https://docs.stripe.com/connect/testing-verification.md) that fulfill all the requirements.

### Complete compliance reviews and update disclosures

To access Fifth Third in live mode, you must first submit evidence of the following to the Stripe compliance team for approval:

- Any live or planned UX, or marketing that names a bank partner
- Any mentions of FDIC pass-through insurance eligibility
- UX including user balances with disclosures, bank statements, and transaction history

You must send previews of your planned updates using the [Compliance Intake Form](https://form.asana.com/?k=8K51UWmWhttehNFD5qBLdg\&d=974470123217835). After Stripe’s compliance team completes the review, we’ll grant you access to Fifth Third in live mode. Then, you can publish your approved disclosures.

You must follow all of the Financial Accounts for platforms [compliance guidelines](https://docs.stripe.com/financial-accounts/connect/compliance.md), including [regulatory receipts](https://docs.stripe.com/financial-accounts/connect/moving-money/regulatory-receipts.md), [complaints](https://docs.stripe.com/financial-accounts/connect/handling-complaints.md), and [marketing guidelines](https://docs.stripe.com/financial-accounts/connect/marketing-financial-accounts.md).

### Bank partner disclosures

You must include proper disclosures that funds are held with Fifth Third Bank. You must include disclosures on marketing assets, landing pages, other websites, dashboards, social media posts, or any other interface that references Financial Accounts for platforms.

Make sure that your disclosure reads: “\[*Company Name*] partners with Stripe Payments Company for money transmission services and account services with funds held at Fifth Third Bank, Member FDIC.”

### FDIC pass-through insurance eligibility disclosures

In any place you reference FDIC pass-through insurance eligibility, you must accompany that text with the approved disclosure language from Fifth Third Bank:

“Stripe Financial Accounts are eligible for FDIC pass-through deposit insurance if they meet certain requirements. The accounts are eligible only to the extent passthrough insurance is permitted by the rules and regulations of the FDIC, and if the requirements for pass-through insurance are satisfied. The FDIC insurance applies up to 250,000 USD per depositor, per financial institution, for deposits held in the same ownership capacity.”

### Viewing multiple balances

If you plan to allow connected accounts to store multiple balances, you must display balances separately within any dashboard user interface or servicing communications disclosing balances.

## Feature availability on Fifth Third Bank

The following Financial Accounts for platforms features are available when integrating with Fifth Third Bank.

| Category                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Feature                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Onboard and store funds with Fifth Third Bank                                                                                                                                                                                                                                                                                                                                                                                                                           | [Onboard connected accounts](https://docs.stripe.com/financial-accounts/connect/account-management/connected-accounts.md) compliantly                                                                                                                                        |
| [Create financial accounts](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md) at Fifth Third Bank that are eligible for FDIC pass-through insurance                                                                                                                                                                                                                                                                          |
| [Close financial accounts](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md#close-a-financialaccount) with Fifth Third using the API                                                                                                                                                                                                                                                                                         |
| Financial accounts come with a Stripe FinancialAccount ID                                                                                                                                                                                                                                                                                                                                                                                                               |
| Financial accounts can request an externally addressable account number and routing number ([financial\_addresses.aba](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md#available-features)), enabling them to receive external credits and debits                                                                                                                                                                    |
| Originate Transactions for the financial account                                                                                                                                                                                                                                                                                                                                                                                                                        | Connected account can move funds ([OutboundTransfer](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-transfers.md)) from the Fifth Third financial account to other financial accounts (Evolve or Fifth Third Bank) using the Stripe network |
| Connected accounts can originate credits ([OutboundTransfer](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-transfers.md) or [OutboundPayment](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-payments.md)) out from the financial account using standard or [same-day](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md#same-day-ach) ACH or wire |
| Connected accounts can originate debits ([InboundTransfer](https://docs.stripe.com/financial-accounts/connect/moving-money/into/inbound-transfers.md)) that draw funds from accounts they own into the financial account using standard or [same-day](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md#same-day-ach) ACH (self-to-self)                                                                              |
| Remote deposit capture for check acceptance (Private preview)                                                                                                                                                                                                                                                                                                                                                                                                           |
| Payouts from Stripe Payments                                                                                                                                                                                                                                                                                                                                                                                                                                            | You or your connected accounts can acquire funds using Stripe Payments, then create [Payouts](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md) into the Fifth Third financial account (others-to-self)                                            |
| You or your connected accounts can create [instant payouts](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md#manual-payout-speeds) to access pending funds                                                                                                                                                                                                                                                                                    |
| Receive Transactions into the financial account                                                                                                                                                                                                                                                                                                                                                                                                                         | Financial accounts can receive credits ([ReceivedCredit](https://docs.stripe.com/financial-accounts/connect/moving-money/into/received-credits.md)) using ACH or wire                                                                                                        |
| Financial accounts can receive debits ([ReceivedDebit](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/received-debits.md)) using ACH, and can create returns ([DebitReversal](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/debit-reversals.md))                                                                                                                                                                       |
| Fund Issuing cards                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [Issuing](https://docs.stripe.com/financial-accounts/connect/account-management/issuing-cards.md) cards can be funded by the Fifth Third financial account                                                                                                                   |
| An existing Issuing card can be updated to point to a different financial account                                                                                                                                                                                                                                                                                                                                                                                       |

Accounts that have migrated to Fifth Third don’t yet support [CreditReversals](https://docs.stripe.com/financial-accounts/connect/moving-money/into/credit-reversals.md). When that feature becomes available, we’ll notify you.

If you request a [financial account Feature](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md) that hasn’t been released for Fifth Third Bank, Stripe returns the following error: “You can’t request `{feature}` on a financial account with bank `fifth_third`”.

> The roadmap above outlines our general product direction and current priorities for informational purposes only. It’s not a commitment to deliver any material, code, or functionality, and you shouldn’t rely on it when making purchasing decisions. The development, release, and timing of any features or functionality described for Stripe’s products remain at Stripe’s sole discretion.

## Get started with Financial Accounts for platforms

You can use the existing [Financial Accounts for platforms documentation](https://docs.stripe.com/financial-accounts/connect.md) to guide your integration. You can use the same APIs with your Fifth Third financial account. Below is a list of expected differences with Fifth Third Bank.

1. You receive a [platform financial account](https://docs.stripe.com/financial-accounts/connect/account-management/platform-financial-account.md) at Fifth Third Bank.

2. Outbound transfers sent using wire or ACH from a Fifth Third financial account have later cutoff times than today’s transfers sent with Evolve.

|              | Evolve     | Fifth Third Bank |
| ------------ | ---------- | ---------------- |
| Wires        | 4:00pm ET  | 5:00pm ET        |
| ACH          | 7:00pm ET  | 8:30pm ET        |
| Same-day ACH | 12:00pm ET | 1:00pm ET        |

1. Stripe Payouts sent from the payments balance will arrive into a Fifth Third financial account faster than today’s payouts into an external bank account or an Evolve financial account.

> You must also request the [intra\_stripe\_flows](https://docs.stripe.com/api/treasury/financial_accounts/object.md#financial_account_object-features-intra_stripe_flows) feature on your Financial Account to receive payouts.

|                                                        | External payouts and payouts to Evolve financial accounts                                                                                             | Payouts to Fifth Third financial accounts                                                                                                                       |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standard manual payout                                 | Settled funds arrive in approximately 1 day. Acquired funds arrive approximately 2–3 days after pay-in capture. Available during business hours only. | Settled funds arrive within 2 hours. Acquired funds arrive approximately 1-2 days after pay-in capture. Available at any time, including weekends and holidays. |
| Instant manual payout                                  | Within 1 hour                                                                                                                                         | Within 1 hour                                                                                                                                                   |
| Standard automatic payout schedule (`delay_days=2`)    | Settled funds arrive approximately 2–3 days after pay-in capture. Available on business days only.                                                    | Settled funds arrive approximately 1–2 days after pay-in capture. Available on business days only.                                                              |
| Accelerated automatic payout schedule (`delay_days=1`) | Settled funds arrive approximately 1 day after pay-in capture. Available on business days only.                                                       | Settled funds arrive approximately 1 day after pay-in capture. Available on business days only.                                                                 |
