A billing account is used to settle payments for Alibaba Cloud services and manage your cash balance, credit limit and third-party payment methods. This topic describes the basic concepts and key features of billing accounts to help you efficiently manage your account assets.

## Introduction to billing accounts

A billing account is a digital wallet for settling payments when you purchase and use Alibaba Cloud products. It helps you manage all your cloud spending assets in one place, including your cash balance, credit limit, coupons, cash coupons.

### **Relationship between an Alibaba Cloud account and a billing account**

**Alibaba Cloud account**: An identity credential registered on the official Alibaba Cloud website. It is used to log on, purchase, and manage cloud resources.

**Fund Account**: An account used to settle fees, store funds and vouchers, and manage third-party payment methods.

After you register an Alibaba Cloud account, a default billing account is automatically created. An Alibaba Cloud account and a billing account can have a payment relationship and a management relationship:

-   Payment relationship: Fees incurred from using Alibaba Cloud services can be settled through a billing account.
    
    -   Each Alibaba Cloud account can use only one billing account for payments.
        
    -   Each billing account can be used to pay for multiple Alibaba Cloud accounts.
        
-   Management relationship: By default, an Alibaba Cloud account can only manage its own billing account. After you enable the Enterprise Account Center feature, you can establish financial links between multiple accounts within your enterprise.
    
    -   The administrator account of an enterprise has management permissions for all accounts within the enterprise.
        
    -   Each billing account can be configured with multiple administrator accounts.
        
    -   One Alibaba Cloud account can manage multiple billing accounts at the same time.
        

## **How to use**

By default, only a **root account** can access and manage billing account information. If a Resource Access Management (RAM) user needs to manage or view financial information, you can grant fine-grained permissions.

-   **Financial administrator permissions**: Grant the `AliyunBSSFullAccess` policy to a RAM user. The user will have all financial management permissions, including top-up, withdrawal, and payment.
    
-   **Read-only permissions**: Grant the `AliyunBSSReadOnlyAccess` policy to a RAM user. The user can only view financial and billing information and cannot perform write operations.
    

Log on to the **Expenses and Costs** console. In the navigation pane on the left, click **Account** > **Billing Account** to go to the [**Billing Account**](https://billing-cost.console.alibabacloud.com/fortune/billing-account) page.

The billing account page lets you query and manage the following information: **Basic Information**, **Asset Information**, **Account Settings**, **Bind Third-party Payment Method**, **Manage Billing Accounts**, and **Account Administrator**.

**Note**

The billing account feature is available only in the new Expenses and Costs console. If you are using the Legacy Console, click **Try New Version** in the lower-left corner to switch. If this button is not available, wait for the system to be upgraded. For more information, see [Grayscale upgrade of the new Expenses and Costs console](/help/en/user-center/product-overview/announcement-cost-and-cost-new-version-of-console-grayscale-upgrade).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4491180771/p1053062.png)

### **View basic information**

The **Basic Information** section displays the account name, account ID, owner, and status.

-   **Account Name**: The alias of the account. The account administrator or an account that is granted the **ModifyBillingAccount** permission can change the name.
    
-   **Account ID**: The unique numeric identifier of the account.
    
-   **Account Type**: The type of the billing account. This can be a direct customer account, which settles payments directly with Alibaba Cloud, or an ecosystem account, which is linked to a distribution or virtual operator partner and settles payments with the partner.
    
-   **Owner**: The owner of the billing account. For an enterprise account, the enterprise name is displayed. For an individual account, the name used for individual identity verification is displayed.
    
-   **Created At**: The time when the billing account was created.
    
-   **Account Status**: The current status of the account, such as **Valid**, **Frozen**, or **Deregistered**.
    

### **Manage account assets**

The **Asset Information** section displays the current **Available Credit** of the account and its detailed composition. You can view the change history for each asset.

**Available Credit** is the asset balance minus any unsettled fees for the account. The credit is updated in real time. If your account has overdue payments, the available credit may be a negative value.

The formula for calculating the available credit varies based on the account type:

-   **Alibaba Cloud direct customer account**: `Available Credit` = `Cash Balance` + `Credit Limit` + `Credit Refund` - `Unsettled Amount for Current Month` - `Unsettled Amount from Previous Months`.
    
-   **Ecosystem account**: `Available Credit` = `Quota` - `Quota Consumption Ledger Amount` - `Unbilled Amount`.
    

## **Credit limit**

**Credit control** refers to the right to spend on credit that Alibaba Cloud grants to enterprise users.

The **credit limit** is the specific credit amount granted to a user. Within this limit, an enterprise account can make purchases without topping up cash in advance.

**Entity-level credit control** is the total credit limit requested based on an enterprise entity, identified by its Unified Social Credit Code. It is attached to the enterprise entity that completed the identity verification for the Alibaba Cloud account.

**Note**

Credit control is available for Alibaba Cloud direct customer accounts. After credit control is enabled for an account, the credit limit information is displayed. To use the credit control feature, contact your account manager.

The **Regular Bank Credit** section shows the current credit limit of the account. Click **Change Records** to view the history of credit limit adjustments. This includes the account's **Credit Information** and **Credit Record**. The **Credit Record** provides detailed records of credit limit increases or decreases, including the **Transaction ID**, **Transferred At**, and **Amount Before Transaction**.

**Regular Bank Credit Refund** is the balance generated from refunds for purchases made using your credit limit. This balance is recorded in the ledger for the month the refund occurred and, by default, can only be used to automatically offset bills for the current and subsequent months. To automatically offset bills from earlier months, enable **Write off Previous Bills**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516444571/p794934.png)

**Important**

After you enable the **Write off Previous Bills** feature, the system uses the credit refund to clear unsettled amounts from historical bills in chronological order. This may cause a discrepancy between the unsettled amount and the invoiceable amount for the cleared month's bill.

## **Cash balance**

The **Cash Balance** section shows the real-time remaining cash assets in your account. This mainly includes cash from top-ups and cash returned to the account from refunds or adjustments.

Credit control users can click the **Top-up & Remittance** button on the right. make a corporate bank transfer.

If you choose to transfer funds to a public account for a corporate bank transfer, you must use **Remittance** to manually claim the amount for your account.

For more information, see [Payment methods](/help/en/user-center/instruction-of-payment-management/).

**Note**

This feature is available for Alibaba Cloud direct customer accounts.

## **Quota information**

For ecosystem users, the billing account page displays information such as your quota. This includes:

-   **Quota**: Shows the quota configured for your account by your associated partner, and the history of quota changes.
    
-   **Quota Consumption Ledger Amount**: Shows the ledger balance that has been consumed and deducted from your account, and the history of quota consumption changes.
    

The **Income and Expenditure Details** section records the monthly summary of transaction amounts for income and expenses in your account, along with detailed transaction records. You can click the **Income and Expenditure Details** button next to **Regular Bank Credit Refund** or **Cash Balance** to search and view the details. For more information, see [View income and expense details](/help/en/user-center/view-account-income-and-expenditure-details).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516444571/p894553.png)

### **Account settings**

The **Account Settings** section lets you set and manage **Service Suspension**, **Low Balance Alerts**, **Automatic Write-off**, and **Settlement Currency**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516444571/p894558.png)

**Service Suspension** is a protective feature for pay-as-you-go resources. If your account has an overdue payment, this feature enables your resources to continue running for a specified period or within a defined credit limit. This provides a grace period for you to resolve the payment issue and prevents immediate service disruption. During this period, your services are billed as usual, and the fees are added to your outstanding balance. For more information, see [Delayed Suspension for Overdue Payments](/help/en/user-center/grace-period).

**Low Balance Alerts** helps you monitor balance changes, detect unexpected spending promptly, and prevent service interruptions due to insufficient balance. Enable **Low Balance Alerts** and customize the **Alert Threshold**. When your available credit falls below this threshold, the system sends an alert notification through internal messages, or emails. Reminders are sent once a day for up to five consecutive days. If a payment is already overdue, an overdue payment notification is sent directly. For more information, see [Monitor your account balance](/help/en/user-center/monitor-account-balances).

You can use the **[Automatic Bill Settlement](https://usercenter2-intl.console.alibabacloud.com/fortune/billing-account)** feature to automatically settle your bills. The **Automatic Bill Settlement** feature is enabled by default and cannot be disabled for users who are not on credit control. Users on credit control can check whether this feature is enabled in the **[Funding Account](https://usercenter2-intl.console.alibabacloud.com/fortune/billing-account) >** **Account Settings** section.

-   After **Automatic Write-off** is enabled, the system automatically clears bills based on their generation time using your account assets. This includes cash coupons, credit refunds, and cash balance.
    
-   If you disable **Automatic Write-off**, the system will not automatically clear bills. You must manually select bills to clear them.
    
    **Important**
    
    For enterprise users, if an administrator initiates the unified settlement feature for your account while a custom settlement bill is being processed, the system automatically disables the automatic write-off feature. Do not enable automatic write-off at this time to avoid write-off errors during unified settlement.
    

By default, Alibaba Cloud uses USD for billing and settlement. You can change the **Settlement Currency** to EUR, SGD, or HKD. The settlement currency is set on a monthly basis and takes effect the following month. For more information, see [Manage your settlement currency](/help/en/user-center/modify-payment-currency).

### **Add a third-party payment method**

Click **Add Payment Method** to attach an bank card or PayPal account to your billing account. For more information, see [Payment methods](/help/en/user-center/instruction-of-payment-management/).

### **Manage payment relationships for multiple accounts**

When you register an Alibaba Cloud account, the system automatically creates a default billing account to settle payments for it.

In an enterprise financial management scenario, after an account linking is established between a management account and member accounts, the system marks the relationship as **Active**. This indicates that financial management features such as payment, credit control, and benefit sharing are enabled between the accounts.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516444571/p733634.png)

To simplify operations such as payment and bill settlement, an administrator account can click **Add Account** to set up one billing account to pay for multiple Alibaba Cloud accounts, or click **Change Payment Account** for an existing account.

**Note**

To set up account payment relationships, you must first enable the Enterprise Account Center feature and invite accounts with the same enterprise identity verification to manage the payer accounts.

### **Set account administrators**

The **Account Administrator** setting is designed for enterprise financial management scenarios. It allows enterprise administrators to centrally manage accounts and set management accounts for a billing account.

**Note**

To set account administrators, you must first enable the Enterprise Account Center feature and invite accounts with the same enterprise identity verification for unified management. The administrator can then designate specific accounts to manage the billing account.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516444571/p894598.png)

-   Account administrator types include **Super Administrator** and **Regular Administrator**:
    
    -   **Super Administrator**: The system automatically grants this permission to the enterprise's management account (MA). This permission cannot be revoked.
        
    -   **Regular Administrator**: This permission is manually granted by a super administrator and includes the permission to **modify the billing account**.
        
-   Add an account administrator:
    
    -   Click the **Add** **Account Administrator** button. In the dialog box that appears, select the Alibaba Cloud accounts that you want to authorize to manage this billing account, and then click **Confirm**. The new administrator accounts appear in the account administrator list.
        
    -   You can add multiple Alibaba Cloud accounts as administrators at a time, with a maximum of 20 accounts per operation.
        
-   Remove an account administrator:
    
    -   In the account administrator list, find the Alibaba Cloud account and click **Revoke Authorization** in the Actions column. In the dialog box that appears, click **OK**.
        
    -   After the authorization is revoked, the account no longer appears in the account administrator list.
        

## FAQ

### **Why is there a discrepancy between my bill amount and the change in my cash balance?**

The system prioritizes the use of your credit limit and coupons. Check your bill to see if a credit limit or coupons were used to offset part of the cost. Your cash balance is only deducted after these assets are depleted.

### **Where did my requested refund go?**

Order refunds are typically returned through the original payment method or credited to your Alibaba Cloud billing account as cash balance. You can go to the **Expenses and Costs** > **Resource Unsubscription** page to view the processing status and destination of each refund.
