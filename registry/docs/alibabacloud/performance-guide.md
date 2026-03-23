This topic describes the factors that may affect data transformation performance.

The speed of a data transformation task depends on the number of source shards and the logic and complexity of the transformation rule. For more information, see [Data transformation basics](/help/en/sls/data-transformation-basics#concept-1580694). In most cases, one shard is required for a transformation speed of 1 MB uncompressed data per second (85 GB/day). For example, if data is written to the source Logstore at a speed of 1 TB per day, the number of shards in the source Logstore must be 12 (1024 GB/85 = 12). For more information, see [Split a shard](/help/en/sls/manage-shards#section-awx-35f-vdb).

## Data transformation performance

The data transformation speed is related to the following factors of a transformation rule:

-   Output log entries
    -   Log size. The larger the output log size, the slower the transformation speed. This is because the output of larger data packets requires more computing and network resources. The smaller the output log size, the faster the transformation speed. The output log size is measured by the number of output log entries (a log entry is split if the size is large), number of fields contained in output log entries, or the content of output log entries.
    -   Log groups. Output log entries are tagged and packaged into groups. More log groups require more network resources and lead to a slower transformation speed. The fewer the output log groups, the faster the transformation speed.
-   Transformation logic
    
    The more complex the transformation logic, the slower the transformation speed. This is because more complex transformation logic results in more searches, computations, and external resource synchronizations. These processes consume more computing and network resources. The less complex the transformation logic, the faster the transformation speed.
    
-   Third-party data sources
    
    If you use a third-party source to enrich your data, a larger size of pulled data indicates a slower transformation speed. In addition, if the pulled data such as OSS objects reside in another region, the transformation speed will also be reduced.
    

## Improve the data transformation performance of the source Logstore

-   Improve the performance of real-time data transformation.
    
    You can increase the number of shards to improve the performance of real-time data transformation. For more information about the billing methods of shards, see [Pay-by-feature](/help/en/sls/pay-as-you-go#section-xbr-p5s-2fb).
    
-   Improve the performance of historical data transformation.
    
    Shard splitting applies only to new data. If the size of historical data is large and the number of shards is insufficient, you can create multiple data transformation tasks for the source Logstore and configure non-overlapping transformation periods for the tasks. For example, if you need to transform historical log data that is generated from September 1 to September 10, you can create nine tasks to transform data that is generated in the following periods: `[September 1, September 2), [September 2, September 3) ... [September 9, September 10]`.
    
    **Note** The transformation period is calculated based on the log receiving time. For more information, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job#task-1181217).
    

## Improve the data transformation performance of the destination Logstore

The number of shards in the destination Logstore depends on the following two factors:

-   The write speed during data transformation. The maximum write speed of a shard is 5 MB/s. You can estimate the specific write speed based on the number of shards in the source Logstore and the number of concurrent data transformation tasks.
    
    For example, if the source Logstore has 20 shards, the destination Logstore must have at least 4 shards.
    
-   Whether you need to create indexes to query data in the destination Logstore. If you need to create indexes to query data in the destination Logstore, we recommend that you plan 50 million log entries for a shard and specify the number of shards based on the plan.
    
    For example, if each log entry is 1 KB and the size of the log entries that you need to transform and write every day is 10 GB, the number of log entries is 10 million. If you need to query data that covers 30 days (about 300 million log entries), we recommend that you create 6 shards in the destination Logstore.
