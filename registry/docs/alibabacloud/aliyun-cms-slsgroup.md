ALIYUN::CMS::SlsGroup is used to create a Logstore group for the metrics of Simple Log Service logs.

## Syntax

```
{
  "Type": "ALIYUN::CMS::SlsGroup",
  "Properties": {
    "SlsGroupDescription": String,
    "SlsGroupConfig": List,
    "SlsGroupName": String
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

SlsGroupConfig

List

Yes

No

The configurations of the Logstore group.

You can add up to 25 configurations.

For more information, see [SlsGroupConfig properties](#e5ee8fbbf9vqb).

SlsGroupName

String

Yes

No

The name of the Logstore group.

None.

SlsGroupDescription

String

No

Yes

The description of the Logstore group.

None.

## SlsGroupConfig syntax

```
"SlsGroupConfig": [
  {
    "SlsProject": String,
    "SlsRegion": String,
    "SlsUserId": String,
    "SlsLogstore": String
  }
]
```

## SlsGroupConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SlsLogstore

String

Yes

No

The Logstore.

None.

SlsProject

String

Yes

No

The log project.

None.

SlsRegion

String

Yes

No

The region.

None.

SlsUserId

String

No

Yes

The member ID.

If you use ALIYUN::CMS::SlsGroup with the management account of a resource directory, you can connect the Alibaba Cloud services that are activated for a member in the resource directory to Hybrid Cloud Monitoring. You can use the resource directory to monitor Alibaba Cloud services across enterprise accounts.

## Return values

Fn::GetAtt

-   SlsGroupDescription: the description of the Logstore group.
    
-   SlsGroupConfig: the configurations of the Logstore group.
    
-   CreateTime: the time when the Logstore group was created.
    
-   SlsGroupName: the name of the Logstore group.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SlsGroupConfig:
    AssociationPropertyMetadata:
      Parameters:
        SlsProject:
          Type: String
          Description:
            en: The Simple Log Service project.
          Required: true
        SlsRegion:
          Type: String
          Description:
            en: The region ID.
          Required: true
        SlsUserId:
          Type: String
          Description:
            en: The member ID. If you call this operation by using the management account of a resource directory, you can connect the Alibaba Cloud services that are activated for all members in the resource directory to Hybrid Cloud Monitoring. You can use the resource directory to monitor Alibaba Cloud services across enterprise accounts.Note If a member uses CloudMonitor for the first time, you must make sure that the service-linked role AliyunServiceRoleForCloudMonitor is attached to the member. For more information, see Manage the service-linked role for CloudMonitor.
          Required: false
        SlsLogstore:
          Type: String
          Description:
            en: The Logstore.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: 'The configurations of the Logstore group.Valid values of N: 1 to 25.'
    Required: true
  SlsGroupName:
    Type: String
    Description:
      en: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::CMS::SlsGroup
    Properties:
      SlsGroupConfig:
        Ref: SlsGroupConfig
      SlsGroupName:
        Ref: SlsGroupName
Outputs:
  SlsGroupDescription:
    Description: The description of the Logstore group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SlsGroupDescription
  SlsGroupConfig:
    Description: The configurations of the Logstore group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SlsGroupConfig
  CreateTime:
    Description: The creation time of the Logstore group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  SlsGroupName:
    Description: The name of the Logstore group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SlsGroupName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SlsGroupConfig": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "SlsProject": {
            "Type": "String",
            "Description": {
              "en": "The Simple Log Service project."
            },
            "Required": true
          },
          "SlsRegion": {
            "Type": "String",
            "Description": {
              "en": "The region ID."
            },
            "Required": true
          },
          "SlsUserId": {
            "Type": "String",
            "Description": {
              "en": "The member ID. If you call this operation by using the management account of a resource directory, you can connect the Alibaba Cloud services that are activated for all members in the resource directory to Hybrid Cloud Monitoring. You can use the resource directory to monitor Alibaba Cloud services across enterprise accounts.Note If a member uses CloudMonitor for the first time, you must make sure that the service-linked role AliyunServiceRoleForCloudMonitor is attached to the member. For more information, see Manage the service-linked role for CloudMonitor."
            },
            "Required": false
          },
          "SlsLogstore": {
            "Type": "String",
            "Description": {
              "en": "The Logstore."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The configurations of the Logstore group.Valid values of N: 1 to 25."
      },
      "Required": true
    },
    "SlsGroupName": {
      "Type": "String",
      "Description": {
        "en": "The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CMS::SlsGroup",
      "Properties": {
        "SlsGroupConfig": {
          "Ref": "SlsGroupConfig"
        },
        "SlsGroupName": {
          "Ref": "SlsGroupName"
        }
      }
    }
  },
  "Outputs": {
    "SlsGroupDescription": {
      "Description": "The description of the Logstore group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SlsGroupDescription"
        ]
      }
    },
    "SlsGroupConfig": {
      "Description": "The configurations of the Logstore group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SlsGroupConfig"
        ]
      }
    },
    "CreateTime": {
      "Description": "The creation time of the Logstore group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "SlsGroupName": {
      "Description": "The name of the Logstore group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SlsGroupName"
        ]
      }
    }
  }
}
                        
```
