A logical database consists of one or more physical databases and is designed to support sharding. This topic describes the definition and scenarios of logical databases.

## Definition

If you have a large amount of business data and requests, you need to implement sharding to balance the workload and ensure smooth scaling.

If the number of physical databases is greater than or equal to one, the following limits apply when you create a logical database:

Number of physical databases

Description

The number of physical databases is greater than one.

If the number of physical databases is greater than one, the number of databases and suffix of database names must meet the following requirements.

-   In most cases, the number of databases is a power of 2.
-   A database name is suffixed by \_xxxx. xxxx is a four-digit number, which starts from 0000 and increments by 1 for each database.

The number of physical databases is one.

If the number of databases is one, only a single database that has table partitions is configured as a logical database.

## Precautions

-   You can perform various operations on physical databases or logical databases. These operations include querying data in the SQL Console, designing schemas, and exporting or changing data. If you select logical databases, you can perform operations on table partitions or logical tables with ease. This means you can use a table partition or logical table as a single table in an SQL statement.
-   If you want to apply for permissions on data sources, you can apply for permissions on a logical database to gain access to all of the physical databases associated with the logical database.

## Scenarios

A logical database can be used in the following scenarios:

-   A single database that has table partitions.
-   A database that is sharded and has table partitions.
-   A database that is sharded and the tables are not partitioned.

## Configure a logical database

**Note** The data owner or database administrator (DBA) can configure logical databases.

In the top navigation bar of the Data Management console, click the ![search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8140172761/p541939.png) icon to search for the database that you want to configure in the database list. Find the database that you want to configure, move the pointer over More in the Actions column, and then click Configure Logical Database.
