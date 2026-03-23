DATASOURCE::CMS::AlarmContacts is used to query the information about alert contacts.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::AlarmContacts",
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

No

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

-   AlarmContactNames: the names of the alert contacts.
    
-   AlarmContacts: details of the alert contacts.
    

**Property**

**Type**

**Description**

**Constraint**

AlarmContactNames

List

The names of the alert contacts.

None.

AlarmContacts

List

Details of the alert contacts.

None.

Lang

String

The language in which the alert information is displayed.

None.

AlarmContactName

String

The name of the alert contact.

None.

ChannelsStateDingWebHook

String

The status of the DingTalk chatbot. The DingTalk chatbot is in the normal state.

None.

ChannelsAliIm

String

The TradeManager ID that is used as the alert notification method.

None.

ChannelsMail

String

The email address that is used as the alert notification method.

None.

Describe

String

The description.

None.

ChannelsSms

String

The phone number that is used as the alert notification method.

None.

UpdateTime

String

The timestamp that indicates when the alert contact was updated.

None.

ContactGroups

List

The alert contact groups.

None.

ChannelsStateMail

String

The status of the email address that is used as the alert notification method.

None.

ChannelsStateSms

String

The status of the text message that is used as the alert notification method.

None.

ChannelsStateAliIm

String

The status of the TradeManager ID that is used as the alert notification method. The TradeManager ID is in the normal state.

None.

ChannelsDingWebHook

String

The status of the DingTalk chatbot that is used as the alert notification method. The DingTalk chatbot is in the normal state.

None.

CreateTime

String

The time when the alert contact was created.

Unit: milliseconds.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AlarmContactName:
    Description: The name of the alert contact.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      AlarmContactName:
        Ref: AlarmContactName
    Type: DATASOURCE::CMS::AlarmContacts
Outputs:
  AlarmContactNames:
    Description: The list of alarm contact names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AlarmContactNames
  AlarmContacts:
    Description: The list of alarm contacts.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AlarmContacts
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AlarmContactName": {
      "Type": "String",
      "Description": "The name of the alert contact."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::AlarmContacts",
      "Properties": {
        "AlarmContactName": {
          "Ref": "AlarmContactName"
        }
      }
    }
  },
  "Outputs": {
    "AlarmContactNames": {
      "Description": "The list of alarm contact names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AlarmContactNames"
        ]
      }
    },
    "AlarmContacts": {
      "Description": "The list of alarm contacts.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AlarmContacts"
        ]
      }
    }
  }
}
```
