The automatic elasticity feature in MaxCompute enables on-demand, automatic scaling of Compute Units (CUs) and uses a pay-as-you-go billing model. The system detects workload changes in real time to automatically adjust and provide the CUs needed for your jobs. You are billed only for the automatic elastic CUs that you use. This topic describes the billing rules and usage instructions for automatic elastic CUs.

## **Resource description**

**Automatic elastic CUs**

-   **Description**:
    
    In addition to subscription and flexible reserved resources, the system detects workload fluctuations and automatically scales resources up or down to provide the CUs needed to meet job demands.
    
    One CU is equivalent to 4 GB of memory and 1 CPU core.
    
-   **Billing**:
    
    You are billed hourly for the automatic elastic CUs that you use, based on **usage volume and duration**. For more information, see [Compute fees (hourly billing)](/help/en/maxcompute/product-overview/computing-pricing-1#concept-2242142).
    

For more information about the differences between automatic elastic CUs, subscription reserved CUs, and flexible reserved CUs, see [Function Overview](/help/en/maxcompute/use-cases/auto-elastic-usage-best-practices#RHuhY).

## **Usage notes**

-   You must purchase [subscription compute resources](https://common-buy-intl.alibabacloud.com/?commodityCode=odpsplus) before you can configure and use the automatic scaling feature.
    
-   The automatic scaling feature is supported only for quotas of the **batch processing** type and is not supported for quotas of the interactive type.
    
-   When you enable automatic scaling, you must set a maximum CU value that meets your business needs to control costs. The system automatically scales resources within this limit and bills you for the actual number of automatically scaled CUs used.
    

**Important**

The automatic scaling capability of MaxCompute is subject to the availability of real-time resources.

The system makes a best effort to meet the maximum limit that you set for automatic scaling but cannot guarantee that the limit can always be reached. If your business requires guaranteed resources, configure elastic reserved CUs at the same time. These resources are reserved for you according to the time plan that you set. For burst demands that far exceed historical levels, such as during holiday sales promotions, contact us in advance to ensure a sufficient resource supply.

## **Usage instructions**

-   For more information about how to activate the subscription MaxCompute service, see [Activate MaxCompute and DataWorks](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   After you purchase a subscription instance, configure a quota on the **Quotas** page in the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and set the upper limit for auto-scaling Compute Units (CUs). For more information, see [Computing Resources - Quota Management](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#task-2242047).
    
-   After you configure the maximum CU value for automatic elasticity for a quota, see [Use compute resources (quotas)](/help/en/maxcompute/user-guide/use-of-computing-resources#task-2230539) for information about how to use the quota.
    
-   For complete steps, see [Best practices for using automatic elasticity](/help/en/maxcompute/use-cases/auto-elastic-usage-best-practices).
