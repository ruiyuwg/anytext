ALIYUN::SLS::ApplyConfigToMachineGroup is used to apply Log Service configurations to machine groups.

## Syntax

```
{
  "Type": "ALIYUN::SLS::ApplyConfigToMachineGroup",
  "Properties": {
    "ProjectName": String,
    "ConfigName": String,
    "GroupName": String
  }
}
```

## Properties

     

Name

Type

Required

Editable

Description

Validity

ProjectName

String

No

No

The name of the Log Service project that contains the log configuration to be applied.

The name can be up to 128 characters in length and can contain letters, digits, underscores (\_), periods (.), and hyphens (-).

ConfigName

String

No

No

The name of the log configuration to be applied to a machine group.

The name can be up to 128 characters in length and can contain letters, digits, underscores (\_), periods (.), and hyphens (-).

GroupName

String

No

No

The name of the machine group.

The name can be up to 128 characters in length and can contain letters, digits, underscores (\_), periods (.), and hyphens (-).

## Response parameters

**Fn::GetAtt**

None

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      ApplyConfigToMachineGroup:
        Type: ALIYUN::SLS::ApplyConfigToMachineGroup
        Properties:
          ProjectName: rostest-beijing
          ConfigName: rostest-conf
          GroupName: machine-group-test1
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "ApplyConfigToMachineGroup": {
          "Type": "ALIYUN::SLS::ApplyConfigToMachineGroup",
          "Properties": {
            "ProjectName": "rostest-beijing",
            "ConfigName": "rostest-conf",
            "GroupName": "machine-group-test1"
          }
        }
      }
    }            
    ```
