ALIYUN::SLS::MachineGroup is used to create a machine group. Log Service manages all the ECS instances whose logs need to be collected using the Logtail client in the form of machine groups.

## Syntax

```
{
  "Type": "ALIYUN::SLS::MachineGroup",
  "Properties": {
    "GroupType": String,
    "ProjectName": String,
    "MachineList": List,
    "GroupName": String,
    "MachineIdentifyType": String,
    "GroupAttribute": String
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

GroupType

String

No

No

The type of the machine group.

This parameter value is null.

ProjectName

String

No

No

The name of the Log Service project.

The name can be up to 128 characters in length and can contain letters, digits, underscores(\_), periods(.), and hyphens (-).

MachineList

List

No

No

The IP addresses or custom tags of machines in the machine group.

You can only add internal IP addresses of ECS instances to the machine group.

**Important** A single machine group cannot contain both Windows ECS instances and Linux ECS instances.

GroupName

String

No

No

The name of the machine group.

The name can be up to 128 characters in length and can contain letters, digits, underscores(\_), periods(.), and hyphens (-).

MachineIdentifyType

String

No

No

The machine identification type.

Valid values:

-   ip
-   userdefined

GroupAttribute

String

No

No

The attributes of the machine group.

None

## Response parameters

Fn::GetAtt

-   ProjectName: the name of the Log Service project.
-   GroupName: the name of the Log Service machine group.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      MachineGroup:
        Type: ALIYUN::SLS::MachineGroup
        Properties:
          ProjectName: rostest-beijing
          GroupName: machine-group-test2
          MachineIdentifyType: ip
          MachineList:
            - 192.168.XX.XX
    Outputs: {}
    ```
    
-   `JSON`
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "MachineGroup": {
          "Type": "ALIYUN::SLS::MachineGroup",
          "Properties": {
            "ProjectName": "rostest-beijing",
            "GroupName": "machine-group-test2",
            "MachineIdentifyType": "ip",
            "MachineList": [
              "192.168.XX.XX"
            ]
          }
        }
      },
      "Outputs": {
      }
    }
    ```
