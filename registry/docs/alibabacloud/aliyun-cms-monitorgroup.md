ALIYUN::CMS::MonitorGroup is used to create an application group.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MonitorGroup",
  "Properties": {
    "ContactGroups": String,
    "GroupName": String
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

GroupName

String

Yes

Yes

The name of the application group.

None

ContactGroups

String

No

Yes

The alert contact group to which alert notifications are sent.

None

## Return values

**Fn::GetAtt**

GroupId: the ID of the application group.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  MonitorGroup:
    Type: ALIYUN::CMS::MonitorGroup
    Properties:
      GroupName: DemoGroup
Outputs:
  GroupId:
    Description: 'Application group ID generated after the group is created. '
    Value:
      Fn::GetAtt:
        - MonitorGroup
        - GroupId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "MonitorGroup": {
      "Type": "ALIYUN::CMS::MonitorGroup",
      "Properties": {
        "GroupName": "DemoGroup"
      }
    }
  },
  "Outputs": {
    "GroupId": {
      "Description": "Application group ID generated after the group is created. ",
      "Value": {
        "Fn::GetAtt": [
          "MonitorGroup",
          "GroupId"
        ]
      }
    }
  }
}
```
