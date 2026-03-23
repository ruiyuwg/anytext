This topic describes how to set up cost monitoring alerts for Hologres. When costs exceed a specified threshold, the system sends alerts to you by phone, text message, email, or DingTalk.

## **Features**

Hologres offers two billing methods: subscription and pay-as-you-go. The pay-as-you-go method includes billable items such as time-based elastic compute resources and Serverless Computing resources. You can monitor your pay-as-you-go or overall spending to prevent unexpected costs. Hologres provides the following methods for cost monitoring and alerts:

-   [Budget management](#7a3d91681e87j): Use the Budget Management module in Alibaba Cloud Expenses and Costs to set a cost budget and an alert threshold for a specific period and for specific types of costs. If the actual or predicted cost reaches the specified threshold, the system sends an alert notification.
    

## **Budget management**

Use the **Costs** > **Budget Management** module in Alibaba Cloud Expenses and Costs to set a pay-as-you-go cost budget and a corresponding alert threshold for Hologres. You can set the budget on a yearly, quarterly, or monthly basis. When the actual or predicted cost reaches the specified alert threshold, the system sends an alert notification.

1.  Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/) console. In the navigation pane on the left, click **Costs** > **Budget Management**.
    
    **Note**
    
    If this is your first time using the budget management feature, you must enable it. On the **Budget Management** page in Expenses and Costs, click **Enable for Free**. The feature is available 24 hours after you enable it, provided that consumption data is generated.
    
2.  Create a budget.
    
    Create a budget. For more information, see [Budget management](/help/en/user-center/how-to-manage-a-budget). The key parameter settings are as follows:
    
    **Parameter**
    
    **Description**
    
    Select Budget Type
    
    Select **Cost Budget**.
    
    Set Budget - Budget Scope
    
    The specific scope that the budget covers.
    
    Multiple combinations are available. Combine settings as needed, such as region, product details (subscription or pay-as-you-go products), and consumption type (subscription or pay-as-you-go), to achieve more granular budget management and alerting.
    
3.  Confirm the budget information.
    
    After you confirm that the budget information is correct, click **Submit**. A budget and its corresponding alerts are then created.
