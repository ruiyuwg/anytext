ALIYUN::SLS::Alert is used to create an alert rule.

## Syntax

```
{
  "Type": "ALIYUN::SLS::Alert",
  "Properties": {
    "Project": String,
    "Detail": Map
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Project

String

Yes

No

The name of the project.

None.

Detail

Map

Yes

Yes

Details of the alert rule.

For more information, see [Detail properties](#section-s47-c68-j3h).

## Detail syntax

```
"Detail": {
  "Type": String,
  "Description": String,
  "Configuration": Map,
  "State": String,
  "Schedule": Map,
  "DisplayName": String,
  "Name": String
}
```

## Detail properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

No

No

The type of the alert rule.

None.

Description

String

No

Yes

The description of the alert rule.

None.

Configuration

Map

Yes

Yes

The configurations of the alert rule.

For more information, see [Configuration properties](#section-nql-9cc-y8a).

State

String

No

No

Specifies whether to enable the alert rule.

Valid values:

-   Enable
    
-   Disabled
    

Schedule

Map

Yes

Yes

The time interval at which Log Service evaluates the alert rule.

If more than 100 log entries are returned when Log Service evaluates the alert rule, only the first 100 log entries are checked.

For more information, see [Schedule properties](#section-ovp-1vg-fhp).

DisplayName

String

Yes

Yes

The display name of the alert rule.

The name must be 1 to 64 characters in length.

Name

String

Yes

No

The name of the alert rule.

None.

## Configuration syntax

```
"Configuration": {
  "Throttling": String,
  "Condition": String,
  "NotificationList": List,
  "NotifyThreshold": Integer,
  "Dashboard": String,
  "QueryList": List,
  "Type": String,
  "GroupConfiguration": Map,
  "NoDataFire": Boolean,
  "Threshold": Integer,
  "SeverityConfigurations": List,
  "Labels": List,
  "AutoAnnotation": Boolean,
  "PolicyConfiguration": Map,
  "SendResolved": Boolean,
  "NoDataSeverity": Integer,
  "Annotations": List,
  "MuteUntil": Integer,
  "JoinConfigurations": List,
  "Version": String
}
```

## Configuration properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Throttling

String

No

Yes

The time interval at which Log Service sends alert notifications.

None.

Condition

String

No

Yes

The trigger condition.

The following arithmetic operators are supported: addition (+), subtraction (-), multiplication (\*), division (/), and modulo (%). The following comparison operators are supported: greater-than (>), greater-than-or-equal-to (>=), less-than (<), less-than-or-equal-to (<=), equal-to (==), not-equal-to (!=), match (=~), and not-match (!~).

For more information, see [Syntax of trigger conditions in alert rules](/help/en/sls/syntax-of-trigger-conditions-in-alert-rules#reference-byz-wrd-yfb).

NotificationList

List

No

Yes

The list of alert notifications.

For more information, see [NotificationList properties](#section-9gb-q4h-hsj).

NotifyThreshold

Integer

No

Yes

The threshold based on which alert notifications are triggered.

None.

Dashboard

String

Yes

Yes

The dashboard with which the alert rule is associated.

None.

QueryList

List

Yes

Yes

The list of query statements.

For more information, see [QueryList properties](#section-vjj-ndk-7n6).

Type

String

No

Yes

The type of the alert rule.

Set the value to default.

GroupConfiguration

Map

No

Yes

The configurations of group evaluation.

For more information, see [GroupConfiguration properties](#section-bje-18o-w1f).

NoDataFire

Boolean

No

Yes

Specifies whether to enable the no-data alert feature.

Default value: false. Valid values:

-   true: enables the no-data alert feature.
    
    If you set this property to true, an alert is triggered when the number of times that no data is returned for a query and analysis result exceeds the value of the Threshold property.
    
    **Note**
    
    If multiple query and analysis results exist, an alert is triggered when the number of times that no data is returned for a set operation on the query and analysis results exceeds the value of the Threshold property.
    
    For more information, see [No-data alert](/help/en/sls/user-guide/no-data-alert#reference-2061520).
    
-   false: disables the no-data alert feature.
    

Threshold

Integer

No

Yes

The threshold based on which an alert is triggered.

If the number of consecutive times that the trigger condition is met reaches the specified threshold, an alert is triggered. The system does not count the number of times when the trigger condition is not met.

SeverityConfigurations

List

No

Yes

The trigger condition. You must specify at least one trigger condition.

For more information, see [SeverityConfigurations properties](#section-alv-nyd-awo).

Labels

List

No

Yes

The labels of the alert rule.

For more information, see [Labels properties](#section-6ee-iik-8sc).

AutoAnnotation

Boolean

No

Yes

Specifies whether to allow the system to automatically add annotations to the alert rule.

Default value: true. Valid values:

-   true: allows the system to automatically add annotations such as \_\_count\_\_ to the alert rule.
    
    For more information, see [Auto-Add switch](/help/en/sls/labels-and-annotations#section-6hp-3y5-c5w).
    
-   false: does not allow the system to automatically add annotations to the alert rule.
    

PolicyConfiguration

Map

No

Yes

The configurations of the alert policy.

For more information, see [PolicyConfiguration properties](#section-tn2-6wk-mme).

SendResolved

Boolean

No

Yes

Specifies whether to send a recovery notification when an alert is cleared.

Default value: false. Valid values:

-   true: sends a recovery notification when an alert is cleared.
    
    For more information, see [Recovery notifications](/help/en/sls/recovery-notifications#reference-2061518).
    
-   false: does not send a recovery notification when an alert is cleared.
    

NoDataSeverity

Integer

No

Yes

The severity level of a no-data alert.

For more information, see [Alert severities](/help/en/sls/developer-reference/data-structure-of-an-alert-monitoring-rule#table-voo-ngw-85q).

Annotations

List

No

Yes

The annotations of the alert rule.

For more information, see [Annotations properties](#section-2e1-k76-ucg).

MuteUntil

Integer

No

Yes

The threshold based on which an alert is triggered.

None.

JoinConfigurations

List

No

Yes

The configurations of set operations.

For more information, see [JoinConfigurations properties](#section-3lc-mpz-8cj).

-   If you specify only one query statement in the QueryList property, you do not need to specify the JoinConfigurations property.
    
-   If you specify two or three query statements in the QueryList property, you must specify the JoinConfigurations property to associate the query and analysis results.
    
    For more information, see [Multi-set operations](/help/en/sls/set-query-statistics-statement#reference-2061516).
    

Version

String

No

Yes

The version of the alert rule.

Set the value to 2.0.

## NotificationList syntax

```
"NotificationList": [
  {
    "Type": String,
    "MobileList": List,
    "ServiceUri": String,
    "Content": String,
    "EmailList": List,
    "Method": String,
    "Headers": Map
  }
]
```

## NotificationList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

Yes

No

The method that is used to send alert notifications.

Valid values:

-   Email: email
    
-   MessageCenter: Message Center
    
-   DingTalk: DingTalk chatbot webhook
    
-   Webhook: custom webhook
    

Content

String

No

No

The content of the alert notification.

You can use the following template variables in the content: `${Project}, ${Condition}, ${AlertName}, ${AlertID}, ${Dashboard}, ${FireTime}, and ${Results}`.

For more information, see [Configure notification methods](/help/en/sls/configure-notification-methods#concept-bzz-vht-2fb).

MobileList

List

No

No

The list of mobile numbers.

A mobile number can receive up to 50 text messages every day.

ServiceUri

String

No

No

The URL of the request.

This property is required if you set the Type property to Webhook or DingTalk.

EmailList

List

No

No

The list of email addresses.

This property is required if you set the Type property to Email.

An email address can receive up to 100 emails every day.

Method

String

No

No

The request method.

None.

Headers

Map

No

No

Details of the request header.

None.

## QueryList syntax

```
"QueryList": [
  {
    "Query": String,
    "LogStore": String,
    "Start": String,
    "TimeSpanType": String,
    "End": String,
    "ChartTitle": String,
    "DashboardId": String,
    "Region": String,
    "RoleArn": String,
    "StoreType": String,
    "PowerSqlMode": String,
    "Project": String,
    "Store": String
  }
]
```

## QueryList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Query

String

Yes

No

The query statement.

None.

LogStore

String

No

No

The Logstore.

None.

Start

String

Yes

No

The beginning of the time range to query.

None.

TimeSpanType

String

Yes

No

The time range to query.

None.

End

String

Yes

No

The end of the time range to query.

None.

ChartTitle

String

No

No

The title of the chart.

None.

DashboardId

String

No

No

The ID of the dashboard with which the alert rule is associated.

None.

Region

String

No

No

The region of the project.

None.

RoleArn

String

No

No

The Alibaba Cloud Resource Name (ARN) of the RAM role that is required to access data.

For more information, see [Configure access control policies](/help/en/sls/configure-access-control-policies#task-2057268).

StoreType

String

No

No

The type of the data source.

Valid values:

-   log: Logstore data
    
-   metric: Metricstore data
    
-   meta: resource data
    

PowerSqlMode

String

No

No

Specifies whether to allow the system to enable Dedicated SQL.

Valid values:

-   auto: The system automatically enables or disables Dedicated SQL.
    
-   enable: The system enables Dedicated SQL.
    
-   disable: The system disables Dedicated SQL.
    

Project

String

No

No

The project with which the query statement is associated.

None.

Store

String

No

No

The Logstore, Metricstore, or resource data with which the query statement is associated.

None.

## Schedule syntax

```
"Schedule": {
  "Type": String,
  "Interval": String,
  "Hour": Integer,
  "DayOfWeek": Integer,
  "CronExpression": String,
  "Delay": Integer,
  "RunImmediately": Boolean
}
```

## Schedule properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

Yes

Yes

The type of the schedule based on which the alert rule is triggered.

Valid values:

-   Hourly: The alert rule is triggered on an hourly basis.
    
-   Daily: The alert rule is triggered on a daily basis.
    
-   Weekly: The alert rule is triggered on a weekly basis.
    
-   FixedRate: The alert rule is triggered on a regular basis.
    
-   Cron: The alert rule is triggered based on the CRON expression.
    

Interval

String

No

Yes

The time interval at which the alert rule is triggered on a regular basis.

This property is required if you set the Type property to FixedRate.

Valid values:

-   10d: The alert rule is triggered every 10 days.
    
-   10h: The alert rule is triggered every 10 hours.
    
-   10m: The alert rule is triggered every 10 minutes.
    

Hour

Integer

No

Yes

The hour of the day when the alert rule is triggered.

This property is required if you set the Type property to Daily or Weekly.

Valid values: 0 to 23.

DayOfWeek

Integer

No

Yes

The day of the week when the alert rule is triggered.

This property is required if you set the Type property to Weekly.

Valid values: 1 to 7.

CronExpression

String

No

Yes

The CRON expression based on which the alert rule is triggered.

This property is required if you set the Type property to Cron.

RunImmediately

Boolean

No

Yes

Specifies whether to immediately trigger the alert rule.

Valid values:

-   true
    
-   false
    

Delay

Integer

No

Yes

Specifies whether to delay the triggering of the alert rule.

None.

## SeverityConfigurations syntax

```
"SeverityConfigurations": {
 "EvalCondition": Map,
 "Severity": Integer
}
```

## SeverityConfigurations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EvalCondition

Map

No

No

The trigger condition.

For more information, see [EvalCondition properties](#section-mqw-2s5-00g).

Severity

Integer

Yes

No

The severity level of the alert.

For more information, see [Data structure of an alert monitoring rule](/help/en/sls/developer-reference/data-structure-of-an-alert-monitoring-rule#table-voo-ngw-85q).

## EvalCondition syntax

```
"EvalCondition": {
"Condition": String,
"CountCondition": String
}
```

## EvalCondition properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Condition

String

No

No

The expression that is used to match data.

-   If you do not need to match data, set the value to an empty string.
    
-   In other scenarios, set the value to an expression. Example: errCnt > 10.
    

CountCondition

String

No

No

The expression that is used to match the number of data entries.

-   If you want the expression to be matched when data exists, set the value to an empty string.
    
-   In other scenarios, set the value to an expression. Example: \_\_count\_\_ > 3.
    

## Labels syntax

```
"Labels": [{
 "Value": String,
 "Key": String
}]
```

## Labels properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

Yes

No

The value of the field.

None.

Key

String

Yes

No

The key of the field.

None.

## GroupConfiguration syntax

```
"GroupConfiguration": {
 "Type": String,
 "Fields": List
}
```

## GroupConfiguration properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

Yes

No

The type of group evaluation.

Valid values:

-   no\_group: Query and analysis results are not grouped.
    
-   custom: Query and analysis results are grouped based on the custom field that you specify.
    
-   labels\_auto: Query and analysis results are automatically grouped based on the labels that you specify. The value is supported only for time series data.
    

Fields

List

No

No

The fields based on which group evaluation is performed.

None.

## Annotations syntax

```
"Annotations": [{
 "Value": String,
 "Key": String
}]
```

## Annotations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the field.

None.

Value

String

Yes

No

The value of the field.

None.

## JoinConfigurations syntax

```
"JoinConfigurations": {
 "Type": String,
 "Condition": String
}
```

## JoinConfigurations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Condition

String

No

No

The conditional expression.

This property is required if you set the Type property to cross\_join, concat, or no\_join. Example: $0.host == $1.ip.

Type

String

Yes

No

The type of the set operation.

Valid values:

-   cross\_join: Cartesian product.
    
-   inner\_join: inner join.
    
-   left\_join: left join
    
-   right\_join: right join.
    
-   full\_join: full join.
    
-   left\_exclude: left exclusion.
    
-   right\_exclude: right exclusion.
    
-   concat: concatenation. The system traverses each dataset in sequence.
    
-   no\_join: no join. The system uses only the first dataset.
    

## PolicyConfiguration syntax

```
"PolicyConfiguration": {
"RepeatInterval": String,
 "ActionPolicyId": String,
 "AlertPolicyId": String,
 "UseDefault": Boolean
}
```

## PolicyConfiguration properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RepeatInterval

String

No

No

The repeat interval.

None.

ActionPolicyId

String

No

No

The ID of the action policy.

In advanced mode, if the alert policy does not use a dynamic action policy, set the value to an empty string.

AlertPolicyId

String

No

No

The ID of the alert policy.

-   In simple or standard mode, set the value to sls.builtin.dynamic. The value specifies a built-in dynamic alert policy.
    
-   In advanced mode, set the value to the ID of an alert policy that you want to use.
    

UseDefault

Boolean

No

No

The compatibility field.

Set the value to false.

## Return values

Fn::GetAtt

Name: the name of the alert rule.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      Alert:
        Type: ALIYUN::SLS::Alert
        Properties:
          Project: TestSlsProject
          Detail:
            DisplayName: ros-test-alert
            Description: test
            Schedule:
              Delay: 1
              Interval: 15m
              Type: FixedRate
              RunImmediately: false
            State: Enabled
            Configuration:
              Throttling: 5m
              NotifyThreshold: 1
              QueryList:
                - End: now
                  LogStore: audit-cf5362d1f87754fb29
                  ChartTitle: k8s-log-c7b729e7ea122425182133bc2c3ea
                  Start: '-15m'
                  Query: |-
                    objectRef.resource : "networkpolicies" and verb : create NOT  user.username: node NOT  user.username: serviceaccount NOT  user.username: apiserver NOT  user.username: kube-scheduler NOT  user.username: kube-controller-manager       | SELECT auditID as "Event ID", date_format(from_unixtime(__time__), '%Y-%m-%d %T' ) as "Operation time", "objectRef.name" as "Name", "objectRef.namespace" as "Namespace", "responseStatus.code" as "Status code",
                     CASE WHEN "user.username" != 'kubernetes-admin' then "user.username"
                     WHEN "user.username" = 'kubernetes-admin' and regexp_like("annotations.authorization.k8s.io/reason", 'RoleBinding') then regexp_extract("annotations.authorization.k8s.io/reason", ' to User "(\w+)"', 1) ELSE 'kubernetes-admin' END
                     as "Username",
                    CASE WHEN json_array_length(sourceIPs) = 1 then json_format(json_array_get(sourceIPs, 0)) ELSE  sourceIPs END
                    as "Source IP address" order by "Operation time"
                  TimeSpanType: Custom
              Dashboard: audit-cf5362d1f87754fb4a_network_policy_op_cn
              NotificationList:
                - Content: Message
                  ServiceUri: http://xxxx
                  Type: DingTalk
                - Content: Email Message
                  EmailList:
                    - abc@test.com
                  Type: Email
                - MobileList:
                    - 132373830xx
                  Content: Cellphone message
                  Type: SMS
              Condition: total  > 1
            Type: Alert
            Name: alert_2
    Outputs:
      Name:
        Description: Alert name.
        Value:
          Fn::GetAtt:
            - Alert
            - Name
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "Alert": {
          "Type": "ALIYUN::SLS::Alert",
          "Properties": {
            "Project": "TestSlsProject",
            "Detail": {
              "DisplayName": "ros-test-alert",
              "Description": "test",
              "Schedule": {
                "Delay": 1,
                "Interval": "15m",
                "Type": "FixedRate",
                "RunImmediately": false
              },
              "State": "Enabled",
              "Configuration": {
                "Throttling": "5m",
                "NotifyThreshold": 1,
                "QueryList": [
                  {
                    "End": "now",
                    "LogStore": "audit-cf5362d1f87754fb29",
                    "ChartTitle": "k8s-log-c7b729e7ea122425182133bc2c3ea",
                    "Start": "-15m",
                    "Query": "objectRef.resource : \"networkpolicies\" and verb : create NOT  user.username: node NOT  user.username: serviceaccount NOT  user.username: apiserver NOT  user.username: kube-scheduler NOT  user.username: kube-controller-manager       | SELECT auditID as \"Event ID\", date_format(from_unixtime(__time__), '%Y-%m-%d %T' ) as \"Operation time\", \"objectRef.name\" as \"Name\", \"objectRef.namespace\" as \"Namespace\", \"responseStatus.code\" as \"Status code\",\n CASE WHEN \"user.username\" != 'kubernetes-admin' then \"user.username\"\n WHEN \"user.username\" = 'kubernetes-admin' and regexp_like(\"annotations.authorization.k8s.io/reason\", 'RoleBinding') then regexp_extract(\"annotations.authorization.k8s.io/reason\", ' to User \"(\\w+)\"', 1) ELSE 'kubernetes-admin' END  \n as \"Username\", \nCASE WHEN json_array_length(sourceIPs) = 1 then json_format(json_array_get(sourceIPs, 0)) ELSE  sourceIPs END\nas \"Source IP address\" order by \"Operation time\"",
                    "TimeSpanType": "Custom"
                  }
                ],
                "Dashboard": "audit-cf5362d1f87754fb4a_network_policy_op_cn",
                "NotificationList": [
                  {
                    "Content": "Message",
                    "ServiceUri": "http://xxxx",
                    "Type": "DingTalk"
                  },
                  {
                    "Content": "Email Message",
                    "EmailList": [
                      "abc@test.com"
                    ],
                    "Type": "Email"
                  },
                  {
                    "MobileList": [
                      "132373830xx"
                    ],
                    "Content": "Cellphone message",
                    "Type": "SMS"
                  }
                ],
                "Condition": "total  > 1"
              },
              "Type": "Alert",
              "Name": "alert_2"
            }
          }
        }
      },
      "Outputs": {
        "Name": {
          "Description": "Alert name.",
          "Value": {
            "Fn::GetAtt": [
              "Alert",
              "Name"
            ]
          }
        }
      }
    }
    ```
