ALIYUN::SAG::CloudConnectNetwork is used to create a Cloud Connect Network (CCN) instance. CCN is a device matrix that consists of Alibaba Cloud distributed gateways. You can associate a CCN instance with a Cloud Enterprise Network (CEN) instance to enable network communication between on-premises networks and Alibaba Cloud.

## Syntax

```
{
  "Type": "ALIYUN::SAG::CloudConnectNetwork",
  "Properties": {
    "Description": String,
    "IsDefault": Boolean,
    "Name": String,
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

The description of the CCN instance.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

IsDefault

Boolean

No

No

Specifies whether the CCN instance is created by the system.

Valid values:

-   true
    
-   false (default)
    

Name

String

No

Yes

The name of the CCN instance.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-doq-eh0-2fb).

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

The key must be 1 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   CcnId: the ID of the CCN instance.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  CloudConnectNetwork:
    Type: ALIYUN::SAG::CloudConnectNetwork
    Properties:
      IsDefault: false
      Name: DemoCloudConnectNetwork
Outputs:
  CcnId:
    Description: The ID of the CCN instance.
    Value:
      Fn::GetAtt:
        - CloudConnectNetwork
        - CcnId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "CloudConnectNetwork": {
      "Type": "ALIYUN::SAG::CloudConnectNetwork",
      "Properties": {
        "IsDefault": false,
        "Name": "DemoCloudConnectNetwork"
      }
    }
  },
  "Outputs": {
    "CcnId": {
      "Description": "The ID of the CCN instance.",
      "Value": {
        "Fn::GetAtt": [
          "CloudConnectNetwork",
          "CcnId"
        ]
      }
    }
  }
}
```
