# Onboarding overview

Take your integration live.

Use this guide to develop and launch an integration using Stripe [Issuing](https://docs.stripe.com/issuing.md) (in the US, EU, or UK) or [Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect.md) (US only). To successfully go live, your offering must be a business we support, and you must integrate systems and establish business processes.

Before you go live, you must:

1. **Get your use case approved**: Submit information pertaining to your use case, familiarize yourself with the compliance requirements, and explore testing environments.
2. **Obtain live mode access**: Build in the production environment, manage the necessary operational responsibilities, and complete the required compliance tasks.
3. **Get ready to launch your offering**: Test the program out with your employees using real funds.

# Embedded Finance

> This is a Embedded Finance for when onboarding-overview-variant is embedded-finance. View the full page at https://docs.stripe.com/issuing/onboarding-overview?onboarding-overview-variant=embedded-finance.

Create cards and financial accounts for your customers (US only).

**Example segments**: SaaS platforms, e-commerce businesses, and corporate benefits providers.

## Milestone 1: Get your use case approved

Start by submitting an [intake form](https://stripe.com/contact/sales) that includes a high-level overview of what you’re looking to use  Stripe Issuing and Financial Accounts for platforms for.  If you’re a funded business with a dedicated team of developers, or simply working with a single developer, include those details in the form.

After you submit the form, our team will reach out within 5 days to let you know if your use case is a good fit. We also let you know if we think your desired product or products don’t [serve your use case](https://support.stripe.com/questions/supported-business-use-cases-for-stripe-issuing) well. During the call, an assigned Stripe account representative asks you more about your use case and motivation as part of our supportability assessment. We also advise you on best practices and how to build a [compelling financial services offering](https://stripe.com/guides/building-a-fintech-company).

Following the call, we’ll inform you whether we can support your business within 5 business days (certain use cases can take longer). While you wait, you can build a test integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment to explore the product’s capabilities, and familiarize yourself with our compliance requirements. If we deem your use case supportable, your account representative provides you with any necessary agreements, and once signed, configures your program.

## Milestone 2: Obtain live access

To obtain live mode access, you must complete the required compliance tasks. In parallel, we recommend you build your integration in a production environment and operationalize required processes.

### Build your integration

At any time, you can explore an integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment using our [sample app](https://docs.stripe.com/issuing/sample-app.md). After you sign the legal agreement, Stripe configures your program to the capabilities required for your business model. After you receive approval, you can begin submitting live transactions.

|                  | Sandbox                                                                                                                                                                                                                                                                         | Live                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Usage limits     | With no permissions necessary, explore a broad set of platform use cases by using the sample app or the [Issuing](https://docs.stripe.com/api/issuing/authorizations.md) or [Financial Accounts for platforms](https://docs.stripe.com/api/treasury/financial_accounts.md) APIs | Limited to what you’re approved for                               |
| Immediate access | Yes                                                                                                                                                                                                                                                                             | No, you’re granted access after you receive bank partner approval |
| Use real funds   | No                                                                                                                                                                                                                                                                              | Yes                                                               |

### Manage operational responsibilities

Prior to go-live, you need to take care of various operational responsibilities:

- **Customer support:** Understand what types of customer inquiries you need to handle and [equip your support team](https://docs.stripe.com/issuing/customer-support.md) with the appropriate information and tools.
- **Compliance management:** Set up the necessary compliance processes outlined in the [compliance section](https://docs.stripe.com/issuing/onboarding-overview.md#complete-compliance-tasks).
- **Physical cards:** If your use case requires [physical cards](https://docs.stripe.com/issuing/cards/physical.md), you can order [standard cards](https://docs.stripe.com/issuing/cards/physical.md) if you want to go to market quickly. Or you can [fully customize](https://docs.stripe.com/issuing/cards/physical/order-custom-bundle.md) your cards with unique artwork and materials, if physical cards are a core part of your business.
- **Mobile wallets:** If your use case necessitates Apple Pay, [review the steps](https://docs.stripe.com/issuing/cards/digital-wallets.md) required for approval.

### Complete compliance tasks

You need to complete a set of compliance tasks before you can launch your integration. Stripe must also review and approve your fees, terms of service, marketing material, and user interfaces. To help in this process, we provide a workflow tool to manage compliance submissions and feedback as well as to help you stay organized.

1. **Implement all requirements for a public launch**

   You must submit screenshots of your marketing, onboarding, and account servicing flows using the [compliance intake form](https://form.asana.com/?k=8K51UWmWhttehNFD5qBLdg\&d=974470123217835) to demonstrate compliance. Before you build user-facing marketing, onboarding, and account servicing pages, review the following content guidelines:

   - [Unfair and Deceptive Acts or Practices (UDAP):](https://docs.stripe.com/financial-accounts/connect/compliance.md#udap-and-correct-messaging) Keep your advertising clear and honest.
   - [Controlling the Assault of Non-Solicited Pornography And Marketing (CAN-SPAM):](https://docs.stripe.com/financial-accounts/connect/compliance.md#can-spam) Comply with commercial email messaging.
   - [Messaging and marketing:](https://docs.stripe.com/financial-accounts/connect/compliance.md#issuing-messaging-guidelines) Use the right terms to accurately reflect the account structure and benefits, including [Financial Accounts for platforms-specific messaging](https://docs.stripe.com/financial-accounts/connect/marketing-financial-accounts.md).
   - [Prohibition on international marketing:](https://docs.stripe.com/financial-accounts/connect/compliance.md#prohibition-on-international-marketing) Limit to US-based merchants.
   - Required agreements and disclosures for [Financial Account for platforms](https://docs.stripe.com/financial-accounts/connect/compliance.md#treasury-terms), [Issuing](https://docs.stripe.com/financial-accounts/connect/compliance.md#issuing-terms), and [other features](https://docs.stripe.com/financial-accounts/connect/compliance.md#fees-credits-rewards-terms): Appropriately disclose fees and required identifying information.

   Stripe requires that you submit screenshots to demonstrate the following:

   - You include all required agreements and disclosures in your onboarding flow, and make them available outside of onboarding.
   - Customers have a channel to [submit complaints](https://docs.stripe.com/financial-accounts/connect/handling-complaints.md) to you and to [initiate transaction disputes](https://docs.stripe.com/issuing/purchases/disputes.md).
   - [Regulatory emails](https://docs.stripe.com/issuing/compliance-us/issuing-regulated-customer-notices.md) are sent when required for Issuing accounts.
   - [Regulatory receipts](https://docs.stripe.com/financial-accounts/connect/moving-money/regulatory-receipts.md) are provided when required for transactions in your financial account.
   - If you choose to provide [account statements](https://docs.stripe.com/financial-accounts/connect/compliance.md#statements), you must submit evidence they meet statement requirements.

2. **Get approved to launch to the public**

   After you submit your screenshots, Stripe reviews and approves within two weeks or requests additional revisions. If there are any adjustments that need to be made to your submissions, we let you know, so that you can resubmit with the needed adjustments.

## Milestone 3: Get ready to launch your offering

Now you’re ready to request your first virtual or physical card. Using real funds, test the program out by having designated employees complete initial transactions.

### Operationalize ongoing activities to remain compliant

Once live, you need to dedicate resources to ongoing operational requirements:

- **Marketing reviews:** Learn how to [submit new marketing material or user interfaces](https://docs.stripe.com/financial-accounts/connect/compliance.md#going-live) for approval.
- **Customer complaints:** Receive and resolve customer complaints, and [report them to Stripe](https://docs.stripe.com/financial-accounts/connect/handling-complaints.md#complaints-tracking) each month.
- **Dispute handling:** Set up [dispute handling](https://docs.stripe.com/issuing/purchases/disputes.md) processes for your card program.
- **Lost or stolen cards:** Allow customers to report lost or stolen cards so you can cancel them immediately and (optionally) [request replacements](https://docs.stripe.com/issuing/cards/replacements.md#replacements-for-lost-or-stolen-cards).
- **Recordkeeping:** [Record](https://docs.stripe.com/financial-accounts/connect/compliance.md#recordkeeping) all marketing materials, customer data, and [regulatory receipts](https://docs.stripe.com/financial-accounts/connect/moving-money/regulatory-receipts.md), and disclosures you make for at least 5 years.

# B2B Payments

> This is a B2B Payments for when onboarding-overview-variant is b2b-payments. View the full page at https://docs.stripe.com/issuing/onboarding-overview?onboarding-overview-variant=b2b-payments.

Create cards for your own business, employees or contractors.

**Example segments**: Online travel agencies (OTA), Buy Now, Pay Later (BNPL) businesses, and marketplaces.

## Milestone 1: Get your use case approved

Start by submitting an [intake form](https://stripe.com/contact/sales) that includes a high-level overview of what you’re looking to use  Issuing for. If you’re a funded business with a dedicated team of developers, or simply working with a single developer, include those details in the form.

After you submit the form, our team will reach out within 5 days to let you know if your use case is a good fit. We also let you know if we think your desired product or products don’t [serve your use case](https://support.stripe.com/questions/supported-business-use-cases-for-stripe-issuing) well. During the call, an assigned Stripe account representative asks you more about your use case and motivation as part of our supportability assessment. We also advise you on best practices and how to build a [compelling financial services offering](https://stripe.com/guides/building-a-fintech-company).

Following the call, we’ll inform you whether we can support your business within 5 business days (certain use cases can take longer). While you wait, you can build a test integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment to explore the product’s capabilities, and familiarize yourself with our compliance requirements. If we deem your use case supportable, your account representative provides you with any necessary agreements, and once signed, configures your program.

## Milestone 2: Obtain live access

To obtain live mode access, you must complete the required compliance tasks. In parallel, we recommend you build your integration in a production environment and operationalize required processes.

### Build your integration

At any time, you can explore an Issuing integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment using the [Dashboard](https://dashboard.stripe.com/register/issuing). You can also get started by using our APIs and step-by-step [integration guide](https://docs.stripe.com/issuing/cards/virtual.md). After you sign the agreement, Stripe configures your program. In this mode, we restrict your capabilities to your specific use case. After you receive bank partner approval, you can begin to test your offering live with real funds (your own employees).

|                  | Sandbox                                                                                                                                                              | Live                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Usage limits     | With no permissions necessary, explore a broad set of platform use cases using the Dashboard or [Issuing API](https://docs.stripe.com/api/issuing/authorizations.md) | Limited to what you’re approved for                               |
| Immediate access | Yes                                                                                                                                                                  | No, you’re granted access after you receive bank partner approval |
| Use real funds   | No                                                                                                                                                                   | Yes                                                               |

### Manage operational responsibilities

Prior to go-live, you need to take care of various operational responsibilities:

- **Cardholder experience:** Understand what types of employee inquiries you need to handle and [equip the relevant team](https://docs.stripe.com/issuing/customer-support.md) with the appropriate information and tools.
- **Compliance management:** Set up the necessary compliance processes outlined in the [compliance section](https://docs.stripe.com/issuing/onboarding-overview.md#complete-compliance-tasks).
- **Physical cards:** If your use case necessitates [physical cards](https://docs.stripe.com/issuing/cards/physical.md), we recommend using [standard cards](https://docs.stripe.com/issuing/cards/physical.md).
- **Mobile wallets:** If your use case necessitates Apple Pay, [review the steps](https://docs.stripe.com/issuing/cards/digital-wallets.md) required for approval.

​​Typically, B2B Payments use cases don’t involve publishing public-facing material. That said, if you plan to publish any public-facing material related to your use of Stripe Issuing, you need to complete a set of compliance tasks. To help in this process, Stripe provides a workflow tool to manage compliance submissions and feedback as well as to help you stay organized.

1. **Implement all requirements for a public launch**

   You must submit screenshots of your marketing, onboarding, and account servicing flows using the [compliance intake form](https://form.asana.com/?k=8K51UWmWhttehNFD5qBLdg\&d=974470123217835) to demonstrate compliance. Before you build user-facing marketing, onboarding, and account servicing pages, review the following content guidelines:

   - [Unfair and Deceptive Acts or Practices (UDAP):](https://docs.stripe.com/financial-accounts/connect/compliance.md#udap-and-correct-messaging) Keep your advertising clear and honest.
   - [Controlling the Assault of Non-Solicited Pornography And Marketing (CAN-SPAM):](https://docs.stripe.com/financial-accounts/connect/compliance.md#can-spam) Comply with commercial email messaging.
   - [Messaging and marketing:](https://docs.stripe.com/financial-accounts/connect/compliance.md#issuing-messaging-guidelines) Use the right terms to accurately reflect the account structure and benefits.
   - [Prohibition on international marketing:](https://docs.stripe.com/financial-accounts/connect/compliance.md#prohibition-on-international-marketing) Limit to US-based merchants.
   - [Required disclosures:](https://docs.stripe.com/financial-accounts/connect/compliance.md) Appropriately disclose fees and required identifying information.

2. **Get approved to launch to the public**

   After you submit your screenshots, Stripe reviews and approves within two weeks or requests additional revisions. If there are any adjustments that need to be made to your submissions, we let you know, so that you can resubmit with the needed adjustments.

## Milestone 3: Get ready to launch your offering

Now you’re ready to request your first virtual or physical card. Using real funds, test the program out by having designated employees complete initial transactions.

### Operationalize ongoing activities to remain compliant

Once live, you need to dedicate resources to ongoing operational requirements:

- **Marketing reviews:** Learn how to [submit new marketing material or user interfaces](https://docs.stripe.com/financial-accounts/connect/compliance.md#going-live) for approval.
- **Lost or stolen cards:** Allow customers to report lost or stolen cards so you can cancel them immediately and (optionally) [request replacements](https://docs.stripe.com/issuing/cards/replacements.md#replacements-for-lost-or-stolen-cards).
- **Recordkeeping:** [Record](https://docs.stripe.com/financial-accounts/connect/compliance.md#recordkeeping) all marketing materials, customer data, and [regulatory receipts](https://docs.stripe.com/financial-accounts/connect/moving-money/regulatory-receipts.md), and disclosures you make for at least 5 years.

# Expense Management

> This is a Expense Management for when onboarding-overview-variant is expense-management. View the full page at https://docs.stripe.com/issuing/onboarding-overview?onboarding-overview-variant=expense-management.

Enable your customers to fund and manage business expenses using your issued cards.

**Example segments**: SaaS platforms, e-commerce businesses, and corporate benefits providers.

## Milestone 1: Get your use case approved

Start by submitting an [intake form](https://stripe.com/contact/sales) that includes a high-level overview of what you’re looking to use  Issuing for. If you’re a funded business with a dedicated team of developers, or simply working with a single developer, include those details in the form.

After you submit the form, our team will reach out within 5 days to let you know if your use case is a good fit. We also let you know if we think your desired product or products don’t [serve your use case](https://support.stripe.com/questions/supported-business-use-cases-for-stripe-issuing) well. During the call, an assigned Stripe account representative asks you more about your use case and motivation as part of our supportability assessment. We also advise you on best practices and how to build a [compelling financial services offering](https://stripe.com/guides/building-a-fintech-company).

Following the call, we’ll inform you whether we can support your business within 5 business days (certain use cases can take longer). While you wait, you can build a test integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment to explore the product’s capabilities, and familiarize yourself with our compliance requirements. If we deem your use case supportable, your account representative provides you with any necessary agreements, and once signed, configures your program.

## Milestone 2: Obtain live access

To obtain live mode access, you must complete the required compliance tasks. In parallel, we recommend you build your integration in a production environment and operationalize required processes.

### Build your integration

At any time, you can explore an integration in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment using our [sample app](https://docs.stripe.com/issuing/sample-app.md). After you sign the legal agreement, Stripe configures your program to the capabilities required for your business model. After you receive approval, you can begin submitting live transactions.

|                  | Sandbox                                                                                                                                                              | Live                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Usage limits     | With no permissions necessary, explore a broad set of platform use cases using the Dashboard or [Issuing API](https://docs.stripe.com/api/issuing/authorizations.md) | Limited to what you’re approved for                          |
| Immediate access | Yes                                                                                                                                                                  | No, you’re granted access after you receive Stripe  approval |
| Use real funds   | No                                                                                                                                                                   | Yes                                                          |

### Manage operational responsibilities

Prior to go-live, you need to take care of various operational responsibilities:

- **Customer support:** Understand what types of customer inquiries you need to handle and [equip your support team](https://docs.stripe.com/issuing/customer-support.md) with the appropriate information and tools.
- **Compliance management:** Set up the necessary processes outlined in the [marketing section](https://docs.stripe.com/issuing/marketing-guidance-europe-uk.md).
- **Physical cards:** If your use case requires [physical cards](https://docs.stripe.com/issuing/cards/physical.md), you can order [standard cards](https://docs.stripe.com/issuing/cards/physical.md) if you want to go to market quickly. Or you can [fully customize](https://docs.stripe.com/issuing/cards/physical/order-custom-bundle.md) your cards with unique artwork and materials, if physical cards are a core part of your business.
- **Mobile wallets:** If your use case necessitates Apple Pay, [review the steps](https://docs.stripe.com/issuing/cards/digital-wallets.md) required for approval.

## Milestone 3: Get ready to launch your offering

Now you’re ready to request your first virtual or physical card. Using real funds, test the program out by having designated employees complete initial transactions.

### Operationalize ongoing activities to remain compliant

Once live, you need to dedicate resources to ongoing operational requirements:

- **Marketing:** Stay aligned with [marketing guidelines](https://docs.stripe.com/issuing/marketing-guidance-europe-uk.md).
- **Customer complaints:** Receive and resolve customer complaints, and [report them to Stripe](https://docs.stripe.com/financial-accounts/connect/handling-complaints.md#complaints-tracking) each month.
- **Dispute handling:** Set up [dispute handling](https://docs.stripe.com/issuing/purchases/disputes.md) processes for your card program.
- **Lost or stolen cards:** Allow customers to report lost or stolen cards so you can cancel them immediately and (optionally) [request replacements](https://docs.stripe.com/issuing/cards/replacements.md#replacements-for-lost-or-stolen-cards).
