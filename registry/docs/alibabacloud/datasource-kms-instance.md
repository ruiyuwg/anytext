DATASOURCE::KMS::Instance is used to query the information about a Key Management Service (KMS) instance.

## Syntax

```
{
  "Type": "DATASOURCE::KMS::Instance",
  "Properties": {
    "InstanceId": String,
    "RefreshOptions": String
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

InstanceId

String

Yes

Yes

The instance ID.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   InstanceName: the instance name.
    
-   VpcId: the ID of the virtual private cloud (VPC) in which the instance resides.
    
-   VpcNum: the access management quota of the instance.
    
-   InstanceId: the instance ID.
    
-   KeyNum: the number of keys that can be created for the instance.
    
-   VswitchIds: the vSwitches to which the instance is connected.
    
-   CreateTime: the time when the instance was created.
    
-   SecretNum: the number of secrets that can be created for the instance.
    
-   ZoneIds: the zones in which the instance resides.
    
-   Spec: the computing performance of the instance.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      InstanceId:
        Type: String
        Description:
          en: The ID of the KMS instance.
        Required: true
    Resources:
      ExtensionDataSource:
        Type: DATASOURCE::KMS::Instance
        Properties:
          InstanceId:
            Ref: InstanceId
    Outputs:
      InstanceName:
        Description: The name of the KMS instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - InstanceName
      VpcId:
        Description: The virtual private cloud (VPC) with which the KMS instance is associated..
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - VpcId
      VpcNum:
        Description: The number of managed accesses. The maximum number of VPCs that can access this KMS instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - VpcNum
      InstanceId:
        Description: The ID of the KMS instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - InstanceId
      KeyNum:
        Description: The number of keys that can be created for the KMS instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - KeyNum
      VswitchIds:
        Description: The VSwitch in the VPC.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - VswitchIds
      CreateTime:
        Description: The time when the KMS instance is created.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - CreateTime
      SecretNum:
        Description: The number of secrets that can be created for the KMS instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - SecretNum
      ZoneIds:
        Description: The zone with which the KMS instance is associated.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - ZoneIds
      Spec:
        Description: The computation performance level of the KMS instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - Spec
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "InstanceId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the KMS instance."
          },
          "Required": true
        }
      },
      "Resources": {
        "ExtensionDataSource": {
          "Type": "DATASOURCE::KMS::Instance",
          "Properties": {
            "InstanceId": {
              "Ref": "InstanceId"
            }
          }
        }
      },
      "Outputs": {
        "InstanceName": {
          "Description": "The name of the KMS instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "InstanceName"
            ]
          }
        },
        "VpcId": {
          "Description": "The virtual private cloud (VPC) with which the KMS instance is associated..",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "VpcId"
            ]
          }
        },
        "VpcNum": {
          "Description": "The number of managed accesses. The maximum number of VPCs that can access this KMS instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "VpcNum"
            ]
          }
        },
        "InstanceId": {
          "Description": "The ID of the KMS instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "InstanceId"
            ]
          }
        },
        "KeyNum": {
          "Description": "The number of keys that can be created for the KMS instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "KeyNum"
            ]
          }
        },
        "VswitchIds": {
          "Description": "The VSwitch in the VPC.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "VswitchIds"
            ]
          }
        },
        "CreateTime": {
          "Description": "The time when the KMS instance is created.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "CreateTime"
            ]
          }
        },
        "SecretNum": {
          "Description": "The number of secrets that can be created for the KMS instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "SecretNum"
            ]
          }
        },
        "ZoneIds": {
          "Description": "The zone with which the KMS instance is associated.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "ZoneIds"
            ]
          }
        },
        "Spec": {
          "Description": "The computation performance level of the KMS instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "Spec"
            ]
          }
        }
      }
    }
                            
    ```
