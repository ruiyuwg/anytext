Move a Tair (Redis OSS-Compatible) instance to a different zone within the same region using the console or the [MigrateToOtherZone](#section-2ea76226) API. Common reasons include reducing network latency by colocating with ECS instances, enabling cross-zone disaster recovery, and accessing zone resources required for an instance type upgrade.

After the migration, instance data, database accounts, endpoints, and whitelist settings remain unchanged.

## Prerequisites

Before you begin, make sure that you have:

-   (Cloud-native instances) Released the [public endpoint](/help/en/redis/user-guide/release-a-public-endpoint-for-an-apsaradb-for-redis-instance), if one exists
    
-   (Classic instances) Released both the [public endpoint](/help/en/redis/user-guide/release-a-public-endpoint-for-an-apsaradb-for-redis-instance) and the [direct connection endpoint](/help/en/redis/user-guide/release-a-private-endpoint-from-an-apsaradb-for-redis-instance), if they exist
    

## Supported migration types

**Migration type**

**Use case**

Single zone to single zone

Place the instance in the same zone as your ECS instance for lower internal network latency

Multi-zone to multi-zone

Adjust zone distribution while maintaining cross-zone disaster recovery

Single zone to multi-zone

Enable cross-zone disaster recovery. A single-zone instance is resilient to server-level and rack-level failures. A multi-zone instance is deployed across data centers and can withstand full data center outages

Multi-zone to single zone

Consolidate to a single zone when specific features require it

## Impacts

### Transient disconnection

**Cloud-native instances**

Whether a transient disconnection occurs depends on which zone changes:

**Scenario**

**Transient disconnection**

Adding a secondary zone to a single-zone instance (primary zone stays the same)

No

Changing only the secondary zone, which does not contain a primary node

No

Changing the zone that hosts the primary node, including cases where a high-availability (HA) switchover has moved the primary node to the secondary zone

Yes

Changing the secondary zone of a read/write splitting instance while connected through the secondary zone endpoint

Yes

**Classic instances**

A zone migration may cause a transient disconnection for classic instances.

### Read-only state

The instance may enter a read-only state for up to 60 seconds to synchronize incremental data and prevent double writes caused by the DNS cache. In high-write scenarios, this read-only period may be longer.

**Note**

No read-only state occurs if the primary node is not migrated. This applies to cloud-native instances only.

### DNS mapping changes

A zone migration changes the underlying virtual IP address (VIP) and DNS mapping. Always connect to the instance using its endpoint, such as `r-bp10b3fa3500****.redis.rds.aliyuncs.com`, not the VIP directly.

Older Jedis versions may fail to resolve the endpoint correctly after the migration. If you use Jedis, make sure the version is 3.10.0 or later. For details, see [Jedis client upgrade recommendations](/help/en/redis/product-overview/notice-on-jedis-update#main-2345273).

### Automatic minor version upgrade

If the instance runs an outdated minor version, the system automatically upgrades it to the latest minor version during the migration. Minor versions maintain forward compatibility, so no compatibility issues occur.

### Bandwidth reset

After the migration, bandwidth is reset to the default value. If you previously adjusted bandwidth manually, reconfigure it after the migration. Auto Scaling restores custom bandwidth settings when the next scaling rule triggers.

**Note**

If the primary node is not migrated, the bandwidth plan remains unchanged. This applies to cloud-native instances only.

### Recommendations

-   Implement a reconnection mechanism in your application.
    
-   Perform the migration during off-peak hours to minimize user impact.
    
-   Schedule the migration during the maintenance window for a controlled switchover.
    

## Migrate an instance to a different zone

**Warning**

This operation may cause transient connections. We recommend that you perform this operation during off-peak hours and make sure that your application can automatically reconnect to your instance.

1.  Log in to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region of the instance. Find the instance and click its ID.
    
2.  In the **Basic Information** section, click **Migrate** next to **Zone**.
    
3.  Configure the following parameters in the panel that appears.
    
    **Parameter**
    
    **Description**
    
    **Primary zone change**
    
    Select the target zone.
    
    **Secondary zone change** (optional)
    
    Select a secondary zone to enable cross-zone disaster recovery. The secondary node migrates to the specified zone. If you do not specify a secondary zone, both primary and secondary nodes migrate to the primary zone.
    
    **Virtual Switch:**
    
    Select the destination vSwitch. If no vSwitch exists in the target zone, [create one](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575) first. This parameter appears only for VPC instances.
    
    **Executed At**
    
    **Update Now**: The migration starts immediately after you click **OK**. The migration is complete when the instance status becomes **Running**. **Update During Maintenance** (recommended): The system performs preliminary tasks and changes the instance status to **Migrating to Another Zone**. The instance remains available during this phase. The actual switchover occurs during the configured [maintenance window](/help/en/redis/user-guide/set-a-maintenance-window#concept-sjv-kpl-vdb).
    
    **Primary zone nodes per shard** / **Secondary zone nodes per shard**
    
    For cloud-native cluster or read/write splitting instances, adjust how replica nodes distribute between the primary and secondary zones. This does not change the total node count. For cluster architecture instances, these values represent the number of replica nodes per shard in each zone.
    
4.  Read the warning message, select the check box, and click **OK**.
    

## Verify the migration

Check the migration progress in **Task Center** in the console. The migration is complete when the instance status returns to **Running**.

## API reference

**API**

**Description**

[MigrateToOtherZone](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-migratetootherzone-redis#main-107864)

Migrate an instance to another zone within the same region.

## FAQ

### Does the endpoint change after a zone migration?

No. The instance endpoint, such as `r-bp10b3fa3500****.redis.rds.aliyuncs.com`, does not change. However, the VIP and DNS mapping change. Always connect using the endpoint, not the VIP.

If you use Jedis, make sure the version is 3.10.0 or later. Older versions may fail to resolve the endpoint correctly after the migration. For details, see [Jedis client upgrade recommendations](/help/en/redis/product-overview/notice-on-jedis-update#main-2345273).

### Is data lost during a zone migration?

No. Zone migration does not cause data loss and does not require reconfiguring whitelists or database accounts.

### Is there a charge for migrating from a single zone to multi-zone?

No. Migrating from a single zone to multi-zone incurs no additional charges.

### Why can't I migrate my instance to a secondary zone?

A standalone instance has no secondary node, so it does not support secondary zone migration.

### If my instance is deployed across two zones and one zone fails, does the instance remain available?

Yes. An instance deployed across two or more zones supports cross-zone disaster recovery. If one zone fails, the other node continues processing requests.
