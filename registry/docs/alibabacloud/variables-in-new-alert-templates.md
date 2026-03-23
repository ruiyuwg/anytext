This topic outlines the variables available in the new version of alert templates and explains how to reference them.

## Reference methods

**Important**

Variables should be referenced using their full names. If a variable is invalid or not found, Simple Log Service (SLS) will replace it with an empty string. If a variable's value is an object, it is converted to a JSON string. Ensure that variable names follow these rules: Must use letters, digits, and underscores, and cannot start with a digit.

-   If a variable name conforms to the rules, reference the variable in the `{{alert.xxx}}` format.
    
-   If a variable name does not conform to the rules, reference the variable name in a different format. For example, if you want to reference the `__tag__:__namespace__` variable, use `{{alert.annotations["__tag__:__namespace__"] }}`.
    

When you configure an action policy, you must select an alert template. The alert template specifies the content and subject of alert notifications. When you configure the **Content** and **Subject** parameters for an alert template, reference variables in the `{{ alert.xxx }}` format. Before SLS sends an alert notification, SLS replaces the variables that are referenced in the **Content** and **Subject** parameters with the actual values. For example, SLS replaces `{{ alert.project }}` with the name of the project to which the configured alert rule belongs.

You can also use control flows and built-in functions to manipulate and process variables. For more information about the syntax and built-in functions that are supported by the new version of alert templates, see [Syntax for new alert templates](/help/en/sls/syntax-for-new-alert-templates#concept-2116211) and [Built-in functions in alert templates](/help/en/sls/built-in-functions-in-alert-templates#concept-2116231).

## Alert attributes

**Variable**

**Description**

**Type**

**Value example**

**Reference example**

aliuid

The ID of the Alibaba Cloud account to which the project belongs.

string

117918634953\*\*\*\*

`The project in which the alert is triggered belongs to the Alibaba Cloud account {{ alert.aliuid }}.`

alert\_instance\_id

The execution ID of the alert that is triggered.

string

ee16a8f435485f3f-5be6b81edc520-3d6\*\*\*\*

The execution ID of the alert that is triggered is `{{ alert.alert_instance_id }}`.

alert\_id

The ID of the alert rule. Each alert rule must have a unique ID in the project to which the alert rule belongs.

string

alert-12345

The ID of the alert rule is `{{ alert.alert_id }}`.

alert\_name

The name of the alert rule.

string

Test alert rule

The name of the alert rule based on which the alert is triggered is `{{ alert.alert_name }}`.

alert\_type

The type of the alert.

-   sls\_alert: The alert is triggered based on an alert rule in SLS.
    
-   sls\_pub: The alert is ingested from an alerting system rather than SLS.
    
-   sls\_ml: The alert is triggered by intelligent inspection in SLS.
    

string

sls\_alert

The type of the alert is `{{ alert.alert_type }}`, which is converted to `{{ alert.alert_type | format_type }}`.

region

The region.

string

cn-hangzhou

The alert is triggered in the `{{ alert.region }}` region.

project

The project to which the alert rule belongs.

string

my-project

The alert rule based on which the alert is triggered belongs to the `{{ alert.project }}` project.

next\_eval\_interval

The length of time before the next evaluation activity starts. Unit: seconds.

int

300

The next evaluation activity starts after `{{ alert.next_eval_interval }}` seconds.

alert\_time

The time at which the current evaluation activity starts.

int

1616744734

The current evaluation activity starts at `{{ alert.alert_time }}`, which is converted to `{{ alert.alert_time | format_date }}`.

fire\_time

The time at which the alert is triggered for the first time.

int

1616059834

The alert is triggered at `{{ alert.fire_time }}` for the first time, which is converted to `{{ alert.fire_time | format_date }}`.

status

The status of the alert.

-   firing: The alert is triggered.
    
-   resolved: The alert is cleared.
    

string

firing

The status of the alert is `{{ alert.status }}`, which is converted to `{{ alert.status | format_status }}`.

resolve\_time

The time at which the alert is cleared.

-   If the alert is in the firing state, the value is 0.
    
-   If the alert is in the resolved state, the value is the point in time at which the alert is cleared.
    

int

0

The alert is cleared at `{{ alert.resolve_time }}`, which is converted to `{{ alert.resolve_time | format_date }}`.

severity

The severity level of the alert.

-   10: Critical
    
-   8: High
    
-   6: Medium
    
-   4: Low
    
-   2: Report
    

int

10

The severity level of the alert is `{{ alert.severity }}`, which is converted to `{{ alert.severity | format_severity }}`.

labels

The labels of the alert.

map

{"env":"test"}

The labels of the alert are `{{ alert.labels | to_list }}`.

annotations

The annotations of the alert.

map

{ "title": "Alert title","desc": "Alert description" }

The annotations of the alert are `{{ alert.annotations | to_list }}`.

results

The parameters and intermediate results that are returned. The value of this variable is an array. For more information about the value of this variable, see [QueryData structure](#section-zbg-1l5-aaq).

array

See the "Appendix" section at the end of this topic.

The first query starts at `{{ alert.results[0].start_time }}` and ends at `{{ alert.results[0].end_time }}`. The value of the count variable is `{{ alert.results[0].fire_result.cnt }}`. The query statement is `{{ alert.results[0].query }}`.

fire\_results

The data records for which the alert is triggered. Up to 100 data records can be returned in response to a set operation on data.

If the value of fire\_results exceeds 2 KB in size and the value of a single query result field exceeds 1 KB in size, the value of fire\_results is truncated, and the excess part is discarded. For more information, see [An alert is triggered for a large number of raw logs, and the query and analysis results fail to be completely displayed in alert notifications. What do I do?](/help/en/sls/faq-about-alert-notifications#section-4xt-3d8-i8n)

array

See the "Appendix" section at the end of this topic.

The alert is triggered for the following data records: `{{ alert.fire_results | to_json }}`.

fire\_results\_count

The total number of data records for which the alert is triggered. The value of this variable may be greater than 100. For example, if you perform a CROSS JOIN operation on data, SLS may trigger an alert for more than 100 data records.

int

3

The alert is triggered for a total of `{{ alert.fire_results_count }}` data records.

condition

The trigger condition based on which the alert is triggered. The condition is an expression. SLS replaces the variables in the trigger condition with the values that trigger the alert. Each value is enclosed in a pair of brackets \[\]. The value of this variable is in the `Count:Quantity expression;Condition:Matching expression` format.

string

`Count:[5] > 3;Condition:[example.com]=='example.com'`

The trigger condition based on which the alert is triggered is `{{ alert.condition }}`.

raw\_condition

The original trigger condition. The variables in the trigger condition are not replaced. The value of this variable is in the `Count:Quantity expression;Condition:Matching expression` format.

string

`Count:__count__ > 3;Condition:host=='example.com'`

The original trigger condition is `{{ alert.raw_condition }}`.

policy

The ID of the alert policy or action policy. For more information about the value of this variable, see [Policy structure](#section-uok-skb-b7y).

map

See the "Appendix" section at the end of this topic.

The ID of the alert policy is `{{ alert.policy.alert_policy_id }}`.

dashboard

The name of the dashboard that is associated with the alert.

string

mydashboard

The name of the dashboard that is associated with the alert is `{{ alert.dashboard }}`.

alert\_url

The URL of the details page of the alert.

string

https://sls.console.alibabacloud.com/lognext/project/test-xxxx/alert/alert-1617164106-940166

The URL of the details page of the alert is `{{ alert.alert_url }}`.

query\_url

The URL of the source web page that is accessed for the first query.

string

https://sls.console.alibabacloud.com/lognext/project/test-xxx/logsearch/test-alert-access?encode=base64&endTime=1617175989&queryString=KiB8IHNlbGVjdCBjb3VudCgxKSBhcyBjbn\*\*\*\*&queryTimeType=99&startTime=1617175089

The URL of the source web page that is accessed for the first query is `{{ alert.query_url }}`.

alert\_history\_dashboard\_url

The URL of the Alert History Statistics dashboard.

string

https://sls.console.alibabacloud.com/lognext/project/test-xx/dashboard/internal-alert-analysis

The URL of the Alert History Statistics dashboard is `{{ alert.alert_history_dashboard_url }}`.

dashboard\_url

The URL of the dashboard that is associated with the alert.

string

https://sls.console.alibabacloud.com/next/project/myproject/dashboard/mydashboard

The URL of the dashboard that is associated with the alert is `{{ alert.dashboard_url }}`.

fingerprint

The fingerprint of the alert. For more information, see [Deduplicate alerts based on fingerprints](/help/en/sls/deduplicate-alerts-based-on-fingerprints#reference-2061536).

string

478325709134bc5c

The fingerprint of the alert is `{{ alert.fingerprint }}`.

signin\_url

The URL of the page on which you can view the details of the alert without the need to log on to the SLS console. For more information, see [View alert details in logon-free mode](/help/en/sls/view-alert-details-in-logon-free-mode#task-2139631).

string

https://sls.console.alibabacloud.com/console/AlertAjax/slsSignIn.json?token=xxxx

`[View Details]({{ alert.signin_url }})`

## Policy structure

The following table describes the variables that can be referenced in the policy variable.

**Variable**

**Description**

**Type**

**Value example**

alert\_policy\_id

The ID of the alert policy

string

sls.test-alert

action\_policy\_id

The ID of the action policy that you configure in the alert rule. This variable is available only when you select Dynamic Action Policy for the alert policy.

string

sls.test-action

repeat\_interval

The period during which the action policy is executed only once and SLS sends only one alert notification if duplicate alerts are triggered. This variable is available only when you select Dynamic Action Policy for the alert policy.

string

4h

## QueryData structure

The following table describes the variables that can be referenced in the results variable.

**Variable**

**Description**

**Type**

**Value example**

store\_type

The storage type.

-   log: log data
    
-   metric: metric data
    
-   meta: resource data
    

string

log

region

The region where the destination logstore or Metricstore resides.

If the value of the store\_type variable is meta, this variable is empty.

string

cn-hangzhou

project

The project to which the destination logstore or Metricstore belongs.

If the value of the store\_type variable is meta, this variable is empty.

string

sls-test-alert

store

The name of the destination logstore or Metricstore.

string

test-logstore

query

The query statement.

string

error | select count(1) as cnt

start\_time

The beginning of the time range to query.

If the value of the store\_type variable is meta, this variable is empty.

int

1616741485

end\_time

The end of the time range to query.

If the value of the store\_type variable is meta, this variable is empty.

int

1616745085

raw\_results

The data records that are queried. The value of this variable is an array. Up to 100 data records can be returned.

If the value of raw\_results exceeds 2 KB in size and the value of a single query result field exceeds 1 KB in size, the value of raw\_results is truncated, and the excess part is discarded.

array

```
[{
    "host": "example.com",
    "slbid": "slb-02",
    "status": "200"
}, {
    "host": "example.com",
    "slbid": "slb-01",
    "status": "200"
}]
```

raw\_results\_count

The number of data records that are queried. The number can be greater than 100.

int

20

fire\_result

The first data record among the data records for which the alert is triggered. The result set for which the alert is triggered may contain multiple data records. SLS returns only the first data record of the result set for this variable.

map

```
{
    "host": "example.com",
    "slbid": "slb-02",
    "status": "200"
}
```

query\_url

The URL of the data records that are queried.

If the value of the store\_type variable is meta, this variable is empty.

string

https://sls.console.alibabacloud.com/lognext/project/test-xxx/logsearch/test-alert-access?encode=base64&endTime=1617175989&queryString=KiB8IHNlbGVjdCBjb3VudCgxKSBhcy\*\*\*\*\*\*\*&queryTimeType=99&startTime=1617175089

dashboard\_url

The URL of the dashboard that is associated with the query.

string

https://sls.console.alibabacloud.com/next/project/myproject/dashboard/mydashboard

role\_arn

The Alibaba Cloud Resource Name (ARN) of the service role that is used.

string

acs:ram::117918634953\*\*\*\*:role/aliyunslsalertmonitorrole

## FAQ

-   [How do I reference log content in alert notifications?](/help/en/sls/faq-about-alert-notifications#section-ofw-e67-xop)
    
-   [How do I display the query and analysis results that trigger an alert in alert notifications?](/help/en/sls/faq-about-alert-notifications#section-djd-bmk-7lv)
    
-   [An alert is triggered for a large number of raw logs, and the query and analysis results fail to be completely displayed in alert notifications. What do I do?](/help/en/sls/faq-about-alert-notifications#section-4xt-3d8-i8n)
    

## **Appendix**

-   `results` sample
    
    ```
    [{
        "store_type": "log",
        "region": "cn-hangzhou",
        "project": "sls-alert-test",
        "store": "test",
        "query": "* | select count(1) as cnt",
        "start_time": 1616741485,
        "end_time": 1616745085,
        "dashboard_id": "mydashboard",
        "raw_results": [{
            "cnt": "4"
        }],
        "raw_result_count": 1,
        "fire_result": {
            "cnt": "4"
        },
        "truncated": false,
        "role_arn": ""
    }]
    ```
    
-   `fire_results` sample
    
    ```
    [{
        "host": "example.com",
        "host__1": "example.com",
        "pv": "836",
        "slbid": "slb-02",
        "status": "200"
    }, {
        "host": "example.com",
        "host__1": "example.com",
        "pv": "836",
        "slbid": "slb-02",
        "status": "200"
    }]
    ```
    
-   `policy` sample
    
    ```
    {
        "alert_policy_id": "sls.test-alert",
        "action_policy_id": "sls.test-action",
        "repeat_interval": "5m0s"
    }
    ```
    

## **Example**

The following example shows how to define notification content using a new content template:

-   Alert content:
    
    ```
    {
        "alert_id": "test-alert",
        "alert_name": "PV/UV Alert",
        "project": "project-1",
        "status": "firing",
        "severity": 6,
        "labels": {
            "app": "nginx",
            "host": "host-1"
        },
        "results": [
            {
                "project": "project-1",
                "logstore": "logstore-1",
                "query": "* | select count(*) as pv"
            },
            {
                "project": "project-2",
                "logstore": "logstore-2",
                "query": "* | select count(distinct user_id) as uv"
            }
        ]
    }
    ```
    
-   Alert template configuration:
    
    ```
    - Alert ID: {{ alert.alert_id }}
    - Alert Name: {{ alert.alert_name }}
    - Project: {{ alert.project }}
    - Status: {% if alert.status == "firing" %}FIRING{% else %}RESOLVED{% endif %}
    - Labels:
    {%- for key, val in alert.labels.items() %}
        - {{ key }}: {{ val }}
    {%- endfor %}
    - Query: {{ alert.results[0].query }}
    ```
    
-   Output result:
    
    ```
    - Alert ID: test-alert
    - Alert Name: PV/UV Alert
    - Project: project-1
    - Status: FIRING
    - Labels:
        - app: nginx
        - host: host-1
    - Query: * | select count(*) as pv
    ```
