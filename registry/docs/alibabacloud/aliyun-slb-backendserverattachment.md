The ALIYUN::SLB::BackendServerAttachment resource type adds backend servers to a Server Load Balancer (SLB) instance.

## Syntax

```
{
  "Type": "ALIYUN::SLB::BackendServerAttachment",
  "Properties": {
    "LoadBalancerId": String,
    "BackendServers": List,
    "BackendServerList": List,
    "BackendServerWeightList": List
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

LoadBalancerId

String

Yes

No

The unique ID of the SLB instance.

None

BackendServerList

List

No

Yes

A list of backend servers to add.

This property is used with LoadBalancerId and BackendServerWeightList. Separate the IDs of ECS instances with commas (,).

This property is ignored if BackendServers is specified.

BackendServerWeightList

List

No

Yes

The weights of the ECS instances in BackendServerList. The weights are specified in the same order as the instances.

If you do not specify this property, the weight of each ECS instance in BackendServerList is set to 100. If the number of weights in BackendServerWeightList is less than the number of instances in BackendServerList, the last weight is used for the remaining ECS instances.

BackendServers

List

No

Yes

A list of backend servers to add.

The backend servers (ECS instances) must be in the running state before they can be added to the SLB instance.

For more information, see [BackendServers properties](#section-q3w-zzy-lfb).

## BackendServers syntax

```
"BackendServers": [
  {
    "ServerId" : String,
    "Weight" : Integer,
    "Type": String,
    "ServerIp": String,
    "Description": String
  }
]
```

## BackendServers properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

ServerId

String

Yes

Yes

The ID of the ECS instance.

The backend server (ECS instance) must be in the running state before it can be added to the SLB instance. You can add up to 20 backend servers in each call.

Only guaranteed-performance instances support ENI-type backend servers.

Weight

Integer

Yes

Yes

The weight of the ECS instance in the SLB instance.

Valid values: 0 to 100.

Default value: 100.

ServerIp

String

No

No

The IP address of the backend server.

None

Type

String

No

No

The type of the backend server.

Valid values:

-   ecs: an ECS instance (default).
    
-   eni: an ENI.
    
-   eci: an Elastic Container Instance.
    

Description

String

No

Yes

The description of the backend server.

The description must be 1 to 80 characters in length. It can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

## Return value

Fn::GetAtt

-   BackendServers: A list of all backend servers attached to the SLB instance.
    
-   LoadBalancerId: The ID of the SLB instance.
    

## Examples

### **Scenario 1: Add backend servers**

[Create stack](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/backend-server-attachment-case1.yml&pageTitle=Add backend servers&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  BackendServerList:
    AssociationProperty: ALIYUN::ECS::Instance::InstanceId
    Type: CommaDelimitedList
    Description: A comma-delimited list of instance IDs. This property is ignored if the BackendServers property is set.
  LoadBalancerId:
    AssociationProperty: ALIYUN::SLB::Instance::InstanceId
    Type: String
    Description: The ID of the Server Load Balancer instance.
Resources:
  BackendServer:
    Type: ALIYUN::SLB::BackendServerAttachment
    Properties:
      BackendServerList:
        Ref: BackendServerList
      LoadBalancerId:
        Ref: LoadBalancerId
      BackendServerWeightList:
        - 50
Outputs:
  LoadBalancerId:
    Description: The ID of the Server Load Balancer instance.
    Value:
      Fn::GetAtt:
        - BackendServer
        - LoadBalancerId
  BackendServers:
    Description: The list of attached backend servers.
    Value:
      Fn::GetAtt:
        - BackendServer
        - BackendServers
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "BackendServerList": {
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceId",
      "Type": "CommaDelimitedList",
      "Description": "A comma-delimited list of instance IDs. This property is ignored if the BackendServers property is set."
    },
    "LoadBalancerId": {
      "AssociationProperty": "ALIYUN::SLB::Instance::InstanceId",
      "Type": "String",
      "Description": "The ID of the Server Load Balancer instance."
    }
  },
  "Resources": {
    "BackendServer": {
      "Type": "ALIYUN::SLB::BackendServerAttachment",
      "Properties": {
        "BackendServerList": {
          "Ref": "BackendServerList"
        },
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        },
        "BackendServerWeightList": [
          50
        ]
      }
    }
  },
  "Outputs": {
    "LoadBalancerId": {
      "Description": "The ID of the Server Load Balancer instance.",
      "Value": {
        "Fn::GetAtt": [
          "BackendServer",
          "LoadBalancerId"
        ]
      }
    },
    "BackendServers": {
      "Description": "The list of attached backend servers.",
      "Value": {
        "Fn::GetAtt": [
          "BackendServer",
          "BackendServers"
        ]
      }
    }
  }
}
```

### **Scenario 2: Create an ECS instance group and attach it to an SLB instance**

[Create stack](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/backend-server-attachment-case2.yml&pageTitle=Create an ECS instance group and attach it to an SLB instance&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Create an ECS instance group with flexible configuration and automatically bind to three SLB instances to achieve load balancing.
Parameters:
  ZoneId:
    Type: String
    Default: null
    Required: true
    Label: Availability Zone
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
    Label: Business Security Group ID
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
    Description: The list of instance IDs of the created ECS instances.
    Value:
      Fn::GetAtt:
      - InstanceGroup
      - InstanceIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Create an ECS instance group with flexible configuration and automatically bind to three SLB instances to achieve load balancing.",
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "Default": null,
      "Required": true,
      "Label": "Availability Zone",
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
      "Label": "Business Security Group ID",
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
      "Description": "The list of instance IDs of the created ECS instances.",
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

### **Scenario 3: Create a high-availability web service with shared storage**

[Create stack](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/backend-server-attachment-case3.yml&pageTitle=Create a high-availability web service with shared storage&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Constructing a highly available web service comprises dual availability zone
  ECS instances, a Load Balancer (SLB), Network Attached Storage (NAS) mounts, automatic
  configuration synchronization, and is accessible via the public internet.
Parameters:
  NasZone1:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description: Availability zone 1 must be different from Availability zone 2.
    Label: NAS Availability Zone1
  NasZone2:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description: Availability zone 2 must be different from Availability zone 1.
    Label: NAS Availability Zone2
  CommonName:
    Default: high-availability
    Type: String
  InstancePassword:
    Type: String
    Description: >-
      Server login password, Length 8~30, must contain three(Capital letters,
      lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special
      symbol in).
    MinLength: 8
    Label: Instance Password
    AllowedPattern: '[0-9A-Za-z\_\-\&:;''<>,=%`~!@#\(\)\$\^\*\+\|\{\}\[\]\.\?\/]+$'
    NoEcho: true
    MaxLength: 30
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
    ConstraintDescription: >-
      Length 8~30, must contain three(Capital letters, lowercase letters,
      numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in).
  EcsInstanceType2:
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      SystemDiskCategory: cloud_essd
      InstanceChargeType: PostPaid
      ZoneId: '${Zone2}'
    Type: String
    Label: Instance Type Of Availability Zone2
  Zone2:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description: Availability zone 2 must be different from Availability zone 1.
    Label: VSwitch Availability Zone2
  Zone1:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description: Availability zone 1 must be different from Availability zone 2.
    Label: VSwitch Availability Zone1
  EcsInstanceType1:
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      SystemDiskCategory: cloud_essd
      InstanceChargeType: PostPaid
      ZoneId: '${Zone1}'
    Type: String
    Label: Instance Type Of Availability Zone1
Rules:
  DifferentZones2:
    Assertions:
      - Assert:
          'Fn::Not':
            'Fn::Equals':
              - Ref: NasZone1
              - Ref: NasZone2
        AssertDescription: NAS Zones must be different
  DifferentZones1:
    Assertions:
      - Assert:
          'Fn::Not':
            'Fn::Equals':
              - Ref: Zone1
              - Ref: Zone2
        AssertDescription: ECS Zones must be different
Outputs:
  ECS1URL:
    Description: ECS 1 URL
    Value:
      'Fn::Sub':
        - >-
          https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}
        - InstanceID:
            'Fn::Select':
              - '0'
              - 'Fn::GetAtt':
                  - EcsInstanceGroup1
                  - InstanceIds
          region:
            Ref: 'ALIYUN::Region'
  FileSystemId1:
    Description: Master NAS
    Value:
      'Fn::Sub':
        - 'https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}'
        - InstanceID:
            'Fn::GetAtt':
              - MasterFileSystem
              - FileSystemId
          region:
            Ref: 'ALIYUN::Region'
  ECS2URL:
    Description: ECS 2 URL
    Value:
      'Fn::Sub':
        - >-
          https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}
        - InstanceID:
            'Fn::Select':
              - '0'
              - 'Fn::GetAtt':
                  - EcsInstanceGroup1
                  - InstanceIds
          region:
            Ref: 'ALIYUN::Region'
  SlbIpAddress:
    Description: Public IP Addresses
    Value:
      'Fn::Sub':
        - 'http://${ServerAddress}'
        - ServerAddress:
            'Fn::GetAtt':
              - Slb
              - IpAddress
  FileSystemId2:
    Description: Backup NAS
    Value:
      'Fn::Sub':
        - 'https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}'
        - InstanceID:
            'Fn::GetAtt':
              - BackupFileSystem
              - FileSystemId
          region:
            Ref: 'ALIYUN::Region'
  MountInfo1:
    Description: NAS mounting directory 1 on ECS
    Value: '/nas_master'
  MountInfo2:
    Description: NAS mounting directory 2 on ECS
    Value: '/nas_backup'
Resources:
  SlbListener:
    Type: 'ALIYUN::SLB::Listener'
    Properties:
      Protocol: http
      HealthCheck:
        HealthCheckType: http
        Interval: 2
        URI: /
        UnhealthyThreshold: 3
        HealthyThreshold: 3
        Timeout: 5
        HttpCode: 'http_2xx,http_3xx,http_4xx,http_5xx'
        Port: 80
      ListenerPort: 80
      Bandwidth: 10
      BackendServerPort: 80
      LoadBalancerId:
        Ref: Slb
    DependsOn:
      - Slb
  EcsSecurityGroup:
    Type: 'ALIYUN::ECS::SecurityGroup'
    Properties:
      SecurityGroupIngress:
        - Priority: 1
          PortRange: 80/80
          NicType: internet
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
      VpcId:
        Ref: EcsVpc
      SecurityGroupEgress:
        - Priority: 1
          PortRange: '-1/-1'
          DestCidrIp: 0.0.0.0/0
          NicType: internet
          IpProtocol: all
        - Priority: 1
          PortRange: '-1/-1'
          DestCidrIp: 0.0.0.0/0
          NicType: intranet
          IpProtocol: all
      SecurityGroupName:
        'Fn::Sub': '${CommonName}_sg'
  MasterNasMountTarget:
    Type: 'ALIYUN::NAS::MountTarget'
    Properties:
      NetworkType: Vpc
      FileSystemId:
        Ref: MasterFileSystem
      VpcId:
        Ref: EcsVpc
      VSwitchId:
        Ref: EcsVSwitch3
      AccessGroupName: DEFAULT_VPC_GROUP_NAME
  EcsVSwitch4:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_002'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.4.0/24
      ZoneId:
        Ref: NasZone2
  MasterFileSystem:
    Type: 'ALIYUN::NAS::FileSystem'
    Properties:
      StorageType: Capacity
      ProtocolType: NFS
      VpcId:
        Ref: EcsVpc
      Description: MasterNAS
      ZoneId:
        Ref: NasZone1
  EcsVSwitch2:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_002'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.2.0/24
      ZoneId:
        Ref: Zone2
  EcsVSwitch3:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_002'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.3.0/24
      ZoneId:
        Ref: NasZone1
  EcsVSwitch1:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_001'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.1.0/24
      ZoneId:
        Ref: Zone1
  BackupFileSystem:
    Type: 'ALIYUN::NAS::FileSystem'
    Properties:
      StorageType: Capacity
      ProtocolType: NFS
      VpcId:
        Ref: EcsVpc
      Description: BackupNAS
      ZoneId:
        Ref: NasZone2
  BackupNasMountTarget:
    Type: 'ALIYUN::NAS::MountTarget'
    Properties:
      NetworkType: Vpc
      FileSystemId:
        Ref: BackupFileSystem
      VpcId:
        Ref: EcsVpc
      VSwitchId:
        Ref: EcsVSwitch4
      AccessGroupName: DEFAULT_VPC_GROUP_NAME
  EcsInstanceGroup1:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      SystemDiskCategory: cloud_essd
      VpcId:
        Ref: EcsVpc
      SecurityGroupId:
        Ref: EcsSecurityGroup
      SystemDiskSize: 40
      ImageId: aliyun_3_x64_20G_alibase_20230727.vhd
      SpotStrategy: SpotAsPriceGo
      IoOptimized: optimized
      VSwitchId:
        Ref: EcsVSwitch1
      Password:
        Ref: InstancePassword
      InstanceName:
        'Fn::Sub': '${CommonName}_ecs_001'
      InstanceType:
        Ref: EcsInstanceType1
      ZoneId:
        Ref: Zone1
      MaxAmount: 1
  EcsInstanceGroup2:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      SystemDiskCategory: cloud_essd
      VpcId:
        Ref: EcsVpc
      SecurityGroupId:
        Ref: EcsSecurityGroup
      SystemDiskSize: 40
      ImageId: aliyun_3_x64_20G_alibase_20230727.vhd
      SpotStrategy: SpotAsPriceGo
      IoOptimized: optimized
      VSwitchId:
        Ref: EcsVSwitch2
      Password:
        Ref: InstancePassword
      InstanceName:
        'Fn::Sub': '${CommonName}_ecs_002'
      InstanceType:
        Ref: EcsInstanceType2
      ZoneId:
        Ref: Zone2
      MaxAmount: 1
  EcsVpc:
    Type: 'ALIYUN::ECS::VPC'
    Properties:
      VpcName:
        'Fn::Sub': '${CommonName}_vpc'
      CidrBlock: 192.168.0.0/16
  SlbBackendServerAttachment:
    Type: 'ALIYUN::SLB::BackendServerAttachment'
    Properties:
      BackendServerList:
        'Fn::ListMerge':
          - 'Fn::GetAtt':
              - EcsInstanceGroup1
              - InstanceIds
          - 'Fn::GetAtt':
              - EcsInstanceGroup2
              - InstanceIds
      BackendServerWeightList:
        - 100
        - 100
      LoadBalancerId:
        Ref: Slb
  Slb:
    Type: 'ALIYUN::SLB::LoadBalancer'
    Properties:
      AddressType: internet
      LoadBalancerName:
        'Fn::Sub': '${CommonName}-slb'
      InstanceChargeType: PayByCLCU
      PayType: PayOnDemand
  InstanceRunCommand:
    Type: 'ALIYUN::ECS::RunCommand'
    Properties:
      CommandContent:
        'Fn::Sub': >-
          #!/bin/bash

          if [ ! -f .ros.provision ]; then
            echo "Name: High-availability web service with shared storage" > .ros.provision
          fi


          name=$(grep "^Name:" .ros.provision | awk -F':' '{print $2}' | sed -e
          's/^[[:space:]]*//' -e 's/[[:space:]]*$//')

          if [[ "$name" != "High-availability web service with shared storage" ]]; then
            echo "The current instance has been configured using the one-click setup of the \"$name\" tutorial. You cannot use the one-click setup of this tutorial."
            exit 0
          fi


          echo "#########################"

          echo "# Check Network"

          echo "#########################"

          ping -c 2 -W 2 aliyun.com > /dev/null

          if [[ $? -ne 0 ]]; then
            echo "The current instance cannot access the public network"
            exit 0
          fi


          if ! grep -q "^Step1: Prepare Environment$" .ros.provision; then
            echo "#########################"
            echo "# Prepare Environment"
            echo "#########################"
            systemctl status firewalld
            systemctl stop firewalld
            echo "Step1: Prepare Environment" >> .ros.provision
          else
            echo "#########################"
            echo "# Environment has been ready"
            echo "#########################"
          fi


          if ! grep -q "^Step2: Install Nginx and deploy service$"
          .ros.provision; then
            echo "#########################"
            echo "# Install Nginx"
            echo "#########################"
            sudo yum -y install nginx
            sudo wget -O /usr/share/nginx/html/index.html https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231013/jhgg/index.html
            sudo wget -O /usr/share/nginx/html/lipstick.png https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230925/zevs/lipstick.png
            sudo systemctl start nginx
            sudo systemctl enable nginx
            echo "Step2: Install Nginx and deploy service" >> .ros.provision
          else
            echo "#########################"
            echo "# Nginx has been installed"
            echo "#########################"
          fi


          if ! grep -q "^Step3: Mount to the ECS" .ros.provision; then
            echo "#########################"
            echo "# Mount to the ECS"
            echo "#########################"
            mkdir /nas_master
            mkdir /nas_backup
            sudo yum install -y nfs-utils
            sudo echo "options sunrpc tcp_slot_table_entries=128" >>  /etc/modprobe.d/sunrpc.conf
            sudo echo "options sunrpc tcp_max_slot_table_entries=128" >>  /etc/modprobe.d/sunrpc.conf
            sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${MasterNasMountTarget.MountTargetDomain}:/ /nas_master
            sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup
          
            sudo echo "${MasterNasMountTarget.MountTargetDomain}:/ /nas_master nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0" >> /etc/fstab
            
            sudo echo "${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0" >> /etc/fstab

            df -h | grep aliyun
          else
            echo "#########################"
            echo "# The ECS has been attached to the Nas"
            echo "#########################"
          fi


          if ! grep -q "^Step4: Shared file$" .ros.provision; then
            echo "#########################"
            echo "# Shared file"
            echo "#########################"
            sudo cp -Lvr /usr/share/nginx/html /nas_master
            sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
            echo "Step4: Shared file" >> .ros.provision
          else
            echo "#########################"
            echo "# File has been Shared"
            echo "#########################"
          fi


          if ! grep -q "^Step5: Install inotify-tools and rsync$" .ros.provision;
          then
            echo "#########################"
            echo "# Install inotify-tools and rsync"
            echo "#########################"
            sudo yum install -y inotify-tools rsync
            echo "Step6: Install inotify-tools and rsync" >> .ros.provision
          else
            echo "#########################"
            echo "# Inotify-tools has been installed"
            echo "#########################"
          fi

          if ! grep -q "^Step6: Install synchronization server$" .ros.provision;
          then
            echo "#########################"
            echo "# Install synchronization server"
            echo "#########################"
            sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231017/pftz/sync_nas.sh
            sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230925/wmaj/sync_check_switch.sh
            sudo chmod +x /etc/systemd/system/sync_nas.sh
            sudo chmod +x /etc/systemd/system/sync_check_switch.sh
            cat > /etc/systemd/system/sync-check-switch.service << \EOF
          [Unit]

          Description=Sync Check Switch

          After=network.target


          [Service]

          ExecStart=/etc/systemd/system/sync_check_switch.sh

          RestartSec=3

          Restart=always


          [Install]

          WantedBy=default.target

          EOF

            cat > /etc/systemd/system/sync-nas.service << \EOF
          [Unit]

          Description=Sync NAS Service

          After=network.target


          [Service]

          ExecStart=/etc/systemd/system/sync_nas.sh

          Restart=always

          RestartSec=3


          [Install]

          WantedBy=default.target

          EOF

            sudo systemctl daemon-reload
            sudo systemctl start sync-nas.service
            sudo systemctl enable sync-check-switch.service
            sudo systemctl start sync-check-switch.service
            sudo systemctl enable sync-nas.service
            echo "Step6: Install" >> .ros.provision
          else
            echo "#########################"
            echo "# Synchronization server has been installed"
            echo "#########################"
          fi
      Type: RunShellScript
      Sync: true
      InstanceIds:
        - Ref: EcsInstanceGroup1
        - Ref: EcsInstanceGroup2
      Timeout: '300'
Metadata:
  'ALIYUN::ROS::Interface':
    ParameterGroups:
      - Parameters:
          - Zone1
          - Zone2
          - NasZone1
          - NasZone2
        Label:
          default: Availability Zone
      - Parameters:
          - EcsInstanceType1
          - EcsInstanceType2
          - InstancePassword
        Label:
          default: Instance Configure
    TemplateTags:
      - 'acs:technical-solution:high-availability-architecture:high-availability-web-service-with-shared-storage-tech_solu_12'
    Hidden:
      - CommonName
  
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Constructing a highly available web service comprises dual availability zone ECS instances, a Load Balancer (SLB), Network Attached Storage (NAS) mounts, automatic configuration synchronization, and is accessible via the public internet.",
  "Parameters": {
    "NasZone1": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": "Availability zone 1 must be different from Availability zone 2.",
      "Label": "NAS Availability Zone1"
    },
    "NasZone2": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": "Availability zone 2 must be different from Availability zone 1.",
      "Label": "NAS Availability Zone2"
    },
    "CommonName": {
      "Default": "high-availability",
      "Type": "String"
    },
    "InstancePassword": {
      "Type": "String",
      "Description": "Server login password, Length 8~30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in).",
      "MinLength": 8,
      "Label": "Instance Password",
      "AllowedPattern": "[0-9A-Za-z\\_\\-\\&:;'<>,=%`~!@#\\(\\)\\$\\^\\*\\+\\|\\{\\}\\[\\]\\.\\?\\/]+$",
      "NoEcho": true,
      "MaxLength": 30,
      "AssociationProperty": "ALIYUN::ECS::Instance::Password",
      "ConstraintDescription": "Length 8~30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)."
    },
    "EcsInstanceType2": {
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "SystemDiskCategory": "cloud_essd",
        "InstanceChargeType": "PostPaid",
        "ZoneId": "${Zone2}"
      },
      "Type": "String",
      "Label": "Instance Type Of Availability Zone2"
    },
    "Zone2": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": "Availability zone 2 must be different from Availability zone 1.",
      "Label": "VSwitch Availability Zone2"
    },
    "Zone1": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": "Availability zone 1 must be different from Availability zone 2.",
      "Label": "VSwitch Availability Zone1"
    },
    "EcsInstanceType1": {
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "SystemDiskCategory": "cloud_essd",
        "InstanceChargeType": "PostPaid",
        "ZoneId": "${Zone1}"
      },
      "Type": "String",
      "Label": "Instance Type Of Availability Zone1"
    }
  },
  "Rules": {
    "DifferentZones2": {
      "Assertions": [
        {
          "Assert": {
            "Fn::Not": {
              "Fn::Equals": [
                {
                  "Ref": "NasZone1"
                },
                {
                  "Ref": "NasZone2"
                }
              ]
            }
          },
          "AssertDescription": "NAS Zones must be different"
        }
      ]
    },
    "DifferentZones1": {
      "Assertions": [
        {
          "Assert": {
            "Fn::Not": {
              "Fn::Equals": [
                {
                  "Ref": "Zone1"
                },
                {
                  "Ref": "Zone2"
                }
              ]
            }
          },
          "AssertDescription": "ECS Zones must be different"
        }
      ]
    }
  },
  "Outputs": {
    "ECS1URL": {
      "Description": "ECS 1 URL",
      "Value": {
        "Fn::Sub": [
          "https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}",
          {
            "InstanceID": {
              "Fn::Select": [
                "0",
                {
                  "Fn::GetAtt": [
                    "EcsInstanceGroup1",
                    "InstanceIds"
                  ]
                }
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "FileSystemId1": {
      "Description": "Master NAS",
      "Value": {
        "Fn::Sub": [
          "https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}",
          {
            "InstanceID": {
              "Fn::GetAtt": [
                "MasterFileSystem",
                "FileSystemId"
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "ECS2URL": {
      "Description": "ECS 2 URL",
      "Value": {
        "Fn::Sub": [
          "https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}",
          {
            "InstanceID": {
              "Fn::Select": [
                "0",
                {
                  "Fn::GetAtt": [
                    "EcsInstanceGroup1",
                    "InstanceIds"
                  ]
                }
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "SlbIpAddress": {
      "Description": "Public IP Addresses",
      "Value": {
        "Fn::Sub": [
          "http://${ServerAddress}",
          {
            "ServerAddress": {
              "Fn::GetAtt": [
                "Slb",
                "IpAddress"
              ]
            }
          }
        ]
      }
    },
    "FileSystemId2": {
      "Description": "Backup NAS",
      "Value": {
        "Fn::Sub": [
          "https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}",
          {
            "InstanceID": {
              "Fn::GetAtt": [
                "BackupFileSystem",
                "FileSystemId"
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "MountInfo1": {
      "Description": "NAS mounting directory 1 on ECS",
      "Value": "/nas_master"
    },
    "MountInfo2": {
      "Description": "NAS mounting directory 2 on ECS",
      "Value": "/nas_backup"
    }
  },
  "Resources": {
    "SlbListener": {
      "Type": "ALIYUN::SLB::Listener",
      "Properties": {
        "Protocol": "http",
        "HealthCheck": {
          "HealthCheckType": "http",
          "Interval": 2,
          "URI": "/",
          "UnhealthyThreshold": 3,
          "HealthyThreshold": 3,
          "Timeout": 5,
          "HttpCode": "http_2xx,http_3xx,http_4xx,http_5xx",
          "Port": 80
        },
        "ListenerPort": 80,
        "Bandwidth": 10,
        "BackendServerPort": 80,
        "LoadBalancerId": {
          "Ref": "Slb"
        }
      },
      "DependsOn": [
        "Slb"
      ]
    },
    "EcsSecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "SecurityGroupIngress": [
          {
            "Priority": 1,
            "PortRange": "80/80",
            "NicType": "internet",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          }
        ],
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "SecurityGroupEgress": [
          {
            "Priority": 1,
            "PortRange": "-1/-1",
            "DestCidrIp": "0.0.0.0/0",
            "NicType": "internet",
            "IpProtocol": "all"
          },
          {
            "Priority": 1,
            "PortRange": "-1/-1",
            "DestCidrIp": "0.0.0.0/0",
            "NicType": "intranet",
            "IpProtocol": "all"
          }
        ],
        "SecurityGroupName": {
          "Fn::Sub": "${CommonName}_sg"
        }
      }
    },
    "MasterNasMountTarget": {
      "Type": "ALIYUN::NAS::MountTarget",
      "Properties": {
        "NetworkType": "Vpc",
        "FileSystemId": {
          "Ref": "MasterFileSystem"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "VSwitchId": {
          "Ref": "EcsVSwitch3"
        },
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME"
      }
    },
    "EcsVSwitch4": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_002"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.4.0/24",
        "ZoneId": {
          "Ref": "NasZone2"
        }
      }
    },
    "MasterFileSystem": {
      "Type": "ALIYUN::NAS::FileSystem",
      "Properties": {
        "StorageType": "Capacity",
        "ProtocolType": "NFS",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "Description": "MasterNAS",
        "ZoneId": {
          "Ref": "NasZone1"
        }
      }
    },
    "EcsVSwitch2": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_002"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.2.0/24",
        "ZoneId": {
          "Ref": "Zone2"
        }
      }
    },
    "EcsVSwitch3": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_002"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.3.0/24",
        "ZoneId": {
          "Ref": "NasZone1"
        }
      }
    },
    "EcsVSwitch1": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_001"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.1.0/24",
        "ZoneId": {
          "Ref": "Zone1"
        }
      }
    },
    "BackupFileSystem": {
      "Type": "ALIYUN::NAS::FileSystem",
      "Properties": {
        "StorageType": "Capacity",
        "ProtocolType": "NFS",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "Description": "BackupNAS",
        "ZoneId": {
          "Ref": "NasZone2"
        }
      }
    },
    "BackupNasMountTarget": {
      "Type": "ALIYUN::NAS::MountTarget",
      "Properties": {
        "NetworkType": "Vpc",
        "FileSystemId": {
          "Ref": "BackupFileSystem"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "VSwitchId": {
          "Ref": "EcsVSwitch4"
        },
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME"
      }
    },
    "EcsInstanceGroup1": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "SystemDiskCategory": "cloud_essd",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "SecurityGroupId": {
          "Ref": "EcsSecurityGroup"
        },
        "SystemDiskSize": 40,
        "ImageId": "aliyun_3_x64_20G_alibase_20230727.vhd",
        "SpotStrategy": "SpotAsPriceGo",
        "IoOptimized": "optimized",
        "VSwitchId": {
          "Ref": "EcsVSwitch1"
        },
        "Password": {
          "Ref": "InstancePassword"
        },
        "InstanceName": {
          "Fn::Sub": "${CommonName}_ecs_001"
        },
        "InstanceType": {
          "Ref": "EcsInstanceType1"
        },
        "ZoneId": {
          "Ref": "Zone1"
        },
        "MaxAmount": 1
      }
    },
    "EcsInstanceGroup2": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "SystemDiskCategory": "cloud_essd",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "SecurityGroupId": {
          "Ref": "EcsSecurityGroup"
        },
        "SystemDiskSize": 40,
        "ImageId": "aliyun_3_x64_20G_alibase_20230727.vhd",
        "SpotStrategy": "SpotAsPriceGo",
        "IoOptimized": "optimized",
        "VSwitchId": {
          "Ref": "EcsVSwitch2"
        },
        "Password": {
          "Ref": "InstancePassword"
        },
        "InstanceName": {
          "Fn::Sub": "${CommonName}_ecs_002"
        },
        "InstanceType": {
          "Ref": "EcsInstanceType2"
        },
        "ZoneId": {
          "Ref": "Zone2"
        },
        "MaxAmount": 1
      }
    },
    "EcsVpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "VpcName": {
          "Fn::Sub": "${CommonName}_vpc"
        },
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "SlbBackendServerAttachment": {
      "Type": "ALIYUN::SLB::BackendServerAttachment",
      "Properties": {
        "BackendServerList": {
          "Fn::ListMerge": [
            {
              "Fn::GetAtt": [
                "EcsInstanceGroup1",
                "InstanceIds"
              ]
            },
            {
              "Fn::GetAtt": [
                "EcsInstanceGroup2",
                "InstanceIds"
              ]
            }
          ]
        },
        "BackendServerWeightList": [
          100,
          100
        ],
        "LoadBalancerId": {
          "Ref": "Slb"
        }
      }
    },
    "Slb": {
      "Type": "ALIYUN::SLB::LoadBalancer",
      "Properties": {
        "AddressType": "internet",
        "LoadBalancerName": {
          "Fn::Sub": "${CommonName}-slb"
        },
        "InstanceChargeType": "PayByCLCU",
        "PayType": "PayOnDemand"
      }
    },
    "InstanceRunCommand": {
      "Type": "ALIYUN::ECS::RunCommand",
      "Properties": {
        "CommandContent": {
          "Fn::Sub": "#!/bin/bash\nif [ ! -f .ros.provision ]; then\n  echo \"Name: High-availability web service with shared storage\" > .ros.provision\nfi\n\nname=$(grep \"^Name:\" .ros.provision | awk -F':' '{print $2}' | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')\nif [[ \"$name\" != \"High-availability web service with shared storage\" ]]; then\n  echo \"The current instance has been configured using the one-click setup of the \\\"$name\\\" tutorial. You cannot use the one-click setup of this tutorial.\"\n  exit 0\nfi\n\necho \"#########################\"\necho \"# Check Network\"\necho \"#########################\"\nping -c 2 -W 2 aliyun.com > /dev/null\nif [[ $? -ne 0 ]]; then\n  echo \"The current instance cannot access the public network\"\n  exit 0\nfi\n\nif ! grep -q \"^Step1: Prepare Environment$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Prepare Environment\"\n  echo \"#########################\"\n  systemctl status firewalld\n  systemctl stop firewalld\n  echo \"Step1: Prepare Environment\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Environment has been ready\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step2: Install Nginx and deploy service$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Install Nginx\"\n  echo \"#########################\"\n  sudo yum -y install nginx\n  sudo wget -O /usr/share/nginx/html/index.html https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231013/jhgg/index.html\n  sudo wget -O /usr/share/nginx/html/lipstick.png https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230925/zevs/lipstick.png\n  sudo systemctl start nginx\n  sudo systemctl enable nginx\n  echo \"Step2: Install Nginx and deploy service\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Nginx has been installed\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step3: Mount to the ECS\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Mount to the ECS\"\n  echo \"#########################\"\n  mkdir /nas_master\n  mkdir /nas_backup\n  sudo yum install -y nfs-utils\n  sudo echo \"options sunrpc tcp_slot_table_entries=128\" >>  /etc/modprobe.d/sunrpc.conf\n  sudo echo \"options sunrpc tcp_max_slot_table_entries=128\" >>  /etc/modprobe.d/sunrpc.conf\n  sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${MasterNasMountTarget.MountTargetDomain}:/ /nas_master\n  sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup\n\n  sudo echo \"${MasterNasMountTarget.MountTargetDomain}:/ /nas_master nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0\" >> /etc/fstab\n  \n  sudo echo \"${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0\" >> /etc/fstab\n\n  df -h | grep aliyun\nelse\n  echo \"#########################\"\n  echo \"# The ECS has been attached to the Nas\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step4: Shared file$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Shared file\"\n  echo \"#########################\"\n  sudo cp -Lvr /usr/share/nginx/html /nas_master\n  sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak\n  echo \"Step4: Shared file\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# File has been Shared\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step5: Install inotify-tools and rsync$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Install inotify-tools and rsync\"\n  echo \"#########################\"\n  sudo yum install -y inotify-tools rsync\n  echo \"Step6: Install inotify-tools and rsync\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Inotify-tools has been installed\"\n  echo \"#########################\"\nfi\nif ! grep -q \"^Step6: Install synchronization server$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Install synchronization server\"\n  echo \"#########################\"\n  sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231017/pftz/sync_nas.sh\n  sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230925/wmaj/sync_check_switch.sh\n  sudo chmod +x /etc/systemd/system/sync_nas.sh\n  sudo chmod +x /etc/systemd/system/sync_check_switch.sh\n  cat > /etc/systemd/system/sync-check-switch.service << \\EOF\n[Unit]\nDescription=Sync Check Switch\nAfter=network.target\n\n[Service]\nExecStart=/etc/systemd/system/sync_check_switch.sh\nRestartSec=3\nRestart=always\n\n[Install]\nWantedBy=default.target\nEOF\n\n  cat > /etc/systemd/system/sync-nas.service << \\EOF\n[Unit]\nDescription=Sync NAS Service\nAfter=network.target\n\n[Service]\nExecStart=/etc/systemd/system/sync_nas.sh\nRestart=always\nRestartSec=3\n\n[Install]\nWantedBy=default.target\nEOF\n\n  sudo systemctl daemon-reload\n  sudo systemctl start sync-nas.service\n  sudo systemctl enable sync-check-switch.service\n  sudo systemctl start sync-check-switch.service\n  sudo systemctl enable sync-nas.service\n  echo \"Step6: Install\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Synchronization server has been installed\"\n  echo \"#########################\"\nfi"
        },
        "Type": "RunShellScript",
        "Sync": true,
        "InstanceIds": [
          {
            "Ref": "EcsInstanceGroup1"
          },
          {
            "Ref": "EcsInstanceGroup2"
          }
        ],
        "Timeout": "300"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "Zone1",
            "Zone2",
            "NasZone1",
            "NasZone2"
          ],
          "Label": {
            "default": "Availability Zone"
          }
        },
        {
          "Parameters": [
            "EcsInstanceType1",
            "EcsInstanceType2",
            "InstancePassword"
          ],
          "Label": {
            "default": "Instance Configure"
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:high-availability-architecture:high-availability-web-service-with-shared-storage-tech_solu_12"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [Public templates that use this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::SLB::BackendServerAttachment).
