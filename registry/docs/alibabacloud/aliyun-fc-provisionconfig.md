ALIYUN::FC::ProvisionConfig is used to create provisioned instances in Function Compute.

## Syntax

```
{
  "Type": "ALIYUN::FC::ProvisionConfig",
  "Properties": {
    "ServiceName": String,
    "Target": Integer,
    "FunctionName": String,
    "Qualifier": String
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

ServiceName

String

Yes

No

The name of the service.

None.

Target

Integer

Yes

Yes

The number of provisioned instances.

None.

FunctionName

String

Yes

No

The name of the function.

None.

Qualifier

String

Yes

No

The alias of the service.

None.

## Return values

Fn::GetAtt

-   ServiceName: the name of the service.
-   Resource: the description of the resource.
-   Target: the number of provisioned instances.
-   FunctionName: the name of the function.
-   Qualifier: the alias of the service.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      ProvisionConfig:
        Type: ALIYUN::FC::ProvisionConfig
        Properties:
          ServiceName: TestFCService
          Target: 1
          FunctionName: TestFCFunction
          Qualifier: TestFCAlias
    Parameters: {}
    Outputs:
      ServiceName:
        Description: The service name
        Value:
          Fn::GetAtt:
            - ProvisionConfig
            - ServiceName
      Resource:
        Description: The resource
        Value:
          Fn::GetAtt:
            - ProvisionConfig
            - Resource
      Target:
        Description: Number of provision
        Value:
          Fn::GetAtt:
            - ProvisionConfig
            - Target
      Qualifier:
        Description: The service alias
        Value:
          Fn::GetAtt:
            - ProvisionConfig
            - Qualifier
      FunctionName:
        Description: The function name
        Value:
          Fn::GetAtt:
            - ProvisionConfig
            - FunctionName
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "ProvisionConfig": {
          "Type": "ALIYUN::FC::ProvisionConfig",
          "Properties": {
            "ServiceName": "TestFCService",
            "Target": 1,
            "FunctionName": "TestFCFunction",
            "Qualifier": "TestFCAlias"
          }
        }
      },
      "Parameters": {
      },
      "Outputs": {
        "ServiceName": {
          "Description": "The service name",
          "Value": {
            "Fn::GetAtt": [
              "ProvisionConfig",
              "ServiceName"
            ]
          }
        },
        "Resource": {
          "Description": "The resource",
          "Value": {
            "Fn::GetAtt": [
              "ProvisionConfig",
              "Resource"
            ]
          }
        },
        "Target": {
          "Description": "Number of provision",
          "Value": {
            "Fn::GetAtt": [
              "ProvisionConfig",
              "Target"
            ]
          }
        },
        "Qualifier": {
          "Description": "The service alias",
          "Value": {
            "Fn::GetAtt": [
              "ProvisionConfig",
              "Qualifier"
            ]
          }
        },
        "FunctionName": {
          "Description": "The function name",
          "Value": {
            "Fn::GetAtt": [
              "ProvisionConfig",
              "FunctionName"
            ]
          }
        }
      }
    }
    ```
