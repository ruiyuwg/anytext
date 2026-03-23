This topic describes the variables that are available for use in the original alert templates of Simple Log Service. This topic also describes the methods that you can use to reference the variables.

## Reference methods

**Important**

You must reference variables by using the full names of the variables. If a referenced variable cannot be found or is invalid, Simple Log Service replaces the variable with an empty string. If the value of a referenced variable is of the object type, the value is converted into a JSON string.

When you configure an action policy, you must select an alert template. The alert template specifies the content and subject of alert notifications. When you configure the **Content** and **Subject** parameters, you can use the `${fieldName}` syntax to reference the variables in the alert template. Before Simple Log Service sends an alert notification, Simple Log Service replaces the variables that are referenced in the **Content** and **Subject** fields with the actual values. For example, Simple Log Service replaces `${project}` with the name of the project to which the configured alert rule belongs.

## Available variables and reference examples

The following table describes the available variables and provides examples on how to reference the variables.

**Variable**

**Description**

**Type**

**Value example**

**Reference example**

aliuid

The ID of the Alibaba Cloud account to which the project belongs.

string

117918664953\*\*\*\*

The project in which the alert is triggered belongs to the `${aliuid}` Alibaba Cloud account.

alert\_instance\_id

The ID of the instance for which the alert is triggered.

string

ee16a8f435485f3f-5be6b81edc520-3d6\*\*\*\*

The ID of the instance for which the alert is triggered is `${alert_instance_id}`.

project

The project to which the alert rule belongs.

string

my-project

The alert is triggered in the `${project}` project.

alert\_id

The ID of the alert rule. Each alert rule must have a unique ID in the project to which the alert rule belongs.

string

0fdd88063a611aa114938f9371daeeb6-1671a52\*\*\*\*

The ID of the alert rule is `${alert_id}`.

alert\_type

The type of the alert that is triggered.

-   sls\_alert: The alert is triggered based on the alert rule in Simple Log Service.
    
-   sls\_pub: The alert is ingested from an alerting system rather than Simple Log Service.
    

string

sls\_alert

The type of the alert is `${alert_type}`.

alert\_name

The name of the alert rule.

string

new2

The name of the alert rule is `${alert_name}`.

next\_eval\_interval

The length of time before the next evaluation activity starts.

int

900

The next evaluation activity starts in `${next_eval_interval}` seconds.

alert\_time

The time at which the current evaluation activity starts.

int

1616744734

The current evaluation activity starts at `${alert_time}`.

fire\_time

The time at which the alert is triggered for the first time.

int

1616059834

The alert is triggered at `${fire_time}` for the first time.

status

The status of the alert.

-   firing: The alert is triggered.
    
-   resolved: The alert is cleared.
    

string

firing

The status of the alert is `${status}`.

resolve\_time

The time at which the alert is cleared.

-   If the alert is in the firing state, the value of this variable is 0.
    
-   If the alert is in the resolved state, the value of this variable is a specific point in time.
    

int

0

The alert is cleared at `${resolve_time}`.

results

The parameters and intermediate results of the query. The value of this variable is an array. For more information about the value of this variable, see the "[Description of the results variable](#section-5op-xn7-tbw)" section of this topic.

array

```
[
{
"store_type": "log",
"region": "cn-hangzhou",
"project": "sls-alert-test",
"store": "test",
"query": "* | select count(1) as cnt",
"start_time": 1616741485,
"end_time": 1616745085,
"dashboard_id": "mydashboard",
"raw_results": [{"cnt": "4"}],
"raw_result_count": 1,
"truncated": false,
"role_arn": ""
}
]
```

The query starts at `${results[0].start_time}` for the first time and ends at `${results[0].end_time}`.

**Note**

In this example, the value 0 is the serial number of the chart.

labels

The labels of the alert.

map

{"env":"test"}

The labels of the alert are `${labels}`.

annotations

The annotations of the alert.

map

{ "title": "Alert title","desc": "Alert description" }

The annotations of the alert are `${annotations}`.

severity

The severity level of the alert.

-   10: Critical
    
-   8: High
    
-   6: Medium
    
-   4: Low
    
-   2: Report
    

int

10

The severity level of the alert is `${severity}`.

policy

The alert policy or action policy that you configure. For more information about the value of this variable, see the "[Description of the policy variable](#section-el1-n7b-2fy)" section of this topic.

map

```
{
    "alert_policy_id": "sls.test-alert",
    "action_policy_id": "sls.test-action",
    "use_default": false,
    "repeat_interval": "6m0s"
}
```

The ID of the alert policy is `${policy.alert_policy_id}`.

region

The ID of the region in which the alert is triggered.

string

cn-hangzhou

The alert is triggered in the `${region}` region.

drill\_down\_query

The query statement that is used for drill-down analysis. The value of this variable is empty for custom alert templates. This variable is available for use in the alert templates of Log Audit Service, Cost Manager, and SLB Log Center.

string

`* | select count(1) as cnt`

None.

alert\_url

The URL of the alert.

string

https://sls.console.alibabacloud.com/lognext/project/test-xxxx/alert/alert-1617164106-940166

The URL of the alert is `${alert_url}`.

query\_url

The URL of the first page that is requested in the query.

string

https://sls-stgnew.console.alibabacloud.com/lognext/project/test-xxx/logsearch/test-alert-access?encode=base64&endTime=1617175989&queryString=KiB8IHNlbGVjdCBjb3VudCgxKSBhcyBjbnQ%3D&queryTimeType=99&startTime=1617175089

The URL of the first page that is requested in the query is `${query_url}`.

alert\_history\_dashboard\_url

The URL of the Alert History Statistics dashboard.

string

https://sls.console.alibabacloud.com/lognext/project/test-xx/dashboard/internal-alert-analysis

The URL of the Alert History Statistics dashboard is `${alert_history_dashboard_url}`.

condition

The trigger condition of the alert rule. Simple Log Service replaces the variables in the trigger condition with the values that trigger the alert. Each value is enclosed in a pair of brackets (\[\]). The value of this variable is in the `Count:Quantity expression; Condition:Matching expression` format.

string

Count:\[5\] > 3;Condition:\[example.com\]=='example.com'

The trigger condition of the alert rule is `${condition}`.

raw\_condition

The original trigger condition of the alert rule. The variables in the trigger condition are retained. The value of this variable is in the `Count:Quantity expression; Condition:Matching expression` format.

string

`Count:__count__ > 3;Condition:host=='example.com'`

The original trigger condition of the alert rule is `${raw_condition}`.

dashboard

The name of the dashboard that is associated with the alert rule.

string

mydashboard

The name of the dashboard that is associated with the alert rule is `${dashboard}`.

dashboard\_url

The URL of the dashboard that is associated with the alert rule.

string

https://sls.console.alibabacloud.com/next/project/myproject/dashboard/mydashboard

The URL of the dashboard that is associated with the alert rule is `${dashboard_url}`.

fire\_results

The data records for which the alert is triggered. Up to 100 data records can be returned in response to an operation on data sets.

array

```
[{
    "host":example.com",
    "host__1":"example.com",
    "pv":"836",
    "slbid":"slb-02",
    "status":"200"},{
    "host":"example.com",
    "host__1":"example.org",
    "pv":"836",
    "slbid":"slb-02",
    "status":"200"
},{
    "host":"example.com",
    "host__1":"example.com",
    "pv":"836",
    "slbid":"slb-02",
    "status":"200"
},{
    "host":"example.com",
    "host__1":"example.com",
    "pv":"836",
    "slbid":"slb-02",
    "status":"200"
},{
    "host":"example.com",
    "host__1":"example.com",
    "pv":"780",
    "slbid":"slb-01",
    "status":"200"
}]
```

The alert is triggered for the following data records: `${fire_results}`.

fire\_results\_count

The total number of data records for which the alert is triggered. The value of this variable may be greater than 100. For example, if you perform a CROSS JOIN operation on data sets, Simple Log Service may trigger an alert for more than 100 data records.

int

3

The alert is triggered for a total of `${fire_results_count}` data records.

fire\_results\_as\_kv

The details about the data records for which the alert is triggered. Up to 100 data records can be returned in response to an operation on data sets. The value of this variable is in the `[key1:value1,key2:value2]` format.

array

\[host:example.com,pv:836,status:200\]\[host:example.com,pv:780,status:200\]

The alert is triggered for the following data records: `${fire_results_as_kv}`.

## Description of the policy variable

The following table describes the variables that can be referenced in the policy variable.

**Variable**

**Description**

**Type**

**Example**

alert\_policy\_id

The ID of the alert policy that you configure in the alert rule.

string

sls.test-alert

action\_policy\_id

The ID of the action policy that you configure in the alert rule. This variable is available only when you associate an alert policy with a dynamic action policy.

string

sls.test-action

repeat\_interval

The time interval at which Simple Log Service sends repeated alerts. This variable is available only when you associate an alert policy with an action policy.

string

4h

## Description of the results variable

The following table describes the variables that can be referenced in the results variable.

**Variable**

**Description**

**Type**

**Example**

role\_arn

The Alibaba Cloud Resource Name (ARN) of the resource that you want to use.

string

acs:ram::1117918664953\*\*\*\*:role/aliyunslsalertmonitorrole

store\_type

The type of data that you want to use. Valid values:

-   log: log data
    
-   metric: time series data
    
-   meta: resource data
    

string

log

region

The region where the destination Logstore or the destination Metricstore resides.

If the value of the store\_type variable is meta, the region variable is empty.

string

cn-hangzhou

project

The project to which the destination Logstore or the destination Metricstore belongs.

If the value of the store\_type variable is meta, the project variable is empty.

string

sls-test-alert

store

The name of the destination Logstore or destination Metricstore.

string

test-logstore

query

The query statement that you want to execute.

string

error | select count(1) as cnt

start\_time

The beginning of the time range that you want to query.

If the value of the store\_type variable is meta, the start\_time variable is empty.

int

2006-01-02 15:04:05

start\_time\_ts

The beginning of the time range that you want to query. The value is a UNIX timestamp.

If the value of the store\_type variable is meta, the start\_time\_ts variable is empty.

int

1616741485

end\_time

The end of the time range that you want to query.

If the value of the store\_type variable is meta, the end\_time\_ts variable is empty.

int

2006-01-02 15:04:05

end\_time\_ts

The end of the time range that you want to query. The value is a UNIX timestamp.

If the value of the store\_type variable is meta, the end\_time\_ts variable is empty.

int

1616745085

dashboard\_id

The ID of the dashboard that is associated with the query.

string

mydashboard

raw\_results

The result that is returned in response to the query. The value of this variable is an array. Up to 100 data records are returned.

array

```
[{
    "host":"example.com",
    "slbid":"slb-02",
    "status":"200"
},{
    "host":"example.com",
    "slbid":"slb-01",
    "status":"200"
},{
    "host":"example.com",
    "slbid":"slb-02",
    "status":"306"
},{
    "host":"example.com",
    "slbid":"slb-02",
    "status":"200"
},{
    "host":"example.com",
    "slbid":"slb-01",
    "status":"200"
},{
    "host":"example.com",
    "slbid":"slb-02",
    "status":"200"
}]
```
