After logs are collected to Simple Log Service (SLS), use the alerting system of SLS to configure alerts based on log keywords.

## Background information

Logs capture information about a system's operation and exceptions, such as warnings and errors like panic errors in Go or java.lang.StackOverflowError in Java. They can also record system status, such as payment failures. Keyword-based log retrieval, monitoring, and alerting are commonly used to quickly identify issues. SLS offers a high-performance, O&M-free alerting solution with flexible configurations to set up alerts based on log keywords.

## Use case 1: Specify keywords to trigger alerts

This use case provides an example on how to configure a query statement and an alert monitoring rule that triggers alerts when a specified keyword appears in logs.

-   Query statement
    
    Set the time range to **15 Minutes(Relative)** and execute the following statement to query the logs that include the ERROR keyword. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).
    
    ```
    ERROR
    ```
    
-   Query and analysis result
    
    The following query and analysis result shows that the ERROR keyword appears once within the last 15 minutes.
    
    ![Keyword-based alert](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p401746.png)
    
-   Alert monitoring rule
    
    Create an alert monitoring rule based on the obtained query and analysis result. For more information, see [Create an alert monitoring rule for logs](/help/en/sls/create-an-alert-monitoring-rule-for-logs#task-2045171). You need to take note of the following parameters:
    
    -   Set the **Trigger Condition** parameter to **Data is returned**. An alert is triggered when the ERROR keyword appears in logs.
        
    -   Set the **Description** field in the **Add Annotation** parameter to **${logging}** and **Alert Template** to **SLS built-in content template**. An alert notification will include the content of the logging field in a raw log.
        
    
    ![Alert monitoring rule](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p401897.png)
    
-   Alert notification
    
    After the alert monitoring rule is created, you can receive an alert notification in the specified DingTalk group when the ERROR keyword appears in logs. Click **View Details** to view the log for which an alert is generated to identify root causes.
    

## Use case 2: Configure alerts based on the number of times that a keyword appears in logs

This use case provides an example on how to configure a query statement and an alert monitoring rule that triggers alerts when the number of times that a keyword appears in logs reaches a specified number within a specified time range.

-   Query statement
    
    Set the time range to **1 Hour(Relative)** and execute the following statement to query the number of times that the ERROR keyword appears in logs within an hour. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).
    
    ```
    ERROR | SELECT count(*) AS cnt
    ```
    
-   Query and analysis result
    
    The following query and analysis result shows that the ERROR keyword appears 11 times within the last hour.
    
    ![Query and analysis result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p401978.png)
    
-   Alert monitoring rule
    
    You can create an alert monitoring rule based on the obtained query and analysis result. For more information, see [Create an alert monitoring rule for logs](/help/en/sls/create-an-alert-monitoring-rule-for-logs#task-2045171). You need to take note of the following parameters:
    
    -   Set the **Trigger Condition** parameter to **data matches the expression, cnt > 5**. An alert is triggered when the number of times that the ERROR keyword appears in logs exceeds 5 within an hour.
        
    -   Set the **Description** field in the **Add Annotation** parameter to **${cnt} times that the ERROR keyword appears within an hour** and **Alert Template** to **SLS builtin content template**. An alert notification will display the number of times that the ERROR keyword appears within the last hour.
        
    
    ![Alert monitoring rule](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p401970.png)
    
-   Alert notification
    
    After the alert monitoring rule is created, you can receive an alert notification in the specified DingTalk group when the number of times that the ERROR keyword appears in logs exceeds 5 within the last hour. Click **View Details** to view the log for which an alert is generated to identify root causes.
    

## Use case 3: Configure alerts by comparing the number of times that a keyword appears within a specific time range on a specified day and the day before

A keyword appears at regular intervals, such as daily, and is more likely to appear during daytime than during nighttime. Absolute values such as the number of times that a keyword appears may not be a suitable indication of the health of a system. Use interval-valued comparison and periodicity-valued comparison functions to calculate the percentage of the number of times that a keyword appears in logs within a specific time range on one day to the number of times that the keyword appears in logs within the same time range on a different day and configure alerts based on the calculation result.

-   Query statement
    
    Set the time range to **1 Hour(Relative)** and execute the following statement to calculate the percentage of the number of times that the ERROR keyword appears in logs within the last hour to the number of times that the ERROR keyword appeared in logs within the same time range the day before. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb). For more information about the compare function, see [Interval-valued comparison functions and periodicity-valued comparison functions](/help/en/sls/interval-valued-and-periodicity-valued-comparison-functions#concept-ftn-3hd-p2b).
    
    ```
    ERROR |
    SELECT
      diff [1] AS today,
      diff [2] AS yesterday,
      round((diff [3]-1) * 100, 2) AS ratio
    FROM  (
        SELECT
          compare(cnt, 86400) AS diff
        FROM      (
            SELECT
              COUNT(*) AS cnt
            FROM          log
          )
      )
    ```
    
-   Query and analysis result
    
    The following query and analysis result shows that the ERROR keyword appears 11 times within the last hour and 6 times within the same time range the day before. The growth rate is 83.33%.
    
    ![Query and analysis result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p401991.png)
    
-   Alert monitoring rule
    
    You can create an alert monitoring rule based on the obtained query and analysis result. For more information, see [Create an alert monitoring rule for logs](/help/en/sls/create-an-alert-monitoring-rule-for-logs#task-2045171). You need to take note of the following parameters:
    
    -   Set the **Trigger Condition** parameter to **data matches the expression, ratio > 10**. An alert is triggered when the percentage of the number of times that the ERROR keyword appears in logs within the last hour to the number of times that the ERROR keyword appeared in logs within the same time range the day before exceeds 10%.
        
    -   Set the **Description** field in the **Add Annotation** parameter to **${today} times that the keyword ERROR appears in logs within the last hour, ${yesterday} times that the ERROR keyword appeared in logs within the same time range the day before, and the growth rate is ${ratio}%** and **Alert Template** to **SLS builtin content template**. An alert notification will display the number of times that the ERROR keyword appears in logs within the last hour, the number of times that the ERROR keyword appeared in logs within the same time range the day before, and the growth rate.
        
    
    ![Alert monitoring rule](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p402004.png)
    
-   Alert notification
    
    After the alert monitoring rule is created, you can receive an alert notification in the specified DingTalk group when the percentage of the number of times that the ERROR keyword appears in logs within the last hour to the number of times that the ERROR keyword appeared in logs within the same time range the day before exceeds 10%. Click **View Details** to view the log for which an alert is generated to identify root causes.
    

## Use case 4: Configure alerts for anomalies based on machine learning algorithms

The previous use cases outline common scenarios for keyword-based alert configurations. In certain situations, SLS machine learning algorithms are needed for alert setup. For instance, while a keyword's daily appearance may not fluctuate often, it can suddenly spike or drop at specific times. To detect such changes early, time series forecasting and anomaly detection using SLS machine learning algorithms can be employed. For more information, see [Machine learning functions](/help/en/sls/user-guide/overview-23#concept-cgz-n4h-kfb).

-   Query statement
    
    Set the time range to **4 Hours(Relative)** and execute the following statement to query the number of times that anomalies are detected. The anomalies are detected on the numbers of times that the ERROR keyword appears within the last 4 hours. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb). For more information about the ts\_predicate\_simple function, see [ts\_predicate\_simple](/help/en/sls/prediction-and-anomaly-detection-functions#section-n3p-qlq-kfb).
    
    ```
    ERROR |
    SELECT
      ts_predicate_simple(stamp, value, 6)
    FROM  (
        select
          __time__-__time__ % 30 AS stamp,
          count(1) AS value
        FROM      log
        GROUP BY
          stamp
        ORDER BY
          stamp
      )
    ```
    
-   Query and analysis result
    
    The following query and analysis result shows that the src, predict, upper, lower, and anomaly\_prob columns are returned. If a value of anomaly\_prob is greater than 0, an anomaly is detected. The total number of anomalies is equal to the number of data entries for which the value of anomaly\_prob is greater than 0. Configure alerts based on the numbers. ![Query and analysis result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8489939461/p402474.png)
    
    The query and analysis result can be displayed in a time series chart. You can easily identify abrupt changes. Each small red circle in the following time series chart represents an anomaly. The chart shows that 15 anomalies are detected within the specified time range.
    
    ![Query and analysis result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p402470.png)
    
-   Alert monitoring rule
    
    Create an alert monitoring rule based on the obtained query and analysis result. For more information, see [Create an alert monitoring rule for logs](/help/en/sls/create-an-alert-monitoring-rule-for-logs#task-2045171). You need to take note of the following parameters:
    
    -   Set the **Trigger Condition** parameter to **the query result contains, >, 5, anomaly\_prob > 0**. An alert is triggered when the number of times that anomalies are detected exceeds 5 within the last 4 hours.
        
    -   Set the **Description** field in the **Add Annotation** parameter to **the number of times that anomalies are detected exceeds 5** and **Alert Template** to **SLS builtin content template**. An alert notification will display the number of anomalies within the last 4 hours.
        
    
    ![Alert monitoring rule](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7829939461/p402492.png)
    
-   Alert notification
    
    After the alert monitoring rule is created, you can receive an alert notification in the specified DingTalk group when the number of times that anomalies are detected exceeds 5 within the last 4 hours. Click **View Details** to view the log for which an alert is generated to identify root causes.
