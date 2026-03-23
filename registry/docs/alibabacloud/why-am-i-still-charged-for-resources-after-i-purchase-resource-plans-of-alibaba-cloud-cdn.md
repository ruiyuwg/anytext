CDN provides several types of resource plan that can be used to offset certain resource fees. However, not all resource fees are eligible to be offset by these resource plans. This topic describes why you are still charged for resources after you purchase resource plans and how to solve this issue.

## Troubleshooting

The following figure shows the troubleshooting procedure. If the problem still exists after you fix a possible cause, try proceed to the next one.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2063613571/CAEQMhiBgMDs7NynoRkiIDk4MTcxYmE4YjE3NTQ3MmJiNzViYTg0ZmEyZDIyNzk24838976_20241225143617.802.svg)

## Possible causes and solutions

After you purchase resource plans, you may still be charged for resources due to the following causes. You can resolve this issue based on the corresponding solutions.

-   **Possible cause 1: Some billable items are not included in the resource plans**
    
    The billable items of CDN include basic services and value-added services. After you activate CDN, you may be charged for multiple billable items, such as data transfer and requests. Each type of resource plan can offset only specific types of resource fees. For example, you cannot use outbound data transfer plans to offset the fees of HTTP requests for static content. In this case, the fees are deducted from your account balance. If your account balance is insufficient, overdue payments may be generated.
    
    **Note**
    
    -   For more information about billable items, see [Billing overview](/help/en/cdn/product-overview/billing-overview#concept-2331052).
        
    -   For more information about how to select resource plans, see [Guidelines for choosing resource plans](/help/en/cdn/product-overview/guidelines-for-choosing-resource-plans#concept-2102901).
        
    
    **Solution**
    
    Check your bills and confirm whether the billable items are covered by the resource plans that you have purchased. If a billable item is not covered, the fees are deducted from your account balance. If your account balance is insufficient, overdue payments may be generated.
    
    You can check whether value-added services, such as HTTPS requests for static content, are enabled. You are charged for value-added services based on the pay-as-you-go billing. The fees are deducted from your account balance. You can also purchase resource plans for value-added services. For more information, see [Billing of value-added services](/help/en/cdn/product-overview/billing-of-value-added-services/).
    
-   **Possible cause 2: The acceleration region of the resource plan is different from the region where fees are generated**
    
    When you purchase a resource plan, you must specify an acceleration region. The resource plan can offset resource fees only in the specified acceleration region. For example, Alice purchased an outbound data transfer plan for the Chinese mainland. In this case, the resource plan can offset outbound data transfer fees only in the Chinese mainland. You cannot use the resource plan to offset outbound data transfer fees in China (Hong Kong), China (Macao), China (Taiwan), or other regions outside the Chinese mainland.
    
    **Solution**
    
    If multiple acceleration regions are specified for your accelerated domain names, we recommend that you purchase resource plans for each acceleration region to ensure that resource fees in the acceleration regions can be offset. To purchase a resource plan, go to the [resource plan buy page](https://common-buy-intl.alibabacloud.com/?spm=a2796.11741934.1343434330.1.132872f043Dw5J&commodityCode=%20cdn_bag_intl#/buy).
    
-   **Possible cause 3: The metering method of CDN does not support the resource plans that you purchased**
    
    Outbound data transfer plans support only the pay-by-data-transfer metering method. If the metering method of CDN is pay-by-bandwidth or pay-by-95th-percentile, you cannot use outbound data transfer plans to offset outbound data transfer fees. In this case, the fees are deducted from your account balance. If your account balance is insufficient, overdue payments may be generated.
    
    **Solution**
    
    Change the metering method in the CDN console. For more information, see [Change the metering method](/help/en/cdn/product-overview/change-the-metering-method#task-187531).
    
-   **Possible cause 4: The amount of consumed resources has exceeded the quota of the resource plan**
    
    After you purchase a resource plan, the amount of consumed resources that exceed the quota of the plan is automatically billed based on the pay-as-you-go billing method. For example, Alice purchased an outbound data transfer plan of 100 GB and the amount of outbound data transfer in the month is 110 GB. In this case, Alice is billed for the excess 10 GB based on the pay-as-you-go billing method. If the account balance is insufficient to settle the payment, an overdue payment is generated.
    
    **Solution**
    
    -   [Configure low capacity alerts](/help/en/cdn/product-overview/configure-low-capacity-alerts#task-2056369): Low capacity alerts notify you before your resource plans are exhausted to help prevent overdue payments. To purchase a resource plan, go to the [resource plan buy page](https://common-buy-intl.alibabacloud.com/?spm=a2796.11741934.1343434330.1.132872f043Dw5J&commodityCode=%20cdn_bag_intl#/buy).
        
    -   Purchase additional resource plans: You can purchase additional resource plans to offset resource fees and prevent overdue payments. However, you cannot use resource plans to offset the fees of resources that are consumed before the resource plans are purchased.
        
    
    **Note**
    
    For more information, see [Query details about resource plans](/help/en/cdn/product-overview/query-the-details-of-resource-plans-1#concept-2047427).
    
-   **Possible cause 5: Bills are delayed**
    
    A resource plan takes effect immediately after you complete the payment. However, CDN takes 3 to 4 hours to issue a bill after a billing cycle ends. For example, the bill that was issued at 10:00:00 (UTC+8) on October 10, 2020 covers the billing cycle from 06:00:00 (UTC+8) on October 10, 2020 to 07:00:00 (UTC+8) on October 10, 2020.
    
    **Solution**
    
    After you receive a bill, check the time when the bill is issued and the billing cycle of the bill.
    

## Query cost details

You can view the billing details of cloud services on the [Billing Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) tab. Select a statistical dimension and a statistical period to view reports based on different dimensions. For more information, see [Billing details](/help/en/user-center/bill-details-2).

## **Manage resource plans**

-   **View resource plans**: You can view the purchased resource plans and the usage of the resource plans on the [Manage Reserved Instances](https://usercenter2-intl.console.alibabacloud.com/ri/summary?commodityCode=) page.
    
-   **Configure alert settings for the remaining quotas of resource plans**: You can click **Set Remaining** **Quota Alert** to configure alert settings for the remaining quotas of resource plans. If the remaining quotas of resource plans are less than the specified thresholds, the system sends you alert notifications by using methods such as text messages.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3313285371/p829182.png)
