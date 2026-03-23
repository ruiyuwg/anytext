ALIYUN::VPC::EIPSegment is used to apply for contiguous elastic IP addresses (EIPs).

## Syntax

```
{
  "Type": "ALIYUN::VPC::EIPSegment",
  "Properties": {
    "EipMask": Integer,
    "ResourceGroupId": String,
    "Netmode": String,
    "Bandwidth": Integer,
    "InternetChargeType": String
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

EipMask

Integer

Yes

No

The subnet mask length for the contiguous EIPs.

Valid values:

-   28: The system allocates 16 contiguous EIPs in each call.
    
-   27: The system allocates 32 contiguous EIPs in each call.
    
-   26: The system allocates 64 contiguous EIPs in each call.
    
-   25: The system allocates 128 contiguous EIPs in each call.
    
-   24: The system allocates 256 contiguous EIPs in each call.
    

**Note**

The actual number of requested EIPs may be less than the expected number because one, three, or four EIPs may be reserved.

ResourceGroupId

String

No

No

The ID of the resource group.

None.

Netmode

String

No

No

The network type of the contiguous EIPs.

Valid values:

-   public (default): Internet. After you associate the contiguous EIPs with cloud resources, the cloud resources can access the Internet by using the EIPs.
    
-   hybrid: hybrid cloud. After you associate the contiguous EIPs with cloud resources, the cloud resources can access hybrid clouds by using the EIPs.
    

**Note**

Only users who are included in the whitelist can set Netmode to hybrid. To use this network type, contact your business manager.

Bandwidth

Integer

No

No

The maximum bandwidth of the EIP.

Default value: 5.

Unit: Mbit/s.

InternetChargeType

String

No

No

The billing method of the contiguous EIPs.

Valid values:

-   PayByBandwidth (default): pay-by-bandwidth
    
-   PayByTraffic: pay-by-data-transfer
    

**Note**

When Netmode is set to hybrid, you can set InternetChangeType only to PayByBandwidth.

## Return values

Fn::GetAtt

-   EipSegmentInstanceId: the ID of the contiguous EIP group.
    
-   EipAddresses: the EIPs.
    

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  EipMask:
    Type: Number
    Description: |-
      The mask of the contiguous EIP group. Valid values:
      28: 16 contiguous EIPs are allocated for one call.
      27: 32 contiguous EIPs are allocated for one call.
      26: 64 contiguous EIPs are allocated for one call.
      25: 128 contiguous EIPs are allocated for one call.
      24: 256 contiguous EIPs are allocated for one call.
      Note The actual number of assigned EIPs may be less than the expected number because one,
      three, or four EIPs may be reserved.
    AllowedValues:
      - 28
      - 27
      - 26
      - 25
      - 24
    Default: 28
  ResourceGroupId:
    Type: String
    Description: The ID of the resource group to which the EIPs belong.
    Default: Null
  Netmode:
    Type: String
    Description: |-
      The network type. Valid values:
      public: the Internet. This is the default value. After contiguous EIPs are associated with
      cloud resources, the cloud resources can access the Internet by using the EIPs.
      hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
      cloud resources can access the hybrid cloud by using the EIPs.
      Note This network type is available only to users who are added to the whitelist. To use
      this network type, contact your customer manager.
    AllowedValues:
      - public
      - hybrid
    Default: public
  Bandwidth:
    Type: Number
    Description: 'The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.'
    Default: 5
  InternetChargeType:
    Type: String
    Description: |-
      The metering method of the contiguous EIPs. Valid values:
      PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
      PayByTraffic: Fees are charged based on data transfer.
      Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
    AllowedValues:
      - PayByBandwidth
      - PayByTraffic
    Default: PayByBandwidth
Resources:
  EIPSegment:
    Type: ALIYUN::VPC::EIPSegment
    Properties:
      EipMask:
        Ref: EipMask
      ResourceGroupId:
        Ref: ResourceGroupId
      Netmode:
        Ref: Netmode
      Bandwidth:
        Ref: Bandwidth
      InternetChargeType:
        Ref: InternetChargeType
Outputs:
  EipSegmentInstanceId:
    Description: The ID of the contiguous EIP group.
    Value:
      Fn::GetAtt:
        - EIPSegment
        - EipSegmentInstanceId
  EipAddresses:
    Description: 'List of EIP addresses. like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]'
    Value:
      Fn::GetAtt:
        - EIPSegment
        - EipAddresses
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EipMask": {
      "Type": "Number",
      "Description": "The mask of the contiguous EIP group. Valid values:\n28: 16 contiguous EIPs are allocated for one call.\n27: 32 contiguous EIPs are allocated for one call.\n26: 64 contiguous EIPs are allocated for one call.\n25: 128 contiguous EIPs are allocated for one call.\n24: 256 contiguous EIPs are allocated for one call.\nNote The actual number of assigned EIPs may be less than the expected number because one,\nthree, or four EIPs may be reserved.",
      "AllowedValues": [
        28,
        27,
        26,
        25,
        24
      ],
      "Default": 28
    },
    "ResourceGroupId": {
      "Type": "String",
      "Description": "The ID of the resource group to which the EIPs belong.",
      "Default": null
    },
    "Netmode": {
      "Type": "String",
      "Description": "The network type. Valid values:\npublic: the Internet. This is the default value. After contiguous EIPs are associated with\ncloud resources, the cloud resources can access the Internet by using the EIPs.\nhybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the\ncloud resources can access the hybrid cloud by using the EIPs.\nNote This network type is available only to users who are added to the whitelist. To use\nthis network type, contact your customer manager.",
      "AllowedValues": [
        "public",
        "hybrid"
      ],
      "Default": "public"
    },
    "Bandwidth": {
      "Type": "Number",
      "Description": "The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.",
      "Default": 5
    },
    "InternetChargeType": {
      "Type": "String",
      "Description": "The metering method of the contiguous EIPs. Valid values:\nPayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.\nPayByTraffic: Fees are charged based on data transfer.\nNote If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.",
      "AllowedValues": [
        "PayByBandwidth",
        "PayByTraffic"
      ],
      "Default": "PayByBandwidth"
    }
  },
  "Resources": {
    "EIPSegment": {
      "Type": "ALIYUN::VPC::EIPSegment",
      "Properties": {
        "EipMask": {
          "Ref": "EipMask"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "Netmode": {
          "Ref": "Netmode"
        },
        "Bandwidth": {
          "Ref": "Bandwidth"
        },
        "InternetChargeType": {
          "Ref": "InternetChargeType"
        }
      }
    }
  },
  "Outputs": {
    "EipSegmentInstanceId": {
      "Description": "The ID of the contiguous EIP group.",
      "Value": {
        "Fn::GetAtt": [
          "EIPSegment",
          "EipSegmentInstanceId"
        ]
      }
    },
    "EipAddresses": {
      "Description": "List of EIP addresses. like [{\"AllocationId\": \"eip-xxx\", \"IpAddress\": \"xx.xx.xx.xx\"}]",
      "Value": {
        "Fn::GetAtt": [
          "EIPSegment",
          "EipAddresses"
        ]
      }
    }
  }
}
```
