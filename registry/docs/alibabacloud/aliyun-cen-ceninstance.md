ALIYUN::CEN::CenInstance is used to create a Cloud Enterprise Network (CEN) instance.

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenInstance",
  "Properties": {
    "Description": String,
    "Name": String,
    "ProtectionLevel": String,
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

Description

String

No

Yes

The description of the CEN instance.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

Name

String

No

Yes

The name of the CEN instance.

The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

ProtectionLevel

String

No

No

The level of CIDR block overlapping.

Set the value to REDUCED. A value of REDUCED specifies that CIDR blocks can overlap with each other but cannot be the same.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

Tags

List

No

Yes

The tags of the CEN instance.

You can add up to 20 tags.

For more information, see [Tags properties](#section-stb-q7p-pxx).

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

The key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   CenId: the ID of the CEN instance.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  CenInstance:
    Type: ALIYUN::CEN::CenInstance
    Properties:
      Name: TestCen
Outputs:
  CenId:
    Description: The ID of the request.
    Value:
      Fn::GetAtt:
        - CenInstance
        - CenId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "CenInstance": {
      "Type": "ALIYUN::CEN::CenInstance",
      "Properties": {
        "Name": "TestCen"
      }
    }
  },
  "Outputs": {
    "CenId": {
      "Description": "The ID of the request.",
      "Value": {
        "Fn::GetAtt": [
          "CenInstance",
          "CenId"
        ]
      }
    }
  }
}
```
