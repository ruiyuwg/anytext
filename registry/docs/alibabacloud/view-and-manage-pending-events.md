To ensure the continuity, stability, and high quality of cloud database services, Alibaba Cloud provides scheduled O&M events so that you can perform operations such as software and hardware upgrades, configuration upgrades, and network upgrades for your instances or clusters. The event types include instance or cluster migration, primary/secondary switchover, version upgrades and updates, and parameter modifications. In most cases, when you perform operations based on received O&M events, transient connections may occur. Make sure that your applications are configured to automatically reconnect to your instance or cluster. For information about the actual impacts of each type of events, see the "Event types and impacts" section of this topic.

## Overview

In most cases, scheduled events are sent in emails to contacts one to three days in advance based on the settings on the **Message Settings** > **Common Settings** page in the [Message Center](https://notifications-intl.console.alibabacloud.com/?#/subscribeMsg) console. Make sure that you configure correct contacts and select the Email notification method for **ApsaraDB Fault or Maintenance Notifications** within your Alibaba Cloud account. After you receive a notification titled **Notification of ApsaraDB for Planned operation and maintenance**, you can choose **Event Center** (formerly known as **Event Management**) and then Scheduled Events in the corresponding console to view the event type, region, cause, cancellation risk, and list of involved instances or clusters. You can change the scheduled switchover time to off-peak hours for the instances or clusters based on your business requirements.

## Usage notes

-   Events fall into the following levels based on urgency:
    
    -   **\[S0: Urgent\] Risk fixing**: Events at this level are unexpected events that need to be fixed at the earliest opportunity to prevent faults in most cases, such as urgent replacement, upgrades, or updates of faulty versions, host exception fixes, and SSL certificate upgrades before expiration. Event notifications may be sent three days or more in advance and the window for changing the scheduled switchover time is short.
        
    -   **\[S1: Scheduled\] System maintenance**: Events at this level are resolution of low-risk issues or scheduled upgrades of software and hardware in most cases. Event notifications are sent more than three days in advance and you can cancel the events.
        
-   To ensure that you can receive notifications of scheduled O&M events, select the notification methods and configure the contacts for ApsaraDB Fault or Maintenance Notifications in the [Message Center](https://notifications-intl.console.alibabacloud.com/?#/subscribeMsg) console. We recommend that you specify database O&M personnel as the contacts. The notification methods include Email and Internal Messages. We recommend that you select Email to improve the success rate of notifications.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0655191371/p861498.png)
    
    Figure 1 Entry for Message Settings in the Message Center console
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7229739371/p872357.png)
    
    Figure 2 Notification settings for ApsaraDB Fault or Maintenance Notifications
    
-   If you want to be informed of O&M events at the earliest opportunity or want to customize event-driven O&M automation, you can use CloudMonitor to configure system event subscriptions. Then, cloud database services push CloudMonitor system events related to the lifecycle of O&M events, such as subscription, start, end, and cancellation. For more information, see [Manage event subscription policies (recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/manage-notification-policies). For information about CloudMonitor system events to which you can subscribe, see the "[Appendix 1 CloudMonitor-related system events](#84356e1bd7idq)" section of this topic.
    
    Sample CloudMonitor event:
    
    ```
    {
      "eventId": "c864b30b-7f69-5f04-b0e7-8dfb0eabcfd9", // The event ID. The same event has the same ID.
      "product": "RDS",                                  // The service code.
      "reason": "Host software/hardware upgrade",        // The cause of the event.
      "extra": {
         
        "impactEn": "Transient instance disconnection",  // The impact of the event.
        "eventCode": "rds_apsaradb_transfer",            // The code of the type of the O&M event.
        "eventNameEn": "Instance migration",             // The name of the O&M event.
            
        "switchTime": "2024-09-15T01:30:00+08:00",       // The scheduled switchover time, which is the time when a transient connection occurs on the instance if a switchover is performed.
        "startTime": "2024-09-14T21:30:00+08:00",          // The scheduled start time of the event, which is the time when the event enters the scheduling queue and waits to be executed.
        "cancelCode": "OutOfGoodPerfBySoftHardwareUpgrade", // The cancellation risk code. For more information, see the "Appendix 2 Detailed cause codes and cancellation risks" section of this topic.
        "detailCode": "HostSoftHardwareUpgrade",            // The detailed cause code. For more information, see the "Appendix 2 Detailed cause codes and cancellation risks" section of this topic.
        "instanceInfo": ""
      },
      "instanceId": "rm-2ze9d66o65q1g02g6",             // The instance ID.
      "eventType": "Maintenance",
      "instanceComment": "rm-2ze9d66o65q1g02g6",        // The alias of the instance.
      "instanceType": "Instance",
      "publishTime": "2024-09-10T16:01:47+08:00"
    }
    ```
    

## **Procedure**

1.  Log on to the console of the database service of the instance or cluster that you want to manage.
    
2.  In the left-side navigation pane, choose **Event Center (formerly known as Event Management)** > **Scheduled Events**. In the top navigation bar, select the region in which the instance or cluster resides.
    
3.  On the Scheduled Events page, view the information about events. By default, events in the **Planned** state are displayed. You can click the **Completed** and **Canceled** tabs to switch between historical completed and canceled events. The following table describes the event attributes.
    
    **Attribute**
    
    Example
    
    **Description**
    
    Event type
    
    Risk fixing
    
    Events fall into the risk fixing and system maintenance levels based on urgency.
    
    Status
    
    Pending
    
    The scheduling status of the event. Take note of the following statuses:
    
    -   **Waiting Setting Time**: The execution time of the event is empty and you must configure the time settings based on your business requirements. If you do not configure the time settings by the specified deadline, the system automatically cancels the execution of the event and does not automatically execute the event.
        
    -   **Pending**: The event waits until the scheduled start time is reached.
        
    -   **Executing**: The event is being executed as scheduled. In this case, you cannot perform manual intervention. To terminate the event in an urgent manner, submit a ticket. Unknown risks may occur if non-standard operations are performed.
        
    -   **Successful**: The event is successfully executed.
        
    -   **Canceled**: The execution of the event fails or is canceled. The following list describes common cancellation causes:
        
        -   User cancellation (UserCancel): The execution of the event is canceled in the console or by calling API operations.
            
        -   User response timeout (UserResponseTimeout): The event is automatically canceled because the time settings of the event are not configured by the deadline.
            
        -   Cancellation for database management (SupervisorCancel): The event initiator cancels the execution of the event for database management.
            
        -   On-demand avoidance cancellation (AvoidCancel): The event does not need the execution because the risk is mitigated or the current status of the instance or cluster no longer necessitates the execution of this event. For example, no update is required if the instance or cluster is already of the latest version.
            
        -   Automatic cancellation by the system (AutoCancel): The execution of the event is canceled because the system determines that the instance or cluster does not meet the conditions for execution during regular checks on scheduled events. For example, the current status of the instance or cluster is abnormal and action commands cannot be issued.
            
        -   Execution timeout (ExecuteTimeout): The event enters the execution queue but the execution is not complete within the expected time.
            
        -   Execution failure (ExecuteFail): The event fails during execution due to an unknown exception.
            
    
    Event type
    
    Minor version update
    
    The type of the event. For more information, see the "[Event types and impacts](#title-b39-c4e-xp2)" section of this topic.
    
    Cause
    
    \-
    
    The cause of the event. For more information, see the "[Appendix 2 Detailed cause codes and cancellation risks](#da65926affje8)" section of this topic.
    
    Business impact
    
    Transient connections
    
    The business impact of the event. Different types of events have different impacts on your business. For more information, see the "[Event types and impacts](#title-b39-c4e-xp2)" section of this topic.
    
    O&M suggestions
    
    Make sure that your applications are automatically configured to reconnect to your instance or cluster and pay attention to the impacts on your business.
    
    The O&M suggestions for the event. The O&M suggestions vary based on events. For more information, see the "[Appendix 1 CloudMonitor-related system events](#84356e1bd7idq)" section of this topic.
    
    Start time
    
    \-
    
    The scheduled start time of the event, which is the time when the event enters the scheduling queue. Before the start time, the event does not affect the instance or cluster. After the start time, you can still access the instance or cluster. However, you cannot perform instance-level or cluster-level operations, such as changing instance or cluster configurations and migrating the instance or cluster across zones. This attribute is empty if the event is in the Waiting Setting Time state.
    
    Scheduled switchover time
    
    \-
    
    The scheduled switchover time, which is the time when a transient connection occurs on the instance or cluster if a primary/secondary switchover or link switchover is performed. The time is an estimated value. Switchovers are expected to occur around the time. In extreme cases such as switching back to the original zone, two switchovers may occur.
    
    **Note**
    
    Considering that an amount of preparation time is required to perform steps such as event scheduling and data preparation before the switchover in most cases, the start time and the switchover time have a time difference. The time difference may vary based on database services.
    
    Deadline
    
    \-
    
    The latest time by which you can configure the time settings for execution of the event. The switchover time that you want to use cannot be later than this time.
    
    Cancelable
    
    Yes
    
    To block this event, you can cancel it. In most cases, this feature is available for system O&M events.
    
    **Important**
    
    In most cases, scheduled events are issued by the cloud database management system during regular inspections. If you cancel an event once, a new event may be issued during the next inspection cycle. Frequent cancellations may result in increased risks. We recommend that you select an appropriate time to execute an event based on your business conditions rather than canceling the event. For information about the cancellation risks, see the "[Appendix 2 Detailed cause codes and cancellation risks](#da65926affje8)" section of this topic.
    
    Schedule changeable
    
    Yes
    
    In most cases, you can change the execution time of events. In few scenarios where the window for urgently fixing high risks is short, you cannot change the execution time of events.
    
4.  (Optional) Reschedule events.
    
    Select the events whose execution time you want to change and click **Schedule Event**. On the page that appears, configure one of the following settings:
    
    -   **Immediate execution**: specifies the current time as the start time of the events. Then, the events enter the execution queue and are immediately executed.
        
    -   **Switchover at a specified time**: allows you to select an appropriate switchover time based on the configurable switchover time range. **The start time is automatically calculated based on the switchover time. The new start time cannot be earlier than the current time. Otherwise, the switchover time cannot be changed.**
        
5.  (Optional) Change the recurring time window settings.
    
    Click Recurring Time Window Settings in the upper right corner of the event list.
    
    In most cases, the execution time of a scheduled event of an instance or cluster is automatically calculated based on the maintenance window of the instance or cluster. For information about how to configure the maintenance window for an ApsaraDB RDS instance, a Tair (Redis OSS-compatible) instance, an ApsaraDB for MongoDB instance, and a PolarDB cluster, see [Configure a maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance), [Configure a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window), [Specify a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-2201869), and [Set a maintenance window](/help/en/polardb/polardb-for-mysql/user-guide/set-a-maintenance-window). You can also specify a custom recurring time window based on your O&M requirements. If the system initiates an event, the execution time of the event is preferentially calculated based on the specified time window.
    
    You can set the recurring time window by month or week. For example, if you set the recurring time window to 02:00 to 03:00 on Monday and Tuesday every week and the time window for a scheduled event to this Tuesday through next Sunday, the range for the switchover time of the event includes 02:00 to 03:00 on this Tuesday and 02:00 to 03:00 on next Monday. In most cases, the switchover is preferentially performed on this Tuesday.
    
    **Important**
    
    1.  This configuration is valid only for the new events. If you want to change the execution time of an existing event, click Configure Execution Time.
        
    2.  This configuration helps calculate the execution time of events only at the system maintenance level. The actual execution time is subject to the time displayed in the event list.
        
    3.  This configuration is an account-level configuration. The configuration takes effect on all database services that support Recurring Time Window Settings.
        
    

6.  (Optional) Cancel scheduled events.
    
    Select the events that you want to cancel and click **Cancel Scheduled Event**. On the page that appears, read and confirm the cancellation risks, and then click **Confirm**.
    

## Event types and impacts

**Event type**

**Impact type**

**Impact description**

Instance or cluster migration

Transient connections

When a switchover is performed at the scheduled switchover time, the following impacts may occur:

-   Your instance or cluster, or the data shard in your instance or cluster encounters transient connections and remains in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the switchover during off-peak hours and make sure that your application is configured to automatically reconnect to your instance or cluster.
    
-   You cannot manage your instance or cluster by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Primary/secondary switchover

Instance or cluster parameter modification

Host vulnerability fixing

SSL certificate update

Backup mode upgrade

Cross-zone migration

Minor engine version update

Transient connections

When a switchover is performed at the scheduled switchover time, the following impacts may occur:

-   Your instance or cluster, or the data shard in your instance or cluster encounters transient connections and remains in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the switchover during off-peak hours and make sure that your application is configured to automatically reconnect to your instance or cluster.
    
-   You cannot manage your instance or cluster by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Differences between minor versions

Different minor versions have different updates. You must take note of the differences between the current minor version and the minor version to which you want to update. For more information, see the relevant release notes. Release notes are available only for the following services:

-   ApsaraDB RDS: [Release notes for AliSQL](/help/en/rds/apsaradb-rds-for-mysql/release-notes-for-alisql#concept-kry-21l-n2b), [Release notes for AliPG (PostgreSQL 14-17)](/help/en/rds/apsaradb-rds-for-postgresql/release-notes-for-alipg#concept-1236825), and [Release notes for minor engine versions of ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/release-notes-for-minor-engine-versions-of-apsaradb-rds-for-sql-server#concept-2074872).
    
-   PolarDB: [Release notes for minor versions of PolarDB for MySQL](/help/en/doc-detail/172561.html#concept-2554045), [Release notes for minor versions of PolarDB for PostgreSQL (Compatible with Oracle)](/help/en/polardb/polardb-for-oracle/release-notes-6#concept-2476534), and [Release notes for minor versions of PolarDB for PostgreSQL](/help/en/polardb/polardb-for-postgresql/release-notes-5#concept-2476410).
    
-   Tair (Redis OSS-compatible): [Release notes for Tair minor versions](/help/en/redis/support/apsaradb-for-redis-enhanced-edition-1#concept-2075781) and [Release notes for minor versions of Redis Open-Source Edition](/help/en/redis/support/apsaradb-for-redis-community-edition#concept-2075782).
    

Minor version update for proxy nodes

Transient connections

When a switchover is performed at the scheduled switchover time, the following impacts may occur:

-   Your instance or cluster, or the data shard in your instance or cluster encounters transient connections and remains in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the switchover during off-peak hours and make sure that your application is configured to automatically reconnect to your instance or cluster.
    
-   You cannot manage your instance or cluster by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Differences between minor versions

Different minor versions have different updates. You must take note of the differences between the current minor version and the minor version to which you want to update. For more information, see the relevant release notes. Release notes are available only for the following services:

-   Tair (Redis OSS-compatible): [Release notes for minor versions of proxy nodes](/help/en/redis/support/apsaradb-for-redis-proxy-nodes#concept-2080622)
    

Network upgrade

Transient connections

When a switchover is performed at the scheduled switchover time, the following impacts may occur:

-   Your instance or cluster, or the data shard in your instance or cluster encounters transient connections and remains in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the switchover during off-peak hours and make sure that your application is configured to automatically reconnect to your instance or cluster.
    
-   You cannot manage your instance or cluster by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Change of virtual IP addresses

Specific network upgrades may involve cross-zone migrations that change the virtual IP address of an instance or cluster. If a client uses a virtual IP address to connect to a cloud database, the connection is interrupted.

**Note**

To prevent transient connections, you must use the endpoint in the form of a domain name that is provided by your instance or cluster and disable the Domain Name System (DNS) cache feature of the application and its server.

Storage gateway upgrade

I/O jitter

Temporary I/O jitter may occur, and the SQL latency may increase. These impacts last no longer than 3 seconds.

## Affected instances or clusters

To learn the cause and impact of a scheduled event, find the relevant topic in the following table based on the type and engine of your instance or cluster. You can also handle the event based on your business requirements. For example, you can change the scheduled switchover time to a point in time during off-peak hours.

**Important**

-   If the system prompts that the scheduled switchover time is inappropriate, you can set the switchover time to a point in time within 30 days after the scheduled event is generated.
    
-   To be notified of scheduled event updates such as new scheduled events and event execution information at the earliest opportunity, you can configure alert rules for scheduled events in the CloudMonitor console. For more information, see [Subscribe to event notifications](/help/en/redis/user-guide/subscribe-to-event-notifications#task-2078077).
    

**Instance or cluster type**

**Engine**

**References**

[ApsaraDB RDS](/help/en/rds/product-overview/what-is-apsaradb-rds-what-is-apsaradb-rds#concept-pc2-lv5-tdb)

[ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/overview-3#concept-gws-2dh-wdb)

[Scheduled events](/help/en/rds/apsaradb-rds-for-mysql/manage-scheduled-events-2#concept-k52-mdy-ngb)

[ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/overview-of-apsaradb-rds-for-sql-server#concept-gws-2dh-wdb)

[Manage scheduled events](/help/en/rds/apsaradb-rds-for-sql-server/manage-scheduled-events#concept-k52-mdy-ngb)

[ApsaraDB RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/what-is-apsaradb-rds-for-postgresql#concept-gws-2dh-wdb)

[Manage scheduled events](/help/en/rds/apsaradb-rds-for-postgresql/manage-scheduled-events-2#concept-k52-mdy-ngb)

[ApsaraDB RDS for MariaDB](/help/en/rds/apsaradb-rds-for-mariadb/what-is-apsaradb-rds-for-mariadb#concept-gws-2dh-wdb)

[Manage scheduled events](/help/en/rds/apsaradb-rds-for-mariadb/manage-scheduled-events-1#concept-k52-mdy-ngb)

[PolarDB](/help/en/polardb/polardb-for-mysql/what-is-polardb-for-mysql-enterprise-edition#concept-jpz-zb2-sdb)

[PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/what-is-polardb-for-mysql-enterprise-edition#concept-jpz-zb2-sdb)

[View and manage scheduled events](/help/en/polardb/polardb-for-mysql/user-guide/view-and-manage-scheduled-events#task-1580301)

[PolarDB O](/help/en/polardb/polardb-for-oracle/what-is-polardb-for-oracle#concept-jpz-zb2-sdb)

[View and manage scheduled events](/help/en/polardb/polardb-for-oracle/view-and-manage-scheduled-events#task-1580301)

[PolarDB for PostgreSQL](/help/en/polardb/polardb-for-postgresql/what-is-polardb-pg-enterprise#concept-jpz-zb2-sdb)

[View and manage scheduled events](/help/en/polardb/polardb-for-postgresql/view-and-manage-scheduled-events-1#task-1580301)

[PolarDB-X](/help/en/polardb/polardb-for-xscale/overview-79#multiTask1642)

N/A

[Pending events](/help/en/polardb/polardb-for-xscale/user-guide/pending-events#task-1941939)

[Tair (Redis OSS-compatible)](/help/en/redis/product-overview/what-is-apsaradb-for-redis#concept-m3j-s5z-sdb)

N/A

[View and manage scheduled events](/help/en/redis/user-guide/query-and-manage-pending-events#task-1963135)

## FAQ

### **FAQ about notifications**

**Why do I receive notifications of O&M events?**

To ensure the continuity, stability, and high quality of cloud database services, Alibaba Cloud provides scheduled O&M events so that you can perform operations such as software and hardware upgrades, configuration upgrades, and network upgrades for your instances or clusters. The event types include instance or cluster migration, primary/secondary switchover, version upgrades and updates, and parameter modifications. If you enable the automatic version update feature for your instance or cluster, you can receive event notifications for minor version updates on a regular basis.

**How much in advance are notifications sent? Why cannot I receive event notifications?**

In most cases, notifications of scheduled events are sent one to three days in advance based on the urgency of the events. The notification methods include emails. You can view the notification contacts in the [Message Center](https://notifications-intl.console.alibabacloud.com/?#/subscribeMsg) console and check emails titled Notification of ApsaraDB for Planned operation and maintenance sent to the contacts in the last month.

**I receive database O&M notifications but cannot view events in the scheduled event list on the Scheduled Events tab. Why?**

-   The notification status callback is delayed. After you receive notifications, you can wait 1 to 3 minutes and then refresh the Scheduled Events tab. In addition, make sure that you select the region in which your instance or cluster resides.
    
-   Notifications of non-database scheduled O&M events, such as notifications in emails with subjects such as Alibaba Cloud Database Network Upgrade Notice, are about software and hardware upgrades initiated by infrastructure teams such as the underlying network team. These upgrades involve cluster or data center-level changes instead of changes at the database instance or cluster level. You cannot change the execution time or cancel execution for an instance or cluster. Therefore, no scheduled events exist. The actual impacts and descriptions of non-database scheduled O&M events in the emails or internal messages prevail.
    

### **FAQ about the start time and switchover time**

**Why cannot I view that an event is being executed on the scheduled event list of an instance or cluster after the start time of the event is reached?**

-   After the start time is reached, the event enters the scheduling queue to wait for execution. During the waiting process, operations such as execution check, environment initialization, and O&M action orchestration are performed and instance-level or cluster-level tasks may not be issued, which does not affect the availability of the instance or cluster. Please wait. You only need to pay attention to the switchover time.
    
-   The O&M orchestration process varies based on database services and events. Tasks related to the events are issued at different points in time after the start time. For example, the instance migration process of high-availability instances includes cross-data center recreation of the secondary instance, primary/secondary switchover, and cross-data center recreation of the secondary instance in most cases. However, the migration process of a primary instance migration includes primary/secondary switchover and recreation of the secondary instance. Tasks are not immediately issued after the start time but are issued around the switchover time.
    

**How do I change the scheduled switchover time?**

You can change the scheduled switchover time for an event in the console or by calling API operations. For more information, see the "[(Optional) Reschedule events](#5cb36923489va)" step in the "Procedure" section of this topic and ModifyActiveOperationTasks.

**Why do I fail to change the scheduled switchover time?**

You cannot change the scheduled switchover time of an event in the following scenarios:

-   The event is in the Executing state.
    
-   The start time of the event is exceeded.
    
-   The current time is later than the deadline of the event.
    
-   The new start time of the event is earlier than the current time.
    
-   The switchover time of the event cannot be changed.
    

**What do I do if the switchover time is not within the time range that I can configure? How do I set the switchover time to a later time?**

By default, the switchover time of an event cannot be later than the deadline of the event. The time before the deadline is a safe maintenance window defined by the system. If the switchover time is later than the deadline, failure risks exist. We recommend that you set the switchover time before the deadline. To set the switchover time to a later time when you confirm the extension risks, submit a ticket.

**Can I estimate the end time of a migration task?**

Only the start time and approximate switchover time of a migration is displayed. The end time cannot be estimated because it is affected by multiple factors, such as the network latency, task queue, and data size.

**Can an event in the Waiting Setting Time state be automatically executed if I do not set the execution time before the deadline?**

No. If you do not set the execution time after the deadline is exceeded, the system automatically cancels the execution of the event. If the system determines that the execution is required, it will send a new notification.

### **FAQ about event operations**

**How do I cancel a scheduled event?**

We recommend that you do not cancel an event. You can reschedule the switchover time. For example, you can select a point in time during off-peak hours to perform the switchover. If you want to cancel a scheduled event, see the "**(Optional)** Cancel scheduled events" step in the "Procedure" section of this topic.

**Are the notifications of an event resent if I manually cancel the event?**

Most events are issued by the inspection system during periodic inspections. If you manually cancel an event, it may be resent after a specific silent period that ranges from 1 to 30 days. For information about the trigger periods of events with specific detailed cause codes, see the "[Appendix 2 Detailed cause codes and cancellation risks](#da65926affje8)" section of this topic.

**How do I block scheduled events?**

**Important**

Scheduled events are designed to improve service quality and stability. We recommend that you do not block scheduled events. If scheduled events are blocked, stability risks may occur.

To block scheduled events when you confirm the risks, submit a ticket. However, to ensure service stability, you cannot block urgent risk fixing events in scenarios such as host failure, lock due to full disk, and SSL certificate upgrade before expiration.

### FAQ about other issues

**How do I determine if the execution of an event is complete?**

After the execution of an event is complete, the event is removed from the scheduled event list. You can view the event in the completed event list on the **Completed** tab. To detect event statuses in an event-driven manner, use CloudMonitor to configure system event subscriptions. For more information, see the third item in the "Usage notes" section of this topic.

**Can an instance or cluster be migrated across zones after an instance or cluster migration event is executed?**

No. After an instance or cluster migration event is executed, the zone, account, network, and endpoint of the instance or cluster do not change.

## Appendix 1 CloudMonitor-related system events

**Event code**

**Event name**

**Trigger condition**

**O&M suggestions**

Instance:SystemMaintenance.MinorVersionUpgrade:Scheduled

Minor version update (scheduled)

A minor version update is scheduled.

The execution of the event does not start, which does not affect the availability of the instance or cluster.

Instance:SystemMaintenance.MinorVersionUpgrade:Executing

Minor version update (executing)

A minor version update starts to be executed.

The event starts to enter the execution queue. In this case, you cannot perform manual intervention. Otherwise, unknown risks may occur.

Instance:SystemMaintenance.MinorVersionUpgrade:Executed

Minor version update (completed)

A minor version update is complete.

During the execution process of an event, a primary/secondary switchover may occur. You can pay attention to the business impact.

Instance:SystemMaintenance.MinorVersionUpgrade:Canceled

Minor version update (canceled)

A minor version update fails or is canceled.

The event fails to be executed or is automatically canceled due to specific causes, which does not affect the availability of the instance or cluster. For example, no update is required if the instance or cluster is already of the latest version.

Instance:SystemMaintenance.Transfer:Scheduled

Instance or cluster migration (scheduled)

An instance or cluster migration is scheduled.

The execution of the event does not start, which does not affect the availability of the instance or cluster.

Instance:SystemMaintenance.Transfer:Executing

Instance or cluster migration (executing)

An instance or cluster migration starts to be executed.

The event starts to enter the execution queue. In this case, you cannot perform manual intervention. Otherwise, unknown risks may occur.

Instance:SystemMaintenance.Transfer:Executed

Instance or cluster migration (completed)

An instance or cluster migration is complete.

During the execution process of an event, a primary/secondary switchover may occur. You can pay attention to the business impact.

Instance:SystemMaintenance.Transfer:Canceled

Instance or cluster migration (canceled)

An instance or cluster migration fails or is canceled.

The event fails to be executed or is automatically canceled due to specific causes, which does not affect the availability of the instance or cluster. For example, a manual migration has been performed on the instance or cluster.

Instance:SystemMaintenance.ScheduledOperation:Scheduled

Scheduled event on an instance or cluster (scheduled)

A scheduled O&M event is scheduled.

The execution of the event does not start, which does not affect the availability of the instance or cluster.

Instance:SystemMaintenance.ScheduledOperation:Executing

Scheduled event on an instance or cluster (executing)

A scheduled O&M event starts to be executed.

The event starts to enter the execution queue. In this case, you cannot perform manual intervention. Otherwise, unknown risks may occur.

Instance:SystemMaintenance.ScheduledOperation:Executed

Scheduled event on an instance or cluster (completed)

A scheduled O&M event is complete.

During the execution process of an event, a primary/secondary switchover may occur. You can pay attention to the business impact.

Instance:SystemMaintenance.ScheduledOperation:Canceled

Scheduled event on an instance or cluster (canceled)

A scheduled O&M event fails or is canceled.

The availability of the instance or cluster is not affected.

For more information, see [Supported cloud services and their system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events).

## **Appendix 2 Detailed cause codes and cancellation risks**

**Detailed cause code**

**Detailed cause description**

**Cancellation risk code**

**Cancellation risk description**

**Additional description**

**Trigger period of events**

InfraArchUpgrade

Replacement or upgrade of the underlying infrastructure architecture

OutOfGoodPerfByHardwareUpgrade

You cannot experience better performance and stability provided by upgraded software.

As the architecture of service types and underlying resources such as computing, storage, and network resources is updated, instances or clusters need to be updated or migrated to improve the quality and stability of cloud services.

Monthly/Quarterly

EnhanceStabilityAndResUtil

Improvement of instance or cluster stability and resource utilization

ImpactStabAndResContention

The stability of the instance or cluster is affected. Potential impacts include resource contention, engine vulnerabilities, and lower-than-expected performance.

\-

Irregularly

KernalExceptionRepair

Fixing of instance or cluster exceptions caused by engine issues

RiskEscatateToFailure

Risks may be escalated to faults, which affects the availability of the instance or cluster.

This cause code is commonly used for fixing risks of an urgent engine version.

Irregularly

OldKernelVersionWithHardwareUpgrade

Update of the engine version before expiration and upgrade of hardware resources

KernelVersionEndOfLife

After the lifecycle of the engine version ends, you cannot use new features of and experience optimized performance of the instance or cluster.

This cause code is commonly used for routine version updates and upgrades.

Monthly/Quarterly

KernelBugFix

Fixing of engine vulnerabilities

RiskEscatateToFailure

Risks may be escalated to faults, which affects the availability of the instance or cluster.

This cause code is commonly used for bug fixing of an urgent engine version.

Irregularly

HostLoadHigh

Excessive loads on the host

HostLoadHighAffectStability

Excessive loads on the host affects the performance and stability of the instance or cluster.

This cause code is commonly used for preventing host hardware risks.

Irregularly

SoftwareUpgrade

Host software upgrade

OutOfGoodPerfByHardwareUpgrade

You cannot experience better performance and stability provided by upgraded software.

Cold upgrade of the host operating system or dependent plug-ins

Monthly/Quarterly

HardwareUpgrade

Replacement or upgrade of the underlying hardware

OutOfGoodPerfBySoftwareUpgrade

You cannot experience better performance and stability provided by upgraded software.

This cause code is used for host hardware upgrades.

Monthly/Quarterly

HostSoftHardwareUpgrade

Upgrade of host software or hardware

OutOfGoodPerfBySoftHardwareUpgrade

You cannot experience better performance and stability provided by upgraded software.

This cause code is used for upgrades of host software and hardware.

Monthly/Quarterly

HostCPUException

Host CPU exceptions

RiskEscatateToFailure

Risks may be escalated to faults, which affects the availability of the instance or cluster.

\-

Irregularly

HostMemException

Host memory exceptions

RiskEscatateToFailure

Risks may be escalated to faults, which affects the availability of the instance or cluster.

\-

Irregularly

HostDiskException

Host disk exceptions

RiskEscatateToFailure

Risks may be escalated to faults, which affects the availability of the instance or cluster.

\-

Irregularly

KernelVersionWithServerlessUpgrade

Update of the engine version and upgrade of the instance or cluster in public preview to the official version

BetaVersionEndOfLife

After the lifecycle of the public preview version ends, you cannot use new features of and experience optimized performance of the instance or cluster.

\-

Monthly/Quarterly

ParamRiskRepairOrOptimize

Fixing or optimization of parameter risks

UnknownRisks

Unknown risks may occur.

This cause code is commonly used for automatically modifying inappropriate parameter settings of the instance or cluster.

Monthly/Quarterly

PGOldKernelVersionWithHardwareUpgrade

Simultaneous operations of the update of the engine version before expiration and upgrade of hardware resources, which may cause the database port and cross-database connection string to change, or upgrade of the Timescaledb, Postgis, or Ganos extension to the latest version because an excessively earlier version is unavailable

KernelVersionEndOfLife

After the lifecycle of the engine version ends, you cannot use new features of and experience optimized performance of the instance or cluster.

\-

Monthly/Quarterly

MaxScaleExceptionRepair

Fixing of proxy component risks

RiskEscatateToFailure

Risks may be escalated to faults, which affects the availability of the instance or cluster.

This cause code is commonly used for fixing risks of an urgent version of a proxy service.

Irregularly

OriginalNetWorkHasFlawWithSqlTimeoutAndDIsconnection

Upgrade of the network type to improve stability because the original network type causes timeout of slow SQL queries and occasional disconnections

FlawNotResolvedAndAbnormalConnectionMayOccur

Connection exceptions may occur because the issues caused by the original network type are not resolved.

\-

Irregularly

CKZKKernelResourceFlaws

Upgrade of the ZooKeeper engine version to improve resource utilization because hardware resources such as CPU and memory cannot be fully used due to resource allocation logic defects

CKZKKernelResourceFlaws

Performance bottlenecks exist in ZooKeeper due to resource allocation logic defects in the ZooKeeper engine version.

This cause code is applicable only to ClickHouse.

Irregularly

CKZKBugExceptionRepair

Upgrade of the ZooKeeper engine version to improve stability because the existing ZooKeeper engine version has bugs, which may result in exceptions in the connections between ClickHouse nodes and ZooKeeper as well as instance or cluster unavailability. The new version of the ZooKeeper engine has fixed the bugs. Upgrading to the new version can improve stability.

CKZKBugRisk

Exceptions exist in the connections between ClickHouse nodes and ZooKeeper because the ZooKeeper engine bugs persist, which affects the availability of the instance or cluster.

This cause code is applicable only to ClickHouse.

Irregularly

## **Appendix 3 Event types**

**Enumeration value**

**Description**

rds\_apsradb\_transfer

Instance or cluster migration

Instance migration

rds\_apsradb\_upgrade

Minor version update

Minor version update

rds\_apsaradb\_network\_upgrade

Network upgrade

Network upgrade

rds\_apsaradb\_ha

Primary/secondary switchover

Primary/secondary switchover

rds\_apsaradb\_ssl\_update

SSL certificate update

SSL certificate update

rds\_apsaradb\_maxscale

Minor version update for proxy nodes

Proxy minor version update

rds\_apsaradb\_modify\_config

Instance or cluster parameter modification

Instance config modify

rds\_apsaradb\_major\_upgrade

Major version upgrade

Major version update

Others

\-

\-
