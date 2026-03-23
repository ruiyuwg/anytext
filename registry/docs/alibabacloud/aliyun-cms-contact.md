ALIYUN::CMS::Contact is used to create an alert contact.

## Syntax

```
{
  "Type": "ALIYUN::CMS::Contact",
  "Properties": {
    "Describe": String,
    "ContactName": String,
    "Channels": Map
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

Channels

Map

Yes

Yes

The contact methods of the alert contact.

You must add at least one of the following contact methods: the phone number, email address, webhook URL of the DingTalk chatbot, and TradeManager ID.

ContactName

String

Yes

No

The name of the alert contact.

The name must be 2 to 40 characters in length, and can contain letters, digits, periods (.), and underscores (\_). It must start with a letter.

Describe

String

Yes

Yes

The description.

None.

## Channels syntax

```
"Channels": {
  "Mail": String,
  "AliIM": String,
  "DingWebHook": String,
  "SMS": String
}
```

## Channels properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AliIM

String

No

Yes

The TradeManager ID.

None.

DingWebHook

String

No

Yes

The webhook URL of the DingTalk chatbot.

None.

Mail

String

No

Yes

The email address.

After you add or modify an email address, the recipient receives an email that contains an activation link. The system adds the recipient to the list of alert contacts only after the recipient completes the activation.

SMS

String

No

Yes

The mobile number, text message, or landline number.

After you add or modify a phone number, the recipient receives a text message that contains an activation link. The system adds the recipient to the list of alert contacts only after the recipient completes the activation.

## Return values

Fn::GetAtt

ContactName: the name of the alert contact.

## Examples

**Note**

You must change the masked values of properties in the template based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  Contact:
    Type: ALIYUN::CMS::Contact
    Properties:
      Describe: Test Contact
      ContactName: DemoContact
      Channels:
        Mail: test****@163.com
        DingWebHook: https://webhook.com
        SMS: 1631792327****
Outputs:
  ContactName:
    Description: The name of the alarm contact.
    Value:
      Fn::GetAtt:
        - Contact
        - ContactName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "Contact": {
      "Type": "ALIYUN::CMS::Contact",
      "Properties": {
        "Describe": "Test Contact",
        "ContactName": "DemoContact",
        "Channels": {
          "Mail": "test****@163.com",
          "DingWebHook": "https://webhook.com",
          "SMS": "1631792327****"
        }
      }
    }
  },
  "Outputs": {
    "ContactName": {
      "Description": "The name of the alarm contact.",
      "Value": {
        "Fn::GetAtt": [
          "Contact",
          "ContactName"
        ]
      }
    }
  }
}
```
