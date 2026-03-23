ALIYUN::FNF::Flow is used to create a flow.

## Syntax

```
{
  "Type": "ALIYUN::FNF::Flow",
  "Properties": {
    "Definition": String,
    "RoleArn": String,
    "Description": String,
    "RequestId": String,
    "Name": String,
    "ExternalStorageLocation": String,
    "ExecutionMode": String
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

Definition

String

Yes

Yes

The definition of the flow. Example: `version: v1beta1\ntype: flow\nsteps: \n - type: pass\n name: mypass`.

The definition follows the Flow Definition Language (FDL) syntax. For more information, see [Overview](/help/en/serverless-workflow/latest/flow-definition-language-overview#concept-2184141).

RoleArn

String

No

Yes

The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that is required to execute the flow.

None.

Description

String

No

Yes

The description of the flow.

None.

RequestId

String

No

Yes

The ID of the request.

If you leave this property empty, the system generates a value at random.

Name

String

Yes

No

The name of the flow.

The name must be unique within an Alibaba Cloud account.

It must be 1 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter or an underscore (\_).

ExternalStorageLocation

String

No

No

The path of the external storage.

None.

ExecutionMode

String

No

No

The execution mode.

Valid values:

-   Express
    
-   Standard
    

## Return values

Fn::GetAtt

-   CreatedTime: the time when the flow was created.
    
-   LastModifiedTime: the time when the flow was last modified.
    
-   Id: the unique ID of the flow.
    
-   Name: the name of the flow.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  Flow:
    Type: ALIYUN::FNF::Flow
    Properties:
      Name: ros-test
      Definition: ros-test
Outputs:
  CreatedTime:
    Description: Flow creation time.
    Value:
      Fn::GetAtt:
        - Flow
        - CreatedTime
  LastModifiedTime:
    Description: The most recently modified time of the flow.
    Value:
      Fn::GetAtt:
        - Flow
        - LastModifiedTime
  Id:
    Description: The unique ID of the flow.
    Value:
      Fn::GetAtt:
        - Flow
        - Id
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "Flow": {
      "Type": "ALIYUN::FNF::Flow",
      "Properties": {
        "Name": "ros-test",
        "Definition": "ros-test"
      }
    }
  },
  "Outputs": {
    "CreatedTime": {
      "Description": "Flow creation time.",
      "Value": {
        "Fn::GetAtt": [
          "Flow",
          "CreatedTime"
        ]
      }
    },
    "LastModifiedTime": {
      "Description": "The most recently modified time of the flow.",
      "Value": {
        "Fn::GetAtt": [
          "Flow",
          "LastModifiedTime"
        ]
      }
    },
    "Id": {
      "Description": "The unique ID of the flow.",
      "Value": {
        "Fn::GetAtt": [
          "Flow",
          "Id"
        ]
      }
    }
  }
}
```
