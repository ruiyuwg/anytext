The hybrid billing mode lets you add elastic computing resources to your subscription. It combines the flexibility of pay-as-you-go with the cost-effectiveness of a subscription to provide an optimized billing strategy. This topic describes the scenarios and billing rules for hybrid billing and explains how to enable and use elastic computing resources.

## **Precautions**

-   Pay-as-you-go for elastic resources can be enabled only for subscription workspaces that are in the running state.
    
-   Hybrid billing workspaces cannot be converted to subscription or pay-as-you-go workspaces.
    

## **Hybrid billing description**

**Attribute**

**Description**

Scenarios

Your business has a stable baseline of resource usage but experiences temporary usage spikes.

Billing rule

**Hybrid billing workspace cost = Subscription quota cost + Elastic resource usage cost**

-   Subscription quota cost: `Number of CUs × Unit price per CU × Subscription duration`. For more information, see [Subscription](/help/en/emr/emr-serverless-spark/product-overview/computing-resources-package-year-and-package-month).
    
-   Elastic resource usage cost: The cost is calculated and billed for each cycle (1 hour) based on the actual elastic computing resources consumed. The calculation method and unit price are the same as the pay-as-you-go rules for Serverless Spark. For more information, see [Pay-as-you-go](/help/en/emr/emr-serverless-spark/product-overview/compute-resources-pay-as-you-go).
    

**Important**

The subscription quota cost is subject to the subscription payment page or the final bill. For the elastic computing resource cost, see your bill. For more information, see [Query bills](/help/en/emr/emr-serverless-spark/product-overview/view-bills).

For example, take the China (Hong Kong) region. The **Maximum Pay-as-you-go Quota** is 100 CU, and the unit price for elastic computing resources is USD 0.074048/CU/hour. The actual usage is 50 CU, used only during peak hours for 1 hour per day. If the workspace has a subscription quota of 100 CU, a unit price of USD 35.54/CU/month, and a subscription duration of 1 month, the costs for the workspace are:

-   Subscription quota cost: `100 CU × USD 35.54/CU/month × 1 month = USD 3,554`.
    
-   Elastic resource cost: `50 CU × USD 0.074048/CU/hour × 1 hour × 30 = USD 111.072`.
    

The estimated cost for the workspace is `USD 3,554 + USD 111.072 = USD 3,665.072`.

## **Enable and use elastic resources**

1.  Go to the EMR Serverless Spark workspace page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
2.  On the **Spark** page, in the **Actions** column for the target subscription workspace, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1224860471/p920569.png)** > **Enable hybrid biiling**.
    
3.  In the dialog box, adjust the **Maximum Pay-as-you-go Quota** parameter and click **OK**.
    
    **Note**
    
    -   When you enable elastic billing, the **Billing Method** for the workspace changes from **Subscription** to **Mixed Payment**.
        
    -   After you enable elastic billing, elastic computing resources are allocated to the **pay\_as\_you\_go** queue by default. You can change this allocation on the **Queues** tab of the **Resource** page. For more information, see [Manage resource queues](/help/en/emr/emr-serverless-spark/user-guide/queue-management).
        
    -   The hybrid billing queue feature is a whitelist feature. To use this feature, you must submit a ticket.
        
    
4.  As needed, submit tasks to a queue that has elastic computing resources.
    

## **View elastic computing resource usage**

1.  Go to the EMR Serverless Spark workspace page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
2.  On the **Spark** page, click the target workspace.
    
3.  In the left navigation pane, click **Resources**. On the **Queues** tab, you can view elastic computing resource allocation and usage.
