The ALIYUN::VPC::NatGateway resource type creates a NAT Gateway.

## Syntax

```
{
  "Type": "ALIYUN::VPC::NatGateway",
  "Properties": {
    "Description": String,
    "NatGatewayName": String,
    "InstanceChargeType": String,
    "VSwitchId": String,
    "DeletionProtection": Boolean,
    "InternetChargeType": String,
    "NatType": String,
    "DeletionForce": Boolean,
    "VpcId": String,
    "Tags": List,
    "NetworkType": String,
    "EipBindMode": String,
    "IcmpReplyEnabled": Boolean,
    "SecurityProtectionEnabled": Boolean
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updateable**

**Description**

**Constraint**

Description

String

No

No

The description of the NAT Gateway.

The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

NatGatewayName

String

No

No

The name of the NAT Gateway.

The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. It can contain letters, Chinese characters, digits, periods (.), underscores (\_), and hyphens (-).

If you do not specify this property, the system uses the NAT Gateway ID as the name.

InstanceChargeType

String

No

No

The billing method for the NAT Gateway.

Valid values:

-   PostPaid (default): pay-as-you-go.
    
-   Prepaid: The subscription billing method.
    

VSwitchId

String

Yes

No

The vSwitch ID of the NAT Gateway.

When you create an enhanced NAT Gateway, you must specify a vSwitch. The system assigns an idle private IP address from that vSwitch to the enhanced NAT Gateway.

-   If you want to create an enhanced NAT Gateway in an existing vSwitch, make sure the zone where the vSwitch resides supports enhanced NAT Gateways and the vSwitch has available IP addresses.
    
-   If you have not created a vSwitch, first create one in a zone that supports enhanced NAT Gateways. Then specify that vSwitch for the enhanced NAT Gateway.
    

You can call the [ListEnhanhcedNatGatewayAvailableZones](/help/en/vpc/api-listenhanhcednatgatewayavailablezones#doc-api-Vpc-ListEnhanhcedNatGatewayAvailableZones) operation to query zones that support enhanced NAT Gateways. You can call the [DescribeVSwitches](/help/en/vpc/api-describevswitches#doc-api-Vpc-DescribeVSwitches) operation to query the number of available IP addresses in a vSwitch.

DeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection.

Valid values:

-   true: enables deletion protection.
    
-   false: disables deletion protection.
    

InternetChargeType

String

No

No

NAT Gateway billing method.

Set this property to PayByLcu to bill by usage.

NatType

String

No

No

The type of the NAT Gateway.

Set this property to Enhanced to create an enhanced NAT Gateway.

DeletionForce

Boolean

No

No

Specifies whether to force delete the NAT Gateway.

Valid values:

-   true: forces deletion.
    
-   false: does not force deletion.
    

VpcId

String

Yes

No

The virtual private cloud (VPC) ID where you want to create the NAT Gateway.

If you create a standard NAT Gateway, make sure the VPC route table does not contain a route entry whose destination CIDR block is 0.0.0.0/0. If such a route exists, delete it first.

**Note**

This restriction does not apply to enhanced NAT Gateways.

NetworkType

String

No

No

The network type of the NAT Gateway.

Valid values:

-   internet (default): Internet NAT Gateway.
    
-   intranet: intranet NAT Gateway.
    

Tags

List

No

Yes

Tags

You can attach up to 20 tags.

For more information, see [Tags syntax](#section-rry-tuj-ee9) and [Tags properties](#section-bbo-dwi-ku8).

EipBindMode

String

No

No

The EIP binding mode for the NAT Gateway.

Valid values:

-   MULTI\_BINDED (default): multi-EIP-to-ENI mode.
    
-   NAT: A NAT mode for EIPs that is compatible with an IPv4 gateway.
    
    When you use NAT mode, the maximum number of EIPs that you can bind to the NAT Gateway is 50. Each bound EIP consumes one private IP address from the vSwitch where the NAT Gateway resides.
    
    **Note**
    
    If no idle private IP addresses are available in the vSwitch, the NAT Gateway cannot bind new EIPs.
    

IcmpReplyEnabled

Boolean

No

No

Specifies whether to disable ICMP echo replies.

Valid values:

-   true: disables ICMP echo replies.
    
-   false (default): Disables the ICMP no-reply feature.
    

SecurityProtectionEnabled

Boolean

No

No

Specifies whether to enable the firewall feature.

Valid values:

-   true: enables the firewall feature.
    
-   false (default): disables the firewall feature.
    

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

**Allow Updates**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The key must be 1 to 64 characters in length. It must start with a letter or a Chinese character. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, Chinese characters, digits, periods (.), underscores (\_), and hyphens (-).

Value

String

No

No

The tag value.

The value can be 0 to 128 characters in length. It must start with a letter or a Chinese character. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, Chinese characters, digits, periods (.), underscores (\_), and hyphens (-).

## Return values

Fn::GetAtt

-   NatGatewayId: the ID of the NAT Gateway.
    
-   SNatTableId: the ID of the SNAT entry.
    
-   ForwardTableId: the ID of the DNAT entry.
    

## Examples

### Scenario 1: Create a NAT Gateway.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/nat-gateway-case1.yml&pageTitle=创建NAT网关&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test ECS NatGateway
Parameters:
  VPC:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Label:
      zh-cn: Existing VPC Instance ID
      en: Existing VPC Instance ID
  VSwitch:
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    Type: String
    Label:
      zh-cn: VSwitch ID
      en: VSwitch ID
    AssociationPropertyMetadata:
      VpcId: VPC
Resources:
  NatGateway:
    Type: ALIYUN::VPC::NatGateway
    Properties:
      NatGatewayName: mytest
      VpcId:
        Ref: VPC
      VSwitchId:
        Ref: VSwitch
Outputs:
  NatGatewayId:
    Value:
      Fn::GetAtt:
        - NatGateway
        - NatGatewayId
  BandwidthPackageId:
    Value:
      Fn::GetAtt:
        - BandwidthPackage
        - BandwidthPackageId
  BandwidthPackageIps:
    Value:
      Fn::GetAtt:
        - CommonBandwidthPackageIp
        - IpAddresses
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test ECS NatGateway",
  "Parameters": {
    "VPC": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Label": {
        "zh-cn": "Existing VPC Instance ID",
        "en": "Existing VPC Instance ID"
      }
    },
    "VSwitch": {
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "Type": "String",
      "Label": {
        "zh-cn": "VSwitch ID",
        "en": "VSwitch ID"
      },
      "AssociationPropertyMetadata": {
        "VpcId": "VPC"
      }
    }
  },
  "Resources": {
    "NatGateway": {
      "Type": "ALIYUN::VPC::NatGateway",
      "Properties": {
        "NatGatewayName": "mytest",
        "VpcId": {
          "Ref": "VPC"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        }
      }
    }
  },
  "Outputs": {
    "NatGatewayId": {
      "Value": {
        "Fn::GetAtt": [
          "NatGateway",
          "NatGatewayId"
        ]
      }
    },
    "BandwidthPackageId": {
      "Value": {
        "Fn::GetAtt": [
          "BandwidthPackage",
          "BandwidthPackageId"
        ]
      }
    },
    "BandwidthPackageIps": {
      "Value": {
        "Fn::GetAtt": [
          "CommonBandwidthPackageIp",
          "IpAddresses"
        ]
      }
    }
  }
}
```

### Scenario 2: Create a bandwidth-billed EIP and bind it to a NAT Gateway.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/nat-gateway-case2.yml&pageTitle=创建一个按带宽计费的EIP实例并绑定到 NAT 网关&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ZoneId:
    Type: String
    AssociationProperty: ZoneId
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
Resources:
  NatGateway:
    Type: ALIYUN::VPC::NatGateway
    Properties:
      NatGatewayName: example-ngw
      VSwitchId:
        Ref: VSwitchId
      NatType: Enhanced
      VpcId:
        Ref: VpcId
      ZoneId:
        Ref: ZoneId
  Eip:
    Type: ALIYUN::VPC::EIP
    Properties:
      DeletionProtection: false
      Isp: BGP
      Bandwidth: 200
      InternetChargeType: PayByTraffic
  EipAssociation:
    Type: ALIYUN::VPC::EIPAssociation
    Properties:
      InstanceId:
        Ref: NatGateway
      AllocationId:
        Ref: Eip
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "AssociationProperty": "ZoneId"
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      }
    }
  },
  "Resources": {
    "NatGateway": {
      "Type": "ALIYUN::VPC::NatGateway",
      "Properties": {
        "NatGatewayName": "example-ngw",
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "NatType": "Enhanced",
        "VpcId": {
          "Ref": "VpcId"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        }
      }
    },
    "Eip": {
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "DeletionProtection": false,
        "Isp": "BGP",
        "Bandwidth": 200,
        "InternetChargeType": "PayByTraffic"
      }
    },
    "EipAssociation": {
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Ref": "NatGateway"
        },
        "AllocationId": {
          "Ref": "Eip"
        }
      }
    }
  }
}
```

### Scenario 3: Deploy an Internet NAT Gateway to establish a centralized egress for cloud-based public network access.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/nat-gateway-case3.yml&pageTitle=部署公网NAT网关实现统一的云上公网访问出口&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  en: Create a Virtual Private Cloud (VPC) environment, configure dual-Availability Zone Elastic Compute Service (ECS) instances, and deploy a public-facing NAT Gateway to establish a unified cloud Internet access gateway.
Parameters:
  CommonName:
    Type: String
    Default: unified-egress
  ZoneId1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId2
    Label:
      en: Zone 1
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Zone 2
  InstanceType1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      ZoneId: ${ZoneId}
    Label:
      en: ECS Instance Type 1
  InstanceType2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      ZoneId: ${ZoneId}
    Label:
      en: ECS Instance Type 2
  InstancePassword:
    NoEcho: true
    Type: String
    Description:
      en: >-
        The server login password. It must be 8 to 30 characters long and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    Label:
      en: Instance Password
    ConstraintDescription:
      en: >-
        The password must be 8 to 30 characters long and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
    Default: null
Resources:
  Vpc:
    Type: 'ALIYUN::ECS::VPC'
    Properties:
      CidrBlock: 192.168.0.0/16
      VpcName:
        Fn::Sub: ${CommonName}-vpc
  VSwitch1:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 192.168.1.0/24
      ZoneId:
        Ref: ZoneId1
      VSwitchName:
        Fn::Sub: ${CommonName}-app1-vsw
  VSwitch2:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 192.168.2.0/24
      ZoneId:
        Ref: ZoneId2
      VSwitchName:
        Fn::Sub: ${CommonName}-app2-vsw
  VSwitch3:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 192.168.3.0/24
      ZoneId:
        Ref: ZoneId1
      VSwitchName:
        Fn::Sub: ${CommonName}-pub-vsw
  SecurityGroup:
    Type: 'ALIYUN::ECS::SecurityGroup'
    Properties:
      VpcId:
        Ref: Vpc
      SecurityGroupName:
        Fn::Sub: ${CommonName}-sg
      SecurityGroupIngress:
        - PortRange: 443/443
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 80/80
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
  EcsInstance1:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      VpcId:
        Ref: Vpc
      ZoneId:
        Ref: ZoneId1
      VSwitchId:
        Ref: VSwitch1
      SecurityGroupId:
        Ref: SecurityGroup
      ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      InstanceName:
        Fn::Sub: ${CommonName}-ecs-1
      InstanceType:
        Ref: InstanceType1
      SystemDiskCategory: cloud_essd
      MaxAmount: 1
      InternetMaxBandwidthOut: 0
      Password:
        Ref: InstancePassword
  EcsInstance2:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      VpcId:
        Ref: Vpc
      ZoneId:
        Ref: ZoneId2
      VSwitchId:
        Ref: VSwitch2
      SecurityGroupId:
        Ref: SecurityGroup
      ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      InstanceName:
        Fn::Sub: ${CommonName}-ecs-2
      InstanceType:
        Ref: InstanceType2
      SystemDiskCategory: cloud_essd
      MaxAmount: 1
      InternetMaxBandwidthOut: 0
      Password:
        Ref: InstancePassword
  NatGateway:
    Type: 'ALIYUN::VPC::NatGateway'
    Properties:
      NatGatewayName:
        Fn::Sub: ${CommonName}-ngw
      VSwitchId:
        Ref: VSwitch3
      NatType: Enhanced
      VpcId:
        Ref: Vpc
      ZoneId:
        Ref: ZoneId1
  Eip:
    Type: 'ALIYUN::VPC::EIP'
    Properties:
      DeletionProtection: false
      Isp: BGP
      Bandwidth: 200
      InternetChargeType: PayByTraffic
  EipAssociation:
    Type: 'ALIYUN::VPC::EIPAssociation'
    Properties:
      InstanceId:
        Ref: NatGateway
      AllocationId:
        Ref: Eip
  SNat:
    Type: 'ALIYUN::VPC::SnatEntry'
    DependsOn: EipAssociation
    Properties:
      SnatTableId:
        Fn::GetAtt:
          - NatGateway
          - SNatTableId
      SnatEntryName:
        Fn::Sub: ${CommonName}-snat
      SourceVSwitchIds:
        - Ref: VSwitch1
        - Ref: VSwitch2
      SnatIp:
        Fn::GetAtt:
          - Eip
          - EipAddress
Outputs:
  EcsLoginAddress1:
    Description:
      en: ECS1 login address.
    Value:
      Fn::Sub: >-
        https://ecs-workbench.aliyun.com/?from=EcsConsole
        &instanceType=ecs&regionId=${ALIYUN::Region}&instanceId=${EcsInstance1}
  EcsLoginAddress2:
    Description:
      en: ECS2 login address.
    Value:
      Fn::Sub: >-
        https://ecs-workbench.aliyun.com/?from=EcsConsole
        &instanceType=ecs&regionId=${ALIYUN::Region}&instanceId=${EcsInstance2}
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - ZoneId1
          - ZoneId2
        Label:
          default:
            en: VSwitch Zone Configuration
      - Parameters:
          - InstanceType1
          - InstanceType2
          - InstancePassword
        Label:
          default:
            en: ECS Instance Configuration
    TemplateTags:
      - acs:technical-solution:network:implement-centralized-egress-with-internet-nat-gateway-tech_solu_134
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "en": "Create a Virtual Private Cloud (VPC) environment, configure dual-Availability Zone Elastic Compute Service (ECS) instances, and deploy a public-facing NAT Gateway to establish a unified cloud Internet access gateway."
  },
  "Parameters": {
    "CommonName": {
      "Type": "String",
      "Default": "unified-egress"
    },
    "ZoneId1": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId2"
        ]
      },
      "Label": {
        "en": "Zone 1"
      }
    },
    "ZoneId2": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId1"
        ]
      },
      "Label": {
        "en": "Zone 2"
      }
    },
    "InstanceType1": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "PostPaid",
        "SystemDiskCategory": "cloud_essd",
        "ZoneId": "${ZoneId}"
      },
      "Label": {
        "en": "ECS Instance Type 1"
      }
    },
    "InstanceType2": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "PostPaid",
        "SystemDiskCategory": "cloud_essd",
        "ZoneId": "${ZoneId}"
      },
      "Label": {
        "en": "ECS Instance Type 2"
      }
    },
    "InstancePassword": {
      "NoEcho": true,
      "Type": "String",
      "Description": {
        "en": "The server login password. It must be 8 to 30 characters long and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "Label": {
        "en": "Instance Password"
      },
      "ConstraintDescription": {
        "en": "The password must be 8 to 30 characters long and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password",
      "Default": null
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "192.168.0.0/16",
        "VpcName": {
          "Fn::Sub": "${CommonName}-vpc"
        }
      }
    },
    "VSwitch1": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "192.168.1.0/24",
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-app1-vsw"
        }
      }
    },
    "VSwitch2": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "192.168.2.0/24",
        "ZoneId": {
          "Ref": "ZoneId2"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-app2-vsw"
        }
      }
    },
    "VSwitch3": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "192.168.3.0/24",
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-pub-vsw"
        }
      }
    },
    "SecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupName": {
          "Fn::Sub": "${CommonName}-sg"
        },
        "SecurityGroupIngress": [
          {
            "PortRange": "443/443",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "80/80",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          }
        ]
      }
    },
    "EcsInstance1": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchId": {
          "Ref": "VSwitch1"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "ImageId": "aliyun_3_9_x64_20G_alibase_20231219.vhd",
        "InstanceName": {
          "Fn::Sub": "${CommonName}-ecs-1"
        },
        "InstanceType": {
          "Ref": "InstanceType1"
        },
        "SystemDiskCategory": "cloud_essd",
        "MaxAmount": 1,
        "InternetMaxBandwidthOut": 0,
        "Password": {
          "Ref": "InstancePassword"
        }
      }
    },
    "EcsInstance2": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "ZoneId": {
          "Ref": "ZoneId2"
        },
        "VSwitchId": {
          "Ref": "VSwitch2"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "ImageId": "aliyun_3_9_x64_20G_alibase_20231219.vhd",
        "InstanceName": {
          "Fn::Sub": "${CommonName}-ecs-2"
        },
        "InstanceType": {
          "Ref": "InstanceType2"
        },
        "SystemDiskCategory": "cloud_essd",
        "MaxAmount": 1,
        "InternetMaxBandwidthOut": 0,
        "Password": {
          "Ref": "InstancePassword"
        }
      }
    },
    "NatGateway": {
      "Type": "ALIYUN::VPC::NatGateway",
      "Properties": {
        "NatGatewayName": {
          "Fn::Sub": "${CommonName}-ngw"
        },
        "VSwitchId": {
          "Ref": "VSwitch3"
        },
        "NatType": "Enhanced",
        "VpcId": {
          "Ref": "Vpc"
        },
        "ZoneId": {
          "Ref": "ZoneId1"
        }
      }
    },
    "Eip": {
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "DeletionProtection": false,
        "Isp": "BGP",
        "Bandwidth": 200,
        "InternetChargeType": "PayByTraffic"
      }
    },
    "EipAssociation": {
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Ref": "NatGateway"
        },
        "AllocationId": {
          "Ref": "Eip"
        }
      }
    },
    "SNat": {
      "Type": "ALIYUN::VPC::SnatEntry",
      "DependsOn": "EipAssociation",
      "Properties": {
        "SnatTableId": {
          "Fn::GetAtt": [
            "NatGateway",
            "SNatTableId"
          ]
        },
        "SnatEntryName": {
          "Fn::Sub": "${CommonName}-snat"
        },
        "SourceVSwitchIds": [
          {
            "Ref": "VSwitch1"
          },
          {
            "Ref": "VSwitch2"
          }
        ],
        "SnatIp": {
          "Fn::GetAtt": [
            "Eip",
            "EipAddress"
          ]
        }
      }
    }
  },
  "Outputs": {
    "EcsLoginAddress1": {
      "Description": {
        "en": "ECS1 login address."
      },
      "Value": {
        "Fn::Sub": "https://ecs-workbench.aliyun.com/?from=EcsConsole &instanceType=ecs&regionId=${ALIYUN::Region}&instanceId=${EcsInstance1}"
      }
    },
    "EcsLoginAddress2": {
      "Description": {
        "en": "ECS2 login address."
      },
      "Value": {
        "Fn::Sub": "https://ecs-workbench.aliyun.com/?from=EcsConsole &instanceType=ecs&regionId=${ALIYUN::Region}&instanceId=${EcsInstance2}"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "ZoneId1",
            "ZoneId2"
          ],
          "Label": {
            "default": {
              "en": "VSwitch Zone Configuration"
            }
          }
        },
        {
          "Parameters": [
            "InstanceType1",
            "InstanceType2",
            "InstancePassword"
          ],
          "Label": {
            "default": {
              "en": "ECS Instance Configuration"
            }
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:network:implement-centralized-egress-with-internet-nat-gateway-tech_solu_134"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [public templates that include this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::VPC::NatGateway).
