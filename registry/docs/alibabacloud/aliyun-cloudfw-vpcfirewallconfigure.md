ALIYUN::CLOUDFW::VpcFirewallConfigure is used to create a virtual private cloud (VPC) firewall.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::VpcFirewallConfigure",
  "Properties": {
    "FirewallSwitch": String,
    "LocalVpcRegion": String,
    "LocalVpcCidrTableList": List,
    "LocalVpcId": String,
    "PeerVpcId": String,
    "PeerVpcRegion": String,
    "PeerVpcCidrTableList": List,
    "VpcFirewallName": String,
    "MemberUid": String
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

FirewallSwitch

String

Yes

Yes

The status of the VPC firewall after you create this firewall.

Valid values:

-   **open** (default): The VPC firewall is automatically enabled after you create this firewall.
    
-   **close**: The VPC firewall is automatically disabled after you create this firewall. You can call the [ModifyVpcFirewallSwitchStatus](/help/en/cloud-firewall/cloudfirewall/developer-reference/api-cloudfw-2017-12-07-modifyvpcfirewallswitchstatus) operation to enable the VPC firewall.
    

LocalVpcRegion

String

Yes

No

The region ID of the local VPC.

**Note**

For more information about the regions in which Cloud Firewall is supported, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions).

LocalVpcCidrTableList

List

Yes

Yes

The CIDR blocks of the local VPC.

For more information, see [LocalVpcCidrTableList properties](#5312642272jg1).

LocalVpcId

String

Yes

No

The ID of the local VPC.

None.

PeerVpcId

String

Yes

No

The ID of the peer VPC.

None.

PeerVpcRegion

String

Yes

No

The region ID of the peer VPC.

**Note**

For more information about the regions in which Cloud Firewall is supported, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions).

PeerVpcCidrTableList

List

Yes

Yes

The CIDR blocks of the peer VPC.

For more information, see [PeerVpcCidrTableList properties](#a102069635yim).

VpcFirewallName

String

Yes

Yes

The name of the VPC firewall.

None.

MemberUid

String

No

No

The UID of the member in Alibaba Cloud.

None.

## LocalVpcCidrTableList syntax

```
"LocalVpcCidrTableList": [
  {
    "RouteTableId": String,
    "RouteEntryList": List
  }
]
```

## LocalVpcCidrTableList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RouteTableId

String

Yes

No

The ID of the route table for the local VPC.

None.

RouteEntryList

List

No

No

Details of the CIDR blocks of the local VPC.

For more information, see the "RouteEntryList properties" section of this topic.

## RouteEntryList syntax

```
"RouteEntryList": [
  {
    "NextHopInstanceId": String,
    "DestinationCidr": String
  }
]
```

## RouteEntryList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

DestinationCidr

String

Yes

No

The destination CIDR block of the local VPC.

None.

NextHopInstanceId

String

No

No

The instance ID of the next hop for the local VPC.

None.

## PeerVpcCidrTableList syntax

```
"PeerVpcCidrTableList": [
  {
    "RouteTableId": String,
    "RouteEntryList": List
  }
]
```

## PeerVpcCidrTableList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RouteTableId

String

Yes

No

The ID of the route table for the peer VPC.

None.

RouteEntryList

List

No

No

Details of the CIDR blocks of the peer VPC.

For more information, see [RouteEntryList properties](#d15b6c7bbedgy).

## Return values

Fn::GetAtt

VpcFirewallId: the ID of the VPC firewall.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LocalVpcCidrTableList:
    AssociationPropertyMetadata:
      Parameter:
        AssociationPropertyMetadata:
          Parameters:
            RouteTableId:
              Type: String
              Description:
                en: The ID of the route table for the local VPC.
              Required: true
            RouteEntryList:
              AssociationPropertyMetadata:
                Parameter:
                  AssociationPropertyMetadata:
                    Parameters:
                      NextHopInstanceId:
                        Type: Json
                        Description:
                          en: The NextHopInstanceId parameter indicates the instance ID of the next hop for the local VPC.
                        Required: false
                      DestinationCidr:
                        Type: String
                        Description:
                          en: The DestinationCidr parameter indicates the destination CIDR block of the local VPC.
                        Required: true
                  Type: Json
                  Required: false
              AssociationProperty: List[Parameter]
              Type: Json
              Description:
                en: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters.
              Required: false
              MinLength: 1
              MaxLength: 100
        Type: Json
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: 'The CIDR blocks of the local VPC. '
    Required: true
    MinLength: 1
    MaxLength: 1
  VpcFirewallName:
    Type: String
    Description:
      en: The instance name of the VPC firewall.
    Required: true
  PeerVpcCidrTableList:
    AssociationPropertyMetadata:
      Parameter:
        AssociationPropertyMetadata:
          Parameters:
            RouteTableId:
              Type: String
              Description:
                en: The ID of the route table for the peer VPC.
              Required: true
            RouteEntryList:
              Type: Json
              Description:
                en: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters.
              Required: false
              MinLength: 1
              MaxLength: 100
        Type: Json
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: 'The CIDR blocks of the peer VPC. '
    Required: true
    MinLength: 1
    MaxLength: 1
  LocalVpcId:
    Type: String
    Description:
      en: The ID of the local VPC.
    Required: true
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  PeerVpcId:
    Type: String
    Description:
      en: The ID of the peer VPC.
    Required: true
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  FirewallSwitch:
    Type: String
    Description:
      en: |-
        The status of the VPC firewall after you create the firewall. Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
    AllowedValues:
      - open
      - close
    Required: true
    Default: open
Resources:
  ExtensionResource:
    Type: ALIYUN::CLOUDFW::VpcFirewallConfigure
    Properties:
      PeerVpcId:
        Ref: PeerVpcId
      PeerVpcRegion:
        Ref: ALIYUN::Region
      LocalVpcRegion:
        Ref: ALIYUN::Region
      LocalVpcCidrTableList:
        Ref: LocalVpcCidrTableList
      VpcFirewallName:
        Ref: VpcFirewallName
      PeerVpcCidrTableList:
        Ref: PeerVpcCidrTableList
      LocalVpcId:
        Ref: LocalVpcId
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
    "LocalVpcCidrTableList": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "RouteTableId": {
                "Type": "String",
                "Description": {
                  "en": "The ID of the route table for the local VPC."
                },
                "Required": true
              },
              "RouteEntryList": {
                "AssociationPropertyMetadata": {
                  "Parameter": {
                    "AssociationPropertyMetadata": {
                      "Parameters": {
                        "NextHopInstanceId": {
                          "Type": "Json",
                          "Description": {
                            "en": "The NextHopInstanceId parameter indicates the instance ID of the next hop for the local VPC."
                          },
                          "Required": false
                        },
                        "DestinationCidr": {
                          "Type": "String",
                          "Description": {
                            "en": "The DestinationCidr parameter indicates the destination CIDR block of the local VPC."
                          },
                          "Required": true
                        }
                      }
                    },
                    "Type": "Json",
                    "Required": false
                  }
                },
                "AssociationProperty": "List[Parameter]",
                "Type": "Json",
                "Description": {
                  "en": "The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters."
                },
                "Required": false,
                "MinLength": 1,
                "MaxLength": 100
              }
            }
          },
          "Type": "Json",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The CIDR blocks of the local VPC. "
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 1
    },
    "VpcFirewallName": {
      "Type": "String",
      "Description": {
        "en": "The instance name of the VPC firewall."
      },
      "Required": true
    },
    "PeerVpcCidrTableList": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "RouteTableId": {
                "Type": "String",
                "Description": {
                  "en": "The ID of the route table for the peer VPC."
                },
                "Required": true
              },
              "RouteEntryList": {
                "Type": "Json",
                "Description": {
                  "en": "The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters."
                },
                "Required": false,
                "MinLength": 1,
                "MaxLength": 100
              }
            }
          },
          "Type": "Json",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The CIDR blocks of the peer VPC. "
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 1
    },
    "LocalVpcId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the local VPC."
      },
      "Required": true,
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "PeerVpcId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the peer VPC."
      },
      "Required": true,
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "FirewallSwitch": {
      "Type": "String",
      "Description": {
        "en": "The status of the VPC firewall after you create the firewall. Valid values:\nopen: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.\nclose: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation."
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
      "Type": "ALIYUN::CLOUDFW::VpcFirewallConfigure",
      "Properties": {
        "PeerVpcId": {
          "Ref": "PeerVpcId"
        },
        "PeerVpcRegion": {
          "Ref": "ALIYUN::Region"
        },
        "LocalVpcRegion": {
          "Ref": "ALIYUN::Region"
        },
        "LocalVpcCidrTableList": {
          "Ref": "LocalVpcCidrTableList"
        },
        "VpcFirewallName": {
          "Ref": "VpcFirewallName"
        },
        "PeerVpcCidrTableList": {
          "Ref": "PeerVpcCidrTableList"
        },
        "LocalVpcId": {
          "Ref": "LocalVpcId"
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
