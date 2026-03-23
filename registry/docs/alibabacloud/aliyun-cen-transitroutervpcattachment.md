ALIYUN::CEN::TransitRouterVpcAttachment is used to create a virtual private cloud (VPC) connection on an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterVpcAttachment",
  "Properties": {
    "VpcId": String,
    "ChargeType": String,
    "CenId": String,
    "TransitRouterAttachmentName": String,
    "ZoneMappings": List,
    "VpcOwnerId": Integer,
    "TransitRouterAttachmentDescription": String,
    "TransitRouterId": String,
    "AutoCreateVpcRoute": Boolean,
    "DeletionForce": Boolean,
    "RouteTablePropagationEnabled": Boolean,
    "RouteTableAssociationEnabled": Boolean,
    "TransitRouterVPCAttachmentOptions": Map,
    "AutoPublishRouteEnabled": Boolean
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Allow Updates**

**Description**

**Constraint**

VpcId

String

Yes

No

The ID of the VPC.

None.

ZoneMappings

List

Yes

No

The primary and secondary zones of the Enterprise Edition transit router. You must select a vSwitch in the primary zone and a vSwitch in the secondary zone.

For more information, see [ZoneMappings properties](#title-2v5-kkw-coc).

AutoCreateVpcRoute

Boolean

No

No

Specifies whether to automatically create a VPC route entry.

Valid values:

-   true: A VPC route entry is automatically created.
    
-   false: A VPC route entry must be created manually.
    

AutoPublishRouteEnabled

Boolean

No

Yes

Specifies whether the Enterprise Edition transit router automatically advertises routes to the VPC instance.

Valid values:

-   false
    
-   true: Yes, it is.
    

CenId

String

No

No

The ID of the Cloud Enterprise Network (CEN) instance.

None.

ChargeType

String

No

No

The billing method.

Default value: POSTPAY. A value of POSTPAY specifies the pay-as-you-go billing method.

DeletionForce

Boolean

No

No

Specifies whether to forcefully delete the VPC connection.

Valid values:

-   true: A force delete is performed.
    
-   false: A force delete is not performed.
    

RouteTableAssociationEnabled

Boolean

No

No

Specifies whether to enable associated forwarding correlations of routes.

Valid values:

-   true: Enables forwarding for the associated route.
    
-   false: Disables forwarding for the associated route.
    

RouteTablePropagationEnabled

Boolean

No

No

Specifies whether to enable route learning correlations.

Valid values:

-   true: Enables route learning.
    
-   false: Disables route learning.
    

TransitRouterAttachmentDescription

String

No

Yes

The description of the VPC connection.

The description must be 2 to 256 characters in length. It must start with a letter or a Chinese character, but cannot start with `http://` or `https://`.

TransitRouterAttachmentName

String

No

Yes

The name of the VPC connection.

The value must be 2 to 128 characters long, start with a letter or a Chinese character, and consist of letters, Chinese characters, digits, underscores (\_), and hyphens (-).

TransitRouterId

String

No

No

The ID of the Enterprise Edition transit router.

None.

TransitRouterVPCAttachmentOptions

Map

No

Yes

The feature properties of the VPC connection.

The properties of the VPC connection.

-   ipv6Support: Specifies whether to enable IPv6. The default value is the current IPv6 status of the VPC connection.
    
    -   enable: IPv6 is enabled.
        
    -   disable: IPv6 is disabled.
        

Example:

```
{
        "key": "{ \"ipv6Support\": \"disable\" }"
      }
```

VpcOwnerId

Integer

No

No

The ID of the Alibaba Cloud account to which the VPC belongs.

The default value is the ID of the current logon account.

## ZoneMappings syntax

```
"ZoneMappings": [
  {
    "ZoneId": String,
    "VSwitchId": String
  }
]
```

## ZoneMappings properties

**Property name**

**Type**

**Required**

**Allow updates**

**Description**

**Constraint**

VSwitchId

String

Yes

No

The ID of the vSwitch in the primary or secondary zone of the Enterprise Edition transit router.

None.

ZoneId

String

Yes

No

The ID of the primary or secondary zone of the Enterprise Edition transit router.

You can call the [DescribeZones](/help/en/vpc/developer-reference/api-vpc-2016-04-28-describezones) operation to query the zone ID.

## Return values

Fn::GetAtt

-   TransitRouterAttachmentId: the ID of the VPC connection.
    
-   VpcId: the ID of the VPC.
    
-   CenId: the ID of the CEN instance.
    
-   TransitRouterAttachmentName: the name of the VPC connection.
    
-   ResourceType: the resource type.
    
-   VpcOwnerId: the ID of the Alibaba Cloud account to which the VPC belongs. The default value is the ID of the current logon account.
    
-   TransitRouterAttachmentDescription: the description of the VPC connection.
    
-   TransitRouterId: the ID of the Enterprise Edition transit router.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CenId:
    Description: The ID of the CEN instance.
    Type: String
  ChargeType:
    Description: The billing method of the VPC connection. Set the value to PostPaid. This indicates that the VPC connection uses the pay-as-you-go billing method.
    Type: String
  TransitRouterAttachmentDescription:
    Description: The description of the VPC connection.
    Type: String
  TransitRouterAttachmentName:
    Description: The name of the VPC connection.
    Type: String
  TransitRouterId:
    Description: The ID of the transit router.
    Type: String
  VpcId:
    Description: The ID of the VPC.
    Type: String
  VpcOwnerId:
    Description: The ID of the Alibaba Cloud account to which the VPC belongs.
    Type: Number
  ZoneMappings:
    Description: The zones and the vSwitches in the zones.
    MaxLength: 3
    Type: Json
Resources:
  CENTransitRouterVpcAttachment:
    Properties:
      CenId:
        Ref: CenId
      ChargeType:
        Ref: ChargeType
      TransitRouterAttachmentDescription:
        Ref: TransitRouterAttachmentDescription
      TransitRouterAttachmentName:
        Ref: TransitRouterAttachmentName
      TransitRouterId:
        Ref: TransitRouterId
      VpcId:
        Ref: VpcId
      VpcOwnerId:
        Ref: VpcOwnerId
      ZoneMappings:
        Ref: ZoneMappings
    Type: ALIYUN::CEN::TransitRouterVpcAttachment
Outputs:
  CenId:
    Description: The ID of the CEN instance.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - CenId
  ClientToken:
    Description: The client token that is used to ensure the idempotence of the request.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - ClientToken
  ResourceType:
    Description: The type of the resource.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - ResourceType
  TransitRouterAttachmentDescription:
    Description: The description of the VPC connection.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - TransitRouterAttachmentDescription
  TransitRouterAttachmentId:
    Description: The ID of the VPC connection.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - TransitRouterAttachmentId
  TransitRouterAttachmentName:
    Description: The name of the VPC connection.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - TransitRouterAttachmentName
  TransitRouterId:
    Description: The ID of the transit router.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - TransitRouterId
  VpcId:
    Description: The ID of the VPC.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
      - VpcId
  VpcOwnerId:
    Description: The ID of the Alibaba Cloud account to which the VPC belongs.
    Value:
      Fn::GetAtt:
      - CENTransitRouterVpcAttachment
        - VpcOwnerId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "Description": "The ID of the VPC."
    },
    "ChargeType": {
      "Type": "String",
      "Description": "The billing method of the VPC connection. Set the value to PostPaid. This indicates that the VPC connection uses the pay-as-you-go billing method."
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    },
    "TransitRouterAttachmentName": {
      "Type": "String",
      "Description": "The name of the VPC connection."
    },
    "ZoneMappings": {
      "Type": "Json",
      "Description": "The zones and the vSwitches in the zones.",
      "MaxLength": 3
    },
    "VpcOwnerId": {
      "Type": "Number",
      "Description": "The ID of the Alibaba Cloud account to which the VPC belongs."
    },
    "TransitRouterAttachmentDescription": {
      "Type": "String",
      "Description": "The description of the VPC connection."
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": "The ID of the transit router."
    }
  },
  "Resources": {
    "CENTransitRouterVpcAttachment": {
      "Type": "ALIYUN::CEN::TransitRouterVpcAttachment",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "ChargeType": {
          "Ref": "ChargeType"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterAttachmentName": {
          "Ref": "TransitRouterAttachmentName"
        },
        "ZoneMappings": {
          "Ref": "ZoneMappings"
        },
        "VpcOwnerId": {
          "Ref": "VpcOwnerId"
        },
        "TransitRouterAttachmentDescription": {
          "Ref": "TransitRouterAttachmentDescription"
        },
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterAttachmentId": {
      "Description": "The ID of the VPC connection.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "TransitRouterAttachmentId"
        ]
      }
    },
    "VpcId": {
      "Description": "The ID of the VPC.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "VpcId"
        ]
      }
    },
    "CenId": {
      "Description": "The ID of the CEN instance.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "CenId"
        ]
      }
    },
    "TransitRouterAttachmentName": {
      "Description": "The name of the VPC connection.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "TransitRouterAttachmentName"
        ]
      }
    },
    "ResourceType": {
      "Description": "The type of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "ResourceType"
        ]
      }
    },
    "ClientToken": {
      "Description": "The client token that is used to ensure the idempotence of the request.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "ClientToken"
        ]
      }
    },
    "VpcOwnerId": {
      "Description": "The ID of the Alibaba Cloud account to which the VPC belongs.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "VpcOwnerId"
        ]
      }
    },
    "TransitRouterAttachmentDescription": {
      "Description": "The description of the VPC connection.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "TransitRouterAttachmentDescription"
        ]
      }
    },
    "TransitRouterId": {
      "Description": "The ID of the transit router.",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVpcAttachment",
          "TransitRouterId"
        ]
      }
    }
  }
}
```
