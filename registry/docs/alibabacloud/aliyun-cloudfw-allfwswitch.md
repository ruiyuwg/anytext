ALIYUN::CLOUDFW::AllFwSwitch is used to enable all firewalls.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::AllFwSwitch",
  "Properties": {
    "InstanceId": String
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

No

No

The instance ID of your Cloud Firewall.

None.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: The ID of the cloud firewall instance.
    Required: false
    Type: String
Resources:
  AllFwSwitch:
    Properties:
      InstanceId:
        Ref: InstanceId
    Type: ALIYUN::CLOUDFW::AllFwSwitch
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the cloud firewall instance."
      },
      "Required": false
    }
  },
  "Resources": {
    "AllFwSwitch": {
      "Type": "ALIYUN::CLOUDFW::AllFwSwitch",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  }
}
                        
```
