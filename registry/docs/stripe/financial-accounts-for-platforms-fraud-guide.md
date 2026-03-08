# Financial Accounts for platforms fraud guide

Learn best practices for managing fraud as a platform.

Financial Accounts for platforms is an embedded finance API that lets you embed financial services into your platform’s product. With Financial Accounts for platforms (through our partnerships with US domestic banks), you can offer your connected accounts a simple stored-value account that’s directly integrated into your application. It lets them perform financial actions such as sending and receiving funds (through ACH wires), earning cash back, and spending money through a card.

- **Business fraud**: A fraudulent actor creates a connected account using a false or stolen identity, with the intent to commit fraud.
- **Transaction fraud**: A fraudulent actor uses compromised card or financial account information to perform unauthorized activity on a legitimate connected account. On Stripe, transaction fraud appears as unauthorized charges on a Stripe-issued card or unauthorized debits to a Stripe-issued financial account.
- **Account takeover fraud**: A fraudulent actor uses stolen credentials to log into a legitimate connected account and perform unauthorized activity. Common Financial Accounts for platforms account takeover attacks include transferring funds to an external financial account and making unauthorized transactions on a Stripe-issued card.

To protect yourself from fraud, you must both verify connected accounts when they sign up for Financial Accounts for platforms products and continuously monitor transactions for risk.

## Business fraud examples

The most common types of business fraud are first-party fraud, third-party fraud, and force-capture or overcapture fraud. A business fraud scheme can be complex, and can include transaction fraud or account takeover fraud. Review the mechanics to help you design your defenses.

### First-party fraud example (ACH debit)

In this example, a fraudulent actor has access to two accounts:

- A financial account at financial institution A, that they create using a false identity
- A financial account at financial institution B, that they create using a different identity

1. The fraudulent actor logs into their account at institution A and initiates an ACH debit to pull funds from their financial account at institution B. In this case, institution A is the originator of the debit (ODFI) and institution B is the receiver of the debit (RDFI).
2. When the debited funds become available in the account at institution A, the fraudulent actor immediately withdraws or spends them.
3. The fraudulent actor files a dispute with institution B, claiming that the ACH debit initiated by institution A wasn’t authorized.
4. Institution B initiates an ACH return, citing the unauthorized debit, and pulls back the debit amount.
5. The account at institution A has a negative balance, and the fraudulent actor abandons it.

### Third-party fraud examples

In these examples, a fraudulent actor has access to two accounts:

- Financial account A belonging to a connected account on your platform, created by the fraudulent actor using seemingly legitimate information, often stolen identity information
- External account B at bank Y, owned by a third party but accessible by the fraudulent actor, often using stolen credentials

**ACH credit fraud:**

1. The fraudulent actor initiates an ACH or wire credit transfer from external account B into financial account A.
2. When the credited funds become available in account A, the fraudulent actor immediately withdraws or spends them.
3. The real owner of account B informs bank Y that the credit was unauthorized.
4. Bank Y might return the funds to the real owner.

In this scenario, your platform might not be liable for the lost funds, because in most cases the originating financial institution can’t recall the incoming credit transfer or wire. However, your financial account has enabled fraudulent activity, which has compliance and reputation implications for Stripe and our financial partners.

**ACH debit fraud:**

1. The fraudulent actor originates an ACH debit from financial account A, pulling funds from external account B.
2. After the funds are released to account A, the fraudulent actor immediately withdraws or spends them.
3. The real owner of account B informs bank Y that the debit was unauthorized.
4. Bank Y returns the payment to the real owner.
5. Your platform must return the funds to Bank Y.

ACH regulations make your business liable for the returned funds. Because the fraudulent actor has already withdrawn them from account A, your business must take a loss to pay back bank Y.

### Force capture or overcapture fraud example

In this example, a fraudulent actor has access to two accounts:

- A financial account with an attached card at financial institution A, created by the fraudulent actor using a false identity
- A business account at acquirer B, either created by the fraudulent actor using a different identity, or another party’s legitimate account taken over by the fraudulent actor

1. The fraudulent actor uses the card issued by institution A to create authorizations with acquirer B that don’t have issuer dispute rights. Examples might include card-present transactions on a chip card or card-not-present transactions that attempt 3D Secure (3DS) or Visa Secure.
2. The fraudulent actor then uses the account at acquirer B to force-capture or overcapture the authorizations. They might capture a single authorization multiple times.
3. Acquirer B pays out to the fraudulent actor from the business account.
4. Institution A can’t dispute the captured amounts with acquirer B, and is left with any negative balance on the card account.

## Mitigate fraud risk for new accounts

The following strategies help you identify accounts being created to facilitate fraud or that are susceptible to misuse.

- **Verify the account owner’s identity:** Perform extra steps to verify the identity of connected account owners, such as using [Stripe Identity](https://docs.stripe.com/identity.md). (The [standard KYC requirements](https://docs.stripe.com/connect/identity-verification.md) for connected accounts verify the authenticity of documentation, but not the identity of the person or business providing it.)
- **Verify bank account ownership:** Use [Financial connections](https://docs.stripe.com/financial-connections.md) to securely set up and transact with your connected accounts’ external bank accounts.
- **Verify the business domain:** Check that the account owner has an email address at the business domain, and that it can receive and reply to email.
- **Verify the online presence of the business:** For small businesses, contractors, or creators, collect and verify their website and social media accounts.
- **Verify business licenses:** For industries that require licensing, collect and verify your connected accounts’ licenses.
- **Implement account security:** Enforce requirements such as two-factor authentication and password policies on your connected accounts. Provide guidance on information security, such as how to protect account credentials and identify phishing attacks, and encourage them to closely monitor their financial account activity using automated notifications.
- **Monitor account access:** Collect information such as device IDs and IP addresses that you can use to identify whether high-risk actions (such as password changes) originate from a secure device at a known location.
- **Monitor for duplicate information:** Maintain a database of the information used to create accounts previously identified as fraudulent, and check new accounts against it.
- **Monitor signup volume:** A sudden increase in the number of accounts signing up for your Financial Accounts for platforms product can indicate that fraudulent actors have discovered a vulnerability in your platform.
- **Limit access to faster payouts:** If your connected accounts also use Stripe for payments, limit access to [faster account payouts](https://docs.stripe.com/financial-accounts/connect/moving-money/payouts.md#automatic-payout-speeds) to trustworthy accounts. For example, you can enable faster payouts only for accounts that remain issue-free after a certain amount of time or processing volume. If you experience fraud losses, consider disallowing faster payouts.
- **Limit access to pull funding:** Limit access to transactions that originate with the receiving account, such as ACH debits, to trustworthy accounts. If your accounts require ACH debits, limit the debit amount that an account can process until it proves trustworthy. Most ACH debit returns occur within 4 business days, so schedule payouts to new accounts at least 4 days after ACH debits.
- **Holistic fraud review:** At a certain point in each new connected account’s lifecycle, manually review it for fraud risk. The appropriate time for the review depends on the number of connected accounts you have, your business model, and your level of risk tolerance. You might base it on conditions such as a certain number of transactions or a certain amount in inflows or outflows, or you might review accounts immediately on signup.

## Mitigate fraud risk for transactions and account takeovers

Mitigating risk for individual transactions includes both generally applicable strategies and mitigations that apply to specific transaction types.

### Automatic risk controls

Stripe monitors the risk level of all money movements. When our modeling identifies a high-risk movement, such as a series of inbound transfers from counterparties without sufficient funds, we block it and disable the account’s `inbound_transfers` feature.

In rare cases of serious fraud, Stripe also disables the `outbound_transfers`, `outbound_payments`, `card_issuing`, and `intra_stripe_flows` features. This action is usually triggered by new accounts that appear to be fraudulent.

When we disable a financial account feature, that feature’s status is `restricted_other`, with the reason `automated_fraud_prevention`. [Set up a webhook](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md#webhooks) to monitor your accounts for disabled features, and investigate them as they occur.

> Stripe’s automatic controls don’t affect your Financial Accounts for platforms platform’s liability and are intended to augment your risk management program, not to replace it. Ultimately, you’re responsible for managing risk in an appropriate way for your platform and your connected accounts.

### Monitor metrics that help identify fraud

The following metrics can flag potential fraud on financial accounts that also use Stripe for payments. If your accounts use a different payment processor, you can use similar metrics that correspond to your payment systems.

**Lagging metrics:**

- Rejection rate on financial accounts versus other accounts
- Absolute acquiring losses on financial accounts
- Percentage of financial accounts with losses
- Absolute loss per account on financial accounts versus other accounts
- Time to acquiring loss on financial accounts versus other accounts

**Leading metrics:**

- Signup rate for financial accounts versus other accounts
- New connected accounts with a high volume of received credits or debits (not including acquiring payouts) in the first 30 days
- Low acquiring processing volume with a high volume of received credits or debits (not including acquiring payouts)
- Accounts with material received credits or debits followed by `OutboundTransfers` bringing the financial account balance to zero
- Accounts that exceed certain total amounts in international card spending or `OutboundTransfers`

### Mitigate fraud on issued cards

The following strategies help you identify fraudulent activity on cards issued by your platform. For more information about identifying and mitigating fraudulent activity on your issued cards, see [Manage fraud](https://docs.stripe.com/issuing/manage-fraud.md) in the Issuing documentation.

- **Flag unusual activity for cardholder review:** Monitor your [issued card transactions](https://docs.stripe.com/issuing/purchases/transactions.md) for suspicious activity, and ask the cardholder to verify them. Some examples:
  - Transactions for large or round amounts
  - Transactions that significantly exceed the cardholder’s average transaction amount
  - Transactions at retailers that commonly sell gift cards, such as grocery stores and big-box discount stores
  - Force captures
  - Overcaptures
  - Transactions with businesses outside of the cardholder’s country
- **Limit card spending:** [Configure spending controls](https://docs.stripe.com/issuing/controls/spending-controls.md) to block or limit spending based on merchant categories or countries. You can apply spending controls to cards or to cardholders where transactions outside their expected spending pattern are likely to be suspicious.
- **Enroll cards in 3D Secure (3DS):** 3DS is an additional layer of cardholder authentication for online transactions that works only if the business and the issuer support it. However, if a business enables 3DS, the issuer is liable for fraudulent disputes, even if they don’t enable it. If you issue cards, [enroll them in 3DS](https://docs.stripe.com/issuing/3d-secure.md) to protect your business.
- **Review Visa Advanced Authorization scores:** Stripe uses Visa’s Advanced Authorization (VAA) score to identify and block certain suspicious authorizations. If you want us to expose this score to you through the API, contact treasury-support@stripe.com.

### Mitigate ACH fraud on inbound transfers

We recommend the following strategies for assessing the risk of inbound transfers:

- Use [Financial connections](https://docs.stripe.com/financial-connections.md) to verify the ownership of the external bank account.
- Monitor for unusual transactions, such as very frequent or large transfers.

Stripe offers an optional feature that lets you place a temporary hold on inbound transfers to give you time to investigate potential fraud. For example, you can contact the account to verify the transfer. You can configure holds to occur before Stripe submits a transfer to our banking partners, or between submission of the transfer and release of the funds into the financial account. The main difference is that you can only cancel a transfer before we submit it to the bank.

For details about using inbound transfer holds, see [Manually review inbound transfers](https://docs.stripe.com/financial-accounts/connect/moving-money/into/inbound-transfers.md#ibtholds)

### Automatic blocking of same-day inbound transfers

Same-day inbound transfers increase the risk of disbursing funds from a fraudulent debit before the fraud is detected. To mitigate this risk, the Stripe systems can prevent the creation of a same-day inbound transfer when they identify the transaction as having a high probability of fraud. When Stripe blocks an inbound transfer, the API returns an `inbound_transfer_not_same_day_eligible` error. This error indicates that we can’t guarantee same-day settlement for that transaction. Retry the transfer using standard ACH submission, which allows more time for the underlying ACH debit to clear, and reduces the platform’s exposure to fraud. For comprehensive details on handling this error and managing inbound transfers, see [inbound transfers](https://docs.stripe.com/financial-accounts/connect/moving-money/into/inbound-transfers.md).

### Mitigate ACH fraud on outbound debits

We recommend the following strategies for mitigating the risk of outbound debits:

- **Flag high-risk transactions for accountholder review:** Monitor [outbound transactions](https://docs.stripe.com/financial-accounts/connect/moving-money/moving-money-out.md) for suspicious activity, and ask the account to verify them. Some examples:
  - Debits for large amounts or for amounts close to enforced limits
  - Debits associated with a new originating party
  - Debits attempted for amounts greater than the funds in the account
- **Use push methods for outbound debits:** Encourage your connected accounts to use push methods, such as [Outbound transfers](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/outbound-transfers.md), rather than pull methods that originate from external accounts.
- **Reverse suspicious transactions:** If you suspect that a [ReceivedDebit](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/received-debits.md) is fraudulent, reverse it by processing a [DebitReversal](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/debit-reversals.md). You must reverse the debit within 2 business days of the original transaction.

## Respond to identified fraud

When you detect potential or actual fraud, address it immediately. Your response depends on the nature of the fraud.

### Disable fraudulent or compromised accounts

If you suspect that an account is fraudulent, or that a legitimate account has been taken over by a fraudulent actor, disable outbound money movement until you can verify the fraud. To do so, set its `outbound_flows` [feature to restricted](https://docs.stripe.com/financial-accounts/connect/account-management/financial-account-features.md#restricted-features).

If you’re certain that an account is fraudulent, disable both its `outbound_flows` and `inbound_flows` features. If the account has a zero balance, you can close it.

If a legitimate account is compromised, expire any existing login sessions and disable logins. Contact the account owner and verify their identity, then help them reset their login credentials. When the account is secure, re-enable logins and Financial Accounts for platforms features.

If necessary, consider [closing a financial account](https://docs.stripe.com/financial-accounts/connect/account-management/financial-accounts.md#close-a-financialaccount) and creating a new one.

> #### Compromised account liability
>
> Financial reimbursement for any funds lost by a compromised account depends on your business policies. Make sure to communicate them clearly to your connected accounts.

### Dispute fraudulent transactions

Respond quickly to fraudulent transactions, because there are strict time limits:

- For ACH debit transactions, you must notify Stripe of any return request at least 24 hours before the transaction settlement date. You can return an ACH Debit by [creating a DebitReversal](https://docs.stripe.com/financial-accounts/connect/moving-money/out-of/debit-reversals.md) using the API.
- For card transactions, you can file a dispute until 110 days after the funds were captured. You can [file a dispute on an issued card transaction](https://docs.stripe.com/issuing/purchases/disputes.md) through the Dashboard or using the API.

If you suspect that an issued card is compromised, close it and issue a replacement.

### Review vulnerability

Examine the fraud to determine how it got past existing controls, and thoroughly review your other accounts for exploitation of the same vulnerability. Revise your systems and processes to avoid similar fraud in the future.
