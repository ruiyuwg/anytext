ALIYUN::VPC::CommonBandwidthPackageIp is used to add EIPs to the Internet shared bandwidth instance.

**Note** When calling this operation to add an EIP, note the following:

-   Only pay-as-you-go EIPs can be added.
-   The EIP and the Internet shared bandwidth instance must be in the same region.

## Statement

```
{
  "Type": "ALIYUN::VPC::CommonBandwidthPackageIp",
  "Properties": {
    "Eips": List,
    "BandwidthPackageId": String
  }
}
```

## Properties

     

Parameter

Type

Required

Editable

Description

Constraint

Eips

List

Yes

No

The EIP to be added.

None.

BandwidthPackageId

String

Yes

No

The ID of the Internet shared bandwidth instance.

None.

## Eips syntax

```
"Eips": [
  {
    "Bandwidth": Integer,
    "AllocationId": String
  }
]
```

## Eips

     

Parameter

Type

Required

Editable

Description

Constraint

Bandwidth

Integer

Not granted

Not granted

The peak bandwidth.

0 indicates unlimited.

Default value: 0.

AllocationId

String

Yes

No

The instance ID of the elastic IP address.

Valid values: 1025 to 10000. You cannot use the following commonly used port numbers: 2222, 4500, 4510, 4560, 7505, 9000, 9001, and 9002.

## Return value

Fn::GetAtt

-   AllocationIds: The IDs of all EIPs.
-   IpAddresses: All EIPs.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      BandwidthPackageId:
        Type: String
        Description: The ID of the Internet Shared Bandwidth instance.
    Resources:
      CommonBandwidthPackageIp:
        Type: ALIYUN::VPC::CommonBandwidthPackageIp
        Properties:
          Eips:
            - Bandwidth: 5
              AllocationId: eip-8vbwv47kgXXXXXXXXX
          BandwidthPackageId:
            Ref: BandwidthPackageId
    Outputs:
      AllocationIds:
        Description: All eip allocation ids of common bandwidth package.
        Value:
          Fn::GetAtt:
            - CommonBandwidthPackageIp
            - AllocationIds
      IpAddresses:
        Description: All eip addresses of common bandwidth package.
        Value:
          Fn::GetAtt:
            - CommonBandwidthPackageIp
            - IpAddresses
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "CommonBandwidthPackageIp": {
          "Type": "ALIYUN::VPC::CommonBandwidthPackageIp",
          "Properties": {
            "Eips": {
              "Ref": "Eips"
            },
            "BandwidthPackageId": {
              "Ref": "BandwidthPackageId"
            }
          }
        }
      },
      "Parameters": {
        "Eips": {
          "Type": "Json",
          "Description": "List of eip associated with the Internet Shared Bandwidth instance."
        },
        "BandwidthPackageId": {
          "Type": "String",
          "Description": "The ID of the Internet Shared Bandwidth instance."
        }
      },
      "Outputs": {
        "AllocationIds": {
          "Description": "All eip allocation ids of common bandwidth package.",
          "Value": {
            "Fn::GetAtt": [
              "CommonBandwidthPackageIp",
              "AllocationIds"
            ]
          }
        },
        "IpAddresses": {
          "Description": "All eip addresses of common bandwidth package.",
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
