The ALIYUN::ESA::KvNamespace resource is used to create a key-value (KV) namespace.

## Syntax

```
{
  "Type": "ALIYUN::ESA::KvNamespace",
  "Properties": {
    "KvNamespace": String,
    "Description": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

KvNamespace

String

Yes

No

The name of the KV namespace.

None

Description

String

No

No

The description of the KV namespace.

None

## Return values

Fn::GetAtt

-   Description: The description of the KV namespace.
    
-   KvCapacityUsed: The used capacity of all KV namespaces in your account.
    
-   KvCapacity: The available capacity of all KV namespaces in your account. Unit: bytes.
    
-   KvCapacityString: The available capacity of all KV namespaces in your account.
    
-   NamespaceId: The ID of the KV namespace.
    
-   KvCapacityUsedString: The used capacity of all KV namespaces in your account.
    
-   KvNamespace: The name of the KV namespace.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  KvNamespace:
    Type: String
    Description:
      en: The name of the namespace.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::KvNamespace
    Properties:
      KvNamespace:
        Ref: KvNamespace
Outputs:
  Description:
    Description: The description of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  KvCapacityUsed:
    Description: 'The used capacity of the namespace. Unit: bytes.'
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - KvCapacityUsed
  KvCapacity:
    Description: 'The available capacity of the namespace. Unit: bytes.'
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - KvCapacity
  KvCapacityString:
    Description: The available capacity of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - KvCapacityString
  NamespaceId:
    Description: The ID of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NamespaceId
  KvCapacityUsedString:
    Description: The used capacity of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - KvCapacityUsedString
  KvNamespace:
    Description: The name of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - KvNamespace
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "KvNamespace": {
      "Type": "String",
      "Description": {
        "en": "The name of the namespace."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::KvNamespace",
      "Properties": {
        "KvNamespace": {
          "Ref": "KvNamespace"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "KvCapacityUsed": {
      "Description": "The used capacity of the namespace. Unit: bytes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "KvCapacityUsed"
        ]
      }
    },
    "KvCapacity": {
      "Description": "The available capacity of the namespace. Unit: bytes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "KvCapacity"
        ]
      }
    },
    "KvCapacityString": {
      "Description": "The available capacity of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "KvCapacityString"
        ]
      }
    },
    "NamespaceId": {
      "Description": "The ID of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NamespaceId"
        ]
      }
    },
    "KvCapacityUsedString": {
      "Description": "The used capacity of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "KvCapacityUsedString"
        ]
      }
    },
    "KvNamespace": {
      "Description": "The name of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "KvNamespace"
        ]
      }
    }
  }
}
                        
```
