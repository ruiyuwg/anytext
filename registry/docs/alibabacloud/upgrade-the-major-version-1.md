As Tair (and Redis Open-Source Edition) evolves, new versions are released that offer higher performance, enhanced security and stability, and more features. Newer versions also receive better technical support. If you want to use a newer version, you can upgrade the major version of your instance in the console or using an API. You do not need to create a new instance.

## Impacts

-   Resource application, secondary database upgrades, and data synchronization do not affect the services of your instance.
    
-   During an instance switchover or a primary/secondary failover, the instance becomes read-only for up to 60 seconds while data is synchronized. A transient connection that lasts for a few seconds also occurs. We recommend that you upgrade the instance during off-peak hours.
    
    After the upgrade is complete, the instance ID, endpoints, data, whitelist configurations, and created accounts remain unchanged. Ensure that your application is configured with a reconnection mechanism.
    
-   If you use a Redis Open-Source Edition 4.0 instance and your application uses bloom filter APIs, such as BF.ADD, these APIs are not supported after the major version upgrade.
    
    **Note**
    
    The Bloom filter-related API operations in some early Redis 4.0 instances were not officially released for public use and are no longer supported in later major versions or in newly created Redis 4.0 instances. Continuing to use these operations poses unknown risks, such as cache analysis failures. We recommend that you switch to a Tair [memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543) instance to use its optimized Bloom filters.
    

## Precautions

-   You can upgrade an instance only within the same deployment mode. Instances in the classic network can be upgraded to a maximum version of 5.0. If you want to upgrade a classic instance to a later version, see [How to upgrade a classic 5.0 instance to a 6.0 instance](#bb84cb06fb8d4).
    
-   If the instance has active DTS tasks, the upgrade fails. You must pause the DTS tasks and then retry the upgrade.
    
-   If a classic cluster instance has a private endpoint, you must release the [private endpoint](/help/en/redis/user-guide/release-a-private-endpoint-from-an-apsaradb-for-redis-instance#task-2386010) and then retry the upgrade.
    
-   You cannot upgrade the major version of a cloud-native instance that uses the cluster architecture and direct connection mode.
    
-   The upgrade fails if the instance is connected to the classic network. You must release the classic network connection and then retry the upgrade. After you release the classic network connection, you cannot re-establish it. We recommend that you use a VPC, which is faster and more secure.
    
-   A major version upgrade can change memory usage by approximately -10% to 10%. The exact change depends on how different versions store metadata. Before you upgrade, ensure that the memory usage is below 80% to prevent it from becoming too high after the upgrade.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the **Configuration Information** section, next to **Version**, choose **Update** > **Major Version Upgrade**.
    
    **Note**
    
    If the **Major Version Upgrade** button is unavailable, the instance is not eligible for a major version upgrade.
    
3.  In the panel that opens, select the target version and the execution time.
    
    **Warning**
    
    During an instance upgrade or a primary/secondary failover, the instance becomes read-only for up to 60 seconds and experiences a transient connection for a few seconds. To minimize the impact, you can select **Update During Maintenance**. The system then performs the switchover during the instance's maintenance window. For more information, see [Set a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window#concept-sjv-kpl-vdb).
    
4.  Click **OK**.
    

## Related API operations

**API**

**Description**

[ModifyInstanceMajorVersion](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancemajorversion-redis)

Upgrades the major version of an instance.

## FAQ

-   Q: Why did the upgrade fail?
    
    A: The upgrade may fail if your instance is a [retired instance type](/help/en/redis/product-overview/phased-out-specifications/). To resolve this, first change the instance configuration, and then perform the major version upgrade. You can select an available instance type that has the same memory capacity.
    
-   Q: Why did the instance status change to "Upgrading" when I selected **Update During Maintenance**?
    
    A: The system is performing pre-upgrade tasks, such as resource application and data synchronization. These tasks do not involve an instance switchover or a primary/secondary failover and do not affect the services of the instance.
    
    **Note**
    
    The instance becomes read-only for up to 60 seconds and a transient connection occurs only during the instance switchover or primary/secondary failover.
    
-   Q: Can I downgrade the major version, for example, from Redis Open-Source Edition 7.0 to Redis Open-Source Edition 6.0?
    
    A: No, you cannot downgrade the major version of an instance. To downgrade the major version, we recommend that you create an instance of an earlier version and then [migrate data](/help/en/redis/user-guide/configure-one-way-data-migration-between-apsaradb-for-redis-instances) to the new instance.
    
-   Q: Does a major version upgrade incur costs?
    
    A: No. Major version upgrades are provided free of charge.
    
-   Q: To which version can a Redis Open-Source Edition 2.8 instance be upgraded?
    
    A: A Redis Open-Source Edition 2.8 instance can only be upgraded to version 5.0.
    
-   Q: How do I upgrade a classic 5.0 instance to a 6.0 instance?
    
    A: You can [convert](/help/en/redis/user-guide/change-to-the-cloud-native-deployment-mode) the classic instance to a cloud-native instance. During the conversion, select Redis 6.0 or a later version.
    

## References

-   [New features and compatibility changes of major versions of Redis Open-Source Edition](/help/en/redis/support/new-features-of-apsaradb-for-redis#task-2218912)
