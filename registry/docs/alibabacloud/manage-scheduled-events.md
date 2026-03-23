ApsaraDB RDS O&M events, such as instance migration, [database version upgrades](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance) and [minor engine version upgrades](/help/en/rds/apsaradb-rds-for-sql-server/update-the-minor-engine-version-of-an-apsaradb-rds-for-sql-server-instance), are announced in the console. You will also receive notifications by voice call, email, or internal message. You can view details such as the event type, region, cause, and business impact, along with the IDs of the affected instances. You can also manually change the scheduled switchover time.

## Prerequisites

You have **pending** O&M events.

**Note**

Hover over the ![通知](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7014057561/p448042.png) icon in the upper-right corner of the console to view pending O&M events.

## Notes

-   Events are divided into two categories based on urgency:
    
    -   **\[S0 Emergency Level\] Risk Fixes**: These events address unexpected issues that must be fixed quickly to prevent failures. The notification period may be 3 days or less, and the window for modifying the scheduled switchover time is shorter. Typical scenarios include emergency version replacements, host failure repairs, and SSL certificate expiration upgrades.
        
    -   **\[S1 Scheduled Level\] System Maintenance**: These events are for low-risk issue fixes or planned software and hardware upgrades. Notifications are usually sent more than 3 days in advance, and you can cancel the event.
        
-   To ensure that you receive scheduled notifications for O&M events, log on to the [Message Center](https://notifications-intl.console.alibabacloud.com/?#/subscribeMsg), make sure that the check box for the notification method for cloud database failure or O&M notifications is selected, and set the message recipients. We recommend specifying database O&M personnel as the recipients. Otherwise, you will not receive event notifications.The available notification methods are email and internal message. We recommend that you select email to improve the delivery success rate.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0655191371/p861498.png)
    
    Figure 1. Entry point for notification settings in Message Center
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7229739371/p872357.png)
    
    Figure 2. ApsaraDB notification settings
    
-   If you want to be notified of O&M event updates in real time or implement custom automated O&M using an event-driven approach, you can configure system event subscriptions on the Cloud Monitor platform. Cloud database services push Cloud Monitor system events related to the lifecycle of O&M events, such as subscription, start, completion, and cancellation. For more information, see [Manage event subscriptions (Recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/manage-notification-policies). For a list of subscribable Cloud Monitor events, see [Appendix 1: Related Cloud Monitor system events](/help/en/db-overview/latest/view-and-manage-pending-events#84356e1bd7idq).
    
    Expand to view a sample Cloud Monitor event format.
    
    ```
    {
      "eventId": "c864b30b-7f69-5f04-b0e7-8dfb0eabcfd9", // Event ID. The ID is the same for the same event.
      "product": "RDS",                                  // Product code
      "reason": "Host software/hardware upgrade",        // Event reason
      "extra": {
        "impactZh": "Transient instance disconnection",                           // Event impact
        "impactEn": "Transient instance disconnection",  // Event impact
        "eventCode": "rds_apsaradb_transfer",            // O&M event type code
        "eventNameEn": "Instance migration",             // O&M event name
        "eventNameZh": "Instance migration",                        // O&M event name   
        "switchTime": "2024-09-15T01:30:00+08:00",       // Scheduled switchover time. This is the time of the transient disconnection if a switchover occurs.
        "startTime": "2024-09-14T21:30:00+08:00",          // Scheduled start time. The event enters the scheduling queue to wait for execution.
        "cancelCode": "OutOfGoodPerfBySoftHardwareUpgrade", // Cancellation risk code. For more information, see Appendix 2: Detailed reason codes and cancellation risks.
        "detailCode": "HostSoftHardwareUpgrade",            // Detailed reason code. For more information, see Appendix 2: Detailed reason codes and cancellation risks.
        "instanceInfo": ""
      },
      "instanceId": "rm-2ze9d66o65q1g02g6",             // Instance ID
      "eventType": "Maintenance",
      "instanceComment": "rm-2ze9d66o65q1g02g6",        // Instance alias
      "instanceType": "Instance",
      "publishTime": "2024-09-10T16:01:47+08:00"
    }
    ```
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Event Center**.
    
    **Note**
    
    For O&M events that require you to schedule a time, a dialog box is displayed to prompt you. You must schedule these events as soon as possible.
    
3.  **Optional:** On the **Scheduled Events** tab, configure a recurring time window to manually schedule events.
    
    **Note**
    
    The **Recurring Time Window Configuration** is a global setting for proactive database O&M events, but it does not apply to emergency threat remediation events. After you configure a recurring time window, new proactive O&M events are automatically scheduled to occur within this window. If you do not configure a recurring time window, these events are automatically scheduled during the instance's [maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb).
    
    1.  Click **Recurring Time Window Configuration**.
        
    2.  In the panel that appears, set the recurring time and click **OK**.
        
4.  On the **Scheduled Events** tab, view the event details. To change the switchover time for an event that is in the **Scheduled** state, select the destination instance and click **Configure Scheduled Time**.
    
    **Note**
    
    The information displayed varies based on the event type. **The information that is actually displayed on the page takes precedence**.
    
5.  In the **Configure Scheduled Time** dialog box, set the scheduled switchover time and click **OK**.
    
    **Note**
    
    -   Select **Set Earliest Execution Time**. The system automatically enters the earliest possible date and time for the scheduled switchover. Click **OK**. The instance then prepares for the switchover and its status changes to pending. To customize the scheduled switchover date and time, clear this check box.
        
    -   The **Scheduled Switchover Time** cannot be later than the **Latest Operation Time**.
        
    

## Causes and impacts of events

**Event type**

**Description**

**Impact type**

**Impact description**

Instance migration

A scheduled O&M operation triggered by host threats, expired hardware warranty, or operating system upgrades. The system migrates the instance—including non-HA and read-only instances—to a new server node.

Instance switchover

When the scheduled switchover time is reached, the following impacts occur. A pending event typically causes an instance switchover. This switchover is performed during the first maintenance window that occurs after the scheduled switchover time.

-   An instance switchover occurs. During the switchover, the instance is in a read-only state for up to 30 seconds to allow for full data synchronization. We recommend that you perform this operation during off-peak hours and make sure that your application has a reconnection mechanism. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   The use of the instance in [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) and [DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) is briefly interrupted. Service automatically resumes after the operation is complete.
    

HA switchover

A scheduled O&M operation triggered by host threats, expired hardware warranty, or operating system upgrades. The system initiates a primary-secondary node switchover. Applies only to HA instances.

SSL certificate update

Initiated when an instance’s SSL certificate nears expiration to maintain security and stability.

Backup mode upgrade

Switches the instance’s backup mode from logical backup to physical database and table backup to enable faster recovery.

Host software or hardware upgrade

A scheduled O&M operation triggered by host threats or software or hardware upgrades. The system initiates a primary-secondary node switchover.

Minor version upgrade

To improve user experience, ApsaraDB periodically releases minor versions for instances to add features or fix known bugs.

Instance switchover

When the scheduled switchover time is reached, the following impacts occur. A pending event typically causes an instance switchover. This switchover is performed during the first maintenance window that occurs after the scheduled switchover time.

-   An instance switchover occurs. During the switchover, the instance is in a read-only state for up to 30 seconds to allow for full data synchronization. We recommend that you perform this operation during off-peak hours and make sure that your application has a reconnection mechanism. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   The use of the instance in [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) and [DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) is briefly interrupted. Service automatically resumes after the operation is complete.
    

Differences between minor versions

The updates vary among minor versions (minor engine versions). Note the differences between the new minor version and the current one. For more information, see the update logs for minor versions. The update logs for the minor versions of some products are not yet available. [Update log of minor engine versions for ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/release-notes-for-minor-engine-versions-of-apsaradb-rds-for-sql-server#concept-2074872).

Proxy minor version upgrade

To improve user experience, ApsaraDB periodically releases minor versions for proxy nodes to enhance proxy service features or fix known bugs.

Instance switchover

When the scheduled switchover time is reached, the following impacts occur. A pending event typically causes an instance switchover. This switchover is performed during the first maintenance window that occurs after the scheduled switchover time.

-   An instance switchover occurs. During the switchover, the instance is in a read-only state for up to 30 seconds to allow for full data synchronization. We recommend that you perform this operation during off-peak hours and make sure that your application has a reconnection mechanism. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   The use of the instance in [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) and [DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) is briefly interrupted. Service automatically resumes after the operation is complete.
    

Differences between minor versions

The updates vary among minor versions. Note the differences between the new minor version and the current one.

Network upgrade

Upgrades network hardware to improve instance network performance and stability.

Instance switchover

When the scheduled switchover time is reached, the following impacts occur. A pending event typically causes an instance switchover. This switchover is performed during the first maintenance window that occurs after the scheduled switchover time.

-   An instance switchover occurs. During the switchover, the instance is in a read-only state for up to 30 seconds to allow for full data synchronization. We recommend that you perform this operation during off-peak hours and make sure that your application has a reconnection mechanism. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   The use of the instance in [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) and [DTS](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) is briefly interrupted. Service automatically resumes after the operation is complete.
    

Impact on VIP direct connection

Some network upgrades may involve a cross-zone migration, which changes the virtual IP address (VIP) of the instance. If your client connects to the ApsaraDB instance using the VIP, the connection is interrupted.

**Note**

To prevent this interruption, use the domain name provided by the instance as the endpoint and disable the DNS cache on your application and its server.

Instance shutdown migration

A scheduled O&M operation triggered by host threats, expired hardware warranty, or operating system upgrades. The system migrates the instance—including non-HA instances—to a new server node.

Shutdown switchover

After the scheduled switchover time, the following impacts occur:

-   Settings such as instance name, access port, tags, database accounts, and endpoints **remain unchanged**.
    
-   Service is typically unavailable for about 10 minutes during migration (duration depends on transaction volume before switchover).
    
-   Affects DTS usage. If active DTS tasks exist, plan ahead. After migration, **manually restart** affected tasks.
    
-   Migration duration depends on factors such as data volume.
    

## **FAQ**

Q: Are ApsaraDB RDS O&M events automatically executed? Can I cancel a task?

A: Scheduled events are automatically executed to ensure the stability of your instance and cannot be canceled. However, you can change the scheduled switchover time. We recommend that you set the switchover time to off-peak hours and make sure that your application has a reconnection mechanism. For information about how to change the time, see the **Procedure** section of this topic.
