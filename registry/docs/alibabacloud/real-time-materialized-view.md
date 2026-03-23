Real-time materialized views pre-aggregate and store data from a base table. Querying a materialized view reduces the computational workload and significantly improves query performance. This topic describes how to use materialized views in Hologres.

## Background information

Data in real-time materialized views in Hologres does not need to be manually refreshed. When data is written to a base table, the changes are reflected in real time in queries on the materialized view. Data is visible and aggregated as soon as it is written.

![结构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7909525271/p471133.png)In a real-time materialized view, the table that receives real-time writes is called the base table. All INSERT, UPDATE, and DELETE operations are performed on the base table. A materialized view is defined by aggregation rules on the base table. When the base table changes, the changes are synchronized to the materialized view in real time. Currently, only changes from INSERT operations are supported. Support for more types of changes will be added in the future.

## Limits

-   Real-time materialized views do not support DELETE or UPDATE operations on a base table. You must set the `appendonly` property for the base table. If you attempt to perform a DELETE or UPDATE operation on the base table, the error `Table XXX is append-only` is returned. When you write data in real time using Flink, the `mutateType` property must be set to InsertOrIgnore.
    
-   Asynchronous creation of materialized views is not supported. You must create materialized views at the same time that you create the base table.
    
-   Materialized views can be created only for a single table. They do not support common table expressions (CTEs), multi-table JOINs, subqueries, or WHERE, ORDER BY, LIMIT, and HAVING clauses.
    
-   The GROUP BY key and value of a real-time materialized view do not support expressions. For example, `SUM(CASE WHEN COND THEN A ELSE B END)`, `SUM(col1 + col2)`, and `GROUP BY date_trunc('hour', ts)` are not supported.
    
-   A maximum of 10 materialized views can be created for each base table. Resource consumption increases in proportion to the number of materialized views.
    
-   If a materialized view is created for a partitioned table, the GROUP BY key of the materialized view must include the partition key column. Materialized views can be created only for a parent table, not for its child tables.
    
-   If a materialized view is created for a partitioned table, the `ATTACH PARTITION` syntax is not supported to attach a partition to the parent table. However, the `CREATE TABLE PARTITION OF` syntax is supported.
    
-   The `DROP COLUMN` operation is not supported on a base table that has a materialized view.
    
-   The underlying data of a materialized view shares the same time to live (TTL) as its base table. Do not manually set a TTL for the materialized view. Otherwise, data inconsistency may occur between the materialized view and the base table.
    

## Supported aggregate functions

Materialized views currently support the following aggregate functions.

-   SUM
    
-   COUNT
    
-   AVG
    
-   MIN
    
-   MAX
    
-   RB\_BUILD\_CARDINALITY\_AGG (Supports only the BIGINT data type. The roaringbitmap extension must be created.)
    

## SQL examples

-   Create a real-time materialized view
    
    ```
    BEGIN;
    CREATE TABLE base_sales(
      day text not null,
      hour int ,
      ts timestamptz,
      amount float,
      pk text not null primary key
    );
    CALL SET_TABLE_PROPERTY('base_sales', 'mutate_type', 'appendonly');
    
    -- After the real-time materialized view is dropped, you can remove the appendonly property from the base table by running the following command:
    --CALL SET_TABLE_PROPERTY('base_sales', 'mutate_type', 'none');
    
    CREATE MATERIALIZED VIEW mv_sales AS
      SELECT
        day,
        hour,
        avg(amount) AS amount_avg
      FROM base_sales
      GROUP BY day, hour;
    
    COMMIT;
    
    insert into base_sales values(to_char(now(),'YYYYMMDD'),'12',now(),100,'pk1');
    insert into base_sales values(to_char(now(),'YYYYMMDD'),'12',now(),200,'pk2');
    insert into base_sales values(to_char(now(),'YYYYMMDD'),'12',now(),300,'pk3');
    ```
    
-   Create a materialized view for a partitioned table
    
    ```
    BEGIN;
    CREATE TABLE base_sales_p(
      day text not null,
      hour int,
      ts timestamptz,
      amount float,
      pk text not null,
      primary key (day, pk)
    ) partition by list(day);
    CALL SET_TABLE_PROPERTY('base_sales_p', 'mutate_type', 'appendonly');
    
    -- day is the partition key column and must be included in the GROUP BY clause of the view.
    CREATE MATERIALIZED VIEW mv_sales_p AS
      SELECT
        day,
        hour,
        avg(amount) AS amount_avg
      FROM base_sales_p
      GROUP BY day, hour;
    COMMIT;
    
    create table base_sales_20220101 partition of base_sales_p for values in('20220101');
    ```
    
-   Query a materialized view
    
    ```
    SELECT * FROM mv_sales WHERE day = to_char(now(),'YYYYMMDD') AND hour = 12;
    ```
    
-   Delete a materialized view
    
    ```
    DROP MATERIALIZED VIEW mv_sales;
    ```
    
-   Query the storage space of a materialized view
    
    ```
    select pg_relation_size('mv_sales');
    ```
    
-   Query the total underlying storage space of all materialized views
    
    ```
    SELECT schemaname || '.' || matviewname AS mv_full_name,
    pg_size_pretty(pg_relation_size('"' || schemaname || '"."' || matviewname || '"')) AS mv_size,
    pg_relation_size('"' || schemaname || '"."' || matviewname || '"') AS  order_size
    FROM pg_matviews
    ORDER BY order_size DESC;
    ```
    

## Use materialized views to improve the performance of precise UV calculation

Precise unique visitor (UV) calculation is an operator with high computational complexity and is often a performance bottleneck for the system. Hologres supports the `RB_BUILD_CARDINALITY_AGG` aggregate function. Using the RoaringBitmap data structure, you can pre-aggregate BIGINT data, which typically represents business ID fields, into a materialized view. This process achieves real-time deduplication for UV statistics. You can create the materialized view as follows. Currently, only the aggregation and deduplication for BIGINT fields are supported.

```
-- UV calculation depends on the RoaringBitmap data type. The RoaringBitmap extension must be created in advance.
CREATE EXTENSION if not exists roaringbitmap;

BEGIN;
CREATE TABLE base_sales_r(
  day text not null,
  hour int ,
  ts timestamptz,
  amount float,
  userid bigint,
  pk text not null primary key
);
CALL SET_TABLE_PROPERTY('base_sales_r', 'mutate_type', 'appendonly');

CREATE MATERIALIZED VIEW mv_sales_r AS
  SELECT
    day,
    hour,
    avg(amount) AS amount_avg,
    rb_build_cardinality_agg(userid) as user_count
  FROM base_sales_r
  GROUP BY day, hour;

COMMIT;

insert into base_sales_r values(to_char(now(),'YYYYMMDD'),'12',now(),100,1,'pk1');
insert into base_sales_r values(to_char(now(),'YYYYMMDD'),'12',now(),200,2,'pk2');
insert into base_sales_r values(to_char(now(),'YYYYMMDD'),'12',now(),300,3,'pk3');
select user_count as UV from mv_sales_r where day = to_char(now(),'YYYYMMDD') AND hour = 12;
```

The `rb_build_cardinality_agg` function calculates the number of distinct values. In the `mv_sales_r` view, `user_count` represents the number of distinct `userid` values. You can query the `user_count` field to obtain the number of distinct values.

## Use materialized views to support multi-dimensional aggregate queries

Assume that you have defined the `mv_sales` materialized view and that the `base_sales` base table contains the following data.

**Day**

**Hour**

**Amount**

**PK**

20210101

12

2

pk1

20210101

12

4

pk2

20210101

13

6

pk3

A direct query on `sales_mv` returns the following result.

```
postgres=> select * from mv_sales;
    day    |   hour  |   amount_avg
-----------+---------+--------------
  20210101 |    12   |     3
  20210101 |    13   |     6
```

If you then try to change the aggregation dimension of the materialized view, for example, by aggregating with avg on the day dimension, you will obtain an incorrect result. This is because the average of averages is not equal to the total average.

```
postgres=> select day, avg(amount_avg) from mv_sales group by day;
    day    |   avg
-----------+--------
  20210101 |   4.5
```

One solution is to create another materialized view that is aggregated by day. However, this increases the number of materialized views. Hologres provides a method that is based on intermediate aggregation states and lets you use a single materialized view to perform aggregate queries across different dimensions. The following example uses the AVG function. You can modify the view definition as follows.

```
BEGIN;
CREATE TABLE base_sales(
  day text not null,
  hour int ,
  ts timestamptz,
  amount float,
  pk text not null primary key
);
CALL SET_TABLE_PROPERTY('base_sales', 'mutate_type', 'appendonly');

CREATE MATERIALIZED VIEW mv_sales_partial AS
  SELECT
    day,
    hour,
    avg(amount) as avg,
    avg_partial(amount) AS amt_avg_partial
  FROM base_sales
  GROUP BY day, hour;

COMMIT;
```

The original avg aggregate function is redefined as the avg\_partial aggregate function. The amount\_avg\_partial column stores the intermediate state of the aggregation result. When you run a query, modify the query to use the avg\_final function. This indicates that the query is performing the final aggregation on the intermediate state.

```
postgres=> select day, avg(avg) as avg_avg, avg_final(amt_avg_partial) as real_avg from mv_sales_partial group by day;
    day    |   avg_avg |  real_avg
-----------+-----------+----------
  20210101 |    4.5    |     4
```

The supported aggregate functions and their corresponding partial aggregate functions are as follows.

**Standard aggregate function**

**Partial aggregate function**

**Final aggregate function**

AVG

AVG\_PARTIAL

AVG\_FINAL

RB\_BUILD\_CARDINALITY\_AGG

RB\_BUILD\_AGG

RB\_OR\_CARDINALITY\_AGG

## TTL description

If a TTL is set for a base table that has a materialized view, Hologres cannot guarantee data consistency between the base table and the materialized view for data near the TTL expiration threshold. Querying such data from the materialized view results in undefined behavior. The following example uses the `base_sales_table` base table and the `sales_mv` materialized view.

A TTL is set for the `base_sales_table` table. If data is reclaimed because its TTL expires, a query on the base table returns the following result.

```
postgres=> SELECT
    day,
    hour,
    avg(amount) AS amount_avg
  FROM base_sales
  GROUP BY day, hour;

--Query result
    day    |   hour  |   amount_avg
-----------+---------+--------------
  20210101 |    12   |     4
  20210101 |    13   |     6
```

However, because the reclaimed data has already been materialized in the view, a query on the materialized view might return the following result.

```
postgres=> select * from mv_sales;
--Query result
    day    |   hour  |   amount_avg
-----------+---------+--------------
  20210101 |    12   |     3
  20210101 |    13   |     6
```

The query results are inconsistent. The following solutions are recommended:

-   Do not set a TTL for the detail table.
    
-   Set a TTL for the base table, but ensure that the GROUP BY key of the materialized view includes a time-based field. When you query the materialized view, avoid querying data near the TTL expiration threshold.
    
-   Create the base table as a partitioned table and do not set a TTL. Reclaim data by dropping child partitions.
    

## Best practices for using real-time materialized views

-   When you create a base table and its materialized view, set the GROUP BY key of the materialized view to be the same as the distribution key of the base table. This practice can improve the data compression ratio and query performance.
    
-   When you define a materialized view, place columns that are frequently used in filter conditions at the beginning of the GROUP BY key. This practice follows the leftmost matching principle of the clustering key.
    

## Intelligent routing for materialized views

You do not need to explicitly specify the materialized view name in your query. Instead, you can query the base table directly. If a matching materialized view exists, the optimizer intelligently routes the query to the most suitable materialized view to accelerate the query. The optimizer selects a materialized view based on the following criteria:

-   The materialized view contains all queried columns or columns from which the queried values can be indirectly calculated.
    
-   The GROUP BY columns of the materialized view include all columns from the GROUP BY clause of the original query.
    
-   If multiple materialized views meet the preceding criteria, the optimizer selects the one with the fewest columns in its GROUP BY key.
    

The aggregate functions that support intelligent routing are SUM, COUNT, MIN, and MAX.
