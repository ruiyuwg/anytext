Tair (Redis OSS-Compatible) continuously optimizes the database kernel and proxy components to add features, fix known bugs, and improve service stability. You can upgrade the database kernel and proxy to the latest version with a single click in the console, or configure an automatic upgrade policy to keep your instances up to date.

## Before you upgrade

Review the following checklist before upgrading to avoid unexpected issues:

-   **Schedule the upgrade during off-peak hours.** The upgrade causes a brief service disruption. Choose a time when your workload is at its lowest.
    
-   **Ensure your application has a reconnection mechanism.** Transient connection interruptions occur during the upgrade. Your application must reconnect automatically.
    
-   **Review the release notes.** Check what changes are included in the new version:
    
    -   [Tair Minor Version Release Notes](/help/en/redis/support/apsaradb-for-redis-enhanced-edition-1)
        
    -   [Redis Open-Source Edition Minor Version Release Notes](/help/en/redis/support/apsaradb-for-redis-community-edition)
        
    -   [Proxy Minor Version Release Notes](/help/en/redis/support/apsaradb-for-redis-proxy-nodes)
        
-   **Check version availability.** Newer minor versions may be available only in certain regions during a phased release. The system automatically detects the current minor version. If the **Minor Version Upgrade** and **Upgrade Proxy** buttons in the console are unavailable, your instance is already on the latest version.
    

> A minor version upgrade does not change the instance's connection address, data, whitelist settings, or created account passwords. Minor versions are forward-compatible unless otherwise specified, so you do not need to worry about compatibility issues.

## Upgrade impact by component

### Database kernel upgrade

When you upgrade the database kernel, the system first upgrades the replica instance or prepares a new instance. At the scheduled running time, a failover or instance switch occurs to complete the upgrade. During the switch:

-   The instance enters a **read-only state for up to 60 seconds** while data is fully synchronized.
    
-   A **transient connection interruption lasting a few seconds** also occurs.
    

Ensure that your application has a reconnection mechanism.

### Proxy upgrade

The upgrade behavior depends on your instance's edition:

**Edition**

**Behavior**

**Impact**

**Cloud-native edition**

Proxy nodes restart one by one.

All connections are disconnected. Ensure your application has a reconnection mechanism.

**Classic edition**

Uses a hot upgrade -- the new proxy node recovers connections from the old proxy node's client connection information, avoiding connection interruptions.

Millisecond-level latency jitter may occur. **BLOCK**, **Transactions**, and **Pub/Sub** commands are interrupted. If the client connects through a direct connection address, no commands are affected.

## Update levels

Each minor version update is assigned one of three levels that indicate its urgency:

**Level**

**Description**

**LOW**

Regular updates. Includes routine feature additions.

**MEDIUM**

Recommended updates. Includes feature and module optimizations, plus all LOW-level changes.

**HIGH**

Major updates. Includes critical stability or security fixes (such as vulnerability or defect patches), plus all LOW-level and MEDIUM-level changes.

## Configure automatic upgrades

Use the **Version Management Center** to view version status for all instances in a region, configure automatic upgrade policies, and upgrade instance versions from a central location.

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance resides.
    
2.  In the left navigation pane, click **Version Management Center**.
    
3.  In the upper-left corner of the page, select the region.
    
4.  On the **Version Management Center** page, view information for all instances in the current region, such as the **Current minor version** and whether it is the **Latest minor version**.
    
5.  Click **Configure** next to the target instance, turn on the **Automatic upgrade** switch, and configure the automatic upgrade settings.
    

After you enable automatic upgrades, the system periodically checks for new versions. If a new version is found, the system automatically upgrades the instance within the maintenance window over the next 60 days. In special cases, the upgrade may be postponed. For example, if too many operations and maintenance (O&M) events have recently occurred for the same account, the upgrade is rescheduled.

The **Update Period** setting corresponds to the instance's **Maintenance Window**. Modifying one automatically updates the other.

> -   You can select multiple instances to perform **Update** or **Configure** operations in a batch.
>     
> -   You can query upgrade records for instance versions in **Event Center** > **Scheduled Events**.
>     

## Manual upgrade

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the instance ID.
    
2.  In the **Configuration Information** section, move the pointer over the information icon next to **Version** or **Proxy Version** to view the release notes for the version.
    
3.  After you review the release notes, click **Update** > **Minor Version Upgrade** or **Update** > **Upgrade Proxy**.
    
    > If the **Minor Version Upgrade** or **Upgrade Proxy** button is unavailable, the instance is already on the latest version and does not require an upgrade.
    
4.  In the panel that appears on the right, select a running time for the upgrade.
    
5.  Click **OK**.
    

## FAQ

**How do I check whether my instance is on the latest minor version?**

If the **Minor Version Upgrade** or **Upgrade Proxy** button is grayed out and unavailable, the current version is the latest and does not require an upgrade. If a panel appears after you click the button, the minor version is not the latest. Follow the instructions in this topic to complete the upgrade.

**Can I upgrade to a specific minor version?**

No. An instance is always upgraded to the latest minor version. Because minor versions are forward-compatible, you do not need to worry about compatibility issues.

**I selected "Execute within maintainable time" as the running time. Why does the instance status show "Upgrading Minor Version"?**

The system is performing preparatory tasks such as requesting resources and synchronizing data. It does not perform a failover or instance switch at this stage, and your service is not affected. The instance enters a read-only state for up to 60 seconds and a transient connection interruption occurs only during the actual failover or instance switch.

**I changed the Update Policy to Automatic Update. Why has the instance not been upgraded yet?**

The upgrade does not start immediately. The system periodically checks for new versions. If a new version is found, the system automatically upgrades the instance within the maintenance window over the next 60 days. In special cases, the upgrade may be postponed -- for example, if too many O&M events have recently occurred for the same account, the upgrade is rescheduled. You can query the upgrade plan in the [Event Center](/help/en/redis/user-guide/query-and-manage-pending-events) or perform a manual upgrade immediately.

**I chose a manual upgrade. Why do I still receive event notifications for minor version upgrades?**

A manual upgrade only disables the automatic minor version upgrade service. However, the instance still generates minor version upgrade events in cases such as when the version has **high-risk threats** or is **too old and no longer maintained**. If you receive a minor version upgrade event notification, you can adjust the upgrade time (recommended) or cancel the upgrade in the [Event Center](https://kvstore.console.alibabacloud.com/Redis/eventToDo/cn-hangzhou) as needed.

**Why do different data shard nodes in a cluster instance have different minor versions?**

For a classic edition cluster architecture, data shard nodes are deployed with the latest minor version by default during reconstruction or a failover. This can cause different data shard nodes to have inconsistent minor versions, but it does not cause compatibility issues. The console or API displays the lowest version in the cluster. When you perform a minor version upgrade or an upgrade/downgrade on the instance, the minor versions of all data shard nodes are made consistent.

> The minor versions of a cloud-native edition cluster instance are always consistent.

## Related API operations

**API**

**Description**

[DescribeEngineVersion](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeengineversion-redis)

Queries the major and minor version information of an instance. You can also query the release notes for the minor version.

[ModifyInstanceMinorVersion](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceminorversion-redis)

Upgrades the minor version of an instance.
