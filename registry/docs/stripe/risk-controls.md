# Risk controls

Adjust how aggressively you block fraud for your business with Radar for Fraud Teams.

# Risk controls

> This is a Risk controls for when radar\_risk\_controls is risk-controls. View the full page at https://docs.stripe.com/radar/risk-settings?radar\_risk\_controls=risk-controls.

## Settings

To adjust the default risk score for blocking payments, use Radar for fraud teams. Go to the [Radar risk controls](https://dashboard.stripe.com/settings/radar/risk-controls) page to make your adjustments.
![Screenshot of the drawer you see when adjusting your Radar risk controls](https://b.stripecdn.com/docs-statics-srv/assets/new-overview.242805a555667db40c3cbdc777f0a5b8.png)

The risk settings dialog shows your block threshold, your dispute rate, and other important statistics

> Adjusting the risk score applies to card, ACH, and SEPA Direct Debit payments. To test the outcome a different threshold might have on payments from a specific payment method, select a payment method and test the new threshold to view affected payments.

Stripe Radar gives each charge a numerical [risk score](https://docs.stripe.com/radar/risk-evaluation.md#risk-outcomes) between 0 and 99, where 0 is the lowest risk and 99 highest.

### Block payments

The default *blocking threshold* is 75, meaning Radar blocks charges with a score of 75 or higher. If you decrease your threshold, you’ll block more payments.

You must enable [the default block rule](https://docs.stripe.com/radar/rules.md#built-in-rules) or an equivalent custom rule for Radar to block transactions based on this threshold.

### Manual reviews

The default *manual review threshold* is 65, meaning Radar sends charges with a score of 65 or higher to manual review. Changing the blocking threshold automatically changes the manual review threshold accordingly.

You must enable [the default block rule](https://docs.stripe.com/radar/rules.md#built-in-rules) or an equivalent custom rule for Radar to send transactions to manual reviews based on this threshold.

### Adjust your threshold

When you change your blocking threshold, you see the following statistics:

| Metric                                                             | Description                                                                                                                                                                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estimated fraud volume that is blocked or allowed**              | The estimated volume of fraudulent payments that will be blocked or allowed at the new blocking threshold.                                                                                                                              |
| **Estimated good volume that is blocked or allowed**               | The estimated volume of good payments that will be blocked or allowed at the new blocking threshold.                                                                                                                                    |
| **Estimated previously blocked volume that is blocked or allowed** | The estimated volume of previously blocked payments that will be blocked or allowed at the new blocking threshold. Because these payments were blocked and never processed, some of these payments might be fraudulent.                 |
| **Fraud rate by volume**                                           | The percent of payments by volume that have received a dispute, an Early Fraud Warning (EFW), or were refunded as fraud.                                                                                                                |
| **Block rate by volume**                                           | The percent of payments by volume that were attempted but were blocked by Radar or by Stripe. Payments are blocked by Stripe to protect you from card testing and other risks that affect all users, regardless of your usage of Radar. |

To access the ability to increase risk score thresholds beyond their defaults, [contact us](https://support.stripe.com/contact).

You can customize the default threshold to fit your own business needs. Setting the risk score threshold requires you to consider a tradeoff between how much fraud Radar blocks and how many payments it allows.

### Block more fraud

If your business is experiencing higher rates of fraud, you can decrease the score for blocking payments. To determine what risk score is right for your business, hover over the **Block additional payments by setting your acceptable risk score** chart.
![Screenshot that shows the chart with good and fraudulent payments by risk score](https://b.stripecdn.com/docs-statics-srv/assets/new-blocked-volume-chart.404c30c15031753d0031d134a9668e71.png)

This chart shows how many fraudulent and good payments you would’ve blocked if you set your threshold at that risk score. Here, you can see:

| Metric                    | Description                                                                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume blocked**        | Volume of fraudulent and good payments would be blocked.                                                                                                                                             |
| **% blocked**             | The percent of fraudulent and good payments that are blocked respectively. For example, blocking at 65 would result in 55% of your fraud getting blocked at the expense of only 1% of good payments. |
| **# of payments blocked** | Number of fraudulent and good payments would be blocked.                                                                                                                                             |

Ultimately, you must decide your tradeoff tolerance between how much fraud versus good payments you block.

### Allow more payments

If your business has low fraud rates and costs, you might want to increase the default blocking score so that you can allow more payments overall.
![Screenshot that shows the chart with blocked payments by risk score](https://b.stripecdn.com/docs-statics-srv/assets/new-allowed-volume-chart.a565ce92730d38bb0bac3c72940c4a98.png)

This chart shows how many payments you would allow if you set your threshold at that risk score. Here, you can see:

| Metric                    | Description                               |
| ------------------------- | ----------------------------------------- |
| **Volume allowed**        | Volume of payments would be allowed.      |
| **# of payments allowed** | Number of payments that would be allowed. |

If you’re increasing the risk score for blocking charges, we can’t accurately predict the impact of this change on your fraud rate (as some charges that were previously blocked will now be allowed). Be careful when adjusting the risk score in this direction.

# Risk settings

> This is a Risk settings for when radar\_risk\_controls is risk-modes. View the full page at https://docs.stripe.com/radar/risk-settings?radar\_risk\_controls=risk-modes.

## Risk settings

When setting up Radar in the Dashboard, the **Edit Risk setting** page of the modal allows you to choose following risk settings that automatically adjust your fraud protection thresholds based on your business needs and tolerance.

- **Maximize protection**: Prioritize security with strict fraud screening across your payments.
- **Balance risk and revenue**: Balance legitimate transactions while maintaining security.
- **Maximize revenue**: Maximize conversion with minimal losses due to fraud.

When you change your Risk setting, the modal displays the impact to fraudulent and legitimate transactions with the following statistics:

| Metric                      | Description                                                                                                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estimated fraud / fraud** | The estimated count and volume of fraudulent payments with the new mode based on fraud arrival patterns. When your payment or fraud volume is low, we show your actual count and volume instead of an estimate. |
| **Estimated good payments** | The estimated count and volume of non-fraudulent payments with the new mode.                                                                                                                                    |

### Set up Radar manually

To access the ability to increase risk score thresholds beyond their defaults, [contact us](https://support.stripe.com/contact).

You can also manually set a risk score threshold. Setting the risk score threshold requires you to consider a tradeoff between how much fraud Radar blocks and how many payments it allows.

#### Block more fraud

If your business is experiencing higher rates of fraud, you can decrease the score for blocking payments. To determine what risk score is right for your business, hover over the **Block additional payments by setting your acceptable risk score** chart.
![Screenshot that shows the chart with good and fraudulent payments by risk score](https://b.stripecdn.com/docs-statics-srv/assets/new-blocked-volume-chart.404c30c15031753d0031d134a9668e71.png)

This chart shows how many fraudulent and good payments you would’ve blocked if you set your threshold at that risk score.

#### Allow more payments

If your business has low fraud rates and costs, you might want to increase the default blocking score so that you can allow more payments overall.
![Screenshot that shows the chart with blocked payments by risk score](https://b.stripecdn.com/docs-statics-srv/assets/new-allowed-volume-chart.a565ce92730d38bb0bac3c72940c4a98.png)

This chart shows how many payments you would allow if you set your threshold at that risk score. Be careful when adjusting the risk score in this direction.

## Fraud Controls (Private preview)

You can find the following controls in the **Risk controls** section of the Radar Dashboard.

### Adaptive 3DS

Radar’s adaptive 3DS control adds an extra layer of authentication during checkout to help you prevent fraud. Stripe’s machine learning runs in the background to authenticate medium-risk payments.

In most cases, *3DS* (3D Secure (3DS) provides an additional layer of authentication for credit card transactions that protects businesses from liability for fraudulent card payments) authentication happens with no action required by the customer. If anything looks unusual, the cardholder’s bank might ask the customer to confirm their identity through a security challenge. If 3DS authenticates a payment, the [liability](https://docs.stripe.com/payments/3d-secure/authentication-flow.md#disputed-payments) for any fraud-related disputes for that payment typically shift from the seller to the issuer. This means that in most cases, the seller isn’t responsible for fraud costs on 3DS-authenticated payments.

Stripe triggers 3DS automatically if required by a regulatory mandate such as [Strong Customer Authentication](https://stripe.com/guides/strong-customer-authentication) (SCA). Disabling adaptive 3DS doesn’t prevent 3DS from being triggered in cases where it’s required for compliance. Authentication fraud prevention control also isn’t available in testing environments.

### Dynamic risk threshold

> Dynamic risk threshold applies to card payments only.

Radar’s dynamic risk threshold control automatically adjusts your fraud blocking thresholds according to detected risk. Stripe’s machine learning continuously monitors for fraud trends and temporarily lowers the blocking threshold to a more aggressive level during detected fraud attacks. After the attack subsides, it readjusts back to your default block thresholds.

The control operates transparently in the background. You don’t need to create custom rules or adjust [settings](https://docs.stripe.com/radar/risk-settings.md#settings) during an attack. Dynamic risk threshold honors your manual threshold settings if they’re more aggressive. You can monitor the performance and review affected transactions through detailed analytics in your Dashboard. This automated approach reduces your need to:

- Manually detect fraud patterns
- Create emergency rules
- Remember to adjust settings back after an attack ends

Dynamic risk threshold is available to you if you use [Radar for Fraud Teams](https://stripe.com/radar/fraud-teams). You can enable or disable it in the **Radar Risk controls** section of the Dashboard. You can also view backtesting results showing how it would have performed during past fraud incidents.

## See also

- [Risk Evaluation](https://docs.stripe.com/radar/risk-evaluation.md)
- [Review](https://docs.stripe.com/radar/reviews.md)
- [Integration Checklist](https://docs.stripe.com/radar/optimize-fraud-signals.md)
