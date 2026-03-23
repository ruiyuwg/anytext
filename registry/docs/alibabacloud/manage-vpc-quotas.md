You can view quotas, request increases, and create quota alarms to set thresholds for quota usage or remaining available amounts in Quota Center or the virtual private cloud (VPC) console.

-   If you use multiple Alibaba Cloud services and want to manage all service quotas from a single interface, use [Quota Center](https://quotas.console.alibabacloud.com/products) for unified management.
    
-   If you do not need to centrally manage quotas for multiple cloud services, manage service resources directly in the [VPC console](https://vpc.console.alibabacloud.com/quota).
    

## Permissions

By default, only Alibaba Cloud accounts are authorized to manage quotas in Quota Center. If you want to use a RAM user to perform management operations, you must first [grant the RAM user permission to manage quotas](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367), specifically, `AliyunQuotasFullAccess`.

## View quotas

View VPC quotas using one of the following methods:

-   Open the [Limits and quotas](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud) page in the product documentation to view all quotas and their default values.
    
-   [View quotas in Quota Center](/help/en/quota-center/user-guide/query-the-details-of-quotas-supported-by-a-cloud-service).
    
-   View quotas in the VPC console.
    

**View quotas in the VPC console**

1.  Go to [VPC console - Quota Management page](https://vpc.console.alibabacloud.com/quota).
    
2.  Select the **VPC** tab in the **Product** section.
    
    -   View general quotas: In the **Quota Type** section, select the **General Quota** tab. Filter by keywords to view the quota name, description, and usage of the target general quota.
        
    -   View API rate limits: In the **Quota Type** section, click the **API Rate Limit** tab. Filter by keywords and regions to view the version and quota information of the target API rate limit item.
        
    -   View privilege quotas: In the **Quota Type** section, click the **Privilege Quota** tab. Filter by quota ID to view the quota name, description, and default value of the privilege quota.
        

## Increase quotas

If your business requires a VPC quota to be higher than its default value, and the quota supports adjustment, apply to increase the quota using one of the following methods:

-   Log on to Alibaba Cloud [Quota Center console](https://quotas.console.alibabacloud.com/products), and [request a quota increase](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota).
    
-   Apply through the VPC console.
    

The quota items and results are consistent whether you use the Quota Center console or the VPC console.

**Increase quotas in the VPC console**

1.  Go to [Virtual Private Cloud (VPC) console – quota management page](https://vpc.console.alibabacloud.com/quota).
    
2.  Select the **VPC** tab in the **Product** section. Then, select the quota type to increase and perform the operation.
    
    -   Increase general quotas
        
        1.  In the **Quota Type** section, select the **General Quota** tab. For the target general quota, click **Apply** in the **Actions** column.
            
        2.  In the **Apply for Quotas** dialog box, set **Applied Quotas** and **Reason**, then click **OK**.
            
            Technical support for each cloud product approves quota increase requests. To improve approval chances, provide a reasonable quota value and detailed reason in your application.
            
            You receive application results via text message and email. Alibaba Cloud evaluates your application based on the provided information and either approves or rejects it.
            
        3.  After applying, view the review status of the quota application by clicking **Application Records** in the **Actions** column or by selecting **Application Records**.
            
            If the quota increase request status is Approved, the quota increase is successful.
            
    -   Apply for privilege quotas
        
        1.  In the Quota Type section, click the Privilege Quota tab. For the target privilege quota, click **Apply** in the **Actions** column.
            
        2.  In the **Apply for Privilege Quota** dialog box, set **Quota Application Value**, **Time**, **Reason**, and **Notify Result**, then click **OK**.
            
            If you do not select an effective time, the effective time defaults to the submission time of the quota increase request. You receive application results via text message and email.
            
        3.  After you submit the request, you can click **Actions** in the **Application Records** column or select **Application Records** to view the application status of the privilege quota. If the application status is approved, the privilege quota request is successful.
            

## Create quota alarms

Some VPC quota items support creating alarms. This means you can set thresholds for quota usage or remaining available amounts. When quota usage or remaining available amounts reach the set threshold, the system sends an alert message to the webhook address. Based on the alert message, you can apply to increase the quota promptly to avoid business impact.

Create quota alarms using one of the following methods:

-   Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products) and [create an alert rule for a quota item](/help/en/quota-center/user-guide/create-an-alert-rule-for-a-quota-item).
    
-   Apply through the VPC console.
    

VPC supports creating alarms for the following quota items:

-   Quota name: `vpc_quota_secondary_cidr_num`. Quota description: The number of secondary IPv4 CIDR blocks that a single VPC supports.
    
-   Quota name: `vpc_privilege_allow_buy_havip_instance`. Quota description: The privilege to purchase high-availability virtual IP address instances.
    

**Create quota alarms in the VPC console**

1.  Go to [Virtual Private Cloud console - Quota Management page](https://vpc.console.alibabacloud.com/quota).
    
2.  In the **Quota Type** section, select the **General Quota** tab. For the target general quota, click **Create Alert** in the **Actions** column.
    
3.  In the **Alarm Rules** panel, set the quota alarm parameters, then click **Confirm**.
    
    1.  **Basic Information**: Customize the rule name.
        
    2.  **Alarm Object**: Information about the corresponding quota item.
        
    3.  **Alarm Rule**:
        
        1.  **Alarm Metric**: Select quota, quota usage, usage rate, availability rate, or remaining availability rate as the alarm metric.
            
        2.  Set **Threshold and Alarm Level**. Set thresholds based on critical, warning, and normal levels. Different statuses use different notification methods.
            
    4.  **Notification Type**:
        
        1.  Select **Mute For**: If the alarm does not recover after it occurs, specify how long to wait before sending another alert notification.
            
        2.  Set **Effective Time** and **Alarm Contact Group**.
            
        3.  **Alarm Callback**: When an alert rule is triggered, CloudMonitor sends an alert message to your specified URL.
            

## Add quota templates

If a quota template is **Enabled** and you have added it, if the management account of the resource directory adds new members, the system automatically applies the quota template to the new members. Existing members remain unchanged. Using quota templates, you can request to increase multiple quota items at once, improving the efficiency and automation of quota management across your organization.

Before adding a quota template, ensure:

-   Log on using a management account.
    
-   [Resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699) and [the quota template feature](/help/en/quota-center/user-guide/enable-the-quota-template-feature) are enabled.
    

Add a quota template using one of the following methods:

-   Log on to Alibaba Cloud [Quota Center console](https://quotas.console.alibabacloud.com/products), and [Create Quota Template](/help/en/quota-center/user-guide/add-a-quota-to-a-quota-template).
    
-   Add a quota template through the VPC console.
    

**Add quota templates in the VPC console**

1.  Go to [VPC Console - Quota Management page](https://vpc.console.alibabacloud.com/quota).
    
2.  Select the **VPC** tab in the **Product** section. Then, select the quota type to add to a quota template and perform the operation, based on the following information:
    
    -   Add general quota items to a quota template
        
        1.  In the Quota Type section, select the **General Quota** tab. Find the target general quota, then click **Add to Quota Template** in the **Actions** column.
            
        2.  Set the **Applied Quotas** and **Notify Result** for the target quota.
            
    -   Add privilege quota items to a quota template
        
        1.  In the Quota Type section, click the **Privilege Quota** tab. Find the target privilege quota, then click **Add to Quota Template** in the **Actions** column.
            
        2.  Set the **Quota Application Value**, **Time**, and **Notify Result** for the target privilege quota item.
