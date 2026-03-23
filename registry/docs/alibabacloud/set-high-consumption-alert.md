Configure high-spending alerts to monitor changes in your spending.

## **Configure high-spending alerts**

### Legacy console

Configure the following two types of spending alerts to monitor your spending:

-   **Monthly spending alert**: Sends an email notification when your monthly spending exceeds the alert threshold.
    
-   **Available credit alert**: Sends an email notification when the available credit for credit-controlled users falls below the alert threshold. If you attach another payment method, these alert notifications will no longer be sent.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048301.png)

To ensure you receive alert notifications, configure a valid recipient for **Account Expense Notifications** in the [Message Center](https://notifications-intl.console.alibabacloud.com/subscribeMsg).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1048300.png)

### New console

You can proactively monitor your spending by configuring two types of cost alerts:

-   **Product spending alerts**: Set spending thresholds for your Alibaba Cloud services to promptly detect abnormal usage or sudden cost increases and prevent unexpected charges.
    
-   **Available credit alerts**: Receive notifications when your account's available credit falls below a set threshold. This helps you identify spending from unmanaged or newly created resources, avoid service interruptions, and promptly detect unexpected charges.
    

To ensure you receive alert notifications promptly, configure a valid recipient for **Account Expense Messages** in the [Message Center](https://notifications-intl.console.alibabacloud.com/subscribeMsg).

#### Set product spending alerts

Set daily spending alerts for pay-as-you-go products. After you enable alerts, the system sends one text message reminder per day when the daily bill for a specified product (up to 10) exceeds the alert threshold. For products billed monthly, a reminder is sent only once after the monthly bill is issued.

**Note**

For enterprise master accounts (MA), high-spending alerts apply only to the currently logged-on account, not to member accounts. To use this feature, member accounts must be configured separately by logging on to each account.

1.  **Enable spending alerts**: On the Cost Monitoring > [Cost Alerts](https://usercenter2-intl.console.alibabacloud.com/expense-manage/cost-warning) page, in the **High-Spending Alert** area, click **Details** to enable it.
    
2.  **Configure an alert**: Select an **Alert Product**, enter an **Alert Threshold**, and click the **Add** button.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1033410.png)

#### **Set** available credit alerts

When your Alibaba Cloud account's available credit falls below the set threshold, the system sends a reminder once a day by text message, email, and internal message for up to five consecutive days. Available credit is calculated using the following formula:  
`Available Credit = Cash Balance + Credit Limit + Credit Refunds - Current Month's Unsettled Amount - Historical Unsettled Amount`  

1.  Go to the **Account** > **[Billing Account](https://usercenter2-intl.console.alibabacloud.com/fortune/billing-account)** page. In the **Account Settings** section, click **Modify Threshold** next to **Available Credit Alert**.
    
2.  In the drawer panel that appears, enter **Alert Threshold**, and click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6661909671/p1033416.png)

## **FAQ**

#### **Why did I not receive a notification after setting a spending alert?**

A spending alert notification might not be delivered immediately for the following reasons:

1.  **Alerts are not real-time**: Alerts are triggered based on daily bill summaries, not at the exact moment a cost is incurred.
    
2.  **Configuration delay**: A new alert rule takes effect two days after it is created (T+2), where T is the creation day.
    
3.  **Fixed check time**: The system checks the previous day's bill at approximately 9:00 AM every day. If the amount reaches the threshold, a notification is sent.
    
4.  **Alert timeliness**: This is the time gap between when a cost is incurred and when the alert notification is sent.
    
    -   **For products billed hourly**: If a cost is incurred on Day T, the alert is triggered on Day T+1.
        
    -   **For products billed daily**: If a cost is incurred on Day T, the alert is triggered on Day T+2.
        

## **References**

-   [View and analyze bills](/help/en/user-center/bill-view)
    
-   [Bill settlement and payment](/help/en/user-center/bill-repayment-and-settlement-1)
    
-   [Understand unexpected charges](/help/en/user-center/bill-solution-troubleshooting-manual-for-common-consumer-bill-questions)
    
-   [Export and subscribe to bills](/help/en/user-center/export-and-subscribe-bills/)
