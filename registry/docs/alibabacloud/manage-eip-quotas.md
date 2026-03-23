Alibaba Cloud allows you to view and manage quotas of your Alibaba Cloud services. You can view usage information, request quota increases, and create alert rules for quotas. This topic describes the prerequisites and procedures for managing Elastic IP Address (EIP) service quotas.

## Background

Quota Center allows you to manage the quotas of various Alibaba Cloud services in a centralized manner. EIP and many other Alibaba Cloud services work with Quota Center. If you are using multiple Alibaba Cloud services and want to manage the quotas of all your cloud services in one console, you can use [Quota Center](https://quotas.console.alibabacloud.com/products).

Alternatively, you can individually manage EIP quotas by using the quota management feature provided on the [Quota Management](https://vpc.console.alibabacloud.com/quota) page in the Virtual Private Cloud (VPC) console.

## Limitations

By default, only the Alibaba Cloud account is authorized to manage quotas in Quota Center. If you want to allow Resource Access Management (RAM) users to manage quotas, you must first grant the RAM user the AliyunQuotasFullAccess permission. For more information, see [Authorize a RAM user](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367).

## View quotas

You can view the quotas of EIP by using one of the following methods:

-   To view the quota items and their default values, go to the [Quotas](/help/en/eip/quotas/#concept-2273276) page.
    
-   Log on to the Quota Center console, in the left-side navigation pane, select a quota type in the **Products** section. Select EIP and set query conditions as prompted. The quota items and the usage of each item are displayed.
    
-   Log on to the VPC console. On the Quota Management page, set query conditions as prompted. The quota items and the usage of each item are displayed.
    

### Procedure (Quota Center)

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select a quota type based on the following information.
    
    -   View general quotas.
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, find the **Networking** section and click **Elastic IP Address**.
            
        3.  On the **General Quotas** page, you can view quota names, descriptions, and usage.
            
    -   View API rate limits.
        
        1.  In the left-side navigation pane, choose **Products** > **API Rate Limits**.
            
        2.  On the **Products with API Rate Limits** page, choose **Networking** > **Elastic IP Address**.
            
        3.  On the **API Rate Limits** page, you can filter information about API versions and quota usage based on **Region** and keywords.
            

### Procedure (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
    
3.  On the **Quota Management** page, click **EIP** in the **Service** section, and select a quota type.
    
    -   View **General Quota**: Enter a keyword to search for quotas and view the name, description, and usage of the quota.
        
    -   View **API Rate Limit**: Enter a keyword to search for quotas and view the version and rate limit of the API operation.
        

## Request a quota increase

Most of the quotas provided are adjustable. If the default quota is unable to meet your business requirements, you can apply for a quota increase by using one of the following methods:

-   Use the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
-   Use the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    

If the application is successful, the increased quota limit will be displayed in the Quota Center console and the service console.

### Procedure (Quota Center)

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  Select a quota type based on the following information.
    
    -   Adjust general quotas
        
        1.  In the left-side navigation pane, choose **Products** > **General Quotas**.
            
        2.  On the **Products with General Quotas** page, find the **Networking** section and click **Elastic IP Address**.
            
        3.  On the **General Quotas** page, find the quota that you want to manage and click **Apply** in the **Actions** column.
            
        4.  In the **Apply for Quotas** dialog box, set the **Applied Quotas** and **Reason** parameters, and click **OK**.
            
            **Note**
            
            -   Applications are approved by the technical support team of the corresponding cloud service. When you apply for a quota increase, provide as much information as possible.
                
            -   The more justification provided, the more likely your application will be approved. Application results are sent to you by using text messages and emails.
                
            
        5.  You can also click **Application Records** in the **Actions** column to view the status of your applications.
            
            If an application is in the **Approved** state, the related quota is increased.
            
    -   Increase API rate limits
        
        1.  In the left-side navigation pane, choose **Products** > **API Rate Limits**.
            
        2.  On the **Products with API Rate Limits** page, choose **Networking** > **Elastic IP Address**.
            
        3.  On the **API Rate Limits** page, find the quota by specifying **Region** and keywords. Then, click **Apply** in the **Actions** column.
            
        4.  In the **Apply for API Rate Limit** dialog box, specify **Quantity**, **Reason**, and **Notify Result**, and click **OK**.
            
            **Note**
            
            -   Applications are approved by the technical support team of the corresponding cloud service. When you apply for a quota increase, provide as much information as possible.
                
            -   The more justification provided, the more likely your application will be approved. Application results are sent to you by using text messages and emails.
                
            
        5.  After you submit your application, you can click **Application Records** in the **Actions** column to view the application status. If an application is in the **Approved** state, the related quota is increased.
            

### Procedure (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
    
3.  On the **Quota Management** page, click **EIP** in the **Service** section, specify the **Quota Type**, find the quota that you want to increase, then click **Apply** in the **Actions** column.
    
    -   General quotas
        
        In the **Apply for Quotas** dialog box, set the **Applied Quotas** and **Reason** parameters, and click **OK**.
        
        **Note**
        
        -   Applications are approved by the technical support team of the corresponding cloud service. When you apply for a quota increase, provide as much information as possible.
            
        -   The more justification provided, the more likely your application will be approved. Application results are sent to you by using text messages and emails.
            
        
    -   API rate limits
        
        In the **Apply for API Rate Limit** dialog box, specify **Quantity**, **Reason**, and **Notify Result**, and click **OK**.
        
        **Note**
        
        -   Applications are approved by the technical support team of the corresponding cloud service. When you apply for a quota increase, provide as much information as possible.
            
        -   The more justification provided, the more likely your application will be approved. Application results are sent to you by using text messages and emails.
            
        
4.  After the application is submitted, you can click **Application Records** in the **Actions** column or choose **![pon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0164104761/p526884.png)** > **Application Records** in the **Actions** column to view the status of the application. If an application is in the **Approved** state, the related quota is increased.
    

## Create an alert rule for a quota

You can create alert rules for some quotas by specifying a threshold for quota usage or available quota. If the usage of a quota reaches the specified threshold, the system sends an alert notification to the callback URL that you specified in the alert rule through an HTTP POST request. We recommend that you take the alerts into consideration and apply for a quota increase in advance to avoid unexpected business interruptions.

### Procedure (Quota Center)

1.  Go to the [Alarm Rules](https://quotas.console.alibabacloud.com/alarms) page in the Quota Center console and click **Create Quota Alarm Rule**.
    
2.  Go to the [Quota Center](https://quotas.console.alibabacloud.com/products) console. In the left-side navigation pane, choose **Products** > **General Quotas** or **API Rate Limits**. Choose **Networking** > **Elastic IP Address**, find the quota, and click **Create Alarm Rule** in the **Actions** column.
    
3.  In the **Create Alarm Rule** panel, configure the parameters and click **Confirm**.
    
    1.  **Basic Information**: Specify an **Alarm Rule Name**.
        
    2.  **Alarm Object**: Includes information about the quota.
        
    3.  **Alarm Rule**:
        
        1.  **Alarm Metric**: Select **Quotas**, **Used Quotas**, **Percentage of Used Quotas**, or **Percentage of Available Quotas**.
            
        2.  **Threshold and Alarm Level**: Set **Critical**, **Warning**, and **Info** thresholds, which trigger different notifications.
            
    4.  **Notification Type**:
        
        1.  **Mute For**: Indicates the time interval for resending an alarm notification before the alarm is resolved.
            
        2.  **Effective Time** and **Alarm Contact Group**: Specify them as needed.
            
        3.  **Alarm Callback**: Specify the URL to which CloudMonitor sends alarm notifications when an alarm is triggered.
            
4.  In the left-side navigation pane, choose **Alarm Rules**. On the page that is displayed, view information about the created alarm rule.
    
5.  (Optional) If you have configured alarm callback settings for quotas, you can view the alarm callback records. In the left-side navigation pane, choose **Alarm History**. On the page that is displayed, view the alarm callback records.
    

### Procedure (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
    
3.  On the **Quota Management** page, click **EIP**, find the quota, then click **Create Alarm Rule** in the **Actions** column.
    
4.  In the **Create Alarm Rule** section, configure the parameters and click **Confirm**.
    
    1.  **Basic Information**: Specify an **Alarm Rule Name**.
        
    2.  **Alarm Object**: Includes information about the quota.
        
    3.  **Alarm Rule**:
        
        1.  **Alarm Metric**: Select **Quotas**, **Used Quotas**, **Percentage of Used Quotas**, or **Percentage of Available Quotas**.
            
        2.  **Threshold and Alarm Level**: Set **Critical**, **Warning**, and **Info** thresholds, which trigger different notifications.
            
    4.  **Notification Type**:
        
        1.  **Mute For**: Indicates the time interval for resending an alarm notification before the alarm is resolved.
            
        2.  **Effective Time** and **Alarm Contact Group**: Specify them as needed.
            
        3.  **Alarm Callback**: Specify the URL to which CloudMonitor sends alarm notifications when an alarm is triggered.
            
    
5.  Find the quota and click ![p526884_source.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0521342071/p738182.png) > **Alarm Rules** in the **Actions** column. In the **Alarm Rules** section, view the alarm rule information.
    

## Create a quota template

After you create a quota template, the quota template is enabled by default. If the management account adds a member to the resource directory, the quota template automatically submits a quota increase request for the member. The quotas for existing members remain unchanged. You can use a quota template to apply for increases on multiple quotas at a time. This automated approach can improve the efficiency of quota management across your organization.

Prerequisites:

-   You have [enabled a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699) and [enabled the quota template feature](/help/en/quota-center/user-guide/enable-the-quota-template-feature).
    
-   You have logged on using the Alibaba Cloud account that owns the target resource directory, or as a RAM user in the account with the AliyunQuotasFullAccess permission.
    

Choose one of the following two methods to create a quota template:

-   Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products) and create a quota template.
    
-   Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc) and create a quota template.
    

### Procedure (Quota Center)

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, choose **Products** > **General Quotas**.
    
3.  On the **Products with General Quotas** page, find the **Networking** section and click **Elastic IP Address**.
    
4.  On the **General Quotas** page, find the quota that you want to manage and click **Create Quota Template** in the **Actions** column.
    
5.  In the **Create Quota Template** dialog box, set the **Applied Quotas** parameter and click **OK**.
    

### Procedure (VPC console)

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Quota Management**.
    
3.  On the **Quota Management** page, click **EIP**, find the quota, then click **Create Quota Template** in the **Actions** column.
    
4.  In the **Create Quota Template** dialog box, set the **Applied Quotas** parameter and click **OK**.
