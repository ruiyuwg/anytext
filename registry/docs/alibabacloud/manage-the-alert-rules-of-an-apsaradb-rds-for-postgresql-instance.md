You can enable the initiative alert feature or create custom alert rules. When a condition specified for an alert rule is met, the system sends alert notifications to all alert contacts in your alert contact group.

## Background information

The monitoring and alerting feature of ApsaraDB RDS is implemented by integrating the capabilities of CloudMonitor. This allows you to configure metrics and alert rules. When a condition specified for an alert rule is met, CloudMonitor sends alert notifications to all alert contacts in your alert contact group by sending emails. You can manage the alert contact group that corresponds to a monitoring metric. This way, the system can notify alert contacts in the alert contact group at the earliest opportunity in case of alerts.

## Enable the initiative alert feature

After you enable the initiative alert feature for an ApsaraDB RDS for PostgreSQL instance, an alerting system for the RDS instance is instantly built. This way, you can identify exceptions in crucial metrics at the earliest opportunity.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Monitoring and Alerts**.
    
3.  On the page that appears, click the **Alerts** tab.
    
4.  In the right-side section of the page, turn on the **Initiative Alert** switch.
    
    After you enable the initiative alert feature, the system automatically monitors the following metrics.
    
    **Rule name**
    
    **Metric**
    
    **Statistical period**
    
    **Description**
    
    SystemDefault\_acs\_rds\_dashboard\_PG\_RO\_ReadLag
    
    Synchronization Latency of Read-only Instances
    
    60 seconds
    
    If the average value of the Synchronization Latency of Read-only Instances metric is greater than or equal to 7,200 seconds in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
    SystemDefault\_acs\_rds\_dashboard\_conn\_usage
    
    Connections Usage
    
    60 seconds
    
    If the average value of the Connections Usage metric is greater than or equal to 90% in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
    SystemDefault\_acs\_rds\_dashboard\_local\_fs\_size\_usage
    
    Disk Usage
    
    60 seconds
    
    If the average value of the Disk Usage metric is greater than or equal to 90% in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
    SystemDefault\_acs\_rds\_dashboard\_cpu\_usage
    
    CPU Utilization
    
    60 seconds
    
    If the average value of the CPU Utilization metric is greater than or equal to 90% in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
    SystemDefault\_acs\_rds\_dashboard\_iops\_usage
    
    IOPS Utilization
    
    60 seconds
    
    If the average value of the IOPS Utilization metric is greater than or equal to 80% in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
    SystemDefault\_acs\_rds\_dashboard\_PG\_MaxSlotWalDelay
    
    Maximum Replication Slot Latency
    
    60 seconds
    
    If the average value of the Maximum Replication Slot Latency metric is greater than or equal to 1,024 MB in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
    SystemDefault\_acs\_rds\_dashboard\_PG\_SwellTime
    
    Longest Transaction Duration
    
    60 seconds
    
    If the average value of the Longest Transaction Duration metric is greater than or equal to 36,000 seconds in five consecutive statistical periods, an alert is triggered. ApsaraDB RDS sends the alert to all contacts in the alert contact group.
    
5.  Optional. Specify an alert contact. By default, the alert contact is set to the owner of the Alibaba Cloud account. You can change the alert contact.
    
    1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Alert Contacts**.
        
    3.  On the **Alert Contacts** tab, click Create Alert Contact. For more information about how to create an alert contact, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
        
    4.  In the search box on the **Alert Contact Group** tab, enter Default Contact Group to find the default contact group. Then, click the ![编辑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3056779071/p338438.png) icon for the default contact group.
        
    5.  On the **Modify Contact Group** panel, modify the contacts.
        

## Configure custom alert rules

ApsaraDB RDS allows you to configure custom alert rules for an RDS instance based on your business requirements. The following table describes the metrics that you can configure in custom alert rules.

PG\_DBAge

PG\_InactiveSlots

PG\_MaxExecutingSQLTime

PG\_MaxSlotWalDelay

PG\_RO\_ReadLag

PG\_RO\_StreamingStatus

PG\_ReplayLatency

PG\_SwellTime

PG\_ActiveConnectionsPerCpu

PG\_ConnectionsUtilization

PG\_CPUUtilization

PG\_IOPSUtilization

PG\_INODEUtilization

PG\_DISKUtilization

PG\_MemoryUtilization

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Monitoring and Alerts**.
    
3.  On the page that appears, click the **Alerts** tab.
    
4.  In the right-side section of the page, click **Set Alert Rule** to go to the CloudMonitor console.
    
5.  Create an alert contract group. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    
6.  Create an alert rule. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117).
    
    **Note**
    
    -   When you create an alert rule, set the Product parameter to **ApsaraDB RDS for PostgreSQL**.
        
    -   You can also monitor resources based on tags. For more information, see [Monitor resources based on tags](/help/en/cms/cloudmonitor-1-0/use-cases/monitor-resources-based-on-tags#task-2430251).
