You can use the MySQL connector to query data in tables in an external MySQL instance and create tables in the instance. You can use the connector to join tables between two systems such as MySQL and Hive, or between two MySQL instances.

## Background information

This topic describes the information about the MySQL connector in the following sections:

-   [Configure the MySQL connector](#section-8td-bcz-lks)
    
-   [Data type mappings](#section-usw-llo-zgf)
    
-   [Example: Query MySQL data](#section-s4t-flk-zvr)
    
-   [Pushdown](#section-483-yo8-g6x)
    

## Prerequisites

-   A Hadoop or datalake cluster with the Trino service deployed is created, or a Trino cluster is created. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
-   An ApsaraDB RDS for MySQL instance is purchased. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    

## Limits

-   Only Hadoop or Trino clusters of E-MapReduce (EMR) V3.38.0 and later support the MySQL connector.
    
-   You can use the MySQL connector to connect only to an ApsaraDB RDS for MySQL instance that runs MySQL 5.7, 8.0, or later.
    
-   Make sure that the coordinator node and all the worker nodes of Trino can access MySQL. The default port is 3306.
    
-   The MySQL connector does not support the following SQL statements:
    
    -   DELETE
        
    -   GRANT
        
    -   REVOKE
        
    -   SHOW GRANTS
        
    -   SHOW ROLES
        
    -   SHOW ROLE GRANTS
        

## Configure the MySQL connector

Modify the configurations of the MySQL connector. For more information, see [Configure a connector](/help/en/emr/emr-on-ecs/user-guide/configure-a-connector#task-2234567).

### Default configurations of the connector

Log on to the EMR console. Go to the **Configure** tab of the Trino service. On the Configure tab, click the **mysql.properties** tab. Modify the configuration items based on your business requirements. The following table describes the configuration items.

**Configuration item**

**Description**

connection-url

The URL of the ApsaraDB RDS for MySQL database that you want to access. For more information, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb).

Example: jdbc:mysql://rm-2ze5ipacsu8265q\*\*\*\*.mysql.rds.aliyuncs.com:3306.

connection-user

The username that is used to access the database. Make sure that the account has the permissions to access tables in the database.

connection-password

The password of the account that is specified by the connection-user configuration item.

### Configure multiple MySQL services

If you want to connect to multiple MySQL services, you can create multiple configuration files in the etc/catalog directory. Make sure that the file names are different and the file name extension is .properties. For example, if you create a configuration file named sales.properties, Trino uses the connector configured in the file to create a catalog named sales.

### Example

If you want to connect to multiple MySQL services, you can add custom configuration items on the connector\[x\].properties tabs to configure connector properties for the MySQL services. In the name of each connector\[x\].properties tab, x indicates an integer that starts from 1. Perform the following steps:

1.  Log on to the EMR console. Go to the **Configure** tab of the Trino service. On the Configure tab, click the **mysql.properties** tab. Modify the **connection-user**, **connection-password**, and **connection-url** configuration items.
    
    You can also click **Add Configuration Item** in the upper part of the Configure tab to add custom configuration items. For more information, see the [Add configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items#section-st3-dhw-qnx) section of the "Manage configuration items" topic.
    
2.  Save the configurations.
    
    1.  In the lower part of the **Configure** tab, click **Save**.
        
    2.  In the dialog box that appears, configure the **Execution Reason** parameter and click **Save**.
        
3.  Restart the Trino service.
    
    1.  In the upper-right corner, choose **More** > **Restart**.
        
    2.  In the dialog box that appears, enter a reason in the **Execution Reason** field and click **OK**.
        
    3.  In the **Confirm** message, click **OK**.
        

## Data type mappings

### Processing of data of the DECIMAL type

To map the MySQL DECIMAL type whose precision is greater than 38 to the Trino DECIMAL type, you can specify the decimal\_mapping configuration property or set the session property of the decimal\_mapping configuration property to allow\_overflow. The scope of the resulting data type is determined by the decimal-default-scale or decimal-rounding-mode configuration property, and the precision is fixed as 38.

By default, values that require rounding or truncation for mapping result in a failure at runtime. The rounding mode is determined by the decimal-rounding-mode configuration property or the session property of the decimal-rounding-mode configuration property. You can set this configuration property to UNNECESSARY, UP, DOWN, CEILING, FLOOR, HALF\_UP, HALF\_DOWN, or HALF\_EVEN. The default value is UNNECESSARY.

### General configuration properties

You can configure the properties described in the following table to map the data types of a data source to the data types of Trino and cache metadata in Trino.

**Property**

**Description**

unsupported-type-handling

The method used to process columns whose data types are not supported. Valid values:

-   IGNORE: The columns are inaccessible. This is the default value.
    
-   CONVERT\_TO\_VARCHAR: The data types of the columns are converted into the unbounded VARCHAR type.
    

jdbc-types-mapped-to-varchar

Specifies whether to allow the forcible conversion of data that consists of elements separated by commas (,) into data of the unbounded VARCHAR type.

case-insensitive-name-matching

Specifies whether the names of databases and tables are case-sensitive. Valid values:

-   true: The names are not case-sensitive.
    
-   false: The names are case-sensitive. This is the default value.
    

case-insensitive-name-matching.cache-ttl

The cache time to live (TTL) of the database and table names that are not case-sensitive.

Default value: 1. Unit: minutes.

metadata.cache-ttl

The cache TTL of metadata, which includes the statistical information of tables and columns.

Default value: 0. A value of 0 indicates that metadata cannot be cached.

metadata.cache-missing

Specifies whether to cache the status of metadata, which includes the statistical information of tables and columns. Valid values:

-   true: The status is cached.
    
-   false: The status is not cached. This is the default value.
    

## Example: Query MySQL data

1.  View the information about your ApsaraDB RDS for MySQL database.
    
    1.  Log on to your cluster in SSH mode. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-a-cluster#task-2508490).
        
    2.  Run the following command to connect to the Trino client:
        
        -   DataLake cluster
            
            ```
            trino --server master-1-1:9090 --catalog iceberg --schema default
            ```
            
        -   Hadoop cluster or Trino cluster
            
            ```
            trino --server emr-header-1:9090 --catalog iceberg --schema default
            ```
            
        
    3.  Run the following command to view the schema:
        
        ```
        SHOW schemas FROM mysql;
        ```
        
        **Note**
        
        mysql is the name of the .properties configuration file.
        
    4.  Run the following command to view the database:
        
        ```
        SHOW tables FROM mysql.web;
        ```
        
        **Note**
        
        In this example, web is the name of your ApsaraDB RDS for MySQL database.
        
2.  Query data in a table.
    
    -   Execute the following statement to query data in the mysql.web.clicks table:
        
        ```
        SELECT * FROM mysql.web.clicks
        ```
        
    -   Execute the following statement to query the information about the columns in the mysql.web.clicks table:
        
        ```
        SHOW columns FROM mysql.web.clicks;
        ```
        
        You can also execute the following statement to query the information about the columns:
        
        ```
        DESCRIBE mysql.web.clicks;
        ```
        
    

## Pushdown

For more information about the pushdown feature, see [Pushdown](https://trino.io/docs/current/optimizer/pushdown.html#join-pushdown) in official Trino documentation.

The MySQL connector supports the pushdown feature for the following operators and functions:

-   Operators
    
    -   Join
        
    -   Limit
        
    -   Top-N
        
-   Functions
    
    -   avg()
        
    -   count()
        
    -   max()
        
    -   min()
        
    -   sum()
        
    -   stddev()
        
    -   stddev\_pop()
        
    -   stddev\_samp()
        
    -   variance()
        
    -   var\_pop()
        
    -   var\_samp()
