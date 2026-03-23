ALIYUN::CMS::MonitoringAgentProcess is used to create a process monitoring task.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MonitoringAgentProcess",
  "Properties": {
    "ProcessName": String,
    "InstanceId": String,
    "ProcessUser": String
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

InstanceId

String

Yes

No

The ID of the instance.

None

ProcessName

String

No

No

The name of the process.

None

ProcessUser

String

No

No

The user who launches the process.

None

## Return values

Fn::GetAtt

Id: the ID of the process monitoring task.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test CMS MonitoringAgentProcess
Parameters:
  InstanceId:
    Type: String
    Description: The ID of the instance.
    Default: i-***
  ProcessName:
    Type: String
    Description: The name of the process.
    Default: mytest
  ProcessUser:
    Type: String
    Default: root
Resources:
  MonitoringAgentProcess:
    Type: ALIYUN::CMS::MonitoringAgentProcess
    Properties:
      ProcessName:
        Ref: ProcessName
      InstanceId:
        Ref: ECS
      ProcessUser:
        Ref: ProcessUser
Outputs:
  Id:
    Value:
      Fn::GetAtt:
        - MonitoringAgentProcess
        - Id
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test CMS MonitoringAgentProcess",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the instance.",
      "Default": "i-***"
    },
    "ProcessName": {
      "Type": "String",
      "Description": "The name of the process.",
      "Default": "mytest"
    },
    "ProcessUser": {
      "Type": "String",
      "Default": "root"
    }
  },
  "Resources": {
    "MonitoringAgentProcess": {
      "Type": "ALIYUN::CMS::MonitoringAgentProcess",
      "Properties": {
        "ProcessName": {
          "Ref": "ProcessName"
        },
        "InstanceId": {
          "Ref": "ECS"
        },
        "ProcessUser": {
          "Ref": "ProcessUser"
        }
      }
    }
  },
  "Outputs": {
    "Id": {
      "Value": {
        "Fn::GetAtt": [
          "MonitoringAgentProcess",
          "Id"
        ]
      }
    }
  }
}
```
