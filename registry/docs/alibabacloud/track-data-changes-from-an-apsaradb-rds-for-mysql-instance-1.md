This topic describes how to configure a change tracking task in Data Transmission Service (DTS) to track real-time data changes from an ApsaraDB RDS for MySQL instance. Change tracking supports lightweight cache updates, business decoupling with asynchronous data processing, and extract, transform, and load (ETL) synchronization.

## Prerequisites

Before you begin, make sure that you have:

-   An ApsaraDB RDS for MySQL instance (source)
-   A database account with the SELECT permission on the required objects and the REPLICATION CLIENT, REPLICATION SLAVE, and SHOW VIEW permissions
-   A purchased change tracking instance. For details, see [Purchase a change tracking instance](/help/en/dts/getting-started/purchase-a-dts-instance#section-sek-ra8-w7j)

## Precautions

-   DTS does not track DDL operations performed by gh-ost or pt-online-schema-change. The change tracking client may fail to write consumed data to destination tables due to schema conflicts.
-   If the source database is involved in another task, such as a running data migration task, DTS may track data changes of additional objects. Manually filter the tracked data on the change tracking client.

## Configure the change tracking task

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
2.  In the left-side navigation pane, click **Change Tracking**.
3.  In the upper part of the **Change Tracking Tasks** page, select the region where the change tracking instance resides.
4.  Find the change tracking instance and click **Configure Task** in the **Actions** column.
5.  Configure the source database and network type.![数据订阅源实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4483097951/p48078.png)
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    Task settings
    
    Task Name
    
    DTS generates a task name automatically. Specify a descriptive name to identify the task. A unique task name is not required.
    
    Source database settings
    
    Instance Type
    
    Select **RDS Instance**.
    
    **Note** If your source database is self-managed, deploy the network environment first. For details, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).
    
    Database Type
    
    Set to **MySQL**. This value cannot be changed.
    
    Instance Region
    
    Displays the source region selected on the buy page. This value cannot be changed.
    
    RDS Instance ID
    
    Select the ID of the ApsaraDB RDS for MySQL instance from which to track data changes. A read-only instance or temporary instance cannot be used as the source.
    
    Database Account
    
    Enter the database account of the source instance. The account must have the SELECT permission on the required objects and the REPLICATION CLIENT, REPLICATION SLAVE, and SHOW VIEW permissions.
    
    Database Password
    
    Enter the password for the database account.
    
    Network Type
    
    -   **Classic**
    -   **VPC**
    
    Select the network type for the change tracking instance: **Classic** or **VPC**.
    
    **Note**
    
    -   If the change tracking client runs on a local server, select either **Classic** or **VPC**.
    -   If the change tracking client runs on an [ECS](/help/en/ecs/user-guide/what-is-ecs) instance, select the network that matches the ECS instance. For example, if the ECS instance is in a VPC, select **VPC** and specify the **VPC** and **vSwitch** parameters.
    -   Tracking data changes over internal networks minimizes network latency.
    
    -   **Classic**
        
        No additional configuration is required. For details, see [Network types](/help/en/ecs/user-guide/network-types).
        
    -   **VPC**
        
        Specify the **VPC** and **vSwitch** parameters. For details, see [Network types](/help/en/ecs/user-guide/network-types).
        
    
6.  In the lower-right corner of the page, click **Test Connectivity and Proceed**.
    
    If the source database is an Alibaba Cloud database instance (such as ApsaraDB RDS for MySQL or ApsaraDB for MongoDB) or a self-managed database hosted on ECS, DTS automatically adds the CIDR blocks of DTS servers to the whitelist of the database instance or ECS security group rules. For details, see [Add the CIDR blocks of DTS servers to the security settings of on-premises databases](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353). If the source database is a self-managed database in a data center or from another cloud provider, manually add the CIDR blocks of DTS servers to allow access.
    
    **Warning** Adding CIDR blocks of DTS servers to the whitelist or ECS security group rules may introduce security risks. Before using DTS, understand and acknowledge these risks. Take preventive measures, such as strengthening account and password security, limiting exposed ports, authenticating API calls, regularly reviewing the whitelist or security group rules, removing unauthorized CIDR blocks, or connecting the database to DTS through Express Connect, VPN Gateway, or Smart Access Gateway.
    
    After your DTS task is completed or released, manually check for and remove the added CIDR blocks from the whitelist or ECS security group rules.
    
7.  Select the data change types and objects.![选择订阅类型和对象](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0308539951/p48087.png)
    
    **Configuration**
    
    **Description**
    
    Required Data Types
    
    Select one or both data change types:
    
    -   **Data Updates**
        
        Tracks INSERT, DELETE, and UPDATE operations on the selected objects.
        
    -   **Schema Updates**
        
        Tracks create, delete, and modify operations on all object schemas of the source instance. Filter the required data by using the change tracking client.
        
    
    **Note**
    
    -   Selecting a database tracks data changes of all objects in the database, including objects added later.
    -   Selecting a table tracks data changes of that table only. To track changes for additional tables, modify the selected objects. For details, see [Modify the objects for change tracking](/help/en/dts/user-guide/modify-the-objects-for-change-tracking#concept-388599).
    
    Required Objects
    
    Select objects from the **Required Objects** section and click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to move them to the **Selected** section.
    
    **Note** Select tables or databases as the objects for change tracking.
    
8.  In the lower-right corner of the page, click **Save and Precheck**.
    
    **Note**
    
    -   DTS performs a precheck before starting the change tracking task. The task starts only after the precheck passes.
    -   If any precheck item fails, click the ![提示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to the failed item for details. Fix the issue and run the precheck again.
    
9.  After the message **The precheck is passed** appears, close the **Precheck** dialog box.

After configuration, DTS performs initial change tracking. This process takes about one minute. After initial change tracking is complete, create one or more consumer groups to consume the tracked data.

## Next steps

1.  [Create consumer groups](/help/en/dts/user-guide/create-consumer-groups-1#concept-388593)
2.  [Use a Kafka client to consume tracked data](/help/en/dts/user-guide/use-a-kafka-client-to-consume-tracked-data#concept-508217)
3.  [Use the SDK demo to consume tracked data](/help/en/dts/user-guide/use-the-sdk-demo-to-consume-tracked-data-1#multiTask2832)
