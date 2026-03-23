Database Autonomy Service (DAS) provides an alerting service that lets you create custom alert rules. If a database instance triggers an alert rule, DAS automatically sends an alert. This topic describes how to configure and manage alert rules in DAS.

## Create an alert rule

**Important**

-   The alert types in DAS have been updated. The **Autonomy Events** alert type is added, and the **Event Alerting** type is no longer supported. Your existing rules are retained. When you create a new rule, you can select only ****Threshold Alerting**** or ****Autonomy Events****.
    
-   Legacy event subscriptions, which are alerts with the **Alarm Metric** set to **Event Alerts**, trigger alerts for all types of autonomous events. To modify the event types for these legacy alerts, you must [migrate the legacy event subscriptions to the new version](#be88c12046lew).
    

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Tools** > **Alert Service** > **Alert Rules**.
    
3.  On the **Alert Rules** page, click **Add Rule** in the upper-right corner.
    
4.  In the **Add Rule** dialog box, set the following parameters and click **OK**.
    
    **Configuration**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the alert rule.
    
    **Type**
    
    Select the type of alert.
    
    -   **Threshold Alerting**: Sends alert notifications when a metric exceeds a specified threshold. For information about supported threshold alerts, see the Alert metrics section in this topic.
        
    -   **Autonomy Events**: Sends alert notifications when a specified autonomy event occurs.
        
    
    **Description**
    
    Set the conditions that trigger the **Threshold Alerting** rule.
    
    **Note**
    
    -   This parameter is required if you set **Type** to **Threshold Alerting**.
        
    -   The alert detection granularity is 1 minute.
        
    
    **Event Type**
    
    Set the type of **Autonomy Events** that triggers an alert. The following types are supported:
    
    -   Auto Scaling Event
        
    -   Throttling Event
        
    -   SQL Optimization
        
    -   Storage Optimization
        
    -   Metric Exception
        
    
    **Note**
    
    This parameter is required if you set **Type** to **Autonomy Events**.
    
    **Alert Interval**
    
    The interval at which alert messages are sent after an alert rule is triggered.
    
    **Effective Time**
    
    The period during which the alert rule is active.
    
    **Effective Time**
    
    Set the notification level for the alert.
    
    **Notification Method**
    
    Select the method to send alert notifications. You can choose text message, webhook, or email.
    
    **Note**
    
    Webhooks are supported for DingTalk, WeCom, Lark, and Application Real-Time Monitoring Service (ARMS).
    
5.  After you create the alert rule, you can configure alerts that use this rule. For more information, see [Configure alerts](/help/en/das/user-guide/configure-alerting).
    

## Manage an alert rule

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Tools** > **Alert Service** > **Alert Rules**.
    
3.  On the **Alert Rules** page, you can manage your existing alert rules.
    
    In the **Actions** column for the target alert rule, you can perform the following operations:
    
    -   **Search**: View the details and alert history of the alert rule.
        
    -   **Edit**: Modify the alert rule. For more information about the rule configuration parameters, see the "Create an alert rule" section of this topic.
        
    -   **Disable**: Disable the alert rule.
        
    -   **Delete**: Delete the alert rule.
        
    
    **Important**
    
    Modifying, disabling, or deleting an alert rule affects all alert templates that contain the rule. Proceed with caution.
    

## Alert metrics

**Important**

These alert metrics apply only to Alibaba Cloud database instances.

### **MySQL**

**Alert metric**

**Unit**

**Description**

MySQL disk usage

%

The disk usage.

MySQL CPU utilization

%

The CPU utilization of the MySQL service process. The maximum value is 100% for ApsaraDB instances.

MySQL IOPS utilization

%

The IOPS utilization.

MySQL memory usage

%

The memory usage of the MySQL instance as a percentage of the total memory of the operating system.

MySQL active sessions

Count

The number of current active sessions.

MySQL transactions per second

Per Second

The average number of transactions per second.

MySQL requests per second

Per Second

The average number of requests per second.

MySQL DELETE statements per second

Per Second

The average number of DELETE statements executed per second.

MySQL INSERT statements per second

Per Second

The average number of INSERT statements executed per second.

MySQL INSERT\_SELECT statements per second

Per Second

The average number of INSERT\_SELECT statements executed per second.

MySQL REPLACE statements per second

Per Second

The average number of REPLACE statements executed per second.

MySQL REPLACE\_SELECT statements per second

Per Second

The average number of REPLACE\_SELECT statements executed per second.

MySQL SELECT statements per second

Per Second

The average number of SELECT statements executed per second.

MySQL UPDATE statements per second

Per Second

The average number of UPDATE statements executed per second.

MySQL full table scans per second

Per Second

The number of full table scan queries.

MySQL tables opened

Count

The number of opened tables.

MySQL files opened

Count

The number of opened files.

MySQL rows sorted per second

Per Second

The number of rows sorted per second.

MySQL secondary node replication delay

Second

The replication delay of the secondary node.

MySQL InnoDB average rows deleted per second

Per Second

The average number of rows deleted from InnoDB per second.

MySQL InnoDB average rows inserted per second

Per Second

The average number of rows inserted into InnoDB per second.

MySQL InnoDB average rows read per second

Per Second

The average number of rows read from InnoDB per second.

MySQL InnoDB average rows updated per second

Per Second

The average number of rows updated in InnoDB per second.

MySQL InnoDB pages read from Buffer Pool per second

Per Second

The average number of pages read from the InnoDB Buffer Pool per second (logical reads).

MySQL InnoDB pages written to Buffer Pool per second

Per Second

The average number of pages written to the InnoDB Buffer Pool per second.

MySQL InnoDB Buffer Pool dirty page ratio

%

The ratio of dirty pages in the InnoDB Buffer Pool. Formula: Innodb\_buffer\_pool\_pages\_dirty / Innodb\_buffer\_pool\_pages\_data × 100%.

MySQL InnoDB Buffer Pool read cache hit ratio

%

The read cache hit ratio of the InnoDB Buffer Pool. Formula: (Innodb\_buffer\_pool\_read\_requests - Innodb\_buffer\_pool\_reads) / Innodb\_buffer\_pool\_read\_requests × 100%.

MySQL InnoDB table average row lock waits

Count

The average number of waits for row locks on the InnoDB table.

MySQL InnoDB table maximum row lock wait time

ms

The maximum wait time for row locks on the InnoDB table.

MySQL instance total space usage

MB

The total space usage of the MySQL instance.

### **PolarDB for MySQL**

**Alert metric**

**Unit**

**Description**

PolarDB for MySQL disk usage

%

The disk usage.

PolarDB for MySQL service process CPU utilization

%

The CPU utilization of the service process. A value of 200% indicates that two CPU cores are used.

PolarDB for MySQL IOPS utilization

%

The IOPS utilization.

PolarDB for MySQL instance memory usage

%

The memory usage of the instance as a percentage of the total memory of the operating system.

PolarDB for MySQL active sessions

Count

The number of current active sessions.

PolarDB for MySQL transactions per second

Per Second

Formula: (Com\_commit + Com\_rollback) / Uptime.

PolarDB for MySQL requests per second

Per Second

Formula: Queries / Uptime.

PolarDB for MySQL DELETE statements per second

Per Second

The average number of DELETE statements executed per second.

PolarDB for MySQL INSERT statements per second

Per Second

The average number of INSERT statements executed per second.

PolarDB for MySQL INSERT\_SELECT statements per second

Per Second

The average number of INSERT\_SELECT statements executed per second.

PolarDB for MySQL REPLACE statements per second

Per Second

The average number of REPLACE statements executed per second.

PolarDB for MySQL REPLACE\_SELECT statements per second

Per Second

The average number of REPLACE\_SELECT statements executed per second.

PolarDB for MySQL SELECT statements per second

Per Second

The average number of SELECT statements executed per second.

PolarDB for MySQL UPDATE statements per second

Per Second

The average number of UPDATE statements executed per second.

PolarDB for MySQL Multi-DELETE statements per second

Per Second

The average number of Multi-DELETE statements executed per second.

PolarDB for MySQL Multi-UPDATE statements per second

Per Second

The average number of Multi-UPDATE statements executed per second.

PolarDB for MySQL InnoDB rows deleted per second

Per Second

The average number of rows deleted from InnoDB per second.

PolarDB for MySQL InnoDB rows inserted per second

Per Second

The average number of rows inserted into InnoDB per second.

PolarDB for MySQL InnoDB rows read per second

Per Second

The average number of rows read from InnoDB per second.

PolarDB for MySQL InnoDB rows updated per second

Per Second

The average number of rows updated in InnoDB per second.

### **Redis**

**Alert metric**

**Unit**

**Description**

Redis memory utilization

%

The memory utilization.

Redis average response time

μs

The average response time of Redis.

Redis process CPU utilization

%

The CPU utilization of the Redis process.

Redis network read rate per second

KB/s

The network read rate per second.

Redis network write rate per second

KB/s

The network write rate per second.

Redis network read utilization

%

The network read utilization.

Redis network write utilization

%

The network write utilization.

### **PostgreSQL**

**Alert metric**

**Unit**

**Description**

PostgreSQL process CPU utilization

%

The CPU utilization of the PostgreSQL process.

PostgreSQL active sessions

Count

The number of current active connections.

PostgreSQL IOPS usage

%

The IOPS usage.

PostgreSQL disk usage

%

The space usage of PostgreSQL.

### **PolarDB for PostgreSQL**

**Alert metric**

**Unit**

**Description**

PolarDB for PostgreSQL CPU utilization

%

The CPU utilization.

PolarDB for PostgreSQL memory usage

%

The memory usage.

PolarDB for PostgreSQL active sessions

Count

The number of current active connections.

PolarDB for PostgreSQL total IOPS

Per Second

The total IOPS.

## **Historical alert metrics**

**Note**

DAS began to support new alert metrics on March 16, 2023. If you configured alerts before this date, you can view their details in this section. You can no longer configure historical alert metrics because they are being phased out. We recommend that you use the new alert metrics instead.

Alert metrics

### Event alerting

**Alert metric**

**Number of occurrences**

**Database Disconnected**

1, 3, 5, 7, or 10 consecutive times.

**MySQL Replication Interrupted**

1, 3, 5, 7, or 10 consecutive times.

### Threshold alerting

**Important**

ApsaraDB instances and directly connected self-managed databases use the centralized-mode DBGateway connection type.

**Alert metric**

**Threshold unit**

**Centralized-mode DBGateway**

**Host-mode DBGateway**

**Number of occurrences**

Host CPU utilization

%

Not supported

Supported

1, 3, 5, 7, or 10 consecutive times.

Host LOAD\_1min

None

Not supported

Host memory usage

%

Not supported

Host network sent bandwidth usage

%

Not supported

Host network received bandwidth usage

%

Not supported

Host root partition disk usage

%

Not supported

MySQL active sessions

Count

Supported

MySQL Connections

Count

Supported

MySQL replication delay

s

Supported

MySQL cache hit ratio

%

Supported

MySQL slow SQL statements per hour

Count

Supported

MySQL data storage usage

%

Supported

MySQL log storage usage

%

Supported

Redis client connections

Item

Supported

Redis cache hit ratio

%

Supported

Redis memory fragmentation ratio

%

Supported

PostgreSQL IOPS usage

%

Supported

PostgreSQL iNode usage

%

Supported

PostgreSQL space usage

%

Supported

PostgreSQL TPS

Count

Supported

PostgreSQL connection usage

%

Supported

PostgreSQL average active connections per CPU

Count

Supported

PostgreSQL longest bloat duration

Unit

Supported

PostgreSQL CPU utilization

%

Not supported

PostgreSQL memory usage

%

Supported

MongoDB Connections

Count

Supported

MongoDB cache usage

%

Supported

MongoDB current queued operations

Unit

Supported

MongoDB cache dirty data percentage

%

Supported

MongoDB slow SQL statements per hour

Count

Not supported

Not supported

N/A

## FAQ

-   Why do I receive event alerts that I did not configure?
    
    Your database instance may have a legacy event subscription. To resolve this, [migrate the legacy event subscription to the new version](#be88c12046lew).
    
-   How do I migrate a legacy event subscription to the new version?
    
    You can configure the required autonomy event alerts for the database instance. The system then automatically migrates the event subscription to the new version. After the migration, alerts for unconfigured autonomy events are no longer sent.
    
    **Note**
    
    If you do not need any autonomy event alerts, first [configure](/help/en/das/user-guide/configure-alerting) an autonomy event alert of any type to overwrite the legacy event subscription for the database instance. After the configuration is complete, wait for 15 minutes. Then, [disassociate the alert template from the database instance](/help/en/das/user-guide/configure-alert-templates#section-e7a-pa4-1su).
