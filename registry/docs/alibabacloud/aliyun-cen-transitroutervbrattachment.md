ALIYUN::CEN::TransitRouterVbrAttachment is used to create a virtual border router (VBR) connection on an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterVbrAttachment",
  "Properties": {
    "AutoPublishRouteEnabled": Boolean,
    "VbrOwnerId": Integer,
    "CenId": String,
    "TransitRouterAttachmentName": String,
    "VbrId": String,
    "TransitRouterAttachmentDescription": String,
    "TransitRouterId": String
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

VbrId

String

Yes

No

The VBR ID.

None.

AutoPublishRouteEnabled

Boolean

No

Yes

Specifies whether the Enterprise Edition transit router automatically advertises routes to the VBR.

Valid values:

-   false (default)
    
-   true
    

CenId

String

No

No

The ID of the Cloud Enterprise Network (CEN) instance.

None.

TransitRouterAttachmentDescription

String

No

Yes

The description of the VBR connection.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

TransitRouterAttachmentName

String

No

Yes

The name of the VBR connection.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

TransitRouterId

String

No

No

The ID of the Enterprise Edition transit router.

None.

VbrOwnerId

Integer

No

No

The ID of the Alibaba Cloud account to which the VBR belongs.

None.

## Return values

Fn::GetAtt

-   TransitRouterAttachmentId: the ID of the VBR connection.
    
-   AutoPublishRouteEnabled: indicates whether the Enterprise Edition transit router automatically advertises routes to the VBR.
    
-   VbrOwnerId: the ID of the Alibaba Cloud account to which the VBR belongs.
    
-   CenId: the ID of the CEN instance.
    
-   TransitRouterAttachmentName: the name of the VBR connection.
    
-   ResourceType: the resource type.
    
-   VbrId: the VBR ID.
    
-   ClientToken: the client token that is used to ensure the idempotence of the request.
    
-   TransitRouterAttachmentDescription: the description of the VBR connection.
    
-   TransitRouterId: the ID of the Enterprise Edition transit router.
    

## Examples

## `YAML` format

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
  CenId:
    Description: CenId
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
  VbrId:
    Description: VbrId
    Type: String
  VbrOwnerId:
    Description: VbrOwnerId
    Type: Number
Resources:
  CENTransitRouterVbrAttachment:
    Properties:
      AutoPublishRouteEnabled:
        Ref: AutoPublishRouteEnabled
      CenId:
        Ref: CenId
      TransitRouterAttachmentDescription:
        Ref: TransitRouterAttachmentDescription
      TransitRouterAttachmentName:
        Ref: TransitRouterAttachmentName
      TransitRouterId:
        Ref: TransitRouterId
      VbrId:
        Ref: VbrId
      VbrOwnerId:
        Ref: VbrOwnerId
    Type: ALIYUN::CEN::TransitRouterVbrAttachment
Outputs:
  AutoPublishRouteEnabled:
    Description: AutoPublishRouteEnabled
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - AutoPublishRouteEnabled
  CenId:
    Description: CenId
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - CenId
  ClientToken:
    Description: ClientToken
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - ClientToken
  ResourceType:
    Description: ResourceType
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - ResourceType
  TransitRouterAttachmentDescription:
    Description: TransitRouterAttachmentDescription
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - TransitRouterAttachmentDescription
  TransitRouterAttachmentId:
    Description: The first ID of the resource
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - TransitRouterAttachmentId
  TransitRouterAttachmentName:
    Description: TransitRouterAttachmentName
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - TransitRouterAttachmentName
  TransitRouterId:
    Description: TransitRouterId
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - TransitRouterId
  VbrId:
    Description: VbrId
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - VbrId
  VbrOwnerId:
    Description: VbrOwnerId
    Value:
      Fn::GetAtt:
      - CENTransitRouterVbrAttachment
      - VbrOwnerId
```

## `JSON` format

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
    "VbrOwnerId": {
      "Type": "Number",
      "Description": "VbrOwnerId"
    },
    "CenId": {
      "Type": "String",
      "Description": "CenId"
    },
    "TransitRouterAttachmentName": {
      "Type": "String",
      "Description": "TransitRouterAttachmentName"
    },
    "VbrId": {
      "Type": "String",
      "Description": "VbrId"
    },
    "TransitRouterAttachmentDescription": {
      "Type": "String",
      "Description": "TransitRouterAttachmentDescription"
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": "TransitRouterId"
    }
  },
  "Resources": {
    "CENTransitRouterVbrAttachment": {
      "Type": "ALIYUN::CEN::TransitRouterVbrAttachment",
      "Properties": {
        "AutoPublishRouteEnabled": {
          "Ref": "AutoPublishRouteEnabled"
        },
        "VbrOwnerId": {
          "Ref": "VbrOwnerId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterAttachmentName": {
          "Ref": "TransitRouterAttachmentName"
        },
        "VbrId": {
          "Ref": "VbrId"
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
      "Description": "The first ID of the resource",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "TransitRouterAttachmentId"
        ]
      }
    },
    "AutoPublishRouteEnabled": {
      "Description": "AutoPublishRouteEnabled",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "AutoPublishRouteEnabled"
        ]
      }
    },
    "VbrOwnerId": {
      "Description": "VbrOwnerId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "VbrOwnerId"
        ]
      }
    },
    "CenId": {
      "Description": "CenId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "CenId"
        ]
      }
    },
    "TransitRouterAttachmentName": {
      "Description": "TransitRouterAttachmentName",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "TransitRouterAttachmentName"
        ]
      }
    },
    "ResourceType": {
      "Description": "ResourceType",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "ResourceType"
        ]
      }
    },
    "VbrId": {
      "Description": "VbrId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "VbrId"
        ]
      }
    },
    "ClientToken": {
      "Description": "ClientToken",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "ClientToken"
        ]
      }
    },
    "TransitRouterAttachmentDescription": {
      "Description": "TransitRouterAttachmentDescription",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "TransitRouterAttachmentDescription"
        ]
      }
    },
    "TransitRouterId": {
      "Description": "TransitRouterId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterVbrAttachment",
          "TransitRouterId"
        ]
      }
    }
  }
}
```
