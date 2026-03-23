After you add a quota to a quota template, the quota template is enabled by default. If the management account adds a member to the resource directory, the quota template automatically submits a quota increase request for the member. The quota values for existing members remain unchanged. You can use a quota template to increase the values of multiple quotas at a time. Quota templates help you improve the efficiency and automation of quota management across your organization.

## Prerequisites

-   A resource directory is enabled. For more information, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699).
    
-   You must log on to the Quota Center console by using the management account of the resource directory or by using a RAM user that has the AliyunQuotasFullAccess permissions within the management account. For more information, see [Authorize a RAM User](/help/en/quota-center/user-guide/authorize-a-ram-user).
    
-   The quota template feature is enabled. For more information, see [Enable the quota template feature](/help/en/quota-center/user-guide/enable-the-quota-template-feature).
    

## Procedure

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, choose **Products** > **General Quotas**.
    
3.  On the **Products with General Quotas** page, click the information card of a cloud service. For example, click the Elastic Compute Service card.
    
4.  On the **General Quotas** page, select a region of the cloud service.
    
5.  Find the quota whose value you want to increase, and click **Create Quota Template** in the **Actions** column.
    
6.  In the **Create Quota Template** dialog box, configure the **Applied Quotas** and **Notify Result** parameters.
    
7.  Click **OK**.
