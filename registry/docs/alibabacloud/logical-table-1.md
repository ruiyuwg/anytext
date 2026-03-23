If you have a large amount of business data and requests, you need to implement sharding to balance the workload and ensure smooth scaling. This topic describes the definition and scenarios of logical tables, and how to configure a logical table.

## Precautions

-   You must perform operations on a logical table in the corresponding logical database.
    
    **Note** You can use a logical table as a single table.
    
-   You can perform various operations on logical tables. These operations include querying data in the SQL Console, and exporting or changing data.
-   If you want to apply for permissions on data sources, you can apply for permissions on a logical database to gain access to all of the physical databases associated with the logical database.

## Scenarios

-   A single physical database that has table partitions.
-   A database that is sharded and has table partitions, which is the most common scenario.
    
    **Note**
    
    -   Physical tables are evenly divided by the number of physical databases. The suffix of a table increments by 1 for each new physical table that is added to a physical database.
    -   The names of physical tables that are distributed to each database are the same. For example, each database has 12 tables that are numbered from 1 to 12.
    
-   A database that is sharded and the tables are not partitioned. The same physical table has the same name on each database shard.

## Definition

If you have a large amount of business data and requests, you need to implement sharding to balance the workload and ensure smooth scaling.

If the number of physical tables is greater than one, the tables are evenly divided among the logical databases. The following rules apply when you create logical tables:

-   In most cases, the number of physical tables is a power of 2.
-   A table name is suffixed by \_xxxx. xxxx is a four-digit number, which starts from 0000 and increments by 1 for each table.
-   The number of tables must be evenly divided by the number of databases. For example, if the number of tables is 1,024 and the number of databases is 32, 32 physical tables are distributed to each database. If the number of tables is 1,024 and the number of databases is 33, these tables cannot be evenly divided. Therefore, no logical table can be created.

## Configure a logical table

-   Automatic configuration
    
    After you configure a logical database, Data Management (DMS) creates logical tables based on the schemas of physical tables in the logical database. The following rules apply when DMS creates a logical table:
    
    -   A physical table can be specified in the configuration of only one logical table.
    -   All physical tables that correspond to the same logical table must have the same schemas (including the column names and column types). Otherwise, the physical tables cannot be aggregated. The benefit of this rule is that users can be alerted when data inconsistencies occur.
    
    **Note** After you configure a logical database, we recommend that you do not change the configurations unless the change is necessary.
    
-   Manual configuration
    
    To configure a logical table manually, find the logical database that you want to manage in the Logical Database result list, move the pointer over More in the Actions column, and then click Re-extract Table.
    

## FAQ

-   Q: A logical table already exists in the logical database, and I do not need to create a physical table. However, I cannot find the logical table in the table list of the logical database. What can I do?
-   A: In the top navigation bar of the Data Management console, click the ![search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2450172761/p541940.png) icon to go to the Global Search page. Find the logical database that you want to view, move the pointer over More in the Actions column, and then click Re-extract Table.
