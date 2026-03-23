**Category**

**Questions**

Unified account management

-   [Why can't I transfer my account balance?](#be1e7d36d4hna)
    
-   [Why can't I transfer or revoke my account balance even though it's positive?](#2aa96f68f21u4)
    
-   [Why doesn't my credit control limit take effect after I set it?](#b2e03b2c5c5xh)
    
-   [Why am I unable to set a credit control limit?](#28a1a17745owa)
    

Equity asset sharing

-   [How many accounts can each type of benefit and asset be shared with?](#68248ad8bfsvq)
    
-   [Which accounts are eligible for benefit and asset sharing?](#d243d3d722hw4)
    
-   [When does sharing take effect after it is configured for an account?](#343ef3094c4bn)
    
-   [After I set an automatic sharing rule, when is a newly purchased asset shared?](#c383e46c1c8tw)
    

## **Unified account management**

### Why can't I transfer my account balance?

To successfully transfer an account balance, you must meet two conditions:

1.  The account you are using to perform the transfer must have the required permissions.
    
2.  Both the source and destination accounts must belong to the same company, which is verified through Alibaba Cloud's identity verification process.
    

### Why can't I transfer or revoke my account balance even though it's positive?

Your transferable and revocable balances are calculated based on specific conditions and are not the same as your total cash balance.

**To transfer a balance:**

A balance is only transferable if it meets these two conditions:

1.  It must be funds that you topped up directly into the source account. Funds that were previously transferred in from another account cannot be transferred out again.
    
2.  The source account must not have any overdue payments.
    

Therefore, the transferable amount is the lesser of these two values: (**Your Cash Balance** - **Transferred-in Balance**) or **Your Available Balance**.

**To revoke a balance:**

A balance can only be revoked if it meets these three conditions:

1.  Only a balance that was previously transferred _in_ can be revoked. If the transferred funds have already been spent, you cannot revoke your own topped-up funds to cover the amount.
    
2.  A prior transfer must have occurred from the revoking account to the destination account. You can only revoke funds from that original transaction.
    
3.  The revocation cannot cause the destination account (the account from which funds are being revoked) to have an overdue payment.
    

Therefore, the revocable amount is the minimum of these three values: the **Transferred-in Balance** of the destination account, the **Remaining Revocable Amount** between the two accounts, and the **Available Balance** of the destination account.

### Why doesn't my credit control limit take effect after I set it?

-   Your new credit control limit is not active because the initial **credit control contract** has not been confirmed.
    
    **For the first-time setup:**
    
    1.  After setting the credit control limit, you must notify the account administrator.
        
    2.  The administrator must log on to **Expenses and Costs** > **Contracts**.
        
    3.  Locate and confirm the **credit control contract**. The limit takes effect immediately after confirmation.
        
    
    An SMS notification will be sent to the mobile number associated with your account once the limit is active.
    
    **For subsequent changes:**
    
    Once the contract has been confirmed, you do not need to confirm it again for future adjustments. Any new limit will take effect automatically, and you will receive an SMS notification.
    

### Why am I unable to set a credit control limit?

The self-service transfer and credit control features may be disabled if your account meets any of the following conditions:

-   Your account is associated with an ecosystem partner, and the relationship is set to "pay on behalf."
    
-   Your account has a significant amount of accounts receivable and a history of long-overdue payments.
    

To resolve this, you must contact your business manager to request access to these features.

## **Equity asset sharing**

### How many accounts can each type of benefit and asset be shared with?

You can share each type of benefit and asset with up to 100 Alibaba Cloud accounts.

**Benefit/Asset Type**

**Maximum number of shared accounts**

Savings Plan

100

Reserved Instance

100

Storage capacity unit (SCU) package

100

Coupon

100

### **Which accounts are eligible for benefit and asset sharing?**

To be eligible for sharing, both the owner account and the recipient accounts must belong to the same company. This is validated through Alibaba Cloud's identity verification process.

### When does sharing take effect after it is configured for an account?

-   The effective time depends on how you configure the sharing:
    
    -   **Sharing with specific accounts:** The sharing relationship takes effect immediately after you save the configuration.
        
    -   **Sharing with an organization:** If you modify the accounts within an organization, the changes to the sharing relationship will take effect in about one minute.
        

**Important:** The shared benefit only applies to usage that occurs _after_ the sharing relationship becomes active. Due to billing delays, some bills for usage that occurred before you enabled sharing may be generated later. These bills are not eligible for the shared benefit.

### After I set an automatic sharing rule, when is a newly purchased asset shared?

A newly purchased asset is automatically shared according to the rule approximately 1 minute after the asset has been successfully provisioned.
