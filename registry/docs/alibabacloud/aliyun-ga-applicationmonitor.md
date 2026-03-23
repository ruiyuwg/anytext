ALIYUN::GA::ApplicationMonitor is used to create an origin probing task.

## Syntax

```
{
  "Type": "ALIYUN::GA::ApplicationMonitor",
  "Properties": {
    "Address": String,
    "AcceleratorId": String,
    "ListenerId": String,
    "TaskName": String,
    "DetectThreshold": Integer,
    "DetectEnable": Boolean,
    "DetectTimes": Integer,
    "OptionsJson": Map,
    "SilenceTime": Integer
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

Address

String

Yes

No

The URL or IP address that you want to probe.

None.

AcceleratorId

String

Yes

No

The ID of the Global Accelerator (GA) instance on which you want to perform the origin probing task.

None.

ListenerId

String

Yes

No

The ID of the listener on which you want to perform the origin probing task.

None.

TaskName

String

Yes

No

The name of the origin probing task.

The name must be 1 to 128 characters in length, and can contain digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

DetectThreshold

Integer

No

No

The threshold that is used to trigger the automatic diagnostics feature.

Unit: percentage.

Valid values: **0** to **100**.

The default value is **0**. A value of 0 indicates that the automatic diagnostics feature is not triggered.

DetectEnable

Boolean

No

No

Specifies whether to enable the automatic diagnostics feature.

Valid values:

-   **true**
    
-   **false** (default)
    

DetectTimes

Integer

No

No

The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.

Valid values: **1** to **20**. Default value: **1**.

OptionsJson

Map

No

No

The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.

None.

SilenceTime

Integer

No

No

The silence period of the automatic diagnostics feature.

This property specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after the system triggers an automatic diagnostic task, the system must wait until the silence period ends before the system can trigger another automatic diagnostic task.

If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of **DetectTimes**, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.

Unit: seconds. Valid values: **300** to **86400**. Default value: **300**.

## Return values

Fn::GetAtt

TaskId: the ID of the origin probing task.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Address:
    Type: String
    Description:
      en: The URL or IP address that you want to probe.
    Required: true
  TaskName:
    Type: String
    Description:
      en: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
    Required: true
    MinLength: 1
    MaxLength: 128
  AcceleratorId:
    Type: String
    Description:
      en: The ID of the GA instance on which you want to perform the origin probing task.
    Required: true
  ListenerId:
    Type: String
    Description:
      en: The ID of the listener on which you want to perform the origin probing task.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::ApplicationMonitor
    Properties:
      Address:
        Ref: Address
      TaskName:
        Ref: TaskName
      AcceleratorId:
        Ref: AcceleratorId
      ListenerId:
        Ref: ListenerId
Outputs:
  TaskId:
    Description: The ID of the origin probing task.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TaskId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Address": {
      "Type": "String",
      "Description": {
        "en": "The URL or IP address that you want to probe."
      },
      "Required": true
    },
    "TaskName": {
      "Type": "String",
      "Description": {
        "en": "The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 128
    },
    "AcceleratorId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the GA instance on which you want to perform the origin probing task."
      },
      "Required": true
    },
    "ListenerId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the listener on which you want to perform the origin probing task."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::ApplicationMonitor",
      "Properties": {
        "Address": {
          "Ref": "Address"
        },
        "TaskName": {
          "Ref": "TaskName"
        },
        "AcceleratorId": {
          "Ref": "AcceleratorId"
        },
        "ListenerId": {
          "Ref": "ListenerId"
        }
      }
    }
  },
  "Outputs": {
    "TaskId": {
      "Description": "The ID of the origin probing task.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TaskId"
        ]
      }
    }
  }
}
                        
```
