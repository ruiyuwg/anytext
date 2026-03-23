If your tables frequently require \`GROUP BY\` or \`JOIN\` operations, or if you want to prevent data skew, you can set a distribution key when you create a table. A suitable distribution key distributes data evenly across all compute nodes, which can significantly improve computing and query performance. This topic describes how to set a distribution key for a table in Hologres.

## Introduction to distribution keys

In Hologres, the distribution key property specifies the data distribution policy for a table. The system ensures that records with the same distribution key are allocated to the same shard. The syntax for setting a distribution key when you create a table is as follows:

```
-- Syntax supported by Hologres V2.1 and later
CREATE TABLE <table_name> (...) WITH (distribution_key = '[<columnName>[,...]]');

-- Syntax supported by all versions
BEGIN;
CREATE TABLE <table_name> (...);
call set_table_property('<table_name>', 'distribution_key', '[<columnName>[,...]]');
COMMIT;
```

The following table describes the parameters.

**Parameter**

**Description**

table\_name

The name of the table for which you want to set a distribution key.

columnName

The name of the field that you want to set as the distribution key.

The distribution key is a critical concept in distributed systems. A properly configured distribution key provides the following benefits:

-   Significantly improves computing performance.
    
    Shards can compute in parallel to improve computing performance.
    
-   Significantly improves queries per second (QPS).
    
    When you use the distribution key as a filter condition, Hologres can scan only the relevant shards. Otherwise, Hologres must scan all shards, which reduces the QPS.
    
-   Significantly improves JOIN performance.
    
    If two tables are in the same table group and their \`JOIN\` field is the distribution key, the data distribution ensures that corresponding data from both tables is located in the same shard. This allows a Local Join to be performed on the data within each node, which significantly improves execution efficiency.
    

## Usage suggestions

Follow these principles when you set a distribution key:

-   Choose a field with an even data distribution as the distribution key. Otherwise, data skew can cause load imbalance and reduce query efficiency. For more information about how to check for data skew, see [View worker skew relationships](/help/en/hologres/user-guide/query-the-shard-allocation-among-workers#task-2255914).
    
-   Choose a field that is frequently used in `GROUP BY` clauses as the distribution key.
    
-   In \`JOIN\` scenarios, set the \`JOIN\` field as the distribution key to enable Local Join and avoid data shuffle. The tables that you join must be in the same table group.
    
-   Do not set too many fields as the distribution key. We recommend that you use no more than two fields. If you set multiple fields as the distribution key, data shuffle may occur if a query does not hit all the fields. Avoid using a composite distribution key where the column values are identical. This causes all data to be distributed to a single shard, resulting in data skew.
    
-   You can set one or more columns as the distribution key. If you specify multiple columns, separate them with commas (,). The order of columns does not affect the data layout or query performance when you specify multiple columns as the distribution key.
    
-   If a table has a primary key (PK), the distribution key must be the PK or a subset of the PK fields. The distribution key cannot be empty. You must specify at least one column. If you do not specify a distribution key, the PK is used as the distribution key by default.
    

## Limits

-   You must set the distribution key when you create a table. To modify the distribution key, you must recreate the table and import the data.
    
-   You cannot modify the values in the Distribution Key column. To change them, you must recreate the table.
    
-   You cannot set fields of the Float, Double, Numeric, Array, JSON, or other complex data types as the distribution key.
    
-   If a table does not have a PK, the distribution key can be empty, which means no columns are specified. If the distribution key is empty, data is randomly shuffled and distributed across different shards. Starting from Hologres V1.3.28, the distribution key cannot be empty. The following example shows the syntax that is no longer supported.
    
    ```
    --Starting from V1.3.28, this syntax is prohibited.
    CALL SET_TABLE_PROPERTY('<tablename>', 'distribution_key', '');
    ```
    
-   If a distribution key column contains a `null` value, the value is treated as an empty string (`""`) for hashing purposes.
    

## Technical principles

The Distribution Key specifies the distribution policy for a table. The appropriate policy depends on the business scenario.

### Set a distribution key

After you set a distribution key for a table, data is allocated to each shard based on the distribution key. The algorithm is `Hash(distribution_key)%shard_count`. The result of this calculation determines the target shard for a record. The system ensures that records with the same distribution key are allocated to the same shard. The following examples show how to set a distribution key.

-   Syntax for creating a table (supported by Hologres V2.1 and later):
    
    ```
    --Set column a as the distribution key. The system performs a hash operation on the values in column a and then a modulo operation. The formula is hash(a) % shard_count = shard_id. Data with the same result is distributed to the same shard.
    CREATE TABLE tbl (
        a int NOT NULL,
        b text NOT NULL
    )
    WITH (
        distribution_key = 'a'
    );
    
    --Set columns a and b as the distribution key. The system performs a hash operation on the values in columns a and b and then a modulo operation. The formula is hash(a,b) % shard_count = shard_id. Data with the same result is distributed to the same shard.
    CREATE TABLE tbl (
        a int NOT NULL,
        b text NOT NULL
    )
    WITH (
        distribution_key = 'a,b'
    );
    ```
    
-   Syntax for creating a table (supported by all versions):
    
    ```
    --Set column a as the distribution key. The system performs a hash operation on the values in column a and then a modulo operation. The formula is hash(a) % shard_count = shard_id. Data with the same result is distributed to the same shard.
    begin;
    create table tbl (
    a int not null,
    b text not null
    );
    call set_table_property('tbl', 'distribution_key', 'a');
    commit;
    
    --Set columns a and b as the distribution key. The system performs a hash operation on the values in columns a and b and then a modulo operation. The formula is hash(a,b) % shard_count = shard_id. Data with the same result is distributed to the same shard.
    begin;
    create table tbl (
      a int not null,
      b text not null
    );
    call set_table_property('tbl', 'distribution_key', 'a,b');
    commit;
                                
    ```
    

The following figure shows the data distribution.![设置distribution key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0837526761/p529866.png)When you set a distribution key, make sure that the data in the specified field is evenly distributed. The number of shards in Hologres is related to the number of worker nodes. For more information, see [Terms](/help/en/hologres/user-guide/basic-concepts#concept-2172430). If you set a field with uneven data distribution as the distribution key, data becomes concentrated in a few shards. This causes most of the computation to be performed by a few worker nodes, which can lead to a long-tail effect and reduce query efficiency. For more information about how to troubleshoot and handle data skew, see [View worker skew relationships](/help/en/hologres/user-guide/query-the-shard-allocation-among-workers#task-2255914).

### Do not set a distribution key

If you do not set a Distribution Key, data is randomly distributed across all shards. This means that identical records may be stored in the same shard or in different shards. The following is an example.

```
--Do not set a distribution key.
begin;
create table tbl (
a int not null,
b text not null
);
commit;
```

The following figure shows the data distribution.![不设置distribution key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0837526761/p529859.png)

### Set a distribution key for GROUP BY aggregation scenarios

In \`GROUP BY\` aggregation scenarios, if the grouped field is not the distribution key, data must be redistributed during computation. Therefore, you can set a field that is frequently used in \`GROUP BY\` clauses as the distribution key. This way, data is already aggregated within shards, which reduces data redistribution between shards and improves query performance. The following example shows how to set a distribution key for a \`GROUP BY\` aggregation scenario.

-   Syntax for creating a table (supported by Hologres V2.1 and later):
    
    ```
    CREATE TABLE agg_tbl (
        a int NOT NULL,
        b int NOT NULL
    )
    WITH (
        distribution_key = 'a'
    );
    
    --Example query: Perform an aggregate query on column a.
    select a,sum(b) from agg_tbl group by a;
    ```
    
-   Syntax for creating a table (supported by all versions):
    
    ```
    begin;
    create table agg_tbl (
    a int not null,
    b int not null
    );
    call set_table_property('agg_tbl', 'distribution_key', 'a');
    commit;
    
    --Example query: Perform an aggregate query on column a.
    select a,sum(b) from agg_tbl group by a;
    ```
    

View the execution plan by running the \`EXPLAIN SQL\` statement. The execution plan result does not contain the `redistribution` operator. This indicates that data is not redistributed.![QUERY PLAN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8888515761/p529875.png)

#### Set a distribution key for two-table join scenarios

-   Set the JOIN fields of two tables as the distribution key
    
    In a two-table join scenario, if you set the \`JOIN\` field of each table as its distribution key, data with the same \`JOIN\` field value is distributed to the same shard. This enables a Local Join and accelerates queries. The following example shows how to set the \`JOIN\` fields as distribution keys.
    
    -   DDL statements for creating tables.
        
        -   Syntax for creating a table (supported by Hologres V2.1 and later):
            
            ```
            --tbl1 is distributed by column a, and tbl2 is distributed by column c. When tbl1 and tbl2 are joined on the condition a=c, the corresponding data is distributed in the same shard. This query can be accelerated by a Local Join.
            BEGIN;
            CREATE TABLE tbl1 (
                a int NOT NULL,
                b text NOT NULL
            )
            WITH (
                distribution_key = 'a'
            );
            CREATE TABLE tbl2 (
                c int NOT NULL,
                d text NOT NULL
            )
            WITH (
                distribution_key = 'c'
            );
            COMMIT;
            ```
            
        -   Syntax for creating a table (supported by all versions):
            
            ```
            --tbl1 is distributed by column a, and tbl2 is distributed by column c. When tbl1 and tbl2 are joined on the condition a=c, the corresponding data is distributed in the same shard. This query can be accelerated by a Local Join.
            begin;
            create table tbl1(
            a int not null,
            b text not null
            );
            call set_table_property('tbl1', 'distribution_key', 'a');
            
            create table tbl2(
            c int not null,
            d text not null
            );
            call set_table_property('tbl2', 'distribution_key', 'c');
            commit;
                                                
            ```
            
        
    -   Query statement.
        
        ```
        select * from tbl1  join tbl2 on tbl1.a=tbl2.c;
        ```
        
    
    The following figure shows the data distribution.![两表关联join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0573448761/p529887.png)View the execution plan by running the \`EXPLAIN SQL\` statement. The execution plan result does not contain the `redistribution` operator. This indicates that data is not redistributed.![join执行计划](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8888515761/p529890.png)
    
-   When the JOIN fields are not used as distribution keys for both tables
    
    In a two-table join scenario, if the \`JOIN\` field of each table is not set as its distribution key, data is shuffled across shards during the query. The execution plan determines whether to perform a shuffle or a broadcast based on the sizes of the two tables. In the following example, the distribution key for `tbl1` is field `a`, and the distribution key for `tbl2` is field `d`. The \`JOIN\` condition is `a=c`. The data in field `c` is shuffled across each shard, which reduces query efficiency.
    
    -   DDL statements for creating tables.
        
        -   Syntax for creating a table (supported by Hologres V2.1 and later):
            
            ```
            BEGIN;
            CREATE TABLE tbl1 (
                a int NOT NULL,
                b text NOT NULL
            )
            WITH (
                distribution_key = 'a'
            );
            CREATE TABLE tbl2 (
                c int NOT NULL,
                d text NOT NULL
            )
            WITH (
                distribution_key = 'd'
            );
            COMMIT;
            ```
            
        -   Syntax for creating a table (supported by all versions):
            
            ```
            begin;
            create table tbl1(
            a int not null,
            b text not null
            );
            call set_table_property('tbl1', 'distribution_key', 'a');
            create table tbl2(
            c int not null,
            d text not null
            );
            call set_table_property('tbl2', 'distribution_key', 'd');
            commit;
            ```
            
        
    -   Query statement.
        
        ```
        select * from tbl1  join tbl2 on tbl1.a=tbl2.c;
        ```
        
    
    The following figure shows the data distribution.![2个表join且distribution key不一致](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0837526761/p529902.png)View the execution plan by running the \`EXPLAIN SQL\` statement. The execution plan result contains the `redistribution` operator. This indicates that data is redistributed and the distribution key is not properly set. You should consider resetting the distribution key.![distribution key执行计划](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8888515761/p529904.png)
    

### Set a distribution key for multi-table join scenarios

Multi-table join scenarios are complex. You can follow these principles:

-   If the \`JOIN\` fields of all tables are the same, set the \`JOIN\` field of each table as its distribution key.
    
-   If the \`JOIN\` fields of the tables are different, prioritize the \`JOIN\` between large tables. Set the \`JOIN\` fields of the large tables as their distribution keys.
    

The following examples describe several cases. This topic uses a three-table join as an example. The same principles apply to joins that involve more than three tables.

-   Case 1: The JOIN fields of all three tables are the same
    
    In a three-table join scenario where the \`JOIN\` fields are the same, you can simply set the \`JOIN\` field of each table as its distribution key to enable a Local Join.
    
    -   Syntax for creating a table (supported by Hologres V2.1 and later):
        
        ```
        BEGIN;
        CREATE TABLE join_tbl1 (
            a int NOT NULL,
            b text NOT NULL
        )
        WITH (
            distribution_key = 'a'
        );
        CREATE TABLE join_tbl2 (
            a int NOT NULL,
            d text NOT NULL,
            e text NOT NULL
        )
        WITH (
            distribution_key = 'a'
        );
        CREATE TABLE join_tbl3 (
            a int NOT NULL,
            e text NOT NULL,
            f text NOT NULL,
            g text NOT NULL
        )
        WITH (
            distribution_key = 'a'
        );
        COMMIT;
        
        --3-table join query
        SELECT * FROM join_tbl1
        INNER JOIN join_tbl2 ON join_tbl2.a = join_tbl1.a
        INNER JOIN join_tbl3 ON join_tbl2.a = join_tbl3.a;
        ```
        
    -   Syntax for creating a table (supported by all versions):
        
        ```
        begin;
        create table join_tbl1(
        a int not null,
        b text not null
        );
        call set_table_property('join_tbl1', 'distribution_key', 'a');
        
        create table join_tbl2(
        a int not null,
        d text not null,
        e text not null
        );
        call set_table_property('join_tbl2', 'distribution_key', 'a');
        
        create table join_tbl3(
        a int not null,
        e text not null,
        f text not null,
        g text not null
        );
        call set_table_property('join_tbl3', 'distribution_key', 'a');
        commit;
        
        --3-table join query
        SELECT * FROM join_tbl1
        INNER JOIN join_tbl2 ON join_tbl2.a = join_tbl1.a
        INNER JOIN join_tbl3 ON join_tbl2.a = join_tbl3.a;
        ```
        
    
    View the execution plan by running the \`EXPLAIN SQL\` statement. The execution plan result shows the following:
    
    -   The plan does not contain the `redistribution` operator. This indicates that data is not redistributed and a Local Join is performed.
        
    -   The `exchange` operator indicates that data is aggregated from the file level to the shard level. This way, only data from the corresponding shards is required, which improves query efficiency.
        
    
    ![3表join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6888515761/p529912.png)
    
-   Case 2: The JOIN fields of the three tables are different
    
    In some business scenarios, the \`JOIN\` fields in a multi-table join may be different. In this case, you can set the distribution key based on the following principles:
    
    -   The core optimization principle is to prioritize the \`JOIN\` between large tables by setting their \`JOIN\` fields as their distribution keys. Optimizing for small tables is less critical because they contain a small amount of data.
        
    -   If the tables have roughly the same amount of data, you can set the \`JOIN\` field that is frequently used in \`GROUP BY\` clauses as the distribution key.
        
    
    In the following example, three tables are joined, but their \`JOIN\` fields are not all the same. In this case, you should set the distribution keys to optimize the join involving the largest table. The `join_tbl_1` table has 10 million records, while `join_tbl_2` and `join_tbl_3` each have 1 million records. The main optimization target is `join_tbl_1`.
    
    -   Syntax for creating a table (supported by Hologres V2.1 and later):
        
        ```
        BEGIN;
        -- join_tbl_1 contains 10 million records.
        CREATE TABLE join_tbl_1 (
            a int NOT NULL,
            b text NOT NULL
        )
        WITH (
            distribution_key = 'a'
        );
        -- join_tbl_2 contains 1 million records.
        CREATE TABLE join_tbl_2 (
            a int NOT NULL,
            d text NOT NULL,
            e text NOT NULL
        )
        WITH (
            distribution_key = 'a'
        );
        -- join_tbl_3 contains 1 million records.
        CREATE TABLE join_tbl_3 (
            a int NOT NULL,
            e text NOT NULL,
            f text NOT NULL,
            g text NOT NULL
        );
         WITH (
             distribution_key = 'a'
         );
        COMMIT;
        
        --When JOIN keys are different, choose the JOIN key of the largest table as the distribution key.
        SELECT * FROM join_tbl_1
        INNER JOIN join_tbl_2 ON join_tbl_2.a = join_tbl_1.a
        INNER JOIN join_tbl_3 ON join_tbl_2.d = join_tbl_3.f;
        ```
        
    -   Syntax for creating a table (supported by all versions):
        
        ```
        begin;
        --join_tbl_1 contains 10 million records.
        create table join_tbl_1(
        a int not null,
        b text not null
        );
        call set_table_property('join_tbl_1', 'distribution_key', 'a');
        
        --join_tbl_2 contains 1 million records.
        create table join_tbl_2(
        a int not null,
        d text not null,
        e text not null
        );
        call set_table_property('join_tbl_2', 'distribution_key', 'a');
        
        --join_tbl_3 contains 1 million records.
        create table join_tbl_3(
        a int not null,
        e text not null,
        f text not null,
        g text not null
        );
        --call set_table_property('join_tbl_3', 'distribution_key', 'a');
        commit;
        
        --When JOIN keys are different, choose the JOIN key of the largest table as the distribution key.
        SELECT * FROM join_tbl_1
        INNER JOIN join_tbl_2 ON join_tbl_2.a = join_tbl_1.a
        INNER JOIN join_tbl_3 ON join_tbl_2.d = join_tbl_3.f;
        ```
        
    
    View the execution plan by running the \`EXPLAIN SQL\` statement. The execution plan shows the following:
    
    -   The plan contains a `redistribution` operator between the `join_tbl_2` and `join_tbl_3` tables. This is because `join_tbl_3` is a small table, and its \`JOIN\` field is different from its distribution key. Therefore, its data must be redistributed.
        
    -   The plan does not contain a `redistribution` operator between the `join_tbl_1` and `join_tbl_2` tables. This is because the \`JOIN\` field of each table is set as its distribution key. This allows a Local Join to be performed without data redistribution.
        
    
    ![3表join执行计划](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6888515761/p529923.png)
    

## Usage examples

-   Syntax for creating a table (supported by Hologres V2.1 and later):
    
    ```
    --Set a distribution key for a single table.
    CREATE TABLE tbl (
        a int NOT NULL,
        b text NOT NULL
    )
    WITH (
        distribution_key = 'a'
    );
    
    --Set multiple distribution keys.
    CREATE TABLE tbl (
        a int NOT NULL,
        b text NOT NULL
    )
    WITH (
        distribution_key = 'a,b'
    );
    
    
    --In a JOIN scenario, set the JOIN key as the distribution key.
    BEGIN;
    CREATE TABLE tbl1 (
        a int NOT NULL,
        b text NOT NULL
    )
    WITH (
        distribution_key = 'a'
    );
    CREATE TABLE tbl2 (
        c int NOT NULL,
        d text NOT NULL
    )
    WITH (
        distribution_key = 'c'
    );
    COMMIT;
    
    SELECT b, count(*) FROM tbl1 JOIN tbl2 ON tbl1.a = tbl2.c GROUP BY b;
    ```
    
-   Syntax for creating a table (supported by all versions):
    
    ```
    --Set one distribution key.
    begin;
    create table tbl (a int not null, b text not null);
    call set_table_property('tbl', 'distribution_key', 'a');
    commit;
    
    --Set multiple distribution keys.
    begin;
    create table tbl (a int not null, b text not null);
    call set_table_property('tbl', 'distribution_key', 'a,b');
    commit;
    
    --In a JOIN scenario, set the JOIN key as the distribution key.
    begin;
    create table tbl1(a int not null, b text not null);
    call set_table_property('tbl1', 'distribution_key', 'a');
    create table tbl2(c int not null, d text not null);
    call set_table_property('tbl2', 'distribution_key', 'c');
    commit;
    
    select b, count(*) from tbl1 join tbl2 on tbl1.a = tbl2.c group by b;
    ```
    

## **References**

-   For guidance on how to set appropriate table properties based on your query scenarios, see [Scenario-based guide for table creation and tuning](/help/en/hologres/user-guide/guide-on-scenario-specific-table-creation-and-tuning).
    
-   For more information about the best practices for tuning the performance of Hologres internal tables, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables).
    
-   For more information about DDL statements for Hologres internal tables, see:
    
    -   [CREATE TABLE](/help/en/hologres/developer-reference/create-tables)
        
    -   [CREATE TABLE AS](/help/en/hologres/developer-reference/create-table-as#DAS)
        
    -   [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like#DAS)
        
    -   [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#DAS)
        
    -   [DROP TABLE](/help/en/hologres/developer-reference/drop-table#DAS)
