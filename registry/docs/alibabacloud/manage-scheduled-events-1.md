You are notified of O&M events such as instance migrations or version upgrades for an ApsaraDB RDS for MySQL instance by phone call, email, or internal message. In addition, you are prompted to manage O&M events after you log on to the ApsaraDB RDS console. You can view the types, regions, and IDs of the RDS instances that are affected by the O&M event, and the cause and impacts of the event. You can also change the scheduled time of switchovers that are triggered by the O&M event. For more information about version upgrades, see .

## Prerequisites

A pending O&M event exists.

**Note**

To check whether pending O&M events exist, you need to move the pointer over the ![通知](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7014057561/p448042.png) icon in the upper-right corner of the ApsaraDB RDS console.

## Usage notes

-   Events fall into the following levels based on urgency:
    
    -   **\[S0: Urgent\] Risk fixing**: Events at this level are unexpected events that need to be fixed at the earliest opportunity to prevent faults in most cases, such as urgent replacement, upgrades, or updates of faulty versions, host exception fixes, and SSL certificate upgrades before expiration. Event notifications may be sent three days or more in advance and the window for changing the scheduled switchover time is short.
        
    -   **\[S1: Scheduled\] System maintenance**: Events at this level are resolution of low-risk issues or scheduled upgrades of software and hardware in most cases. Event notifications are sent more than three days in advance and you can cancel the events.
        
-   To ensure that you can receive notifications of scheduled O&M events, select the notification methods and configure the contacts for ApsaraDB Fault or Maintenance Notifications in the [Message Center](https://notifications-intl.console.alibabacloud.com/?#/subscribeMsg) console. We recommend that you specify database O&M personnel as the contacts. The notification methods include Email and Internal Messages. We recommend that you select Email to improve the success rate of notifications.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0655191371/p861498.png)
    
    Figure 1 Entry for Message Settings in the Message Center console
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7229739371/p872357.png)
    
    Figure 2 Notification settings for ApsaraDB Fault or Maintenance Notifications
    
-   If you want to be informed of O&M events at the earliest opportunity or want to customize event-driven O&M automation, you can use CloudMonitor to configure system event subscriptions. Then, cloud database services push CloudMonitor system events related to the lifecycle of O&M events, such as subscription, start, end, and cancellation. For more information, see [Manage event subscription policies (recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/manage-notification-policies). For information about CloudMonitor system events to which you can subscribe, see the "[Appendix 1 CloudMonitor-related system events](/help/en/db-overview/latest/view-and-manage-pending-events#84356e1bd7idq)" section of this topic.
    
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
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Event Center**. In the top navigation bar, select the region in which the RDS instance resides.
    
    **Note**
    
    If a pending O&M event requires you to schedule a time for the O&M operation, a message appears to prompt you to schedule the time at your earliest opportunity.
    
3.  **Optional.** On the **Scheduled Events** tab, manually configure the recurring time window.
    
    **Note**
    
    The **Recurring Time Window Settings** panel provides the global configuration items of proactive O&M events except events that are used to fix high-risk vulnerabilities. After you configure the periodic switching time, the scheduled time of switchovers for newly generated proactive O&M events is automatically changed based on the configured time interval. If you do not configure the periodic switching time, the scheduled time of switchovers for newly generated proactive O&M events is automatically changed based on the maintenance window of your RDS instance. For more information, see [Configure a maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb).
    
    1.  Click **Recurring Time Window Settings**.
        
    2.  In the panel that appears, configure the parameters and click **Save**.
        
4.  On the **Scheduled Events** tab, view the details of the event. To change the switching time of an event in the **Planned** state, select the RDS instance that you want to manage and click **Schedule Event**.
    
    **Note**
    
    The displayed information varies based on the event type.
    
5.  In the **Schedule Event** dialog box, configure the scheduled switching time and click **OK**.
    
    **Note**
    
    -   If you select **Earliest Execution Time**, the system automatically provides the earliest switching date and time for the next O&M operation. After you save the settings, the RDS instance prepares to switch over and enters the Pending state. If you do not select this option, you can customize the date and time.
        
    -   The time that is specified by the **Scheduled Switching Time** parameter cannot be later than the time that is specified by the **Deadline** parameter.
        
    

## Causes and impacts of events

**Cause**

**Impact**

**Description**

Instance migration

**Note**

This type of event is generated due to host vulnerabilities, hardware warranty expirations, or operating system upgrades. The system migrates your instances, including non-high-availability instances and read-only instances, to a new server.

Instance switchover

In most cases, a pending event triggers an instance switchover. The switchover is performed within the maintenance window after the scheduled switchover time. After a switchover is performed, the following impacts occur:

-   An instance switchover occurs on your RDS instance and the RDS instance stays in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the migration during off-peak hours and make sure that your application is configured to automatically reconnect to your RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   You cannot manage your RDS instance by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Primary/secondary switchover

**Note**

This type of event is generated due to host vulnerabilities, hardware warranty expirations, or operating system upgrades. The system migrates your instances, including non-high-availability instances and read-only instances, to a new server.

SSL certificate update

**Note**

This type of event is generated to update SSL certificates that are about to expire. This ensures the security and stability of your RDS instance.

Backup mode change

**Note**

This type of event is generated to update SSL certificates that are about to expire. This ensures the security and stability of your RDS instance.

Update of the minor engine version

**Note**

This type of event is generated to update the minor engine version of your RDS instance. A minor engine version is released from time to time to provide more features, fix known issues, and improve user experience.

Instance switchover

In most cases, a pending event triggers an instance switchover. The switchover is performed within the maintenance window after the scheduled switchover time. After a switchover is performed, the following impacts occur:

-   An instance switchover occurs on your RDS instance and the RDS instance stays in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the migration during off-peak hours and make sure that your application is configured to automatically reconnect to your RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   You cannot manage your RDS instance by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Differences between minor engine versions

Different minor engine versions have different updates. You must take note of the differences between the current minor engine version and the version to which you want to update. For more information, see the relevant release notes. Release notes are available only for specific services. For more information, see the following topics: .

Upgrade of the database proxy version

**Note**

This type of event is generated to update the minor versions of proxies. A minor version is released from time to time to provide more features, fix known issues, and improve user experience.

Instance switchover

In most cases, a pending event triggers an instance switchover. The switchover is performed within the maintenance window after the scheduled switchover time. After a switchover is performed, the following impacts occur:

-   An instance switchover occurs on your RDS instance and the RDS instance stays in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the migration during off-peak hours and make sure that your application is configured to automatically reconnect to your RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   You cannot manage your RDS instance by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Differences between database proxy versions

Different database proxy versions have different updates. You must take note of the differences between the current database proxy version and the database proxy version to which you want to upgrade.

Network upgrade

**Note**

This type of event is generated to upgrade network facilities and improve the network performance and stability of your RDS instance.

Instance switchover

In most cases, a pending event triggers an instance switchover. The switchover is performed within the maintenance window after the scheduled switchover time. After a switchover is performed, the following impacts occur:

-   An instance switchover occurs on your RDS instance and the RDS instance stays in the read-only state for up to 30 seconds before all data is synchronized. We recommend that you perform the migration during off-peak hours and make sure that your application is configured to automatically reconnect to your RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   You cannot manage your RDS instance by using Data Management ([DMS](/help/en/dms/product-overview/what-is-dms#task-1919582)) or Data Transmission Service ([DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)). This impact is temporary.
    

Change of virtual IP addresses (VIPs)

Some network upgrades may involve cross-zone migrations that change the VIP of your RDS instance. If a client uses a VIP to connect to a cloud database, the connection is interrupted.

**Note**

To prevent business interruptions, you must use the endpoint in the form of a domain name that is provided by your RDS instance and disable the Domain Name System (DNS) cache feature of the application and the server.

Hardware or software upgrade of the host

**Note**

This type of event is generated due to host vulnerabilities and hardware or software upgrade of the host. The system restarts your instances.

Instance restart

In most cases, a pending event triggers an instance restart. The restart is performed within the maintenance window after the scheduled restart time. After the instance is restarted, the following impacts occur:

-   Your RDS instance is restarted and remains unavailable for about 60 seconds before all database processes are restarted. We recommend that you perform the hardware or software upgrade during off-peak hours and make sure that your application is configured to automatically reconnect to your RDS instance.
    
-   You cannot manage your RDS instance by using [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) or [DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) within a short period of time.
    

## FAQ

**Are O&M events automatically executed? Can I manually cancel an O&M event?**

Yes, scheduled events are automatically executed and cannot be canceled to ensure the normal running of the instance. However, you can change the scheduled switching time of an event. We recommend that you set the switching time of an event to a point in time during off-peak hours. Make sure that your application can reconnect to the instance after the event is executed. For more information about how to configure the scheduled switching time of an event, refer to the procedure described in this topic.
