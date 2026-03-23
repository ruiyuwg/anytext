# Disputes on Connect platforms

Learn about the dispute responsibilities on Connect platforms.

You can view all disputes filed against your platform and connected accounts in your Dashboard. When one of your connected accounts receives a dispute against a payment, the [charge type](https://docs.stripe.com/connect/charges.md#types) and negative balance responsibility determine:

- Whether you or your connected account responds to that dispute to accept or challenge it.
- Which account Stripe debits for the chargeback and fees.

This guide describes how Stripe processes disputes for each charge type and how you can handle them.

## Direct charges

For connected accounts that use [direct charges](https://docs.stripe.com/connect/direct-charges.md), Stripe debits the disputed amount from the connected account’s balance. However, dispute fee responsibilities depend on the `controller.losses.payments` and `controller.fees.payer properties`.

| Controller property                                                                      | Dispute fee responsibility                                                                                                         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `controller.losses.payments = "Stripe"` and `controller.fees.payer = "account"`          | Dispute fees are charged to connected accounts, and Stripe covers the loss if the amount can’t be debited.                         |
| `controller.losses.payments = "Stripe"` and `controller.fees.payer = "application"`      | Dispute fees are charged to the connected account, and Stripe is responsible for covering the loss if the amount can’t be debited. |
| `controller.losses.payments = "application"` and `controller.fees.payer = "application"` | The platform is charged dispute fees and is responsible for covering the loss if the amount can’t be debited.                      |

### Accounts that handle their own disputes

For connected accounts where your platform isn’t liable for negative balances (including Standard accounts), these accounts act as the *merchant of record* (The legal entity responsible for facilitating the sale of products to a customer that handles any applicable regulations and liabilities, including sales taxes. In a Connect integration, it can be the platform or a connected account). This means disputes and chargebacks are filed against them, and we deduct the total amount for disputes and fees directly from their balance. Learn how to [comply with payment network merchant rules](https://docs.stripe.com/connect/merchant-of-record.md).

### Accounts where the platform is liable

For connected accounts where your platform is *liable for negative balances* (The responsibility for managing risk and recovering negative balances on connected accounts. Stripe or the Connect platform can be liable for negative balances on connected accounts) (including Custom and Express accounts), your platform is responsible for any disputes related to those accounts. In this case, Stripe debits the disputed amount from the connected account’s balance and the dispute fee from your platform balance. However, your platform is ultimately liable. If Stripe can’t debit the disputed amount from the connected account, Stripe debits it from your platform account.

For additional details, refer to the [fee behaviors for payer values](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior.md#fee-payer-behaviors) and learn how to set [account controller properties](https://docs.stripe.com/connect/migrate-to-controller-properties.md?migrate-to-controller-properties-samples=specifying-all-properties#account-controller-properties) using the Accounts API.

## Destination and separate charges and transfers

For [destination charges](https://docs.stripe.com/connect/destination-charges.md) and [separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers.md), with or without `on_behalf_of`, Stripe debits dispute amounts and fees from your platform account.

We recommend setting up [a webhook](https://docs.stripe.com/webhooks.md) to listen to [dispute created events](https://docs.stripe.com/api/events/types.md#event_types-charge.dispute.created). When that happens, you can attempt to recover funds from the connected account by reversing the transfer through the [Dashboard](https://dashboard.stripe.com/test/transfers) or by [creating a transfer reversal](https://docs.stripe.com/api/transfer_reversals/create.md).

If the connected account has a negative balance, Stripe attempts to [debit its external account](https://docs.stripe.com/connect/account-balances.md#automatically-debit-connected-accounts) if `debit_negative_balances` is set to `true`.

If you challenge the dispute and win, you can transfer the funds that you previously reversed back to the connected account. If your platform has an insufficient balance, the transfer fails. Prevent insufficient balance errors by [adding funds to your Stripe balance](https://docs.stripe.com/get-started/account/add-funds.md).

> Retransferring a previous reversal is subject to [cross-border transfer restrictions](https://docs.stripe.com/connect/account-capabilities.md#transfers-cross-border), meaning you might have no means to repay your connected account. Instead, wait to recover disputed cross-border payment transfers for destination charges with `on_behalf_of` until after a dispute is lost.

To automate dispute management and handle chargebacks, browse [Fraud Stripe Apps](https://marketplace.stripe.com/categories/fraud) on the App Marketplace.

## Provide Connect embedded components to allow your connected accounts to respond to disputes

Your connected accounts can use [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md) to manage disputes from within your site.

The following components support dispute management:

- [Payments component](https://docs.stripe.com/connect/supported-embedded-components/payments.md): Displays all of an account’s payments and disputes.
- [Disputes list component](https://docs.stripe.com/connect/supported-embedded-components/disputes-list.md): Displays all of an account’s disputes.
- [Disputes for a payment component](https://docs.stripe.com/connect/supported-embedded-components/disputes-for-a-payment.md): Displays the disputes for a single specified payment. You can use it to include dispute management functionality on a page with your payments UI.

Note: The following is a preview/demo component that behaves differently than live mode usage with real connected accounts. The actual component has more functionality than what might appear in this demo component. For example, for connected accounts without Stripe dashboard access (custom accounts), no user authentication is required in production.

## See also

- [Respond to disputes](https://docs.stripe.com/disputes/responding.md)
- [Dispute categories](https://docs.stripe.com/disputes/categories.md)
- [Prevent disputes and fraud](https://docs.stripe.com/disputes/prevention.md)
- [Use Radar with Connect](https://docs.stripe.com/connect/radar.md)
