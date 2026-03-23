ALIYUN::SAE::ApplicationScalingRule is used to create an auto scaling policy for an application.

## Syntax

```
{
  "Type": "ALIYUN::SAE::ApplicationScalingRule",
  "Properties": {
    "AppId": String,
    "ScalingRuleName": String,
    "ScalingRuleType": String,
    "MinReadyInstances": Integer,
    "MinReadyInstanceRatio": Integer,
    "ScalingRuleMetric": Map,
    "ScalingRuleTimer": Map,
    "ScalingRuleEnable": Boolean
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

AppId

String

Yes

No

The ID of the application.

None.

ScalingRuleName

String

Yes

No

The name of the auto scaling policy.

The name must be unique in an application, and can be up to 32 characters in length. It must start with a lowercase letter and can contain only lowercase letters, digits, and hyphens (-).

ScalingRuleType

String

Yes

No

The type of the auto scaling policy.

Valid values:

-   **timing**: scheduled auto scaling policy
    
-   **metric**: metric-based auto scaling policy
    
-   **mix**: hybrid auto scaling policy
    

**Note**

If you set this property to timing, you must specify ScalingRuleTimer.

If you set this property to metric, you must specify ScalingRuleMetric.

If you set this property to mix, you must specify ScalingRuleMetric and can specify ScalingRuleTimer based on your business requirements.

MinReadyInstances

Integer

No

No

The minimum number of available instances.

Valid values:

-   0: If you set this property to **0**, business interruptions occur when the application is upgraded.
    
-   \-1: If you set this property to -1, the system calculates a recommended value as the minimum number of available instances by using the following formula: Recommended value = Number of existing instances × 25%. The calculation result is rounded up to the nearest integer. For example, if the number of existing instances is 5, the recommended value is calculated by using the following formula: 5 × 25% = 1.25. In this case, the minimum number of available instances is 2.
    

**Note**

To ensure business continuity, we recommend that the minimum number of available instances is greater than or equal to 1 during application deployment and rollback.

MinReadyInstanceRatio

Integer

No

No

The percentage of the minimum number of available instances.

Valid values:

-   **\-1** (default): The minimum number of available instances is not determined by this property.
    
-   **0 to 100**: The minimum number of available instances is calculated by using the following formula: Number of existing instances × Value of MinReadyInstanceRatio × 100%. The calculation result is rounded up to the nearest integer. For example, if the number of existing instances is 5 and MinReadyInstanceRatio is set to 50, the minimum number of available instances is 3.
    

**Note**

If **MinReadyInstances** is specified and **MinReadyInstanceRatio** is set to a valid value other than -1, the value of **MinReadyInstanceRatio** is used to calculate the minimum number of available instances. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, **50** is used to calculate the minimum number of available instances.

ScalingRuleMetric

Map

No

Yes

The configurations of the metric-based auto scaling policy.

You must specify this property when ScalingRuleType is set to metric.

Take note of the following information:

-   **maxReplicas**: the maximum number of application instances.
    
-   **minReplicas**: the minimum number of application instances.
    
-   **metricType**: the metric that is used to trigger the auto scaling policy.
    
    -   **CPU**: the CPU utilization.
        
    -   **MEMORY**: the memory usage.
        
    -   **QPS**: the average queries per second (QPS) within 1 minute per Java application instance.
        
    -   **RT**: the average response time of all API operations within 1 minute in the Java application.
        
    -   **tcpActiveConn**: the average number of active TCP connections within 30 seconds per instance.
        
    -   **SLB\_QPS**: the average QPS of the Internet-facing Server Load Balancer (SLB) instance within 15 seconds per instance.
        
    -   **SLB\_RT**: the average response time of the Internet-facing SLB instance within 15 seconds.
        
    -   **INTRANET\_SLB\_QPS**: the average QPS of the internal-facing SLB instance within 15 seconds per instance.
        
    -   **INTRANET\_SLB\_RT**: the average response time of the internal-facing SLB instance within 15 seconds.
        
-   **metricTargetAverageUtilization**: the limit on the metric that is specified by **metricType**. You can specify following limits:
    
    -   The limit on the CPU utilization. Unit: percentage.
        
    -   The limit on the memory usage. Unit: percentage.
        
    -   The limit on the QPS.
        
    -   The limit on the response time. Unit: milliseconds.
        
    -   The limit on the average number of active TCP connections per second.
        
    -   The limit on the QPS of the Internet-facing SLB instance.
        
    -   The limit on the response time of the Internet-facing SLB instance. Unit: milliseconds.
        
    -   The limit on the QPS of the internal-facing SLB instance.
        
    -   The limit on the response time of the internal-facing SLB instance. Unit: milliseconds.
        
-   **slbId**: the ID of the SLB instance.
    
-   **slbProject**: the Simple Log Service (SLS) project.
    
-   **slbLogstore**: the SLS Logstore.
    
-   **vport**: the listener port of the SLB instance. HTTP and HTTPS are supported.
    
-   **scaleUpRules**: the scale-out rules.
    
-   **scaleDownRules**: the scale-in rules.
    
-   **step**: the step size of the scale-out or scale-in operation. The step size specifies the maximum number of instances that can be added or removed within a specific period of time.
    
-   **disabled**: specifies whether to disable the scale-in feature. If you disable the feature, application instances are never removed. This prevents business risks during peak hours.
    
    -   **true**
        
    -   **false** (default)
        
-   **stabilizationWindowSeconds**: the cooldown period of the scale-out or scale-in operation. Valid values: 0 to 3600. Unit: seconds. Default value: 0.
    

**Note**

You can specify one or more metrics as the trigger conditions of the auto scaling policy. If one of the specified metric values is greater than or equal to the specified limit, application instances are scaled out. After the scale-out operation, the number of application instances is less than or equal to the specified maximum number of application instances. If all the specified metric values are less than the limits, application instances are scaled in. After the scale-in operation, the number of application instances is greater than or equal to the specified minimum number of application instances.

ScalingRuleTimer

Map

No

Yes

The configurations of the scheduled auto scaling policy.

You must specify this property when you use a scheduled auto scaling policy by configuring the relevant property or SDK.

Take note of the following information:

-   **beginDate** and **endDate**: separately specifies the start date and the end date to limit the validity period of the scheduled auto scaling policy. Valid values:
    
    -   null (default): If you set beginDate and endDate to **null**, the scheduled auto scaling policy can always be triggered.
        
    -   Custom date: For example, if you separately set beginDate and endDate to a specific date, the scheduled auto scaling policy can be triggered during the time period within the dates. For example, if you set **beginDate** to **2021-03-25** and **endDate** to **2021-04-25**, the validity period of the auto scaling policy is one month.
        
-   **period**: the frequency at which the scheduled auto scaling policy is executed. Valid values:
    
    -   **\* \* \***: The scheduled auto scaling policy is executed at a specified point in time every day.
        
    -   **\* \* Fri,Mon**: The scheduled auto scaling policy is executed at a specified point in time on one or more days every week. The time must be in GMT+8. Valid values:
        
        -   **Sun**: Sunday
            
        -   **Mon**: Monday
            
        -   **Tue**: Tuesday
            
        -   **Wed**: Wednesday
            
        -   **Thu**: Thursday
            
        -   **Fri**: Friday
            
        -   **Sat**: Saturday
            
    -   **1,2,3,28,31 \* \***: The scheduled auto scaling policy is executed at a specified point in time on one or more dates every month. Valid values: 1 to 31. If a month does not have the 31st day, the auto scaling policy is executed on the specified days other than the 31st day.
        
-   **schedules**: the points in time at which the scheduled auto scaling policy is triggered and the number of application instances that are retained during the time periods. You can specify up to 20 points in time. Take note of the following information:
    
    -   **atTime**: the point in time at which the scheduled auto scaling policy is triggered. Specify the time in the **Hour:Minute** format. Example: **08:00**.
        
    -   **targetReplicas**: the number of application instances that you want to retain during the corresponding time period or the minimum number of available instances required for each deployment. Valid values: 1 to 50.
        

**Note**

To ensure business continuity, we recommend that the minimum number of available instances is greater than or equal to **1** during application deployment and rollback. If the minimum number of available instances is equal to **0**, business interruptions occur when the application is upgraded.

ScalingRuleEnable

Boolean

No

No

Specifies whether to enable the auto scaling policy.

Valid values:

-   **true**
    
-   **false**
    

## ScalingRuleMetric syntax

```
"ScalingRuleMetric": {
  "Metrics": List,
  "MinReplicas": Integer,
  "MaxReplicas": Integer,
  "ScaleDownRules": Map,
  "ScaleUpRules": Map
}
```

## ScalingRuleMetric properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Metrics

List

Yes

No

The metrics that are used to trigger the auto scaling policy.

None.

MinReplicas

Integer

Yes

No

The minimum number of instances.

None.

MaxReplicas

Integer

Yes

No

The maximum number of instances.

None.

ScaleDownRules

Map

No

No

The scale-in rules.

None.

ScaleUpRules

Map

No

No

The scale-out rules.

None.

## Metrics syntax

```
"Metrics": [
  {
    "SlbId": String,
    "MetricType": String,
    "Vport": String,
    "SlbLogstore": String,
    "SlbProject": String,
    "MetricTargetAverageUtilization": Integer
  }
]
```

## Metrics properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

MetricType

String

Yes

No

The metric that is used to trigger the auto scaling policy.

Valid values:

-   **CPU**: the CPU utilization.
    
-   **MEMORY**: the memory usage.
    
-   **QPS**: the average QPS within 1 minute per Java application instance.
    
-   **RT**: the average response time of all API operations within 1 minute in the Java application.
    
-   **tcpActiveConn**: the average number of active TCP connections within 30 seconds per instance.
    
-   **SLB\_QPS**: the average QPS of the Internet-facing SLB instance within 15 seconds per instance.
    
-   **SLB\_RT**: the average response time of the Internet-facing SLB instance within 15 seconds.
    
-   **INTRANET\_SLB\_QPS**: the average QPS of the internal-facing SLB instance within 15 seconds per instance.
    
-   **INTRANET\_SLB\_RT**: the average response time of the internal-facing SLB instance within 15 seconds.
    

MetricTargetAverageUtilization

Integer

Yes

No

The limit on the metric.

-   The limit on the CPU utilization. Unit: percentage.
    
-   The limit on the memory usage. Unit: percentage.
    
-   The limit on the QPS.
    
-   The limit on the response time. Unit: milliseconds.
    
-   The limit on the average number of active TCP connections per second.
    
-   The limit on the QPS of the Internet-facing SLB instance.
    
-   The limit on the response time of the Internet-facing SLB instance. Unit: milliseconds.
    
-   The limit on the QPS of the internal-facing SLB instance.
    
-   The limit on the response time of the internal-facing SLB instance. Unit: milliseconds.
    

SlbId

String

No

No

The ID of the SLB instance.

None.

SlbLogstore

String

No

No

The SLS Logstore.

None.

SlbProject

String

No

No

The SLS project.

None.

Vport

String

No

No

The listener port of the SLB instance. HTTP and HTTPS are supported.

None.

## ScaleDownRules syntax

```
"ScaleDownRules": {
  "Step": String,
  "StabilizationWindowSeconds": Integer,
  "Disabled": Boolean
}
```

## ScaleDownRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Step

String

Yes

No

The step size of the scale-in operation.

The step size specifies the maximum number of instances that can be removed within a specific period of time.

Disabled

Boolean

No

No

Specifies whether to disable the scale-in feature.

If you disable the feature, application instances are never removed. This prevents business risks during peak hours.

Valid values:

-   **true**
    
-   **false** (default)
    

StabilizationWindowSeconds

Integer

No

No

The cooldown period of the scale-in operation.

Valid values: 0 to 3600. Unit: seconds. Default value: 0.

## ScaleUpRules syntax

```
"ScaleUpRules": {
  "Step": String,
  "StabilizationWindowSeconds": Integer,
  "Disabled": Boolean
}
```

## ScaleUpRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Step

String

Yes

No

The step size of the scale-out operation.

The step size specifies the maximum number of instances that can be added within a specific period of time.

Disabled

Boolean

No

No

Specifies whether to disable the scale-out feature.

If you disable the feature, application instances are never added. This prevents business risks during peak hours.

StabilizationWindowSeconds

Integer

No

No

The cooldown time of the scale-out operation.

Valid values: 0 to 3600. Unit: seconds. Default value: 0.

## ScalingRuleTimer syntax

```
"ScalingRuleTimer": {
  "Schedules": List,
  "Period": String,
  "EndDate": String,
  "BeginDate": String
}
```

## ScalingRuleTimer properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Period

String

Yes

No

The frequency at which the scheduled auto scaling policy is executed.

Valid values:

-   **\* \* \***: The scheduled auto scaling policy is executed at a specified point in time every day.
    
-   **\* \* Fri,Mon**: The scheduled auto scaling policy is executed at a specified point in time on one or more days every week. The time must be in GMT+8. Valid values:
    
    -   **Sun**: Sunday
        
    -   **Mon**: Monday
        
    -   **Tue**: Tuesday
        
    -   **Wed**: Wednesday
        
    -   **Thu**: Thursday
        
    -   **Fri**: Friday
        
    -   **Sat**: Saturday
        
-   **1,2,3,28,31 \* \***: The scheduled auto scaling policy is executed at a specified point in time on one or more dates every month. Valid values: 1 to 31. If a month does not have the 31st day, the auto scaling policy is executed on the specified days other than the 31st day.
    

Schedules

List

Yes

No

The points in time at which the scheduled auto scaling policy is triggered within one day.

None.

BeginDate

String

No

No

The start date of the validity period of the scheduled auto scaling policy.

-   **null** (default): If you set **BeginDate** and **EndDate** to null, the scheduled auto scaling policy can always be triggered.
    
-   Custom date: For example, if you separately set **BeginDate** to 2021-03-25 and **EndDate** to 2021-04-25, the validity period of the scheduled auto scaling policy is one month.
    

EndDate

String

No

No

The end date of the validity period of the scheduled auto scaling policy.

-   **null** (default): If you set **BeginDate** and **EndDate** to null, the scheduled auto scaling policy can always be triggered.
    
-   Custom date: For example, if you separately set **BeginDate** to 2021-03-25 and **EndDate** to 2021-04-25, the validity period of the scheduled auto scaling policy is one month.
    

## Schedules syntax

```
"Schedules": [
  {
    "TargetReplicas": Integer,
    "AtTime": String
  }
]
```

## Schedules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AtTime

String

Yes

No

The point in time at which the scheduled auto scaling policy is triggered.

None.

TargetReplicas

Integer

Yes

No

The number of application instances that you want to retain during the corresponding time period or the minimum number of available instances required for each deployment.

Valid values: 1 to 50.

## Return values

Fn::GetAtt

ScalingRuleName: the name of the auto scaling policy.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ScalingRuleName:
    Type: String
    Description:
      en: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
    AllowedPattern: ^[a-z][a-z0-9-]{0,31}$
    Required: true
  AppId:
    Type: String
    Description:
      en: The ID of the application.
    Required: true
  ScalingRuleType:
    Type: String
    Description:
      en: 'The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling'
    AllowedValues:
      - timing
      - metric
      - mix
    Required: true
Resources:
  ApplicationScalingRule:
    Type: ALIYUN::SAE::ApplicationScalingRule
    Properties:
      ScalingRuleName:
        Ref: ScalingRuleName
      AppId:
        Ref: AppId
      ScalingRuleType:
        Ref: ScalingRuleType
Outputs:
  ScalingRuleName:
    Description: The name of the scaling rule.
    Value:
      Fn::GetAtt:
        - ApplicationScalingRule
        - ScalingRuleName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ScalingRuleName": {
      "Type": "String",
      "Description": {
        "en": "The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length."
      },
      "AllowedPattern": "^[a-z][a-z0-9-]{0,31}$",
      "Required": true
    },
    "AppId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the application."
      },
      "Required": true
    },
    "ScalingRuleType": {
      "Type": "String",
      "Description": {
        "en": "The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling"
      },
      "AllowedValues": [
        "timing",
        "metric",
        "mix"
      ],
      "Required": true
    }
  },
  "Resources": {
    "ApplicationScalingRule": {
      "Type": "ALIYUN::SAE::ApplicationScalingRule",
      "Properties": {
        "ScalingRuleName": {
          "Ref": "ScalingRuleName"
        },
        "AppId": {
          "Ref": "AppId"
        },
        "ScalingRuleType": {
          "Ref": "ScalingRuleType"
        }
      }
    }
  },
  "Outputs": {
    "ScalingRuleName": {
      "Description": "The name of the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ApplicationScalingRule",
          "ScalingRuleName"
        ]
      }
    }
  }
}
                        
```
