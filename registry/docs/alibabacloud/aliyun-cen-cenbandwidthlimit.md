ALIYUN::CEN::CenBandwidthLimit is used to configure the bandwidth for cross-region interconnection in a bandwidth plan.

**Important**

After ALIYUN::CEN::CenBandwidthLimit is deleted, the bandwidth is not restored to the original bandwidth before ALIYUN::CEN::CenBandwidthLimit is created.

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenBandwidthLimit",
  "Properties": {
    "OppositeRegionId": String,
    "CenId": String,
    "BandwidthLimit": Integer,
    "BandwidthType": String,
    "LocalRegionId": String
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

BandwidthLimit

Integer

Yes

Yes

The maximum bandwidth for the interconnection between two regions.

Minimum value: 1.

CenId

String

Yes

No

The ID of the Cloud Enterprise Network (CEN) instance.

None.

LocalRegionId

String

Yes

No

The ID of the local region.

None.

OppositeRegionId

String

Yes

No

The ID of the peer region.

None.

BandwidthType

String

No

No

The bandwidth allocation method.

-   Set the value to **BandwidthPackage**. A value of BandwidthPackage specifies that bandwidth is allocated from a bandwidth plan.
    

## Return values

Fn::GetAtt

None.

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  CenBandwidthLimit:
    Type: ALIYUN::CEN::CenBandwidthLimit
    Properties:
      OppositeRegionId:
        Ref: OppositeRegionId
      CenId:
        Ref: CenId
      BandwidthLimit:
        Ref: BandwidthLimit
      LocalRegionId:
        Ref: LocalRegionId
Parameters:
  OppositeRegionId:
    Type: String
    Description: The ID of the other interconnected region.
  CenId:
    Type: String
    Description: The ID of the CEN instance.
  BandwidthLimit:
    Type: Number
    Description: 'The bandwidth configured for the interconnected regions communication. Minimal value: 1'
    MinValue: 1
  LocalRegionId:
    Type: String
    Description: The ID of the local region.
Outputs: {}
```

## JSON format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "CenBandwidthLimit": {
      "Type": "ALIYUN::CEN::CenBandwidthLimit",
      "Properties": {
        "OppositeRegionId": {
          "Ref": "OppositeRegionId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "BandwidthLimit": {
          "Ref": "BandwidthLimit"
        },
        "LocalRegionId": {
          "Ref": "LocalRegionId"
        }
      }
    }
  },
  "Parameters": {
    "OppositeRegionId": {
      "Type": "String",
      "Description": "The ID of the other interconnected region."
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    },
    "BandwidthLimit": {
      "Type": "Number",
      "Description": "The bandwidth configured for the interconnected regions communication. Minimal value: 1",
      "MinValue": 1
    },
    "LocalRegionId": {
      "Type": "String",
      "Description": "The ID of the local region."
    }
  },
  "Outputs": {}
}
```
