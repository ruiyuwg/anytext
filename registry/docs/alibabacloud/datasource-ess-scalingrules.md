DATASOURCE::ESS::ScalingRules are used to query the information about scaling rules.

## Syntax

```
{
  "Type": "DATASOURCE::ESS::ScalingRules",
  "Properties": {
    "RefreshOptions": String,
    "ScalingRuleIds": List,
    "ShowAlarmRules": Boolean,
    "ScalingGroupId": String,
    "ScalingRuleAris": List,
    "ScalingRuleType": String,
    "ScalingRuleNames": List
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

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

ScalingRuleIds

List

No

Yes

The IDs of the scaling rules that you want to query.

You can specify up to 20 IDs.

ShowAlarmRules

Boolean

No

Yes

Specifies whether to return the CloudMonitor event-triggered tasks that are associated with the scaling rules.

Valid values:

-   true
    
-   false
    

Default value: false.

ScalingGroupId

String

No

Yes

The ID of the scaling group.

None.

ScalingRuleAris

List

No

Yes

The unique identifiers of the scaling rules that you want to query.

You can specify up to 20 unique identifiers.

ScalingRuleType

String

No

Yes

The type of the scaling rule.

Valid values:

-   SimpleScalingRule: adjusts the number of Elastic Compute Service (ECS) instances based on the AdjustmentType and AdjustmentValue values.
    
-   TargetTrackingScalingRule: dynamically calculates the number of ECS instances to scale based on the predefined metric (MetricName) and attempts to maintain the metric value close to the specified target value (TargetValue).
    
-   StepScalingRule: scales instances step by step based on the predefined thresholds and metric values.
    
-   PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, the system automatically creates scheduled tasks to adjust the minimum and maximum numbers of instances for the scaling group.
    

ScalingRuleNames

List

No

Yes

The names of the scaling rules that you want to query.

You can specify up to 20 names.

## Return values

Fn::GetAtt

-   ScalingRules: details of the scaling rules.
    
-   ScalingRuleIds: the IDs of the scaling rules.
    

**Property**

**Type**

**Description**

**Constraint**

ScalingRuleIds

List

The IDs of the scaling rules.

None.

ScalingRules

List

Details of the scaling rules.

None.

PredictiveScalingMode

String

The mode of the predictive scaling rule.

None.

MinAdjustmentMagnitude

Number

The minimum number of instances that must be adjusted.

None.

PredictiveValueBuffer

Number

The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. If the predicted value increased by this ratio is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks.

None.

ScalingRuleAri

String

The unique identifier of the scaling rule.

None.

ScaleOutEvaluationCount

Number

After you create a target tracking scaling rule, an event-triggered task is automatically created and associated with the scaling rule. This property indicates the number of consecutive times the alert condition must be satisfied before the event-triggered task initiates a scale-out operation.

None.

ScaleInEvaluationCount

Number

After you create a target tracking scaling rule, an event-triggered task is automatically created and associated with the scaling rule. This property indicates the number of consecutive times the alert condition must be satisfied before the event-triggered task initiates a scale-in operation.

None.

MetricName

String

The name of the metric in the event-triggered task that is associated with the scaling rule.

None.

PredictiveTaskBufferTime

Number

The period of buffer time before prediction tasks are run. By default, all prediction tasks that are automatically created based on a predictive scaling rule are run on the hour. You can specify a period of buffer time for resource preparations before prediction tasks are run.

None.

MaxSize

Number

The maximum number of instances that the scaling group can contain.

None.

StepAdjustments

String

The step adjustments of the step scaling rule.

None.

ScalingRuleName

String

The name of the scaling rule.

None.

DisableScaleIn

String

Indicates whether scale-in is disabled. This property is returned only for target tracking scaling rules.

None.

PredictiveValueBehavior

String

The action on the predicted maximum value.

None.

MinSize

Number

The minimum number of instances that the scaling group can contain.

None.

InitialMaxSize

Number

The maximum number of instances that can be added to the scaling group.

None.

Alarms

String

The CloudMonitor event-triggered tasks that are associated with the scaling rule.

None.

TargetValue

String

The target value of the metric.

None.

EstimatedInstanceWarmup

String

The warm-up period during which a series of preparation measures are taken on new instances. The system does not monitor the metric data of instances that are being warmed up.

None.

ScalingRuleId

String

The ID of the scaling rule.

None.

Cooldown

Number

The cooldown time of the scaling rule. This property is returned only for simple scaling rules.

None.

ScalingGroupId

String

The ID of the scaling group.

None.

ScalingRuleType

String

The type of the scaling rule.

None.

AdjustmentType

String

The adjustment method of the scaling rule.

None.

AdjustmentValue

Number

The number of instances to be adjusted based on the scaling rule.

None.

MetricType

String

The type of the metric in the event-triggered task that is associated with the scaling rule.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ScalingRuleIds:
    Type: Json
    Description:
      en: The IDs of the scaling rules that you want to query.
    Required: false
    MinLength: 0
    MaxLength: 20
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ESS::ScalingRules
    Properties:
      ScalingRuleIds:
        Ref: ScalingRuleIds
Outputs:
  ScalingRules:
    Description: The list of scaling rules.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingRules
  ScalingRuleIds:
    Description: The list of scaling rule IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingRuleIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ScalingRuleIds": {
      "Type": "Json",
      "Description": {
        "en": "The IDs of the scaling rules that you want to query."
      },
      "Required": false,
      "MinLength": 0,
      "MaxLength": 20
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ESS::ScalingRules",
      "Properties": {
        "ScalingRuleIds": {
          "Ref": "ScalingRuleIds"
        }
      }
    }
  },
  "Outputs": {
    "ScalingRules": {
      "Description": "The list of scaling rules.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingRules"
        ]
      }
    },
    "ScalingRuleIds": {
      "Description": "The list of scaling rule IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingRuleIds"
        ]
      }
    }
  }
}
                        
```
