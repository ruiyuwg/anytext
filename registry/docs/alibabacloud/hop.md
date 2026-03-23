This topic describes how to use the HOP function in Realtime Compute for Apache Flink.

## Definition

The HOP function is used to define a hopping window, which is also known as a sliding window. Unlike tumbling windows, sliding windows can overlap with each other.

## Syntax

You can use the HOP function in the GROUP BY clause to define a sliding window.

```
HOP(<time-attr>, <slide-interval>,<size-interval>)          
```

## Input parameters

**Parameter**

**Description**

**Example**

time-attr

The parameter must be a valid time attribute field in a stream. This parameter specifies whether the time is the processing time or the event time. For more information, see [Time attributes](/help/en/flink/developer-reference/overview-4#section-vhy-mp5-cgb).

\-

slide-interval

The interval at which the sliding window moves, which defines the time difference between consecutive windows. This parameter is in the `INTERVAL 'num' timeUnit` format.

`INTERVAL '10' SECOND` indicates that the interval at which the sliding window moves is 10 seconds.

size-interval

The size or duration of the sliding window, which defines the time range covered by each window. This parameter is in the `INTERVAL 'num' timeUnit` format.

`INTERVAL '5' MINUTE` indicates that the duration of a window is 5 minutes.

Sliding windows can be used in the following scenarios based on the values of the slide-interval and size-interval parameters:

-   If the condition slide-interval < size-interval is met, windows overlap with each other and each element is assigned to multiple windows.
    
-   If the condition slide-interval = size-interval is met, windows are tumbling windows.
    
-   If the condition slide-interval > size-interval is met, windows are sliding windows. These windows do not overlap with each other and are separated by gaps.
    

In most cases, most elements are assigned to multiple windows and the windows overlap with each other. Sliding windows are well-suited for calculating moving averages. For example, if you want to calculate the data average in the last 5 minutes every 10 seconds, set slide-interval to 10 seconds and set size-interval to 5 minutes.

## Window identifier functions

A window identifier function specifies the start time, end time, or time attribute of a window. The time attribute is used to aggregate lower-level windows.

**Function**

**Return value type**

**Description**

`HOP_START(<time-attr>, <slide-interval>, <size-interval>)`

TIMESTAMP

Returns the start time, including the boundary value, of a window. For example, if the time span of a window is `[00:10, 00:15]`, `00:10` is returned.

`HOP_END(<time-attr>, <slide-interval>, <size-interval>)`

TIMESTAMP

Returns the end time, including the boundary value, of a window. For example, if the time span of a window is `[00:00, 00:15]`, `00:15` is returned.

`HOP_ROWTIME(<time-attr>, <slide-interval>, <size-interval>)`

TIMESTAMP (rowtime-attr)

Returns the end time, excluding the boundary value, of a window. For example, if the time span of a window is `(00:00, 00:15)`, `00:14:59.999` is returned. The return value is a rowtime attribute based on which time operations can be performed. This function can be used in only the windows that are defined based on the event time, such as cascading windows. For more information, see [Cascading windows](/help/en/flink/developer-reference/overview-4#section-cwf-1kt-jhb).

`HOP_PROCTIME (<time-attr>, <slide-interval>, <size-interval>)`

TIMESTAMP (rowtime-attr)

Returns the end time, excluding the boundary value, of a window. For example, if the time span of a window is `(00:00, 00:15)`, `00:14:59.999` is returned. The return value is a processing time attribute based on which time operations can be performed. This function can be used only in the windows that are defined based on the processing time, such as cascading windows. For more information, see [Cascading windows](/help/en/flink/developer-reference/overview-4#section-cwf-1kt-jhb).

## Example

In the following example, a 1-minute window slides once every 30 seconds. You can use the windows to count the number of clicks per user over the last minute every 30 seconds.

-   Test data in the user\_clicks table
    
    **username (VARCHAR)**
    
    **click\_url (VARCHAR)**
    
    **eventtime (VARCHAR)**
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-10-10 10:00:00.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-10-10 10:00:10.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-10-10 10:00:49.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-10-10 10:01:05.0`
    
    Jark
    
    `http://taobao.com/xxx`
    
    `2024-10-10 10:01:58.0`
    
    Timo
    
    `http://taobao.com/xxx`
    
    `2024-10-10 10:02:10.0`
    
-   Test statements
    
    ```
    CREATE TEMPORARY TABLE user_clicks (
      username VARCHAR,
      click_url VARCHAR,
      eventtime VARCHAR,                            
      ts AS TO_TIMESTAMP(eventtime),
      WATERMARK FOR ts AS ts - INTERVAL '2' SECOND   -- Define a watermark for the rowtime. 
    ) WITH (
      'connector' = 'kafka',
      'topic' = '<yourTopic>',
      'properties.bootstrap.servers' = '<brokers>',
      'scan.startup.mode' = 'earliest-offset',
      'format' = 'csv'
    );
    
    CREATE TEMPORARY TABLE hop_output (
      window_start TIMESTAMP,
      window_end TIMESTAMP,
      username VARCHAR,
      clicks BIGINT
    ) WITH (
      'connector'='print',
      'logger'='true'
    );
    
    INSERT INTO
        hop_output
    SELECT
        HOP_START (ts, INTERVAL '30' SECOND, INTERVAL '1' MINUTE),
        HOP_END (ts, INTERVAL '30' SECOND, INTERVAL '1' MINUTE),
        username,
        COUNT (click_url)
    FROM
        user_clicks
    GROUP BY
        HOP (ts, INTERVAL '30' SECOND, INTERVAL '1' MINUTE),username;             
    ```
    
-   Test results
    
    **window\_start (TIMESTAMP)**
    
    **window\_end (TIMESTAMP)**
    
    **username (VARCHAR)**
    
    **clicks (BIGINT)**
    
    `2024-10-10 09:59:30.0`①
    
    `2024-10-10 10:00:30.0`
    
    Jark
    
    2
    
    `2024-10-10 10:00:00.0`
    
    `2024-10-10 10:01:00.0`
    
    Jark
    
    3
    
    `2024-10-10 10:00:30.0`
    
    `2024-10-10 10:01:30.0`
    
    Jark
    
    2
    
    `2024-10-10 10:01:00.0`
    
    `2024-10-10 10:02:00.0`
    
    Jark
    
    2
    
    `2024-10-10 10:01:30.0`
    
    `2024-10-10 10:02:30.0`②
    
    Jark
    
    1
    
    `2024-10-10 10:01:30.0`
    
    `2024-10-10 10:02:30.0`②
    
    Timo
    
    1
    
    **Note**
    
    -   ①If a sliding window cannot read the time at which data enters the window, the start time of the first window is moved forward. You can use the following formula to calculate the time interval by which the start time is moved forward: Time interval = Window duration - Sliding step.
        
        **Window duration (seconds)**
        
        **Sliding step (seconds)**
        
        **Event time**
        
        **Start time of the first window**
        
        **End time of the first window**
        
        120
        
        30
        
        `2024-07-31 10:00:00.0`
        
        `2024-07-31 09:58:30.0`
        
        `2024-07-31 10:00:30.0`
        
        60
        
        10
        
        `2024-07-31 10:00:00.0`
        
        `2024-07-31 09:59:10.0`
        
        `2024-07-31 10:00:10.0`
        
    -   ②The row with timestamp `2024-10-10 10:02:30.0` is actually not visible in the results, because the window calculation has not been triggered. An extra record from any user is needed to trigger the window calculation.
        
        **Window calculation triggering time** **≥** `**window_end + Watermark**` (such as 10:02:32.0)
