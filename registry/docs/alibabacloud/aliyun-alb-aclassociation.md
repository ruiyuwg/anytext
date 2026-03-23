ALIYUN::ALB::AclAssociation is used to associate access control lists (ACLs) with a listener.

## Syntax

```
{
  "Type": "ALIYUN::ALB::AclAssociation",
  "Properties": {
    "AclType": String,
    "AclIds": List,
    "ListenerId": String
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

AclIds

List

Yes

Yes

The ACL IDs.

You can specify up to three IDs.

AclType

String

Yes

No

The ACL type.

Valid values:

-   White: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. You can use a whitelist in scenarios in which you want to allow access only from specific IP addresses to an application.
    
    Improperly configured whitelists may affect service availability. If a whitelist is configured, the listener forwards only requests from IP addresses that are added to the whitelist.
    
    If a whitelist is configured but no IP address is added to the whitelist, the listener forwards all requests.
    
-   Black: a blacklist. No requests from the IP addresses or CIDR blocks in the ACL are forwarded. You can use a blacklist in scenarios in which you want to deny access from specific IP addresses to an application.
    
    If you enable a blacklist but do not add an IP address to the ACL, the listener forwards all requests.
    

ListenerId

String

Yes

No

The listener ID.

None.

## Return values

Fn::GetAtt

ListenerId: the listener ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclIds:
    Description: The IDs of the ACLs. You can specify up to three IDs at a time.
    MaxLength: 3
    MinLength: 1
    Type: Json
  AclType:
    AllowedValues:
    - White
    - Black
    Description: The type of ACL.
    Type: String
  ListenerId:
    Description: The ID of the listener.
    Type: String
Resources:
  AclAssociation:
    Properties:
      AclIds:
        Ref: AclIds
      AclType:
        Ref: AclType
      ListenerId:
        Ref: ListenerId
    Type: ALIYUN::ALB::AclAssociation
Outputs:
  ListenerId:
    Description: The ID of the listener.
    Value:
      Fn::GetAtt:
      - AclAssociation
      - ListenerId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AclType": {
      "Type": "String",
      "Description": "The type of ACL.",
      "AllowedValues": [
        "White",
        "Black"
      ]
    },
    "AclIds": {
      "Type": "Json",
      "Description": "The IDs of the ACLs. You can specify up to three IDs at a time.",
      "MinLength": 1,
      "MaxLength": 3
    },
    "ListenerId": {
      "Type": "String",
      "Description": "The ID of the listener."
    }
  },
  "Resources": {
    "AclAssociation": {
      "Type": "ALIYUN::ALB::AclAssociation",
      "Properties": {
        "AclType": {
          "Ref": "AclType"
        },
        "AclIds": {
          "Ref": "AclIds"
        },
        "ListenerId": {
          "Ref": "ListenerId"
        }
      }
    }
  },
  "Outputs": {
    "ListenerId": {
      "Description": "The ID of the listener.",
      "Value": {
        "Fn::GetAtt": [
          "AclAssociation",
          "ListenerId"
        ]
      }
    }
  }
}
```
