# Accounts structure

Learn how the account components of Financial Accounts for platforms interact.

Use this guide to understand the technical components of Financial Accounts for platforms, specifically the different account types.

## Account types

Your platform must have Stripe *Connect* (Connect is Stripe's solution for multi-party businesses, such as marketplace or software platforms, to route payments between sellers, customers, and other recipients) to use Financial Accounts for platforms. In its most basic form, a Connect integration includes a platform account with many connected accounts, each owned by a seller or service provider that uses the platform. Both the platform account and its connected accounts are [Account](https://docs.stripe.com/api/accounts.md) objects in the Stripe API.

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Financial Accounts workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

Financial Accounts for platforms only supports connected accounts that don’t use a Stripe-hosted dashboard and where your platform is responsible for requirements collection and loss liability, including Custom connected accounts. Learn how to [create connected accounts](https://docs.stripe.com/connect/interactive-platform-guide.md?connect-charge-type=direct\&connect-loss-liability-owner=platform) that work with Financial Accounts for platforms.

As a platform with connected accounts, you’re responsible for maintaining a minimum API version, communicating terms of service updates to your connected accounts, handling information requests from them, and providing them with support. Because your platform is ultimately responsible for the losses your connected accounts incur, you’re also responsible for vetting them for fraud. To learn more, read the [Financial Accounts for platforms fraud guide](https://docs.stripe.com/financial-accounts/connect/examples/fraud-guide.md).
![Flow chart with lines connecting a platform with three different connected accounts.](https://b.stripecdn.com/docs-statics-srv/assets/connected-accounts.7443ee88f52a49904439afc21ded676e.png)

A Connect platform with connected accounts

Financial Accounts for platforms includes another type of Stripe account, a financial account. When you onboard your platform to Financial Accounts for platforms, Stripe automatically creates and assigns a `FinancialAccount` object to your platform account. As the platform, you request the `treasury` capability when requesting the capabilities you need for your connected accounts. After you request it, Stripe updates the connected account’s `Account` object to include additional requirements in its [requirements hash](https://docs.stripe.com/api/accounts/object.md#account_object-requirements). You can create financial accounts for your connected accounts, but until you gather the requirements from your connected account owners, the financial accounts aren’t accessible. For more information on using financial accounts, see [Working with financial accounts](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md).

## Account balances

Each account in Stripe Connect (both platform and connected accounts) has an [account balance](https://docs.stripe.com/connect/account-balances.md) that tracks pending and available funds for that account. With Financial Accounts for platforms, each of these accounts can also have a financial account, which has a balance of its own. You can use Financial Accounts for platforms to transfer funds between the platform account and financial account, but their respective balances always remain separate. However, you can’t transfer funds from a platform end-user’s financial account to their connected account. For more information on platform and connected account balances, see [Understanding Connect account balances](https://docs.stripe.com/connect/account-balances.md). For more information on financial account balances, see [Working with balances and transactions](https://docs.stripe.com/financial-accounts/connect/account-management/working-with-balances-and-transactions.md).
![Flow chart with a line connecting a platform account with a connected account. For each account, two lines connect both a payments account balance and a financial account balance. A double arrow with a dollar sign shows funds flow between each accounts balances and a one direction arrow with a dollar sign flow from the platform financial account balance to the connected account financial account balance.](https://b.stripecdn.com/docs-statics-srv/assets/fund-flow.6fb714d66e6c95a45f14066001c290bc.png)

Flow of funds between accounts

## Flow of funds between accounts

Although the payments balance and financial account balances are separate, Financial Accounts for platforms supports the flow of funds between the two. Financial Accounts for platforms also enables you to transfer funds from your platform financial account to the financial accounts attached to your platform’s connected accounts. You can use [Payouts](https://docs.stripe.com/api/payouts.md) to send funds from your payment balance to your financial account or to the financial accounts attached to your platform’s connected accounts. To move money between two financial accounts, Financial Accounts for platforms uses [OutboundPayment](https://docs.stripe.com/api/treasury/outbound_payments.md) objects.

Transfers affect funds on the Stripe Account Balance, so if you want to move funds between two financial accounts, you must use OutboundPayments.
