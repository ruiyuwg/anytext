# Radar analytics center

Review fraud patterns and their impact on your business in the Dashboard.

The [Radar analytics center](https://dashboard.stripe.com/radar) in the Dashboard helps you analyze and understand the state of fraud for your business. Stripe provides several reports with information about how much fraud *Radar* (Stripe Radar helps detect and block fraud for any type of business using machine learning that trains on data across millions of global companies. It’s built into Stripe and requires no additional setup to get started) blocks for your business and the top fraud-related metrics for your business over time.

Using [Fraud insights](https://docs.stripe.com/radar/analytics/fraud-insights.md), [Sigma](https://stripe.com/sigma), or [Data Pipeline](https://stripe.com/data-pipeline), you can use [Radar rule attributes](https://docs.stripe.com/radar/rules/reference.md#supported-attributes) alongside your own dataset to:

- [Continuously improve your fraud management](https://stripe.com/guides/improve-fraud-management-with-radar-for-fraud-teams-and-stripe-data).
- Identify fraudulent payments.
- Create a deeper understanding of your customers.
- Analyze data in an environment that works best for you.

We’ve enhanced the depth and breadth of data we analyze in the new Radar analytics center view, which appears by default in your **Radar Overview** tab of the Dashboard. To return to the legacy overview page, use the **New overview** toggle.

# Radar Analytics center

> This is a Radar Analytics center for when radar-dash is rac. View the full page at https://docs.stripe.com/radar/analytics?radar-dash=rac.

The **Overview** tab of your Radar Dashboard acts as a command center to help you gauge the efficacy of your fraud prevention strategy and Radar interventions. From here, you can:

- View graphs detailing how fraud affects your business and how effectively Radar manages it.
- Compare your fraud intervention results to other businesses like yours.
- Track your fraud performance with network monitoring programs.
- Learn more about fraud risk management tools and practices.

## Configure your data set

### Specify your time period

By default, statistics reflect the prior 30 days of transaction history, following a 24-hour delay. To see data for a different time period:

1. Click the **Date** filter to open the time period editor.
2. Use the drop-down to choose a relative comparator.
3. Depending on the comparator you choose, set the parameters, such as *in the last 1 months* or *between 2/26/2024 and 3/18/2024*.
4. Click **Apply**.

### Choose how and which data appears

Click **Configure** to customize the way data displays in the charts.

- **Calculate rates by transaction volume** instead of payment count. Transaction volume is the cumulative amount charged for payments rather than the number of payments.
- **Calculate fraud rates by fraud arrival date** instead of payment date. Fraud arrival date is the timestamp when a transaction counts as fraud. This might be the time the issuer flagged it or the time the card holder filed a dispute.
- **De-duplicate multiple attempts per payment intent** so retries of the same payment count as a single instance.
- **Include setup intents** to see activity from off-session payments like subscriptions, invoices, and *on-demand* (When a customer stores their payment method with a business, they can make on-demand future purchases without re-authenticating, such as ordering a ride in their ride-share app) purchases.

## Rate charts

The rate charts help you evaluate your fraud prevention strategy. They provide details about the level of fraudulent activity affecting your Radar-screened transactions for a given time period and the portion of transactions you block. Together, these snapshots give you a complete view of how well you’re managing fraud.

Each chart includes the following elements:

- The rate totals show the aggregate ratios for each metric represented in the chart for the entire time period.
- The comparison icon indicates whether your rate is higher (exclamation icon) or lower (checkmark icon) than other Stripe businesses in your demographic. You can click the icon to see details.
- The bar chart shows the category ratios and rate at regular intervals for the time period. You can hover over points in the graph to see metrics for specific points in time.

The following sections describe the specific information provided for each rate category.

### Fraud

The **Fraud** panel shows the aggregate ratios of transactions that resulted in either a fraud dispute or an early fraud warning that hasn’t escalated to a dispute. For each fraud indicator, you see the percentage of total transactions in the time period and the number of transactions or total amount charged for transactions, depending on your [setting](https://docs.stripe.com/radar/analytics.md#choose-how-and-which-data-appears).

The totals section also shows your total fraud rate for the period with an icon indicating how your rate’s standing among comparable Stripe businesses. Hover over the icon to view detailed information about the fraud rates of similar Stripe businesses and Stripe businesses within the same geographic region.

The interactive bar chart compares the ratio of fraud attributed to disputes versus early fraud warnings. Regularly reviewing this information can help you identify and address spikes and avoid monitoring program repercussions. The chart also includes a line graph showing your fraud rate for the time period.

Enable the **Estimate worst case fraud rate** toggle to impose a second line graph showing the AI prediction of what fraud might be for the period, based on historical fraud arrival patterns. Cardholders can file disputes 120 days or more after a payment, so the rate can fluctuate over time.

> If you don’t see the **Estimate worst case fraud rate** toggle in your Dashboard, your fraud volume is too low for Stripe to accurately model possible fraud or you enabled [Calculate fraud rates by fraud arrival date](https://docs.stripe.com/radar/analytics.md#choose-how-and-which-data-appears).

Hover over specific points in the chart to view a modal with details for the specific date. Details include the following data, if applicable for the date:

- Rates of fraudulent disputes, early fraud warning payments, and possible fraud
- Number of fraudulent dispute payments, early fraud warning payments, and possible fraud payments
- Total amount charged in fraudulent dispute payments, early fraud warning payments, and possible fraud payments

### Disputes

The **Disputes** panel shows the aggregate percentages of disputes due to fraud compared with all other [types of disputes](https://docs.stripe.com/disputes/categories.md) for the time period. It also gives the dispute rate for the time period, calculated as the number of disputed payments of any type divided by successful payments during the same period. The icon indicates your rate’s standing among comparable Stripe businesses. Hover over the icon to view detailed information about the dispute rates of similar Stripe businesses and Stripe businesses within the same geographic region.

The interactive bar chart compares the ratio of disputes due to fraud to disputes of any other type, such as “product not received.” Disputes for reasons other than fraud don’t count against your fraud rate. The chart also includes a line graph showing your dispute rate for the time period.

Hover over specific points in the chart to view a modal with details for the specific date. Details include the following data, if applicable for the date:

- Rates of fraudulent disputes, other disputes, and total disputes
- Number of fraudulent disputes, other disputes, and total disputes
- Total amount charged in fraudulent dispute payments, other dispute payments, and total disputed payments

### Blocks

The **Blocks** panel shows the aggregate percentages of payments that Radar blocked due to a [high risk score](https://docs.stripe.com/radar/rules.md#machine-learning-risk-checks) compared to payments blocked by a custom rule. It also gives the block rate for the time period, calculated as the total number of blocked payments divided by successful payments during the same period. The icon indicates your rate’s standing among comparable Stripe businesses. Hover over the icon to view detailed information about the block rates of similar Stripe businesses and Stripe businesses within the same geographic region.

The interactive bar chart compares the ratio of high risk blocks to rule blocks. The chart also includes a line graph showing your block rate for the time period.

Hover over specific points in the chart to view a modal with details for the specific date. Details include the following data, if applicable for the date:

- Rates of high risk blocks, rule blocks, and total blocks
- Number of high risk blocks, rule blocks, and total blocks
- Total amount for high risk blocks, rule blocks, and total blocks

## Rule matches

The **Rule matches** section gives you insight into how your rules are performing. It shows which rules Radar acted on for all screened transactions during the time period. The top of the panel shows the total number of transactions processed during the time period and summary information for each rule action type:

- Percentage of transactions where a rule match resulted in the prescribed action.
- Total number of transactions where a rule match resulted in the prescribed action.

You can click any of the rule action type summary cards to view details about the rule matches within that type.

### Transactions

The **Transactions** detail shows a ratio graph of actions taken for all transactions processed during the time period. For each action type, you see the aggregate amount charged for all transactions where a rule match triggered the specified action. Click an action type to view its details page.

Below the totals, an interactive line graph shows the transactions for each rule action type in a timeline for the period. Click the graph to view a modal with the following statistics for each action type on that date:

- **Rate** is the percentage of total transactions on that date where a rule match resulted in the prescribed action.
- **Count** is the total number of transactions on that date where a rule match resulted in the prescribed action.
- **Volume** is the total amount charged for transactions on that date where a rule match resulted in the prescribed action.

### Blocked

The **Blocked** detail shows a ratio graph depicting the most matched block rules for the time period. You also see the number of, and total amount charged for, transactions that each of the most matched rules blocked.

Below the totals for the time period, you can review the bar graph showing the ratio of blocked payments for each of the most matched rules on each interval of the time period.

### 3DS

The **3DS** detail shows a ratio graph depicting the outcomes for transactions in the time period where a 3DS rule triggered 3DS authentication requests. You also see the total amount charged for 3DS requests that succeeded and failed.

Below the totals for the time period, you can review the bar graph showing the ratio of 3DS authentication outcomes for each interval of the time period.

### Allow

The **Allow** detail shows a ratio graph depicting the outcomes of payments occurring during the time period for transactions that matched an allow rule. You also see the total amount charged for allowed transactions in each outcome category:

- **Legitimate**: Allowed transactions where no further action occurred.
- **Disputes and Early fraud warnings**: Allowed transactions disputed for fraud or issued early fraud warning.
- **Refunded** Allowed transactions that were refunded.

Below the totals for the time period, you can review the bar graph showing the ratio of allowed payment outcomes for each interval of the time period.

### Review

The **Review** detail allows you to monitor how well your manual review rules foreshadow a need for more decisive action. It might also act as a reminder to take action on unreviewed transactions. The ratio graph compares the status of transactions that triggered a manual review during the time period. You also see the total amount charged for review transactions in each status category:

- **Currently in review**: No review action taken.
- **Approved**: Transactions reviewed and determined legitimate.
- **Rejected**: Transactions reviewed and either refunded or canceled.
- **Failed**: Transactions matched for review, but declined.
- **Disputed**: Transactions matched for review, then ultimately disputed. Transactions previously counted as either still in review or approved only count as disputed after the cardholder files a dispute.

Click any row in the table to open the **Rules** tab of the Dashboard, showing the **Rule performance** metrics.

Below the totals for the time period, you can review the bar graph showing the ratio of allowed payment outcomes for each interval in the time period.

# Legacy Radar overview

> This is a Legacy Radar overview for when radar-dash is legacy. View the full page at https://docs.stripe.com/radar/analytics?radar-dash=legacy.

## Overview Chart

When fighting fraud, it’s important to see what Radar is doing during the flow of attempted payments. The **Overview Chart** shows you how Radar helps reduce fraud. From left-to-right, you can see payments flow through the following steps in their lifecycle:

- **Authenticated** shows you how many payment attempts went through a 3DS challenge, and how many completed and failed.
- **Screened by Radar** shows how often Radar’s risk score and your Radar Rules blocked suspicious payments, sent others to your review queue, and allowed the rest to continue the payment attempt.
- **Disputed** shows the disputes on your account.

The table below the chart shows the numeric values for each column. Hover over a value to see its detailed information, with subcategories, counts, and subtotals.
![](https://b.stripecdn.com/docs-statics-srv/assets/overview-chart.11b383fa7a82a7768f56c2772a8e266b.png)

## Benchmarking

Without a comparison, it’s hard to tell what a particular fraud rate means. Is a 0.02% dispute rate good or bad? The answer depends on your business model, your region, and many other factors. Radar provides merchants with a comparison to similar businesses on key fraud metrics to help inform actions you can take to improve the performance of Radar.

Radar has a tool specifically for this—aggregated benchmarks for businesses in your region, and businesses that are similar to your own.
![](https://b.stripecdn.com/docs-statics-srv/assets/benchmarks.b3613b00faa97896806006794c96a4b9.png)

You can view benchmarks for:

- **Block rate** — The percentage of payments that are blocked by your Radar Rules, high risk scores, or otherwise blocked by Stripe.
- **Fraudulent dispute rate** — The percentage of payments that customers dispute as fraud.
- **Estimated false positive rate** — The estimated percentage of non-fraudulent payments that your Radar settings block. (A high value means that you might be blocking too many valid payments.)

You’ll see these benchmarks embedded in the charts and tables throughout [Radar’s analytics page](https://stripe.com/radar)—hover your mouse over these icons to view their details.

### Benchmarks and Privacy

Stripe makes sure other businesses can’t identify your benchmarks:

- We aggregate regional benchmarks across many businesses in your region, so it’s not possible to discern an individual competitor in such a large pool of businesses.
- Benchmarks for similar businesses only display if you have many dozens of businesses in your cohort. (If you don’t see any similar-business benchmarks, this is the reason. You’ll still see regional benchmarks, though, since those are large cohorts.)
- For a given benchmark rate, the value for each business gets one “vote," so even if a single company dominates your industry, that company is only a small weight in the benchmark.
- We only include businesses with a significant number of payments, since some of these fraud events are generally rare.

If you want to opt-out of benchmarking, [contact us](https://support.stripe.com/). If you opt out, your business won’t be included in benchmark calculations, though you can continue to see benchmarks in Radar’s analytics page.

## Fraud prevention

Radar’s algorithms evaluate payments for suspected fraud risk and take action accordingly. Radar blocks high risk payments by default and provides additional fraud tools (if you have [Radar for Fraud Teams](https://stripe.com/radar/fraud-teams)) so that you can specify your own criteria to block suspicious payments.
![](https://b.stripecdn.com/docs-statics-srv/assets/fraud-prevention-topline-metrics.a95d88656deb02a6f229b2d369f16768.png)

**Attempted payments** account for all card payment requests screened by Radar, including retried payment attempts on the same purchase.

> Card-present payments made through [Stripe Terminal](https://stripe.com/terminal) or recurring payments made through [Stripe Billing](https://stripe.com/billing) aren’t screened by Radar.

**Blocked payments** represents the number of attempted payments that Radar blocked. Payments are broadly blocked by Radar for two reasons:

- Radar’s AI model evaluates the payment as high risk and blocks it by applying the default [high risk block rule](https://docs.stripe.com/radar/rules.md#built-in-rules). Radar sets the blocking threshold at 75 by default and [Radar for Fraud Teams](https://stripe.com/radar/fraud-teams) allows you to adjust it in the [risk settings](https://docs.stripe.com/radar/risk-settings.md).
- The payment matches one of your other [block rules](https://dashboard.stripe.com/settings/radar/rules).

**Block rate** is the percentage of attempted payments that were blocked by Radar.

**Volume, blocked payments** is the monetary value of attempted payments that Radar blocked. (The volume shown is in your default currency, using estimated conversion rates for payments from other currencies.)

> Stripe might block a payment for other reasons *not* included here (for example, payments initiated by cards on deny-lists that are globally known to be fraudulent or payments made from sanctioned countries).
>
> Additionally, [SetupIntents](https://docs.stripe.com/payments/setup-intents.md)—which let you save customer credentials for *future* payments—aren’t accounted for here even though they’re screened by Radar.

The following section contains two views that help you understand changes to your block rate over the selected time period, along with the proportion of payments blocked by both Radar’s AI model and your block rules.
![](https://b.stripecdn.com/docs-statics-srv/assets/block-rate-chart-and-table-with-benchmarks.971e9f5c2fd02f38b205cbfaade93092.png)

**Radar — High risk score** accounts for the number of blocked payments that were blocked *due to high risk*, their total monetary volume, and the corresponding block rate (out of all attempted payments). These are payments that received a Radar risk score greater than your high risk threshold and were consequently blocked by the default [high risk block rule](https://docs.stripe.com/radar/rules.md#built-in-rules).

The **estimated false positive rate** is the estimated probability that Radar incorrectly blocked a non-fraudulent payment. This is derived using a combination of the Radar risk level of these payments and global experiments across all payments on the Stripe network.

**Radar — Rules** similarly, accounts for the number of blocked payments that were blocked by one of your other [block rules](https://dashboard.stripe.com/settings/radar/rules), their total monetary volume, and the corresponding block rate (out of all attempted payments).

Depending on your business needs, your block rate or false positive rate, you can adjust the amount of fraud blocked by Radar’s AI model. [Radar for Fraud Teams](https://stripe.com/radar/fraud-teams) allows you to adjust the risk threshold (75 by default) at which payments are blocked in their [risk settings](https://docs.stripe.com/radar/risk-settings.md). As you increase the risk score at which you block, you allow more overall payments through but you might also allow more fraud. As you decrease the risk score where you block, you probably block more fraud but also block more overall payments.

> Closely monitor your fraudulent dispute rate and disputes activity to understand the impact of changing risk thresholds. In general, follow Radar’s [best practices](https://docs.stripe.com/radar/optimize-fraud-signals.md) to make sure your integration makes the most of Radar’s AI models.

## Fraudulent disputes

Use the fraudulent disputes section to analyze fraudulent dispute activity for your business over time. Fraudulent disputes are those that were opened with fraud as the [specified reason](https://docs.stripe.com/disputes/categories.md).
![](https://b.stripecdn.com/docs-statics-srv/assets/fraud-disputes-section-with-benchmarks.10f57665c4aa462a62e87ff41bbe473b.png)

This chart displays fraudulent dispute rate (in solid line) as a percentage of payments in the selected time period that have been disputed for fraud.

Cardholders might take some time to dispute a payment, but almost all disputes arrive within 120 days after the payment. Therefore, for the trailing 120 days, this chart displays:

- A partial dispute rate (in solid line) for payments that have already been disputed.
- An estimated projection of the maximum dispute rate (in dashed line) after all disputes for these more recent payments have arrived.

The final dispute rate likely falls somewhere between the partial dispute rate and the projected maximum dispute rate, which is based on historical dispute statistics across the Stripe network and dispute activity on your account.

The fraudulent dispute rate chart tracks the rate of fraudulent disputes on payments based on the payment created date and not when it was disputed. This is a more accurate representation of fraud for your business, because it shows which specific payments were disputed for fraud. For example, you could use the fraud rate chart to see if payments made during a particular holiday sale resulted in more fraudulent disputes than usual.

The **average time to dispute** metric measures the amount of time, on average, it took for payments in the selected time range to be disputed for fraud. The expected range is 1–120 days.

## Disputes

This section helps you identify trends in payments that were disputed by the cardholder for any [specified reason](https://docs.stripe.com/disputes/categories.md). Look for unexpected changes to disputes activity to identify changes to fraud patterns in your business and take action to [prevent disputes and fraud](https://docs.stripe.com/disputes/prevention.md).
![](https://b.stripecdn.com/docs-statics-srv/assets/disputes-section.ac0037376f90118327cbe14ab537710c.png)

Aggregated totals at the top of this section account for the total number of **disputes received**, the number of currently **open disputes** that you must [decide](https://docs.stripe.com/disputes/responding.md#decide) to accept or challenge, and the associated **disputed volume** (the total monetary volume of payments disputed, not including any dispute fees). The **win rate** is the percentage of disputes received that you won.

> This data only includes [inquiries](https://docs.stripe.com/disputes/how-disputes-work.md#inquiries) (which can act as early warnings of fraudulent payments) when they escalate into real disputes.

The **disputes received** chart represents dispute activity, plotting disputes opened by dispute creation date for successful payments in the specified time period. A tabular breakdown of disputes received by [dispute reason](https://docs.stripe.com/disputes/categories.md) accompanies this chart, along with information about how many disputes you responded to with supporting evidence, and how many you won. The breakdown only displays the top three most frequently observed dispute types; you can [download](https://docs.stripe.com/radar/analytics.md#downloading-and-inspecting-data-sources) the dispute report for a more granular view into all dispute reasons.

## Manual reviews

Radar for Fraud Teams users can use this section to analyze the current state and outcomes of payments that were [placed in review](https://docs.stripe.com/radar/reviews.md).
![](https://b.stripecdn.com/docs-statics-srv/assets/manual-reviews-section.f6513b47a973efb5d647ffddb45207f7.png)

Check out these [best practices](https://docs.stripe.com/radar/reviews.md#best-practices) to get the most out of reviews and perform them efficiently.

The **sent to manual review** chart on the left displays the number of payments sent to your review queue within the specified time period. As you review payments and take action, the tabular breakdown on the right updates to display how many reviews were approved, refunded, disputed or are currently in review.

> If a customer [disputes](https://docs.stripe.com/disputes.md) a payment that’s currently in review, the review automatically closes.

The **dispute rate of approved reviews** represents the percentage of reviews that were approved after investigation but eventually disputed by the cardholder. While cardholders dispute payments for several reasons, you should carefully review payments before approving them to make sure this percentage stays reasonably low.

## Using the dashboard

### Handling multiple currencies

To give you a comprehensive view of fraud trends for your entire business, this Dashboard aggregates your fraud data across all currencies and uses daily foreign exchange rates to convert all monetary amounts into your default currency.

### Data availability and date range

Stripe computes all of your data daily, beginning at 12:00am UTC. Data for each day includes all account activity that takes place between 12:00am UTC and 11:59pm UTC. Radar Analytics data is available in this Dashboard within 24 hours.

When loading the page, the report defaults to displaying the previous six months. You can select previous months in the drop-down menu, or choose the trailing 4-week, 3-month, 6-month, or 1-year periods. All charts and tables adjust to reflect the date selection.

### Downloading and inspecting data sources

![](https://b.stripecdn.com/docs-statics-srv/assets/download-report.b7d0c43193abccc87895e141f3e8b613.png)

Each chart has a download link in the top right corner that you can use to download a CSV of the data in the chart. Users with access to [Sigma](https://stripe.com/sigma) can further analyze their data by using the **View in Sigma** link, also on the top right of every chart. By default, Sigma opens the SQL query that generates the data included in the chart and the CSV file. You can modify the query to dig deeper into any trends that you want to better understand.

## Card monitoring programs

*Card networks* (A network that processes the transactions of a particular card brand. It might be an intermediary in front of an issuing bank as with Visa or Mastercard, or a standalone entity as with American Express) track your fraud and dispute rates as part of their risk evaluation process. If your rates exceed their defined thresholds, they can place your business in a monitoring program that assesses fines and fees until you maintain fraud and disputes at acceptable levels.

Radar analytics monitors your fraud and dispute rates against the thresholds for the card monitoring programs and provides your current status. Click a program card to see details about the program, including the penalties associated with rates in excess of the threshold.
