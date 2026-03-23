DATASOURCE::CMS::AlarmContact is used to query the information about an alert contact.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::AlarmContact",
  "Properties": {
    "AlarmContactName": String,
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

AlarmContactName

String

Yes

Yes

The name of the alert contact.

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

-   Describe: the description of the alert.
    
-   ChannelsStateAliIm: the status of the TradeManager ID that is used as the alert notification method.
    
-   ContactGroups: the alert contact groups.
    
-   ChannelsStateSms: the status of the phone number that is used as the alert notification method.
    
-   ChannelsStateMail: the status of the email address that is used as the alert notification method.
    
-   ChannelsSms: the phone number that is used as the alert notification method.
    
-   CreateTime: the time when the alert contact was created.
    
-   ChannelsDingWebHook: the DingTalk chatbot that is used as the alert notification method. The DingTalk chatbot is in the normal state.
    
-   Lang: the language in which the alert notification is displayed.
    
-   AlarmContactName: the name of the alert contact.
    
-   UpdateTime: the time when the alert contact was updated.
    
-   ChannelsMail: the email address that is used as the alert notification method.
    
-   ChannelsStateDingWebHook: the status of the DingTalk chatbot that is used as the alert notification method.
    
-   ChannelsAliIm: the TradeManager ID that is used as the alert notification method.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AlarmContactName:
    Type: String
    Description:
      en: AlarmContactName.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CMS::AlarmContact
    Properties:
      AlarmContactName:
        Ref: AlarmContactName
Outputs:
  Describe:
    Description: Describe.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Describe
  ChannelsStateAliIm:
    Description: ChannelsStateAliIM.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsStateAliIm
  ContactGroups:
    Description: ContactGroups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ContactGroups
  ChannelsStateSms:
    Description: ChannelsStateSMS.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsStateSms
  ChannelsStateMail:
    Description: ChannelsStateMail.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsStateMail
  ChannelsSms:
    Description: ChannelsSMS.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsSms
  CreateTime:
    Description: CreateTime.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  ChannelsDingWebHook:
    Description: ChannelsDingWebHook.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsDingWebHook
  Lang:
    Description: The language type of the alarm.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Lang
  AlarmContactName:
    Description: AlarmContactName.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AlarmContactName
  UpdateTime:
    Description: UpdateTime.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdateTime
  ChannelsMail:
    Description: ChannelsMail.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsMail
  ChannelsStateDingWebHook:
    Description: ChannelsStateDingWebHook.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsStateDingWebHook
  ChannelsAliIm:
    Description: ChannelsAliIM.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ChannelsAliIm
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AlarmContactName": {
      "Type": "String",
      "Description": {
        "en": "AlarmContactName."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::AlarmContact",
      "Properties": {
        "AlarmContactName": {
          "Ref": "AlarmContactName"
        }
      }
    }
  },
  "Outputs": {
    "Describe": {
      "Description": "Describe.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Describe"
        ]
      }
    },
    "ChannelsStateAliIm": {
      "Description": "ChannelsStateAliIM.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsStateAliIm"
        ]
      }
    },
    "ContactGroups": {
      "Description": "ContactGroups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ContactGroups"
        ]
      }
    },
    "ChannelsStateSms": {
      "Description": "ChannelsStateSMS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsStateSms"
        ]
      }
    },
    "ChannelsStateMail": {
      "Description": "ChannelsStateMail.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsStateMail"
        ]
      }
    },
    "ChannelsSms": {
      "Description": "ChannelsSMS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsSms"
        ]
      }
    },
    "CreateTime": {
      "Description": "CreateTime.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "ChannelsDingWebHook": {
      "Description": "ChannelsDingWebHook.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsDingWebHook"
        ]
      }
    },
    "Lang": {
      "Description": "The language type of the alarm.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Lang"
        ]
      }
    },
    "AlarmContactName": {
      "Description": "AlarmContactName.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AlarmContactName"
        ]
      }
    },
    "UpdateTime": {
      "Description": "UpdateTime.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdateTime"
        ]
      }
    },
    "ChannelsMail": {
      "Description": "ChannelsMail.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsMail"
        ]
      }
    },
    "ChannelsStateDingWebHook": {
      "Description": "ChannelsStateDingWebHook.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsStateDingWebHook"
        ]
      }
    },
    "ChannelsAliIm": {
      "Description": "ChannelsAliIM.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ChannelsAliIm"
        ]
      }
    }
  }
}
                        
```
