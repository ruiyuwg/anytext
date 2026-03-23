ALIYUN::FC3::Trigger is used to create a Function Compute 3.0 trigger.

## Syntax

```
{
  "Type": "ALIYUN::FC3::Trigger",
  "Properties": {
    "FunctionName": String,
    "TriggerType": String,
    "TriggerName": String,
    "TriggerConfig": Map,
    "Description": String,
    "InvocationRole": String,
    "Qualifier": String,
    "SourceArn": String
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

The function name.

None.

TriggerType

String

Yes

No

The trigger type.

None.

TriggerName

String

Yes

No

The trigger name.

The name can contain only letters, digits, hyphens (-), and underscores (\_). It must be 1 to 128 characters in length, and cannot start with a digit or hyphen (-).

TriggerConfig

Map

Yes

Yes

The configurations of the trigger.

None.

Description

String

No

Yes

The description of the trigger.

None.

InvocationRole

String

No

Yes

The Resource Access Management (RAM) role that is used by the event source such as Object Storage Service (OSS) to invoke the function.

None.

Qualifier

String

No

Yes

The version or alias of the function.

None.

SourceArn

String

No

No

The Alibaba Cloud Resource Name (ARN) of the event source of the trigger.

None.

## Return values

Fn::GetAtt

-   FunctionName: the function name.
    
-   UrlIntranet: the private endpoint.
    
-   TriggerName: the trigger name.
    
-   TriggerId: the trigger ID.
    
-   UrlInternet: the public endpoint.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TriggerType:
    Type: String
    Description:
      en: Type of the trigger.
    Required: true
  FunctionName:
    Type: String
    Description:
      en: The name of the function.
    Required: true
  TriggerName:
    Type: String
    Description:
      en: Name of the trigger.
    Required: true
  TriggerConfig:
    Type: Json
    Description:
      en: Trigger config.
    Required: true
Resources:
  Trigger:
    Type: ALIYUN::FC3::Trigger
    Properties:
      TriggerType:
        Ref: TriggerType
      FunctionName:
        Ref: FunctionName
      TriggerName:
        Ref: TriggerName
      TriggerConfig:
        Ref: TriggerConfig
Outputs:
  FunctionName:
    Description: Function name.
    Value:
      Fn::GetAtt:
        - Trigger
        - FunctionName
  UrlIntranet:
    Description: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
    Value:
      Fn::GetAtt:
        - Trigger
        - UrlIntranet
  TriggerName:
    Description: Trigger name.
    Value:
      Fn::GetAtt:
        - Trigger
        - TriggerName
  TriggerId:
    Description: The trigger ID.
    Value:
      Fn::GetAtt:
        - Trigger
        - TriggerId
  UrlInternet:
    Description: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
    Value:
      Fn::GetAtt:
        - Trigger
        - UrlInternet
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TriggerType": {
      "Type": "String",
      "Description": {
        "en": "Type of the trigger."
      },
      "Required": true
    },
    "FunctionName": {
      "Type": "String",
      "Description": {
        "en": "The name of the function."
      },
      "Required": true
    },
    "TriggerName": {
      "Type": "String",
      "Description": {
        "en": "Name of the trigger."
      },
      "Required": true
    },
    "TriggerConfig": {
      "Type": "Json",
      "Description": {
        "en": "Trigger config."
      },
      "Required": true
    }
  },
  "Resources": {
    "Trigger": {
      "Type": "ALIYUN::FC3::Trigger",
      "Properties": {
        "TriggerType": {
          "Ref": "TriggerType"
        },
        "FunctionName": {
          "Ref": "FunctionName"
        },
        "TriggerName": {
          "Ref": "TriggerName"
        },
        "TriggerConfig": {
          "Ref": "TriggerConfig"
        }
      }
    }
  },
  "Outputs": {
    "FunctionName": {
      "Description": "Function name.",
      "Value": {
        "Fn::GetAtt": [
          "Trigger",
          "FunctionName"
        ]
      }
    },
    "UrlIntranet": {
      "Description": "The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.",
      "Value": {
        "Fn::GetAtt": [
          "Trigger",
          "UrlIntranet"
        ]
      }
    },
    "TriggerName": {
      "Description": "Trigger name.",
      "Value": {
        "Fn::GetAtt": [
          "Trigger",
          "TriggerName"
        ]
      }
    },
    "TriggerId": {
      "Description": "The trigger ID.",
      "Value": {
        "Fn::GetAtt": [
          "Trigger",
          "TriggerId"
        ]
      }
    },
    "UrlInternet": {
      "Description": "The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.",
      "Value": {
        "Fn::GetAtt": [
          "Trigger",
          "UrlInternet"
        ]
      }
    }
  }
}
                        
```
