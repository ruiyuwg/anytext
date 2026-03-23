ALIYUN::CR::Instance is used to create a Container Registry Enterprise Edition instance.

## Syntax

```
{
  "Type": "ALIYUN::CR::Instance",
  "Properties": {
    "InstanceStorageName": String,
    "InstanceName": String,
    "ResourceGroupId": String,
    "ImageScanner": String,
    "RenewalStatus": String,
    "RenewPeriod": Integer,
    "Period": Integer,
    "InstanceType": String
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

ImageScanner

String

No

No

The security scan engine for images.

Valid values:

-   ACR
    
-   SAS
    

InstanceName

String

Yes

No

The instance name.

None.

InstanceType

String

Yes

No

The type of the instance.

Valid values:

-   Basic
    
-   Standard
    
-   Advanced
    

Period

Integer

No

No

The subscription duration.

Unit: month.

If you want to create a yearly subscription instance, specify an integral multiple of 12.

**Note**

You must specify this property when you create a subscription instance.

InstanceStorageName

String

No

No

The name of the custom Object Storage Service (OSS) bucket that you want to use for the instance.

None.

RenewalStatus

String

No

No

The auto-renewal status.

Valid values:

-   AutoRenewal
    
-   ManualRenewal (default)
    

RenewPeriod

Integer

No

No

The auto-renewal period.

Unit: month.

**Note**

You must specify this property when RenewalStatus is set to AutoRenewal.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

## Return values

Fn::GetAtt

-   InstanceName: the instance name.
    
-   ModifiedTime: the time when the instance was modified.
    
-   ResourceGroupId: the ID of the resource group to which the instance belongs.
    
-   InstanceId: the instance ID.
    
-   InstanceSpecification: the instance specification.
    
-   CreateTime: the time when the instance was created.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::CR::Instance
    Properties:
      Period: 1
      InstanceName: test
      ImageScanner: ACR
      InstanceType: Basic
Outputs:
  InstanceName:
    Description: InstanceName.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - InstanceName
  ModifiedTime:
    Description: Last modification time.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ModifiedTime
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ResourceGroupId
  InstanceId:
    Description: The first ID of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - InstanceId
  InstanceSpecification:
    Description: InstanceSpecification.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - InstanceSpecification
  CreateTime:
    Description: The creation time of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CR::Instance",
      "Properties": {
        "Period": 1,
        "InstanceName": "test",
        "ImageScanner": "ACR",
        "InstanceType": "Basic"
      }
    }
  },
  "Outputs": {
    "InstanceName": {
      "Description": "InstanceName.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "InstanceName"
        ]
      }
    },
    "ModifiedTime": {
      "Description": "Last modification time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ModifiedTime"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResourceGroupId"
        ]
      }
    },
    "InstanceId": {
      "Description": "The first ID of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "InstanceId"
        ]
      }
    },
    "InstanceSpecification": {
      "Description": "InstanceSpecification.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "InstanceSpecification"
        ]
      }
    },
    "CreateTime": {
      "Description": "The creation time of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    }
  }
}
```
