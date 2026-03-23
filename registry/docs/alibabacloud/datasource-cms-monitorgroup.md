DATASOURCE::CMS::MonitorGroup is used to query the information about an application group.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::MonitorGroup",
  "Properties": {
    "GroupId": Integer,
    "RefreshOptions": String
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

GroupId

Integer

Yes

Yes

The ID of the application group.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   ContactGroups: the alert contact group.
    
-   Type: the type of the application group.
    
-   DynamicTagRuleId: the ID of the tag rule.
    
-   MonitorGroupName: the name of the application group.
    
-   BindUrl: the URL synchronized from Container Service for Kubernetes (ACK).
    
-   CreateTime: the timestamp when the application group was created.
    
-   GmtModified: the timestamp when the application group was modified.
    
-   TemplateIds: the IDs of the templates.
    
-   Tags: the tags added to application group.
    
-   ServiceId: the ID of the Alibaba Cloud service.
    
-   GroupId: the ID of the application group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  GroupId:
    Type: Number
    Description:
      en: GroupId.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CMS::MonitorGroup
    Properties:
      GroupId:
        Ref: GroupId
Outputs:
  ContactGroups:
    Description: AlarmContactGroupName.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ContactGroups
  Type:
    Description: Type.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Type
  DynamicTagRuleId:
    Description: DynamicTagRuleId.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DynamicTagRuleId
  MonitorGroupName:
    Description: MonitorGroupName.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MonitorGroupName
  BindUrl:
    Description: BindUrl.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BindUrl
  CreateTime:
    Description: GmtCreate.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  GmtModified:
    Description: GmtModified.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GmtModified
  TemplateIds:
    Description: TemplateIds.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TemplateIds
  Tags:
    Description: Tags.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  ServiceId:
    Description: ServiceId.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceId
  GroupId:
    Description: GroupId.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "GroupId": {
      "Type": "Number",
      "Description": {
        "en": "GroupId."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::MonitorGroup",
      "Properties": {
        "GroupId": {
          "Ref": "GroupId"
        }
      }
    }
  },
  "Outputs": {
    "ContactGroups": {
      "Description": "AlarmContactGroupName.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ContactGroups"
        ]
      }
    },
    "Type": {
      "Description": "Type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Type"
        ]
      }
    },
    "DynamicTagRuleId": {
      "Description": "DynamicTagRuleId.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DynamicTagRuleId"
        ]
      }
    },
    "MonitorGroupName": {
      "Description": "MonitorGroupName.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MonitorGroupName"
        ]
      }
    },
    "BindUrl": {
      "Description": "BindUrl.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BindUrl"
        ]
      }
    },
    "CreateTime": {
      "Description": "GmtCreate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "GmtModified": {
      "Description": "GmtModified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GmtModified"
        ]
      }
    },
    "TemplateIds": {
      "Description": "TemplateIds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TemplateIds"
        ]
      }
    },
    "Tags": {
      "Description": "Tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "ServiceId": {
      "Description": "ServiceId.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceId"
        ]
      }
    },
    "GroupId": {
      "Description": "GroupId.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupId"
        ]
      }
    }
  }
}
                        
```
