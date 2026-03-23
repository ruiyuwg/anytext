ALIYUN::CR::InstanceVpcEndpointLinkedVpc is used to associate a virtual private cloud (VPC) with a Container Registry instance.

## Syntax

```
{
  "Type": "ALIYUN::CR::InstanceVpcEndpointLinkedVpc",
  "Properties": {
    "EnableCreateDNSRecordInPvzt": Boolean,
    "VpcId": String,
    "InstanceId": String,
    "ModuleName": String,
    "VswitchId": String
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

EnableCreateDNSRecordInPvzt

Boolean

No

No

Specifies whether to automatically create Alibaba Cloud DNS PrivateZone records.

Valid values:

-   true
    
-   false
    

**Note**

If you set this property to true, an Alibaba Cloud DNS PrivateZone record is automatically created when you associate a VPC with a Container Registry instance.

VpcId

String

Yes

No

The VPC ID.

None.

InstanceId

String

Yes

No

The instance ID.

None.

ModuleName

String

No

No

The module to be accessed.

Valid values:

-   Registry: an image repository
    
-   Chart: a Helm chart
    

VswitchId

String

Yes

No

The vSwitch ID.

None.

## Return values

Fn::GetAtt

-   VpcId: the VPC ID.
    
-   InstanceId: the instance ID.
    
-   VswitchId: the vSwitch ID.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ZoneId:
        Description:
          en: ECS VSwitch Zone ID.
        Type: String
        AssociationProperty: ALIYUN::ECS::Instance::ZoneId
      VpcId:
        Description:
          en: The ID of the vpc.
        Type: String
        AssociationProperty: ALIYUN::ECS::VPC::VPCId
      VswitchId:
        Description:
          en: The ID of the vswitch.
        Type: String
        AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
        AssociationPropertyMetadata: 
          VpcId: VpcId
          ZoneId: ZoneId
      InstanceId:
        Description:
          en: The ID of the instance.
        Type: String
      ModuleName:
        Default: Registry
        Description:
          en: 'The name of the module in the instance for which a whitelist is configured.
            Valid values:
    
            - **Registry** (default): Access the image repository.
    
            - **Chart**: Access Helm Chart.'
        Type: String
    Resources:
      InstanceVpcEndpointLinkedVpc:
        Properties:
          InstanceId:
            Ref: InstanceId
          ModuleName:
            Ref: ModuleName
          VpcId:
            Ref: VpcId
          VswitchId:
            Ref: VswitchId
        Type: ALIYUN::CR::InstanceVpcEndpointLinkedVpc
    Outputs:
      InstanceId:
        Description: The ID of the instance.
        Value:
          Fn::GetAtt:
          - InstanceVpcEndpointLinkedVpc
          - InstanceId
      VpcId:
        Description: The ID of the vpc.
        Value:
          Fn::GetAtt:
          - InstanceVpcEndpointLinkedVpc
          - VpcId
      VswitchId:
        Description: The ID of the vswitch.
        Value:
          Fn::GetAtt:
          - InstanceVpcEndpointLinkedVpc
          - VswitchId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ZoneId": {
          "Description": {
            "en": "ECS VSwitch Zone ID."
          },
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId"
        },
        "VpcId": {
          "Description": {
            "en": "The ID of the vpc."
          },
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
        },
        "VswitchId": {
          "Description": {
            "en": "The ID of the vswitch."
          },
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
          "AssociationPropertyMetadata": {
            "VpcId": "VpcId",
            "ZoneId": "ZoneId"
          }
        },
        "InstanceId": {
          "Description": {
            "en": "The ID of the instance."
          },
          "Type": "String"
        },
        "ModuleName": {
          "Default": "Registry",
          "Description": {
            "en": "The name of the module in the instance for which a whitelist is configured. Valid values:\n- **Registry** (default): Access the image repository.\n- **Chart**: Access Helm Chart."
          },
          "Type": "String"
        }
      },
      "Resources": {
        "InstanceVpcEndpointLinkedVpc": {
          "Properties": {
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "ModuleName": {
              "Ref": "ModuleName"
            },
            "VpcId": {
              "Ref": "VpcId"
            },
            "VswitchId": {
              "Ref": "VswitchId"
            }
          },
          "Type": "ALIYUN::CR::InstanceVpcEndpointLinkedVpc"
        }
      },
      "Outputs": {
        "InstanceId": {
          "Description": "The ID of the instance.",
          "Value": {
            "Fn::GetAtt": [
              "InstanceVpcEndpointLinkedVpc",
              "InstanceId"
            ]
          }
        },
        "VpcId": {
          "Description": "The ID of the vpc.",
          "Value": {
            "Fn::GetAtt": [
              "InstanceVpcEndpointLinkedVpc",
              "VpcId"
            ]
          }
        },
        "VswitchId": {
          "Description": "The ID of the vswitch.",
          "Value": {
            "Fn::GetAtt": [
              "InstanceVpcEndpointLinkedVpc",
              "VswitchId"
            ]
          }
        }
      }
    }
    ```
