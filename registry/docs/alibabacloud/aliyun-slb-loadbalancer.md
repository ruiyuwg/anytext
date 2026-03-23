Use the ALIYUN::SLB::LoadBalancer resource type to create an SLB instance.

## Syntax

```
{
  "Type": "ALIYUN::SLB::LoadBalancer",
  "Properties": {
    "DeletionProtection": Boolean,
    "AddressType": String,
    "Tags": List,
    "InternetChargeType": String,
    "Bandwidth": Integer,
    "SlaveZoneId": String,
    "ResourceGroupId": String,
    "VpcId": String,
    "LoadBalancerName": String,
    "VSwitchId": String,
    "LoadBalancerSpec": String,
    "MasterZoneId": String,
    "ModificationProtectionReason": String,
    "ModificationProtectionStatus": String,
    "AddressIPVersion": String,
    "InstanceChargeType": String
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

ResourceGroupId

String

No

Yes

The ID of the resource group.

None

DeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection.

Valid values:

-   true: enables deletion protection.
    
-   false (default): disables deletion protection.
    

VpcId

String

No

No

The ID of the VPC.

None

SlaveZoneId

String

No

No

The zone ID of the SLB instance.

None

Bandwidth

Integer

No

Yes

The peak bandwidth for public instances that use the pay-by-bandwidth billing method.

Valid values: 1 to 10000.

Unit: Mbit/s.

Default value: 1.

For VPC instances, this parameter is set to pay-by-data-transfer by default.

-   For public instances that use the pay-by-bandwidth billing method, you must allocate the specified bandwidth value to listeners using the Bandwidth parameter in each listener before the setting takes effect.
    
-   For public instances that use the pay-by-data-transfer billing method, specify the peak bandwidth directly using the Bandwidth parameter in each listener. This parameter is ignored.
    

AddressType

String

No

No

The address type of the SLB instance.

Valid values:

-   internet (default): The SLB instance has a public IP address. Its domain name resolves to the public IP address. You can access the SLB instance over the Internet.
    
-   intranet: The SLB instance has only a private IP address. Its domain name resolves to the private IP address. You can access the SLB instance only from resources in the same VPC.
    

VSwitchId

String

No

No

The ID of the vSwitch.

None

LoadBalancerName

String

No

Yes

The name of the SLB instance.

Length: 1 to 80 characters. Valid characters include letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

If you do not specify this parameter, the system assigns a name automatically.

InternetChargeType

String

No

Yes

The billing method for public instances.

Valid values:

-   paybybandwidth: pay-by-bandwidth.
    
-   paybytraffic (default): pay-by-data-transfer.
    

MasterZoneId

String

No

No

The primary zone ID of the instance.

None

Tags

List

No

Yes

The tags of the SLB instance.

You can add up to five tags.

For more information, see [Tags property](/help/en/ros/developer-reference/aliyun-slb-loadbalancerclone#section-yi0-9mi-nsy).

LoadBalancerSpec

String

No

Yes

The specification of the SLB instance.

Valid values:

-   slb.s1.small (default)
    
-   slb.s2.small
    
-   slb.s2.medium
    
-   slb.s3.small
    
-   slb.s3.medium
    
-   slb.s3.large
    
-   slb.s3.xlarge
    
-   slb.s3.xxlarge
    

Supported specifications vary by region. For details about each specification, see [guaranteed-performance instance](/help/en/slb/classic-load-balancer/user-guide/faq-about-clb-2).

ModificationProtectionStatus

String

No

Yes

You can modify the protection status.

Valid values:

-   NonProtection (default): disables modification protection.
    
-   ConsoleProtection: allows modifications through the console.
    

ModificationProtectionReason

String

No

Yes

The reason for enabling modification protection.

Length: 1 to 80 characters. Must start with a letter or Chinese character. Valid characters include letters, Chinese characters, digits, periods (.), and hyphens (-).

AddressIPVersion

String

No

No

The IP version.

Valid values:

-   ipv4
    
-   ipv6
    
    **Note**
    
    If you specify ipv6, check supported regions and limits.
    

InstanceChargeType

String

No

Yes

The billing method for the instance.

Valid values:

-   PayBySpec (default): pay-by-specification.
    
-   PayByCLCU: You are charged for the instance based on its Load Balancer Capacity Unit (LCU).
    

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String 
  }
]
```

## Tags property

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

Length: 1 to 64 characters. Cannot start with `aliyun` or `acs:`. Cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

Length: 0 to 128 characters. Cannot start with `aliyun` or `acs:`. Cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   LoadBalancerId: the ID of the SLB instance.
    
-   NetworkType: the network type of the SLB instance.
    
-   AddressType: the address type of the SLB instance.
    
-   IpAddress: the IP address of the SLB instance.
    
-   OrderId: the order ID.
    
-   Bandwidth: the peak bandwidth.
    
-   AddressIPVersion: the IP version of the SLB instance.
    
-   SlaveZoneId: the secondary zone ID of the SLB instance.
    
-   MasterZoneId: the primary zone ID of the SLB instance.
    
-   LoadBalancerName: the name of the SLB instance.
    
-   ResourceGroupId: the ID of the resource group.
    
-   LoadBalancerSpec: the specification of the SLB instance.
    
-   VpcId: the ID of the VPC to which the SLB instance belongs.
    
-   VSwitchId: the ID of the vSwitch to which the SLB instance belongs.
    
-   PayType: the billing method of the instance.
    

## Examples

### **Scenario 1:** Create an SLB instance.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/load-balancer-case1.yml&pageTitle=Create%20an%20SLB%20instance&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test SLB LoadBalancer
Parameters:
  MasterZoneId:
    Type: String
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
Resources:
  LoadBalance:
    Type: ALIYUN::SLB::LoadBalancer
    Properties:
      AddressType: internet
      LoadBalancerSpec: slb.s1.small
      MasterZoneId:
        Ref: MasterZoneId
      LoadBalancerName: mytest
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test SLB LoadBalancer",
  "Parameters": {
    "MasterZoneId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    }
  },
  "Resources": {
    "LoadBalance": {
      "Type": "ALIYUN::SLB::LoadBalancer",
      "Properties": {
        "AddressType": "internet",
        "LoadBalancerSpec": "slb.s1.small",
        "MasterZoneId": {
          "Ref": "MasterZoneId"
        },
        "LoadBalancerName": "mytest"
      }
    }
  },
  "Outputs": {
  }
}
```

### **Scenario 2:** Create an ECS instance group and attach it to an SLB instance.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/load-balancer-case2.yml&pageTitle=Create%20an%20ECS%20instance%20group%20and%20attach%20it%20to%20an%20SLB%20instance&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  en: Create an ECS instance group with flexible configuration and automatically bind to three SLB instances to achieve load balancing.
Parameters:
  ZoneId:
    Type: String
    Default: null
    Required: true
    Label:
      en: Availability Zone
    AssociationProperty: ALIYUN::ECS::Instance::ZoneId
    AssociationPropertyMetadata:
      AutoSelectFirst: true
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId}
      VpcId: ${VpcId}
  SecurityGroupId:
    Type: String
    Label:
      en: Business Security Group ID
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
  InstanceType:
    Type: String
    Label: ECS Instance Type
    AssociationProperty: ALIYUN::ECS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: ZoneId
  Password:
    Type: String
    Label: ECS Instance Password
    AssociationProperty: ALIYUN::ECS::Instance::Password
  SlbInstanceId:
    AssociationProperty: ALIYUN::SLB::LoadBalancer::LoadBalancerId
    Type: String
Resources:
  InstanceGroup:
    Type: ALIYUN::ECS::InstanceGroup
    Properties:
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      SecurityGroupId:
        Ref: SecurityGroupId
      ImageId: centos_7
      AllocatePublicIP: 'false'
      MaxAmount: 2
      Password:
        Ref: Password
      InstanceType:
        Ref: InstanceType
      SystemDiskCategory: cloud_essd
      UserData:
        Fn::Join:
        - ''
        - - '#!/bin/sh

            '
          - 'ip_addr=`ifconfig eth0 | awk ''/inet /{print $2}''`

            '
          - 'host_name=`hostname`

            '
          - 'echo "$ip_addr $host_name" >> /etc/hosts

            '
  AttachmentECSToSLB:
    Type: ALIYUN::SLB::BackendServerAttachment
    Properties:
      LoadBalancerId:
        Ref: SlbInstanceId
      BackendServerList:
        Fn::GetAtt:
        - InstanceGroup
        - InstanceIds
      BackendServerWeightList:
      - '100'
Outputs:
  InstanceIds:
    Description: The instance id list of created ecs instance.
    Value:
      Fn::GetAtt:
      - InstanceGroup
      - InstanceIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "en": "Create an ECS instance group with flexible configuration and automatically bind to three SLB instances to achieve load balancing."
  },
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "Default": null,
      "Required": true,
      "Label": {
        "en": "Availability Zone"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "AutoSelectFirst": true
      }
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}",
        "VpcId": "${VpcId}"
      }
    },
    "SecurityGroupId": {
      "Type": "String",
      "Label": {
        "en": "Business Security Group ID"
      },
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      }
    },
    "InstanceType": {
      "Type": "String",
      "Label": "ECS Instance Type",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "ZoneId"
      }
    },
    "Password": {
      "Type": "String",
      "Label": "ECS Instance Password",
      "AssociationProperty": "ALIYUN::ECS::Instance::Password"
    },
    "SlbInstanceId": {
      "AssociationProperty": "ALIYUN::SLB::LoadBalancer::LoadBalancerId",
      "Type": "String"
    }
  },
  "Resources": {
    "InstanceGroup": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "ImageId": "centos_7",
        "AllocatePublicIP": "false",
        "MaxAmount": 2,
        "Password": {
          "Ref": "Password"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        },
        "SystemDiskCategory": "cloud_essd",
        "UserData": {
          "Fn::Join": [
            "",
            [
              "#!/bin/sh\n",
              "ip_addr=`ifconfig eth0 | awk '/inet /{print $2}'`\n",
              "host_name=`hostname`\n",
              "echo \"$ip_addr $host_name\" >> /etc/hosts\n"
            ]
          ]
        }
      }
    },
    "AttachmentECSToSLB": {
      "Type": "ALIYUN::SLB::BackendServerAttachment",
      "Properties": {
        "LoadBalancerId": {
          "Ref": "SlbInstanceId"
        },
        "BackendServerList": {
          "Fn::GetAtt": [
            "InstanceGroup",
            "InstanceIds"
          ]
        },
        "BackendServerWeightList": [
          "100"
        ]
      }
    }
  },
  "Outputs": {
    "InstanceIds": {
      "Description": "The instance id list of created ecs instance.",
      "Value": {
        "Fn::GetAtt": [
          "InstanceGroup",
          "InstanceIds"
        ]
      }
    }
  }
}
```

### **Scenario 3:** Create an e-commerce website protection plan.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/load-balancer-case3.yml&pageTitle=Create%20an%20e-commerce%20website%20protection%20plan&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  en: Develop an e-commerce website protection plan, encompassing Virtual Private Cloud (VPC), Elastic Compute Service (ECS), Server Load Balancer (SLB), and Relational Database Service (RDS) resources. Implement measures to prevent scalpers from exploiting promotions, ensuring service stability and the authenticity of discounts. Deploy across multiple availability zones for redundancy and high availability.
Parameters:
  VpcCidrBlock:
    Type: String
    Label:
      en: VPC CIDR Block
    Description:
      en: 'The IP address range of the VPC in the CIDR Block form; You can use the following IP address ranges: <br><font color=''green''>[10.0.0.0/8]</font><br><font color=''green''>[172.16.0.0/12]</font><br><font color=''green''>[192.168.0.0/16]</font>'
    Default: 192.168.0.0/16
    AllowedValues:
    - 10.0.0.0/8
    - 172.16.0.0/12
    - 192.168.0.0/16
  VSwitchZoneId:
    Type: String
    Label:
      en: Master Zone
    Description:
      en: 'Availability Zone ID;<br><b>Note: <font color=''blue''>Before selecting an availability zone, verify that it supports the required specifications for creating SLB, RDS, and ECS resources.</font>'
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  VswCidrBlock:
    Type: String
    Label:
      en: Master Zone CIDR Block
    Description:
      en: Must be a subnet segment that belongs to the VPC and is not occupied by another vSwitch.
    Default: 192.168.1.0/24
  VSwitchZoneId2:
    Type: String
    Label:
      en: Slave Zone
    Description:
      en: 'Availability Zone ID,<b>Note: <font color=''blue''>Before selecting an availability zone, verify that it supports the required specifications for creating SLB resources and differs from the primary zone.</font>'
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  VswCidrBlock2:
    Type: String
    Label:
      en: Slave Zone CIDR Block
    Description:
      en: Must be a subnet segment that belongs to the VPC and is not occupied by another vSwitch.
    Default: 192.168.2.0/24
  EcsInstanceType:
    Type: String
    Label:
      en: Instance Type
    Description:
      en: 'Enter the instance types available in the vSwitch availability zone.</b></font>General-purpose instance types: <font color=''red''><b>ecs.g5.xlarge</font>Note: Some zones do not support general-purpose instance types.<br>For details, see <a href=''https://www.alibabacloud.com/help/en/doc-detail/25378.html'' target=''_blank''><b><font color=''blue''>Instance family</font></a>'
    AssociationProperty: ALIYUN::ECS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: VSwitchZoneId
  ECSImageId:
    Type: String
    Label:
      en: Application Server Image
    Description:
      en: 'Server instance image ID. </b>[Shanghai: <font color=''green''>m-uf6j125b6mhvg27jo58a</font>]<br>[Hangzhou: <font color=''green''>m-bp1h0ys627i2ke0dx0t1</font>]<br>[Beijing: <font color=''green''>m-2zeir96eip2yw414w1jd</font>]<br>[Qingdao: <font color=''green''>m-m5e81ywnfuk84x1r7v0n</font>]<br>[Shenzhen: <font color=''green''>m-wz98u1criwvafhq3ctfm</font>]<br>[Zhangjiakou: <font color=''green''>m-8vbg3h5yp5ncag0q31lt</font>]<br>[Hohhot: <font color=''green''>m-hp34cnncgeiowbkzpmic</font>]<br>[Hong Kong: <font color=''green''>m-j6c0e5hkfmzk6d8bfss1</font>]<br>[US (Silicon Valley): <font color=''green''>m-rj981ywnfuk84x1r7v0p</font>]<br>Note: For more images, see <b><a href=''https://marketplace.alibabacloud.com/products?keywords=magento'' target=''_blank''><font color=''blue''>Magento image</font></a>'
  SystemDiskCategory:
    Type: String
    Label:
      en: Disk Type
    Description:
      en: '<font color=''blue''>Valid values:</font>[cloud_efficiency: <font color=''green''>Ultra disk</font>]<br>[cloud_ssd: <font color=''green''>Standard SSD</font>]<br>[cloud_essd: <font color=''green''>Enterprise SSD</font>]<br>[cloud: <font color=''green''>Basic disk</font>]<br>[ephemeral_ssd: <font color=''green''>Local SSD</font>]'
    Default: cloud_efficiency
    AllowedValues:
    - cloud_efficiency
    - cloud_ssd
    - cloud
    - cloud_essd
    - ephemeral_ssd
  SystemDiskSize:
    Type: Number
    Label:
      en: System Disk Size
    Description:
      en: 'System disk size. Valid values: 40 to 500. Unit: GB.'
    ConstraintDescription:
      en: 'Valid values: 40 to 500. Unit: GB.'
    Default: 40
    MinValue: 40
    MaxValue: 500
  EcsPassword:
    Type: String
    Label:
      en: Login Password
    Description:
      en: 'Server logon password. Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters ()`~!@#$%^&*_-+=| {}[]:;' <>,.? / .'
    ConstraintDescription:
      en: 'Length: 8 to 30 characters. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters ()`~!@#$%^&*_-+=| {}[]:;' <>,.? / .'
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
  LoadBalancerName:
    Type: String
    Label:
      en: Instance Name
    Description:
      en: 'Length: 1 to 80 characters. Valid characters include letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).'
    Default: slb001
  LoadBalancerSpec:
    Type: String
    Label:
      en: Specifications
    Description:
      en: 'Instance specifications.</br>For details, see <a href=''https://www.alibabacloud.com/help/doc-detail/85939.html'' target=''_blank''><b><font color=''blue''>Guaranteed-performance instance</font></a>'
    Default: slb.s1.small
  DBInstanceEngineAndVersion:
    Type: String
    Label:
      en: Type And Version
    Description:
      en: Database engine type and version number.
    Default: MySQL-5.6
    AllowedValues:
    - MySQL-5.5
    - MySQL-5.6
    - MySQL-5.7
    - MySQL-8.0
  DBInstanceClass:
    Type: String
    Label:
      en: Specifications
    Description:
      en: 'Select the instance specification based on the database engine type and region support.For details, see <a href=''https://www.alibabacloud.com/help/doc-detail/26312.html'' target=''_blank''><b><font color=''blue''>Instance specification sheet</font></a>'
    Default: rds.mysql.s2.large
  DBInstanceStorage:
    Type: Number
    Label:
      en: Storage Space
    Description:
      en: 'Database storage space. Unit: GB. Increments: 5 GB. Valid values: 5 to 1000.'
    ConstraintDescription:
      en: 'Database storage space. Unit: GB. Increments: 5 GB. Valid values: 5 to 1000.'
    Default: 5
    MinValue: 5
    MaxValue: 1000
  RdsUserPassword:
    Type: String
    Label:
      en: Password
    Description:
      en: 'The privileged account password for the database instance. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters !@#$%^&*()_+-=. Length: 8 to 32 characters.'
    AssociationProperty: ALIYUN::RDS::Instance::AccountPassword
    ConstraintDescription:
      en: 'Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters !@#$%^&*()_+-=. Length: 8 to 32 characters.'
    MinLength: 8
    MaxLength: 32
    NoEcho: true
  DBName:
    Type: String
    Label:
      en: Database Name
    Description:
      en: 'Database name. Consists of lowercase letters, digits, and hyphens (-) or underscores (_). Must start with a letter and end with a letter or digit. Maximum length: 64 characters.'
    Default: db_magento
  RdsUserType:
    Type: String
    Label:
      en: Account Type
    Description:
      en: 'Database account type. <font color=''blue''>Valid values:</font>[Normal: <font color=''green''>Standard account</font>]<br>[Super: <font color=''green''>Privileged account</font>]'
    Default: Normal
    AllowedValues:
    - Super
    - Normal
  RdsUserName:
    Type: String
    Label:
      en: Database Account
    Description:
      en: 'Database account name. Consists of lowercase letters, digits, and underscores (_). Must start with a letter and end with a letter or digit. Length: 2 to 16 characters.'
    Default: account_magento
    MinLength: 2
    MaxLength: 16
Resources:
  Vpc:
    Type: ALIYUN::ECS::VPC
    Properties:
      CidrBlock:
        Ref: VpcCidrBlock
      VpcName:
        Fn::Join:
        - '-'
        - - Stack
          - Ref: ALIYUN::StackId
  SecurityGroup:
    Type: ALIYUN::ECS::SecurityGroup
    Properties:
      VpcId:
        Ref: Vpc
      SecurityGroupIngress:
      - IpProtocol: tcp
        Policy: accept
        PortRange: 3389/3389
        Priority: 1
        SourceCidrIp: 0.0.0.0/0
      Tags:
      - Key: best_practice
        Value: '065'
  VSwitch:
    Type: ALIYUN::ECS::VSwitch
    Properties:
      ZoneId:
        Ref: VSwitchZoneId
      VpcId:
        Ref: Vpc
      CidrBlock:
        Ref: VswCidrBlock
      VSwitchName:
        Fn::Join:
        - '-'
        - - Stack
          - Ref: ALIYUN::StackId
          - Fn::Select:
            - '2'
            - Fn::Split:
              - '-'
              - Ref: VSwitchZoneId
  ECS:
    Type: ALIYUN::ECS::Instance
    Properties:
      ZoneId:
        Ref: VSwitchZoneId
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
      SecurityGroupId:
        Ref: SecurityGroup
      ImageId:
        Ref: ECSImageId
      AllocatePublicIP: true
      HostName: APP001
      InstanceName: APP001
      InstanceType:
        Ref: EcsInstanceType
      InternetChargeType: PayByTraffic
      Password:
        Ref: EcsPassword
      SystemDiskCategory:
        Ref: SystemDiskCategory
      SystemDiskSize:
        Ref: SystemDiskSize
      Tags:
      - Key: '065'
        Value: best_practice
  SLBLoadBalance:
    Type: ALIYUN::SLB::LoadBalancer
    Properties:
      VpcId:
        Ref: Vpc
      AddressType: internet
      InternetChargeType: paybytraffic
      LoadBalancerName:
        Ref: LoadBalancerName
      LoadBalancerSpec:
        Ref: LoadBalancerSpec
      MasterZoneId:
        Ref: VSwitchZoneId
      PayType: PayOnDemand
      SlaveZoneId:
        Ref: VSwitchZoneId2
      Tags:
      - Key: '065'
        Value: best_practice
  BackendServerAttachment:
    Type: ALIYUN::SLB::BackendServerAttachment
    Properties:
      BackendServerList:
      - Ref: ECS
      BackendServerWeightList:
      - 100
      LoadBalancerId:
        Ref: SLBLoadBalance
    DependsOn:
    - ECS
    - SLBLoadBalance
  Listener:
    Type: ALIYUN::SLB::Listener
    Properties:
      BackendServerPort: 80
      Bandwidth: -1
      ListenerPort: 80
      LoadBalancerId:
        Ref: SLBLoadBalance
      Protocol: http
    DependsOn: SLBLoadBalance
  RdsDBInstance:
    Type: ALIYUN::RDS::DBInstance
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
      DBInstanceClass:
        Ref: DBInstanceClass
      DBInstanceStorage:
        Ref: DBInstanceStorage
      DBMappings:
      - CharacterSetName: utf8
        DBName:
          Ref: DBName
      Engine:
        Fn::Select:
        - '0'
        - Fn::Split:
          - '-'
          - Ref: DBInstanceEngineAndVersion
      EngineVersion:
        Fn::Select:
        - '1'
        - Fn::Split:
          - '-'
          - Ref: DBInstanceEngineAndVersion
      MasterUserPassword:
        Ref: RdsUserPassword
      MasterUserType:
        Ref: RdsUserType
      MasterUsername:
        Ref: RdsUserName
      MultiAZ: true
      SecurityIPList:
        Ref: VpcCidrBlock
      Tags:
        Key: best_practice
        Value: '065'
Outputs:
  ECSPublicIP:
    Description: Public IP address of the Magento server
    Value:
      Fn::GetAtt:
      - ECS
      - PublicIp
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
    - Parameters:
      - VpcCidrBlock
      - VSwitchZoneId
      - VswCidrBlock
      - VSwitchZoneId2
      - VswCidrBlock2
      Label:
        default: VPC
    - Parameters:
      - EcsInstanceType
      - ECSImageId
      - SystemDiskCategory
      - SystemDiskSize
      - EcsPassword
      Label:
        default: ECS
    - Parameters:
      - LoadBalancerName
      - LoadBalancerSpec
      Label:
        default: SLB
    - Parameters:
      - DBInstanceEngineAndVersion
      - DBInstanceClass
      - DBInstanceStorage
      - RdsUserPassword
      - DBName
      - RdsUserType
      - RdsUserName
      Label:
        default: RDS
    TemplateTags:
    - acs:solution:security&compliance:e-commerce website business security
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "en": "Develop an e-commerce website protection plan, encompassing Virtual Private Cloud (VPC), Elastic Compute Service (ECS), Server Load Balancer (SLB), and Relational Database Service (RDS) resources. Implement measures to prevent scalpers from exploiting promotions, ensuring service stability and the authenticity of discounts. Deploy across multiple availability zones for redundancy and high availability."
  },
  "Parameters": {
    "VpcCidrBlock": {
      "Type": "String",
      "Label": {
        "en": "VPC CIDR Block"
      },
      "Description": {
        "en": "The IP address range of the VPC in the CIDR Block form; You can use the following IP address ranges: <br><font color='green'>[10.0.0.0/8]</font><br><font color='green'>[172.16.0.0/12]</font><br><font color='green'>[192.168.0.0/16]</font>"
      },
      "Default": "192.168.0.0/16",
      "AllowedValues": [
        "10.0.0.0/8",
        "172.16.0.0/12",
        "192.168.0.0/16"
      ]
    },
    "VSwitchZoneId": {
      "Type": "String",
      "Label": {
        "en": "Master Zone"
      },
      "Description": {
        "en": "Availability Zone ID;<br><b>Note: <font color='blue'>Before selecting an availability zone, verify that it supports the required specifications for creating SLB、RDS、ECS resources.</font>"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    },
    "VswCidrBlock": {
      "Type": "String",
      "Label": {
        "en": "Master Zone CIDR Block"
      },
      "Description": {
        "en": "Must be a subnet segment that belongs to a proprietary network and is not occupied by another vSwitch."
      },
      "Default": "192.168.1.0/24"
    },
    "VSwitchZoneId2": {
      "Type": "String",
      "Label": {
        "en": "Slave Zone"
      },
      "Description": {
        "en": "Availability Zone ID,<b>Note: <font color='blue'>Before selecting an availability zone, verify that it supports the required specifications for creating SLB resources, not the same as the primary zone.</font>"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    },
    "VswCidrBlock2": {
      "Type": "String",
      "Label": {
        "en": "Slave Zone CIDR Block"
      },
      "Description": {
        "en": "Must be a subnet segment that belongs to a proprietary network and is not occupied by another vSwitch."
      },
      "Default": "192.168.2.0/24"
    },
    "EcsInstanceType": {
      "Type": "String",
      "Label": {
        "en": "Instance Type"
      },
      "Description": {
        "en": "Fill in the specifications that can be used under the vSwitch availability zone;</b></font>general-purpose instance types: <font color='red'><b>ecs.g5.xlarge</font>note: a few zones do not support general-purpose instance types<br>see detail: <a href='https://www.alibabacloud.com/help/en/doc-detail/25378.html' target='_blank'><b><font color='blue'>Instance family</font></a>"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "VSwitchZoneId"
      }
    },
    "ECSImageId": {
      "Type": "String",
      "Label": {
        "en": "Application Server Image"
      },
      "Description": {
        "en": "Server instance image ID. </b>[Shanghai: <font color='green'>m-uf6j125b6mhvg27jo58a</font>]<br>[Hangzhou: <font color='green'>m-bp1h0ys627i2ke0dx0t1</font>]<br>[Beijing: <font color='green'>m-2zeir96eip2yw414w1jd</font>]<br>[Qingdao: <font color='green'>m-m5e81ywnfuk84x1r7v0n</font>]<br>[Shenzhen: <font color='green'>m-wz98u1criwvafhq3ctfm</font>]<br>[Zhangjiakou: <font color='green'>m-8vbg3h5yp5ncag0q31lt</font>]<br>[Hohhot: <font color='green'>m-hp34cnncgeiowbkzpmic</font>]<br>[Hong Kong: <font color='green'>m-j6c0e5hkfmzk6d8bfss1</font>]<br>[US(Silincon Valley): <font color='green'>m-rj981ywnfuk84x1r7v0p</font>]<br>note: for more images available, see detail: <b><a href='https://marketplace.alibabacloud.com/products?keywords=magento' target='_blank'><font color='blue'>Magento image</font></a>"
      }
    },
    "SystemDiskCategory": {
      "Type": "String",
      "Label": {
        "en": "Disk Type"
      },
      "Description": {
        "en": "<font color='blue'>Valid values:</font>[cloud_efficiency: <font color='green'>Ultra disk</font>]<br>[cloud_ssd: <font color='green'>Standard SSD</font>]<br>[cloud_essd: <font color='green'>Enterprise SSD</font>]<br>[cloud: <font color='green'>Basic disk</font>]<br>[ephemeral_ssd: <font color='green'>Local SSD</font>]"
      },
      "Default": "cloud_efficiency",
      "AllowedValues": [
        "cloud_efficiency",
        "cloud_ssd",
        "cloud",
        "cloud_essd",
        "ephemeral_ssd"
      ]
    },
    "SystemDiskSize": {
      "Type": "Number",
      "Label": {
        "en": "System Disk Size"
      },
      "Description": {
        "en": "System disk size, range of values: 40-500, units: GB."
      },
      "ConstraintDescription": {
        "en": "Valid values: 40 to 500. Unit: GB."
      },
      "Default": 40,
      "MinValue": 40,
      "MaxValue": 500
    },
    "EcsPassword": {
      "Type": "String",
      "Label": {
        "en": "Login Password"
      },
      "Description": {
        "en": "Server logon password, Length 8-30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=| {}[]:;' <>,.? / Special symbol in)."
      },
      "ConstraintDescription": {
        "en": "Length 8-30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=| {}[]:;' <>,.? / Special symbol in)."
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password"
    },
    "LoadBalancerName": {
      "Type": "String",
      "Label": {
        "en": "Instance Name"
      },
      "Description": {
        "en": "Length: 1-80 characters. Can contain Chinese、letters、digits and special characters('-'、'/'、'.'、'_')."
      },
      "Default": "slb001"
    },
    "LoadBalancerSpec": {
      "Type": "String",
      "Label": {
        "en": "Specifications"
      },
      "Description": {
        "en": "Instance specifications,</br>see detail: <a href='https://www.alibabacloud.com/help/doc-detail/85939.html' target='_blank'><font color='blue'>Guaranteed-performance instance</font></a>"
      },
      "Default": "slb.s1.small"
    },
    "DBInstanceEngineAndVersion": {
      "Type": "String",
      "Label": {
        "en": "Type And Version"
      },
      "Description": {
        "en": "Database type and version number."
      },
      "Default": "MySQL-5.6",
      "AllowedValues": [
        "MySQL-5.5",
        "MySQL-5.6",
        "MySQL-5.7",
        "MySQL-8.0"
      ]
    },
    "DBInstanceClass": {
      "Type": "String",
      "Label": {
        "en": "Specifications"
      },
      "Description": {
        "en": "Select the instance specification based on the type of database engine and the available area support;see detail: <a href='https://www.alibabacloud.com/help/doc-detail/26312.html' target='_blank'><b><font color='blue'>Instance specification sheet</font></a>"
      },
      "Default": "rds.mysql.s2.large"
    },
    "DBInstanceStorage": {
      "Type": "Number",
      "Label": {
        "en": "Storage Space"
      },
      "Description": {
        "en": "Database storage space, unit: GB, increasing every 5GB, valid value: 5-1000."
      },
      "ConstraintDescription": {
        "en": "Database storage space, unit: GB, increasing every 5GB, valid value: 5-1000."
      },
      "Default": 5,
      "MinValue": 5,
      "MaxValue": 1000
    },
    "RdsUserPassword": {
      "Type": "String",
      "Label": {
        "en": "Password"
      },
      "Description": {
        "en": "The primary account password for the database instance.Large/lowercase letters, Numbers and special characters take up three kinds, and the length is 8-32 bits. Special characters included! @ # $% ^ & * () _ + - ="
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::AccountPassword",
      "ConstraintDescription": {
        "en": "Large/lowercase letters, Numbers and special characters take up three kinds, and the length is 8-32 bits. Special characters included! @ # $% ^ & * () _ + - ="
      },
      "MinLength": 8,
      "MaxLength": 32,
      "NoEcho": true
    },
    "DBName": {
      "Type": "String",
      "Label": {
        "en": "Database Name"
      },
      "Description": {
        "en": "Database name, consisting of lowercase letters, Numbers, and special characters (-_), starting with letters, ending with letters or Numbers, up to 64 characters."
      },
      "Default": "db_magento"
    },
    "RdsUserType": {
      "Type": "String",
      "Label": {
        "en": "Account Type"
      },
      "Description": {
        "en": "Database account type, <font color='blue'>Valid values: </font>[Normal: <font color='green'>Standard account</font>]<br>[Super: <font color='green'>Privileged account</font>]"
      },
      "Default": "Normal",
      "AllowedValues": [
        "Super",
        "Normal"
      ]
    },
    "RdsUserName": {
      "Type": "String",
      "Label": {
        "en": "Database Account"
      },
      "Description": {
        "en": "Consists of lowercase letters, Numbers, and underscores, beginning with letters, ending with letters or Numbers, up to 16 characters, and at least 2 characters."
      },
      "Default": "account_magento",
      "MinLength": 2,
      "MaxLength": 16
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": {
          "Ref": "VpcCidrBlock"
        },
        "VpcName": {
          "Fn::Join": [
            "-",
            [
              "Stack",
              {
                "Ref": "ALIYUN::StackId"
              }
            ]
          ]
        }
      }
    },
    "SecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupIngress": [
          {
            "IpProtocol": "tcp",
            "Policy": "accept",
            "PortRange": "3389/3389",
            "Priority": 1,
            "SourceCidrIp": "0.0.0.0/0"
          }
        ],
        "Tags": [
          {
            "Key": "best_practice",
            "Value": "065"
          }
        ]
      }
    },
    "VSwitch": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "ZoneId": {
          "Ref": "VSwitchZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": {
          "Ref": "VswCidrBlock"
        },
        "VSwitchName": {
          "Fn::Join": [
            "-",
            [
              "Stack",
              {
                "Ref": "ALIYUN::StackId"
              },
              {
                "Fn::Select": [
                  "2",
                  {
                    "Fn::Split": [
                      "-",
                      {
                        "Ref": "VSwitchZoneId"
                      }
                    ]
                  }
                ]
              }
            ]
          ]
        }
      }
    },
    "ECS": {
      "Type": "ALIYUN::ECS::Instance",
      "Properties": {
        "ZoneId": {
          "Ref": "VSwitchZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
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
        "AllocatePublicIP": true,
        "HostName": "APP001",
        "InstanceName": "APP001",
        "InstanceType": {
          "Ref": "EcsInstanceType"
        },
        "InternetChargeType": "PayByTraffic",
        "Password": {
          "Ref": "EcsPassword"
        },
        "SystemDiskCategory": {
          "Ref": "SystemDiskCategory"
        },
        "SystemDiskSize": {
          "Ref": "SystemDiskSize"
        },
        "Tags": [
          {
            "Key": "065",
            "Value": "best_practice"
          }
        ]
      }
    },
    "SLBLoadBalance": {
      "Type": "ALIYUN::SLB::LoadBalancer",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "AddressType": "internet",
        "InternetChargeType": "paybytraffic",
        "LoadBalancerName": {
          "Ref": "LoadBalancerName"
        },
        "LoadBalancerSpec": {
          "Ref": "LoadBalancerSpec"
        },
        "MasterZoneId": {
          "Ref": "VSwitchZoneId"
        },
        "PayType": "PayOnDemand",
        "SlaveZoneId": {
          "Ref": "VSwitchZoneId2"
        },
        "Tags": [
          {
            "Key": "065",
            "Value": "best_practice"
          }
        ]
      }
    },
    "BackendServerAttachment": {
      "Type": "ALIYUN::SLB::BackendServerAttachment",
      "Properties": {
        "BackendServerList": [
          {
            "Ref": "ECS"
          }
        ],
        "BackendServerWeightList": [
          100
        ],
        "LoadBalancerId": {
          "Ref": "SLBLoadBalance"
        }
      },
      "DependsOn": [
        "ECS",
        "SLBLoadBalance"
      ]
    },
    "Listener": {
      "Type": "ALIYUN::SLB::Listener",
      "Properties": {
        "BackendServerPort": 80,
        "Bandwidth": -1,
        "ListenerPort": 80,
        "LoadBalancerId": {
          "Ref": "SLBLoadBalance"
        },
        "Protocol": "http"
      },
      "DependsOn": "SLBLoadBalance"
    },
    "RdsDBInstance": {
      "Type": "ALIYUN::RDS::DBInstance",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "DBInstanceClass": {
          "Ref": "DBInstanceClass"
        },
        "DBInstanceStorage": {
          "Ref": "DBInstanceStorage"
        },
        "DBMappings": [
          {
            "CharacterSetName": "utf8",
            "DBName": {
              "Ref": "DBName"
            }
          }
        ],
        "Engine": {
          "Fn::Select": [
            "0",
            {
              "Fn::Split": [
                "-",
                {
                  "Ref": "DBInstanceEngineAndVersion"
                }
              ]
            }
          ]
        },
        "EngineVersion": {
          "Fn::Select": [
            "1",
            {
              "Fn::Split": [
                "-",
                {
                  "Ref": "DBInstanceEngineAndVersion"
                }
              ]
            }
          ]
        },
        "MasterUserPassword": {
          "Ref": "RdsUserPassword"
        },
        "MasterUserType": {
          "Ref": "RdsUserType"
        },
        "MasterUsername": {
          "Ref": "RdsUserName"
        },
        "MultiAZ": true,
        "SecurityIPList": {
          "Ref": "VpcCidrBlock"
        },
        "Tags": {
          "Key": "best_practice",
          "Value": "065"
        }
      }
    }
  },
  "Outputs": {
    "ECSPublicIP": {
      "Description": "Public IP address of the Magento server",
      "Value": {
        "Fn::GetAtt": [
          "ECS",
          "PublicIp"
        ]
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "VpcCidrBlock",
            "VSwitchZoneId",
            "VswCidrBlock",
            "VSwitchZoneId2",
            "VswCidrBlock2"
          ],
          "Label": {
            "default": "VPC"
          }
        },
        {
          "Parameters": [
            "EcsInstanceType",
            "ECSImageId",
            "SystemDiskCategory",
            "SystemDiskSize",
            "EcsPassword"
          ],
          "Label": {
            "default": "ECS"
          }
        },
        {
          "Parameters": [
            "LoadBalancerName",
            "LoadBalancerSpec"
          ],
          "Label": {
            "default": "SLB"
          }
        },
        {
          "Parameters": [
            "DBInstanceEngineAndVersion",
            "DBInstanceClass",
            "DBInstanceStorage",
            "RdsUserPassword",
            "DBName",
            "RdsUserType",
            "RdsUserName"
          ],
          "Label": {
            "default": "RDS"
          }
        }
      ],
      "TemplateTags": [
        "acs:solution:security&compliance:e-commerce website business security"
      ]
    }
  }
}
```

For more examples, see [public templates that include this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::SLB::LoadBalancer).
