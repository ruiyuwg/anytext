ALIYUN::Config::DeliveryChannel is used to create or update a delivery channel.

## Syntax

```
{
  "Type": "ALIYUN::Config::DeliveryChannel",
  "Properties": {
    "Description": String,
    "DeliveryChannelName": String,
    "DeliveryChannelTargetArn": String,
    "DeliveryChannelAssumeRoleArn": String,
    "DeliveryChannelType": String,
    "DeliveryChannelCondition": String
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

DeliveryChannelAssumeRoleArn

String

Yes

Yes

The Alibaba Cloud Resource Name (ARN) of the role that you want to assign to the delivery channel.

If you assign the service-linked role of Cloud Config to the delivery channel, you can specify the ARN in the format of the provided example and replace the account ID with the ID of your Alibaba Cloud account. Example: "acs:ram::100931896542\*\*\*\*:role/aliyunserviceroleforconfig".

DeliveryChannelTargetArn

String

Yes

Yes

The ARN of the delivery destination.

Value formats:

-   Value format when the delivery destination is an Object Storage Service (OSS) bucket: `acs:oss:{RegionId}:{Aliuid}:{bucketName}`.
    
-   Value format when the delivery destination is a Message Service (MNS) topic: `acs:mns:{RegionId}:{Aliuid}:/topics/{topicName}`.
    
-   Value format when the delivery destination is a Simple Log Service (SLS) Logstore: `acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName}`.
    

DeliveryChannelType

String

Yes

No

The type of the delivery channel.

Valid values:

-   OSS
    
-   MNS
    
-   SLS
    

DeliveryChannelCondition

String

No

Yes

The rule that you want to attach to the delivery channel.

This property is supported only for delivery channels of the MNS type.

You can use this property to specify the lowest risk level and the resource types of the events to which you want to subscribe.

-   Sample settings when you use this property to specify the lowest risk level of the events: `{"filterType":"RuleRiskLevel","value":"1","multiple":false}`. The "value" field specifies the lowest risk level of the events. Valid values:
    
    -   1: high
        
    -   2: medium
        
    -   3: low
        
-   Sample settings when you use this property to specify the resource types of the events: `{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}`. The "values" field specifies the resource types of the events. The field value is a JSON array. Example: `[{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]`.
    

DeliveryChannelName

String

No

Yes

The name of the delivery channel.

None.

Description

String

No

Yes

The description of the delivery channel.

None.

## Return values

Fn::GetAtt

DeliveryChannelId: the ID of the delivery channel.

## Examples

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Type": "String",
      "Description": "The description of the delivery method."
    },
    "DeliveryChannelName": {
      "Type": "String",
      "Description": "The name of the delivery method."
    },
    "DeliveryChannelTargetArn": {
      "Type": "String",
      "Description": "The ARN of the delivery destination. This parameter is required when you create a\ndelivery method. The value must be in one of the following formats:\nacs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.\nacs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.\nacs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore."
    },
    "DeliveryChannelAssumeRoleArn": {
      "Type": "String",
      "Description": "The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.\nThis parameter is required when you create a delivery method.\nNote If the delivery method assumes the service linked role for Cloud Config, you can specify\nthe ARN in the format of the provided example and replace the account ID with the\nID of your Alibaba Cloud account."
    },
    "DeliveryChannelType": {
      "Type": "String",
      "Description": "The type of the delivery method. This parameter is required when you create a delivery\nmethod. Valid values:\nOSS\nMNS\nSLS",
      "AllowedValues": [
        "MNS",
        "OSS",
        "SLS"
      ]
    },
    "DeliveryChannelCondition": {
      "Type": "String",
      "Description": "The rule attached to the delivery method. This parameter is applicable only to delivery\nmethods of the MNS type.\nThis parameter allows you to specify the lowest risk level for the events to subscribe\nto and the resource types for which you want to subscribe to events.\nTo specify the lowest risk level for the events to subscribe to, use the following\nformat:{\"filterType\":\"RuleRiskLevel\",\"value\":\"1\",\"multiple\":false}.\nThe value field indicates the lowest risk level and can be set to 1, 2, or 3, which\nindicates the high risk level, the medium risk level, and the low risk level, respectively.\nTo specify the resource types for which you want to subscribe to events, use the following\nformat:{\"filterType\":\"ResourceType\",\"values\":[\"ACS::ACK::Cluster\",\"ACS::ActionTrail::Trail\",\"ACS::CBWP::CommonBandwidthPackage\"],\"multiple\":true}.\nThe values field indicates the resource types. Its value is a JSON array.\nExample: [{\"filterType\":\"ResourceType\",\"values\":[\"ACS::ActionTrail::Trail\",\"ACS::CBWP::CommonBandwidthPackage\",\"ACS::CDN::Domain\",\"ACS::CEN::CenBandwidthPackage\",\"ACS::CEN::CenInstance\",\"ACS::CEN::Flowlog\",\"ACS::DdosCoo::Instance\"],\"multiple\":true}]"
    }
  },
  "Resources": {
    "DeliveryChannel": {
      "Type": "ALIYUN::Config::DeliveryChannel",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "DeliveryChannelName": {
          "Ref": "DeliveryChannelName"
        },
        "DeliveryChannelTargetArn": {
          "Ref": "DeliveryChannelTargetArn"
        },
        "DeliveryChannelAssumeRoleArn": {
          "Ref": "DeliveryChannelAssumeRoleArn"
        },
        "DeliveryChannelType": {
          "Ref": "DeliveryChannelType"
        },
        "DeliveryChannelCondition": {
          "Ref": "DeliveryChannelCondition"
        }
      }
    }
  },
  "Outputs": {
    "DeliveryChannelId": {
      "Description": "The ID of the delivery method. ",
      "Value": {
        "Fn::GetAtt": [
          "DeliveryChannel",
          "DeliveryChannelId"
        ]
      }
    }
  }
}
```

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DeliveryChannelAssumeRoleArn:
    Description: 'The Alibaba Cloud Resource Name (ARN) of the role to be assumed
      by the delivery method.

      This parameter is required when you create a delivery method.

      Note If the delivery method assumes the service linked role for Cloud Config,
      you can specify

      the ARN in the format of the provided example and replace the account ID with
      the

      ID of your Alibaba Cloud account.'
    Type: String
  DeliveryChannelCondition:
    Description: 'The rule attached to the delivery method. This parameter is applicable
      only to delivery

      methods of the MNS type.

      This parameter allows you to specify the lowest risk level for the events to
      subscribe

      to and the resource types for which you want to subscribe to events.

      To specify the lowest risk level for the events to subscribe to, use the following

      format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.

      The value field indicates the lowest risk level and can be set to 1, 2, or 3,
      which

      indicates the high risk level, the medium risk level, and the low risk level,
      respectively.

      To specify the resource types for which you want to subscribe to events, use
      the following

      format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.

      The values field indicates the resource types. Its value is a JSON array.

      Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]'
    Type: String
  DeliveryChannelName:
    Description: The name of the delivery method.
    Type: String
  DeliveryChannelTargetArn:
    Description: 'The ARN of the delivery destination. This parameter is required
      when you create a

      delivery method. The value must be in one of the following formats:

      acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an
      Object Storage Service (OSS) bucket.

      acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination
      is a Message Service (MNS) topic.

      acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if
      your delivery destination is a Log Service Logstore.'
    Type: String
  DeliveryChannelType:
    AllowedValues:
    - MNS
    - OSS
    - SLS
    Description: 'The type of the delivery method. This parameter is required when
      you create a delivery

      method. Valid values:

      OSS

      MNS

      SLS'
    Type: String
  Description:
    Description: The description of the delivery method.
    Type: String
Resources:
  DeliveryChannel:
    Properties:
      DeliveryChannelAssumeRoleArn:
        Ref: DeliveryChannelAssumeRoleArn
      DeliveryChannelCondition:
        Ref: DeliveryChannelCondition
      DeliveryChannelName:
        Ref: DeliveryChannelName
      DeliveryChannelTargetArn:
        Ref: DeliveryChannelTargetArn
      DeliveryChannelType:
        Ref: DeliveryChannelType
      Description:
        Ref: Description
    Type: ALIYUN::Config::DeliveryChannel
Outputs:
  DeliveryChannelId:
    Description: 'The ID of the delivery method. '
    Value:
      Fn::GetAtt:
      - DeliveryChannel
      - DeliveryChannelId
```
