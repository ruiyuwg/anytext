ALIYUN::GA::LogStoreToEndpointGroupAttachment is used to associate a Simple Log Service (SLS) Logstore with endpoint groups.

## Syntax

```
{
  "Type": "ALIYUN::GA::LogStoreToEndpointGroupAttachment",
  "Properties": {
    "AcceleratorId": String,
    "EndpointGroupIds": List,
    "ListenerId": String,
    "SlsProjectName": String,
    "SlsRegionId": String,
    "SlsLogStoreName": String
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

AcceleratorId

String

Yes

No

The ID of the Global Accelerator (GA) instance.

None.

EndpointGroupIds

List

Yes

No

The IDs of the endpoint groups.

You can specify up to 10 endpoint group IDs.

ListenerId

String

Yes

No

The ID of the listener.

None.

SlsProjectName

String

Yes

No

The name of the SLS project.

None.

SlsRegionId

String

Yes

No

The region ID of the SLS project.

None.

SlsLogStoreName

String

Yes

No

The name of the SLS Logstore.

None.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SlsProjectName:
    Type: String
    Description:
      en: SLS project name.
    Required: true
  EndpointGroupIds:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: Endpoint Group ID List.
    Required: true
    MinLength: 1
    MaxLength: 10
  SlsRegionId:
    Type: String
    Description:
      en: SLS Region ID.
    Required: true
  AcceleratorId:
    Type: String
    Description:
      en: Global Acceleration Instance ID.
    Required: true
  SlsLogStoreName:
    Type: String
    Description:
      en: SLS log library name.
    Required: true
  ListenerId:
    Type: String
    Description:
      en: Listener ID.
    Required: true
Resources:
  LogStoreToEndpointGroupAttachment:
    Type: ALIYUN::GA::LogStoreToEndpointGroupAttachment
    Properties:
      SlsProjectName:
        Ref: SlsProjectName
      EndpointGroupIds:
        Ref: EndpointGroupIds
      SlsRegionId:
        Ref: SlsRegionId
      AcceleratorId:
        Ref: AcceleratorId
      SlsLogStoreName:
        Ref: SlsLogStoreName
      ListenerId:
        Ref: ListenerId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SlsProjectName": {
      "Type": "String",
      "Description": {
        "en": "SLS project name."
      },
      "Required": true
    },
    "EndpointGroupIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "Endpoint Group ID List."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 10
    },
    "SlsRegionId": {
      "Type": "String",
      "Description": {
        "en": "SLS Region ID."
      },
      "Required": true
    },
    "AcceleratorId": {
      "Type": "String",
      "Description": {
        "en": "Global Acceleration Instance ID."
      },
      "Required": true
    },
    "SlsLogStoreName": {
      "Type": "String",
      "Description": {
        "en": "SLS log library name."
      },
      "Required": true
    },
    "ListenerId": {
      "Type": "String",
      "Description": {
        "en": "Listener ID."
      },
      "Required": true
    }
  },
  "Resources": {
    "LogStoreToEndpointGroupAttachment": {
      "Type": "ALIYUN::GA::LogStoreToEndpointGroupAttachment",
      "Properties": {
        "SlsProjectName": {
          "Ref": "SlsProjectName"
        },
        "EndpointGroupIds": {
          "Ref": "EndpointGroupIds"
        },
        "SlsRegionId": {
          "Ref": "SlsRegionId"
        },
        "AcceleratorId": {
          "Ref": "AcceleratorId"
        },
        "SlsLogStoreName": {
          "Ref": "SlsLogStoreName"
        },
        "ListenerId": {
          "Ref": "ListenerId"
        }
      }
    }
  }
}
                        
```
