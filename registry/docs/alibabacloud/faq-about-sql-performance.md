This topic provides answers to some frequently asked questions about job performance.

-   [How do I split operators of a deployment?](#section-vb9-ke2-ym4)
    
-   [How do I optimize a deployment that uses an aggregate function with GROUP BY?](#section-2l7-hz7-gcv)
    
-   [How do I optimize a deployment by using TopN practices?](#section-ymw-tbt-d8u)
    
-   [How do I perform deduplication in an efficient manner?](#section-hd1-3vc-va2)
    
-   [What do I need to focus on when I use built-in functions?](#section-hh4-dc7-8wl)
    
-   [What do I do if the data reading efficiency is low and backpressure exists when full data is read from tables?](#b53b5399c0xdv)
    
-   [What are the meanings of different colors for the legends in the Status Durations column on the Subtask Metrics tab?](#e943678cb417e)
    
-   [What is the RMI TCP Connection thread? Why are the CPU resources occupied by RMI TCP Connection excessively higher than the CPU resources occupied by other threads?](#41877e4607pbo)
    
-   [Why does a time difference exist between the current time and the time in the values of the Low Watermark and Datetime of Watermark Timestamp parameters on the Watermarks tab of the Status tab and the time in the value of the Task InputWatermark metric in the Watermark section of the Metrics tab?](#beacfbb5dckgs)
    
-   [How do I troubleshoot backpressure issues?](#bf707479874be)
    
-   [How do I troubleshoot high latency issues?](#10948087ceaji)
    
-   [What do I do if backpressure occurs due to data hotspot issues of Flink SQL deployments?](#a98f3b05a2ovp)
    
-   [What do I do if the consumption of upstream data is unstable?](#3d1d9a00c5lyb)
    

## How do I split operators of a deployment?

On the **O&M** > **Deployments** page, click the name of the desired deployment. On the Configuration tab of the **deployment details** page, click Edit in the upper-right corner of the **Parameters** section, add the following code to the **Other Configuration** field, and then click Save to make the configuration take effect.

```
pipeline.operator-chaining: 'false'
```

## How do I optimize a deployment that uses an aggregate function with GROUP BY?

-   Enable miniBatch to improve data throughput
    
    If miniBatch is enabled, Realtime Compute for Apache Flink processes data when the data cache meets the trigger condition. This reduces the number of times that Realtime Compute for Apache Flink accesses the state data. This improves data throughput and reduces data output.
    
    The miniBatch feature triggers micro-batch processing based on event messages. The event messages are inserted at the source at a specified interval.
    
    -   Scenarios
        
        Micro-batch processing achieves higher throughput at the expense of higher latency. Therefore, micro-batch processing does not apply to scenarios that require extremely low latency. However, in data aggregation scenarios, we recommend that you enable micro-batch processing to improve system performance.
        
    -   Method to enable miniBatch
        
        The miniBatch feature is disabled by default. To enable this feature, you must enter the following code in the **Other Configuration** field of the **Parameters** section on the **Configuration** tab of the deployment details page.
        
        ```
        table.exec.mini-batch.enabled: true
        table.exec.mini-batch.allow-latency: 5s
        ```
        
        The following table describes the parameter.
        
        **Parameter**
        
        **Description**
        
        table.exec.mini-batch.enabled
        
        Specifies whether to enable the miniBatch feature.
        
        table.exec.mini-batch.allow-latency
        
        The interval at which data is exported in batches.
        
-   Enable LocalGlobal to resolve common data hotspot issues
    
    The LocalGlobal policy can filter out some skewed data by using local aggregation. This efficiently reduces data hotspot issues in global aggregation and improves deployment performance.
    
    The LocalGlobal policy divides the aggregation process into two phases: local aggregation and global aggregation. These phases are equivalent to the combine and reduce phases in MapReduce. In the local aggregation phase, Realtime Compute for Apache Flink aggregates a micro-batch of data that is locally cached at each upstream node, and generates the accumulator value for each micro-batch. In the global aggregation phrase, the accumulator is merged into the final result. Then, the global aggregation result is generated.
    
    -   Scenarios
        
        The LocalGlobal policy is suitable for scenarios in which you want to improve deployment performance and resolve data hotspot issues by using common aggregate functions, such as SUM, COUNT, MAX, MIN, and AVG.
        
    -   Limits
        
        LocalGlobal is enabled by default. The policy has the following limits:
        
        -   LocalGlobal can take effect only when miniBatch is enabled.
            
        -   AggregateFunction must be used to merge data.
            
        
    -   Verification
        
        To determine whether LocalGlobal is enabled, check whether the GlobalGroupAggregate or LocalGroupAggregate node exists in the final topology.
        
-   Enable PartialFinal to resolve data hotspot issues when you use the COUNT DISTINCT function
    
    In normal cases, you need to add a layer that scatters data by distinct key when you use the COUNT DISTINCT function. This way, you can divide the aggregation process into two phases to resolve data hotspot issues. Realtime Compute for Apache Flink now provides the PartialFinal policy to automatically scatter data and divide the aggregation process.
    
    The LocalGlobal policy improves the performance of common aggregate functions, such as SUM, COUNT, MAX, MIN, and AVG. However, the LocalGlobal policy is less effective for improving the performance of the COUNT DISTINCT function. This is because local aggregation cannot remove duplicate distinct keys. As a result, a large amount of data is stacked up in the global aggregation phase.
    
    -   Scenarios
        
        The PartialFinal policy is suitable for scenarios in which the aggregation performance cannot meet your requirements when you use the COUNT DISTINCT function.
        
        **Important**
        
        -   You cannot enable PartialFinal in the Flink SQL code that contains user-defined aggregate functions (UDAFs).
            
        -   To prevent resources from being wasted, we recommend that you enable PartialFinal only when the amount of data is large. PartialFinal automatically scatters data and divides the aggregation process into two phases. This causes additional network shuffling.
            
        
    -   Method to enable PartialFinal
        
        PartialFinal is disabled by default. To enable this feature, you must enter the following code in the **Other Configuration** field of the **Parameters** section on the **Configuration** tab of the deployment details page.
        
        ```
        table.optimizer.distinct-agg.split.enabled: true
        ```
        
    -   Verification
        
        Check whether one-layer aggregation changes to two-layer aggregation in the final topology.
        
-   AGG WITH CASE WHEN changed to AGG WITH FILTER to improve system performance in scenarios in which the COUNT DISTINCT function is used when a large amount of data exists
    
    Statistical deployments record unique visitors (UVs) in different dimensions, such as UVs of all the channels, UVs of mobile terminals, and UVs of PCs. We recommend that you use the standard AGG WITH FILTER syntax instead of the AGG WITH CASE WHEN syntax to implement multidimensional statistical analysis. The reason is that the SQL optimizer of Realtime Compute for Apache Flink can analyze the filter parameter. This way, Realtime Compute for Apache Flink can execute the COUNT DISTINCT function on the same field in different filter conditions by sharing the state data. This reduces the read and write operations on the state data. In the performance test, the AGG WITH FILTER syntax outperforms the AGG WITH CASE WHEN syntax. This is because the deployment performance for the AGG WITH FILTER syntax doubles that for the AGG WITH CASE WHEN syntax.
    
    -   Scenarios
        
        If you use AGG WITH FILTER instead of AGG WITH CASE WHEN when you use the COUNT DISTINCT function to calculate the results under different conditions on the same field, deployment performance significantly improves.
        
    -   Original statement
        
        ```
        COUNT(distinct visitor_id) as UV1 , COUNT(distinct case when is_wireless='y' then visitor_id else null end) as UV2
        ```
        
    -   Optimized statement
        
        ```
        COUNT(distinct visitor_id) as UV1 , COUNT(distinct visitor_id) filter (where is_wireless='y') as UV2
        ```
        
    

## How do I optimize a deployment by using TopN practices?

-   TopN algorithms
    
    If the input data streams of TopN are static data streams, such as data streams from Log Service data sources, TopN supports only the AppendRank algorithm. If the input data streams of TopN are dynamic data streams, such as data streams processed by aggregate or join functions, TopN supports the UpdateFastRank and RetractRank algorithms. The performance of UpdateFastRank is better than that of RetractRank. The name of the algorithm in use is included in the name of a node in the topology.
    
    -   AppendRank: Only this algorithm is supported for static data streams.
        
    -   UpdateFastRank: This algorithm is optimal for dynamic data streams.
        
    -   RetractRank: This algorithm is a basic algorithm for dynamic data streams. If the performance of this algorithm does not meet your business requirements, you can change this algorithm to UpdateFastRank in specific scenarios.
        
    
    The following section describes how to change RetractRank to UpdateFastRank. If you want to use the UpdateFastRank algorithm, make sure that the following conditions are met:
    
    -   The input data streams of TopN are dynamic data streams.
        
    -   The input data streams contain the primary key information. For example, the GROUP BY clause is used to aggregate columns based on the primary key in the source.
        
    -   The values of the fields or functions, such as ORDER BY COUNT, COUNT\_DISTINCT, or SUM (positive value) DESC, are monotonically updated in the opposite order of sorting.
        
    
    If you use ORDER BY SUM DESC to obtain the optimization plan of UpdateFastRank, you must specify a condition to obtain positive SUM values. This ensures that the **total\_fee** value is positive.
    
    ```
    insert
      into print_test
    SELECT
      cate_id,
      seller_id,
      stat_date,
      pay_ord_amt -- The rownum field is not included in the output data. This reduces the amount of output data that will be written to the result table. 
    FROM (
        SELECT
          *,
          ROW_NUMBER () OVER (
            PARTITION BY cate_id,
            stat_date -- Make sure that the stat_date field is included. Otherwise, the data may be out of order when the state data expires. 
            ORDER
              BY pay_ord_amt DESC
          ) as rownum -- Data is sorted based on the sum of the input data. 
        FROM (
            SELECT
              cate_id,
              seller_id,
              stat_date,
              -- Note: The result of the SUM function is monotonically increasing because the values returned by the SUM function are positive. Therefore, TopN can use optimized algorithms to obtain top 100 data records. 
              sum (total_fee) filter (
                where
                  total_fee >= 0
              ) as pay_ord_amt
            FROM
              random_test
            WHERE
              total_fee >= 0
            GROUP
              BY cate_name,
              seller_id,
              stat_date,
              cate_id
          ) a
        ) WHERE
          rownum <= 100;
    ```
    
-   TopN optimization methods
    
    -   Perform no-ranking optimization
        
        Do not include rownum in the output of TopN. We recommend that you sort the results when they are finally displayed in the frontend. This significantly reduces the amount of data that is to be written to the result table. For more information about no-ranking optimization methods, see [Top-N](https://ci.apache.org/projects/flink/flink-docs-master/docs/dev/table/sql/queries/#top-n).
        
    -   Increase the cache size of TopN
        
        TopN provides a state cache to improve the efficiency of accessing the state data. The following formula is used to calculate the cache hit ratio of TopN:
        
        ```
        cache_hit = cache_size*parallelism/top_n/partition_key_num
        ```
        
        For example, Top100 is used, the cache contains 10,000 records, and the parallelism is 50. If the number of keys for the PARTITION BY function is 100,000, the cache hit ratio is 5%. This ratio is calculated by using the formula: 10000 × 50/100/100,000 = 5%. The cache hit ratio is low, which indicates that a large number of requests access the disk state data and the values of the state seek metric may not be stable. In this case, the performance significantly decreases.
        
        Therefore, if the number of keys for the PARTITION BY function is large, you can increase the cache size and heap memory of TopN. For more information, see [Configure job deployments](/help/en/flink/realtime-flink/user-guide/configure-a-deployment#task-2101351).
        
        ```
        table.exec.rank.topn-cache-size: 200000
        ```
        
        In this example, if you increase the cache size of TopN from the default value 10,000 to 200,000, the cache hit ratio may reach 100%. This cache hit ratio is calculated by using the following formula: `200,000 × 50/100/100,000 = 100%`.
        
    -   Include a time field in the PARTITION BY function
        
        For example, add the Day field to the ranking each day. Otherwise, the TopN results become out of order due to the time-to-live (TTL) of state data.
        

## How do I perform deduplication in an efficient manner?

Input streams of Realtime Compute for Apache Flink may contain duplicate data, which makes efficient deduplication a frequent demand. Realtime Compute for Apache Flink offers two policies to remove duplicates: Deduplicate Keep FirstRow and Deduplicate Keep LastRow.

-   Syntax
    
    Flink SQL does not provide the syntax to remove duplicates. To reserve the record in the first or last row of duplicate rows under the specified primary key and discard the other duplicates, you must use the SQL ROW\_NUMBER() function together with an OVER clause. Deduplication is a special TopN function.
    
    ```
    SELECT *
    FROM (
       SELECT *,
        ROW_NUMBER() OVER (PARTITION BY col1[, col2..]
         ORDER BY timeAttributeCol [asc|desc]) AS rownum
       FROM table_name)
    WHERE rownum = 1
    ```
    
    **Parameter**
    
    **Description**
    
    ROW\_NUMBER()
    
    Calculates the row number. It is a window function that is used with an OVER clause. The value starts from 1.
    
    PARTITION BY col1\[, col2..\]
    
    Optional. Specifies partition columns, which store primary keys for deduplication.
    
    ORDER BY timeAttributeCol \[asc|desc\])
    
    Specifies the column by which you want to sort data. You must specify a time attribute, which can be proctime or rowtime. You can sort rows in ascending order or descending order based on the time attribute. For the ascending order, the record in the first row of duplicate rows is reserved. For the descending order, the record in the last row of duplicate rows is reserved.
    
    rownum
    
    Specifies the number of rows. You can configure `rownum = 1` or `rownum <= 1`.
    
    The preceding syntax shows that deduplication involves two-level queries:
    
    1.  Use the `ROW_NUMBER()` window function to sort data based on the specified time attribute and use rankings to mark the data.
        
        -   If the time attribute is proctime, Realtime Compute for Apache Flink removes duplicates based on the time when the records are processed. In this case, the sorting result may vary each time the system sorts the data records.
            
        -   If the time attribute is rowtime, Realtime Compute for Apache Flink removes duplicates based on the time when the records are written to Realtime Compute for Apache Flink. In this case, the sorting result remains the same each time the system sorts the data records.
            
    2.  Reserve only the record in the first row under the specified primary key and remove the other duplicates.
        
        You can sort records in ascending or descending order based on the time attribute.
        
        -   Deduplicate Keep FirstRow: Realtime Compute for Apache Flink sorts records in rows in ascending order based on the time attribute and reserves the record in the first row of duplicate rows under the specified primary key.
            
        -   Deduplicate Keep LastRow: Realtime Compute for Apache Flink sorts records in rows in descending order based on the time attribute and reserves the record in the first row of duplicate rows under the specified primary key.
            
        
    
-   Deduplicate Keep FirstRow
    
    If you select the Deduplicate Keep FirstRow policy, Realtime Compute for Apache Flink reserves the record in the first row of duplicate rows under the specified primary key and discards the other duplicates. In this case, the state data stores only the primary key information, and the efficiency of accessing the state data is significantly increased. The following example is used to explain the policy.
    
    ```
    SELECT *
    FROM (
      SELECT *,
        ROW_NUMBER() OVER (PARTITION BY b ORDER BY proctime) as rowNum
      FROM T
    )
    WHERE rowNum = 1
    ```
    
    The preceding code removes duplicates from table T based on the b field, and reserves the record in the first row of duplicate rows under the specified primary key based on the system time. In this example, the proctime attribute indicates the system time when the records are processed in Realtime Compute for Apache Flink. Realtime Compute for Apache Flink sorts records in table T based on this attribute. To remove duplicates based on the system time, you can also call the PROCTIME() function instead of declaring the proctime attribute.
    
-   Deduplicate Keep LastRow
    
    If you select the Deduplicate Keep LastRow policy, Realtime Compute for Apache Flink reserves the record in the last row of duplicate rows under the specified primary key and discards the other duplicates. This policy slightly outperforms the LAST\_VALUE function in terms of performance. The following example is used to explain the policy.
    
    ```
    SELECT *
    FROM (
      SELECT *,
        ROW_NUMBER() OVER (PARTITION BY b, d ORDER BY rowtime DESC) as rowNum
      FROM T
    )
    WHERE rowNum = 1
    ```
    
    The preceding code removes duplicates from table T based on the b and d fields, and reserves the record in the last row under the specified primary key based on the time when the records are written to Realtime Compute for Apache Flink. In this example, the rowtime attribute indicates the event time when the records are written to Realtime Compute for Apache Flink. Realtime Compute for Apache Flink sorts records in table T based on this attribute.
    

## What do I need to focus on when I use built-in functions?

-   Use built-in functions to replace user-defined functions (UDFs)
    
    Built-in functions of Realtime Compute for Apache Flink are under continual optimization. We recommend that you replace UDFs with built-in functions if possible. Realtime Compute for Apache Flink performs the following operations to optimize built-in functions:
    
    -   Improves the serialization and deserialization efficiency.
        
    -   Allows operations on data in bytes.
        
-   Use single-character delimiters in the KEYVALUE function
    
    The signature of the KEYVALUE function is `KEYVALUE(content, keyValueSplit, keySplit, keyName)`. If keyValueSplit and keySplit are single-character delimiters, such as colons (:) or commas (,), Realtime Compute for Apache Flink uses an optimized algorithm. Realtime Compute for Apache Flink searches for the required KeyName values in the binary data and does not segment the entire content. The deployment performance increases by about 30%.
    
-   Take note of the following points when you use the LIKE operator:
    
    -   To match records that start with the specified content, use `LIKE 'xxx%'`.
        
    -   To match records that end with the specified content, use `LIKE '%xxx'`.
        
    -   To match records that contain the specified content, use `LIKE '%xxx%'`.
        
    -   To match records that are the same as the specified content, use `LIKE 'xxx'`, which is equivalent to `str = 'xxx'`.
        
    -   To match an underscore (\_), use `LIKE '%seller/_id%' ESCAPE '/'`. The underscore (\_) is escaped because it is a single-character wildcard in SQL and can match all characters. If you use `LIKE '%seller_id%'`, a large number of results are returned, such as `seller_id`, `seller#id`, `sellerxid`, and `seller1id`. This may cause unexpected results.
        
-   Avoid using regular expressions
    
    Data processing by using regular expressions is time-consuming, which may cause performance overhead a hundred times higher than the addition, subtraction, multiplication, or division operation. In addition, regular expressions may enter an infinite loop in some extreme cases. As a result, jobs may be blocked. For more information, see [Regex execution is too slow](https://stackoverflow.com/questions/4500507/regex-execution-is-too-slow-in-java). To prevent the deployment blocking issue, we recommend that you use the LIKE operator. For more information about common regular expressions, click the following links:
    
    -   [REGEXP](/help/en/flink/realtime-flink/developer-reference/regexp#concept-62550-zh)
        
    -   [REGEXP\_REPLACE](/help/en/flink/realtime-flink/developer-reference/regexp-replace#concept-62545-zh)
        
    

## What do I do if the data reading efficiency is low and backpressure exists when full data is read from tables?

If the downstream node processes data at a low speed, backpressure may occur. You can check whether the sink has backpressure. If the sink has backpressure, use one of the following methods to resolve the backpressure issue on the sink first: To resolve this issue, you can use one of the following methods:

-   Increase the degree of parallelism.
    
-   Enable aggregation optimization features, such as miniBatch.
    

## What are the meanings of different colors for the legends in the **Status Durations** column on the **Subtask Metrics** tab?

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7323040371/p749335.png)

The value in the Status Durations column indicates the duration of each phase of the vertex subtask. This section describes the meaning of the color of each node box.

-   ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1047594071/p749345.png): CREATED
    
-   ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1047594071/p749349.png): SCHEDULED
    
-   ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1047594071/p749358.png): DEPLOYING
    
-   ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1047594071/p749341.png): INITIALIZING
    
-   ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1047594071/p749339.png): RUNNING
    

## What is the RMI TCP Connection thread? Why are the CPU resources occupied by RMI TCP Connection excessively higher than the CPU resources occupied by other threads?

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6550770371/p851883.png)

The RMI TCP Connection thread is a thread in the Remote Method Invocation (RMI) framework in Java. This thread is used to call remote methods. The CPU resources occupied by a thread are dynamically changed in real time. A short-term metric fluctuation may not show that the overall CPU load is excessively high. You can observe the CPU resources occupied by the RMI TCP Connection thread within a period of time and analyze the flame graph of the thread for CPU utilization evaluation. The following figure shows that the RMI TCP Connection thread almost consumes no CPU resources.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3169954371/p851881.png)

## Why does a time difference exist between the current time and the time in the values of the Low Watermark and Datetime of Watermark Timestamp parameters on the Watermarks tab of the Status tab, as well as between the current time and the time in the value of the Task InputWatermark metric in the Watermark section of the Metrics tab?

-   Cause 1: A field of the `TIMESTAMP_LTZ (TIMESTAMP(p) WITH LOCAL TIME ZONE)` data type is used to declare the watermark in the source table. As a result, a time difference exists between the current time and the values of the watermark-related parameters.
    
    The following example shows the difference between the watermark that is declared by using a field of the TIMESTAMP\_LTZ data type and the watermark that is declared by using a field of the TIMESTAMP data type.
    
    -   The following sample code shows that the field that is used to declare the watermark in the source table is of the TIMESTAMP\_LTZ data type.
        
        ```
        CREATE TEMPORARY TABLE s1 (
          a INT,
          b INT,
          ts as CURRENT_TIMESTAMP,-- Use the built-in function CURRENT_TIMESTAMP to generate data of the TIMESTAMP_LTZ data type. 
          WATERMARK FOR ts AS ts - INTERVAL '5' SECOND 
        ) WITH (
          'connector'='datagen',
          'rows-per-second'='1',
          'fields.b.kind'='random','fields.b.min'='0','fields.b.max'='10'
        );
        
        CREATE TEMPORARY TABLE t1 (
          k INT,
          ts_ltz timestamp_ltz(3),
          cnt BIGINT
        ) WITH ('connector' = 'print');
        
        -- Obtain the calculation result. 
        INSERT INTO t1
        SELECT b, window_start, COUNT(*) FROM
        TABLE(
            TUMBLE(TABLE s1, DESCRIPTOR(ts), INTERVAL '5' SECOND))
        GROUP BY b, window_start, window_end;
        ```
        
        **Note**
        
        The calculation result that is generated by using the syntax of the legacy window is the same as the calculation result that is generated by using the `table-valued function (TVF) window`. The following sample code provides an example of the syntax of the legacy window.
        
        ```
        SELECT b, TUMBLE_END(ts, INTERVAL '5' SECOND), COUNT(*) FROM s1 GROUP BY TUMBLE(ts, INTERVAL '5' SECOND), b;
        ```
        
        The following figures show that an 8-hour time difference exists between the current time (UTC+8) and the time specified by the values of the Low Watermark and Datetime of Watermark Timestamp parameters on the Watermarks tab of the Status tab, as well as between the current time (UTC+8) and the time specified by the value of the Task InputWatermark metric in the Watermark section of the Metrics tab after a draft is deployed and published in the development console of Realtime Compute for Apache Flink.
        
        -   Watermark&Low Watermark
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6448020171/p766009.png)
            
        -   Task InputWatermark
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6448020171/p766006.png)
            
    -   The following sample code shows that the field that is used to declare the watermark in the source table is of the TIMESTAMP (TIMESTAMP(p) WITHOUT TIME ZONE) data type.
        
        ```
        CREATE TEMPORARY TABLE s1 (
          a INT,
          b INT,
          -- No time zone information is included in the timestamp of the simulated data source. In this case, the timestamp is incremented by one second from 2024-01-31 01:00:00. 
          ts as TIMESTAMPADD(SECOND, a, TIMESTAMP '2024-01-31 01:00:00'),
          WATERMARK FOR ts AS ts - INTERVAL '5' SECOND 
        ) WITH (
          'connector'='datagen',
          'rows-per-second'='1',
          'fields.a.kind'='sequence','fields.a.start'='0','fields.a.end'='100000',
          'fields.b.kind'='random','fields.b.min'='0','fields.b.max'='10'
        );
        
        CREATE TEMPORARY TABLE t1 (
          k INT,
          ts_ltz timestamp_ltz(3),
          cnt BIGINT
        ) WITH ('connector' = 'print');
        
        -- Obtain the calculation result. 
        INSERT INTO t1
        SELECT b, window_start, COUNT(*) FROM
        TABLE(
            TUMBLE(TABLE s1, DESCRIPTOR(ts), INTERVAL '5' SECOND))
        GROUP BY b, window_start, window_end;
        ```
        
        After you deploy and publish a draft in the development console of Realtime Compute for Apache Flink, the time specified by the values of the Low Watermark and Datetime of Watermark Timestamp parameters on the Watermarks tab of the Status tab and the time specified by the value of the Task InputWatermark metric in the Watermark section of the Metrics tab are the same as the current time. In this example, no time difference exists between the current time and the simulated time.
        
        -   Watermark&Low Watermark
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6448020171/p765987.png)
            
        -   Task InputWatermark
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6448020171/p765985.png)
            
-   Cause 2: The time zone of the display time in the development console of Realtime Compute for Apache Flink is different from the time zone of the display time on the Apache Flink UI.
    
    The display time in the development console of Realtime Compute for Apache Flink is in UTC+0. However, the display time on the Apache Flink UI is the local time that is converted based on the local time zone that the Apache Flink UI obtains by using the browser. The following example shows the difference between the display time in the development console of Realtime Compute for Apache Flink and the display time on the Apache Flink UI when UTC+8 is used. The display time in the development console of Realtime Compute for Apache Flink is 8 hours earlier than the display time on the Apache Flink UI.
    
    -   Development console of Realtime Compute for Apache Flink
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6448020171/p765987.png)
        
    -   Apache Flink UI
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6448020171/p765986.png)
        
    

## **How do I troubleshoot backpressure issues?**

1.  On the **Deployments** page, click the name of the deployment. On the deployment details page, click the **Status** tab.
    
2.  Check the Busy and Backpressured parameters to determine the operator on which backpressure occurs.
    
    A redder Busy indicator light indicates a heavier load. A darker Backpressured indicator indicates a more severe backpressure issue.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8851997471/p912296.png)
    
3.  Click the operator on which backpressure occurs.
    
4.  On the **BackPressure** tab, check the backpressure status of the subtasks.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8851997471/p912297.png)
    

## **How do I troubleshoot high latency issues?**

On the **Alarm** or **Metrics** tab of the **Deployments** page, view the `currentEmitEventTimeLag` and `currentFetchEventTimeLag` metrics and perform related handling operations. Metric description:

-   If the value of the `currentEmitEventTimeLag` metric is excessively high, a latency exists when data is pulled or processed for the deployment. You must check whether the operator performance meets the requirements.
    
-   If the value of the `currentFetchEventTimeLag` metric is excessively high, a latency exists when data is pulled or processed in the upstream system for the deployment. You must troubleshoot network I/O issues and issues in the upstream system.
    

**Note**

If the high latency issue occurs in the upstream system, the values of both the metrics increase at the same time.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6304228471/p912352.png)

## **What do I do if backpressure occurs due to data hotspot issues of Flink SQL deployments?**

Check the subtask status of a deployment that has backpressure. You can determine that this issue is caused by data hotspots. In this case, use one of the following methods for performance optimization:

-   **Enable LocalGlobal to resolve common data hotspot issues**
    
    The LocalGlobal policy can filter out some skewed data by using local aggregation. This efficiently reduces data hotspot issues in global aggregation and improves deployment performance.
    
    The LocalGlobal policy divides the aggregation process into two phases: local aggregation and global aggregation. These phases are equivalent to the combine and reduce phases in MapReduce. In the local aggregation phase, Realtime Compute for Apache Flink aggregates a micro-batch of data that is locally cached at each upstream node, and generates the accumulator value for each micro-batch. In the global aggregation phrase, the accumulator is merged into the final result. Then, the global aggregation result is generated.
    
    -   **Scenarios**
        
        The LocalGlobal policy is suitable for scenarios in which you want to improve deployment performance and resolve data hotspot issues by using common aggregate functions, such as SUM, COUNT, MAX, MIN, and AVG.
        
    -   **Limits**
        
        LocalGlobal is enabled by default. The policy has the following limits:
        
        -   It can take effect only when miniBatch is enabled.
            
        -   AggregateFunction must be used to merge data.
            
        
    -   **Verification**
        
        To determine whether LocalGlobal is enabled, check whether the GlobalGroupAggregate or LocalGroupAggregate node exists in the final topology.
        
-   **Enable PartialFinal to resolve data hotspot issues when you use the COUNT DISTINCT function**
    
    In normal cases, you need to add a layer that scatters data by distinct key when you use the COUNT DISTINCT function. This way, you can divide the aggregation process into two phases to resolve data hotspot issues. Realtime Compute for Apache Flink now provides the PartialFinal policy to automatically scatter data and divide the aggregation process.
    
    The LocalGlobal policy improves the performance of common aggregate functions, such as SUM, COUNT, MAX, MIN, and AVG. However, the LocalGlobal policy is less effective for improving the performance of the COUNT DISTINCT function. This is because local aggregation cannot remove duplicate distinct keys. As a result, a large amount of data is stacked up in the global aggregation phase.
    
    -   **Scenarios**
        
        The PartialFinal policy is suitable for scenarios in which the aggregation performance cannot meet your requirements when you use the COUNT DISTINCT function.
        
        **Important**
        
        -   You cannot enable PartialFinal in the Flink SQL code that contains UDAFs.
            
        -   To prevent resources from being wasted, we recommend that you enable PartialFinal only when the amount of data is large. PartialFinal automatically scatters data and divides the aggregation process into two phases. This causes additional network shuffling.
            
        
    -   **Method to enable PartialFinal**
        
        PartialFinal is disabled by default. To enable this feature, you must enter the following code in the **Other Configuration** field of the **Parameters** section on the **Configuration** tab of the deployment details page.
        
        ```
        table.optimizer.distinct-agg.split.enabled: true
        ```
        
    -   **Verification**
        
        Check whether one-layer aggregation changes to two-layer aggregation in the final topology.
        

## **What do I do if the consumption of upstream data is unstable?**

Possible causes and solutions:

-   **Inconsistency between the upstream data generation speed and the data processing speed**
    
    Analyze the upstream data generation rules to ensure that the data generation speed is consistent with the data processing speed.
    
-   **Backpressure in deployments**
    
    Check whether backpressure exists on the job vertex, which affects the upstream data consumption speed. If the deployment has only one node, add the `pipeline.operator-chaining: 'false'` configuration and restart the deployment. Break down the operator chain of the deployment and check whether the consumption rate is adversely affected by a node that has backpressure.
    
-   **Abnormal I/O rate**
    
    Check the data input metrics and consumption rate of Realtime Compute for Apache Flink at the time when the unstable data consumption issue occurs to check whether the issue is caused by the abnormal I/O rate.
    
-   **Abnormal data consumption rate**
    
    Check whether the data consumption rate fluctuates with the time points when garbage collection (GC) occurs. If the rate fluctuates with the time points when GC occurs, check the memory usage of the related TaskManager node.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6304228471/p912362.png)
