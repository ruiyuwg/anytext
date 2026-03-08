# How Issuing works

Learn how to start building a card program with Stripe Issuing.

Stripe [Issuing](https://stripe.com/issuing) allows you to create, manage, and scale a payment card program for your users without setup fees. You can programmatically control the details of your card program, which includes issuing [physical](https://docs.stripe.com/issuing/cards/physical.md) or [virtual](https://docs.stripe.com/issuing/cards/virtual.md) cards, managing [spending](https://docs.stripe.com/issuing/controls/spending-controls.md), and [approving or declining transactions](https://docs.stripe.com/issuing/controls/real-time-authorizations.md).

We partner with multiple trusted banks to provide an embedded finance infrastructure for you to build new financial service offerings. We also partner with the Mastercard and Visa card networks so you can issue cards [on either network or on both](https://docs.stripe.com/issuing/customize-your-program.md#network-preference).

> Issuing is available in the US, UK, and many *European Economic Area* (The European Economic Area is a regional single market with free movement of labor, goods, and capital. It encompasses the European Union member states and three additional states that are part of the European Free Trade Association) (EEA) countries. In the US, you can provide cards to individuals who live in the same country where the business is established. If your business is established in the EU or the UK, you can provide cards to individuals who live in EEA countries and the UK.
>
> To learn more and see a full list of supported countries, see [Globally integrate Issuing](https://docs.stripe.com/issuing/global.md).

## Get started with Issuing

Complete the following steps to set up a commercial card program with Issuing:

1. Determine your eligibility to use Issuing by [contacting Stripe sales](https://stripe.com/contact/baas).
2. Choose whether to offer virtual or physical cards. Learn more about Issuing [card types](https://docs.stripe.com/issuing/choose-cards.md).
3. Customize your card program, including choosing a network and a card product type. Learn how to [customize your card program](https://docs.stripe.com/issuing/customize-your-program.md).
4. To enable card spend, you need to fund an Issuing balance. Learn how to [add funds to your card program](https://docs.stripe.com/issuing/adding-funds-to-your-card-program.md).
5. Take steps to identify and limit transaction fraud. Learn more about [managing fraud](https://docs.stripe.com/issuing/manage-fraud.md) with Stripe controls and tools.
6. (Optional) Set up spending controls, including spending limits and blocking specific business categories, countries, or business IDs. Learn more about setting [spending controls](https://docs.stripe.com/issuing/controls/spending-controls.md).
7. Simulate purchases in a sandbox environment to test your integration. Learn more about [testing Issuing](https://docs.stripe.com/issuing/testing.md).

## Issuing use cases

| **Use case**                               | **Description**                                                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Commercial card program**                | Create, manage, and distribute payment cards for your business.                                                                                                 |
| **Consumer card program**(private preview) | Create, launch, and run a bank-sponsored credit program for your customers with [Credit Consumer Issuing](https://docs.stripe.com/issuing/consumer-issuing.md). |

## Integration options

### Financial Accounts for platforms

You can integrate Issuing with [Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect.md) to attach cards to open loop wallets and offer your users additional transaction options. Financial Accounts for platforms is only available to platforms and connected accounts [located in the United States](https://docs.stripe.com/financial-accounts/connect/requirements.md#supported-countries). Learn how to [set up a Financial Accounts for platforms integration](https://docs.stripe.com/financial-accounts/connect/account-management/issuing-cards.md).

### Connect

You can integrate Issuing with [Stripe Connect](https://docs.stripe.com/connect.md) to issue cards to users who aren’t directly employed by your business. See [Set up an Issuing and Connect integration](https://docs.stripe.com/issuing/connect.md) for more details.

## Issuing architecture

With Stripe *Connect* (Connect is Stripe's solution for multi-party businesses, such as marketplace or software platforms, to route payments between sellers, customers, and other recipients), you onboard customers to your platform with connected accounts. For each of these connected accounts, you can create account holders and provide cards to authorized users. The following diagram shows a platform with a Stripe Issuing integration using an Issuing balance and a financial accounts balance:

#### Issuing balance funding source

Diagram of a platform integrated with Issuing (See full diagram at https://docs.stripe.com/issuing/how-issuing-works)

### Connected accounts

Issuing only supports connected accounts that don’t use a Stripe-hosted Dashboard, and where your platform is responsible for requirements collection and loss liability, also known as a Custom connected account. Learn how to [create connected accounts](https://docs.stripe.com/connect/interactive-platform-guide.md?connect-charge-type=direct\&connect-loss-liability-owner=platform) that work with Issuing.

### Issuing balance

An Issuing balance is a funding source attached to a connected account that provides the funds for spending with the associated card account. You can add funds to the connected account’s Issuing balance either by transferring from the connected account’s Stripe account balance, or through a top-up from an external bank account. You can also pay out funds from the Issuing balance to an external bank account.

Connected accounts can also use a [Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/account-management/issuing-cards.md) account to fund cards for a full embedded finance solution.

#### Financial accounts balance funding source

(See full diagram at https://docs.stripe.com/issuing/how-issuing-works)

### Connected accounts

Connected accounts are businesses, sellers, or service providers that use a platform. For example, as an expense management platform, you provide software that small businesses can leverage to manage and control their business spend. Each digital store owner that uses the storefront platform to collect payments is a connected account.

Financial Accounts for platforms only supports connected accounts that don’t use a Stripe-hosted Dashboard, and where your platform is responsible for requirements collection and loss liability, also known as a Custom connected account. Learn how to [create connected accounts](https://docs.stripe.com/connect/interactive-platform-guide.md?connect-charge-type=direct\&connect-loss-liability-owner=platform) that work with Financial Accounts for platforms.

### Financial accounts

You can create individual financial accounts for your connected accounts using the [API](https://docs.stripe.com/api/treasury.md). These financial accounts have routing numbers from our US banking partners, and their balances are eligible for FDIC pass-through insurance. You can fund the financial accounts of your platform’s connected accounts and move money between them. The connected accounts on your platform can also fund their financial accounts using an external bank account. Issuing allows you to link commercial cards to the financial account balance of your connected accounts.

Financial Accounts for platforms supports multiple financial accounts for each connected account.

## See also

- [Learn how to set up Issuing as a Connect platform](https://docs.stripe.com/issuing/connect.md)
- [Review compliance requirements pertaining to Issuing](https://docs.stripe.com/issuing/compliance-us.md)
- [Review best practices and tools for testing an Issuing integration](https://docs.stripe.com/issuing/testing.md)
- [Learn about setting card rules to control spending](https://docs.stripe.com/issuing/controls/spending-controls.md)
- [Learn about fraud controls and tools offered through Stripe Issuing](https://docs.stripe.com/issuing/manage-fraud.md)
