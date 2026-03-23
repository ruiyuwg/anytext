The log analysis feature of Security Center centrally stores and manages all security-related full logs. It provides a unified entry point for queries and analysis to help you quickly identify issues and meet compliance audit requirements.

## Enable and configure log analysis

1.  **Log on to the console**
    
    Go to the [Risk Governance - Log Analysis page of the Security Center console](https://yundun.console.alibabacloud.com/?p=sas#/logAnalyze/ap-southeast-1). In the upper-left corner of the page, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  **Authorize the service** (for first-time users)
    
    If you are using this feature for the first time, follow the on-screen instructions and click **Authorize Immediately**.
    
    **Note**
    
    After the authorization is successful, the system automatically creates the RAM role `AliyunServiceRoleForSas`. Security Center uses this role to access your resources in other Alibaba Cloud services for unified security protection and management. For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center#task-2259909).
    
3.  **Configure and complete the purchase**
    
    After the authorization is successful, you are redirected to the Security Center purchase page. Configure the following parameters:
    
    -   **Edition**: Select the required Security Center edition. For more information about the editions, see [Editions](/help/en/security-center/user-guide/purchase-security-center#cc2751151dw7w).
        
    -   **Log Analysis**: Set **Purchase or Not** to **Yes**, and set the monthly **storage capacity** based on your requirements.
        
    -   **Subscription Duration**: Select a subscription duration for the service.
        
4.  Read and select **I have read and agree to the Security Center Product Agreement**. Then, click **Order Now** and complete the payment.
    
5.  **Create a Logstore**
    
    After you enable the service, Security Center automatically creates a Project (`sas-log-{Alibaba Cloud account ID}-{region ID}`) and a Logstore (`sas-log`) in [Simple Log Service](https://sls.console.alibabacloud.com) in the region where your assets are located.
    
    **Important**
    
    -   For more information about the mapping between asset regions and log storage regions, see [Log storage regions](#cf138155c01hu).
        
    -   Do not delete the Project and Logstore. If you delete the Project and Logstore, your log data will be lost and cannot be recovered.
        
    

## Billing

Log analysis is a value-added feature. The fees for this feature are separate from the fees for the Security Center edition that you purchase.

-   **Billing method:** Only the subscription billing method is supported.
    
-   **Billable item**: You are charged for the subscribed **log storage capacity**.
    
    **Note**
    
    If the purchased **log storage capacity** is not consumed in the current month, the remaining capacity does not carry over to the next month.
    
-   **Pricing**: USD 0.1/GB/month.
    
-   **Recommended capacity**: China's Cybersecurity Law requires that you store logs for at least 180 days. We recommend that you allocate 50 GB of log storage capacity for each server. You can adjust the storage capacity during purchase based on your actual log volume.
    
-   **Cost estimate example**: Assume that you enable log analysis for 10 servers and allocate 50 GB of storage capacity for each server. The total capacity is 500 GB. In the Chinese mainland, the monthly log storage fee is: .
    

## Quotas and limits

-   **Log storage region limits**
    
    The log storage region is determined by the region where your assets are located. You cannot customize the storage region.
    
    **Asset region**
    
    **Log Project region**
    
    **Region ID**
    
    **Description**
    
    The Chinese mainland
    
    China (Hangzhou)
    
    `cn-hangzhou`
    
    The logs of assets in the Chinese mainland are stored in a Project in the China (Hangzhou) region.
    
    Outside the Chinese mainland
    
    Singapore
    
    `ap-southeast-1`
    
    The logs of assets outside the Chinese mainland, including Hong Kong (China), are stored in a Project in the Singapore region.
    
-   **Logstore limits**
    
    To ensure data integrity and a unified format, the dedicated Logstore for log analysis (named sas-log) has the following limits:
    
    -   You cannot write data to the Logstore using methods such as an API or an SDK.
        
    -   You cannot modify the properties of the Logstore, such as the storage period.
        

## FAQ

-   **What do I do if the purchased storage capacity is exhausted?**
    
    -   **Impact**: If the storage capacity is exhausted, new logs cannot be written.
        
    -   **Solution**: On the [Overview page of the Security Center console](https://yundun.console.alibabacloud.com/?p=sas#/overview/home), in the **Subscription** section, click **Change Specifications** > **Upgrade Now**. For more information, see [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
        
-   **I am already using Simple Log Service (SLS). Do I still need to enable log analysis for Security Center?**
    
    Yes, you do. The following list compares the features of the two services:
    
    -   **Self-managed SLS**: Typically collects operating system or application logs from servers.
        
    -   **Log analysis**: In addition to collecting basic host logs, this feature also centrally stores and analyzes various security event logs generated by Security Center, such as security alerts, vulnerabilities, and baseline check results. This provides a comprehensive platform for security audits and forensic analysis.
        
-   **What do I do if I accidentally delete the dedicated** `**sas-log**` **Logstore for Security Center in Simple Log Service?**
    
    All log data stored in the Logstore will be **permanently lost and cannot be recovered**. The log analysis feature will be immediately interrupted. Return to the Log Analysis page in the Security Center console and enable the feature again as prompted. The system will create a new Project and Logstore, but the historical data cannot be retrieved.
