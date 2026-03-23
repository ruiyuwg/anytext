This topic describes how to view, increase, and create templates for Global Accelerator (GA) quotas. You can manage GA quotas through either the Quota Center console or the GA console. You can also set quota usage alerts.

## Quota types

GA supports the following quota types:

**Quota type**

**Description**

**Key attributes**

**General quotas**

Standard resource limits, such as the maximum number of GA instances or listeners per instance.

Name, description, current usage

**Privilege quotas**

Feature-level permissions that control access to specific capabilities.

Name, description, effective time, expiration time

**API rate limits**

Throttling limits on GA API calls. Filterable by keyword or region.

Version, quota value

## Management channels

You can manage GA quotas through either of the following consoles. The quota items and results are the same in both.

-   [Quota Center console](https://quotas.console.alibabacloud.com/products): A centralized service for managing quotas across multiple Alibaba Cloud services. Use Quota Center if you manage quotas for several services.
    
-   [GA console](https://ga.console.alibabacloud.com/quota): The **Quota Management** page in the GA console. Use this if you only need to manage GA quotas.
    

You can also view all GA quota items and their default values on the [GA quotas](/help/en/ga/user-guide/quotas/#concept-2277726) documentation page.

## Prerequisites

By default, only the Alibaba Cloud account can perform operations in Quota Center. To allow a Resource Access Management (RAM) user to manage quotas, grant the RAM user the **AliyunQuotasFullAccess** permission. For instructions, see [Authorize a RAM user](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367).

## View quotas

### View quotas in Quota Center

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select the quota type to view:
    
    -   **General quotas**
        
        1.  In the navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products With General Quotas** page, find the **Networking** section and click **Global Accelerator**.
            
        3.  On the **General Quotas** page, view the names, descriptions, and usage of quota items.
            
    -   **API rate limits**
        
        1.  In the navigation pane, choose **Products** > **API Rate Limits**.
            
        2.  On the **Products With API Rate Limits** page, choose **Networking** > **Global Accelerator**.
            
        3.  On the **API Rate Limits** page, filter by keywords, regions, or other criteria to view the versions and quotas of API rate limit items.
            
    -   **Privilege quotas**
        
        1.  In the navigation pane, choose **Products** > **Privileges**.
            
        2.  On the **Products With Privileges** page, choose **Networking** > **Global Accelerator**.
            
        3.  On the **Privileges** page, view the names, descriptions, and effective or expiration times of privilege quota items.
            

### View quotas in the GA console

1.  Log on to the [GA console Quota Management page](https://ga.console.alibabacloud.com/quota).
    
2.  On the **Quota Management** page, select the **Quota Type** to view, then find the target quota item. You can view its name, description, and usage.
    

## Increase quotas

If your workload requires a value higher than the default for a specific GA quota, and that quota supports adjustment, submit a quota increase request through either the Quota Center console or the GA console.

-   Quota increase requests are reviewed by the technical support team of the relevant cloud service. To improve the likelihood of approval, provide a reasonable requested value and a detailed reason.
    
-   Alibaba Cloud evaluates your request and then approves or rejects it. The result is sent to you by text message and email.
    

### Increase quotas in Quota Center

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select the quota type to increase:
    
    -   **Increase a general quota**
        
        1.  In the navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products With General Quotas** page, find the **Networking** section and click **Global Accelerator**.
            
        3.  On the **General Quotas** page, find the target quota item and click **Apply** in the **Actions** column.
            
        4.  In the **Apply For Quotas** dialog box, set **Applied Quotas** and **Reason**, then click **OK**.
            
    -   **Apply for a privilege quota**
        
        1.  In the navigation pane, choose **Products** > **Privileges**.
            
        2.  On the **Products With Privileges** page, choose **Networking** > **Global Accelerator**.
            
        3.  On the **Privileges** page, find the target quota item and click **Apply** in the **Actions** column.
            
        4.  In the **Apply For Privileges** dialog box, set **Quota Value**, **Time**, **Reason**, and **Notify Result**, then click **OK**.
            
            If you do not select an effective time, it defaults to the submission time of the application. If you do not select an expiration time, it defaults to 99 years from the effective time. The expiration time must be later than the effective time.
            
3.  Check the status of your request:
    
    -   For general quotas, click **Application Records** in the navigation pane.
        
    -   For privilege quotas, click **Application Records** in the **Actions** column of the target quota item.
        
    
    If the status is **Approved**, the quota increase was successful.
    

### Increase quotas in the GA console

1.  Log on to the [GA console Quota Management page](https://ga.console.alibabacloud.com/quota).
    
2.  On the **Quota Management** page, select the **Quota Type** to increase, find the target quota item, and click **Apply** in the **Actions** column.
    
    -   **Increase a general quota**
        
        In the **Apply For Quotas** dialog box, set **Applied Quotas** and **Reason**, then click **OK**.
        
    -   **Apply for a privilege quota**
        
        In the **Apply For Privileges** dialog box, set **Quota Value**, **Time**, **Reason**, and **Notify Result**, then click **OK**.
        
        If you do not select an effective time, it defaults to the submission time of the application. If you do not select an expiration time, it defaults to 99 years from the effective time. The expiration time must be later than the effective time.
        
3.  Click **Application Records** in the **Actions** column to view the review status. If the status is **Approved**, the quota increase was successful.
    

## Create quota templates

You can use a quota template to apply for multiple quotas at a time. When a new member account is added to a Resource Directory, the quota template automatically submits a quota request for the member account. Quota templates help you improve the efficiency and automation of quota management across your organization. Existing member accounts are not affected by quota templates. If you need to apply for quota increases for existing member accounts, you can apply quota templates to the member accounts in the Quota Center console.

### Prerequisites for quota templates

Before you create a quota template, ensure the following conditions are met:

-   You are logged on with a management account.
    
-   You have enabled Resource Directory. For instructions, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699).
    

### Create a quota template in Quota Center

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select the quota type to add to a template:
    
    -   **Add a general quota to a template**
        
        1.  In the navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products With General Quotas** page, find the **Networking** section and click **Global Accelerator**.
            
        3.  On the **General Quotas** page, find the target quota item and click **Create Quota Template** in the **Actions** column.
            
        4.  In the **Create Quota Template** dialog box, set **Applied Quotas** for the target quota item, then click **OK**.
            
    -   **Add a privilege quota to a template**
        
        1.  In the navigation pane, choose **Products** > **Privileges**.
            
        2.  On the **Products With Privileges** page, choose **Networking** > **Global Accelerator**.
            
        3.  On the **Privileges** page, find the target quota item and click **Create Quota Template** in the **Actions** column.
            
        4.  In the **Create Privilege Template** dialog box, set **Quota Value**, **Time**, and **Notify Result** for the target quota item, then click **OK**.
            

Quota templates are managed through the Quota Center console. Template-related operations are not available on the GA console Quota Management page.
