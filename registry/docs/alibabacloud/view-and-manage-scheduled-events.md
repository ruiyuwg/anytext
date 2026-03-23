For scheduled O&M events in PolarDB, you can be notified by text message, phone call, email, or internal message. You can also be notified in the console. Scheduled O&M events include database software upgrade events and hardware maintenance and upgrade events. You can view the details of each scheduled event. These details include the event type, task ID, cluster name, and switchover time. You can also change the switchover time.

## Precautions

-   If you have scheduled O&M events and want to view event notifications, you can go to the left-side navigation pane in the console and choose **Event Center** > **Scheduled Events**.
    
-   In most cases, you are notified of scheduled events in ApsaraDB at least three days before these events are executed. You can be notified in many ways. For example, you can be notified by phone call, email, or internal message. To use this feature, you must log on to Message Center, select **ApsaraDB Fault or Maintenance Notifications**, and then specify a contact. We recommend that you specify an O&M engineer as the contact. If you do not specify a contact, you cannot receive notifications.
    
    Figure 1. Message Center settings ![消息中心通知设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8895442261/p273356.png)
    
-   If you have questions about scheduled events, join the DingTalk group for consultation. The experts in the group can answer your questions. You can also use the chatbot assistant for PolarDB in the group that provides 24/7 support. DingTalk group number: 51685000218.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  In the left-side navigation pane, choose **Scheduled Events**.
    
    **Note**
    
    If a scheduled event requires you to schedule the time to handle the event, a message appears, which prompts you to schedule the time at your earliest opportunity.
    
4.  **Optional.** On the **Scheduled Events** tab, configure the periodic switching time.
    
    1.  Click **Global Schedule**.
        
        ![周期时间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5147345561/p426291.png)
        
        **Note**
        
        The **Global Scheduler** panel provides the global configuration items of scheduled O&M events (excluding high-risk vulnerability fix events). After the periodic switching time is set, the scheduled switching time of the new scheduled O&M event will automatically use the periodic switching time. If the periodic switching time is not set, the scheduled switching time of the new scheduled O&M event will automatically use the maintenance window of the cluster.
        
    2.  In the Global Scheduler dialog box, configure the periodic switching time and click **OK**.
        
5.  On the **Scheduled Events** page, you can view the details of the event. To change the switching time of the event, select the cluster that you want to manage and click **Add Scheduled Time**.
    
6.  In the **Add Scheduled Time** dialog box, configure **Scheduled Switching Time** and click **OK**.
    
    **Note**
    
    -   If you select **Earliest Execution Time**, the system automatically enters the earliest execution date and time. After you click **OK**, the events in the cluster are pending for processing. If you clear Set the earliest execution time, you can change the scheduled switching date and time.
        
    -   The time that is specified by the **Scheduled Switching Time** parameter cannot be later than the time that is specified by the **Latest Start Time** parameter.
        
    

## Causes and impacts of events

**Upgrade type**

**Cause**

**Impact**

**Description**

Hot upgrade mode

**Note**

Typically, you can use the hot upgrade mode to upgrade the minor version of a cluster.

Instance migration

**Note**

Events of this type are generated due to host vulnerabilities, hardware warranty expirations, or operating system upgrades. The system migrates your clusters, including non-high-availability clusters and read-only clusters, to a new server.

Transient connections

When the switching is performed at the Scheduled switching time you may experience the following impacts:

-   Typically, you can use the hot upgrade mode to upgrade the minor version of a cluster. Your clusters or data shards in your clusters experience transient connections and stay in the read-only state for up to 30 seconds before all the data is synchronized. We recommend that you perform the switching during off-peak hours. Make sure that your application can be automatically reconnected to your database system.
    
-   You cannot manage your clusters by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

**Note**

In most cases, the system switches your workloads to a read-only node before an event occurs. The switching is performed within the maintenance window after the scheduled switching time.

Switching between primary and read-only nodes

**Note**

Events of this type are generated due to host vulnerabilities, hardware warranty expirations, or operating system upgrades. The system switches the workloads of high-availability clusters from primary nodes to read-only nodes.

Cluster parameter adjustment

**Note**

Scheduled events of this type are generated due to known parameter risks during scheduled O&amp;M. The system modifies the cluster parameters. If a modified parameter requires a restart, the cluster is restarted.

Host vulnerability fixing

**Note**

Scheduled events of this type are generated to fix vulnerabilities of the host to which your cluster belongs.

Backup mode change

**Note**

Scheduled events of this type are generated to switch the backup mode of a cluster from logical backup to physical backup.

[Minor engine version update](/help/en/polardb/polardb-for-oracle/version-management-2)

**Note**

Events of this type are generated to update your cluster to a minor version. A minor version is released from time to time to provide more features, fix known issues, and improve user experience.

Transient connections

When the switching is performed at the Scheduled switching time you may experience the following impacts:

-   Typically, you can use the hot upgrade mode to upgrade the minor version of a cluster. Your clusters or data shards in your clusters experience transient connections and stay in the read-only state for up to 30 seconds before all the data is synchronized. We recommend that you perform the switching during off-peak hours. Make sure that your application can be automatically reconnected to your database system.
    
-   You cannot manage your clusters by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

**Note**

In most cases, the system switches your workloads to a read-only node before an event occurs. The switching is performed within the maintenance window after the scheduled switching time.

Differences between minor engine versions

Different minor versions have different updates. You must check the differences between the current minor version and the minor version to which your nodes are updated. For more information, see [Release notes](/help/en/polardb/polardb-for-oracle/release-notes-6#concept-2476534).

Minor version update for proxies

**Note**

Events of this type are generated to update proxy nodes to a minor version. A minor version is released from time to time to provide more features, fix known issues, and improve user experience.

Transient connections

When the switching is performed at the Scheduled switching time you may experience the following impacts:

-   Typically, you can use the hot upgrade mode to upgrade the minor version of a cluster. Your clusters or data shards in your clusters experience transient connections and stay in the read-only state for up to 30 seconds before all the data is synchronized. We recommend that you perform the switching during off-peak hours. Make sure that your application can be automatically reconnected to your database system.
    
-   You cannot manage your clusters by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

**Note**

In most cases, the system switches your workloads to a read-only node before an event occurs. The switching is performed within the maintenance window after the scheduled switching time.

Differences between minor engine versions

Different minor versions have different updates. You must check the differences between the current minor version and the minor version to which your nodes are updated.

Network upgrade

**Note**

Scheduled events of this type are generated to upgrade network facilities. An upgrade improves the network performance and stability of a cluster.

Transient connections

When the switching is performed at the Scheduled switching time you may experience the following impacts:

-   Typically, you can use the hot upgrade mode to upgrade the minor version of a cluster. Your clusters or data shards in your clusters experience transient connections and stay in the read-only state for up to 30 seconds before all the data is synchronized. We recommend that you perform the switching during off-peak hours. Make sure that your application can be automatically reconnected to your database system.
    
-   You cannot manage your clusters by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

**Note**

In most cases, the system switches your workloads to a read-only node before an event occurs. The switching is performed within the maintenance window after the scheduled switching time.

Change of virtual IP addresses

Some network upgrades may involve cross-zone migrations, which change the virtual IP address of a cluster. If a client uses a virtual IP address to connect to a cloud database, the connection is interrupted.

**Note**

To prevent transient connections, you must use the endpoint in the form of a domain name that is provided by your cluster and disable the DNS cache feature of the application and its server.

Storage gateway upgrade

**Note**

Scheduled events of this type are generated to upgrade storage gateways. An upgrade improves the storage performance and stability of a cluster.

I/O jitter

Temporary I/O jitter may occur, and the SQL latency may increase. These impacts last no longer than three seconds.

Cold upgrade

**Note**

In special scenarios such as and upgrading public preview versions to official versions, the cold upgrade mode will be adopte.

Public preview version upgrade

Transient connections

When the switching is performed at the Scheduled switching time you may experience the following impacts:

-   Your clusters or data shards in your clusters experience transient connections and stay in the read-only state for up to two minutes. If your instances contain a large number of table files, are executing large transactions before the upgrade, or encounter high CPU utilization before the upgrade, transient connections usually exceed two minutes. We recommend that you upgrade the version of a cluster during off-peak hours and ensure that your application supports automatic reconnection.
    
-   If a cold upgrade is required, check the differences between versions and select an appropriate upgrade time based on your business situation.
    

**Note**

-   In most cases, the system switches your workloads to a read-only node before an event occurs. The switching is performed within the maintenance window after the scheduled switching time.
    
-   To ensure data security, we recommend that you back up your data before you upgrade major versions or upgrade public preview versions.
    

## Related API operations

**API**

**Description**

[DescribePendingMaintenanceActions](/help/en/polardb/api-polardb-2017-08-01-describependingmaintenanceactions)

Queries the numbers of scheduled events for different types of tasks.

[ModifyPendingMaintenanceAction](/help/en/polardb/api-polardb-2017-08-01-modifypendingmaintenanceaction)

Modifies the task switching time of scheduled events.

[DescribePendingMaintenanceAction](/help/en/polardb/api-polardb-2017-08-01-describependingmaintenanceaction)

Queries the details about scheduled events.
