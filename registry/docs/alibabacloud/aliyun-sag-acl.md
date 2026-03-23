ALIYUN::SAG::ACL is used to create an access control list (ACL).

## Syntax

```
{
  "Type": "ALIYUN::SAG::ACL",
  "Properties": {
    "Name": String
  }
}
```

## Properties

**Name**

**Type**

**Required**

**Editable**

**Description**

**Validity**

Name

String

Yes

Yes

The name of the ACL to be created.

The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter but cannot start with http:// or https://.

## Response parameters

**Fn::GetAtt**

AclId: the ID of the ACL.

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Name:
    Type: String
    Description: |-
      Access control name.
      The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
Resources:
  ACL:
    Type: ALIYUN::SAG::ACL
    Properties:
      Name:
        Ref: Name
Outputs:
  AclId:
    Description: Access control set ID.
    Value:
      Fn::GetAtt:
        - ACL
        - AclId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Name": {
      "Type": "String",
      "Description": "Access control name.\nThe length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://."
    }
  },
  "Resources": {
    "ACL": {
      "Type": "ALIYUN::SAG::ACL",
      "Properties": {
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "AclId": {
      "Description": "Access control set ID.",
      "Value": {
        "Fn::GetAtt": [
          "ACL",
          "AclId"
        ]
      }
    }
  }
}
```
