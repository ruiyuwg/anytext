The ALIYUN::CEN::TransitRouterPeerAttachment type creates an inter-region connection for an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterPeerAttachment",
  "Properties": {
    "AutoPublishRouteEnabled": Boolean,
    "Bandwidth": Integer,
    "CenId": String,
    "TransitRouterAttachmentName": String,
    "PeerTransitRouterId": String,
    "CenBandwidthPackageId": String,
    "TransitRouterAttachmentDescription": String,
    "TransitRouterId": String,
    "PeerTransitRouterRegionId": String,
    "DefaultLinkType": String,
    "BandwidthType": String,
    "Tags": List,
    "RouteTableAssociationEnabled": Boolean,
    "RouteTablePropagationEnabled": Boolean,
    "DeletionForce": Boolean
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Update Allowed**

**Description**

**Constraints**

PeerTransitRouterId

String

Yes

No

The ID of the peer transit router.

None

AutoPublishRouteEnabled

Boolean

No

Yes

Specifies whether the Enterprise Edition transit router automatically advertises routes of the inter-region connection to the peer region.

Valid values:

-   false (default)
    
-   true: Yes, it is.
    

Bandwidth

Integer

No

Yes

The bandwidth to allocate to the inter-region connection.

Unit: Mbps.

BandwidthType

String

No

No

The method for allocating bandwidth.

Valid values:

-   **BandwidthPackage**: allocates bandwidth from a bandwidth plan.
    
-   **DataTransfer**: does not allocate bandwidth to the inter-region connection. The connection is billed on a pay-by-traffic basis.
    

CenBandwidthPackageId

String

No

Yes

The ID of the bandwidth plan to attach to the inter-region connection.

If you do not specify a bandwidth plan ID, the system uses the default test bandwidth of 1 Kbps to test network connectivity.

CenId

String

No

No

The ID of the Cloud Enterprise Network (CEN) instance.

None

DefaultLinkType

String

No

No

The default link type.

Valid values:

-   **Gold** (default)
    
-   **Platinum**: Platinum.
    

DeletionForce

Boolean

No

Yes

Specifies whether to force delete the inter-region connection associated with the TransitRouter instance.

Valid values:

-   true: Force delete.
    
-   false: Do not force delete.
    

PeerTransitRouterRegionId

String

No

No

The region ID of the peer transit router.

None

RouteTableAssociationEnabled

Boolean

No

No

Specifies whether to enable route association.

Valid values:

-   true: Enable route association.
    
-   false: Disable route association.
    

RouteTablePropagationEnabled

Boolean

No

No

Specifies whether to enable route propagation.

Valid values:

-   true: Enable route propagation.
    
-   false: Disable route propagation.
    

Tags

List

No

No

A list of custom tags.

For more information, see [Tags properties](#title-l8e-nfa-9l8).

TransitRouterAttachmentDescription

String

No

Yes

The description of the inter-region connection.

The description must be 2 to 256 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.

TransitRouterAttachmentName

String

No

Yes

The name of the inter-region connection.

The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and can contain letters, Chinese characters, digits, underscores (\_), and hyphens (-).

TransitRouterId

String

No

No

The ID of the local Enterprise Edition transit router.

None

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

**Property name**

**Type**

**Required**

**Update Allowed**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

The tag key can be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The tag value can be 0 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   TransitRouterAttachmentId: The ID of the inter-region connection.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AutoPublishRouteEnabled:
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
    Description: AutoPublishRouteEnabled
    Type: Boolean
  Bandwidth:
    Description: Bandwidth
    Type: Number
  CenBandwidthPackageId:
    Description: BandwidthPackageId
    Type: String
  CenId:
    Description: CenId
    Type: String
  PeerTransitRouterId:
    Description: PeerTransitRouterId
    Type: String
  PeerTransitRouterRegionId:
    Description: PeerTransitRouterRegionId
    Type: String
  TransitRouterAttachmentDescription:
    Description: TransitRouterAttachmentDescription
    Type: String
  TransitRouterAttachmentName:
    Description: TransitRouterAttachmentName
    Type: String
  TransitRouterId:
    Description: TransitRouterId
    Type: String
Resources:
  CENTransitRouterPeerAttachment:
    Properties:
      AutoPublishRouteEnabled:
        Ref: AutoPublishRouteEnabled
      Bandwidth:
        Ref: Bandwidth
      CenBandwidthPackageId:
        Ref: CenBandwidthPackageId
      CenId:
        Ref: CenId
      PeerTransitRouterId:
        Ref: PeerTransitRouterId
      PeerTransitRouterRegionId:
        Ref: PeerTransitRouterRegionId
      TransitRouterAttachmentDescription:
        Ref: TransitRouterAttachmentDescription
      TransitRouterAttachmentName:
        Ref: TransitRouterAttachmentName
      TransitRouterId:
        Ref: TransitRouterId
    Type: ALIYUN::CEN::TransitRouterPeerAttachment
Outputs:
  TransitRouterAttachmentId:
    Description: The first ID of the resource
    Value:
      Fn::GetAtt:
      - CENTransitRouterPeerAttachment
      - TransitRouterAttachmentId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AutoPublishRouteEnabled": {
      "Type": "Boolean",
      "Description": "AutoPublishRouteEnabled",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "Bandwidth": {
      "Type": "Number",
      "Description": "Bandwidth"
    },
    "CenId": {
      "Type": "String",
      "Description": "CenId"
    },
    "TransitRouterAttachmentName": {
      "Type": "String",
      "Description": "TransitRouterAttachmentName"
    },
    "PeerTransitRouterId": {
      "Type": "String",
      "Description": "PeerTransitRouterId"
    },
    "CenBandwidthPackageId": {
      "Type": "String",
      "Description": "BandwidthPackageId"
    },
    "TransitRouterAttachmentDescription": {
      "Type": "String",
      "Description": "TransitRouterAttachmentDescription"
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": "TransitRouterId"
    },
    "PeerTransitRouterRegionId": {
      "Type": "String",
      "Description": "PeerTransitRouterRegionId"
    }
  },
  "Resources": {
    "CENTransitRouterPeerAttachment": {
      "Type": "ALIYUN::CEN::TransitRouterPeerAttachment",
      "Properties": {
        "AutoPublishRouteEnabled": {
          "Ref": "AutoPublishRouteEnabled"
        },
        "Bandwidth": {
          "Ref": "Bandwidth"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterAttachmentName": {
          "Ref": "TransitRouterAttachmentName"
        },
        "PeerTransitRouterId": {
          "Ref": "PeerTransitRouterId"
        },
        "CenBandwidthPackageId": {
          "Ref": "CenBandwidthPackageId"
        },
        "TransitRouterAttachmentDescription": {
          "Ref": "TransitRouterAttachmentDescription"
        },
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        },
        "PeerTransitRouterRegionId": {
          "Ref": "PeerTransitRouterRegionId"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterAttachmentId": {
      "Description": "The first ID of the resource",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterPeerAttachment",
          "TransitRouterAttachmentId"
        ]
      }
    }
   }
}
```
