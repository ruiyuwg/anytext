# Payouts to connected accounts

Manage payouts and external accounts for your platform's connected accounts.

By default, any [charge](https://docs.stripe.com/connect/charges.md) you make on behalf of a connected account accumulates in the connected account’s [balance](https://docs.stripe.com/connect/account-balances.md) and is paid out on a daily rolling basis. Depending on the configuration of your connected accounts, your platform can manage their payouts as follows:

- Schedule [the frequency of automatic payouts](https://docs.stripe.com/connect/manage-payout-schedule.md)
- Perform [manual payouts](https://docs.stripe.com/connect/manual-payouts.md)
- Settle funds [instantly](https://docs.stripe.com/connect/instant-payouts.md)
- When using [destination charges](https://docs.stripe.com/connect/destination-charges.md) or [separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers.md), retain funds in your platform balance

## Payout management configurations

For connected accounts with access to the full Stripe Dashboard or Express Dashboard, the account holder manages their external *payout* (A payout is the transfer of funds to an external account, usually a bank account, in the form of a deposit) accounts (bank accounts and debit cards), but the platform can schedule payouts. To schedule payouts for an account that has access to the full Stripe Dashboard, the platform must configure [Platform controls](https://docs.stripe.com/connect/platform-controls-for-stripe-dashboard-accounts.md) for the account.

For connected accounts without access to a Stripe-hosted Dashboard, the platform manages their external payout accounts and can schedule their payouts.

## Supported settlement currencies

To see which currencies you can use to settle funds in a particular country, select that country from the following dropdown.

> For a list of supported presentment currencies, see the [currencies](https://docs.stripe.com/currencies.md#presentment-currencies) documentation.
> [See table on original page](https://docs.stripe.com/connect/payouts-connected-accounts)
> Platforms can also enable their connected accounts to settle funds and pay out to banks in certain non-primary currencies, or pay out to non-domestic bank accounts in the local currency. In some cases, Stripe charges a fee. For more information, see [multi-currency settlement for Connect marketplaces and platforms](https://docs.stripe.com/connect/multicurrency-settlement.md).

### Use webhooks with payouts

You can track all payout activity on connected accounts with webhooks by creating an [event destination](https://docs.stripe.com/event-destinations.md) and listening for these events:

- `payout.created`
- `payout.updated`
- `payout.paid`
- `payout.failed`

> #### Accounts v2 API
>
> Regardless of the Accounts API version that you use, payouts trigger only the v1 events described here. They don’t have equivalent v2 events.

For most payouts, event notifications occur over a series of days. Instant payouts typically send `payout.paid` within 30 minutes.

When a payout can’t be completed, a `payout.failed` event occurs. The event’s `failure_code` property indicates the reason. A failed payout also disables the external account involved in that payout, triggering an `account.external_account.updated` event. That external account can’t receive payouts until the platform updates the connected account’s external accounts.
