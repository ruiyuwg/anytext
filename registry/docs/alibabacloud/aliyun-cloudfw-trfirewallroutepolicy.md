ALIYUN::CLOUDFW::TrFirewallRoutePolicy is used to create a routing policy for a virtual private cloud (VPC) firewall of a transit router.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::TrFirewallRoutePolicy",
  "Properties": {
    "FirewallId": String,
    "PolicyType": String,
    "PolicyDescription": String,
    "PolicyName": String,
    "DestCandidateList": List,
    "SrcCandidateList": List
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

FirewallId

String

Yes

No

The ID of the VPC firewall.

None.

PolicyType

String

Yes

No

The type of the traffic redirection scenario of the VPC firewall.

Valid values:

-   **fullmesh**: interconnected instances
    
-   **one\_to\_one**: instance to instance
    
-   **end\_to\_end**: instance to instances
    

PolicyDescription

String

Yes

No

The description of the traffic redirection instance.

None.

PolicyName

String

Yes

No

The name of the traffic redirection instance.

None.

DestCandidateList

List

No

Yes

The secondary traffic redirection instances.

For more information, see [DestCandidateList properties](#332ed2203fsyu).

SrcCandidateList

List

No

Yes

The primary traffic redirection instances.

For more information, see [SrcCandidateList properties](#7b5181f3a7qnm).

## SrcCandidateList syntax

```
"SrcCandidateList": [
  {
    "CandidateType": String,
    "CandidateId": String
  }
]
```

## SrcCandidateList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

CandidateId

String

Yes

No

The ID of the traffic redirection instance.

None.

CandidateType

String

No

No

The type of the traffic redirection instance.

None.

## DestCandidateList syntax

```
"DestCandidateList": [
  {
    "CandidateType": String,
    "CandidateId": String
  }
]
```

## DestCandidateList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

CandidateId

String

Yes

No

The ID of the traffic redirection instance.

None.

CandidateType

String

No

No

The type of the traffic redirection instance.

None.

## Return values

Fn::GetAtt

-   FirewallId: the ID of the VPC firewall.
    
-   TrFirewallRoutePolicyId: the ID of the routing policy.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  PolicyType:
    Type: String
    Description:
      en: |-
        The type of the traffic redirection scenario of the VPC firewall. Valid values:
        fullmesh: interconnected instances
        one_to_one: instance to instance
        end_to_end: instance to instances
    AllowedValues:
      - fullmesh
      - one_to_one
      - end_to_end
    Required: true
    Default: end_to_end
  PolicyName:
    Type: String
    Description:
      en: The name of the traffic redirection instance.
    Required: true
  FirewallId:
    Type: String
    Description:
      en: The instance ID of the VPC firewall.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::CLOUDFW::TrFirewallRoutePolicy
    Properties:
      PolicyType:
        Ref: PolicyType
      PolicyName:
        Ref: PolicyName
      FirewallId:
        Ref: FirewallId
      PolicyDescription: demo
      SrcCandidateList:
        - CandidateType: VPC
          CandidateId: vpc-wXXXXX
      DestCandidateList:
        - CandidateType: VPC
          CandidateId: vpc-wXXXXX
Outputs:
  FirewallId:
    Description: The instance ID of the VPC firewall.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FirewallId
  TrFirewallRoutePolicyId:
    Description: The ID of the routing policy.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TrFirewallRoutePolicyId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "PolicyType": {
      "Type": "String",
      "Description": {
        "en": "The type of the traffic redirection scenario of the VPC firewall. Valid values:\nfullmesh: interconnected instances\none_to_one: instance to instance\nend_to_end: instance to instances"
      },
      "AllowedValues": [
        "fullmesh",
        "one_to_one",
        "end_to_end"
      ],
      "Required": true,
      "Default": "end_to_end"
    },
    "PolicyName": {
      "Type": "String",
      "Description": {
        "en": "The name of the traffic redirection instance."
      },
      "Required": true
    },
    "FirewallId": {
      "Type": "String",
      "Description": {
        "en": "The instance ID of the VPC firewall."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CLOUDFW::TrFirewallRoutePolicy",
      "Properties": {
        "PolicyType": {
          "Ref": "PolicyType"
        },
        "PolicyName": {
          "Ref": "PolicyName"
        },
        "FirewallId": {
          "Ref": "FirewallId"
        },
        "PolicyDescription": "demo",
        "SrcCandidateList": [
          {
            "CandidateType": "VPC",
            "CandidateId": "vpc-wXXXXX"
          }
        ],
        "DestCandidateList": [
          {
            "CandidateType": "VPC",
            "CandidateId": "vpc-wXXXXX"
          }
        ]
      }
    }
  },
  "Outputs": {
    "FirewallId": {
      "Description": "The instance ID of the VPC firewall.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FirewallId"
        ]
      }
    },
    "TrFirewallRoutePolicyId": {
      "Description": "The ID of the routing policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TrFirewallRoutePolicyId"
        ]
      }
    }
  }
}
                        
```
