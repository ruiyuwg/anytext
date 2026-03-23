ALIYUN::ESS::ScalingRule is used to create a scaling rule.

## Syntax

```
{
  "Type": "ALIYUN::ESS::ScalingRule",
  "Properties": {
    "AdjustmentValue": Integer,
    "Cooldown": Integer,
    "ScalingGroupId": String,
    "AdjustmentType": String,
    "ScalingRuleName": String,
    "MetricName": String,
    "PredictiveTaskBufferTime": Integer,
    "ScalingRuleType": String,
    "PredictiveValueBuffer": Integer,
    "TargetValue": Number,
    "StepAdjustment": List,
    "PredictiveValueBehavior": String,
    "DisableScaleIn": Boolean,
    "InitialMaxSize": Integer,
    "MinAdjustmentMagnitude": Integer,
    "EstimatedInstanceWarmup": Integer,
    "PredictiveScalingMode": String,
    "ScaleInEvaluationCount": Integer,
    "ScaleOutEvaluationCount": Integer
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

AdjustmentValue

Integer

No

Yes

The number of ECS instances to increase or decrease when scaling occurs. This parameter takes effect only when the ScalingRuleType parameter is set to SimpleScalingRule or StepScalingRule.

Valid values based on the AdjustmentType value:

-   Valid values when the AdjustmentType parameter is set to QuantityChangeInCapacity: -500 to 500
-   Valid values when the AdjustmentType parameter is set to PercentChangeInCapacity: - 100 to 10000
-   Valid values when the AdjustmentType parameter is set to TotalCapacity: 0 to 1000

**Note** The number of ECS instances to be adjusted in a single scaling activity cannot exceed 500.

Cooldown

Integer

No

Yes

The cooldown period of the scaling rule. This parameter takes effect only when the ScalingRuleType parameter is set to SimpleScalingRule.

Valid values: 0 to 86400.

Unit: seconds.

By default, this property is empty.

ScalingGroupId

String

Yes

No

The ID of the scaling group to which the scaling rule belongs.

None.

AdjustmentType

String

No

Yes

The adjustment method of the scaling rule. This parameter takes effect only when the ScalingRuleType parameter is set to SimpleScalingRule or StepScalingRule.

Valid values:

-   QuantityChangeInCapacity: increases or decreases the specified number of ECS instances in a scaling group.
-   PercentChangeInCapacity: increases or decreases the specified percentage of ECS instances in a scaling group.
-   TotalCapacity: increases or decreases the number of ECS instances in a scaling group by or to a specific number.

ScalingRuleName

String

No

Yes

The name of the scaling rule.

The name must be 2 to 64 characters in length and can contain digits, letters, underscores (\_), hyphens (-), and periods (.). It must start with a digit or letter.

If this parameter is not specified, the ScalingRuleId value is used by default.

MetricName

String

No

No

The predefined metric to monitor. This parameter is required and applicable only when the ScalingRuleType parameter is set to TargetTrackingScalingRule or PredictiveScalingRule.

-   Valid values when the ScalingRuleType parameter is set to TargetTrackingScalingRule:
    -   CpuUtilization: the average CPU utilization
    -   ClassicInternetRx: the average Internet inbound traffic over the classic network
    -   ClassicInternetTx: the average Internet outbound traffic over the classic network
    -   VpcInternetRx: the average Internet inbound traffic over the VPC
    -   VpcInternetTx: the average Internet outbound traffic over the VPC
    -   IntranetRx: the average inbound traffic over the internal network
    -   IntranetTx: the average outbound traffic over the internal network
-   Valid values when the ScalingRuleType parameter is set to PredictiveScalingRule:
    -   CpuUtilization: the average CPU utilization
    -   IntranetRx: the average inbound traffic over the internal network
    -   IntranetTx: the average outbound traffic over the internal network

PredictiveTaskBufferTime

Integer

No

No

The buffer period ahead of the prediction task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed on the hour. You can set a buffer period to execute prediction tasks ahead of schedule, so that resources can be prepared in advance.

Valid values: 0 to 60.

Unit: minutes.

Default value: 0.

ScalingRuleType

String

No

No

The type of the scaling rule.

Default value: SimpleScalingRule. Valid values:

-   SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
-   TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be scaled and tries to keep the value of a predefined metric close to TargetValue.
-   StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
-   PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predict the future values of metrics. The rule then automatically creates scheduled tasks to set the boundary values for the scaling group.

PredictiveValueBuffer

Integer

No

No

The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. If the predicted value increased by this ratio is greater than the initial maximum capacity, the value after the increase is used as the maximum value for prediction tasks.

Valid values: 0 to 100.

Default value: 0.

TargetValue

Number

No

No

The metric value that you expect. This parameter takes effect only when the ScalingRuleType parameter is set to TargetTrackingScalingRule or PredictiveScalingRule.

The value must be greater than 0 and can have a maximum of three decimal places.

StepAdjustment

List

No

No

The step adjustments for step scaling.

For more information, see [StepAdjustment properties](#section-suj-znp-48c).

PredictiveValueBehavior

String

No

No

The action taken on the predicted maximum value.

Default value: MaxOverridePredictiveValue. Valid values:

-   MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for prediction tasks when the predicted value is greater than the initial maximum capacity.
-   PredictiveValueOverrideMax: uses the predicted value as the maximum value for prediction tasks when the predicted value is greater than the initial maximum capacity.
-   PredictiveValueOverrideMaxWithBuffer: increases the predicted value by a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for prediction tasks.

DisableScaleIn

Boolean

No

No

Specifies whether to disable scale-in. This parameter takes effect only when the ScalingRuleType parameter is set to TargetTrackingScalingRule.

Default value: false. Valid values:

-   true
-   false

InitialMaxSize

Integer

No

No

The maximum number of ECS instances in the scaling group, which is used together with the PredictiveValueBehavior parameter.

The default value of this parameter is the value of MaxSize.

MinAdjustmentMagnitude

Integer

No

No

The minimum number of ECS instances to be adjusted in the scaling rule.

This parameter takes effect only when the ScalingRuleType parameter is set to SimpleScalingRule or StepScalingRule, and the AdjustmentType parameter is set to PercentChangeInCapacity.

EstimatedInstanceWarmup

Integer

No

No

The warm-up period of the ECS instances. This parameter takes effect only when the ScalingRuleType parameter is set to TargetTrackingScalingRule or StepScalingRule.

Valid values: 0 to 86400.

Unit: seconds.

Default value: 300.

The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data to Cloud Monitor during the warm-up period.

**Note** When the system calculates the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.

PredictiveScalingMode

String

No

No

The mode of the predictive scaling rule.

Default value: PredictAndScale. Valid values:

-   PredictAndScale: generates predicted results and creates prediction tasks.
-   PredictOnly: generates predicted results but does not create prediction tasks.

ScaleInEvaluationCount

Integer

No

Yes

The number of consecutive times that the event-triggered task created for scale-in activities must meet the threshold conditions before an alert is triggered.

After a target tracking scaling rule is created, an event-triggered task is automatically created.

Default value: 15.

ScaleOutEvaluationCount

Integer

No

Yes

The number of consecutive times that the event-triggered task created for scale-out activities must meet the threshold conditions before an alert is triggered.

After a target tracking scaling rule is created, an event-triggered task is automatically created.

Default value: 3.

## StepAdjustment syntax

```
"StepAdjustment": [
  {
    "MetricIntervalUpperBound": Number,
    "ScalingAdjustment": Integer,
    "MetricIntervalLowerBound": Number
  }
]
```

## StepAdjustment properties

     

Property

Type

Required

Editable

Description

Constraint

MetricIntervalUpperBound

Number

No

No

The upper limit value specified in the step adjustment. This parameter takes effect only when the ScalingRuleType parameter is set to StepScalingRule.

Valid values: -9.999999E18 to 9.999999E18

ScalingAdjustment

Integer

No

No

The specified number of ECS instances to be adjusted in the step adjustment. This parameter takes effect only when the ScalingRuleType parameter is set to StepScalingRule.

None.

MetricIntervalLowerBound

Number

No

No

The lower limit value specified in the step adjustment. This parameter takes effect only when the ScalingRuleType parameter is set to StepScalingRule.

Valid values: -9.999999E18 to 9.999999E18

## Return values

Fn::GetAtt

-   ScalingRuleAri: the unique identifier of the scaling rule.
-   ScalingRuleId: the ID of the scaling rule. This ID is a globally unique identifier (GUID) generated by the system.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Description: Test ESS ScalingRule
    Parameters:
      AutoScalingGroupId:
        Type: String
        AssociationProperty: ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId
    Resources:
      ScalingRule:
        Type: ALIYUN::ESS::ScalingRule
        Properties:
          AdjustmentType: QuantityChangeInCapacity
          ScalingGroupId:
            Ref: AutoScalingGroupId
          AdjustmentValue: 1
    Outputs: {}
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Description": "Test ESS ScalingRule",
      "Parameters": {
        "AutoScalingGroupId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId"
        }
      },
      "Resources": {
        "ScalingRule": {
          "Type": "ALIYUN::ESS::ScalingRule",
          "Properties": {
            "AdjustmentType": "QuantityChangeInCapacity",
            "ScalingGroupId": {
              "Ref": "AutoScalingGroupId"
            },
            "AdjustmentValue": 1
          }
        }
      },
      "Outputs": {
      }
    }
    ```
