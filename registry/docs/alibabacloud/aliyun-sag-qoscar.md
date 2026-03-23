ALIYUN::SAG::QosCar is used to create a traffic throttling rule for a quality of service (QoS) policy.

## Syntax

```
{
  "Type": "ALIYUN::SAG::QosCar",
  "Properties": {
    "MinBandwidthAbs": Integer,
    "Description": String,
    "MaxBandwidthPercent": Integer,
    "Priority": Integer,
    "MaxBandwidthAbs": Integer,
    "QosId": String,
    "PercentSourceType": String,
    "MinBandwidthPercent": Integer,
    "LimitType": String,
    "Name": String
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

MinBandwidthAbs

Integer

No

Yes

The minimum bandwidth.

This property is required when you set the LimitType property to Absolute.

Description

String

No

Yes

The description of the traffic throttling rule.

None.

MaxBandwidthPercent

Integer

No

Yes

The maximum bandwidth percentage.

This property is required when you set the LimitType property to Percent.

Priority

Integer

Yes

Yes

The priority of the traffic throttling rule.

Valid values: 1 to 7.

A smaller value indicates a higher priority.

MaxBandwidthAbs

Integer

No

Yes

The maximum bandwidth.

This property is required when you set the LimitType property to Absolute.

QosId

String

Yes

No

The ID of the QoS policy.

For more information about QoS policies, see [What is a QoS policy?](/help/en/sag/user-guide/what-is-a-qos-policy#concept-1813952 "Smart Access Gateway (SAG) supports quality of service (QoS) policies. QoS policies classify network traffic distributed across applications and services. You can use QoS policies to allocate bandwidth resources based on business requirements and improve network quality.").

PercentSourceType

String

No

Yes

The bandwidth type when traffic is throttled based on a specific range of bandwidth percentage.

Valid values:

-   CcnBandwidth: Cloud Connect Network (CCN) bandwidth
-   InternetUpBandwidth: Internet upstream bandwidth

MinBandwidthPercent

Integer

No

Yes

The minimum bandwidth percentage.

This property is required when you set the LimitType property to Percent.

LimitType

String

Yes

Yes

The type of the traffic throttling rule.

Valid values:

-   Absolute: throttles traffic based on a specific range of bandwidth.
-   Percent: throttles traffic based on a specific range of bandwidth percentage.

Name

String

No

Yes

The name of the traffic throttling rule.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

## Return values

Fn::GetAtt

QosCarId: the ID of the traffic throttling rule for the QoS policy.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "MinBandwidthAbs": {
      "Type": "Number",
      "Description": "The minimum bandwidth. This parameter is required when LimitType is set to Absolute."
    },
    "Description": {
      "Type": "String",
      "Description": "The description of the traffic throttling policy."
    },
    "Priority": {
      "Type": "Number",
      "Description": "The priority of the traffic throttling policy. A smaller value represents a higher\npriority. If policies are assigned the same priority, the one applied the earliest\nprevails. Valid values: 1 to 7.",
      "MinValue": 1,
      "MaxValue": 7
    },
    "MaxBandwidthPercent": {
      "Type": "Number",
      "Description": "The maximum percentage that is based on the maximum upstream bandwidth of the SAG\ninstance.\nThis parameter is required when LimitType is set to Percent."
    },
    "MaxBandwidthAbs": {
      "Type": "Number",
      "Description": "The maximum bandwidth. This parameter is required when LimitType is set to Absolute."
    },
    "QosId": {
      "Type": "String",
      "Description": "The ID of the QoS policy."
    },
    "PercentSourceType": {
      "Type": "String",
      "Description": "If the policy throttles traffic based on a specified bandwidth percentage, the following\noptions are available:\nCcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.\nInternetUpBandwidth: Internet upstream bandwidth.",
      "AllowedValues": [
        "CcnBandwidth",
        "InternetUpBandwidth"
      ]
    },
    "MinBandwidthPercent": {
      "Type": "Number",
      "Description": "The minimum percentage that is based on the maximum upstream bandwidth of the SAG\ninstance.\nThis parameter is required when LimitType is set to Percent."
    },
    "LimitType": {
      "Type": "String",
      "Description": "The type of the traffic throttling policy. Valid values:\nAbsolute: throttles traffic by a specific bandwidth range.\nPercent: throttles traffic by a specific range of bandwidth percentage.",
      "AllowedValues": [
        "Absolute",
        "Percent"
      ]
    },
    "Name": {
      "Type": "String",
      "Description": "The name of the traffic throttling policy. The name must be 2 to 128 characters in\nlength, and can contain Chinese characters, letters, digits, periods (.), underscores\n(_), and hyphens (-)."
    }
  },
  "Resources": {
    "QosCar": {
      "Type": "ALIYUN::SAG::QosCar",
      "Properties": {
        "MinBandwidthAbs": {
          "Ref": "MinBandwidthAbs"
        },
        "Description": {
          "Ref": "Description"
        },
        "Priority": {
          "Ref": "Priority"
        },
        "MaxBandwidthPercent": {
          "Ref": "MaxBandwidthPercent"
        },
        "MaxBandwidthAbs": {
          "Ref": "MaxBandwidthAbs"
        },
        "QosId": {
          "Ref": "QosId"
        },
        "PercentSourceType": {
          "Ref": "PercentSourceType"
        },
        "MinBandwidthPercent": {
          "Ref": "MinBandwidthPercent"
        },
        "LimitType": {
          "Ref": "LimitType"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "QosCarId": {
      "Description": "The ID of the traffic throttling policy.",
      "Value": {
        "Fn::GetAtt": [
          "QosCar",
          "QosCarId"
        ]
      }
    }
  }
}
```
