ALIYUN::VPC::FlowLog is used to create a flow log.

## Syntax

```
{
  "Type": "ALIYUN::VPC::FlowLog",
  "Properties": {
    "FlowLogName": String,
    "Description": String,
    "LogStoreName": String,
    "ResourceId": String,
    "ProjectName": String,
    "ResourceType": String,
    "TrafficType": String
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

FlowLogName

String

No

Yes

The name of the flow log.

The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.

Description

String

No

Yes

The description of the flow log.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

LogStoreName

String

Yes

No

The name of the Logstore that stores the captured traffic data.

None

ResourceId

String

Yes

No

The ID of the resource whose traffic you want to capture.

The IDs of virtual private clouds (VPCs), vSwitches, and elastic network interfaces (ENIs) are supported.

You cannot create a flow log for a VPC that contains instances of the following instance families: ecs.c1, ecs.c2, ecs.c4, ecs.c5, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4, ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2, ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4.

To create a flow log, you must upgrade the instance types first. For more information, see [Change the instance type of a pay-as-you-go instance](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance#concept-fzw-gbf-5db "This topic describes how to change the instance type (vCPUs and memory) of a pay-as-you-go instance.") and [Upgrade the instance types of subscription instances](/help/en/ecs/user-guide/upgrade-the-instance-types-of-subscription-instances#concept-jl1-2bf-5db "This topic describes how to upgrade the instance type of a subscription instance for more vCPUs and higher memory size. The new instance type takes effect immediately after you restart the instance.").

**Note** If your VPC contains instances of the preceding instance families and you have created a flow log, you must upgrade the instance types to ensure that the flow log feature can take effect.

ProjectName

String

Yes

No

The name of the Log Service project that stores the captured traffic data.

None

ResourceType

String

Yes

No

The type of the resource whose traffic you want to capture.

Valid values:

-   NetworkInterface: Traffic data is captured from all ENIs.
-   VSwitch: Traffic data is captured from all ENIs that are attached to a specified vSwitch.
-   VPC: Traffic data is captured from all ENIs in a specified VPC.

TrafficType

String

Yes

No

The type of the traffic that you want to capture.

Valid values:

-   All: all traffic
-   Allow: traffic that is allowed by Resource Access Management (RAM)
-   Drop: traffic that is denied by RAM

## Response parameters

Fn::GetAtt

-   FlowLogName: the name of the flow log.
-   Description: the description of the flow log.
-   LogStoreName: the name of the Logstore.
-   ResourceId: the resource ID.
-   ProjectName: the name of the Log Service project.
-   ResourceType: the resource type.
-   FlowLogId: the ID of the flow log.
-   TrafficType: the type of the traffic.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FlowLogName": {
      "Type": "String",
      "Description": "The flow log name."
    },
    "Description": {
      "Type": "String",
      "Description": "The Description of flow log."
    },
    "LogStoreName": {
      "Type": "String",
      "Description": "The log store name."
    },
    "ResourceId": {
      "Type": "String",
      "Description": "The resource id."
    },
    "ProjectName": {
      "Type": "String",
      "Description": "The project name."
    },
    "ResourceType": {
      "Type": "String",
      "Description": "The resource type."
    },
    "TrafficType": {
      "Type": "String",
      "Description": "The traffic type."
    }
  },
  "Resources": {
    "VPCFlowLog": {
      "Type": "ALIYUN::VPC::FlowLog",
      "Properties": {
        "FlowLogName": {
          "Ref": "FlowLogName"
        },
        "Description": {
          "Ref": "Description"
        },
        "LogStoreName": {
          "Ref": "LogStoreName"
        },
        "ResourceId": {
          "Ref": "ResourceId"
        },
        "ProjectName": {
          "Ref": "ProjectName"
        },
        "ResourceType": {
          "Ref": "ResourceType"
        },
        "TrafficType": {
          "Ref": "TrafficType"
        }
      }
    }
  },
  "Outputs": {
    "FlowLogName": {
      "Description": "The flow log name.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "FlowLogName"
        ]
      }
    },
    "Description": {
      "Description": "The Description of flow log.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "Description"
        ]
      }
    },
    "LogStoreName": {
      "Description": "The log store name.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "LogStoreName"
        ]
      }
    },
    "ResourceId": {
      "Description": "The resource id.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "ResourceId"
        ]
      }
    },
    "ProjectName": {
      "Description": "The project name.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "ProjectName"
        ]
      }
    },
    "ResourceType": {
      "Description": "The resource type.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "ResourceType"
        ]
      }
    },
    "FlowLogId": {
      "Description": "The flow log ID.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "FlowLogId"
        ]
      }
    },
    "TrafficType": {
      "Description": "The traffic type.",
      "Value": {
        "Fn::GetAtt": [
          "VPCFlowLog",
          "TrafficType"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    Description: The Description of flow log.
    Type: String
  FlowLogName:
    Description: The flow log name.
    Type: String
  LogStoreName:
    Description: The log store name.
    Type: String
  ProjectName:
    Description: The project name.
    Type: String
  ResourceId:
    Description: The resource id.
    Type: String
  ResourceType:
    Description: The resource type.
    Type: String
  TrafficType:
    Description: The traffic type.
    Type: String
Resources:
  VPCFlowLog:
    Properties:
      Description:
        Ref: Description
      FlowLogName:
        Ref: FlowLogName
      LogStoreName:
        Ref: LogStoreName
      ProjectName:
        Ref: ProjectName
      ResourceId:
        Ref: ResourceId
      ResourceType:
        Ref: ResourceType
      TrafficType:
        Ref: TrafficType
    Type: ALIYUN::VPC::FlowLog
Outputs:
  Description:
    Description: The Description of flow log.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - Description
  FlowLogId:
    Description: The flow log ID.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - FlowLogId
  FlowLogName:
    Description: The flow log name.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - FlowLogName
  LogStoreName:
    Description: The log store name.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - LogStoreName
  ProjectName:
    Description: The project name.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - ProjectName
  ResourceId:
    Description: The resource id.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - ResourceId
  ResourceType:
    Description: The resource type.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - ResourceType
  TrafficType:
    Description: The traffic type.
    Value:
      Fn::GetAtt:
      - VPCFlowLog
      - TrafficType
```
