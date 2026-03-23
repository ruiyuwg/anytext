ALIYUN::FC::Layer is used to release a layer version.

For more information about layers and layer versions, see [Configure custom layers for a function](/help/en/functioncompute/fc-2-0/user-guide/configure-custom-layers-for-a-function#task-2000745).

## Syntax

```
{
  "Type": "ALIYUN::FC::Layer",
  "Properties": {
    "CompatibleRuntime": List,
    "Description": String,
    "LayerName": String,
    "Code": Map
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

CompatibleRuntime

List

Yes

No

The runtimes supported by the layer.

Valid values:

-   nodejs12
    
-   nodejs10
    
-   nodejs8
    
-   nodejs6
    
-   python3
    

Description

String

No

No

The description of the layer.

None.

LayerName

String

Yes

No

The name of the layer.

The name must be 1 to 64 characters in length.

Code

Map

Yes

No

The ZIP package of the function code.

For more information, see [Code syntax](#section-xy4-ifh-ksy) and [Code properties](#section-brd-dl1-3s9).

## Code syntax

```
"Code": {
  "ZipFile": String,
  "OssObjectName": String,
  "OssBucketName": String
}
```

## Code properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ZipFile

String

No

No

The Base64-encoded content of the ZIP package.

ZipFile has a higher priority than OssBucketName and OssObjectName. The value of ZipFile takes precedence for Code.

OssObjectName

String

No

No

The name of the ZIP package that is used as an Object Storage Service (OSS) object.

You must specify both OssBucketName and OssObjectName.

OssBucketName

String

No

No

The name of the OSS bucket in which the ZIP package is stored.

You must specify both OssBucketName and OssObjectName.

## Return values

Fn::GetAtt

-   LayerName: the name of the layer.
    
-   Version: the version of the layer.
    
-   Arn: the Alibaba Cloud Resource Name (ARN) of the layer.
    

## Examples

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CompatibleRuntime": {
      "Type": "Json",
      "Description": "The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3",
      "MinLength": 1,
      "Default": "[\n  \"python3\"\n]"
    },
    "Description": {
      "Type": "String",
      "Description": "The description of the layer.",
      "Default": "test123"
    },
    "LayerName": {
      "Type": "String",
      "Description": "The name of layer",
      "AllowedPattern": "[a-zA-Z][_a-zA-Z0-9-]+",
      "MinLength": 1,
      "MaxLength": 64,
      "Default": "test123"
    },
    "Code": {
      "Type": "Json",
      "Description": "The code of layer.",
      "Default": "{\n  \"OssBucketName\": \"you_bucket_name\",\n  \"OssObjectName\": \"index.py\"\n}"
    }
  },
  "Resources": {
    "Layer": {
      "Type": "ALIYUN::FC::Layer",
      "Properties": {
        "CompatibleRuntime": {
          "Ref": "CompatibleRuntime"
        },
        "Description": {
          "Ref": "Description"
        },
        "LayerName": {
          "Ref": "LayerName"
        },
        "Code": {
          "Ref": "Code"
        }
      }
    }
  },
  "Outputs": {
    "LayerName": {
      "Description": "The name of layer",
      "Value": {
        "Fn::GetAtt": [
          "Layer",
          "LayerName"
        ]
      }
    },
    "Version": {
      "Description": "The version of the layer resource.",
      "Value": {
        "Fn::GetAtt": [
          "Layer",
          "Version"
        ]
      }
    },
    "Arn": {
      "Description": "The name of the layer resource.",
      "Value": {
        "Fn::GetAtt": [
          "Layer",
          "Arn"
        ]
      }
    }
  }
}
```
