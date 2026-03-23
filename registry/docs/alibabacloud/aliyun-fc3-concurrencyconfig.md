ALIYUN::FC3::ConcurrencyConfig is used to configure reserved concurrency for a function in Function Compute 3.0.

## Syntax

```
{
  "Type": "ALIYUN::FC3::ConcurrencyConfig",
  "Properties": {
    "FunctionName": String,
    "ReservedConcurrency": Integer
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

FunctionName

String

Yes

No

The name of the function.

None.

ReservedConcurrency

Integer

Yes

No

The reserved concurrency of the function.

Other functions in your account cannot use the reserved concurrency. The reserved concurrency includes the total concurrency of provisioned instances and on-demand instances.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  FunctionName:
    Type: String
    Description:
      en: Function name.
    Required: true
  ReservedConcurrency:
    Type: Number
    Description:
      en: To reserve concurrency, functions reserve a portion of account concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
    Required: true
    MaxValue: 300
Resources:
  ConcurrencyConfig:
    Type: ALIYUN::FC3::ConcurrencyConfig
    Properties:
      FunctionName:
        Ref: FunctionName
      ReservedConcurrency:
        Ref: ReservedConcurrency
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FunctionName": {
      "Type": "String",
      "Description": {
        "en": "Function name."
      },
      "Required": true
    },
    "ReservedConcurrency": {
      "Type": "Number",
      "Description": {
        "en": "To reserve concurrency, functions reserve a portion of account concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume."
      },
      "Required": true,
      "MaxValue": 300
    }
  },
  "Resources": {
    "ConcurrencyConfig": {
      "Type": "ALIYUN::FC3::ConcurrencyConfig",
      "Properties": {
        "FunctionName": {
          "Ref": "FunctionName"
        },
        "ReservedConcurrency": {
          "Ref": "ReservedConcurrency"
        }
      }
    }
  }
}
                        
```
