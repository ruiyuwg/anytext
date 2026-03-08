# Financial Accounts for platforms connected account onboarding guide

Learn how to onboard your connected accounts.

When a Connect platform uses Financial Accounts for platforms to offer financial services to its connected accounts, the account onboarding process must consider fraud prevention and regulatory compliance. For example, financial services providers must employ Know Your Customer (KYC) and Know Your Business (KYB) client data collection and verification procedures. Use this guide to implement a Financial Accounts for platforms onboarding process for your connected accounts.

## KYC and KYB onboarding

Before you launch your embedded finance capabilities, implement an onboarding flow that collects the [necessary KYC and KYB information from your connected accounts](https://docs.stripe.com/connect/identity-verification.md). The [US Treasury Financial Crimes Enforcement Network](https://www.fincen.gov/resources/statutes-and-regulations/cdd-final-rule) (FinCEN) sets and enforces the legal requirements for customer due diligence, which each financial institution or partner can supplement with additional requirements.

> When onboarding connected accounts that use Financial Accounts for platforms features, you must collect their requirements up front. Don’t use incremental onboarding.

When onboarding connected accounts to Financial Accounts for platforms, Stripe only presents your platform with the core business compliance requirements. Your platform is responsible for collecting the required KYC and KYB information during onboarding and passing it to Stripe. The specific process depends on [the type of onboarding flow you implement](https://docs.stripe.com/connect/onboarding.md). Stripe then performs checks to determine if the connected accounts meet KYC and KYB requirements and to flag potential risks of money laundering or fraud. Those checks include:

- Verifying government-issued ID documents using public and private databases
- Checking application information against databases of known fraudulent actors and criminals (such as known terrorists and money launderers)
- Validating addresses
- Verifying that an application is from a registered business with the appropriate licenses

### Required information from your connected accounts

To open a financial account for a connected account, you must collect information including, but not limited to:

- Business name
- Legal entity type
- Tax ID number
- Merchant category code (MCC)
- Company name
- Company address
- Information about company owners, including:
  - SSN
  - Date of birth
  - Title
  - Ownership percentage

To review the full requirements for opening a financial account associated with a connected account, see [Required verification information](https://docs.stripe.com/connect/required-verification-information.md#US-full-company--card_payments%7Ctransfers%7Cus_bank_account_ach_payments).

## Ways to onboard connected accounts to Financial Accounts for platforms

You can onboard your connected accounts onto Connect and Financial Accounts for platforms using [Stripe-hosted](https://docs.stripe.com/connect/hosted-onboarding.md), [embedded](https://docs.stripe.com/connect/embedded-onboarding.md), or [API](https://docs.stripe.com/connect/api-onboarding.md) onboarding.

Benefits of [Stripe-hosted onboarding](https://docs.stripe.com/connect/hosted-onboarding.md) include:

- You don’t need to design or build a custom onboarding UI. Stripe provides a customizable web form that collects the required identity information from your connected accounts.
- Stripe-hosted onboarding dynamically adjusts input fields depending on account capabilities, product usage, country, and business type.
- You can use Stripe-hosted onboarding if you need support for mobile browsers, accessibility, and localization.
- Stripe-hosted onboarding allows you to automatically collect all currently required information up front or incrementally, depending on what’s needed (see [onboarding flows](https://docs.stripe.com/connect/identity-verification.md#onboarding-flows)). To use Financial Accounts for platforms products, connected accounts must provide all information to satisfy KYC requirements up front.

Benefits of [embedded onboarding](https://docs.stripe.com/connect/embedded-onboarding.md) include:

- A themeable onboarding UI with limited Stripe branding. It’s similar to Stripe-hosted onboarding, but your connected accounts interact with the embedded component without leaving your application.
- As with Stripe-hosted onboarding, you get a customized and built-in onboarding flow, without the complexity and maintenance associated with updating your onboarding integration as compliance requirements change.

Benefits of [API onboarding (custom onboarding)](https://docs.stripe.com/connect/api-onboarding.md) include:

- It gives you full control over the onboarding UI and process.
- You don’t need to redirect connected account holders to an external Stripe-hosted page.
- You can design the information collection flow for your connected accounts.

## Keep up with changing requirements

Changing requirements can necessitate gathering additional information from connected accounts. While hosted onboarding dynamically updates to reflect new requirements, platforms using API onboarding need to make sure they update their UI and collect this information. If a connected account has already onboarded using hosted onboarding and the requirements change, you can forward them the hosted onboarding link. Clicking it prompts them to provide the new required information. You can obtain new requirements for accounts using the methods detailed in the [Required verification information](https://docs.stripe.com/connect/required-verification-information.md) guide.

You can also use a mixture of hosted and API onboarding. If you use hosted onboarding but have already collected some information from a different source, you can pass that information to Stripe through the [identity verification process](https://docs.stripe.com/connect/identity-verification.md) and prefill the hosted onboarding page with the provided information. In that case, the connected account can modify or verify the information within the Stripe-hosted UI.

## Tips for onboarding

To make sure onboarding is successful and increase conversion for your Financial Accounts for platforms product, keep the following tips in mind:

- Consider onboarding connected accounts to the `treasury` capability to start, even if you don’t plan to create a financial account until later. If you decide to perform Financial Accounts for platforms onboarding later, set clear expectations during onboarding that additional information might be required to use all aspects of the product.

- If you already have a Connect integration, or have otherwise collected identifying information from your connected accounts, you can use the API to pass data you already have. Doing so reduces the amount of information a connected account needs to provide through hosted onboarding.

- For issued cards, provide the card use case to help cardholders understand how it works.

- If a connected account has recently incorporated their business, they might not have their TIN entered in the IRS database yet. In that case, their TIN might come back as unverified until the IRS database updates. The account is still usable, and Stripe periodically attempts to re-verify the TIN.

- Hosted onboarding allows you to test out your integration. If you want more customization, you can switch to custom onboarding.

- Only onboard connected accounts that Stripe and Financial Accounts for platforms can support. Review the [Financial Accounts for platforms requirements](https://docs.stripe.com/financial-accounts/connect/requirements.md) to see if we can support the account, and follow the guidelines on [marketing Financial Accounts for platforms to users](https://docs.stripe.com/financial-accounts/connect/compliance.md).

- Offering incentives to onboard, such as a free subscription period or incentive funds, can help increase activation and engagement.

### See also

- [Connect integration guide](https://docs.stripe.com/connect/interactive-platform-guide.md?connect-charge-type=direct\&connect-loss-liability-owner=platform)
- [Financial Accounts for platforms documentation on opening connected accounts](https://docs.stripe.com/financial-accounts/connect/account-management/connected-accounts.md#requirements)
- [Documentation on opening Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md)
