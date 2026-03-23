# Financial Accounts for platforms

Learn how to provide financial services to connected accounts.

[Financial Accounts for platforms](https://stripe.com/treasury) is a suite of APIs for Stripe *Connect* (Connect is Stripe's solution for multi-party businesses, such as marketplace or software platforms, to route payments between sellers, customers, and other recipients) platforms that allows you to embed financial services in your product. Stripe provides the infrastructure in partnership with trusted banks.

Your financial account enables your connected accounts to hold funds, pay bills, earn cash back, and manage their cash flow. Many platforms using Connect also use [Stripe Issuing](https://docs.stripe.com/issuing.md) to issue cards for accessing financial accounts. To learn more about Financial Accounts for platforms, see its [features](https://docs.stripe.com/financial-accounts/connect.md#features).

> #### Get access to Financial Accounts for platforms
>
> Financial Accounts for platforms is available for testing in *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environments for businesses serving US-based commercial businesses.
>
> All other businesses need to complete the [Financial Accounts for platforms form](https://go.stripe.global/treasury-inquiry) and must be reviewed by Stripe to verify if we can support them.

[See the Financial Accounts for platforms Demo](https://baas.stripe.dev/)

## Get started

[How Financial Accounts for platforms works](https://docs.stripe.com/financial-accounts/connect/how-financial-accounts-for-platforms-works.md): Learn about connected accounts, financial accounts, and moving money.

[Get started with API access](https://docs.stripe.com/financial-accounts/connect/access.md): Use Financial Accounts for platforms and Issuing in a *sandbox* (A sandbox is an isolated test environment that allows you to test Stripe functionality in your account without affecting your live integration. Use sandboxes to safely experiment with new features and changes) environment to see what functionality you want to enable in your live integration.

[Eligibility requirements](https://docs.stripe.com/financial-accounts/connect/requirements.md): Understand the requirements for using Stripe Financial Accounts for platforms.

[Onboard users with Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/examples/onboarding-guide.md): Learn best practices to onboard your connected accounts when offering financial services with Financial Accounts for platforms.

[Manage fraud](https://docs.stripe.com/financial-accounts/connect/examples/fraud-guide.md): Learn best practices for managing fraud with Financial Accounts for platforms.

[Marketing and compliance guidelines](https://docs.stripe.com/financial-accounts/connect/compliance.md): Learn how to keep your Financial Accounts for platforms or Issuing program and marketing campaigns compliant.

## Sample integrations

[Set up financial accounts](https://docs.stripe.com/financial-accounts/connect/examples/financial-accounts.md): Use a sample Financial Accounts for platforms and Issuing integration to set up a financial account and create cards.

[Use Financial Accounts for platforms to move money](https://docs.stripe.com/financial-accounts/connect/requirements.md): Learn how an example business uses SetupIntents and PaymentMethods, and verifies bank accounts with Financial Accounts for platforms.

[Issuing and Financial Accounts for platforms sample app](https://docs.stripe.com/financial-accounts/connect/examples/sample-app.md): Use the Stripe Next.js sample app to start your own Issuing and Financial Accounts for platforms integration.

## Integrate Financial Accounts for platforms with Stripe Issuing

[Webhooks for Issuing and Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/examples/webhooks.md): Learn about webhook events for Stripe Issuing and Stripe Financial Accounts for platforms and why they occur.

[Integrate Stripe Issuing with Financial Accounts for platforms](https://docs.stripe.com/financial-accounts/connect/account-management/issuing-cards.md): Use Stripe Issuing to create physical and virtual cards using a financial account as the source of funds.

[Issuing and Financial Accounts for platforms sample app](https://docs.stripe.com/financial-accounts/connect/examples/sample-app.md): Use the Stripe Next.js sample app to start your own Issuing and Financial Accounts for platforms integration.

## Manage your accounts

[Financial Accounts for platforms accounts structure](https://docs.stripe.com/financial-accounts/connect/account-management/accounts-structure.md): Learn how the financial account components fit together and interact.

[Connected accounts](https://docs.stripe.com/financial-accounts/connect/account-management/connected-accounts.md): Collect onboarding requirements for your connected accounts.

[Financial accounts](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md): Use financial accounts to store, send, and receive funds.

[Financial accounts features](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md): Learn about the features available for financial accounts.

[Balances and transactions](https://docs.stripe.com/financial-accounts/connect/account-management/working-with-balances-and-transactions.md): Learn about financial account balances and the effect transactions have on them.

## Move money

[Payouts and top-ups](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md): Move money between Payments account balances and financial account balances.

[Work with SetupIntents, PaymentMethods, and BankAccounts](https://docs.stripe.com/financial-accounts/connect/moving-money/working-with-bankaccount-objects.md): Learn how to set up money movements with financial accounts.

[Move money into financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-into-financial-accounts.md): Learn the requests available to move money into financial accounts.

[Move money out of financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-out.md): Learn the requests available to move money out of financial accounts.

## Features

- [Financial accounts](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md): Offer accounts eligible for FDIC insurance to your customers within your platform.

- [Funds transfers](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md): Send and receive funds using traditional bank transfer methods such as ACH credits and debits.

- [Fraud prevention](https://docs.stripe.com/financial-accounts/connect/examples/fraud-guide.md): Use tools to detect and prevent fraudulent activity such as delaying transaction processing on risky money movement.

- [Faster payouts into financial accounts](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md): Enable faster access to funds for customers who sell using Stripe Payments at no additional cost.
