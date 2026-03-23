ALIYUN::SAE::Namespace is used to create a Namespace.

## Syntax

```
{
  "Type": "ALIYUN::SAE::Namespace",
  "Properties": {
    "NamespaceName": String,
    "NamespaceId": String,
    "NamespaceDescription": String
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

NamespaceName

String

Yes

Yes

The name of the namespace.

None

NamespaceId

String

Yes

No

The ID of the namespace. For example: cn-hangzhou:test.

Valid values: `RegionId:LogicalId`. LogicalId can contain lowercase letters or digits.

NamespaceDescription

String

No

Yes

The description of the alarm task.

None

## Response parameters

Fn::GetAtt

NamespaceId: the ID of the namespace.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      Namespace:
        Type: ALIYUN::SAE::Namespace
        Properties:
          NamespaceName: TestNameSpace
          NamespaceId:
            Fn::Sub: ${ALIYUN::Region}:TestNameSpace
    Outputs:
      NamespaceId:
        Description: Namespace ID
        Value:
          Fn::GetAtt:
            - Namespace
            - NamespaceId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "Namespace": {
          "Type": "ALIYUN::SAE::Namespace",
          "Properties": {
            "NamespaceName": "TestNameSpace",
            "NamespaceId": {
              "Fn::Sub": "${ALIYUN::Region}:TestNameSpace"
            }
          }
        }
      },
      "Outputs": {
        "NamespaceId": {
          "Description": "Namespace ID",
          "Value": {
            "Fn::GetAtt": [
              "Namespace",
              "NamespaceId"
            ]
          }
        }
      }
    }
    ```
