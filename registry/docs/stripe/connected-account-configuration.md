# Configure the behavior of connected accounts

Learn how to configure your connected accounts using the Accounts v2 API.

You define the interactions between your platform, connected accounts, and Stripe, such as funds flows and loss liability, by configuring your connected accounts. Set up your integration to configure them by specifying values for certain properties when it creates the corresponding Accounts v2 objects. For example, properties in the `defaults.responsibilities` hash assign liability for negative [balances on your connected accounts](https://docs.stripe.com/connect/account-balances.md) and specify how Stripe collects payment fees.

The values you assign to your connected account properties also affect other aspects of your integration. For example, [responsibility for verifying identity information](https://docs.stripe.com/connect/accounts-v2/connected-account-configuration.md#kyc-requirements) is assigned to Stripe or your platform based on negative balance liability and connected accounts’ access to Stripe Dashboards.

> Responsibilities and the `dashboard` property in Accounts v2 correspond to [controller properties in Accounts v1](https://docs.stripe.com/connect/migrate-to-controller-properties.md). This document includes [a map of controller properties to Accounts v2 properties](https://docs.stripe.com/connect/accounts-v2/connected-account-configuration.md#property-map).

## Set responsibilities

You must define `defaults.responsibilities` properties when you add the Merchant configuration to an account. You can’t update their values later.

| Property                                                                                                                                                           | Description                                                                                                                                                                  | Values                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [defaults.responsibilities.fees\_collector](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-defaults-responsibilities-fees_collector)     | Defines how Stripe collects payment fees for direct charges on the connected account. (For destination or separate charges, Stripe always collects fees from your platform.) | - `application`: Your platform collects application fees from the connected account, and Stripe collects payment fees from your platform.

- `stripe`: Stripe collects payment fees directly from the connected account.                                                                                                         |
  | [defaults.responsibilities.losses\_collector](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-defaults-responsibilities-losses_collector) | Assigns responsibility for negative balances incurred by the connected account.                                                                                              | - `application`: Your platform is responsible for negative balances and [manages risk](https://docs.stripe.com/connect/risk-management.md) for the connected account.
- `stripe`: Stripe is liable for the connected account’s negative balances. Your platform is still liable for negative balances on your platform account. |

Responsibilities are subject to the following restrictions:

- If you set `losses_collector` to `application`, then you must also set `fees_collector` to `application`.
- If you use destination charges with an Account, we recommend that you set both `losses_collector` and `fees_collector` to `application`.

For more information about supported configurations, see [Integration recommendations](https://docs.stripe.com/connect/integration-recommendations.md).

## Set Dashboard access

You must set the [dashboard](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-dashboard) property value (if its existing value is null) when you add the Merchant configuration to an account. You must also set the `dashboard` value (if its existing value is null) when you request the [stripe\_transfers](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-configuration-recipient-capabilities-stripe_balance-stripe_transfers-requested) feature for the Recipient configuration on an account. Choose from the following values:

- `express`: The connected account can access the [Stripe Express Dashboard](https://docs.stripe.com/connect/express-dashboard.md), which offers limited functionality. You can customize its appearance with your platform’s branding.
- `full`: The connected account can access the [full Stripe Dashboard](https://docs.stripe.com/connect/stripe-dashboard.md). The full Stripe Dashboard lets your connected accounts view and manage their finances and reports.
- `none`: The connected account can’t access either Stripe Dashboard. Your platform must provide all Stripe-related functionality.

Regardless of the `dashboard` setting, your platform can use [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md) to provide your connected accounts with similar functionality in a custom interface.

Dashboards are subject to the following restrictions:

- If you set `dashboard` to `express`, then you must also set both `losses_collector` and `fees_collector` to `application`.
- If you set `dashboard` to `full`, then you must also set both `losses_collector` and `fees_collector` to `stripe`.

For more information about supported configurations, see [Integration recommendations](https://docs.stripe.com/connect/integration-recommendations.md).

## Collect Know Your Customer (KYC) requirements

Responsibility for collecting KYC requirements is based on the `defaults.responsibilities.losses_collector` and `dashboard` values. In most configurations, Stripe is responsible for collecting KYC requirements from your connected accounts. Your platform is responsible only when you set `defaults.responsibilities.losses_collector` to `application` and `dashboard` to `none`. You can check the configuration by looking at `defaults.responsibilities.requirements_collector`, which can be `stripe` or `application`.

> Configure platform responsibility for requirements collection only if you’re prepared to manage the operational complexity required to verify requirement information and [maintain compliance with any requirement updates](https://docs.stripe.com/connect/handle-verification-updates.md).

## Accounts v1 controller property map

The settings described in this document correspond to Accounts v1 controller properties as follows:

| Accounts v1 Property                                                                                                                                     | Accounts v2 Property                                                                                                                                                          | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [controller.fees.payer](https://docs.stripe.com/api/accounts/create.md?api-version=preview#create_account-controller-fees-payer)                         | [defaults.responsibilities.fees\_collector](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-defaults-responsibilities-fees_collector)                | Defines who collects payment fees for direct charges on the connected account. (For destination charges, Stripe always collects fees from your platform.) |
| [controller.losses.payments](https://docs.stripe.com/api/accounts/create.md?api-version=preview#create_account-controller-losses-payments)               | [defaults.responsibilities.losses\_collector](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-defaults-responsibilities-losses_collector)            | Defines responsibility for negative balances incurred by the connected account.                                                                           |
| [controller.requirement\_collection](https://docs.stripe.com/api/accounts/create.md?api-version=preview#create_account-controller-requirement_collection) | [defaults.responsibilities.requirements\_collector](https://docs.stripe.com/api/v2/core/accounts/object.md#v2_account_object-defaults-responsibilities-requirements_collector) | In Accounts v2, this value is automatically calculated based on the `losses_collector` and `dashboard` values. You can’t set it.                          |
| [controller.stripe\_dashboard.type](https://docs.stripe.com/api/accounts/create.md?api-version=preview#create_account-controller-stripe_dashboard-type)   | [dashboard](https://docs.stripe.com/api/v2/core/accounts/create.md#v2_create_accounts-dashboard)                                                                              | Specifies connected account access to Stripe Dashboards.                                                                                                  |
