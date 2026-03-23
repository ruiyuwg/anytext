ALIYUN::KMS::Alias is used to create an alias for a Customer Master Key (CMK).

## Syntax

```
{
  "Type": "ALIYUN::KMS::Alias",
  "Properties": {
    "KeyId": String,
    "AliasName": String
  }
}
```

## Properties

Name

Type

Required

Editable

Description

Validity

KeyId

String

Yes

No

The globally unique identifier of the CMK.

None

AliasName

String

Yes

No

The alias to give to the CMK. This alias can be used to call the Encrypt, GenerateDataKey, and DescribeKey operations.

Excluding the prefix, an alias must be 1 to 255 characters in length. The prefix alias/ must be included.

## Response parameters

Fn::GetAtt

None.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      Alias:
        Type: ALIYUN::KMS::Alias
        Properties:
          KeyId:
            Ref: KeyId
          AliasName: alias/test_key
    Parameters:
      KeyId:
        Type: String
        Description: Globally unique identifier of the CMK.
    Outputs: {}
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "Alias": {
          "Type": "ALIYUN::KMS::Alias",
          "Properties": {
            "KeyId": {
              "Ref": "KeyId"
            },
            "AliasName": "alias/test_key"
          }
        }
      },
      "Parameters": {
        "KeyId": {
          "Type": "String",
          "Description": "Globally unique identifier of the CMK."
        }
      },
      "Outputs": {}
    }
    ```
