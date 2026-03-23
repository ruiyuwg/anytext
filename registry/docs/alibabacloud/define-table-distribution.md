This topic describes how to select table distribution schemes in AnalyticDB for PostgreSQL.

## Selection of table distribution schemes

AnalyticDB for PostgreSQL supports three table distribution schemes: hash distribution, random distribution, and replicated distribution.

```
CREATE TABLE <table_name> (...) [ DISTRIBUTED BY (<column>  [,..] ) | DISTRIBUTED RANDOMLY | DISTRIBUTED REPLICATED ]
```

**Note** AnalyticDB for PostgreSQL V4.3 supports only hash distribution and random distribution. Replicated distribution is a new feature in AnalyticDB for PostgreSQL V6.0.

The `CREATE TABLE` statement supports the following clauses that specify table distribution schemes:

Distribution scheme

Description

Hash distribution

`DISTRIBUTED BY (column, [ ... ])`

Data rows are distributed across compute nodes based on the hash values of the distribution column values. Rows with identical hash values are assigned to the same compute node. To ensure that data is evenly distributed across compute nodes, we recommend that you use a unique key as the distribution key, such as the primary key.

The default table distribution scheme of AnalyticDB for PostgreSQL is hash distribution. If you do not specify a DISTRIBUTED clause when you create a table, the table uses its primary key or the first key that the system considers suitable as the distribution key. If no suitable distribution key is identified, the system uses random distribution.

Random distribution

`DISTRIBUTED RANDOMLY`

Data rows are evenly distributed across all compute nodes by using a round-robin algorithm. Rows with identical hash values may be assigned to different compute nodes.

We recommend that you use random distribution only if a table contains no columns that are suitable for implementing hash distribution.

Replicated distribution

`DISTRIBUTED REPLICATED`

Each compute node stores a copy of the full table data.

If large tables are frequently joined with small tables in your use cases, you can specify replicated distribution for small tables to increase join performance.

Examples:

-   Hash distribution
    
    ```
    CREATE TABLE products (name varchar(40), 
                           prod_id integer,
                           supplier_id integer)
                           DISTRIBUTED BY (prod_id);                
    ```
    
-   Random distribution
    
    ```
    CREATE TABLE random_stuff (things text,
                               doodads text,
                               etc text)
                               DISTRIBUTED RANDOMLY;
    ```
    
-   Replicated distribution
    
    ```
    CREATE TABLE replicated_stuff (things text,
                               doodads text,
                               etc text)
                               DISTRIBUTED REPLICATED;
    ```
    

For queries that filter data based on a limited number of values of the distribution key, AnalyticDB for PostgreSQL can involve only the nodes that store the rows containing the values. For example, if you query data from a table named products that uses prod\_id as the distribution key, the following query is sent only to the compute node that contains the row whose `prod_id` value is 101. This increases your query performance.

```
select * from products where prod_id = 101;
```

## Selection of distribution keys

To increase query performance, we recommend that you choose the table distribution key based on the following rules:

-   Choose the columns in which data is evenly distributed. Otherwise, data skew may occur, where some compute nodes contain much more data than the others. This leads to heightened loads on the compute nodes and prolonged response times. Therefore, we recommend that you do not choose distribution columns of the Boolean, time, or date type.
-   Choose the columns whose values are frequently used as query conditions. This allows AnalyticDB for PostgreSQL to filter compute nodes based on the distribution key before it sends query requests to them.
-   The distribution key can be set to more than one columns. Example:
    
    ```
    create table t1(c1 int, c2 int) distributed by (c1,c2);
    ```
    
-   We recommend that you do not choose random distribution, because it does not support collocated joins or compute node filtering.
-   Choose a distribution column that is frequently used for joining tables, so that **collocated joins** can be implemented, as shown in the following figures. If the join key is the same as the distribution key, the join can be completed within the relevant compute nodes without data movement. If the distribution key is different from the join key in a query, the system must perform a **redistribute motion** or a **broadcast motion** before it can join the tables. Both redistributed and broadcast joins cause heavier network overheads than a collocated join.

![Collocated join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1291511361/p292094.png)![Redistributed join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1291511361/p292095.png)![Broadcast join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1291511361/p292096.png)

## Limits on distribution keys

-   A column that is defined as the distribution key of a table cannot be updated.
-   The distribution key of a table must be part of the primary key or a unique key. Example:
    
    ```
    create table t1(c1 int, c2 int, primary key (c1)) distributed by (c2);
    ```
    
    **Note** In this example, the primary key c1 does not include the distribution key c2. As a result, the execution of the statement fails and the system reports the following error:
    
    ```
    ERROR: PRIMARY KEY and DISTRIBUTED BY definitions incompatible
    ```
    
-   A column of the Geometry or any custom data type cannot be used as the distribution key of a table.

## Troubleshooting for data skew

If you identify poor query performance on a specific table, check whether an inappropriate distribution key is specified. Example:

```
create table t1(c1 int, c2 int) distributed by (c1);
```

Execute the following statement to check the number of rows distributed to each compute node.

```
select gp_segment_id,count(1) from  t1 group by 1 order by 2 desc;
 gp_segment_id | count  
---------------+--------
             2 | 131191
             0 |     72
             1 |     68
(3 rows)
```

If some compute nodes store significantly more rows than the others, data skew exists. In this case, change the distribution key to a column that has evenly distributed data. Execute the following `ALTER TABLE` statement to specify the c2 column as the distribution key:

```
alter table t1 set distributed by (c2);
```

The distribution key of the t1 table is changed to the c2 column. After the t1 table is redistributed based on the c2 column, its data is no longer skewed.
