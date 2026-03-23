ALIYUN::CloudPhone::RunCommand is used to run a command on cloud phones.

## Syntax

```
{
  "Type": "ALIYUN::CloudPhone::RunCommand",
  "Properties": {
    "Command": String,
    "InstanceIds": List,
    "RunAgainOn": List
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

Command

String

Yes

No

The command that you want to run.

The command can be up to 1024 bytes in length, and can contain only letters, digits, underscores (\_), periods (.), forward slashes (/), colons (:), and hyphens (-).

InstanceIds

List

Yes

No

The IDs of the cloud phones on which you want to run the command.

You can specify up to 10 cloud phones.

RunAgainOn

List

No

Yes

The stages of running the command again.

None.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Command:
    Description:
      en: 'The command to be executed.

        The maximum length of a command is 1024 bytes, and only supports lowercase
        letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium
        line (-).'
    Required: true
    Type: String
  InstanceIds:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Required: false
        Type: String
    Description:
      en: 'ID of the instance executing the command.

        Range of n: 1 ~ 10'
    MaxLength: 10
    MinLength: 1
    Required: true
    Type: Json
Resources:
  RunCommand:
    Properties:
      Command:
        Ref: Command
      InstanceIds:
        Ref: InstanceIds
    Type: ALIYUN::CloudPhone::RunCommand
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Command": {
      "Type": "String",
      "Description": {
        "en": "The command to be executed.\nThe maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-)."
      },
      "Required": true
    },
    "InstanceIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "ID of the instance executing the command.\nRange of n: 1 ~ 10"
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 10
    }
  },
  "Resources": {
    "RunCommand": {
      "Type": "ALIYUN::CloudPhone::RunCommand",
      "Properties": {
        "Command": {
          "Ref": "Command"
        },
        "InstanceIds": {
          "Ref": "InstanceIds"
        }
      }
    }
  }
}
                        
```
