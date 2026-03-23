ApsaraDB RDS for SQL Server Cluster Edition instances use a high availability (HA) architecture with one primary instance and one secondary instance. After you enable read/write splitting (unified read-only endpoint) or the secondary node read-only endpoint, the secondary database becomes readable. This reduces your cloud migration costs and eliminates the need to purchase a dedicated read-only instance.

## Feature description

To make the secondary database of an SQL Server cluster instance readable, enable either the secondary node read-only endpoint or read/write splitting (unified read-only endpoint). The read and write capabilities of the primary and secondary nodes depend on which endpoint is enabled:

-   Neither endpoint enabled: Only the primary node is readable and writable. The secondary node is neither readable nor writable.
    
-   Secondary node read-only endpoint enabled: The primary node is readable and writable. The secondary node is read-only. You can use the secondary node read-only endpoint to access only the secondary node. You cannot use it to access the primary node or read-only instances.
    
-   Read/write splitting (unified read-only endpoint) enabled: The primary node is readable and writable. The secondary node is read-only. The primary node, secondary node, and read-only instances all participate in [read weight distribution](/help/en/rds/apsaradb-rds-for-sql-server/modify-the-read-weight-of-an-apsaradb-rds-for-sql-server-instance).
    

## Prerequisites

The primary ApsaraDB RDS for SQL Server instance must meet the following requirements. You can view this information on the **Basic Information** page of the instance:

-   Instance version: SQL Server 2017 Enterprise Cluster Edition, 2019 Enterprise Cluster Edition, 2022 Enterprise Cluster Edition, or 2025 Enterprise Cluster Edition
    
-   Instance edition: Cluster Edition
    
-   Storage type: Enterprise SSD (ESSD)
    
-   Billing method: Subscription or pay-as-you-go. Serverless instances are not supported.
    

## Method 1: Configure read/write splitting to make the secondary database readable

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Cluster Management**.
    
3.  If you have not enabled read/write splitting: Click **Enable Read-only Endpoint**. In the dialog box that appears, set **Endpoint Type** and **Weight Distribution**.
    
    If you have enabled read/write splitting: Click **Configure Readonly Splitting Address** . In the dialog box that appears, set **Weight Distribution**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6376580371/p856632.png)
    
    A higher read weight means more read requests are processed. For example, if a primary instance has three read-only instances with read weights of 100, 200, and 200, the read-only instances process read requests at a ratio of 1:2:2.
    
    -   **Automatic Distribution**: The system automatically assigns a read weight to each instance based on its specifications. New read-only instances added to the primary instance are automatically included in the read/write splitting link with a [system-assigned weight](/help/en/rds/apsaradb-rds-for-sql-server/default-read-weights#concept-zfq-f41-kgb). You do not need to configure it manually.
        
    -   **Customized Distribution**: Manually set the read weight for each instance. The value ranges from 0 to 10000. The default read weight of a new read-only instance is 0. You must manually change it.
        
    
    **Note**
    
    If you delete a read-only instance, its weight is automatically removed. The weights of other instances remain unchanged.
    
4.  Click **OK**.
    

## **Method 2: Enable the secondary node read-only endpoint to make the secondary database readable**

After you enable the secondary node read-only endpoint, you can use this endpoint to access only the secondary node, which is read-only. You cannot use it to access the primary node or read-only instances.

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select a region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Cluster Management**.
    
3.  In the **Secondary Instance Network Information** section, click **Enable Secondary Instance Endpoint**, and set the **Endpoint Type**.
    
4.  Click **OK**.
    

## Related API

You can call an API operation to request a read-only endpoint. For more information, see [AllocateReadWriteSplittingConnection - Request a read-only endpoint](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-allocatereadwritesplittingconnection-sqlserver).
