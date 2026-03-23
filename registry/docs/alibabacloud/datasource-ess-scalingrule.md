DATASOURCE::ESS::ScalingRule is used to query the information about a scaling rule.

## Syntax

```
{
  "Type": "DATASOURCE::ESS::ScalingRule",
  "Properties": {
    "ScalingRuleId": String,
    "RefreshOptions": String
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

ScalingRuleId

String

Yes

Yes

The ID of the scaling rule.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   TargetValue: the target value of the metric. The system keeps the metric value close to the target value by adding instances to or removing instances from the scaling group when the scaling rule is a target tracking scaling rule or predictive scaling rule.
    
-   StepAdjustments: the step adjustments of the step scaling rule.
    
-   Cooldown: the cooldown time of the scaling rule. This property is returned only for simple scaling rules. Valid values: 0 to 86400. Unit: seconds.
    
-   ScalingGroupId: the ID of the scaling group.
    
-   PredictiveValueBehavior: the action on the predicted maximum value.
    
-   Alarms: the CloudMonitor event-triggered tasks that are associated with the scaling rule.
    
-   ScalingRuleId: the ID of the scaling rule.
    
-   MinAdjustmentMagnitude: the minimum number of instances that must be adjusted.
    
-   DisableScaleIn: indicates whether scale-in is disabled. This property is returned only for target tracking scaling rules.
    
-   MaxSize: the maximum number of instances that the scaling group can contain.
    
-   AdjustmentType: the adjustment method of the scaling rule.
    
-   ScalingRuleAri: the unique identifier of the scaling rule.
    
-   MetricName: the name of the predefined metric. This property is returned for target tracking scaling rules and predictive scaling rules.
    
-   MinSize: the minimum number of instances that the scaling group can contain.
    
-   ScalingRuleName: the name of the scaling rule.
    
-   AdjustmentValue: the number of instances to be adjusted based on the scaling rule.
    
-   ScaleOutEvaluationCount: After you create a target tracking scaling rule, an event-triggered task is automatically created and associated with the scaling rule. This property indicates the number of consecutive times the alert condition must be satisfied before the event-triggered task initiates a scale-out operation.
    
-   InitialMaxSize: the maximum number of instances that can be added to the scaling group.
    
-   ScalingRuleType: the type of the scaling rule.
    
-   EstimatedInstanceWarmup: the warm-up period during which a series of preparation measures are taken on new instances.
    
-   PredictiveScalingMode: the mode of the predictive scaling rule.
    
-   PredictiveValueBuffer: the ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. If the predicted value increased by this ratio is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks.
    
-   ScaleInEvaluationCount: After you create a target tracking scaling rule, an event-triggered task is automatically created and associated with the scaling rule. This property indicates the number of consecutive times the alert condition must be satisfied before the event-triggered task initiates a scale-in operation.
    
-   PredictiveTaskBufferTime: the period of buffer time before prediction tasks are run. By default, all prediction tasks that are automatically created based on a predictive scaling rule are run on the hour. The buffer time is used for resource preparations before prediction tasks are run.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ScalingRuleId:
    Type: String
    Description:
      en: The ID of the scaling rule that you want to query.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ESS::ScalingRule
    Properties:
      ScalingRuleId:
        Ref: ScalingRuleId
Outputs:
  TargetValue:
    Description: The target value of the metric.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TargetValue
  StepAdjustments:
    Description: The step adjustments of the step scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StepAdjustments
  Cooldown:
    Description: 'The cooldown period of the scaling rule. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Cooldown
  ScalingGroupId:
    Description: The ID of the scaling group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingGroupId
  PredictiveValueBehavior:
    Description: 'The action on the predicted maximum value. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PredictiveValueBehavior
  Alarms:
    Description: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Alarms
  ScalingRuleId:
    Description: The ID of the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingRuleId
  MinAdjustmentMagnitude:
    Description: The minimum number of instances that must be scaled.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MinAdjustmentMagnitude
  DisableScaleIn:
    Description: Indicates whether scale-in is disabled.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DisableScaleIn
  MaxSize:
    Description: The maximum number of ECS instances that can be contained in the scaling group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MaxSize
  AdjustmentType:
    Description: The adjustment method of the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AdjustmentType
  ScalingRuleAri:
    Description: The unique identifier of the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingRuleAri
  MetricName:
    Description: The name of the metric of the event-triggered task that is associated with the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MetricName
  MinSize:
    Description: The minimum number of ECS instances that must be contained in the scaling group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MinSize
  ScalingRuleName:
    Description: The name of the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingRuleName
  AdjustmentValue:
    Description: The number of instances that must be scaled based on the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AdjustmentValue
  ScaleOutEvaluationCount:
    Description: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScaleOutEvaluationCount
  InitialMaxSize:
    Description: The maximum number of ECS instances that can be contained in the scaling group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InitialMaxSize
  ScalingRuleType:
    Description: The type of the scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingRuleType
  EstimatedInstanceWarmup:
    Description: The warm-up period of instances.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EstimatedInstanceWarmup
  PredictiveScalingMode:
    Description: The mode of the predictive scaling rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PredictiveScalingMode
  PredictiveValueBuffer:
    Description: 'The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PredictiveValueBuffer
  ScaleInEvaluationCount:
    Description: 'The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScaleInEvaluationCount
  PredictiveTaskBufferTime:
    Description: 'The amount of buffer time before prediction tasks are executed. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PredictiveTaskBufferTime
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ScalingRuleId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the scaling rule that you want to query."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ESS::ScalingRule",
      "Properties": {
        "ScalingRuleId": {
          "Ref": "ScalingRuleId"
        }
      }
    }
  },
  "Outputs": {
    "TargetValue": {
      "Description": "The target value of the metric.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TargetValue"
        ]
      }
    },
    "StepAdjustments": {
      "Description": "The step adjustments of the step scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StepAdjustments"
        ]
      }
    },
    "Cooldown": {
      "Description": "The cooldown period of the scaling rule. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Cooldown"
        ]
      }
    },
    "ScalingGroupId": {
      "Description": "The ID of the scaling group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingGroupId"
        ]
      }
    },
    "PredictiveValueBehavior": {
      "Description": "The action on the predicted maximum value. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PredictiveValueBehavior"
        ]
      }
    },
    "Alarms": {
      "Description": "The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Alarms"
        ]
      }
    },
    "ScalingRuleId": {
      "Description": "The ID of the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingRuleId"
        ]
      }
    },
    "MinAdjustmentMagnitude": {
      "Description": "The minimum number of instances that must be scaled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MinAdjustmentMagnitude"
        ]
      }
    },
    "DisableScaleIn": {
      "Description": "Indicates whether scale-in is disabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DisableScaleIn"
        ]
      }
    },
    "MaxSize": {
      "Description": "The maximum number of ECS instances that can be contained in the scaling group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MaxSize"
        ]
      }
    },
    "AdjustmentType": {
      "Description": "The adjustment method of the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AdjustmentType"
        ]
      }
    },
    "ScalingRuleAri": {
      "Description": "The unique identifier of the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingRuleAri"
        ]
      }
    },
    "MetricName": {
      "Description": "The name of the metric of the event-triggered task that is associated with the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MetricName"
        ]
      }
    },
    "MinSize": {
      "Description": "The minimum number of ECS instances that must be contained in the scaling group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MinSize"
        ]
      }
    },
    "ScalingRuleName": {
      "Description": "The name of the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingRuleName"
        ]
      }
    },
    "AdjustmentValue": {
      "Description": "The number of instances that must be scaled based on the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AdjustmentValue"
        ]
      }
    },
    "ScaleOutEvaluationCount": {
      "Description": "The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScaleOutEvaluationCount"
        ]
      }
    },
    "InitialMaxSize": {
      "Description": "The maximum number of ECS instances that can be contained in the scaling group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InitialMaxSize"
        ]
      }
    },
    "ScalingRuleType": {
      "Description": "The type of the scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingRuleType"
        ]
      }
    },
    "EstimatedInstanceWarmup": {
      "Description": "The warm-up period of instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EstimatedInstanceWarmup"
        ]
      }
    },
    "PredictiveScalingMode": {
      "Description": "The mode of the predictive scaling rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PredictiveScalingMode"
        ]
      }
    },
    "PredictiveValueBuffer": {
      "Description": "The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PredictiveValueBuffer"
        ]
      }
    },
    "ScaleInEvaluationCount": {
      "Description": "The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScaleInEvaluationCount"
        ]
      }
    },
    "PredictiveTaskBufferTime": {
      "Description": "The amount of buffer time before prediction tasks are executed. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PredictiveTaskBufferTime"
        ]
      }
    }
  }
}
                        
```
