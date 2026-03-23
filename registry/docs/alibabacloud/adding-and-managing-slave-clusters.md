After you create a global database network (GDN), you can create and add a new cluster to the GDN as a secondary cluster. If you no longer need the cluster, you can remove it from the GDN. After removal, the secondary cluster becomes a standalone PolarDB cluster.

## Applicability

You must create a global database network before you can add a secondary cluster to it.

### **Supported regions**

More than 10 regions are supported worldwide, including the Chinese mainland, China (Hong Kong), and regions outside China.

**Region of the primary cluster**

**Region of the secondary cluster**

All regions in the Chinese mainland

The same region as the primary cluster, or other regions in the Chinese mainland.

For example, if the primary cluster is in the China (Hangzhou) region, the secondary cluster can be in the China (Hangzhou) region or any other region in the Chinese mainland.

**Note**

If you have other region requirements, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact us.

Regions outside the Chinese mainland

China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London).

**Important**

For regions outside the Chinese mainland, you must sign the [Cross-border Data Transfer Compliance Agreement](https://page-intl.aliyun.com/form/act866838213/index.htm) before you create a secondary cluster.

### **Feature limitations**

-   Clusters in a GDN do not support the [serverless feature](/help/en/polardb/polardb-for-oracle/serverless/).
    
-   Clusters in a GDN do not support the database and table restoration feature.
    

### **Other limitations**

-   A GDN can contain one primary cluster and up to four secondary clusters.
    
-   The primary cluster and secondary clusters must use the same database engine version: Oracle syntax-compatible 2.0.
    
-   The node specifications of a secondary cluster must be greater than or equal to those of the primary cluster. For best results, use the same specifications.
    
-   A cluster can belong to only one GDN.
    

## Add a secondary cluster

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Global Database Network (GDN)**.
    
2.  On the **Global Database Network (GDN)** page, find the target GDN and click **Add Secondary Cluster** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6545198571/p1010759.png)
    
3.  On the purchase page that appears, set the following parameters. Configure other parameters as needed. For more information, see [Custom purchase](/help/en/polardb/polardb-for-oracle/purchase-a-pay-as-you-go-cluster-1).
    
    -   **Region**: Select a region. For information about supported regions, see [Prerequisites](#d41e17).
        
    -   **Creation Method**: Select **Create Secondary Cluster**.
        
    -   **Global Database Network**: Select the GDN to which you want to add the cluster. The GDN that you selected in the previous step is selected by default.
        
    -   **Database Engine**: The database engine version must be the same as that of the primary cluster: compatible with Oracle 2.0.
        
    -   **Compute Node Specifications:** The compute node specifications of the secondary cluster must be the same as those of the primary cluster. If you require higher specifications for the secondary cluster, you can upgrade its specifications on the cluster details page after it is created.
        
4.  After you complete the purchase, return to the **Global Database Network (GDN)** page. Find the target GDN and click its **Global Database Network ID** to open the GDN details page. The new secondary cluster is displayed in the **Cluster List** section.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6545198571/p1010760.png)
    

## Remove a secondary cluster

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Global Database Network (GDN)**.
    
2.  On the **Global Database Network (GDN)** page, find the target GDN and click its **Global Database Network ID** to open the GDN details page.
    
3.  In the **Cluster List** section, find the target secondary cluster and click **Remove** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6545198571/p1010763.png)
    
    **Note**
    
    -   The removal process takes about 5 minutes.
        
    -   During the removal process, the endpoints of all clusters in the GDN, including the secondary cluster that is being removed, remain available. You can continue to access the databases using the cluster endpoints.
        
    -   Only secondary clusters can be removed from a GDN. The primary cluster cannot be removed.
        
    -   After a secondary cluster is removed from a GDN, data synchronization between the secondary cluster and the primary cluster stops. The system then sets the cluster to read/write mode.
        
    -   After a cluster is removed from a GDN, it cannot be added back to a GDN as a secondary cluster. Proceed with caution.
        
    
4.  In the dialog box that appears, carefully read the notes, and then click **OK**.
    

## Switch the primary cluster

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Global Database Network (GDN)**.
    
2.  On the **Global Database Network (GDN)** page, find the target GDN and click its **Global Database Network ID** to open the GDN details page.
    
3.  In the **Cluster List** section, find the target secondary cluster and click **Switch To Primary Cluster** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6545198571/p1010766.png)
    
4.  In the **Primary/Secondary Switchover** dialog box, select the secondary cluster that you want to specify as the new primary cluster, and then click **OK**.
    
    **Note**
    
    -   The **Forced Switchover** feature is not supported.
        
    -   If the original primary cluster in the GDN has an Internet endpoint, make sure that the new primary cluster also has an Internet endpoint. Otherwise, your application may fail to access the database. For more information, see [View or apply for an endpoint](/help/en/polardb/polardb-for-oracle/view-or-apply-for-an-endpoint).
        
    -   Switching the primary cluster may cause a transient connection break that lasts for about 160 seconds. We recommend that you perform this operation during off-peak hours and make sure that your application has an automatic reconnection mechanism.
        
    

## **References**

-   Global Database Network (GDN). Learn about GDN, its service architecture, and common scenarios.
    
-   Connect to a GDN. Learn how to connect to a global database network (GDN).
    

## Related API operations

**API**

**Description**

[CreateDBCluster](/help/en/polardb/api-polardb-2017-08-01-createdbcluster)

Use the CreateDBCluster operation to add a secondary cluster to a GDN. The following parameters are required:

-   **CreationOption**: **CreateGdnStandby**.
    
-   **GDNId**: Enter the ID of your target GDN.
    

[RemoveDBClusterFromGDN](/help/en/polardb/api-polardb-2017-08-01-removedbclusterfromgdn)

Remove a secondary cluster from a GDN.

[SwitchOverGlobalDatabaseNetwork](/help/en/polardb/api-polardb-2017-08-01-switchoverglobaldatabasenetwork)

Switch the primary cluster of a GDN.
