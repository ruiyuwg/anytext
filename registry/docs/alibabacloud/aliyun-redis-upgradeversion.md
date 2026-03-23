ALIYUN::REDIS::UpgradeVersion is used to upgrade the major version of a Tair (Redis OSS-compatible) instance.

## Syntax

```
{
  "Type": "ALIYUN::REDIS::UpgradeVersion",
  "Properties": {
    "InstanceId": String,
    "AutoUpgradeOpen": Boolean,
    "EffectiveTime": String,
    "MajorVersion": String,
    "MinorVersion": String
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

None.

AutoUpgradeOpen

Boolean

No

No

Specifies whether to enable the automatic upgrade feature.

None.

EffectiveTime

String

No

No

The execution time of the upgrade.

Valid values:

-   **Immediately** (default): immediately executes the upgrade.
    
-   **MaintainTime**: executes the upgrade within a maintenance window.
    

MajorVersion

String

No

No

The major version to which you want to upgrade the instance.

Valid values:

-   Valid values for a cloud-native instance: 6.0 and 7.0.
    
-   Valid values for a classic instance: 4.0 and 5.0. A value of 4.0 is not recommended.
    

MinorVersion

String

No

No

The current minor version of the instance.

Set the value to latest\_version.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  EffectiveTime:
    AllowedValues:
      - Immediately
      - MaintainTime
    Description:
      en: 'The time when the upgrade is effective. Value: Immediately|MaintainTime,
        default: Immediately.'
    Required: false
    Type: String
  InstanceId:
    Description:
      en: The id of the instance.
    Required: true
    Type: String
  MajorVersion:
    AllowedValues:
      - '5.0'
      - '6.0'
      - '7.0'
    Description:
      en: Upgrade the major version of the instance.
    Required: false
    Type: String
Resources:
  UpgradeVersion:
    Properties:
      EffectiveTime:
        Ref: EffectiveTime
      InstanceId:
        Ref: InstanceId
      MajorVersion:
        Ref: MajorVersion
    Type: ALIYUN::REDIS::UpgradeVersion
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EffectiveTime": {
      "AllowedValues": [
        "Immediately",
        "MaintainTime"
      ],
      "Description": {
        "en": "The time when the upgrade is effective. Value: Immediately|MaintainTime, default: Immediately."
      },
      "Required": false,
      "Type": "String"
    },
    "InstanceId": {
      "Description": {
        "en": "The id of the instance."
      },
      "Required": true,
      "Type": "String"
    },
    "MajorVersion": {
      "AllowedValues": [
        "5.0",
        "6.0",
        "7.0"
      ],
      "Description": {
        "en": "Upgrade the major version of the instance."
      },
      "Required": false,
      "Type": "String"
    }
  },
  "Resources": {
    "UpgradeVersion": {
      "Properties": {
        "EffectiveTime": {
          "Ref": "EffectiveTime"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "MajorVersion": {
          "Ref": "MajorVersion"
        }
      },
      "Type": "ALIYUN::REDIS::UpgradeVersion"
    }
  }
}
```
