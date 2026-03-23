ALIYUN::CEN::TransitRouterVpnAttachment is used to create a VPN connection.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterVpnAttachment",
  "Properties": {
    "AutoPublishRouteEnabled": Boolean,
    "RouteTableAssociationEnabled": Boolean,
    "VpnOwnerId": String,
    "DeletionForce": Boolean,
    "ZoneId": String,
    "RouteTablePropagationEnabled": Boolean,
    "CenId": String,
    "TransitRouterAttachmentName": String,
    "Tags": List,
    "TransitRouterAttachmentDescription": String,
    "TransitRouterId": String,
    "VpnId": String
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

VpnId

String

Yes

No

The ID of the IPsec-VPN connection.

None.

ZoneId

String

Yes

No

The zone ID.

None.

AutoPublishRouteEnabled

Boolean

No

Yes

Specifies whether to allow the transit router to automatically advertise routes to the IPsec-VPN connection.

Valid values:

-   true (default)
    
-   false
    

CenId

String

No

No

The ID of the Cloud Enterprise Network (CEN) instance.

None.

DeletionForce

Boolean

No

Yes

Specifies whether to forcefully delete the VPN connection.  

Valid values:

-   true
    
-   false
    

RouteTableAssociationEnabled

Boolean

No

No

Specifies whether to enable associated forwarding correlations of routes.

Valid values:

-   true
    
-   false
    

RouteTablePropagationEnabled

Boolean

No

No

Specifies whether to enable route learning correlations.

Valid values:

-   true
    
-   false
    

Tags

List

No

No

The information about the tags.

You can add up to 20 tags in a request. For more information, see [Tags properties](#3f0d14186ddat).

TransitRouterAttachmentDescription

String

No

Yes

The description of the VPN connection.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

TransitRouterAttachmentName

String

No

Yes

The name of the VPN connection.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

TransitRouterId

String

No

Yes

The ID of the transit router.

None.

VpnOwnerId

String

No

No

The ID of the Alibaba Cloud account to which the IPsec-VPN connection belongs.

This property conforms to the following requirements:

-   If you leave this property empty, the ID of the current Alibaba Cloud account is used by default.
    
-   You must specify this property when the IPsec-VPN connection and the transit route belong to different Alibaba Cloud accounts.
    

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
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

The tag key of the VPN connection.

The tag key cannot be an empty string. It can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value of the VPN connection.

The tag value can be an empty string. It can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

TransitRouterAttachmentId: the ID of the VPN connection.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ZoneId:
    AssociationProperty: ZoneId
    Type: String
    Description:
      en: Availability zone ID in the current region.
  VpnOwnerId:
    Type: String
    Description:
      en: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
  CenId:
    Type: String
    Description:
      en: The ID of the CEN instance.
  TransitRouterAttachmentName:
    Type: String
    Description:
      en: The name of the VPN connection.
  TransitRouterId:
    Type: String
    Description:
      en: Forwarding router instance ID
  VpnId:
    Type: String
    Description:
      en: IPsec connection ID
Resources:
  TransitRouterVpnAttachment:
    Type: ALIYUN::CEN::TransitRouterVpnAttachment
    Properties:
      VpnOwnerId:
        Ref: VpnOwnerId
      ZoneId:
        Ref: ZoneId
      CenId:
        Ref: CenId
      TransitRouterAttachmentName:
        Ref: TransitRouterAttachmentName
      TransitRouterId:
        Ref: TransitRouterId
      VpnId:
        Ref: VpnId
Outputs:
  TransitRouterAttachmentId:
    Description: The ID of the VPN connection.
    Value:
      Fn::GetAtt:
        - TransitRouterVpnAttachment
        - TransitRouterAttachmentId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ZoneId": {
      "AssociationProperty": "ZoneId",
      "Type": "String",
      "Description": {
        "en": "Availability zone ID in the current region."
      }
    },
    "VpnOwnerId": {
      "Type": "String",
      "Description": {
        "en": "Alibaba Cloud account (main account) ID to which the IPsec connection belongs."
      }
    },
    "CenId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the CEN instance."
      }
    },
    "TransitRouterAttachmentName": {
      "Type": "String",
      "Description": {
        "en": "The name of the VPN connection."
      }
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": {
        "en": "Forwarding router instance ID"
      }
    },
    "VpnId": {
      "Type": "String",
      "Description": {
        "en": "IPsec connection ID"
      }
    }
  },
  "Resources": {
    "TransitRouterVpnAttachment": {
      "Type": "ALIYUN::CEN::TransitRouterVpnAttachment",
      "Properties": {
        "VpnOwnerId": {
          "Ref": "VpnOwnerId"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterAttachmentName": {
          "Ref": "TransitRouterAttachmentName"
        },
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        },
        "VpnId": {
          "Ref": "VpnId"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterAttachmentId": {
      "Description": "The ID of the VPN connection.",
      "Value": {
        "Fn::GetAtt": [
          "TransitRouterVpnAttachment",
          "TransitRouterAttachmentId"
        ]
      }
    }
  }
}
```
