Use the ALIYUN::ESA::Kv resource type to set a single key-value pair in a KV bucket.

## Syntax

```
{
  "Type": "ALIYUN::ESA::Kv",
  "Properties": {
    "Key": String,
    "Namespace": String,
    "Value": String,
    "ExpirationTtl": Integer,
    "Expiration": Integer
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Key

String

Yes

No

The name of the key to set.

The value can be up to 512 characters in length. It cannot contain spaces or backslashes (/).

Namespace

String

Yes

No

The name of the KV bucket.

None

Value

String

Yes

Yes

The content of the key.

A maximum of 2 MB (2 × 1000 × 1000).

ExpirationTtl

Integer

No

No

The expiration time of the key.

The relative time in seconds. If you set both the Expiration and ExpirationTtl properties, the ExpirationTtl property takes precedence.

Expiration

Integer

No

No

The expiration time of the key.

A UNIX timestamp in seconds. The value cannot be earlier than the current time. If you set both the Expiration and ExpirationTtl properties, the ExpirationTtl property takes precedence.

## Return values

Fn::GetAtt

Value: The value of the key.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Value:
    Type: String
    Description: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
    Required: true
  Namespace:
    Type: String
    Description: The name specified when calling [CreatevNamespace] https://www.alibabacloud.com/help/document_detail/2850317.html.
    Required: true
  Key:
    Type: String
    Description: kv.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::Kv
    Properties:
      Value:
        Ref: Value
      Namespace:
        Ref: Namespace
      Key:
        Ref: Key
Outputs:
  Value:
    Description: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Value
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Value": {
      "Type": "String",
      "Description": "The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.",
      "Required": true
    },
    "Namespace": {
      "Type": "String",
      "Description": "The name specified when calling [CreatevNamespace] https://www.alibabacloud.com/help/document_detail/2850317.html.",
      "Required": true
    },
    "Key": {
      "Type": "String",
      "Description": "kv.",
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::Kv",
      "Properties": {
        "Value": {
          "Ref": "Value"
        },
        "Namespace": {
          "Ref": "Namespace"
        },
        "Key": {
          "Ref": "Key"
        }
      }
    }
  },
  "Outputs": {
    "Value": {
      "Description": "The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Value"
        ]
      }
    }
  }
}
                        
```
