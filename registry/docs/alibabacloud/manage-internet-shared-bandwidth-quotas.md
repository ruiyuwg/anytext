Alibaba Cloud allows you to view and manage quotas of your Alibaba Cloud services. You can obtain usage information, apply for increases on quotas, and create alert rules for quotas. This topic describes the prerequisites and procedures for managing service quotas.

## Background information

Quota Center allows you to manage the quotas of various Alibaba Cloud services in a centralized manner. Internet Shared Bandwidth and many other Alibaba Cloud services work with Quota Center. If you are using multiple Alibaba Cloud services and want to manage the quotas of all your cloud services in one console, you can use [Quota Center](https://quotas.console.alibabacloud.com/products).

Alternatively, you can individually manage Internet Shared Bandwidth quotas by using the quota management feature provided in the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/quota).

## Prerequisites

By default, only the Alibaba Cloud account is authorized to manage quotas in Quota Center. If you want to allow RAM users to manage quotas, you must first grant the RAM user the AliyunQuotasFullAccess permission. For more information, see [Authorize a RAM user](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367).

## View quotas

You can view the quotas of Internet Shared Bandwidth by using one of the following methods:

-   To view the quota items and their default values, see [Internet Shared Bandwidth quotas](/help/en/internet-shared-bandwidth/user-guide/internet-shared-bandwidth-quotas/#concept-2303538).
    
-   Log on to the Quota Center console, in the left-side navigation pane, select General Quotas in the Products section. Select Internet Shared Bandwidth and set query conditions as prompted. The quota items and the usage of each item are displayed.
    
-   Log on to the VPC console. On the **Quota Management** page, set query conditions as prompted. The quota items and the usage of each item are displayed.
    

### View quotas (Quota Center)

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Perform the following steps based on the type of quota that you want to view.
    
    -   View general quotas
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, find the **Networking** section and click **Internet Shared Bandwidth**.
            
        3.  The **General Quotas** page displays a list of general quotas, including their description and usage information.
            
    -   View API rate limits
        
        1.  In the left-side navigation pane, choose **Products** > **API Rate Limits**.
            
        2.  On the **Products with API Rate Limits** page, choose **Networking** > **Internet Shared Bandwidth**.
            
        3.  On the **API Rate Limits** page, you can filter information about API versions and quota usage based on **Keyword** and **Region**.
            

### View general quotas (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
3.  On the **Quota Management** page, click the **EIP Bandwidth Plan** tab and click a quota type in the **Quota Type** section to view the name, description, and usage of the quota.
    

## Adjust quotas

Most of the quotas provided are adjustable. If the default quota is unable to meet your business requirements, you can apply for a quota increase by using one of the following methods:

-   Use the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
-   Use the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    

If the application is successful, the increased quota limit will be displayed in the Quota Center console and the service console.

### Adjust quotas (Quota Center)

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Perform the following steps based on the type of quota that you want to adjust.
    
    -   Adjust general quotas
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, find the **Networking** section and click **Internet Shared Bandwidth**.
            
        3.  On the **General Quotas** page, find the quota that you want to adjust and click **Apply** in the **Actions** column.
            
        4.  In the **Apply for Quotas** dialog box, set the **Applied Quotas** and **Reason** parameters, and click **OK**.
            
            **Note**
            
            -   Applications are reviewed by the technical support team for each cloud service. When you apply for a quota increase, provide as much information as possible.
                
            -   The more justification provided, the more likely your application will be approved. Application results are sent to you by text message and email.
                
            
        5.  In the left-side navigation pane, click **Application Records** to view the status of the application.
            
            If the application is in the **Approved** state, the quota is adjusted.
            
    -   Adjust API rate limits
        
        1.  In the left-side navigation pane, choose **Products** > **API Rate Limits**.
            
        2.  On the **Products with API Rate Limits** page, choose **Networking** > **Internet Shared Bandwidth**.
            
        3.  On the **API Rate Limits** page, find the API rate limit by specifying **Keyword** and **Region**. Then, click **Apply** in the **Actions** column.
            
        4.  In the **Apply for API Rate Limit** dialog box, specify **Applied Quotas**, **Reason**, and **Notify Result**. Then, click **OK**.
            
            **Note**
            
            -   Applications are approved by the technical support team of the corresponding cloud service. When you apply for a quota increase, provide as much information as possible.
                
            -   The more justification provided, the more likely your application will be approved. Application results are sent to you by using text messages and emails.
                
            
        5.  After you submit the application, you can click **Application Records** in the Actions column to view the application status.
            
            If the application is in the **Approved** state, the API rate limit is adjusted.
            

### Adjust quotas (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
3.  On the **Quota Management** page, click the **EIP Bandwidth Plan** tab in the **Service** section. Click the type of quota that you want to adjust in the **Quota Type** section, find the quota, and then click **Apply** in the **Actions** column.
    
    -   General quotas
        
        In the **Apply for Quotas** dialog box, set the **Applied Quotas** and **Reason** parameters, and click **OK**.
        
        **Note**
        
        -   Applications are reviewed by the technical support team for each cloud service. When you apply for a quota increase, provide as much information as possible.
            
        -   The more justification provided, the more likely your application will be approved. Application results are sent to you by text message and email.
            
        
    -   API rate limits
        
        In the **Apply for API Rate Limit** dialog box, specify **Applied Quotas**, **Reason**, and **Notify Result**. Then, click **OK**.
        
        **Note**
        
        -   Applications are reviewed by the technical support team for each cloud service. When you apply for a quota increase, provide as much information as possible.
            
        -   The more justification provided, the more likely your application will be approved. Application results are sent to you by text message and email.
            
        
4.  After the application is submitted, you can click **Application Records** in the **Actions** column or choose **![pon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0164104761/p526884.png)** > **Application Records** in the **Actions** column to view the status of the application.
    
    If the application is in the **Approved** state, the API rate limit is adjusted.
    

## Create a quota template

After you create a quota template, the quota template is enabled by default. If the management account adds a member to the resource directory, the quota template automatically submits a quota increase request for the member. The quotas for existing members remain unchanged. You can use a quota template to apply for increases on multiple quotas at a time. This automated approach can improve the efficiency of quota management across your organization.

Prerequisites:

-   An enterprise management account is used.
    
-   A resource directory is enabled. For more information, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699).
    

### Procedure (Quota Center)

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, click **Quota Templates**. On the **Quota Templates** page, click **Enable Quota Template**.
    
3.  In the **Enable Quota Template** message, click **OK**.
    
4.  In the left-side navigation pane, choose **Products** > **General Quotas**.
    
5.  On the **Products with General Quotas** page, click **Internet Shared Bandwidth** in the **Networking** section.
    
6.  On the **General Quotas** page, find the quota that you want to manage and click **Create Quota Template** in the **Actions** column.
    
7.  In the **Create Quota Template** dialog box, specify **Applied Quotas** and click **OK**.
    

### Procedure (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
3.  On the **Quota Management** page, click the **EIP Bandwidth Plan** tab, find the quota that you want to manage, and then click **Create Quota Template** in the **Actions** column.
    
4.  In the **Create Quota Template** dialog box, specify **Applied Quotas** and click **OK**.
