Every shard of Simple Log Service triggers the function when new data is written. Therefore, the trigger frequency refers to the number of times that a Logstore is triggered as a whole. In addition, when the trigger is delayed, data catchup occurs, which may shorten the trigger interval of triggers.

## **Problem description**

The execution frequency of a Simple Log Service trigger is sometimes higher than the expected trigger frequency.

## Causes

A function is separately called for each shard. Even if the number of times that a function is called for shards in a Logstore is large, the interval at which the function is called for each shard can be consistent with the call interval that is specified.

The call interval at which the function is called for a shard is the same as the time interval that is specified for data transformation. When a function is called, latency may exist. This may cause the call interval to be larger than expected. The following list describes two scenarios with a specified call interval of 60 seconds.

-   Scenario 1: The function is called, and latency does not exist. The function is called at 60-second intervals to transform data that is generated in the following time range: `[now -60s, now)`.
    
    **Note**
    
    A function is separately called for each shard. If a Logstore contains 10 shards and latency does not exist when the function is called, the function is called 10 times at 60-second intervals to transform data in real time.
    
-   Scenario 2: The function is called, and latency exists. The time difference between the point in time at which data in a Simple Log Service shard is transformed and the point in time at which the latest data is written to Simple Log Service is greater than 10 seconds. In this case, the trigger shortens the call interval. For example, the function can be called at 2-second intervals to transform data that is generated within 60 seconds.
