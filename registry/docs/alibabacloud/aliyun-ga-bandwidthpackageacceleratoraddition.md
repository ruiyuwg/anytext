ALIYUN::GA::BandwidthPackageAcceleratorAddition is used to bind a bandwidth plan to a global acceleration instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BandwidthPackageAcceleratorAddition",
  "Properties": {
    "BandwidthPackageId": String,
    "AcceleratorId": String
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

BandwidthPackageId

String

Yes

No

The ID of the bandwidth plan that has been associated with the Global Acceleration instance.

None

AcceleratorId

String

Yes

No

The ID of the Global Acceleration instance with which you want to associate the bandwidth plan.

None

## Response parameters

Fn::GetAtt

-   BandwidthPackageId: the ID of the bandwidth plan bound to the global acceleration instance.
-   AcceleratorId: the ID of the global acceleration instance to bind to the bandwidth plan.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      BandwidthPackageId:
        Type: String
        Description: The ID of the bandwidth package to associate.
      AcceleratorId:
        Type: String
        Description: >-
          The ID of the Global Accelerator instance with which you want to associate
          the bandwidth
    
          plan.
    Resources:
      BandwidthPackageAcceleratorAddition:
        Type: 'ALIYUN::GA::BandwidthPackageAcceleratorAddition'
        Properties:
          BandwidthPackageId:
            Ref: BandwidthPackageId
          AcceleratorId:
            Ref: AcceleratorId
    Outputs:
      BandwidthPackageId:
        Description: The ID of the bandwidth package which is associated
        Value:
          'Fn::GetAtt':
            - BandwidthPackageAcceleratorAddition
            - BandwidthPackageId
      AcceleratorId:
        Description: The ID of the Global Accelerator instance
        Value:
          'Fn::GetAtt':
            - BandwidthPackageAcceleratorAddition
            - AcceleratorId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "BandwidthPackageId": {
          "Type": "String",
          "Description": "The ID of the bandwidth package to associate."
        },
        "AcceleratorId": {
          "Type": "String",
          "Description": "The ID of the Global Accelerator instance with which you want to associate the bandwidth\nplan."
        }
      },
      "Resources": {
        "BandwidthPackageAcceleratorAddition": {
          "Type": "ALIYUN::GA::BandwidthPackageAcceleratorAddition",
          "Properties": {
            "BandwidthPackageId": {
              "Ref": "BandwidthPackageId"
            },
            "AcceleratorId": {
              "Ref": "AcceleratorId"
            }
          }
        }
      },
      "Outputs": {
        "BandwidthPackageId": {
          "Description": "The ID of the bandwidth package which is associated",
          "Value": {
            "Fn::GetAtt": [
              "BandwidthPackageAcceleratorAddition",
              "BandwidthPackageId"
            ]
          }
        },
        "AcceleratorId": {
          "Description": "The ID of the Global Accelerator instance",
          "Value": {
            "Fn::GetAtt": [
              "BandwidthPackageAcceleratorAddition",
              "AcceleratorId"
            ]
          }
        }
      }
    }
    ```
