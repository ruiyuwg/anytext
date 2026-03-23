Enterprise SSDs (ESSDs) are an Elastic Block Storage (EBS) provided by Alibaba Cloud and suitable for scenarios that require low latency and high I/O performance. This topic describes how to change ESSD storage types.

## **Limits**

**Note**

-   The time required to change the storage type of an ESSD may depend on multiple factors, such as the throughput, storage capacity, and original category of the ESSD. The change may take several hours to complete. Please wait.
    
-   During the change, your instance is not affected. However, you cannot scale up the instance storage and create instance backups.
    

-   The provisioned IOPS of an ESSD AutoPL disk can be changed up to two times within 24 hours.
    
-   If you change the storage type of a disk from PL0 ESSD, PL1 ESSD, PL2 ESSD, or PL3 ESSD to ESSD AutoPL and specify a provisioned IOPS for the disk, you cannot change the configurations of the disk again within 24 hours.
    
-   You can select the new disk category on the disk configuration change page of the cluster in the PolarDB console. Disks of each category can be changed to different disk categories.
    
    **Note**
    
    -   After PL0 ESSDs are changed to PL1 ESSDs, PL2 ESSDs, or PL3 ESSDs, the disks cannot be downgraded back to the original disk category.
        
    -   ESSD AutoPL disks cannot be changed to other disk categories.
        
    
    -   PL0 ESSDs can be changed to the following disk categories:
        
        -   PL1 ESSDs, PL2 ESSDs, or PL3 ESSDs
            
        -   ESSD AutoPL disks
            
    -   PL1 ESSDs, PL2 ESSDs, or PL3 ESSDs support the following configuration changes:
        
        -   You can convert the ESSDs between PL1, PL2, and PL3.
            
        -   You can convert the ESSDs of the preceding performance levels to ESSD AutoPL disks.
            

## **Procedure**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  Find the cluster and click its ID.
    
5.  Go to the **Basic Information** page of the cluster**.**
    
6.  In the upper-right corner of the **Distributed Storage** section, click **Change Storage Type****.** Then, you can select **Upgrade** or **Downgrade** from the drop-down list based on your business requirements.
    
    **Important**
    
    If the `Storage must bigger than xxx GB, current is xxGB` error message appears when you select **Upgrade**, you can select **Change Storage Capacity** to prevent the failed upgrade due to insufficient storage capacity. After the storage capacity is scaled up, you can proceed with the upgrade. For more information, see [Manually scale up or scale down the storage capacity](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9733052371/p863180.png)
    
7.  In the **Distributed Storage** section, modify the value of the **Storage Type** parameter to the desired disk category**.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8625052371/p863698.png)
    
    **Note**
    
    The provisioned IOPS of ESSD AutoPL disks ranges from 0 to 50,000. This means that the overall maximum IOPS of the PolarDB cluster is 100,000.
    
8.  Set the Switching Time parameter to **Switch Now** **or** **Switch At****.**
    
    **Note**
    
    If you set the parameter to Switch At, you can set the switching time to a point in time within the next 24 hours. On the **Scheduled Tasks** page, you can view the details of the task or cancel the task. For more information, see [Scheduled tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266).
    
9.  Read the Terms of Service and then click **Buy Now**.
    
10.  On the **Purchase** page, confirm the unpaid order and click **Subscribe****.**
