A materialized view is a pre-computed object that stores the results of time-consuming operations, such as JOIN and AGGREGATE. You can reuse these results in subsequent queries to avoid repeating costly operations and accelerate query performance. This topic describes the commands related to materialized views.

## Limits

Materialized views are supported only in Hologres V1.3 and later. If your instance is an earlier version, see [Common errors when preparing for an upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).

**Note**

For more information about limits and operations, see [Manage materialized views with SQL](/help/en/hologres/user-guide/real-time-materialized-view#task-2205903).

## Create a materialized view

-   Syntax
    
    Use the following syntax to create a materialized view.
    
    ```
    CREATE  MATERIALIZED VIEW <mv_name>
    AS
    <QUERY BODY>;
    ```
    
    **mv\_name** is the name of the materialized view. **QUERY BODY** is the query statement. For more information, see [SELECT](/help/en/hologres/developer-reference/select#concept-1663833).
    
-   Examples
    
    -   Create a materialized view for a non-partitioned table.
        
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
        
        --After the materialized view is dropped, run the following command to disable the appendonly property for the source table.
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
        
    -   Create a materialized view for a partitioned table.
        
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
        
        --The day column is a partition key column and must be included in the GROUP BY clause of the view.
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
        

## Query a materialized view

Use the following SQL statement to query a materialized view.

```
SELECT * FROM mv_sales WHERE day = to_char(now(),'YYYYMMDD') AND hour = 12;
```

## Delete a materialized view

-   Syntax
    
    The syntax to delete a view is as follows.
    
    ```
    DROP MATERIALIZED VIEW <mv_name>;
    ```
    
    **mv\_name** is the name of the materialized view.
    
-   Example
    
    ```
    DROP MATERIALIZED VIEW mv_sales;
    ```
