Alibaba Cloud allows you to view and manage the quotas of Express Connect services. You can obtain usage information, apply for increases on quotas, and create alert rules for quotas. This topic describes how to manage the quotas of and create quota templates for Express Connect.

## Background information

Quota Center allows you to manage the quotas of various Alibaba Cloud services in a centralized manner. Express Connect and many other Alibaba Cloud services work with Quota Center. If you are using multiple Alibaba Cloud services and want to manage the quotas of all your cloud services in one console, you can use [Quota Center](https://quotas.console.alibabacloud.com/products).

Alternatively, you can individually manage Express Connect quotas by using the quota management feature provided in the [Express Connect console](https://expressconnect.console.alibabacloud.com).

## Limits

By default, only Alibaba Cloud accounts are authorized to manage quotas in Quota Center. If you want to allow RAM users to manage quotas, you must first grant the AliyunQuotasFullAccess permission to the RAM users. For more information, see [Authorize a RAM user](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367).

## View quotas

You can view the quotas of Express Connect by using one of the following methods:

-   View the quota items and their default values in the [Quotas](/help/en/express-connect/user-guide/quotas/#concept-2273696) topic.
    
-   View the quotas in the Quota Center console.
    
-   View the quotas in the Express Connect console.
    

### View the quotas in the Quota Center console

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  View Express Connect quotas.
    
    -   View general quotas.
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, click **Express Connect** in the **Networking** section.
            
        3.  The **General Quotas** page appears, displaying information about the general quotas, including their names, descriptions, and usage status.
            
    -   View API rate limits.
        
        1.  In the left-side navigation pane, choose **Products** > **API Rate Limits**.
            
        2.  On the **Products with API Rate Limits** page, click **Express Connect** in the **Networking** section.
            
        3.  The **API Rate Limits** page appears, displaying the version and rate limit of each API operation. You can use **Keyword** and **Region** to search for specific API operations.
            
    -   View privileges.
        
        1.  In the left-side navigation pane, choose **Products** > **Whitelist Quotas**.
            
        2.  On the **Products with Whitelist Quotas** page, click **Express Connect** in the **Networking** section.
            
        3.  The **Whitelist Quotas** page appears, displaying information about the privileges, including their names, descriptions, and the times they became active or expired.
            

### View the quotas in the Express Connect console

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Quota Management**.
    
3.  The **Quota Management** page appears, displaying the Express Connect quotas.
    
    -   View general quotas.
        
        1.  In the **Quota Type** section, select **General Quota**.
            
        2.  You can use **keyword** to search for quotas and view their names, descriptions, and usage status.
            
    -   View API rate limits.
        
        1.  In the **Quota Type** section, select **API Rate Limit**.
            
        2.  You can specify the **Keyword** and **Region** conditions to search for APIs and view their versions and rate limits.
            
    -   View privileges.
        
        1.  In the **Quota Type** section, select **Privilege**.
            
        2.  You can specify the **Quota ID** condition to search for privileges and view their information such as names and descriptions.
            

## Adjust quotas

If the default value of an Express Connect quota cannot meet your business requirements and the quota is adjustable, you can apply for a quota increase by using one of the following methods:

-   Use the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
-   Use the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    

If the application is successful, the increased quota limit is displayed in both the Quota Center console and the Express Connect console.

### Increase quotas in the Quota Center console

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select a quota type.
    
    -   Adjust general quotas.
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, click **Express Connect** in the **Networking** section.
            
        3.  On the **General Quotas** page, find the quota that you want to adjust and click **Apply** in the **Actions** column.
            
        4.  In the **Apply for Quotas** dialog box, set the **Applied Quotas** and **Reason** parameters and click **OK**.
            
            **Note**
            
            -   Applications are reviewed and approved by the technical support team of each cloud service. When you apply for a quota increase, provide as much information as possible. The more justification provided, the more likely your application will be approved.
                
            -   Application results are sent to you by text messages and emails.
                
            
            Alibaba Cloud reviews your application based on the information provided in the application.
            
        5.  In the left-side navigation pane, click **Application Records** to view the status of the application.
            
            If the application is in the **Approved** state, the related quota has been increased.
            
    -   Apply for privileges.
        
        1.  In the left-side navigation pane, choose **Products** > **Whitelist Quotas**.
            
        2.  On the **Products with Whitelist Quotas** page, click **Express Connect** in the **Networking** section.
            
        3.  On the **Whitelist Quotas** page, find the privilege that you want to apply for and click **Apply** in the **Actions** column.
            
        4.  In the **Apply for Whitelist Quotas** dialog box, set **Quota Value**, **Time**, **Reason**, and **Notify Result**, and click **OK**.
            
            **Note**
            
            -   When Quota Value is set to Valid, if you leave the Valid From parameter empty, the privilege takes effect immediately when the application is approved; if you leave the Valid Until parameter empty, the privilege becomes invalid the 99th year after when the privilege takes effect. The end time must be later than the start time.
                
            -   Applications are reviewed and approved by the technical support team of each cloud service. When you apply for a quota increase, provide as much information as possible. The more justification provided, the more likely your application will be approved.
                
            -   Application results are sent to you by text messages and emails.
                
            
        5.  Find the quota and click **Application Records** in the **Actions** column to view the status of the application.
            
            If the application is in the **Approved** state, you have been granted the privilege.
            

### Increase quotas in the Express Connect console

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Quota Management**.
    
3.  On the **Quota Management** page, you can adjust Express Connect quotas.
    
    -   Adjust general quotas.
        
        1.  In the **Quota Type** section, select **General Quota**.
            
        2.  Find the general quota that you want to increase and click **Apply** in the **Actions** column.
            
        3.  In the **Apply for Quotas** dialog box, set the **Applied Quotas** and **Reason** parameters and click **OK**.
            
            **Note**
            
            -   Applications are reviewed and approved by the technical support team of each cloud service. When you apply for a quota increase, provide as much information as possible. The more justification provided, the more likely your application will be approved.
                
            -   Application results are sent to you by text messages and emails.
                
            
            Alibaba Cloud reviews your application based on the information provided in the application.
            
        4.  Find the quota and click **Application Records** in the **Actions** column to view the status of the application.
            
            If the application is in the **Approved** state, the related quota is increased.
            
    -   Apply for privileges.
        
        1.  In the **Quota Type** section, click **Privilege**.
            
        2.  Find the privilege that you want to apply and click **Apply** in the **Actions** column.
            
        3.  In the **Apply for Whitelist Quotas** dialog box, set the **Quota Value**, **Time**, **Reason**, and **Notify Result** parameters and click **OK**.
            
            **Note**
            
            -   If you do not specify a start time for the validity period, the default start time is the time when the quota increase application is submitted. If you do not specify an end time for the validity period, the default end time is 99 years after the start time. The end time must be later than the start time.
                
            -   Applications are reviewed and approved by the technical support team for each cloud service. To increase the success rate of your application, you must specify a reasonable quota value and a detailed reason when you submit an application.
                
            -   Application results are sent to you by using text messages and emails.
                
            
        4.  To view the status of the application, click **Application Records** in the **Actions** column. If the application is in the **Approved** state, you have been granted the privilege.
            

## Create a quota template

After you create a quota template, the quota template is automatically enabled. If the management account adds a member to the resource directory, the quota template is automatically applied to the new member. You can use a quota template to apply for increases on multiple quotas at a time. This automated approach can improve the efficiency of quota management across your organization.

Before you create a quota template in the Quota Center console, make sure that the following requirements are met:

-   An enterprise administrator account is used to log on to the console.
    
-   Resource Directory is activated. For more information, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699).
    

### Enable a quota template

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
2.  In the left-side navigation pane, click **Quota Templates**. On the **Quota Templates** page, click **Enable Quota Template**.
    
3.  In the **Enable Quota Template** message, click **OK**.
    

### Add a quota to a quota template in the Quota Center console

Make sure that you have enabled the quota template. For more information, see [Enable a quota template](#section-yim-5q3-5od).

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select the type of quota that you want to add to a quota template.
    
    -   Add a general quota to a quota template.
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, click **Express Connect** in the **Networking** section.
            
        3.  On the **General Quotas** page, find the quota that you want to add to a quota template and click **Add to Quota Template** in the **Actions** column.
            
        4.  In the **Add to Quota Template** dialog box, set the **Applied Quotas** parameter and click **OK**.
            
    -   Add a privilege to the quota template.
        
        1.  In the left-side navigation pane, choose **Products** > **Whitelist Quotas**.
            
        2.  On the **Products with Whitelist Quotas** page, click **Express Connect** in the **Networking** section.
            
        3.  On the **Whitelist Quotas** page, find the quota that you want to add to the template and click **Add to Quota Template** in the **Actions** column.
            
        4.  In the **Create Whitelist Quota Template** dialog box, set **Quota Value**, **Time**, and **Notify Result**, and then click **OK**.
            

### Add a quota template by using the Express Connect console

Make sure that the quota template is enabled. For more information, see [Enable a quota template](#section-yim-5q3-5od).

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Quota Management**.
    
3.  In the **Quota Type** section of the **Quota Management** page, specify the quota type that you want to add to the quota template.
    
    -   Add a general quota to a quota template.
        
        1.  On the **General Quota** tab, find the quota that you want to add and click **Add to Quota Template** in the **Actions** column.
            
        2.  In the **Add to Quota Template** dialog box, set the **Applied Quotas** parameter and click **OK**.
            
    -   Add a privilege to the quota template.
        
        1.  On the **Privilege** tab, find the quota that you want to add and click **Add to Quota Template** in the **Actions** column.
            
        2.  In the **Create Whitelist Quota Template** dialog box, set the **Quota Value**, **Time**, and **Notify Result** parameters and click **OK**.
