# Introduction to SaaS platforms and marketplaces with Connect

Learn about the types of business models that Connect supports.

Connect allows you to offer payment processing and other embedded B2B services to third parties, known as *connected accounts* (A person or business accepting payments or receiving payouts on a Connect platform). Connect primarily supports the following types of business models: *SaaS platforms* (A Software as a Service (SaaS) Connect platform that provides Stripe products and services to its connected accounts) and *marketplaces* (A Connect platform that provides a platform-branded storefront for products and services from its connected accounts).

While a wide variety of integrations are possible, we provide detailed, step-by-step guidance for building a basic SaaS platform or marketplace. You can use one of these examples as is, or as a starting point for building a custom integration tailored to your business.

## SaaS platforms

Your platform provides services to connected accounts, including the ability to collect payments directly from their customers. An example could be an e-commerce platform that hosts online storefronts for independent sellers, such as Shopify.

- Connected accounts act as the *merchant of record (MoR)* (The legal entity responsible for facilitating the sale of products to a customer that handles any applicable regulations and liabilities, including sales taxes. In a Connect integration, it can be the platform or a connected account), responsible for providing goods and services to their customers.
- Your platform can collect per-payment *application fees* (A fee that Connect platforms collect from connected accounts for each payment they receive) and fees unrelated to payments, such as monthly subscriptions, from your connected accounts. You can also decide whether to have Stripe collect payment fees directly from your connected accounts or from your platform. We recommend letting Stripe set pricing and collect fees for payments, which can make your platform eligible for revenue sharing.
- Your platform doesn’t pay any Connect-related fees as long as Stripe sets payment pricing and directly charges fees to connected accounts.
- You can choose to be [responsible for covering connected accounts’ negative balances](https://docs.stripe.com/connect/risk-management.md#negative-balance-responsibility). However, we recommend that you have Stripe take responsibility through [Stripe Managed Risk](https://docs.stripe.com/connect/risk-management/managed-risk.md).

### SaaS platform flow of funds

The following diagram illustrates the flow of funds in a basic SaaS platform. A customer makes a purchase from a connected account, and might not be aware that their transaction involves any other entity. In turn, the connected account purchases services from both Stripe and the platform.
Direct Charges (See full diagram at https://docs.stripe.com/connect/saas-platforms-and-marketplaces)
\*Platform fees can include application fees and subscription fees.

### Example SaaS platform Connect integration

For an example of a Connect integration that implements a SaaS platform, see [Furever](http://furever.dev/), a demo SaaS platform that provides payment software for pet grooming businesses.

## Marketplaces

Your platform processes payments for connected accounts and distributes funds to them. Examples could be a website selling goods from independent vendors, such as Etsy, or a food ordering app that splits payments between delivery drivers and restaurants, such as DoorDash.

- Your platform is usually the *merchant of record (MoR)* (The legal entity responsible for facilitating the sale of products to a customer that handles any applicable regulations and liabilities, including sales taxes. In a Connect integration, it can be the platform or a connected account), legally responsible for the goods and services that connected accounts provide to customers.
- Your platform collects per-payment *application fees* (A fee that Connect platforms collect from connected accounts for each payment they receive) from connected accounts.
- Your platform controls the flow of funds to and from connected accounts. You can split funds from one payment between multiple connected accounts.
- In addition to payment processing fees, your platform pays Stripe a monthly fee per connected account and fees for payouts to connected accounts.
- Your platform is ultimately responsible for [covering any connected accounts’ negative balances](https://docs.stripe.com/connect/risk-management.md#negative-balance-responsibility).

### Marketplace flow of funds

The following diagram illustrates the flow of funds in a basic marketplace. A customer makes a purchase from the platform, but can be aware of connected accounts that participate in fulfillment. The platform pays Stripe for payment processing services and pays the connected account for goods or services that it provides to the customer.
Destination & Separate Charges (See full diagram at https://docs.stripe.com/connect/saas-platforms-and-marketplaces)
\*The platform withholds fees from the connected account’s funds to cover its Stripe fees and other monetization.

### Example marketplace Connect integration

For an example of a Connect integration that implements a marketplace, see [Rocket Rides](https://rocketrides.io/), a demo marketplace that connects independent airplane pilots with customers.

## Key business model differences

Use the following table to determine the best integration for your business.

|                                                                                                                                                                                                                                                                                                             | SaaS Platforms                                                                                                        | Marketplaces                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Business model                                                                                                                                                                                                                                                                                              | Your platform provides services to connected accounts.                                                                | Your platform processes payments for connected accounts.                                                   |
| *Merchant of record (MoR)* (The legal entity responsible for facilitating the sale of products to a customer that handles any applicable regulations and liabilities, including sales taxes. In a Connect integration, it can be the platform or a connected account), legally responsible for transactions | Connected accounts                                                                                                    | Platform                                                                                                   |
| Monetization                                                                                                                                                                                                                                                                                                | - Per-payment application fees

- Subscriptions
- Revenue share (if eligible)                                      | - Per-payment application fees                                                                             |
  | Payment flows                                                                                                                                                                                                                                                                                               | Direct payments to connected accounts, which pay fees directly to Stripe                                              | Payments to your platform, which controls the flow of funds to and from connected accounts                 |
  | Platform Connect fees                                                                                                                                                                                                                                                                                       | None, as long as Stripe sets payment pricing and directly charges fees to connected accounts                          | - Payment processing fees
- Monthly fee per connected account
- Fees for payouts to connected accounts |
  | [Responsibility for connected account losses](https://docs.stripe.com/connect/risk-management.md#negative-balance-responsibility)                                                                                                                                                                           | Platform or Stripe ([Stripe Managed Risk](https://docs.stripe.com/connect/risk-management/managed-risk.md) available) | Platform                                                                                                   |

## Integration options

You can configure a number of settings that determine the level of control that each party has over various elements of your integration. Most of them have [recommended or required options](https://docs.stripe.com/connect/integration-recommendations.md), depending on whether your integration is a SaaS platform or a marketplace. For example, we recommend that marketplaces pay Stripe fees, and require that they take responsibility for negative connected account balances. We also recommend using Stripe-provided embedded onboarding components if Stripe-hosted onboarding doesn’t meet your needs. The documentation and onboarding flow provide guidance about the best options for your integration.

The main settings include:

- **Fee pricing options:**
  - Stripe collects its fees from connected accounts, without direct involvement by your platform. Your platform can collect additional fees from connected accounts separately.
  - Stripe collects its fees from your platform, with your platform determining and collecting all fees from connected accounts. Connected accounts usually pay no fees directly to Stripe.
- **Account UX options:**
  - Connected accounts use the full Stripe Dashboard, with a significant level of control.
  - Connected accounts use a limited (Express) Stripe Dashboard, with your platform maintaining a significant level of control over them.
  - Connected accounts use a custom web application that you build using Connect embedded components or the Stripe API.
- **Loss liability options:**
  - Stripe is responsible for connected accounts’ negative balances.
  - Your platform is responsible for connected accounts’ negative balances. (Marketplaces must choose this option.)
- **Account requirement collection options:**
  - Stripe is responsible for collecting and verifying required business information from connected accounts, including when requirements change.
  - Your platform is responsible for collecting required business information from connected accounts and submitting it to Stripe, including when requirements change.
- **Account onboarding options:**
  - Connected accounts onboard to your platform through a Stripe-hosted flow.
  - Connected accounts onboard to your platform through a custom flow that you provide, usually built using customizable Stripe-provided components embedded in your platform application.
