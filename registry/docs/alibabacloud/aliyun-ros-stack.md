ALIYUN::ROS::Stack is used to create a nested stack. You can nest stacks up to five levels of depth.

A nested stack can contain other nested stacks. This forms a hierarchy of stacks. The root stack is the parent stack to which all the nested stacks belong. The template of the root stack is called the top-level template. You can use ALIYUN::ROS::Stack to nest a stack as a resource in a top-level template.

In the template of a nested stack, you can use an output of a stack as an input to another stack. To obtain the output of a nested stack, you can use the Fn::GetAtt function and configure the name of the nested stack and the output name in the Outputs.NestedStackOutputName format for the function. For more information, see [Use nested stacks](/help/en/ros/user-guide/use-nested-stacks#concept-2370348).

## Syntax

```
{
  "Type": "ALIYUN::ROS::Stack",
  "Properties": {
    "TemplateURL": String,
    "TemplateBody": String,
    "TemplateId": String,
    "TemplateVersion": String,
    "TimeoutMins": Number,
    "Parameters": Map,
    "ResourceGroupId": String,
    "Tags": List
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

TemplateURL

String

No

Yes

The URL of the file that contains the template body.

The file that contains the template body can be up to 524,288 bytes in length. The URL can be up to 1,024 bytes in length.

The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as `oss://ros/template/demo` or `oss://ros/template/demo?RegionId=cn-hangzhou`.

If you do not specify the region ID of the OSS bucket, the region ID of the stack is used.

You must specify one of the `TemplateURL`, `TemplateBody`, and `TemplateId` properties. If you specify all the preceding properties, `TemplateBody` takes precedence.

TemplateBody

Map

No

Yes

The template content that is used to facilitate template delivery.

The content is raw data. Functions in the template content take effect only for the child templates.

You must specify one of the `TemplateURL`, `TemplateBody`, and `TemplateId` properties. If you specify all the preceding properties, `TemplateBody` takes precedence.

TemplateId

String

No

Yes

The template ID.

You must specify one of the `TemplateURL`, `TemplateBody`, and `TemplateId` properties. If you specify all the preceding properties, `TemplateBody` takes precedence.

TemplateVersion

String

No

Yes

The name of the template version.

None.

TimeoutMins

Number

No

Yes

The timeout period for creating or updating the parent stack.

Unit: minutes.

Default value: 60.

Parameters

Map

No

Yes

A set of key-value pairs that represent the parameters passed to Resource Orchestration Service (ROS) when the nested stack is created.

Each key and value in this property corresponds to a parameter name and a parameter value that are defined in the template of the nested stack. This property must be specified when the nested stack requires input parameters.

ResourceGroupId

String

No

No

The ID of the resource group.

None.

Tags

List

No

Yes

The tags.

You can specify up to 20 tags. For more information, see [Tags properties](#1122fcb350dyh).

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

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

You can use the following code to obtain the output of a nested stack:

```
{
  "Fn::GetAtt": [
    "<nested_stack>",
    "Outputs.<nested_stack_output_name>"
  ]
}
```

If you use `Ref` to reference resources of a nested stack, the Alibaba Cloud Resource Name (ARN) of the nested stack is returned. Example: `arn:acs:ros::cn-hangzhou:12345****:stacks/test-nested-stack-Demo-jzkyq7mn****/e71c1e04-1a57-46fc-b9a4-cf7ce0d3****`.

## Examples

The following sample code provides YAML and JSON examples on how to create a child stack. In the child stack, a virtual private cloud (VPC), a vSwitch, and a security group are created. The template of the child stack is stored in the oss://ros/template/vpc.txt directory.

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Description: One VPC, vSwitch, security group.
    Parameters:
      ZoneId:
        Type: String
        Description: The available zone
      SecurityGroupName:
        Type: String
        Description: The security group name
        Default: my-sg-name
      VpcName:
        Type: String
        Description: The VPC name
        MinLength: 2
        MaxLength: 128
        ConstraintDescription: '[2, 128] English or Chinese letters'
        Default: my-vpc-name
      VpcCidrBlock:
        Type: String
        AllowedValues:
          - 192.168.0.0/16
          - 172.16.0.0/12
          - 10.0.0.0/8
        Default: 10.0.0.0/8
      VSwitchCidrBlock:
        Type: String
        Description: The vSwitch subnet which must be within VPC
        Default: 10.0.10.0/24
      UpdateVersion:
        Type: Number
        Default: 0
    Resources:
      Vpc:
        Type: ALIYUN::ECS::VPC
        Properties:
          CidrBlock:
            Ref: VpcCidrBlock
          VpcName:
            Ref: VpcName
      VSwitch:
        Type: ALIYUN::ECS::VSwitch
        Properties:
          CidrBlock:
            Ref: VSwitchCidrBlock
          ZoneId:
            Ref: ZoneId
          VpcId:
            Fn::GetAtt:
              - Vpc
              - VpcId
      SecurityGroup:
        Type: ALIYUN::ECS::SecurityGroup
        Properties:
          SecurityGroupName:
            Ref: SecurityGroupName
          VpcId:
            Ref: Vpc
      WaitConditionHandle:
        Type: ALIYUN::ROS::WaitConditionHandle
        Properties:
          UpdateVersion:
            Ref: UpdateVersion
    Outputs:
      SecurityGroupId:
        Value:
          Fn::GetAtt:
            - SecurityGroup
            - SecurityGroupId
      VpcId:
        Value:
          Fn::GetAtt:
            - Vpc
            - VpcId
      VSwitchId:
        Value:
          Fn::GetAtt:
            - VSwitch
            - VSwitchId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Description": "One VPC, vSwitch, security group.",
      "Parameters": {
        "ZoneId": {
          "Type": "String",
          "Description": "The available zone"
        },
        "SecurityGroupName": {
          "Type": "String",
          "Description": "The security group name",
          "Default": "my-sg-name"
        },
        "VpcName": {
          "Type": "String",
          "Description": "The VPC name",
          "MinLength": 2,
          "MaxLength": 128,
          "ConstraintDescription": "[2, 128] English or Chinese letters",
          "Default": "my-vpc-name"
        },
        "VpcCidrBlock": {
          "Type": "String",
          "AllowedValues": [
            "192.168.0.0/16",
            "172.16.0.0/12",
            "10.0.0.0/8"
          ],
          "Default": "10.0.0.0/8"
        },
        "VSwitchCidrBlock": {
          "Type": "String",
          "Description": "The vSwitch subnet which must be within VPC",
          "Default": "10.0.10.0/24"
        },
        "UpdateVersion": {
          "Type": "Number",
          "Default": 0
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
              "Ref": "VpcName"
            }
          }
        },
        "VSwitch": {
          "Type": "ALIYUN::ECS::VSwitch",
          "Properties": {
            "CidrBlock": {
              "Ref": "VSwitchCidrBlock"
            },
            "ZoneId": {
              "Ref": "ZoneId"
            },
            "VpcId": {
              "Fn::GetAtt": [
                "Vpc",
                "VpcId"
              ]
            }
          }
        },
        "SecurityGroup": {
          "Type": "ALIYUN::ECS::SecurityGroup",
          "Properties": {
            "SecurityGroupName": {
              "Ref": "SecurityGroupName"
            },
            "VpcId": {
              "Ref": "Vpc"
            }
          }
        },
        "WaitConditionHandle": {
          "Type": "ALIYUN::ROS::WaitConditionHandle",
          "Properties": {
            "UpdateVersion": {
              "Ref": "UpdateVersion"
            }
          }
        }
      },
      "Outputs": {
        "SecurityGroupId": {
          "Value": {
            "Fn::GetAtt": [
              "SecurityGroup",
              "SecurityGroupId"
            ]
          }
        },
        "VpcId": {
          "Value": {
            "Fn::GetAtt": [
              "Vpc",
              "VpcId"
            ]
          }
        },
        "VSwitchId": {
          "Value": {
            "Fn::GetAtt": [
              "VSwitch",
              "VSwitchId"
            ]
          }
        }
      }
    }
    ```
    

The following sample code provides YAML and JSON examples on how to create a parent stack:

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Description: One ECS instance.
    Parameters:
      ImageId:
        Default: centos_7
        Type: String
        Description: Image Id, represents the image resource to startup the ECS instance
      InstanceType:
        Type: String
        Description: The ECS instance type,
        Default: ecs.xn4.small
      ZoneId:
        Type: String
        Description: 'The available zone '
      InstanceChargeType:
        Type: String
        AllowedValues:
          - PrePaid
          - PostPaid
        Default: PostPaid
        Description: The instance charge type
      SecurityGroupName:
        Type: String
        Description: The security group name
        Default: my-sg-name
      NetworkInterfaceName:
        Type: String
        Description: The Network interface name
        Default: my-eni-name
      VpcName:
        Type: String
        Description: The VPC name
        MinLength: 2
        MaxLength: 128
        ConstraintDescription: '[2, 128] English or Chinese letters'
        Default: my-vpc-name
      IoOptimized:
        AllowedValues:
          - none
          - optimized
        Description: IO optimized, optimized is for the IO optimized instance type
        Type: String
        Default: optimized
      SystemDiskCategory:
        AllowedValues:
          - cloud
          - cloud_efficiency
          - cloud_ssd
        Description: 'System disk category: average cloud disk(cloud), efficient cloud disk(cloud_efficiency) or SSD cloud disk(cloud_ssd)'
        Type: String
        Default: cloud_ssd
      VpcCidrBlock:
        Type: String
        AllowedValues:
          - 192.168.0.0/16
          - 172.16.0.0/12
          - 10.0.0.0/8
        Default: 10.0.0.0/8
      VSwitchCidrBlock:
        Type: String
        Description: The VSwitch subnet which must be within VPC
        Default: 10.0.10.0/24
      UpdateVersion:
        Type: Number
        Default: 0
    Resources:
      NetworkStack:
        Type: ALIYUN::ROS::Stack
        Properties:
          TemplateURL: oss://ros/template/vpc.txt
          TimeoutMins: 5
          Parameters:
            ZoneId:
              Ref: ZoneId
            SecurityGroupName:
              Ref: SecurityGroupName
            VpcName:
              Ref: VpcName
            VpcCidrBlock:
              Ref: VpcCidrBlock
            VSwitchCidrBlock:
              Ref: VSwitchCidrBlock
            UpdateVersion:
              Ref: UpdateVersion
      WebServer:
        Type: ALIYUN::ECS::Instance
        Properties:
          ImageId:
            Ref: ImageId
          InstanceType:
            Ref: InstanceType
          InstanceChargeType:
            Ref: InstanceChargeType
          SecurityGroupId:
            Fn::GetAtt:
              - NetworkStack
              - Outputs.SecurityGroupId
          VpcId:
            Fn::GetAtt:
              - NetworkStack
              - Outputs.VpcId
          VSwitchId:
            Fn::GetAtt:
              - NetworkStack
              - Outputs.VSwitchId
          IoOptimized:
            Ref: IoOptimized
          ZoneId:
            Ref: ZoneId
          SystemDisk_Category:
            Ref: SystemDiskCategory
          DiskMappings:
            - Category: cloud_ssd
              Size: 20
    Outputs:
      InstanceId:
        Value:
          Fn::GetAtt:
            - WebServer
            - InstanceId
      PublicIp:
        Value:
          Fn::GetAtt:
            - WebServer
            - PublicIp
      SecurityGroupId:
        Value:
          Fn::GetAtt:
            - NetworkStack
            - Outputs.SecurityGroupId
      VpcId:
        Value:
          Fn::GetAtt:
            - NetworkStack
            - Outputs.VpcId
      VSwitchId:
        Value:
          Fn::GetAtt:
            - NetworkStack
            - Outputs.VSwitchId
      NetworkStackArn:
        Value:
          Ref: NetworkStack
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Description": "One ECS instance.",
      "Parameters": {
        "ImageId": {
          "Default": "centos_7",
          "Type": "String",
          "Description": "Image Id, represents the image resource to startup the ECS instance"
        },
        "InstanceType": {
          "Type": "String",
          "Description": "The ECS instance type,",
          "Default": "ecs.xn4.small"
        },
        "ZoneId": {
          "Type": "String",
          "Description": "The available zone "
        },
        "InstanceChargeType": {
          "Type": "String",
          "AllowedValues": [
            "PrePaid",
            "PostPaid"
          ],
          "Default": "PostPaid",
          "Description": "The instance charge type"
        },
        "SecurityGroupName": {
          "Type": "String",
          "Description": "The security group name",
          "Default": "my-sg-name"
        },
        "NetworkInterfaceName": {
          "Type": "String",
          "Description": "The Network interface name",
          "Default": "my-eni-name"
        },
        "VpcName": {
          "Type": "String",
          "Description": "The VPC name",
          "MinLength": 2,
          "MaxLength": 128,
          "ConstraintDescription": "[2, 128] English or Chinese letters",
          "Default": "my-vpc-name"
        },
        "IoOptimized": {
          "AllowedValues": [
            "none",
            "optimized"
          ],
          "Description": "IO optimized, optimized is for the IO optimized instance type",
          "Type": "String",
          "Default": "optimized"
        },
        "SystemDiskCategory": {
          "AllowedValues": [
            "cloud",
            "cloud_efficiency",
            "cloud_ssd"
          ],
          "Description": "System disk category: average cloud disk(cloud), efficient cloud disk(cloud_efficiency) or SSD cloud disk(cloud_ssd)",
          "Type": "String",
          "Default": "cloud_ssd"
        },
        "VpcCidrBlock": {
          "Type": "String",
          "AllowedValues": [
            "192.168.0.0/16",
            "172.16.0.0/12",
            "10.0.0.0/8"
          ],
          "Default": "10.0.0.0/8"
        },
        "VSwitchCidrBlock": {
          "Type": "String",
          "Description": "The VSwitch subnet which must be within VPC",
          "Default": "10.0.10.0/24"
        },
        "UpdateVersion": {
          "Type": "Number",
          "Default": 0
        }
      },
      "Resources": {
        "NetworkStack": {
          "Type": "ALIYUN::ROS::Stack",
          "Properties": {
            "TemplateURL": "oss://ros/template/vpc.txt",
            "TimeoutMins": 5,
            "Parameters": {
              "ZoneId": {
                "Ref": "ZoneId"
              },
              "SecurityGroupName": {
                "Ref": "SecurityGroupName"
              },
              "VpcName": {
                "Ref": "VpcName"
              },
              "VpcCidrBlock": {
                "Ref": "VpcCidrBlock"
              },
              "VSwitchCidrBlock": {
                "Ref": "VSwitchCidrBlock"
              },
              "UpdateVersion": {
                "Ref": "UpdateVersion"
              }
            }
          }
        },
        "WebServer": {
          "Type": "ALIYUN::ECS::Instance",
          "Properties": {
            "ImageId": {
              "Ref": "ImageId"
            },
            "InstanceType": {
              "Ref": "InstanceType"
            },
            "InstanceChargeType": {
              "Ref": "InstanceChargeType"
            },
            "SecurityGroupId": {
              "Fn::GetAtt": [
                "NetworkStack",
                "Outputs.SecurityGroupId"
              ]
            },
            "VpcId": {
              "Fn::GetAtt": [
                "NetworkStack",
                "Outputs.VpcId"
              ]
            },
            "VSwitchId": {
              "Fn::GetAtt": [
                "NetworkStack",
                "Outputs.VSwitchId"
              ]
            },
            "IoOptimized": {
              "Ref": "IoOptimized"
            },
            "ZoneId": {
              "Ref": "ZoneId"
            },
            "SystemDisk_Category": {
              "Ref": "SystemDiskCategory"
            },
            "DiskMappings": [
              {
                "Category": "cloud_ssd",
                "Size": 20
              }
            ]
          }
        }
      },
      "Outputs": {
        "InstanceId": {
          "Value": {
            "Fn::GetAtt": [
              "WebServer",
              "InstanceId"
            ]
          }
        },
        "PublicIp": {
          "Value": {
            "Fn::GetAtt": [
              "WebServer",
              "PublicIp"
            ]
          }
        },
        "SecurityGroupId": {
          "Value": {
            "Fn::GetAtt": [
              "NetworkStack",
              "Outputs.SecurityGroupId"
            ]
          }
        },
        "VpcId": {
          "Value": {
            "Fn::GetAtt": [
              "NetworkStack",
              "Outputs.VpcId"
            ]
          }
        },
        "VSwitchId": {
          "Value": {
            "Fn::GetAtt": [
              "NetworkStack",
              "Outputs.VSwitchId"
            ]
          }
        },
        "NetworkStackArn": {
          "Value": {
            "Ref": "NetworkStack"
          }
        }
      }
    }
    ```
