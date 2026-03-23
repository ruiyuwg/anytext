To prepare for an upcoming short-term business peak or a database schema change, such as an index change, you can use the traffic playback and stress testing feature. This feature helps you determine whether your database instance requires a scale-out and verifies its performance in a real-world business scenario. This practice reduces the risk of failures after the changes are deployed. Additionally, if a database fails and you cannot locate the cause, you can use a cloned database to reproduce the failure scenario and better identify the cause.

## Prerequisites

-   Supported source databases:
    
    -   RDS MySQL
        
    -   PolarDB for MySQL
        
        **Note**
        
        PolarDB for MySQL Enterprise Edition single-node instances are not supported.
        
-   Supported destination database instances:
    
    -   RDS MySQL.
        
    -   PolarDB for MySQL.
        
    -   PolarDB-X 2.0.
        
-   The source and destination database instances are connected to DAS. For more information, see [Connect an Alibaba Cloud database instance to DAS](/help/en/das/user-guide/connect-an-alibaba-cloud-database-instance-to-das).
    
-   DAS Enterprise Edition V1 or later is enabled for the source database instance, and the SQL Explorer feature is enabled.
    
-   DAS Enterprise Edition V1 or later is enabled for the destination database instance, and the SQL Explorer feature is enabled. The storage duration for log indexes is 7 days.
    

## Scenarios

-   Check whether your database instance needs to be scaled up or scaled out to handle workloads during peak hours.
    
-   After the schema, especially the indexes, of a database is changed, check the performance of the database in real business scenarios to reduce the risk of failures.
    
-   After a database failure occurs, use this feature to recur the failure on a cloned database of the source database to identify the failure cause.
    

## Usage notes

-   To reduce the impact of network latency on stress testing, deploy the stress testing client and the destination instance in the same region.
    
    **Note**
    
    We recommend that you deploy the stress testing client and the destination instance in the same virtual private cloud (VPC).
    
-   Before you perform stress testing, check the connectivity between the stress testing client and the destination instance. Ensure that traffic can be sent from the client to the destination instance.
    

## Billing

-   For information about the fees for DAS Enterprise Edition, see [Billing](/help/en/das/product-overview/billing-overview/).
    
-   After you create a stress testing task, the following items are billed:
    
    -   If you select the **Restore By Backup** method for data migration, the system automatically creates a pay-as-you-go database instance based on your selected destination database type. The system also enables the latest DAS Enterprise Edition for the new instance, which includes a 30-day storage duration for SQL logs and a 7-day storage duration for log indexes.
        
    -   If you select **DAS Automatic Purchase and Deployment** in the **Advanced Settings** section, the system purchases a pay-as-you-go ECS instance of a suitable instance type. The instance type is determined by the queries per second (QPS) of the source database and the stress testing rate. For more information about fees, see [ECS billing overview](/help/en/ecs/instance-types#concept-1937440).
        
    
    **Note**
    
    Because the system purchases pay-as-you-go instances, you must delete them manually after the stress testing task ends to avoid unnecessary charges.
    

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  Navigate to the Traffic Playback and Stress Testing page.
    
    You can navigate to the Traffic Playback and Stress Testing page in one of the following ways.
    
    -   In the navigation pane on the left, click **Toolbox** **\>** **Traffic Playback And Stress Testing**.
        
    -   Navigate to the page from the instance details page.
        
        1.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
            
        2.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
            
        3.  In the navigation pane on the left, click **Request Analysis** **\>** **SQL Explorer and Audit**. Then, on the page that appears, click **Traffic Playback and Stress Test**.
            
3.  On the task list page, click **Create Task** in the upper-right corner.
    
4.  In the **Create Task** dialog box, set the following parameters.
    
    1.  Set **Task Type** to **Cloud Instance Playback** and enter a **Task Name**.
        
    2.  In the **Source Information** section, set the following parameters and click **Next**.
        
        **Configuration**
        
        **Description**
        
        **Instance Source**
        
        Select **Alibaba Cloud Database** as the source of the destination instance.
        
        **Database Engine**
        
        The type of your database instance. Select one of the following:
        
        -   **MySQL**: an RDS MySQL instance.
            
        -   **PolarDB for MySQL**: a PolarDB for MySQL instance.
            
        
        **Source Instance**
        
        Select the instance ID of the **Source Instance**.
        
        **Advanced Settings**
        
        **Batch Stress Testing**
        
        The task pauses after the preparation phase is complete. You can select multiple tasks in the task list to start the stress testing at the same time.
        
        **SQL Type**
        
        Select one or more SQL types to test.
        
        **Database Account**, **Password**
        
        The account and password of the source database.
        
        **Note**
        
        Click **Get Databases** to retrieve the database list. If you want to perform stress testing on all databases, you do not need to select any. If you want to test specific databases, you can select a maximum of five databases.
        
    3.  In the **Generation Method of Schema and Data of Destination Database** section, set the following parameters.
        
        **Configuration**
        
        **Description**
        
        **Database Engine**
        
        The type of the destination database instance. The following types are supported:
        
        -   **MySQL**: an RDS MySQL instance.
            
        -   **PolarDB for MySQL**: a PolarDB for MySQL instance.
            
        -   **PolarDB-X**: a PolarDB-X 2.0 instance.
            
            **Note**
            
            PolarDB-X 2.0 is supported only in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), and Singapore regions.
            
        
        **Benchmark Data Migration**
        
        Select one of the following four migration methods based on whether the benchmark data of the source instance has been migrated to the destination instance:
        
        -   **Restore by Backup**: The destination instance clones the source instance based on a point in time or a backup set.
            
            **Note**
            
            DAS automatically purchases a pay-as-you-go instance with the same instance type as the source instance and restores the backup to the new instance.
            
        -   **Data Migration Completed**: The table schema and data of the source instance within the traffic playback time period have been synchronized to the destination instance.
            
            **Note**
            
            The table schema and data of the destination instance must be consistent with the source instance to ensure that the stress testing traffic runs as expected.
            
        -   **Enter DTS Task ID**: A data migration task has been created in the [DTS console](https://dts.console.alibabacloud.com/#/home/) to synchronize data from the source instance to the destination instance.
            
            **Note**
            
            For more information about DTS data migration, see [Data Migration](/help/en/dts/product-overview/data-migration-4).
            
        -   **Create DTS Migration Task**: Directly create a data migration task without going to the [DTS console](https://dts.console.alibabacloud.com/#/home/).
            
        
        **Note**
        
        -   If the source instance is an Alibaba Cloud database, select one of the four methods. We recommend that you select **Restore by Backup**. After the stress testing task is created, the system automatically purchases a pay-as-you-go instance with the same instance type as the source database and restores the data to that instance.
            
        -   If the source instance is a self-managed database, you can only select **Data Migration Completed**, **Enter DTS Task ID**, or **Create DTS Migration Task**.
            
        
        **Restore Mode**
        
        Select a restore method. You can select one of the following methods as needed:
        
        -   **By Time Point**
            
        -   **By Backup Set**
            
        
        **Note**
        
        -   This parameter is required when **Benchmark Data Migration** is set to **Restore By Backup**.
            
        -   If you set **Restore Mode** to **By Backup Set**, you must grant permissions to the **DAS Service-linked Role**. In the dialog box that appears, click **OK**.
            
        
        **Select Restore Time**/**Backup Set**
        
        Select the specific time or backup set for restoration based on the **Restore Mode**.
        
        **Note**
        
        This parameter is required when **Benchmark Data Migration** is set to **Restore By Backup**.
        
        **Migration Task ID**
        
        The ID of the DTS data migration task that synchronizes data from the source instance to the destination instance.
        
        **Note**
        
        This parameter is required when **Benchmark Data Migration** is set to **Enter DTS Task ID**.
        
        **DTS Migration Task Specifications**
        
        Select the DTS migration task specifications.
        
        **Note**
        
        This parameter is required when **Benchmark Data Migration** is set to **Create DTS Migration Task**.
        
        **Destination Instance**
        
        Select the destination instance. The system accesses the primary endpoint of the destination instance by default.
        
        **Note**
        
        This parameter is required when **Benchmark Data Migration** is set to **Data Migration Completed**, **Enter DTS Task ID**, or **Create DTS Migration Task**.
        
        **Privileged Account of Destination Instance**
        
        The name and password of the privileged account for the destination instance.
        
        **Note**
        
        This parameter is required when **Benchmark Data Migration** is set to **Data Migration Completed**, **Enter DTS Task ID**, or **Create DTS Migration Task**.
        
        **Privileged Account of Source Instance**
        
        The name and password of the privileged account for the source instance.
        
        **Note**
        
        This parameter is required when **Benchmark Data Migration** is set to **Restore By Backup** or **Create DTS Migration Task**.
        
    4.  In the **Stress Testing Basic Settings** section, set the following parameters.
        
        **Configuration**
        
        **Description**
        
        **Select Playback Traffic**
        
        Select the time period for traffic playback.
        
        **Note**
        
        The [SQL Explorer and Audit](/help/en/das/user-guide/sql-explorer-and-audit-5/) feature must be enabled for the source instance during this time period.
        
        **Playback Speed**
        
        The rate at which the traffic from the source instance is replayed on the destination instance. For example, a value of 1 indicates the original speed. The playback rate must be a positive integer from 1 to 10.
        
        **Note**
        
        If the playback speed you set exceeds the maximum speed supported by the destination instance type, the stress testing task runs at the maximum supported speed.
        
    5.  In the **Advanced Settings** section, configure the **ECS that Deploys Stress Testing Program** parameter.
        
        -   You can select **DAS Automatic Purchase and Deployment**. The system then purchases a pay-as-you-go ECS instance of a suitable instance type based on the QPS of the source database and the stress testing rate.
            
        -   Alternatively, you can click **Add** to select an existing ECS instance for deploying the stress testing program. Then, generate the deployment command, copy it to the instance, and run it. You must also run the `sudo yum install -y java-1.8.0-openjdk` command on the selected ECS instance to deploy a Java client. We recommend that you use Java 8.
            
        
5.  Click **Next**.
    
6.  After the verification is successful, click **OK** to create the stress testing task.
    

## **View traffic playback and stress testing results**

1.  After the stress testing task is created, return to the task list page to view its details.
    
2.  In the **Actions** column on the right, you can perform the following operations:
    
    -   Click **Details** to go to the **Intelligent Stress Testing Details** page, where you can view the execution status and report of the stress testing task.
        
    -   To terminate the stress testing task early, click **Terminate**.
        
    -   Click **Delete** to delete the stress testing task.
        
    

## What to do next

-   When the stress testing task is complete, go to the **Intelligent Stress Testing Details** page. If you do not need to run another test, release the corresponding ECS and database instances to avoid unnecessary charges.
    
-   If you manually enabled the **SQL Explorer And Audit** feature for the source database, disable it after the stress testing is complete to avoid unnecessary charges. For more information, see [Disable SQL Explorer and Audit](/help/en/das/overview#section-02d-2u9-7ih).
    
-   To scale out your database instance for an upcoming short-term business peak, enable [automatic performance scaling](/help/en/das/user-guide/automatic-performance-scaling) or [scheduled Auto Scaling](/help/en/das/user-guide/scheduled-auto-scaling) based on the instance type.
    

## References

For more information, see Traffic Playback FAQ and Error Codes.
