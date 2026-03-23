ALIYUN::CLOUDFW::VpcFirewallCen is used to create a virtual private cloud (VPC) firewall.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::VpcFirewallCen",
  "Properties": {
    "CenId": String,
    "FirewallVpcZoneId": String,
    "FirewallSwitch": String,
    "NetworkInstanceId": String,
    "VpcRegion": String,
    "VpcFirewallName": String,
    "FirewallVSwitchCidrBlock": String,
    "FirewallVpcCidrBlock": String,
    "MemberUid": String,
    "VSwitchId": String
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

FirewallVpcZoneId

String

Yes

No

The ID of the zone to which the vSwitch of the VPC firewall belongs.

If your business is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.

If you leave this property empty, a zone is automatically allocated to the vSwitch.

**Note**

This property takes effect only when you create a VPC firewall for the first time in the current CEN instance and region. For more information about the supported zones in each region, see [DescribeZones](/help/en/vpc/api-describezones).

FirewallSwitch

String

Yes

Yes

Specifies whether to enable the VPC firewall.

Valid values:

-   **open** (default): automatically enables the VPC firewall after you create the VPC firewall.
    
-   **close**: automatically disables the VPC firewall after you create the VPC firewall. You can call the [ModifyVpcFirewallCenSwitchStatus](/help/en/cloud-firewall/cloudfirewall/developer-reference/api-cloudfw-2017-12-07-modifyvpcfirewallcenswitchstatus) operation to enable the VPC firewall.
    

NetworkInstanceId

String

Yes

No

The VPC ID of the network instance for which you want to create the VPC firewall.

None.

VpcRegion

String

Yes

No

The ID of the region to which the VPC of the VPC firewall belongs.

**Note**

For more information about the regions in which Cloud Firewall is supported, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions).

VpcFirewallName

String

Yes

Yes

The name of the VPC firewall.

None.

FirewallVSwitchCidrBlock

String

No

No

The vSwitch CIDR block of the VPC firewall.

You must specify a CIDR block for the Cloud\_Firewall\_VSWITCH vSwitch that is automatically created in the VPC of the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block cannot conflict with your network planning. The vSwitch CIDR block must be a subset of the VPC CIDR block of the VPC firewall.

If you leave this property empty, the CIDR block 10.219.219.216/29 is automatically allocated.

**Note**

This property takes effect only when you create a VPC firewall for the first time in the current CEN instance and region.

FirewallVpcCidrBlock

String

No

No

The VPC CIDR block of the VPC firewall.

You must specify a CIDR block for the Cloud\_Firewall\_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.

If you leave this property empty, the CIDR block 10.0.0.0/8 is automatically allocated.

**Note**

This property takes effect only when you create a VPC firewall for the first time in the current CEN instance and region.

MemberUid

String

No

No

The UID of the member that is managed by your Alibaba Cloud account.

None.

VSwitchId

String

No

No

The ID of the vSwitch to which the operation of Cloud Firewall belongs.

None.

## Return values

Fn::GetAtt

VpcFirewallId: the ID of the VPC firewall.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  NetworkInstanceId:
    Type: String
    Description:
      en: The ID of the VPC for which you want to create the VPC firewall.
    Required: true
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitchId:
    AssociationPropertyMetadata:
      VpcId: ${NetworkInstanceId}
    AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
    Type: String
    Description:
      en: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
    Required: false
  CenId:
    Type: String
    Description:
      en: The ID of the CEN instance.
    AssociationProperty: ALIYUN::CEN::Instance::CenId
    Required: true
  VpcFirewallName:
    Type: String
    Description:
      en: The instance name of the VPC firewall.
    Required: true
  FirewallSwitch:
    Type: String
    Description:
      en: |-
        Specifies whether to enable the VPC firewall. Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
    AllowedValues:
      - open
      - close
    Required: true
    Default: open
Resources:
  ExtensionResource:
    Type: ALIYUN::CLOUDFW::VpcFirewallCen
    Properties:
      NetworkInstanceId:
        Ref: NetworkInstanceId
      VSwitchId:
        Ref: VSwitchId
      CenId:
        Ref: CenId
      VpcRegion:
        Ref: ALIYUN::Region
      FirewallVpcZoneId:
        Fn::Select:
          - '0'
          - Fn::GetAZs:
              Ref: ALIYUN::Region
      VpcFirewallName:
        Ref: VpcFirewallName
      FirewallSwitch:
        Ref: FirewallSwitch
Outputs:
  VpcFirewallId:
    Description: The instance ID of the VPC firewall.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - VpcFirewallId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "NetworkInstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC for which you want to create the VPC firewall."
      },
      "Required": true,
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "AssociationPropertyMetadata": {
        "VpcId": "${NetworkInstanceId}"
      },
      "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
      "Type": "String",
      "Description": {
        "en": "The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall."
      },
      "Required": false
    },
    "CenId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the CEN instance."
      },
      "AssociationProperty": "ALIYUN::CEN::Instance::CenId",
      "Required": true
    },
    "VpcFirewallName": {
      "Type": "String",
      "Description": {
        "en": "The instance name of the VPC firewall."
      },
      "Required": true
    },
    "FirewallSwitch": {
      "Type": "String",
      "Description": {
        "en": "Specifies whether to enable the VPC firewall. Valid values:\nopen: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.\nclose: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall."
      },
      "AllowedValues": [
        "open",
        "close"
      ],
      "Required": true,
      "Default": "open"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CLOUDFW::VpcFirewallCen",
      "Properties": {
        "NetworkInstanceId": {
          "Ref": "NetworkInstanceId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "VpcRegion": {
          "Ref": "ALIYUN::Region"
        },
        "FirewallVpcZoneId": {
          "Fn::Select": [
            "0",
            {
              "Fn::GetAZs": {
                "Ref": "ALIYUN::Region"
              }
            }
          ]
        },
        "VpcFirewallName": {
          "Ref": "VpcFirewallName"
        },
        "FirewallSwitch": {
          "Ref": "FirewallSwitch"
        }
      }
    }
  },
  "Outputs": {
    "VpcFirewallId": {
      "Description": "The instance ID of the VPC firewall.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VpcFirewallId"
        ]
      }
    }
  }
}
                        
```
