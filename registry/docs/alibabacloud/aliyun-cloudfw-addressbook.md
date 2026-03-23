The ALIYUN::CLOUDFW::AddressBook resource type is used to create address books for security access control, such as IP address books, ECS tag-based address books, port address books, and domain name address books.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::AddressBook",
  "Properties": {
    "GroupType": String,
    "AutoAddTagEcs": Boolean,
    "Description": String,
    "TagRelation": String,
    "RegionId": String,
    "GroupName": String,
    "AddressList": String,
    "AckLabels": List,
    "AckClusterConnectorId": String,
    "AckNamespaces": List,
    "TagList": List
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Description

String

Yes

Yes

The description of the address book.

None.

GroupName

String

Yes

No

The name of the address book.

None.

GroupType

String

Yes

No

The type of the address book.

Valid values:

-   IP: IP address book.
    
-   domain: domain name address book.
    
-   port: port address book.
    
-   tag: ECS tag-based address book.
    

AddressList

String

No

Yes

The address list of the address book. Separate multiple addresses with English commas.

**Note**

Set this parameter when GroupType is IP, port, or domain.

-   If GroupType is IP, enter IP addresses in the address list. For example: 10.10.XX.XX/32, 10.10.XX.XX/24.
    
-   If GroupType is port, enter ports or port ranges in the address list. For example: 80, 100/200.
    
-   If GroupType is domain, enter domain names in the address list. For example: demo1.aliyun.com, demo2.aliyun.com.
    

AckLabels

List

No

No

The list of ACK cluster container group labels.

Maximum of 10. For more information, see [AckLabels properties](#d243b70583q7a).

AckClusterConnectorId

String

No

No

The ID of the ACK cluster connector.

None.

AckNamespaces

List

No

No

The list of ACK cluster container group namespaces.

Maximum of 10.

AutoAddTagEcs

Boolean

No

Yes

Automatically add public IP addresses of Elastic Compute Service (ECS) instances that match new tags to the address book.

Valid values:

-   true
    
-   false
    

RegionId

String

No

No

The region. Default value: cn-hangzhou.

Valid values:

-   cn-hangzhou
    
-   ap-southeast-1
    

TagList

List

No

Yes

The ECS tags to match.

None.

TagRelation

String

No

Yes

The relationship between multiple ECS tags to match.

Valid values:

-   and: Multiple tags have an "AND" relationship. Only public IP addresses of ECS instances that match all specified tags are added to the address book.
    
-   or: Multiple tags have an "OR" relationship. Public IP addresses of ECS instances that match any specified tag are added to the address book.
    

## AckLabels syntax

```
"AckLabels": [
  {
    "Key": String,
    "Value": String
  }
]
```

## AckLabels properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Key

String

No

No

The key of the ACK cluster container group label.

None.

Value

String

No

No

The value of the ACK cluster container group label.

None.

## TagList syntax

```
"TagList": [
  {
    "TagKey": String,
    "TagValue": String
  }
]
```

## TagList properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

TagKey

String

No

Yes

The key of the ECS tag to match.

None.

TagValue

String

No

Yes

The value of the ECS tag to match.

None.

## Return value

Fn::GetAtt

GroupUuid: The unique ID of the address book. This ID is returned after the address book is successfully created.

## Example

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  AddressBook:
    Type: ALIYUN::CLOUDFW::AddressBook
    Properties:
      GroupType:
        Ref: GroupType
      AutoAddTagEcs:
        Ref: AutoAddTagEcs
      Description:
        Ref: Description
      TagRelation:
        Ref: TagRelation
      RegionId:
        Ref: RegionId
      GroupName:
        Ref: GroupName
      AddressList:
        Ref: AddressList
      TagList:
        Ref: TagList
Parameters:
  GroupType:
    Type: String
    Description: 'The type of the address book. Valid values: ip: IP address book. domain: domain name address book. port: port address book. tag: ECS tag-based address book.'
    AllowedValues:
    - domain
    - ip
    - port
    - tag
  AutoAddTagEcs:
    Default: false
    Type: Boolean
    Description: Automatically add public IP addresses of Elastic Compute Service (ECS) instances that match new tags to the address book. Defaults to false.
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
  Description:
    MinLength: 1
    Type: String
    Description: The description of the address book.
  TagRelation:
    Type: String
    Description: 'The relationship between multiple ECS tags to match. Valid values: and: Multiple tags have an "AND" relationship. Only public IP addresses of ECS instances that match all specified tags are added to the address book. or: Multiple tags have an "OR" relationship. Public IP addresses of ECS instances that match any specified tag are added to the address book.'
    AllowedValues:
    - and
    - or
  RegionId:
    Default: cn-hangzhou
    Type: String
    Description: The region. Default value: cn-hangzhou.
    AllowedValues:
    - cn-hangzhou
    - ap-southeast-1
  GroupName:
    Type: String
    Description: The name of the address book.
  AddressList:
    Type: String
    Description: |-
      The address list of the address book. Separate multiple addresses with commas.
      Note: Set this parameter when GroupType is IP, port, or domain.
      If GroupType is IP, enter IP addresses in the address list. For example: 10.10.XX.XX/32, 10.10.XX.XX/24.
      If GroupType is port, enter ports or port ranges in the address list. For example: 80, 100/200.
      If GroupType is domain, enter domain names in the address list. For example: demo1.aliyun.com, demo2.aliyun.com.
  TagList:
    Type: Json
    Description: ''
    MaxLength: 100
Outputs:
  GroupUuid:
    Description: The unique ID of the address book returned after successful addition.
    Value:
      Fn::GetAtt:
      - AddressBook
      - GroupUuid
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "AddressBook": {
      "Type": "ALIYUN::CLOUDFW::AddressBook",
      "Properties": {
        "GroupType": {
          "Ref": "GroupType"
        },
        "AutoAddTagEcs": {
          "Ref": "AutoAddTagEcs"
        },
        "Description": {
          "Ref": "Description"
        },
        "TagRelation": {
          "Ref": "TagRelation"
        },
        "RegionId": {
          "Ref": "RegionId"
        },
        "GroupName": {
          "Ref": "GroupName"
        },
        "AddressList": {
          "Ref": "AddressList"
        },
        "TagList": {
          "Ref": "TagList"
        }
      }
    }
  },
  "Parameters": {
    "GroupType": {
      "Type": "String",
      "Description": "The type of the address book. Valid values: ip: IP address book. domain: domain name address book. port: port address book. tag: ECS tag-based address book.",
      "AllowedValues": [
        "domain",
        "ip",
        "port",
        "tag"
      ]
    },
    "AutoAddTagEcs": {
      "Default": false,
      "Type": "Boolean",
      "Description": "Automatically add public IP addresses of Elastic Compute Service (ECS) instances that match new tags to the address book. Defaults to false.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "Description": {
      "MinLength": 1,
      "Type": "String",
      "Description": "The description of the address book."
    },
    "TagRelation": {
      "Type": "String",
      "Description": "The relationship between multiple ECS tags to match. Valid values: and: Multiple tags have an \"AND\" relationship. Only public IP addresses of ECS instances that match all specified tags are added to the address book. or: Multiple tags have an \"OR\" relationship. Public IP addresses of ECS instances that match any specified tag are added to the address book.",
      "AllowedValues": [
        "and",
        "or"
      ]
    },
    "RegionId": {
      "Default": "cn-hangzhou",
      "Type": "String",
      "Description": "The region. Default value: cn-hangzhou.",
      "AllowedValues": [
        "cn-hangzhou",
        "ap-southeast-1"
      ]
    },
    "GroupName": {
      "Type": "String",
      "Description": "The name of the address book."
    },
    "AddressList": {
      "Type": "String",
      "Description": "The address list of the address book. Separate multiple addresses with commas.\nNote: Set this parameter when GroupType is IP, port, or domain.\nIf GroupType is IP, enter IP addresses in the address list. For example: 10.10.XX.XX/32, 10.10.XX.XX/24.\nIf GroupType is port, enter ports or port ranges in the address list. For example: 80, 100/200.\nIf GroupType is domain, enter domain names in the address list. For example: demo1.aliyun.com, demo2.aliyun.com."
    },
    "TagList": {
      "Type": "Json",
      "Description": "",
      "MaxLength": 100
    }
  },
  "Outputs": {
    "GroupUuid": {
      "Description": "The unique ID of the address book returned after successful addition.",
      "Value": {
        "Fn::GetAtt": [
          "AddressBook",
          "GroupUuid"
        ]
      }
    }
  }
}
```
