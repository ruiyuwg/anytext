# Stripe Connector for Google Play

Manage your revenue recognition in Stripe by importing data from Google Play.

The [Stripe Connector for Google Play](https://docs.stripe.com/stripe-data/import-external-data/connectors/google-play.md) lets you import subscription purchases from Google Play into Stripe Revenue Recognition automatically.

Some benefits of using Stripe Revenue Recognition for Google Play include:

- **Near real-time availability**: Set up daily, automated imports from Google Play. This minimizes manual work and reduces corrections at month-end.
- **Improved refund treatment**: Link refunds to original purchases, and generate more accurate refund journal entries that adjust deferred revenue instead of treating refunds as negative line items.
- **Audit by order**: Break down numbers on a transactional basis to help with audits.

## Get started

To import data from Google Play, [set up Stripe’s Connector for Google Play](https://docs.stripe.com/stripe-data/import-external-data/connectors/google-play.md). It can take up to 24 hours for your reports to reflect imported data.

### Backfill historical data

When you onboard, the Connector backfills up to 1 year of historical data.

### Handle Google transactions previously imported through manual data import

If you previously imported data from Google Play using the Stripe Revenue Recognition [data import](https://docs.stripe.com/revenue-recognition/data-import.md#general-import) feature, you want to avoid double-counting Google revenue upon switching to the automated Connector.

To migrate from manual data imports to the Google Play Connector, [delete](https://docs.stripe.com/revenue-recognition/data-import/manage-imported-data.md#transactions-deletion) all Google transactions from the past year that you uploaded manually through data import CSVs. The Connector import then replaces these deleted entries.

> #### Limit deletions to 1 year of history
>
> Don’t delete data import CSV uploads for Google transactions that occurred more than 1 year ago because the Connector only backfills up to 1 year of historical data.

## Examples

The following examples show how the Google Play Connector might record revenue in different scenarios.

### Subscription purchase

On December 3, a subscriber purchases 1 unit of a “News Plan Monthly” subscription.

- The subscription is valid for a month, which means the service period is from Dec 3 to Jan 3.
- The customer pays 31 USD.

At the end of January, the summary might show:

| Account          | December | January |
| ---------------- | -------- | ------- |
| External Asset   | +31      |         |
| Revenue          | +28      | +3      |
| Deferred Revenue | +3       | -3      |

- Revenue gets billed and paid in full on December 3.
- The bulk of the revenue is recognized in December, with a smaller part recognized in January.

### Subscription refund

On January 2, a subscriber purchases a three-month subscription that costs 90 USD.

- The service period is Jan 2 - April 2.
- On February 1, the customer receives a full refund, meaning:
  - The customer gets their money back.
  - Recognized revenue is offset by the refund in a contra revenue account.
  - The unused part of the subscription revenue gets cleared from the deferred revenue.

In this case, the refund reduces the external assets balance by 90 USD. The customer received 30 days of service, so you must add 30 USD back to the external refunds balance. The remainder of the deferred revenue, 60 USD in this case, is also cleared. At the end of April, the summary might show:

| Account          | December | January |
| ---------------- | -------- | ------- |
| Revenue          | +30      |         |
| Deferred Revenue | +60      | -60     |
| External Asset   | +90      | -90     |
| External Refunds |          | +30     |

### Free trial

Stripe doesn’t generate journal entries for free trials.

## Limitations

Stripe Revenue Recognition doesn’t support withholding taxes or commission fees reported by Google.

## Audit numbers

To view account balances for a Google order:

1. Click a number in the [Monthly summary](https://docs.stripe.com/revenue-recognition/reports/monthly-summary.md) section.
2. Click the **Invoice** tab to see a list of transactions. Transactions with the `GPA` prefix indicate Google orders.
3. Click any Google order to enter the audit view.
