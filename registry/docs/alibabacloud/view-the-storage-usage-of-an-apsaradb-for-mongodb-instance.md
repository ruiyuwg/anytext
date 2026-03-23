This topic describes how to view the storage overview of an ApsaraDB for MongoDB instance by using the storage analysis feature of CloudDBA. The storage analysis feature provides an overview of the storage usage of an instance. The feature also provides information about the storage that is occupied by each object on the instance and allows you to defragment disks. You can use the storage analysis results to identify and troubleshoot storage exceptions. This ensures the stable performance of the instance.

## Prerequisites

The storage analysis feature is supported by replica set or sharded cluster instances. The following table describes whether the MongoDB versions of the replica set or sharded cluster instances support the feature.

**Major engine version**

**Minor engine version**

**Support for storage analysis**

MongoDB 4.0

3.0.x

No

MongoDB 4.2

4.0.0-4.0.22

No

\>= 4.0.23

Yes

MongoDB 4.4

5.0.0-5.0.6

No

\>= 5.0.7

Yes

MongoDB 5.0

Upgrade or downgrade cloud computers

Yes

MongoDB 6.0

Upgrade or downgrade cloud computers

Yes

MongoDB 7.0

Upgrade or downgrade cloud computers

Yes

MongoDB 8.0

Upgrade or downgrade cloud computers

Yes

## Usage notes

If you want to use the storage analysis feature of CloudDBA as a Resource Access Management (RAM) user, make sure that the RAM user is granted the AliyunHDMFullAccess or AliyunHDMReadOnlyAccess permission on Database Autonomy Service (DAS). For more information, see [How do I use DAS as a RAM user?](/help/en/das/support/what-do-i-do-if-i-do-not-have-permissions-to-access-das-as-a-ram-user#concept-2419343)

## View the storage overview

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page, select the resource group and region to which an instance belongs.
    
4.  Click the ID of the instance or click **Manage** in the **Actions** column.
    
5.  In the left-side navigation pane of the instance details page, choose **CloudDBA** > **Storage Analysis**.
    
6.  View the storage analysis results.
    
    -   View the storage overview of namespaces
        
        Click the **Storage Overview** tab to view the following information:
        
        -   In the **Storage** section, view the storage overview.
            
            **Metric**
            
            **Description**
            
            **Exception**
            
            The number of storage exceptions that are identified in the instance. ApsaraDB for MongoDB can identify the following types of exceptions:
            
            -   More than 90% of the storage is used.
                
            -   The available physical storage may be exhausted within seven days.
                
            -   A single collection contains more than 10 indexes.
                
            
            **Avg Daily Increase in Last Week**
            
            The average daily increase of storage usage in the instance in the last seven days.
            
            Formula: (Size of available storage at the time of collection - Size of available storage seven days ago)/7.
            
            **Note**
            
            -   This increase indicates the average daily increase in the last seven days at the time of collection.
                
            -   This parameter is suitable for scenarios in which the traffic volume remains stable. The value of this parameter becomes inaccurate when storage abruptly changes due to operations such as batch import, deletion of historical data, instance migration, or instance rebuilding.
                
            
            **Available Days of Storage**
            
            The number of days during which storage is available in the instance.
            
            Formula: Size of available storage/Average daily increase in the last seven days.
            
            **Note**
            
            -   The value 90+ indicates that the available storage in the instance is sufficient for a long period of time.
                
            -   This parameter is suitable for scenarios in which the traffic volume remains stable. The value of this parameter becomes inaccurate when storage abruptly changes due to operations such as batch import, deletion of historical data, instance migration, or instance rebuilding.
                
            
            **Used Storage**
            
            The amount of storage space that is used by the instance and the total storage space.
            
        -   In the **Exceptions** section, view the information of storage exceptions. You can troubleshoot the exceptions based on the information.
            
        -   In the **Storage Trend** section, view the data trends in the last week.
            
        -   In the **Tablespaces** section, view the data of collections.
            
            **Note**
            
            You can click the name of a collection to view its indexes.
            
        
    -   View the storage overview of a data space
        
        Click the **Data Space** tab to view the following information:
        
        -   You can click the name of a data space to view its namespace information.
            
        -   You can click the name of a collection to view its indexes.
            
        
    

## **Defragment disks**

**Important**

You can defragment only the disks of hidden nodes. If you want to defragment the disks of the primary node or secondary nodes, you can switch the primary node or the secondary node to the hidden node and then defragment the disks of the hidden node. You can also run the `compact` command described in [Defragment the disks of an instance to increase disk utilization](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage). For more information about how to perform a primary/secondary switchover, see [Primary/Secondary failover](/help/en/mongodb/user-guide/primary-or-secondary-failover/).

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page, select the resource group and region to which an instance belongs.
    
4.  Click the ID of the instance or click **Manage** in the **Actions** column.
    
5.  In the left-side navigation pane of the instance details page, choose **CloudDBA** > **Storage Analysis**.
    
6.  In the **Tablespaces** section of the page that appears, find the collection that you want to manage. Then, click **Recycle** in the **Fragmentation Rate** column.
    
7.  In the **Recycle** dialog box, complete related settings.
    
    -   Automatic defragmentation
        
        If you configure a plan to automatically defragment disks for the instance, DAS automatically detects the collections of hidden nodes during the specified **maintenance window**, and then runs the `compact` command on collections in which the sum of index and data storage usage exceed 1 GB and the fragmentation rate is greater than 20%. To reduce defragmentation time, the total amount of recyclable space in collections on each hidden node in a defragmentation plan each round cannot exceed 100 GB. If the recyclable space of a common collection exceeds 100 GB in size, you must manually defragment the disks of the collection.
        
    -   Manual defragmentation
        
        In the Collection with High Fragmentation Rate section, find the collection that you want to manage and click **Recycle** in the **Actions** column. You can defragment disks by selecting **Execute Now** or **Run in the O & M window**.
        
    
    **Note**
    
    -   After the operation is complete, the disk is not immediately defragmented. Wait for a few minutes. In practice, the `compact` command continues to run in the background for a period of time to gradually defragment disks. The defragmentation time depends on the size of the storage to be defragmented. A larger storage requires a longer defragmentation time.
        
    -   We recommend that you concurrently defragment the disks of up to 10 collections and wait until the current defragmentation task is completed before you start the next task. If you start the next task before the current task is completed, the defragmentation task may fail.
        
    -   If the fragmentation rate of a collection is relatively low, the defragmentation process for the collection may not recycle a large size of storage.**Fragmentation Rate**
        
    -   If the number of collections with relatively small recyclable space is large, we recommend that you configure a plan to automatically defragment the disks of the collections. If the recyclable space of a collection is relatively large, we recommend that you manually defragment a disk of the collection.**Recyclable Space****Recyclable Space** If the **Recyclable Space** value of a collection exceeds 100 GB in size, the time required to defragment the disks of the collection may exceed 1 hour.
        
    

### **View defragmentation results**

After the defragmentation task is complete, click **Re-analyze** to view the results.

**Note**

The defragmentation effect are affected by data distribution. If the effect is unsatisfactory, you can re-execute the defragmentation task.

## **FAQ**

What do I do if the `(Interrupted) Compaction interrupted on table:*** due to cache eviction pressure` error message appears?

The instance whose disks you want to defragment is of an earlier version and has low specifications. When you run the `compact` command on the instance, the instance fails due to a large amount of cached data. If a defragmentation task fails, you can select a time to restart the task. If the task fails multiple times, submit a ticket.

## **References**

The storage analysis feature is supported only for ApsaraDB for MongoDB replica set or sharded cluster instances that run MongoDB 4.0 or later. For more information about how to defragment the disks of ApsaraDB for MongoDB instances that run MongoDB versions earlier than MongoDB 4.0, see [Defragment the disks of an instance to increase disk utilization](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage).

## Related tasks

The storage analysis feature of CloudDBA can analyze up to 20,000 collections. If no storage analysis results are displayed, you can check whether the number of collections exceeds 20,000 or whether your account is granted permissions on the specified collections. If your account is not granted permissions, you can use one of the following methods to grant your account permissions on the specified collections: Select one of the following methods for re-authorization:

-   Grant an existing account permissions
    
    1.  In the upper section of the instance storage analysis page, click **Re-authorize**.
        
    2.  Enter the username and password of the account in the **Database Account** and **Password** fields.
        
    3.  Click **OK**.
        
-   Grant the current account permissions by running a command
    
    1.  In the upper section of the instance storage analysis page, click **Re-authorize**.
        
    2.  Enter the username and password of the account in the **Database Account** and **Password** fields.
        
    3.  Click **Generate Authorization Command**.
        
    4.  Click **OK**.
        

## **Related API operation**

**Operation**

**Description**

[CreateStorageAnalysisTask](/help/en/das/developer-reference/api-das-2020-01-16-createstorageanalysistask)

Creates a storage analysis task to query the usage details of one or more databases and collections.

[GetStorageAnalysisResult](/help/en/das/developer-reference/api-das-2020-01-16-getstorageanalysisresult)

Queries the status and results of a storage analysis task.
