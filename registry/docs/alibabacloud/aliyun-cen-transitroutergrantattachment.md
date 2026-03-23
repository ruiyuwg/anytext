The ALIYUN::CEN::TransitRouterGrantAttachment resource grants a transit router permissions on a network instance.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterGrantAttachment",
  "Properties": {
    "CenOwnerId": Integer,
    "CenId": String,
    "InstanceId": String,
    "InstanceType": String,
    "OrderType": String
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

CenOwnerId

Integer

Yes

No

The ID of the Alibaba Cloud account that owns the CEN instance.

None

CenId

String

Yes

No

The ID of the CEN instance to which the transit router belongs.

None

InstanceId

String

Yes

No

The ID of the network instance.

None

InstanceType

String

Yes

No

The type of the network instance.

Valid values:

-   VPC: A VPC instance.
    
-   ExpressConnect: A Virtual Border Router (VBR) instance.
    
-   VPN: An IPsec connection.
    
-   ECR: An Express Connect Router (ECR) instance.
    

OrderType

String

No

No

The payer for the network instance.

Valid values:

-   PayByCenOwner: The fees for the network instance are paid by the account that owns the CEN instance.
    
-   PayByResourceOwner: The fees for the network instance are paid by the account that owns the network instance.
    

## Return values

Fn::GetAtt

None

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the network instance.
    Required: true
  CenOwnerId:
    Type: Number
    Description:
      en: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
    Required: true
  CenId:
    Type: String
    Description:
      en: The ID of the Cloud Enterprise Network (CEN) instance.
    Required: true
  InstanceType:
    Type: String
    Description:
      en: |-
        The type of the network instance. Valid values:
        - VPC: Virtual Private Cloud instance.
        - ExpressConnect: Virtual Border Router (VBR) instance.
        - VPN: IPsec connection.
        - ECR: ECR instance.
    AllowedValues:
      - VPC
      - ExpressConnect
      - VPN
      - ECR
    Required: true
Resources:
  TransitRouterGrantAttachment:
    Type: ALIYUN::CEN::TransitRouterGrantAttachment
    Properties:
      InstanceId:
        Ref: InstanceId
      CenOwnerId:
        Ref: CenOwnerId
      CenId:
        Ref: CenId
      InstanceType:
        Ref: InstanceType
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the network instance."
      },
      "Required": true
    },
    "CenOwnerId": {
      "Type": "Number",
      "Description": {
        "en": "The Alibaba Cloud account ID (main account ID) of the CEN instance owner."
      },
      "Required": true
    },
    "CenId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the Cloud Enterprise Network (CEN) instance."
      },
      "Required": true
    },
    "InstanceType": {
      "Type": "String",
      "Description": {
        "en": "The type of the network instance. Valid values:\n- VPC: Virtual Private Cloud instance.\n- ExpressConnect: Virtual Border Router (VBR) instance.\n- VPN: IPsec connection.\n- ECR: ECR instance."
      },
      "AllowedValues": [
        "VPC",
        "ExpressConnect",
        "VPN",
        "ECR"
      ],
      "Required": true
    }
  },
  "Resources": {
    "TransitRouterGrantAttachment": {
      "Type": "ALIYUN::CEN::TransitRouterGrantAttachment",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "CenOwnerId": {
          "Ref": "CenOwnerId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        }
      }
    }
  }
}
                        
```
