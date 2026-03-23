ALIYUN::ROS::Sleep is used to delay the creation, deletion, update, and rollback of other resources.

## Syntax

```
{
  "Type": "ALIYUN::ROS::Sleep",
  "Properties": {
    "DeleteDuration": Number,
    "UpdateRollbackDuration": Number,
    "UpdateDuration": Number,
    "CreateDuration": Number,
    "Triggers": Map
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

DeleteDuration

Number

No

Yes

The time to wait before the resource is deleted.

Valid values: 0 to 1800.

Unit: seconds.

UpdateRollbackDuration

Number

No

Yes

The time to wait before a resource update is rolled back.

This property takes effect only if the stack is being rolled back and the value of the Triggers property is changed.

Valid values: 0 to 1800.

Unit: seconds.

UpdateDuration

Number

No

Yes

The time to wait before the resource is updated.

This property takes effect only if the stack is being updated and the value of the Triggers property is changed.

Valid values: 0 to 1800.

Unit: seconds.

CreateDuration

Number

No

No

The time to wait before the resource is created.

Valid values: 0 to 1800.

Unit: seconds.

Triggers

Map

No

Yes

The triggers that trigger the wait for a resource update and the wait for a resource update rollback.

The UpdateDuration or UpdateRollbackDuration property takes effect only if the stack is being updated or rolled back and the value of the Triggers property is changed.

## Response parameters

Fn::GetAtt

N/A

## Examples

In this example, the following resources are defined:

-   VPC: a virtual private cloud (VPC)
-   VSwitch: a vSwitch
-   SecurityGroup: a security group
-   Sleep: a custom delay period
-   CenterServer and OtherServer: two Elastic Compute Service (ECS) instances

The following content describes the two ECS instances that are created in the VPC:

-   The CenterServer instance contains a custom script. You need to deploy an NGINX service to send the public key on the CenterServer instance to the OtherServer instance. This way, the CenterServer instance can connect to the OtherServer instance without a password. The OtherServer instance can access services on the CenterServer instance base on the script on the OtherServer instance.
-   Set the CreateDuration property to 60. Unit: seconds. Wait for the application on the CenterServer instance to be deployed so that the OtherServer instance can access services on the CenterServer instance.
    
    **Note** You must specify the time to wait because the application on the CenterServer instance needs time to be installed and started after the CenterServer instance is created.
    

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ZoneId:
        Type: String
        Label: Availability Zone
        AssociationProperty: ALIYUN::ECS::Instance::ZoneId
        Description: VSwitch available Zone Id,
      CreateDuration:
        Type: Number
        Description: The number of seconds to wait before resource creation.
        MinValue: 0
        MaxValue: 1800
        Default: 60
      InstanceType:
        Type: String
        AssociationProperty: ALIYUN::ECS::Instance::InstanceType
        Label:
          en: Instance Type
        Description: Fill in specifications that can be used under the VSwitch availability zone.
        AssociationPropertyMetadata:
          ZoneId: ${ZoneId}
      SystemDiskCategory:
        Type: String
        AssociationProperty: ALIYUN::ECS::Disk::SystemDiskCategory
        AssociationPropertyMetadata:
          ZoneId: ${ZoneId}
          InstanceType: ${InstanceType}
        Label: System Disk Category
      InstancePassword:
        NoEcho: true
        Type: String
        Description: Server login password, Length 8-30, must contain three(Capital letters, lowercase letters, numbers.
        Label: Instance Password
        MinLength: 8
        MaxLength: 30
    Resources:
      VPC:
        Type: ALIYUN::ECS::VPC
        Properties:
          CidrBlock: 10.0.0.0/16
      VSwitch:
        Type: ALIYUN::ECS::VSwitch
        Properties:
          VpcId:
            Ref: VPC
          ZoneId:
            Ref: ZoneId
          CidrBlock: 10.0.1.0/24
      SecurityGroup:
        Type: ALIYUN::ECS::SecurityGroup
        Properties:
          VpcId:
            Ref: VPC
          SecurityGroupIngress:
            - Priority: 1
              PortRange: 80/80
              NicType: intranet
              SourceCidrIp: 0.0.0.0/0
              IpProtocol: tcp
            - Priority: 1
              PortRange: 22/22
              NicType: intranet
              SourceCidrIp: 100.104.0.0/16
              IpProtocol: tcp
      WaitConditionHandle:
        Type: ALIYUN::ROS::WaitConditionHandle
      CenterServer:
        Type: ALIYUN::ECS::InstanceGroup
        Properties:
          InstanceName: ControlServer
          ImageId: centos_7.9
          VpcId:
            Ref: VPC
          SecurityGroupId:
            Ref: SecurityGroup
          VSwitchId:
            Ref: VSwitch
          InstanceType:
            Ref: InstanceType
          Password:
            Ref: InstancePassword
          MaxAmount: 1
          AllocatePublicIP: false
          SystemDiskSize: '40'
          InstanceChargeType: PostPaid
          SystemDiskCategory:
            Ref: SystemDiskCategory
          UserData:
            Fn::Replace:
              - ros-notify:
                  Fn::GetAtt:
                    - WaitConditionHandle
                    - CurlCli
              - Fn::Join:
                  - |+
    
                  - - '#!/bin/sh'
                    - ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
                    - cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
                    - chmod 0600 ~/.ssh/authorized_keys
                    - pub_key=`cat /root/.ssh/id_rsa.pub`
                    - 'ros-notify -d "{\"status\" : \"SUCCESS\",\"id\" : \"ssh_pub_key\", \"data\" : \"$pub_key\"}" '
                    - yum install -y nginx
                    - mkdir -p /data/nginx
                    - echo "Hello World! This is service client ecs." > /data/nginx/index.html
                    - 'echo ''server {'' >> /etc/nginx/conf.d/server.conf '
                    - 'echo ''listen 80;'' >> /etc/nginx/conf.d/server.conf '
                    - 'echo ''server_name _;'' >> /etc/nginx/conf.d/server.conf '
                    - 'echo ''index index.html;'' >> /etc/nginx/conf.d/server.conf '
                    - 'echo ''root /data/nginx;'' >> /etc/nginx/conf.d/server.conf '
                    - 'echo ''}'' >> /etc/nginx/conf.d/server.conf '
                    - systemctl stop nginx
                    - systemctl start nginx
                    - systemctl enable nginx
      WaitCondition:
        Type: ALIYUN::ROS::WaitCondition
        Properties:
          Count: 1
          Handle:
            Ref: WaitConditionHandle
          Timeout: 1800
      Sleep:
        Type: ALIYUN::ROS::Sleep
        DependsOn: WaitCondition
        Properties:
          CreateDuration:
            Ref: CreateDuration
      OtherServer:
        Type: ALIYUN::ECS::InstanceGroup
        DependsOn: Sleep
        Properties:
          InstanceName: OtherServer
          ImageId: centos_7.9
          VpcId:
            Ref: VPC
          SecurityGroupId:
            Ref: SecurityGroup
          VSwitchId:
            Ref: VSwitch
          InstanceType:
            Ref: InstanceType
          Password:
            Ref: InstancePassword
          MaxAmount: 1
          AllocatePublicIP: false
          SystemDiskSize: 40
          InstanceChargeType: PostPaid
          SystemDiskCategory:
            Ref: SystemDiskCategory
          UserData:
            Fn::Join:
              - ''
              - - |
                  #!/bin/sh
                - ssh_pub_key='
                - Fn::GetAtt:
                    - WaitCondition
                    - Data
                - |
                  '
                - |
                  yum install -y jq
                - |
                  pub_key=`echo "$ssh_pub_key" | jq '.ssh_pub_key' | xargs echo `
                - |
                  echo "$pub_key" > /root/.ssh/authorized_keys
                - |
                  chmod 600 /root/.ssh/authorized_keys
                - 'curl '
                - Fn::Select:
                    - '0'
                    - Fn::GetAtt:
                        - CenterServer
                        - PrivateIps
                - |
                  :80
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ZoneId": {
          "Type": "String",
          "Label": "Availability Zone",
          "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
          "Description": "VSwitch available Zone Id,"
        },
        "CreateDuration": {
          "Type": "Number",
          "Description": "The number of seconds to wait before resource creation.",
          "MinValue": 0,
          "MaxValue": 1800,
          "Default": 60
        },
        "InstanceType": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
          "Label": {
            "en": "Instance Type"
          },
          "Description": "Fill in specifications that can be used under the VSwitch availability zone.",
          "AssociationPropertyMetadata": {
            "ZoneId": "${ZoneId}"
          }
        },
        "SystemDiskCategory": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::Disk::SystemDiskCategory",
          "AssociationPropertyMetadata": {
            "ZoneId": "${ZoneId}",
            "InstanceType": "${InstanceType}"
          },
          "Label": "System Disk Category"
        },
        "InstancePassword": {
          "NoEcho": true,
          "Type": "String",
          "Description": "Server login password, Length 8-30, must contain three(Capital letters, lowercase letters, numbers.",
          "Label": "Instance Password",
          "MinLength": 8,
          "MaxLength": 30
        }
      },
      "Resources": {
        "VPC": {
          "Type": "ALIYUN::ECS::VPC",
          "Properties": {
            "CidrBlock": "10.0.0.0/16"
          }
        },
        "VSwitch": {
          "Type": "ALIYUN::ECS::VSwitch",
          "Properties": {
            "VpcId": {
              "Ref": "VPC"
            },
            "ZoneId": {
              "Ref": "ZoneId"
            },
            "CidrBlock": "10.0.1.0/24"
          }
        },
        "SecurityGroup": {
          "Type": "ALIYUN::ECS::SecurityGroup",
          "Properties": {
            "VpcId": {
              "Ref": "VPC"
            },
            "SecurityGroupIngress": [
              {
                "Priority": 1,
                "PortRange": "80/80",
                "NicType": "intranet",
                "SourceCidrIp": "0.0.0.0/0",
                "IpProtocol": "tcp"
              },
              {
                "Priority": 1,
                "PortRange": "22/22",
                "NicType": "intranet",
                "SourceCidrIp": "100.104.0.0/16",
                "IpProtocol": "tcp"
              }
            ]
          }
        },
        "WaitConditionHandle": {
          "Type": "ALIYUN::ROS::WaitConditionHandle"
        },
        "CenterServer": {
          "Type": "ALIYUN::ECS::InstanceGroup",
          "Properties": {
            "InstanceName": "ControlServer",
            "ImageId": "centos_7.9",
            "VpcId": {
              "Ref": "VPC"
            },
            "SecurityGroupId": {
              "Ref": "SecurityGroup"
            },
            "VSwitchId": {
              "Ref": "VSwitch"
            },
            "InstanceType": {
              "Ref": "InstanceType"
            },
            "Password": {
              "Ref": "InstancePassword"
            },
            "MaxAmount": 1,
            "AllocatePublicIP": false,
            "SystemDiskSize": "40",
            "InstanceChargeType": "PostPaid",
            "SystemDiskCategory": {
              "Ref": "SystemDiskCategory"
            },
            "UserData": {
              "Fn::Replace": [
                {
                  "ros-notify": {
                    "Fn::GetAtt": [
                      "WaitConditionHandle",
                      "CurlCli"
                    ]
                  }
                },
                {
                  "Fn::Join": [
                    "\n",
                    [
                      "#!/bin/sh",
                      "ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa",
                      "cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys",
                      "chmod 0600 ~/.ssh/authorized_keys",
                      "pub_key=`cat /root/.ssh/id_rsa.pub`",
                      "ros-notify -d \"{\\\"status\\\" : \\\"SUCCESS\\\",\\\"id\\\" : \\\"ssh_pub_key\\\", \\\"data\\\" : \\\"$pub_key\\\"}\" ",
                      "yum install -y nginx",
                      "mkdir -p /data/nginx",
                      "echo \"Hello World! This is service client ecs.\" > /data/nginx/index.html",
                      "echo 'server {' >> /etc/nginx/conf.d/server.conf ",
                      "echo 'listen 80;' >> /etc/nginx/conf.d/server.conf ",
                      "echo 'server_name _;' >> /etc/nginx/conf.d/server.conf ",
                      "echo 'index index.html;' >> /etc/nginx/conf.d/server.conf ",
                      "echo 'root /data/nginx;' >> /etc/nginx/conf.d/server.conf ",
                      "echo '}' >> /etc/nginx/conf.d/server.conf ",
                      "systemctl stop nginx",
                      "systemctl start nginx",
                      "systemctl enable nginx"
                    ]
                  ]
                }
              ]
            }
          }
        },
        "WaitCondition": {
          "Type": "ALIYUN::ROS::WaitCondition",
          "Properties": {
            "Count": 1,
            "Handle": {
              "Ref": "WaitConditionHandle"
            },
            "Timeout": 1800
          }
        },
        "Sleep": {
          "Type": "ALIYUN::ROS::Sleep",
          "DependsOn": "WaitCondition",
          "Properties": {
            "CreateDuration": {
              "Ref": "CreateDuration"
            }
          }
        },
        "OtherServer": {
          "Type": "ALIYUN::ECS::InstanceGroup",
          "DependsOn": "Sleep",
          "Properties": {
            "InstanceName": "OtherServer",
            "ImageId": "centos_7.9",
            "VpcId": {
              "Ref": "VPC"
            },
            "SecurityGroupId": {
              "Ref": "SecurityGroup"
            },
            "VSwitchId": {
              "Ref": "VSwitch"
            },
            "InstanceType": {
              "Ref": "InstanceType"
            },
            "Password": {
              "Ref": "InstancePassword"
            },
            "MaxAmount": 1,
            "AllocatePublicIP": false,
            "SystemDiskSize": 40,
            "InstanceChargeType": "PostPaid",
            "SystemDiskCategory": {
              "Ref": "SystemDiskCategory"
            },
            "UserData": {
              "Fn::Join": [
                "",
                [
                  "#!/bin/sh\n",
                  "ssh_pub_key='",
                  {
                    "Fn::GetAtt": [
                      "WaitCondition",
                      "Data"
                    ]
                  },
                  "'\n",
                  "yum install -y jq\n",
                  "pub_key=`echo \"$ssh_pub_key\" | jq '.ssh_pub_key' | xargs echo `\n",
                  "echo \"$pub_key\" > /root/.ssh/authorized_keys\n",
                  "chmod 600 /root/.ssh/authorized_keys\n",
                  "curl ",
                  {
                    "Fn::Select": [
                      "0",
                      {
                        "Fn::GetAtt": [
                          "CenterServer",
                          "PrivateIps"
                        ]
                      }
                    ]
                  },
                  ":80\n"
                ]
              ]
            }
          }
        }
      }
    }
    ```
