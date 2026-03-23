**Category**

**Question**

Add a payment method

-   [What should I do if I can't add my bank card?](#c69bf01876ipm)
    
-   [What should I do if I can't link my PayPal account?](#95a226c06apt9)
    
-   [How do I handle a bank card linked to a closed account?](#e251fb5945btu)
    
-   [Can I use an unverified credit card?](#2d51d7bc7fv4p)
    
-   [Why was my credit card charged after I added it to my Alibaba Cloud account?](#c7cde3d7581mc)
    
-   [Why doesn't the verification charge appear on my bank statement?](#9a39f0c9284p2)
    
-   [Will the credit card verification charge be refunded?](#bd3e7691c967j)
    
-   [Is Alipay supported as a payment method?](#ec25975282szg)
    
-   [What payment methods does Alibaba Cloud currently support?](#b88497b1eei8x)
    

Make a purchase

-   [What is 3D Secure (3DS) authentication?](#c4f0cb5ff6hj6)
    
-   [What should I do if a payment fails?](#a2a3851babsek)
    
-   [What should I do if 3D Secure (3DS) authentication fails when adding a card or making a payment?](#bd6ea5aa51me7)
    
-   [Why can't I pay a bill in the "To Be Billed" status?](#5d03516df0pq1)
    
-   [What is a rounding discount?](#f18f49d6e8e7b)
    
-   [When are pay-as-you-go fees charged and settled?](#b614ee683d6s2)
    

Remove/update a payment method

-   [How do I remove or change a payment method?](#b60df7a09c2dr)
    
-   [Why can't I remove my default payment method?](#440627164debq)
    
-   [What should I do if my credit card is lost or stolen?](#0ed888fdbcabt)
    
-   [Can I still use PayPal after changing my Alibaba Cloud account's login email?](#d04edcf2d57tp)
    

## Add a payment method

### What should I do if I can't add my bank card?

This issue usually stems from card type restrictions, bank-side declines, or account limitations. Here's how to troubleshoot it:

1.  **Check for supported card types.** We only accept credit or debit cards with a Visa, Mastercard, AMEX, or JCB logo that are enabled for international payments. We do not support prepaid cards, virtual cards, gift cards, or cards that only have a UnionPay logo.
    
2.  **Ensure the card is not linked to another account.** Each bank card can only be linked to one Alibaba Cloud account at a time. If your card is already associated with another account (including one in its 15-day post-closure silent period), you must first remove it from that account.
    
3.  **Contact your issuing bank.** Your bank may decline the transaction if it does not support international payments or due to its internal risk control policies. Contact your bank to authorize the transaction or try a different card.
    
4.  **Verify sufficient funds for pre-authorization.** To verify your card, we initiate a USD 1.00 (or local currency equivalent) pre-authorization. This can fail due to insufficient funds or if your bank blocks the transaction. Ensure your card has adequate funds and is authorized for this type of charge.
    
5.  **Rule out browser or network issues.** Ad-blocking plugins, browser cache, or network instability can interfere with the process. Try again using Chrome's incognito mode, clearing your cache, or on a different device.
    

### What should I do if I can't link my PayPal account?

If you're unable to link your PayPal account, it's typically due to regional restrictions or a previously linked account. Check the following:

-   **Region restrictions:** The Alibaba Cloud international site does not support PayPal accounts registered in the Chinese mainland. You must use a PayPal account registered outside of the Chinese mainland.
    
-   **Account already in use:** A PayPal account can only be linked to one Alibaba Cloud account at a time. You must first disassociate it from any other Alibaba Cloud account before adding it to a new one.
    
-   **Page redirection or browser issues:** Try using Chrome's incognito mode, clearing your browser cache, or disabling ad-blocking plugins that might interfere with the authorization page.
    
-   **Authorization syncing:** If PayPal shows a successful authorization but it's not reflected in your Alibaba Cloud account, the billing agreement may not have been approved. Contact PayPal customer support to confirm its status.
    

### How do I handle a bank card linked to a closed account?

You must wait for the 15-day silent period of the closed account to end.

During this period, the card remains locked to the old account. The system will automatically unlink it after 15 days, at which point you will be able to add it to a new account.

### **Can I use an unverified credit card?**

No. For security purposes, your credit card must be successfully verified before it can be used for payments.

### **Why was my credit card charged after I added it to my Alibaba Cloud account?**

This is a temporary verification charge to confirm card ownership and secure your account. You will need this exact charge amount to complete the verification process.

Here's how to complete the verification:

1.  Check your bank statement for a recent charge with the descriptor **ALI\*ALICLOUD**. The amount will be no more than USD 1.00.
    
2.  Navigate to the [Payment Methods](http://billingnew.console.alibabacloud.com/?spm=5176.2020520001.105.4.nErTw9#/payment/list) page in the Alibaba Cloud console.
    
3.  Click **Verify** next to the card and enter the exact amount from your bank statement. You have five attempts.
    

### **Why doesn't the verification charge appear on my bank statement?**

The charge typically appears on your statement within two to three business days. However, the exact posting time depends entirely on your issuing bank's processing schedule.

### **Will the credit card verification charge be refunded?**

Yes. We initiate a refund for the verification charge within 24 hours.

The refund may take up to 30 days to appear in your account, depending on your issuing bank's processing time.

### Is Alipay supported as a payment method?

No. The Alibaba Cloud international site does not support payment methods from the Chinese mainland, such as Alipay or WeChat Pay. For a list of available options, see [Introduction to payment methods](/help/en/user-center/instruction-of-payment-management/).

### **What payment methods does Alibaba Cloud currently support?**

The available payment methods depend on your account's registration country/region and are displayed at checkout.

**Supported Methods:**

-   Credit cards and debit cards with a JCB, VISA, MasterCard, or AMEX logo.
    
-   PayPal (for accounts registered outside of the Chinese mainland).
    
-   Bank transfer (available for credit-approved customers).
    

**Unsupported Methods:**

-   Cards with only a UnionPay logo.
    
-   Prepaid cards, virtual cards, and gift cards.
    
-   PayPal accounts registered in the Chinese mainland.
    

## Make a purchase

### **What is 3D Secure (3DS) authentication?**

3D Secure (3DS) is a security protocol that adds an extra layer of identity verification for online card payments to prevent fraud. Your card-issuing bank requires you to complete this step to confirm you are the legitimate cardholder.

-   **When it is triggered:** Our system may require 3DS authentication when you add a card or make a payment if the transaction is flagged as a potential security risk. In some regions, like the European Union and Malaysia, 3DS is mandatory for all transactions due to local regulations.
    
-   **How it works:** You will be redirected to your bank's secure verification page to enter a one-time password, use a mobile app, or complete another verification step.
    
-   **What if my card doesn't support it?** You must contact your issuing bank to enable this feature or use a different card that supports 3DS.
    

### **What should I do if a payment fails?**

Start by checking the following common causes for payment failure:

1.  **Complete KYC identity verification:** If you see an error message requiring [KYC verification](https://account.alibabacloud.com/kyc/index#/kyc), you must submit the required documents. Ensure the identity information you submit matches the information used to register your Alibaba Cloud account. Failures often occur due to inconsistent information or blurry/expired documents.
    
2.  **Complete the 3D Secure (3DS) verification process:** Many payment failures occur because the 3DS step was not completed. When paying, ensure you are not closing the redirection page from your bank. You can also find a verification link in your internal messages or email to complete the process and then retry the payment.
    
3.  **Check bank card status and functionality:** If your payment fails without a 3DS prompt, contact your issuing bank to confirm that your card is enabled for international and online transactions, that 3DS is active, and that there are sufficient funds and no blocks on your account.
    
4.  **Use a supported payment method:** The Alibaba Cloud international site does not support credit cards issued in the Chinese mainland, prepaid cards, gift cards, or virtual cards. PayPal accounts registered in the Chinese mainland are also not supported.
    
5.  **Rule out browser or network issues:** Clear your browser cache, try a different browser like Chrome, or switch to another device. An unstable network or a browser plugin could be blocking the 3DS page from loading.
    

### What should I do if 3D Secure **(3DS)** authentication fails when adding a card or making a payment?

If 3DS authentication fails, follow these troubleshooting steps:

1.  **Ensure you complete the bank's verification step.** 3DS is a process handled by your bank. Check if your browser is blocking a pop-up window. If you missed it, look for a verification link in your email or account's internal messages and try again.
    
2.  **Contact your issuing bank.** If you fail multiple times, call your bank to confirm that your card is activated, supports online/international payments, has 3DS enabled, and has no transaction restrictions. The failure may be due to the bank's own risk controls.
    
3.  **Cancel the unpaid order and try again.** If the order has **Unpaid** status, you can cancel it on the order management page and create a new order. Do not close the Alibaba Cloud payment window during the 3DS redirection.
    
4.  **Try a different payment method.** If the card continues to fail, add another supported bank card and set it as your default payment method. Alternatively, try using a valid PayPal account.
    
5.  **Optimize your browser environment.** Clear your browser cache and disable any pop-up blocking plugins. Try making the payment from a different browser or device (such as a desktop PC) on a stable network connection.
    

### Why can't I pay a bill with the "To Be Billed" status?

You cannot pay a bill with the **To Be Billed** status because the charges have not yet been finalized. The official bill will be generated at the beginning of the next month, at which point you will be able to make a payment.

### **What is a rounding discount?**

The **rounding discount** is a small credit applied during the final settlement of your Pay-as-you-go fees.

Our system calculates fees with precision to three decimal places. However, when the final bill is generated, we truncate the amount to two decimal places. The truncated fraction of a cent is recorded as a "rounding discount."

### **When are pay-as-you-go fees charged and settled?**

The system automatically charges your default payment method when your accumulated Pay-as-you-go usage reaches a certain threshold.

-   **For credit cards:** The typical deduction threshold is USD 1,000 (before tax).
    
-   **For PayPal:** The threshold varies by account but is generally between USD 8 and 500 (before tax).
    

**Note**

1.  When you first enable a Pay-as-you-go service using PayPal, the system will initiate a **pre-authorization** on that PayPal account.
    
2.  In addition to threshold-triggered deductions, the system performs a **unified settlement** at the end of each month for any outstanding balances that did not reach the threshold.
    

## Remove/update a payment method

### How do I remove or change a payment method?

To manage your payment methods, log in to [**Expenses and Costs**](https://billing-cost.console.alibabacloud.com/fortune/billing-account) → **Billing Account** → **Third-Party Payment Method Binding**:

-   **To change your default method:** Add a new payment method if you don't have a second one. Then, select the desired method and click **Set as Preferred External Payment Method**.
    
-   **Delete:**
    
    -   You can only delete a payment method if it is not the default method, is not a prepayment method, and its status is **Expired** or **Non-preferred**.
        
    -   Default payment methods cannot be deleted directly. You must first add a new method and set it as the default.
        
    -   If the account has only one valid payment method and contains running resources, unfinalized bills, or overdue payments, deletion is prohibited.
        

**Note**

You cannot remove the only valid payment method in your account if you have active resources, an outstanding bill, or an overdue payment.

### Why can't I remove my default payment method?

You cannot directly remove your default payment method because at least one valid method must be on file to ensure uninterrupted service for your active resources.

To remove it, you must first add a new payment method on the **[Billing Account](https://billing-cost.console.alibabacloud.com/fortune/billing-account)** page and set it as the **Preferred External Payment Method**. After that, you will be able to delete the old one.

### What should I do if my credit card is lost or stolen?

To protect your account, add a new payment method before removing the compromised one.

-   Go to the **[Billing Account](https://billing-cost.console.alibabacloud.com/fortune/billing-account)** page and add a new, valid credit card or link a PayPal account.
    
-   Set the new method as your **default payment method**.
    
-   Remove the old card.
    

**Note**

You cannot edit details like the CVV on an existing card. To update this information, you must remove the card and add it again.

### Can I still use PayPal after changing my Alibaba Cloud account's login email?

Yes. Changing the login email for your Alibaba Cloud account does not affect your linked PayPal payment method. The existing billing agreement with PayPal remains valid.
