You can manually change the primary or secondary zone of a PolarDB cluster. You can use this feature to migrate the compute nodes of a cluster to a different zone.

## Scenarios and usage notes

#### **Change the primary zone**

You can change the primary zone for disaster recovery or to allow the Elastic Compute Service (ECS) instance to access the cluster from the nearest zone.

-   During a primary/secondary zone switchover, one or two transient connections occur. Each transient connection lasts approximately 30s. We recommend that you perform the switchover during off-peak hours and make sure that your application can automatically reconnect to the database service.
    
-   If the destination zone is a secondary zone, data migration is not required. The system migrates only the compute nodes. The average time required to migrate a node across data centers is 5 minutes. In most cases, this operation is performed in disaster recovery drills.
    
-   If the destination zone is not a secondary zone, you must migrate the data. The time required to migrate data varies based on the volume of the data. If the volume of your data is excessively large, the operation may require several hours to complete. Proceed with caution. In most cases, this operation is performed to adjust the distribution of applications and databases among zones for applications to access databases from the nearest zone.
    
-   After the primary zone is changed, the primary endpoint and the cluster endpoints of the cluster remain unchanged, but the vSwitch and IP address may be changed. This operation may affect the availability of the databases. Proceed with caution.
    
-   Available resources are deployed in two or more zones within the region in which the PolarDB for MySQL cluster is deployed. The multi-zone deployment feature is unavailable in the following regions: Philippines (Manila), South Korea (Seoul), China (Qingdao), China (Chengdu), China (Hohhot), and Thailand (Bangkok).
    

#### **Change the secondary zone**

-   Before you change the secondary zone, you must migrate data from the original secondary zone to the destination secondary zone. The time required to migrate data varies based on the volume of the data. If the volume of your data is excessively large, the operation may require several hours to complete. Proceed with caution. In most cases, this operation is used to adjust the zone distribution of a cluster.
    
-   Resources must be deployed in two or more zones in the region where the cluster resides. The destination secondary zone cannot be the current primary or secondary zone. The multi-zone deployment feature is unavailable in the following regions: Philippines (Manila), South Korea (Seoul), China (Qingdao), China (Chengdu), China (Hohhot), and Thailand (Bangkok).
    

#### Switch over to the hot standby storage cluster

-   Make sure that the hot standby storage cluster feature is enabled for your cluster. For more information, see [High-availability mode (hot standby storage cluster)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).
    
-   This feature is supported for Standard Edition and Cluster Edition.
    
-   Do not frequently switch between the primary cluster and the hot standby storage cluster. Otherwise, high replication latency may occur.
    
-   You can perform a primary/secondary switchover only to the hot standby storage cluster. You cannot switch over to a non-secondary zone.
    
-   During a primary/secondary zone switchover, one or two transient connections occur. Each transient connection lasts approximately 30s. We recommend that you perform the switchover during off-peak hours and make sure that your application can automatically reconnect to the database service.
    
-   After the switchover, the primary endpoint, cluster endpoint, vSwitch, and IP address of the cluster remain unchanged. Indirect accesses may occur. Proceed with caution.
    

## Procedure

### **Manually change the primary zone of a cluster**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  At the bottom of the **Basic Information** page of the cluster, click **Migrate Cluster Across Zones**.
    
    ![迁移可用区](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1928449951/p68057.png)
    
5.  In the dialog box that appears, select values for the following parameters: **Destination Zone**, **Destination VPC**, and **Destination vSwitch**, and configure the **Validity Period** parameter based on your business requirements.
    
    **Note**
    
    -   If the destination zone is a secondary zone, data migration is not required. The system migrates only the compute nodes. The average time required to migrate a node across data centers is 5 minutes. In most cases, this operation is performed in disaster recovery drills.
        
    -   If the destination zone is not a secondary zone, you must migrate the data. The time required to migrate data varies based on the volume of the data. If the volume of your data is excessively large, the operation may require several hours to complete. Proceed with caution. In most cases, this operation is performed to adjust the distribution of applications and databases among zones for applications to access databases from the nearest zone.
        
    -   If no vSwitches are available in the destination zone, you must create a vSwitch. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    -   You can set the **Validity Period** parameter to **Immediately** or **Upgrade in Maintenance Window**. If you select **Upgrade in Maintenance Window**, you can view the details of the scheduled task or cancel the task on the **Scheduled Tasks** page. For more information, see [Scheduled tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266).
        
    
6.  Click **OK**.
    

### Switch over to the hot standby storage cluster

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Service Availability**.
    
5.  On the **Service Availability** page, click **Switch Over to Hot Standby Storage Cluster**.
    
6.  Click **OK**.
    

### **Manually change the secondary zone**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Service Availability**.
    
5.  On the **Service Availability** page, click **Change Secondary Zone**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5368473271/p811868.png)
    
6.  In the dialog box that appears, select the destination zone and configure the **Effective Time** parameter based on your business requirements.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6204710271/p730221.png)
    
    **Note**
    
    -   The destination secondary zone cannot be the current primary or secondary zone. Data must be migrated to the destination secondary zone. The time required to migrate data varies based on the volume of the data. If the volume of your data is excessively large, the operation may require several hours to complete. Proceed with caution. In most cases, this operation is used to adjust the zone distribution of a cluster.
        
    -   You can set the **Effective Time** parameter to **Effective Immediately** or **Effective in Maintenance Window**. If you select **Effective in Maintenance Window**, you can view the details of the scheduled task or cancel the task on the **Scheduled Tasks** page. For more information, see [Scheduled tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266).
        
    
7.  Click **OK**.
    

## FAQ

-   How much time is required to change the primary zone?
    
-   -   If the destination zone is a secondary zone, data migration is not required. The system migrates only the compute nodes. The average time required to migrate a node across data centers is 5 minutes. In most cases, this operation is performed in disaster recovery drills.
        
    -   If the destination zone is not a secondary zone, you must migrate the data. The time required to migrate data varies based on the volume of the data. If the volume of your data is excessively large, the operation may require several hours to complete. Proceed with caution. In most cases, this operation is performed to adjust the distribution of applications and databases among zones for applications to access databases from the nearest zone.
        
    
    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9410622161/p211265.png)
    
-   Is the time required to change the primary zone equal to the service downtime? For example, I want to use the secondary zone as the primary zone for a four-node cluster. The average time required to migrate a node is 5 minutes. In this case, are my services unavailable for approximately 20 minutes?
    
    No, the time required to change the primary zone is not equal to the service downtime. Only one or two transient connections occur during the switchover. Each transient disconnection lasts approximately 30s. We recommend that you change the primary zone during off-peak hours and make sure that your applications can automatically reconnect to the cluster.
    
-   How does the system ensure that the cluster runs as expected when the primary zone is being changed?
    
    After you change the primary zone of a cluster, the primary endpoint and cluster endpoint of the cluster remain unchanged. Therefore, you can still use these endpoints to connect to the cluster. However, the vSwitch and IP address of the cluster may be changed. This operation may affect the availability of the databases. Proceed with caution.
