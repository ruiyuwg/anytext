Use ALIYUN::VPC::EIPAssociation to associate an Elastic IP Address (EIP) with a cloud service instance.

## Syntax

```
{
  "Type": "ALIYUN::VPC::EIPAssociation",
  "Properties": {
    "AllocationId": String,
    "InstanceId": String,
    "PrivateIpAddress": String,
    "Mode": String
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

AllocationId

String

Yes

Yes

The ID of the EIP.

None

InstanceId

String

Yes

Yes

The ID of the cloud service instance.

Supported cloud service instance types include the following:

-   ECS instances in VPC mode.
    
-   SLB instances in VPC mode.
    
-   NAT Gateway.
    
-   High-availability virtual IP address (HaVip).
    
-   Elastic network interface (ENI).
    

PrivateIpAddress

String

No

Yes

A private IP address in the vSwitch CIDR block.

If you do not specify this parameter, the system automatically assigns a private IP address based on the VPC ID and vSwitch ID.

Mode

String

No

Yes

The association mode.

Valid values:

-   NAT (default): NAT mode (standard mode).
    
-   MULTI\_BINDED: multi-EIP-to-ENI mode.
    
-   BINDED: cut-through mode.
    

## Return values

Fn::GetAtt

-   EipAddress: The IP address of the EIP.
    
-   AllocationId: The ID of the EIP.
    

## Examples

### **Scenario 1: Create one ECS instance and associate it with an EIP.**

[Create now](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/eip-association-case1.yml&pageTitle=Create%20single%20ECS%20and%20bind%20EIP&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  en: Create a VPC type ECS and bind EIP (existing VPC).
  zh-cn: Create a VPC-type ECS instance and bind an EIP (for an existing VPC).
Parameters:
  VPC:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: Please search the ID starting with (vpc-xxx) from console-Virtual Private Cloud.
      zh-cn: The ID of an existing VPC. You can find the ID in the Virtual Private Cloud console.
    Label:
      en: VPC ID
      zh-cn: VPC ID
  VSwitch:
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VPC}
    Type: String
    Description:
      en: Existing VSwitch ID, query under console-VPC-VSwitch, <font color='red'>VSwitch must be under VPC. ECS will be created under this VSwitch.</font>
      zh-cn: The ID of an existing vSwitch. You can find the ID in the Virtual Private Cloud console. <font color='red'>The vSwitch must be in the VPC. The ECS instance will be created in this vSwitch.</font>
    Label:
      en: VSwitch ID
      zh-cn: vSwitch ID
  SecurityGroup:
    Type: String
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    Description:
      en: Please search the business security group ID starting with (sg-xxx) from console-ECS-Network & Security.
      zh-cn: The ID of an existing security group. You can find the ID in the ECS console.<font color='red'>The security group must be in the VPC.</font>
    Label:
      en: Business Security Group ID
      zh-cn: Security Group ID
    AssociationPropertyMetadata:
      VpcId: ${VPC}
  ECSInstanceType:
    AssociationPropertyMetadata:
      InstanceChargeType: ${ECSInstanceType}
    AssociationProperty: ALIYUN::ECS::Instance::InstanceType
    Type: String
    Description:
      en: <font color='blue'><b>1.Before selecting the model please confirm that the current available zone under the model is in stock, some models need to be reported in advance</font><br/><font color='blue'><b>2.List of optional models</font><br></font>[ecs.c5.large <font color='green'>2vCPU 4GiB Intranet bandwidth1Gbps In-grid sending and receiving packages30MillionPPS</font>]<br/>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB Intranet bandwidth1.5Gbps In-grid sending and receiving packages50MillionPPS</font>]<br/>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB Intranet bandwidth2.5Gbps In-grid sending and receiving packages80MillionPPS</font>]
      zh-cn: <font color='blue'><b>1. Before you select an instance type, confirm that it is in stock in the current zone. You may need to submit a request for some instance types in advance.</font><font color='blue'><b>2. Valid values:</font>[ecs.c5.large: <font color='green'>2 vCPUs, 4 GiB of memory, 1 Gbit/s of internal bandwidth, and a packet forwarding rate of 300,000 PPS.</font>]<br/>[ecs.c5.xlarge: <font color='green'>4 vCPUs, 8 GiB of memory, 1.5 Gbit/s of internal bandwidth, and a packet forwarding rate of 500,000 PPS.</font>]<br/>[ecs.c5.2xlarge: <font color='green'>8 vCPUs, 16 GiB of memory, 2.5 Gbit/s of internal bandwidth, and a packet forwarding rate of 800,000 PPS.</font>]
    Label:
      en: Instance Type
      zh-cn: Instance Type
  ECSDiskCategory:
    Type: String
    Description:
      en: '<font color=''blue''><b>Optional values:</font>[cloud_efficiency: <font color=''green''>Efficient Cloud Disk</font>]<br>[cloud_ssd: <font color=''green''>SSD Cloud Disk</font>]<br>[cloud_essd: <font color=''green''>ESSD Cloud Disk</font>]<br>[cloud: <font color=''green''>Cloud Disk</font>]<br>[ephemeral_ssd: <font color=''green''>Local SSD Cloud Disk</font>]'
      zh-cn: '<font color=''blue''><b>Valid values:</font>[cloud_efficiency: <font color=''green''>ultra disk</font>]<br/>[cloud_ssd: <font color=''green''>standard SSD</font>]<br/>[cloud_essd: <font color=''green''>enterprise SSD</font>]<br/>[cloud: <font color=''green''>basic disk</font>]<br/>[ephemeral_ssd: <font color=''green''>local SSD</font>]'
    AssociationProperty: ALIYUN::ECS::Disk::SystemDiskCategory
    AssociationPropertyMetadata:
      InstanceType: ${ECSInstanceType}
    Label:
      en: System Disk Type
      zh-cn: System Disk Type
  InstanceChargeType:
    Type: String
    Label:
      en: Instance Charge Type
      zh-cn: Instance Billing Method
    Description:
      en: '<font color=''blue''><b>Optional values:</font>[PostPaid: <font color=''green''>Pay as you go.</font>]<br> [PrePaid: <font color=''green''>Prepaid, monthly subscription.</font>]'
      zh-cn: '<font color=''blue''><b>Valid values:</font><br/>[PostPaid: <font color=''green''>Pay-as-you-go.</font>]<br/>[PrePaid: <font color=''green''>Subscription.</font>]'
    AllowedValues:
      - PostPaid
      - PrePaid
    Default: PostPaid
  KeyPairName:
    Type: String
    AssociationProperty: ALIYUN::ECS::KeyPair::KeyPairName
    Label:
      en: Key Pair Name
      zh-cn: Key Pair Name
    Description:
      en: If it is a Windows ECS instance, ignore this parameter. The default is blank.<br>If you have filled in <font color='green'>key pair name</font>, <font color='green'>instance password< The content of /font> will still be set in the instance, but the password login method in the Linux system will be forbidden.<br><font color='red'>Please enter the name of the existing key pair. If you use the instance password Login, the key pair name does not need to be filled in.</font>
      zh-cn: This parameter is ignored for Windows ECS instances. By default, this parameter is left empty.<br>If you specify a <font color='green'>key pair name</font>, the value of the <font color='green'>instance password</font> parameter is still configured for the instance, but password-based logon is disabled for the Linux operating system.<br><font color='red'>Enter the name of an existing key pair. If you use a password to log on to the instance, you do not need to specify a key pair name.</font>
    Default: Null
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - VPC
          - VSwitch
          - SecurityGroup
        Label:
          default: 'VPC '
      - Parameters:
          - ECSInstanceType
          - ECSDiskCategory
          - InstanceChargeType
          - KeyPairName
        Label:
          default: ECS
    TemplateTags:
      - Specify the image Id and snapshot to create ECS instance.
Resources:
  ECSInstanceGroup:
    Type: ALIYUN::ECS::InstanceGroup
    Properties:
      IoOptimized: optimized
      InstanceChargeType:
        Ref: InstanceChargeType
      SystemDisk_Category:
        Ref: ECSDiskCategory
      SecurityGroupId:
        Ref: SecurityGroup
      VSwitchId:
        Ref: VSwitch
      MaxAmount: 1
      SystemDisk_Size: 40
      VpcId:
        Ref: VPC
      ImageId: ubuntu_14
      InstanceType:
        Ref: ECSInstanceType
      AllocatePublicIP: 'false'
      Password: Admin@123!
      KeyPairName:
        Ref: KeyPairName
  ElasticIp:
    Type: ALIYUN::VPC::EIP
    Properties:
      Bandwidth: 5
      InternetChargeType: PayByTraffic
  ElasticIpAssociation:
    Type: ALIYUN::VPC::EIPAssociation
    Properties:
      InstanceId:
        Fn::Select:
          - 0
          - Fn::GetAtt:
              - ECSInstanceGroup
              - InstanceIds
      AllocationId:
        Ref: ElasticIp
Outputs:
  VpcId:
    Description: VPC Id
    Value:
      Ref: VPC
  SecurityGroupId:
    Description: Security Group Id
    Value:
      Ref: SecurityGroup
  VSwitchId:
    Description: VSwitch Id
    Value:
      Ref: VSwitch
  EipAddress:
    Description: IP address of created EIP.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - EipAddress
                    
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "en": "Create a VPC type ECS and bind EIP (existing VPC).",
    "zh-cn": "Create a VPC-type ECS instance and bind an EIP (for an existing VPC)."
  },
  "Parameters": {
    "VPC": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "Please search the ID starting with (vpc-xxx) from console-Virtual Private Cloud.",
        "zh-cn": "Please search the ID starting with (vpc-xxx) from console-Virtual Private Cloud."
      },
      "Label": {
        "en": "VPC ID",
        "zh-cn": "VPC ID"
      }
    },
    "VSwitch": {
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VPC}"
      },
      "Type": "String",
      "Description": {
        "en": "Existing VSwitch ID, query under console-VPC-VSwitch, <font color='red'>VSwitch must be under VPC. ECS will be created under this VSwitch.</font>",
        "zh-cn": "Existing VSwitch ID, query under console-VPC-VSwitch, <font color='red'>VSwitch must be under VPC. ECS will be created under this VSwitch.</font>"
      },
      "Label": {
        "en": "VSwitch ID",
        "zh-cn": "VSwitch ID"
      }
    },
    "SecurityGroup": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "Description": {
        "en": "Please search the business security group ID starting with (sg-xxx) from console-ECS-Network & Security.",
        "zh-cn": "Please search the business security group ID starting with (sg-xxx) from console-ECS-Network & Security."
      },
      "Label": {
        "en": "Business Security Group ID",
        "zh-cn": "Business Security Group ID"
      },
      "AssociationPropertyMetadata": {
        "VpcId": "${VPC}"
      }
    },
    "ECSInstanceType": {
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "${ECSInstanceType}"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "Type": "String",
      "Description": {
        "en": "<font color='blue'><b>1. Before selecting the model, confirm that the model is available in the current zone. Some models require advance notification.</font><font color='blue'><b>2. Optional models:</font>[ecs.c5.large <font color='green'>2 vCPUs, 4 GiB, intranet bandwidth: 1 Gbps, intranet sending and receiving packets: 30 Million PPS</font>]<br>[ecs.c5.xlarge <font color='green'>4 vCPUs, 8 GiB, intranet bandwidth: 1.5 Gbps, intranet sending and receiving packets: 50 Million PPS</font>]<br>[ecs.c5.2xlarge <font color='green'>8 vCPUs, 16 GiB, intranet bandwidth: 2.5 Gbps, intranet sending and receiving packets: 80 Million PPS</font>]",
        "zh-cn": "<font color='blue'><b>1. Before selecting the model, confirm that the model is available in the current zone. Some models require advance notification.</font><font color='blue'><b>2. Optional models:</font>[ecs.c5.large <font color='green'>2 vCPUs, 4 GiB, intranet bandwidth: 1 Gbps, intranet sending and receiving packets: 30 Million PPS</font>]<br>[ecs.c5.xlarge <font color='green'>4 vCPUs, 8 GiB, intranet bandwidth: 1.5 Gbps, intranet sending and receiving packets: 50 Million PPS</font>]<br>[ecs.c5.2xlarge <font color='green'>8 vCPUs, 16 GiB, intranet bandwidth: 2.5 Gbps, intranet sending and receiving packets: 80 Million PPS</font>]"
      },
      "Label": {
        "en": "Instance Type",
        "zh-cn": "Instance Type"
      }
    },
    "ECSDiskCategory": {
      "Type": "String",
      "Description": {
        "en": "<font color='blue'><b>Optional values:</font>[cloud_efficiency: <font color='green'>Efficient Cloud Disk</font>]<br>[cloud_ssd: <font color='green'>SSD Cloud Disk</font>]<br>[cloud_essd: <font color='green'>ESSD Cloud Disk</font>]<br>[cloud: <font color='green'>Cloud Disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD Cloud Disk</font>]",
        "zh-cn": "<font color='blue'><b>Optional values:</font>[cloud_efficiency: <font color='green'>Efficient Cloud Disk</font>]<br>[cloud_ssd: <font color='green'>SSD Cloud Disk</font>]<br>[cloud_essd: <font color='green'>ESSD Cloud Disk</font>]<br>[cloud: <font color='green'>Cloud Disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD Cloud Disk</font>]"
      },
      "AssociationProperty": "ALIYUN::ECS::Disk::SystemDiskCategory",
      "AssociationPropertyMetadata": {
        "InstanceType": "${ECSInstanceType}"
      },
      "Label": {
        "en": "System Disk Type",
        "zh-cn": "System Disk Type"
      }
    },
    "InstanceChargeType": {
      "Type": "String",
      "Label": {
        "en": "Instance Charge Type",
        "zh-cn": "Instance Charge Type"
      },
      "Description": {
        "en": "<font color='blue'><b>Optional values:</font><br>[PostPaid: <font color='green'>Pay as you go.</font>]<br> [PrePaid: <font color='green'>Prepaid, monthly subscription.</font>]",
        "zh-cn": "<font color='blue'><b>Optional values:</font><br>[PostPaid: <font color='green'>Pay as you go.</font>]<br> [PrePaid: <font color='green'>Prepaid, monthly subscription.</font>]"
      },
      "AllowedValues": [
        "PostPaid",
        "PrePaid"
      ],
      "Default": "PostPaid"
    },
    "KeyPairName": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::KeyPair::KeyPairName",
      "Label": {
        "en": "Key Pair Name",
        "zh-cn": "Key Pair Name"
      },
      "Description": {
        "en": "If it is a Windows ECS instance, ignore this parameter. The default is blank.<br>If you have filled in <font color='green'>key pair name</font>, <font color='green'>instance password</font> will still be set in the instance, but the password login method in the Linux system will be forbidden.<br><font color='red'>Please enter the name of the existing key pair. If you use the instance password login, the key pair name does not need to be filled in.</font>",
        "zh-cn": "If it is a Windows ECS instance, ignore this parameter. The default is blank.<br>If you have filled in <font color='green'>key pair name</font>, <font color='green'>instance password</font> will still be set in the instance, but the password login method in the Linux system will be forbidden.<br><font color='red'>Please enter the name of the existing key pair. If you use the instance password login, the key pair name does not need to be filled in.</font>"
      },
      "Default": null
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "VPC",
            "VSwitch",
            "SecurityGroup"
          ],
          "Label": {
            "default": "VPC "
          }
        },
        {
          "Parameters": [
            "ECSInstanceType",
            "ECSDiskCategory",
            "InstanceChargeType",
            "KeyPairName"
          ],
          "Label": {
            "default": "ECS"
          }
        }
      ],
      "TemplateTags": [
        "Specify the image Id and snapshot to create ECS instance."
      ]
    }
  },
  "Resources": {
    "ECSInstanceGroup": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "IoOptimized": "optimized",
        "InstanceChargeType": {
          "Ref": "InstanceChargeType"
        },
        "SystemDisk_Category": {
          "Ref": "ECSDiskCategory"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "MaxAmount": 1,
        "SystemDisk_Size": 40,
        "VpcId": {
          "Ref": "VPC"
        },
        "ImageId": "ubuntu_14",
        "InstanceType": {
          "Ref": "ECSInstanceType"
        },
        "AllocatePublicIP": "false",
        "Password": "Admin@123!",
        "KeyPairName": {
          "Ref": "KeyPairName"
        }
      }
    },
    "ElasticIp": {
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "Bandwidth": 5,
        "InternetChargeType": "PayByTraffic"
      }
    },
    "ElasticIpAssociation": {
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Fn::Select": [
            0,
            {
              "Fn::GetAtt": [
                "ECSInstanceGroup",
                "InstanceIds"
              ]
            }
          ]
        },
        "AllocationId": {
          "Ref": "ElasticIp"
        }
      }
    }
  },
  "Outputs": {
    "VpcId": {
      "Description": "VPC Id",
      "Value": {
        "Ref": "VPC"
      }
    },
    "SecurityGroupId": {
      "Description": "Security Group Id",
      "Value": {
        "Ref": "SecurityGroup"
      }
    },
    "VSwitchId": {
      "Description": "VSwitch Id",
      "Value": {
        "Ref": "VSwitch"
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
    }
  }
}
```

### **Scenario 2: Create multiple ECS instances and associate them with EIPs**

[Create now](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/eip-association-case2.yml&pageTitle=Create%20multiple%20ECS%20and%20bind%20EIP&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Create a specified number of ECS instances in a Virtual Private Cloud (VPC), equipped with Elastic IP addresses (EIPs), billed by configuration and bandwidth usage, and deployed in the specified vSwitch and security group.
  en: Provision a specified number of ECS instances within a designated VPC, equipped with Elastic IP Addresses (EIPs), billed by configuration and bandwidth usage, placed under the specified virtual switch (VSwitch) and security group.
Parameters:
  VPC:
    Type: String
    Label:
      en: VPC ID
      zh-cn: the VPC ID.
    Description:
      en: Search for the ID that starts with vpc-xxx in the console under Virtual Private Cloud.
      zh-cn: Find the ID of your existing VPC in the console under Virtual Private Cloud.
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitch:
    Type: String
    Label:
      en: VSwitch ID
      zh-cn: the vSwitch ID.
    Description:
      en: Existing VSwitch ID. Find it in the console under VPC > vSwitch. <font color='red'>The VSwitch must be in the selected VPC. ECS instances will be created in this VSwitch.</font>
      zh-cn: Find the ID of your existing VSwitch in the console under VPC > vSwitch. <font color='red'>The VSwitch must be in the selected VPC. ECS instances will be created in this VSwitch.</font>
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VPC}
      ZoneId: ${ECSZoneId}
  SecurityGroup:
    Type: String
    Label:
      en: Business Security Group ID
      zh-cn: the business security group ID.
    Description:
      en: Search for the business security group ID that starts with sg-xxx in the console under ECS > Network & Security.
      zh-cn: Find the ID of your existing business security group in the console under ECS > Network & Security > Security Groups. <font color='red'>The security group must belong to the selected VPC.</font>
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VPC}
  EIPBandwidth:
    Type: Number
    Label:
      en: EIP Bandwidth
      zh-cn: Elastic IP address bandwidth.
    Description:
      en: EIP bandwidth. Valid values: 1 to 200. Unit: Mbps.
      zh-cn: Elastic IP address bandwidth. Valid values: 1 to 200. Unit: Mbps.
    Default: 1
    MinValue: 1
    MaxValue: 200
  EIPInternetChargeType:
    Type: String
    Label:
      en: EIP Charge Type
      zh-cn: EIP charge type.
    AssociationPropertyMetadata:
      LocaleKey: InternetChargeType
    Default: PayByTraffic
    AllowedValues:
      - PayByBandwidth
      - PayByTraffic
  Count:
    Type: Number
    Label:
      en: Count
      zh-cn: Count
    Description:
      en: Number of ECS instances and EIPs to create. Valid values: 1 to 140.
      zh-cn: Number of ECS instances and EIPs to create. Valid values: 1 to 140.
    Default: 2
    MinValue: 1
    MaxValue: 140
  ECSZoneId:
    Type: String
    Label:
      en: VSwitch Availability Zone
      zh-cn: the vSwitch zone
    Description:
      en: Availability zone ID. <br><b>Note: <font color='blue'>Before you select an availability zone, confirm that it supports the instance type you plan to use. We recommend choosing a different availability zone than other VSwitches.</font><br/><font color='red'>The availability zone of the VSwitch and the selected VSwitch ID must match.</font>
      zh-cn: Availability zone ID. <br><b>Note: <font color='blue'>Before you select an availability zone, confirm that it supports the instance type you plan to use. We recommend choosing a different availability zone than other VSwitches.</font><br/><font color='red'>The availability zone of the VSwitch and the selected VSwitch ID must match.</font>
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  ECSImageId:
    Type: String
    Label:
      en: Image
      zh-cn: Image
    Description:
      en: Image ID. Use CentOS 7. For details, see <b><a href='https://www.alibabacloud.com/help/en/doc-detail/112977.html' target='_blank'><font color='blue'>Find an image</font></a>.
      zh-cn: Image ID. Use CentOS 7. For details, see <b><a href='https://www.alibabacloud.com/help/document_detail/112977.html' target='_blank'><font color='blue'>Find an image</font></a>.
    AssociationProperty: ALIYUN::ECS::Image::ImageId
    AssociationPropertyMetadata:
      InstanceType: ${ECSInstanceType}
      SupportedImageOwnerAlias:
        - system
        - self
        - others
    Default: centos_7_04_64_20G_alibase_201701015.vhd
  ECSInstanceType:
    Type: String
    Label:
      en: Instance Type
      zh-cn: Instance Type
    Description:
      en: <font color='blue'>1. Before selecting an instance type, confirm that it is available in the selected availability zone. Some instance types require advance notice.</font><font color='blue'><b>2. Available instance types</font><br></font>[ecs.c5.large <font color='green'>2 vCPUs, 4 GiB memory, 1 Gbps internal bandwidth, 30 million PPS</font>]<br/>[ecs.c5.xlarge <font color='green'>4 vCPUs, 8 GiB memory, 1.5 Gbps internal bandwidth, 50 million PPS</font>]<br/>[ecs.c5.2xlarge <font color='green'>8 vCPUs, 16 GiB memory, 2.5 Gbps internal bandwidth, 80 million PPS</font>]
      zh-cn: <font color='blue'><b>1. Before selecting an instance type, confirm that it is available in the selected availability zone. Some instance types require advance notice.</font><font color='blue'><b>2. Available instance types</font><br></font>[ecs.c5.large <font color='green'>2 vCPUs, 4 GiB memory, 1 Gbps internal bandwidth, 300,000 PPS</font>]<br/>[ecs.c5.xlarge <font color='green'>4 vCPUs, 8 GiB memory, 1.5 Gbps internal bandwidth, 500,000 PPS</font>]<br/>[ecs.c5.2xlarge <font color='green'>8 vCPUs, 16 GiB memory, 2.5 Gbps internal bandwidth, 800,000 PPS</font>]
    AssociationProperty: ALIYUN::ECS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: ECSZoneId
  ECSDiskCategory:
    Type: String
    Label:
      en: System Disk Type
      zh-cn: System Disk Type
    Description:
      en: <font color='blue'><b>Valid values:</font><br/>[cloud_efficiency: <font color='green'>Ultra disk</font>]<br>[cloud_ssd: <font color='green'>Standard SSD</font>]<br>[cloud_essd: <font color='green'>Enterprise SSD</font>]<br>[cloud: <font color='green'>Basic disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD disk</font>]
      zh-cn: <font color='blue'><b>Valid values:</font><br>[cloud_efficiency: <font color='green'>Ultra disk</font>]<br>[cloud_ssd: <font color='green'>Standard SSD</font>]<br>[cloud_essd: <font color='green'>Enterprise SSD</font>]<br>[cloud: <font color='green'>Basic disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD disk</font>]
    AssociationProperty: ALIYUN::ECS::Disk::SystemDiskCategory
    AssociationPropertyMetadata:
      LocaleKey: DiskCategory
      InstanceType: ${ECSInstanceType}
  ECSSysDiskSize:
    Type: Number
    Label:
      en: System Disk Space
      zh-cn: System Disk Space
    Description:
      en: System disk size. Valid values: 40 to 500. Unit: GB.
      zh-cn: System disk size. Valid values: 40 to 500. Unit: GB.
    Default: 40
    MinValue: 40
    MaxValue: 500
  ECSPassword:
    Type: String
    NoEcho: true
    Label:
      en: Instance Password
      zh-cn: Instance Password
    Description:
      en: Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
      zh-cn: Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
    ConstraintDescription:
      en: Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
      zh-cn: Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
    Default: Null
    AssociationProperty: ALIYUN::ECS::Instance::Password
  KeyPairName:
    Type: String
    Label:
      en: Key Pair Name
      zh-cn: Key Pair Name
    Description:
      en: Ignore this parameter if you are creating a Windows ECS instance. The default value is empty.<br>If you specify a <font color='green'>key pair name</font>, the <font color='green'>instance password</font> is still set on the instance, but password-based logon is disabled for Linux instances.<br><font color='red'>Enter the name of an existing key pair. If you use the instance password to log on, leave this field blank.</font>
      zh-cn: Ignore this parameter if you are creating a Windows ECS instance. The default value is empty.<br>If you specify a <font color='green'>key pair name</font>, the <font color='green'>instance password</font> is still set on the instance, but password-based logon is disabled for Linux instances.<br><font color='red'>Enter the name of an existing key pair. If you use the instance password to log on, leave this field blank.</font>
    AssociationProperty: ALIYUN::ECS::KeyPair::KeyPairName
    Default: Null
  PayType:
    Type: String
    Label:
      en: ECS Instance Charge Type
      zh-cn: ECS instance charge type
    AssociationProperty: ChargeType
    AssociationPropertyMetadata:
      LocaleKey: InstanceChargeType
    Default: PostPaid
    AllowedValues:
      - PostPaid
      - PrePaid
  PayPeriodUnit:
    Type: String
    Label:
      en: Pay Period Unit
      zh-cn: Pay Period Unit
    AssociationProperty: PayPeriodUnit
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Not:
            Fn::Equals:
              - ${PayType}
              - PostPaid
    Default: Month
    AllowedValues:
      - Month
      - Year
  PayPeriod:
    Type: Number
    Label:
      en: Period
      zh-cn: Period
    AssociationProperty: PayPeriod
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Not:
            Fn::Equals:
              - ${PayType}
              - PostPaid
    Default: 1
    AllowedValues:
      - 1
      - 2
      - 3
      - 4
      - 5
      - 6
      - 7
      - 8
      - 9
Resources:
  ECSInstanceGroup:
    Type: ALIYUN::ECS::InstanceGroup
    Properties:
      ZoneId:
        Ref: ECSZoneId
      VpcId:
        Ref: VPC
      VSwitchId:
        Ref: VSwitch
      SecurityGroupId:
        Ref: SecurityGroup
      ImageId:
        Ref: ECSImageId
      AllocatePublicIP: 'false'
      InstanceChargeType:
        Ref: PayType
      Period:
        Ref: PayPeriod
      PeriodUnit:
        Ref: PayPeriodUnit
      InstanceType:
        Ref: ECSInstanceType
      IoOptimized: optimized
      KeyPairName:
        Ref: KeyPairName
      MaxAmount:
        Ref: Count
      Password:
        Ref: ECSPassword
      SystemDiskCategory:
        Ref: ECSDiskCategory
      SystemDiskSize:
        Ref: ECSSysDiskSize
  ElasticIp:
    Type: ALIYUN::VPC::EIP
    Properties:
      Bandwidth:
        Ref: EIPBandwidth
      InternetChargeType:
        Ref: EIPInternetChargeType
    Count:
      Ref: Count
  ElasticIpAssociation:
    Type: ALIYUN::VPC::EIPAssociation
    Properties:
      InstanceId:
        Fn::Select:
          - Ref: ALIYUN::Index
          - Fn::GetAtt:
              - ECSInstanceGroup
              - InstanceIds
      AllocationId:
        Fn::Select:
          - Ref: ALIYUN::Index
          - Ref: ElasticIp
    Count:
      Ref: Count
Outputs:
  EipAddress:
    Description: IP address of created EIP.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - EipAddress
  SecurityGroupId:
    Description: generated security group id for security group.
    Value:
      Ref: SecurityGroup
  VSwitchId:
    Description: generated security vswitch id for VPC.
    Value:
      Ref: VSwitch
  VpcId:
    Description: generated security vpc id for VPC.
    Value:
      Ref: VPC
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - VPC
          - ECSZoneId
          - VSwitch
          - SecurityGroup
        Label:
          default: 'VPC '
      - Parameters:
          - EIPBandwidth
          - EIPInternetChargeType
        Label:
          default: EIP
      - Parameters:
          - PayType
          - PayPeriodUnit
          - PayPeriod
        Label:
          default:
            en: ECS PayType Configuration
            zh-cn: ECS PayType Configuration
      - Parameters:
          - ECSInstanceType
          - ECSImageId
          - ECSDiskCategory
          - ECSSysDiskSize
          - Count
          - ECSPassword
          - KeyPairName
        Label:
          default: ECS
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Create a specified number of ECS instances in a VPC, equipped with EIPs, charged by configuration and bandwidth, in the specified VSwitch and security group.",
    "en": "Provision a specified number of ECS instances within a designated Virtual Private Cloud (VPC), equipped with Elastic IP Addresses (EIPs), billed by configuration and bandwidth usage, placed under the specified virtual switch (VSwitch) and security group."
  },
  "Parameters": {
    "VPC": {
      "Type": "String",
      "Label": {
        "en": "VPC ID",
        "zh-cn": "VPC ID"
      },
      "Description": {
        "en": "Search for the ID that starts with vpc-xxx in the console under Virtual Private Cloud.",
        "zh-cn": "Find the ID of your existing VPC in the console under Virtual Private Cloud."
      },
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitch": {
      "Type": "String",
      "Label": {
        "en": "VSwitch ID",
        "zh-cn": "VSwitch ID"
      },
      "Description": {
        "en": "Existing VSwitch ID. Find it in the console under VPC > vSwitch. <font color='red'>The VSwitch must be in the selected VPC. ECS instances will be created in this VSwitch.</font>",
        "zh-cn": "Find the ID of your existing VSwitch in the console under VPC > vSwitch. <font color='red'>The VSwitch must be in the selected VPC. ECS instances will be created in this VSwitch.</font>"
      },
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VPC}",
        "ZoneId": "${ECSZoneId}"
      }
    },
    "SecurityGroup": {
      "Type": "String",
      "Label": {
        "en": "Business Security Group ID",
        "zh-cn": "Business Security Group ID"
      },
      "Description": {
        "en": "Search for the business security group ID that starts with sg-xxx in the console under ECS > Network & Security.",
        "zh-cn": "Find the ID of your existing business security group in the console under ECS > Network & Security > Security Groups. <font color='red'>The security group must belong to the selected VPC.</font>"
      },
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VPC}"
      }
    },
    "EIPBandwidth": {
      "Type": "Number",
      "Label": {
        "en": "EIP Bandwidth",
        "zh-cn": "EIP Bandwidth"
      },
      "Description": {
        "en": "EIP bandwidth. Valid values: 1 to 200. Unit: Mbps.",
        "zh-cn": "Elastic IP address bandwidth. Valid values: 1 to 200. Unit: Mbps."
      },
      "Default": 1,
      "MinValue": 1,
      "MaxValue": 200
    },
    "EIPInternetChargeType": {
      "Type": "String",
      "Label": {
        "en": "EIP Charge Type",
        "zh-cn": "Internet Charge Type"
      },
      "AssociationPropertyMetadata": {
        "LocaleKey": "InternetChargeType"
      },
      "Default": "PayByTraffic",
      "AllowedValues": [
        "PayByBandwidth",
        "PayByTraffic"
      ]
    },
    "Count": {
      "Type": "Number",
      "Label": {
        "en": "Count",
        "zh-cn": "Amount"
      },
      "Description": {
        "en": "Number of ECS instances and EIPs to create. Valid values: 1 to 140.",
        "zh-cn": "Number of ECS instances and EIPs to create. Valid values: 1 to 140."
      },
      "Default": 2,
      "MinValue": 1,
      "MaxValue": 140
    },
    "ECSZoneId": {
      "Type": "String",
      "Label": {
        "en": "VSwitch Availability Zone",
        "zh-cn": "VSwitch Availability Zone"
      },
      "Description": {
        "en": "Availability zone ID. <br><b>Note: <font color='blue'>Before you select an availability zone, confirm that it supports the instance type you plan to use. We recommend choosing a different availability zone than other VSwitches.</font><br/><font color='red'>The availability zone of the VSwitch and the selected VSwitch ID must match.</font>",
        "zh-cn": "Availability zone ID. <br><b>Note: <font color='blue'>Before you select an availability zone, confirm that it supports the instance type you plan to use. We recommend choosing a different availability zone than other VSwitches.</font><br/><font color='red'>The availability zone of the VSwitch and the selected VSwitch ID must match.</font>"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    },
    "ECSImageId": {
      "Type": "String",
      "Label": {
        "en": "Image",
        "zh-cn": "Image"
      },
      "Description": {
        "en": "Image ID. Use CentOS 7. For details, see <b><a href='https://www.alibabacloud.com/help/en/doc-detail/112977.html' target='_blank'><font color='blue'>Find an image</font></a>.",
        "zh-cn": "Image ID. Use CentOS 7. For details, see <b><a href='https://www.alibabacloud.com/help/document_detail/112977.html' target='_blank'><font color='blue'>Find an image</font></a>"
      },
      "AssociationProperty": "ALIYUN::ECS::Image::ImageId",
      "AssociationPropertyMetadata": {
        "InstanceType": "${ECSInstanceType}",
        "SupportedImageOwnerAlias": [
          "system",
          "self",
          "others"
        ]
      },
      "Default": "centos_7_04_64_20G_alibase_201701015.vhd"
    },
    "ECSInstanceType": {
      "Type": "String",
      "Label": {
        "en": "Instance Type",
        "zh-cn": "Instance Type"
      },
      "Description": {
        "en": "<font color='blue'>1. Before selecting an instance type, confirm that it is available in the selected availability zone. Some instance types require advance notice.</font><font color='blue'><b>2. Available instance types</font><br></font>[ecs.c5.large <font color='green'>2 vCPUs, 4 GiB memory, 1 Gbps internal bandwidth, 30 million PPS</font>]<br/>[ecs.c5.xlarge <font color='green'>4 vCPUs, 8 GiB memory, 1.5 Gbps internal bandwidth, 50 million PPS</font>]<br/>[ecs.c5.2xlarge <font color='green'>8 vCPUs, 16 GiB memory, 2.5 Gbps internal bandwidth, 80 million PPS</font>]",
        "zh-cn": "<font color='blue'><b>1. Before selecting an instance type, confirm that it is available in the selected availability zone. Some instance types require advance notice.</font><font color='blue'><b>2. Available instance types</font><br></font>[ecs.c5.large <font color='green'>2 vCPUs, 4 GiB memory, 1 Gbps internal bandwidth, 300,000 PPS</font>]<br/>[ecs.c5.xlarge <font color='green'>4 vCPUs, 8 GiB memory, 1.5 Gbps internal bandwidth, 500,000 PPS</font>]<br/>[ecs.c5.2xlarge <font color='green'>8 vCPUs, 16 GiB memory, 2.5 Gbps internal bandwidth, 800,000 PPS</font>]"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "ECSZoneId"
      }
    },
    "ECSDiskCategory": {
      "Type": "String",
      "Label": {
        "en": "System Disk Type",
        "zh-cn": "System Disk Type"
      },
      "Description": {
        "en": "<font color='blue'><b>Valid values:</font><br/>[cloud_efficiency: <font color='green'>Ultra disk</font>]<br>[cloud_ssd: <font color='green'>Standard SSD</font>]<br>[cloud_essd: <font color='green'>Enterprise SSD</font>]<br>[cloud: <font color='green'>Basic disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD disk</font>]",
        "zh-cn": "<font color='blue'><b>Valid values:</font><br>[cloud_efficiency: <font color='green'>Ultra disk</font>]<br>[cloud_ssd: <font color='green'>Standard SSD</font>]<br>[cloud_essd: <font color='green'>Enterprise SSD</font>]<br>[cloud: <font color='green'>Basic disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD disk</font>]"
      },
      "AssociationProperty": "ALIYUN::ECS::Disk::SystemDiskCategory",
      "AssociationPropertyMetadata": {
        "LocaleKey": "DiskCategory",
        "InstanceType": "${ECSInstanceType}"
      }
    },
    "ECSSysDiskSize": {
      "Type": "Number",
      "Label": {
        "en": "System Disk Space",
        "zh-cn": "System Disk Space"
      },
      "Description": {
        "en": "System disk size. Valid values: 40 to 500. Unit: GB.",
        "zh-cn": "System disk size. Valid values: 40 to 500. Unit: GB."
      },
      "Default": 40,
      "MinValue": 40,
      "MaxValue": 500
    },
    "ECSPassword": {
      "Type": "String",
      "NoEcho": true,
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "Description": {
        "en": "Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.",
        "zh-cn": "Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/."
      },
      "ConstraintDescription": {
        "en": "Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.",
        "zh-cn": "Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters such as ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/."
      },
      "Default": null,
      "AssociationProperty": "ALIYUN::ECS::Instance::Password"
    },
    "KeyPairName": {
      "Type": "String",
      "Label": {
        "en": "Key Pair Name",
        "zh-cn": "Key Pair Name"
      },
      "Description": {
        "en": "Ignore this parameter if you are creating a Windows ECS instance. The default value is empty.<br>If you specify a <font color='green'>key pair name</font>, the <font color='green'>instance password</font> is still set on the instance, but password-based logon is disabled for Linux instances.<br><font color='red'>Enter the name of an existing key pair. If you use the instance password to log on, leave this field blank.</font>",
        "zh-cn": "Ignore this parameter if you are creating a Windows ECS instance. The default value is empty.<br>If you specify a <font color='green'>key pair name</font>, the <font color='green'>instance password</font> is still set on the instance, but password-based logon is disabled for Linux instances.<br><font color='red'>Enter the name of an existing key pair. If you use the instance password to log on, leave this field blank.</font>"
      },
      "AssociationProperty": "ALIYUN::ECS::KeyPair::KeyPairName",
      "Default": null
    },
    "PayType": {
      "Type": "String",
      "Label": {
        "en": "ECS Instance Charge Type",
        "zh-cn": "ECS Charge Type"
      },
      "AssociationProperty": "ChargeType",
      "AssociationPropertyMetadata": {
        "LocaleKey": "InstanceChargeType"
      },
      "Default": "PostPaid",
      "AllowedValues": [
        "PostPaid",
        "PrePaid"
      ]
    },
    "PayPeriodUnit": {
      "Type": "String",
      "Label": {
        "en": "Pay Period Unit",
        "zh-cn": "Purchase Duration Unit"
      },
      "AssociationProperty": "PayPeriodUnit",
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${PayType}",
                "PostPaid"
              ]
            }
          }
        }
      },
      "Default": "Month",
      "AllowedValues": [
        "Month",
        "Year"
      ]
    },
    "PayPeriod": {
      "Type": "Number",
      "Label": {
        "en": "Period",
        "zh-cn": "Purchase Duration"
      },
      "AssociationProperty": "PayPeriod",
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${PayType}",
                "PostPaid"
              ]
            }
          }
        }
      },
      "Default": 1,
      "AllowedValues": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    }
  },
  "Resources": {
    "ECSInstanceGroup": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "ZoneId": {
          "Ref": "ECSZoneId"
        },
        "VpcId": {
          "Ref": "VPC"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroup"
        },
        "ImageId": {
          "Ref": "ECSImageId"
        },
        "AllocatePublicIP": "false",
        "InstanceChargeType": {
          "Ref": "PayType"
        },
        "Period": {
          "Ref": "PayPeriod"
        },
        "PeriodUnit": {
          "Ref": "PayPeriodUnit"
        },
        "InstanceType": {
          "Ref": "ECSInstanceType"
        },
        "IoOptimized": "optimized",
        "KeyPairName": {
          "Ref": "KeyPairName"
        },
        "MaxAmount": {
          "Ref": "Count"
        },
        "Password": {
          "Ref": "ECSPassword"
        },
        "SystemDiskCategory": {
          "Ref": "ECSDiskCategory"
        },
        "SystemDiskSize": {
          "Ref": "ECSSysDiskSize"
        }
      }
    },
    "ElasticIp": {
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "Bandwidth": {
          "Ref": "EIPBandwidth"
        },
        "InternetChargeType": {
          "Ref": "EIPInternetChargeType"
        }
      },
      "Count": {
        "Ref": "Count"
      }
    },
    "ElasticIpAssociation": {
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Fn::Select": [
            {
              "Ref": "ALIYUN::Index"
            },
            {
              "Fn::GetAtt": [
                "ECSInstanceGroup",
                "InstanceIds"
              ]
            }
          ]
        },
        "AllocationId": {
          "Fn::Select": [
            {
              "Ref": "ALIYUN::Index"
            },
            {
              "Ref": "ElasticIp"
            }
          ]
        }
      },
      "Count": {
        "Ref": "Count"
      }
    }
  },
  "Outputs": {
    "EipAddress": {
      "Description": "IP address of created EIP.",
      "Value": {
        "Fn::GetAtt": [
          "ElasticIp",
          "EipAddress"
        ]
      }
    },
    "SecurityGroupId": {
      "Description": "generated security group id for security group.",
      "Value": {
        "Ref": "SecurityGroup"
      }
    },
    "VSwitchId": {
      "Description": "generated security vswitch id for VPC.",
      "Value": {
        "Ref": "VSwitch"
      }
    },
    "VpcId": {
      "Description": "generated security vpc id for VPC.",
      "Value": {
        "Ref": "VPC"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "VPC",
            "ECSZoneId",
            "VSwitch",
            "SecurityGroup"
          ],
          "Label": {
            "default": "VPC "
          }
        },
        {
          "Parameters": [
            "EIPBandwidth",
            "EIPInternetChargeType"
          ],
          "Label": {
            "default": "EIP"
          }
        },
        {
          "Parameters": [
            "PayType",
            "PayPeriodUnit",
            "PayPeriod"
          ],
          "Label": {
            "default": {
              "en": "ECS PayType Configuration",
              "zh-cn": "ECS Charge Type Configuration"
            }
          }
        },
        {
          "Parameters": [
            "ECSInstanceType",
            "ECSImageId",
            "ECSDiskCategory",
            "ECSSysDiskSize",
            "Count",
            "ECSPassword",
            "KeyPairName"
          ],
          "Label": {
            "default": "ECS"
          }
        }
      ]
    }
  }
}
```

### **Scenario 3: Attach multiple EIPs to a single ECS instance**

[Create now](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/vpc/eip-association-case3.yml&pageTitle=Create%20or%20select%20existing%20single%20ECS%20instance%20bind%20multiple%20EIP&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  en: Provision a specified number of ECS instances within a designated VPC, equipped with EIPs, billed by configuration and bandwidth usage, and placed in the specified vSwitch and security group.
Parameters:
  VPC:
    Type: String
    Label:
      en: VPC ID
    Description:
      en: The ID of your VPC. Find the ID that starts with vpc- in the Virtual Private Cloud console.
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitch:
    Type: String
    Label:
      en: VSwitch ID
    Description:
      en: The ID of an existing vSwitch. Find the ID in the console under VPC > vSwitches. <font color='red'>The vSwitch must be in the selected VPC. The ECS instance will be created in this vSwitch.</font>
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VPC}
      ZoneId: ${ECSZoneId}
  SecurityGroup:
    Type: String
    Label:
      en: Business Security Group ID
    Description:
      en: The ID of an existing security group. Find the ID that starts with sg- in the console under ECS > Network & Security > Security Groups. <font color='red'>The security group must be in the selected VPC.</font>
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VPC}
  EIPBandwidth:
    Type: Number
    Label:
      en: EIP Bandwidth
    Description:
      en: 'The bandwidth of the EIP. The value can be from 1 to 200. The unit is Mbps.'
    Default: 1
    MinValue: 1
    MaxValue: 200
  EIPInternetChargeType:
    Type: String
    Label:
      en: EIP Charge Type
    AssociationPropertyMetadata:
      LocaleKey: InternetChargeType
    Default: PayByTraffic
    AllowedValues:
      - PayByBandwidth
      - PayByTraffic
  Count:
    Type: Number
    Label:
      en: Count
    Description:
      en: 'The number of ECS instances and EIPs to create. The value can be from 1 to 140.'
    Default: 2
    MinValue: 1
    MaxValue: 140
  ECSZoneId:
    Type: String
    Label:
      en: VSwitch Availability Zone
    Description:
      en: 'The ID of the zone.<br><b>Note: <font color=''blue''>Before you select a zone, confirm that it supports the instance type for the ECS resources you want to create. We recommend you select a different zone from other vSwitches.</font></b ><br><font color=''red''>The zone and the selected vSwitch must be the same.</font>'
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  ECSImageId:
    Type: String
    Label:
      en: Image
    Description:
      en: The ID of the image. Use a CentOS 7 image. For more information, see <b><a href='https://www.alibabacloud.com/help/en/doc-detail/112977.html' target='_blank'><font color='blue'>Find an image</font></a>
    AssociationProperty: ALIYUN::ECS::Image::ImageId
    AssociationPropertyMetadata:
      InstanceType: ${ECSInstanceType}
      SupportedImageOwnerAlias:
        - system
        - self
        - others
    Default: centos_7_04_64_20G_alibase_201701015.vhd
  ECSInstanceType:
    Type: String
    Label:
      en: Instance Type
    Description:
      en: <font color='blue'>1. Before you select an instance type, confirm that it is in stock in the current zone. Some instance types require you to apply for them in advance.</font><font color='blue'><b>2. Available instance types:</font><br></font>[ecs.c5.large <font color='green'>2 vCPU, 4 GiB, 1 Gbps internal bandwidth, 300,000 PPS</font>][ecs.c5.xlarge <font color='green'>4 vCPU, 8 GiB, 1.5 Gbps internal bandwidth, 500,000 PPS</font>][ecs.c5.2xlarge <font color='green'>8 vCPU, 16 GiB, 2.5 Gbps internal bandwidth, 800,000 PPS</font>]
    AssociationProperty: ALIYUN::ECS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: ECSZoneId
  ECSDiskCategory:
    Type: String
    Label:
      en: System Disk Type
    Description:
      en: '<font color=''blue''>Available values:</font><br>[cloud_efficiency: <font color=''green''>Ultra disk</font>]<br>[cloud_ssd: <font color=''green''>Standard SSD</font>]<br>[cloud_essd: <font color=''green''>ESSD</font>]<br>[cloud: <font color=''green''>Basic disk</font>]<br>[ephemeral_ssd: <font color=''green''>Local SSD</font>]'
    AssociationProperty: ALIYUN::ECS::Disk::SystemDiskCategory
    AssociationPropertyMetadata:
      LocaleKey: DiskCategory
      InstanceType: ${ECSInstanceType}
  ECSSysDiskSize:
    Type: Number
    Label:
      en: System Disk Space
    Description:
      en: 'The size of the system disk. The value can be from 40 to 500. The unit is GB.'
    Default: 40
    MinValue: 40
    MaxValue: 500
  ECSPassword:
    Type: String
    NoEcho: true
    Label:
      en: Instance Password
    Description:
      en: The logon password for the server. The password must be 8 to 30 characters long and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters from the following set: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
    ConstraintDescription:
      en: The password must be 8 to 30 characters long and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters from the following set: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/.
    Default: Null
    AssociationProperty: ALIYUN::ECS::Instance::Password
  KeyPairName:
    Type: String
    Label:
      en: Key Pair Name
    Description:
      en: This parameter is ignored for Windows ECS instances. The default value is empty.<br>If you specify a <font color='green'>key pair name</font>, the <font color='green'>instance password</font> is still set for the instance, but password-based logon is disabled for the Linux system.<br><font color='red'>Enter the name of an existing key pair. If you use the instance password to log on, do not specify a key pair name.</font>
    AssociationProperty: ALIYUN::ECS::KeyPair::KeyPairName
    Default: Null
  PayType:
    Type: String
    Label:
      en: ECS Instance Charge Type
    AssociationProperty: ChargeType
    AssociationPropertyMetadata:
      LocaleKey: InstanceChargeType
    Default: PostPaid
    AllowedValues:
      - PostPaid
      - PrePaid
  PayPeriodUnit:
    Type: String
    Label:
      en: Pay Period Unit
    AssociationProperty: PayPeriodUnit
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Not:
            Fn::Equals:
              - ${PayType}
              - PostPaid
    Default: Month
    AllowedValues:
      - Month
      - Year
  PayPeriod:
    Type: Number
    Label:
      en: Period
    AssociationProperty: PayPeriod
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Not:
            Fn::Equals:
              - ${PayType}
              - PostPaid
    Default: 1
    AllowedValues:
      - 1
      - 2
      - 3
      - 4
      - 5
      - 6
      - 7
      - 8
      - 9
Resources:
  ECSInstanceGroup:
    Type: ALIYUN::ECS::InstanceGroup
    Properties:
      ZoneId:
        Ref: ECSZoneId
      VpcId:
        Ref: VPC
      VSwitchId:
        Ref: VSwitch
      SecurityGroupId:
        Ref: SecurityGroup
      ImageId:
        Ref: ECSImageId
      AllocatePublicIP: 'false'
      InstanceChargeType:
        Ref: PayType
      Period:
        Ref: PayPeriod
      PeriodUnit:
        Ref: PayPeriodUnit
      InstanceType:
        Ref: ECSInstanceType
      IoOptimized: optimized
      KeyPairName:
        Ref: KeyPairName
      MaxAmount:
        Ref: Count
      Password:
        Ref: ECSPassword
      SystemDiskCategory:
        Ref: ECSDiskCategory
      SystemDiskSize:
        Ref: ECSSysDiskSize
  ElasticIp:
    Type: ALIYUN::VPC::EIP
    Properties:
      Bandwidth:
        Ref: EIPBandwidth
      InternetChargeType:
        Ref: EIPInternetChargeType
    Count:
      Ref: Count
  ElasticIpAssociation:
    Type: ALIYUN::VPC::EIPAssociation
    Properties:
      InstanceId:
        Fn::Select:
          - Ref: ALIYUN::Index
          - Fn::GetAtt:
              - ECSInstanceGroup
              - InstanceIds
      AllocationId:
        Fn::Select:
          - Ref: ALIYUN::Index
          - Ref: ElasticIp
    Count:
      Ref: Count
Outputs:
  EipAddress:
    Description: IP address of created EIP.
    Value:
      Fn::GetAtt:
        - ElasticIp
        - EipAddress
  SecurityGroupId:
    Description: generated security group id for security group.
    Value:
      Ref: SecurityGroup
  VSwitchId:
    Description: generated security vswitch id for VPC.
    Value:
      Ref: VSwitch
  VpcId:
    Description: generated security vpc id for VPC.
    Value:
      Ref: VPC
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - VPC
          - ECSZoneId
          - VSwitch
          - SecurityGroup
        Label:
          default: 'VPC '
      - Parameters:
          - EIPBandwidth
          - EIPInternetChargeType
        Label:
          default: EIP
      - Parameters:
          - PayType
          - PayPeriodUnit
          - PayPeriod
        Label:
          default:
            en: ECS billing configuration
      - Parameters:
          - ECSInstanceType
          - ECSImageId
          - ECSDiskCategory
          - ECSSysDiskSize
          - Count
          - ECSPassword
          - KeyPairName
        Label:
          default: ECS
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Locals": {
    "DS_Eip1": {
      "Type": "DATASOURCE::EIP::Address",
      "Properties": {
        "AllocationId": {
          "Ref": "EipId1"
        }
      }
    },
    "HasEip1": {
      "Type": "Eval",
      "Value": {
        "Fn::Not": {
          "Fn::Equals": [
            {
              "Fn::Length": {
                "Ref": "DS_Eip1"
              }
            },
            0
          ]
        }
      }
    },
    "DS_Eip2": {
      "Type": "DATASOURCE::EIP::Address",
      "Properties": {
        "AllocationId": {
          "Ref": "EipId2"
        }
      }
    },
    "HasEip2": {
      "Type": "Eval",
      "Value": {
        "Fn::Not": {
          "Fn::Equals": [
            {
              "Fn::Length": {
                "Ref": "DS_Eip2"
              }
            },
            0
          ]
        }
      }
    },
    "DS_Eip3": {
      "Type": "DATASOURCE::EIP::Address",
      "Properties": {
        "AllocationId": {
          "Ref": "EipId3"
        }
      }
    },
    "HasEip3": {
      "Type": "Eval",
      "Value": {
        "Fn::Not": {
          "Fn::Equals": [
            {
              "Fn::Length": {
                "Ref": "DS_Eip3"
              }
            },
            0
          ]
        }
      }
    }
  },
  "Parameters": {
    "EcsCondition": {
      "Type": "String",
      "Label": {
        "en": "Create an ECS instance, EIP, and ENI"
      },
      "AllowedValues": [
        "Use existing ECS instance, EIP, and ENI",
        "Create new ECS instance, EIP, and ENI"
      ],
      "Default": "Use existing ECS instance, EIP, and ENI"
    },
    "EcsInstanceId": {
      "Type": "String",
      "Default": null,
      "Label": {
        "en": "ECS Instance ID"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceId",
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Create new ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    },
    "ECSNetworkInterfaceId": {
      "Type": "String",
      "Default": null,
      "Label": {
        "en": "ECS Network Interface ID"
      },
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Create new ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    },
    "EipId1": {
      "Type": "String",
      "Default": null,
      "AssociationProperty": "ALIYUN::VPC::EIP::AllocationId",
      "Label": {
        "en": "EIP 1 Instance ID"
      },
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Create new ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    },
    "EipId2": {
      "Type": "String",
      "Default": null,
      "AssociationProperty": "ALIYUN::VPC::EIP::AllocationId",
      "Label": {
        "en": "EIP 2 Instance ID"
      },
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Create new ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    },
    "EipId3": {
      "Type": "String",
      "Default": null,
      "AssociationProperty": "ALIYUN::VPC::EIP::AllocationId",
      "Label": {
        "en": "EIP 3 Instance ID"
      },
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Create new ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    },
    "SystemDiskCategory": {
      "Default": null,
      "AssociationProperty": "ALIYUN::ECS::Disk::SystemDiskCategory",
      "AssociationPropertyMetadata": {
        "InstanceType": "${InstanceType}",
        "ZoneId": "${ZoneId}",
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Use existing ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      },
      "Type": "String",
      "Description": {
        "en": "<font color='blue'>Available values:</font>[cloud_efficiency: <font color='green'>Ultra disk</font>]<br>[cloud_ssd: <font color='green'>Standard SSD</font>]<br>[cloud_essd: <font color='green'>ESSD</font>]<br>[cloud: <font color='green'>Basic disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD</font>]"
      },
      "Label": {
        "en": "System Disk Category"
      }
    },
    "InstancePassword": {
      "ConstraintDescription": {
        "en": "The password must be 8 to 30 characters long and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include the following: ()`~!@#$%^&*_-+=|{}[]:;' <>,.?/"
      },
      "Description": {
        "en": "The logon password for the instance. The password must be 8 to 30 characters long and contain at least three of the following character types: uppercase letters, lowercase letters, and digits. <br> Special characters include the following: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "MinLength": "8",
      "Label": {
        "en": "Instance Password"
      },
      "AllowedPattern": "[0-9A-Za-z\\_\\-&:;'<>,=%`~!@#\\(\\)\\$\\^\\*\\+\\|\\{\\}\\[\\]\\.\\?\\/]+$",
      "NoEcho": true,
      "Default": null,
      "MaxLength": "30",
      "Type": "String",
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Use existing ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    },
    "InstanceType": {
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}",
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Use existing ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      },
      "Type": "String",
      "Default": null,
      "Label": {
        "en": "Instance Type"
      }
    },
    "ZoneId": {
      "Default": null,
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": {
        "en": "The ID of the zone.<br><b>Note: <font color='blue'>Before you select a zone, confirm that it supports the instance type for the ECS resources you want to create.</font>"
      },
      "Label": {
        "en": "Zone ID"
      },
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${EcsCondition}",
                "Use existing ECS instance, EIP, and ENI"
              ]
            }
          }
        }
      }
    }
  },
  "Resources": {
    "DS_Instances": {
      "Condition": "HasEcs",
      "Type": "DATASOURCE::ECS::Instances",
      "Properties": {
        "InstanceIds": [
          {
            "Ref": "EcsInstanceId"
          }
        ]
      }
    },
    "DS_NetworkInterfaces": {
      "Condition": "HasEcs",
      "Type": "DATASOURCE::ECS::NetworkInterfaces",
      "Properties": {
        "NetworkInterfaceIds": [
          {
            "Ref": "ECSNetworkInterfaceId"
          }
        ]
      }
    },
    "AssignPrivateIpAddresses": {
      "Type": "ALIYUN::ECS::AssignPrivateIpAddresses",
      "Properties": {
        "NetworkInterfaceId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsENI",
                "NetworkInterfaceId"
              ]
            },
            {
              "Ref": "ECSNetworkInterfaceId"
            }
          ]
        },
        "SecondaryPrivateIpAddressCount": 2
      }
    },
    "EipAssociationPrimaryPrivateIp": {
      "DependsOn": [
        "AssignPrivateIpAddresses"
      ],
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Condition": "EipAssociation1",
      "Properties": {
        "InstanceId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsENI",
                "NetworkInterfaceId"
              ]
            },
            {
              "Ref": "ECSNetworkInterfaceId"
            }
          ]
        },
        "AllocationId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "Eip1",
                "AllocationId"
              ]
            },
            {
              "Ref": "EipId1"
            }
          ]
        },
        "PrivateIpAddress": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsENI",
                "PrivateIpAddress"
              ]
            },
            {
              "Fn::Jq": [
                "First",
                ".[0].PrivateIpAddress",
                {
                  "Fn::GetAtt": [
                    "DS_NetworkInterfaces",
                    "NetworkInterfaces"
                  ]
                }
              ]
            }
          ]
        },
        "Mode": "NAT"
      }
    },
    "EipAssociationSecondaryPrivateIp1": {
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Condition": "EipAssociation2",
      "DependsOn": [
        "EipAssociationPrimaryPrivateIp"
      ],
      "Properties": {
        "InstanceId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsENI",
                "NetworkInterfaceId"
              ]
            },
            {
              "Ref": "ECSNetworkInterfaceId"
            }
          ]
        },
        "AllocationId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "Eip2",
                "AllocationId"
              ]
            },
            {
              "Ref": "EipId2"
            }
          ]
        },
        "PrivateIpAddress": {
          "Fn::Select": [
            "0",
            {
              "Fn::GetAtt": [
                "AssignPrivateIpAddresses",
                "PrivateIpAddresses"
              ]
            }
          ]
        },
        "Mode": "NAT"
      }
    },
    "EipAssociationSecondaryPrivateIp2": {
      "DependsOn": [
        "EipAssociationSecondaryPrivateIp1"
      ],
      "Condition": "EipAssociation3",
      "Type": "ALIYUN::VPC::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsENI",
                "NetworkInterfaceId"
              ]
            },
            {
              "Ref": "ECSNetworkInterfaceId"
            }
          ]
        },
        "AllocationId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "Eip3",
                "AllocationId"
              ]
            },
            {
              "Ref": "EipId3"
            }
          ]
        },
        "PrivateIpAddress": {
          "Fn::Select": [
            "1",
            {
              "Fn::GetAtt": [
                "AssignPrivateIpAddresses",
                "PrivateIpAddresses"
              ]
            }
          ]
        },
        "Mode": "NAT"
      }
    },
    "EcsEniAttachment": {
      "DependsOn": [
        "EipAssociationPrimaryPrivateIp",
        "EipAssociationSecondaryPrivateIp1",
        "EipAssociationSecondaryPrivateIp2"
      ],
      "Type": "ALIYUN::ECS::NetworkInterfaceAttachment",
      "Properties": {
        "InstanceId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsInstance",
                "InstanceId"
              ]
            },
            {
              "Ref": "EcsInstanceId"
            }
          ]
        },
        "NetworkInterfaceId": {
          "Fn::If": [
            "CreateEcs",
            {
              "Fn::GetAtt": [
                "EcsENI",
                "NetworkInterfaceId"
              ]
            },
            {
              "Ref": "ECSNetworkInterfaceId"
            }
          ]
        }
      }
    },
    "WaitConditionHandle": {
      "Type": "ALIYUN::ROS::WaitConditionHandle",
      "Properties": {}
    },
    "WaitCondition": {
      "Type": "ALIYUN::ROS::WaitCondition",
      "Properties": {
        "Handle": {
          "Ref": "WaitConditionHandle"
        },
        "Timeout": 3720,
        "Count": 1
      }
    },
    "InitEcsEni": {
      "Type": "ALIYUN::ECS::RunCommand",
      "Properties": {
        "InstanceIds": [
          {
            "Fn::If": [
              "CreateEcs",
              {
                "Fn::GetAtt": [
                  "EcsInstance",
                  "InstanceId"
                ]
              },
              {
                "Ref": "EcsInstanceId"
              }
            ]
          }
        ],
        "Type": "RunShellScript",
        "Sync": true,
        "Timeout": 3600,
        "CommandContent": {
          "Fn::Sub": [
            "#!/bin/bash\nif [ ! -f .ros.provision ]; then\n  echo \"Name: Attach multiple EIPs to an ECS instance in NAT mode (CentOS 7)\" > .ros.provision\nfi\nname=$(grep \"^Name:\" .ros.provision | awk -F':' '{print $2}' | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')\nif [[ \"$name\" != \"Attach multiple EIPs to an ECS instance in NAT mode (CentOS 7)\" ]]; then\n  echo \"This instance was already configured using the one-click settings from the \\\"$name\\\" tutorial. You cannot apply the one-click settings from this tutorial again.\"\n  ${WaitConditionHandle.CurlCli} --data-binary \"{\\\"status\\\": \\\"FAILURE\\\", \\\"reason\\\": \\\"This instance was already configured using the \\\\\\\"$name\\\\\\\" tutorial. The configuration from this tutorial cannot be applied again.\\\"}\"\n  exit 0\nfi\nsecondary_eni=`ip address show | grep eth | grep DOWN | awk -F: '{print $2}'`\nsecondary_eni_name=`eval echo \"$secondary_eni\"`\nif [[ \"$secondary_eni_name\" != \"\" ]]; then\n  echo \"#########################\"\n  echo \"# The secondary ENI is not fully configured\"\n  echo \"#########################\"\n  secondary_eni_mac=`cat /sys/class/net/\"$secondary_eni_name\"/address`\n  echo \"DEVICE=$secondary_eni_name\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"BOOTPROTO=dhcp\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"ONBOOT=yes\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"TYPE=Ethernet\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"USERCTL=yes\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"PEERDNS=no\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"IPV6INIT=no\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"PERSISTENT_DHCLIENT=yes\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"HWADDR=$secondary_eni_mac\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  echo \"DEFROUTE=no\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\"\n  systemctl restart network\nelse\n    echo \"#########################\"\n    echo \"# Secondary ENI has been configured\"\n    echo \"#########################\"\nfi\nnetmask_address=`ifconfig \"$secondary_eni_name\"| grep netmask | awk '{print $4}'`\necho \"DEVICE=$secondary_eni_name:0\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":0\necho \"TYPE=Ethernet\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":0\necho \"BOOTPROTO=static\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":0\necho \"ONBOOT=yes\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":0\necho \"IPADDR=${PrivateIpAddresses1}\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":0\necho \"NETMASK=$netmask_address\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":0\necho \"DEVICE=$secondary_eni_name:1\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":1\necho \"TYPE=Ethernet\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":1\necho \"BOOTPROTO=static\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":1\necho \"ONBOOT=yes\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":1\necho \"IPADDR=${PrivateIpAddresses2}\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":1\necho \"NETMASK=$netmask_address\" >> /etc/sysconfig/network-scripts/ifcfg-\"$secondary_eni_name\":1\nsystemctl restart network\necho \"# Secondary ENI PrivateIpAddresses has been configured\"\n${WaitConditionHandle.CurlCli} --data-binary '{\"status\": \"SUCCESS\"}'\n",
            {
              "PrivateIpAddresses1": {
                "Fn::Select": [
                  "0",
                  {
                    "Fn::GetAtt": [
                      "AssignPrivateIpAddresses",
                      "PrivateIpAddresses"
                    ]
                  }
                ]
              },
              "PrivateIpAddresses2": {
                "Fn::Select": [
                  "1",
                  {
                    "Fn::GetAtt": [
                      "AssignPrivateIpAddresses",
                      "PrivateIpAddresses"
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      "DependsOn": [
        "EcsEniAttachment"
      ]
    },
    "EcsVpc": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "EcsVSwitch": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Condition": "CreateEcs",
      "Properties": {
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.1.0/24",
        "ZoneId": {
          "Ref": "ZoneId"
        }
      }
    },
    "EcsSecurityGroup": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "VpcId": {
          "Ref": "EcsVpc"
        }
      }
    },
    "EcsInstance": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::ECS::Instance",
      "Properties": {
        "SystemDiskCategory": {
          "Ref": "SystemDiskCategory"
        },
        "VpcId": {
          "Fn::GetAtt": [
            "EcsVpc",
            "VpcId"
          ]
        },
        "AllocatePublicIP": false,
        "SecurityGroupId": {
          "Ref": "EcsSecurityGroup"
        },
        "ImageId": "centos_7",
        "VSwitchId": {
          "Ref": "EcsVSwitch"
        },
        "Password": {
          "Ref": "InstancePassword"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        }
      }
    },
    "EcsENI": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::ECS::NetworkInterface",
      "Properties": {
        "VSwitchId": {
          "Ref": "EcsVSwitch"
        },
        "SecurityGroupId": {
          "Ref": "EcsSecurityGroup"
        }
      }
    },
    "Eip1": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "InstanceChargeType": "Postpaid",
        "InternetChargeType": "PayByTraffic"
      }
    },
    "Eip2": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "InstanceChargeType": "Postpaid",
        "InternetChargeType": "PayByTraffic"
      }
    },
    "Eip3": {
      "Condition": "CreateEcs",
      "Type": "ALIYUN::VPC::EIP",
      "Properties": {
        "InstanceChargeType": "Postpaid",
        "InternetChargeType": "PayByTraffic"
      }
    }
  },
  "Outputs": {},
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "EcsCondition",
            "EcsInstanceId",
            "ZoneId",
            "InstanceType",
            "SystemDiskCategory",
            "InstancePassword",
            "ECSNetworkInterfaceId",
            "EipId1",
            "EipId2",
            "EipId3"
          ]
        }
      ]
    }
  },
  "Conditions": {
    "CreateEcs": {
      "Fn::Equals": [
        "Create new ECS instance, EIP, and ENI",
        {
          "Ref": "EcsCondition"
        }
      ]
    },
    "HasEcs": {
      "Fn::Equals": [
        "Use existing ECS instance, EIP, and ENI",
        {
          "Ref": "EcsCondition"
        }
      ]
    },
    "HasEip1": {
      "Ref": "HasEip1"
    },
    "HasEip2": {
      "Ref": "HasEip2"
    },
    "HasEip3": {
      "Ref": "HasEip3"
    },
    "EipAssociation1": {
      "Fn::Or": [
        "CreateEcs",
        "HasEip1"
      ]
    },
    "EipAssociation2": {
      "Fn::Or": [
        "CreateEcs",
        "HasEip2"
      ]
    },
    "EipAssociation3": {
      "Fn::Or": [
        "CreateEcs",
        "HasEip3"
      ]
    }
  },
  "Description": {
    "en": "Attach multiple EIPs to a CentOS 7 ECS instance using a secondary ENI."
  }
}
```

For more examples, see [public templates that include this resource.](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::VPC::EIPAssociation)
