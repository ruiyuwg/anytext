# Map to your chart of accounts

Map transactions from the Stripe default accounts to the chart of accounts in your general ledger.

You can customize Stripe Revenue Recognition reporting to use your General Ledger (GL) chart of accounts instead of using the default [Stripe accounts](https://docs.stripe.com/revenue-recognition/methodology.md). You can configure a rule to map transactions by product, shipping region, or invoice metadata to your GL account. Stripe applies your custom mappings to the [CSV reports](https://docs.stripe.com/revenue-recognition/reports.md#statements) you download and also when you [audit your revenue numbers](https://docs.stripe.com/revenue-recognition/reports/audit-numbers.md). A mapping rule consists of the following:

| Mapping rule attribute | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stripe account         | The [Stripe default account](https://docs.stripe.com/revenue-recognition/methodology.md#chart-of-accounts) that you want to override.                                                                                                                                                                                                                                                                                                             |
| GL account             | The name of the GL account you want to override the Stripe account with.                                                                                                                                                                                                                                                                                                                                                                          |
| GL account number      | The number corresponding to the GL account.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Time period            | The time period the mapping applies to.

An [invoice line item](https://docs.stripe.com/api/invoice-line-item/object.md) fulfills the time period requirement if the finalization time of the invoice is within the specified time period.

A [charge](https://docs.stripe.com/api/charges.md) fulfills the time period requirement if the balance transaction it corresponds to has a creation time that’s within the specified time period. |
| Condition              | An optional criteria to map transactions by product, shipping region, or invoice metadata. If not specified, all transactions involving the configured Stripe account are mapped to the GL account.                                                                                                                                                                                                                                               |
| Status                 | **Active**: The mapping rule is active and all transactions are mapped as per the rule.

**Processing**: The rule is processing. On completion, the rule is active and transactions are mapped accordingly.                                                                                                                                                                                                                                     |

## Configuring a mapping rule

Mapping rule configuration is a 4-step process—click the add mapping button on the accounts mapping page to begin.

1. **Select Stripe account**: Select the default Stripe account from the dropdown for which you want to create the rule.
2. **Select GL account**: You can select your GL account from the dropdown or add one if you can’t find it in the dropdown. When setting up the rules for the first time, you have to add these accounts by specifying the GL account name and number. You have to specify at least a name or a number to add the account.
3. **Specify time period**: The time period is the time frame in which the mapping rule is applicable. Select a start and end date from the dropdown to configure the time period. If you specify an time period that overlaps with closed accounting periods, you’ll see corrections in your report in the current open accounting period. You can reopen the past accounting periods corresponding to the time period to avoid corrections.
4. (Optional) **Specify mapping condition\***: You can specify a mapping condition on any of the following attributes:
   - **Product**: If you have product specific accounts in your GL, you can classify your transactions based on the products that you’ve configured in the Stripe Dashboard.
   - **Shipping region**: Similar to products, you can specify the shipping region to map transactions to the relevant GL account. Only ISO-compliant country and state codes are supported.
   - **Invoice metadata**: You can configure a custom rule using invoice metadata if your GL accounts don’t track transactions by product or shipping region. Create a rule by selecting a key and adding a value. The keys are from metadata you created in past invoices.\*\*
   - **Price**: Use Price IDs configured in the Stripe Dashboard to map transactions to the relevant GL account.
   - **Credit note**: Specify the credit note line item description to map transactions to the relevant GL account.
   - **Coupon**: Use Coupon IDs configured in the Stripe Dashboard to map transactions to the relevant GL account.

Click **Map chart of accounts** to create the mapping rule and for Stripe to [process the data](https://docs.stripe.com/revenue-recognition/data-freshness.md). The rule’s status changes to active when the data processing is complete, and you can then download reports with the mapped GL accounts.

## Mapping rule configuration example

The following example involves 3 different products:

- Product A: Annual subscription cost of 1,200 USD
- Product B: Annual subscription cost of 2,400 USD
- Product C: Annual subscription cost of 3,600 USD

If you sell 1 subscription each for A, B, and C in January, your journal entry at the end of the month appears as follows without account mapping:

| Account          | January   |
| ---------------- | --------- |
| Revenue          | +600 USD  |
| Deferred Revenue | +6600 USD |

However, the user has 3 separate revenue accounts in its GL, say revenue\_A, revenue\_B, and revenue\_C for tracking revenue corresponding to these 3 products. The user has to do manual work to identify revenue in these accounts before posting to its GL.

If you have product-specific accounts in your General Ledger that you want to map to, you can create 3 mapping rules:

| Stripe account | GL account number | GL account | Condition | Time period           |
| -------------- | ----------------- | ---------- | --------- | --------------------- |
| Revenue        | 10001             | revenue\_A  | Product A | Jan 2026 - Indefinite |
| Revenue        | 10002             | revenue\_B  | Product B | Jan 2026 - Indefinite |
| Revenue        | 10003             | revenue\_C  | Product C | Jan 2026 - Indefinite |

After you set up these rules, your journal entries will contain three line items reflecting the revenue distribution for each product. This can help you streamline the process of posting to your GL.

| GL account number | Account          | January   |
| ----------------- | ---------------- | --------- |
| 1001              | revenue\_A        | +100 USD  |
| 1002              | revenue\_B        | +200 USD  |
| 1003              | revenue\_C        | +300 USD  |
| -                 | Deferred Revenue | +6600 USD |

If you need to create multiple mapping rules at once, you can use our [bulk account mapping feature](https://docs.stripe.com/revenue-recognition/chart-of-accounts/bulk-account-mappings.md#upload-mappings) to upload mappings via CSV file. This reduces manual effort and minimizes the risk of errors when configuring numerous GL accounts.

\* For a default Stripe account, you can only pick one attribute to create a rule. Please [create a ticket](https://support.stripe.com/contact/email?topic=financial_reports) on our support page if you have any questions.\*\* Don’t import any personally identifiable information and/or protected health information.
