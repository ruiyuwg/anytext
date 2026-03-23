In DataWorks, you can create various types of database nodes to develop SQL tasks, schedule them to run periodically, and integrate them with other jobs.

## Prerequisites

-   A RAM user is added to the workspace (optional).
    
    The RAM user you use for task development must be added to the workspace and granted the **Developer** or **Workspace Administrator** role. The Workspace Administrator role grants extensive permissions, so assign it with caution. For more information about adding members and granting permissions, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A DataWorks data source is created.
    
    -   Ensure that the **serverless resource group** for the data source has network connectivity. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source).
        
    -   Ensure that the data source is created using a **JDBC connection string**. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
        
    -   Ensure that the data source supports creating database nodes. For more information, see [Supported data sources](#ac57ac8e208t9).
        
-   You must create a database node before you can develop it. For more information, see [Create a node for a scheduled workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Step 1: Develop the database node**

1.  After you create a database node, you can start developing it.
    
    1.  Select a data source.
        
        In the **Select Data Source** drop-down list, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3089687371/p851393.png) to open the dialog box. In the dialog box, select the data source that you want to use for task development. If the data source you need is not available, click **Add Data Source** to add it.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3089687371/p853369.png)
        
        **Note**
        
        -   In a workspace in Standard mode, the list displays only data sources that are configured for both the development and production environments.
            
        -   Database nodes support only data sources created using a **JDBC connection string**.
            
        
    2.  Develop the SQL script.
        
        In the SQL editor, write SQL statements for your task. The following code provides a simple query example.
        
        ```
        SELECT * FROM your_table_name;  --Query the table.
        SELECT '${var}'; --Configure a placeholder parameter.
        ```
        
        **Note**
        
        You can write executable statements based on the SQL syntax supported by your configured data source.
        
    3.  Configure the resource group for debugging.
        
        Click **Run Configuration**. From the **Computing Resource** > **DataWorks Resource Group** drop-down list, select a serverless resource group with network connectivity to your data source.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3089687371/p853376.png)
        
        **Note**
        
        To access a data source in a public network or VPC, use a scheduling resource group that passes the connectivity test for the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    4.  Configure parameters for debugging.
        
        Click **Run Configuration**. In the **Script Parameter** section, you can assign values to the parameters configured in the node's script.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3089687371/p853377.png)
        
    5.  After you complete the configuration, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3089687371/p853378.png) to save the configured SQL node. Then, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3089687371/p853380.png) to run the SQL script and verify that it works as expected.
        
2.  After you finish debugging the SQL script, click **scheduling configuration** on the right side of the SQL editor to configure the node's schedule. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    

## **Step 2: Publish and maintain the node**

1.  After you configure scheduling, you can submit and publish the database node to the production environment. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
2.  After a task is published, it runs periodically according to its scheduling configuration. You can go to **Operations Center** > **Task O&M** > **Scheduled Task O&M** > **Scheduled Task** to view the task and perform maintenance operations. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## **Supported data sources**

DataWorks supports creating database nodes for the following data sources:

**Note**

-   Data sources for database nodes must be created using a **JDBC connection string**.
    
-   Some databases natively support stored procedures, but DataWorks script development does not currently support them.
    

**Supported data sources**

**Type**

**Description**

MySQL

MySQL is a relational database management system (RDBMS) used for storing and processing data. It is one of the most popular RDBMSs due to its small size, high speed, and low total cost of ownership. For more information, see [MySQL](https://dev.mysql.com/doc/refman/8.4/en/what-is.html).

SQL Server

SQL Server is a relational database management system (RDBMS) that provides reliable, efficient, and secure data management and analysis services. For more information, see [SQL Server](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16).

Oracle

Oracle is a relational database management system (RDBMS) that provides reliable, efficient, and secure data management and analysis services. For more information, see [Oracle](https://docs.oracle.com/en/database/oracle/oracle-database/index.html).

PostgreSQL

PostgreSQL is a powerful and flexible open-source relational database management system (RDBMS). It features a robust data model, high extensibility, stability, and a rich set of core functions. For more information, see [PostgreSQL](https://www.postgresql.org/docs/).

DRDS

DRDS is a distributed database service. It allows you to scale out a relational database horizontally into a distributed system, supporting massive data storage and access while preserving the features of a relational database such as MySQL. For more information, see [Product overview](/help/en/polardb/polardb-for-xscale/overview-79).

PolarDB MySQL

PolarDB for MySQL is a next-generation cloud-native database developed by Alibaba Cloud. It is built on a separation of compute and storage architecture and leverages hardware-software integration to provide a highly elastic, high-performance, and secure database service with massive storage. It is 100% compatible with the MySQL and PostgreSQL ecosystems and highly compatible with Oracle syntax. For more information, see [What is PolarDB for MySQL Enterprise Edition?](/help/en/polardb/polardb-for-mysql/what-is-polardb-for-mysql-enterprise-edition).

PolarDB PostgreSQL

The cloud-native database PolarDB for PostgreSQL is a relational database product developed by Alibaba Cloud. It is 100% compatible with PostgreSQL and highly compatible with Oracle syntax. It provides a fast, elastic, high-performance, and secure database service with massive storage. Additionally, it supports Alibaba Cloud's proprietary Ganos multi-model spatio-temporal information engine and the open-source PostGIS geospatial information engine. For more information, see [What is PolarDB for PostgreSQL Enterprise Edition?](/help/en/polardb/polardb-for-postgresql/what-is-polardb-pg-enterprise).

Doris

Apache Doris is a high-performance, real-time analytical database. It is well-suited for use cases such as reporting and analytics, ad hoc queries, and accelerated federated queries on data lakes. For more information, see [Introduction to Doris](https://doris.incubator.apache.org/docs/gettingStarted/what-is-apache-doris).

MariaDB

MariaDB is an open-source relational database management system (RDBMS) that is highly compatible with MySQL and can serve as a drop-in replacement. After you uninstall MySQL, you can install MariaDB in its place without changing your application code. For more information, see [MariaDB](https://mariadb.com/kb/en/documentation/).

SelectDB

SelectDB is a multi-cloud native real-time data warehouse built on Apache Doris. It is designed for enterprise-grade, real-time big data analysis and provides a cost-effective, easy-to-use data analysis service. For more information, see [SelectDB](https://docs.selectdb.com/cloud/getting-started/overview).

Redshift

Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. You can use Amazon Redshift Serverless to access and analyze data without provisioning a data warehouse. For more information, see [Amazon Redshift](https://docs.aws.amazon.com/zh_cn/redshift/latest/mgmt/welcome.html).

SAP HANA

SAP HANA is a high-performance in-memory database and application platform. It combines database, data processing, and application platform features to deliver enterprise-grade in-memory computing capabilities. For more information, see [SAP HANA](https://help.sap.com/docs/SAP_HANA_PLATFORM).

Vertica

Vertica is a high-performance, columnar storage database management system (DBMS) that can process and query large datasets at high speed. It is primarily used for big data analytics and real-time queries. For more information, see the [Vertica official website](https://www.vertica.com/).

DM

DM (Dameng) is an OLTP database for business systems. It combines the benefits of distributed architecture, elastic computing, and cloud computing to provide a flexible, easy-to-use, reliable, and secure solution. For more information, see the [DM (Dameng) official website](https://www.dameng.com/).

KingbaseES

KingbaseES is a large-scale relational database management system (RDBMS) that supports the SQL standard. It is designed for enterprise workloads that require large-scale data processing, high concurrency, and high availability (HA). For more information, see the [KingbaseES official website](https://www.kingbase.com.cn/).

OceanBase

OceanBase is a distributed relational database developed in-house by Ant Group and Alibaba Cloud. It provides strong data consistency, high availability (HA), high performance, online scalability, broad compatibility with the SQL standard and mainstream relational databases, and low cost. For more information, see [What is OceanBase Database?](/help/en/apsaradb-for-oceanbase/latest/what-is-oceanbase-database).

DB2

DB2 is a relational database management system (RDBMS) used to store, retrieve, and manage data. It is suitable for complex queries and transaction processing involving high throughput, large datasets, and data warehousing. For more information, see the [DB2 official website](https://www.ibm.com/products/db2-database).

GBase 8a

GBase 8a is a relational database management system (RDBMS) that supports large-scale data storage and high-concurrency read/write operations. It is commonly used in sectors such as government, finance, telecommunications, and energy. GBase 8a supports the SQL standard and provides enterprise-level features such as data partitioning, load balancing, disaster recovery, and backup. For more information, see the [GBase 8a official website](http://www.gbase.cn/).
