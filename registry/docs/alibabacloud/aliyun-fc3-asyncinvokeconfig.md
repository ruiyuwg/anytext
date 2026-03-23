ALIYUN::FC3::AsyncInvokeConfig type is used to specify the asynchronous invocation configuration for a function.

## Syntax

```
{
  "Type": "ALIYUN::FC3::AsyncInvokeConfig",
  "Properties": {
    "FunctionName": String,
    "AsyncTask": Boolean,
    "DestinationConfig": Map,
    "MaxAsyncEventAgeInSeconds": Integer,
    "MaxAsyncRetryAttempts": Integer
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

FunctionName

String

Yes

No

The name of the function.

None

AsyncTask

Boolean

No

No

Specifies whether to enable asynchronous tasks.

None

DestinationConfig

Map

No

No

The destination configuration.

For more information, see [DestinationConfig properties](#1fde54e745hjb).

MaxAsyncEventAgeInSeconds

Integer

No

No

The maximum time to live (TTL) of an event, in seconds.

{'Range': {'Min': 1, 'Max': 604800}}

MaxAsyncRetryAttempts

Integer

No

No

The maximum number of retries for an asynchronous invocation.

None

## DestinationConfig syntax

```
"DestinationConfig": {
  "OnSuccess": Map,
  "OnFailure": Map
}
```

## DestinationConfig properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

OnSuccess

Map

No

No

The destination struct for a successful callback.

For more information, see [OnSuccess property](#60751b84e1lrg).

OnFailure

Map

No

No

The destination struct for a failed callback.

For more information, see [OnFailure property](#8e78cec3c5ief).

## OnSuccess syntax

```
"OnSuccess": {
  "Destination": String
}
```

## OnSuccess property

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Destination

String

Yes

No

The resource descriptor of the destination for the asynchronous invocation.

None

## OnFailure syntax

```
"OnFailure": {
  "Destination": String
}
```

## OnFailure property

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Destination

String

Yes

No

The resource descriptor of the destination for the asynchronous invocation.

None

## Return value

Fn::GetAtt

None

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
  DestinationConfig:
    AssociationPropertyMetadata:
      Parameters:
        OnSuccess:
          AssociationPropertyMetadata:
            Parameters:
              Destination:
                Type: String
                Description:
                  en: Asynchronous invocation target resource descriptor.
                Required: true
                MaxLength: 512
          Type: Json
          Description:
            en: Successful callback target structure.
          Required: false
        OnFailure:
          AssociationPropertyMetadata:
            Parameters:
              Destination:
                Type: String
                Description:
                  en: Asynchronous invocation target resource descriptor.
                Required: true
                MaxLength: 512
          Type: Json
          Description:
            en: Failed callback target structure.
          Required: false
    Type: Json
    Description:
      en: Configuration structure of asynchronous invocation target (optional).
    Required: false
Resources:
  AsyncInvokeConfig:
    Type: ALIYUN::FC3::AsyncInvokeConfig
    Properties:
      FunctionName:
        Ref: FunctionName
      DestinationConfig:
        Ref: DestinationConfig
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
    "DestinationConfig": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "OnSuccess": {
            "AssociationPropertyMetadata": {
              "Parameters": {
                "Destination": {
                  "Type": "String",
                  "Description": {
                    "en": "Asynchronous invocation target resource descriptor."
                  },
                  "Required": true,
                  "MaxLength": 512
                }
              }
            },
            "Type": "Json",
            "Description": {
              "en": "Successful callback target structure."
            },
            "Required": false
          },
          "OnFailure": {
            "AssociationPropertyMetadata": {
              "Parameters": {
                "Destination": {
                  "Type": "String",
                  "Description": {
                    "en": "Asynchronous invocation target resource descriptor."
                  },
                  "Required": true,
                  "MaxLength": 512
                }
              }
            },
            "Type": "Json",
            "Description": {
              "en": "Failed callback target structure."
            },
            "Required": false
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "Configuration structure of asynchronous invocation target (optional)."
      },
      "Required": false
    }
  },
  "Resources": {
    "AsyncInvokeConfig": {
      "Type": "ALIYUN::FC3::AsyncInvokeConfig",
      "Properties": {
        "FunctionName": {
          "Ref": "FunctionName"
        },
        "DestinationConfig": {
          "Ref": "DestinationConfig"
        }
      }
    }
  }
}
                        
```
