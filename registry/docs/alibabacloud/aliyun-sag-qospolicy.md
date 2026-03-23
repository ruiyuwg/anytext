ALIYUN::SAG::QosPolicy is used to create a traffic classification rule for a quality of service (QoS) policy.

## Syntax

```
{
  "Type": "ALIYUN::SAG::QosPolicy",
  "Properties": {
    "Description": String,
    "EndTime": String,
    "SourcePortRange": String,
    "SourceCidr": String,
    "Priority": Integer,
    "StartTime": String,
    "DestPortRange": String,
    "DpiGroupIds": List,
    "Name": String,
    "DestCidr": String,
    "DpiSignatureIds": List,
    "QosId": String,
    "IpProtocol": String
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

Description

String

No

Yes

The description of the traffic classification rule.

The description must be 1 to 512 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The description must start with a letter.

EndTime

String

No

Yes

The time at which the traffic classification rule becomes invalid.

Specify the time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in the `YYYY-MM-DDThh:mm:ss+0800` format. The time must be in UTC+8.

SourcePortRange

String

Yes

Yes

The range of the source port.

Valid values: -1, and 1 to 65535.

Examples:

-   1/200: port 1 to port 200
-   80/80: port 80
-   \-1/-1: all ports

SourceCidr

String

Yes

Yes

The source CIDR block.

Example: 192.168.1.0/24.

Priority

Integer

Yes

Yes

The priority of the traffic throttling rule to which the traffic classification rule belongs.

Valid values: 1 to 3.

A smaller value indicates a higher priority.

StartTime

String

No

Yes

The start time at which the traffic classification rule takes effect.

Specify the time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in the `YYYY-MM-DDThh:mm:ss+0800` format. The time must be in UTC+8.

DestPortRange

String

Yes

Yes

The range of the destination port.

Valid values: -1, and 1 to 65535.

Examples:

-   1/200: port 1 to port 200
-   80/80: port 80
-   \-1/-1: all ports

DpiGroupIds

List

No

Yes

The IDs of application groups.

Valid values: 1 to 100.

You can call the [ListDpiGroups](/help/en/sag/api-listdpigroups#doc-api-Smartag-ListDpiGroups "Queries the information about application groups supported by Smart Access Gateway (SAG) instances in a specified region.") operation to query the IDs of application groups.

Name

String

No

Yes

The name of the traffic classification rule.

The name must be 2 to 100 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_). The name must start with a letter.

DestCidr

String

Yes

Yes

The destination CIDR block.

Specify a CIDR block for this property. Example: 192.168.1.0/24.

DpiSignatureIds

List

No

Yes

The ID of the application.

Valid values: 1 to 100.

You can call the [ListDpiSignatures](/help/en/sag/api-listdpisignatures#doc-api-Smartag-ListDpiSignatures "Queries application information in a specified region, information about a specified application group, or information about applications supported by a specified Smart Access Gateway (SAG) instance in a specified region.") operation to query application IDs.

QosId

String

Yes

No

The ID of the QoS policy.

None.

IpProtocol

String

Yes

Yes

The type of the protocol that is applied to the traffic classification rule.

You can specify this property based on the protocol types that are provided in the SAG console.

## Return values

Fn::GetAtt

QosPolicyId: the ID of the traffic classification rule.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EndTime": {
      "Type": "String",
      "Description": "The time when the traffic classification rule becomes invalid.\nSpecify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.\nThe time must be in UTC+8.",
      "Default": "2019-09-14T16:41:33+0800"
    },
    "SourcePortRange": {
      "Type": "String",
      "Description": "The range of source ports.\nValid values: 1 to 65535 and -1.\nSet this parameter in one of the following formats:\n1/200: a port range from 1 to 200\n80/80: port 80\n-1/-1: all ports",
      "Default": "80/80"
    },
    "SourceCidr": {
      "Type": "String",
      "Description": "The range of the source IP addresses.\nSpecify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.",
      "Default": "10.10.10.0/24"
    },
    "Priority": {
      "Type": "Number",
      "Description": "The priority of the traffic throttling policy to which the traffic classification\nrule belongs.",
      "Default": 3
    },
    "StartTime": {
      "Type": "String",
      "Description": "The time when the traffic classification rule takes effect.\nSpecify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.\nThe time must be in UTC+8.",
      "Default": "2019-07-14T16:41:33+0800"
    },
    "DestPortRange": {
      "Type": "String",
      "Description": "The range of destination ports.\nValid values: 1 to 65535 and -1.\nSet this parameter in one of the following formats:\n1/200: a port range from 1 to 200\n80/80: port 80\n-1/-1: all ports",
      "Default": "80/80"
    },
    "DpiGroupIds": {
      "Type": "Json",
      "Description": "The ID of the application group.\nYou can enter at most 100 application group IDs at a time.\nYou can call the ListDpiGroups operation to query application group IDs and information about the applications.",
      "MaxLength": 100,
      "Default": ["20"]
    },
    "Name": {
      "Type": "String",
      "Description": "The name of the traffic classification rule.\nThe name must be 2 to 100 characters in length, and can contain digits, underscores\n(_), and hyphens (-). It must start with a letter.",
      "Default": "test"
    },
    "DestCidr": {
      "Type": "String",
      "Description": "The range of the destination IP addresses.\nSpecify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.",
      "Default": "10.10.20.0/24"
    },
    "DpiSignatureIds": {
      "Type": "Json",
      "Description": "The ID of the application.\nYou can enter at most 100 application IDs at a time.\nYou can call the ListDpiSignatures operation to query application IDs and information about the applications.",
      "MaxLength": 100,
      "Default": ["1"]
    },
    "QosId": {
      "Type": "String",
      "Description": "The ID of the QoS policy.",
      "Default": "qos-xitd8690ucu8ro****"
    },
    "IpProtocol": {
      "Type": "String",
      "Description": "The type of the protocol that applies to the traffic classification rule.\nThe supported protocols provided in this topic are for reference only. The actual\nprotocols in the console shall prevail.",
      "Default": "TCP"
    }
  },
  "Resources": {
    "QosPolicy": {
      "Type": "ALIYUN::SAG::QosPolicy",
      "Properties": {
        "EndTime": {
          "Ref": "EndTime"
        },
        "SourcePortRange": {
          "Ref": "SourcePortRange"
        },
        "SourceCidr": {
          "Ref": "SourceCidr"
        },
        "Priority": {
          "Ref": "Priority"
        },
        "StartTime": {
          "Ref": "StartTime"
        },
        "DestPortRange": {
          "Ref": "DestPortRange"
        },
        "DpiGroupIds": {
          "Ref": "DpiGroupIds"
        },
        "Name": {
          "Ref": "Name"
        },
        "DestCidr": {
          "Ref": "DestCidr"
        },
        "DpiSignatureIds": {
          "Ref": "DpiSignatureIds"
        },
        "QosId": {
          "Ref": "QosId"
        },
        "IpProtocol": {
          "Ref": "IpProtocol"
        }
      }
    }
  },
  "Outputs": {
    "QosPolicyId": {
      "Description": "The ID of the traffic classification rule.",
      "Value": {
        "Fn::GetAtt": [
          "QosPolicy",
          "QosPolicyId"
        ]
      }
    }
  }
}
```
