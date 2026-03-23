Tair (Redis OSS-compatible) lets you flexibly change instance configurations. You can change the instance architecture, scale the memory up or down, and change the number of shards or replica nodes. These changes help you meet various business demands for performance and capacity.

## Supported configuration changes and their impacts

**What is not affected by a configuration change?**

For all configuration changes:

-   **Endpoints, account passwords, and whitelists remain unchanged.** You do not need to modify your application code after the change.
    
-   **Data is usually not lost.** However, in the rare event that the original primary node goes down during the switchover, there is a theoretical risk of losing a small amount of unsynchronized data.
    

**Upgrade/Downgrade Type**

**Impact**

[Change the instance architecture from standard (master-replica) to cluster](/help/en/redis/user-guide/change-the-architecture-of-an-instance#2eac76481809t)

One to two transient disconnections, each lasting less than 30 seconds. The instance is read-only for about one minute.

[Change the instance architecture from cluster to standard (master-replica)](/help/en/redis/user-guide/change-the-architecture-of-an-instance#ae00a4d559i7x)

One to two transient disconnections, each lasting less than 30 seconds. The instance is read-only for about one minute.

[Upgrade or downgrade the instance type](/help/en/redis/user-guide/change-the-instance-specification)

One or two transient disconnections may occur, each lasting less than 30 seconds. The instance is read-only for about one minute.

[Adjust the number of cluster shards](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards)

One or two transient disconnections may occur, each lasting less than 30 seconds. The instance is read-only for about one minute.

[Enable or disable read/write splitting](/help/en/redis/user-guide/enable-read-write-splitting)

A transient disconnection that lasts for a few seconds.

[Add or remove replica nodes](/help/en/redis/user-guide/node-management)

None.

[Change the deployment mode to cloud-native](/help/en/redis/user-guide/change-to-the-cloud-native-deployment-mode)

One transient disconnection that lasts less than 30 seconds. The instance is read-only for about one minute.

## FAQ

### How can I check if an instance has been scaled out?

On the [Task Hub](/help/en/redis/user-guide/job-center) page, set **Status Statistics** to **Successful** and check for tasks of the **Upgrade/Downgrade or Migration** type. You can also retrieve this information by calling the [DescribeHistoryTasks](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorytasks-redis) API operation.

### What may cause a configuration change to fail?

-   Upgrading or downgrading an instance may fail if it contains a large key.
    
    Before you change the instance configuration, identify and delete all large keys. For more information about how to identify large keys, see [Offline key analysis](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb).
    
-   To prevent data loss, the following limit applies when you downgrade: 80% of the new instance's memory capacity must be greater than the original instance's used memory (New Capacity × 0.8 > Used Memory). Otherwise, the downgrade fails. For example, if an 8 GB memory-optimized Standard Edition instance is using 2 GB of memory, you can downgrade it to a 4 GB memory-optimized Standard Edition instance.
    

### How do I change the storage medium for a Tair (Enterprise Edition) instance?

You cannot change the storage medium for a Tair (Enterprise Edition) instance between memory-optimized, persistent memory, and ESSD types because these storage mediums are not compatible with each other.

### Can I upgrade only the CPU performance of an instance?

You cannot upgrade only the CPU of Tair (and Redis Open-Source Edition) instances. You can increase the overall CPU performance of an instance in the following ways:

-   Change the instance architecture from standard to cluster or read/write splitting.
    
-   Increase the number of read-only nodes for an instance that uses the read/write splitting architecture.
    
-   Increase the number of shards for a cluster instance.
    

For more information, see [How to upgrade the CPU specifications of an instance](/help/en/redis/support/how-to-upgrade-redis-cpu-specifications).

For more information about instance types, see [Instance types and FAQ](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb).

### How do I change a high-availability (dual-replica) instance to a single-replica instance?

You cannot change a high availability (HA) instance to a single-replica instance because the single-replica edition does not guarantee data reliability.

If needed, you can purchase a separate high-availability instance and then use DTS to migrate data from it to the single-replica instance. For more information, see [Migration between Tair (Redis OSS-compatible) instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-for-redis-instances#task-2119264).

### **Do I need to pause read and write operations during a configuration change?**

No, you do not. However, we recommend that you perform changes during off-peak hours to minimize the impact on your business. The instance may become read-only for about one minute and experience one or two transient disconnections, each lasting less than 30 seconds. For more information about the specific impacts of each change, see [Supported configuration changes and their impacts](#61bd1ea3b1sj0).

### **When I change a Standard Edition instance to a cluster instance or change the number of shards for a cluster instance, is the data automatically migrated to each shard?**

Yes, it is. When you change a Standard Edition instance to a cluster instance or change the number of shards for a cluster instance, the system automatically migrates and rebalances the data across all shards.

### **How long does a configuration change take?**

The duration of a configuration change varies based on factors such as network conditions, request volume, and data volume. Therefore, the duration cannot be predicted.

You can monitor the task progress by clicking the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3496768071/p749204.png) icon in the upper-right corner of the instance details page.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3496768071/p749201.png)

### Will a configuration change cause any backup sets to be lost?

Configuration changes do not delete backup sets. However, when you reduce the number of shards for a classic cluster instance or change it to a standard architecture instance, the mapping between historical backup sets and instance nodes changes.

You can find historical backup sets in this scenario by searching for the relevant backup sets by their creation time or backup set ID.

To restore the data, you can download the historical backup set (RDB file), parse it, and import the data into the new instance.

### After a configuration change, why are the configurations not updated?

This may be because of a delay in refreshing the metadata cache. You can wait a few minutes and then refresh the page.

### Why did the task execute immediately even though I scheduled the configuration change for a maintenance window?

For configuration change tasks that do not cause transient disconnections or affect your business, the system ignores the specified maintenance window and completes the task immediately. For example, for a cloud-native Standard Edition instance, if resources are sufficient, the system performs a seamless switchover immediately.

## Related API operations

**API operations**

**Description**

[ModifyInstanceSpec](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancespec-redis#main-107864)

Changes the specifications of an instance.
