Kafka is a distributed message queue service that features high throughput and high scalability. Kafka is widely used for big data analytics such as log collection, data aggregation, streaming processing, and online and offline analysis. It is important for the big data ecosystem. This topic describes how to synchronize data from a PolarDB for MySQL cluster to a self-managed Kafka cluster by using Data Transmission Service (DTS). The data synchronization feature allows you to extend message processing capabilities.

## Prerequisites

-   A Kafka cluster is created and the Kafka version is 0.10.1.0 to 2.7.0.
-   The binary logging feature is enabled for the PolarDB for MySQL cluster. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging).
    

## Precautions

The source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.

## Limits

-   You can select only tables as the objects to be synchronized.
    
-   DTS does not automatically update the objects of the data synchronization task based on their names.
    
    **Note**
    
    If a source table is renamed during data synchronization but the new table name is not included in the selected objects, DTS does not synchronize the data of the table to the destination Kafka cluster. To synchronize the data of the renamed table, you must add the table to the selected objects of the task. For more information, see [Add an object to a data synchronization task](/help/en/dts/user-guide/add-an-object-to-a-data-synchronization-task#concept-628273).
    

## Procedure

1.  Purchase a data synchronization instance. For more information, see [Purchase a DTS instance](/help/en/dts/getting-started/purchase-a-dts-instance#concept-26604-zh).
    
    **Note**
    
    On the buy page, set Source Instance to **PolarDB**, set Target Instance to **Kafka**, and set Synchronization Topology to **One-Way Synchronization**.
    
2.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
3.  In the left-side navigation pane, click **Data Synchronization**.
    
4.  In the upper part of the **Synchronization Tasks** page, select the region in which the destination instance resides.
    
5.  Find the data synchronization instance and click **Configure Task** in the Actions column.
    
6.  Configure the source and destination instances.
    
    ![Configure the source and destination instances](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6703019951/p57788.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Synchronization Task Name
    
    DTS automatically generates a task name. We recommend that you specify an informative name for easy identification. You do not need to use a unique task name.
    
    Source Instance Details
    
    Instance Type
    
    This parameter is set to **PolarDB Instance** and cannot be changed.
    
    Instance Region
    
    The source region that you selected on the buy page. You cannot change the value of this parameter.
    
    PolarDB Instance ID
    
    Select the ID of the PolarDB for MySQL cluster.
    
    Database Account
    
    Enter the database account of the PolarDB for MySQL cluster. The account must have the read permissions on the objects to be synchronized.
    
    Database Password
    
    Enter the password of the database account.
    
    Destination Instance Details
    
    Instance Type
    
    Select an instance type based on the deployment of the Kafka cluster. In this example, select **User-Created Database in ECS Instance**.
    
    **Note**
    
    If you select other instance types, you must deploy the network environment for the Kafka cluster. For more information, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).
    
    Instance Region
    
    The destination region that you selected on the buy page. You cannot change the value of this parameter.
    
    ECS Instance ID
    
    Select the ID of the Elastic Compute Service (ECS) instance on which the Kafka cluster is deployed.
    
    Database Type
    
    Select **Kafka**.
    
    Port Number
    
    Enter the service port number of the Kafka cluster. The default port number is 9092.
    
    Database Account
    
    Enter the username that is used to log on to the Kafka cluster. If no authentication is enabled for the Kafka cluster, you do not need to enter the username.
    
    Database Password
    
    Enter the password that corresponds to the username. If no authentication is enabled for the Kafka cluster, you do not need to enter the password.
    
    Topic
    
    Click **Get Topic List**, and select a topic name from the drop-down list.
    
    Kafka Version
    
    Select the version of the destination Kafka cluster.
    
    Encryption
    
    Select **Non-encrypted** or **SCRAM-SHA-256** based on your business and security requirements.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    **Note**
    
    DTS adds the CIDR blocks of DTS servers to the whitelist of the source PolarDB cluster and the inbound rule of the destination ECS instance. This ensures that DTS servers can connect to the source cluster and the destination instance.
    
8.  Select the objects to be synchronized.
    
    ![Select the objects to be synchronized](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8310931261/p133327.png)
    
    **Parameter**
    
    **Description**
    
    **Data Format in Kafka**
    
    The data that is synchronized to the Kafka cluster is stored in the Avro or Canal JSON format. For more information, see [Data formats of a Kafka cluster](/help/en/dts/user-guide/data-formats-of-a-kafka-cluster-1#concept-2046913).
    
    **Policy for Shipping Data to Kafka Partitions**
    
    The policy used to synchronize data to Kafka partitions. Select a policy based on your business requirements. For more information, see [Specify the policy for synchronizing data to Kafka partitions](/help/en/dts/user-guide/specify-the-policy-for-synchronizing-data-to-kafka-partitions#task-2541984).
    
    Objects to be synchronized
    
    Select one or more tables from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to add the tables to the **Selected** section.
    
    **Note** DTS maps the table names to the topic name that you select in Step 6. You can use the table name mapping feature to change the topics that are synchronized to the destination cluster. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
    
    Rename Databases and Tables
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Retry Time for Failed Connections
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
9.  In the lower-right corner of the page, click **Next**.
10.  Configure initial synchronization.
     
     ![Kafka: Configure initial synchronization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6703019951/p87942.png)
     
     **Parameter**
     
     **Description**
     
     **Initial Synchronization**
     
     Select both **Initial Schema Synchronization** and **Initial Full Data Synchronization**. DTS synchronizes the schemas and historical data of the required objects and then synchronizes incremental data.
     
     **Filter options**
     
     **Ignore DDL in incremental synchronization phase** is selected by default. In this case, DTS does not synchronize DDL operations that are performed on the source database during incremental data synchronization.
     
11.  In the lower-right corner of the page, click **Precheck**.
     
     **Note**
     
     -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, you can click the ![提示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the details, initiate a new precheck.
             
         -   If you do not need to troubleshoot the issues, **ignore the failed items** and **initiate a new precheck**.
             
     
12.  Close the **Precheck** dialog box after the following message is displayed: **Precheck Passed**. Then, the data synchronization task starts.
     
     You can view the status of the data synchronization task on the **Data Synchronization** page. ![View the status of a data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0210398951/p39871.png)
