# Fraud insights

Review fraud trends specific to your business so you can tailor your strategy.

Building an effective fraud fighting strategy requires understanding the specific drivers of fraud for your business. If you use *Radar for Fraud Teams* (Radar for Fraud Teams helps you fine-tune how Radar operates, get fraud insights on suspicious charges, and assess your fraud management performance from a unified dashboard), you can access the [Insights](https://dashboard.stripe.com/radar/insights) tab of the Radar page in your Dashboard to:

- **Visualize trends** in transaction volume and fraud rates over time.
- **Identify combinations of Radar attributes** that have material impact on your fraud rates.
- **Inspect high-level patterns** to verify your findings in individual transactions.
- **Adjust your [Radar rules](https://docs.stripe.com/radar/rules.md) or [Risk controls](https://docs.stripe.com/radar/risk-settings.md#risk-controls)** based on the patterns you discover.

## Configure your view

You can customize the data displayed on the Insights page by selecting a time period, defining what types of payments to view, and applying specific attribute filters.

The initial Insights view applies the following default filters:

- **Elevated risk scores**: Shows only transactions with a risk score greater than 65.
- **High velocity**: Shows only transactions on cards where the total number of charges per card number is greater than 10 per hour.

### Specify the time period

By default, we display transactions in near real-time for the prior 3 months of transaction history. To see data for a different time period, click the **date range** filter to open the time period editor and select either a default or custom range. Click **Apply** for the data to update to the new time period you set.

### Choose payment status

By default, the page shows all successful payments, but you can toggle the **Payment status** filter to focus specifically on fraud or disputes. Options include the following:

- **All payments**: Includes all payment outcomes (successful, blocked, and declined)
- **Successful payments**: Includes only successful payments
- **All fraud**: Payments disputed for fraud, reported as early fraud warning (EFW), or refunded as fraud
- **Disputes**: Any disputed payment, regardless of [category](https://docs.stripe.com/disputes/categories.md)
- **Early fraud warnings**: Issuer-flagged suspicious payment [EFWs](https://docs.stripe.com/disputes/how-disputes-work.md#early-fraud-warnings)

### Filter by attributes

You can refine your view by applying filters based on specific Radar attributes. Common filters include Risk score, Card BIN, Card brand, Card country, and IP country.

To see more options, click **More filters** to select from a comprehensive list of Radar attributes available for your account.

## Visualize patterns

After you configure your filters, the page displays summary metrics and a pivot chart to help you visualize the data.

### Summary metrics

The top of the view shows key metrics for the selected data set, such as the total Fraud volume and the count of Disputed payments.

### Pivot chart

The pivot chart visualizes transaction counts over time, allowing you to spot trends and anomalies. You can adjust your grouping by either a time window or a transaction attribute:

- Time window: You can adjust the time granularity of the chart to group payments by Day, Week, or Month.
- Attribute: You can pivot the data by a selected dimension like Risk score, Card Brand, or Card Country. For example, selecting “Risk score” stacks the bar chart segments by risk score ranges (0-9, 10-19, and so on), allowing you to see how the risk distribution changes over time.

## Investigate transactions

Below the pivot chart is the transaction list. This view displays individual payments that match your current filters, enabling you to verify if a broad pattern corresponds to a specific type of fraud attack.

The list provides key details for each transaction, including:

| Column         | Description                                               |
| -------------- | --------------------------------------------------------- |
| Risk score     | The numeric risk score assigned by Stripe’s AI models.    |
| Amount         | The value and currency of the transaction.                |
| Status         | The outcome of the payment (Succeeded, Failed, Disputed). |
| Customer       | The customer name or ID associated with the payment.      |
| Payment method | The card brand and last 4 digits.                         |
| Created        | The date and time the transaction occurred.               |

Clicking on any row in the list takes you to the detailed page for that specific transaction.

## Take action

After identifying a fraud pattern—such as a spike in fraud from a specific card country or high-velocity attempts from a single IP range—you can take action to prevent future losses.

### Act on individual payments

Consider refunding payments that are at high risk of being fraud. Click the overflow menu (⋯) next to the transaction, then click **Refund payment**.

### Enable global controls

- **Enable Risk controls**: If you spot patterns such as high fraud rates on non-3D Secure authenticated payments or an increase in payments that are triggering early fraud warnings, consider enabling relevant [Risk Controls](https://docs.stripe.com/radar/risk-settings.md#risk-controls).
- **Write custom rules**: For more specific patterns, you can write [custom rules](https://docs.stripe.com/radar/rules.md) targeting the attributes you identified in your investigation.
