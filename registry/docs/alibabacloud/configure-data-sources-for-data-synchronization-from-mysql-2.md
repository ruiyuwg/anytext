Before you synchronize data from MySQL to Hologres in real time, you can refer to the operations described in this topic to configure data sources. The configurations of data sources include network environments, whitelists, and permissions. You must configure a source MySQL data source and a destination Hologres data source.

## Prerequisites

Before you configure data sources, make sure that the following operations are performed:

-   Prepare data sources: A source MySQL data source and a destination Hologres data source are created.
-   Plan and prepare resources: An exclusive resource group for Data Integration is purchased and configured. For more information, see [Plan and configure resources](/help/en/doc-detail/203567.html#task-2010759).
-   Evaluate and plan the network environment: Before you perform data integration, you must select a network connection method based on your business requirements and use the method to connect the data sources to the exclusive resource group for Data Integration. After the data sources and the exclusive resource group for Data Integration are connected, you can refer to the operations described in this topic to configure access settings such as vSwitches and whitelists.
    -   If the data sources and the exclusive resource group for Data Integration reside in the same region and virtual private cloud (VPC), they are automatically connected.
    -   If the data sources and the exclusive resource group for Data Integration reside in different network environments, you must connect the data sources and the resource group by using methods such as a VPN gateway.

## Background information

Before you synchronize data from the source to the destination, make sure that the data sources and exclusive resource group for Data Integration are connected. In addition, you must create an account and authorize the account to access the data sources.

-   Configure whitelists for the data sources
    
    If the data sources and the exclusive resource group for Data Integration reside in the same VPC, you must add the CIDR block of the exclusive resource group for Data Integration to the whitelists of the data sources. This ensures that the exclusive resource group for Data Integration can be used to access the data sources. ![VPC connection](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5841300361/p201669.png)
    
-   Create an account and grant permissions to the account
    
    You must create an account that can be used to access the data sources, read data from the source, and write data to the destination during the data synchronization process.
    
-   Enable the binary logging feature
    
    If the source data source is a MySQL database, you must enable the binary logging feature. Binary logs record changes to all table schemas and modifications on table data. You can execute statements such as CREATE and ALTER to perform operations on table schemas. You can execute statements such as INSERT, UPDATE, and DELETE to perform operations on table data. You can use binary logs to view the change history of the database, back up incremental data and restore data in the database, and replicate data from the primary database to secondary databases.
    
    Formats of binary logs:
    
    -   Statement: SQL statement-based replication. Binary logs in this format record the SQL statements that are executed to modify data entries.
    -   Row: row-based replication. Binary logs in this format record only modification details about data entries in rows.
    -   Mixed: replication in mixed mode. This mode combines the statement and row formats. In most cases, binary logs in the statement format are used to record the SQL statements that are executed to modify data entries, such as functions. If data replication from the primary database to secondary databases cannot be implemented by using binary logs in this format, switch to the row format. MySQL determines which format to use based on each SQL statement that is executed.
    

## Limits

-   Real-time synchronization of data from MySQL is performed based on real-time subscription to MySQL binary logs. Real-time data synchronization from MySQL supports only ApsaraDB RDS for MySQL data sources that run MySQL `5.X` or `8.X`. Real-time data synchronization from MySQL does not support PolarDB-X 1.0 data sources that run MySQL. If you want to synchronize data from a PolarDB-X 1.0 data source that runs MySQL in real time, you can refer to [Add a DRDS data source](/help/en/dataworks/add-a-drds-data-source#task-2477623) to add a PolarDB-X 1.0 data source and configure a real-time synchronization node for the data source.
-   You cannot use the real-time synchronization feature to synchronize data on which XA ROLLBACK statements are executed. For transaction data on which XA PREPARE statements are executed, you can use the real-time synchronization feature to synchronize the data to a destination. If XA ROLLBACK statements are executed later on the data, the rollback changes to the data cannot be synchronized to the destination. If the tables that you want to synchronize contain tables on which XA ROLLBACK statements are executed, you must remove the tables on which XA ROLLBACK statements are executed and add the removed tables again to initialize full data in the source and synchronize incremental data.
-   If you add an ApsaraDB RDS for MySQL instance that belongs to a different Alibaba Cloud account from the current workspace to DataWorks as a MySQL data source and you configure a data synchronization node for the MySQL data source, you can use only an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828) to run the node. If you use the shared resource group for Data Integration to run the node, the resource group cannot access data in the MySQL data source.

## Procedure

1.  Configure a whitelist for the MySQL database.
    
    Add the CIDR block of the VPC in which the exclusive resource group resides to the whitelist of the MySQL database.
    
    1.  View and record the elastic IP address (EIP) and CIDR block of the exclusive resource group for Data Integration.
        
        1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
        2.  In the left-side navigation pane, click Resource Groups.
        3.  On the Exclusive Resource Groups tab, find the exclusive resource group for Data Integration and click View Information in the Actions column.
        4.  In the Exclusive Resource Groups dialog box, view and record the values of the EIPAddress and CIDR Blocks parameters.
        5.  On the Exclusive Resource Groups tab, find the exclusive resource group for Data Integration and click Network Settings in the Actions column.
        6.  On the VPC Binding tab of the page that appears, view and record the CIDR block of the vSwitch with which the exclusive resource group for Data Integration is associated.
        
    2.  Add the EIP and CIDR block of the exclusive resource group to the whitelist of the MySQL database.
2.  Create an account and grant permissions to the account.
    
    You must create an account to log on to the MySQL database. You must grant the `SELECT, REPLICATION SLAVE, and REPLICATION CLIENT` permissions to the account.
    
    1.  Create an account.
        
        For more information, see [Create an account to access a MySQL database](https://dev.mysql.com/doc/refman/8.0/en/create-user.html).
        
    2.  Grant permissions to the account.
        
        You can run the following command to grant permissions to the account. Alternatively, you can grant the `SUPER` permission to the account. Replace `Account for data synchronization` with the created account when you execute the specific statement.
        
        ```
        -- CREATE USER 'Account for data synchronization'@'%' IDENTIFIED BY 'Password'; // Create an account that is used to synchronize data and set a password so that you can use the account and password to access the database from a host. % indicates a host. 
        GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'Account for data synchronization'@'%'; // Grant the SELECT, REPLICATION SLAVE, and REPLICATION CLIENT permissions to the account. 
        ```
        
        `*.*` indicates that the synchronization account is granted the preceding permissions on all tables in all databases. You can also grant the preceding permissions on specified tables in the specified database to the synchronization account. For example, to grant the account the preceding permissions on the user table in the test database, execute the following statement: `GRANT SELECT, REPLICATION CLIENT ON test.user TO 'Account for data synchronization'@'%';`.
        
        **Note** The `REPLICATION SLAVE` permission is a global permission. You cannot grant this permission on specified tables in the specified database to the synchronization account.
        
3.  Enable the binary logging feature for the MySQL database.
    
    Perform the following steps to check whether the binary logging feature is enabled and to query the format of binary logs:
    
    -   Execute the following statement to check whether the binary logging feature is enabled:
        
        ```
        show variables like "log_bin";
        ```
        
        If ON is displayed in the returned result, the binary logging feature is enabled.
        
    -   If you use a secondary database to synchronize data, execute the following statement to check whether the binary logging feature is enabled:
        
        ```
        show variables like "log_slave_updates";
        ```
        
        If ON is displayed in the returned result, the binary logging feature is enabled for the secondary database.
        
    
    If the returned result is different from the preceding result, follow the instructions described in the MySQL documentation to enable the binary logging feature.
    
    Execute the following statement to view the format of binary logs:
    
    ```
    show variables like "binlog_format";
    ```
    
    Returned result:
    
    -   ROW: The format of binary logs is row.
    -   STATEMENT: The format of binary logs is statement.
    -   MIXED: The format of binary logs is mixed.
    

## What to do next

After the data sources are configured, the source, destination, and exclusive resource group for Data Integration are connected. Then, the exclusive resource group for Data Integration can be used to access the data sources. You can add the source and destination to DataWorks, and associate them with a data synchronization solution when you create the solution.

For more information about how to add a data source, see [Add a data source](/help/en/dataworks/add-a-data-source-2#task-2010758).
