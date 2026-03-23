This topic describes how to automate partition management by using scheduled tasks for regular partition creation, dropping, and exchange.

## Background information

In some industries, a large amount of data is periodically generated; unnecessary data also needs to be periodically deleted to save storage space. If only one table is used to hold data, regularly adding and deleting a large amount of data within the table may affect business continuity. As most tables are not partitioned, you must manually create tables for new data and drop the tables storing unnecessary data on a regular basis.

This practice has disadvantages:

-   Periodic updates of a large amount of data may affect business continuity.
    
-   Manual table management increases O&M costs.
    

You can create scheduled tasks to automate partition management, avoiding possible impacts on business continuity and reducing manual operations.

## Prerequisites

-   The cluster is a PolarDB for MySQL cluster.
    
-   The cluster version is 8.0.2, with the revision version 8.0.2.2.0 or later.
    

For information about how to view the version of your cluster, see the "Query the engine version" section of the [Engine versions](/help/en/doc-detail/423885.html#section-7p8-757-iyh) topic.

## Syntax and parameters

**Syntax**

```
CREATE
    [DEFINER = user]
    EVENT
    [IF NOT EXISTS]
    event_name
    ON SCHEDULE schedule
    [ON COMPLETION [NOT] PRESERVE]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    [COMMENT 'string']
    DO event_body;
```

**Parameters**

**Parameter**

**Required?**

**Notes**

DEFINER

No

Grants the specified user the permission to use the scheduled task.

IF NOT EXISTS

No

Checks whether the event to be created already exists.

event\_name

Yes

The name of the event. The `event_name` value can be up to 64 characters in length.

schedule

Yes

The scheduled time for the event. You can specify the time in the following ways:

-   **AT**
    
    ```
    AT timestamp [+ INTERVAL interval] ...
    ```
    
-   **EVERY**
    
    ```
    EVERY interval
        [STARTS timestamp [+ INTERVAL interval] ...]
        [ENDS timestamp [+ INTERVAL interval] ...]
    ```
    

The supported INTERVAL units are as follows:

```
{YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
 WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
 DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}
```

ON COMPLETION \[NOT\] PRESERVE

No

Specifies how to deal with the event after it is executed once. Valid values:

-   `ON COMPLETION PRESERVE`: the `event` will be closed and retained.
    
-   `ON COMPLETION NOT PRESERVE`: the `event` is automatically deleted.
    

ENABLE, DISABLE, and DISABLE ON SLAVE

No

Specifies a property of the event. Valid values:

-   **ENABLE** (default): The event is enabled. The scheduler checks whether the event must be scheduled.
    
-   **DISABLE**: The event is disabled. The event declaration is stored in the directory, but the scheduler does not check whether the event must be scheduled.
    
-   **DISABLE ON SLAVE**: The event is disabled on the read-only node.
    

COMMENT 'comment'

No

The comment for the event.

DO event\_body

Yes

The code to be executed when the event is enabled.

**Note**

-   It can be a valid SQL statement, a stored procedure, or a scheduled execution event.
    
-   If multiple statements are included, you can use the BEGIN…END syntax.
    

## **Example**

Assume the `orders` table is range partitioned by time interval. Data is distributed to partitions based on the time range it falls within. The table is created using the following statements:

```
CREATE TABLE orders(
  id int,
  ordertime datetime
)
PARTITION BY RANGE COLUMNS(ordertime) INTERVAL(DAY, 1)
(
  PARTITION p20220520 VALUES LESS THAN('2022-05-20'),
  PARTITION p20220521 VALUES LESS THAN('2022-05-21')
);
```

The following section uses the `orders` table to illustrate how to add, drop, and exchange partitions using scheduled tasks.

## Add partitions

You can create a scheduled task that adds partitions at a regular interval to the `orders` table:

```
DELIMITER ||
CREATE EVENT IF NOT EXISTS add_partition ON SCHEDULE
EVERY 1 DAY STARTS '2022-05-20 22:00:00'
ON COMPLETION PRESERVE
DO
BEGIN
set @pname = concat("alter table orders add partition (partition p",date_format(date_add(curdate(), interval 2 day), '%Y%m%d'), " values less than('", date_add(curdate(), interval 2 day), "'))");
prepare stmt_add_partition from @pname;
execute stmt_add_partition;
deallocate prepare stmt_add_partition;
END ||
DELIMITER ;
```

Assume that the maximum time range for partitions is from `2022-05-20 00:00:00` to `2022-05-20 23:59:59`. Starting from `2022-05-20 22:00:00`, the scheduled task creates a partition every day to store data of the next day.

If the `orders` table is partitioned by time interval, you can also create a scheduled task to add partitions by using INSERT INTO:

```
CREATE EVENT IF NOT EXISTS add_partition ON SCHEDULE
EVERY 1 DAY STARTS '2022-05-20 00:00:00'
ON COMPLETION PRESERVE
DO INSERT INTO orders VALUES(id, DATE_ADD(NOW(), INTERVAL 1 DAY));
```

Assume that the maximum time range for partitions is from `2022-05-20 00:00:00` to `2022-05-20 23:59:59`. Starting from `2022-05-20 00:00:00`, the scheduled task creates a partition every day to store data of the next day.

## Drop partitions

You can create a scheduled task that drops unnecessary partitions on a regular basis:

```
DELIMITER ||
CREATE EVENT IF NOT EXISTS drop_partition ON SCHEDULE
EVERY 1 DAY STARTS '2022-05-21 02:00:00'
ON COMPLETION PRESERVE
DO
BEGIN
set @pname = concat('alter table orders drop partition p', date_format(curdate(), '%Y%m%d'));
prepare stmt_drop_partition from @pname;
execute stmt_drop_partition;
deallocate prepare stmt_drop_partition;
END ||
DELIMITER ;
```

Assume that the O&M starts at `02:00:00` daily. Starting from `2022-05-21 02:00:00`, the scheduled task drops the previous day's partition every day at `02:00:00`.

## Exchange partitions

If you prefer to retain data within unnecessary partitions in the `orders` table, you can create a scheduled task with exchange\_partition to regularly exchange these partitions with a table totally independent of `orders` and then decide on what to do with the data:

```
-- Create a non-partitioned table with the same structure as the partitioned table to receive data transferred from partitions. 
DELIMITER ||
CREATE EVENT IF NOT EXISTS exchange_partition ON SCHEDULE
EVERY 1 DAY STARTS '2022-05-21 02:00:00'
ON COMPLETION PRESERVE
DO
BEGIN
set @pname = concat('create table orders_', date_format(curdate(), '%Y%m%d'), '(id int, ordertime datetime)');
prepare stmt_create_table from @pname;
execute stmt_create_table;
deallocate prepare stmt_create_table;

set @pname = concat('alter table orders exchange partition p', date_format(curdate(), '%Y%m%d'), ' with table orders_', date_format(curdate(), '%Y%m%d'));
prepare stmt_exchange_partition from @pname;
execute stmt_exchange_partition;
deallocate prepare stmt_exchange_partition;
END ||
DELIMITER ;
```

Starting from `2022-05-21 02:00:00`, the scheduled task daily exchanges the previous day's partition with an empty table, effectively moving data from the partition into the new table.

## Video tutorial
