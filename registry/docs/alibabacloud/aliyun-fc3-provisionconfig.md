ALIYUN::FC3::ProvisionConfig is used to create a provisioned configuration in Function Compute 3.0.

## Syntax

```
{
  "Type": "ALIYUN::FC3::ProvisionConfig",
  "Properties": {
    "DefaultTarget": Number,
    "FunctionName": String,
    "AlwaysAllocateCPU": Boolean,
    "AlwaysAllocateGPU": Boolean,
    "Qualifier": String,
    "ScheduledActions": List,
    "TargetTrackingPolicies": List
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

DefaultTarget

Number

Yes

No

The default number of provisioned instances.

This property is used when no metric-based scaling policy or scheduled scaling policy takes effect. Valid values: 0 to 299.

FunctionName

String

Yes

No

The name of the function.

None.

AlwaysAllocateCPU

Boolean

No

No

Specifies whether to always allocate CPU resources.

Default value: true.

AlwaysAllocateGPU

Boolean

No

No

Specifies whether to always allocate GPU resources.

Default value: true.

Qualifier

String

No

No

The alias of the function.

None.

ScheduledActions

List

No

No

The configurations of the scheduled scaling policies.

You can specify up to 100 sets of configurations. For more information, see [ScheduledActions properties](#95693027cepe7).

TargetTrackingPolicies

List

No

No

The configurations of the metric-based scaling policies.

You can specify up to 100 sets of configurations. For more information, see [TargetTrackingPolicies properties](#7de03c7bd2y6w).

## TargetTrackingPolicies syntax

```
"TargetTrackingPolicies": [
  {
    "MetricTarget": Number,
    "TimeZone": String,
    "EndTime": String,
    "MetricType": String,
    "StartTime": String,
    "MinCapacity": Number,
    "Name": String,
    "MaxCapacity": Number
  }
]
```

## TargetTrackingPolicies properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

MetricTarget

Number

Yes

No

The threshold for metric-based scaling.

None.

MetricType

String

Yes

No

The metric type for tracing.

Valid values:

-   ProvisionedConcurrencyUtilization: the concurrency utilization of provisioned instances.
    
-   CPUUtilization: the CPU utilization.
    
-   GPUMemUtilization: the GPU utilization.
    

MinCapacity

Number

Yes

No

The minimum number of provisioned instances for scale-in.

None.

MaxCapacity

Number

Yes

No

The maximum number of provisioned instances for scale-out.

None.

Name

String

Yes

No

The name of the policy.

None.

EndTime

String

No

No

The end time of the policy. The time must be in UTC.

None.

StartTime

String

No

No

The start time of the policy. The time must be in UTC.

None.

TimeZone

String

No

No

The time zone.

When TimeZone is left empty, the values of StartTime and EndTime must be in UTC.

## ScheduledActions syntax

```
"ScheduledActions": [
  {
    "ScheduleExpression": String,
    "TimeZone": String,
    "Target": Number,
    "EndTime": String,
    "StartTime": String,
    "Name": String
  }
]
```

## ScheduledActions properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Name

String

Yes

No

The name of the policy.

None.

Target

Number

Yes

No

The number of provisioned instances.

None.

EndTime

String

No

No

The end time of the policy.

None.

ScheduleExpression

String

No

No

The schedule expression.

None.

StartTime

String

No

No

The start time of the policy.

None.

TimeZone

String

No

No

The time zone.

The values of StartTime, EndTime, and ScheduleExpression must be in UTC.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DefaultTarget:
    Type: Number
    Description:
      en: The number of target resources to reserve.
    Required: true
    MaxValue: 299
  FunctionName:
    Type: String
    Description:
      en: Function name.
    Required: true
Resources:
  ProvisionConfig:
    Type: ALIYUN::FC3::ProvisionConfig
    Properties:
      DefaultTarget:
        Ref: DefaultTarget
      FunctionName:
        Ref: FunctionName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DefaultTarget": {
      "Type": "Number",
      "Description": {
        "en": "The number of target resources to reserve."
      },
      "Required": true,
      "MaxValue": 299
    },
    "FunctionName": {
      "Type": "String",
      "Description": {
        "en": "Function name."
      },
      "Required": true
    }
  },
  "Resources": {
    "ProvisionConfig": {
      "Type": "ALIYUN::FC3::ProvisionConfig",
      "Properties": {
        "DefaultTarget": {
          "Ref": "DefaultTarget"
        },
        "FunctionName": {
          "Ref": "FunctionName"
        }
      }
    }
  }
}
                        
```
