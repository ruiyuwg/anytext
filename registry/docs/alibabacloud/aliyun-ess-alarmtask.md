ALIYUN::ESS::AlarmTask is used to create a metric-based alarm task.

## Syntax

```
{
  "Type": "ALIYUN::ESS::AlarmTask",
  "Properties": {
    "Statistics": String,
    "Name": String,
    "EvaluationCount": Integer,
    "Period": Integer,
    "MetricType": String,
    "ComparisonOperator": String,
    "Dimensions": List,
    "ScalingGroupId": String,
    "AlarmAction": List,
    "Threshold": Number,
    "MetricName": String,
    "GroupId": Integer,
    "Description": String
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

Statistics

String

No

No

The method used to calculate monitoring data. The statistics must be appropriate for the metric chosen.

Valid values: Average, Minimum, and Maximum. Default value: Average.

Name

String

No

Yes

The name of the alarm rule.

None

EvaluationCount

Integer

No

No

The number of consecutive times that the threshold must be exceeded before an alarm is triggered.

Default value: 3. Minimum value: 1.

Period

Integer

No

No

The metric query period, which must be appropriate for the metric chosen. Unit: seconds.

Valid values: 60, 120, 300, and 900. Default value: 300.

MetricType

String

No

No

The metric type.

Valid values: system and custom.

ComparisonOperator

String

No

No

The alarm comparison operator used to define a condition in the alarm rule.

Valid values: <=, <, >, and > =.

Dimensions

List

No

No

The list of instances associated with the alarm rule.

You must include at least one instance in the list.

ScalingGroupId

String

Yes

No

The ID of the scaling group.

None

AlarmAction

List

Yes

Yes

The list of alarm actions.

You must include one to five alarm actions in the list.

Threshold

Number

Yes

No

The alarm threshold, which must be a numeric value.

None

MetricName

String

Yes

No

The metric name of a service. For more information, see the metrics defined for each service.

None

GroupId

Integer

No

No

The group ID.

None

Description

String

No

Yes

The description of the alarm task.

None

## Dimensions syntax

```
"Dimensions": [
  {
    "DimensionKey": String,
    "DimensionValue": String 
  }
]
```

## Dimensions properties

Property

Type

Required

Editable

Description

Constraint

DimensionValue

String

Yes

No

None

None

DimensionKey

String

Yes

No

None

None

## Response parameters

Fn::GetAtt

AlarmTaskId: the ID of the alarm task.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AutoScalingGroupId:
        Type: String
        AssociationProperty: ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId
      AlarmAction:
        Type: CommaDelimitedList
        Description: Alarm Actions
        MinLength: 1
        MaxLength: 5
    Resources:
      AlarmTask:
        Type: ALIYUN::ESS::AlarmTask
        Properties:
          ScalingGroupId:
            Ref: AutoScalingGroupId
          AlarmAction:
            - ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****
          Threshold: 1
          MetricName: TestMetric
          MetricType: custom
          Statistics: Average
    Outputs:
      AlarmTaskId:
        Description: The alarm task ID
        Value:
          Fn::GetAtt:
            - AlarmTask
            - AlarmTaskId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "AutoScalingGroupId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId"
        },
        "AlarmAction": {
          "Type": "CommaDelimitedList",
          "Description": "Alarm Actions",
          "MinLength": 1,
          "MaxLength": 5
        }
      },
      "Resources": {
        "AlarmTask": {
          "Type": "ALIYUN::ESS::AlarmTask",
          "Properties": {
            "ScalingGroupId": {
              "Ref": "AutoScalingGroupId"
            },
            "AlarmAction": [
              "ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****"
            ],
            "Threshold": 1,
            "MetricName": "TestMetric",
            "MetricType": "custom",
            "Statistics": "Average"
          }
        }
      },
      "Outputs": {
        "AlarmTaskId": {
          "Description": "The alarm task ID",
          "Value": {
            "Fn::GetAtt": [
              "AlarmTask",
              "AlarmTaskId"
            ]
          }
        }
      }
    }
    ```
