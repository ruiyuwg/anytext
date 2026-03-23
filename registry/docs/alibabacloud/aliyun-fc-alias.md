The ALIYUN::FC::Alias type creates an alias for a service version in Function Compute.

## Syntax

```
{
  "Type": "ALIYUN::FC::Alias",
  "Properties": {
    "Description": String,
    "VersionId": String,
    "ServiceName": String,
    "AliasName": String,
    "AdditionalVersion": String,
    "AdditionalWeight": Integer
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Description

String

No

Yes

The description of the alias.

The value must be 1 to 256 characters in length.

VersionId

String

No

Yes

The version ID.

None

ServiceName

String

Yes

No

The name of the Function Compute service.

None

AliasName

String

Yes

Yes

Alias

The value must start with a letter or an underscore (\_). It must be 1 to 128 characters in length.

AdditionalVersion

String

No

Yes

The canary release version.

Cannot be the same as the main version.

AdditionalWeight

Integer

No

Yes

The weight of the canary release version.

The value must be an integer from 0 to 100.

## Return values

Fn::GetAtt

-   VersionId: The ID of the service version.
-   ServiceName: The name of the service.
-   AliasName: The name of the alias.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Description: Test FC Alias
    Parameters: {}
    Resources:
      Alias:
        Type: ALIYUN::FC::Alias
        Properties:
          ServiceName: mytest
          AliasName: TEST
    Outputs: {}
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Description": "Test FC Alias",
      "Parameters": {
      },
      "Resources": {
        "Alias": {
          "Type": "ALIYUN::FC::Alias",
          "Properties": {
            "ServiceName": "mytest",
            "AliasName": "TEST"
          }
        }
      },
      "Outputs": {
      }
    }
    ```
