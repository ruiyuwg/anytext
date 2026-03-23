This topic describes how to use a TUMBLE function in Realtime Compute for Apache Flink.

## Description

A TUMBLE function assigns each element to a tumbling window that has a specific size. In most cases, tumbling windows are fixed in size and do not overlap with each other. For example, if a 5-minute tumbling window is defined, an infinite data stream is divided into windows based on the time period, such as `[0:00, 0:05)`, `[0:05, 0:10)`, and `[0:10, 0:15)`.

## Syntax

You can use a TUMBLE function in a GROUP BY clause to define a tumbling window.

```
TUMBLE(<time-attr>, <size-interval>)
<size-interval>: INTERVAL 'string' timeUnit
```

**Note**

The `<time-attr>` parameter must be a valid time attribute field in a time stream. This parameter specifies whether the time is the processing time or the event time. For more information about how to define time attributes, see [Overview](/help/en/flink/developer-reference/overview-4#concept-62510-zh) and [Time Attributes](https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/streaming/time_attributes.html).

## Window identifier functions

A window identifier function specifies the start time, end time, or time attribute of a window. The time attribute is used to aggregate lower-level windows.

**Function**

**Type of return value**

**Description**

`TUMBLE_START(time-attr, size-interval)`

TIMESTAMP

Returns the start time of a window, including the boundary value. For example, if the time span of a window is `[00:10, 00:15)`, `00:10` is returned.

`TUMBLE_END(time-attr, size-interval)`

TIMESTAMP

Returns the end time of a window, including the boundary value. For example, if the time span of a window is `[00:00, 00:15]`, `00:15` is returned.

`TUMBLE_ROWTIME(time-attr, size-interval)`

TIMESTAMP(rowtime-attr)

Returns the end time of a window, excluding the boundary value. For example, if the time span of a window is `(00:00, 00:15)`, `00:14:59.999` is returned. The return value is a rowtime attribute based on which time operations can be performed. This function can be used only in the windows that are defined based on the event time, such as cascading windows. For more information, see the "Cascading windows" section of the [Overview](/help/en/flink/developer-reference/overview-4#section-cwf-1kt-jhb) topic.

`TUMBLE_PROCTIME(time-attr, size-interval)`

TIMESTAMP(rowtime-attr)

Returns the end time of a window, excluding the boundary value. For example, if the time span of a window is `(00:00, 00:15)`, `00:14:59.999` is returned. The return value is a processing time attribute based on which time operations can be performed. For example, this function can be used only in the windows that are defined based on the processing time, such as cascading windows. For more information, see the "Cascading windows" section of the [Overview](/help/en/flink/developer-reference/overview-4#section-cwf-1kt-jhb) topic.

## Example 1: Count the number of clicks per user per minute for a specific website based on the event time

-   Test data
    
    **username (VARCHAR)**
    
    **click\_url (VARCHAR)**
    
    **eventtime (VARCHAR)**
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:00:00.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:00:10.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:00:49.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:01:05.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:01:58.0`
    
    Timo
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:02:10.0`
    
    Timo
    
    `http://taobao.com/xxx`
    
    `2024-08-10 10:03:10.0`
    
-   Test statements
    
    ```
    CREATE TEMPORARY TABLE user_clicks(
      username varchar,
      click_url varchar,
      eventtime varchar,                            
      ts AS TO_TIMESTAMP(eventtime),
      WATERMARK FOR ts AS ts - INTERVAL '2' SECOND   -- Define a watermark for the rowtime. 
    ) WITH (
      'connector'='sls',
      ...
    );
    
    CREATE TEMPORARY TABLE tumble_output(
      window_start TIMESTAMP,
      window_end TIMESTAMP,
      username VARCHAR,
      clicks BIGINT
    ) WITH (
      'connector'='datahub'
      ...
    );
    
    INSERT INTO tumble_output
    SELECT
    TUMBLE_START(ts, INTERVAL '1' MINUTE) as window_start,
    TUMBLE_END(ts, INTERVAL '1' MINUTE) as window_end,
    username,
    COUNT(click_url)
    FROM user_clicks
    GROUP BY TUMBLE(ts, INTERVAL '1' MINUTE),username;
    ```
    
-   Test results
    
    **window\_start (TIMESTAMP)**
    
    **window\_end (TIMESTAMP)**
    
    **username (VARCHAR)**
    
    **clicks (BIGINT)**
    
    `2024-08-10 10:00:00.0`
    
    `2024-08-10 10:01:00.0`
    
    Jark
    
    3
    
    `2024-08-10 10:01:00.0`
    
    `2024-08-10 10:02:00.0`
    
    Jark
    
    2
    
    `2024-08-10 10:02:00.0`
    
    `2024-08-10 10:03:00.0`
    
    Timo
    
    1
    

## Example 2: Count the number of clicks per user per minute for a specific website based on the processing time

-   Test data
    
    **username (VARCHAR)**
    
    **click\_url (VARCHAR)**
    
    Jark
    
    `http://taobao.com/xxx`
    
    Jark
    
    `http://taobao.com/xxx`
    
    Jark
    
    `http://taobao.com/xxx`
    
    Jark
    
    `http://taobao.com/xxx`
    
    Jark
    
    `http://taobao.com/xxx`
    
    Timo
    
    `http://taobao.com/xxx`
    
-   Test statements
    
    ```
    CREATE TEMPORARY TABLE window_test (
      username   VARCHAR,
      click_url  VARCHAR,
      ts as PROCTIME()
    ) WITH (
      'connector'='sls',
      ...
    );
    
    CREATE TEMPORARY TABLE tumble_output(
      window_start TIMESTAMP,
      window_end TIMESTAMP,
      username VARCHAR,
      clicks BIGINT
    ) WITH (
      'connector'='datahub'              -- Log Service allows you to export only VARCHAR-type DDL statements. Therefore, DataHub is used for storage. 
      ...
    );
    
    INSERT INTO tumble_output
    SELECT
    TUMBLE_START(ts, INTERVAL '1' MINUTE),
    TUMBLE_END(ts, INTERVAL '1' MINUTE),
    username,
    COUNT(click_url)
    FROM window_test
    GROUP BY TUMBLE(ts, INTERVAL '1' MINUTE), username;
    ```
    
-   Test results
    
    **window\_start (TIMESTAMP)**
    
    **window\_end (TIMESTAMP)**
    
    **username (VARCHAR)**
    
    **clicks (BIGINT)**
    
    `2024-08-10 14:43:00.000`
    
    `2024-08-10 14:44:00.000`
    
    Jark
    
    5
    
    `2024-08-10 14:43:00.000`
    
    `2024-08-10 14:44:00.000`
    
    Timo
    
    1
