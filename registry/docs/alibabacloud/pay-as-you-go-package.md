After you create a pay-as-you-go E-MapReduce (EMR) Serverless StarRocks instance, you can change the billing method of the instance from pay-as-you-go to subscription. The subscription billing method allows you to reserve resources in advance and can be more cost effective for long-term use. This topic describes how to change the billing method of an instance from pay-as-you-go to subscription.

## Prerequisites

The instance whose billing method you want to change meets the following requirements:

-   The instance belongs to your Alibaba Cloud account.
    
-   The instance does not have an unpaid order for a billing method change.
    
    If an unpaid order exists, you must cancel the unpaid order and place a new order to change the billing method.
    
-   The instance is in the running state.
    

## Procedure

1.  Go to the list page of an EMR Serverless StarRocks instance.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
2.  On the StarRocks page, find the desired instance and click the instance name in the Instance ID / Name column.
    
3.  On the Instance Details tab of the page that appears, click **Switch to Subscription** to the right of the **Billing Method** parameter.
    
4.  In the **Switch to Subscription** panel, configure the **Subscription Duration** parameter, read the **terms of service**, and then click **OK**.
