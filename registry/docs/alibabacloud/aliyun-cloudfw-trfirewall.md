ALIYUN::CLOUDFW::TrFirewall is used to create a virtual private cloud (VPC) firewall for a transit router.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::TrFirewall",
  "Properties": {
    "CenId": String,
    "FirewallName": String,
    "RouteMode": String,
    "RegionNo": String,
    "TransitRouterId": String,
    "FirewallDescription": String,
    "FirewallVpcId": String,
    "FirewallSubnetCidr": String,
    "FirewallVpcCidr": String,
    "FirewallVswitchId": String,
    "TrAttachmentMasterZone": String,
    "TrAttachmentMasterCidr": String,
    "TrAttachmentSlaveCidr": String,
    "TrAttachmentSlaveZone": String
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

CenId

String

Yes

No

The ID of the Cloud Enterprise Network (CEN) instance.

None.

FirewallName

String

Yes

Yes

The name of the firewall.

None.

RouteMode

String

Yes

No

The routing mode.

Valid values:

-   **managed**: automatic mode
    
-   **manual**: manual mode
    

RegionNo

String

Yes

No

The region ID of the route router.

None.

TransitRouterId

String

Yes

No

The ID of the transit router.

None.

FirewallDescription

String

No

No

The description of the firewall.

None.

FirewallVpcId

String

No

No

The ID of the VPC that you want to use for the elastic network interface (ENI) of the firewall in manual mode.

None.

FirewallSubnetCidr

String

No

No

The VPC subnet CIDR block that you want to use for the ENI of the firewall in automatic mode.

None.

FirewallVpcCidr

String

No

No

The VPC CIDR block that you want to use for the firewall in automatic mode.

None.

FirewallVswitchId

String

No

No

The ID of the vSwitch that you want to use for the ENI of the firewall in manual mode.

None.

TrAttachmentMasterZone

String

No

No

The primary zone of the vSwitch.

None.

TrAttachmentMasterCidr

String

No

No

The primary subnet CIDR block that the VPC of the firewall in automatic mode uses to connect to the transit router.

None.

TrAttachmentSlaveCidr

String

No

No

The secondary subnet CIDR block that the VPC of the firewall in automatic mode uses to connect to the transit router.

None.

TrAttachmentSlaveZone

String

No

No

The secondary zone of the vSwitch.

None.

## Return values

Fn::GetAtt

FirewallId: the ID of the firewall.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  RouteMode:
    Type: String
    Description:
      en: |-
        The routing mode of the VPC firewall. Valid values:
        managed: automatic mode
        manual: manual mode
    AllowedValues:
      - managed
      - manual
    Required: true
    Default: manual
  FirewallVpcId:
    Type: Number
    Description:
      en: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
    Required: false
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  FirewallName:
    Type: String
    Description:
      en: The name of the firewall.
    Required: true
  FirewallVswitchId:
    Type: String
    Description:
      en: The ID of the vSwitch that is used to create the ENI in manual mode.
    Required: false
    AssociationProperty: ALIYUN::ECS::VSwitch
    AssociationPropertyMetadata:
      VpcId: ${FirewallVpcId}
  CenId:
    Type: String
    Description:
      en: The ID of the Cloud Enterprise Network (CEN) instance.
    Required: true
    AssociationProperty: ALIYUN::CEN::Instance::CenId
  TransitRouterId:
    Type: String
    Description:
      en: The ID of the transit router.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::CLOUDFW::TrFirewall
    Properties:
      RouteMode:
        Ref: RouteMode
      RegionNo:
        Ref: ALIYUN::Region
      FirewallVpcId:
        Ref: FirewallVpcId
      FirewallName:
        Ref: FirewallName
      FirewallVswitchId:
        Ref: FirewallVswitchId
      CenId:
        Ref: CenId
      TransitRouterId:
        Ref: TransitRouterId
Outputs:
  FirewallId:
    Description: The instance ID of the VPC firewall.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FirewallId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RouteMode": {
      "Type": "String",
      "Description": {
        "en": "The routing mode of the VPC firewall. Valid values:\nmanaged: automatic mode\nmanual: manual mode"
      },
      "AllowedValues": [
        "managed",
        "manual"
      ],
      "Required": true,
      "Default": "manual"
    },
    "FirewallVpcId": {
      "Type": "Number",
      "Description": {
        "en": "The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode."
      },
      "Required": false,
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "FirewallName": {
      "Type": "String",
      "Description": {
        "en": "The name of the firewall."
      },
      "Required": true
    },
    "FirewallVswitchId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the vSwitch that is used to create the ENI in manual mode."
      },
      "Required": false,
      "AssociationProperty": "ALIYUN::ECS::VSwitch",
      "AssociationPropertyMetadata": {
        "VpcId": "${FirewallVpcId}"
      }
    },
    "CenId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the Cloud Enterprise Network (CEN) instance."
      },
      "Required": true,
       "AssociationProperty": "ALIYUN::CEN::Instance::CenId"
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the transit router."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CLOUDFW::TrFirewall",
      "Properties": {
        "RouteMode": {
          "Ref": "RouteMode"
        },
        "RegionNo": {
          "Ref": "ALIYUN::Region"
        },
        "FirewallVpcId": {
          "Ref": "FirewallVpcId"
        },
        "FirewallName": {
          "Ref": "FirewallName"
        },
        "FirewallVswitchId": {
          "Ref": "FirewallVswitchId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        }
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
    }
  }
}
                        
```
