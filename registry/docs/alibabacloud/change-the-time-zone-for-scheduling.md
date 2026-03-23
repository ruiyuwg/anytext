Companies with global operations often need to coordinate business activities and process data across different time zones. You can standardize the scheduling time for DataWorks workspaces in different regions to a single time zone, such as UTC+0 or UTC+8. DataWorks lets you change the scheduling time zone from the region's default to a specific one. This topic describes how to change the time zone and the effects of this change on your scheduled tasks and configurations. Before you change the time zone, you must assess the risks to your business. A time zone change helps you unify scheduling logic and avoid conflicts or data errors.

## Regions that support changing the scheduling time zone

By default, the scheduling time zone for a DataWorks workspace is the time zone of the region where the workspace resides. This time zone is used for the timed scheduling of tasks. DataWorks lets you change the scheduling time zone in some regions. The following table lists the regions that support this change and the time zones to which you can switch.

**Regions that support time zone switching**

**Switch to UTC+0**

**Switch to UTC+8**

US (Silicon Valley)

Supported

Supported

US (Virginia)

Supported

Supported

Germany (Frankfurt)

Supported

Supported

Singapore

Supported

Supported (same as the local time zone)

China (Hong Kong)

Supported

Supported (same as the local time zone)

Japan (Tokyo)

Supported

Support

**Note**

For example, in a DataWorks workspace in the US (Silicon Valley) region, you can switch the **scheduling time zone** from the **local default time zone** to the **UTC+0 time zone** or the **UTC+8 time zone**. After the time zone is switched, you can [confirm that the time zone has been switched](#96b2999172wuo) in the notification bar at the top of the **Operation Center** or under **Scheduling Configuration** > **Scheduling Time** for a data development node.

## (Required) Precautions for changing the scheduling time zone

To prevent errors or unexpected results in your business caused by the time zone change, carefully read the following information before you change the scheduling time zone.

**Category**

**Description**

**Scope of affected workspaces**

The scheduling time zone is a **region-level** setting. A change to the scheduling time zone takes effect for **all workspaces** in the region.

**Irreversible operation**

After the scheduling time zone is changed, it cannot be changed again. Proceed with caution.

**Important**

This operation involves migrating historical data, which includes existing nodes and instances. This may affect your business. Carefully assess the impact before you proceed.

**Scope of affected configurations**

Changing the scheduling time zone affects related DataWorks configurations and the replacement of code parameters. Scheduling parameters are calculated based on the task's scheduled time and data timestamp. These values are then used as input parameters for the code in a scheduling scenario.

-   The time zone for the scheduled time of tasks in DataStudio is changed. For more information, see [(Important) Product-side impacts of a time zone change](#section-pf2-1n0-w2u).
    
-   The time zone displayed in Operation Center is changed. For more information, see [(Important) Product-side impacts of a time zone change](#section-pf2-1n0-w2u).
    
-   By default, modules other than the ones listed above use the time zone of the workspace's region, not the scheduling time zone.
    

**Important**

-   The time zone of an underlying engine is set by the engine itself and is not related to the DataWorks scheduling time zone. Therefore, the engine's time zone is not affected by this change.
    
-   The change in the scheduling time zone affects only the time-related properties for task scheduling. It does not affect the engine's time zone. The replacement values for scheduling parameters are sent to the engine as **strings**. The engine processes them according to its own rules. For information about the engine's processing solution, see the documentation for the engine's time zone.
    
-   Operations in DataStudio such as running a workflow or performing smoke testing in the development environment use the scheduling system. Therefore, time parameters in the node code are affected by the time zone change. However, operations such as debugging a single node or running an ad hoc query do not use the scheduling system and are not affected.
    

## (Important) Product-side impacts of a time zone change

Changing the scheduling time zone affects DataWorks configurations, parameter replacement in scheduling scenarios, and time displays in some modules. The following sections describe these impacts.

**Note**

-   The scheduling time zone change affects only scheduling scenarios. Most operations in DataStudio do not run in a scheduling environment. When you run a task in DataStudio, time parameters are replaced based on the local time zone by default. For example, operations in DataStudio, such as running a single node, running a node with parameters, or running an ad hoc query, are not affected by the time zone change.
    
-   Operations in DataStudio, such as running a workflow or performing smoke testing in the development environment, use the scheduling system. Therefore, time parameters in the node code are affected by the time zone change.
    

### Impact 1: Node scheduling time

The scheduled time for a node changes based on the new scheduling time zone.![定时时间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8520185961/p610585.png)

### Impact 2: Node time parameter configuration

Scheduling parameters for a node use time-related information, such as the scheduled time and data timestamp, to replace variables in the code. These values change based on the new scheduling time zone.

```
YYYYMMDD=${yyyymmdd} LAST_2D=${yyyymmdd-2}
```

![时间参数设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8520185961/p610586.png)

### Impact 3: Time-related processing logic in node code

Some variables in the code are parsed by the gateway, and others are parsed by the compute engine. The parsing logic is as follows:

-   Variables parsed by the gateway change according to the new scheduling time zone. In a scheduling scenario, if you run a command to retrieve the time directly in a DataWorks script task, the system returns the time based on your scheduling time zone. For example, this applies when you run the date command in a Shell node. Running a task temporarily in Data Development is not a scheduling scenario.
    
-   For variables parsed by the underlying compute engine, refer to the time zone conversion rules for that engine. For more information, see the documentation for the specific engine.
    

The following figure shows an example. In a scheduling scenario, the time variable in the code is replaced with a specific time string based on the scheduled time. This string is then sent to Hive. The expressed time is limited by the parsing logic on the Hive server.![节点代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5377462861/p610588.png)

### Impact 4: Time for baselines or alerts

The time for baselines or alerts changes based on the new scheduling time zone.

### Impact 5: Time for APIs

The time for APIs changes based on the new scheduling time zone.

### Impact 6: Time zone of the underlying engine

The time zone of an underlying engine, such as Data Integration or MaxCompute, is set by the engine itself and is independent of the DataWorks scheduling time zone. The replacement values for scheduling parameters are sent to the engine as **strings**. The engine processes them according to its own rules. For information about the engine's processing solution, see the documentation for the engine's time zone.

**Note**

-   The scheduling time zone change affects only the time-related properties for task scheduling. It does not affect the engine's time zone.
    
-   For information about how this scenario is handled in Data Integration, see [Appendix: Handling time in Data Integration](#section-gmv-cr4-tke).
    

## How to change the time zone

DataWorks scheduling lets you switch from the local time zone to another time zone.

### Scenario 1: You are creating your first project as a new tenant

When you create your first workspace in a region that supports time zone changes, a pop-up message appears that asks if you want to change the scheduling time zone to a non-local time zone. You can decide whether to change the time zone based on your business needs and the information in [(Required) Precautions for changing the scheduling time zone](#section-mjj-qhh-4de). To change the time zone, [submit a ticket](https://smartservice.console.alibabacloud.com/) to contact technical support.

### Scenario 2: You already have projects in your tenant account

If you already have workspaces in a region that supports time zone changes, you can also change the scheduling time zone for all workspaces in that region. To do so, [submit a ticket](https://smartservice.console.alibabacloud.com/) to contact technical support. This process involves migrating existing nodes and instances, which may affect your business. You must assess the impact before you proceed. The change process includes the following steps:

1.  On your end: Assess the impact on historical data.
    
2.  On the platform side: Migrate historical data.
    
3.  On the platform side: Set the new time zone.
    
4.  On your end: Restore historical data and verify the new time zone.
    
    You must test each task type multiple times to ensure that they run correctly.
    

## **Check whether the time zone change was successful**

After the time zone is changed, you can confirm that the new time zone is in effect in two places: the **Schedule** tab on the node editing page in **Data Development** (this does not apply to nodes in the new workflow UI) and the **Operation Center** page.

### **Method 1: Check on the Schedule tab**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2643261571/p981309.png)

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In Data Development, click an existing node or [create a new node](/help/en/dataworks/user-guide/node-development-of-data-studio/) to go to the node editing page.
    
3.  On the node editing page, click the **Schedule** > **Scheduling Time** tab and verify that the new time zone is in effect.
    

### **Method 2: Check in the Operation Center**

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **Data Development and O&M** > **Operation Center**. Select your workspace from the drop-down list and click **Go to Operation Center**. The current time zone is displayed in the notification bar at the top of the page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2643261571/p981312.png)

## Appendix: Handling time in Data Integration

The Data Integration time zone is independent of the DataWorks scheduling time zone. Replacement values for scheduling parameters are sent to Data Integration as **strings**. For example, consider the data filtering condition `gmt_modify >= ${yyyymmdd}` in a where clause. This SQL filter is sent to the data source as a string literal. The actual filtering result depends on the time zone processing mechanism of the data source.

**Important**

The time zone for a Data Integration synchronization process is the **local time zone of the region where the DataWorks workspace resides**. This process time does not change with the DataWorks scheduling time zone. Note that for some data sources, data synchronization is related to the time zone of the synchronization process.
