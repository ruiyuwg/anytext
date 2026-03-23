CloudLens for OSS allows you to enable the log collection feature for Object Storage Service (OSS) buckets with a few clicks and manage detailed access logs in a global view. This topic describes how to enable the log collection feature in Simple Log Service. This topic also describes the operations that you can perform after you enable the feature.

## Procedure

**Important**

CloudLens for OSS allows you to collect metering logs, metrics, and detailed access logs. This topic describes how to enable the feature for **detailed access logs**. Simple Log Service automatically enables the feature for **metering logs** and **metrics**.

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  In the **Log Application** section, click the **Cloud Service Lens** tab. Then, click **CloudLens for OSS**.
    
3.  Complete authorization as prompted. This step is required if this is your first time to enable CloudLens for OSS. When you enable CloudLens for OSS, Alibaba Cloud automatically creates a service-linked role named AliyunServiceRoleForSLSAudit and assigns the role to CloudLens for OSS to collect logs from OSS buckets. For more information, see [Manage the AliyunServiceRoleForSLSAudit service-linked role](/help/en/sls/manage-the-aliyunserviceroleforslsaudit-service-linked-role#concept-2089820).
    
4.  On the **Data Import Management** page, click the **Buckets** tab. Find the bucket that you want to manage and click **Enable** in the Access Logs column.
    
5.  In the **Are you sure that you want to enable the collection of access logs?** dialog box, click **OK**. After CloudLens for OSS is enabled, CloudLens for OSS displays the buckets that meet specified conditions within the current Alibaba Cloud account.
    

## What to do next

On the **Data Import Management** page, you can perform the following operations:

-   Click the **Buckets** tab.
    
    -   Click the bucket that you want to manage. Then, you are redirected to the OSS console. You can view details of the bucket. For more information, see [Overview of buckets](/help/en/oss/user-guide/oss-bucket-overview#topic-1931079).
        
    -   Find the bucket that you want to manage and click **Disable** in the **Access Logs** column.
        
    -   Find the bucket that you want to manage, click **Log Query** in the Actions column, and then click the required log type. You are redirected to the **Query & Analysis** page. On this page, you can view specific logs.
        
    -   Find the bucket that you want to manage, click **Report Center** in the Actions column, and then click the required report. You are redirected to the Report Center page. For more information, see [View data reports](/help/en/sls/view-reports-46#task-2256082).
        
-   Click the **Destination Logstore** tab.
    
    -   Change the data retention period of the Logstore that you want to manage. For more information about data retention periods and billing, see [Usage notes of CloudLens for OSS](/help/en/sls/usage-notes-44).
        
    -   Reset indexes. For more information about how to reset indexes, see [Real-time log query](/help/en/oss/user-guide/real-time-log-query/#section-ga6-9x3-fsy).
        
    -   View the bucket that corresponds to a Logstore.
