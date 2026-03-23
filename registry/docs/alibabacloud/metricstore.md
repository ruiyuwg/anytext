This topic describes how to create, modify, and delete MetricStores and time series data in the Simple Log Service console. Before you delete a MetricStore, you must delete all its Logtail configurations. You can also delete logs automatically by reducing the data retention period.

## **Terms**

A Metricstore is a unit in Simple Log Service that is used to collect, store, and query metrics. Each Metricstore belongs to a project, and you can create multiple Metricstores within a single project. For more information, see [Metricstore](/help/en/sls/metricstore).

## Prerequisite

A project has been created. For more information, see [Manage projects](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb).

## Create MetricStore

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Metric Storage** > **Logstores** tab, click the **+** icon.
    
4.  In the **Create Metricstore** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Metricstore Name**
    
    The MetricStore name must be unique within its Project. You cannot change the name after creation.
    
    **Data Retention Period**
    
    The retention period for time series data collected by Simple Log Service in the MetricStore.
    
    -   Select **Specified Days** as the data retention pattern and set the data retention period as needed. Unit: days. Valid values: 1 to 3000.
        
        **Warning**
        
        -   After the log retention period ends, logs are deleted.
            
        -   If you shorten the data retention period, Simple Log Service deletes all expired logs within 1 hour. However, the **Usage Details** on the Simple Log Service console homepage is updated the next day. For example, if you change the data retention period from 5 days to 1 day, Simple Log Service deletes the logs of the previous four days within 1 hour.
            
        
    -   When you select **Permanent Storage** as the data retention mode, Simple Log Service permanently retains the collected metric.
        
        **Note**
        
        If you query the data retention period using an SDK and the returned value is 3650, it indicates permanent retention.
        
    
    **Shards**
    
    The number of shards. Simple Log Service provides shards that allow you to read and write data. Each shard supports a write capacity of 5 MB/s and 500 writes/s and a read capacity of 10 MB/s and 100 reads/s. You can create up to 10 shards in each metricstore, and up to 200 shards in each project. For more information, see [Shard](/help/en/sls/shard#concept-wnn-rqn-vdb).
    
    **Automatic Sharding**
    
    If you turn on **Automatic Sharding**, Simple Log Service increases the number of shards when the existing shards cannot accommodate the data that is written. For more information, see [Manage shards](/help/en/sls/manage-shards#concept-yks-jj5-vdb).
    
    **Maximum Shards**
    
    After you turn on the **Automatic Sharding** switch, the system supports automatic sharding up to 256 readwrite shards.
    

## Modify MetricStore Configuration

1.  On the **Metric Storage** > **Logstores** tab, hover the pointer over the target MetricStore and choose **Modify**.
    
2.  On the **Metricstore Attributes** page, click **Modify**.
    
    -   **Basic Information**
        
        -   **Data Retention Period**: For parameter descriptions, see [Create a Metricstore](#section-8ju-apk-egg).
            
        -   **Automatic Sharding**: You can enable this feature to automatically split shards and increase write throughput. For more information, see [Manage shards](/help/en/sls/manage-shards#section-zw3-x4v-22b).
            
        -   **Maximum Shards**: The maximum number of shards into which a single Metricstore can be split. A Metricstore can be automatically split into a maximum of 256 shards that are in the read/write state.
            
        -   **Log Public IP**: If you enable the **Log Public IP** switch, Simple Log Service automatically adds the following information to the **Tag** field of each log:
            
            -   **\_\_client\_ip\_\_**: The public IP address of the device from which the log originates.
                
            -   **\_\_receive\_time\_\_**: The time when the log arrives at the server. This value is a UNIX timestamp that indicates the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
                
    -   **Shard Management:**:
        
        By default, two shards are created for a Metricstore. You can split or merge shards as needed. For more information, see [Manage shards](/help/en/sls/manage-shards#concept-yks-jj5-vdb).
        
    -   **Query Acceleration Settings**
        
        By default, the Prometheus Query compute engine does not cache execution results. Each query must read all data and rerun the calculation. The standard compute engine supports only single-coroutine calculations on a single node. This can lead to poor performance in scenarios that involve many time series, long query time ranges, or complex logic. To provide more efficient PromQL calculations, the SLS time series compute engine introduces two enhancements: **Global Caching** and **Concurrent Computing**. For more information about the low-level design principles and configuration methods, see [Query acceleration](/help/en/sls/speed-up-promql).
        
    -   **Write Settings**
        
        MetricStore organizes and stores metric data in chronological order. If a time series database receives too much out-of-order dirty data, such as continuously writing historical data to a real-time MetricStore or generating invalid data due to machine clock issues, query performance is severely impacted.
        
        MetricStore can filter out monitoring data with abnormal timestamps. You can configure a time window on the write configuration page. The unit for the left and right interval configuration items is seconds. Based on the data arrival time at the SLS service, the valid time range for data to be written is \[Data arrival time - Left interval, Data arrival time + Right interval\]. Data that falls outside this range is discarded. If you set the interval to \[0,0\], the time range rule is not applied.
        
        **Note**
        
        This feature applies only to data written using the Prometheus Remote Write protocol. For more information about connection types, see [Collect metric data from Prometheus using the Remote Write Protocol](/help/en/sls/collect-metric-data-from-prometheus-by-using-the-remote-write-protocol).
        
    -   **Ingest Processor**
        
        The ingest processor lets you process data before it is ingested. This supports various scenarios, such as modifying fields, parsing fields, filtering data, and masking data. For more information, see [Processing during ingestion (ingest processor)](/help/en/sls/sls-write-processor/).
        
    -   **Tag**
        
        You can add tags to a MetricStore. Tags help you group, manage, and distinguish MetricStores.
        
    
3.  Click **Save**.
    

## Delete MetricStore

**Important**

-   Before you can delete a MetricStore, you must delete all Logtail configurations that are associated with the MetricStore. For more information, see [Delete a Logtail collection configuration](/help/en/sls/manage-logtail-configurations-for-log-collection#section-vgw-rm1-ry).
    
-   If data shipping is enabled for the MetricStore, you must stop writing new data to it before deletion. You must also confirm that all existing data in the MetricStore has been shipped successfully.
    
-   Storage and other fees are charged for the day on which you delete a MetricStore. Fees are no longer incurred starting from the next day. This means you will not receive a Simple Log Service bill on the third day after deleting all MetricStores.
    

1.  On the **Metric Storage** > **Logstores** tab, move the pointer over the target MetricStore and choose **Delete**.
    
    **Warning**
    
    After a MetricStore is deleted, the MetricStore and its stored time series data are permanently removed and cannot be restored. Proceed with caution.
    
2.  In the confirmation dialog box, click **Confirm**.
    

## Delete Time Series Data

Metrics are automatically deleted when the specified data retention period ends. You can delete metrics sooner by shortening the **Data Retention Period**.

**Important**

If you shorten the data retention period, Simple Log Service deletes all expired data within one hour. However, the **Usage Details** on the console home page are updated the next day. For example, if you change the data retention period from 5 days to 1 day, Simple Log Service deletes the data from the previous four days within one hour.
