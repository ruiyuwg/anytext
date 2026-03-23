DAS Audit Log (NoSQL-compatible) and Alibaba Cloud Managed Services (formerly Economy Edition) provide powerful database O&M capabilities. They help you quickly identify and resolve database issues, optimize performance, improve efficiency, and significantly reduce operational costs. This topic describes how to activate DAS Audit Log and manage both DAS Audit Log and Alibaba Cloud Managed Services (formerly Economy Edition).

## Prerequisites

If you use a Resource Access Management (RAM) user and need to purchase DAS Audit Log, ask your Alibaba Cloud account administrator to attach the AliyunHDMFullAccess access policy to your RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

## Supported databases and regions

For databases and regions supported by each DAS edition, see [Product editions](/help/en/das/product-overview/editions#section-mjc-tpb-8so).

## Manage Audit Log and Alibaba Cloud Managed Services (formerly Economy Edition)

**Important**

-   New operations are no longer supported for Enterprise Edition V0, V1, and V2. Quota increases are also no longer supported for Enterprise Edition V1. You can migrate Enterprise Edition V1 and V2 with a storage duration of up to 30 days to Enterprise Edition V3 free of charge. See [Migrate from Enterprise Edition V1 or V2 to Enterprise Edition V3](/help/en/das/user-guide/faq#a3a950500f3s3). Billing continues under your current edition until migration completes, then switches to the billing model of the target edition.
    
-   After DAS Economy Edition is upgraded to Alibaba Cloud Managed Services, DAS Economy Edition will be gradually phased out. To continue using the service, enable Alibaba Cloud Managed Services. You can unsubscribe from DAS Economy Edition on the **Service Management** tab of the [Instance List](https://hdm.console.alibabacloud.com/#/instance/resource/manage) page to avoid further charges.
    

## Audit Log

You can configure DAS Audit Log features and storage duration for a target database instance, or disable the Audit Log feature.

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Resource Management** > **Instances**.
    
3.  On the **Cloud Instances** tab, find the target instance.
    
4.  In the **Audit Log Service** column of the target instance, manage DAS Audit Log.
    
    ## Activate
    
    1.  Click **Activate**.
        
    2.  In the **Full Logs** panel, under the **Activate Service** section, select the services you want to activate.
        
        **Note**
        
        For **SQL Logs** and **Log Indexing**, you can also set the storage duration.
        
    3.  Click **Submit**.
        
        After successful activation, click **OK**.
        
    
    ## View
    
    Click **View** to view and use the [SQL Explorer and Audit](/help/en/das/user-guide/sql-explorer-and-audit-5/) feature.
    
    ## Change configuration
    
    1.  Click **Change Configuration**.
        
    2.  Modify DAS Enterprise Edition features and data storage duration, or disable Enterprise Edition features by clearing the corresponding services.
        
    3.  Click **Submit**.
        
        **Note**
        
        To disable basic audit features (**SQL Logs**), you must select or enter a reason and acknowledge the associated risks.
        
    

## Alibaba Cloud Managed Services (formerly Economy Edition)

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Resource Management** > **Instances**.
    
3.  On the **Cloud Instances** tab, find the target instance.
    
4.  In the **Managed Services** column of the target instance, manage DAS Alibaba Cloud Managed Services (formerly Economy Edition).
    
    ## Activate
    
    1.  Click **Activate**.
        
    2.  In the **Activate Managed Services** panel, select the **subscription duration**.
        
    3.  Select or clear **auto-renewal** as needed.
        
    4.  Click **Activate**.
        
        After successful activation, click **OK**.
        
    
    ## Shutdown
    
    In the upper-right corner of the DAS console, choose **Ticket** > **Submit Ticket** to disable DAS Enterprise Edition and request a refund via a ticket.
    
    ## Renewal
    
    Click **Renew** and complete the subsequent steps as needed. For more information, see [Renewal management](/help/en/das/product-overview/renewal-management).
    

## FAQ

**Will I be charged after I unsubscribe from DAS Enterprise Edition and Alibaba Cloud Managed Services (formerly DAS Economy Edition)?**

No, you will not.

**How do I downgrade DAS Enterprise Edition to Alibaba Cloud Managed Services (formerly DAS Economy Edition) or Basic Edition?**

-   You cannot directly downgrade Enterprise Edition to Alibaba Cloud Managed Services (formerly DAS Economy Edition). First, unsubscribe from Enterprise Edition. Then, enable Alibaba Cloud Managed Services (formerly DAS Economy Edition).
    
-   The Basic Edition is free. If you unsubscribe from Enterprise Edition, your service is downgraded to the Basic Edition. The Basic Edition provides basic database autonomy features.
    

**Important**

Before you unsubscribe from Enterprise Edition, carefully read the [unsubscribe precautions](/help/en/das/user-guide/disable-das-professional-edition#section-7ky-mnj-oat).

**How can I confirm that I have disabled or unsubscribed from DAS Enterprise Edition and Alibaba Cloud Managed Services (formerly DAS Economy Edition)?**

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Resource Management** > **Instances**.
    
3.  On the **Cloud Instances** tab, you can check the status in the **Alibaba Cloud Managed Services** and **Audit Log Service** columns. If the status for both is **Not Enabled**, you have successfully disabled or unsubscribed from the services.
    

## Related APIs

**API**

**Description**

[DisableDasPro](/help/en/das/developer-reference/api-das-2020-01-16-disabledaspro)

Disables DAS Enterprise Edition V1 for a specified database instance.

[DescribeInstanceDasPro](/help/en/das/developer-reference/api-das-2020-01-16-describeinstancedaspro)

Checks whether DAS Enterprise Edition V1 or V2 is enabled for a specified database instance.

[GetDasProServiceUsage](/help/en/das/developer-reference/api-das-2020-01-16-getdasproserviceusage)

Queries storage usage for DAS Enterprise Edition V1 or V2 of a database instance.

[ModifySqlLogConfig](/help/en/das/developer-reference/api-das-2020-01-16-modifysqllogconfig)

Activates or configures DAS Enterprise Edition for a database instance.

**Note**

By default, the latest supported version is activated.

[DescribeSqlLogStatistic](/help/en/das/developer-reference/api-das-2020-01-16-describesqllogstatistic)

Queries performance statistics for DAS Enterprise Edition.

[DescribeSqlLogConfig](/help/en/das/developer-reference/api-das-2020-01-16-describesqllogconfig)

Queries DAS Enterprise Edition configuration for a database instance.

[DescribeSqlLogTasks](/help/en/das/developer-reference/api-das-2020-01-16-describesqllogtasks)

Queries offline tasks for DAS Enterprise Edition of a database instance.

[DescribeSqlLogTask](/help/en/das/developer-reference/api-das-2020-01-16-describesqllogtask)

Queries details of an offline task for DAS Enterprise Edition.
