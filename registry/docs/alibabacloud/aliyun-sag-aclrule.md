ALIYUN::SAG::ACLRule is used to add an access control list (ACL) rule.

## Syntax

```
{
  "Type": "ALIYUN::SAG::ACLRule",
  "Properties": {
    "Direction": String,
    "Description": String,
    "AclId": String,
    "SourceCidr": String,
    "DestCidr": String,
    "Priority": Integer,
    "DestPortRange": String,
    "Policy": String,
    "IpProtocol": String,
    "SourcePortRange": String,
    "Type": String,
    "DpiSignatureIds": List,
    "Name": String,
    "DpiGroupIds": List
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

Direction

String

Yes

Yes

The direction of traffic that the ACL rule controls.

Valid values:

-   in: The ACL rule controls inbound network traffic of the on-premises network that is associated with the Smart Access Gateway (SAG) instance.
    
-   out: The ACL rule controls outbound network traffic of the on-premises network that is associated with the SAG instance.
    

Description

String

No

Yes

The description of the ACL rule.

The description must be 1 to 512 characters in length.

AclId

String

Yes

No

The ID of the ACL rule.

None

SourceCidr

String

Yes

Yes

The source CIDR block.

Specify the value of this property in CIDR notation. Example: 192.168.1.0/24.

DestCidr

String

Yes

Yes

The destination CIDR block.

Specify the value of this property in CIDR notation. Example: 192.168.10.0/24.

Priority

Integer

No

Yes

The priority of the ACL rule.

Valid values: 1 to 100.

Default value: 1.

DestPortRange

String

Yes

Yes

The destination port range.

None

Policy

String

Yes

Yes

The policy that determines whether the ACL rule allows traffic.

Valid values:

-   accept: allows traffic.
    
-   drop: denies traffic.
    

IpProtocol

String

Yes

Yes

The protocol based on which the ACL rule is applied.

The value of this property is not case-sensitive.

SourcePortRange

String

Yes

Yes

The source port range.

None

Type

String

No

Yes

The type of the ACL rule.

Default value: LAN. Valid values:

-   LAN: The ACL rule controls the traffic of private IP addresses.
    
-   WAN: The ACL rule controls the traffic of public IP addresses.
    

DpiSignatureIds

List

No

Yes

The list of application IDs.

You can specify up to 100 application IDs.

You can call the [ListDpiSignatures](/help/en/sag/api-listdpisignatures#doc-api-Smartag-ListDpiSignatures) operation to query the ID and details of the application.

Name

String

No

Yes

The name of the ACL rule.

The name must be 2 to 100 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter.

DpiGroupIds

List

No

Yes

The IDs of the application groups.

You can specify up to 100 application group IDs.

You can call the [ListDpiGroups](/help/en/sag/api-listdpigroups#doc-api-Smartag-ListDpiGroups) operation to query the ID and details of the application group.

## Return value

Fn::GetAtt

AcrId: the ID of the ACL rule.

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Direction:
    Type: String
    Description: |-
      Regular direction.
      Value: in|out
    AllowedValues:
      - in
      - out
    Default: in
  AclId:
    Type: String
    Description: Access control ID.
    Default: acl-***
  SourceCidr:
    Type: String
    Description: Source address, CIDR format and IP address range in IPv4 format.
    Default: 192.168.1.0/24
  DestCidr:
    Type: String
    Description: Destination address, CIDR format and IP address range in IPv4 format.
    Default: 192.168.1.0/24
  Priority:
    Default: 1
    Type: Number
    Description: |-
      Priority, ranging from 1 to 100.
      Default: 1
    MaxValue: 100
    MinValue: 1
  DestPortRange:
    Type: String
    Description: Destination port range, 80/80.
    Default: 80/80
  Policy:
    Type: String
    Description: 'Access: accept|drop'
    AllowedValues:
      - accept
      - drop
    Default: accept
  IpProtocol:
    Type: String
    Description: Protocol, not case sensitive.
    Default: ALL
  SourcePortRange:
    Type: String
    Description: Source port range, 80/80.
    Default: 80/80
Resources:
  ACLRule:
    Type: ALIYUN::SAG::ACLRule
    Properties:
      Direction:
        Ref: Direction
      AclId:
        Ref: AclId
      SourceCidr:
        Ref: SourceCidr
      DestCidr:
        Ref: DestCidr
      Priority:
        Ref: Priority
      DestPortRange:
        Ref: DestPortRange
      Policy:
        Ref: Policy
      IpProtocol:
        Ref: IpProtocol
      SourcePortRange:
        Ref: SourcePortRange
Outputs:
  AcrId:
    Description: Access control rule ID.
    Value:
      Fn::GetAtt:
        - ACLRule
        - AcrId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Direction": {
      "Type": "String",
      "Description": "Regular direction.\nValue: in|out",
      "AllowedValues": [
        "in",
        "out"
      ],
      "Default": "in"
    },
    "AclId": {
      "Type": "String",
      "Description": "Access control ID.",
      "Default": "acl-***"
    },
    "SourceCidr": {
      "Type": "String",
      "Description": "Source address, CIDR format and IP address range in IPv4 format.",
      "Default": "192.168.1.0/24"
    },
    "DestCidr": {
      "Type": "String",
      "Description": "Destination address, CIDR format and IP address range in IPv4 format.",
      "Default": "192.168.1.0/24"
    },
    "Priority": {
      "Default": 1,
      "Type": "Number",
      "Description": "Priority, ranging from 1 to 100.\nDefault: 1",
      "MaxValue": 100,
      "MinValue": 1
    },
    "DestPortRange": {
      "Type": "String",
      "Description": "Destination port range, 80/80.",
      "Default": "80/80"
    },
    "Policy": {
      "Type": "String",
      "Description": "Access: accept|drop",
      "AllowedValues": [
        "accept",
        "drop"
      ],
      "Default": "accept"
    },
    "IpProtocol": {
      "Type": "String",
      "Description": "Protocol, not case sensitive.",
      "Default": "ALL"
    },
    "SourcePortRange": {
      "Type": "String",
      "Description": "Source port range, 80/80.",
      "Default": "80/80"
    }
  },
  "Resources": {
    "ACLRule": {
      "Type": "ALIYUN::SAG::ACLRule",
      "Properties": {
        "Direction": {
          "Ref": "Direction"
        },
        "AclId": {
          "Ref": "AclId"
        },
        "SourceCidr": {
          "Ref": "SourceCidr"
        },
        "DestCidr": {
          "Ref": "DestCidr"
        },
        "Priority": {
          "Ref": "Priority"
        },
        "DestPortRange": {
          "Ref": "DestPortRange"
        },
        "Policy": {
          "Ref": "Policy"
        },
        "IpProtocol": {
          "Ref": "IpProtocol"
        },
        "SourcePortRange": {
          "Ref": "SourcePortRange"
        }
      }
    }
  },
  "Outputs": {
    "AcrId": {
      "Description": "Access control rule ID.",
      "Value": {
        "Fn::GetAtt": [
          "ACLRule",
          "AcrId"
        ]
      }
    }
  }
}
```

For more examples, visit [ACL.json](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/SAG/JSON/ACL.json) and [ACL.yml](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/SAG/YAML/ACL.yml). In the examples, the ALIYUN::SAG::ACL and ALIYUN::SAG::ACLRule resource types are used.
