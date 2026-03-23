Alibaba Cloud supports three payment methods: bank cards, PayPal, and bank transfers. This topic describes the usage conditions and procedures for each payment method.

## **Payment Method Comparison**

**Comparison Item**

**Bank Card**

**PayPal**

**Bank Transfer**

**Applicable Users**

Individual/Enterprise account

Individual/Enterprise account

Enterprise credit-approved users only

**Adding Procedure**

Enter card information → Pre-authorization

Redirect to PayPal for authorization and linking

Contact your account manager to enable

**Crediting Time**

Instant

Instant

2-4 days

**Payment Trigger**

-   Upfront deduction
    
-   Pay-as-you-go: automatic deduction when accumulated to 1,000 USD
    

-   Instant upfront payment
    
-   For pay-as-you-go services, your account is automatically charged when your accumulated fees reach an amount between USD 8 and USD 500.
    

-   Monthly bill generated: manual/automatic payment and settlement
    

**Service Fee**

None (foreign currency conversion fee charged by issuing bank)

None

None (cross-border remittance fee charged by bank)

**Credit Limit Management**

Depends on card limit

Depends on PayPal balance/linked card

Use credit limit, repay monthly

## **Use Bank Cards and PayPal for Payments**

Available payment methods depend on your **account registration region**:

**Payment Method**

**United States**

**EU Member States**

**European Countries (Non-EU)**

**Malaysia**

**Other Countries/Regions**

Bank Card

Visa

Supported

Supported

Supported

Supported

Supported

Mastercard

Supported

Supported

Supported

Supported

Supported

American Express

Supported

Supported

Supported

Not supported

Supported

JCB

Not supported

Not supported

Not supported

Not supported

Supported

PayPal

Supported

Not supported

Supported

Not supported

Supported

**Note**

**Other Countries/Regions** include, but are not limited to, Singapore, Japan, South Korea, Australia, Hong Kong (China), Taiwan (China), and Macao (China).

The following payment types are not supported:

-   **Cards with only a UnionPay logo**: Your bank card must display a logo from an international card network, such as Visa, Mastercard, AMEX, or JCB.
    
-   **Prepaid, virtual, or gift cards**: These cards cannot complete pre-authorization.
    
-   **PayPal accounts registered in the Chinese mainland**: Use a PayPal account registered outside the Chinese mainland.
    
-   **Third-party payment methods within the Chinese mainland**: Alipay and WeChat Pay are not supported.
    

### **Link a Bank Card or PayPal Account**

Each bank card or PayPal account can be linked to only one Alibaba Cloud account. If your bank card or PayPal account is already linked to another account—including a deactivated account still in its cool-down period—you must first unlink it from that account.

#### **Link a Bank Card**

Before linking a bank card, ensure it meets these conditions:

-   The bank card is enabled for online payments and international transactions.
    
-   The card has a sufficient balance or credit limit to cover a $1.00 USD pre-authorization.
    
-   The bank card is enabled for [3D Secure authentication](#303f67fe804qg). In some countries or regions, such as Malaysia and EU member states, 3D Secure authentication is required when linking a card due to regulatory requirements.
    

1.  Log on to the **Expenses and Costs** console, go to the **[Billing Account page](https://billing-cost-intl.aliyun.com/fortune/billing-account)**, and in the **Third-party Payment Method Binding** area, click **Add Payment Method**.
    
    **Note**
    
    If you are using the legacy Expenses and Costs console, click **[Payment Method Management](https://usercenter2-intl.console.alibabacloud.com/billing/#/payment/list)**, and select **Add Payment Method**.
    
2.  Select **Bind bank card**, and fill in the required information.
    

**Field**

**Description**

Card Number

None

Expiration Date

MM/YY format. You cannot add a card that expires in the current month.

CVV

Security code, 3 or 4 digits on the back of the card.

Cardholder Name

Matches the name on the bank card.

3.  Click **Submit**. The system initiates a $1.00 USD pre-authorization. Your bank statement shows ALIBABACLOUD.COM. The issuing bank usually cancels it automatically within one to five business days.
    
4.  After successful pre-authorization, the bank card is linked. The first linked bank card is set as the **Preferred External Payment Method** by default. You can use it once its **Payment Method Status** changes to "Active".
    

**Note**

Alibaba Cloud does not charge a service fee for bank card payments. If the bank card’s settlement currency differs from the transaction currency, the issuing bank may charge a foreign currency conversion fee. Contact your issuing bank for details.

**Note**

3D Secure (3DS) is an online payment security protocol. It triggers authentication when you **link a bank card** or **place an order** (purchase, upgrade, or renew instances) if the system detects potential security risks.

When triggered, you are automatically redirected to your issuing bank’s verification page. Complete identity verification as prompted—for example, enter a dynamic verification code or password.

Keep the Alibaba Cloud page open during verification. Do not close the original window. If your browser blocks pop-ups, configure it to allow them.

After successful verification, you are automatically redirected back to Alibaba Cloud. Continue with your operation.

#### **Link a PayPal Account**

1.  Log on to the **Expenses and Costs** console, go to the **[Funding Account](https://billing-cost-intl.aliyun.com/fortune/billing-account)** page, and in the **Third-party Payment Methods Binding** section, click **Add Payment Method**.
    
2.  Select **PayPal**, click **Next**, and you are redirected to the PayPal website.
    
3.  Log on to your PayPal account and confirm the payment agreement. The system automatically adds PayPal as a payment method and initiates a $1.00 USD pre-authorization.
    

**Note**

-   To use the legacy Expenses and Costs console, click **[Payment Method Management](https://usercenter2-intl.console.alibabacloud.com/billing/#/payment/list)**, and select **Add Payment Method**.
    
-   If your PayPal account has no bank card or other funding source, PayPal may require you to add one. For related issues, contact PayPal customer service.
    
-   If PayPal authorization succeeds but Alibaba Cloud does not show successful linking, the payment agreement may not have been approved. Contact PayPal customer service to confirm.
    

### **How to Pay**

After successfully linking a bank card or PayPal account, you can pay when purchasing or using resources:

-   Subscription resources (such as subscription ECS instances): Payment is processed immediately when you place an order.
    
-   Pay-as-you-go resources (such as pay-as-you-go ECS instances): Automatic deduction occurs when accumulated consumption reaches a specific amount.
    
    -   Bank card default deduction threshold: $1,000 USD (before tax).
        
    -   PayPal deduction threshold: $8–$500 USD (varies by account).
        
    -   After the monthly bill is generated, the system deducts all pay-as-you-go bills that did not reach the deduction threshold.
        

**Note**

If PayPal is your default payment method, the system pre-authorizes the PayPal account when you use pay-as-you-go products.

### **Switch Payment Methods**

To switch payment methods:

1.  First, ensure your account has at least one other **Active** payment method.
    
2.  Log on to the **Expenses and Costs** console. In the payment method list, select the target payment method, and set it as the **Preferred External Payment Method**.
    

### **Delete or Unlink a Payment Method**

To delete a payment method, consider its **status** and the **number** of payment methods:

-   When multiple payment methods are attached: **expired** or **non-default payment methods** can be deleted directly. You cannot delete the **Preferred External Payment Method**.
    
-   Only one **Active** payment method: You cannot delete it if you have running resources, outstanding bills, or overdue payments.
    

## **Use Bank Transfer**

Bank transfer is available only for enterprise credit-approved users. To use it, contact your account manager.

After enabling credit control, use your credit limit to purchase resources. After the monthly bill is generated, repay via bank transfer by the invoice due date.

Alibaba Cloud provides two remittance methods:

**Method Comparison**

**Dedicated Remittance Account (Recommended)**

**Non-Dedicated Remittance Account**

Type

Uniquely assigned to each Alibaba Cloud account.

Public account specified in the contract or agreed upon with your account manager.

Crediting Method

Automatically credited to your Alibaba Cloud account balance after the bank transfer.

Requires contacting your account manager to claim and top up.

Procedure

Obtain dedicated remittance account → Remit funds → Automatic crediting

Obtain account → Remit funds → Contact to claim → Wait for approval → Funds credited

**Note**

It takes approximately two to four days from initiating the remittance to Alibaba Cloud processing it. The actual crediting time depends on your bank’s processing speed.

The following sections describe how to perform both types of bank transfers.

#### **Remit Funds via a Dedicated Account**

## New Console

1.  Log on to the **Expenses and Costs** console, go to the **[Funding Account](https://billing-cost-intl.aliyun.com/fortune/billing-account)** page, and click **Top-up & Remittance**.
    
2.  Go to the **Add Funds** page, select the **Top-up Account**, click **Corporate Bank Transfer**, and view your dedicated bank transfer account.
    
3.  If you need verification documents for a dedicated account, click **Download Remittance Application Form** to download them.
    
4.  Transfer funds to the dedicated account using online banking, mobile banking, an ATM, or a bank counter.
    
5.  The remitted amount is automatically credited to your account balance. Check and confirm promptly.
    

**Note**

Supported corporate remittance bank accounts vary by country. The information displayed in the console prevails.

The dedicated bank account is for your current Alibaba Cloud account only. Do not use it for other accounts.

## Legacy Console

1.  On the Account Balance page in Expenses and Costs, click **[Account Balance](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/balance)**, and then click **Recharge**.
    
2.  On the [Bank Transfer](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/deposit) page, view your dedicated bank transfer account.
    
3.  Transfer funds to the dedicated account using online banking, mobile banking, an ATM, or a bank counter.
    
4.  The remitted amount is automatically credited to your account balance. Check and confirm promptly.
    

**Note**

Supported corporate remittance bank accounts vary by country. The information displayed in the console prevails.

The dedicated bank account is for your current Alibaba Cloud account only. Do not use it for other accounts.

#### **Remit Funds via a Non-Dedicated Account**

1.  Transfer funds to Alibaba Cloud’s receiving bank account using online banking, mobile banking, an ATM, or a bank counter.
    
2.  After remittance, contact your account manager to claim the payment. Only then can the funds be credited to your account balance.
    

#### **Automatic Settlement Settings**

The system enables **Automatic Write-off** or **Automatic Monthly Bill Payment** by default, and automatically processes payments in chronological order of the bills after the remittance is received.

In the new **Expenses and Costs** console, you can enable or disable **Automatic Settlement** on the **[Billing Account](https://billing-cost.console.alibabacloud.com/fortune/billing-account)** page.

Using the legacy **Expenses and Costs** console, you can enable or disable **Automatic Monthly Bill Payment** in the **Available Credit Limit** section of the **[Account Overview](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)** page.

If disabled, manually pay bills. Transfer funds promptly by the invoice due date.

**Note**

If a credit-approved user also links a bank card, the bank card is not used for automatic payments.

## **FAQ**

### What should I do if I can't add my bank card?

This issue usually stems from card type restrictions, bank-side declines, or account limitations. Here's how to troubleshoot it:

1.  **Check for supported card types.** We only accept credit or debit cards with a Visa, Mastercard, AMEX, or JCB logo that are enabled for international payments. We do not support prepaid cards, virtual cards, gift cards, or cards that only have a UnionPay logo.
    
2.  **Ensure the card is not linked to another account.** Each bank card can only be linked to one Alibaba Cloud account at a time. If your card is already associated with another account (including one in its 15-day post-closure silent period), you must first remove it from that account.
    
3.  **Contact your issuing bank.** Your bank may decline the transaction if it does not support international payments or due to its internal risk control policies. Contact your bank to authorize the transaction or try a different card.
    
4.  **Verify sufficient funds for pre-authorization.** To verify your card, we initiate a USD 1.00 (or local currency equivalent) pre-authorization. This can fail due to insufficient funds or if your bank blocks the transaction. Ensure your card has adequate funds and is authorized for this type of charge.
    
5.  **Rule out browser or network issues.** Ad-blocking plugins, browser cache, or network instability can interfere with the process. Try again using Chrome's incognito mode, clearing your cache, or on a different device.
    

### **What should I do if a payment fails?**

Start by checking the following common causes for payment failure:

1.  **Complete KYC identity verification:** If you see an error message requiring [KYC verification](https://account.alibabacloud.com/kyc/index#/kyc), you must submit the required documents. Ensure the identity information you submit matches the information used to register your Alibaba Cloud account. Failures often occur due to inconsistent information or blurry/expired documents.
    
2.  **Complete the 3D Secure (3DS) verification process:** Many payment failures occur because the 3DS step was not completed. When paying, ensure you are not closing the redirection page from your bank. You can also find a verification link in your internal messages or email to complete the process and then retry the payment.
    
3.  **Check bank card status and functionality:** If your payment fails without a 3DS prompt, contact your issuing bank to confirm that your card is enabled for international and online transactions, that 3DS is active, and that there are sufficient funds and no blocks on your account.
    
4.  **Use a supported payment method:** The Alibaba Cloud international site does not support credit cards issued in the Chinese mainland, prepaid cards, gift cards, or virtual cards. PayPal accounts registered in the Chinese mainland are also not supported.
    
5.  **Rule out browser or network issues:** Clear your browser cache, try a different browser like Chrome, or switch to another device. An unstable network or a browser plugin could be blocking the 3DS page from loading.
    

### **How do I check the region associated with my account?**

Log on to the Alibaba Cloud Management Console. Go to Account Center > [Basic Information](https://account-console.alibabacloud.com/?spm=a3c0i.30484483.9556232360.15.4b5d58dbttVNJ1#/basicInfo) to view the country or region and registration time you provided during account setup.

### **Can I use an unverified credit card?**

No. For security purposes, your credit card must be successfully verified before it can be used for payments.

### **Will the credit card verification charge be refunded?**

Yes. We initiate a refund for the verification charge within 24 hours.

The refund may take up to 30 days to appear in your account, depending on your issuing bank's processing time.
