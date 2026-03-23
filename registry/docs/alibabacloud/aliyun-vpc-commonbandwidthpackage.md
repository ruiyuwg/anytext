ALIYUN::VPC::CommonBandwidthPackage is used to create an Internet Shared Bandwidth instance.

**Note**

You can use the ALIYUN::VPC::CommonBandwidthPackage resource type to create only a pay-as-you-go Internet Shared Bandwidth instance.

## Syntax

```
{
  "Type": "ALIYUN::VPC::CommonBandwidthPackage",
  "Properties": {
    "Description": String,
    "Zone": String,
    "ISP": String,
    "ResourceGroupId": String,
    "Bandwidth": Integer,
    "InternetChargeType": String,
    "Name": String,
    "DeletionProtection": Boolean
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

Description

String

No

Yes

The description of the Internet Shared Bandwidth instance.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

Zone

String

No

No

The zone of the Internet Shared Bandwidth instance.

You do not need to specify this property.

ISP

String

No

No

The line type of the elastic IP address (EIP).

Set the value to BGP. A value of BGP specifies BGP (Multi-ISP).

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

Bandwidth

Integer

Yes

Yes

The maximum bandwidth of the Internet Shared Bandwidth instance.

Valid values: 2 to 5000.

Unit: Mbit/s.

InternetChargeType

String

No

No

The metering method of the Internet Shared Bandwidth instance.

Valid values:

-   PayByBandwidth (default): pay-by-bandwidth.
    
-   PayBy95: pay-by-enhanced-95th-percentile.
    

Name

String

No

Yes

The name of the Internet Shared Bandwidth instance.

The description must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-lkc-fkh-ji7).

DeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection.

Valid values:

-   true
    
-   false (default)
    

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

The key of the tag.

The key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   BandwidthPackageId: the ID of the Internet Shared Bandwidth instance.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  CommonBandwidthPackage:
    Type: ALIYUN::VPC::CommonBandwidthPackage
    Properties:
      Description: Test
      Name: test-dsa
      Bandwidth: 5
      InternetChargeType: PayByBandwidth
Outputs:
  BandwidthPackageId:
    Description: The ID of the Internet Shared Bandwidth instance.
    Value:
      Fn::GetAtt:
        - CommonBandwidthPackage
        - BandwidthPackageId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "CommonBandwidthPackage": {
      "Type": "ALIYUN::VPC::CommonBandwidthPackage",
      "Properties": {
        "Description": "Test",
        "Name": "test-dsa",
        "Bandwidth": 5,
        "InternetChargeType": "PayByBandwidth"
      }
    }
  },
  "Outputs": {
    "BandwidthPackageId": {
      "Description": "The ID of the Internet Shared Bandwidth instance.",
      "Value": {
        "Fn::GetAtt": [
          "CommonBandwidthPackage",
          "BandwidthPackageId"
        ]
      }
    }
  }
}{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "CommonBandwidthPackage": {
      "Type": "ALIYUN::VPC::CommonBandwidthPackage",
      "Properties": {
        "Description": "Test",
        "Name": "test-dsa",
        "Bandwidth": 5,
        "InternetChargeType": "PayByBandwidth"
      }
    }
  },
  "Outputs": {
    "BandwidthPackageId": {
      "Description": "The ID of the Internet Shared Bandwidth instance.",
      "Value": {
        "Fn::GetAtt": [
          "CommonBandwidthPackage",
          "BandwidthPackageId"
        ]
      }
    }
  }
}
```
