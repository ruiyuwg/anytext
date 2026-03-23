ALIYUN::GA::AclsListenerAssociation is used to associate an access control list (ACL) with a listener.

## Syntax

```
{
  "Type": "ALIYUN::GA::AclsListenerAssociation",
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

AclType

String

Yes

No

The type of the ACL.

Valid values:

-   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks on the whitelist are forwarded. Whitelists are suitable for scenarios in which you want to allow access only from specific IP addresses. If a whitelist is not configured as expected, risks may arise. After you configure a whitelist for a listener, only requests from the IP addresses on the whitelist are forwarded by the listener. If access control is enabled and a whitelist is configured for a listener but no IP address is added to the whitelist, the Global Accelerator (GA) listener forwards all requests.
    
-   **black**: a blacklist. All requests from the IP addresses or CIDR blocks on the blacklist are denied. Blacklists are suitable for scenarios in which you want to deny access from specific IP addresses. If a blacklist is enabled but no IP addresses are added to the blacklist, the GA listener forwards all requests.
    

AclIds

List

Yes

No

The ID of the ACL.

You can associate up to two ACLs with a listener.

ListenerId

String

Yes

No

The ID of the listener.

None

## Return values

Fn::GetAtt

-   AclIds: the IDs of the ACLs.
    
-   ListenerId: the ID of the listener.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclType:
    Type: String
    Description:
      en: |-
        The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
        black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
    AllowedValues:
      - white
      - black
    Required: true
  AclIds:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Description:
          en: 'The ID of the ACL. '
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: The ID of the ACL. You can associate up to two ACL IDs.
    Required: true
    MinLength: 1
    MaxLength: 2
  ListenerId:
    Type: String
    Description:
      en: The ID of the listener.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::AclsListenerAssociation
    Properties:
      AclType:
        Ref: AclType
      AclIds:
        Ref: AclIds
      ListenerId:
        Ref: ListenerId
Outputs:
  AclIds:
    Description: 'The IDs of the ACL. '
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AclIds
  ListenerId:
    Description: The ID of the listener.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ListenerId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AclType": {
      "Type": "String",
      "Description": {
        "en": "The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.\nblack: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests."
      },
      "AllowedValues": [
        "white",
        "black"
      ],
      "Required": true
    },
    "AclIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "The ID of the ACL. "
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The ID of the ACL. You can associate up to two ACL IDs."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 2
    },
    "ListenerId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the listener."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::AclsListenerAssociation",
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
    "AclIds": {
      "Description": "The IDs of the ACL. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AclIds"
        ]
      }
    },
    "ListenerId": {
      "Description": "The ID of the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ListenerId"
        ]
      }
    }
  }
}
                        
```
