The ALIYUN::VPC::EIP resource type requests an Elastic IP Address (EIP).

## Syntax

```
{
  "Type": "ALIYUN::VPC::EIP",
  "Properties": {
    "DeletionProtection": Boolean,
    "Name": String,
    "Tags": List,
    "Isp": String,
    "Netmode": String,
    "Period": Number,
    "ResourceGroupId": String,
    "AutoPay": Boolean,
    "InstanceChargeType": String,
    "PricingCycle": String,
    "Bandwidth": Number,
    "InternetChargeType": String,
    "Description": String,
    "SecurityProtectionTypes": List,
    "PublicIpAddressPoolId": String,
    "Zone": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

DeletionProtection

Boolean

No

Yes

Enable deletion protection.

Valid values:

-   true: Enable deletion protection.
    
-   false (default): Disable deletion protection.
    

Name

String

No

Yes

The name of the EIP.

The name must be 2 to 128 characters in length. It must start with a letter. It cannot start with `http://` or `https://`. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

ResourceGroupId

String

No

Yes

The ID of the resource group.

None

Netmode

String

No

No

The network type.

Valid value: public. This value indicates the Internet.

Bandwidth

Number

No

Yes

The bandwidth of the EIP.

If you do not specify this parameter, the default value is 5 Mbps.

InternetChargeType

String

No

No

The billing method for the EIP.

Valid values:

-   PayByBandwidth (default): Pay by bandwidth.
    
-   PayByTraffic: Pay by data transfer.
    

InstanceChargeType

String

No

No

The billing method for the EIP.

Valid values:

-   Prepaid: Subscription.
    
-   Pay-as-you-go (default)
    

PricingCycle

String

No

No

Subscription billing cycle

Valid values:

-   Month (default): Monthly billing.
    
-   Year: Annual billing.
    

**Note**

This parameter is required if InstanceChargeType is set to Prepaid.

Period

Number

No

No

The subscription duration.

Valid values:

-   If you select monthly billing, valid values are 1 to 9.
    
-   If you select annual billing, valid values are 1 to 3.
    

Default value: 1.

**Note**

This parameter is required if InstanceChargeType is set to Prepaid.

AutoPay

Boolean

No

No

Enable automatic payment.

Valid values:

-   false: Disable automatic payment. After an order is generated, go to the Order Hub to complete the payment.
    
    For more information about the Order Hub, see [Order Hub](https://usercenter2-intl.console.alibabacloud.com/order).
    
-   true (default): Enable automatic payment. The system pays the order automatically.
    

**Note**

This parameter is required if InstanceChargeType is set to Prepaid.

Isp

String

No

No

The line type.

Valid values:

-   BGP (default): BGP (Multi-ISP).
    
-   BGP\_PRO: BGP (Multi-ISP) Pro.
    

All regions support BGP (Multi-ISP) EIPs. Only China (Hong Kong) supports BGP (Multi-ISP) Pro EIPs.

Description

String

No

Yes

The description of the EIP.

The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with `http://` or `https://`.

Tags

List

No

Yes

The tags.

You can add up to 20 tags. Each tag consists of a key-value pair. A tag value can be empty.

For more information, see [Tags syntax](#section-c50-z6h-ylz) and [Tags properties](#section-de8-mzg-qyq).

SecurityProtectionTypes

List

No

No

The security protection level.

Valid values:

-   If you leave this parameter empty, Anti-DDoS (Basic Edition) is used by default.
    
-   If you set this parameter to AntiDDoS\_Enhanced, Anti-DDoS (Enhanced Edition) is used.
    

**Note**

You can configure up to 10 security protection levels.

PublicIpAddressPoolId

String

No

No

The ID of the IP address pool.

The EIP is allocated from this IP address pool. The IP address pool is visible only to users who have applied for trial access. To use it, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23).

Zone

String

No

No

The zone where the EIP is available.

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

**Update allowed**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The key must be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The value must be 0 to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   EipAddress: The allocated EIP.
    
-   AllocationId: The instance ID of the EIP.
    
-   OrderId: The order ID. This value is returned only when InstanceChargeType is set to Prepaid.
    
-   Isp: The line type.
    

## Examples

### **Scenario 1: Create an EIP that uses pay-by-bandwidth billing.**

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/eip-case1.yml&pageTitle=Create an EIP that uses pay-by-bandwidth billing&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ElasticIp:
    Type: ALIYUN::VPC::EIP
    Properties:
      InstanceChargeType: Postpaid
      Name: TestEIP
      InternetChargeType: PayByBandwidth
      Netmode: public
      Bandwidth: 5
Outputs:
  Isp:
    Description: The line type.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - Isp
  AllocationId:
    Description: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - AllocationId
  EipAddress:
    Description: IP address of created EIP.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - EipAddress
  OrderId:
    Description: Order ID of prepaid EIP instance.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - OrderId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ElasticIp": {
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "InstanceChargeType": "Postpaid",
        "Name": "TestEIP",
        "InternetChargeType": "PayByBandwidth",
        "Netmode": "public",
        "Bandwidth": 5
      }
    }
  },
  "Outputs": {
    "Isp": {
      "Description": "The line type.",
      "Value": {
        "Fn::GetAtt": [
          "ElasticIp",
          "Isp"
        ]
      }
    },
    "AllocationId": {
      "Description": "ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.",
      "Value": {
        "Fn::GetAtt": [
          "ElasticIp",
          "AllocationId"
        ]
      }
    },
    "EipAddress": {
      "Description": "IP address of created EIP.",
      "Value": {
        "Fn::GetAtt": [
          "ElasticIp",
          "EipAddress"
        ]
      }
    },
    "OrderId": {
      "Description": "Order ID of prepaid EIP instance.",
      "Value": {
        "Fn::GetAtt": [
          "ElasticIp",
          "OrderId"
        ]
      }
    }
  }
}
```

### **Scenario 2: Create an EIP that uses pay-by-bandwidth billing and attach it to a NAT Gateway.**

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/eip-case2.yml&pageTitle=Create an EIP that uses pay-by-bandwidth billing and attach it to a NAT Gateway&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

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

### **Scenario 3:** Deploy a public-facing NAT Gateway to establish a unified cloud Internet access gateway**.**

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/eip-case3.yml&pageTitle=Deploy a public-facing NAT Gateway to establish a unified cloud Internet access gateway&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Create a Virtual Private Cloud (VPC) environment, configure dual-Availability Zone Elastic Compute Service (ECS) instances, and deploy a public-facing NAT Gateway to establish a unified cloud Internet access gateway.
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
      en: Availability Zone
      zh-cn: Availability Zone 1
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Availability Zone
      zh-cn: Availability Zone 2
  InstanceType1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      ZoneId: ${ZoneId}
    Label:
      en: ECS Instance Type
      zh-cn: ECS Instance Type 1
  InstanceType2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      ZoneId: ${ZoneId}
    Label:
      en: ECS Instance Type
      zh-cn: ECS Instance Type 2
  InstancePassword:
    NoEcho: true
    Type: String
    Description:
      en: >-
        Server login password, Length 8-30, must contain three(Capital letters,
        lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special
        symbol in)
      zh-cn: >-
        Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters (()`~!@#$%^&*_-+=|{}[]:;'<>,.?/).
    Label:
      en: Instance Password
      zh-cn: Instance Password
    ConstraintDescription:
      en: >-
        Length 8-30, must contain three(Capital letters, lowercase letters,
        numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)
      zh-cn: Length 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters (()`~!@#$%^&*_-+=|{}[]:;'<>,.?/).
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
      en: Ecs1 login address.
      zh-cn: ECS1 logon address.
    Value:
      Fn::Sub: >-
        https://ecs-workbench.aliyun.com/?from=EcsConsole
        &instanceType=ecs&regionId=${ALIYUN::Region}&instanceId=${EcsInstance1}
  EcsLoginAddress2:
    Description:
      en: Ecs2 login address.
      zh-cn: ECS2 logon address.
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
            en: Zone ID
            zh-cn: vSwitch zone configuration
      - Parameters:
          - InstanceType1
          - InstanceType2
          - InstancePassword
        Label:
          default:
            en: ECS Instance Configuration
            zh-cn: ECS Instance Configuration
    TemplateTags:
      - acs:technical-solution:network:Implement centralized egress through an Internet NAT gateway-tech_solu_134
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Create a Virtual Private Cloud (VPC) environment, configure dual-Availability Zone Elastic Compute Service (ECS) instances, and deploy a public-facing NAT Gateway to establish a unified cloud Internet access gateway.",
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
        "en": "Availability Zone",
        "zh-cn": "Availability Zone 1"
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
        "en": "Availability Zone",
        "zh-cn": "Availability Zone 2"
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
        "en": "ECS Instance Type",
        "zh-cn": "ECS Instance Type 1"
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
        "en": "ECS Instance Type",
        "zh-cn": "ECS Instance Type 2"
      }
    },
    "InstancePassword": {
      "NoEcho": true,
      "Type": "String",
      "Description": {
        "en": "Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters (()`~!@#$%^&*_-+=|{}[]:;'<>,.?/).",
        "zh-cn": "Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters (()`~!@#$%^&*_-+=|{}[]:;'<>,.?/)."
      },
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "ConstraintDescription": {
        "en": "Length 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters (()`~!@#$%^&*_-+=|{}[]:;'<>,.?/).",
        "zh-cn": "Length 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters (()`~!@#$%^&*_-+=|{}[]:;'<>,.?/)."
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
        "en": "ECS1 logon address.",
        "zh-cn": "ECS1 logon address."
      },
      "Value": {
        "Fn::Sub": "https://ecs-workbench.aliyun.com/?from=EcsConsole &instanceType=ecs&regionId=${ALIYUN::Region}&instanceId=${EcsInstance1}"
      }
    },
    "EcsLoginAddress2": {
      "Description": {
        "en": "ECS2 logon address.",
        "zh-cn": "ECS2 logon address."
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
              "en": "Zone ID",
              "zh-cn": "vSwitch zone configuration"
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
              "en": "ECS Instance Configuration",
              "zh-cn": "ECS Instance Configuration"
            }
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:network:cloud-unified-internet-egress-via-public-nat-gateway-tech_solu_134"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [public templates that include this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::VPC::EIP).
