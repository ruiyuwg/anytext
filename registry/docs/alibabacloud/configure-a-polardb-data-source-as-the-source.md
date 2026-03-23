If you want to synchronize data from PolarDB to Hologres, the source is PolarDB, and the destination is Hologres. Before you run a data synchronization task, you must refer to the operations in this topic to prepare the configurations, such as network environments and whitelists, for both the source and destination.

## Prerequisites

Before you configure a data source, make sure that the following operations are performed:

-   Prepare data sources: A PolarDB for MySQL cluster and a Hologres instance are created. In this topic, a PolarDB for MySQL cluster is used as the source.
-   Plan and prepare resources: An exclusive resource group for data integration is purchased and configured. For more information, see [Plan and configure resources](/help/en/doc-detail/203567.html#task-2010759).
-   Evaluate and plan the network environment: Before you perform data integration, you must select a network connection method based on your business requirements and use the method to connect the data sources to the exclusive resource group for Data Integration. After the data sources and the exclusive resource group for Data Integration are connected, you can refer to the operations described in this topic to configure access settings such as vSwitches and whitelists.
    -   If the data sources and the exclusive resource group for Data Integration reside in the same region and virtual private cloud (VPC), they are automatically connected.
    -   If the data sources and the exclusive resource group for Data Integration reside in different network environments, you must connect the data sources and the resource group by using methods such as a VPN gateway.

## Background information

Before you synchronize data from the source to the destination, make sure that the data sources and the exclusive resource group for Data Integration are connected. In addition, you must create an account and authorize the account to access the data sources.

-   Configure whitelists for the data sources
    
    If the data sources and the exclusive resource group for Data Integration reside in the same VPC, you must add the CIDR block of the exclusive resource group for Data Integration to the whitelists of the data sources. This ensures that the exclusive resource group for Data Integration can be used to access the data sources. ![VPC connection](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5841300361/p201669.png)
    
-   Create an account and grant permissions to the account
    
    You must create an account that can be used to access the data sources, read data from the source, and write data to the destination during the data synchronization process.
    
-   Enable the binary logging feature
    
    If the source is a PolarDB for MySQL cluster, you must enable the binary logging feature for the cluster. PolarDB for MySQL is fully compatible with MySQL and uses high-level physical logs to replace binary logs. To facilitate the integration between PolarDB and the MySQL ecosystem, you can enable the binary logging feature for PolarDB clusters.
    

## Limits

-   Only PolarDB for MySQL clusters can be used as sources in data synchronization solutions. Other types of PolarDB data sources are not supported. In this topic, PolarDB indicates PolarDB for MySQL data sources.
-   Only data stored on the primary node of a PolarDB for MySQL cluster can be synchronized.
-   You cannot use the real-time synchronization feature to synchronize data on which XA ROLLBACK statements are executed. For transaction data on which XA PREPARE statements are executed, you can use the real-time synchronization feature to synchronize the data to a destination. If XA ROLLBACK statements are executed later on the data, the rollback changes to the data cannot be synchronized to the destination. If the tables that you want to synchronize contain tables on which XA ROLLBACK statements are executed, you must remove the tables on which XA ROLLBACK statements are executed and add the removed tables again to initialize full data in the source and synchronize incremental data.

## Procedure

1.  Configure a whitelist for the PolarDB for MySQL cluster.
    
    To add the CIDR block of the VPC where the exclusive resource group for Data Integration resides to a whitelist of the PolarDB for MySQL cluster, perform the following steps:
    
    1.  View and record the elastic IP address (EIP) and CIDR block of the exclusive resource group for Data Integration.
        
        1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
        2.  In the left-side navigation pane, click Resource Groups.
        3.  On the Exclusive Resource Groups tab, find the exclusive resource group for Data Integration and click View Information in the Actions column.
        4.  In the Exclusive Resource Groups dialog box, view and record the values of the EIPAddress and CIDR Blocks parameters.
        5.  On the Exclusive Resource Groups tab, find the exclusive resource group for Data Integration and click Network Settings in the Actions column.
        6.  On the VPC Binding tab of the page that appears, view and record the CIDR block of the vSwitch with which the exclusive resource group for Data Integration is associated.
        
    2.  Add the EIP and CIDR blocks recorded in the preceding steps to the whitelist of the PolarDB for MySQL cluster.
        
        ![Whitelist of the PolarDB cluster](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628330161/p201705.png)For more information, see [Configure an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist#task-1580301).
        
2.  Create an account and grant the required permissions to the account.
    
    You must create an account to log on to the database of the PolarDB for MySQL cluster. You must grant the `SELECT, REPLICATION SLAVE, and REPLICATION CLIENT` permissions to the account.
    
    1.  Create an account.
        
        For more information, see [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301).
        
    2.  Grant the required permissions to the account.
        
        You can run the following command to grant the required permissions to the account, or you can directly assign the `SUPER` role to the account.
        
        ```
        -- CREATE USER 'Account for data synchronization'@'%' IDENTIFIED BY 'Account for data synchronization';
        GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'Account for data synchronization'@'%';
        ```
        
3.  Enable the binary logging feature for the PolarDB for MySQL cluster.
    
    For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).
    

## What to do next

After the data sources are configured, the source, destination, and exclusive resource group for Data Integration are connected. Then, the exclusive resource group for Data Integration can be used to access the data sources. You can add the source and destination to DataWorks, and associate them with a data synchronization solution when you create the solution.

For more information about how to add a data source, see [Add a data source](/help/en/dataworks/add-a-data-source-2#task-2010758).
