# Manage fraud with Stripe Issuing controls and tools

Understand how transaction fraud can impact your Issuing program and the steps you can take to combat it.

As a payment facilitation product, Issuing inherently incurs potential fraud risks and liabilities for both businesses and issuers. You need to understand what transaction fraud is, who’s liable when fraud occurs, and the best ways to monitor for and prevent fraud using the resources available from Stripe. By understanding your roles and responsibilities and effectively using Stripe’s resources, you can reduce these risks to levels that you deem appropriate for your business.

Keep the following in mind as you decide on your approach to fraud management:

- **How much fraud you should expect to see**: The average volume of monthly fraud varies significantly based on industry, geography, business model, and other factors. Most users file fraud disputes on 0.1% or less of their transaction volume, but it can vary greatly, depending on your issuing activity. It’s unusual to have no fraud whatsoever, except in rare business models or if you have low volumes.
- **Definition of a dispute**: A dispute occurs when an account holder challenges a charge on their card statement with their card issuer. The reason for the dispute varies. For example, the account holder might not recognize the charge, perceive it as fraudulent, or feel dissatisfied with the goods or services they purchased. Disputes can help issuers recover funds in the event of fraudulent activity.

## Transaction fraud

There are three primary types of payment fraud:

- **Transaction fraud**: The unauthorized use of a payment card to fraudulently obtain money or property.
- **Business fraud**: A person creates a fraudulent account (often with a stolen identity) to commit fraud.
- **Account takeover (ATO) fraud**: An unauthorized third party compromises a legitimate account owner’s login and takes actions on their account.

Business fraud and ATO fraud can occur in Issuing, but transaction fraud often poses a greater risk.

On Stripe Issuing, we see transaction fraud in the form of unauthorized charges on a Stripe-issued card. Transaction fraud can occur at any point in a cardholder’s lifecycle. Purchases at legitimate businesses are also subject to transaction fraud. An issued card can be compromised by:

- Physical theft
- Being lost by the cardholder
- Credentials that were compromised by tactics such as:
  - Phishing
  - Spyware
  - Non-secure checkouts
  - External breaches

### Loss liability

Loss liability stems from an issue with a transaction that results in a financial loss for one party. Liability usually arises from either transaction fraud or a business not fulfilling its obligations on a purchase.

Loss liability is assigned to either the business (the provider of the service or goods being purchased), you as the Stripe Issuing user, or (in rare cases) the cardholder. This means that when loss liability is allocated to the issuer, you’re accountable unless an exception applies. For more information about cases where the issuer is liable for fraudulent transactions, see [Liability assignment](https://docs.stripe.com/issuing/manage-fraud.md#liability-assignment).

Stripe Issuing allows you to design your fraud monitoring system, and make your own business logic and transaction decisions. Although Stripe might offer assistance with transaction fraud prevention, you’re still responsible for all losses where the issuer is deemed liable. So you need to build sufficient controls to monitor, manage, and prevent fraud.

### Liability assignment

In many cases, the business owns liability for fraudulent transactions. There are, however, a few factors that might result in the liability shifting to you, the issuing user:

- **Card-present transactions**: If the card or a mobile wallet such as Apple Pay and Google Pay is present for the transaction, the issuer is generally liable for fraud, with a few exceptions:
  - Cards and wallets need to be electronically read wherever available, by using the contact or contactless chip interface or swiping the magnetic stripe. For manually entered card numbers, such as with mail order or telephone orders, liability is with the business.
  - If a chip-enabled card is used at a terminal that only supports magnetic stripe payments, liability shifts to the business.
  - If the terminal used by the business generally supports chip transactions, but the magnetic stripe is used for a transaction, liability remains with you, as the issuing user.
- **Card-not-present transactions:** If the card isn’t present for the transaction (that is, online commerce), liability is determined primarily by 3D Secure (3DS). The additional layer of verification provided by 3DS triggers a “liability shift” where fraud liability shifts from the business to the issuer, regardless of the circumstance. In the context of Stripe Issuing, when a business triggers 3DS, fraud liability usually automatically shifts to you, as the issuing user, regardless of whether you have 3DS enabled on your cards. Accordingly, having 3DS enabled helps you reduce the risk of financial liability for fraudulent transactions. To learn more, see [3DS for Stripe Issuing](https://docs.stripe.com/issuing/3d-secure.md).
- **Digital wallet transactions:** Regardless of 3DS considerations, the use of a Stripe Issuing card in an Apple Pay or Google Pay wallet for a card-not-present transaction also shifts liability to the issuer.

## Transaction fraud controls and tools

Given the risk that liability transaction fraud can create, you need to be proactive and monitor for and prevent it. The following are controls and tools that you can add to your Stripe Issuing program. We recommend using as many controls and tools as possible to limit your program’s transaction fraud risk.

### Proactive fraud protection controls

Stripe offers the following proactive fraud protection controls:

### KYC/KYB

Know Your Customer (KYC) or Know Your Business (KYB) is the mandatory process of collecting and verifying information about the company or individual who uses the cards. Information includes the legal entity and personal information about the representative of the business, and those who own or control the business. To manage KYC/KYB, you can integrate [Connect Onboarding](https://docs.stripe.com/connect/custom/hosted-onboarding.md), which lets Stripe take care of the complexity around the basic obligations.

To learn more about using Connect to manage KYC/KYB, see [Risk management with Connect](https://docs.stripe.com/connect/risk-management.md#know-your-customer-\(kyc\)-and-compliance).

### Spending controls

Spending controls allow you to block specific countries or business categories (for example, casinos) and set spending limits per authorization (such as 100 USD) or per month (such as 3000 USD per month). You can apply these controls to either individual cards or cardholders. They’re most effective you know the expected spending pattern.

We recommend implementing a combination of spending limits and business category controls to help limit your exposure in case of unauthorized use. To learn more about setting rules on cards and cardholders to control spending, see [Spending controls](https://docs.stripe.com/issuing/controls/spending-controls.md).

### 3D Secure

3D Secure (3DS) is an additional layer of authentication used by businesses to make sure an online purchase is from a legitimate cardholder. 3DS is used for online transactions and only works if the business requests it and you have it enabled for your Issuing program. The additional 3DS step occurs at checkout where the cardholder sees an authentication page and receives a prompt to enter a verification code sent to their phone or email.

We recommend enabling 3DS to reduce fraud loss exposure for online transactions. To learn more about 3DS and how to enable it, see [Cardholder authentication using 3D Secure](https://docs.stripe.com/issuing/3d-secure.md).

### Real-time fraud protection controls

Stripe offers the following real-time fraud protection controls:

### Stripe Defense Layer

By default, Stripe offers several automatic controls to help reduce your fraud exposure without changing loss liability. Among other considerations, Stripe attempts to block authorizations that appear to be card testing or that we estimate to be extremely high risk based on our own risk modeling.

These defenses usually impact a very small subset (less than 0.5%) of authorizations and are purely additive. You shouldn’t consider these automatic controls as a substitute for your own risk management program. Ultimately, you need to identify the ideal balance between user experience and risk management that works best for your program’s specific characteristics. The Stripe Defense Layer doesn’t affect liability.

### Real-time webhook

You can approve or decline authorization requests in real-time based on the data available to you at the point of authorization. This gives you control over authorization outcomes and enables you to implement your own fraud-prevention logic. Use Stripe’s real-time webhook to target a specific fraud pattern while minimizing the impact on other spending behaviors. For example, you can use authorization data on the location of the authorization to block specific geographies, currencies, and businesses.

To learn more about the real-time webhook and how it works, see [Real-time authorizations](https://docs.stripe.com/issuing/controls/real-time-authorizations.md).

### Fraud challenges

Fraud challenges provide an additional layer of verification for users to confirm purchases with SMS. This helps minimize accidental blocks of legitimate purchases that might initially appear high-risk. After confirming the purchase, the cardholder can retry the transaction.

To learn more about using challenges to manage fraud, see [Fraud challenges](https://docs.stripe.com/issuing/controls/fraud-challenges.md).

### Verification data comparison

For every authorization that takes place, we compare the values provided during checkout with the ones on file. We notify you if we detect a mismatch on:

- CVV2 (or security code)
- Card expiration date
- Billing address
- Billing zip code
- PIN number (when entered)

Identifying a mismatch between the card details on file and those entered at checkout might help you identify fraudulent activity. For example, a mismatch between the cardholder’s billing postal code and the one provided at checkout might indicate a stolen card that a fraudulent actor who doesn’t know the cardholder’s postal code tries make a purchase with. A mismatch between the CVV2 on file and the one entered at checkout might indicate a fraudulent actor who cycles through card numbers to find one that works, without knowing the associated CVV.

Depending on your risk tolerance and the characteristics of the authorization, such as whether it’s in person or online, you can reject authorizations if any mismatches are identified in the verification data values.

### Post-fraud transaction tools

Stripe offers the following post-fraud transaction tools:

### Token management

Manage digital wallet tokens through the [Tokens API](https://docs.stripe.com/api/issuing/tokens.md) to shut down digital wallet cards that have been associated with fraudulent activity.

To learn more about managing network tokens on your cards, see [Token management](https://docs.stripe.com/issuing/controls/token-management.md).

### Card management

If you or your cardholder suspect unauthorized activity, you can temporarily deactivate a card with the Dashboard or the [Issuing API](https://docs.stripe.com/api/issuing/cards/object.md#issuing_card_object-status) to block further unauthorized use while you investigate. If the activity was authorized, you can preserve the card’s credentials and reactivate it. Whenever you confirm unauthorized use, immediately cancel the card.

To learn how to deactivate a card using the Issuing API, see [Deactivating cards](https://docs.stripe.com/issuing/connect/cardholders-and-cards.md#deactivating-cards).

### Disputes

When fraudulent transactions occur, you can file disputes with Visa or Mastercard through the Dashboard or API for those transactions with the reason ‘Fraudulent’. In some cases, depending on what verification is conducted at the point of sale, the business might be liable for the fraudulent transaction. Disputes aren’t guaranteed to result in funds recovery and might take time to resolve.

To learn more about dispute handling, see [Issuing disputes](https://docs.stripe.com/issuing/purchases/disputes.md).

## User-facing controls and education

You can adjust various aspects of Stripe’s fraud controls, and educate your cardholders to reduce how often they’re needed.

### User configurations

Depending on your use case and workflow, you can request adjustments to Stripe’s default controls, such as:

- Relaxing [3DS requirements](https://docs.stripe.com/issuing/3d-secure.md)
- Increasing [transaction amount caps](https://docs.stripe.com/issuing/controls/spending-controls.md)

While Stripe can accommodate these requests on a case-by-case basis, you’re ultimately responsible for any increased risk or loss liability that results from such requests.

### Educate your cardholders

Educate your cardholders about how to keep their card information safe. Teach them to pay close attention to the activity on their accounts to increase the likelihood of them—and you—catching fraudulent activity early. Make your cardholders aware of the following preventative measures:

- **Check for card skimmers in physical stores:** Verify no cameras or skimming equipment are present on the payment terminal. Check for anything inserted in, or attached to, the card reader, ports, display, or keypad.
- **Transact at trustworthy businesses:** Only provide your card information to businesses that you’re familiar with and trust.
- **Cancel a card as soon as it’s lost or stolen:** Take immediate action to prevent unauthorized use before a fraudulent actor can obtain your card credentials. To continue spending, create a new card after canceling the lost or stolen one.

## Monitor metrics

The following are metrics we recommend monitoring to help identify and measure fraud on your Issuing-enabled accounts.

### Leading metrics

Leading metrics are metrics that can help you identify potential fraud in its early stages.

- Authorization declines due to incorrect verification data (CVC2, expiry date), over time.
- Authorization rate, over time.
- Authorizations outside of geographic footprint, over time.
- Authorizations by acquiring business country, over time.
- Authorizations by business category code, over time.
- [Force captures](https://docs.stripe.com/issuing/purchases/transactions.md?issuing-capture-type=force_capture), over time.

### Lagging metrics

Lagging metrics are metrics that can help you assess how much fraudulent activity has impacted your Issuing program:

- Percentage of total spend that has been disputed for fraud, over time.
- Dispute win-loss rate, over time.
- Absolute dispute losses, over time.
- Acquiring businesses with the highest percentage of transactions disputed.

## See also

- [Advanced fraud tools](https://docs.stripe.com/issuing/controls/advanced-fraud-tools.md)
- [Fraud challenges](https://docs.stripe.com/issuing/controls/fraud-challenges.md)
- [Cardholder authentication using 3D Secure](https://docs.stripe.com/issuing/3d-secure.md)
