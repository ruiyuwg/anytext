ALIYUN::CEN::CenBandwidthPackageAssociation is used to associate a bandwidth plan with a Cloud Enterprise Network (CEN) instance.

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenBandwidthPackageAssociation",
  "Properties": {
    "CenId": String,
    "CenBandwidthPackageId": String
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

CenBandwidthPackageId

String

Yes

No

The ID of the bandwidth plan.

None.

CenId

String

Yes

No

The ID of the CEN instance.

None.

## Return values

**Fn::GetAtt**

None.

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  CenBandwidthPackageAssociation:
    Type: ALIYUN::CEN::CenBandwidthPackageAssociation
    Properties:
      CenId:
        Ref: CenId
      CenBandwidthPackageId:
        Ref: CenBandwidthPackageId
Parameters:
  CenId:
    Type: String
    Description: The ID of the CEN instance.
  CenBandwidthPackageId:
    Type: String
    Description: The ID of the bandwidth package.
Outputs: {}
```

## JSON format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "CenBandwidthPackageAssociation": {
      "Type": "ALIYUN::CEN::CenBandwidthPackageAssociation",
      "Properties": {
        "CenId": {
          "Ref": "CenId"
        },
        "CenBandwidthPackageId": {
          "Ref": "CenBandwidthPackageId"
        }
      }
    }
  },
  "Parameters": {
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    },
    "CenBandwidthPackageId": {
      "Type": "String",
      "Description": "The ID of the bandwidth package."
    }
  },
  "Outputs": {}
}
```
