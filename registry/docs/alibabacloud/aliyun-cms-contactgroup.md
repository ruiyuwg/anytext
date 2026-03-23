ALIYUN::CMS::ContactGroup is used to create an alert contact group.

## Syntax

```
{
  "Type": "ALIYUN::CMS::ContactGroup",
  "Properties": {
    "Describe": String,
    "ContactGroupName": String,
    "ContactNames": List
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

ContactGroupName

String

Yes

No

The name of the alert contact group.

None.

ContactNames

List

Yes

Yes

The names of the alert contacts.

You can add 1 to 100 alert contacts. Separate multiple names with commas (,).

Describe

String

Yes

Yes

The description of the alert contact group.

None.

## Return values

Fn::GetAtt

ContactGroupName: the name of the alert contact group.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ContactGroup:
    Type: ALIYUN::CMS::ContactGroup
    Properties:
      Describe: Test ContactGroup
      ContactGroupName: TestContactGroup
      ContactNames:
        - Admin1Contact
        - Admin2Contact
Outputs:
  ContactGroupName:
    Description: The name of the alert contact group.
    Value:
      Fn::GetAtt:
        - ContactGroup
        - ContactGroupName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ContactGroup": {
      "Type": "ALIYUN::CMS::ContactGroup",
      "Properties": {
        "Describe": "Test ContactGroup",
        "ContactGroupName": "TestContactGroup",
        "ContactNames": [
          "Admin1Contact",
          "Admin2Contact"
        ]
      }
    }
  },
  "Outputs": {
    "ContactGroupName": {
      "Description": "The name of the alert contact group.",
      "Value": {
        "Fn::GetAtt": [
          "ContactGroup",
          "ContactGroupName"
        ]
      }
    }
  }
}
```
