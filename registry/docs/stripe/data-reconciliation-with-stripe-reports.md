# Data reconciliation with Stripe reports

Learn how to reconcile revenue recognition data with other financial reports.

You can reconcile the cash account from Stripe Revenue Recognition and the **Balance Summary** report’s balance change from the activity section within the same month. Because revenue recognition focuses on revenue-generating activities, you must exclude fees, network costs, contributions, and financing paydowns from the **Balance Summary** report’s balance change from the activity section before reconciling. To get the cash amount in Stripe Revenue Recognition, download the balance sheet report in the summary format.

The balance sheet report doesn’t take corrections into account. If you have corrections for the month that you’re attempting to reconcile reports for, you must also consider the corrections shown in the [debits and credits report](https://docs.stripe.com/revenue-recognition/reports/debits-and-credits.md#review-corrections) (using the **Entries** filter set to **Corrections**) for all subsequent months. You must factor any corrections that would have been booked to the `original_accounting_period` of the reconciliation month into the Stripe Revenue Recognition cash amount.

## Example

As an example, the balance sheet report might look like the following, with a 100 USD amount:

| account | currency | net change |
| ------- | -------- | ---------- |
| Cash    | usd      | +100.00    |
| Cash    | eur      | +15.00     |

To get the cash amount in the **Balance Summary** report’s balance change from the activity section, set the currency to USD, and the report timezone to UTC.

Revenue recognition and **Balance Summary** use different timestamps associated with a transaction. This discrepancy can lead to mismatches in reconciliation if a payment takes a long time to process.

After downloading the report in the summary format, it might look like the following:

| reporting category         | currency | gross   | fee    | net     |
| -------------------------- | -------- | ------- | ------ | ------- |
| `charge`                   | usd      | +140.00 | -10.00 | +130.00 |
| `refund`                   | usd      | -40.00  | 0.00   | -40.00  |
| `refund_failure`           | usd      | +20.00  | 0.00   | +20.00  |
| `partial_capture_reversal` | usd      | -20.00  | 0.00   | -20.00  |
| `fee`                      | usd      | -10.00  | 0.00   | -10.00  |
| `network_cost`             | usd      | -10.00  | 0.00   | -10.00  |
| `contribution`             | usd      | -10.00  | 0.00   | -10.00  |
| `financing_paydown`        | usd      | -10.00  | 0.00   | -10.00  |
| `total`                    | usd      | +60.00  | -10.00 | +50.00  |

For reports prior to March 2025, the total gross amount excludes some Stripe fees. After deducting rows for additional Stripe fees, network costs, contributions, and financing paydowns, the calculated cash amount is 100 USD.

For reports on or after March 2025, the cash amount displayed in the Revenue Recognition balance sheet already accounts for Stripe fees. The net change in cash from the balance sheet is 50 USD, matching the net total amount.

## Journal entries

The journal entries in the **Debits and credits** report don’t consider fees, network costs, contributions, and financing paydowns. However, you can use Stripe fees in your revenue recognition reporting to create journal entries for these items.

As of March 1, 2025, journal entries in the **Debits and credits** report automatically incorporate fees, network costs, and contributions. Stripe fees for charges paid before March are not displayed to prevent showing only a portion of the total fee. As a result, discrepancies might arise when these fees are associated with charges in later periods, such as during disputes. To enable Stripe fees support in Stripe Revenue Recognition for all accounting periods and avoid the discrepancies, [contact support](https://support.stripe.com/contact/email?topic=financial_reports).

With Stripe fees enabled, you can do the following to reconcile revenue recognition fees with the [Balance Summary](https://docs.stripe.com/reports/balance.md) report’s balance change from the activity section:

1. Download the **Balance change from activity** report in the summary format. Make sure you select these columns: **Reporting Category**, **Gross**, and **Fee**.
2. Calculate the total fee by summing the values in these columns:
   - **Gross** column: fee, network cost, and contribution
   - **Fee** column: total

In the following example, you calculate the total fees: `-1000.00 + -0.50 + -0.40 + -1.00` to get the sum: `-1001.90`.

| reporting category        | gross        | fee       |
| ------------------------- | ------------ | --------- |
| `charge`                  | 100.00       | -4.00     |
| `refund`                  | -100.00      | 3.00      |
| `platform earning refund` | -0.10        | 0.00      |
| `fee`                     | **-1000.00** | 0.00      |
| `network cost`            | **-0.50**    | 0.00      |
| `contribution`            | **-0.40**    | 0.00      |
| `total`                   | -1001.00     | **-1.00** |

If you download the **Debits and credits** report in the summary format, you can see `1001.90` debited from the Fees expense account and credited to the Cash account.

The **Debits and credits** report doesn’t take corrections into account. If there were corrections issued for the month for which you’re attempting to reconcile reports, you must also consider the corrections shown in the [debits and credits report](https://docs.stripe.com/revenue-recognition/reports/debits-and-credits.md#review-corrections) (using the **Entries** filter set to **Corrections**) for all subsequent months. Any corrections that would have been booked to the `original_accounting_period` of the reconciliation month must be factored into the Stripe Revenue Recognition cash amount.

| debit | credit | amount  |
| ----- | ------ | ------- |
| Fees  | Cash   | 1001.90 |
