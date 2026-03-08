# Deposit automation

Use the connector to automate the bank reconciliation process.

To learn more and get a demo of the Stripe Connector for NetSuite, go to the [Stripe App Marketplace](https://marketplace.stripe.com/apps/netsuite-connector) and click **Install app**.

The Stripe Connector for NetSuite automates the bank reconciliation process by creating bank deposits in NetSuite for all of your [Stripe payouts](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-payouts-netsuite.md). The connector also automates fee calculation, the refund life cycle, the dispute life cycle, and handling of multiple currencies and subsidiaries. This means you only need to match the bank deposit record to the Stripe deposits on your bank statement, reducing the amount of manual work required each month. Every automated payment workflow that the connector supports includes deposit automation.

## How it works

When you use the connector, the automated bank reconciliation process occurs daily as follows:

1. The connector creates payments and refunds for each Stripe transaction, and posts these transactions in the Undeposited Funds account in NetSuite.
2. Stripe notifies the connector that a bank transfer (Stripe payout) has successfully arrived at your bank.
3. The connector creates a bank deposit record in NetSuite that contains all of the payments, refunds, and disputes from that day’s bank deposit.
4. The connector calculates any fees for processing, currency conversion, disputes, and refunds, and includes these as separate line items that post to your specified expense accounts.
5. The connector ensures that the deposit total and deposit date match your bank statement.
   A diagram providing a high level overview of the deposit automation flow outlined in this doc (See full diagram at https://docs.stripe.com/use-stripe-apps/netsuite/deposit-automation)

## See also

- [Charges in NetSuite](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-charges-netsuite.md)
- [Payouts in NetSuite](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-payouts-netsuite.md)
- [Disputes in NetSuite](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-disputes-netsuite.md)
- [Refunds in NetSuite](https://docs.stripe.com/use-stripe-apps/netsuite/stripe-refunds-netsuite.md)
