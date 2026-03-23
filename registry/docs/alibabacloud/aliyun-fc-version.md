ALIYUN::FC::Version is used to release a Version.

## Syntax

```
{
  "Type": "ALIYUN::FC::Version",
  "Properties": {
    "ServiceName": String,
    "Description": String
  }
}
```

## Properties

     

Parameter

Type

Required

Editable

Description

Constraint

ServiceName

String

Yes

Not supported

Service name

None

Description

String

No

Released

Version description

None

## Return value

Fn::GetAtt

-   Version ID: The version ID.
-   ServiceName: The name of the function Compute Service.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      Version:
        Type: ALIYUN::FC::Version
        Properties:
          ServiceName: TestService
    Outputs:
      VersionId:
        Description: The version ID
        Value:
          Fn::GetAtt:
            - Version
            - VersionId
      ServiceName:
        Description: The service name
        Value:
          Fn::GetAtt:
            - Version
            - ServiceName
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "Version": {
          "Type": "ALIYUN::FC::Version",
          "Properties": {
            "ServiceName": "TestService"
          }
        }
      },
      "Outputs": {
        "VersionId": {
          "Description": "The version ID",
          "Value": {
            "Fn::GetAtt": [
              "Version",
              "VersionId"
            ]
          }
        },
        "ServiceName": {
          "Description": "The service name",
          "Value": {
            "Fn::GetAtt": [
              "Version",
              "ServiceName"
            ]
          }
        }
      }
    }
    ```
