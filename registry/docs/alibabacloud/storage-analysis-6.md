Database Autonomy Service (DAS) provides the storage analysis feature. You can use this feature to view the storage usage of a database instance and the number of days for which the remaining storage space of the database instance is available. You can also view information about the usage, fragments, and anomaly diagnosis results of a tablespace in a database. This topic provides an example to describe how to use the storage analysis feature. In this example, an ApsaraDB RDS for MySQL instance is used.

## Prerequisites

The following types of database services are supported:

-   ApsaraDB RDS for MySQL, PolarDB for MySQL, ApsaraDB MyBase for MySQL, and self-managed MySQL databases
    
-   ApsaraDB for MongoDB and self-managed MongoDB databases
    
-   ApsaraDB RDS for PostgreSQL and PolarDB for PostgreSQL databases
    
-   PolarDB for PostgreSQL (Compatible with Oracle) databases
    
-   PolarDB-X 2.0 databases
    

## Usage notes

You can use the storage analysis feature to analyze up to 20,000 tables.

## View the storage analysis results of a single database instance

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
    
3.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
    
4.  In the left-side navigation pane, click **Storage Analysis**.
    
5.  On the **Storage Overview** and **Data Space** tabs, view the storage usage of the database instance.
    
    **Tab**
    
    **Section**
    
    **Description**
    
    **Storage Overview**
    
    **Storage**
    
    You can view the storage information collected in the following dimensions: **Exception**, **Daily Growth within Seven Days**, **Available Days of Storage**, and **Used Storage**.
    
    **Note**
    
    You can click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2814492961/p704941.png) icon next to a dimension to view the detailed information.
    
    **Exceptions**
    
    You can view the exception information about tables or collections in the database instance. If the automatic space optimization feature is enabled for the database instance, you can also view the space optimization history.
    
    DAS can identify the following exceptions:
    
    -   **Potential auto-increment primary key overflows**: DAS can automatically identify potential overflows of auto-increment primary keys in ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
        
    -   **Duplicate indexes**: DAS can automatically identify duplicate indexes in ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
        
    -   **Tablespace fragments**: For more information, see [Automatic tablespace fragment recycling](/help/en/das/user-guide/automatic-tablespace-fragment-recycling#task-2024282).
        
    
    **Storage Trend**
    
    You can view the usage trend within the specified time range.
    
    **Note**
    
    The time range can be up to seven days.
    
    **Tablespaces**
    
    You can view the detailed information and storage usage of each table in the database instance. Click the name of a table to view the **Field** and **Index** values of the table.
    
    **Data Space**
    
    You can view the storage usage of each database in the RDS instance and the storage usage of tables in the database.
    
    Click the name of a table to view the **Field** and **Index** values of the table.
    

## View global storage usage

If you use DAS to manage multiple database instances, you can view the storage usage of the database instances by engine on different tabs on the **Global Storage Usage** page. This helps you find the database instance that has the highest storage usage.

**Note**

The **Global Storage Usage** page displays the storage usage of the following types of database instances:

-   ApsaraDB RDS for MySQL instances
    
-   Self-managed MySQL databases
    
-   ApsaraDB for MongoDB instances
    
-   Self-managed MongoDB databases
    

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Tools** > **Storage Analysis**.
    
3.  On the **Global Storage Usage** page, view the storage usage of the database instances by engine on different tabs.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0879311561/p171026.png)
    
    **Self-managed databases** that are connected to DAS by using the **Direct Access** or **Centralized DBGateway** method are not displayed on the **Global Storage Usage** page because DAS cannot collect their storage data.
    
    **Note**
    
    Self-managed databases can be connected to DAS by using the following methods. For more information about how to connect self-managed databases to DAS, see [Connect a database instance to DAS](/help/en/das/getting-started/access-instances#multiTask398).
    
    -   **Direct Access**: Self-managed databases are directly connected to DAS after the database accounts and passwords are entered.
        
    -   **Centralized DBGateway**: Self-managed databases are connected to DAS by using DBGateway in centralized mode.
