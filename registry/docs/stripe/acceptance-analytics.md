# Acceptance analytics

Understand what affects payment acceptance and why payments fail or are declined.

Use the [Acceptance](https://dashboard.stripe.com/acceptance) page to analyze your payment success rate and network authorization rate, and view pivot reports for common criteria. You can identify where payments fail and why they fail, and use this information to help increase your revenue.

> Optimization calculations are estimates and aren’t guarantees of any outcomes. The data we provide is intended to help inform your decision-making, in order for you to make your own independent determinations about whether to use these features. The calculation methodology for estimated impacts is also subject to change without prior notice. Refer to this page regularly to ensure you have the latest understanding of the estimated optimization feature benefits.

## Available data

The **Acceptance** page includes data for attempted and authorized card payments:

- **Attempted payments**: Stripe sends the details of a customer’s payment attempt through a *card network* (A network that processes the transactions of a particular card brand. It might be an intermediary in front of an issuing bank as with Visa or Mastercard, or a standalone entity as with American Express), such as Visa, Mastercard, or China UnionPay. The card network sends the request to the *card issuing bank* (The entity that issued a payment card to a cardholder. This could be a bank, such as with the Visa or Mastercard network, or it could be the card network itself, such as with American Express), which authorizes or [declines](https://docs.stripe.com/declines.md) the payment.

- **Authorized payments**: The card issuing bank validates the customer’s card details and reserves sufficient funds for the transaction. The issuing bank approves the payment and secures the amount, but waits to transfer funds until after you capture the transaction. Authorized payments don’t consider whether the payments were ultimately captured. Learn more about the distinction between [authorization and capture](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method.md).

## Configure your data set

You can apply the filters to all metrics, reports, and tables on the **Acceptance** page. Stripe processes your data daily starting at 12:00 PM UTC and ending at 11:59 PM UTC. All data shown is in the UTC time zone.
![Filters for acceptance analytics](https://b.stripecdn.com/docs-statics-srv/assets/acceptance-filters-old.1e474c5f0210ec309fe3368a8c5ce340.png)

Filters on the Acceptance page

### Specify the account type

If you use [Organizations](https://docs.stripe.com/get-started/account/orgs.md), you can see the acceptance analytics for each account:

1. In the Dashboard, click the account picker, and select your organization.
2. To open the **Acceptance analytics** page, go to **Payments** > [**Analytics**](https://dashboard.stripe.com/org/acceptance).
3. (Optional) To view analytics for a specific account, under the filters, click **Account**, and select an account.
4. (Optional) By default, the acceptance analytics for Organizations are displayed in USD. To change the displayed currency of your data, click **Show in USD**, and select your preferred currency from the dropdown. The displayed currency setting is different than the [currency filter](https://docs.stripe.com/payments/analytics/acceptance.md#specify-currency).

### Specify the processor

Apply the processor filter to display acceptance analytics for a specific payment processor. Based on your configuration, you might accept payments from other processors, in addition to Stripe.

To specify a processor, click **Processor**, select the processor, and click **Apply**. You can choose to view multiple processors.

### Specify Connect

Connect platforms can see direct charge activity aggregated across all of their connected accounts. To see data from Standard accounts, platforms must enable [Platform controls](https://docs.stripe.com/connect/platform-controls-for-stripe-dashboard-accounts.md).

- To include connected accounts data, click **Include connected accounts**.
- To exclude connected accounts data, click **Don’t include connected accounts**.

### Specify the payment success rate or the authorization rate

Apply the rate filter to display analytics for a payment success rate or an authorization rate.

#### Payment success rate

The payment success rate measures the success of all payment attempts throughout the payment process, including 3DS authentication, Stripe or Radar blocks, and card network authentication. To calculate the rate, we divide the number of charges authorized by the card network by the number of unique payment attempts submitted through Stripe. We include all payment attempts, except [invalid API calls](https://docs.stripe.com/declines.md#invalid-api-calls).

The types of payment attempts include:

- Failed 3DS authentication payments
- Blocked payments
- Issuer declines
- Authorized payments

To specify a payment success rate, click **Payment success rate**.

#### Authorization rate

The authorization rate (also known as network authorization rate) measures the success of payment attempts that reach the card networks. To calculate the rate, we divide the number of payments authorized by the card issuer by the number of unique payment attempts submitted to the card network for authorization. We exclude [invalid API calls](https://docs.stripe.com/declines.md#invalid-api-calls), payments that fail 3D Secure authentication, and [blocked payments](https://docs.stripe.com/declines.md#blocked-payments) in the denominator because these failures occur before Stripe sends the authorization request to the issuer.

The types of payment attempts include:

- Issuer declines
- Authorized payments

To specify an authorization rate, click **Authorization rate**.

> You can’t specify an authorization rate if you set the processor filter to a non-Stripe processor. Stripe doesn’t have access to non-Stripe data.

#### Example acceptance rate calculation

#### Example rate calculation

The following is an example calculation for payment success rate and authorization rate:

| Calculation component                              | Component value           |
| -------------------------------------------------- | ------------------------- |
| Total payment requests to Stripe                   | 103,000                   |
| Invalid API requests                               | (3,000)                   |
| Valid API requests                                 | 100,000                   |
| Failed authentication attempts                     | (1,000)                   |
| Blocked payment attempts                           | (1,000)                   |
| Total payment attempts that reach the card network | 98,000                    |
| Authorized payments                                | 93,000                    |
| Payment success rate                               | 93% = (93,000 / 100,000)  |
| Authorization rate                                 | 94.9% = (93,000 / 98,000) |

### Specify the raw rate or the deduplicated rate

Some payment attempts are repeat attempts of the same unique purchase. For example, if the original payment attempt is declined because the CVC is wrong, the customer must resubmit payment after correcting the error. We include all payment attempts, except invalid API requests.

#### Raw rate

The raw rate includes all payment attempts (including retries) to make the same purchase.

To specify the raw rate, click **Raw**.

#### Deduplicated rate

The deduplicated rate groups the retried payment attempts together and calculates the acceptance rate based on the final outcome.

Stripe groups payment attempts as follows:

- For payments through [Stripe Invoices](https://docs.stripe.com/api/invoices.md), we group attempts on the same Invoice.
- For payments with [Customers](https://docs.stripe.com/api/customers.md), we group attempts on the same Customer, if they’re attempted close to each other in time and for the same amount.
- For all other payments, we group on the same card number for attempts close to each other in time and for the same amount.

When looking at deduplicated rates, you might see a temporary drop in the success rate or authorization rate for the past month, if all payment retries haven’t been attempted. You can also schedule repeat payment retries (called “dunning”), which is common for businesses with recurring revenue. If you perform dunning through [Stripe Billing](https://docs.stripe.com/billing.md), Stripe highlights the affected portion of the report using your Billing settings.

To specify the deduplicated rate, click **Deduplicated**.

#### Example rate calculation

#### Example rate calculation

The following is an example calculation showing the difference between raw and deduplicated rate:

| Calculation step                                                  | Result                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------- |
| Payment A, attempt 1                                              | Failed                                                      |
| Payment A, attempt 2                                              | Failed                                                      |
| Payment A, attempt 3                                              | Authorized                                                  |
| Raw rate *(Counts all attempts)*                                  | 33.3% = (1 / 3) *(1 authorized attempt / 3 total attempts)* |
| Deduplicated rate *(Counts only the final attempt for payment A)* | 100% = (1 / 1) *(1 authorized attempt / 1 total attempt)*   |

### Specify the currency

Apply a currency filter to display only payments made using the selected currency. If you don’t apply a currency filter, all payments appear in your default settlement currency, regardless of the payment currency.

For example, your default settlement currency is USD, but you apply the EUR currency filter. The transactions that display only include payments made in EUR, and excludes payments made in all other currencies, such as USD.

To specify the currency, click **More filters** > **Currency**, and select your preferred currency.

## Transaction detail page

You can view the underlying transaction data that populates the charts in each report. To access this detailed view, click the expander ↗ at the top of any report. This opens the transaction detail page.

You can **Download** :download: the acceptance data that’s generated for your report. This data includes all payments that match the filters you selected.

If you have an active [Sigma](https://docs.stripe.com/stripe-data/how-sigma-works.md) subscription, you can click **Explore** :explorer: to access templates for the queries that represent each chart. You can use this interface to perform custom analyses on the data that populates the charts.

## Key metrics report

This report shows the key metrics for the filters you selected, including the rate, number of authorized payments, and authorized payment volume.

The time series compares the rate to a `previous_period`, which you can customize. By default, the comparison period starts right before your chosen timeframe and represents the same length of time.

You can explore trends using [Sigma](https://docs.stripe.com/stripe-data/how-sigma-works.md), or filter by available charge attributes using the itemized download. For example, [card testing](https://docs.stripe.com/disputes/prevention/card-testing.md) can lead to a reduction in the rate and a sudden spike in payment count.

## Card payments breakdown report

This report shows the card acceptance metrics across several common criteria that drive acceptance.

Each top-level filter has a corresponding pivot report. You can pair the filtering capabilities with the pivot reports to monitor how different groups of payments perform over time. You can also analyze payments across options such as card brands, countries, or input methods your customers use to pay.

Use the tabs to compare rates, payment count (in absolute numbers or as a share of payments), and payment volume. You can see how changes in the rate relate to changes in payment count or payment volume.

| Option               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Card country         | The country of the card issuer, rather than the physical location of your customer at the time of payment. On average, domestic success rates are higher than cross-border payments (where the card country and your business are located in different regions). This pivot might also help you identify your customers’ locations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Card type            | On average, credit success rates are higher than debit success rates, which in turn are higher than prepaid success rates. This is usually because payments made with debit and prepaid cards are more likely to be declined for having insufficient funds to complete the purchases.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CVC response         | The 3 or 4 digit verification number printed on a card, usually on the signature strip or the front of the card. When Stripe sends the [CVC](https://docs.stripe.com/disputes/prevention/verification.md#cvc-check) (or CVV) to the card network for authorization, the card issuer checks the CVC against the customer information on-file as additional verification. If the provided information doesn’t match, the CVC verification check fails, which can result in a declined payment. A failed CVC check might indicate the payment is fraudulent, so review it carefully before fulfilling the order.

Example values:

- **Not sent** - The CVC wasn’t sent to the card networks.
- **Passed** - The CVC was sent to the card networks and passed validation.
- **Failed** - The CVC was sent to the card networks and failed validation.
- **Unchecked** - The CVC was sent to the card networks, but validation wasn’t performed. |
  | Input method         | Digital wallets, such as Apple Pay or Google Pay, typically have higher success rates than card payments because they’re tokenized and device-authenticated, creating a higher level of trust for the card issuer.

If you use [Stripe Terminal](https://docs.stripe.com/terminal.md), you might also see **Card present** as an input method, which represents in-person payments. Card present success rates are typically higher than card not present transactions. The physical card must be present at the time of purchase for in-person payments, so these payments often have lower risk profiles for card issuers than online payments.                                                                                                                                                                                                                                                                                                    |
| Interaction type     | The card networks divide card payments into two types, based on whether the customer participates in the payment flow: [Customer-Initiated Transactions (CITs) and Merchant-Initiated Transactions (MITs)](https://docs.stripe.com/payments/cits-and-mits.md). Card issuers assign different characteristics and risk profiles to these transaction types, so you might see varying success rates between the two. Each interaction type includes granular sub-categories of interaction type entailed by this filter or pivot option.

- **Customer-initiated payments** include one-time, saved card and recurring initial payments. A recurring initial payment is the first payment in a series of recurring payments.
- **Merchant-initiated payments** include recurring subsequent and unscheduled payments.                                                                                                                                 |
  | Network token usage  | A [network token](https://stripe.com/guides/understanding-benefits-of-network-tokens#what-are-network-tokens) (NT) is a non-sensitive, 16-digit numeric substitute for a “front-of-card” number, also referred to as a primary account number (PAN). When paired with a cryptogram, a network token can be sent to the card network in the authorization message, instead of a PAN.

Unlike PANs, network tokens are payment credentials that you can dynamically restrict to specific businesses and channels, reducing the risk and impact of potential security breaches and intrusions. Businesses also use NTs for authorization rate uplift; networks contain the latest mapping between NTs and PANs, so Stripe can continue to use the same NT even if the underlying PAN changes, and avoid declines on legitimate payment attempts.                                                                                                        |
| Postal code response | The Address Verification Service (AVS) is an identity verification tool that lets you detect and prevent potentially fraudulent credit or debit card payments by comparing the billing address provided by a customer with the billing address on-file with the customer’s card issuer, to confirm they match. Address verification is primarily supported by card issuers in the United States, Canada, and the United Kingdom.

Example values:

- **Not sent** - The postal code wasn’t sent to the card networks.
- **Passed** - The postal code was sent to the card networks and passed validation.
- **Failed** - The postal code was sent to the card networks and failed validation.
- **Unchecked** - The postal code was sent to the card networks, but validation wasn’t performed.                                                                                                                                              |
  | Processor            | If your configuration includes multiple processors, you can use the [processor filter](https://docs.stripe.com/payments/analytics/acceptance.md#specify-processor) to view the Card payments breakdown report for the selected processor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
  | Retry status         | View transactions based on whether a payment has been retried. This differs from [deduplication](https://docs.stripe.com/payments/analytics/acceptance.md#specify-raw-rate-deduplicated-rate), which is the final payment attempt and can be the first attempt with the final result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
  | Other                | The Other category groups low volume data points that aren’t represented on the pivot report. For example, you might want to see the full set of card-issued countries in your data. To do so, you can view the data in Sigma or download the data, both available in the [transaction detail page](https://docs.stripe.com/payments/analytics/acceptance.md#transaction-detail-page).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Failed card payments report

This report shows why payments failed or were declined.

A payment attempt can fail at multiple stages, even before the payment is sent to the card network. For example, it might fail [3D Secure authentication](https://docs.stripe.com/payments/3d-secure.md) or get blocked by *Stripe Radar* (Stripe Radar helps detect and block fraud for any type of business using machine learning that trains on data across millions of global companies. It’s built into Stripe and requires no additional setup to get started). A card issuer can decline a payment for reasons such as insufficient funds on the card account or incorrect card information. Occasionally, issuers incorrectly decline legitimate payments for suspected fraud.

### Before the payment is sent to the card network

Failures might occur before the payment is sent to the card network for the following reasons.

| Reason                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authentication failed**    | You can use the API or a Radar rule to request 3D Secure (3DS) [authentication](https://docs.stripe.com/payments/3d-secure/authentication-flow.md) for payments. Stripe might also trigger 3DS to comply with certain regulations, such as [Strong Customer Authentication (SCA)](https://stripe.com/guides/strong-customer-authentication) requirements in Europe.

This failed attempt is for situations where the customer didn’t finish the authentication steps or failed the authentication for other reasons. To learn more about authentication failures, see [Payments analytics](https://docs.stripe.com/payments/analytics.md). |
| **Block payments by reason** | Stripe Radar blocks high risk payments, such as payments with mismatched CVC or postal code values. This automated fraud prevention feature evaluates each payment, without requiring any action from you.

This blocked attempt is for situations where Stripe blocks payments. We obtain initial authorization from the card issuer, but don’t charge the card. This can help prevent potential fraudulent payments that might lead to disputes. To learn more about the reasons for blocked payments, see the [Blocked card payments report](https://docs.stripe.com/payments/analytics/acceptance.md#blocked-payments-report).         |

### After the payment is sent to the card network

Failures might occur after the payment is sent to the card network for the following reasons.

#### Issuer declines

Card issuers use automated systems and models to determine whether to authorize a submitted payment request. If the issuer declines a payment, Stripe shares the [reason](https://docs.stripe.com/declines/card.md) provided by the issuer. In some cases, the issuer provides specific reasons for the decline with a [decline code](https://docs.stripe.com/declines/codes.md). However, many payments are categorized into generic declines (the most common is `do_not_honor`). For privacy and security, card issuers can only discuss specific details with their cardholders, and not with you or Stripe.

For most businesses, card issuers decline payments for the following reasons.

| Reason                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Generic response, such as do not honor or service not allowed** | The issuer has chosen not to provide the specific reason for their decision. Prompt the customer to contact their card issuer for more information, or to try a different payment method. You can also retry the payment method.                                                                                                                                                                                                    |
| **Incorrect card information, such as incorrect number or CVC**   | The customer has entered incorrect card information or card information that’s no longer valid. Make sure you enabled [automatic card updates](https://docs.stripe.com/payments/charges-api.md). Contact the customer through multiple channels, such as email, text message, or in-app notification to re-enter their payment details or contact their card issuer if problems persist. Otherwise, try a different payment method. |
| **Insufficient funds**                                            | The account doesn’t have sufficient funds to cover the payment amount at the time of authorization. Prompt the customer to try a different payment method, or obtain approval from the customer to retry the payment at a later date.                                                                                                                                                                                               |
| **Lost or stolen card**                                           | The customer has reported the card as either lost or stolen. Retries won’t succeed, and the customer must contact their card issuer for more information. Don’t report the specific reason to the customer, in case the legitimate cardholder isn’t the one attempting the purchase.                                                                                                                                                |
| **Transaction not allowed**                                       | The issuer declined the payment for unspecified reasons, which might be related to the card or payment. If it’s the payment, the merchant spend category might not be allowed on the card (for example, FSA cards for ineligible items). The customer must contact their card issuer for more information (retries are unlikely to succeed until the issuer is contacted), or try a different payment method.                       |

For the full list of potential reasons why card issuers decline payments, see [decline codes](https://docs.stripe.com/declines/codes.md).

## Blocked card payments report

This report shows why payments were blocked.

| Block reason                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Radar - Rule match                    | Some payments are blocked because of a rule that you configured in Radar. This doesn’t include payments that Radar blocked by default because of their risk score.                                                                                                                                                                                                                                                                                                                                                          |
| Radar - Post authorization rule match | Some payments are blocked after the card issuer has authorized the payment because of a configured rule in Radar. Specifically, Radar rules that require a response from the card issuer, such as ensuring postal code or CVC match what the card issuer had on-file. This doesn’t include payments that Radar blocked by default because of their risk score.                                                                                                                                                              |
| Radar - High risk                     | Some payments are blocked by Radar by default because of their risk score. Radar determines this score using AI, and you can adjust the minimum score that it blocks by default. There are some Radar rules that block payments after they have been authorized.                                                                                                                                                                                                                                                            |
| Stripe - Adaptive Acceptance          | For users with [IC+ pricing](https://support.stripe.com/questions/understanding-blended-interchange-pricing), Adaptive Acceptance blocks certain payments to help you [avoid unnecessary network costs and penalties](https://docs.stripe.com/payments/analytics/optimization.md#cost-savings-from-optimizations). For example, Adaptive Acceptance can help you avoid excessive retry penalties. Adaptive Acceptance can also help you avoid network costs by blocking payments that have low likelihood of authorization. |
| Stripe - Rule match                   | Some payments are blocked by Stripe for other reasons not included above. For example, the payment was initiated by a card on deny-lists that are globally known to be fraudulent, or from sanctioned countries. Additionally, Stripe might block payments that are suspected to be connected to [card testing](https://docs.stripe.com/disputes/prevention/card-testing.md).                                                                                                                                               |

## See also

- [Authentication analytics](https://docs.stripe.com/payments/analytics/authentication.md)
- [Disputes analytics](https://docs.stripe.com/payments/analytics/disputes.md)
- [Payment methods analytics](https://docs.stripe.com/payments/analytics/payment-methods.md)
