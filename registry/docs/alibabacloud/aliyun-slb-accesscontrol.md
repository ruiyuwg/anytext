ALIYUN::SLB::AccessControl is used to create an access control list (ACL).

## Syntax

```
{
  "Type": "ALIYUN::SLB::AccessControl",
  "Properties": {
    "AddressIPVersion": String,
    "AclName": String,
    "AclEntries": List,
    "Tags": List,
    "ResourceGroupId": String
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

AddressIPVersion

String

No

No

The IP version.

Valid values:

-   ipv4
    
-   ipv6
    

AclName

String

Yes

Yes

The name of the ACL.

None.

ResourceGroupId

String

No

Yes

The ID of the resource group to which the ACL belongs.

None.

AclEntries

List

No

Yes

Details of the entries that you want to add to the ACL.

You can specify up to 50 entries.

For more information, see [AclEntries properties](#section-wwl-vw2-2hb).

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-nm7-b4o-vux).

## AclEntries syntax

```
"AclEntries": [
  {
    "Comment": String,
    "Entry": String
  }
]
```

## AclEntries properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Comment

String

No

No

The description of the ACL entry.

None.

Entry

String

Yes

No

The IP address or CIDR block.

None.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   AclId: the ID of the ACL.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  AccessControl:
    Type: ALIYUN::SLB::AccessControl
    Properties:
      AddressIPVersion: ipv4
      AclName: TestAcl
      AclEntries:
        - Entry: 0.0.0.0
Outputs:
  AclId:
    Description: The ID of the access control list.
    Value:
      Fn::GetAtt:
        - AccessControl
        - AclId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "AccessControl": {
      "Type": "ALIYUN::SLB::AccessControl",
      "Properties": {
        "AddressIPVersion": "ipv4",
        "AclName": "TestAcl",
        "AclEntries": [
          {
            "Entry": "0.0.0.0"
          }
        ]
      }
    }
  },
  "Outputs": {
    "AclId": {
      "Description": "The ID of the access control list.",
      "Value": {
        "Fn::GetAtt": [
          "AccessControl",
          "AclId"
        ]
      }
    }
  }
}
```
