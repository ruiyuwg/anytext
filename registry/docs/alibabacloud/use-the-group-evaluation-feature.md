When you create an alert monitoring rule, you can configure the Group Evaluation parameter. When the alert monitoring system processes query and analysis results, the system can group the results based on specified fields. The results in each group are evaluated based on a specified trigger condition. If the results in a group meet the trigger condition, an alert is triggered. You can use an alert monitoring rule to monitor multiple groups of query and analysis results at the same time. You can manage alerts and incidents for each group.

**Important**

-   After you configure the group evaluation feature, the maximum number of groups in which query and analysis results can be evaluated at a time is 100. If the number of groups in which query and analysis results are evaluated is greater than 100, only 100 of the groups are selected at random and sent to the alert policy.
    
-   When you select fields for group evaluation, we recommend that you select a field that can identify a monitored entity and whose values can be enumerated. If a field cannot identify a monitored entity, we recommend that you do not select the field. If you do not select a suitable field, an excessive number of groups are generated. If the trigger condition in a group is met, an alert is triggered. If a large number of groups exist, alert storms may occur. In this case, you may miss out on important alert information.
    
    For example, you can select fields such as the host and method fields in NGINX logs and the bucket field in Object Storage Service (OSS) access logs. Do not select fields such as the request\_time and body\_size fields in NGINX logs or the err\_cnt field in error logs.
    

## Example 1: Monitor time series data by group

In this example, the metric data of multiple servers is stored in a Metricstore. Requirement: If the CPU utilization that is specified by cpu\_util of each server exceeds 95%, an alert is triggered, and Simple Log Service sends an alert notification for each server. To meet this requirement, you can configure the group evaluation feature when you create an alert monitoring rule. ![Time series data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609872261/p262877.png)

You can configure the following parameters:

-   **Query Statistics**: Specify `* | select promql_query_range('cpu_util') from metrics limit 1000`.
    
    This query statement is used to query the CPU utilization of each server.
    
-   **Group Evaluation**: Select **Auto Tag**.
    
    This value specifies that the query and analysis results of time series data are automatically grouped.
    
-   **Trigger Condition**: Select **data matches the expression**, enter **value > 95**, and then select **Severity: High**.
    
    If a value of the **value** field in the query and analysis results is greater than 95, an alert whose severity is High is triggered.
    
-   **Add Annotation**: Specify annotations such as the title and description of an alert. You can reference field variables such as ${host} in an annotation. For more information, see [Add labels and annotations](/help/en/sls/labels-and-annotations#reference-2061517).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4411432271/p828095.png)

## Example 2: Monitor logs by group

In this example, OSS access logs are monitored. Requirement: If the number of times that the HTTP status code 500 is returned for each bucket per minute exceeds 1,000, an alert is triggered, and Simple Log Service sends an alert notification for each bucket. To meet this requirement, you can configure the group evaluation feature when you create an alert monitoring rule.

You can configure the following parameters:

-   **Query Statistics**: Specify `http_status=500 | select bucket,count(1) as pv group by bucket having pv > 1000 order by pv desc`.
    
    This query statement is used to query the buckets for which the number of times that the HTTP status code 500 is returned exceeds 1,000.
    
-   **Group Evaluation**: Select **Custom Tag** and **bucket**.
    
    The values specify that the query and analysis results are grouped by bucket.
    
-   **Trigger Condition**:
    
    -   Condition 1: Select **data matches the expression**, enter **pv > 3000**, and then select **Severity: High**.
        
        If a value of the **pv** field in the query and analysis results is greater than 3000, an alert whose severity is High is triggered.
        
    -   Condition 2: Select **Data is returned** and select **Severity: Medium**.
        
        If data is returned in the query and analysis results, an alert whose severity is Medium is triggered.
        
-   **Add Annotation**: Specify annotations such as the title and description of an alert. You can reference field variables such as _${pv}_ in an annotation. For more information, see [Add labels and annotations](/help/en/sls/labels-and-annotations#reference-2061517).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4411432271/p828096.png)
