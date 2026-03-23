# Revenue Recognition for destination charges

Learn how revenue recognition works with destination charges.

Revenue recognition for destination charges tracks how platform fees are recognized as revenue when using the destination charge model for Stripe Connect. With destination charges, the platform account receives the full charge amount and then transfers a portion to the connected account, keeping the platform fees as revenue. Here, we explain how revenue recognition works for both fee collection methods:

- **Application fees** (`application_fee_amount`): Platform fees are collected separately and transferred back to the platform.
- **Transfer amount** (`transfer_data[amount]`): Platform fees are deducted from the transfer amount to the connected account.

## Revenue collected with application\_fee\_amount

If the destination charges [collects fees](https://docs.stripe.com/connect/destination-charges.md?fee-type=application-fee#collect-fees) with `application_fee_amount`, the charge and transfer happen immediately, and the `application_fee_amount` is immediately recognized as the revenue.

In this example, the `application_fee_amount="200"` is set on the charge.

- On January 15, the full charge amount of 10 USD is added to your platform account.
  - 10 USD is transferred to the connected account.
  - The 2 USD application fee is transferred back to your platform.

| Account | Jan   |
| ------- | ----- |
| Revenue | +2.00 |
| Cash    | +2.00 |

## Revenue collected with transfer\_data\[amount]

If the destination charges [collect fees](https://docs.stripe.com/connect/destination-charges.md?fee-type=transfer-amount#collect-fees) with `transfer_data[amount]`, the charge and transfer happen immediately, where you subtract your platform’s fees from the charge amount, then pass the result of this calculation as the `transfer_data[amount]`. The platform’s fees are immediately recognized as revenue.

In this example, the `transfer_data[amount]="800"` is set on the charge.

- On January 15, the full charge amount 10 USD is added to your platform account.
  - 8 USD is transferred to the connected account.
  - The 2 USD is recognized as the revenue.

| Account | Jan   |
| ------- | ----- |
| Revenue | +2.00 |
| Cash    | +2.00 |

## Loss and contra revenue with issuing refunds

### When collecting fees with application\_fee\_amount

If the destination charges [issue refunds](https://docs.stripe.com/connect/destination-charges.md#issue-refunds), by default the destination account keeps the funds that were transferred to it, leaving the platform account to cover the negative balance from the refund. The refund amount is booked as the ConnectTransferLoss.

In this example, the charge collects fees with `application_fee_amount`, and it’s fully refunded in February.

- On January 15, the full charge amount of 10 USD is added to your platform account.
  - 10 USD is transferred to the connected account.
  - The 2 USD application fee is transferred back to your platform.
- On February 21, the full charge amount 10 USD is refunded.

| Account             | Jan   | Feb    |
| ------------------- | ----- | ------ |
| Revenue             | +2.00 |        |
| Cash                | +2.00 | -10.00 |
| ConnectTransferLoss |       | +10.00 |

If the platform account sets `reverse_transfer=true` and `refund_application_fee=true` when calling the refund API:

- If the transfer reversal succeeded, the ConnectTransferLoss is canceled out by the transfer reversal.
- The refunded application fee is booked as contra revenue.

| Account | Jan   | Feb   |
| ------- | ----- | ----- |
| Revenue | +2.00 |       |
| Cash    | +2.00 | -2.00 |
| Refunds |       | +2.00 |

### When collecting fees with transfer\_data\[amount]

In this example, the charge collects fees with transfer\_data\[*amount*], and it’s partially refunded in February and March.

- On January 15, the full charge amount of 10 USD is added to your platform account.
  - 8 USD is transferred to the connected account.
  - The 2 USD is recognized as the revenue.
- On February 21, the partial charge amount 4 USD is refunded, and a proportional amount of the transfer 3.20 USD is reversed.
- On March 10, the partial charge amount 6 USD is refunded, and a proportional amount of the transfer 4.80 USD is reversed.

| Account | Jan   | Feb   | Mar   | Total |
| ------- | ----- | ----- | ----- | ----- |
| Revenue | +2.00 |       |       | +2.00 |
| Cash    | +2.00 | -0.80 | -1.20 |       |
| Refunds |       | +0.80 | +1.20 | +2.00 |

## Best practices for accessing the feature

To use revenue recognition for destination charges, follow these best practices for setup, monitoring, and troubleshooting.

### Audit the destination charges journal entries

You can select the **platform fee ID**, **platform fee refund ID**, **transfer ID**, **transfer refund ID**, and **charge destination ID** columns when downloading the CSV reports format by invoice or line item.
![Revenue recognition report columns for the destination charges](https://b.stripecdn.com/docs-statics-srv/assets/connect-destination-charges-report-columns.503bbea8698306dc3a1282676b1e0d2c.png)

The month summary reports contain new items `Revenue from platform fees` and `Less refunds from platform fees`—you can find the details in the [month summary section](https://docs.stripe.com/revenue-recognition/reports/monthly-summary.md).
![Revenue recognition month summary items for the destination charges](https://b.stripecdn.com/docs-statics-srv/assets/connect-destination-charges-month-summary.6ac0f42f9d596630e5ffb95f7d84a451.png)

### Accounting period

It generates corrections if the private preview is retroactively applied to transactions from past (closed) accounting periods. If you want to avoid this, reopen your books by [opening your accounting periods](https://docs.stripe.com/revenue-recognition/revenue-settings/accounting-period-control.md) prior to gating into the private preview.

### Destination charges exclusion rule

If you’re on destination charges exclusion rule, you can either delete the exclusion rules or set an effective period end date to apply the feature.
![Revenue recognition exclusion rule for the destination payments](https://b.stripecdn.com/docs-statics-srv/assets/connect-destination-charges-exclusion-rule.d002006b2460151217a08cdcbbef344d.png)
