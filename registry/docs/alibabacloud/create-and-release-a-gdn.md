You can use an existing cluster or create a new one to quickly build a global database network (GDN). A GDN supports cross-region disaster recovery or active geo-redundancy. This topic describes how to create and delete a GDN.

## Scope

### **Cluster configuration**

-   Edition: Enterprise Edition, and the series must be Cluster Edition.
    
-   The database engine version must be one of the following:
    
    -   MySQL 8.0.2.
        
    -   MySQL 8.0.1 with minor engine version 8.0.1.1.17 or later.
        
    -   MySQL 5.7 with minor engine version 5.7.1.0.21 or later.
        
    -   MySQL 5.6 with minor engine version 5.6.1.0.32 or later.
        
-   Nodes: Must include at least one read-only node.
    

### **Supported regions**

All regions in the Chinese mainland, China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London).

**Note**

You can deploy secondary clusters across borders, but you must submit a request. For more information, see [Add a secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster#title-gmh-abk-rgm).

### **Feature limitations**

-   Clusters in a [Global Database Network (GDN)](/help/en/polardb/polardb-for-mysql/user-guide/global-database-network/) support the [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) feature. However, you must enable the `loose_polar_enable_imci_with_standby` cluster parameter before you can add a read-only column store node. The cluster version must also meet one of the following requirements:
    
    -   MySQL 8.0.1 with revision version 8.0.1.1.48 or later.
        
    -   MySQL 8.0.2 with revision version 8.0.2.2.27 or later.
        
-   Clusters in a GDN can be [serverless clusters](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) or [clusters with defined specifications that have the serverless feature enabled](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters). However, if the minor engine version of the primary cluster is earlier than the following versions, all clusters in the GDN must have at least one read-only node:
    
    -   MySQL 8.0.1 with a minor engine version earlier than 8.0.1.1.42.
        
    -   MySQL 8.0.2 with a minor engine version earlier than 8.0.2.2.23.
        
-   Clusters in a GDN do not support the database and table restoration feature.
    

### **Other limitations**

-   A GDN consists of one primary cluster and up to four secondary clusters.
    
    **Note**
    
    To add more secondary clusters, go to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas), find the quota item based on the quota ID `polardb_mysql_gdn_region`, and click **Apply** in the **Actions** column.
    
-   A cluster can belong to only one GDN.
    
-   You can only create new clusters as secondary clusters. You cannot add an existing cluster as a secondary one.
    
-   The primary and secondary clusters must use the same database engine version: MySQL 8.0, MySQL 5.7, or MySQL 5.6.
    
-   For secondary clusters in a GDN that are not [serverless clusters](/help/en/polardb/polardb-for-mysql/user-guide/serverless/), each compute node must have at least 4 CPU cores.
    
-   By default, each cluster in a GDN contains 2 nodes. You can add up to 16 nodes.
    

## Pricing

When you use a GDN, you are charged for the [clusters](/help/en/polardb/polardb-for-mysql/polardb-mysql-product-billing/) and any inter-region data transfer fees. Data transfer fees vary based on whether the transfer is cross-border.

-   Non-cross-border data transfer (Free)
    
    -   Scenario: The primary and secondary clusters are both deployed in regions outside the Chinese mainland, or both are deployed in regions within the Chinese mainland.
        
    -   Billing rule: Free.
        
-   Cross-border data transfer (Billable)
    
    **Important**
    
    Cross-border data transfer fees will be charged starting from 00:00 on January 1, 2026 (Singapore time). Before this date, this service is free.
    
    -   Scenario: One of your clusters (primary or secondary) is deployed in a region outside the Chinese mainland, and the other is deployed in a region in the Chinese mainland.
        
    -   Billing rule: USD 0.80 per GB, billed hourly. The fee is calculated based on the amount of Redo Log data that is physically replicated from the primary cluster to a cross-border secondary cluster within one hour. You can estimate this traffic fee by querying the physical position converted from the log sequence number (LSN).
        
        Click to view a billing example
        
        **Example**
        
        For example, at 09:00, you query the physical write position of the log and it is `ib_logfile1/648143676`. At 10:00, the position is updated to `ib_logfile3/648142342`. This indicates that the amount of data written in this hour is the difference between the two positions.
        
        1.  Amount written to the start file (`ib_logfile1`):  
            Subtract the start offset from the total file size. Each log file is `1 GB (1,073,741,824 bytes)`. The amount written is `1073741824 - 648143676 = 425598148` bytes.
            
        2.  Amount written to the intermediate file (`ib_logfile2`):  
            After `ib_logfile1` is full, the system completely writes `ib_logfile2`. This amount is `1,073,741,824` bytes (1 GB).
            
        3.  Amount written to the end file (`ib_logfile3`):  
            This is the offset at the end, which is `648142342` bytes.
            
        
        Therefore, the total amount written = `425598148 + 1073741824 + 648142342 = 2147482314` bytes. This is `2147482314 / 1024 / 1024 / 1024 = 1.999998` GB (rounded down to six decimal places). The cross-border data transfer fee for this hour is approximately `1.999998 GB × USD 0.80/GB = USD 1.5999984`.
        
        **Query the log write progress and physical file offset**
        
        ```
        -- Query the current write progress of the log system.
        SHOW STATUS LIKE 'Innodb_log_write_lsn'; 
        +----------------------+------------+
        | Variable_name        | Value      |
        +----------------------+------------+
        | Innodb_log_write_lsn | 1721889596 |
        +----------------------+------------+
        
        -- Query the physical file offset in bytes.
        SELECT lsn_to_pos(1721889596); 
        +------------------------+
        | lsn_to_pos(1721889596) |
        +------------------------+
        | ib_logfile1/648143676  |
        +------------------------+
        ```
        

**Note**

If you use the global domain name feature, you will incur additional fees for [internal DNS resolution](https://www.alibabacloud.com/help/en/privatezone/latest/what-is-privatezone) and inter-region data transfer. For more information, see [Global domain name pricing](/help/en/polardb/polardb-for-mysql/user-guide/create-a-global-domain-name#c08d7b6b8bd1x).

## Create a global database network

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Global Database Network**.
    
2.  On the **GDN** page, click **Create GDN**.
    
3.  In the **Create GDN** dialog box, configure the following parameters.
    
    Configuration
    
    Description
    
    **Compatibility**
    
    Select **MySQL**.
    
    **Version**
    
    Fixed at **Active-passive**.
    
    **Name**
    
    The name of the GDN. Enter a descriptive name for easy identification. The name does not need to be unique.
    
    **Primary Region**
    
    Select the region where the primary cluster is located.
    
    **Note**
    
    First, decide which cluster to use as the primary one, then select the region where that cluster is located.
    
    **Primary Cluster**
    
    Select an existing cluster as the primary cluster of the GDN.
    
    **Global Domain Name**
    
    Specifies whether to enable the global domain name feature. A global domain name provides a unified endpoint for the GDN. It not only enables nearest access but also ensures the domain name remains unchanged after a primary cluster switchover.
    
4.  Click **OK**. You can view the created GDN on the **GDN** page. You can then [add a secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster#title-gmh-abk-rgm) to the GDN.
    

## View information about a global database network

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/), click the GDN ID on the **GDN** page, and view its basic information, cluster list, and topology graph on the details page.

### **View basic information**

The basic information of a GDN includes its **ID**, **Version**, **Compatible Database**, **GDN Name**, and **Created At**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4786222671/p1018146.png)

### **View the cluster list**

The cluster list contains all clusters (both primary and secondary) in all regions of the GDN.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4786222671/p1017988.png)

### **View the topology**

The topology of the GDN is displayed on a world map to visually represent the geographical distribution of the primary and secondary clusters.

### **View the replication latency**

Click the **View Replication Latency** button in the **Network Topology** section. In the dialog box that appears, you can filter and view the delay for a specified time period.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4786222671/p1018169.png)

## Delete a GDN

**Important**

-   You can delete a GDN only when it contains only the primary cluster.
    
-   A GDN cannot be restored after it is deleted. Proceed with caution.
    
-   After a GDN is deleted, applications connected to it can no longer access the database. Update the connection code in your applications promptly.
    
-   When you release the primary cluster of a GDN, the GDN is automatically deleted. You do not need to delete the GDN separately.
    

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Global Database Network**.
    
2.  On the **GDN** page, find the target GDN and click **Delete** in the **Actions** column.
    
    **Note**
    
    If the **Delete** button is grayed out, this means the GDN still contains secondary clusters. You must delete the secondary clusters before you can delete the GDN.
    
3.  Read the notes in the dialog box that appears. After you confirm the information, click **OK** to delete the GDN.
    

## **References**

-   [Add and manage a secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster)
    
-   [Connect to a GDN](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-gdn): Describes how to connect to a GDN.
    
-   [Create a global domain name](/help/en/polardb/polardb-for-mysql/user-guide/create-a-global-domain-name): Describes how to create a unified endpoint that enables nearest access and remains unchanged after a primary cluster switchover.
    

## Related API operations

**API**

**Description**

[CreateGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-createglobaldatabasenetwork)

Creates a GDN.

[DeleteGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-deleteglobaldatabasenetwork)

Deletes a GDN.

[DescribeGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-describeglobaldatabasenetwork)

Queries the information about a specified GDN.

[DescribeGlobalDatabaseNetworks](/help/en/polardb/polardb-for-mysql/api-describeglobaldatabasenetworks#doc-api-polardb-DescribeGlobalDatabaseNetworks)

Queries information about all GDNs.

[ModifyGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-modifyglobaldatabasenetwork)

Modifies the information of a GDN.

## FAQ

**How many GDNs can I create for an Alibaba Cloud account?**

You can create an unlimited number of GDNs.

**After a GDN is created, can I change its primary cluster?**

Yes. You can [switch over the primary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster#title-9oc-45u-d71) for the GDN in the PolarDB console.

**Note**

The forced switchover mode has the following limitations: You cannot specify the new primary cluster, and the original primary cluster is detached from the GDN after the switchover. Therefore, the forced switchover mode is not suitable for scenarios where you need to replace the primary cluster in a GDN. We recommend that you always use the default non-forced switchover mode.
